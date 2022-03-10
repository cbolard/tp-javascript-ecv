// URL
const url = "https://www.wikipedia.fr";

fetch(url)
  .then((res) => res.text())
  .then((html) => console.log(html));