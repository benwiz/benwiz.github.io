// http://datamaps.github.io/

$(document).ready(function() {

    // get elements
    var $map = $('#map');
    var $name = $('#name');
    var $details = $('#details');
    var $summary = $('#summary');

    // map options
    var map_options = {
        element: document.getElementById('map'),
        responsive: true,
        geographyConfig: {
            dataUrl: null,
            hideAntarctica: true,
            borderWidth: 1.0,
            borderOpacity: 1,
            borderColor: '#003f3f',
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
            defaultFill: '#003f3f',
            light: '#FFFFFF',
            dark: '#777777',
            magenta: 'magenta'
        }
    };

    // create map with default settings
    var map = new Datamap(map_options);

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
                    city: data.location.city,
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

        // // add click listener to all bubbles
        // map.svg.selectAll('.bubbles').on('click', function(b) {
        //     console.log(b);
        // });
    }

    function populateMap() {

        getEntries()
            .then(createBubbles)
            .then(updateMap)
            .catch((err) => console.log('promise chain error:', err));
    }

    function populateName(name) {

        $name.text(name);
    }

    function populateDetails(details, options) {

        var html = '<table>';
        for (var i=0; i<details.length; i++) {
            html += '<tr><th style="text-align:right; padding:0 5px 0 5px;">' + details[i][0] + '</th><td style="text-align:left; padding:0 5px 0 5px;">' + details[i][1] + '</td></tr>';
        }
        for (var i=0; i<options.length; i++) {
            html += '<tr><th style="text-align:right; padding:0 5px 0 5px;">' + options[i][0] + '</th><td style="text-align:left; padding:0 5px 0 5px;">' + options[i][1] + '</td></tr>';
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

    function populateInfo(bubble) {

        const detail_options = [
            ['City', bubble.city]
        ];

        populateName(bubble.name);
        populateDetails(bubble.details, detail_options);
        populateSummary(bubble.summary);
    }

    populateMap(); // TODO: don't run this, instread run a function returning bubbles in the inital obkect

    $(map.svg[0][0]).on('click', '.bubbles', function(e) {

        var data = e.target.__data__;
        console.log(data);

        // clear map
        $map.html('');

        // TODO: update setProjection property in map_options
        map_options.setProjection = function(element, options) {
            var projection, path;
            console.log(d3.geo);
            projection = d3.geo.equirectangular()
                .center([data.longitude, data.latitude])
                .scale(element.offsetWidth)
                .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

            path = d3.geo.path().projection(projection);
            return {path: path, projection: projection};
        }

        // redraw map
        var map = new Datamap(map_options);
    });
});
