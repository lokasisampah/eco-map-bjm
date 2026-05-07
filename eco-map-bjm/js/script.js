// Inisialisasi Peta
var map = L.map('map').setView([-3.316694, 114.590111], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Data Titik (Contoh) - Pastikan data.json sesuai
var locations = [
    { name: "Lokasi A", lat: -3.316694, lng: 114.590111 },
    { name: "Lokasi B", lat: -3.326694, lng: 114.600111 }
];

// Perbaikan: Pastikan marker ditambahkan dengan benar
locations.forEach(function(loc) {
    var marker = L.marker([loc.lat, loc.lng]).addTo(map);
    marker.bindPopup("<b>" + loc.name + "</b><br>Titik Sampah.");
});

// Jika menggunakan data.json
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            if(item.latitude && item.longitude) {
                L.marker([item.latitude, item.longitude]).addTo(map)
                    .bindPopup(item.keterangan || "Titik Lokasi");
            }
        });
    })
    .catch(err => console.log("Gagal memuat data.json, pastikan file ada."));