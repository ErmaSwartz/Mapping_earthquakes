//We create the light map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data){
  L.geoJson(data).addTo(map);
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets" : streets,
    "Satellite Streets": satelliteStreets
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// // Accessing the airport GeoJSON URL
// let torontoHoods = 'https://raw.githubusercontent.com/ErmaSwartz/Mapping_earthquakes/mapping_geojson_polygons/mapping_geoJSON_polygons/torontoNeighborhoods.json'
// // Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}
// Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//     console.log(data);
//   L.geoJson(data).addTo(map);
// });