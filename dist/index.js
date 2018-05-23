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
var setProfileCard = function setProfileCard() {
  var titleElement = document.querySelector('.mdc-card__title');
  var subtitleElement = document.querySelector('.mdc-card__subtitle');
  var secondaryElement = document.querySelector('.mdc-card__secondary');
  var actionIconsElement = document.querySelector('.mdc-card__action-icons');

  titleElement.innerHTML = 'Ben Wisialowski';
  subtitleElement.innerHTML = 'Senior Engineer at Lucid';
  secondaryElement.innerHTML = 'Software developer enjoying the food, music, and culture of New Orleans.';
  actionIconsElement.innerHTML = '\n    <a class="link-icon" href="https://github.com/benwiz" target="_blank" label="GitHub">\n      <img src="/assets/images/mark-github.svg" height="24">\n    </a>\n    <a class="link-icon" href="https://www.linkedin.com/in/benwiz" target="_blank" label="LinkedIn">\n      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg>\n    </a>\n    <!--\n    <a class="link-icon" href="/assets/resume.pdf" target="_blank" label="Resume">\n      <img src="/assets/images/resume.svg" height="24">\n    </a>\n    -->\n  ';
};
var setTulaneCard = function setTulaneCard() {
  var titleElement = document.querySelector('.mdc-card__title');
  var subtitleElement = document.querySelector('.mdc-card__subtitle');
  var secondaryElement = document.querySelector('.mdc-card__secondary');
  var actionIconsElement = document.querySelector('.mdc-card__action-icons');

  titleElement.innerHTML = 'Tulane University';
  subtitleElement.innerHTML = 'B.S. in Economics and Computer Science';
  secondaryElement.innerHTML = '';
  actionIconsElement.innerHTML = '\n    <a class="link-icon" href="https://tulane.edu" target="_blank" label="Tulane">\n      <img src="/assets/images/tulane.png" height="24">\n    </a>\n  ';
};
var setBragOnCard = function setBragOnCard() {
  var titleElement = document.querySelector('.mdc-card__title');
  var subtitleElement = document.querySelector('.mdc-card__subtitle');
  var secondaryElement = document.querySelector('.mdc-card__secondary');
  var actionIconsElement = document.querySelector('.mdc-card__action-icons');

  titleElement.innerHTML = 'BragOn, LLC';
  subtitleElement.innerHTML = 'Founder & iOS Developer';
  secondaryElement.innerHTML = '';
  actionIconsElement.innerHTML = '';
};
var setGrokAndBanterCard = function setGrokAndBanterCard() {
  var titleElement = document.querySelector('.mdc-card__title');
  var subtitleElement = document.querySelector('.mdc-card__subtitle');
  var secondaryElement = document.querySelector('.mdc-card__secondary');
  var actionIconsElement = document.querySelector('.mdc-card__action-icons');

  titleElement.innerHTML = 'Grok + Banter';
  subtitleElement.innerHTML = 'Information Analyst and Software Developer';
  secondaryElement.innerHTML = '';
  actionIconsElement.innerHTML = '\n    <a class="link-icon" href="https://www.linkedin.com/company/grok-&-banter-llc/" target="_blank" label="Grok + Banter">\n      <img src="/assets/images/gb.png" height="24">\n    </a>\n  ';
};
var setLucidCard = function setLucidCard() {
  var titleElement = document.querySelector('.mdc-card__title');
  var subtitleElement = document.querySelector('.mdc-card__subtitle');
  var secondaryElement = document.querySelector('.mdc-card__secondary');
  var actionIconsElement = document.querySelector('.mdc-card__action-icons');

  titleElement.innerHTML = 'Lucid';
  subtitleElement.innerHTML = 'Senior Engineer';
  secondaryElement.innerHTML = '';
  actionIconsElement.innerHTML = '\n    <a class="link-icon" href="https://luc.id" target="_blank" label="Lucid">\n      <img src="/assets/images/lucid-large.png" height="24">\n    </a>\n  ';
};
var setWWOZToSpotifyCard = function setWWOZToSpotifyCard() {
  var titleElement = document.querySelector('.mdc-card__title');
  var subtitleElement = document.querySelector('.mdc-card__subtitle');
  var secondaryElement = document.querySelector('.mdc-card__secondary');
  var actionIconsElement = document.querySelector('.mdc-card__action-icons');

  titleElement.innerHTML = 'WWOZ-to-Spotify';
  subtitleElement.innerHTML = ' ';
  secondaryElement.innerHTML = 'An AWS Lambda function written in Clojure that reads WWOZ\'s RSS feed then adds each song to a Spotify playlist';
  actionIconsElement.innerHTML = '\n    <a class="link-icon" href="https://github.com/benwiz/wwoz_to_spotify/" target="_blank" label="GitHub - WWOZ-to-Spotify">\n      <img src="/assets/images/mark-github.svg" height="24">\n    </a>\n    <a class="link-icon" href="https://open.spotify.com/user/bwisialowski/playlist/3vjFwtIxnPkNXk0XWTj0wy?si=98jhghgARwCK3FnRX3rcNQ" target="_blank" label="Spotify">\n      <img src="/assets/images/spotify.svg" height="24">\n    </a>\n  ';
  // TODO: Link to spotify playlist.
};
var setLowpolyCard = function setLowpolyCard() {
  var titleElement = document.querySelector('.mdc-card__title');
  var subtitleElement = document.querySelector('.mdc-card__subtitle');
  var secondaryElement = document.querySelector('.mdc-card__secondary');
  var actionIconsElement = document.querySelector('.mdc-card__action-icons');

  titleElement.innerHTML = 'Lowpoly';
  subtitleElement.innerHTML = ' ';
  secondaryElement.innerHTML = 'A collection of AWS Lambda functions written in Clojure and Python that turn an image into a lowpoly version made of triangles.';
  actionIconsElement.innerHTML = '\n    <a class="link-icon" href="https://github.com/benwiz/lowpoly/" target="_blank" label="GitHub - Lowpoly">\n      <img src="/assets/images/mark-github.svg" height="24">\n    </a>\n    <a class="link-icon" href="http://benwiz.io/lowpoly/" target="_blank" label="Lowpoly">\n      <img src="/assets/images/lowpoly.png" height="24">\n    </a>\n  ';
};
var setSquiggleCard = function setSquiggleCard() {
  var titleElement = document.querySelector('.mdc-card__title');
  var subtitleElement = document.querySelector('.mdc-card__subtitle');
  var secondaryElement = document.querySelector('.mdc-card__secondary');
  var actionIconsElement = document.querySelector('.mdc-card__action-icons');

  titleElement.innerHTML = 'Squiggle';
  subtitleElement.innerHTML = ' ';
  secondaryElement.innerHTML = 'A ClojureScript website that uses Quil, a Processing wrapper, to for several small drawings and animations.';
  actionIconsElement.innerHTML = '\n    <a class="link-icon" href="https://github.com/benwiz/squiggle/" target="_blank" label="GitHub - Squiggle">\n      <img src="/assets/images/mark-github.svg" height="24">\n    </a>\n    <a class="link-icon" href="http://benwiz.io/squiggle/" target="_blank" label="Squiggle">\n      <img src="/assets/images/squiggle.png" height="24">\n    </a>\n  ';
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