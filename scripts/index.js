function load_skills() {
    fetch("../scripts/index.json")
        .then(response => response.json())
        .then(result => {
        html = "";

        for (let sdx = 0; sdx < result.skills.length; sdx++) {
            var skill = result.skills[sdx];

            html += '<a href="' + skill.link + '" target="_blank" class="specific-skill-item">';
            html += '<img src="' + skill.logo + '" alt="' + skill.name + '">';
            html += '<div class="info">'
            html += '<p>' + skill.name + '</p>';
            html += '<div>';

            for (cdx = 1; cdx <= 5; cdx++) {
                if (cdx <= skill.score) {
                    html += '<span class="fa fa-star checked"></span>';
                } else {
                    html += '<span class="fa fa-star"></span>';
                }
            }

            html += '</div></div></a>';
        }

        document.getElementById("specific-skills-container").innerHTML = html;
    });
}

function load_companies() {
    fetch("../scripts/index.json")
    .then(response => response.json())
    .then(result => {
        html = "";

        for (let idx = 0; idx < result.companies.length; idx++) {
            var c = result.companies[idx];

            html += "<div class='company-item'>";
            html += "<a href='" + c.link + "' target=_blank>"
            html += "<img src='" + c.logo + "' alt='" + c.name + "'> </img>";
            html += "</a>"
            html += "</div>";

            $("#companies-list-container").html(html);
        }
    });
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

function open_splash() {
    sessionStorage.setItem("splash", "false");
}

$(document).ready(function() {
    load_skills();
    load_companies();
    load_splash();

    ScrollReveal().reveal("#description", "#headshot");
});


