// http://datamaps.github.io/

$(document).ready(function() {

    // get elements
    var $name = $('#name');
    var $details = $('#details');
    var $summary = $('#summary');

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
                    // formatting
                    name: data.name,
                    radius: 5,
                    fillKey: 'light',
                    latitude: data.location.latitude,
                    longitude: data.location.longitude,
                    // data
                    details: data.details,
                    summary: data.summary
                };
                resolve(bubble);
            });
        });
    };

    function createBubbles(entry_files) {

        return Promise.map(entry_files, createBubble);
    }

    function updateMap(bubbles) {

        // put bubbles onto map
        map.bubbles(bubbles, {popupTemplate: populateInfo});
    }

    function populateMapPromiseError(err) {

        console.log('promise chain error:', err);
    }

    function populateMap() {

        getEntries()
            .then(createBubbles)
            .then(updateMap)
            .catch(populateMapPromiseError);
    }

    function populateName(name) {

        $name.text(name);
    }

    function populateDetails(details) {

        var html = '<table>';
        for (var i=0; i<details.length; i++) {
            html += '<tr><th>' + details[i][0] + '</th><td>' + details[i][1] + '</td></tr>';
        }
        html += '</table>'

        $details.html(html);
    };

    function populateSummary(paragraphs) {

        var html = '';
        for (var i=0; i<paragraphs.length; i++) {
            html += '<p>' + paragraphs[i] + '</p>';
        }
        $summary.html(html);
    }

    function populateInfo(data) {

        populateName(data.name);
        populateDetails(data.details);
        populateSummary(data.summary);
    }

    populateMap();
});
