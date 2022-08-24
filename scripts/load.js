function load_home() {
    $("main").load("../pages/home.html");
}

function load_contact() {
    $("main").load("../pages/contact.html");
}

$(document).ready(function() {
    load_home();

    $("#home-button").onclick = load_home();
    $("#contact-button").onclick = load_contact();
})



