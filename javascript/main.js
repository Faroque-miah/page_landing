$(function(){
  // MIXIT YP 
  var mixer = mixitup('.design_par');
    $('.work_menu  .menu_mix li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
      });
     

      // TESTI SLIDER
  $('.testi_slider').slick({
     arrows:false,
     dots:true,
  });
  // COUNTER UP 
  $('.counter').counterUp({
    delay: 10,
    time: 1000,
  
 
});

// brand slider 
$('.brand_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
 arrows:false,
 centerMode: true,
 autoplay:true,
 centerPadding: '0px',

  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,

      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,

      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,

      }
    },
     
 
   
  ]
});

$('.parallax-window').parallax({
  imageSrc: '../images/play.png'
});

});