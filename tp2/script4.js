

document.addEventListener("DOMContentLoaded", function (event) {

    let div = document.getElementById("customDiv");

    div.style = "background: pink; height:50px; width:50px";

    addEventListener("keydown", function (e) {

        let left = document.getElementById("customDiv").offsetLeft;
        let up = document.getElementById("customDiv").offsetTop;

        if (e.key === "ArrowDown") {
            div.style.marginTop =  (up + 50) + "px";
        }

        if (e.key === "ArrowUp") {
            div.style.marginTop =  (up - 50) + "px";
        }
        if (e.key === "ArrowLeft") {
            div.style.marginLeft =  (left - 50) + "px";
        }
        if (e.key === "ArrowRight") {
            div.style.marginLeft =  (left + 50) + "px";
        }
    });
});
