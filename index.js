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
  // var entryNames = [];
  // $.ajax({
  //   type: 'GET',
  //   url: '/assets/entries.json',
  //   dataType: 'json',
  //   success: function(data) {
  //     data.forEach(entryName => entryNames.push(entryName))
  //   },
  //   async: false,
  // });

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

  // TODO: Populate content of dialog
  var dialogContent = document.getElementById('dialog-content-grid');
  dialogContent.innerHTML = generateDialogContentHTML(place.properties.entries);

  // Initialize masonry. Although it would be better to set configs here, it's only working if I set in css.
  try {
    $('.grid').masonry('destroy');
  } catch (e) {}
  $('.grid').masonry({
    // horizontalOrder: true,
  });
}

// Generate a new level 1 cell for each entry, then generate cards for all the entry details.
function generateDialogContentHTML(entries) {
  var contentHTML = '';
  // Loop through each entry and generate the html for the level 1 cell
  entries.forEach(function(entry, i) {

    // Pick alternating colors
    var colors = ['#ceefff', '#ececec', '#dbcafd']
    var color = colors[i % entries.length];

    // Wrap the following entryHTML block in these divs if I separate out each entry more
    //<div class="mdc-layout-grid__cell--span-12"></div>
    //<div class="grid"></div>

    // Create html
    var entryHTML = `
        ${generateFirstCardHTML(entry, color)}
        ${generateDetailsCardHTML(entry, color)}
        ${generateImagesCardHTML(entry, color)}
    `;
    contentHTML += entryHTML;
  });

  return contentHTML
}

function generateFirstCardHTML(entry, color) {
  // Generate first card
  var html = `
    <div class="grid-item">
      <div class="mdc-card" style="background-color:${color};">
        <section class="mdc-card__primary">
          <h1 class="mdc-card__title mdc-card__title--large">${entry.name}</h1>
          <h2 class="mdc-card__subtitle">${entry.details.role}</h2>
        </section>
        <section class="mdc-card__supporting-text">
          ${entry.summary.join('<br>')}
        </section>
  `;

  // If website, display website
  if (entry.details.website) {
    html += `
      <section class="mdc-card__actions">
        <a class="mdc-button mdc-button--compact mdc-card__action" href="${entry.details.website}" target="_">Website</a>
      </section>
    `;
  }

  // Close first card
  html += `
      </div>
    </div>
  `;

  return html;
}

function generateDetailsCardHTML(entry, color) {
  var html = `
    <div class="grid-item">
      <div class="mdc-card" style="background-color:${color};">
        <section class="mdc-card__primary">
          <h1 class="mdc-card__title mdc-card__title--large">Details</h1>
        </section>
        <section class="mdc-card__supporting-text">
          ${JSON.stringify(entry.details, null, 2).replace(/(\r\n|\r|\n)/g, '<br>').replace(/  /g, '&nbsp;&nbsp')}
        </section>
      </div>
    </div>
  `;

  return html;
}

function generateLocationCardHTML(entry, color) {
  var html = `
    <div class="grid-item">
      <div class="mdc-card" style="background-color:${color};">
        <section class="mdc-card__primary">
          <h1 class="mdc-card__title mdc-card__title--large">Location</h1>
        </section>
        <section class="mdc-card__supporting-text">
          ${JSON.stringify(entry.location, null, 2).replace(/(\r\n|\r|\n)/g, '<br>').replace(/  /g, '&nbsp;&nbsp')}
        </section>
      </div>
    </div>
  `;

  return html;
}

function generateImagesCardHTML(entry, color) {
  var name = entry.name.toLowerCase();
  if (name === 'grok + banter') name = 'grokandbanter';

  var filenames = imageFilenames[name];
  if (filenames === undefined || filenames.length === 0) {
    return '';
  }

  // Create grid item and card
  var html = `
    <div class="grid-item">
      <div class="mdc-card" style="background-color:${color};">
        <section class="mdc-card__primary">
          <h1 class="mdc-card__title mdc-card__title--large">Image Gallery</h1>
        </section>
        <section class="mdc-card__supporting-text">
  `;

  // Add images
  filenames.forEach(function (filename) {
    html += `
      <a href="/assets/images/${name}/${filename}" target="_">
        <img src="/assets/images/${name}/${filename}" class="entry-image"></img>
      </a>
    `;
  });


  // Close all elements
  html += `
        </section>
      </div>
    </div>
  `;

  return html;
}

function generateInvisibleCardHTML() {
  var html = `
    <div class="grid-item">
      <div class="mdc-card" style="visibility:hidden;">
        <section class="mdc-card__primary">
          <h1 class="mdc-card__title mdc-card__title--large">NOthing</h1>
        </section>
        <section class="mdc-card__supporting-text">
          Nothing d
        </section>
      </div>
    </div>
  `;

  return html;
}
