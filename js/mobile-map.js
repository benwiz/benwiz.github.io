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
        // create posts while creating a list of bubbles
        // bubbles are the clickable dots on the map
        // posts exist inside a modal, there is one modal for each city

        var bubbles = [];
        entries.forEach(function(entry, index) {

            // initialize modal variable
            var modal = null;

            // check bubbles list for overlapping bubbles
            // currently checking by city, but it should be changed to be actual visual overlap of bubbles
            matching_bubbles = bubbles.filter(bubble => bubble.city === entry.location.city);
            if (matching_bubbles.length > 0) {
                // TODO: get the relevant modal
            } else {
                // unique identifier to identify a bubble
                var id = entry.location.city.replace(' ', '').toLowerCase();

                // if not a match, create the bubble
                var bubble = createBubble(id, entry);
                bubbles.push(bubble);

                // create the actual modal itself
                var modal_html = createModal(id, entry);
                $blog.append(modal_html);
            }

            // TODO: add conent to modal
        });
        return bubbles;
    };

    function createModal(id) {
        // create and return the modal for a given city

        var modal_html = `
            <div class="remodal" data-remodal-id="${id}">
                <button data-remodal-action="close" class="remodal-close"></button>

                <h3>ID: ${id}</h3>
                <p>lol, hi</p>

                <br>
                <button data-remodal-action="confirm" class="remodal-confirm close-modal-button">OK</button>
            </div>
        `;
        return modal_html;
    }

    function createBubble(id, entry) {

        var bubble = {
            // set unique identifier
            ids: [id],

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

        return bubble;
    };

    function updateMap(map, bubbles) {

        // put bubbles onto map
        map.bubbles(bubbles, {popupTemplate: function(geography, data) {

            return data['city']; // populateInfo(geography, data, bubbles);
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

        if (e.target.tagName === 'circle') {
            var data = e.target.__data__;
            var id = data['ids'][0];
            var modal = $(`[data-remodal-id=${id}]`).remodal();
            modal.open();
        }
    });

    // this following event block overlaps with the previous and is kept here just for reference
    // $(map.svg[0][0]).on('click', '.bubbles', function(e) { var data = e.target.__data__; });

    // populate map with bubbles
    populateMap(map)
        .then(() => {

            // if there is an achor, open the appropriate modal
            // this is a workaround because the achord for the modal is not working
            if (window.location.href.includes('#')) {
                var split = window.location.href.split('#');
                if (split.length === 2) {
                    var id = split[1];
                    var modal = $(`[data-remodal-id=${id}]`).remodal();
                    modal.open();
                }
            }
        })
        .catch((err) => console.log('promise chain error:', err));

});
