function myFunction() {
  alert("ATTENTION! Vous allez vous réveiller...");
}

$(document).ready(function(){
  $("button").click(function(){
    $("dl").toggle();
  });
});

var mybutton = document.getElementById("myBtn");
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}