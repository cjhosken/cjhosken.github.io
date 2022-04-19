const dropdown = document.querySelector(".dropdown");
const navMenu = document.querySelector(".nav-buttons");

dropdown.addEventListener("click", mobileMenu);

function mobileMenu() {
    if(dropdown.classList.contains("active")) {
        hideMenu()
    } else {
        dropdown.classList.add("active");
        navMenu.classList.add("active");
    }
}

const aboutButton = document.querySelector("#aboutButton");
const portfolioButton = document.querySelector("#portfolioButton");
const historyButton = document.querySelector("#historyButton");
const contactButton = document.querySelector("#contactButton");

aboutButton.addEventListener("click", hideMenu);
portfolioButton.addEventListener("click", hideMenu);
historyButton.addEventListener("click", hideMenu);
contactButton.addEventListener("click", hideMenu);


function hideMenu() {
    dropdown.classList.remove("active");
    navMenu.classList.remove("active");
}