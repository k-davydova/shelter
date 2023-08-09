import { getResource } from './modules/utils';
import { createHelpContent } from './modules/help';
import { PetCards } from './modules/petCards';
import { openPetsModal, closePetsModal } from './modules/modal';
import { burgerIcon, toggleBurgerNavigation } from './modules/burger';
import { toggleBackground } from './modules/background';

window.addEventListener('DOMContentLoaded', () => {

  getResource('../assets/json/help.json')
    .then((data) => createHelpContent(data));

  getResource('../assets/json/pets.json')
    .then(data => {
      data.forEach(( {title, type, description, src} ) => {
        new PetCards(title, type, description, src, '.our-friends__slider-track').createSliderPetCards();
      });

      openPetsModal(data);
    });

});
