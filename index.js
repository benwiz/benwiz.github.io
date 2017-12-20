// Config
var width = 1000;
var height = 600;
var center = [0, 0];
var scale = 150;
var rotation = [0, 0];
var translation = [width / 2, height / 2];
var radius = 5;

//
var svg = d3.select('body').append('svg').attr('width', width).attr('height', height);
var projection = d3.geoRobinson().scale(scale).center(center).rotate(rotation).translate(translation);
var path = d3.geoPath().projection(projection);

//
var boundary = svg.append('g').attr('id', 'boundary');
var countries = svg.append('g').attr('id', 'countries');
var places = svg.append('g').attr('class', 'bubble');

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
d3.json('countries.json', main);

function onClick (place) {
  console.log('click', place);
}

function onMouseMove (place) {
  var label = place.properties.name;
  var mouse = d3.mouse(svg.node()).map(place => parseInt(place));
  tooltip.classed('hidden', false)
    .attr('style', 'left:'+(mouse[0]+offsetL)+'px; top:'+(mouse[1]+offsetT)+'px')
    .html(label);
}

function onMouseOut (place, i) {
  tooltip.classed('hidden', true);
}

function getEntries () {
  // Get entry names
  var entryNames = [];
  $.ajax({
    type: 'GET',
    url: '/assets/entries.json',
    dataType: 'json',
    success: function(data) {
      data.forEach(entryName => entryNames.push(entryName))
    },
    async: false,
  });

  // Get each entry's data
  var entries = [];
  entryNames.map(function (entryName) {
    console.log(entryName);
    $.ajax({
      type: 'GET',
      url: '/assets/entries/' + entryName + '.json',
      dataType: 'json',
      success: entry => entries.push(entry),
      error: console.log,
      async: false,
    });
  });

  return entries;
}

function generatePlacesData (entries) {

}

function main (countriesJSON) {
  // Draw boundary
  boundary
    .append('path')
    .datum(boundaryFeature)
    .attr('d', path);

  // Draw countries
  countries.selectAll('path')
    .data(countriesJSON.features)
    .enter()
    .append('path')
    .attr('d', path)
    .classed('visited', country => countriesVisited.indexOf(country.properties.name) >= 0);

  // Get entries and generate place data for map
  var entries = getEntries();

  // `places` is defined in `places.js`
  places.selectAll('path')
    .data(placesData.features)
    .enter()
    .append('circle')
    .attr('cx', d => projection(d.geometry.coordinates)[0])
		.attr('cy', d => projection(d.geometry.coordinates)[1])
    .attr('r', radius)
    .on('click', onClick)
    .on('mousemove', onMouseMove)
    .on('mouseout', onMouseOut);
}
