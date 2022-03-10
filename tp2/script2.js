
document.addEventListener("DOMContentLoaded", function (event) {
    let liste =  document.getElementById("liste");
    
    liste.addEventListener('click', (e) => {
        let city = e.target;
        liste.prepend(city);
    })
});