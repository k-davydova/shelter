import { getResource } from './utils';
import { PetCards } from './petCards';
import { openPetsModal } from './modal';

const sliderPrev = document.querySelector('.our-friends__slider-button_prev');
const sliderNext = document.querySelector('.our-friends__slider-button_next');
const sliderStart = document.querySelector('.our-friends__slider-button_start');
const sliderEnd = document.querySelector('.our-friends__slider-button_end');
// const sliderIndicator = document.querySelector('.our-friends__slider-indicator');
const sliderTrack = document.querySelector('.our-friends__slider-track');

let flex = -1;
let isAnimating = false;
let pageCounter = 1;
let numberOfCards;

const numberOfPages = 8;

const changeNumberOfPage = (pageCounter) => {
  const sliderIndicator = document.querySelector('.our-friends__slider-indicator');

  if (sliderIndicator) {
    if (event.target === sliderEnd) {
      sliderIndicator.innerHTML = numberOfPages;
    } else if (event.target === sliderStart) {
      sliderIndicator.innerHTML = '1';
    } else {
      sliderIndicator.innerHTML = pageCounter;
    }

    if (pageCounter === 1) {
      sliderStart.disabled = true;
      sliderPrev.disabled = true;
    } else if (pageCounter === numberOfPages) {
      sliderEnd.disabled = true;
      sliderNext.disabled = true;
    } else {
      sliderPrev.disabled = false;
      sliderNext.disabled = false;
      sliderStart.disabled = false;
      sliderEnd.disabled = false;
    }
  }

};

const generateArrayOfRandomNumbers = (length, min, max) => {
  const arrayOfRandomNumbers = [];

  for (let i = 0; arrayOfRandomNumbers.length < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (!arrayOfRandomNumbers.includes(randomNumber)) {
      arrayOfRandomNumbers.push(randomNumber);
    }
  }

  return arrayOfRandomNumbers;
};

const getNumberOfCards = () => {
  const page = document.querySelector('.our-friends__slider-page_our-pets');
  const screenWidth = window.innerWidth;

  if (event.target === sliderEnd) {
    console.log(pageCounter);
    return numberOfPages - pageCounter;
  }

  if (event.target === sliderStart) {
    return pageCounter;
  }

  if (page) return 1;

  if (screenWidth >= 1280) {
    return 3;
  } else if (screenWidth >= 768) {
    return 2;
  } else {
    return 1;
  }

};

const addSlideCards = async ({ parentSelector, numberOfPages }) => {
  const data = await getResource('../../../assets/json/pets.json');
  const parent = document.querySelector(parentSelector);

  const addSlideCardsToParent = (parent, order) => {
    order.forEach((index) => {
      const { id, title, type, description, src } = data[index];
      const slide = new PetCards(id, title, type, description, src).createSliderPetCards();

      parent.appendChild(slide);
    });
  };

  if (numberOfPages) {
    for (let i = 0; i < numberOfPages; i++) {
      const page = document.createElement('div');

      page.classList.add('our-friends__slider-page_our-pets');
      page.setAttribute('data-number', `${i + 1}`);

      const randomOrder = generateArrayOfRandomNumbers(8, 0, 8);

      addSlideCardsToParent(page, randomOrder);

      parent.appendChild(page);
    }
  } else {
    const arrayOfData = [];

    for (let i = 0; i < data.length; i++) {
      arrayOfData.push(i);
    }

    addSlideCardsToParent(parent, arrayOfData);
  }

  openPetsModal(data, '.our-friends__wrapper');
};

const moveSlider = ({ direction }) => {

  if (isAnimating) return;

  isAnimating = true;

  numberOfCards = getNumberOfCards();

  const wrapper = document.querySelector('.our-friends__slider-wrapper');
  const wrapperWidth = wrapper.offsetWidth;

  const gapComputedStyle = window.getComputedStyle(sliderTrack);
  const gapValue = +gapComputedStyle.getPropertyValue('gap').slice(0, -2);

  const offset = wrapperWidth + gapValue;

  if (direction === 'next') {
    if (flex === 1) {
      for (let i = 0; i < numberOfCards; i++) {
        sliderTrack.prepend(sliderTrack.lastElementChild);
      }
      flex = -1;
      pageCounter++;
    }

    wrapper.style.justifyContent = 'flex-start';
    sliderTrack.style.transform = `translateX(${-offset}px)`;
    pageCounter++;
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

    pageCounter--;
  }

  changeNumberOfPage(pageCounter);
};

sliderTrack.addEventListener('transitionend', () => {
  // console.log(numberOfCards);

  if (flex === -1) {
    for (let i = 0; i < numberOfCards; i++) {
      sliderTrack.appendChild(sliderTrack.firstElementChild);
    }
  } else {
    for (let i = 0; i < numberOfCards; i++) {
      // console.log(sliderTrack.lastElementChild);
      sliderTrack.prepend(sliderTrack.lastElementChild);
    }
  }

  sliderTrack.style.transition = 'none';
  sliderTrack.style.transform = 'translateX(0)';

  setTimeout(() => {
    sliderTrack.style.transition = 'all 0.5s';
    isAnimating = false;
  });

});

window.addEventListener('resize', getNumberOfCards);

sliderStart?.addEventListener('click', () => {
  moveSlider({ direction: 'prev' });
});

sliderPrev.addEventListener('click', () => {
  moveSlider({ direction: 'prev' });
});

sliderNext.addEventListener('click', () => {
  console.log('hehe')
  moveSlider({ direction: 'next' });
});

sliderEnd?.addEventListener('click', () => {
  moveSlider({ direction: 'next' });
});

export { addSlideCards };
