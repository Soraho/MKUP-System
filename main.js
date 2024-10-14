function openOverlay(id) {
    var overlay = document.getElementById('overlay-' + id);
    overlay.style.display = 'block';
}

function closeOverlay() {
    var overlays = document.querySelectorAll('.overlay');
    overlays.forEach(function(overlay) {
        overlay.style.display = 'none';
    });
}