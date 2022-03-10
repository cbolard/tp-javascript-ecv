

document.addEventListener("DOMContentLoaded", function(event) {

    let div = document.createElement("div");
    div.style = "background:violet; height:300px; width:100%;"

    let titre = document.createElement("H1");
    let text = document.createTextNode('Titre 1');
    
    titre.style = "color:white; text-transform:uppercase;"
    titre.appendChild(text);

    div.appendChild(titre);
    document.body.appendChild(div);


});