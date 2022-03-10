

document.addEventListener("DOMContentLoaded", function (event) {

    let h = document.getElementById("img1");
    h.onclick = rotationimage;
    let rotation = 0;

    function rotationimage() {
        rotation += 90;
        if (rotation === 360) {
            rotation = 0;
        }
        h.style.transform = `rotate(${rotation}deg)`;
    }
});