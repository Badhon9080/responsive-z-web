//SJSVBMNLOVE
$('.banner_slide').slick({
    prevArrow:'<i class="fa-solid fa-arrow-left banner_slick_arrow"></i>',
    nextArrow:'<i class="fa-solid fa-arrow-right banner_slick_arrow"></i>',
    dots:true,
    dotsClass:'banner_slider_dots',
    /*fade: true,
    autoplay: true,
    autoplaySpeed:1000,
    speed:1000,*/
 });
 var typed = new Typed('.test', {
    strings: [
       'Graphics Design', 
       'Web Term',
       'Digital Marketing ',
       'Web Design',
     ],
       typeSpeed:100,
       loop:true,
  });
  $('.num').counterUp({delay: 20,
   time: 2000,
});
$('.gallary_filter_menu li').on('click', function () {
   $(this).addClass('active')
   $(this).siblings().removeClass('active')
 
 })
 
 $('.filter_section').filterizr();
 
 $(".count_down").countdown("2023/09/16", function (event) {
   var $this = $(this).html(
     event.strftime(
       "" +
         "<div class='count_down_item'><span>%D</span><div class='during'><span>days</span></div></div>" +
         "<div class='count_down_item'><span>%H</span><div class='during'><span>hr</span></div></div>" +
         "<div class='count_down_item'><span>%M</span><div class='during'><span>min</span></div></div>" +
         "<div class='count_down_item'><span>%S</span><div class='during'><span>sec</span></div></div>"
     )
   );
 });