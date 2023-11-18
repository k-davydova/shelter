import { addSlideCards } from '../../js/modules/slider';

window.addEventListener('DOMContentLoaded', () => {

  addSlideCards({
    parentSelector: '.our-friends__slider-track',
    numberOfPages: 8
  });


});