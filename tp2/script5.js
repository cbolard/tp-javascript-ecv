document.addEventListener("DOMContentLoaded", function (event) {

    const img = document.querySelectorAll("img");

    for (let i = 0; i < img.length; i++) {

        img[i].addEventListener('mouseover', () => {
            img[i].style = 'transform: scale(3); transition: transform .2s;; '            
        });

        img[i].addEventListener('mouseout', () => {
            img[i].style = 'transform: scale(1); transition: transform .2s;; '
            
        });
    
    }

});