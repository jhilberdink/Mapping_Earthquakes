// Add a console.log to check to see if our code is working.
console.log("working");

// Create a map object with a center and a zoom level
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Get data from the cities.js file
// let cityData = cities;


// // Loop through the array and add a marker for each city to the map
// cityData.forEach(function(city) {
//     L.circleMarker(city.location, {
//         radius: city.population/100000
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
//     .addTo(map);
//     console.log(city)
// });

// coordinates for each plot to be used in the line
let line = [
    [33.9416, -118.4085],
    [30.1975, -97.6664],
    [43.6777, -79.624],
    [39.8729, -75.2437]
];

// create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "lightblue",
    dashArray: 4
}).addTo(map);
