(function() {

  const WEBPAY = document.querySelectorAll('.js-webpay');
  const WEBPAY_LINK = document.querySelectorAll('.js-webpay-link');

  WEBPAY_LINK.forEach((item) => {
    item.addEventListener('click', (ev) => {
      removeActiveState();
      ev.target.classList.add('js-webpay-activeLink');

      WEBPAY.forEach((form) => {
        form.classList.remove('js-active-box');

        if (form.dataset.order == ev.target.dataset.order) {
          form.classList.add('js-active-box');
        }
      })
    })
  })


  function removeActiveState() {
    WEBPAY_LINK.forEach((item) => {
      item.classList.remove('js-webpay-activeLink');
    })
  }

})();