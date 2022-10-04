
$(document).ready(function() {
    load_splash();
});


function load_splash() {
    if (sessionStorage.getItem("splash") !== "true") {
        $("#splash").show();
        document.getElementById("splash").style.display = "flex";

        document.querySelector("html").style.overflowY = "hidden";

        sessionStorage.setItem("splash", "true");


        setTimeout(function() {
            document.querySelector("html").style.overflowY = "overlay";
            $("#splash").fadeOut(350);
        }, 3000);
    }
}

