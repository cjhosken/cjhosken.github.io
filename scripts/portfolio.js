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
    // A GHOST STORY

    new PortfolioItem("A Ghost Story", "../assets/portfolio/art/a_ghost_story/a_ghost_story.jpg", "desc", [
        new LightBoxItem("concept", "<img src='../assets/portfolio/art/a_ghost_story/a_ghost_story.jpg' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("concept", "<img src='../assets/portfolio/art/a_ghost_story/0_house_rough.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("concept", "<img src='../assets/portfolio/art/a_ghost_story/3_texturing_and_grass.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("concept", "<img src='../assets/portfolio/art/a_ghost_story/4_review.jpg' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("concept", "<img src='../assets/portfolio/art/a_ghost_story/9_environment_base.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("concept", "<img src='../assets/portfolio/art/a_ghost_story/11_trees.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("Final Animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/art/a_ghost_story/15_viewport_final.mp4' type='video/mp4'> </video>"),
    ], "digitals"),

    // BLM

    new PortfolioItem("As the paint wears away", "../assets/portfolio/art/blm/1_paint.png", "desc", [
        new LightBoxItem("concept", "<img src='../assets/portfolio/art/blm/1_paint.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("concept", "<img src='../assets/portfolio/art/blm/0_concept.png' alt='concept' class='lightbox-media'>"),
    ], "digitals"),

    // P66

    new PortfolioItem("P66", "../assets/portfolio/art/p66/11_new_grade.png", "desc", [
        new LightBoxItem("concept", "<img src='../assets/portfolio/art/p66/11_new_grade.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("concept", "<img src='../assets/portfolio/art/p66/1_labelled.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("concept", "<img src='../assets/portfolio/art/p66/3_buildings.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("concept", "<img src='../assets/portfolio/art/p66/5_advanced_clouds.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("concept", "<img src='../assets/portfolio/art/p66/8_revamp.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("concept", "<img src='../assets/portfolio/art/p66/10_new_clouds.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("Final Animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/art/p66/P66_Viewport.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("Final Animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/art/p66/P66_low_v01.mp4' type='video/mp4'> </video>"),
    ], "digitals")
];

let animation_items = [
    // CITY RACING
    new PortfolioItem("City Racing", "../assets/portfolio/animations/car_drift/banner.png", "desc", [
        new LightBoxItem("Final Animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/car_drift/10_final.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("concept", "<img src='../assets/portfolio/animations/car_drift/0_concept.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("scene layout", "<img src='../assets/portfolio/animations/car_drift/scene_layout.png' alt='layout' class='lightbox-media'>"),
        new LightBoxItem("Viewport animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/car_drift/6_person.mp4' type='video/mp4'> </video>"),
    ], "animations"),

    // CREATURE BREACH

    new PortfolioItem("Creature Breach", "../assets/portfolio/animations/creature_breach/banner.png", "desc", [
        new LightBoxItem("Final Animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/creature_breach/fluid.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("Core Animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/creature_breach/anim.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("Saliva Tests", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/creature_breach/saliva.mp4' type='video/mp4'> </video>"),
    ], "animations"),

    // DESERT TEMPLE

    new PortfolioItem("Desert Temple", "../assets/portfolio/animations/desert_temple/banner.png", "desc", [
        new LightBoxItem("Final Animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/desert_temple/desert_temple.mov' type='video/mp4'> </video>"),
        new LightBoxItem("lighting", "<img src='../assets/portfolio/animations/desert_temple/light.png' alt='layout' class='lightbox-media'>"),
        new LightBoxItem("wide shot", "<img src='../assets/portfolio/animations/desert_temple/wide.png' alt='layout' class='lightbox-media'>"),
    ], "animations"),

    // ORNITHOPTER

    new PortfolioItem("Ornithopter", "../assets/portfolio/animations/dune_ornithopter/cover.png", "desc", [
        new LightBoxItem("Final Animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/dune_ornithopter/dune_animation_clean.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("Final Animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/dune_ornithopter/viewport.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("wide shot", "<img src='../assets/portfolio/animations/dune_ornithopter/screenshot.png' alt='layout' class='lightbox-media'>"),
    ], "animations"),

    // LOW ORBIT

    new PortfolioItem("Low Orbit", "../assets/portfolio/animations/low_orbit/2_grading.png", "desc", [
        new LightBoxItem("Final Animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/low_orbit/earth_with_audio.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("wide shot", "<img src='../assets/portfolio/animations/low_orbit/earth.png' alt='layout' class='lightbox-media'>"),
        new LightBoxItem("wide shot", "<img src='../assets/portfolio/animations/low_orbit/ship.png' alt='layout' class='lightbox-media'>"),
        new LightBoxItem("wide shot", "<img src='../assets/portfolio/animations/low_orbit/shuttle.png' alt='layout' class='lightbox-media'>"),
    ], "animations"),

    // MAUI SKIT

    new PortfolioItem("Maui Skit", "../assets/portfolio/animations/maui_skit/cover.png", "desc", [
        new LightBoxItem("Final Animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/maui_skit/16_rendered.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("Final Animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/maui_skit/0_drawings.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("Final Animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/maui_skit/1_blocking.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("Final Animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/maui_skit/7_more_blocking.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("Final Animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/maui_skit/15_final_animation.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("wide shot", "<img src='../assets/portfolio/animations/maui_skit/14_retexture.png' alt='layout' class='lightbox-media'>"),
    ], "animations"),

    // MOVING DAY

    new PortfolioItem("Moving Day", "../assets/portfolio/animations/moving_day/cover.png", "desc", [
        new LightBoxItem("Final Animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/moving_day/8_final.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("wide shot", "<img src='../assets/portfolio/animations/moving_day/sketch.png' alt='layout' class='lightbox-media'>"),
        new LightBoxItem("wide shot", "<img src='../assets/portfolio/animations/moving_day/paint.png' alt='layout' class='lightbox-media'>"),
        new LightBoxItem("wide shot", "<img src='../assets/portfolio/animations/moving_day/rig.png' alt='layout' class='lightbox-media'>"),
        new LightBoxItem("Final Animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/moving_day/0_concept.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("Final Animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/moving_day/6_polish.mp4' type='video/mp4'> </video>"),
    ], "animations"),

    // SCI FI PLAINS

    new PortfolioItem("Sci Fi Plains", "../assets/portfolio/animations/sci_fi_plains/7_grade.png", "desc", [
        new LightBoxItem("Final Animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/sci_fi_plains/cliff_final_wide_with_audio.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("wide shot", "<img src='../assets/portfolio/animations/sci_fi_plains/0_layout.png' alt='layout' class='lightbox-media'>"),
        new LightBoxItem("wide shot", "<img src='../assets/portfolio/animations/sci_fi_plains/4_grade.png' alt='layout' class='lightbox-media'>"),
        new LightBoxItem("wide shot", "<img src='../assets/portfolio/animations/sci_fi_plains/5_drawover.png' alt='layout' class='lightbox-media'>"),
        new LightBoxItem("wide shot", "<img src='../assets/portfolio/animations/sci_fi_plains/7_grade.png' alt='layout' class='lightbox-media'>"),
        new LightBoxItem("Final Animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/sci_fi_plains/cliff_viewport.mp4' type='video/mp4'> </video>"),
    ], "animations"),
    
];

let film_items = [
    // FALLOUT SHOPPING
    new PortfolioItem("Fallout Shopping", "../assets/portfolio/films/fallout_shopping/cover.png", "description", [
        new LightBoxItem("Entire short film", "<iframe width='480' height='320' src='https://www.youtube.com/embed/BrBCp5VYLho' class='lightbox-media' title='Fallout Shopping' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"),
        new LightBoxItem("synopsis", "<img src='../assets/portfolio/films/fallout_shopping/synop.jpg' alt='synopsis' class='lightbox-media'>"),
        new LightBoxItem("Video demo", "<video controls class='lightbox-media'> <source src='../assets/portfolio/films/fallout_shopping/storyboard.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("concept 1", "<img src='../assets/portfolio/films/fallout_shopping/concept_pg1.jpg' alt='concept 1' class='lightbox-media'>"),
        new LightBoxItem("concept 2", "<img src='../assets/portfolio/films/fallout_shopping/concept_pg2.png' alt='concept 2' class='lightbox-media'>"),
        new LightBoxItem("concept 3", "<img src='../assets/portfolio/films/fallout_shopping/concept_pg3.png' alt='concept 3' class='lightbox-media'>"),
        new LightBoxItem("Turntable", "<video controls class='lightbox-media'> <source src='../assets/portfolio/films/fallout_shopping/turntable.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("test", "<img src='../assets/portfolio/films/fallout_shopping/test.png' alt='test' class='lightbox-media'>"),
        new LightBoxItem("sc_2_test", "<img src='../assets/portfolio/films/fallout_shopping/sc_2_test.png' alt='sc2 test' class='lightbox-media'>"),
        new LightBoxItem("02_render", "<img src='../assets/portfolio/films/fallout_shopping/02_render.png' alt='render' class='lightbox-media'>"),
    ], "films"),

    // LAMP ATTACK

    new PortfolioItem("Lamp Attack!", "../assets/portfolio/films/lamp_attack/cover.png", "description", [
        new LightBoxItem("Entire short film", "<iframe width='480' height='320' src='https://www.youtube.com/embed/w5oKCQUjC4A' class='lightbox-media' title='Fallout Shopping' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"),
        new LightBoxItem("sketch", "<img src='../assets/portfolio/films/lamp_attack/0_sketch.jpg' alt='sketch' class='lightbox-media'>"),
        new LightBoxItem("Storyboard", "<video controls class='lightbox-media'> <source src='../assets/portfolio/films/lamp_attack/storyboard.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("letter rig", "<img src='../assets/portfolio/films/lamp_attack/rig.png' alt='rig' class='lightbox-media'>"),
        new LightBoxItem("Luxo Rig", "<video controls class='lightbox-media'> <source src='../assets/portfolio/films/lamp_attack/luxo_rig_demo.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("Early anim test", "<video controls class='lightbox-media'> <source src='../assets/portfolio/films/lamp_attack/early_anim_test.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("light", "<img src='../assets/portfolio/films/lamp_attack/lighting_test.png' alt='light' class='lightbox-media'>"),
        new LightBoxItem("Crowd Test", "<video controls class='lightbox-media'> <source src='../assets/portfolio/films/lamp_attack/failed_crowd_test.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("Mock Pixar Intro", "<video controls class='lightbox-media'> <source src='../assets/portfolio/films/lamp_attack/mock_pixar_intro.mp4' type='video/mp4'> </video>"),
    ], "films"),

    // SPARKY

    new PortfolioItem("Sparky", "../assets/portfolio/films/sparky/cover.jpg", "description", [
        new LightBoxItem("Entire short film", "<iframe width='480' height='320' src='https://www.youtube.com/embed/MiW7fpVK_S4' class='lightbox-media' title='Fallout Shopping' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"),
        new LightBoxItem("light", "<img src='../assets/portfolio/films/sparky/old_sparky.png' alt='sparky' class='lightbox-media'>"),
        new LightBoxItem("light", "<img src='../assets/portfolio/films/sparky/street.png' alt='street' class='lightbox-media'>"),
        new LightBoxItem("light", "<img src='../assets/portfolio/films/sparky/anim.png' alt='animation' class='lightbox-media'>"),
        new LightBoxItem("light", "<img src='../assets/portfolio/films/sparky/turbines.png' alt='turbines' class='lightbox-media'>"),
        new LightBoxItem("light", "<img src='../assets/portfolio/films/sparky/warehouse.png' alt='warehouse' class='lightbox-media'>"),
    ], "films"),
];

let other_items = [

    // BREEZE

    new PortfolioItem("Breeze Render Engine", "../assets/portfolio/other/breeze/breeze_render_engine.png", "description", [
        new LightBoxItem("Scene example screenshot", "<img src='../assets/portfolio/other/breeze/breeze_render_engine.png' alt='scene example' class='lightbox-media'>"),
        new LightBoxItem("Video demo", "<video controls class='lightbox-media'> <source src='../assets/portfolio/other/breeze/breeze_demo.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("Obj import screenshot", "<img src='../assets/portfolio/other/breeze/objs.png' alt='obj import example' class='lightbox-media'>"),
        new LightBoxItem("Render from demo", "<img src='../assets/portfolio/other/breeze/render.png' alt='render' class='lightbox-media'>"),
    ], "others"),

    // SICLE

    new PortfolioItem("Sicle Maps App", "../assets/portfolio/other/sicle/sicle_maps_app.jpg", "description", [
        new LightBoxItem("App screenshot", "<img src='../assets/portfolio/other/sicle/sicle_maps_app.jpg' alt='app screenshot' class='lightbox-media'>"),
        new LightBoxItem("Video demo", "<video controls class='lightbox-media'> <source src='../assets/portfolio/other/sicle/sicle_demo.mp4' type='video/mp4'> </video>"),
    ] , "others"),

    // WEBSITE

    new PortfolioItem("Website", "../assets/portfolio/other/website/my_website.png", "description", [
        new LightBoxItem("Home page", "<img src='../assets/portfolio/other/website/my_website.png' alt='home page' class='lightbox-media'>"),
    ], "others"),
];

function load_digital_items() {
    html = "";
    index = 0;

    for (let pdx = 0; pdx < digital_items.length; pdx++) {
        var p = digital_items[pdx];

        html += '<div class="portfolio-section-item" onclick="load_lightbox(' + "'" + p.name + "', '" + p.description + "', '" + p.group + "'," + index + ');">';
        html += '<img src="' + p.cover + '" alt="' + p.name + '">';
        html += '<div class="portfolio-section-item-flipped">';
        html += '<h1>' + p.name + '</h1>';
        html += '<p>' + p.description + '<p>';
        html += "</div></div>"

        index += 1;
    }

    $("#digitals").html(html);
}

function load_animation_items() {
    html = "";
    index = 0;

    for (let pdx = 0; pdx < animation_items.length; pdx++) {
        var p = animation_items[pdx];

        html += '<div class="portfolio-section-item" onclick="load_lightbox(' + "'" + p.name + "', '" + p.description + "', '" + p.group + "'," + index + ');">';
        html += '<img src="' + p.cover + '" alt="' + p.name + '">';
        html += '<div class="portfolio-section-item-flipped">';
        html += '<h1>' + p.name + '</h1>';
        html += '<p>' + p.description + '<p>';
        html += "</div></div>"

        index += 1;
    }

    $("#animations").html(html);
}

function load_film_items() {
    html = "";
    index = 0;

    for (let pdx = 0; pdx < film_items.length; pdx++) {
        var p = film_items[pdx];

        html += '<div class="portfolio-section-item" onclick="load_lightbox(' + "'" + p.name + "', '" + p.description + "', '" + p.group + "'," + index + ');">';
        html += '<img src="' + p.cover + '" alt="' + p.name + '">';
        html += '<div class="portfolio-section-item-flipped">';
        html += '<h1>' + p.name + '</h1>';
        html += '<p>' + p.description + '<p>';
        html += "</div></div>"

        index += 1;
    }

    $("#films").html(html);
}

function load_other_items() {
    html = "";
    index = 0;

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
}

function load_lightbox(name, description, group, index) {
    var lightbox = document.getElementById("portfolio-lightbox");

    lightbox.querySelector("#title").innerHTML = name;
    lightbox.querySelector("#description").innerHTML = description;

    var mediaItemsHTML = "";

    if (group == "others") {
        var items = other_items[index].lightboxItems;

        for (let idx = 0; idx < items.length; idx++) {
            mediaItemsHTML += items[idx].toHtml();
        }
    } else if (group == "films") {
        var items = film_items[index].lightboxItems;

        for (let idx = 0; idx < items.length; idx++) {
            mediaItemsHTML += items[idx].toHtml();
        }
    } else if (group == "animations") {
        var items = animation_items[index].lightboxItems;

        for (let idx = 0; idx < items.length; idx++) {
            mediaItemsHTML += items[idx].toHtml();
        }
    } else if (group == "digitals") {
        var items = digital_items[index].lightboxItems;

        for (let idx = 0; idx < items.length; idx++) {
            mediaItemsHTML += items[idx].toHtml();
        }
    }

    lightbox.querySelector("#carousel").innerHTML = mediaItemsHTML;

    slideIndex = 0;

    $("#portfolio-lightbox").fadeIn(250);
    lightbox.style.display = "flex";
    document.querySelector("html").style.overflowY = "hidden";

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


function load_portfolio_items() {
    load_digital_items();
    load_animation_items();
    load_film_items();
    load_other_items();
}

$(document).ready(function() {
    load_portfolio_items();
});
