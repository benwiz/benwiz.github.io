// http://datamaps.github.io/

var map = new Datamap({
    element: document.getElementById('map-container'),
    geographyConfig: {
        dataUrl: null, // if not null, datamaps will fetch the map JSON (currently only supports topojson)
        hideAntarctica: true,
        borderWidth: 1,
        borderOpacity: 0.6,
        borderColor: '#63b6ff',
        popupTemplate: function(geography, data) { // this function should just return a string
          return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong></div>';
        },
        popupOnHover: false,
        highlightOnHover: false
    },
    fills: {
        defaultFill: '#000000',
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
        centered: 'USA'
    },
    {
        name: 'Castle Bravo',
        radius: 5,
        date: '1954-03-01',
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
        return '<div class="hoverinfo">Yield:' + data.yeild + ' Exploded on ' + data.date + ' by the '  + data.country + '';
    }
});
