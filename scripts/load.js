
$(document).ready(function() {


    setTimeout(function() {
        $("#university-container").fadeIn(350);
        document.getElementById("university-container").style.display = "flex";
    }, 500);

    window.addEventListener('resize', changeVideoSize);
        
    function changeVideoSize () {
        let width =screen.width;
        let height = screen.height;
        let vid = document.getElementById("canvas-video");

        let ratio = 16.0/9.0;
        let solve = width / height;

        console.log(solve);

        if (solve > ratio) {
            vid.style.width = "100%";
            vid.style.height = "auto";
        } else {
            vid.style.width = "auto";
            vid.style.height = "100%";
        }
    }

    changeVideoSize();
});



