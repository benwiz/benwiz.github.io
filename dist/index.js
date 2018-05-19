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
  var titleElement = document.querySelector('.mdc-card__title');
  var subtitleElement = document.querySelector('.mdc-card__subtitle');
  var secondaryElement = document.querySelector('.mdc-card__secondary');
  var actionsElement = document.querySelector('.mdc-card__actions');

  titleElement.innerHTML = 'Tulane University';
  subtitleElement.innerHTML = 'B.S. in Economics and Computer Science';
  secondaryElement.innerHTML = 'Something about why I like Tulane.';
};
var setBragOnCard = function setBragOnCard() {
  var titleElement = document.querySelector('.mdc-card__title');
  var subtitleElement = document.querySelector('.mdc-card__subtitle');
  var secondaryElement = document.querySelector('.mdc-card__secondary');
  var actionsElement = document.querySelector('.mdc-card__actions');

  titleElement.innerHTML = 'BragOn, LLC';
  subtitleElement.innerHTML = 'Founder & iOS Developer 2014-2015';
  secondaryElement.innerHTML = 'Something about why I started BragOn.';
};
var setGrokAndBanterCard = function setGrokAndBanterCard() {
  var titleElement = document.querySelector('.mdc-card__title');
  var subtitleElement = document.querySelector('.mdc-card__subtitle');
  var secondaryElement = document.querySelector('.mdc-card__secondary');
  var actionsElement = document.querySelector('.mdc-card__actions');

  titleElement.innerHTML = 'Grok + Banter';
  subtitleElement.innerHTML = 'Information Analyst and Software Developer | 2016';
  secondaryElement.innerHTML = 'Something about why I think G+B was a good experience.';
};
var setLucidCard = function setLucidCard() {
  var titleElement = document.querySelector('.mdc-card__title');
  var subtitleElement = document.querySelector('.mdc-card__subtitle');
  var secondaryElement = document.querySelector('.mdc-card__secondary');
  var actionsElement = document.querySelector('.mdc-card__actions');

  titleElement.innerHTML = 'Lucid';
  subtitleElement.innerHTML = 'Senior Engineer';
  secondaryElement.innerHTML = 'Something about why I was valuable to Lucid.';
};
var setWWOZToSpotifyCard = function setWWOZToSpotifyCard() {
  var titleElement = document.querySelector('.mdc-card__title');
  var subtitleElement = document.querySelector('.mdc-card__subtitle');
  var secondaryElement = document.querySelector('.mdc-card__secondary');
  var actionsElement = document.querySelector('.mdc-card__actions');

  titleElement.innerHTML = 'WWOZ-to-Spotify';
  subtitleElement.innerHTML = '';
  secondaryElement.innerHTML = 'An AWS Lambda function written in Clojure that reads WWOZ\'s RSS feed then adds each song to a Spotify playlist';
  // NOTE: When adding links, make sure there is one to the spotify playlist.
};
var setLowpolyCard = function setLowpolyCard() {
  var titleElement = document.querySelector('.mdc-card__title');
  var subtitleElement = document.querySelector('.mdc-card__subtitle');
  var secondaryElement = document.querySelector('.mdc-card__secondary');
  var actionsElement = document.querySelector('.mdc-card__actions');

  titleElement.innerHTML = 'Lowpoly';
  subtitleElement.innerHTML = '';
  secondaryElement.innerHTML = 'A collection of AWS Lambda functions written in Clojure and Python that turn an image into a lowpoly version made of triangles.';
};
var setSquiggleCard = function setSquiggleCard() {
  var titleElement = document.querySelector('.mdc-card__title');
  var subtitleElement = document.querySelector('.mdc-card__subtitle');
  var secondaryElement = document.querySelector('.mdc-card__secondary');
  var actionsElement = document.querySelector('.mdc-card__actions');

  titleElement.innerHTML = 'Squiggle';
  subtitleElement.innerHTML = '';
  secondaryElement.innerHTML = 'A ClojureScript website that uses Quil (a Processing wrapper) to for several small drawings and animations.';
};
var setProfileCard = function setProfileCard() {
  var titleElement = document.querySelector('.mdc-card__title');
  var subtitleElement = document.querySelector('.mdc-card__subtitle');
  var secondaryElement = document.querySelector('.mdc-card__secondary');
  var actionsElement = document.querySelector('.mdc-card__actions');

  titleElement.innerHTML = 'Ben Wisialowski';
  subtitleElement.innerHTML = 'Senior Engineer at Lucid';
  secondaryElement.innerHTML = 'Software developer enjoying the food, music, and culture of New Orleans.';
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
setProfileCard();
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