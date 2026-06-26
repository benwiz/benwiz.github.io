(async () => {
  // --- Map setup ---
  const map = new maplibregl.Map({
    container: 'map',
    style: {
      version: 8,
      sources: {
        carto: {
          type: 'raster',
          tiles: [
            'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
            'https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
            'https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
          ],
          tileSize: 256,
          attribution:
            '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/attributions">CARTO</a>',
        },
      },
      layers: [{ id: 'basemap', type: 'raster', source: 'carto' }],
    },
    center: [15, 25],
    zoom: 2,
    minZoom: 1,
    maxZoom: 16,
    pitchWithRotate: false,
    dragRotate: false,
  });

  // Disable map rotation via touch
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

  document.getElementById('stat').textContent =
    `${locations.length} places`;

  // --- Source ---
  map.addSource('places', {
    type: 'geojson',
    data: geojson,
    cluster: true,
    clusterMaxZoom: 10,
    clusterRadius: 48,
  });

  // --- Layers ---

  // Cluster glow (soft halo behind cluster circle)
  map.addLayer({
    id: 'cluster-glow',
    type: 'circle',
    source: 'places',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': '#ff6b35',
      'circle-radius': ['step', ['get', 'point_count'], 28, 20, 36, 100, 46],
      'circle-opacity': 0.1,
      'circle-blur': 0.6,
    },
  });

  // Cluster circles
  map.addLayer({
    id: 'clusters',
    type: 'circle',
    source: 'places',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': '#ff6b35',
      'circle-radius': ['step', ['get', 'point_count'], 14, 20, 19, 100, 26],
      'circle-opacity': 0.82,
      'circle-stroke-width': 1.5,
      'circle-stroke-color': 'rgba(255, 255, 255, 0.2)',
    },
  });

  // Individual dot glow
  map.addLayer({
    id: 'unclustered-glow',
    type: 'circle',
    source: 'places',
    filter: ['!', ['has', 'point_count']],
    paint: {
      'circle-color': '#ff6b35',
      'circle-radius': [
        'interpolate', ['linear'], ['zoom'],
        2, 10,
        8, 14,
        12, 18,
      ],
      'circle-opacity': 0.1,
      'circle-blur': 0.8,
    },
  });

  // Individual dots
  map.addLayer({
    id: 'unclustered',
    type: 'circle',
    source: 'places',
    filter: ['!', ['has', 'point_count']],
    paint: {
      'circle-color': '#ff6b35',
      'circle-radius': [
        'interpolate', ['linear'], ['zoom'],
        2, 3.5,
        8, 5,
        12, 7,
      ],
      'circle-stroke-width': 1.5,
      'circle-stroke-color': 'rgba(255, 255, 255, 0.35)',
      'circle-opacity': 0.92,
    },
  });

  // --- Interactions ---

  // Click cluster → zoom in
  map.on('click', 'clusters', async (e) => {
    const [feature] = e.features;
    const clusterId = feature.properties.cluster_id;
    try {
      const zoom = await map.getSource('places').getClusterExpansionZoom(clusterId);
      map.easeTo({
        center: feature.geometry.coordinates,
        zoom: zoom + 0.5,
        duration: 400,
      });
    } catch (_) {
      map.easeTo({ center: feature.geometry.coordinates, zoom: map.getZoom() + 2 });
    }
  });

  // Tap/click individual point → toast
  map.on('click', 'unclustered', (e) => {
    showToast(e.features[0].properties.name);
  });

  // Desktop hover cursors
  ['clusters', 'cluster-glow'].forEach((layer) => {
    map.on('mouseenter', layer, () => (map.getCanvas().style.cursor = 'pointer'));
    map.on('mouseleave', layer, () => (map.getCanvas().style.cursor = ''));
  });

  map.on('mouseenter', 'unclustered', (e) => {
    map.getCanvas().style.cursor = 'pointer';
    showToast(e.features[0].properties.name);
  });
  map.on('mouseleave', 'unclustered', () => {
    map.getCanvas().style.cursor = '';
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
