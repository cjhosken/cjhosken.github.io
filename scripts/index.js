function load_skills() {
    fetch("../scripts/index.json")
        .then(response => response.json())
        .then(result => {
        html = "";

        for (let sdx = 0; sdx < result.skills.length; sdx++) {
            var skill = result.skills[sdx];

            html += '<a href="' + skill.link + '" target="_blank" class="specific-skill-item" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">';
            html += '<img src="' + skill.logo + '" alt="' + skill.name + '">';
            html += '<div class="info">'
            html += '<p>' + skill.name + '</p>';
            html += '</div></a>';
        }

        document.getElementById("specific-skills-container").innerHTML = html;
    });
}

function load_companies() {
    fetch("/scripts/index.json")
    .then(response => response.json())
    .then(result => {
        html = "";

        for (let idx = 0; idx < result.companies.length; idx++) {
            var c = result.companies[idx];

            html += "<div class='company-item' data-aos='fade-up' data-aos-duration='500' data-aos-once='true'>";
            html += "<a href='" + c.link + "' target=_blank>"
            html += "<img src='" + c.logo + "' alt='" + c.name + "'> </img>";
            html += "</a>"
            html += "</div>";

            $("#companies-list-container").html(html);
        }
    });
}

$(document).ready(function() {
    load_skills();
    load_companies();

    ScrollReveal().reveal("#description", "#headshot");
});


