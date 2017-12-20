// Map Config
var width = 1000;
var height = 600;
var center = [0, 27];
var scale = 150;
var rotation = [-100, 0];
var translation = [width / 2, height / 2];

// Point config
var radius = 20;

//
var svg = d3.select('body').append('svg').attr('width', width).attr('height', height);
var projection = d3.geoRobinson().scale(scale).center(center).rotate(rotation).translate(translation);
var path = d3.geoPath().projection(projection);

//
var boundary = svg.append('g').attr('id', 'boundary');
var countries = svg.append('g').attr('id', 'countries');
var entries = svg.append('g').attr('class', 'bubble');

// Boundary data
var boundaryFeature = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-180, 89.99],
        [180, 89.99],
        [180, -89.99],
        [-180, -89.99],
        [-180, 89.99]
      ]
    ]
  }
};

// Experimental / In Progress
var tooltip = d3.select('#map')
         .append('div')
         .attr('class', 'tooltip hidden');
var offsetL = document.getElementById('map').offsetLeft+10;
var offsetT = document.getElementById('map').offsetTop+10;

// Load countries (world map) data
d3.json('countries.json', function (json) {
  // Draw boundary
  boundary
    .append('path')
    .datum(boundaryFeature)
    .attr('d', path);

  // Draw countries
  countries.selectAll('path')
    .data(json.features)
    .enter()
    .append('path')
    .attr('d', path);

  // `entries` is defined in `entries.js`
  entries.selectAll('path')
    .data(entriesData.features)
    // .data([aa])
    .enter()
    .append('circle')
    .attr('cx', d => projection(d.geometry.coordinates)[0])
		.attr('cy', d => projection(d.geometry.coordinates)[1])
    .attr('r', radius)
    .on('click', function (entry) {
      console.log('click', entry);
    })
    .on('mousemove', function (entry) {
      // console.log('mousemove', entry);
      var label = entry.properties.name;
      var mouse = d3.mouse(svg.node()).map(entry => parseInt(entry));
      tooltip.classed('hidden', false)
        .attr('style', 'left:'+(mouse[0]+offsetL)+'px; top:'+(mouse[1]+offsetT)+'px')
        .html(label);
      console.log(tooltip, 'left:'+(mouse[0]+offsetL)+'px; top:'+(mouse[1]+offsetT)+'px');
    })
    .on('mouseout', function (entry, i) {
      // console.log('mouseout', entry, i);
      // tooltip.classed('hidden', true);
    });

});
