﻿
$(document).ready(function () {
  const elWrap = $('.carousel_wrap');
  const visual = $('.visual_block');
  const carousel = visual.children('ul');
  const visible = 1;
  itemWidth = carousel.children().outerWidth(),
    itemsTotal = carousel.children().length,
    autoChange = 5000,
    btnNext = $('.next'),
    btnPrev = $('.prev');

  visual.css({ 'width': visible * itemWidth + 'px' });

  carousel.css({ 'width': itemsTotal * itemWidth, 'left': 0 });

  function chengeLeft() {
    const item = carousel.children().eq(0);
    btnNext.off('click', chengeLeft);
    carousel.animate({ left: -itemWidth }, 500, function () {
      item.appendTo(carousel);
      carousel.css({ "left": 0 });
      btnNext.on('click', chengeLeft);
    });
  }

  function chengeRigth() {
    const item = $(carousel).children().eq(-1);
    item.prependTo(carousel);
    carousel.css({ "left": -itemWidth });
    btnPrev.off('click', chengeRigth);
    carousel.animate({ left: 0 }, 500, function () {
      btnPrev.on('click', chengeRigth);
    });
  }

  const interval = setInterval(chengeLeft, autoChange);

  btnNext.on('click', chengeLeft);
  btnPrev.on('click', chengeRigth);

  elWrap.mouseover(function () {
    clearInterval(interval);
  });

  elWrap.mouseout(function () {
    interval = setInterval(chengeLeft, autoChange);
  });
});
