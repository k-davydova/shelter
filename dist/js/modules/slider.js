import { getResource } from './utils';
import { PetCards } from './petCards';
import { openPetsModal } from './modal';
const sliderNext = document.querySelector('.our-friends__slider-button_next');
const sliderPrev = document.querySelector('.our-friends__slider-button_prev');
let currentCardIndex = 0;
const addSlidePage = async ({
  addAtBeginning,
  numberOfCards,
  parentSelector
}) => {
  const data = await getResource('../assets/json/pets.json');
  const parent = document.querySelector(parentSelector);
  const container = document.createElement('div');
  container.classList.add('our-friends__slider-page');
  if (!addAtBeginning) {
    for (let i = 0; i < numberOfCards; i++) {
      const currentIndex = (currentCardIndex + i) % data.length;
      const {
        id,
        title,
        type,
        description,
        src
      } = data[currentIndex];
      const card = new PetCards(id, title, type, description, src);
      const slide = card.createSliderPetCards();
      container.append(slide);
    }
    parent.append(container);
    currentCardIndex += numberOfCards;
  } else {
    currentCardIndex -= 6;
    if (currentCardIndex < 0) {
      currentCardIndex += data.length;
    }
    for (let i = numberOfCards - 1; i >= 0; i--) {
      const currentIndex = (currentCardIndex + i) % data.length;
      const {
        id,
        title,
        type,
        description,
        src
      } = data[currentIndex];
      const card = new PetCards(id, title, type, description, src);
      const slide = card.createSliderPetCards();
      container.prepend(slide);
    }
    parent.prepend(container);
    currentCardIndex += numberOfCards;
  }
  const listOfPages = parent.childNodes;

  // deleteSlidePage();
  openPetsModal(data, '.our-friends__wrapper');
};

// const deleteSlidePage = () => {
//   const nodeList = document.querySelectorAll('.our-friends__slider-page');
//   console.log(nodeList);

//   if (nodeList.length > 2) {
//     const firstElement = nodeList[0];
//     console.log('hehe');

//     // firstElement.parentNode.removeChild(firstElement);
//   }

// };

// const moveSlider = (direction) => {
//   const sliderTrack = document.querySelector('.our-friends__slider-track');
//   const page = document.querySelector('.our-friends__slider-page');

//   const pageWidth = page.offsetWidth;
//   const gapComputedStyle = window.getComputedStyle(sliderTrack);
//   const gapValue = +gapComputedStyle.getPropertyValue('gap').slice(0, -2);

//   let offset = parseInt(sliderTrack.style.transform.replace('translateX(', '').replace('px)', '')) || 0;

//   if (direction === 'right') {
//     if (-offset === sliderTrack.offsetWidth + gapValue - pageWidth - gapValue) {
//       addSlidePage({
//         addAtBeginning: false,
//         numberOfCards: 3,
//         parentSelector: '.our-friends__slider-track'
//       });
//     }

//     offset -= pageWidth + gapValue;
//   }

//   if (direction === 'left') {
//     console.log(offset); //
//     if (offset >= 0) {
//       console.log(offset);
//       addSlidePage({
//         addAtBeginning: true,
//         numberOfCards: 3,
//         parentSelector: '.our-friends__slider-track'
//       });

//       sliderTrack.style.transform = `translateX(${offset}px)`;
//     }

//     // offset += pageWidth + gapValue;
//   }

//   // sliderTrack.addEventListener('transitionend', () => {
//   // затестить эту штуку
//   // });

//   sliderTrack.style.transition = 'transform 0.8s ease-in-out';
//   sliderTrack.style.transform = `translateX(${offset}px)`;

//   setTimeout(() => {
//     sliderTrack.style.transition = '';
//   }, 800);

// };

// sliderPrev.addEventListener('click', () => moveSlider('left'));
// sliderNext.addEventListener('click', () => moveSlider('right'));

// export { addSlidePage, moveSlider };