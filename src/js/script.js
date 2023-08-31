import { getResource } from './modules/utils';
// import { injectSliderPetCards } from './modules/slider';
import { addSlidePage, deleteSlidePage, injectThreePages } from './modules/slider';
import { createHelpContent } from './modules/help';
import { PetCards } from './modules/petCards';
import { toggleBackground } from './modules/background';
import { toggleBurgerNavigation } from './modules/burger';

window.addEventListener('DOMContentLoaded', () => {

  // injectSliderPetCards({
  //   initialNumberOfCards: 3,
  //   parentSelector: '.our-friends__slider-track'
  // });

  // addSlidePage({
  //   addAtBeginning: false,
  //   numberOfCards: 3,
  //   parentSelector: '.our-friends__slider-track'
  // });

  injectThreePages({numberOfPages: 3, parentSelector: '.our-friends__slider-track'});

  // deleteSlidePage();

});
