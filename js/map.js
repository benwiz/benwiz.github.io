// http://datamaps.github.io/

var map = new Datamap({
    element: document.getElementById('map'),
    responsive: true,
    geographyConfig: {
        dataUrl: null,
        hideAntarctica: true,
        borderWidth: 1.0,
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
        dark: '#777777',
        magenta: 'magenta'
    }
});

map.bubbles([
    {
        name: 'Brazil',
        radius: 5,
        fillKey: 'light',
        centered: 'USA'
    }
], {
    popupTemplate: function(data) {

        // populateInfo(data);
        return null; // '<div>' + data + '</div>';
    }
});

function populateInfo(data) {

    return null;
}

$.getJSON('assets/entries/bragon.json', function(data) {
    console.log(data);
});
