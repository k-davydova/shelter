import { getResource } from './utils';
import { PetCards } from './petCards';
import { openPetsModal } from './modal';
const sliderPrev = document.querySelector('.our-friends__slider-button_prev');
const sliderNext = document.querySelector('.our-friends__slider-button_next');
const sliderTrack = document.querySelector('.our-friends__slider-track');
let flex;
const getNumberOfCards = () => {
  const screenWidth = window.innerWidth;
  let numberOfCards;
  if (screenWidth >= 1280) {
    numberOfCards = 3;
  } else if (screenWidth >= 768) {
    numberOfCards = 2;
  } else {
    numberOfCards = 1;
  }
  return numberOfCards;
};
window.addEventListener('resize', getNumberOfCards);
const addSlideCards = async ({
  parentSelector
}) => {
  const data = await getResource('../assets/json/pets.json');
  const parent = document.querySelector(parentSelector);
  data.forEach(data => {
    const {
      id,
      title,
      type,
      description,
      src
    } = data;
    const slide = new PetCards(id, title, type, description, src).createSliderPetCards();
    parent.appendChild(slide);
  });
  openPetsModal(data, '.our-friends__wrapper');
};
const moveSlider = ({
  direction
}) => {
  const numberOfCards = getNumberOfCards();
  const wrapper = document.querySelector('.our-friends__slider-wrapper');
  const wrapperWidth = wrapper.offsetWidth;
  const gapComputedStyle = window.getComputedStyle(sliderTrack);
  const gapValue = +gapComputedStyle.getPropertyValue('gap').slice(0, -2);
  const offset = wrapperWidth + gapValue;
  if (direction === 'next') {
    flex = -1;
    wrapper.style.justifyContent = 'flex-start';
    sliderTrack.style.transform = `translateX(${-offset}px)`;
  }
  if (direction === 'prev') {
    if (flex === -1) {
      for (let i = 0; i < numberOfCards; i++) {
        sliderTrack.appendChild(sliderTrack.firstElementChild);
      }
      flex = 1;
    }
    wrapper.style.justifyContent = 'flex-end';
    sliderTrack.style.transform = `translateX(${offset}px)`;
  }
};
sliderTrack.addEventListener('transitionend', () => {
  const numberOfCards = getNumberOfCards();
  if (flex === -1) {
    for (let i = 0; i < numberOfCards; i++) {
      sliderTrack.appendChild(sliderTrack.firstElementChild);
    }
  } else {
    for (let i = 0; i < numberOfCards; i++) {
      sliderTrack.prepend(sliderTrack.lastElementChild);
    }
  }
  sliderTrack.style.transition = 'none';
  sliderTrack.style.transform = 'translateX(0)';
  setTimeout(() => {
    sliderTrack.style.transition = 'all 0.5s';
  });
});
sliderPrev.addEventListener('click', () => moveSlider({
  direction: 'prev'
}));
sliderNext.addEventListener('click', () => moveSlider({
  direction: 'next'
}));
export { addSlideCards };