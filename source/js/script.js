Swiper.use(myPlugin);

let swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  debugger: true,
});

let menuButton = document.querySelector('.main-header__menu');
let headerMenu = document.querySelector('.main-header__list');

menuButton.addEventListener('click', function() {
  headerMenu.classList.toggle('visually-hidden');
})
