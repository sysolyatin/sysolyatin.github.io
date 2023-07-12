const imageSize = {width: 8192, height: 4516}
const maxZoom = 12;
const minZoom = 10;
const toLatLng = (x, y) => L.CRS.Simple.pointToLatLng(new L.Point(x, y), maxZoom);
const bounds = [toLatLng(0, 0), toLatLng(imageSize.width, imageSize.height)];

var map = L.map('map', {
    crs: L.CRS.Simple,
    maxBounds: bounds,
    minZoom,
    maxZoom,
    zoomSnap: 0,
}).fitBounds(bounds).setView([-0.3241766660753125, 0.4707859140374879], 11);
L.imageOverlay('static/russia.jpg', bounds).addTo(map);


map.on('click', function(e){
    const params = new URLSearchParams(window.location.search);
    if (!params.has('copy')) return;
    let textForCopy = `- title: title\n\tpos_x: ${e.latlng.lat}\n\tpos_y: ${e.latlng.lng}\n\tphoto: photo`
    navigator.clipboard.writeText(textForCopy)
    .then(() => {})
    .catch(err => { alert(err)});
});

var icon = L.icon({iconUrl: 'static/marker.png', iconSize: [30, 30], iconAnchor: [15, 35]});

var markers = L.markerClusterGroup({        
    disableClusteringAtZoom: 12,
    maxClusterRadius: 50,
    animateAddingMarkers: true,
    zoomToBoundsOnClick: true,
    spiderfyOnMaxZoom: false,
    animate: true
});

var places = document.getElementsByClassName("place");
for (var i = 0; i < places.length; i++) {
    let place = places.item(i);
    let coordinates = [place.getAttribute('data-x'), place.getAttribute("data-y")];
    let photoUrl = `https://111821.selcdn.ru/photomap/${place.getAttribute("data-photo")}.jpg`;
    let title = place.getAttribute("data-title");
    markers
        .addLayer(L.marker(coordinates, {icon: icon, opacity: 1})
        .bindTooltip(title)
        .on('click', function(e) {showPhoto(photoUrl, title);}));
}

map.addLayer(markers);

function showPhoto(url, title) {
    let photoArea = document.getElementById("photo");
    var photo = document.createElement("img");
    photo.setAttribute("src", url);
    photo.setAttribute("alt", title);
    photo.setAttribute("title", title);

    photoArea.style.display = "block";
    photo.onload = function() {
        photoArea.innerHTML = "";
        let photoTitle = document.createElement("div");
        photoTitle.setAttribute("id", "photoTitle");
        photoTitle.innerHTML = title;
        photoArea.appendChild(photo);
        photoArea.appendChild(photoTitle);
    };
    
}

function closePhoto() {
    let photoArea = document.getElementById("photo");
    photoArea.style.display = "none";
    photoArea.innerHTML = "";
    var loader = document.createElement("img");
    loader.setAttribute("src", "static/load.gif");
    photoArea.appendChild(loader);
}

window.onkeydown = function(event) {
    if (event.keyCode == 27) closePhoto();
};