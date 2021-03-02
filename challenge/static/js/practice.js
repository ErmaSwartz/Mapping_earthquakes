// d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson").then(function(data){
// // 4. Use the same style as the earthquake data.  
// function styleInfo(feature) {
//   return {
//     opacity: 1,
//     fillOpacity: 1,
//     fillColor: getColor(feature.properties.mag),
//     color: "#000000",
//     radius: getRadius(feature.properties.mag),
//     stroke: true,
//     weight: 0.5
//   };
// }
// // 5. Change the color function to use three colors for the major earthquakes based on the magnitude of the earthquake.
// // This function determines the color of the circle based on the magnitude of the earthquake.
// function getColor(magnitude) {
//   if (magnitude > 5) {
//     return "#ea2c2c";
//   }
//   if (magnitude > 4) {
//     return "#ea822c";
//   }
//   if (magnitude > 3) {
//     return "#ee9c00";
//   }
// }
// 6. Use the function that determines the radius of the earthquake marker based on its magnitude.
// This function determines the radius of the earthquake marker based on its magnitude.
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
// function getRadius(magnitude) {
//   if (magnitude === 0) {
//     return 1;
//   }
//   return magnitude * 4;
// }
  
// 7. Creating a GeoJSON layer with the retrieved data that adds a circle to the map 
// sets the style of the circle, and displays the magnitude and location of the earthquake
//  after the marker has been created and styled.
  // L.geoJson(data, {
  //   // We turn each feature into a circleMarker on the map.
  //   pointToLayer: function(feature, latlng) {
  //       console.log(data);
  //       return L.circleMarker(latlng);
  //     },
  //   // We set the style for each circleMarker using our styleInfo function.
  // style: styleInfo,
  // });





//   // 8. Add the major earthquakes layer to the map.

//   let baseMaps = {
//     "Streets" : streets,
//     "Satellite Streets": satelliteStreets
//   };
//   // Create the earthquake layer for our map.
//   // let earthquakes = new L.layerGroup();
//   let earthquakes = new L.layerGroup();
//   let tectonic_plates = new L.layerGroup();
//   let major_quakes = new L.layerGroup();
  
  
//   // We define an object that contains the overlays.
//   // This overlay will be visible all the time.
//   let overlays = {
//   Earthquakes: earthquakes,
//   Tectonics: tectonic_plates,
//   Major: major_quakes
//   };
  
//   // // Create the map object with center, zoom level and default layer.
//   // let map = L.map('mapid', {
//   //   center: [39.5, -98.5],
//   //   zoom: 3,
//   //   layers: [streets]
//   // })
  
//   // Then we add a control to the map that will allow the user to change
//   // which layers are visible.
//   L.control.layers(baseMaps, overlays).addTo(map); 
  
//     // 3. Use d3.json to make a call to get our Tectonic Plate geoJSON data.
//     d3.json(boundaries).then(function(data) {
//       console.log(data);
//       L.geoJson(data, {
//         style: myStyle
//       }
//         ).addTo(tectonic_plates)
//   });

// d3.json(major_eqs).then(function(data) {
//   console.log(data);
//   L.geoJson(data, {
//     style: styleInfo()
//   }
//     ).addTo(major_quakes)
// });

//   // Then we add a control to the map that will allow the user to change
// // which layers are visible.
// L.control.layers(baseMaps, overlays).addTo(map); 
  
//   // 9. Close the braces and parentheses for the major earthquake data.
//   });
  
//   // Here we create a legend control object.
//   let legend = L.control({
//     position: "bottomright"
  
//   });
  
//   // Then add all the details for the legend
//   legend.onAdd = function() {
//     let div = L.DomUtil.create("div", "info legend");
  
//     const magnitudes = [0, 1, 2, 3, 4, 5];
//     const colors = [
//       "#98ee00",
//       "#d4ee00",
//       "#eecc00",
//       "#ee9c00",
//       "#ea822c",
//       "#ea2c2c"
//     ];
  
//   // Looping through our intervals to generate a label with a colored square for each interval.
//     for (var i = 0; i < magnitudes.length; i++) {
//       console.log(colors[i]);
//       div.innerHTML +=
//         "<i style='background: " + colors[i] + "'></i> " +
//         magnitudes[i] + (magnitudes[i + 1] ? "&ndash;" + magnitudes[i + 1] + "<br>" : "+");
//       }
//       return div;
//     };
  
//     // Finally, we our legend to the map.
//     legend.addTo(map);
  
  
//     // Use d3.json to make a call to get our Tectonic Plate geoJSON data.
//     d3.json().then(() {
      
//     });
//   });