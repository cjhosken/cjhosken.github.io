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
            html += "<iframe src='" + item.link + "' class='lightbox-media' title='" + item.name + "' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
            break;
        case 3:
            html += '<iframe title="' + item.name + '" src="' + item.link + '" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share class="lightbox-media" width="1920" height="1080"> </iframe>'
            break;
    }

    html += "<p>" + item.description + "</p>";
    html += "</div>";

    return html;
}

function load_portfolio_items() {
    fetch("../scripts/portfolio.json")
        .then(response => response.json())
        .then(result => {

        for (var i = 0; i < result.categories.length; i++) {
            
            var category = result.categories[i];
            html = "";

            for (var j = 0; j < category.items.length; j++) {
                var item = category.items[j];
                
                html += '<div data-aos="fade-up" data-aos-duration="500" data-aos-once="true" class="portfolio-section-item" onclick="load_lightbox(' + i + ", " + j + ');">';
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
                case "projects":
                    $("#projects").html(html);
                    break;
                case "films":
                    $("#films").html(html);
                    break;
                case "others":
                    $("#others").html(html);
                    break;
            }
            
        }
    });
}

function load_lightbox(category_index, item_index) {
    fetch("../scripts/portfolio.json")
        .then(response => response.json())
        .then(result => {

    var item = result.categories[category_index].items[item_index];

    var lightbox = document.getElementById("portfolio-lightbox");

    lightbox.querySelector("#title").innerHTML = item.name;
    lightbox.querySelector("#year").innerHTML = item.year;
    lightbox.querySelector("#description").innerHTML = item.synopsis + "<br> </br>" + item.description;

    lightbox.querySelector("#tools-container").style.display = "none";
    lightbox.querySelector("#client-container").style.display = "none";
        
    lightbox.querySelector("#pipeline-container").style.display = "none";
    lightbox.querySelector("#role-container").style.display = "none";

    if (item.tools != "") {
        lightbox.querySelector("#tools-container").style.display = "block";
        lightbox.querySelector("#tools").innerHTML = "<em>" + item.tools + "</em>";
    }

    if (item.client != "") {
        lightbox.querySelector("#client-container").style.display = "block";
        lightbox.querySelector("#client").innerHTML = "<em>" + item.client + "</em>";
    }
    
    if (item.pipeline != "") {
        lightbox.querySelector("#pipeline-container").style.display = "block";
        lightbox.querySelector("#pipeline").innerHTML = "<em>" + item.pipeline + "</em>";
    }

    if (item.role != "") {
        lightbox.querySelector("#role-container").style.display = "block";
        lightbox.querySelector("#role").innerHTML = "<em>" + item.role + "</em>";
    }

    var mediaItemsHTML = "";

    for (let idx = 0; idx < item.items.length; idx++) {
        mediaItemsHTML += item_to_html(item.items[idx]);
    }

    lightbox.querySelector("#carousel").innerHTML = mediaItemsHTML;

    $("#portfolio-lightbox").fadeIn(250);
    lightbox.style.display = "flex";
    document.querySelector("html").style.overflowY = "hidden";
});
}

$(document).ready(function() {
    load_portfolio_items();
});
