import { getResource } from './modules/utils';
import { createHelpContent } from './modules/help';
import { PetCards } from './modules/petCards';
import { toggleBackground } from './modules/background';
import { toggleBurgerNavigation } from './modules/burger';
import { addSlideCards } from './modules/slider-test';
window.addEventListener('DOMContentLoaded', () => {
  addSlideCards({
    parentSelector: '.our-friends__slider-track'
  });
});