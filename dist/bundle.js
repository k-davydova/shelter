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
const createHelpContent = (helpData) => {
  const parentElement = document.querySelector('.help__items');

  helpData.forEach((item) => {
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



const openPetsModal = (petsData) => {
  const sliderCards = document.querySelectorAll('.our-friends__slide');

  petsData.forEach((data, index ) => {
    sliderCards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        if (index === idx) {
          const { title, type, description, src, attributes } = petsData[idx];
          new _petCards__WEBPACK_IMPORTED_MODULE_1__.PetCards(title, type, description, src, '.our-friends__wrapper', attributes).createModalPetCards();
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
  constructor(title, type, description, src, parentSelector, attributes) {
    this.title = title;
    this.type = type;
    this.description = description;
    this.src = src;
    this.attributes = attributes;
    this.parent = document.querySelector(parentSelector);
  }

  createSliderPetCards() {
    const slide = document.createElement('div');
    slide.setAttribute('class', 'our-friends__slide');

    const img = document.createElement('img');
    img.setAttribute('class', 'our-friends__slide-img');
    img.setAttribute('src', this.src);
    img.setAttribute('alt', this.title);

    const p = document.createElement('p');
    p.setAttribute('class', 'our-friends__slide-text');
    p.textContent = this.title;

    const button = document.createElement('button');
    button.setAttribute('class', 'our-friends__slide-button');
    button.textContent = 'Learn more';

    slide.append(img, p, button);
    this.parent.append(slide);
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

    for (const [ attribute, value ] of Object.entries(this.attributes)) {
      const li = document.createElement('li');
      li.setAttribute('class', 'our-friends__card-item');

      const span = document.createElement('span');
      span.textContent = `${attribute}: `;

      li.append(span, value);
      ul.append(li);
    }

    const closeButton = document.createElement('span');
    closeButton.setAttribute('class', 'our-friends__card-button');

    titleWrapper.append(header, subheader);
    content.append(titleWrapper, descr, ul);
    modal.append(img, content, closeButton);
    this.parent.append(modal);
  }

}



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
/* harmony import */ var _modules_help__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/help */ "./src/js/modules/help.js");
/* harmony import */ var _modules_petCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/petCards */ "./src/js/modules/petCards.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_background__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/background */ "./src/js/modules/background.js");







window.addEventListener('DOMContentLoaded', () => {

  (0,_modules_utils__WEBPACK_IMPORTED_MODULE_0__.getResource)('../assets/json/help.json')
    .then((data) => (0,_modules_help__WEBPACK_IMPORTED_MODULE_1__.createHelpContent)(data));

  (0,_modules_utils__WEBPACK_IMPORTED_MODULE_0__.getResource)('../assets/json/pets.json')
    .then(data => {
      data.forEach(( {title, type, description, src} ) => {
        new _modules_petCards__WEBPACK_IMPORTED_MODULE_2__.PetCards(title, type, description, src, '.our-friends__slider-track').createSliderPetCards();
      });

      (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.openPetsModal)(data);
    });

});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map