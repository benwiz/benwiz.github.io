// http://datamaps.github.io/


$(document).ready(function() {

    // get elements
    var $name = $('#name');
    var $details = $('#details');
    var $summary = $('#summary');

    // constants
    var BUBBLE_RADIUS = 5;
    var BUBBLE_BORDER_WIDTH = 0;
    var ZOOM_SCALE = 1000;
    var MAP_COLOR = '#003f3f';
    var MAP_BORDER_COLOR = MAP_COLOR;
    var MAP_BORDER_WIDTH = 1;

    // global variables
    var m_is_zoomed = false;

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
                    highlightFillColor: 'cyan',
                    // highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
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

    function populateInfo(geography, data, bubbles) {

        const detail_options = [
            ['City', data.city]
        ];

        // if not zoomed in
        if (!m_is_zoomed) {
            var city_bubbles = getBubblesWithCity(bubbles, data.city);
            if (city_bubbles.length > 0) {
                // dislpay summary and incent to click
                populateName('name');
                populateDetails([['details', 'here?']], [['wtf', 'is option?;']])
                populateSummary('something more here');
            } else {
                 // display bubble info
                populateName(data.name);
                populateDetails(data.details, detail_options);
                populateSummary(data.summary);
            }
        } else {
            // display bubble info
            populateName(data.name);
            populateDetails(data.details, detail_options);
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
            light: '#FFFFFF',
            dark: '#777777',
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

    // function rescale(datamap, translate, scale) {

    //     // rescale world
    //     datamap.svg
    //         .selectAll('g')
    //         .attr('transform', 'translate(' + translate + ') scale(' + scale + ')');

    //     // rescale bubbles
    //     var bubbleRadius = 5;
    //     var bubbleBorder = 5;
    //     datamap.svg
    //         .selectAll('.datamaps-bubble')
    //         .attr('r', bubbleRadius / scale)
    //         .style('stroke-width', (bubbleBorder / scale) + 'px');
    // }

    function zoom(map, lng, lat, scale) {

        var duration = 750;

        // Setup the options for the zoom (defaults given)
        var zoom_opts = {
            scaleFactor: scale,
            center: {
                lng: lng,
                lat: lat
            },
            transition: {
                duration: duration // milliseconds
            },
            onZoomComplete: function (zoomData) {
                // Called after zoomto completes.  Bound to the Datamaps instance.
                // Passes one argument, zoomData.
                // zoomData = {
                //   translate: { x: <number>, y: <number> },
                //   scale: <number>
                // }
                // no-op by default
            }
        };

        if (scale === 1) {
            // go slower
            duration *= 2.75;
        } else {
            // go faster
            duration *= 1/4;
        }

        // rescale bubbles
        var bubble_radius = BUBBLE_RADIUS;
        var bubble_border_width = BUBBLE_BORDER_WIDTH;
        map.svg
            .transition().duration(duration)
            .selectAll('.datamaps-bubble')
            .attr('r', bubble_radius / scale)
            // .style('stroke-width', (bubble_border_width / scale) + 'px');

        // perform the zoom
        map.zoomto(zoom_opts);

        // set m_is_zoomed boolean
        if (scale === 1) {
            m_is_zoomed = false;
        } else {
            m_is_zoomed = true;
        }
    }

    // create map with default settings
    var map = new Datamap(map_options);

    $(map.svg[0][0]).on('click', function(e) {

        if (e.target.tagName !== 'circle') {
            if (m_is_zoomed) {
                zoom(map, 0, 0, 1);
            }
        }
    });

    $(map.svg[0][0]).on('click', '.bubbles', function(e) {

        var data = e.target.__data__;
        zoom(map, data.longitude, data.latitude, ZOOM_SCALE);
    });

    // populate map with bubbles
    populateMap(map);

});
