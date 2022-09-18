class Project {
    constructor(name, image, role, company, link) {
        this.name = name;
        this.image = image;
        this.role = role;
        this.company = company;
        this.link = link;
    }
}

let works = [
    new Project("FALLOUT SHOPPING", "falloutshopping.png", "Director / Animator", "Personal Project", ""),
    new Project("THE SCRAMBLE", "thescramble.jpg", "Director / VFX Artist", "Team Project", ""),
    new Project("HYDRATE", "hydrate.png", "Director / Editor", "Hydrate", ""),
    new Project("LAMP ATTACK!", "lampattack.png", "Director / Animator", "Team Project", ""),
    new Project("SPARKY", "sparky.jpg", "Producer / Animator", "BOAP Studios", ""),
];

function load_works() {
    var html = ""

    for (let idx = 0; idx < works.length; idx++) {
        var w = works[idx];

        html += "<div class='work-item'>";
        html += "<a href='" + w.link + "'>"
        html += "<img src='" + "../images/works/" + w.image + "'> </img>";
        html += "<h1>" + w.name + "</h1>";
        html += "<h2>" + w.role + "</h2>";
        html += "<p>" + w.company + "</p>";
        html += "</a>"
        html += "</div>";

        $("#works-list-container").html(html);
    }
}

function load_companies() {

}


$(document).ready(function() {
    load_works();
    load_companies();
});