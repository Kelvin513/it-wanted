$(document).ready(function() {

  $(".number-20").animateNumbers(20, true, 2800);
  $(".number-100").animateNumbers(100, true, 3800);

});

//reveal效果
window.sr = ScrollReveal();
sr.reveal('.sec1 .reveal',300);
sr.reveal('.sec2 .reveal',400);
sr.reveal('.sec3 .reveal',400);
sr.reveal('.sec4 .reveal',400);
sr.reveal('.sec5 .reveal',340);

onkeydown = function(e){
  if(((e.metaKey || e.ctrlKey) || e.ctrlKey) && e.keyCode == 219){
    e.preventDefault();
    console.log("prev tab");
    // $(".nav.active").removeClass("active").next(".nav").addClass("active");
  }
  if(((e.metaKey || e.ctrlKey) || e.ctrlKey) && e.keyCode == 221){
    e.preventDefault();
    console.log("next tab");
  }
}



