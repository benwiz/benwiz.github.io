// http://datamaps.github.io/


$(document).ready(function() {

    // get elements
    var $name = $('#name');
    var $details = $('#details');
    var $summary = $('#summary');

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

    function updateMap(map, bubbles) {

        // put bubbles onto map
        map.bubbles(bubbles, {popupTemplate: populateInfo});
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

    function populateInfo(bubble) {

        const detail_options = [
            ['City', bubble.city]
        ];

        populateName(bubble.name);
        populateDetails(bubble.details, detail_options);
        populateSummary(bubble.summary);
    }

    //
    // scripting below
    //

    // map options
    var map_options = {
        element: document.getElementById('map'),
        responsive: true,
        projection: 'equirectangular', // mercator, equirectangular
        geographyConfig: {
            dataUrl: null,
            hideAntarctica: true,
            borderWidth: 1,
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

        // Setup the options for the zoom (defaults given)
        var zoom_opts = {
            scaleFactor: scale,
            center: {
                lng: lng,
                lat: lat
            },
            transition: {
                duration: 750 // milliseconds
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

        // perform the zoom
        map.zoomto(zoom_opts);

        if (scale === 1) {
            is_zoomed = false;
        } else {
            is_zoomed = true;
        }
    }

    // create map with default settings
    var map = new Datamap(map_options);
    var is_zoomed = false;

    $(map.svg[0][0]).on('click', function(e) {

        if (e.target.tagName !== 'circle') {
            if (is_zoomed) {
                zoom(map, 0, 0, 1);
            }
        }
    });

    $(map.svg[0][0]).on('click', '.bubbles', function(e) {

        var data = e.target.__data__;
        zoom(map, data.longitude, data.latitude, 10);
    });

    // running this here is probably not the best approach
    populateMap(map);

});
