import { toggleBackground } from './background';
import { PetCards } from './petCards';
const openPetsModal = (petsData, parentSelector) => {
  const parent = document.querySelector(parentSelector);
  const sliderCards = document.querySelectorAll('.our-friends__slide');
  petsData.forEach((data, index) => {
    sliderCards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        if (index === idx) {
          const {
            id,
            title,
            type,
            description,
            src,
            attributes
          } = petsData[idx];
          new PetCards(id, title, type, description, src, parent, attributes).createModalPetCards();
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