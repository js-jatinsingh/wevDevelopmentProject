// Initialize the map and set its view
const map = L.map('map').setView([20.5937, 78.9629], 5);
 // India on world view

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Destination data with coordinates
const destinations = [
    { name: "Paris, France", coords: [48.8566, 2.3522], description: "City of Light" },
    { name: "Tokyo, Japan", coords: [35.6895, 139.6917], description: "Land of the Rising Sun" },
    { name: "New York, USA", coords: [40.7128, -74.0060], description: "The Big Apple" },
    { name: "Sydney, Australia", coords: [-33.8688, 151.2093], description: "Harbor City" },
    { name: "Cape Town, South Africa", coords: [-33.9249, 18.4241], description: "Mother City" },
    
    // Karnataka, India locations
    { name: "Bengaluru, Karnataka, India", coords: [12.9716, 77.5946], description: "Garden City of India" },
    { name: "Hampi, Karnataka, India", coords: [15.3350, 76.4600], description: "Ancient Vijayanagara Empire" },
    { name: "Coorg, Karnataka, India", coords: [12.3375, 75.8069], description: "Scenic Hill Station" }
];


// Add markers for each destination
destinations.forEach(destination => {
    const marker = L.marker(destination.coords).addTo(map);
    marker.bindPopup(`<b>${destination.name}</b><br>${destination.description}`);
});
