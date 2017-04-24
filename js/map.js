// http://datamaps.github.io/

// create map with default settings
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

function getEntries() {

    return new Promise(function(resolve, reject) {


        // get list of entry files
        $.getJSON('assets/entries/entries.json', function(files) {

            resolve(files);
        });
    });
}

function populateInfo(data) {

    return null;
}

function createBubble(file) {

    return new Promise(function(resolve, reject) {

        var filename = 'assets/entries/' + file;
        $.getJSON(filename, function(data) {

            // create bubble
            var bubble = {
                name: data.title,
                radius: 5,
                fillKey: 'light',
                centered: 'USA',
                // latitude: data.location.latitude,
                // longitude: data.location.longitude
            };
            bubbles.push(bubble);

            resolve(bubble);
        });
    });
};

var bubbles = [
    {
        name: 'Brazil',
        radius: 5,
        fillKey: 'light',
        centered: 'BRA'
    }
];
getEntries()
    .then(function(entry_files) {

        return Promise.each(entry_files, createBubble);
    })
    .then(function(res) {

        // put bubbles onto map
        map.bubbles(bubbles, {
            popupTemplate: function(data) {

                // populateInfo(data);
                return null; // '<div>' + data + '</div>';
            }
        });
    })
    .catch(function(err) {

        console.log('promise chain error:', err);
    });

