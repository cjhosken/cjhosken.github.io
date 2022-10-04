function toggle_item(id) {
    var parent = document.getElementById(id)
    var child = parent.querySelector(".portfolio-section-item-lightbox");
    child.classList.add("show");
}

class PortfolioItem {
    constructor(name, cover, description, lightboxItems, group) {
        this.name = name;
        this.cover = cover;
        this.description = description;
        this.lightboxItems = lightboxItems;
        this.group = group;
    }
}

class LightBoxItem {
    constructor(description, media) {
        this.media = media;
        this.description = description;
    }

    toHtml() {
        html = "";
        html += "<div class='lightbox-media-item'>";
        html += this.media;
        html += "<p>" + this.description + "</p>";
        html += "</div>";

        return html;
    }
}


let sketchbook_items = [

];

let digital_items = [

];

let animation_items = [

];

let film_items = [

];

let other_items = [
    new PortfolioItem("Breeze Render Engine", "../assets/portfolio/other/breeze/breeze_render_engine.png", "description", [
        new LightBoxItem("Scene example screenshot", "<img src='../assets/portfolio/other/breeze/breeze_render_engine.png' alt='scene example' class='lightbox-media'>"),
        new LightBoxItem("Video demo", "<video controls class='lightbox-media'> <source src='../assets/portfolio/other/breeze/breeze_demo.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("Obj import screenshot", "<img src='../assets/portfolio/other/breeze/objs.png' alt='obj import example' class='lightbox-media'>"),
        new LightBoxItem("Render from demo", "<img src='../assets/portfolio/other/breeze/render.png' alt='render' class='lightbox-media'>"),
    ], "others"),
    new PortfolioItem("Sicle Maps App", "../assets/portfolio/other/sicle/sicle_maps_app.jpg", "description", [
        new LightBoxItem("App screenshot", "<img src='../assets/portfolio/other/sicle/sicle_maps_app.jpg' alt='app screenshot' class='lightbox-media'>"),
        new LightBoxItem("Video demo", "<video controls class='lightbox-media'> <source src='../assets/portfolio/other/sicle/sicle_demo.mp4' type='video/mp4'> </video>"),
    ] , "others"),
    new PortfolioItem("Website", "../assets/portfolio/other/website/my_website.png", "description", [
        new LightBoxItem("Home page", "<img src='../assets/portfolio/other/website/my_website.png' alt='home page' class='lightbox-media'>"),
    ], "others"),
];

function load_other_items(index) {
    html = "";

    for (let pdx = 0; pdx < other_items.length; pdx++) {
        var p = other_items[pdx];

        html += '<div class="portfolio-section-item" onclick="load_lightbox(' + "'" + p.name + "', '" + p.description + "', '" + p.group + "'," + index + ');">';
        html += '<img src="' + p.cover + '" alt="' + p.name + '">';
        html += '<div class="portfolio-section-item-flipped">';
        html += '<h1>' + p.name + '</h1>';
        html += '<p>' + p.description + '<p>';
        html += "</div></div>"

        index += 1;
    }

    $("#others").html(html);

    return index;

}

function load_lightbox(name, description, group, index) {
    var lightbox = document.getElementById("portfolio-popup");

    lightbox.querySelector("#title").innerHTML = name;
    lightbox.querySelector("#description").innerHTML = description;

    var mediaItemsHTML = "";

    if (group == "others") {
        var items = other_items[index].lightboxItems;

        for (let idx = 0; idx < items.length; idx++) {
            mediaItemsHTML += items[idx].toHtml();
        }
    }

    lightbox.querySelector("#carousel").innerHTML = mediaItemsHTML;

    slideIndex = 0;



    $(".portfolio-section-item-lightbox").fadeIn(250);
    document.getElementById("portfolio-popup").style.display = "flex";
    document.getElementById("html").style.overflowY = "hidden";

    next_slide();
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

function load_portfolio_items() {
    index = 0;
    index = load_other_items(index);
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
