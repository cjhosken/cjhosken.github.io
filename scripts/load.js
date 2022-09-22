
$(document).ready(function() {


    if (sessionStorage.getItem("splash") !== "true") {
        $("#splash").show();
        document.getElementById("splash").style.display = "flex";

        document.getElementById("html").style.overflowY = "hidden";

        sessionStorage.setItem("splash", "true");


        setTimeout(function() {
            document.getElementById("html").style.overflowY = "overlay";
            $("#splash").fadeOut(350);
        }, 3000);


    }



    if (sessionStorage.getItem("popup") !== 'true') {
        sessionStorage.setItem("popup", "true");
        setTimeout(function() {
            $("#university-container").fadeIn(350);
            document.getElementById("university-container").style.display = "flex";
        }, 350);
    }
});



