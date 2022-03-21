// URL
// const url = "https://www.wikipedia.fr";

// fetch(url)
//   .then((res) => res.text())
//   .then((html) => console.log(html));


document.addEventListener("DOMContentLoaded", function (event) {

  var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  targetUrl = 'https://webdevdesigner.com/'
fetch(proxyUrl + targetUrl)
.then(blob => blob.json())
.then(data => {
  console.table(data);
  document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
  return data;
})
.catch(e => {
  console.log(e);
  return e;
});
});  