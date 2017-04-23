// http://datamaps.github.io/

var map = new Datamap({
    element: document.getElementById('map-container'),
    geographyConfig: {
        dataUrl: null, // if not null, datamaps will fetch the map JSON (currently only supports topojson)
        hideAntarctica: true,
        borderWidth: 1,
        borderOpacity: 1,
        borderColor: '#444444',
        popupOnHover: false,
        highlightOnHover: false
    },
    bubblesConfig: {
        borderWidth: 0,
        // borderOpacity: 1,
        // borderColor: '#FFFFFF',
        // popupOnHover: true,
        // radius: null,
        // popupTemplate: function(geography, data) {
        //   return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
        // },
        // fillOpacity: 0.75,
        // animate: true,
        // highlightOnHover: true,
        highlightFillColor: 'cyan',
        // highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
        // highlightBorderWidth: 2,
        // highlightBorderOpacity: 1,
        // highlightFillOpacity: 0.85,
        // exitDelay: 100,
        // key: JSON.stringify
    },
    fills: {
        defaultFill: '#444444',
        light: '#FFFFFF',
        dark: '#777777'
    }
});

map.bubbles([
    {
        name: 'Brazil',
        radius: 5,
        fillKey: 'light',
        centered: 'BRA'
    },
    {
        name: 'New Orleans',
        radius: 10,
        fillKey: 'light',
        latitude: 29.926596,
        longitude: -90.081299
    },
    {
        name: 'idk1',
        radius: 5,
        fillKey: 'light',
        latitude: 11.415,
        longitude: 165.1619
    },
    {
        name: 'idk2',
        radius: 5,
        fillKey: 'light',
        latitude: 73.482,
        longitude: 54.5854
    },
    {
        name: 'idk3',
        radius: 5,
        fillKey: 'dark',
        centered: 'USA'
    }
], {
    popupTemplate: function(geo, data) {
        return null; // '<div>' + data + '</div>';
    }
});
