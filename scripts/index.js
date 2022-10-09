

class SkillItem {
    constructor(name, image, link, skill) {
        this.name = name;
        this.image = image;
        this.link = link;
        this.skill = skill;
    }
}

class CompanyItem {
    constructor(name, image, link) {
        this.name = name;
        this.image = image;
        this.link = link;
    }
}

let skill_list = [
    new SkillItem("Blender", "../images/software/blender.png", "https://www.blender.org/", 5),
    new SkillItem("Houdini", "../images/software/houdini.png", "https://www.sidefx.com/", 3),
    new SkillItem("Unreal Engine 5", "../images/software/unreal.png", "https://www.unrealengine.com/en-UK/", 3),
    new SkillItem("Nuke", "../images/software/nuke.png", "https://www.foundry.com/products/nuke-family/nuke", 3),
    new SkillItem("DaVinci Resolve", "../images/software/resolve.png", "https://www.blackmagicdesign.com/products/davinciresolve", 4),
    new SkillItem("Krita", "../images/software/krita.png", "https://krita.org/en/", 3),
    new SkillItem("Python", "../images/software/python.png", "https://www.python.org/", 4),
    new SkillItem("Java", "../images/software/java.png", "https://www.oracle.com/java/", 4),
    new SkillItem("C++", "../images/software/cpp.png", "https://learn.microsoft.com/en-us/cpp/?view=msvc-170", 3),
    new SkillItem("HTML, CSS, JS", "../images/software/web.png", "https://www.w3schools.com/html/default.asp", 4),
];

let company_list = [
    new CompanyItem("BOAP Studios", "boap_minimal.png", "https://sites.google.com/view/boap-studio/")
]

function load_skills() {
    html = "";

    for (let sdx = 0; sdx < skill_list.length; sdx++) {
        var skill = skill_list[sdx];

        html += '<a href="' + skill.link + '" target="_blank" class="specific-skill-item">';
        html += '<img src="' + skill.image + '" alt="' + skill.name + '">';
        html += '<div class="info">'
        html += '<p>' + skill.name + '</p>';
        html += '<div>';

        for (cdx = 1; cdx <= 5; cdx++) {
            if (cdx <= skill.skill) {
                html += '<span class="fa fa-star checked"></span>';
            } else {
                html += '<span class="fa fa-star"></span>';
            }
        }

        html += '</div></div></a>';
    }

    document.getElementById("specific-skills-container").innerHTML = html;
}

function load_companies() {
    var html = ""

    for (let idx = 0; idx < company_list.length; idx++) {
        var c = company_list[idx];

        html += "<div class='company-item'>";
        html += "<a href='" + c.link + "' target=_blank>"
        html += "<img src='" + "../images/companies/" + c.image + "' alt='" + c.name + "'> </img>";
        html += "</a>"
        html += "</div>";

        $("#companies-list-container").html(html);
    }
}

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




$(document).ready(function() {
    load_skills();
    load_companies();
    load_splash();
});


