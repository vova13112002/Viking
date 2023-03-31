
$(function(){

$('.menu-btn').on('click', function(){
    $('.menu__list').toggle('.menu__list--active')
});
// let menuBtn = document.querySelector('.menu-btn');
// let menu = document.querySelector('.menu');
// menuBtn.addEventListener('click', function(){
//     menu.classList.toggle('menu--active');
// });

// $('[data-fancybox]').fancybox({
//     youtube : {
//         // controls : 0,
//         // showinfo : 0 відкрлючає панель і паузу
//     }

 
// });



 $('.heroes__slider-img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // arrows: false,
  // fade: true,
  asNavFor: '.heroes__slider-text',
  prevArrow:'<button  class="slick-btn slick-prev"><img src="images/hero-left.png" alt="<-"></button>',
  nextArrow:'<button  class="slick-btn slick-next"><img src="images/hero-right.png" alt="->"></button>',
});
$('.heroes__slider-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.heroes__slider-img',
  fade: true,
  // dots: true,
  // centerMode: true,
  // focusOnSelect: true
  arrows:false
});

});