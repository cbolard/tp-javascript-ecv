

document.addEventListener("DOMContentLoaded", function (event) {

    let image = document.getElementById("img1");
    image.onclick = rotationimage;
    let rotation = 0;

    function rotationimage() {
        rotation += 90;
        if (rotation === 360) {
            rotation = 0;
        }
        image.style.transform = `rotate(${rotation}deg)`;
    }
});