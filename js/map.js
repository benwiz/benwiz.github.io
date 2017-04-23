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
    fills: {
        defaultFill: '#444444',
        USA: 'blue',
        RUS: 'red'
    }
});

map.bubbles([
    {
        name: 'Not a bomb, but centered on Brazil',
        radius: 5,
        fillKey: 'USA',
        centered: 'BRA'
    },
    {
        name: 'Not a bomb',
        radius: 5,
        fillKey: 'USA',
        latitude: 29.926596,
        longitude: -90.081299
    },
    {
        name: 'Castle Bravo',
        radius: 5,
        latitude: 11.415,
        longitude: 165.1619
    },{
        name: 'Tsar Bomba',
        radius: 10,
        fillKey: 'RUS',
        latitude: 73.482,
        longitude: 54.5854
    }
], {
    popupTemplate: function(geo, data) {
        return null; // '<div>' + data + '</div>';
    }
});
