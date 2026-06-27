(async () => {
  // --- Color schemes ---
  const DARK = {
    tiles: [
      'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
      'https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
      'https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
    ],
    dotColor: '#ff6b35',
    strokeColor: 'rgba(255, 255, 255, 0.35)',
  };

  const LIGHT = {
    tiles: [
      'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
      'https://b.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
      'https://c.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    ],
    dotColor: '#2563eb',
    strokeColor: 'rgba(255, 255, 255, 0.7)',
  };

  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const scheme = () => (mq.matches ? DARK : LIGHT);

  function buildStyle(s) {
    return {
      version: 8,
      sources: {
        carto: {
          type: 'raster',
          tiles: s.tiles,
          tileSize: 256,
          attribution:
            '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/attributions">CARTO</a>',
        },
      },
      layers: [{ id: 'basemap', type: 'raster', source: 'carto' }],
    };
  }

  // --- Map setup ---
  const map = new maplibregl.Map({
    container: 'map',
    style: buildStyle(scheme()),
    center: [15, 25],
    zoom: 2,
    minZoom: 1,
    maxZoom: 16,
    pitchWithRotate: false,
    dragRotate: false,
  });

  map.touchZoomRotate.disableRotation();

  // --- Load data in parallel with map ---
  const [, yamlText] = await Promise.all([
    new Promise((resolve) => map.on('load', resolve)),
    fetch('locations.yml').then((r) => r.text()),
  ]);

  const { locations } = jsyaml.load(yamlText);

  const geojson = {
    type: 'FeatureCollection',
    features: locations.map((loc) => ({
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [loc.lng, loc.lat] },
      properties: { name: loc.name },
    })),
  };

  document.getElementById('stat').textContent = `${locations.length} places`;

  // --- Layer management ---
  let handlers = null;

  function addLayers(s) {
    // Clean up old layer handlers before style swap
    if (handlers) {
      map.off('click', 'dots', handlers.click);
      map.off('mouseenter', 'dots', handlers.enter);
      map.off('mouseleave', 'dots', handlers.leave);
    }

    map.addSource('places', { type: 'geojson', data: geojson });

    map.addLayer({
      id: 'dot-glow',
      type: 'circle',
      source: 'places',
      paint: {
        'circle-color': s.dotColor,
        'circle-radius': ['interpolate', ['linear'], ['zoom'], 2, 10, 8, 14, 12, 18],
        'circle-opacity': 0.1,
        'circle-blur': 0.8,
      },
    });

    map.addLayer({
      id: 'dots',
      type: 'circle',
      source: 'places',
      paint: {
        'circle-color': s.dotColor,
        'circle-radius': ['interpolate', ['linear'], ['zoom'], 2, 3.5, 8, 5, 12, 7],
        'circle-stroke-width': 1.5,
        'circle-stroke-color': s.strokeColor,
        'circle-opacity': 0.92,
      },
    });

    handlers = {
      click: (e) => showToast(e.features[0].properties.name),
      enter: (e) => {
        map.getCanvas().style.cursor = 'pointer';
        showToast(e.features[0].properties.name);
      },
      leave: () => { map.getCanvas().style.cursor = ''; },
    };

    map.on('click', 'dots', handlers.click);
    map.on('mouseenter', 'dots', handlers.enter);
    map.on('mouseleave', 'dots', handlers.leave);
  }

  addLayers(scheme());

  // --- Swap on system preference change ---
  mq.addEventListener('change', () => {
    const s = scheme();
    map.setStyle(buildStyle(s));
    map.once('styledata', () => addLayers(s));
  });

  // --- Toast ---
  const toast = document.getElementById('toast');
  let toastTimer = null;

  function showToast(text) {
    clearTimeout(toastTimer);
    toast.textContent = text;
    toast.classList.add('visible');
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 3000);
  }
})();
