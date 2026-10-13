// Boxes describe candidate title strips, not whole-card detection.
export function titleBoxes(svg) {
  const ns = 'http://www.w3.org/2000/svg';
  let panels = [];
  let viewport = '', misses = 0;
  function add(bbox, state = 'candidate', name = '') {
    const rect = document.createElementNS(ns, 'path');
    const { x0: x, y0: y } = bbox;
    const w = Math.max(1, bbox.x1 - x), h = Math.max(1, bbox.y1 - y);
    const a = Math.min(w / 4, h * .65), b = Math.min(h / 3, a);
    rect.setAttribute('d', state === 'captured' ? `M${x} ${y}H${x+w}V${y+h}H${x}Z`
      : `M${x} ${y+b}V${y}H${x+a} M${x+w-a} ${y}H${x+w}V${y+b} M${x+w} ${y+h-b}V${y+h}H${x+w-a} M${x+a} ${y+h}H${x}V${y+h-b}`);
    rect.classList.add(state);
    rect.setAttribute('aria-label', state === 'recognized' ? `Recognized ${name}` : state === 'captured' ? 'Captured' : 'Area to check');
    rect.setAttribute('vector-effect', 'non-scaling-stroke');
    const outline = rect.cloneNode(); outline.setAttribute('class', 'box-outline');
    outline.removeAttribute('aria-label'); outline.setAttribute('aria-hidden', 'true');
    svg.append(outline, rect);
    let caption;
    if (state === 'captured') {
      caption = document.createElementNS(ns, 'text'); caption.textContent = 'Captured';
      caption.setAttribute('x', x + 6); caption.setAttribute('y', Math.max(22, y - 6));
      caption.setAttribute('class', 'capture-box-label'); caption.setAttribute('aria-hidden', 'true');
      svg.append(caption);
    }
    panels.push({ bbox, rect, caption });
    return rect;
  }
  return {
    candidates(regions, width, height) {
      const nextViewport = `${width}:${height}`;
      if (!regions.length && panels.length && viewport === nextViewport && ++misses < 3) return;
      if (regions.length) misses = 0;
      // Keep paths mounted when geometry only jitters by a few pixels. Rebuilding
      // every preview sample makes unchanged cards appear to flash red.
      if (viewport === nextViewport && regions.length === panels.length && regions.every((region, index) =>
        ['x0', 'x1', 'y0', 'y1'].every(key => Math.abs(region[key] - panels[index].bbox[key]) <= 3))) {
        for (const { rect, caption } of panels) {
          rect.classList.replace('recognized', 'candidate'); rect.setAttribute('aria-label', 'Area to check');
          rect.classList.replace('captured', 'candidate');
          if (caption) { caption.textContent = ''; caption.setAttribute('display', 'none'); }
        }
        return;
      }
      svg.replaceChildren(); panels = [];
      viewport = nextViewport;
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
      for (const region of regions) {
        const duplicate = panels.some(({ bbox }) => {
          const overlap = Math.max(0, Math.min(bbox.x1, region.x1) - Math.max(bbox.x0, region.x0))
            * Math.max(0, Math.min(bbox.y1, region.y1) - Math.max(bbox.y0, region.y0));
          const smaller = Math.min((bbox.x1 - bbox.x0) * (bbox.y1 - bbox.y0),
            (region.x1 - region.x0) * (region.y1 - region.y0));
          return smaller > 0 && overlap > smaller * .8;
        });
        if (!duplicate) add(region);
      }
    },
    captured(regions, width, height) {
      svg.replaceChildren(); panels = []; viewport = `${width}:${height}`; misses = 0;
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
      for (const region of regions.length ? regions : [{ x0: 4, y0: 4, x1: width - 4, y1: height - 4 }]) add(region, 'captured');
    },
    recognized(match) {
      let found = false;
      for (const { bbox, rect, caption } of panels) {
        const overlap = Math.max(0, Math.min(bbox.x1, match.bbox.x1) - Math.max(bbox.x0, match.bbox.x0))
          * Math.max(0, Math.min(bbox.y1, match.bbox.y1) - Math.max(bbox.y0, match.bbox.y0));
        const smaller = Math.min((bbox.x1 - bbox.x0) * (bbox.y1 - bbox.y0),
          (match.bbox.x1 - match.bbox.x0) * (match.bbox.y1 - match.bbox.y0));
        if (smaller <= 0 || overlap < smaller * .25) continue;
        rect.classList.replace('candidate', 'recognized');
        rect.classList.replace('captured', 'recognized');
        if (caption) { caption.textContent = 'Recognized'; caption.removeAttribute('display'); }
        rect.setAttribute('aria-label', `Recognized ${match.name}`); found = true;
      }
      if (!found) add(match.bbox, 'recognized', match.name);
    },
    clear() { svg.replaceChildren(); panels = []; viewport = ''; misses = 0; },
  };
}
