
function playShowreel() {
    var container = document.getElementById("showreel-container");
    var video = document.getElementById("showreel-video");
    video.play();
    container.style.display = "block";
}

function stopShowreel() {
    var container = document.getElementById("showreel-container");
    var video = document.getElementById("showreel-video");
    video.pause();
    container.style.display = "none";
}