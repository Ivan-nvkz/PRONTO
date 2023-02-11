'use strict';

document.addEventListener('DOMContentLoaded', () => {

   let similarSlider = null;
   let mediaQuerySizeSimilar = 767;

   function similarSliderInit() {
      if (!similarSlider) {
         similarSlider = new Swiper('.similar__slider', {
            loop: true,
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
            speed: 800,
            pagination: {
               el: '.swiper-pagination.similar-pagination',
               type: 'bullets',
               clickable: true,
            },
         });
      }
   }

   function similarSliderDestroy() {
      if (similarSlider) {
         similarSlider.destroy();
         similarSlider = null;
      }
   }

   $(window).on('load resize', function () {
      let windowWidth = $(this).innerWidth();
      if (windowWidth <= mediaQuerySizeSimilar) {
         similarSliderInit();
      } else {
         similarSliderDestroy();
      }
   });


});