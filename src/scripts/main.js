(function(){

  const BURGER_MENU = document.querySelector('.js-burger');
  const HEADER_MENU = document.querySelector('.header__top-menu');
  const HEADER_MENU_ITEM = document.querySelectorAll('.js-header-menu');


  BURGER_MENU.addEventListener('click', () => {
    HEADER_MENU.classList.toggle('js-menu-open');
  })


  HEADER_MENU_ITEM.forEach((item) => {
    item.addEventListener('click', () => {
      HEADER_MENU.classList.toggle('js-menu-open');
    })
  })
  console.log('Проверка работы');

})();


