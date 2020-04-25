$(document).ready(function() {

  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;
    $('.parent2').on('mousedown touchstart', function() {
    if (!active1) $(this).find('.test1').css({'background-color': 'darkSlateGray', 'transform': 'translate(0.3vw,6vw)'});
    else $(this).find('.test1').css({'background-color': 'dimGray', 'transform': 'none'}); 
     if (!active2) $(this).find('.test2').css({'background-color': 'darkSlateGray', 'transform': 'translate(-3vw,4vw)'});
    else $(this).find('.test2').css({'background-color': 'darkGray', 'transform': 'none'});
      if (!active3) $(this).find('.test3').css({'background-color': 'darkSlateGray', 'transform': 'translate(-5vw,1.5vw)'});
    else $(this).find('.test3').css({'background-color': 'silver', 'transform': 'none'});
      if (!active4) $(this).find('.test4').css({'background-color': 'darkSlateGray', 'transform': 'translate(-5.5vw,-1.5vw)'});
    else $(this).find('.test4').css({'background-color': 'silver', 'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;    
    });
});
// (function($){
//     "use strict";
//     $('.parent2').on('mousedown touchstart', function() {
//       $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
//           if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//             if (target.length) {
//               $('html, body').animate({
//                 scrollTop: target.offset().top
//               }, 1000, "easeInOutExpo");
//               return false;
//             }
//           }
//         });
//         $('.parent2 .js-scroll-trigger').click(function() {
//           $(".parent2").removeClass("active");
//         });  
// })(jQuery);})