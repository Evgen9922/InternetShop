(function() {

  const MODUL_WINDOW = document.querySelector('.js-modul-window'); //окно
  const MODUL = document.querySelector('.js-modul'); //размытый фон
  const BTN_MODUL_CLOSE = document.querySelector('.js-btn-modul-close');
  const BTN_GET_MORE = document.querySelector('.js-more-sign');

  BTN_GET_MORE.addEventListener('click', () => {
    show_window()
  });

  BTN_MODUL_CLOSE.addEventListener('click', () => {
    hide_window()
  });

  function show_window() {
    MODUL.classList.toggle('how-we-work__modul-show');
    MODUL_WINDOW.classList.toggle('how-we-work__modul-show');

    setTimeout(() => {
      MODUL_WINDOW.classList.toggle('how-we-work__modul-show-anim');
    })
  }

  function hide_window() {
    MODUL.classList.toggle('how-we-work__modul-show');
    MODUL_WINDOW.classList.toggle('how-we-work__modul-show-anim');

    setTimeout(() => {
      MODUL_WINDOW.classList.toggle('how-we-work__modul-show');
    }, 400)

  }


})();