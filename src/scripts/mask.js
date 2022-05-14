
//----------инициализация
let selector = document.querySelector('#cart_number');
const IMG_CART = document.querySelector('.js-ready-img-cart');
let im = new Inputmask('9999 9999 9999 9999');
im.mask(selector);



let selector0 = document.querySelectorAll('.cart-name'); //валидируется для всех полей с .cart-name
const IMG_NAME = document.querySelector('.js-ready-img-name');

selector0.forEach((item) => {

  item.addEventListener('change', (ev) => {
    let str = ev.target.value;
    if (!(/^[а-яА-ЯёЁ\s]+$/).test(str)) //русские буквы + пробел
      ev.target.value = '';

    if (ev.target.value.length > 3) {
      checkInfo(IMG_NAME, true)
    } else {
      checkInfo(IMG_NAME, false)
    }

  });
})



//---------для снятия маски и последуюзей обработки введённой информации:

selector.addEventListener('change', (ev) => {
  console.log(ev.target.value); //выводит как есть
  let unmask = selector.inputmask.unmaskedvalue();
  console.log(unmask); //выводит введённую инфо

  if (unmask.length > 15) {
    checkInfo(IMG_CART, true)
  } else {
    checkInfo(IMG_CART, false)
  }

})

let selector1 = document.querySelector('#cart_time');
const IMG_TIME = document.querySelector('.js-ready-img-time');
let im1 = new Inputmask('99/99');
im1.mask(selector1);

//---------для снятия маски и последуюзей обработки введённой информации:

selector1.addEventListener('change', (ev) => {
  console.log(ev.target.value); //выводит как есть
  let unmask1 = selector1.inputmask.unmaskedvalue();
  console.log(unmask1); //выводит введённую инфо

  if (unmask1.length > 3) {
    checkInfo(IMG_TIME, true)
  } else {
    checkInfo(IMG_TIME, false)
  }

})


let selector2 = document.querySelector('#cart_secure');
let im2 = new Inputmask('999');
im2.mask(selector2);

//---------для снятия маски и последуюзей обработки введённой информации:

selector2.addEventListener('change', (ev) => {
  console.log(ev.target.value); //выводит как есть
  console.log(selector2.inputmask.unmaskedvalue()); //выводит введённую инфо
})


function checkInfo(elem, rezult) {
  rezult ? (elem.style.display = 'block') : (elem.style.display = 'none');
}




let selector3 = document.querySelector('.footer__phone');
let im3 = new Inputmask('+7 (999) 999 99 99');
im3.mask(selector3);

selector3.addEventListener('change', (ev) => {
  console.log(ev.target.value); //выводит как есть
  console.log(selector3.inputmask.unmaskedvalue()); //выводит введённую инфо
});


