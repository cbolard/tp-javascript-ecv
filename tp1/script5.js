
document.addEventListener("DOMContentLoaded", function(event) {

  $.ajax({ url: 'https://stackoverflow.com/questions/6375461/get-html-code-using-javascript-with-a-url', success: function(data) { alert(data); } });
});