import { getResource } from './utils';
import { PetCards } from './petCards';
import { openPetsModal } from './modal';

const sliderNext = document.querySelector('.our-friends__slider-button_next');
const sliderPrev = document.querySelector('.our-friends__slider-button_prev');

let offset = 0;
let currentCardIndex = 0;

const injectThreePages = async ({ numberOfPages, parentSelector }) => {
  const data = await getResource('../assets/json/pets.json');

  const parent = document.querySelector(parentSelector);

  const container = document.createElement('div');
  container.classList.add('our-friends__slider-page');

  if (!addAtBeginning) {

    for (let i = 0; i < numberOfCards; i++) {
      const currentIndex = (currentCardIndex + i) % data.length;
      const { id, title, type, description, src } = data[currentIndex];
      const card = new PetCards(id, title, type, description, src);
      const slide = card.createSliderPetCards();

      container.append(slide);
    }

    parent.append(container);

    currentCardIndex += numberOfCards;
    // console.log(currentCardIndex);
    deleteSlidePage();
  }

  parent.prepend(container);


  const listOfPages = parent.childNodes;

  openPetsModal(data, '.our-friends__wrapper');
  // deleteSlidePage();
};

// const addSlidePage = async ({ addAtBeginning, numberOfCards, parentSelector }) => {
//   const data = await getResource('../assets/json/pets.json');

//   const parent = document.querySelector(parentSelector);

//   const container = document.createElement('div');
//   container.classList.add('our-friends__slider-page');

//   if (!addAtBeginning) {
//     // console.log(currentCardIndex);
//     for (let i = 0; i < numberOfCards; i++) {
//       const currentIndex = (currentCardIndex + i) % data.length;
//       const { id, title, type, description, src } = data[currentIndex];
//       const card = new PetCards(id, title, type, description, src);
//       const slide = card.createSliderPetCards();

//       container.append(slide);
//     }

//     parent.append(container);

//     currentCardIndex += numberOfCards;
//     // console.log(currentCardIndex);
//     deleteSlidePage();
//   } else {
//     currentCardIndex -= 6;

//     if (currentCardIndex < 0) {
//       currentCardIndex += data.length;
//     }

//     for (let i = numberOfCards - 1; i >= 0; i--) {
//       const currentIndex = (currentCardIndex + i) % data.length;
//       const { id, title, type, description, src } = data[currentIndex];
//       const card = new PetCards(id, title, type, description, src);
//       const slide = card.createSliderPetCards();
//       container.prepend(slide);
//     }

//     parent.prepend(container);

//     currentCardIndex += numberOfCards;

//   }

//   const listOfPages = parent.childNodes;

//   openPetsModal(data, '.our-friends__wrapper');
//   // deleteSlidePage();

// };

const deleteSlidePage = () => {
  // const listLength = listOfPages.length;
  const nodeList = document.querySelectorAll('.our-friends__slider-page');
  console.log(nodeList);

  if (nodeList.length > 2) {
    const firstElement = nodeList[0];
    console.log('hehe');

    firstElement.parentNode.removeChild(firstElement);
  }

};

// deleteSlidePage();

const moveSlider = (direction) => {
  const page = document.querySelector('.our-friends__slider-page');
  console.log(currentCardIndex);
  const pageWidth = page.offsetWidth;

  const sliderTrack = document.querySelector('.our-friends__slider-track');

  const gapComputedStyle = window.getComputedStyle(sliderTrack);
  const gapValue = +gapComputedStyle.getPropertyValue('gap').slice(0, -2);

  if (direction === 'right') {
    addSlidePage({ addAtBeginning: false, numberOfCards: 3, parentSelector: '.our-friends__slider-track' });

    // offset -= pageWidth + gapValue;
    // offset += 0;

    // sliderTrack.style.transform = `translateX(${offset}px)`;
  }

  if (direction === 'left') {
    addSlidePage({ addAtBeginning: true, numberOfCards: 3, parentSelector: '.our-friends__slider-track' });
    // offset += sliderWrapper.offsetWidth + gapValue;
    // offset += 0;
    // sliderTrack.style.transform = `translateX(${offset}px)`;
  }

};

sliderPrev.addEventListener('click', () => moveSlider('left'));
sliderNext.addEventListener('click', () => moveSlider('right'));

// export { moveSlider, addSlidePage, deleteSlidePage };
export { injectThreePages, moveSlider };

// export function createSlider(
//   containerId,

// ) {

// };
