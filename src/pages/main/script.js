import { addSlideCards } from '../../js/modules/slider-test';
import { createHelpContent } from '../../js/modules/help';

window.addEventListener('DOMContentLoaded', () => {

  addSlideCards({
    parentSelector: '.our-friends__slider-track',
    numberOfPages: 0
  });

});