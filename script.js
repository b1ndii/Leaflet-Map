// var map = L.map('map').setView([42.658869684690934, 21.161929323127325], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);


// var marker = L.marker([42.465288840438745, 21.468990748549697]).addTo(map);

// var circle = L.circle([51.508, -0.11], {
//     color: 'green',
//     fillColor: 'green',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);


// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map);

// marker.bindPopup('Lokacioni i jCoders: <br> <img src="https://media.licdn.com/dms/image/v2/C560BAQHeGgHBLgSWTQ/company-logo_200_200/company-logo_200_200/0/1630611987079/jcoders_logo?e=2147483647&v=beta&t=xGnTWzaoU3WNH9RuycpNOh-S8baMDcOo2w3lHRWVStU" alt=""> ').openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

// var greenIcon = L.icon({
//     iconUrl: 'leaf-green.png',
//     shadowUrl: 'leaf-shadow.png',

//     iconSize:     [38, 95], // size of the icon
//     shadowSize:   [50, 64], // size of the shadow
//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 62],  // the same for the shadow
//     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });

// L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);

// L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map).bindPopup("I am a green leaf.");

var littleton = L.marker([42.65917322650542, 21.165693430509386]).bindPopup('Prishtina'),
    denver    = L.marker([42.463389327478964, 21.469076579236056]).bindPopup('Gilan')


var cities = L.layerGroup([littleton, denver]);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});

var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});

var map = L.map('map', {
    center: [42.65917322650542, 21.165693430509386],
    zoom: 10,
    layers: [osm, cities]
});

var baseMaps = {
    "OpenStreetMap": osm,
    "OpenStreetMap.HOT": osmHOT
};

var overlayMaps = {
    "Cities": cities
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

var baseMaps = {
    "OpenStreetMap": osm,
    "<span style='color: red'>OpenStreetMap.HOT</span>": osmHOT
};

var crownHill = L.marker([42.66189745193389, 21.169184143234393]).bindPopup('Parku i Qytetit.'),
    rubyHill = L.marker([42.67499693234073, 21.211895195910767]).bindPopup('Parku i Gërmisë.');
    
var parks = L.layerGroup([crownHill, rubyHill]);
var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
});

layerControl.addBaseLayer(openTopoMap, "OpenTopoMap");
layerControl.addOverlay(parks, "Parks");



