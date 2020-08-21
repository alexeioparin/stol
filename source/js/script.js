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

let mechTypesButton = document.querySelector('.main-header__form div');
let mechTypesButtonText = document.querySelector('.main-header__form div span');
let mechTypesList = document.querySelector('.main-header__types');
let mechTypesListItems = document.querySelectorAll('.main-header__types li');

let addItemListener = function (evt) {
  mechTypesButtonText.textContent = evt.target.textContent;
  mechTypesButton.style.width = '165px';
  hideTypesMenu();
};

let elemRemoveListener = function (coll, fun) {
  for (let i = 0; i < coll.length; i++) {
    coll[i].removeEventListener('click', fun);
  }
};

let elemAddListener = function (coll, fun) {
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', fun);
  }
};

let hideTypesMenu = function () {
  mechTypesList.classList.add('visually-hidden');
  mechTypesButton.removeEventListener('click', hideTypesMenu);
  elemRemoveListener(mechTypesListItems, elemRemoveListener);
};

mechTypesButton.addEventListener('click', function() {
  mechTypesList.classList.remove('visually-hidden');
  mechTypesButton.addEventListener('click', hideTypesMenu);
  elemAddListener(mechTypesListItems, addItemListener);
});

let coldTypesMenu = document.querySelector('.index-main__cold-list');
let coldTypesLink = document.querySelector('.index-main__cold');
let tempTypesMenu = document.querySelector('.index-main__temp-list');
let tempTypesLink = document.querySelector('.index-main__temp');
let equipmentList = document.querySelector('.index-main__wrapper-top');

let hideColdMenu = function () {
  coldTypesMenu.classList.add('visually-hidden')
};

let hideTempMenu = function () {
  tempTypesMenu.classList.add('visually-hidden')
};

let closeColdTypesMenu = function() {
  setTimeout(hideColdMenu, 500);
  coldTypesLink.removeEventListener('mouseleave', closeColdTypesMenu);
  equipmentList.style.boxShadow = "0px 0px 0px 0px #000";
  hideSomeElement(coldTypesMenu);
};

let closeTempTypesMenu = function() {
  setTimeout(hideTempMenu, 500);
  tempTypesLink.removeEventListener('mouseleave', closeTempTypesMenu);
  equipmentList.style.boxShadow = "0px 0px 0px 0px #000";
  hideSomeElement(tempTypesMenu);
};

let showSomeElement = function(elem) {
  let start = Date.now();
  let opacity;
  let timer = setInterval(function() {
    let timePassed = Date.now() - start;
    elem.style.opacity = timePassed / 500;
    if (timePassed > 500) clearInterval(timer);
  }, 10);
};

let hideSomeElement = function(elem) {
  let start = Date.now();
  let opacityAttr = elem.getAttribute('style');
  let asd = opacityAttr.slice(9);
  let opacity = asd.substring(0, asd.length - 1);
  let timer = setInterval(function() {
    let timePassed = Date.now() - start;
    let a = +opacity - timePassed / 500;
    elem.style.opacity = String(a);
    if (timePassed > 500) clearInterval(timer);
  }, 10);
};

coldTypesLink.addEventListener('mouseenter', function() {
  coldTypesMenu.classList.remove('visually-hidden');
  coldTypesLink.addEventListener('mouseleave', closeColdTypesMenu);
  equipmentList.style.boxShadow = "0px 9px 18px -12px #000";
  showSomeElement(coldTypesMenu);
});

tempTypesLink.addEventListener('mouseenter', function() {
  tempTypesMenu.classList.remove('visually-hidden');
  tempTypesLink.addEventListener('mouseleave', closeTempTypesMenu);
  equipmentList.style.boxShadow = "0px 9px 18px -12px #000";
  showSomeElement(tempTypesMenu);
});
