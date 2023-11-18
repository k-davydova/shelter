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

  if (burgerIcon.classList.contains('_active')) {
    burgerIcon.classList.remove('_active');
    navigation.classList.remove('_active');
    (0,_background__WEBPACK_IMPORTED_MODULE_0__.toggleBackground)();
  } else {
    burgerIcon.classList.add('_active');
    navigation.classList.add('_active');
    (0,_background__WEBPACK_IMPORTED_MODULE_0__.toggleBackground)();
  }

  // const closeFunction = () => {
  //   if (background.classList.contains('_active')) {
  //     toggleBackground();
  //   }
  // };

  navigationItems.forEach(item => {
    item.addEventListener('click', toggleBurgerNavigation);
  });

  background.addEventListener('click', toggleBurgerNavigation);

};

burgerIcon.addEventListener('click', toggleBurgerNavigation);




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
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");



window.addEventListener('DOMContentLoaded', () => {

});

})();

/******/ })()
;
//# sourceMappingURL=common.js.map