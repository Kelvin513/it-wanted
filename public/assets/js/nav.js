$(document).ready(function() {
  // $("nav a").click(function() {
  //   var target = $(".section").eq($(this).index());
  //   var v_center = $(window).height() > target.height() ? $(window).height() / 2 - target.height() / 2 : 0;
  //   var position = target.offset().top - v_center;
  //   $("html,body").animate({
  //       scrollTop: position
  //   })
  // });

  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(".section").height();
    var scrollPosition = scrollTop + windowHeight;
    var index = 0;
    $(".section").each(function(i, element) {
      var j_this = $(this);
      if( scrollPosition > j_this.offset().top ) {
        index = i;
      }
    });
    $("span.active").removeClass("active")
    $("nav span").eq(index).addClass("active");
    // $("nav").removeClass('open');//畫面捲動收起來
  }).scroll();
})

$(function() {
  $('nav span').click(function() {
    var href = $(this).attr("data-target");
    $('html, body').animate({
      scrollTop: $( "#" + href).offset().top - 200
    }, 350);
    return false;
  });
});