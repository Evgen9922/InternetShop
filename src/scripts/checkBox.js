(function() {

  const CHECKBOX = document.querySelector('.checkBox');
  const CHECKBOX_ITEM = document.querySelectorAll('.checkbox-item');
  const CHECKBOX_CHECK_ALL = document.querySelector('.goods__inner-form-titleItem');

  CHECKBOX_CHECK_ALL.addEventListener('click', () => {
    CHECKBOX.classList.toggle('js-checkBox-check');

    if (CHECKBOX.classList.contains('js-checkBox-check')) {
      getCheck(true);
    } else {
      getCheck(false);
    }

    function getCheck(rezult) {
      CHECKBOX_ITEM.forEach((item) => {
        item.checked = rezult;
      })
    }

  })


})();