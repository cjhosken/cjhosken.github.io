
$(document).ready(function() {
    if (sessionStorage.getItem("splash") !== "false") {
        setTimeout(function() {
            $("#splash").fadeOut(500);
        }, 3000);
    }

    if (sessionStorage.getItem("popup") !== 'false') {
        setTimeout(function() {
            $("#university-container").fadeIn(350);
            document.getElementById("university-container").style.display = "flex";
        }, 500);
        sessionStorage.setItem("popup", "false");
    }
});



