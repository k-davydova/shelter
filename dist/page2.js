/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/background.js":
/*!**************************************!*\
  !*** ./src/js/modules/background.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleBackground: () => (/* binding */ toggleBackground)
/* harmony export */ });
const toggleBackground = () => {
  const background = document.querySelector('.background');
  background.classList.toggle('_active');
};



/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closePetsModal: () => (/* binding */ closePetsModal),
/* harmony export */   openPetsModal: () => (/* binding */ openPetsModal)
/* harmony export */ });
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ "./src/js/modules/background.js");
/* harmony import */ var _petCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./petCards */ "./src/js/modules/petCards.js");



const openPetsModal = (petsData, parentSelector) => {
  const parent = document.querySelector(parentSelector);
  const sliderCards = document.querySelectorAll('.our-friends__slide');

  petsData.forEach((data, index ) => {
    sliderCards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        if (index === idx) {
          const { id, title, type, description, src, attributes } = petsData[idx];

          new _petCards__WEBPACK_IMPORTED_MODULE_1__.PetCards(id, title, type, description, src, parent, attributes).createModalPetCards();
          closePetsModal();
          (0,_background__WEBPACK_IMPORTED_MODULE_0__.toggleBackground)();
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
      (0,_background__WEBPACK_IMPORTED_MODULE_0__.toggleBackground)();
    }
  };

  closeButton.addEventListener('click', closeFunction);
  background.addEventListener('click', closeFunction);
};




/***/ }),

/***/ "./src/js/modules/petCards.js":
/*!************************************!*\
  !*** ./src/js/modules/petCards.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PetCards: () => (/* binding */ PetCards)
/* harmony export */ });
class PetCards {
  constructor(id, title, type, description, src, parent, attributes) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.description = description;
    this.src = src;
    this.attributes = attributes;
    this.parent = parent;
  }

  createSliderPetCards() {
    const slide = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const button = document.createElement('button');

    slide.classList.add('our-friends__slide');
    slide.id = this.id;

    img.classList.add('our-friends__slide-img');
    img.src = this.src;
    img.alt = this.title;

    p.classList.add('our-friends__slide-text');
    p.textContent = this.title;

    button.classList.add('our-friends__slide-button');
    button.textContent = 'Learn more';


    slide.append(img, p, button);

    return slide;
  }

  createModalPetCards() {
    const modal = document.createElement('div');
    const img = document.createElement('img');
    const content = document.createElement('div');
    const titleWrapper = document.createElement('div');
    const header = document.createElement('h3');
    const subheader = document.createElement('h4');
    const descr = document.createElement('p');
    const ul = document.createElement('ul');
    const closeButton = document.createElement('span');

    modal.classList.add('our-friends__card');
    modal.style.zIndex = '5';
    modal.classList.add('fade-in-animation');

    img.classList.add('our-friends__slide-img');
    img.src = this.src;
    img.alt = this.title;

    content.classList.add('our-friends__card-content');

    titleWrapper.classList.add('our-friends__card-title');

    header.classList.add('our-friends__card-header');
    header.textContent = this.title;

    subheader.classList.add('our-friends__card-subheader');
    subheader.textContent = this.type;

    descr.classList.add('our-friends__card-text');
    descr.textContent = this.description;

    ul.classList.add('our-friends__card-list');

    closeButton.classList.add('our-friends__card-button');

    Object.entries(this.attributes).forEach(([ attribute, value ]) => {
      const li = document.createElement('li');
      const span = document.createElement('span');

      li.classList.add('our-friends__card-item');

      span.textContent = `${attribute}: `;

      li.append(span, value);
      ul.append(li);
    });

    titleWrapper.append(header, subheader);
    content.append(titleWrapper, descr, ul);
    modal.append(img, content, closeButton);
    this.parent.append(modal);
  }

}



/***/ }),

/***/ "./src/js/modules/slider-test.js":
/*!***************************************!*\
  !*** ./src/js/modules/slider-test.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSlideCards: () => (/* binding */ addSlideCards)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/modules/utils.js");
/* harmony import */ var _petCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./petCards */ "./src/js/modules/petCards.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");




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
  const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getResource)('../../../assets/json/pets.json');
  const parent = document.querySelector(parentSelector);

  const addSlideCardsToParent = (parent, order) => {
    order.forEach((index) => {
      const { id, title, type, description, src } = data[index];
      const slide = new _petCards__WEBPACK_IMPORTED_MODULE_1__.PetCards(id, title, type, description, src).createSliderPetCards();

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

  (0,_modal__WEBPACK_IMPORTED_MODULE_2__.openPetsModal)(data, '.our-friends__wrapper');
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




/***/ }),

/***/ "./src/js/modules/utils.js":
/*!*********************************!*\
  !*** ./src/js/modules/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResource: () => (/* binding */ getResource)
/* harmony export */ });
const getResource = async (src) => {
  const res = await fetch(src);
  const data = await res.json();
  return data;
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/pages/our-pets/script.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_slider_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/modules/slider-test */ "./src/js/modules/slider-test.js");


window.addEventListener('DOMContentLoaded', () => {

  (0,_js_modules_slider_test__WEBPACK_IMPORTED_MODULE_0__.addSlideCards)({
    parentSelector: '.our-friends__slider-track',
    numberOfPages: 8
  });


});
})();

/******/ })()
;
//# sourceMappingURL=page2.js.map