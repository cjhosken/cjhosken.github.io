function toggle_item(id) {
    var parent = document.getElementById(id)
    var child = parent.querySelector(".portfolio-section-item-lightbox");
    child.classList.add("show");
}

function item_to_html(item) {
    html = "";
    html += "<div class='lightbox-media-item'>";

    switch (item.type) {
        case 0:
            html += "<img src='" + item.link + "' alt='" + item.name + "' class='lightbox-media'></img>";
            break;
        case 1:
            html += "<video controls class='lightbox-media'> <source src='" + item.link + "' type='video/mp4'> </video>";
            break;
        case 2:
            html += "<iframe width='480' height='320' src='" + item.link + "' class='lightbox-media' title='" + item.name + "' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
            break;
    }

    html += "<p>" + item.description + "</p>";
    html += "</div>";

    return html;
}

function load_portfolio_items() {
    fetch("../scripts/data.json")
        .then(response => response.json())
        .then(result => {

        for (var i = 0; i < result.categories.length; i++) {
            
            var category = result.categories[i];
            html = "";

            for (var j = 0; j < category.items.length; j++) {
                var item = category.items[j];
                
                html += '<div class="portfolio-section-item" onclick="load_lightbox(' + i + ", " + j + ');">';
                html += '<img src="' + item.cover + '" alt="' + item.name + '">';
                html += '<div class="portfolio-section-item-flipped">' ;
                html += '<h1>' + item.name + '</h1>';
                html += '<h2>' + item.year + " | " + item.client + '</h2>';
                html += '<p>' + item.synopsis + '<p>';
                html += '<div class="portfolio-section-item-learn-hint">';
                html += '<p> Learn More </p>';
                html += '<i class="fa-solid fa-arrow-right"></i>'
                html += '</div>';
                html += "</div></div>"
            }
            switch (category.name) {
                case "sketches":
                    $("#sketches").html(html);
                    break;
                case "films":
                    $("#films").html(html);
                    break;
                case "digitals":
                    $("#digitals").html(html);
                    break;
                case "animations":
                    $("#animations").html(html);
                    break;
                case "others":
                    $("#others").html(html);
                    break;
            }
            
        }
    });
}

function load_lightbox(category_index, item_index) {
    fetch("../scripts/data.json")
        .then(response => response.json())
        .then(result => {

    var item = result.categories[category_index].items[item_index];

    var lightbox = document.getElementById("portfolio-lightbox");

    lightbox.querySelector("#title").innerHTML = item.name;
    lightbox.querySelector("#description").innerHTML = item.synopsis + "<br> </br>" + item.description;

    var mediaItemsHTML = "";

    for (let idx = 0; idx < item.items.length; idx++) {
        mediaItemsHTML += item_to_html(item.items[idx]);
    }


    lightbox.querySelector("#carousel").innerHTML = mediaItemsHTML;

    slideIndex = 0;

    $("#portfolio-lightbox").fadeIn(250);
    lightbox.style.display = "flex";
    document.querySelector("html").style.overflowY = "hidden";

    next_slide();
});
}

let slideIndex = 0;

function next_slide() {
    let i;
    let slides = document.getElementsByClassName("lightbox-media-item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "flex";
}


function last_slide() {
    let i;
    let slides = document.getElementsByClassName("lightbox-media-item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex--;

    if (slideIndex < 1) {slideIndex = slides.length}
    slides[slideIndex-1].style.display = "flex";
}


$(document).ready(function() {
    load_portfolio_items();
});
