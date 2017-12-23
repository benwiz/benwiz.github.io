// Initialize material dialog
var dialogElement = document.querySelector('#mdc-dialog-with-list');
var dialog = new mdc.dialog.MDCDialog(dialogElement);

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
var tooltip = d3.select('#map').append('div').attr('class', 'tooltip hidden');
var offsetL = document.getElementById('map').offsetLeft+10;
var offsetT = document.getElementById('map').offsetTop+10;

// Load countries (world map) data
d3.json('assets/countries.json', main);

function onClick (place) {
  populateDialog(place);
  dialog.lastFocusedTarget = this;
  dialog.show();
}

function onMouseMove (place) {
  var label = generateTooltipHTML(place);
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

// Group entries by place using necessary format
function generatePlacesData (entries) {
  var features = {};

  // Create features grouped by location
  entries.forEach(function (entry, i) {
    if (!features[entry.location.place]) {
      features[entry.location.place] = {
        // id: i,
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [entry.location.longitude, entry.location.latitude],
        },
        properties: {
          name: entry.location.place,
          entries: [],
        },
      };
    }
    features[entry.location.place].properties.entries.push(entry);
  });

  // Flatten, while doing so generate html for each place's dialog modal
  var flattenedFeatures = [];
  Object.keys(features).forEach(function (featureKey) {
    var feature = features[featureKey];
    flattenedFeatures.push(feature);
  });

  return flattenedFeatures;
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
  var placesData = generatePlacesData(entries);

  // `places` is defined in `places.js`
  places.selectAll('path')
    .data(placesData)
    .enter()
    .append('circle')
    .attr('cx', d => projection(d.geometry.coordinates)[0])
		.attr('cy', d => projection(d.geometry.coordinates)[1])
    .attr('r', radius)
    .on('click', onClick)
    .on('mousemove', onMouseMove)
    .on('mouseout', onMouseOut);
}

//
// Templating
//
// Generate tooltop html
function generateTooltipHTML (place) {
  var html = `
    ${place.properties.name}
    <ul>
      ${place.properties.entries.map(entry => `<li>${entry.name}</li>`).join('')}
    </ul>
  `;
  return html;
}

// Generate dialog html
function populateDialog (place) {
  // Set title of dialog
  var dialogTitle = document.getElementById('dialog-title');
  dialogTitle.innerHTML = place.properties.name;

  // Populate content of dialog
  var dialogContent = document.getElementById('dialog-content');
  dialogContent.innerHTML = JSON.stringify(place.properties.entries, null, 2).replace(/(\r\n|\r|\n)/g, '<br>').replace(/  /g, '&nbsp;&nbsp');
}


// Dialog listeners
// dialog.listen('MDCDialog:accept', function() {
//   console.log('accepted');
// });
// dialog.listen('MDCDialog:cancel', function() {
//   console.log('canceled');
// });
