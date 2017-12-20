var entriesJSON = `
{
  "type": "FeatureCollection",

  "features": [
    {
      "type": "Feature",
      "id": 1,
      "geometry": {
        "type": "Point",
        "coordinates": [-90, 30]
      },
      "properties": {
        "name": "Testing123"
      }
    }
  ]
}
`;

var entriesData = JSON.parse(entriesJSON);
