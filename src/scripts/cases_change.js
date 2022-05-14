(function() {

  const CARD = document.querySelectorAll('.cases__inner-item');
  const FIGURE_CLICK = document.querySelector('.onClick-figure');
  const INNER_BOX = document.querySelector('.cases__inner');
  const ACTIVE_BOX = document.querySelectorAll('.activeBox');


  CARD.forEach((item) => {

    item.addEventListener('mousedown', (ev) => {

      clearActive();

      item.classList.add('cases-item-active');
      item.querySelector('.activeBox').classList.add('cases__item-activeBox');
      getCoord(ev);
      FIGURE_CLICK.classList.add('onClick-figure-active');

    });


    FIGURE_CLICK.addEventListener('mouseup', (ev1) => {
      getCoord(ev1);
      FIGURE_CLICK.classList.remove('onClick-figure-active');
    });

  })



  function getCoord(event) {
    let X = event.clientX - 50;
    let Y = event.clientY - 50;

    let coord = INNER_BOX.getBoundingClientRect();

    FIGURE_CLICK.style.left = X - coord.left + 'px';
    FIGURE_CLICK.style.top = Y - coord.top + 'px';
  }



  function clearActive() {
    CARD.forEach((item) => {
      item.classList.remove('cases-item-active');

    })

    ACTIVE_BOX.forEach((elem) => {
      elem.classList.remove('cases__item-activeBox');
    })
  }


})();