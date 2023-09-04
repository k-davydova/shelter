import { getResource } from './modules/utils';
import { addSlidePage, moveSlider, deleteSlidePage } from './modules/slider';
import { createHelpContent } from './modules/help';
import { PetCards } from './modules/petCards';
import { toggleBackground } from './modules/background';
import { toggleBurgerNavigation } from './modules/burger';

window.addEventListener('DOMContentLoaded', () => {

  addSlidePage({
    addAtBeginning: false,
    numberOfCards: 3,
    parentSelector: '.our-friends__slider-track'
  });

});
