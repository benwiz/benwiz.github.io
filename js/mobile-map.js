// http://datamaps.github.io/

$(document).ready(function() {

    // constants
    var BUBBLE_RADIUS = 5;
    var BUBBLE_BORDER_WIDTH = 0;
    var MAP_COLOR = '#B6FFFF';
    var VISITED_MAP_COLOR = '#84CCCC';
    var MAP_BORDER_COLOR = '#000000';
    var MAP_BORDER_WIDTH = 0.25;
    var BUBBLE_COLOR = '#FFFFFF';
    var HIGHLIGHT_BUBBLE_COLOR = '#E91C63';

    // jQuery elements
    var $blog = $('#blog');

    // data maps countries data
    var countries = Datamap.prototype.worldTopo.objects.world.geometries;

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

            // update country fill code
            var country_code = countries.filter(country => country.properties.name == entry.location.country)[0].id;
            var choropleth = {};
            choropleth[country_code] = VISITED_MAP_COLOR;
            map.updateChoropleth(choropleth);

            // initialize modal variable
            var modal = null;

            // unique identifier to identify a bubble
            // this may change in the future if bubble's are not organized by city
            var bubble_id = entry.location.city.replace(' ', '').toLowerCase();

            // check bubbles list for overlapping bubbles
            // currently checking by city, but it should be changed to be actual visual overlap of bubbles
            matching_bubbles = bubbles.filter(bubble => bubble.city === entry.location.city);
            if (matching_bubbles.length == 0) {

                // if not a match, create the bubble
                var bubble = createBubble(bubble_id, entry);
                bubbles.push(bubble);

                // create the actual modal and assoiciate with a bubble via id
                var modal_html = createModal(bubble_id, entry);
                $blog.append(modal_html);
            }

            // add content to the appropriate modal's mody
            var content = createEntryContent(entry);
            $(`#${bubble_id}_body`).append(content);
            // JSON.stringify(entry, null, 2)
        });
        return bubbles;
    };

    function createBubble(id, entry) {

        var bubble = {
            // set unique identifier
            id: id,

            // custom formatting
            name: entry.name,
            radius: BUBBLE_RADIUS,
            borderWidth: BUBBLE_BORDER_WIDTH,
            fillKey: 'bubble',
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
            highlightFillColor: HIGHLIGHT_BUBBLE_COLOR,
            highlightBorderColor: HIGHLIGHT_BUBBLE_COLOR,
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

    function createModal(id, entry) {
        // create and return the modal for a given city

        var modal_html = `
            <div class="remodal" data-remodal-id="${id}">
                <button data-remodal-action="close" class="remodal-close"></button>

                <h2>${entry.location.city}</h2>
                <div id="${id}_body"></div>

                <br>
                <button data-remodal-action="confirm" class="remodal-confirm close-modal-button">OK</button>
            </div>
        `;
        return modal_html;
    }

    function createEntryContent(entry) {

        // create details
        var details = '';
        for (var i=0; i<entry.details.length; i++) {
            var detail = entry.details[i];
            var line = `<p>${detail[0]} - ${detail[1]}</p>`;
            details = details + line;
        }

        // create summary
        var summary = '';
        for (var i=0; i<entry.summary.length; i++) {
            var line = entry.summary[i];
            summary = summary + ' ' + line;
        }

        var content_html = `
            <div>
                <h4>${entry.name}</h4>
                <p>${entry.post_date}</p>

                <br>
                <div>${details}</div>

                <br>
                <p>${summary}</p>

            </div>
        `;

        return content_html;
    }

    function updateMap(map, bubbles) {

        // put bubbles onto map
        map.bubbles(bubbles, {popupTemplate: function(geography, data) {

            var popup = `<div class="bubble-popup">${data['city']}</div>`;
            return popup;
        }});
    };

    function handleAnchor() {
        // if there is an achor, open the appropriate modal
        // this is a workaround because the achord for the modal is not working

        if (window.location.href.includes('#')) {
            var split = window.location.href.split('#');
            if (split.length === 2 && split[1].length > 0) {
                var id = split[1];
                var modal = $(`[data-remodal-id=${id}]`).remodal();
                modal.open();
            }
        }
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
            visited: VISITED_MAP_COLOR,
            bubble: BUBBLE_COLOR
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
            var id = data['id'];
            var modal = $(`[data-remodal-id=${id}]`).remodal();
            modal.open();
        }
    });

    // this following event block overlaps with the previous and is kept here just for reference
    // $(map.svg[0][0]).on('click', '.bubbles', function(e) { var data = e.target.__data__; });

    // populate map with bubbles
    populateMap(map)
        .then(handleAnchor)
        .catch((err) => console.log('populate map promise chain error:', err));

});
