/ 1. Create the interactive map
var map = L.map('map').setView([-24.87828, 29.57029], 13);


// 2. Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',

    maxZoom: 19

}).addTo(map);


// 3. Add a marker showing the ALLURES location
var marker = L.marker([-24.87828, 29.57029]).addTo(map);


// 4. Add information when visitors click the marker
marker.bindPopup(

    '<b>ALLURES PERFUMES</b><br>' +
    '126 Lekhureng Road,<br>' +
    'Ga Matlala, Limpopo,<br>' +
    'South Africa.<br>' +
    '<b>Embrace Your Scent!</b>'

);


// 5. Automatically open the location information
marker.openPopup();


// 6. Add a cir…