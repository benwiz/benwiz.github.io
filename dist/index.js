/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Card selectors
var setTulaneCard = function setTulaneCard() {
  console.log('setTulaneCard()');
};
var setBragOnCard = function setBragOnCard() {
  console.log('setBragOnCard()');
};
var setGrokAndBanterCard = function setGrokAndBanterCard() {
  console.log('setGrokAndBanterCard()');
};
var setLucidCard = function setLucidCard() {
  console.log('setLucidCard()');
};
var setWWOZToSpotifyCard = function setWWOZToSpotifyCard() {
  console.log('setWWOZToSpotifyCard()');
};
var setLowpolyCard = function setLowpolyCard() {
  console.log('setLowpolyCard()');
};
var setSquiggleCard = function setSquiggleCard() {
  console.log('setSquiggleCard()');
};
var setProfileCard = function setProfileCard() {
  console.log('setProfileCard()');
};

// Initialize click handlers to toggle between cards
var initCardSelectors = function initCardSelectors() {
  var cardSelectors = document.querySelectorAll('.card-selector');
  var onCardSelectorClick = function onCardSelectorClick(e) {
    var cardSelector = e.target.parentNode;
    var label = cardSelector.getAttribute('label');
    if (label === 'Tulane University') setTulaneCard();else if (label === 'BragOn') setBragOnCard();else if (label === 'Grok + Banter') setGrokAndBanterCard();else if (label === 'Lucid') setLucidCard();else if (label === 'WWOZ-to-Spotify') setWWOZToSpotifyCard();else if (label === 'Lowpoly') setLowpolyCard();else if (label === 'Squiggle') setSquiggleCard();else setProfileCard();
  };
  cardSelectors.forEach(function (cardSelector) {
    cardSelector.addEventListener('click', onCardSelectorClick);
  });
};

// Initialize the tooltip at the bottom
var initTooltip = function initTooltip() {
  var tooltip = document.querySelector('#tooltip');
  var links = document.querySelectorAll('a');
  var onLinkMouseover = function onLinkMouseover(e) {
    tooltip.style.visibility = 'visible';
    tooltip.textContent = e.target.getAttribute('label');
  };
  var onLinkMouseleave = function onLinkMouseleave(_e) {
    tooltip.style.visibility = 'hidden';
    tooltip.textContent = 'nothing';
  };
  links.forEach(function (link) {
    link.addEventListener('mouseenter', onLinkMouseover);
    link.addEventListener('mouseleave', onLinkMouseleave);
  });
};

// Init everything
initCardSelectors();
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  // Do nothing if mobile
} else {
  // Initialize tooltip if not mobile
  initTooltip();
}

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map