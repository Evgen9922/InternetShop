(function () {
  const ACCORDION_BTN = document.querySelectorAll('.js-accordion-btn');

  ACCORDION_BTN.forEach((item) => {
    item.addEventListener('click', () => {
      update_element();
      item.querySelector('.ac__stage-number').classList.add('js-btn-active');
      item.querySelector('.js-accordion-btn-img').classList.toggle('js-accordion-btn-active');

    })
  })


  function update_element() {
    const BTNS = document.querySelectorAll('.ac__stage-number');
    BTNS.forEach((item) => {
      item.classList.remove('js-btn-active');
    })
  }


})();