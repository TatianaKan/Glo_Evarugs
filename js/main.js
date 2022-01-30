const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,
  // slidesPerView: 3,
  spaceBetween: 70,
  // centeredSlides: true,
  slideToClickedSlide: true,
  speed: 900,
  toggle: true,
  breakpoints: {
    320: {
      direction: 'vertical',
      slidesPerView: 3,
      spaceBetween: 110,
    },
    720: {
      spaceBetween: 70,
      slidesPerView: 2

    },
    900: {
      direction: 'horizontal',
      
    },
    1200: {
      slidesPerView: 3
    }
  }
});



const modal = document.querySelector('.modal');
const buttonModal = document.querySelector('.main-display__button');




buttonModal.addEventListener('click', () => {
  modal.classList.add('active');

})

modal.addEventListener('click', (event) => {
  const isModal = event.target.closest('.modal__inner');
  if (!isModal) {
    modal.classList.remove('active');

  }
});




// const swiper = new Swiper('.swiper', {
//   slidesPerView: 3,
//   loop: true,
//   speed: 900,
//   spaceBetween: 70,
//   centeredSlides: true,
//   slideToClickedSlide: true,
//   toggle: true,
//   keyboard: {
//       enabled: true,
//       onlyInViewport: false,
//   },
//   breakpoints: {
//       320: {
//           direction: 'vertical',
//           slidesPerView: 3,
//           mousewheel: true,
//           loop: true,
//           spaceBetween: 110,
//       },
//       891: {
//         slidesPerView: 2,
//         spaceBetween: 40
//       },
//       1200: {
//           slidesPerView: 3,
//           spaceBetween: 70
//         }
//     }
// });