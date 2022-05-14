(function() {

  const CAPTCHA = document.querySelector('.footer__form-captha-box');
  const BTN_SEND = document.querySelector('.footer__btn-submit');
  const CAPTCHA_IMG = document.querySelector('.robot-captcha');
  const AGREE_BOX = document.querySelector('.footer__agreement-box');

  let active_agree = false;
  let robot_captcha = false;

  AGREE_BOX.addEventListener('click', () => {
    active_agree = !active_agree;
    showBtnSubmit(active_agree, robot_captcha);
    AGREE_BOX.classList.toggle('js-footer__agreement-box');

  })


  CAPTCHA.addEventListener('click', () => {
    robot_captcha = !robot_captcha;
    showBtnSubmit(active_agree, robot_captcha);
    CAPTCHA_IMG.classList.toggle('robot-captcha-hide');

  })


  function showBtnSubmit(agree, captcha) {
    if (active_agree && !robot_captcha) {
      BTN_SEND.classList.remove('robot-captcha-hide')
    } else {
      BTN_SEND.classList.add('robot-captcha-hide');
    }
  }

})();