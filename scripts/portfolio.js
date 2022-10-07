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

    new PortfolioItem("A Ghost Story", "../assets/portfolio/art/a_ghost_story/a_ghost_story.jpg", "A piece I made after seeing the movie, A Ghost Story.", [
        new LightBoxItem("concept", "<img src='../assets/portfolio/art/a_ghost_story/a_ghost_story.jpg' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("concept", "<img src='../assets/portfolio/art/a_ghost_story/0_house_rough.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("concept", "<img src='../assets/portfolio/art/a_ghost_story/3_texturing_and_grass.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("concept", "<img src='../assets/portfolio/art/a_ghost_story/4_review.jpg' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("concept", "<img src='../assets/portfolio/art/a_ghost_story/9_environment_base.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("concept", "<img src='../assets/portfolio/art/a_ghost_story/11_trees.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("Final Animation", "<video controls class='lightbox-media'> <source src='../assets/portfolio/art/a_ghost_story/15_viewport_final.mp4' type='video/mp4'> </video>"),
    ], "digitals"),

    // BLM

    new PortfolioItem("As the paint wears away", "../assets/portfolio/art/blm/1_paint.png", "Racism has been an issue for the past decades, especially in America. This piece was a commentary on the American Dream and how behind all the shiny patriotic paint theres a much deeper systemic problem.", [
        new LightBoxItem("The final piece. The paint represents the American Dream, and the fact it's being worn down is showing all of America's flaws. I chose to remove the eyes and ears from the sculpture to imply that people dont always see and hear the problem", "<img src='../assets/portfolio/art/blm/1_paint.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("The original piece without the paint. I hadn't figured out what I wanted to tell with the piece yet.", "<img src='../assets/portfolio/art/blm/0_concept.png' alt='concept' class='lightbox-media'>"),
    ], "digitals"),

    // P66

    new PortfolioItem("P66", "../assets/portfolio/art/p66/11_new_grade.png", "Inspired by the concept art of Fang Yi, I decided to try and re-create my favourite piece, P.66 Probe.", [
        new LightBoxItem("The final render. I probably would have worked more on it if my computer handled the volumetrics better. ", "<img src='../assets/portfolio/art/p66/11_new_grade.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("A quick breakdown of the original piece by Fang Yi. There were a tonn of buildings and I wanted to match the concept as closely as possible.", "<img src='../assets/portfolio/art/p66/1_labelled.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("A viewport render of the finished buildings.", "<img src='../assets/portfolio/art/p66/3_buildings.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("Figuring out how to do the clouds and mist was extremely challenging.", "<img src='../assets/portfolio/art/p66/5_advanced_clouds.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("I ended up changing the layout of the buildings because the previous setup wasnt working.", "<img src='../assets/portfolio/art/p66/8_revamp.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("Through giving myself more freedom to create, I was able to make the scene look better.", "<img src='../assets/portfolio/art/p66/10_new_clouds.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("During this time I also had the idea of making a short horror animation.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/art/p66/P66_Viewport.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("I tried rendering it out but the sheer number of volumes broke my renders, so I gave up on the idea.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/art/p66/P66_low_v01.mp4' type='video/mp4'> </video>"),
    ], "digitals")
];

let animation_items = [
    // CITY RACING
    new PortfolioItem("City Racing", "../assets/portfolio/animations/car_drift/banner.png", "I had always wanted to do a high energy car chase animation. So one day I sat down and did it!", [
        new LightBoxItem("The final animation. I wasn't able to render it in high quality as it required an insanely high sample count.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/car_drift/10_final.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("The first concept. I ended changing things because I wasn't getting the up close action packed feeling.", "<img src='../assets/portfolio/animations/car_drift/0_concept.png' alt='concept' class='lightbox-media'>"),
        new LightBoxItem("The scene layout. I remember basing it off a street in tokyo.", "<img src='../assets/portfolio/animations/car_drift/scene_layout.png' alt='layout' class='lightbox-media'>"),
        new LightBoxItem("I was very proud of the motion of the car. The sharp swing and the levelling out, all while the wheels kept spinning was very satisfying.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/car_drift/6_person.mp4' type='video/mp4'> </video>"),
    ], "animations"),

    // CREATURE BREACH

    new PortfolioItem("Creature Breach", "../assets/portfolio/animations/creature_breach/banner.png", "After spending a couple weeks messing around in Houdini. I decided I wanted to attempt a large scale fluid simulation. I had seen a similar creature breach animation online and felt like learning how to do that myself.", [
        new LightBoxItem("The fluid simulation. It took about 72 hours non-stop to bake.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/creature_breach/fluid.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("The base animation. This was definitely the easiest part of the entire project.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/creature_breach/anim.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("I also made a saliva simulation for the shot, but I ended up not using it for anything.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/creature_breach/saliva.mp4' type='video/mp4'> </video>"),
    ], "animations"),

    // DESERT TEMPLE

    new PortfolioItem("Desert Temple", "../assets/portfolio/animations/desert_temple/banner.png", "After hearing about the full Unreal Engine 5 release, I decided to play around with Megascans and Lumen. I was playing Tomb Raider at the time and wanted to making something that resembled a desert temple.", [
        new LightBoxItem("The full animation. The hardest part was getting the animation to work without breaking the scene.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/desert_temple/desert_temple.mov' type='video/mp4'> </video>"),
        new LightBoxItem("A quick lighting test. The fact that this software is free amazes me.", "<img src='../assets/portfolio/animations/desert_temple/light.png' alt='layout' class='lightbox-media'>"),
        new LightBoxItem("An large shot of the scene. I was able to throw this together in about an hour.", "<img src='../assets/portfolio/animations/desert_temple/wide.png' alt='layout' class='lightbox-media'>"),
    ], "animations"),

    // ORNITHOPTER

    new PortfolioItem("Ornithopter", "../assets/portfolio/animations/dune_ornithopter/cover.png", "After watching Dune, I loved the animations for the ornithopters and I had to try it for myself.", [
        new LightBoxItem("The full animation. This was done all over a single weekend.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/dune_ornithopter/dune_animation_clean.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("The ornithopter itself was a basic projection mapping hack.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/dune_ornithopter/viewport.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("The hardest part of the animation was getting the wings to flutter properly. I also wanted to have the sand react to the ornithopter, but that was too difficult.", "<img src='../assets/portfolio/animations/dune_ornithopter/screenshot.png' alt='layout' class='lightbox-media'>"),
    ], "animations"),

    // LOW ORBIT

    new PortfolioItem("Low Orbit", "../assets/portfolio/animations/low_orbit/2_grading.png", "In late 2021 I had taken a break from doing 3D to focus on programming, this piece was made during that time to get me back into the habit of animating. I also had lost my old earth asset and wanted to do a fun test with my newly created one.", [
        new LightBoxItem("The full animation.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/low_orbit/earth_with_audio.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("wide shot", "<img src='../assets/portfolio/animations/low_orbit/earth.png' alt='layout' class='lightbox-media'>"),
        new LightBoxItem("wide shot", "<img src='../assets/portfolio/animations/low_orbit/ship.png' alt='layout' class='lightbox-media'>"),
        new LightBoxItem("wide shot", "<img src='../assets/portfolio/animations/low_orbit/shuttle.png' alt='layout' class='lightbox-media'>"),
    ], "animations"),

    // MAUI SKIT

    new PortfolioItem("Maui Skit", "../assets/portfolio/animations/maui_skit/cover.png", "Using audio from the Disney film, Moana. I put my own spin on the character Maui. ", [
        new LightBoxItem("The finished animation. This was the first time that I had ever properly aniamted a dynamic character to audio.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/maui_skit/16_rendered.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("The storyboard animation. I sadly wasn't able to put the same level of personality into the 3D character.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/maui_skit/0_drawings.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("Blocking. This gave me a good starting place as I wasn't sure how to animate Maui jumping around the scene.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/maui_skit/1_blocking.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("I then realized that a good animation technique is to then animate the frame between two blocking poses and to keep doing that until the animation is smooth.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/maui_skit/7_more_blocking.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("The final viewport animation. I wasn't too happy with Maui's speed due to the timing and size of the set, but it was a good animation excercise.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/maui_skit/15_final_animation.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("A basic lighting test. I wanted to light the scene similar to how shots look in early 3D Disney animations.", "<img src='../assets/portfolio/animations/maui_skit/14_retexture.png' alt='layout' class='lightbox-media'>"),
    ], "animations"),

    // MOVING DAY

    new PortfolioItem("Moving Day", "../assets/portfolio/animations/moving_day/cover.png", "Moving Day was a short animation I made after making random sketches inside of the Blender. It explores the idea of what animals consider home.", [
        new LightBoxItem("The final animation. I was very pleased with how it turned out.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/moving_day/8-final.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("The original concept. I wanted to contrast the dark environment of an attick with with a warm sunrise glow.", "<img src='../assets/portfolio/animations/moving_day/sketch.jpg' alt='layout' class='lightbox-media'>"),
        new LightBoxItem("Once I had finished modelling the attic, I did a paintover sketch in Krita to experiment with what details I wanted to add to the shot.", "<img src='../assets/portfolio/animations/moving_day/paint.jpg' alt='layout' class='lightbox-media'>"),
        new LightBoxItem("The mouse. I began with sculpting and then retopologized, textured, rigged, and groomed him.", "<img src='../assets/portfolio/animations/moving_day/rig.png' alt='layout' class='lightbox-media'>"),
        new LightBoxItem("A simple 3d storyboard. This let me figure out timing and framing.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/moving_day/0-concept.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("The final viewport animation. This was one of the first times that I had made and used a high quality rig, so I was still learning best animation practices.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/animations/moving_day/6-polish.mp4' type='video/mp4'> </video>"),
    ], "animations"),

    // SCI FI PLAINS

    new PortfolioItem("Sci Fi Plains", "../assets/portfolio/animations/sci_fi_plains/7_grade.png", "Following the concept art by Thomas Dubois, I decided to experiment with large scale environments using Quixel's Megascans.", [
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
    new PortfolioItem("Fallout Shopping", "../assets/portfolio/films/fallout_shopping/cover.png", "With humanity wiped from existance, a retail robot is finally free to enjoy what he loves most; Going shopping!", [
        new LightBoxItem("The full animation took just under 2 full months to make. 1 month for concepting and planning, another for production.", "<iframe width='480' height='320' src='https://www.youtube.com/embed/BrBCp5VYLho' class='lightbox-media' title='Fallout Shopping' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"),
        new LightBoxItem("A synposis page that I threw together. This helped me determine whether or not I wanted to make Fallout Shopping.", "<img src='../assets/portfolio/films/fallout_shopping/synop.jpg' alt='synopsis' class='lightbox-media'>"),
        new LightBoxItem("A video of the storyboard matched to the music. It helped me get my thoughts together and know how long each shot was going to be.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/films/fallout_shopping/storyboard.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("A concept page of how I wanted the scenes to look like.", "<img src='../assets/portfolio/films/fallout_shopping/concept_pg1.jpg' alt='concept 1' class='lightbox-media'>"),
        new LightBoxItem("Another page of concepts. I based most of the scenes off the Central Festival shopping mall in Chiang Mai.", "<img src='../assets/portfolio/films/fallout_shopping/concept_pg2.png' alt='concept 2' class='lightbox-media'>"),
        new LightBoxItem("Another page of concepts. I never completed outdoor environment because I thought I could wing it. It ended up being the worst shot in the entire animation.", "<img src='../assets/portfolio/films/fallout_shopping/concept_pg3.png' alt='concept 3' class='lightbox-media'>"),

        new LightBoxItem("A turntable of the retail bot. I never gave him a name, he wasn't cool enough for that.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/films/fallout_shopping/turntable.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("An early lighting test of the opening shot. I struggled alot on trying to create a damaged apocalyptic floor.", "<img src='../assets/portfolio/films/fallout_shopping/test.png' alt='test' class='lightbox-media'>"),
        new LightBoxItem("Another early lighting test. This shot gave me good experience on how to light a hallway when the main light source is from the back. ", "<img src='../assets/portfolio/films/fallout_shopping/sc_2_test.png' alt='sc2 test' class='lightbox-media'>"),
        new LightBoxItem("This shot is what inspired me to make Fallout Shopping. I had imagined it weeks before I considered making it an animation.", "<img src='../assets/portfolio/films/fallout_shopping/02_render.png' alt='render' class='lightbox-media'>"),
    ], "films"),

    // LAMP ATTACK

    new PortfolioItem("Lamp Attack!", "../assets/portfolio/films/lamp_attack/cover.png", "Weve all grown accustomed to the brutality we see in the Pixar intro. But what about those poor Pixar letters everywhere else?", [
        new LightBoxItem("The Entire short film. I was amazed that a dumb idea I had while eating lunch ended up becoming a full short animaton.", "<iframe width='480' height='320' src='https://www.youtube.com/embed/w5oKCQUjC4A' class='lightbox-media' title='Fallout Shopping' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"),
        new LightBoxItem("The first sketch. The entire animation was built off this one quick drawing.", "<img src='../assets/portfolio/films/lamp_attack/0_sketch.jpg' alt='sketch' class='lightbox-media'>"),
        new LightBoxItem("This was the first time that I had made a storyboard for the entire short. As I was working in a team I wanted to show them what we were aiming for.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/films/lamp_attack/storyboard.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("Rigging the letters was a fun experience for me. There were no tutorials online so my rigging ability was really put to the test.", "<img src='../assets/portfolio/films/lamp_attack/rig.png' alt='rig' class='lightbox-media'>"),
        new LightBoxItem("Rigging Luxo Jr. wasnt as difficult as there were numerous tutorials on how to do it.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/films/lamp_attack/luxo_rig_demo.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("Early animation test. I started with just the core actors as I wanted them to look perfect in the final shot.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/films/lamp_attack/early_anim_test.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("A lighting test. I wanted the spotlight to be the main source of light as it would give off a more horror-like mood.", "<img src='../assets/portfolio/films/lamp_attack/lighting_test.png' alt='light' class='lightbox-media'>"),
        new LightBoxItem("Finding a way to animate large crowds was a huge challenge. Here's one of my failed crowd tests.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/films/lamp_attack/failed_crowd_test.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("While testing the letter and Luxo rigs, I made a mock Pixar intro.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/films/lamp_attack/mock_pixar_intro.mp4' type='video/mp4'> </video>"),
    ], "films"),

    // SPARKY

    new PortfolioItem("Sparky", "../assets/portfolio/films/sparky/cover.jpg", "In a quest to find a new power source for Glenton, a robot finds himself doing more harm than good. Or so it seems...", [
        new LightBoxItem("The entire short film took about 16 months to make.", "<iframe width='480' height='320' src='https://www.youtube.com/embed/MiW7fpVK_S4' class='lightbox-media' title='Fallout Shopping' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"),
        new LightBoxItem("An early concept of Sparky. I thew this together as a test to see how his limbs would interect with surroundings.", "<img src='../assets/portfolio/films/sparky/old_sparky.png' alt='sparky' class='lightbox-media'>"),
        new LightBoxItem("A screenshot of the road scene. Alot of duplication and moving was done for this.", "<img src='../assets/portfolio/films/sparky/street.png' alt='street' class='lightbox-media'>"),
        new LightBoxItem("A screenshot of Sparky during the animation phase. You can see we went for more tube based limbs so we could stretch Sparky as much as we needed to.", "<img src='../assets/portfolio/films/sparky/anim.png' alt='animation' class='lightbox-media'>"),
        new LightBoxItem("An early shot of the turbines. The mountain was everntually removed from the shot but you can see the rest is relatively similar to the final.", "<img src='../assets/portfolio/films/sparky/turbines.png' alt='turbines' class='lightbox-media'>"),
        new LightBoxItem("An interior of the warehouse. Making sure that the render settings for this scene was extremely difficult due to the amount of noise that was generated.", "<img src='../assets/portfolio/films/sparky/warehouse.png' alt='warehouse' class='lightbox-media'>"),
    ], "films"),
];

let other_items = [

    // BREEZE

    new PortfolioItem("Breeze Render Engine", "../assets/portfolio/other/breeze/breeze_render_engine.png", "Breeze Render Engine is a C++ application that allows artists to create scenes in OpenGL and then render them out with Breezes custom render engine.", [
        new LightBoxItem("A screenshot of a scene made in Breeze. All the transformations and colors are editable.", "<img src='../assets/portfolio/other/breeze/breeze_render_engine.png' alt='scene example' class='lightbox-media'>"),
        new LightBoxItem("A demo video of the program in action.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/other/breeze/breeze_demo.mp4' type='video/mp4'> </video>"),
        new LightBoxItem("The app also allows custom OBJ importing. Getting this working was an absolute pain.", "<img src='../assets/portfolio/other/breeze/objs.png' alt='obj import example' class='lightbox-media'>"),
        new LightBoxItem("The Render from the demo video.", "<img src='../assets/portfolio/other/breeze/render.png' alt='render' class='lightbox-media'>"),
    ], "others"),

    // SICLE

    new PortfolioItem("Sicle Maps App", "../assets/portfolio/other/sicle/sicle_maps_app.jpg", "Sicle Maps is a simplified alternative to Google Maps. Users can track their location and follow routes to their desired destination.", [
        new LightBoxItem("A screenshot of the app in use.", "<img src='../assets/portfolio/other/sicle/sicle_maps_app.jpg' alt='app screenshot' class='lightbox-media'>"),
        new LightBoxItem("An animation demo. The app runs on Android and uses the MapBox API.", "<video controls class='lightbox-media'> <source src='../assets/portfolio/other/sicle/sicle_demo.mp4' type='video/mp4'> </video>"),
    ] , "others"),

    // WEBSITE

    new PortfolioItem("Website", "../assets/portfolio/other/website/my_website.png", "I custom built this website! With HTML, CSS, Javascript and a lot of love, everything you see here was programmed by me.", [
        new LightBoxItem("The wonderful home page.", "<img src='../assets/portfolio/other/website/my_website.png' alt='home page' class='lightbox-media'>"),
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
        html += '<div class="portfolio-section-item-learn-hint">';
        html += '<p> Learn More </p>';
        html += '<i class="fa-solid fa-arrow-right"></i>'
        html += '</div>' ;
        html += "</div></div>";

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
        html += '<div class="portfolio-section-item-learn-hint">';
        html += '<p> Learn More </p>';
        html += '<i class="fa-solid fa-arrow-right"></i>'
        html += '</div>' ;
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
        html += '<div class="portfolio-section-item-learn-hint">';
        html += '<p> Learn More </p>';
        html += '<i class="fa-solid fa-arrow-right"></i>'
        html += '</div>' ;
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
        html += '<div class="portfolio-section-item-learn-hint">';
        html += '<p> Learn More </p>';
        html += '<i class="fa-solid fa-arrow-right"></i>'
        html += '</div>' ;
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
