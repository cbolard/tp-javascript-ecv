
document.addEventListener("DOMContentLoaded", function(event) {

    let liNew = document.createElement("li");
    liText = document.createTextNode('Nouvelle puce');

    liNew.appendChild(liText);

    var ul = document.querySelector('ul');
    var li = ul.getElementsByTagName('li');

    // console.log(ul.li[2])


//    console.log(li[1])

//    li[1].replace(liNew,li[1]);
   li[1].parentNode.replaceChild(liNew,li[1]);
 



});