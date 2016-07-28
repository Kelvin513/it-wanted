var 職缺 = ["後端工程師","前端工程師","技術專案經理"];

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
    var scrollPosition = scrollTop + windowHeight - 200;
    var index = 0;
    $(".section").each(function(i, element) {
      var j_this = $(this);
      if( scrollPosition > j_this.offset().top ) {
        index = i;
      }
    });
    $("span.active").removeClass("active")
    $("nav span").eq(index).addClass("active");
    $(".active").parent(".toggle").slideDown(200);
  }).scroll();

  $(".tab").click(function() {
    var folder = $(this).attr("data-at");
    
    $(".tab").removeClass("active");
    $(this).addClass("active");

    $("article").removeClass("show");
    $("article." + folder ).addClass("show");
  })
})

$(function() {
  $('nav span').click(function() {
    var href = $(this).attr("data-target");
    $('html, body').animate({
        scrollTop: $( "#" + href).offset().top - 150
    }, 350);
    return false;
  });

  $('nav>div h2').click(function() {
    $(this).next(".toggle").slideToggle(150);
  })

  $('.sb-thumbnail').click(function() {
    $('.easter-egg').css({
      'opacity': 1,
      'z-index': 2
    });

    $('.easter-egg').click(function() {
      $(this).css({
        'opacity': 0,
        'z-index': -1
      });
    });
  })


  $(".main").click(function() {
    $("nav").removeClass("n-show");
  })

  $(".hamburger").click(function() {
    $("nav").toggleClass("n-show");
  })



});


