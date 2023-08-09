import { toggleBackground } from './background';
import { PetCards } from './petCards';

const openPetsModal = (petsData) => {
  const sliderCards = document.querySelectorAll('.our-friends__slide');

  petsData.forEach((data, index ) => {
    sliderCards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        if (index === idx) {
          const { title, type, description, src, attributes } = petsData[idx];
          new PetCards(title, type, description, src, '.our-friends__wrapper', attributes).createModalPetCards();
          closePetsModal();
          toggleBackground();
        }
      });
    });
  });

};

const closePetsModal = () => {
  const modal = document.querySelector('.our-friends__card');
  const closeButton = document.querySelector('.our-friends__card-button');
  const background = document.querySelector('.background');

  const closeFunction = () => {
    modal.remove();

    if (background.classList.contains('_active')) {
      toggleBackground();
    }
  };

  closeButton.addEventListener('click', closeFunction);
  background.addEventListener('click', closeFunction);
};


export { openPetsModal, closePetsModal };