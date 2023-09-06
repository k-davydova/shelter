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

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleBurgerNavigation: () => (/* binding */ toggleBurgerNavigation)
/* harmony export */ });
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ "./src/js/modules/background.js");


const burgerIcon = document.querySelector('.burger-menu');

const toggleBurgerNavigation = () => {
  const navigation = document.querySelector('.navigation');
  const background = document.querySelector('.background');
  const navigationItems = document.querySelectorAll('.navigation__item');

  burgerIcon.classList.toggle('_active');
  navigation.classList.toggle('_active');
  (0,_background__WEBPACK_IMPORTED_MODULE_0__.toggleBackground)();

  navigationItems.forEach(item => {
    item.addEventListener('click', toggleBurgerNavigation);
  });

  background.addEventListener('click', toggleBurgerNavigation);

};

burgerIcon.addEventListener('click', toggleBurgerNavigation);




/***/ }),

/***/ "./src/js/modules/help.js":
/*!********************************!*\
  !*** ./src/js/modules/help.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHelpContent: () => (/* binding */ createHelpContent)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/modules/utils.js");


const createHelpContent = async () => {
  const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getResource)('../assets/json/help.json');

  const parentElement = document.querySelector('.help__items');

  data.forEach((item) => {
    const { title, src } = item;

    const element = document.createElement('div');
    element.setAttribute('class', 'help__item');

    const span = document.createElement('span');
    span.setAttribute('class', 'help__icon');
    span.style.backgroundImage = `url(${src})`;

    const p = document.createElement('p');
    p.setAttribute('class', 'help__text');
    p.textContent = title;

    element.append(span, p);
    parentElement.append(element);
  });

};

createHelpContent();



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

  static injectCards() {
    // console.log(this);
  }

  createSliderPetCards() {
    const slide = document.createElement('div');

    slide.classList.add('our-friends__slide');
    slide.setAttribute('id', `${this.id}`);

    const img = document.createElement('img');

    img.classList.add('our-friends__slide-img');
    img.src = this.src;
    img.alt = this.title;

    const p = document.createElement('p');

    p.classList.add('our-friends__slide-text');
    p.textContent = this.title;

    const button = document.createElement('button');

    button.classList.add('our-friends__slide-button');
    button.textContent = 'Learn more';

    slide.append(img, p, button);

    return slide;
  }

  createModalPetCards() {
    const modal = document.createElement('div');
    modal.setAttribute('class', 'our-friends__card');
    modal.style.zIndex = '5';

    const img = document.createElement('img');
    img.setAttribute('class', 'our-friends__slide-img');
    img.setAttribute('src', this.src);
    img.setAttribute('alt', this.title);

    const content = document.createElement('div');
    content.setAttribute('class', 'our-friends__card-content');

    const titleWrapper = document.createElement('div');
    titleWrapper.setAttribute('class', 'our-friends__card-title');

    const header = document.createElement('h3');
    header.setAttribute('class', 'our-friends__card-header');
    header.textContent = this.title;

    const subheader = document.createElement('h4');
    subheader.setAttribute('class', 'our-friends__card-subheader');
    subheader.textContent = this.type;

    const descr = document.createElement('p');
    descr.setAttribute('class', 'our-friends__card-text');
    descr.textContent = this.description;

    const ul = document.createElement('ul');
    ul.setAttribute('class', 'our-friends__card-list');

    Object.entries(this.attributes).forEach(([attribute, value]) => {
      const li = document.createElement('li');
      li.setAttribute('class', 'our-friends__card-item');

      const span = document.createElement('span');
      span.textContent = `${attribute}: `;

      li.append(span, value);
      ul.append(li);
    });

    // for (const [ attribute, value ] of Object.entries(this.attributes)) {
    //   const li = document.createElement('li');
    //   li.setAttribute('class', 'our-friends__card-item');

    //   const span = document.createElement('span');
    //   span.textContent = `${attribute}: `;

    //   li.append(span, value);
    //   ul.append(li);
    // }

    const closeButton = document.createElement('span');
    closeButton.setAttribute('class', 'our-friends__card-button');

    titleWrapper.append(header, subheader);
    content.append(titleWrapper, descr, ul);
    modal.append(img, content, closeButton);
    this.parent.append(modal);
  }

}



/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSlidePage: () => (/* binding */ addSlidePage),
/* harmony export */   moveSlider: () => (/* binding */ moveSlider)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/modules/utils.js");
/* harmony import */ var _petCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./petCards */ "./src/js/modules/petCards.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");




const sliderNext = document.querySelector('.our-friends__slider-button_next');
const sliderPrev = document.querySelector('.our-friends__slider-button_prev');

let currentCardIndex = 0;

const addSlidePage = async ({ addAtBeginning, numberOfCards, parentSelector }) => {
  const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getResource)('../assets/json/pets.json');
  const parent = document.querySelector(parentSelector);
  const container = document.createElement('div');

  container.classList.add('our-friends__slider-page');

  if (!addAtBeginning) {
    for (let i = 0; i < numberOfCards; i++) {
      const currentIndex = (currentCardIndex + i) % data.length;
      const { id, title, type, description, src } = data[currentIndex];
      const card = new _petCards__WEBPACK_IMPORTED_MODULE_1__.PetCards(id, title, type, description, src);
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
      const { id, title, type, description, src } = data[currentIndex];
      const card = new _petCards__WEBPACK_IMPORTED_MODULE_1__.PetCards(id, title, type, description, src);
      const slide = card.createSliderPetCards();

      container.prepend(slide);
    }

    parent.prepend(container);

    currentCardIndex += numberOfCards;

  }

  const listOfPages = parent.childNodes;

  // deleteSlidePage();
  (0,_modal__WEBPACK_IMPORTED_MODULE_2__.openPetsModal)(data, '.our-friends__wrapper');
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

const moveSlider = (direction) => {
  const sliderTrack = document.querySelector('.our-friends__slider-track');
  const page = document.querySelector('.our-friends__slider-page');

  const pageWidth = page.offsetWidth;
  const gapComputedStyle = window.getComputedStyle(sliderTrack);
  const gapValue = +gapComputedStyle.getPropertyValue('gap').slice(0, -2);

  let offset = parseInt(sliderTrack.style.transform.replace('translateX(', '').replace('px)', '')) || 0;

  if (direction === 'right') {
    if (-offset === sliderTrack.offsetWidth + gapValue - pageWidth - gapValue) {
      addSlidePage({
        addAtBeginning: false,
        numberOfCards: 3,
        parentSelector: '.our-friends__slider-track'
      });
    }

    offset -= pageWidth + gapValue;
  }

  if (direction === 'left') {
    console.log(offset); //
    if (offset >= 0) {
      console.log(offset);
      addSlidePage({
        addAtBeginning: true,
        numberOfCards: 3,
        parentSelector: '.our-friends__slider-track'
      });

      sliderTrack.style.transform = `translateX(${offset}px)`;
    }

    // offset += pageWidth + gapValue;
  }

  // sliderTrack.addEventListener('transitionend', () => {
  // затестить эту штуку
  // });

  sliderTrack.style.transition = 'transform 0.8s ease-in-out';
  sliderTrack.style.transform = `translateX(${offset}px)`;

  setTimeout(() => {
    sliderTrack.style.transition = '';
  }, 800);

};

sliderPrev.addEventListener('click', () => moveSlider('left'));
sliderNext.addEventListener('click', () => moveSlider('right'));




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
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/utils */ "./src/js/modules/utils.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_help__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/help */ "./src/js/modules/help.js");
/* harmony import */ var _modules_petCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/petCards */ "./src/js/modules/petCards.js");
/* harmony import */ var _modules_background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/background */ "./src/js/modules/background.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");







window.addEventListener('DOMContentLoaded', () => {

  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.addSlidePage)({
    addAtBeginning: false,
    numberOfCards: 3,
    parentSelector: '.our-friends__slider-track'
  });

});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map