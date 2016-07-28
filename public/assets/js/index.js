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

var i = 0;

onkeydown = function(e){
  if(!e.metaKey) {
    $(".fa-pencil").show();
    $(".close-tab").hide();
  }
  if((e.metaKey || e.ctrlKey) && e.keyCode == 219){
    // cmd + [
    e.preventDefault();
    var this_index = $('.tab.active').index();
    this_index = (this_index - 1) % 4;
    $('.tab').removeClass('active');
    $('.tab').eq(this_index).click();
  }
  if((e.metaKey || e.ctrlKey) && e.keyCode == 221){
    // cmd + ]
    e.preventDefault();
    var this_index = $('.tab.active').index();
    this_index = (this_index + 1) % 4;
    $('.tab').removeClass('active');
    $('.tab').eq(this_index).click();
  }
  if((e.metaKey || e.ctrlKey) && e.keyCode == 83){
    // cmd + s 鉛筆變成叉叉
    e.preventDefault();
    $(".fa-pencil").hide();
    $(".close-tab").show();
  }
  if((e.metaKey || e.ctrlKey) && e.keyCode == 68){
    // cmd + d
    e.preventDefault();
    j = (i % 3) + 1;
    var href = 's3-' + j;
    $('html, body').animate({
        scrollTop: $( "#" + href).offset().top - 200
    }, 350);
    i++;
  }
}

$(function() {
  $('.reminder').click(function() {
    var this_index = $('.tab.active').index();
    this_index = (this_index + 1) % 4;
    $('.tab').removeClass('active');
    $('.tab').eq(this_index).click();
  })
});

