var width = 1000;
var height = 600;

var projection = d3.geoRobinson().scale(150).center([0, 27]).rotate([-100, 0]).translate([width / 2, height / 2]);

var svg = d3.select('body').append('svg').attr('width', width).attr('height', height);
var boundary = svg.append('g').attr('id', 'boundary');
var countries = svg.append('g').attr('id', 'countries');
var path = d3.geoPath().projection(projection);
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

d3.json('countries.json', function (json) {
  boundary
    .append('path')
    .datum(boundaryFeature)
    .attr('d', path);
  countries.selectAll('path')
    .data(json.features)
    .enter()
    .append('path')
    .attr('d', path);
});





/*
var width = 900;
var height = 600;

var projection = d3.geo.mercator();

var svg = d3.select('body').append('svg').attr('width', width).attr('height', height);
var path = d3.geo.path().projection(projection);
var g = svg.append('g');

d3.json('world-110m2.json', function(error, topology) {
  var geometries = topojson.object(topology, topology.objects.countries).geometries;
  g.selectAll('path').data(geometries).enter().append('path').attr('d', path)
});
*/

