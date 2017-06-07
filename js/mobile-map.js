// http://datamaps.github.io/

$(document).ready(function() {

    // constants
    var BUBBLE_RADIUS = 5;
    var BUBBLE_BORDER_WIDTH = 0;
    var MAP_COLOR = '#4E4E4E';
    var MAP_BORDER_COLOR = MAP_COLOR;
    var MAP_BORDER_WIDTH = 1;

    // jQuery elements
    var $blog = $('#blog');

    function populateMap(map) {

        return new Promise(function(resolve, reject) {

            getEntries()
                .then(preprocessEntries)
                .then(createPostsAndBubbles)
                .then((bubbles) => updateMap(map, bubbles))
                .then(resolve)
                .catch(reject)
        });
    }

    function getEntries() {
        // get list of entry files to post

        return new Promise(function(resolve, reject) {

            $.getJSON('assets/entries/entries.json', function(files) {

                resolve(files);
            });
        });
    };

    function preprocessEntries(entry_files) {
        // extract the data from each entry file and sort by post date (new to old)

        return new Promise(function(resolve, reject) {

            Promise.map(entry_files, preprocessEntry)
                .then((data) => {

                    data.sort(function(a, b) {

                        return new Date(b.post_date) - new Date(a.post_date);
                    });
                    resolve(data);
                })
                .catch(reject);
        })
    };

    function preprocessEntry(entry_file) {
        // extract json data as object from file

        return new Promise(function(resolve, reject) {

            var filename = 'assets/entries/' + entry_file;
            $.getJSON(filename, function(data) {

                resolve(data);
            });
        });
    };

    function createPostsAndBubbles(entries) {

        var bubbles = [];
        entries.forEach(function(entry) {

            // generate unique id which will unite post and bubble
            // because name can't be guarenteed to be unique
            var id = bubbles.length;

            // create post
            $blog.append('<div id="' + id + '">' + entry.name + '</div>');

            // create bubble
            // TODO: associate post with buble
            var bubble = {
                // set unique identifier
                id: id,

                // custom formatting
                name: entry.name,
                radius: BUBBLE_RADIUS,
                borderWidth: BUBBLE_BORDER_WIDTH,
                fillKey: 'light',
                latitude: entry.location.latitude,
                longitude: entry.location.longitude,

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

                // entry
                city: entry.location.city,
                details: entry.details,
                summary: entry.summary
            };
            bubbles.push(bubble);
        });
        return bubbles;
    };

    function updateMap(map, bubbles) {

        // put bubbles onto map
        map.bubbles(bubbles, {popupTemplate: function(geography, data) {

            // return 'hey'; // populateInfo(geography, data, bubbles);
        }});
    };

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
    populateMap(map)
        .then(() => {

        })
        .catch((err) => console.log('promise chain error:', err));

});
