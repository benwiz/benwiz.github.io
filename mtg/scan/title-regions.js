// Find bright, low-saturation title panels. This is a geometric candidate
// detector, not card identification; only OCR + catalog matches are collected.
export function titleRegions(image, broad = false) {
  const { width, height, data } = image;
  const mask = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  for (let i = 0; i < mask.length; i++) {
    const offset = i * 4;
    const low = Math.min(data[offset], data[offset + 1], data[offset + 2]);
    const high = Math.max(data[offset], data[offset + 1], data[offset + 2]);
    mask[i] = low > (broad ? 105 : 130) && high - low < (broad ? 115 : 60) ? 1 : 0;
  }
  // Break thin pale frame borders that otherwise join a title to its artwork.
  const original = mask.slice();
  for (let y = 1; y < height - 1; y++) for (let x = 1; x < width - 1; x++) {
    const i = y * width + x;
    mask[i] = original[i] && original[i - 1] && original[i + 1] && original[i - width] && original[i + width] ? 1 : 0;
  }
  const regions = [];
  for (let seed = 0; seed < mask.length; seed++) {
    if (!mask[seed]) continue;
    let head = 0, tail = 1, x0 = width, y0 = height, x1 = 0, y1 = 0;
    let sx = 0, sy = 0, sxx = 0, syy = 0, sxy = 0;
    queue[0] = seed; mask[seed] = 0;
    while (head < tail) {
      const index = queue[head++], x = index % width, y = Math.floor(index / width);
      x0 = Math.min(x0, x); x1 = Math.max(x1, x);
      y0 = Math.min(y0, y); y1 = Math.max(y1, y);
      sx += x; sy += y; sxx += x * x; syy += y * y; sxy += x * y;
      for (const next of [x > 0 ? index - 1 : -1, x + 1 < width ? index + 1 : -1, y > 0 ? index - width : -1, y + 1 < height ? index + width : -1]) {
        if (next >= 0 && mask[next]) { mask[next] = 0; queue[tail++] = next; }
      }
    }
    const w = x1 - x0 + 1, h = y1 - y0 + 1;
    if (w < Math.max(75, width * .035) || h < 6 || w / h < 2.8 || w / h > 32 || tail / (w * h) < .3 || w * h > width * height * .08) continue;
    const mx = sx / tail, my = sy / tail;
    const angle = .5 * Math.atan2(2 * (sxy / tail - mx * my), sxx / tail - mx * mx - syy / tail + my * my);
    if (Math.abs(angle) > Math.PI / 7) continue;
    const cos = Math.cos(angle), sin = Math.sin(angle);
    let minU = Infinity, maxU = -Infinity, minV = Infinity, maxV = -Infinity;
    for (let i = 0; i < tail; i++) {
      const x = queue[i] % width - mx, y = Math.floor(queue[i] / width) - my;
      const u = x * cos + y * sin, v = -x * sin + y * cos;
      minU = Math.min(minU, u); maxU = Math.max(maxU, u);
      minV = Math.min(minV, v); maxV = Math.max(maxV, v);
    }
    const orientedWidth = maxU - minU, orientedHeight = maxV - minV;
    if (orientedWidth / orientedHeight < 3.2) continue;
    const u = (minU + maxU) / 2, v = (minV + maxV) / 2;
    regions.push({ x0, y0, x1, y1, cx: mx + u * cos - v * sin, cy: my + u * sin + v * cos, width: orientedWidth, height: orientedHeight, angle });
  }
  return regions.sort((a, b) => a.y0 - b.y0 || a.x0 - b.x0).slice(0, 100);
}

export function cropTitle(source, region) {
  const crop = document.createElement('canvas');
  // Title text is small in table photos; scale before OCR and straighten it.
  const scale = Math.max(2, Math.min(5, 900 / region.width));
  // Mana symbols occupy the right edge and confuse line recognition.
  crop.width = Math.round(region.width * (region.manual ? 1 : .86) * scale);
  crop.height = Math.round(Math.max(10, region.height - (region.manual ? 0 : 2)) * scale);
  const context = crop.getContext('2d');
  context.fillStyle = 'white'; context.fillRect(0, 0, crop.width, crop.height);
  context.translate(crop.width / 2, crop.height / 2);
  context.scale(scale, scale); context.rotate(-region.angle);
  context.drawImage(source, -region.cx + region.width * (region.manual ? 0 : .06) * Math.cos(region.angle), -region.cy + region.width * (region.manual ? 0 : .06) * Math.sin(region.angle));
  return crop;
}
