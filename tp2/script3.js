document.addEventListener("DOMContentLoaded", function (event) {

    const img1 = document.getElementById("img1")
    const img2 = document.getElementById("img2")

    img1.addEventListener('click', (e) => {

       console.log(img2.height)

       if(img2.width > 0){
        img2.width *= 0.8;
        img1.width *= 1.2;

       }
    })

    img2.addEventListener('click', (e) => {

        if(img1.width > 0){
            img1.width *= 0.8;
            img2.width *= 1.2;
        }
   
    })



});