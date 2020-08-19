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

let mailLinkButton = document.querySelector('.main-header__mail-link');
let mailCopyButton = document.querySelector('.main-header__mail-copy');

mailLinkButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  mailCopyButton.classList.toggle('visually-hidden');
})

let phoneLink = document.querySelector('.main-header__list-item--phone');
let phoneMenu = document.querySelector('.main-header__phone-menu');
let phoneMenuCloseButton = document.querySelector('.main-header__phone-menu>span');
let onButtonClosePhoneMenu = function () {
  phoneMenu.classList.add('visually-hidden');
  phoneMenuCloseButton.removeEventListener('click', onButtonClosePhoneMenu);
  phoneLink.removeEventListener('mouseout', onButtonClosePhoneMenu);
};

phoneLink.addEventListener('mouseover', function() {
  phoneMenu.classList.remove('visually-hidden');
  phoneLink.addEventListener('mouseout', onButtonClosePhoneMenu);
  phoneMenuCloseButton.addEventListener('click', onButtonClosePhoneMenu);
})
