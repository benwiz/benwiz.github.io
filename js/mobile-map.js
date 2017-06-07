// http://datamaps.github.io/

$(document).ready(function() {

    // get elements
    var $name = $('#name');
    var $details = $('#details');
    var $summary = $('#summary');

    // constants
    var BUBBLE_RADIUS = 5;
    var BUBBLE_BORDER_WIDTH = 0;
    var MAP_COLOR = '#4E4E4E';
    var MAP_BORDER_COLOR = MAP_COLOR;
    var MAP_BORDER_WIDTH = 1;

    function getEntries() {

        return new Promise(function(resolve, reject) {


            // get list of entry files
            $.getJSON('assets/entries/entries.json', function(files) {

                resolve(files);
            });
        });
    }

    function createBubble(file) {

        return new Promise(function(resolve, reject) {

            var filename = 'assets/entries/' + file;
            $.getJSON(filename, function(data) {

                // create bubble
                var bubble = {
                    // custom formatting
                    name: data.name,
                    radius: BUBBLE_RADIUS,
                    borderWidth: BUBBLE_BORDER_WIDTH,
                    fillKey: 'light',
                    latitude: data.location.latitude,
                    longitude: data.location.longitude,

                    // standard formatting
                    borderWidth: BUBBLE_BORDER_WIDTH,
                    // borderOpacity: 1,
                    // borderColor: '#FFFFFF',
                    // popupOnHover: true,
                    // popupTemplate: function(g,d) { console.log('hi'); return 'hi'; },
                    // fillOpacity: 0.75,
                    // animate: true,
                    // highlightOnHover: true,
                    highlightFillColor: '#27A1DA',
                    highlightBorderColor: '#27A1DA',
                    // highlightBorderWidth: 2,
                    // highlightBorderOpacity: 1,
                    // highlightFillOpacity: 0.85,
                    // exitDelay: 100,
                    // key: JSON.stringify,

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

    function updateMap(map, bubbles) {

        // put bubbles onto map
        map.bubbles(bubbles, {popupTemplate: function(geography, data) {

            return populateInfo(geography, data, bubbles);
        }});
    }

    function populateMap(map) {

        getEntries()
            .then(createBubbles)
            .then((bubbles) => updateMap(map, bubbles))
            .catch((err) => console.log('promise chain error:', err));
    }

    function populateName(name) {

        $name.text(name);
    }

    function populateDetails(details) {

        var html = '<table>';
        for (var i=0; i<details.length; i++) {
            html += '<tr><th style="text-align:right; padding:0 5px 0 5px;">' + details[i][0] + '</th><td style="text-align:left; padding:0 5px 0 5px;">' + details[i][1] + '</td></tr>';
        }
        html += '</table>'

        $details.html(html);
    };

    function populateSummary(paragraphs) {

        var html = '';
        for (var i=0; i<paragraphs.length; i++) {
            html += '<p>&emsp;' + paragraphs[i] + '</p>';
        }
        $summary.html(html);
    }

    function populateInfo(geography, data, bubbles) {

        const detail_options = [
            ['City', data.city]
        ];
        data.details = data.details.concat(detail_options);

        // if not zoomed in
        if (!m_is_zoomed) {
            var city_bubbles = getBubblesWithCity(bubbles, data.city);
            if (city_bubbles.length > 1) {
                // dislpay summary and incent to click
                populateName(data.city);
                populateDetails([]);
                populateSummary(['Click to zoom in!']);
            } else {
                 // display bubble info
                populateName(data.name);
                populateDetails(data.details);
                populateSummary(data.summary);
            }
        } else {
            // display bubble info
            populateName(data.name);
            populateDetails(data.details);
            populateSummary(data.summary);
        }

        // return 'popup html';
    }

    function getBubblesWithCity(bubbles, city) {

        var city_bubbles = [];
        for (var i=0; i<bubbles.length; i++) {
            var bubble = bubbles[i];
            if (bubble.city === city) {
                city_bubbles.push(bubble);
            }
        }
        return city_bubbles;
    }

    //
    // scripting below
    //

    // map options
    var map_options = {
        element: document.getElementById('map'),
        scope: 'world',
        responsive: true,
        projection: 'equirectangular', // mercator, equirectangular
        geographyConfig: {
            dataUrl: null,
            hideAntarctica: true,
            borderWidth: MAP_BORDER_WIDTH,
            borderOpacity: 1,
            borderColor: MAP_BORDER_COLOR,
            popupOnHover: false,
            highlightOnHover: false,
            // popupTemplate: function(geography, data) { //this function should just return a string
            //     return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong></div>';
            // },
            // popupOnHover: true, //disable the popup while hovering
            // highlightFillColor: '#FC8D59',
            // highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
            // highlightBorderWidth: 2,
            // highlightBorderOpacity: 1
        },
        fills: {
            defaultFill: MAP_COLOR,
            light: '#FEFEFE',
            dark: '#222222',
            magenta: 'magenta'
        },
        done: function(datamap) {

            // datamap.svg.call(d3.behavior.zoom().on('zoom', redraw));

            // function redraw() {
            //     datamap.svg.select('g')
            //         .selectAll('path')
            //         .style('vector-effect', 'non-scaling-stroke');

            //     rescale(datamap, d3.event.translate, d3.event.scale);
            // }
        }
    };

    // create map with default settings
    var map = new Datamap(map_options);

    $(map.svg[0][0]).on('click', function(e) {

        if (e.target.tagName !== 'circle') {

        }
    });

    $(map.svg[0][0]).on('click', '.bubbles', function(e) {

        var data = e.target.__data__;
    });

    // populate map with bubbles
    populateMap(map);

});
