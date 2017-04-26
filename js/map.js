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
        // TODO: set projection to exclude north pole
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

            datamap.svg.call(d3.behavior.zoom().on('zoom', redraw));

            function redraw() {
                datamap.svg.select('g')
                    .selectAll('path')
                    .style('vector-effect', 'non-scaling-stroke');

                rescale(datamap, d3.event.translate, d3.event.scale);
            }
        }
    };

    function rescale(datamap, translate, scale) {

        // console.log(translate, scale);

        // rescale world
        datamap.svg
            .selectAll('g')
            .attr('transform', 'translate(' + translate + ') scale(' + scale + ')');

        // rescale bubbles
        var bubbleRadius = 5;
        var bubbleBorder = 5;
        datamap.svg
            .selectAll('.datamaps-bubble')
            .attr('r', bubbleRadius / scale)
            .style('stroke-width', (bubbleBorder / scale) + 'px');
    }

    // create map with default settings
    var map = new Datamap(map_options);

    $(map.svg[0][0]).on('click', '.bubbles', function(e) {

        var data = e.target.__data__;
        var map_div = document.getElementById('map');

        // var projection = d3.geo.equirectangular()
        //                     // .center([data.longitude, data.latitude])
        //                     // .scale(4)
        //                     // .translate([2,2])//([map_div.offsetWidth / 2, map_div.offsetHeight / 2]);
        // var path = d3.geo.path().projection(projection);

        var long = -data.longitude; // invert for direction
        var lat = data.latitude;
        var coords = long + ',' + lat;
        var scale = 4;
        console.log(long, lat);

        // console.log(d3);

        // NOTE: the solution has to do with a radio of the scale!

        map.svg.transition()
            .duration(750)
            .selectAll('g')
            .attr('transform', 'translate( ' + long + ',' + lat + ' ) scale(' + scale + ')translate(' + -long + ',' + -4*lat + ')');

        // // clear map div
        // var map_div = document.getElementById('map');
        // map_div_id = map_div.id;
        // map_div_class = map_div.className;
        // map_div.parentNode.removeChild(map_div);

        // // replace map div
        // map_div = document.createElement('div');
        // map_div.id = 'map';
        // map_div.className = map_div_class;
        // var map_container_div = document.getElementById('map-container');
        // map_container_div.appendChild(map_div);

        // // update setProjection property in map_options
        // map_options.setProjection = function(element, options) {

        //     var projection, path;
        //     projection = d3.geo.equirectangular()
        //         .center([/*data.longitude, data.latitude*/-90,30])
        //         .scale(/*element.offsetWidth*/400)
        //         .translate([/*element.offsetWidth / 2, element.offsetHeight / 2*/200,200]);

        //     path = d3.geo.path().projection(projection);
        //     return {path: path, projection: projection};
        // }

        // redraw map
        // map = new Datamap(map_options);

        // var map_div = document.getElementById('map');

        // var projection = d3.geo.equirectangular()
        //         .center([data.longitude, data.latitude])
        //         .scale(map_div.offsetWidth);
        // var path = d3.geo.path().projection(projection);

        // var g = map.svg.select('g');

        // g.selectAll("path").classed("active", true );

        // g.transition()
        //     .duration(750)
        //     .attr("transform", "scale(4) translate(3,-100)")
            // .style("stroke-width", 1.5 / k + "px");

        // // map.svg.select('g').selectAll('path').attr('d', path);
        // map.svg.selectAll("g").attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
        // map.svg.select("g").selectAll("circle").attr("d", map.path.projection(projection));
        // map.svg.select("g").selectAll("path").attr("d", map.path.projection(projection));
    });

    // running this here is probably not the best approach
    populateMap(map);

});
