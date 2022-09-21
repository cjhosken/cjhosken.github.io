class Project {
    constructor(name, image, role, company, link) {
        this.name = name;
        this.image = image;
        this.role = role;
        this.company = company;
        this.link = link;
    }
}

class Company {
    constructor(name, image, link) {
        this.name = name;
        this.image = image;
        this.link = link;
    }
}

let works = [
    new Project("FALLOUT SHOPPING", "falloutshopping.png", "Director / Animator", "Personal Project", "falloutshopping.html"),
    new Project("THE SCRAMBLE", "thescramble.jpg", "Director / VFX Artist", "Team Project", "thescramble.html"),
    new Project("HYDRATE", "hydrate.png", "Director / Editor", "Hydrate", "hydrate.html"),
    new Project("LAMP ATTACK!", "lampattack.png", "Director / Animator", "Team Project", "lampattack.html"),
    new Project("SPARKY", "sparky.jpg", "Producer / Animator", "BOAP Studios", "sparky.html"),
];

let companies = [
    new Company("BOAP Studios", "boap_minimal.png", "https://sites.google.com/view/boap-studio/")
]

function load_works() {
    var html = ""

    for (let idx = 0; idx < works.length; idx++) {
        var w = works[idx];

        html += "<div class='work-item'>";
        html += "<a href='" + "../html/" + w.link + "'>"
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
    var html = ""

    for (let idx = 0; idx < works.length; idx++) {
        var c = companies[idx];

        html += "<div class='company-item'>";
        html += "<a href='" + c.link + "'>"
        html += "<img src='" + "../images/companies/" + c.image + "'> </img>";
        html += "</a>"
        html += "</div>";

        $("#companies-list-container").html(html);
    }
}


$(document).ready(function() {
    load_works();
    load_companies();
});