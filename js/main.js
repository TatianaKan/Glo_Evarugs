const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  loop: true,
  speed: 400,
  spaceBetween: 70,
  centerSlides: true,
  slideToClickedSlide: true,
  toggle: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    570: {
      slidesPerView: 2
    },
   920: {
      slidesPerView: 3
    },
    // 1200: {
    //   slidesPerView: 1
    // }
  }

});