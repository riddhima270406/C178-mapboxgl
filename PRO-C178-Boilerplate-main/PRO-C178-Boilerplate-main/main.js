mapboxgl.accessToken = "pk.eyJ1IjoicmlkZGhpbWEtMjciLCJhIjoiY2wxMjE2dnh4MmQwNzNpa2JucXVzcWdhNSJ9.qRlud9NQGSwmRdxzCsuIfA"

let latitude = 28.59784, longitude = 77.17345;

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [longitude, latitude],
    zoom: 16 
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {enableHighAccuracy: true},
        trackUserLocation: true,
    })
)

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    "top-left"
)