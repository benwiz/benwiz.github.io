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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @template A
 */
var MDCFoundation = function () {
  _createClass(MDCFoundation, null, [{
    key: "cssClasses",

    /** @return enum{cssClasses} */
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    }

    /** @return enum{strings} */

  }, {
    key: "strings",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    }

    /** @return enum{numbers} */

  }, {
    key: "numbers",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    }

    /** @return {!Object} */

  }, {
    key: "defaultAdapter",
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    }

    /**
     * @param {A=} adapter
     */

  }]);

  function MDCFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCFoundation);

    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  _createClass(MDCFoundation, [{
    key: "init",
    value: function init() {
      // Subclasses should override this method to perform initialization routines (registering events, etc.)
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    }
  }]);

  return MDCFoundation;
}();

exports.default = MDCFoundation;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * in the Software without restriction, including without limitation the rights
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @template F
 */
var MDCComponent = function () {
  _createClass(MDCComponent, null, [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCComponent}
     */
    value: function attachTo(root) {
      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
      // returns an instantiated component with its root set to that element. Also note that in the cases of
      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
      // from getDefaultFoundation().
      return new MDCComponent(root, new _foundation2.default());
    }

    /**
     * @param {!Element} root
     * @param {F=} foundation
     * @param {...?} args
     */

  }]);

  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    /** @protected {!Element} */
    this.root_ = root;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  _createClass(MDCComponent, [{
    key: 'initialize',
    value: function initialize() /* ...args */{}
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.


    /**
     * @return {!F} foundation
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      // Subclasses must override this method to return a properly configured foundation class for the
      // component.
      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      // Subclasses should override this method if they need to perform work to synchronize with a host DOM
      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // Subclasses may implement this method to release any resources / deregister any listeners they have
      // attached. An example of this might be deregistering a resize event from the window object.
      this.foundation_.destroy();
    }

    /**
     * Wrapper method to add an event listener to the component's root element. This is most useful when
     * listening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'listen',
    value: function listen(evtType, handler) {
      this.root_.addEventListener(evtType, handler);
    }

    /**
     * Wrapper method to remove an event listener to the component's root element. This is most useful when
     * unlistening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'unlisten',
    value: function unlisten(evtType, handler) {
      this.root_.removeEventListener(evtType, handler);
    }

    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type,
     * with the given data.
     * @param {string} evtType
     * @param {!Object} evtData
     * @param {boolean=} shouldBubble
     */

  }, {
    key: 'emit',
    value: function emit(evtType, evtData) {
      var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var evt = void 0;
      if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, {
          detail: evtData,
          bubbles: shouldBubble
        });
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
      }

      this.root_.dispatchEvent(evt);
    }
  }]);

  return MDCComponent;
}();

exports.default = MDCComponent;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var cssClasses = {
  ACTIVE: 'mdc-slider--active',
  DISABLED: 'mdc-slider--disabled',
  DISCRETE: 'mdc-slider--discrete',
  FOCUS: 'mdc-slider--focus',
  IN_TRANSIT: 'mdc-slider--in-transit',
  IS_DISCRETE: 'mdc-slider--discrete',
  HAS_TRACK_MARKER: 'mdc-slider--display-markers'
};

/** @enum {string} */
var strings = {
  TRACK_SELECTOR: '.mdc-slider__track',
  TRACK_MARKER_CONTAINER_SELECTOR: '.mdc-slider__track-marker-container',
  LAST_TRACK_MARKER_SELECTOR: '.mdc-slider__track-marker:last-child',
  THUMB_CONTAINER_SELECTOR: '.mdc-slider__thumb-container',
  PIN_VALUE_MARKER_SELECTOR: '.mdc-slider__pin-value-marker',
  ARIA_VALUEMIN: 'aria-valuemin',
  ARIA_VALUEMAX: 'aria-valuemax',
  ARIA_VALUENOW: 'aria-valuenow',
  ARIA_DISABLED: 'aria-disabled',
  STEP_DATA_ATTR: 'data-step',
  CHANGE_EVENT: 'MDCSlider:change',
  INPUT_EVENT: 'MDCSlider:input'
};

/** @enum {number} */
var numbers = {
  PAGE_FACTOR: 4
};

exports.cssClasses = cssClasses;
exports.strings = strings;
exports.numbers = numbers;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint-disable no-unused-vars */

/**
 * Adapter for MDC Slider.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Slider into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCSliderAdapter = function () {
  function MDCSliderAdapter() {
    _classCallCheck(this, MDCSliderAdapter);
  }

  _createClass(MDCSliderAdapter, [{
    key: "hasClass",

    /**
     * Returns true if className exists for the slider Element
     * @param {string} className
     * @return {boolean}
     */
    value: function hasClass(className) {}

    /**
     * Adds a class to the slider Element
     * @param {string} className
     */

  }, {
    key: "addClass",
    value: function addClass(className) {}

    /**
     * Removes a class from the slider Element
     * @param {string} className
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * Returns a string if attribute name exists on the slider Element,
     * otherwise returns null
     * @param {string} name
     * @return {?string}
     */

  }, {
    key: "getAttribute",
    value: function getAttribute(name) {}

    /**
     * Sets attribute name on slider Element to value
     * @param {string} name
     * @param {string} value
     */

  }, {
    key: "setAttribute",
    value: function setAttribute(name, value) {}

    /**
     * Removes attribute name from slider Element
     * @param {string} name
     */

  }, {
    key: "removeAttribute",
    value: function removeAttribute(name) {}

    /**
     * Returns the bounding client rect for the slider Element
     * @return {?ClientRect}
     */

  }, {
    key: "computeBoundingRect",
    value: function computeBoundingRect() {}

    /**
     * Returns the tab index of the slider Element
     * @return {number}
     */

  }, {
    key: "getTabIndex",
    value: function getTabIndex() {}

    /**
     * Registers an event handler on the root element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(type, handler) {}

    /**
     * Deregisters an event handler on the root element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(type, handler) {}

    /**
     * Registers an event handler on the thumb container element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerThumbContainerInteractionHandler",
    value: function registerThumbContainerInteractionHandler(type, handler) {}

    /**
     * Deregisters an event handler on the thumb container element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterThumbContainerInteractionHandler",
    value: function deregisterThumbContainerInteractionHandler(type, handler) {}

    /**
     * Registers an event handler on the body for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerBodyInteractionHandler",
    value: function registerBodyInteractionHandler(type, handler) {}

    /**
     * Deregisters an event handler on the body for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterBodyInteractionHandler",
    value: function deregisterBodyInteractionHandler(type, handler) {}

    /**
     * Registers an event handler for the window resize event
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerResizeHandler",
    value: function registerResizeHandler(handler) {}

    /**
     * Deregisters an event handler for the window resize event
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterResizeHandler",
    value: function deregisterResizeHandler(handler) {}

    /**
     * Emits a custom event MDCSlider:input from the root
     */

  }, {
    key: "notifyInput",
    value: function notifyInput() {}

    /**
     * Emits a custom event MDCSlider:change from the root
     */

  }, {
    key: "notifyChange",
    value: function notifyChange() {}

    /**
     * Sets a style property of the thumb container element to the passed value
     * @param {string} propertyName
     * @param {string} value
     */

  }, {
    key: "setThumbContainerStyleProperty",
    value: function setThumbContainerStyleProperty(propertyName, value) {}

    /**
     * Sets a style property of the track element to the passed value
     * @param {string} propertyName
     * @param {string} value
     */

  }, {
    key: "setTrackStyleProperty",
    value: function setTrackStyleProperty(propertyName, value) {}

    /**
     * Sets the inner text of the pin marker to the passed value
     * @param {number} value
     */

  }, {
    key: "setMarkerValue",
    value: function setMarkerValue(value) {}

    /**
     * Appends the passed number of track markers to the track mark container element
     * @param {number} numMarkers
     */

  }, {
    key: "appendTrackMarkers",
    value: function appendTrackMarkers(numMarkers) {}

    /**
     * Removes all track markers fromt he track mark container element
     */

  }, {
    key: "removeTrackMarkers",
    value: function removeTrackMarkers() {}

    /**
     * Sets a style property of the last track marker to the passed value
     * @param {string} propertyName
     * @param {string} value
     */

  }, {
    key: "setLastTrackMarkersStyleProperty",
    value: function setLastTrackMarkersStyleProperty(propertyName, value) {}

    /**
     * Returns true if the root element is RTL, otherwise false
     * @return {boolean}
     */

  }, {
    key: "isRTL",
    value: function isRTL() {}
  }]);

  return MDCSliderAdapter;
}();

exports.default = MDCSliderAdapter;

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(12);

__webpack_require__(15);

// Config as a global
var CONFIG = {
  numPoints: 55,
  numEdges: 2, // K-nearest neighbors. Use "0" for no lines. Use "Infinity" for all.
  speedMultiplier: 1,
  rMin: 8,
  rMax: 16,
  lineStrokeWeight: 1,
  color: {
    r: 30,
    g: 144,
    b: 255,
    a: 16
  },
  cursorRadius: 30,
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
};

//
// Utility functions
//

var getRandomFloat = function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
};

var getRandomInt = function getRandomInt(min, max) {
  return Math.floor(getRandomFloat(min, max));
};

var degToRadians = function degToRadians(angle) {
  return angle * (Math.PI / 180);
};

var radiansToDeg = function radiansToDeg(angle) {
  return angle * (180 / Math.PI);
};

var distance = function distance(point1, point2) {
  // sqrt( (x1 - x2)^2 + (y1 - y2)^2 )
  var x1 = point1[0];
  var y1 = point1[1];
  var x2 = point2[0];
  var y2 = point2[1];
  var dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  return dist;
};

var lineContainsPoint = function lineContainsPoint(line, point) {
  for (var i = 0; i < line.length; i++) {
    var dist = distance(point, line[i]);
    if (dist === 0) {
      return i;
    }
  }

  return -1;
};

//
// Creation, updating, and drawing functions
//

var createPoint = function createPoint() {
  var speedMultiplier = CONFIG.speedMultiplier,
      rMin = CONFIG.rMin,
      rMax = CONFIG.rMax;


  var point = {
    // Init location. Consider rMax to ensure that no points are generated partially offscreen.
    x: getRandomFloat(20, windowWidth - 20), // windowWidth / 2,
    y: getRandomFloat(20, windowHeight - 20), // windowHeight / 2,
    // Init velocity
    velocity: {
      angle: getRandomInt(0, 360),
      speed: getRandomFloat(0.2, 1) * speedMultiplier,
      runAwayMultiplier: 1
    },
    // Radius of point
    r: getRandomFloat(rMin, rMax),
    // Set color. NOTE: consider switching to HSB rather than using Alpha as a value controller
    color: {
      r: CONFIG.color.r,
      g: CONFIG.color.g,
      b: CONFIG.color.b,
      a: CONFIG.color.a
    }
  };
  return point;
};

var createPoints = function createPoints(n) {
  var points = [];
  for (var i = 0; i < n; i++) {
    var point = createPoint();
    points.push(point);
  }
  return points;
};

var drawPoint = function drawPoint(point) {
  if (point.r > 0) {
    strokeWeight(1);
    stroke(point.color.r, point.color.g, point.color.b, point.color.a);
    fill(point.color.r, point.color.g, point.color.b, point.color.a / 2);
    ellipse(point.x, point.y, 2 * point.r); // Set diameter
  }
};

var updatePoint = function updatePoint(point, cursorRadius) {
  // Update location
  point.x += point.velocity.speed * Math.cos(degToRadians(point.velocity.angle)) * point.velocity.runAwayMultiplier;
  point.y += point.velocity.speed * Math.sin(degToRadians(point.velocity.angle)) * point.velocity.runAwayMultiplier;

  // Constrain the point to within the borders
  if (point.x < 0 + point.r) point.x = 0 + point.r;
  if (point.x > windowWidth - point.r) point.x = windowWidth - point.r;
  if (point.y < 0 + point.r) point.y = 0 + point.r;
  if (point.y > windowHeight - point.r) point.y = windowHeight - point.r;

  // Ensure that the angle hasn't gone into a crazy range, even though that shouldn't cause an issue
  if (point.velocity.angle >= 360) {
    point.velocity.angle -= 360;
  }

  // Update angle if hit wall. Account for radius.
  if (point.x <= 0 + point.r || windowWidth - point.r <= point.x) {
    point.velocity.angle = 180 - point.velocity.angle;
  } else if (point.y <= 0 + point.r || windowHeight - point.r <= point.y) {
    point.velocity.angle = 0 - point.velocity.angle;
  }

  // Make point run away from mouse
  var mousePos = [mouseX, mouseY];
  var pointPos = [point.x, point.y];
  var dist = distance(mousePos, pointPos);
  if (dist < cursorRadius) {
    // Calculate angle to mousePos from point. Then reverse it and set as new angle.
    var a = mouseX - point.x;
    var o = mouseY - point.y;
    var h = dist;

    // Determine angle based on quadrant. I'm sure there is a generic solution out there, but this works.
    var angle = void 0;
    if (a > 0 && o > 0) {
      angle = radiansToDeg(Math.asin(o / h)) + 180;
    } else if (a > 0 && o <= 0) {
      angle = radiansToDeg(Math.acos(-a / h));
    } else if (a <= 0 && o > 0) {
      angle = radiansToDeg(Math.acos(a / h)) + 180;
    } else {
      // if (a <= 0 && o <= 0) {
      angle = radiansToDeg(Math.asin(-o / h));
    }

    point.velocity.angle = angle;

    // Increment the runAwayMultiplier (look into using inverse square of distance)
    point.velocity.runAwayMultiplier += 0.5;
  } else {
    if (point.velocity.runAwayMultiplier > 1) {
      point.velocity.runAwayMultiplier *= 0.95;
    }
    if (point.velocity.runAwayMultiplier < 1) {
      point.velocity.runAwayMultiplier = 1;
    }
  }
};

var createLines = function createLines(k, points) {
  var linesForPoints = [];

  // Create all pairs of points
  for (var i = 0; i < points.length; i++) {
    var linesForPoint = [];
    for (var j = 0; j < points.length; j++) {
      if (i === j) continue;
      var point1 = points[i];
      var point2 = points[j];
      var _line = [[point1.x, point1.y], [point2.x, point2.y]];
      _line.sort(function (a, b) {
        return a[0] - b[0];
      });
      linesForPoint.push(_line);
    }
    linesForPoints.push(linesForPoint);
  }

  // Store the flattened list of lines
  var lines = [];

  // Sort points using distance function
  for (var _i = 0; _i < linesForPoints.length; _i++) {
    // Sort the lines for each point
    var _linesForPoint = linesForPoints[_i];
    _linesForPoint.sort(function (line1, line2) {
      var dist1 = distance(line1[0], line1[1]);
      var dist2 = distance(line2[0], line2[1]);
      return dist1 - dist2;
    });

    // Keep first k elements
    _linesForPoint.splice(k);

    // Store in flattened list
    lines = lines.concat(_linesForPoint);
  }

  // Dedupe
  for (var _i2 = 0; _i2 < lines.length; _i2++) {
    var baseLine = lines[_i2];
    for (var _j = 0; _j < lines.length; _j++) {
      if (_i2 === _j) continue;
      var testLine = lines[_j];
      if (baseLine[0][0] === testLine[0][0] && baseLine[0][1] === testLine[0][1] && baseLine[1][0] === testLine[1][0] && baseLine[1][1] === testLine[1][1]) {
        lines.splice(_j, 1);
      }
    }
  }

  return lines;
};

var drawLine = function drawLine(l) {
  strokeWeight(CONFIG.lineStrokeWeight);
  stroke(CONFIG.color.r, CONFIG.color.g, CONFIG.color.b, CONFIG.color.a);
  line(l[0][0], l[0][1], l[1][0], l[1][1]);
};

var findTriangles = function findTriangles(lines) {
  // High level: For each line, for each point on the line, find the points connections. For every
  // shared connection point we have a triangle using that shared point as the third vertex.

  var triangles = [];

  for (var i = 0; i < lines.length; i++) {
    var baseLine = lines[i];
    var basePoint1 = baseLine[0];
    var basePoint2 = baseLine[1];

    var matches1 = [];
    var matches2 = [];

    // Find connections
    for (var j = 0; j < lines.length; j++) {
      if (i === j) continue;
      var testLine = lines[j];

      // Find connections for first base point
      var index = lineContainsPoint(testLine, basePoint1);
      if (index > -1) {
        var match = void 0;
        if (index === 0) {
          match = testLine[1];
        } else {
          match = testLine[0];
        }
        matches1.push(match);
      }

      // Find connections for second base point
      index = lineContainsPoint(testLine, basePoint2);
      if (index > -1) {
        var _match = void 0;
        if (index === 0) {
          _match = testLine[1];
        } else {
          _match = testLine[0];
        }
        matches2.push(_match);
      }
    }

    // Get matches
    var matches = [];
    for (var k = 0; k < matches1.length; k++) {
      for (var l = 0; l < matches2.length; l++) {
        var dist = distance(matches1[k], matches2[l]);
        if (dist === 0) {
          matches.push(matches1[k]);
          break;
        }
      }
    }

    // Create the triangles
    for (var _k = 0; _k < matches.length; _k++) {
      var triangle = [basePoint1, basePoint2, matches[_k]];
      triangles.push(triangle);
    }
  }

  return triangles;
};

var drawPolygons = function drawPolygons(polygons) {
  strokeWeight(0);
  fill(CONFIG.color.r, CONFIG.color.g, CONFIG.color.b, CONFIG.color.a / 2);

  for (var i = 0; i < polygons.length; i++) {
    var polygon = polygons[i];

    beginShape();
    for (var j = 0; j < polygon.length; j++) {
      var point = polygon[j];
      vertex(point[0], point[1]);
    }
    endShape(CLOSE);
  }
};

var createOrKillPoints = function createOrKillPoints(points, numPoints) {
  var diff = points.length - numPoints;
  // If the difference is positive, kill points. If negative, create points.
  if (diff > 0) {
    while (diff > 0) {
      var randomIndex = Math.floor(Math.random() * points.length);
      points.splice(randomIndex, 1);
      diff -= 1;
    }
  } else if (diff < 0) {
    var newPoints = createPoints(-1 * diff);
    points = points.concat(newPoints);
  }

  return points;
};

var drawCursorBubble = function drawCursorBubble(isMobile) {
  if (isMobile) {
    return;
  }

  strokeWeight(1);
  fill(CONFIG.color.r, CONFIG.color.b, CONFIG.color.g, CONFIG.color.a);
  ellipse(mouseX, mouseY, CONFIG.cursorRadius);
};

//
//
// Main functions below. The above code should really be in its own module.
// Only in setup() and draw() will I ever touch global variables.
//
//
var POINTS = [];

window.setup = function () {
  createCanvas(windowWidth, windowHeight);
  background(255);

  POINTS = createPoints(CONFIG.numPoints);
};

window.draw = function () {
  background(255);

  // Draw bubble around cursor
  drawCursorBubble(CONFIG.isMobile);

  // Create or kill points until the number matches the CONFIG.numPoints
  POINTS = createOrKillPoints(POINTS.slice(), CONFIG.numPoints);

  // Draw and update
  for (var i = 0; i < POINTS.length; i++) {
    var point = POINTS[i];
    drawPoint(point);
    updatePoint(point, CONFIG.cursorRadius);
  }

  // Calculate and draw lines
  var lines = createLines(CONFIG.numEdges, POINTS);
  for (var _i3 = 0; _i3 < lines.length; _i3++) {
    var l = lines[_i3];
    drawLine(l);
  }

  // Find and draw closed polygons
  var triangles = findTriangles(lines);
  drawPolygons(triangles);
};

//
// JS Event Listeners
//
var containerDiv = document.querySelector('#container');
var numPointsSlider = new _index.MDCSlider(container.querySelector('#num-points'));
numPointsSlider.listen('MDCSlider:change', function () {
  CONFIG.numPoints = numPointsSlider.value;
});
var numEdgesSlider = new _index.MDCSlider(container.querySelector('#num-edges'));
numEdgesSlider.listen('MDCSlider:change', function () {
  CONFIG.numEdges = numEdgesSlider.value;
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCSlider = exports.MDCSliderFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _constants = __webpack_require__(4);

var _adapter = __webpack_require__(5);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(13);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends MDCComponent<!MDCSliderFoundation>
 */
var MDCSlider = function (_MDCComponent) {
  _inherits(MDCSlider, _MDCComponent);

  _createClass(MDCSlider, null, [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCSlider(root);
    }
  }]);

  function MDCSlider() {
    var _ref;

    _classCallCheck(this, MDCSlider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {?Element} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCSlider.__proto__ || Object.getPrototypeOf(MDCSlider)).call.apply(_ref, [this].concat(args)));

    _this.thumbContainer_;
    /** @type {?Element} */
    _this.track_;
    /** @type {?Element} */
    _this.pinValueMarker_;
    /** @type {?Element} */
    _this.trackMarkerContainer_;
    return _this;
  }

  /** @return {number} */


  _createClass(MDCSlider, [{
    key: 'initialize',
    value: function initialize() {
      this.thumbContainer_ = this.root_.querySelector(_constants.strings.THUMB_CONTAINER_SELECTOR);
      this.track_ = this.root_.querySelector(_constants.strings.TRACK_SELECTOR);
      this.pinValueMarker_ = this.root_.querySelector(_constants.strings.PIN_VALUE_MARKER_SELECTOR);
      this.trackMarkerContainer_ = this.root_.querySelector(_constants.strings.TRACK_MARKER_CONTAINER_SELECTOR);
    }

    /**
     * @return {!MDCSliderFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default(
      /** @type {!MDCSliderAdapter} */{
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        getAttribute: function getAttribute(name) {
          return _this2.root_.getAttribute(name);
        },
        setAttribute: function setAttribute(name, value) {
          return _this2.root_.setAttribute(name, value);
        },
        removeAttribute: function removeAttribute(name) {
          return _this2.root_.removeAttribute(name);
        },
        computeBoundingRect: function computeBoundingRect() {
          return _this2.root_.getBoundingClientRect();
        },
        getTabIndex: function getTabIndex() {
          return _this2.root_.tabIndex;
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          _this2.root_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          _this2.root_.removeEventListener(type, handler);
        },
        registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler(type, handler) {
          _this2.thumbContainer_.addEventListener(type, handler);
        },
        deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler(type, handler) {
          _this2.thumbContainer_.removeEventListener(type, handler);
        },
        registerBodyInteractionHandler: function registerBodyInteractionHandler(type, handler) {
          document.body.addEventListener(type, handler);
        },
        deregisterBodyInteractionHandler: function deregisterBodyInteractionHandler(type, handler) {
          document.body.removeEventListener(type, handler);
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          window.removeEventListener('resize', handler);
        },
        notifyInput: function notifyInput() {
          _this2.emit(_constants.strings.INPUT_EVENT, _this2);
        },
        notifyChange: function notifyChange() {
          _this2.emit(_constants.strings.CHANGE_EVENT, _this2);
        },
        setThumbContainerStyleProperty: function setThumbContainerStyleProperty(propertyName, value) {
          _this2.thumbContainer_.style.setProperty(propertyName, value);
        },
        setTrackStyleProperty: function setTrackStyleProperty(propertyName, value) {
          _this2.track_.style.setProperty(propertyName, value);
        },
        setMarkerValue: function setMarkerValue(value) {
          _this2.pinValueMarker_.innerText = value;
        },
        appendTrackMarkers: function appendTrackMarkers(numMarkers) {
          var frag = document.createDocumentFragment();
          for (var i = 0; i < numMarkers; i++) {
            var marker = document.createElement('div');
            marker.classList.add('mdc-slider__track-marker');
            frag.appendChild(marker);
          }
          _this2.trackMarkerContainer_.appendChild(frag);
        },
        removeTrackMarkers: function removeTrackMarkers() {
          while (_this2.trackMarkerContainer_.firstChild) {
            _this2.trackMarkerContainer_.removeChild(_this2.trackMarkerContainer_.firstChild);
          }
        },
        setLastTrackMarkersStyleProperty: function setLastTrackMarkersStyleProperty(propertyName, value) {
          // We remove and append new nodes, thus, the last track marker must be dynamically found.
          var lastTrackMarker = _this2.root_.querySelector(_constants.strings.LAST_TRACK_MARKER_SELECTOR);
          lastTrackMarker.style.setProperty(propertyName, value);
        },
        isRTL: function isRTL() {
          return getComputedStyle(_this2.root_).direction === 'rtl';
        }
      });
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      var origValueNow = parseFloat(this.root_.getAttribute(_constants.strings.ARIA_VALUENOW));
      var min = parseFloat(this.root_.getAttribute(_constants.strings.ARIA_VALUEMIN)) || this.min;
      var max = parseFloat(this.root_.getAttribute(_constants.strings.ARIA_VALUEMAX)) || this.max;

      // min and max need to be set in the right order to avoid throwing an error
      // when the new min is greater than the default max.
      if (min >= this.max) {
        this.max = max;
        this.min = min;
      } else {
        this.min = min;
        this.max = max;
      }

      this.step = parseFloat(this.root_.getAttribute(_constants.strings.STEP_DATA_ATTR)) || this.step;
      this.value = origValueNow || this.value;
      this.disabled = this.root_.hasAttribute(_constants.strings.ARIA_DISABLED) && this.root_.getAttribute(_constants.strings.ARIA_DISABLED) !== 'false';
      this.foundation_.setupTrackMarker();
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.foundation_.layout();
    }

    /** @param {number=} amount */

  }, {
    key: 'stepUp',
    value: function stepUp() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.step || 1;

      this.value += amount;
    }

    /** @param {number=} amount */

  }, {
    key: 'stepDown',
    value: function stepDown() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.step || 1;

      this.value -= amount;
    }
  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }

    /** @param {number} value */
    ,
    set: function set(value) {
      this.foundation_.setValue(value);
    }

    /** @return {number} */

  }, {
    key: 'min',
    get: function get() {
      return this.foundation_.getMin();
    }

    /** @param {number} min */
    ,
    set: function set(min) {
      this.foundation_.setMin(min);
    }

    /** @return {number} */

  }, {
    key: 'max',
    get: function get() {
      return this.foundation_.getMax();
    }

    /** @param {number} max */
    ,
    set: function set(max) {
      this.foundation_.setMax(max);
    }

    /** @return {number} */

  }, {
    key: 'step',
    get: function get() {
      return this.foundation_.getStep();
    }

    /** @param {number} step */
    ,
    set: function set(step) {
      this.foundation_.setStep(step);
    }

    /** @return {boolean} */

  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    }

    /** @param {boolean} disabled */
    ,
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }]);

  return MDCSlider;
}(_component2.default);

exports.MDCSliderFoundation = _foundation2.default;
exports.MDCSlider = MDCSlider;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(4);

var _adapter = __webpack_require__(5);

var _adapter2 = _interopRequireDefault(_adapter);

var _index = __webpack_require__(14);

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/** @enum {string} */
var KEY_IDS = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  HOME: 'Home',
  END: 'End',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown'
};

/** @enum {string} */
var MOVE_EVENT_MAP = {
  'mousedown': 'mousemove',
  'touchstart': 'touchmove',
  'pointerdown': 'pointermove'
};

var DOWN_EVENTS = ['mousedown', 'pointerdown', 'touchstart'];
var UP_EVENTS = ['mouseup', 'pointerup', 'touchend'];

/**
 * @extends {MDCFoundation<!MDCSliderAdapter>}
 */

var MDCSliderFoundation = function (_MDCFoundation) {
  _inherits(MDCSliderFoundation, _MDCFoundation);

  _createClass(MDCSliderFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {cssClasses} */
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum {strings} */

  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }

    /** @return enum {numbers} */

  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }

    /** @return {!MDCSliderAdapter} */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCSliderAdapter} */{
          hasClass: function hasClass() {
            return (/* className: string */ /* boolean */false
            );
          },
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          getAttribute: function getAttribute() {
            return (/* name: string */ /* string|null */null
            );
          },
          setAttribute: function setAttribute() /* name: string, value: string */{},
          removeAttribute: function removeAttribute() /* name: string */{},
          computeBoundingRect: function computeBoundingRect() {
            return (/* ClientRect */{
                top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0
              }
            );
          },
          getTabIndex: function getTabIndex() {
            return (/* number */0
            );
          },
          registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
          deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
          registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler() /* type: string, handler: EventListener */{},
          deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler() /* type: string, handler: EventListener */{},
          registerBodyInteractionHandler: function registerBodyInteractionHandler() /* type: string, handler: EventListener */{},
          deregisterBodyInteractionHandler: function deregisterBodyInteractionHandler() /* type: string, handler: EventListener */{},
          registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
          deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
          notifyInput: function notifyInput() {},
          notifyChange: function notifyChange() {},
          setThumbContainerStyleProperty: function setThumbContainerStyleProperty() /* propertyName: string, value: string */{},
          setTrackStyleProperty: function setTrackStyleProperty() /* propertyName: string, value: string */{},
          setMarkerValue: function setMarkerValue() /* value: number */{},
          appendTrackMarkers: function appendTrackMarkers() /* numMarkers: number */{},
          removeTrackMarkers: function removeTrackMarkers() {},
          setLastTrackMarkersStyleProperty: function setLastTrackMarkersStyleProperty() /* propertyName: string, value: string */{},
          isRTL: function isRTL() {
            return (/* boolean */false
            );
          }
        }
      );
    }

    /**
     * Creates a new instance of MDCSliderFoundation
     * @param {?MDCSliderAdapter} adapter
     */

  }]);

  function MDCSliderFoundation(adapter) {
    _classCallCheck(this, MDCSliderFoundation);

    /** @private {?ClientRect} */
    var _this = _possibleConstructorReturn(this, (MDCSliderFoundation.__proto__ || Object.getPrototypeOf(MDCSliderFoundation)).call(this, Object.assign(MDCSliderFoundation.defaultAdapter, adapter)));

    _this.rect_ = null;
    // We set this to NaN since we want it to be a number, but we can't use '0' or '-1'
    // because those could be valid tabindices set by the client code.
    _this.savedTabIndex_ = NaN;
    _this.active_ = false;
    _this.inTransit_ = false;
    _this.isDiscrete_ = false;
    _this.hasTrackMarker_ = false;
    _this.handlingThumbTargetEvt_ = false;
    _this.min_ = 0;
    _this.max_ = 100;
    _this.step_ = 0;
    _this.value_ = 0;
    _this.disabled_ = false;
    _this.preventFocusState_ = false;
    _this.updateUIFrame_ = 0;
    _this.thumbContainerPointerHandler_ = function () {
      _this.handlingThumbTargetEvt_ = true;
    };
    _this.interactionStartHandler_ = function (evt) {
      return _this.handleDown_(evt);
    };
    _this.keydownHandler_ = function (evt) {
      return _this.handleKeydown_(evt);
    };
    _this.focusHandler_ = function () {
      return _this.handleFocus_();
    };
    _this.blurHandler_ = function () {
      return _this.handleBlur_();
    };
    _this.resizeHandler_ = function () {
      return _this.layout();
    };
    return _this;
  }

  _createClass(MDCSliderFoundation, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      this.isDiscrete_ = this.adapter_.hasClass(_constants.cssClasses.IS_DISCRETE);
      this.hasTrackMarker_ = this.adapter_.hasClass(_constants.cssClasses.HAS_TRACK_MARKER);
      DOWN_EVENTS.forEach(function (evtName) {
        return _this2.adapter_.registerInteractionHandler(evtName, _this2.interactionStartHandler_);
      });
      this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
      this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
      this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
      DOWN_EVENTS.forEach(function (evtName) {
        _this2.adapter_.registerThumbContainerInteractionHandler(evtName, _this2.thumbContainerPointerHandler_);
      });
      this.adapter_.registerResizeHandler(this.resizeHandler_);
      this.layout();
      // At last step, provide a reasonable default value to discrete slider
      if (this.isDiscrete_ && this.getStep() == 0) {
        this.step_ = 1;
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      DOWN_EVENTS.forEach(function (evtName) {
        _this3.adapter_.deregisterInteractionHandler(evtName, _this3.interactionStartHandler_);
      });
      this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
      this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
      this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
      DOWN_EVENTS.forEach(function (evtName) {
        _this3.adapter_.deregisterThumbContainerInteractionHandler(evtName, _this3.thumbContainerPointerHandler_);
      });
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'setupTrackMarker',
    value: function setupTrackMarker() {
      if (this.isDiscrete_ && this.hasTrackMarker_ && this.getStep() != 0) {
        var min = this.getMin();
        var max = this.getMax();
        var step = this.getStep();
        var numMarkers = (max - min) / step;

        // In case distance between max & min is indivisible to step,
        // we place the secondary to last marker proportionally at where thumb
        // could reach and place the last marker at max value
        var indivisible = Math.ceil(numMarkers) !== numMarkers;
        if (indivisible) {
          numMarkers = Math.ceil(numMarkers);
        }

        this.adapter_.removeTrackMarkers();
        this.adapter_.appendTrackMarkers(numMarkers);

        if (indivisible) {
          var lastStepRatio = (max - numMarkers * step) / step + 1;
          var flex = (0, _index.getCorrectPropertyName)(window, 'flex');
          this.adapter_.setLastTrackMarkersStyleProperty(flex, String(lastStepRatio));
        }
      }
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.rect_ = this.adapter_.computeBoundingRect();
      this.updateUIForCurrentValue_();
    }

    /** @return {number} */

  }, {
    key: 'getValue',
    value: function getValue() {
      return this.value_;
    }

    /** @param {number} value */

  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.setValue_(value, false);
    }

    /** @return {number} */

  }, {
    key: 'getMax',
    value: function getMax() {
      return this.max_;
    }

    /** @param {number} max */

  }, {
    key: 'setMax',
    value: function setMax(max) {
      if (max < this.min_) {
        throw new Error('Cannot set max to be less than the slider\'s minimum value');
      }
      this.max_ = max;
      this.setValue_(this.value_, false, true);
      this.adapter_.setAttribute(_constants.strings.ARIA_VALUEMAX, String(this.max_));
      this.setupTrackMarker();
    }

    /** @return {number} */

  }, {
    key: 'getMin',
    value: function getMin() {
      return this.min_;
    }

    /** @param {number} min */

  }, {
    key: 'setMin',
    value: function setMin(min) {
      if (min > this.max_) {
        throw new Error('Cannot set min to be greater than the slider\'s maximum value');
      }
      this.min_ = min;
      this.setValue_(this.value_, false, true);
      this.adapter_.setAttribute(_constants.strings.ARIA_VALUEMIN, String(this.min_));
      this.setupTrackMarker();
    }

    /** @return {number} */

  }, {
    key: 'getStep',
    value: function getStep() {
      return this.step_;
    }

    /** @param {number} step */

  }, {
    key: 'setStep',
    value: function setStep(step) {
      if (step < 0) {
        throw new Error('Step cannot be set to a negative number');
      }
      if (this.isDiscrete_ && (typeof step !== 'number' || step < 1)) {
        step = 1;
      }
      this.step_ = step;
      this.setValue_(this.value_, false, true);
      this.setupTrackMarker();
    }

    /** @return {boolean} */

  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.disabled_;
    }

    /** @param {boolean} disabled */

  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      this.disabled_ = disabled;
      this.toggleClass_(_constants.cssClasses.DISABLED, this.disabled_);
      if (this.disabled_) {
        this.savedTabIndex_ = this.adapter_.getTabIndex();
        this.adapter_.setAttribute(_constants.strings.ARIA_DISABLED, 'true');
        this.adapter_.removeAttribute('tabindex');
      } else {
        this.adapter_.removeAttribute(_constants.strings.ARIA_DISABLED);
        if (!isNaN(this.savedTabIndex_)) {
          this.adapter_.setAttribute('tabindex', String(this.savedTabIndex_));
        }
      }
    }

    /**
     * Called when the user starts interacting with the slider
     * @param {!Event} evt
     * @private
     */

  }, {
    key: 'handleDown_',
    value: function handleDown_(evt) {
      var _this4 = this;

      if (this.disabled_) {
        return;
      }

      this.preventFocusState_ = true;
      this.setInTransit_(!this.handlingThumbTargetEvt_);
      this.handlingThumbTargetEvt_ = false;
      this.setActive_(true);

      var moveHandler = function moveHandler(evt) {
        _this4.handleMove_(evt);
      };

      // Note: upHandler is [de]registered on ALL potential pointer-related release event types, since some browsers
      // do not always fire these consistently in pairs.
      // (See https://github.com/material-components/material-components-web/issues/1192)
      var upHandler = function upHandler() {
        _this4.handleUp_();
        _this4.adapter_.deregisterBodyInteractionHandler(MOVE_EVENT_MAP[evt.type], moveHandler);
        UP_EVENTS.forEach(function (evtName) {
          return _this4.adapter_.deregisterBodyInteractionHandler(evtName, upHandler);
        });
      };

      this.adapter_.registerBodyInteractionHandler(MOVE_EVENT_MAP[evt.type], moveHandler);
      UP_EVENTS.forEach(function (evtName) {
        return _this4.adapter_.registerBodyInteractionHandler(evtName, upHandler);
      });
      this.setValueFromEvt_(evt);
    }

    /**
     * Called when the user moves the slider
     * @param {!Event} evt
     * @private
     */

  }, {
    key: 'handleMove_',
    value: function handleMove_(evt) {
      evt.preventDefault();
      this.setValueFromEvt_(evt);
    }

    /**
     * Called when the user's interaction with the slider ends
     * @private
     */

  }, {
    key: 'handleUp_',
    value: function handleUp_() {
      this.setActive_(false);
      this.adapter_.notifyChange();
    }

    /**
     * Returns the pageX of the event
     * @param {!Event} evt
     * @return {number}
     * @private
     */

  }, {
    key: 'getPageX_',
    value: function getPageX_(evt) {
      if (evt.targetTouches && evt.targetTouches.length > 0) {
        return evt.targetTouches[0].pageX;
      }
      return evt.pageX;
    }

    /**
     * Sets the slider value from an event
     * @param {!Event} evt
     * @private
     */

  }, {
    key: 'setValueFromEvt_',
    value: function setValueFromEvt_(evt) {
      var pageX = this.getPageX_(evt);
      var value = this.computeValueFromPageX_(pageX);
      this.setValue_(value, true);
    }

    /**
     * Computes the new value from the pageX position
     * @param {number} pageX
     * @return {number}
     */

  }, {
    key: 'computeValueFromPageX_',
    value: function computeValueFromPageX_(pageX) {
      var max = this.max_,
          min = this.min_;

      var xPos = pageX - this.rect_.left;
      var pctComplete = xPos / this.rect_.width;
      if (this.adapter_.isRTL()) {
        pctComplete = 1 - pctComplete;
      }
      // Fit the percentage complete between the range [min,max]
      // by remapping from [0, 1] to [min, min+(max-min)].
      return min + pctComplete * (max - min);
    }

    /**
     * Handles keydown events
     * @param {!Event} evt
     */

  }, {
    key: 'handleKeydown_',
    value: function handleKeydown_(evt) {
      var keyId = this.getKeyId_(evt);
      var value = this.getValueForKeyId_(keyId);
      if (isNaN(value)) {
        return;
      }

      // Prevent page from scrolling due to key presses that would normally scroll the page
      evt.preventDefault();
      this.adapter_.addClass(_constants.cssClasses.FOCUS);
      this.setValue_(value, true);
      this.adapter_.notifyChange();
    }

    /**
     * Returns the computed name of the event
     * @param {!Event} kbdEvt
     * @return {string}
     */

  }, {
    key: 'getKeyId_',
    value: function getKeyId_(kbdEvt) {
      if (kbdEvt.key === KEY_IDS.ARROW_LEFT || kbdEvt.keyCode === 37) {
        return KEY_IDS.ARROW_LEFT;
      }
      if (kbdEvt.key === KEY_IDS.ARROW_RIGHT || kbdEvt.keyCode === 39) {
        return KEY_IDS.ARROW_RIGHT;
      }
      if (kbdEvt.key === KEY_IDS.ARROW_UP || kbdEvt.keyCode === 38) {
        return KEY_IDS.ARROW_UP;
      }
      if (kbdEvt.key === KEY_IDS.ARROW_DOWN || kbdEvt.keyCode === 40) {
        return KEY_IDS.ARROW_DOWN;
      }
      if (kbdEvt.key === KEY_IDS.HOME || kbdEvt.keyCode === 36) {
        return KEY_IDS.HOME;
      }
      if (kbdEvt.key === KEY_IDS.END || kbdEvt.keyCode === 35) {
        return KEY_IDS.END;
      }
      if (kbdEvt.key === KEY_IDS.PAGE_UP || kbdEvt.keyCode === 33) {
        return KEY_IDS.PAGE_UP;
      }
      if (kbdEvt.key === KEY_IDS.PAGE_DOWN || kbdEvt.keyCode === 34) {
        return KEY_IDS.PAGE_DOWN;
      }

      return '';
    }

    /**
     * Computes the value given a keyboard key ID
     * @param {string} keyId
     * @return {number}
     */

  }, {
    key: 'getValueForKeyId_',
    value: function getValueForKeyId_(keyId) {
      var max = this.max_,
          min = this.min_,
          step = this.step_;

      var delta = step || (max - min) / 100;
      var valueNeedsToBeFlipped = this.adapter_.isRTL() && (keyId === KEY_IDS.ARROW_LEFT || keyId === KEY_IDS.ARROW_RIGHT);
      if (valueNeedsToBeFlipped) {
        delta = -delta;
      }

      switch (keyId) {
        case KEY_IDS.ARROW_LEFT:
        case KEY_IDS.ARROW_DOWN:
          return this.value_ - delta;
        case KEY_IDS.ARROW_RIGHT:
        case KEY_IDS.ARROW_UP:
          return this.value_ + delta;
        case KEY_IDS.HOME:
          return this.min_;
        case KEY_IDS.END:
          return this.max_;
        case KEY_IDS.PAGE_UP:
          return this.value_ + delta * _constants.numbers.PAGE_FACTOR;
        case KEY_IDS.PAGE_DOWN:
          return this.value_ - delta * _constants.numbers.PAGE_FACTOR;
        default:
          return NaN;
      }
    }
  }, {
    key: 'handleFocus_',
    value: function handleFocus_() {
      if (this.preventFocusState_) {
        return;
      }
      this.adapter_.addClass(_constants.cssClasses.FOCUS);
    }
  }, {
    key: 'handleBlur_',
    value: function handleBlur_() {
      this.preventFocusState_ = false;
      this.adapter_.removeClass(_constants.cssClasses.FOCUS);
    }

    /**
     * Sets the value of the slider
     * @param {number} value
     * @param {boolean} shouldFireInput
     * @param {boolean=} force
     */

  }, {
    key: 'setValue_',
    value: function setValue_(value, shouldFireInput) {
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (value === this.value_ && !force) {
        return;
      }

      var min = this.min_,
          max = this.max_;

      var valueSetToBoundary = value === min || value === max;
      if (this.step_ && !valueSetToBoundary) {
        value = this.quantize_(value);
      }
      if (value < min) {
        value = min;
      } else if (value > max) {
        value = max;
      }
      this.value_ = value;
      this.adapter_.setAttribute(_constants.strings.ARIA_VALUENOW, String(this.value_));
      this.updateUIForCurrentValue_();

      if (shouldFireInput) {
        this.adapter_.notifyInput();
        if (this.isDiscrete_) {
          this.adapter_.setMarkerValue(value);
        }
      }
    }

    /**
     * Calculates the quantized value
     * @param {number} value
     * @return {number}
     */

  }, {
    key: 'quantize_',
    value: function quantize_(value) {
      var numSteps = Math.round(value / this.step_);
      var quantizedVal = numSteps * this.step_;
      return quantizedVal;
    }
  }, {
    key: 'updateUIForCurrentValue_',
    value: function updateUIForCurrentValue_() {
      var _this5 = this;

      var max = this.max_,
          min = this.min_,
          value = this.value_;

      var pctComplete = (value - min) / (max - min);
      var translatePx = pctComplete * this.rect_.width;
      if (this.adapter_.isRTL()) {
        translatePx = this.rect_.width - translatePx;
      }

      var transformProp = (0, _index.getCorrectPropertyName)(window, 'transform');
      var transitionendEvtName = (0, _index.getCorrectEventName)(window, 'transitionend');

      if (this.inTransit_) {
        var onTransitionEnd = function onTransitionEnd() {
          _this5.setInTransit_(false);
          _this5.adapter_.deregisterThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
        };
        this.adapter_.registerThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
      }

      this.updateUIFrame_ = requestAnimationFrame(function () {
        // NOTE(traviskaufman): It would be nice to use calc() here,
        // but IE cannot handle calcs in transforms correctly.
        // See: https://goo.gl/NC2itk
        // Also note that the -50% offset is used to center the slider thumb.
        _this5.adapter_.setThumbContainerStyleProperty(transformProp, 'translateX(' + translatePx + 'px) translateX(-50%)');
        _this5.adapter_.setTrackStyleProperty(transformProp, 'scaleX(' + pctComplete + ')');
      });
    }

    /**
     * Toggles the active state of the slider
     * @param {boolean} active
     */

  }, {
    key: 'setActive_',
    value: function setActive_(active) {
      this.active_ = active;
      this.toggleClass_(_constants.cssClasses.ACTIVE, this.active_);
    }

    /**
     * Toggles the inTransit state of the slider
     * @param {boolean} inTransit
     */

  }, {
    key: 'setInTransit_',
    value: function setInTransit_(inTransit) {
      this.inTransit_ = inTransit;
      this.toggleClass_(_constants.cssClasses.IN_TRANSIT, this.inTransit_);
    }

    /**
     * Conditionally adds or removes a class based on shouldBePresent
     * @param {string} className
     * @param {boolean} shouldBePresent
     */

  }, {
    key: 'toggleClass_',
    value: function toggleClass_(className, shouldBePresent) {
      if (shouldBePresent) {
        this.adapter_.addClass(className);
      } else {
        this.adapter_.removeClass(className);
      }
    }
  }]);

  return MDCSliderFoundation;
}(_foundation2.default);

exports.default = MDCSliderFoundation;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @typedef {{
 *   noPrefix: string,
 *   webkitPrefix: string,
 *   styleProperty: string
 * }}
 */
var VendorPropertyMapType = void 0;

/** @const {Object<string, !VendorPropertyMapType>} */
var eventTypeMap = {
  'animationstart': {
    noPrefix: 'animationstart',
    webkitPrefix: 'webkitAnimationStart',
    styleProperty: 'animation'
  },
  'animationend': {
    noPrefix: 'animationend',
    webkitPrefix: 'webkitAnimationEnd',
    styleProperty: 'animation'
  },
  'animationiteration': {
    noPrefix: 'animationiteration',
    webkitPrefix: 'webkitAnimationIteration',
    styleProperty: 'animation'
  },
  'transitionend': {
    noPrefix: 'transitionend',
    webkitPrefix: 'webkitTransitionEnd',
    styleProperty: 'transition'
  }
};

/** @const {Object<string, !VendorPropertyMapType>} */
var cssPropertyMap = {
  'animation': {
    noPrefix: 'animation',
    webkitPrefix: '-webkit-animation'
  },
  'transform': {
    noPrefix: 'transform',
    webkitPrefix: '-webkit-transform'
  },
  'transition': {
    noPrefix: 'transition',
    webkitPrefix: '-webkit-transition'
  }
};

/**
 * @param {!Object} windowObj
 * @return {boolean}
 */
function hasProperShape(windowObj) {
  return windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function';
}

/**
 * @param {string} eventType
 * @return {boolean}
 */
function eventFoundInMaps(eventType) {
  return eventType in eventTypeMap || eventType in cssPropertyMap;
}

/**
 * @param {string} eventType
 * @param {!Object<string, !VendorPropertyMapType>} map
 * @param {!Element} el
 * @return {string}
 */
function getJavaScriptEventName(eventType, map, el) {
  return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
}

/**
 * Helper function to determine browser prefix for CSS3 animation events
 * and property names.
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getAnimationName(windowObj, eventType) {
  if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
    return eventType;
  }

  var map = /** @type {!Object<string, !VendorPropertyMapType>} */eventType in eventTypeMap ? eventTypeMap : cssPropertyMap;
  var el = windowObj['document']['createElement']('div');
  var eventName = '';

  if (map === eventTypeMap) {
    eventName = getJavaScriptEventName(eventType, map, el);
  } else {
    eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
  }

  return eventName;
}

// Public functions to access getAnimationName() for JavaScript events or CSS
// property names.

var transformStyleProperties = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'MSTransform'];

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectEventName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectPropertyName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

exports.transformStyleProperties = transformStyleProperties;
exports.getCorrectEventName = getCorrectEventName;
exports.getCorrectPropertyName = getCorrectPropertyName;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! p5.js v0.7.2 September 02, 2018 */!function (a) {
  if ("object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = a();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    var b;b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.p5 = a();
  }
}(function () {
  var a;return function a(b, c, d) {
    function e(g, h) {
      if (!c[g]) {
        if (!b[g]) {
          var i = "function" == typeof require && require;if (!h && i) return require(g, !0);if (f) return f(g, !0);var j = new Error("Cannot find module '" + g + "'");throw j.code = "MODULE_NOT_FOUND", j;
        }var k = c[g] = { exports: {} };b[g][0].call(k.exports, function (a) {
          var c = b[g][1][a];return e(c || a);
        }, k, k.exports, a, b, c, d);
      }return c[g].exports;
    }for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) {
      e(d[g]);
    }return e;
  }({ 1: [function (a, b, c) {
      !function (a) {
        "use strict";
        function b(a) {
          var b = a.charCodeAt(0);return b === f || b === k ? 62 : b === g || b === l ? 63 : b < h ? -1 : b < h + 10 ? b - h + 26 + 26 : b < j + 26 ? b - j : b < i + 26 ? b - i + 26 : void 0;
        }function c(a) {
          function c(a) {
            j[l++] = a;
          }var d, f, g, h, i, j;if (a.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");var k = a.length;i = "=" === a.charAt(k - 2) ? 2 : "=" === a.charAt(k - 1) ? 1 : 0, j = new e(3 * a.length / 4 - i), g = i > 0 ? a.length - 4 : a.length;var l = 0;for (d = 0, f = 0; d < g; d += 4, f += 3) {
            h = b(a.charAt(d)) << 18 | b(a.charAt(d + 1)) << 12 | b(a.charAt(d + 2)) << 6 | b(a.charAt(d + 3)), c((16711680 & h) >> 16), c((65280 & h) >> 8), c(255 & h);
          }return 2 === i ? (h = b(a.charAt(d)) << 2 | b(a.charAt(d + 1)) >> 4, c(255 & h)) : 1 === i && (h = b(a.charAt(d)) << 10 | b(a.charAt(d + 1)) << 4 | b(a.charAt(d + 2)) >> 2, c(h >> 8 & 255), c(255 & h)), j;
        }function d(a) {
          function b(a) {
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a);
          }function c(a) {
            return b(a >> 18 & 63) + b(a >> 12 & 63) + b(a >> 6 & 63) + b(63 & a);
          }var d,
              e,
              f,
              g = a.length % 3,
              h = "";for (d = 0, f = a.length - g; d < f; d += 3) {
            e = (a[d] << 16) + (a[d + 1] << 8) + a[d + 2], h += c(e);
          }switch (g) {case 1:
              e = a[a.length - 1], h += b(e >> 2), h += b(e << 4 & 63), h += "==";break;case 2:
              e = (a[a.length - 2] << 8) + a[a.length - 1], h += b(e >> 10), h += b(e >> 4 & 63), h += b(e << 2 & 63), h += "=";}return h;
        }var e = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            f = "+".charCodeAt(0),
            g = "/".charCodeAt(0),
            h = "0".charCodeAt(0),
            i = "a".charCodeAt(0),
            j = "A".charCodeAt(0),
            k = "-".charCodeAt(0),
            l = "_".charCodeAt(0);a.toByteArray = c, a.fromByteArray = d;
      }(void 0 === c ? this.base64js = {} : c);
    }, {}], 2: [function (a, b, c) {}, {}], 3: [function (a, b, c) {
      (function (b) {
        "use strict";
        function d() {
          function a() {}try {
            var b = new Uint8Array(1);return b.foo = function () {
              return 42;
            }, b.constructor = a, 42 === b.foo() && b.constructor === a && "function" == typeof b.subarray && 0 === b.subarray(1, 1).byteLength;
          } catch (a) {
            return !1;
          }
        }function e() {
          return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }function f(a) {
          return this instanceof f ? (f.TYPED_ARRAY_SUPPORT || (this.length = 0, this.parent = void 0), "number" == typeof a ? g(this, a) : "string" == typeof a ? h(this, a, arguments.length > 1 ? arguments[1] : "utf8") : i(this, a)) : arguments.length > 1 ? new f(a, arguments[1]) : new f(a);
        }function g(a, b) {
          if (a = p(a, b < 0 ? 0 : 0 | q(b)), !f.TYPED_ARRAY_SUPPORT) for (var c = 0; c < b; c++) {
            a[c] = 0;
          }return a;
        }function h(a, b, c) {
          return "string" == typeof c && "" !== c || (c = "utf8"), a = p(a, 0 | s(b, c)), a.write(b, c), a;
        }function i(a, b) {
          if (f.isBuffer(b)) return j(a, b);if (Y(b)) return k(a, b);if (null == b) throw new TypeError("must start with number, buffer, array or string");if ("undefined" != typeof ArrayBuffer) {
            if (b.buffer instanceof ArrayBuffer) return l(a, b);if (b instanceof ArrayBuffer) return m(a, b);
          }return b.length ? n(a, b) : o(a, b);
        }function j(a, b) {
          var c = 0 | q(b.length);return a = p(a, c), b.copy(a, 0, 0, c), a;
        }function k(a, b) {
          var c = 0 | q(b.length);a = p(a, c);for (var d = 0; d < c; d += 1) {
            a[d] = 255 & b[d];
          }return a;
        }function l(a, b) {
          var c = 0 | q(b.length);a = p(a, c);for (var d = 0; d < c; d += 1) {
            a[d] = 255 & b[d];
          }return a;
        }function m(a, b) {
          return f.TYPED_ARRAY_SUPPORT ? (b.byteLength, a = f._augment(new Uint8Array(b))) : a = l(a, new Uint8Array(b)), a;
        }function n(a, b) {
          var c = 0 | q(b.length);a = p(a, c);for (var d = 0; d < c; d += 1) {
            a[d] = 255 & b[d];
          }return a;
        }function o(a, b) {
          var c,
              d = 0;"Buffer" === b.type && Y(b.data) && (c = b.data, d = 0 | q(c.length)), a = p(a, d);for (var e = 0; e < d; e += 1) {
            a[e] = 255 & c[e];
          }return a;
        }function p(a, b) {
          return f.TYPED_ARRAY_SUPPORT ? (a = f._augment(new Uint8Array(b)), a.__proto__ = f.prototype) : (a.length = b, a._isBuffer = !0), 0 !== b && b <= f.poolSize >>> 1 && (a.parent = Z), a;
        }function q(a) {
          if (a >= e()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + e().toString(16) + " bytes");return 0 | a;
        }function r(a, b) {
          if (!(this instanceof r)) return new r(a, b);var c = new f(a, b);return delete c.parent, c;
        }function s(a, b) {
          "string" != typeof a && (a = "" + a);var c = a.length;if (0 === c) return 0;for (var d = !1;;) {
            switch (b) {case "ascii":case "binary":case "raw":case "raws":
                return c;case "utf8":case "utf-8":
                return R(a).length;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
                return 2 * c;case "hex":
                return c >>> 1;case "base64":
                return U(a).length;default:
                if (d) return R(a).length;b = ("" + b).toLowerCase(), d = !0;}
          }
        }function t(a, b, c) {
          var d = !1;if (b |= 0, c = void 0 === c || c === 1 / 0 ? this.length : 0 | c, a || (a = "utf8"), b < 0 && (b = 0), c > this.length && (c = this.length), c <= b) return "";for (;;) {
            switch (a) {case "hex":
                return F(this, b, c);case "utf8":case "utf-8":
                return B(this, b, c);case "ascii":
                return D(this, b, c);case "binary":
                return E(this, b, c);case "base64":
                return A(this, b, c);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
                return G(this, b, c);default:
                if (d) throw new TypeError("Unknown encoding: " + a);a = (a + "").toLowerCase(), d = !0;}
          }
        }function u(a, b, c, d) {
          c = Number(c) || 0;var e = a.length - c;d ? (d = Number(d)) > e && (d = e) : d = e;var f = b.length;if (f % 2 != 0) throw new Error("Invalid hex string");d > f / 2 && (d = f / 2);for (var g = 0; g < d; g++) {
            var h = parseInt(b.substr(2 * g, 2), 16);if (isNaN(h)) throw new Error("Invalid hex string");a[c + g] = h;
          }return g;
        }function v(a, b, c, d) {
          return V(R(b, a.length - c), a, c, d);
        }function w(a, b, c, d) {
          return V(S(b), a, c, d);
        }function x(a, b, c, d) {
          return w(a, b, c, d);
        }function y(a, b, c, d) {
          return V(U(b), a, c, d);
        }function z(a, b, c, d) {
          return V(T(b, a.length - c), a, c, d);
        }function A(a, b, c) {
          return 0 === b && c === a.length ? W.fromByteArray(a) : W.fromByteArray(a.slice(b, c));
        }function B(a, b, c) {
          c = Math.min(a.length, c);for (var d = [], e = b; e < c;) {
            var f = a[e],
                g = null,
                h = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;if (e + h <= c) {
              var i, j, k, l;switch (h) {case 1:
                  f < 128 && (g = f);break;case 2:
                  i = a[e + 1], 128 == (192 & i) && (l = (31 & f) << 6 | 63 & i) > 127 && (g = l);break;case 3:
                  i = a[e + 1], j = a[e + 2], 128 == (192 & i) && 128 == (192 & j) && (l = (15 & f) << 12 | (63 & i) << 6 | 63 & j) > 2047 && (l < 55296 || l > 57343) && (g = l);break;case 4:
                  i = a[e + 1], j = a[e + 2], k = a[e + 3], 128 == (192 & i) && 128 == (192 & j) && 128 == (192 & k) && (l = (15 & f) << 18 | (63 & i) << 12 | (63 & j) << 6 | 63 & k) > 65535 && l < 1114112 && (g = l);}
            }null === g ? (g = 65533, h = 1) : g > 65535 && (g -= 65536, d.push(g >>> 10 & 1023 | 55296), g = 56320 | 1023 & g), d.push(g), e += h;
          }return C(d);
        }function C(a) {
          var b = a.length;if (b <= $) return String.fromCharCode.apply(String, a);for (var c = "", d = 0; d < b;) {
            c += String.fromCharCode.apply(String, a.slice(d, d += $));
          }return c;
        }function D(a, b, c) {
          var d = "";c = Math.min(a.length, c);for (var e = b; e < c; e++) {
            d += String.fromCharCode(127 & a[e]);
          }return d;
        }function E(a, b, c) {
          var d = "";c = Math.min(a.length, c);for (var e = b; e < c; e++) {
            d += String.fromCharCode(a[e]);
          }return d;
        }function F(a, b, c) {
          var d = a.length;(!b || b < 0) && (b = 0), (!c || c < 0 || c > d) && (c = d);for (var e = "", f = b; f < c; f++) {
            e += Q(a[f]);
          }return e;
        }function G(a, b, c) {
          for (var d = a.slice(b, c), e = "", f = 0; f < d.length; f += 2) {
            e += String.fromCharCode(d[f] + 256 * d[f + 1]);
          }return e;
        }function H(a, b, c) {
          if (a % 1 != 0 || a < 0) throw new RangeError("offset is not uint");if (a + b > c) throw new RangeError("Trying to access beyond buffer length");
        }function I(a, b, c, d, e, g) {
          if (!f.isBuffer(a)) throw new TypeError("buffer must be a Buffer instance");if (b > e || b < g) throw new RangeError("value is out of bounds");if (c + d > a.length) throw new RangeError("index out of range");
        }function J(a, b, c, d) {
          b < 0 && (b = 65535 + b + 1);for (var e = 0, f = Math.min(a.length - c, 2); e < f; e++) {
            a[c + e] = (b & 255 << 8 * (d ? e : 1 - e)) >>> 8 * (d ? e : 1 - e);
          }
        }function K(a, b, c, d) {
          b < 0 && (b = 4294967295 + b + 1);for (var e = 0, f = Math.min(a.length - c, 4); e < f; e++) {
            a[c + e] = b >>> 8 * (d ? e : 3 - e) & 255;
          }
        }function L(a, b, c, d, e, f) {
          if (b > e || b < f) throw new RangeError("value is out of bounds");if (c + d > a.length) throw new RangeError("index out of range");if (c < 0) throw new RangeError("index out of range");
        }function M(a, b, c, d, e) {
          return e || L(a, b, c, 4, 3.4028234663852886e38, -3.4028234663852886e38), X.write(a, b, c, d, 23, 4), c + 4;
        }function N(a, b, c, d, e) {
          return e || L(a, b, c, 8, 1.7976931348623157e308, -1.7976931348623157e308), X.write(a, b, c, d, 52, 8), c + 8;
        }function O(a) {
          if (a = P(a).replace(aa, ""), a.length < 2) return "";for (; a.length % 4 != 0;) {
            a += "=";
          }return a;
        }function P(a) {
          return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "");
        }function Q(a) {
          return a < 16 ? "0" + a.toString(16) : a.toString(16);
        }function R(a, b) {
          b = b || 1 / 0;for (var c, d = a.length, e = null, f = [], g = 0; g < d; g++) {
            if ((c = a.charCodeAt(g)) > 55295 && c < 57344) {
              if (!e) {
                if (c > 56319) {
                  (b -= 3) > -1 && f.push(239, 191, 189);continue;
                }if (g + 1 === d) {
                  (b -= 3) > -1 && f.push(239, 191, 189);continue;
                }e = c;continue;
              }if (c < 56320) {
                (b -= 3) > -1 && f.push(239, 191, 189), e = c;continue;
              }c = 65536 + (e - 55296 << 10 | c - 56320);
            } else e && (b -= 3) > -1 && f.push(239, 191, 189);if (e = null, c < 128) {
              if ((b -= 1) < 0) break;f.push(c);
            } else if (c < 2048) {
              if ((b -= 2) < 0) break;f.push(c >> 6 | 192, 63 & c | 128);
            } else if (c < 65536) {
              if ((b -= 3) < 0) break;f.push(c >> 12 | 224, c >> 6 & 63 | 128, 63 & c | 128);
            } else {
              if (!(c < 1114112)) throw new Error("Invalid code point");if ((b -= 4) < 0) break;f.push(c >> 18 | 240, c >> 12 & 63 | 128, c >> 6 & 63 | 128, 63 & c | 128);
            }
          }return f;
        }function S(a) {
          for (var b = [], c = 0; c < a.length; c++) {
            b.push(255 & a.charCodeAt(c));
          }return b;
        }function T(a, b) {
          for (var c, d, e, f = [], g = 0; g < a.length && !((b -= 2) < 0); g++) {
            c = a.charCodeAt(g), d = c >> 8, e = c % 256, f.push(e), f.push(d);
          }return f;
        }function U(a) {
          return W.toByteArray(O(a));
        }function V(a, b, c, d) {
          for (var e = 0; e < d && !(e + c >= b.length || e >= a.length); e++) {
            b[e + c] = a[e];
          }return e;
        }var W = a("base64-js"),
            X = a("ieee754"),
            Y = a("isarray");c.Buffer = f, c.SlowBuffer = r, c.INSPECT_MAX_BYTES = 50, f.poolSize = 8192;var Z = {};f.TYPED_ARRAY_SUPPORT = void 0 !== b.TYPED_ARRAY_SUPPORT ? b.TYPED_ARRAY_SUPPORT : d(), f.TYPED_ARRAY_SUPPORT ? (f.prototype.__proto__ = Uint8Array.prototype, f.__proto__ = Uint8Array) : (f.prototype.length = void 0, f.prototype.parent = void 0), f.isBuffer = function (a) {
          return !(null == a || !a._isBuffer);
        }, f.compare = function (a, b) {
          if (!f.isBuffer(a) || !f.isBuffer(b)) throw new TypeError("Arguments must be Buffers");if (a === b) return 0;for (var c = a.length, d = b.length, e = 0, g = Math.min(c, d); e < g && a[e] === b[e];) {
            ++e;
          }return e !== g && (c = a[e], d = b[e]), c < d ? -1 : d < c ? 1 : 0;
        }, f.isEncoding = function (a) {
          switch (String(a).toLowerCase()) {case "hex":case "utf8":case "utf-8":case "ascii":case "binary":case "base64":case "raw":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
              return !0;default:
              return !1;}
        }, f.concat = function (a, b) {
          if (!Y(a)) throw new TypeError("list argument must be an Array of Buffers.");if (0 === a.length) return new f(0);var c;if (void 0 === b) for (b = 0, c = 0; c < a.length; c++) {
            b += a[c].length;
          }var d = new f(b),
              e = 0;for (c = 0; c < a.length; c++) {
            var g = a[c];g.copy(d, e), e += g.length;
          }return d;
        }, f.byteLength = s, f.prototype.toString = function () {
          var a = 0 | this.length;return 0 === a ? "" : 0 === arguments.length ? B(this, 0, a) : t.apply(this, arguments);
        }, f.prototype.equals = function (a) {
          if (!f.isBuffer(a)) throw new TypeError("Argument must be a Buffer");return this === a || 0 === f.compare(this, a);
        }, f.prototype.inspect = function () {
          var a = "",
              b = c.INSPECT_MAX_BYTES;return this.length > 0 && (a = this.toString("hex", 0, b).match(/.{2}/g).join(" "), this.length > b && (a += " ... ")), "<Buffer " + a + ">";
        }, f.prototype.compare = function (a) {
          if (!f.isBuffer(a)) throw new TypeError("Argument must be a Buffer");return this === a ? 0 : f.compare(this, a);
        }, f.prototype.indexOf = function (a, b) {
          function c(a, b, c) {
            for (var d = -1, e = 0; c + e < a.length; e++) {
              if (a[c + e] === b[-1 === d ? 0 : e - d]) {
                if (-1 === d && (d = e), e - d + 1 === b.length) return c + d;
              } else d = -1;
            }return -1;
          }if (b > 2147483647 ? b = 2147483647 : b < -2147483648 && (b = -2147483648), b >>= 0, 0 === this.length) return -1;if (b >= this.length) return -1;if (b < 0 && (b = Math.max(this.length + b, 0)), "string" == typeof a) return 0 === a.length ? -1 : String.prototype.indexOf.call(this, a, b);if (f.isBuffer(a)) return c(this, a, b);if ("number" == typeof a) return f.TYPED_ARRAY_SUPPORT && "function" === Uint8Array.prototype.indexOf ? Uint8Array.prototype.indexOf.call(this, a, b) : c(this, [a], b);throw new TypeError("val must be string, number or Buffer");
        }, f.prototype.get = function (a) {
          return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(a);
        }, f.prototype.set = function (a, b) {
          return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(a, b);
        }, f.prototype.write = function (a, b, c, d) {
          if (void 0 === b) d = "utf8", c = this.length, b = 0;else if (void 0 === c && "string" == typeof b) d = b, c = this.length, b = 0;else if (isFinite(b)) b |= 0, isFinite(c) ? (c |= 0, void 0 === d && (d = "utf8")) : (d = c, c = void 0);else {
            var e = d;d = b, b = 0 | c, c = e;
          }var f = this.length - b;if ((void 0 === c || c > f) && (c = f), a.length > 0 && (c < 0 || b < 0) || b > this.length) throw new RangeError("attempt to write outside buffer bounds");d || (d = "utf8");for (var g = !1;;) {
            switch (d) {case "hex":
                return u(this, a, b, c);case "utf8":case "utf-8":
                return v(this, a, b, c);case "ascii":
                return w(this, a, b, c);case "binary":
                return x(this, a, b, c);case "base64":
                return y(this, a, b, c);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
                return z(this, a, b, c);default:
                if (g) throw new TypeError("Unknown encoding: " + d);d = ("" + d).toLowerCase(), g = !0;}
          }
        }, f.prototype.toJSON = function () {
          return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
        };var $ = 4096;f.prototype.slice = function (a, b) {
          var c = this.length;a = ~~a, b = void 0 === b ? c : ~~b, a < 0 ? (a += c) < 0 && (a = 0) : a > c && (a = c), b < 0 ? (b += c) < 0 && (b = 0) : b > c && (b = c), b < a && (b = a);var d;if (f.TYPED_ARRAY_SUPPORT) d = f._augment(this.subarray(a, b));else {
            var e = b - a;d = new f(e, void 0);for (var g = 0; g < e; g++) {
              d[g] = this[g + a];
            }
          }return d.length && (d.parent = this.parent || this), d;
        }, f.prototype.readUIntLE = function (a, b, c) {
          a |= 0, b |= 0, c || H(a, b, this.length);for (var d = this[a], e = 1, f = 0; ++f < b && (e *= 256);) {
            d += this[a + f] * e;
          }return d;
        }, f.prototype.readUIntBE = function (a, b, c) {
          a |= 0, b |= 0, c || H(a, b, this.length);for (var d = this[a + --b], e = 1; b > 0 && (e *= 256);) {
            d += this[a + --b] * e;
          }return d;
        }, f.prototype.readUInt8 = function (a, b) {
          return b || H(a, 1, this.length), this[a];
        }, f.prototype.readUInt16LE = function (a, b) {
          return b || H(a, 2, this.length), this[a] | this[a + 1] << 8;
        }, f.prototype.readUInt16BE = function (a, b) {
          return b || H(a, 2, this.length), this[a] << 8 | this[a + 1];
        }, f.prototype.readUInt32LE = function (a, b) {
          return b || H(a, 4, this.length), (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + 16777216 * this[a + 3];
        }, f.prototype.readUInt32BE = function (a, b) {
          return b || H(a, 4, this.length), 16777216 * this[a] + (this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3]);
        }, f.prototype.readIntLE = function (a, b, c) {
          a |= 0, b |= 0, c || H(a, b, this.length);for (var d = this[a], e = 1, f = 0; ++f < b && (e *= 256);) {
            d += this[a + f] * e;
          }return e *= 128, d >= e && (d -= Math.pow(2, 8 * b)), d;
        }, f.prototype.readIntBE = function (a, b, c) {
          a |= 0, b |= 0, c || H(a, b, this.length);for (var d = b, e = 1, f = this[a + --d]; d > 0 && (e *= 256);) {
            f += this[a + --d] * e;
          }return e *= 128, f >= e && (f -= Math.pow(2, 8 * b)), f;
        }, f.prototype.readInt8 = function (a, b) {
          return b || H(a, 1, this.length), 128 & this[a] ? -1 * (255 - this[a] + 1) : this[a];
        }, f.prototype.readInt16LE = function (a, b) {
          b || H(a, 2, this.length);var c = this[a] | this[a + 1] << 8;return 32768 & c ? 4294901760 | c : c;
        }, f.prototype.readInt16BE = function (a, b) {
          b || H(a, 2, this.length);var c = this[a + 1] | this[a] << 8;return 32768 & c ? 4294901760 | c : c;
        }, f.prototype.readInt32LE = function (a, b) {
          return b || H(a, 4, this.length), this[a] | this[a + 1] << 8 | this[a + 2] << 16 | this[a + 3] << 24;
        }, f.prototype.readInt32BE = function (a, b) {
          return b || H(a, 4, this.length), this[a] << 24 | this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3];
        }, f.prototype.readFloatLE = function (a, b) {
          return b || H(a, 4, this.length), X.read(this, a, !0, 23, 4);
        }, f.prototype.readFloatBE = function (a, b) {
          return b || H(a, 4, this.length), X.read(this, a, !1, 23, 4);
        }, f.prototype.readDoubleLE = function (a, b) {
          return b || H(a, 8, this.length), X.read(this, a, !0, 52, 8);
        }, f.prototype.readDoubleBE = function (a, b) {
          return b || H(a, 8, this.length), X.read(this, a, !1, 52, 8);
        }, f.prototype.writeUIntLE = function (a, b, c, d) {
          a = +a, b |= 0, c |= 0, d || I(this, a, b, c, Math.pow(2, 8 * c), 0);var e = 1,
              f = 0;for (this[b] = 255 & a; ++f < c && (e *= 256);) {
            this[b + f] = a / e & 255;
          }return b + c;
        }, f.prototype.writeUIntBE = function (a, b, c, d) {
          a = +a, b |= 0, c |= 0, d || I(this, a, b, c, Math.pow(2, 8 * c), 0);var e = c - 1,
              f = 1;for (this[b + e] = 255 & a; --e >= 0 && (f *= 256);) {
            this[b + e] = a / f & 255;
          }return b + c;
        }, f.prototype.writeUInt8 = function (a, b, c) {
          return a = +a, b |= 0, c || I(this, a, b, 1, 255, 0), f.TYPED_ARRAY_SUPPORT || (a = Math.floor(a)), this[b] = 255 & a, b + 1;
        }, f.prototype.writeUInt16LE = function (a, b, c) {
          return a = +a, b |= 0, c || I(this, a, b, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[b] = 255 & a, this[b + 1] = a >>> 8) : J(this, a, b, !0), b + 2;
        }, f.prototype.writeUInt16BE = function (a, b, c) {
          return a = +a, b |= 0, c || I(this, a, b, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 8, this[b + 1] = 255 & a) : J(this, a, b, !1), b + 2;
        }, f.prototype.writeUInt32LE = function (a, b, c) {
          return a = +a, b |= 0, c || I(this, a, b, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[b + 3] = a >>> 24, this[b + 2] = a >>> 16, this[b + 1] = a >>> 8, this[b] = 255 & a) : K(this, a, b, !0), b + 4;
        }, f.prototype.writeUInt32BE = function (a, b, c) {
          return a = +a, b |= 0, c || I(this, a, b, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 24, this[b + 1] = a >>> 16, this[b + 2] = a >>> 8, this[b + 3] = 255 & a) : K(this, a, b, !1), b + 4;
        }, f.prototype.writeIntLE = function (a, b, c, d) {
          if (a = +a, b |= 0, !d) {
            var e = Math.pow(2, 8 * c - 1);I(this, a, b, c, e - 1, -e);
          }var f = 0,
              g = 1,
              h = a < 0 ? 1 : 0;for (this[b] = 255 & a; ++f < c && (g *= 256);) {
            this[b + f] = (a / g >> 0) - h & 255;
          }return b + c;
        }, f.prototype.writeIntBE = function (a, b, c, d) {
          if (a = +a, b |= 0, !d) {
            var e = Math.pow(2, 8 * c - 1);I(this, a, b, c, e - 1, -e);
          }var f = c - 1,
              g = 1,
              h = a < 0 ? 1 : 0;for (this[b + f] = 255 & a; --f >= 0 && (g *= 256);) {
            this[b + f] = (a / g >> 0) - h & 255;
          }return b + c;
        }, f.prototype.writeInt8 = function (a, b, c) {
          return a = +a, b |= 0, c || I(this, a, b, 1, 127, -128), f.TYPED_ARRAY_SUPPORT || (a = Math.floor(a)), a < 0 && (a = 255 + a + 1), this[b] = 255 & a, b + 1;
        }, f.prototype.writeInt16LE = function (a, b, c) {
          return a = +a, b |= 0, c || I(this, a, b, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[b] = 255 & a, this[b + 1] = a >>> 8) : J(this, a, b, !0), b + 2;
        }, f.prototype.writeInt16BE = function (a, b, c) {
          return a = +a, b |= 0, c || I(this, a, b, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 8, this[b + 1] = 255 & a) : J(this, a, b, !1), b + 2;
        }, f.prototype.writeInt32LE = function (a, b, c) {
          return a = +a, b |= 0, c || I(this, a, b, 4, 2147483647, -2147483648), f.TYPED_ARRAY_SUPPORT ? (this[b] = 255 & a, this[b + 1] = a >>> 8, this[b + 2] = a >>> 16, this[b + 3] = a >>> 24) : K(this, a, b, !0), b + 4;
        }, f.prototype.writeInt32BE = function (a, b, c) {
          return a = +a, b |= 0, c || I(this, a, b, 4, 2147483647, -2147483648), a < 0 && (a = 4294967295 + a + 1), f.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 24, this[b + 1] = a >>> 16, this[b + 2] = a >>> 8, this[b + 3] = 255 & a) : K(this, a, b, !1), b + 4;
        }, f.prototype.writeFloatLE = function (a, b, c) {
          return M(this, a, b, !0, c);
        }, f.prototype.writeFloatBE = function (a, b, c) {
          return M(this, a, b, !1, c);
        }, f.prototype.writeDoubleLE = function (a, b, c) {
          return N(this, a, b, !0, c);
        }, f.prototype.writeDoubleBE = function (a, b, c) {
          return N(this, a, b, !1, c);
        }, f.prototype.copy = function (a, b, c, d) {
          if (c || (c = 0), d || 0 === d || (d = this.length), b >= a.length && (b = a.length), b || (b = 0), d > 0 && d < c && (d = c), d === c) return 0;if (0 === a.length || 0 === this.length) return 0;if (b < 0) throw new RangeError("targetStart out of bounds");if (c < 0 || c >= this.length) throw new RangeError("sourceStart out of bounds");if (d < 0) throw new RangeError("sourceEnd out of bounds");d > this.length && (d = this.length), a.length - b < d - c && (d = a.length - b + c);var e,
              g = d - c;if (this === a && c < b && b < d) for (e = g - 1; e >= 0; e--) {
            a[e + b] = this[e + c];
          } else if (g < 1e3 || !f.TYPED_ARRAY_SUPPORT) for (e = 0; e < g; e++) {
            a[e + b] = this[e + c];
          } else a._set(this.subarray(c, c + g), b);return g;
        }, f.prototype.fill = function (a, b, c) {
          if (a || (a = 0), b || (b = 0), c || (c = this.length), c < b) throw new RangeError("end < start");if (c !== b && 0 !== this.length) {
            if (b < 0 || b >= this.length) throw new RangeError("start out of bounds");if (c < 0 || c > this.length) throw new RangeError("end out of bounds");var d;if ("number" == typeof a) for (d = b; d < c; d++) {
              this[d] = a;
            } else {
              var e = R(a.toString()),
                  f = e.length;for (d = b; d < c; d++) {
                this[d] = e[d % f];
              }
            }return this;
          }
        }, f.prototype.toArrayBuffer = function () {
          if ("undefined" != typeof Uint8Array) {
            if (f.TYPED_ARRAY_SUPPORT) return new f(this).buffer;for (var a = new Uint8Array(this.length), b = 0, c = a.length; b < c; b += 1) {
              a[b] = this[b];
            }return a.buffer;
          }throw new TypeError("Buffer.toArrayBuffer not supported in this browser");
        };var _ = f.prototype;f._augment = function (a) {
          return a.constructor = f, a._isBuffer = !0, a._set = a.set, a.get = _.get, a.set = _.set, a.write = _.write, a.toString = _.toString, a.toLocaleString = _.toString, a.toJSON = _.toJSON, a.equals = _.equals, a.compare = _.compare, a.indexOf = _.indexOf, a.copy = _.copy, a.slice = _.slice, a.readUIntLE = _.readUIntLE, a.readUIntBE = _.readUIntBE, a.readUInt8 = _.readUInt8, a.readUInt16LE = _.readUInt16LE, a.readUInt16BE = _.readUInt16BE, a.readUInt32LE = _.readUInt32LE, a.readUInt32BE = _.readUInt32BE, a.readIntLE = _.readIntLE, a.readIntBE = _.readIntBE, a.readInt8 = _.readInt8, a.readInt16LE = _.readInt16LE, a.readInt16BE = _.readInt16BE, a.readInt32LE = _.readInt32LE, a.readInt32BE = _.readInt32BE, a.readFloatLE = _.readFloatLE, a.readFloatBE = _.readFloatBE, a.readDoubleLE = _.readDoubleLE, a.readDoubleBE = _.readDoubleBE, a.writeUInt8 = _.writeUInt8, a.writeUIntLE = _.writeUIntLE, a.writeUIntBE = _.writeUIntBE, a.writeUInt16LE = _.writeUInt16LE, a.writeUInt16BE = _.writeUInt16BE, a.writeUInt32LE = _.writeUInt32LE, a.writeUInt32BE = _.writeUInt32BE, a.writeIntLE = _.writeIntLE, a.writeIntBE = _.writeIntBE, a.writeInt8 = _.writeInt8, a.writeInt16LE = _.writeInt16LE, a.writeInt16BE = _.writeInt16BE, a.writeInt32LE = _.writeInt32LE, a.writeInt32BE = _.writeInt32BE, a.writeFloatLE = _.writeFloatLE, a.writeFloatBE = _.writeFloatBE, a.writeDoubleLE = _.writeDoubleLE, a.writeDoubleBE = _.writeDoubleBE, a.fill = _.fill, a.inspect = _.inspect, a.toArrayBuffer = _.toArrayBuffer, a;
        };var aa = /[^+\/0-9A-Za-z-_]/g;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, { "base64-js": 1, ieee754: 7, isarray: 8 }], 4: [function (b, c, d) {
      (function (e, f) {
        !function (b, e) {
          "object" == (typeof d === "undefined" ? "undefined" : _typeof(d)) && void 0 !== c ? c.exports = e() : "function" == typeof a && a.amd ? a(e) : b.ES6Promise = e();
        }(this, function () {
          "use strict";
          function a(a) {
            var b = typeof a === "undefined" ? "undefined" : _typeof(a);return null !== a && ("object" === b || "function" === b);
          }function c(a) {
            return "function" == typeof a;
          }function d(a) {
            X = a;
          }function g(a) {
            Y = a;
          }function h() {
            return function () {
              return e.nextTick(m);
            };
          }function i() {
            return void 0 !== W ? function () {
              W(m);
            } : l();
          }function j() {
            var a = 0,
                b = new _(m),
                c = document.createTextNode("");return b.observe(c, { characterData: !0 }), function () {
              c.data = a = ++a % 2;
            };
          }function k() {
            var a = new MessageChannel();return a.port1.onmessage = m, function () {
              return a.port2.postMessage(0);
            };
          }function l() {
            var a = setTimeout;return function () {
              return a(m, 1);
            };
          }function m() {
            for (var a = 0; a < V; a += 2) {
              (0, ca[a])(ca[a + 1]), ca[a] = void 0, ca[a + 1] = void 0;
            }V = 0;
          }function n() {
            try {
              var a = b,
                  c = a("vertx");return W = c.runOnLoop || c.runOnContext, i();
            } catch (a) {
              return l();
            }
          }function o(a, b) {
            var c = arguments,
                d = this,
                e = new this.constructor(q);void 0 === e[ea] && J(e);var f = d._state;return f ? function () {
              var a = c[f - 1];Y(function () {
                return G(f, e, a, d._result);
              });
            }() : C(d, e, a, b), e;
          }function p(a) {
            var b = this;if (a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && a.constructor === b) return a;var c = new b(q);return y(c, a), c;
          }function q() {}function r() {
            return new TypeError("You cannot resolve a promise with itself");
          }function s() {
            return new TypeError("A promises callback cannot return that same promise.");
          }function t(a) {
            try {
              return a.then;
            } catch (a) {
              return ia.error = a, ia;
            }
          }function u(a, b, c, d) {
            try {
              a.call(b, c, d);
            } catch (a) {
              return a;
            }
          }function v(a, b, c) {
            Y(function (a) {
              var d = !1,
                  e = u(c, b, function (c) {
                d || (d = !0, b !== c ? y(a, c) : A(a, c));
              }, function (b) {
                d || (d = !0, B(a, b));
              }, "Settle: " + (a._label || " unknown promise"));!d && e && (d = !0, B(a, e));
            }, a);
          }function w(a, b) {
            b._state === ga ? A(a, b._result) : b._state === ha ? B(a, b._result) : C(b, void 0, function (b) {
              return y(a, b);
            }, function (b) {
              return B(a, b);
            });
          }function x(a, b, d) {
            b.constructor === a.constructor && d === o && b.constructor.resolve === p ? w(a, b) : d === ia ? (B(a, ia.error), ia.error = null) : void 0 === d ? A(a, b) : c(d) ? v(a, b, d) : A(a, b);
          }function y(b, c) {
            b === c ? B(b, r()) : a(c) ? x(b, c, t(c)) : A(b, c);
          }function z(a) {
            a._onerror && a._onerror(a._result), D(a);
          }function A(a, b) {
            a._state === fa && (a._result = b, a._state = ga, 0 !== a._subscribers.length && Y(D, a));
          }function B(a, b) {
            a._state === fa && (a._state = ha, a._result = b, Y(z, a));
          }function C(a, b, c, d) {
            var e = a._subscribers,
                f = e.length;a._onerror = null, e[f] = b, e[f + ga] = c, e[f + ha] = d, 0 === f && a._state && Y(D, a);
          }function D(a) {
            var b = a._subscribers,
                c = a._state;if (0 !== b.length) {
              for (var d = void 0, e = void 0, f = a._result, g = 0; g < b.length; g += 3) {
                d = b[g], e = b[g + c], d ? G(c, d, e, f) : e(f);
              }a._subscribers.length = 0;
            }
          }function E() {
            this.error = null;
          }function F(a, b) {
            try {
              return a(b);
            } catch (a) {
              return ja.error = a, ja;
            }
          }function G(a, b, d, e) {
            var f = c(d),
                g = void 0,
                h = void 0,
                i = void 0,
                j = void 0;if (f) {
              if (g = F(d, e), g === ja ? (j = !0, h = g.error, g.error = null) : i = !0, b === g) return void B(b, s());
            } else g = e, i = !0;b._state !== fa || (f && i ? y(b, g) : j ? B(b, h) : a === ga ? A(b, g) : a === ha && B(b, g));
          }function H(a, b) {
            try {
              b(function (b) {
                y(a, b);
              }, function (b) {
                B(a, b);
              });
            } catch (b) {
              B(a, b);
            }
          }function I() {
            return ka++;
          }function J(a) {
            a[ea] = ka++, a._state = void 0, a._result = void 0, a._subscribers = [];
          }function K(a, b) {
            this._instanceConstructor = a, this.promise = new a(q), this.promise[ea] || J(this.promise), U(b) ? (this.length = b.length, this._remaining = b.length, this._result = new Array(this.length), 0 === this.length ? A(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(b), 0 === this._remaining && A(this.promise, this._result))) : B(this.promise, L());
          }function L() {
            return new Error("Array Methods must be provided an Array");
          }function M(a) {
            return new K(this, a).promise;
          }function N(a) {
            var b = this;return new b(U(a) ? function (c, d) {
              for (var e = a.length, f = 0; f < e; f++) {
                b.resolve(a[f]).then(c, d);
              }
            } : function (a, b) {
              return b(new TypeError("You must pass an array to race."));
            });
          }function O(a) {
            var b = this,
                c = new b(q);return B(c, a), c;
          }function P() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
          }function Q() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
          }function R(a) {
            this[ea] = I(), this._result = this._state = void 0, this._subscribers = [], q !== a && ("function" != typeof a && P(), this instanceof R ? H(this, a) : Q());
          }function S() {
            var a = void 0;if (void 0 !== f) a = f;else if ("undefined" != typeof self) a = self;else try {
              a = Function("return this")();
            } catch (a) {
              throw new Error("polyfill failed because global object is unavailable in this environment");
            }var b = a.Promise;if (b) {
              var c = null;try {
                c = Object.prototype.toString.call(b.resolve());
              } catch (a) {}if ("[object Promise]" === c && !b.cast) return;
            }a.Promise = R;
          }var T = void 0;T = Array.isArray ? Array.isArray : function (a) {
            return "[object Array]" === Object.prototype.toString.call(a);
          };var U = T,
              V = 0,
              W = void 0,
              X = void 0,
              Y = function Y(a, b) {
            ca[V] = a, ca[V + 1] = b, 2 === (V += 2) && (X ? X(m) : da());
          },
              Z = "undefined" != typeof window ? window : void 0,
              $ = Z || {},
              _ = $.MutationObserver || $.WebKitMutationObserver,
              aa = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
              ba = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
              ca = new Array(1e3),
              da = void 0;da = aa ? h() : _ ? j() : ba ? k() : void 0 === Z && "function" == typeof b ? n() : l();var ea = Math.random().toString(36).substring(16),
              fa = void 0,
              ga = 1,
              ha = 2,
              ia = new E(),
              ja = new E(),
              ka = 0;return K.prototype._enumerate = function (a) {
            for (var b = 0; this._state === fa && b < a.length; b++) {
              this._eachEntry(a[b], b);
            }
          }, K.prototype._eachEntry = function (a, b) {
            var c = this._instanceConstructor,
                d = c.resolve;if (d === p) {
              var e = t(a);if (e === o && a._state !== fa) this._settledAt(a._state, b, a._result);else if ("function" != typeof e) this._remaining--, this._result[b] = a;else if (c === R) {
                var f = new c(q);x(f, a, e), this._willSettleAt(f, b);
              } else this._willSettleAt(new c(function (b) {
                return b(a);
              }), b);
            } else this._willSettleAt(d(a), b);
          }, K.prototype._settledAt = function (a, b, c) {
            var d = this.promise;d._state === fa && (this._remaining--, a === ha ? B(d, c) : this._result[b] = c), 0 === this._remaining && A(d, this._result);
          }, K.prototype._willSettleAt = function (a, b) {
            var c = this;C(a, void 0, function (a) {
              return c._settledAt(ga, b, a);
            }, function (a) {
              return c._settledAt(ha, b, a);
            });
          }, R.all = M, R.race = N, R.resolve = p, R.reject = O, R._setScheduler = d, R._setAsap = g, R._asap = Y, R.prototype = { constructor: R, then: o, catch: function _catch(a) {
              return this.then(null, a);
            } }, R.polyfill = S, R.Promise = R, R;
        });
      }).call(this, b("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, { _process: 11 }], 5: [function (b, c, d) {
      !function (b, e) {
        if ("function" == typeof a && a.amd) a(["exports", "module"], e);else if (void 0 !== d && void 0 !== c) e(d, c);else {
          var f = { exports: {} };e(f.exports, f), b.fetchJsonp = f.exports;
        }
      }(this, function (a, b) {
        "use strict";
        function c() {
          return "jsonp_" + Date.now() + "_" + Math.ceil(1e5 * Math.random());
        }function d(a) {
          try {
            delete window[a];
          } catch (b) {
            window[a] = void 0;
          }
        }function e(a) {
          var b = document.getElementById(a);b && document.getElementsByTagName("head")[0].removeChild(b);
        }function f(a) {
          var b = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
              f = a,
              h = b.timeout || g.timeout,
              i = b.jsonpCallback || g.jsonpCallback,
              j = void 0;return new Promise(function (g, k) {
            var l = b.jsonpCallbackFunction || c(),
                m = i + "_" + l;window[l] = function (a) {
              g({ ok: !0, json: function json() {
                  return Promise.resolve(a);
                } }), j && clearTimeout(j), e(m), d(l);
            }, f += -1 === f.indexOf("?") ? "?" : "&";var n = document.createElement("script");n.setAttribute("src", "" + f + i + "=" + l), b.charset && n.setAttribute("charset", b.charset), n.id = m, document.getElementsByTagName("head")[0].appendChild(n), j = setTimeout(function () {
              k(new Error("JSONP request to " + a + " timed out")), d(l), e(m), window[l] = function () {
                d(l);
              };
            }, h), n.onerror = function () {
              k(new Error("JSONP request to " + a + " failed")), d(l), e(m), j && clearTimeout(j);
            };
          });
        }var g = { timeout: 5e3, jsonpCallback: "callback", jsonpCallbackFunction: null };b.exports = f;
      });
    }, {}], 6: [function (b, c, d) {
      var e = e || function (a) {
        "use strict";
        if (!(void 0 === a || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
          var b = a.document,
              c = function c() {
            return a.URL || a.webkitURL || a;
          },
              d = b.createElementNS("http://www.w3.org/1999/xhtml", "a"),
              e = "download" in d,
              f = function f(a) {
            var b = new MouseEvent("click");a.dispatchEvent(b);
          },
              g = /constructor/i.test(a.HTMLElement) || a.safari,
              h = /CriOS\/[\d]+/.test(navigator.userAgent),
              i = function i(b) {
            (a.setImmediate || a.setTimeout)(function () {
              throw b;
            }, 0);
          },
              j = "application/octet-stream",
              k = 4e4,
              l = function l(a) {
            var b = function b() {
              "string" == typeof a ? c().revokeObjectURL(a) : a.remove();
            };setTimeout(b, k);
          },
              m = function m(a, b, c) {
            b = [].concat(b);for (var d = b.length; d--;) {
              var e = a["on" + b[d]];if ("function" == typeof e) try {
                e.call(a, c || a);
              } catch (a) {
                i(a);
              }
            }
          },
              n = function n(a) {
            return (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob([String.fromCharCode(65279), a], { type: a.type }) : a
            );
          },
              o = function o(b, i, k) {
            k || (b = n(b));var o,
                p = this,
                q = b.type,
                r = q === j,
                s = function s() {
              m(p, "writestart progress write writeend".split(" "));
            },
                t = function t() {
              if ((h || r && g) && a.FileReader) {
                var d = new FileReader();return d.onloadend = function () {
                  var b = h ? d.result : d.result.replace(/^data:[^;]*;/, "data:attachment/file;");a.open(b, "_blank") || (a.location.href = b), b = void 0, p.readyState = p.DONE, s();
                }, d.readAsDataURL(b), void (p.readyState = p.INIT);
              }if (o || (o = c().createObjectURL(b)), r) a.location.href = o;else {
                a.open(o, "_blank") || (a.location.href = o);
              }p.readyState = p.DONE, s(), l(o);
            };if (p.readyState = p.INIT, e) return o = c().createObjectURL(b), void setTimeout(function () {
              d.href = o, d.download = i, f(d), s(), l(o), p.readyState = p.DONE;
            });t();
          },
              p = o.prototype,
              q = function q(a, b, c) {
            return new o(a, b || a.name || "download", c);
          };return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function (a, b, c) {
            return b = b || a.name || "download", c || (a = n(a)), navigator.msSaveOrOpenBlob(a, b);
          } : (p.abort = function () {}, p.readyState = p.INIT = 0, p.WRITING = 1, p.DONE = 2, p.error = p.onwritestart = p.onprogress = p.onwrite = p.onabort = p.onerror = p.onwriteend = null, q);
        }
      }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);void 0 !== c && c.exports ? c.exports.saveAs = e : void 0 !== a && null !== a && null !== a.amd && a("FileSaver.js", function () {
        return e;
      });
    }, {}], 7: [function (a, b, c) {
      c.read = function (a, b, c, d, e) {
        var f,
            g,
            h = 8 * e - d - 1,
            i = (1 << h) - 1,
            j = i >> 1,
            k = -7,
            l = c ? e - 1 : 0,
            m = c ? -1 : 1,
            n = a[b + l];for (l += m, f = n & (1 << -k) - 1, n >>= -k, k += h; k > 0; f = 256 * f + a[b + l], l += m, k -= 8) {}for (g = f & (1 << -k) - 1, f >>= -k, k += d; k > 0; g = 256 * g + a[b + l], l += m, k -= 8) {}if (0 === f) f = 1 - j;else {
          if (f === i) return g ? NaN : 1 / 0 * (n ? -1 : 1);g += Math.pow(2, d), f -= j;
        }return (n ? -1 : 1) * g * Math.pow(2, f - d);
      }, c.write = function (a, b, c, d, e, f) {
        var g,
            h,
            i,
            j = 8 * f - e - 1,
            k = (1 << j) - 1,
            l = k >> 1,
            m = 23 === e ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            n = d ? 0 : f - 1,
            o = d ? 1 : -1,
            p = b < 0 || 0 === b && 1 / b < 0 ? 1 : 0;for (b = Math.abs(b), isNaN(b) || b === 1 / 0 ? (h = isNaN(b) ? 1 : 0, g = k) : (g = Math.floor(Math.log(b) / Math.LN2), b * (i = Math.pow(2, -g)) < 1 && (g--, i *= 2), b += g + l >= 1 ? m / i : m * Math.pow(2, 1 - l), b * i >= 2 && (g++, i /= 2), g + l >= k ? (h = 0, g = k) : g + l >= 1 ? (h = (b * i - 1) * Math.pow(2, e), g += l) : (h = b * Math.pow(2, l - 1) * Math.pow(2, e), g = 0)); e >= 8; a[c + n] = 255 & h, n += o, h /= 256, e -= 8) {}for (g = g << e | h, j += e; j > 0; a[c + n] = 255 & g, n += o, g /= 256, j -= 8) {}a[c + n - o] |= 128 * p;
      };
    }, {}], 8: [function (a, b, c) {
      var d = {}.toString;b.exports = Array.isArray || function (a) {
        return "[object Array]" == d.call(a);
      };
    }, {}], 9: [function (a, b, c) {
      "use strict";
      function d(a, b) {
        return a.b === b.b && a.a === b.a;
      }function e(a, b) {
        return a.b < b.b || a.b === b.b && a.a <= b.a;
      }function f(a, b, c) {
        var d = b.b - a.b,
            e = c.b - b.b;return 0 < d + e ? d < e ? b.a - a.a + d / (d + e) * (a.a - c.a) : b.a - c.a + e / (d + e) * (c.a - a.a) : 0;
      }function g(a, b, c) {
        var d = b.b - a.b,
            e = c.b - b.b;return 0 < d + e ? (b.a - c.a) * d + (b.a - a.a) * e : 0;
      }function h(a, b) {
        return a.a < b.a || a.a === b.a && a.b <= b.b;
      }function i(a, b, c) {
        var d = b.a - a.a,
            e = c.a - b.a;return 0 < d + e ? d < e ? b.b - a.b + d / (d + e) * (a.b - c.b) : b.b - c.b + e / (d + e) * (c.b - a.b) : 0;
      }function j(a, b, c) {
        var d = b.a - a.a,
            e = c.a - b.a;return 0 < d + e ? (b.b - c.b) * d + (b.b - a.b) * e : 0;
      }function k(a) {
        return e(a.b.a, a.a);
      }function l(a) {
        return e(a.a, a.b.a);
      }function m(a, b, c, d) {
        return a = 0 > a ? 0 : a, c = 0 > c ? 0 : c, a <= c ? 0 === c ? (b + d) / 2 : b + a / (a + c) * (d - b) : d + c / (a + c) * (b - d);
      }function n(a) {
        var b = s(a.b);return u(b, a.c), u(b.b, a.c), v(b, a.a), b;
      }function o(a, b) {
        var c = !1,
            d = !1;a !== b && (b.a !== a.a && (d = !0, x(b.a, a.a)), b.d !== a.d && (c = !0, y(b.d, a.d)), t(b, a), d || (u(b, a.a), a.a.c = a), c || (v(b, a.d), a.d.a = a));
      }function p(a) {
        var b = a.b,
            c = !1;a.d !== a.b.d && (c = !0, y(a.d, a.b.d)), a.c === a ? x(a.a, null) : (a.b.d.a = $(a), a.a.c = a.c, t(a, $(a)), c || v(a, a.d)), b.c === b ? (x(b.a, null), y(b.d, null)) : (a.d.a = $(b), b.a.c = b.c, t(b, $(b))), w(a);
      }function q(a) {
        var b = s(a),
            c = b.b;return t(b, a.e), b.a = a.b.a, u(c, b.a), b.d = c.d = a.d, b = b.b, t(a.b, $(a.b)), t(a.b, b), a.b.a = b.a, b.b.a.c = b.b, b.b.d = a.b.d, b.f = a.f, b.b.f = a.b.f, b;
      }function r(a, b) {
        var c = !1,
            d = s(a),
            e = d.b;return b.d !== a.d && (c = !0, y(b.d, a.d)), t(d, a.e), t(e, b), d.a = a.b.a, e.a = b.a, d.d = e.d = a.d, a.d.a = e, c || v(d, a.d), d;
      }function s(a) {
        var b = new Z(),
            c = new Z(),
            d = a.b.h;return c.h = d, d.b.h = b, b.h = a, a.b.h = c, b.b = c, b.c = b, b.e = c, c.b = b, c.c = c, c.e = b;
      }function t(a, b) {
        var c = a.c,
            d = b.c;c.b.e = b, d.b.e = a, a.c = d, b.c = c;
      }function u(a, b) {
        var c = b.f,
            d = new aa(b, c);c.e = d, b.f = d, c = d.c = a;do {
          c.a = d, c = c.c;
        } while (c !== a);
      }function v(a, b) {
        var c = b.d,
            d = new Y(b, c);c.b = d, b.d = d, d.a = a, d.c = b.c, c = a;do {
          c.d = d, c = c.e;
        } while (c !== a);
      }function w(a) {
        var b = a.h;a = a.b.h, b.b.h = a, a.b.h = b;
      }function x(a, b) {
        var c = a.c,
            d = c;do {
          d.a = b, d = d.c;
        } while (d !== c);c = a.f, d = a.e, d.f = c, c.e = d;
      }function y(a, b) {
        var c = a.a,
            d = c;do {
          d.d = b, d = d.e;
        } while (d !== c);c = a.d, d = a.b, d.d = c, c.b = d;
      }function z(a) {
        var b = 0;return Math.abs(a[1]) > Math.abs(a[0]) && (b = 1), Math.abs(a[2]) > Math.abs(a[b]) && (b = 2), b;
      }function A(a, b) {
        a.f += b.f, a.b.f += b.b.f;
      }function B(a, b, c) {
        return a = a.a, b = b.a, c = c.a, b.b.a === a ? c.b.a === a ? e(b.a, c.a) ? 0 >= g(c.b.a, b.a, c.a) : 0 <= g(b.b.a, c.a, b.a) : 0 >= g(c.b.a, a, c.a) : c.b.a === a ? 0 <= g(b.b.a, a, b.a) : (b = f(b.b.a, a, b.a), a = f(c.b.a, a, c.a), b >= a);
      }function C(a) {
        a.a.i = null;var b = a.e;b.a.c = b.c, b.c.a = b.a, a.e = null;
      }function D(a, b) {
        p(a.a), a.c = !1, a.a = b, b.i = a;
      }function E(a) {
        var b = a.a.a;do {
          a = oa(a);
        } while (a.a.a === b);return a.c && (b = r(na(a).a.b, a.a.e), D(a, b), a = oa(a)), a;
      }function F(a, b, c) {
        var d = new ma();return d.a = c, d.e = T(a.f, b.e, d), c.i = d;
      }function G(a, b) {
        switch (a.s) {case 100130:
            return 0 != (1 & b);case 100131:
            return 0 !== b;case 100132:
            return 0 < b;case 100133:
            return 0 > b;case 100134:
            return 2 <= b || -2 >= b;}return !1;
      }function H(a) {
        var b = a.a,
            c = b.d;c.c = a.d, c.a = b, C(a);
      }function I(a, b, c) {
        for (a = b, b = b.a; a !== c;) {
          a.c = !1;var d = na(a),
              e = d.a;if (e.a !== b.a) {
            if (!d.c) {
              H(a);break;
            }e = r(b.c.b, e.b), D(d, e);
          }b.c !== e && (o($(e), e), o(b, e)), H(a), b = d.a, a = d;
        }return b;
      }function J(a, b, c, d, e, f) {
        var g = !0;do {
          F(a, b, c.b), c = c.c;
        } while (c !== d);for (null === e && (e = na(b).a.b.c); d = na(b), c = d.a.b, c.a === e.a;) {
          c.c !== e && (o($(c), c), o($(e), c)), d.f = b.f - c.f, d.d = G(a, d.f), b.b = !0, !g && N(a, b) && (A(c, e), C(b), p(e)), g = !1, b = d, e = c;
        }b.b = !0, f && P(a, b);
      }function K(a, b, c, d, e) {
        var f = [b.g[0], b.g[1], b.g[2]];b.d = null, b.d = a.o ? a.o(f, c, d, a.c) || null : null, null === b.d && (e ? a.n || (X(a, 100156), a.n = !0) : b.d = c[0]);
      }function L(a, b, c) {
        var d = [null, null, null, null];d[0] = b.a.d, d[1] = c.a.d, K(a, b.a, d, [.5, .5, 0, 0], !1), o(b, c);
      }function M(a, b, c, d, e) {
        var f = Math.abs(b.b - a.b) + Math.abs(b.a - a.a),
            g = Math.abs(c.b - a.b) + Math.abs(c.a - a.a),
            h = e + 1;d[e] = .5 * g / (f + g), d[h] = .5 * f / (f + g), a.g[0] += d[e] * b.g[0] + d[h] * c.g[0], a.g[1] += d[e] * b.g[1] + d[h] * c.g[1], a.g[2] += d[e] * b.g[2] + d[h] * c.g[2];
      }function N(a, b) {
        var c = na(b),
            f = b.a,
            h = c.a;if (e(f.a, h.a)) {
          if (0 < g(h.b.a, f.a, h.a)) return !1;if (d(f.a, h.a)) {
            if (f.a !== h.a) {
              var c = a.e,
                  i = f.a.h;if (0 <= i) {
                var c = c.b,
                    j = c.d,
                    k = c.e,
                    l = c.c,
                    m = l[i];j[m] = j[c.a], l[j[m]] = m, m <= --c.a && (1 >= m ? ka(c, m) : e(k[j[m >> 1]], k[j[m]]) ? ka(c, m) : la(c, m)), k[i] = null, l[i] = c.b, c.b = i;
              } else for (c.c[-(i + 1)] = null; 0 < c.a && null === c.c[c.d[c.a - 1]];) {
                --c.a;
              }L(a, $(h), f);
            }
          } else q(h.b), o(f, $(h)), b.b = c.b = !0;
        } else {
          if (0 > g(f.b.a, h.a, f.a)) return !1;oa(b).b = b.b = !0, q(f.b), o($(h), f);
        }return !0;
      }function O(a, b) {
        var c = na(b),
            k = b.a,
            l = c.a,
            n = k.a,
            p = l.a,
            r = k.b.a,
            s = l.b.a,
            t = new aa();if (g(r, a.a, n), g(s, a.a, p), n === p || Math.min(n.a, r.a) > Math.max(p.a, s.a)) return !1;if (e(n, p)) {
          if (0 < g(s, n, p)) return !1;
        } else if (0 > g(r, p, n)) return !1;var u,
            v,
            w = r,
            x = n,
            y = s,
            z = p;if (e(w, x) || (u = w, w = x, x = u), e(y, z) || (u = y, y = z, z = u), e(w, y) || (u = w, w = y, y = u, u = x, x = z, z = u), e(y, x) ? e(x, z) ? (u = f(w, y, x), v = f(y, x, z), 0 > u + v && (u = -u, v = -v), t.b = m(u, y.b, v, x.b)) : (u = g(w, y, x), v = -g(w, z, x), 0 > u + v && (u = -u, v = -v), t.b = m(u, y.b, v, z.b)) : t.b = (y.b + x.b) / 2, h(w, x) || (u = w, w = x, x = u), h(y, z) || (u = y, y = z, z = u), h(w, y) || (u = w, w = y, y = u, u = x, x = z, z = u), h(y, x) ? h(x, z) ? (u = i(w, y, x), v = i(y, x, z), 0 > u + v && (u = -u, v = -v), t.a = m(u, y.a, v, x.a)) : (u = j(w, y, x), v = -j(w, z, x), 0 > u + v && (u = -u, v = -v), t.a = m(u, y.a, v, z.a)) : t.a = (y.a + x.a) / 2, e(t, a.a) && (t.b = a.a.b, t.a = a.a.a), w = e(n, p) ? n : p, e(w, t) && (t.b = w.b, t.a = w.a), d(t, n) || d(t, p)) return N(a, b), !1;if (!d(r, a.a) && 0 <= g(r, a.a, t) || !d(s, a.a) && 0 >= g(s, a.a, t)) {
          if (s === a.a) return q(k.b), o(l.b, k), b = E(b), k = na(b).a, I(a, na(b), c), J(a, b, $(k), k, k, !0), !0;if (r === a.a) {
            q(l.b), o(k.e, $(l)), n = c = b, p = n.a.b.a;do {
              n = oa(n);
            } while (n.a.b.a === p);return b = n, n = na(b).a.b.c, c.a = $(l), l = I(a, c, null), J(a, b, l.c, k.b.c, n, !0), !0;
          }return 0 <= g(r, a.a, t) && (oa(b).b = b.b = !0, q(k.b), k.a.b = a.a.b, k.a.a = a.a.a), 0 >= g(s, a.a, t) && (b.b = c.b = !0, q(l.b), l.a.b = a.a.b, l.a.a = a.a.a), !1;
        }return q(k.b), q(l.b), o($(l), k), k.a.b = t.b, k.a.a = t.a, k.a.h = da(a.e, k.a), k = k.a, l = [0, 0, 0, 0], t = [n.d, r.d, p.d, s.d], k.g[0] = k.g[1] = k.g[2] = 0, M(k, n, r, l, 0), M(k, p, s, l, 2), K(a, k, t, l, !0), oa(b).b = b.b = c.b = !0, !1;
      }function P(a, b) {
        for (var c = na(b);;) {
          for (; c.b;) {
            b = c, c = na(c);
          }if (!b.b && (c = b, null === (b = oa(b)) || !b.b)) break;b.b = !1;var d,
              f = b.a,
              h = c.a;if (d = f.b.a !== h.b.a) a: {
            d = b;var i = na(d),
                j = d.a,
                k = i.a,
                l = void 0;if (e(j.b.a, k.b.a)) {
              if (0 > g(j.b.a, k.b.a, j.a)) {
                d = !1;break a;
              }oa(d).b = d.b = !0, l = q(j), o(k.b, l), l.d.c = d.d;
            } else {
              if (0 < g(k.b.a, j.b.a, k.a)) {
                d = !1;break a;
              }d.b = i.b = !0, l = q(k), o(j.e, k.b), l.b.d.c = d.d;
            }d = !0;
          }if (d && (c.c ? (C(c), p(h), c = na(b), h = c.a) : b.c && (C(b), p(f), b = oa(c), f = b.a)), f.a !== h.a) if (f.b.a === h.b.a || b.c || c.c || f.b.a !== a.a && h.b.a !== a.a) N(a, b);else if (O(a, b)) break;f.a === h.a && f.b.a === h.b.a && (A(h, f), C(b), p(f), b = oa(c));
        }
      }function Q(a, b) {
        a.a = b;for (var c = b.c; null === c.i;) {
          if ((c = c.c) === b.c) {
            var c = a,
                f = b,
                h = new ma();h.a = f.c.b;var i = c.f,
                j = i.a;do {
              j = j.a;
            } while (null !== j.b && !i.c(i.b, h, j.b));var i = j.b,
                k = na(i),
                h = i.a,
                j = k.a;if (0 === g(h.b.a, f, h.a)) h = i.a, d(h.a, f) || d(h.b.a, f) || (q(h.b), i.c && (p(h.c), i.c = !1), o(f.c, h), Q(c, f));else {
              var l = e(j.b.a, h.b.a) ? i : k,
                  k = void 0;i.d || l.c ? (k = l === i ? r(f.c.b, h.e) : r(j.b.c.b, f.c).b, l.c ? D(l, k) : (h = c, i = F(c, i, k), i.f = oa(i).f + i.a.f, i.d = G(h, i.f)), Q(c, f)) : J(c, i, f.c, f.c, null, !0);
            }return;
          }
        }if (c = E(c.i), h = na(c), i = h.a, h = I(a, h, null), h.c === i) {
          var i = h,
              h = i.c,
              j = na(c),
              k = c.a,
              l = j.a,
              m = !1;k.b.a !== l.b.a && O(a, c), d(k.a, a.a) && (o($(h), k), c = E(c), h = na(c).a, I(a, na(c), j), m = !0), d(l.a, a.a) && (o(i, $(l)), i = I(a, j, null), m = !0), m ? J(a, c, i.c, h, h, !0) : (f = e(l.a, k.a) ? $(l) : k, f = r(i.c.b, f), J(a, c, f, f.c, f.c, !1), f.b.i.c = !0, P(a, c));
        } else J(a, c, h.c, i, i, !0);
      }function R(a, b) {
        var c = new ma(),
            d = n(a.b);d.a.b = qa, d.a.a = b, d.b.a.b = -qa, d.b.a.a = b, a.a = d.b.a, c.a = d, c.f = 0, c.d = !1, c.c = !1, c.h = !0, c.b = !1, d = a.f, d = T(d, d.a, c), c.e = d;
      }function S(a) {
        this.a = new U(), this.b = a, this.c = B;
      }function T(a, b, c) {
        do {
          b = b.c;
        } while (null !== b.b && !a.c(a.b, b.b, c));return a = new U(c, b.a, b), b.a.c = a, b.a = a;
      }function U(a, b, c) {
        this.b = a || null, this.a = b || this, this.c = c || this;
      }function V() {
        this.d = ra, this.p = this.b = this.q = null, this.j = [0, 0, 0], this.s = 100130, this.n = !1, this.o = this.a = this.e = this.f = null, this.m = !1, this.c = this.r = this.i = this.k = this.l = this.h = null;
      }function W(a, b) {
        if (a.d !== b) for (; a.d !== b;) {
          if (a.d < b) switch (a.d) {case ra:
              X(a, 100151), a.u(null);break;case 1:
              X(a, 100152), a.t();} else switch (a.d) {case 2:
              X(a, 100154), a.v();break;case 1:
              X(a, 100153), a.w();}
        }
      }function X(a, b) {
        a.p && a.p(b, a.c);
      }function Y(a, b) {
        this.b = a || this, this.d = b || this, this.a = null, this.c = !1;
      }function Z() {
        this.h = this, this.i = this.d = this.a = this.e = this.c = this.b = null, this.f = 0;
      }function $(a) {
        return a.b.e;
      }function _() {
        this.c = new aa(), this.a = new Y(), this.b = new Z(), this.d = new Z(), this.b.b = this.d, this.d.b = this.b;
      }function aa(a, b) {
        this.e = a || this, this.f = b || this, this.d = this.c = null, this.g = [0, 0, 0], this.h = this.a = this.b = 0;
      }function ba() {
        this.c = [], this.d = null, this.a = 0, this.e = !1, this.b = new fa();
      }function ca(a) {
        a.d = [];for (var b = 0; b < a.a; b++) {
          a.d[b] = b;
        }a.d.sort(function (a) {
          return function (b, c) {
            return e(a[b], a[c]) ? 1 : -1;
          };
        }(a.c)), a.e = !0, ha(a.b);
      }function da(a, b) {
        if (a.e) {
          var c = a.b,
              d = ++c.a;2 * d > c.f && (c.f *= 2, c.c = ga(c.c, c.f + 1));var e;return 0 === c.b ? e = d : (e = c.b, c.b = c.c[c.b]), c.e[e] = b, c.c[e] = d, c.d[d] = e, c.h && la(c, d), e;
        }return c = a.a++, a.c[c] = b, -(c + 1);
      }function ea(a) {
        if (0 === a.a) return ja(a.b);var b = a.c[a.d[a.a - 1]];if (0 !== a.b.a && e(ia(a.b), b)) return ja(a.b);do {
          --a.a;
        } while (0 < a.a && null === a.c[a.d[a.a - 1]]);return b;
      }function fa() {
        this.d = ga([0], 33), this.e = [null, null], this.c = [0, 0], this.a = 0, this.f = 32, this.b = 0, this.h = !1, this.d[1] = 1;
      }function ga(a, b) {
        for (var c = Array(b), d = 0; d < a.length; d++) {
          c[d] = a[d];
        }for (; d < b; d++) {
          c[d] = 0;
        }return c;
      }function ha(a) {
        for (var b = a.a; 1 <= b; --b) {
          ka(a, b);
        }a.h = !0;
      }function ia(a) {
        return a.e[a.d[1]];
      }function ja(a) {
        var b = a.d,
            c = a.e,
            d = a.c,
            e = b[1],
            f = c[e];return 0 < a.a && (b[1] = b[a.a], d[b[1]] = 1, c[e] = null, d[e] = a.b, a.b = e, 0 < --a.a && ka(a, 1)), f;
      }function ka(a, b) {
        for (var c = a.d, d = a.e, f = a.c, g = b, h = c[g];;) {
          var i = g << 1;i < a.a && e(d[c[i + 1]], d[c[i]]) && (i += 1);var j = c[i];if (i > a.a || e(d[h], d[j])) {
            c[g] = h, f[h] = g;break;
          }c[g] = j, f[j] = g, g = i;
        }
      }function la(a, b) {
        for (var c = a.d, d = a.e, f = a.c, g = b, h = c[g];;) {
          var i = g >> 1,
              j = c[i];if (0 === i || e(d[j], d[h])) {
            c[g] = h, f[h] = g;break;
          }c[g] = j, f[j] = g, g = i;
        }
      }function ma() {
        this.e = this.a = null, this.f = 0, this.c = this.b = this.h = this.d = !1;
      }function na(a) {
        return a.e.c.b;
      }function oa(a) {
        return a.e.a.b;
      }var pa,
          qa = 4e150,
          ra = 0;pa = V.prototype, pa.x = function () {
        W(this, ra);
      }, pa.B = function (a, b) {
        switch (a) {case 100142:
            return;case 100140:
            switch (b) {case 100130:case 100131:case 100132:case 100133:case 100134:
                return void (this.s = b);}break;case 100141:
            return void (this.m = !!b);default:
            return void X(this, 100900);}X(this, 100901);
      }, pa.y = function (a) {
        switch (a) {case 100142:
            return 0;case 100140:
            return this.s;case 100141:
            return this.m;default:
            X(this, 100900);}return !1;
      }, pa.A = function (a, b, c) {
        this.j[0] = a, this.j[1] = b, this.j[2] = c;
      }, pa.z = function (a, b) {
        var c = b || null;switch (a) {case 100100:case 100106:
            this.h = c;break;case 100104:case 100110:
            this.l = c;break;case 100101:case 100107:
            this.k = c;break;case 100102:case 100108:
            this.i = c;break;case 100103:case 100109:
            this.p = c;break;case 100105:case 100111:
            this.o = c;break;case 100112:
            this.r = c;break;default:
            X(this, 100900);}
      }, pa.C = function (a, b) {
        var c = !1,
            d = [0, 0, 0];W(this, 2);for (var e = 0; 3 > e; ++e) {
          var f = a[e];-1e150 > f && (f = -1e150, c = !0), 1e150 < f && (f = 1e150, c = !0), d[e] = f;
        }c && X(this, 100155), c = this.q, null === c ? (c = n(this.b), o(c, c.b)) : (q(c), c = c.e), c.a.d = b, c.a.g[0] = d[0], c.a.g[1] = d[1], c.a.g[2] = d[2], c.f = 1, c.b.f = -1, this.q = c;
      }, pa.u = function (a) {
        W(this, ra), this.d = 1, this.b = new _(), this.c = a;
      }, pa.t = function () {
        W(this, 1), this.d = 2, this.q = null;
      }, pa.v = function () {
        W(this, 2), this.d = 1;
      }, pa.w = function () {
        W(this, 1), this.d = ra;var a = this.j[0],
            b = this.j[1],
            c = this.j[2],
            f = !1,
            h = [a, b, c];if (0 === a && 0 === b && 0 === c) {
          for (var b = [-2e150, -2e150, -2e150], i = [2e150, 2e150, 2e150], c = [], j = [], f = this.b.c, a = f.e; a !== f; a = a.e) {
            for (var m = 0; 3 > m; ++m) {
              var n = a.g[m];n < i[m] && (i[m] = n, j[m] = a), n > b[m] && (b[m] = n, c[m] = a);
            }
          }if (a = 0, b[1] - i[1] > b[0] - i[0] && (a = 1), b[2] - i[2] > b[a] - i[a] && (a = 2), i[a] >= b[a]) h[0] = 0, h[1] = 0, h[2] = 1;else {
            for (b = 0, i = j[a], c = c[a], j = [0, 0, 0], i = [i.g[0] - c.g[0], i.g[1] - c.g[1], i.g[2] - c.g[2]], m = [0, 0, 0], a = f.e; a !== f; a = a.e) {
              m[0] = a.g[0] - c.g[0], m[1] = a.g[1] - c.g[1], m[2] = a.g[2] - c.g[2], j[0] = i[1] * m[2] - i[2] * m[1], j[1] = i[2] * m[0] - i[0] * m[2], j[2] = i[0] * m[1] - i[1] * m[0], (n = j[0] * j[0] + j[1] * j[1] + j[2] * j[2]) > b && (b = n, h[0] = j[0], h[1] = j[1], h[2] = j[2]);
            }0 >= b && (h[0] = h[1] = h[2] = 0, h[z(i)] = 1);
          }f = !0;
        }for (j = z(h), a = this.b.c, b = (j + 1) % 3, c = (j + 2) % 3, j = 0 < h[j] ? 1 : -1, h = a.e; h !== a; h = h.e) {
          h.b = h.g[b], h.a = j * h.g[c];
        }if (f) {
          for (h = 0, f = this.b.a, a = f.b; a !== f; a = a.b) {
            if (b = a.a, !(0 >= b.f)) do {
              h += (b.a.b - b.b.a.b) * (b.a.a + b.b.a.a), b = b.e;
            } while (b !== a.a);
          }if (0 > h) for (h = this.b.c, f = h.e; f !== h; f = f.e) {
            f.a = -f.a;
          }
        }for (this.n = !1, h = this.b.b, a = h.h; a !== h; a = f) {
          f = a.h, b = a.e, d(a.a, a.b.a) && a.e.e !== a && (L(this, b, a), p(a), a = b, b = a.e), b.e === a && (b !== a && (b !== f && b !== f.b || (f = f.h), p(b)), a !== f && a !== f.b || (f = f.h), p(a));
        }for (this.e = h = new ba(), f = this.b.c, a = f.e; a !== f; a = a.e) {
          a.h = da(h, a);
        }for (ca(h), this.f = new S(this), R(this, -qa), R(this, qa); null !== (h = ea(this.e));) {
          for (;;) {
            a: if (a = this.e, 0 === a.a) f = ia(a.b);else if (f = a.c[a.d[a.a - 1]], 0 !== a.b.a && (a = ia(a.b), e(a, f))) {
              f = a;break a;
            }if (null === f || !d(f, h)) break;f = ea(this.e), L(this, h.c, f.c);
          }Q(this, h);
        }for (this.a = this.f.a.a.b.a.a, h = 0; null !== (f = this.f.a.a.b);) {
          f.h || ++h, C(f);
        }for (this.f = null, h = this.e, h.b = null, h.d = null, this.e = h.c = null, h = this.b, a = h.a.b; a !== h.a; a = f) {
          f = a.b, a = a.a, a.e.e === a && (A(a.c, a), p(a));
        }if (!this.n) {
          if (h = this.b, this.m) for (a = h.b.h; a !== h.b; a = f) {
            f = a.h, a.b.d.c !== a.d.c ? a.f = a.d.c ? 1 : -1 : p(a);
          } else for (a = h.a.b; a !== h.a; a = f) {
            if (f = a.b, a.c) {
              for (a = a.a; e(a.b.a, a.a); a = a.c.b) {}for (; e(a.a, a.b.a); a = a.e) {}for (b = a.c.b, c = void 0; a.e !== b;) {
                if (e(a.b.a, b.a)) {
                  for (; b.e !== a && (k(b.e) || 0 >= g(b.a, b.b.a, b.e.b.a));) {
                    c = r(b.e, b), b = c.b;
                  }b = b.c.b;
                } else {
                  for (; b.e !== a && (l(a.c.b) || 0 <= g(a.b.a, a.a, a.c.b.a));) {
                    c = r(a, a.c.b), a = c.b;
                  }a = a.e;
                }
              }for (; b.e.e !== a;) {
                c = r(b.e, b), b = c.b;
              }
            }
          }if (this.h || this.i || this.k || this.l) if (this.m) {
            for (h = this.b, f = h.a.b; f !== h.a; f = f.b) {
              if (f.c) {
                this.h && this.h(2, this.c), a = f.a;do {
                  this.k && this.k(a.a.d, this.c), a = a.e;
                } while (a !== f.a);this.i && this.i(this.c);
              }
            }
          } else {
            for (h = this.b, f = !!this.l, a = !1, b = -1, c = h.a.d; c !== h.a; c = c.d) {
              if (c.c) {
                a || (this.h && this.h(4, this.c), a = !0), j = c.a;do {
                  f && (i = j.b.d.c ? 0 : 1, b !== i && (b = i, this.l && this.l(!!b, this.c))), this.k && this.k(j.a.d, this.c), j = j.e;
                } while (j !== c.a);
              }
            }a && this.i && this.i(this.c);
          }if (this.r) {
            for (h = this.b, a = h.a.b; a !== h.a; a = f) {
              if (f = a.b, !a.c) {
                b = a.a, c = b.e, j = void 0;do {
                  j = c, c = j.e, j.d = null, null === j.b.d && (j.c === j ? x(j.a, null) : (j.a.c = j.c, t(j, $(j))), i = j.b, i.c === i ? x(i.a, null) : (i.a.c = i.c, t(i, $(i))), w(j));
                } while (j !== b);b = a.d, a = a.b, a.d = b, b.b = a;
              }
            }return this.r(this.b), void (this.c = this.b = null);
          }
        }this.b = this.c = null;
      }, this.libtess = { GluTesselator: V, windingRule: { GLU_TESS_WINDING_ODD: 100130, GLU_TESS_WINDING_NONZERO: 100131, GLU_TESS_WINDING_POSITIVE: 100132, GLU_TESS_WINDING_NEGATIVE: 100133, GLU_TESS_WINDING_ABS_GEQ_TWO: 100134 }, primitiveType: { GL_LINE_LOOP: 2, GL_TRIANGLES: 4, GL_TRIANGLE_STRIP: 5, GL_TRIANGLE_FAN: 6 }, errorType: { GLU_TESS_MISSING_BEGIN_POLYGON: 100151, GLU_TESS_MISSING_END_POLYGON: 100153, GLU_TESS_MISSING_BEGIN_CONTOUR: 100152, GLU_TESS_MISSING_END_CONTOUR: 100154, GLU_TESS_COORD_TOO_LARGE: 100155, GLU_TESS_NEED_COMBINE_CALLBACK: 100156 }, gluEnum: { GLU_TESS_MESH: 100112, GLU_TESS_TOLERANCE: 100142, GLU_TESS_WINDING_RULE: 100140, GLU_TESS_BOUNDARY_ONLY: 100141, GLU_INVALID_ENUM: 100900, GLU_INVALID_VALUE: 100901, GLU_TESS_BEGIN: 100100, GLU_TESS_VERTEX: 100101, GLU_TESS_END: 100102, GLU_TESS_ERROR: 100103, GLU_TESS_EDGE_FLAG: 100104, GLU_TESS_COMBINE: 100105, GLU_TESS_BEGIN_DATA: 100106, GLU_TESS_VERTEX_DATA: 100107, GLU_TESS_END_DATA: 100108, GLU_TESS_ERROR_DATA: 100109, GLU_TESS_EDGE_FLAG_DATA: 100110, GLU_TESS_COMBINE_DATA: 100111 } }, V.prototype.gluDeleteTess = V.prototype.x, V.prototype.gluTessProperty = V.prototype.B, V.prototype.gluGetTessProperty = V.prototype.y, V.prototype.gluTessNormal = V.prototype.A, V.prototype.gluTessCallback = V.prototype.z, V.prototype.gluTessVertex = V.prototype.C, V.prototype.gluTessBeginPolygon = V.prototype.u, V.prototype.gluTessBeginContour = V.prototype.t, V.prototype.gluTessEndContour = V.prototype.v, V.prototype.gluTessEndPolygon = V.prototype.w, void 0 !== b && (b.exports = this.libtess);
    }, {}], 10: [function (b, c, d) {
      (function (e) {
        !function (b, e) {
          "object" == (typeof d === "undefined" ? "undefined" : _typeof(d)) && void 0 !== c ? e(d) : "function" == typeof a && a.amd ? a(["exports"], e) : e(b.opentype = {});
        }(this, function (a) {
          "use strict";
          function c() {
            this.table = new Uint16Array(16), this.trans = new Uint16Array(288);
          }function d(a, b) {
            this.source = a, this.sourceIndex = 0, this.tag = 0, this.bitcount = 0, this.dest = b, this.destLen = 0, this.ltree = new c(), this.dtree = new c();
          }function f(a, b, c, d) {
            var e, f;for (e = 0; e < c; ++e) {
              a[e] = 0;
            }for (e = 0; e < 30 - c; ++e) {
              a[e + c] = e / c | 0;
            }for (f = d, e = 0; e < 30; ++e) {
              b[e] = f, f += 1 << a[e];
            }
          }function g(a, b) {
            var c;for (c = 0; c < 7; ++c) {
              a.table[c] = 0;
            }for (a.table[7] = 24, a.table[8] = 152, a.table[9] = 112, c = 0; c < 24; ++c) {
              a.trans[c] = 256 + c;
            }for (c = 0; c < 144; ++c) {
              a.trans[24 + c] = c;
            }for (c = 0; c < 8; ++c) {
              a.trans[168 + c] = 280 + c;
            }for (c = 0; c < 112; ++c) {
              a.trans[176 + c] = 144 + c;
            }for (c = 0; c < 5; ++c) {
              b.table[c] = 0;
            }for (b.table[5] = 32, c = 0; c < 32; ++c) {
              b.trans[c] = c;
            }
          }function h(a, b, c, d) {
            var e, f;for (e = 0; e < 16; ++e) {
              a.table[e] = 0;
            }for (e = 0; e < d; ++e) {
              a.table[b[c + e]]++;
            }for (a.table[0] = 0, f = 0, e = 0; e < 16; ++e) {
              ve[e] = f, f += a.table[e];
            }for (e = 0; e < d; ++e) {
              b[c + e] && (a.trans[ve[b[c + e]]++] = e);
            }
          }function i(a) {
            a.bitcount-- || (a.tag = a.source[a.sourceIndex++], a.bitcount = 7);var b = 1 & a.tag;return a.tag >>>= 1, b;
          }function j(a, b, c) {
            if (!b) return c;for (; a.bitcount < 24;) {
              a.tag |= a.source[a.sourceIndex++] << a.bitcount, a.bitcount += 8;
            }var d = a.tag & 65535 >>> 16 - b;return a.tag >>>= b, a.bitcount -= b, d + c;
          }function k(a, b) {
            for (; a.bitcount < 24;) {
              a.tag |= a.source[a.sourceIndex++] << a.bitcount, a.bitcount += 8;
            }var c = 0,
                d = 0,
                e = 0,
                f = a.tag;do {
              d = 2 * d + (1 & f), f >>>= 1, ++e, c += b.table[e], d -= b.table[e];
            } while (d >= 0);return a.tag = f, a.bitcount -= e, b.trans[c + d];
          }function l(a, b, c) {
            var d, e, f, g, i, l;for (d = j(a, 5, 257), e = j(a, 5, 1), f = j(a, 4, 4), g = 0; g < 19; ++g) {
              ue[g] = 0;
            }for (g = 0; g < f; ++g) {
              var m = j(a, 3, 0);ue[se[g]] = m;
            }for (h(te, ue, 0, 19), i = 0; i < d + e;) {
              var n = k(a, te);switch (n) {case 16:
                  var o = ue[i - 1];for (l = j(a, 2, 3); l; --l) {
                    ue[i++] = o;
                  }break;case 17:
                  for (l = j(a, 3, 3); l; --l) {
                    ue[i++] = 0;
                  }break;case 18:
                  for (l = j(a, 7, 11); l; --l) {
                    ue[i++] = 0;
                  }break;default:
                  ue[i++] = n;}
            }h(b, ue, 0, d), h(c, ue, d, e);
          }function m(a, b, c) {
            for (;;) {
              var d = k(a, b);if (256 === d) return ke;if (d < 256) a.dest[a.destLen++] = d;else {
                var e, f, g, h;for (d -= 257, e = j(a, oe[d], pe[d]), f = k(a, c), g = a.destLen - j(a, qe[f], re[f]), h = g; h < g + e; ++h) {
                  a.dest[a.destLen++] = a.dest[h];
                }
              }
            }
          }function n(a) {
            for (var b, c, d; a.bitcount > 8;) {
              a.sourceIndex--, a.bitcount -= 8;
            }if (b = a.source[a.sourceIndex + 1], b = 256 * b + a.source[a.sourceIndex], c = a.source[a.sourceIndex + 3], c = 256 * c + a.source[a.sourceIndex + 2], b !== (65535 & ~c)) return le;for (a.sourceIndex += 4, d = b; d; --d) {
              a.dest[a.destLen++] = a.source[a.sourceIndex++];
            }return a.bitcount = 0, ke;
          }function o(a, b) {
            var c,
                e,
                f = new d(a, b);do {
              switch (c = i(f), j(f, 2, 0)) {case 0:
                  e = n(f);break;case 1:
                  e = m(f, me, ne);break;case 2:
                  l(f, f.ltree, f.dtree), e = m(f, f.ltree, f.dtree);break;default:
                  e = le;}if (e !== ke) throw new Error("Data error");
            } while (!c);return f.destLen < f.dest.length ? "function" == typeof f.dest.slice ? f.dest.slice(0, f.destLen) : f.dest.subarray(0, f.destLen) : f.dest;
          }function p(a, b, c, d, e) {
            return Math.pow(1 - e, 3) * a + 3 * Math.pow(1 - e, 2) * e * b + 3 * (1 - e) * Math.pow(e, 2) * c + Math.pow(e, 3) * d;
          }function q() {
            this.x1 = Number.NaN, this.y1 = Number.NaN, this.x2 = Number.NaN, this.y2 = Number.NaN;
          }function r() {
            this.commands = [], this.fill = "black", this.stroke = null, this.strokeWidth = 1;
          }function s(a) {
            throw new Error(a);
          }function t(a, b) {
            a || s(b);
          }function u(a) {
            return function () {
              return a;
            };
          }function v(a) {
            return a >= -128 && a <= 127;
          }function w(a, b, c) {
            for (var d = 0, e = a.length; b < e && d < 64 && 0 === a[b];) {
              ++b, ++d;
            }return c.push(128 | d - 1), b;
          }function x(a, b, c) {
            for (var d = 0, e = a.length, f = b; f < e && d < 64;) {
              var g = a[f];if (!v(g)) break;if (0 === g && f + 1 < e && 0 === a[f + 1]) break;++f, ++d;
            }c.push(d - 1);for (var h = b; h < f; ++h) {
              c.push(a[h] + 256 & 255);
            }return f;
          }function y(a, b, c) {
            for (var d = 0, e = a.length, f = b; f < e && d < 64;) {
              var g = a[f];if (0 === g) break;if (v(g) && f + 1 < e && v(a[f + 1])) break;++f, ++d;
            }c.push(64 | d - 1);for (var h = b; h < f; ++h) {
              var i = a[h];c.push(i + 65536 >> 8 & 255, i + 256 & 255);
            }return f;
          }function z(a, b, c) {
            for (var d = this, e = 0; e < b.length; e += 1) {
              var f = b[e];d[f.name] = f.value;
            }if (this.tableName = a, this.fields = b, c) for (var g = Object.keys(c), h = 0; h < g.length; h += 1) {
              var i = g[h],
                  j = c[i];void 0 !== d[i] && (d[i] = j);
            }
          }function A(a, b, c) {
            void 0 === c && (c = b.length);var d = new Array(b.length + 1);d[0] = { name: a + "Count", type: "USHORT", value: c };for (var e = 0; e < b.length; e++) {
              d[e + 1] = { name: a + e, type: "USHORT", value: b[e] };
            }return d;
          }function B(a, b, c) {
            var d = b.length,
                e = new Array(d + 1);e[0] = { name: a + "Count", type: "USHORT", value: d };for (var f = 0; f < d; f++) {
              e[f + 1] = { name: a + f, type: "TABLE", value: c(b[f], f) };
            }return e;
          }function C(a, b, c) {
            var d = b.length,
                e = [];e[0] = { name: a + "Count", type: "USHORT", value: d };for (var f = 0; f < d; f++) {
              e = e.concat(c(b[f], f));
            }return e;
          }function D(a) {
            1 === a.format ? z.call(this, "coverageTable", [{ name: "coverageFormat", type: "USHORT", value: 1 }].concat(A("glyph", a.glyphs))) : xe.assert(!1, "Can't create coverage table format 2 yet.");
          }function E(a) {
            z.call(this, "scriptListTable", C("scriptRecord", a, function (a, b) {
              var c = a.script,
                  d = c.defaultLangSys;return xe.assert(!!d, "Unable to write GSUB: script " + a.tag + " has no default language system."), [{ name: "scriptTag" + b, type: "TAG", value: a.tag }, { name: "script" + b, type: "TABLE", value: new z("scriptTable", [{ name: "defaultLangSys", type: "TABLE", value: new z("defaultLangSys", [{ name: "lookupOrder", type: "USHORT", value: 0 }, { name: "reqFeatureIndex", type: "USHORT", value: d.reqFeatureIndex }].concat(A("featureIndex", d.featureIndexes))) }].concat(C("langSys", c.langSysRecords, function (a, b) {
                  var c = a.langSys;return [{ name: "langSysTag" + b, type: "TAG", value: a.tag }, { name: "langSys" + b, type: "TABLE", value: new z("langSys", [{ name: "lookupOrder", type: "USHORT", value: 0 }, { name: "reqFeatureIndex", type: "USHORT", value: c.reqFeatureIndex }].concat(A("featureIndex", c.featureIndexes))) }];
                }))) }];
            }));
          }function F(a) {
            z.call(this, "featureListTable", C("featureRecord", a, function (a, b) {
              var c = a.feature;return [{ name: "featureTag" + b, type: "TAG", value: a.tag }, { name: "feature" + b, type: "TABLE", value: new z("featureTable", [{ name: "featureParams", type: "USHORT", value: c.featureParams }].concat(A("lookupListIndex", c.lookupListIndexes))) }];
            }));
          }function G(a, b) {
            z.call(this, "lookupListTable", B("lookup", a, function (a) {
              var c = b[a.lookupType];return xe.assert(!!c, "Unable to write GSUB lookup type " + a.lookupType + " tables."), new z("lookupTable", [{ name: "lookupType", type: "USHORT", value: a.lookupType }, { name: "lookupFlag", type: "USHORT", value: a.lookupFlag }].concat(B("subtable", a.subtables, c)));
            }));
          }function H(a, b) {
            return a.getUint8(b);
          }function I(a, b) {
            return a.getUint16(b, !1);
          }function J(a, b) {
            return a.getInt16(b, !1);
          }function K(a, b) {
            return a.getUint32(b, !1);
          }function L(a, b) {
            return a.getInt16(b, !1) + a.getUint16(b + 2, !1) / 65535;
          }function M(a, b) {
            for (var c = "", d = b; d < b + 4; d += 1) {
              c += String.fromCharCode(a.getInt8(d));
            }return c;
          }function N(a, b, c) {
            for (var d = 0, e = 0; e < c; e += 1) {
              d <<= 8, d += a.getUint8(b + e);
            }return d;
          }function O(a, b, c) {
            for (var d = [], e = b; e < c; e += 1) {
              d.push(a.getUint8(e));
            }return d;
          }function P(a) {
            for (var b = "", c = 0; c < a.length; c += 1) {
              b += String.fromCharCode(a[c]);
            }return b;
          }function Q(a, b) {
            this.data = a, this.offset = b, this.relativeOffset = 0;
          }function R(a, b) {
            b.parseUShort(), a.length = b.parseULong(), a.language = b.parseULong();var c;a.groupCount = c = b.parseULong(), a.glyphIndexMap = {};for (var d = 0; d < c; d += 1) {
              for (var e = b.parseULong(), f = b.parseULong(), g = b.parseULong(), h = e; h <= f; h += 1) {
                a.glyphIndexMap[h] = g, g++;
              }
            }
          }function S(a, b, c, d, e) {
            a.length = b.parseUShort(), a.language = b.parseUShort();var f;a.segCount = f = b.parseUShort() >> 1, b.skip("uShort", 3), a.glyphIndexMap = {};for (var g = new Le.Parser(c, d + e + 14), h = new Le.Parser(c, d + e + 16 + 2 * f), i = new Le.Parser(c, d + e + 16 + 4 * f), j = new Le.Parser(c, d + e + 16 + 6 * f), k = d + e + 16 + 8 * f, l = 0; l < f - 1; l += 1) {
              for (var m = void 0, n = g.parseUShort(), o = h.parseUShort(), p = i.parseShort(), q = j.parseUShort(), r = o; r <= n; r += 1) {
                0 !== q ? (k = j.offset + j.relativeOffset - 2, k += q, k += 2 * (r - o), 0 !== (m = Le.getUShort(c, k)) && (m = m + p & 65535)) : m = r + p & 65535, a.glyphIndexMap[r] = m;
              }
            }
          }function T(a, b) {
            var c = {};c.version = Le.getUShort(a, b), xe.argument(0 === c.version, "cmap table version should be 0."), c.numTables = Le.getUShort(a, b + 2);for (var d = -1, e = c.numTables - 1; e >= 0; e -= 1) {
              var f = Le.getUShort(a, b + 4 + 8 * e),
                  g = Le.getUShort(a, b + 4 + 8 * e + 2);if (3 === f && (0 === g || 1 === g || 10 === g) || 0 === f && (0 === g || 1 === g || 2 === g || 3 === g || 4 === g)) {
                d = Le.getULong(a, b + 4 + 8 * e + 4);break;
              }
            }if (-1 === d) throw new Error("No valid cmap sub-tables found.");var h = new Le.Parser(a, b + d);if (c.format = h.parseUShort(), 12 === c.format) R(c, h);else {
              if (4 !== c.format) throw new Error("Only format 4 and 12 cmap tables are supported (found format " + c.format + ").");S(c, h, a, b, d);
            }return c;
          }function U(a, b, c) {
            a.segments.push({ end: b, start: b, delta: -(b - c), offset: 0, glyphIndex: c });
          }function V(a) {
            a.segments.push({ end: 65535, start: 65535, delta: 1, offset: 0 });
          }function W(a) {
            var b,
                c = !0;for (b = a.length - 1; b > 0; b -= 1) {
              if (a.get(b).unicode > 65535) {
                console.log("Adding CMAP format 12 (needed!)"), c = !1;break;
              }
            }var d = [{ name: "version", type: "USHORT", value: 0 }, { name: "numTables", type: "USHORT", value: c ? 1 : 2 }, { name: "platformID", type: "USHORT", value: 3 }, { name: "encodingID", type: "USHORT", value: 1 }, { name: "offset", type: "ULONG", value: c ? 12 : 20 }];c || (d = d.concat([{ name: "cmap12PlatformID", type: "USHORT", value: 3 }, { name: "cmap12EncodingID", type: "USHORT", value: 10 }, { name: "cmap12Offset", type: "ULONG", value: 0 }])), d = d.concat([{ name: "format", type: "USHORT", value: 4 }, { name: "cmap4Length", type: "USHORT", value: 0 }, { name: "language", type: "USHORT", value: 0 }, { name: "segCountX2", type: "USHORT", value: 0 }, { name: "searchRange", type: "USHORT", value: 0 }, { name: "entrySelector", type: "USHORT", value: 0 }, { name: "rangeShift", type: "USHORT", value: 0 }]);var e = new Ie.Table("cmap", d);for (e.segments = [], b = 0; b < a.length; b += 1) {
              for (var f = a.get(b), g = 0; g < f.unicodes.length; g += 1) {
                U(e, f.unicodes[g], b);
              }e.segments = e.segments.sort(function (a, b) {
                return a.start - b.start;
              });
            }V(e);var h = e.segments.length,
                i = 0,
                j = [],
                k = [],
                l = [],
                m = [],
                n = [],
                o = [];for (b = 0; b < h; b += 1) {
              var p = e.segments[b];p.end <= 65535 && p.start <= 65535 ? (j = j.concat({ name: "end_" + b, type: "USHORT", value: p.end }), k = k.concat({ name: "start_" + b, type: "USHORT", value: p.start }), l = l.concat({ name: "idDelta_" + b, type: "SHORT", value: p.delta }), m = m.concat({ name: "idRangeOffset_" + b, type: "USHORT", value: p.offset }), void 0 !== p.glyphId && (n = n.concat({ name: "glyph_" + b, type: "USHORT", value: p.glyphId }))) : i += 1, c || void 0 === p.glyphIndex || (o = o.concat({ name: "cmap12Start_" + b, type: "ULONG", value: p.start }), o = o.concat({ name: "cmap12End_" + b, type: "ULONG", value: p.end }), o = o.concat({ name: "cmap12Glyph_" + b, type: "ULONG", value: p.glyphIndex }));
            }if (e.segCountX2 = 2 * (h - i), e.searchRange = 2 * Math.pow(2, Math.floor(Math.log(h - i) / Math.log(2))), e.entrySelector = Math.log(e.searchRange / 2) / Math.log(2), e.rangeShift = e.segCountX2 - e.searchRange, e.fields = e.fields.concat(j), e.fields.push({ name: "reservedPad", type: "USHORT", value: 0 }), e.fields = e.fields.concat(k), e.fields = e.fields.concat(l), e.fields = e.fields.concat(m), e.fields = e.fields.concat(n), e.cmap4Length = 14 + 2 * j.length + 2 + 2 * k.length + 2 * l.length + 2 * m.length + 2 * n.length, !c) {
              var q = 16 + 4 * o.length;e.cmap12Offset = 20 + e.cmap4Length, e.fields = e.fields.concat([{ name: "cmap12Format", type: "USHORT", value: 12 }, { name: "cmap12Reserved", type: "USHORT", value: 0 }, { name: "cmap12Length", type: "ULONG", value: q }, { name: "cmap12Language", type: "ULONG", value: 0 }, { name: "cmap12nGroups", type: "ULONG", value: o.length / 3 }]), e.fields = e.fields.concat(o);
            }return e;
          }function X(a) {
            this.font = a;
          }function Y(a) {
            this.cmap = a;
          }function Z(a, b) {
            this.encoding = a, this.charset = b;
          }function $(a) {
            var b = this;switch (a.version) {case 1:
                this.names = Qe.slice();break;case 2:
                this.names = new Array(a.numberOfGlyphs);for (var c = 0; c < a.numberOfGlyphs; c++) {
                  a.glyphNameIndex[c] < Qe.length ? b.names[c] = Qe[a.glyphNameIndex[c]] : b.names[c] = a.names[a.glyphNameIndex[c] - Qe.length];
                }break;case 2.5:
                this.names = new Array(a.numberOfGlyphs);for (var d = 0; d < a.numberOfGlyphs; d++) {
                  b.names[d] = Qe[d + a.glyphNameIndex[d]];
                }break;case 3:default:
                this.names = [];}
          }function _(a) {
            for (var b, c = a.tables.cmap.glyphIndexMap, d = Object.keys(c), e = 0; e < d.length; e += 1) {
              var f = d[e],
                  g = c[f];b = a.glyphs.get(g), b.addUnicode(parseInt(f));
            }for (var h = 0; h < a.glyphs.length; h += 1) {
              b = a.glyphs.get(h), a.cffEncoding ? a.isCIDFont ? b.name = "gid" + h : b.name = a.cffEncoding.charset[h] : a.glyphNames.names && (b.name = a.glyphNames.glyphIndexToName(h));
            }
          }function aa(a, b, c, d, e) {
            a.beginPath(), a.moveTo(b, c), a.lineTo(d, e), a.stroke();
          }function ba(a, b) {
            var c = b || new r();return { configurable: !0, get: function get() {
                return "function" == typeof c && (c = c()), c;
              }, set: function set(a) {
                c = a;
              } };
          }function ca(a) {
            this.bindConstructorValues(a);
          }function da(a, b, c) {
            Object.defineProperty(a, b, { get: function get() {
                return a.path, a[c];
              }, set: function set(b) {
                a[c] = b;
              }, enumerable: !0, configurable: !0 });
          }function ea(a, b) {
            var c = this;if (this.font = a, this.glyphs = {}, Array.isArray(b)) for (var d = 0; d < b.length; d++) {
              c.glyphs[d] = b[d];
            }this.length = b && b.length || 0;
          }function fa(a, b) {
            return new ca({ index: b, font: a });
          }function ga(a, b, c, d, e, f) {
            return function () {
              var g = new ca({ index: b, font: a });return g.path = function () {
                c(g, d, e);var b = f(a.glyphs, g);return b.unitsPerEm = a.unitsPerEm, b;
              }, da(g, "xMin", "_xMin"), da(g, "xMax", "_xMax"), da(g, "yMin", "_yMin"), da(g, "yMax", "_yMax"), g;
            };
          }function ha(a, b, c, d) {
            return function () {
              var e = new ca({ index: b, font: a });return e.path = function () {
                var b = c(a, e, d);return b.unitsPerEm = a.unitsPerEm, b;
              }, e;
            };
          }function ia(a, b) {
            if (a === b) return !0;if (Array.isArray(a) && Array.isArray(b)) {
              if (a.length !== b.length) return !1;for (var c = 0; c < a.length; c += 1) {
                if (!ia(a[c], b[c])) return !1;
              }return !0;
            }return !1;
          }function ja(a) {
            return a.length < 1240 ? 107 : a.length < 33900 ? 1131 : 32768;
          }function ka(a, b, c) {
            var d,
                e,
                f = [],
                g = [],
                h = Le.getCard16(a, b);if (0 !== h) {
              var i = Le.getByte(a, b + 2);d = b + (h + 1) * i + 2;for (var j = b + 3, k = 0; k < h + 1; k += 1) {
                f.push(Le.getOffset(a, j, i)), j += i;
              }e = d + f[h];
            } else e = b + 2;for (var l = 0; l < f.length - 1; l += 1) {
              var m = Le.getBytes(a, d + f[l], d + f[l + 1]);c && (m = c(m)), g.push(m);
            }return { objects: g, startOffset: b, endOffset: e };
          }function la(a) {
            for (var b = "", c = 15, d = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "E", "E-", null, "-"];;) {
              var e = a.parseByte(),
                  f = e >> 4,
                  g = 15 & e;if (f === c) break;if (b += d[f], g === c) break;b += d[g];
            }return parseFloat(b);
          }function ma(a, b) {
            var c, d, e, f;if (28 === b) return c = a.parseByte(), d = a.parseByte(), c << 8 | d;if (29 === b) return c = a.parseByte(), d = a.parseByte(), e = a.parseByte(), f = a.parseByte(), c << 24 | d << 16 | e << 8 | f;if (30 === b) return la(a);if (b >= 32 && b <= 246) return b - 139;if (b >= 247 && b <= 250) return c = a.parseByte(), 256 * (b - 247) + c + 108;if (b >= 251 && b <= 254) return c = a.parseByte(), 256 * -(b - 251) - c - 108;throw new Error("Invalid b0 " + b);
          }function na(a) {
            for (var b = {}, c = 0; c < a.length; c += 1) {
              var d = a[c][0],
                  e = a[c][1],
                  f = void 0;if (f = 1 === e.length ? e[0] : e, b.hasOwnProperty(d) && !isNaN(b[d])) throw new Error("Object " + b + " already has key " + d);b[d] = f;
            }return b;
          }function oa(a, b, c) {
            b = void 0 !== b ? b : 0;var d = new Le.Parser(a, b),
                e = [],
                f = [];for (c = void 0 !== c ? c : a.length; d.relativeOffset < c;) {
              var g = d.parseByte();g <= 21 ? (12 === g && (g = 1200 + d.parseByte()), e.push([g, f]), f = []) : f.push(ma(d, g));
            }return na(e);
          }function pa(a, b) {
            return b = b <= 390 ? Ne[b] : a[b - 391];
          }function qa(a, b, c) {
            for (var d, e = {}, f = 0; f < b.length; f += 1) {
              var g = b[f];if (Array.isArray(g.type)) {
                var h = [];h.length = g.type.length;for (var i = 0; i < g.type.length; i++) {
                  d = void 0 !== a[g.op] ? a[g.op][i] : void 0, void 0 === d && (d = void 0 !== g.value && void 0 !== g.value[i] ? g.value[i] : null), "SID" === g.type[i] && (d = pa(c, d)), h[i] = d;
                }e[g.name] = h;
              } else d = a[g.op], void 0 === d && (d = void 0 !== g.value ? g.value : null), "SID" === g.type && (d = pa(c, d)), e[g.name] = d;
            }return e;
          }function ra(a, b) {
            var c = {};return c.formatMajor = Le.getCard8(a, b), c.formatMinor = Le.getCard8(a, b + 1), c.size = Le.getCard8(a, b + 2), c.offsetSize = Le.getCard8(a, b + 3), c.startOffset = b, c.endOffset = b + 4, c;
          }function sa(a, b) {
            return qa(oa(a, 0, a.byteLength), Te, b);
          }function ta(a, b, c, d) {
            return qa(oa(a, b, c), Ue, d);
          }function ua(a, b, c, d) {
            for (var e = [], f = 0; f < c.length; f += 1) {
              var g = new DataView(new Uint8Array(c[f]).buffer),
                  h = sa(g, d);h._subrs = [], h._subrsBias = 0;var i = h.private[0],
                  j = h.private[1];if (0 !== i && 0 !== j) {
                var k = ta(a, j + b, i, d);if (h._defaultWidthX = k.defaultWidthX, h._nominalWidthX = k.nominalWidthX, 0 !== k.subrs) {
                  var l = j + k.subrs,
                      m = ka(a, l + b);h._subrs = m.objects, h._subrsBias = ja(h._subrs);
                }h._privateDict = k;
              }e.push(h);
            }return e;
          }function va(a, b, c, d) {
            var e,
                f,
                g = new Le.Parser(a, b);c -= 1;var h = [".notdef"],
                i = g.parseCard8();if (0 === i) for (var j = 0; j < c; j += 1) {
              e = g.parseSID(), h.push(pa(d, e));
            } else if (1 === i) for (; h.length <= c;) {
              e = g.parseSID(), f = g.parseCard8();for (var k = 0; k <= f; k += 1) {
                h.push(pa(d, e)), e += 1;
              }
            } else {
              if (2 !== i) throw new Error("Unknown charset format " + i);for (; h.length <= c;) {
                e = g.parseSID(), f = g.parseCard16();for (var l = 0; l <= f; l += 1) {
                  h.push(pa(d, e)), e += 1;
                }
              }
            }return h;
          }function wa(a, b, c) {
            var d,
                e = {},
                f = new Le.Parser(a, b),
                g = f.parseCard8();if (0 === g) for (var h = f.parseCard8(), i = 0; i < h; i += 1) {
              d = f.parseCard8(), e[d] = i;
            } else {
              if (1 !== g) throw new Error("Unknown encoding format " + g);var j = f.parseCard8();d = 1;for (var k = 0; k < j; k += 1) {
                for (var l = f.parseCard8(), m = f.parseCard8(), n = l; n <= l + m; n += 1) {
                  e[n] = d, d += 1;
                }
              }
            }return new Z(e, c);
          }function xa(a, b, c) {
            function d(a, b) {
              t && o.closePath(), o.moveTo(a, b), t = !0;
            }function e() {
              var a;a = p.length % 2 != 0, a && !s && (y = p.shift() + n), q += p.length >> 1, p.length = 0, s = !0;
            }function f(c) {
              for (var m, r, w, x, z, A, B, C, D, E, F, G, H = 0; H < c.length;) {
                var I = c[H];switch (H += 1, I) {case 1:case 3:
                    e();break;case 4:
                    p.length > 1 && !s && (y = p.shift() + n, s = !0), v += p.pop(), d(u, v);break;case 5:
                    for (; p.length > 0;) {
                      u += p.shift(), v += p.shift(), o.lineTo(u, v);
                    }break;case 6:
                    for (; p.length > 0 && (u += p.shift(), o.lineTo(u, v), 0 !== p.length);) {
                      v += p.shift(), o.lineTo(u, v);
                    }break;case 7:
                    for (; p.length > 0 && (v += p.shift(), o.lineTo(u, v), 0 !== p.length);) {
                      u += p.shift(), o.lineTo(u, v);
                    }break;case 8:
                    for (; p.length > 0;) {
                      g = u + p.shift(), h = v + p.shift(), i = g + p.shift(), j = h + p.shift(), u = i + p.shift(), v = j + p.shift(), o.curveTo(g, h, i, j, u, v);
                    }break;case 10:
                    z = p.pop() + l, A = k[z], A && f(A);break;case 11:
                    return;case 12:
                    switch (I = c[H], H += 1, I) {case 35:
                        g = u + p.shift(), h = v + p.shift(), i = g + p.shift(), j = h + p.shift(), B = i + p.shift(), C = j + p.shift(), D = B + p.shift(), E = C + p.shift(), F = D + p.shift(), G = E + p.shift(), u = F + p.shift(), v = G + p.shift(), p.shift(), o.curveTo(g, h, i, j, B, C), o.curveTo(D, E, F, G, u, v);break;case 34:
                        g = u + p.shift(), h = v, i = g + p.shift(), j = h + p.shift(), B = i + p.shift(), C = j, D = B + p.shift(), E = j, F = D + p.shift(), G = v, u = F + p.shift(), o.curveTo(g, h, i, j, B, C), o.curveTo(D, E, F, G, u, v);break;case 36:
                        g = u + p.shift(), h = v + p.shift(), i = g + p.shift(), j = h + p.shift(), B = i + p.shift(), C = j, D = B + p.shift(), E = j, F = D + p.shift(), G = E + p.shift(), u = F + p.shift(), o.curveTo(g, h, i, j, B, C), o.curveTo(D, E, F, G, u, v);break;case 37:
                        g = u + p.shift(), h = v + p.shift(), i = g + p.shift(), j = h + p.shift(), B = i + p.shift(), C = j + p.shift(), D = B + p.shift(), E = C + p.shift(), F = D + p.shift(), G = E + p.shift(), Math.abs(F - u) > Math.abs(G - v) ? u = F + p.shift() : v = G + p.shift(), o.curveTo(g, h, i, j, B, C), o.curveTo(D, E, F, G, u, v);break;default:
                        console.log("Glyph " + b.index + ": unknown operator 1200" + I), p.length = 0;}break;case 14:
                    p.length > 0 && !s && (y = p.shift() + n, s = !0), t && (o.closePath(), t = !1);break;case 18:
                    e();break;case 19:case 20:
                    e(), H += q + 7 >> 3;break;case 21:
                    p.length > 2 && !s && (y = p.shift() + n, s = !0), v += p.pop(), u += p.pop(), d(u, v);break;case 22:
                    p.length > 1 && !s && (y = p.shift() + n, s = !0), u += p.pop(), d(u, v);break;case 23:
                    e();break;case 24:
                    for (; p.length > 2;) {
                      g = u + p.shift(), h = v + p.shift(), i = g + p.shift(), j = h + p.shift(), u = i + p.shift(), v = j + p.shift(), o.curveTo(g, h, i, j, u, v);
                    }u += p.shift(), v += p.shift(), o.lineTo(u, v);break;case 25:
                    for (; p.length > 6;) {
                      u += p.shift(), v += p.shift(), o.lineTo(u, v);
                    }g = u + p.shift(), h = v + p.shift(), i = g + p.shift(), j = h + p.shift(), u = i + p.shift(), v = j + p.shift(), o.curveTo(g, h, i, j, u, v);break;case 26:
                    for (p.length % 2 && (u += p.shift()); p.length > 0;) {
                      g = u, h = v + p.shift(), i = g + p.shift(), j = h + p.shift(), u = i, v = j + p.shift(), o.curveTo(g, h, i, j, u, v);
                    }break;case 27:
                    for (p.length % 2 && (v += p.shift()); p.length > 0;) {
                      g = u + p.shift(), h = v, i = g + p.shift(), j = h + p.shift(), u = i + p.shift(), v = j, o.curveTo(g, h, i, j, u, v);
                    }break;case 28:
                    m = c[H], r = c[H + 1], p.push((m << 24 | r << 16) >> 16), H += 2;break;case 29:
                    z = p.pop() + a.gsubrsBias, A = a.gsubrs[z], A && f(A);break;case 30:
                    for (; p.length > 0 && (g = u, h = v + p.shift(), i = g + p.shift(), j = h + p.shift(), u = i + p.shift(), v = j + (1 === p.length ? p.shift() : 0), o.curveTo(g, h, i, j, u, v), 0 !== p.length);) {
                      g = u + p.shift(), h = v, i = g + p.shift(), j = h + p.shift(), v = j + p.shift(), u = i + (1 === p.length ? p.shift() : 0), o.curveTo(g, h, i, j, u, v);
                    }break;case 31:
                    for (; p.length > 0 && (g = u + p.shift(), h = v, i = g + p.shift(), j = h + p.shift(), v = j + p.shift(), u = i + (1 === p.length ? p.shift() : 0), o.curveTo(g, h, i, j, u, v), 0 !== p.length);) {
                      g = u, h = v + p.shift(), i = g + p.shift(), j = h + p.shift(), u = i + p.shift(), v = j + (1 === p.length ? p.shift() : 0), o.curveTo(g, h, i, j, u, v);
                    }break;default:
                    I < 32 ? console.log("Glyph " + b.index + ": unknown operator " + I) : I < 247 ? p.push(I - 139) : I < 251 ? (m = c[H], H += 1, p.push(256 * (I - 247) + m + 108)) : I < 255 ? (m = c[H], H += 1, p.push(256 * -(I - 251) - m - 108)) : (m = c[H], r = c[H + 1], w = c[H + 2], x = c[H + 3], H += 4, p.push((m << 24 | r << 16 | w << 8 | x) / 65536));}
              }
            }var g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o = new r(),
                p = [],
                q = 0,
                s = !1,
                t = !1,
                u = 0,
                v = 0;if (a.isCIDFont) {
              var w = a.tables.cff.topDict._fdSelect[b.index],
                  x = a.tables.cff.topDict._fdArray[w];k = x._subrs, l = x._subrsBias, m = x._defaultWidthX, n = x._nominalWidthX;
            } else k = a.tables.cff.topDict._subrs, l = a.tables.cff.topDict._subrsBias, m = a.tables.cff.topDict._defaultWidthX, n = a.tables.cff.topDict._nominalWidthX;var y = m;return f(c), b.advanceWidth = y, o;
          }function ya(a, b, c, d) {
            var e,
                f = [],
                g = new Le.Parser(a, b),
                h = g.parseCard8();if (0 === h) for (var i = 0; i < c; i++) {
              if ((e = g.parseCard8()) >= d) throw new Error("CFF table CID Font FDSelect has bad FD index value " + e + " (FD count " + d + ")");f.push(e);
            } else {
              if (3 !== h) throw new Error("CFF Table CID Font FDSelect table has unsupported format " + h);var j = g.parseCard16(),
                  k = g.parseCard16();if (0 !== k) throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID " + k);for (var l, m = 0; m < j; m++) {
                if (e = g.parseCard8(), l = g.parseCard16(), e >= d) throw new Error("CFF table CID Font FDSelect has bad FD index value " + e + " (FD count " + d + ")");if (l > c) throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID " + l);for (; k < l; k++) {
                  f.push(e);
                }k = l;
              }if (l !== c) throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID " + l);
            }return f;
          }function za(a, b, c) {
            c.tables.cff = {};var d = ra(a, b),
                e = ka(a, d.endOffset, Le.bytesToString),
                f = ka(a, e.endOffset),
                g = ka(a, f.endOffset, Le.bytesToString),
                h = ka(a, g.endOffset);c.gsubrs = h.objects, c.gsubrsBias = ja(c.gsubrs);var i = ua(a, b, f.objects, g.objects);if (1 !== i.length) throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = " + i.length);var j = i[0];if (c.tables.cff.topDict = j, j._privateDict && (c.defaultWidthX = j._privateDict.defaultWidthX, c.nominalWidthX = j._privateDict.nominalWidthX), void 0 !== j.ros[0] && void 0 !== j.ros[1] && (c.isCIDFont = !0), c.isCIDFont) {
              var k = j.fdArray,
                  l = j.fdSelect;if (0 === k || 0 === l) throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");k += b;var m = ka(a, k),
                  n = ua(a, b, m.objects, g.objects);j._fdArray = n, l += b, j._fdSelect = ya(a, l, c.numGlyphs, n.length);
            }var o = b + j.private[1],
                p = ta(a, o, j.private[0], g.objects);if (c.defaultWidthX = p.defaultWidthX, c.nominalWidthX = p.nominalWidthX, 0 !== p.subrs) {
              var q = o + p.subrs,
                  r = ka(a, q);c.subrs = r.objects, c.subrsBias = ja(c.subrs);
            } else c.subrs = [], c.subrsBias = 0;var s = ka(a, b + j.charStrings);c.nGlyphs = s.objects.length;var t = va(a, b + j.charset, c.nGlyphs, g.objects);0 === j.encoding ? c.cffEncoding = new Z(Oe, t) : 1 === j.encoding ? c.cffEncoding = new Z(Pe, t) : c.cffEncoding = wa(a, b + j.encoding, t), c.encoding = c.encoding || c.cffEncoding, c.glyphs = new Se.GlyphSet(c);for (var u = 0; u < c.nGlyphs; u += 1) {
              var v = s.objects[u];c.glyphs.push(u, Se.cffGlyphLoader(c, u, xa, v));
            }
          }function Aa(a, b) {
            var c,
                d = Ne.indexOf(a);return d >= 0 && (c = d), d = b.indexOf(a), d >= 0 ? c = d + Ne.length : (c = Ne.length + b.length, b.push(a)), c;
          }function Ba() {
            return new Ie.Record("Header", [{ name: "major", type: "Card8", value: 1 }, { name: "minor", type: "Card8", value: 0 }, { name: "hdrSize", type: "Card8", value: 4 }, { name: "major", type: "Card8", value: 1 }]);
          }function Ca(a) {
            var b = new Ie.Record("Name INDEX", [{ name: "names", type: "INDEX", value: [] }]);b.names = [];for (var c = 0; c < a.length; c += 1) {
              b.names.push({ name: "name_" + c, type: "NAME", value: a[c] });
            }return b;
          }function Da(a, b, c) {
            for (var d = {}, e = 0; e < a.length; e += 1) {
              var f = a[e],
                  g = b[f.name];void 0 === g || ia(g, f.value) || ("SID" === f.type && (g = Aa(g, c)), d[f.op] = { name: f.name, type: f.type, value: g });
            }return d;
          }function Ea(a, b) {
            var c = new Ie.Record("Top DICT", [{ name: "dict", type: "DICT", value: {} }]);return c.dict = Da(Te, a, b), c;
          }function Fa(a) {
            var b = new Ie.Record("Top DICT INDEX", [{ name: "topDicts", type: "INDEX", value: [] }]);return b.topDicts = [{ name: "topDict_0", type: "TABLE", value: a }], b;
          }function Ga(a) {
            var b = new Ie.Record("String INDEX", [{ name: "strings", type: "INDEX", value: [] }]);b.strings = [];for (var c = 0; c < a.length; c += 1) {
              b.strings.push({ name: "string_" + c, type: "STRING", value: a[c] });
            }return b;
          }function Ha() {
            return new Ie.Record("Global Subr INDEX", [{ name: "subrs", type: "INDEX", value: [] }]);
          }function Ia(a, b) {
            for (var c = new Ie.Record("Charsets", [{ name: "format", type: "Card8", value: 0 }]), d = 0; d < a.length; d += 1) {
              var e = a[d],
                  f = Aa(e, b);c.fields.push({ name: "glyph_" + d, type: "SID", value: f });
            }return c;
          }function Ja(a) {
            var b = [],
                c = a.path;b.push({ name: "width", type: "NUMBER", value: a.advanceWidth });for (var d = 0, e = 0, f = 0; f < c.commands.length; f += 1) {
              var g = void 0,
                  h = void 0,
                  i = c.commands[f];if ("Q" === i.type) {
                var j = 1 / 3,
                    k = 2 / 3;i = { type: "C", x: i.x, y: i.y, x1: j * d + k * i.x1, y1: j * e + k * i.y1, x2: j * i.x + k * i.x1, y2: j * i.y + k * i.y1 };
              }if ("M" === i.type) g = Math.round(i.x - d), h = Math.round(i.y - e), b.push({ name: "dx", type: "NUMBER", value: g }), b.push({ name: "dy", type: "NUMBER", value: h }), b.push({ name: "rmoveto", type: "OP", value: 21 }), d = Math.round(i.x), e = Math.round(i.y);else if ("L" === i.type) g = Math.round(i.x - d), h = Math.round(i.y - e), b.push({ name: "dx", type: "NUMBER", value: g }), b.push({ name: "dy", type: "NUMBER", value: h }), b.push({ name: "rlineto", type: "OP", value: 5 }), d = Math.round(i.x), e = Math.round(i.y);else if ("C" === i.type) {
                var l = Math.round(i.x1 - d),
                    m = Math.round(i.y1 - e),
                    n = Math.round(i.x2 - i.x1),
                    o = Math.round(i.y2 - i.y1);g = Math.round(i.x - i.x2), h = Math.round(i.y - i.y2), b.push({ name: "dx1", type: "NUMBER", value: l }), b.push({ name: "dy1", type: "NUMBER", value: m }), b.push({ name: "dx2", type: "NUMBER", value: n }), b.push({ name: "dy2", type: "NUMBER", value: o }), b.push({ name: "dx", type: "NUMBER", value: g }), b.push({ name: "dy", type: "NUMBER", value: h }), b.push({ name: "rrcurveto", type: "OP", value: 8 }), d = Math.round(i.x), e = Math.round(i.y);
              }
            }return b.push({ name: "endchar", type: "OP", value: 14 }), b;
          }function Ka(a) {
            for (var b = new Ie.Record("CharStrings INDEX", [{ name: "charStrings", type: "INDEX", value: [] }]), c = 0; c < a.length; c += 1) {
              var d = a.get(c),
                  e = Ja(d);b.charStrings.push({ name: d.name, type: "CHARSTRING", value: e });
            }return b;
          }function La(a, b) {
            var c = new Ie.Record("Private DICT", [{ name: "dict", type: "DICT", value: {} }]);return c.dict = Da(Ue, a, b), c;
          }function Ma(a, b) {
            for (var c, d = new Ie.Table("CFF ", [{ name: "header", type: "RECORD" }, { name: "nameIndex", type: "RECORD" }, { name: "topDictIndex", type: "RECORD" }, { name: "stringIndex", type: "RECORD" }, { name: "globalSubrIndex", type: "RECORD" }, { name: "charsets", type: "RECORD" }, { name: "charStringsIndex", type: "RECORD" }, { name: "privateDict", type: "RECORD" }]), e = 1 / b.unitsPerEm, f = { version: b.version, fullName: b.fullName, familyName: b.familyName, weight: b.weightName, fontBBox: b.fontBBox || [0, 0, 0, 0], fontMatrix: [e, 0, 0, e, 0, 0], charset: 999, encoding: 0, charStrings: 999, private: [0, 999] }, g = {}, h = [], i = 1; i < a.length; i += 1) {
              c = a.get(i), h.push(c.name);
            }var j = [];d.header = Ba(), d.nameIndex = Ca([b.postScriptName]);var k = Ea(f, j);d.topDictIndex = Fa(k), d.globalSubrIndex = Ha(), d.charsets = Ia(h, j), d.charStringsIndex = Ka(a), d.privateDict = La(g, j), d.stringIndex = Ga(j);var l = d.header.sizeOf() + d.nameIndex.sizeOf() + d.topDictIndex.sizeOf() + d.stringIndex.sizeOf() + d.globalSubrIndex.sizeOf();return f.charset = l, f.encoding = 0, f.charStrings = f.charset + d.charsets.sizeOf(), f.private[1] = f.charStrings + d.charStringsIndex.sizeOf(), k = Ea(f, j), d.topDictIndex = Fa(k), d;
          }function Na(a, b) {
            var c = {},
                d = new Le.Parser(a, b);return c.version = d.parseVersion(), c.fontRevision = Math.round(1e3 * d.parseFixed()) / 1e3, c.checkSumAdjustment = d.parseULong(), c.magicNumber = d.parseULong(), xe.argument(1594834165 === c.magicNumber, "Font header has wrong magic number."), c.flags = d.parseUShort(), c.unitsPerEm = d.parseUShort(), c.created = d.parseLongDateTime(), c.modified = d.parseLongDateTime(), c.xMin = d.parseShort(), c.yMin = d.parseShort(), c.xMax = d.parseShort(), c.yMax = d.parseShort(), c.macStyle = d.parseUShort(), c.lowestRecPPEM = d.parseUShort(), c.fontDirectionHint = d.parseShort(), c.indexToLocFormat = d.parseShort(), c.glyphDataFormat = d.parseShort(), c;
          }function Oa(a) {
            var b = Math.round(new Date().getTime() / 1e3) + 2082844800,
                c = b;return a.createdTimestamp && (c = a.createdTimestamp + 2082844800), new Ie.Table("head", [{ name: "version", type: "FIXED", value: 65536 }, { name: "fontRevision", type: "FIXED", value: 65536 }, { name: "checkSumAdjustment", type: "ULONG", value: 0 }, { name: "magicNumber", type: "ULONG", value: 1594834165 }, { name: "flags", type: "USHORT", value: 0 }, { name: "unitsPerEm", type: "USHORT", value: 1e3 }, { name: "created", type: "LONGDATETIME", value: c }, { name: "modified", type: "LONGDATETIME", value: b }, { name: "xMin", type: "SHORT", value: 0 }, { name: "yMin", type: "SHORT", value: 0 }, { name: "xMax", type: "SHORT", value: 0 }, { name: "yMax", type: "SHORT", value: 0 }, { name: "macStyle", type: "USHORT", value: 0 }, { name: "lowestRecPPEM", type: "USHORT", value: 0 }, { name: "fontDirectionHint", type: "SHORT", value: 2 }, { name: "indexToLocFormat", type: "SHORT", value: 0 }, { name: "glyphDataFormat", type: "SHORT", value: 0 }], a);
          }function Pa(a, b) {
            var c = {},
                d = new Le.Parser(a, b);return c.version = d.parseVersion(), c.ascender = d.parseShort(), c.descender = d.parseShort(), c.lineGap = d.parseShort(), c.advanceWidthMax = d.parseUShort(), c.minLeftSideBearing = d.parseShort(), c.minRightSideBearing = d.parseShort(), c.xMaxExtent = d.parseShort(), c.caretSlopeRise = d.parseShort(), c.caretSlopeRun = d.parseShort(), c.caretOffset = d.parseShort(), d.relativeOffset += 8, c.metricDataFormat = d.parseShort(), c.numberOfHMetrics = d.parseUShort(), c;
          }function Qa(a) {
            return new Ie.Table("hhea", [{ name: "version", type: "FIXED", value: 65536 }, { name: "ascender", type: "FWORD", value: 0 }, { name: "descender", type: "FWORD", value: 0 }, { name: "lineGap", type: "FWORD", value: 0 }, { name: "advanceWidthMax", type: "UFWORD", value: 0 }, { name: "minLeftSideBearing", type: "FWORD", value: 0 }, { name: "minRightSideBearing", type: "FWORD", value: 0 }, { name: "xMaxExtent", type: "FWORD", value: 0 }, { name: "caretSlopeRise", type: "SHORT", value: 1 }, { name: "caretSlopeRun", type: "SHORT", value: 0 }, { name: "caretOffset", type: "SHORT", value: 0 }, { name: "reserved1", type: "SHORT", value: 0 }, { name: "reserved2", type: "SHORT", value: 0 }, { name: "reserved3", type: "SHORT", value: 0 }, { name: "reserved4", type: "SHORT", value: 0 }, { name: "metricDataFormat", type: "SHORT", value: 0 }, { name: "numberOfHMetrics", type: "USHORT", value: 0 }], a);
          }function Ra(a, b, c, d, e) {
            for (var f, g, h = new Le.Parser(a, b), i = 0; i < d; i += 1) {
              i < c && (f = h.parseUShort(), g = h.parseShort());var j = e.get(i);j.advanceWidth = f, j.leftSideBearing = g;
            }
          }function Sa(a) {
            for (var b = new Ie.Table("hmtx", []), c = 0; c < a.length; c += 1) {
              var d = a.get(c),
                  e = d.advanceWidth || 0,
                  f = d.leftSideBearing || 0;b.fields.push({ name: "advanceWidth_" + c, type: "USHORT", value: e }), b.fields.push({ name: "leftSideBearing_" + c, type: "SHORT", value: f });
            }return b;
          }function Ta(a) {
            for (var b = new Ie.Table("ltag", [{ name: "version", type: "ULONG", value: 1 }, { name: "flags", type: "ULONG", value: 0 }, { name: "numTags", type: "ULONG", value: a.length }]), c = "", d = 12 + 4 * a.length, e = 0; e < a.length; ++e) {
              var f = c.indexOf(a[e]);f < 0 && (f = c.length, c += a[e]), b.fields.push({ name: "offset " + e, type: "USHORT", value: d + f }), b.fields.push({ name: "length " + e, type: "USHORT", value: a[e].length });
            }return b.fields.push({ name: "stringPool", type: "CHARARRAY", value: c }), b;
          }function Ua(a, b) {
            var c = new Le.Parser(a, b),
                d = c.parseULong();xe.argument(1 === d, "Unsupported ltag table version."), c.skip("uLong", 1);for (var e = c.parseULong(), f = [], g = 0; g < e; g++) {
              for (var h = "", i = b + c.parseUShort(), j = c.parseUShort(), k = i; k < i + j; ++k) {
                h += String.fromCharCode(a.getInt8(k));
              }f.push(h);
            }return f;
          }function Va(a, b) {
            var c = {},
                d = new Le.Parser(a, b);return c.version = d.parseVersion(), c.numGlyphs = d.parseUShort(), 1 === c.version && (c.maxPoints = d.parseUShort(), c.maxContours = d.parseUShort(), c.maxCompositePoints = d.parseUShort(), c.maxCompositeContours = d.parseUShort(), c.maxZones = d.parseUShort(), c.maxTwilightPoints = d.parseUShort(), c.maxStorage = d.parseUShort(), c.maxFunctionDefs = d.parseUShort(), c.maxInstructionDefs = d.parseUShort(), c.maxStackElements = d.parseUShort(), c.maxSizeOfInstructions = d.parseUShort(), c.maxComponentElements = d.parseUShort(), c.maxComponentDepth = d.parseUShort()), c;
          }function Wa(a) {
            return new Ie.Table("maxp", [{ name: "version", type: "FIXED", value: 20480 }, { name: "numGlyphs", type: "USHORT", value: a }]);
          }function Xa(a, b, c) {
            switch (a) {case 0:
                if (65535 === b) return "und";if (c) return c[b];break;case 1:
                return af[b];case 3:
                return cf[b];}
          }function Ya(a, b, c) {
            switch (a) {case 0:
                return df;case 1:
                return ff[c] || ef[b];case 3:
                if (1 === b || 10 === b) return df;}
          }function Za(a, b, c) {
            for (var d = {}, e = new Le.Parser(a, b), f = e.parseUShort(), g = e.parseUShort(), h = e.offset + e.parseUShort(), i = 0; i < g; i++) {
              var j = e.parseUShort(),
                  k = e.parseUShort(),
                  l = e.parseUShort(),
                  m = e.parseUShort(),
                  n = _e[m] || m,
                  o = e.parseUShort(),
                  p = e.parseUShort(),
                  q = Xa(j, l, c),
                  r = Ya(j, k, l);if (void 0 !== r && void 0 !== q) {
                var s = void 0;if (s = r === df ? Ae.UTF16(a, h + p, o) : Ae.MACSTRING(a, h + p, o, r)) {
                  var t = d[n];void 0 === t && (t = d[n] = {}), t[q] = s;
                }
              }
            }return 1 === f && e.parseUShort(), d;
          }function $a(a) {
            var b = {};for (var c in a) {
              b[a[c]] = parseInt(c);
            }return b;
          }function _a(a, b, c, d, e, f) {
            return new Ie.Record("NameRecord", [{ name: "platformID", type: "USHORT", value: a }, { name: "encodingID", type: "USHORT", value: b }, { name: "languageID", type: "USHORT", value: c }, { name: "nameID", type: "USHORT", value: d }, { name: "length", type: "USHORT", value: e }, { name: "offset", type: "USHORT", value: f }]);
          }function ab(a, b) {
            var c = a.length,
                d = b.length - c + 1;a: for (var e = 0; e < d; e++) {
              for (; e < d; e++) {
                for (var f = 0; f < c; f++) {
                  if (b[e + f] !== a[f]) continue a;
                }return e;
              }
            }return -1;
          }function bb(a, b) {
            var c = ab(a, b);if (c < 0) {
              c = b.length;for (var d = 0, e = a.length; d < e; ++d) {
                b.push(a[d]);
              }
            }return c;
          }function cb(a, b) {
            var c,
                d = [],
                e = {},
                f = $a(_e);for (var g in a) {
              var h = f[g];if (void 0 === h && (h = g), c = parseInt(h), isNaN(c)) throw new Error('Name table entry "' + g + '" does not exist, see nameTableNames for complete list.');e[c] = a[g], d.push(c);
            }for (var i = $a(af), j = $a(cf), k = [], l = [], m = 0; m < d.length; m++) {
              c = d[m];var n = e[c];for (var o in n) {
                var p = n[o],
                    q = 1,
                    r = i[o],
                    s = bf[r],
                    t = Ya(q, s, r),
                    u = Be.MACSTRING(p, t);void 0 === u && (q = 0, r = b.indexOf(o), r < 0 && (r = b.length, b.push(o)), s = 4, u = Be.UTF16(p));var v = bb(u, l);k.push(_a(q, s, r, c, u.length, v));var w = j[o];if (void 0 !== w) {
                  var x = Be.UTF16(p),
                      y = bb(x, l);k.push(_a(3, 1, w, c, x.length, y));
                }
              }
            }k.sort(function (a, b) {
              return a.platformID - b.platformID || a.encodingID - b.encodingID || a.languageID - b.languageID || a.nameID - b.nameID;
            });for (var z = new Ie.Table("name", [{ name: "format", type: "USHORT", value: 0 }, { name: "count", type: "USHORT", value: k.length }, { name: "stringOffset", type: "USHORT", value: 6 + 12 * k.length }]), A = 0; A < k.length; A++) {
              z.fields.push({ name: "record_" + A, type: "RECORD", value: k[A] });
            }return z.fields.push({ name: "strings", type: "LITERAL", value: l }), z;
          }function db(a) {
            for (var b = 0; b < hf.length; b += 1) {
              var c = hf[b];if (a >= c.begin && a < c.end) return b;
            }return -1;
          }function eb(a, b) {
            var c = {},
                d = new Le.Parser(a, b);c.version = d.parseUShort(), c.xAvgCharWidth = d.parseShort(), c.usWeightClass = d.parseUShort(), c.usWidthClass = d.parseUShort(), c.fsType = d.parseUShort(), c.ySubscriptXSize = d.parseShort(), c.ySubscriptYSize = d.parseShort(), c.ySubscriptXOffset = d.parseShort(), c.ySubscriptYOffset = d.parseShort(), c.ySuperscriptXSize = d.parseShort(), c.ySuperscriptYSize = d.parseShort(), c.ySuperscriptXOffset = d.parseShort(), c.ySuperscriptYOffset = d.parseShort(), c.yStrikeoutSize = d.parseShort(), c.yStrikeoutPosition = d.parseShort(), c.sFamilyClass = d.parseShort(), c.panose = [];for (var e = 0; e < 10; e++) {
              c.panose[e] = d.parseByte();
            }return c.ulUnicodeRange1 = d.parseULong(), c.ulUnicodeRange2 = d.parseULong(), c.ulUnicodeRange3 = d.parseULong(), c.ulUnicodeRange4 = d.parseULong(), c.achVendID = String.fromCharCode(d.parseByte(), d.parseByte(), d.parseByte(), d.parseByte()), c.fsSelection = d.parseUShort(), c.usFirstCharIndex = d.parseUShort(), c.usLastCharIndex = d.parseUShort(), c.sTypoAscender = d.parseShort(), c.sTypoDescender = d.parseShort(), c.sTypoLineGap = d.parseShort(), c.usWinAscent = d.parseUShort(), c.usWinDescent = d.parseUShort(), c.version >= 1 && (c.ulCodePageRange1 = d.parseULong(), c.ulCodePageRange2 = d.parseULong()), c.version >= 2 && (c.sxHeight = d.parseShort(), c.sCapHeight = d.parseShort(), c.usDefaultChar = d.parseUShort(), c.usBreakChar = d.parseUShort(), c.usMaxContent = d.parseUShort()), c;
          }function fb(a) {
            return new Ie.Table("OS/2", [{ name: "version", type: "USHORT", value: 3 }, { name: "xAvgCharWidth", type: "SHORT", value: 0 }, { name: "usWeightClass", type: "USHORT", value: 0 }, { name: "usWidthClass", type: "USHORT", value: 0 }, { name: "fsType", type: "USHORT", value: 0 }, { name: "ySubscriptXSize", type: "SHORT", value: 650 }, { name: "ySubscriptYSize", type: "SHORT", value: 699 }, { name: "ySubscriptXOffset", type: "SHORT", value: 0 }, { name: "ySubscriptYOffset", type: "SHORT", value: 140 }, { name: "ySuperscriptXSize", type: "SHORT", value: 650 }, { name: "ySuperscriptYSize", type: "SHORT", value: 699 }, { name: "ySuperscriptXOffset", type: "SHORT", value: 0 }, { name: "ySuperscriptYOffset", type: "SHORT", value: 479 }, { name: "yStrikeoutSize", type: "SHORT", value: 49 }, { name: "yStrikeoutPosition", type: "SHORT", value: 258 }, { name: "sFamilyClass", type: "SHORT", value: 0 }, { name: "bFamilyType", type: "BYTE", value: 0 }, { name: "bSerifStyle", type: "BYTE", value: 0 }, { name: "bWeight", type: "BYTE", value: 0 }, { name: "bProportion", type: "BYTE", value: 0 }, { name: "bContrast", type: "BYTE", value: 0 }, { name: "bStrokeVariation", type: "BYTE", value: 0 }, { name: "bArmStyle", type: "BYTE", value: 0 }, { name: "bLetterform", type: "BYTE", value: 0 }, { name: "bMidline", type: "BYTE", value: 0 }, { name: "bXHeight", type: "BYTE", value: 0 }, { name: "ulUnicodeRange1", type: "ULONG", value: 0 }, { name: "ulUnicodeRange2", type: "ULONG", value: 0 }, { name: "ulUnicodeRange3", type: "ULONG", value: 0 }, { name: "ulUnicodeRange4", type: "ULONG", value: 0 }, { name: "achVendID", type: "CHARARRAY", value: "XXXX" }, { name: "fsSelection", type: "USHORT", value: 0 }, { name: "usFirstCharIndex", type: "USHORT", value: 0 }, { name: "usLastCharIndex", type: "USHORT", value: 0 }, { name: "sTypoAscender", type: "SHORT", value: 0 }, { name: "sTypoDescender", type: "SHORT", value: 0 }, { name: "sTypoLineGap", type: "SHORT", value: 0 }, { name: "usWinAscent", type: "USHORT", value: 0 }, { name: "usWinDescent", type: "USHORT", value: 0 }, { name: "ulCodePageRange1", type: "ULONG", value: 0 }, { name: "ulCodePageRange2", type: "ULONG", value: 0 }, { name: "sxHeight", type: "SHORT", value: 0 }, { name: "sCapHeight", type: "SHORT", value: 0 }, { name: "usDefaultChar", type: "USHORT", value: 0 }, { name: "usBreakChar", type: "USHORT", value: 0 }, { name: "usMaxContext", type: "USHORT", value: 0 }], a);
          }function gb(a, b) {
            var c = {},
                d = new Le.Parser(a, b);switch (c.version = d.parseVersion(), c.italicAngle = d.parseFixed(), c.underlinePosition = d.parseShort(), c.underlineThickness = d.parseShort(), c.isFixedPitch = d.parseULong(), c.minMemType42 = d.parseULong(), c.maxMemType42 = d.parseULong(), c.minMemType1 = d.parseULong(), c.maxMemType1 = d.parseULong(), c.version) {case 1:
                c.names = Qe.slice();break;case 2:
                c.numberOfGlyphs = d.parseUShort(), c.glyphNameIndex = new Array(c.numberOfGlyphs);for (var e = 0; e < c.numberOfGlyphs; e++) {
                  c.glyphNameIndex[e] = d.parseUShort();
                }c.names = [];for (var f = 0; f < c.numberOfGlyphs; f++) {
                  if (c.glyphNameIndex[f] >= Qe.length) {
                    var g = d.parseChar();c.names.push(d.parseString(g));
                  }
                }break;case 2.5:
                c.numberOfGlyphs = d.parseUShort(), c.offset = new Array(c.numberOfGlyphs);for (var h = 0; h < c.numberOfGlyphs; h++) {
                  c.offset[h] = d.parseChar();
                }}return c;
          }function hb() {
            return new Ie.Table("post", [{ name: "version", type: "FIXED", value: 196608 }, { name: "italicAngle", type: "FIXED", value: 0 }, { name: "underlinePosition", type: "FWORD", value: 0 }, { name: "underlineThickness", type: "FWORD", value: 0 }, { name: "isFixedPitch", type: "ULONG", value: 0 }, { name: "minMemType42", type: "ULONG", value: 0 }, { name: "maxMemType42", type: "ULONG", value: 0 }, { name: "minMemType1", type: "ULONG", value: 0 }, { name: "maxMemType1", type: "ULONG", value: 0 }]);
          }function ib(a, b) {
            b = b || 0;var c = new Q(a, b),
                d = c.parseVersion(1);return xe.argument(1 === d || 1.1 === d, "Unsupported GSUB table version."), 1 === d ? { version: d, scripts: c.parseScriptList(), features: c.parseFeatureList(), lookups: c.parseLookupList(lf) } : { version: d, scripts: c.parseScriptList(), features: c.parseFeatureList(), lookups: c.parseLookupList(lf), variations: c.parseFeatureVariationsList() };
          }function jb(a) {
            return new Ie.Table("GSUB", [{ name: "version", type: "ULONG", value: 65536 }, { name: "scripts", type: "TABLE", value: new Ie.ScriptList(a.scripts) }, { name: "features", type: "TABLE", value: new Ie.FeatureList(a.features) }, { name: "lookups", type: "TABLE", value: new Ie.LookupList(a.lookups, nf) }]);
          }function kb(a, b) {
            var c = new Le.Parser(a, b),
                d = c.parseULong();xe.argument(1 === d, "Unsupported META table version."), c.parseULong(), c.parseULong();for (var e = c.parseULong(), f = {}, g = 0; g < e; g++) {
              var h = c.parseTag(),
                  i = c.parseULong(),
                  j = c.parseULong(),
                  k = Ae.UTF8(a, b + i, j);f[h] = k;
            }return f;
          }function lb(a) {
            var b = Object.keys(a).length,
                c = "",
                d = 16 + 12 * b,
                e = new Ie.Table("meta", [{ name: "version", type: "ULONG", value: 1 }, { name: "flags", type: "ULONG", value: 0 }, { name: "offset", type: "ULONG", value: d }, { name: "numTags", type: "ULONG", value: b }]);for (var f in a) {
              var g = c.length;c += a[f], e.fields.push({ name: "tag " + f, type: "TAG", value: f }), e.fields.push({ name: "offset " + f, type: "ULONG", value: d + g }), e.fields.push({ name: "length " + f, type: "ULONG", value: a[f].length });
            }return e.fields.push({ name: "stringPool", type: "CHARARRAY", value: c }), e;
          }function mb(a) {
            return Math.log(a) / Math.log(2) | 0;
          }function nb(a) {
            for (; a.length % 4 != 0;) {
              a.push(0);
            }for (var b = 0, c = 0; c < a.length; c += 4) {
              b += (a[c] << 24) + (a[c + 1] << 16) + (a[c + 2] << 8) + a[c + 3];
            }return b %= Math.pow(2, 32);
          }function ob(a, b, c, d) {
            return new Ie.Record("Table Record", [{ name: "tag", type: "TAG", value: void 0 !== a ? a : "" }, { name: "checkSum", type: "ULONG", value: void 0 !== b ? b : 0 }, { name: "offset", type: "ULONG", value: void 0 !== c ? c : 0 }, { name: "length", type: "ULONG", value: void 0 !== d ? d : 0 }]);
          }function pb(a) {
            var b = new Ie.Table("sfnt", [{ name: "version", type: "TAG", value: "OTTO" }, { name: "numTables", type: "USHORT", value: 0 }, { name: "searchRange", type: "USHORT", value: 0 }, { name: "entrySelector", type: "USHORT", value: 0 }, { name: "rangeShift", type: "USHORT", value: 0 }]);b.tables = a, b.numTables = a.length;var c = Math.pow(2, mb(b.numTables));b.searchRange = 16 * c, b.entrySelector = mb(c), b.rangeShift = 16 * b.numTables - b.searchRange;for (var d = [], e = [], f = b.sizeOf() + ob().sizeOf() * b.numTables; f % 4 != 0;) {
              f += 1, e.push({ name: "padding", type: "BYTE", value: 0 });
            }for (var g = 0; g < a.length; g += 1) {
              var h = a[g];xe.argument(4 === h.tableName.length, "Table name" + h.tableName + " is invalid.");var i = h.sizeOf(),
                  j = ob(h.tableName, nb(h.encode()), f, i);for (d.push({ name: j.tag + " Table Record", type: "RECORD", value: j }), e.push({ name: h.tableName + " table", type: "RECORD", value: h }), f += i, xe.argument(!isNaN(f), "Something went wrong calculating the offset."); f % 4 != 0;) {
                f += 1, e.push({ name: "padding", type: "BYTE", value: 0 });
              }
            }return d.sort(function (a, b) {
              return a.value.tag > b.value.tag ? 1 : -1;
            }), b.fields = b.fields.concat(d), b.fields = b.fields.concat(e), b;
          }function qb(a, b, c) {
            for (var d = 0; d < b.length; d += 1) {
              var e = a.charToGlyphIndex(b[d]);if (e > 0) {
                return a.glyphs.get(e).getMetrics();
              }
            }return c;
          }function rb(a) {
            for (var b = 0, c = 0; c < a.length; c += 1) {
              b += a[c];
            }return b / a.length;
          }function sb(a) {
            for (var b, c = [], d = [], e = [], f = [], g = [], h = [], i = [], j = 0, k = 0, l = 0, m = 0, n = 0, o = 0; o < a.glyphs.length; o += 1) {
              var p = a.glyphs.get(o),
                  q = 0 | p.unicode;if (isNaN(p.advanceWidth)) throw new Error("Glyph " + p.name + " (" + o + "): advanceWidth is not a number.");(b > q || void 0 === b) && q > 0 && (b = q), j < q && (j = q);var r = jf.getUnicodeRange(q);if (r < 32) k |= 1 << r;else if (r < 64) l |= 1 << r - 32;else if (r < 96) m |= 1 << r - 64;else {
                if (!(r < 123)) throw new Error("Unicode ranges bits > 123 are reserved for internal usage");n |= 1 << r - 96;
              }if (".notdef" !== p.name) {
                var s = p.getMetrics();c.push(s.xMin), d.push(s.yMin), e.push(s.xMax), f.push(s.yMax), h.push(s.leftSideBearing), i.push(s.rightSideBearing), g.push(p.advanceWidth);
              }
            }var t = { xMin: Math.min.apply(null, c), yMin: Math.min.apply(null, d), xMax: Math.max.apply(null, e), yMax: Math.max.apply(null, f), advanceWidthMax: Math.max.apply(null, g), advanceWidthAvg: rb(g), minLeftSideBearing: Math.min.apply(null, h), maxLeftSideBearing: Math.max.apply(null, h), minRightSideBearing: Math.min.apply(null, i) };t.ascender = a.ascender, t.descender = a.descender;var u = We.make({ flags: 3, unitsPerEm: a.unitsPerEm, xMin: t.xMin, yMin: t.yMin, xMax: t.xMax, yMax: t.yMax, lowestRecPPEM: 3, createdTimestamp: a.createdTimestamp }),
                v = Xe.make({ ascender: t.ascender, descender: t.descender, advanceWidthMax: t.advanceWidthMax, minLeftSideBearing: t.minLeftSideBearing, minRightSideBearing: t.minRightSideBearing, xMaxExtent: t.maxLeftSideBearing + (t.xMax - t.xMin), numberOfHMetrics: a.glyphs.length }),
                w = $e.make(a.glyphs.length),
                x = jf.make({ xAvgCharWidth: Math.round(t.advanceWidthAvg), usWeightClass: a.tables.os2.usWeightClass, usWidthClass: a.tables.os2.usWidthClass, usFirstCharIndex: b, usLastCharIndex: j, ulUnicodeRange1: k, ulUnicodeRange2: l, ulUnicodeRange3: m, ulUnicodeRange4: n, fsSelection: a.tables.os2.fsSelection, sTypoAscender: t.ascender, sTypoDescender: t.descender, sTypoLineGap: 0, usWinAscent: t.yMax, usWinDescent: Math.abs(t.yMin), ulCodePageRange1: 1, sxHeight: qb(a, "xyvw", { yMax: Math.round(t.ascender / 2) }).yMax, sCapHeight: qb(a, "HIKLEFJMNTZBDPRAGOQSUVWXY", t).yMax, usDefaultChar: a.hasChar(" ") ? 32 : 0, usBreakChar: a.hasChar(" ") ? 32 : 0 }),
                y = Ye.make(a.glyphs),
                z = Me.make(a.glyphs),
                A = a.getEnglishName("fontFamily"),
                B = a.getEnglishName("fontSubfamily"),
                C = A + " " + B,
                D = a.getEnglishName("postScriptName");D || (D = A.replace(/\s/g, "") + "-" + B);var E = {};for (var F in a.names) {
              E[F] = a.names[F];
            }E.uniqueID || (E.uniqueID = { en: a.getEnglishName("manufacturer") + ":" + C }), E.postScriptName || (E.postScriptName = { en: D }), E.preferredFamily || (E.preferredFamily = a.names.fontFamily), E.preferredSubfamily || (E.preferredSubfamily = a.names.fontSubfamily);var G = [],
                H = gf.make(E, G),
                I = G.length > 0 ? Ze.make(G) : void 0,
                J = kf.make(),
                K = Ve.make(a.glyphs, { version: a.getEnglishName("version"), fullName: C, familyName: A, weightName: B, postScriptName: D, unitsPerEm: a.unitsPerEm, fontBBox: [0, t.yMin, t.ascender, t.advanceWidthMax] }),
                L = a.metas && Object.keys(a.metas).length > 0 ? pf.make(a.metas) : void 0,
                M = [u, v, w, x, H, z, J, K, y];I && M.push(I), a.tables.gsub && M.push(of.make(a.tables.gsub)), L && M.push(L);for (var N = pb(M), O = N.encode(), P = nb(O), Q = N.fields, R = !1, S = 0; S < Q.length; S += 1) {
              if ("head table" === Q[S].name) {
                Q[S].value.checkSumAdjustment = 2981146554 - P, R = !0;break;
              }
            }if (!R) throw new Error("Could not find head table with checkSum to adjust.");return N;
          }function tb(a, b) {
            for (var c = 0, d = a.length - 1; c <= d;) {
              var e = c + d >>> 1,
                  f = a[e].tag;if (f === b) return e;f < b ? c = e + 1 : d = e - 1;
            }return -c - 1;
          }function ub(a, b) {
            for (var c = 0, d = a.length - 1; c <= d;) {
              var e = c + d >>> 1,
                  f = a[e];if (f === b) return e;f < b ? c = e + 1 : d = e - 1;
            }return -c - 1;
          }function vb(a, b) {
            for (var c, d = 0, e = a.length - 1; d <= e;) {
              var f = d + e >>> 1;c = a[f];var g = c.start;if (g === b) return c;g < b ? d = f + 1 : e = f - 1;
            }if (d > 0) return c = a[d - 1], b > c.end ? 0 : c;
          }function wb(a, b) {
            this.font = a, this.tableName = b;
          }function xb(a) {
            wb.call(this, a, "gpos");
          }function yb(a) {
            wb.call(this, a, "gsub");
          }function zb(a, b) {
            var c = a.length;if (c !== b.length) return !1;for (var d = 0; d < c; d++) {
              if (a[d] !== b[d]) return !1;
            }return !0;
          }function Ab(a, b, c) {
            for (var d = a.subtables, e = 0; e < d.length; e++) {
              var f = d[e];if (f.substFormat === b) return f;
            }if (c) return d.push(c), c;
          }function Bb() {
            return "undefined" != typeof window;
          }function Cb(a) {
            for (var b = new ArrayBuffer(a.length), c = new Uint8Array(b), d = 0; d < a.length; ++d) {
              c[d] = a[d];
            }return b;
          }function Db(a) {
            for (var b = new e(a.byteLength), c = new Uint8Array(a), d = 0; d < b.length; ++d) {
              b[d] = c[d];
            }return b;
          }function Eb(a, b) {
            if (!a) throw b;
          }function Fb(a, b, c, d, e) {
            var f;return (b & d) > 0 ? (f = a.parseByte(), 0 == (b & e) && (f = -f), f = c + f) : f = (b & e) > 0 ? c : c + a.parseShort(), f;
          }function Gb(a, b, c) {
            var d = new Le.Parser(b, c);a.numberOfContours = d.parseShort(), a._xMin = d.parseShort(), a._yMin = d.parseShort(), a._xMax = d.parseShort(), a._yMax = d.parseShort();var e, f;if (a.numberOfContours > 0) {
              for (var g = a.endPointIndices = [], h = 0; h < a.numberOfContours; h += 1) {
                g.push(d.parseUShort());
              }a.instructionLength = d.parseUShort(), a.instructions = [];for (var i = 0; i < a.instructionLength; i += 1) {
                a.instructions.push(d.parseByte());
              }var j = g[g.length - 1] + 1;e = [];for (var k = 0; k < j; k += 1) {
                if (f = d.parseByte(), e.push(f), (8 & f) > 0) for (var l = d.parseByte(), m = 0; m < l; m += 1) {
                  e.push(f), k += 1;
                }
              }if (xe.argument(e.length === j, "Bad flags."), g.length > 0) {
                var n,
                    o = [];if (j > 0) {
                  for (var p = 0; p < j; p += 1) {
                    f = e[p], n = {}, n.onCurve = !!(1 & f), n.lastPointOfContour = g.indexOf(p) >= 0, o.push(n);
                  }for (var q = 0, r = 0; r < j; r += 1) {
                    f = e[r], n = o[r], n.x = Fb(d, f, q, 2, 16), q = n.x;
                  }for (var s = 0, t = 0; t < j; t += 1) {
                    f = e[t], n = o[t], n.y = Fb(d, f, s, 4, 32), s = n.y;
                  }
                }a.points = o;
              } else a.points = [];
            } else if (0 === a.numberOfContours) a.points = [];else {
              a.isComposite = !0, a.points = [], a.components = [];for (var u = !0; u;) {
                e = d.parseUShort();var v = { glyphIndex: d.parseUShort(), xScale: 1, scale01: 0, scale10: 0, yScale: 1, dx: 0, dy: 0 };(1 & e) > 0 ? (2 & e) > 0 ? (v.dx = d.parseShort(), v.dy = d.parseShort()) : v.matchedPoints = [d.parseUShort(), d.parseUShort()] : (2 & e) > 0 ? (v.dx = d.parseChar(), v.dy = d.parseChar()) : v.matchedPoints = [d.parseByte(), d.parseByte()], (8 & e) > 0 ? v.xScale = v.yScale = d.parseF2Dot14() : (64 & e) > 0 ? (v.xScale = d.parseF2Dot14(), v.yScale = d.parseF2Dot14()) : (128 & e) > 0 && (v.xScale = d.parseF2Dot14(), v.scale01 = d.parseF2Dot14(), v.scale10 = d.parseF2Dot14(), v.yScale = d.parseF2Dot14()), a.components.push(v), u = !!(32 & e);
              }if (256 & e) {
                a.instructionLength = d.parseUShort(), a.instructions = [];for (var w = 0; w < a.instructionLength; w += 1) {
                  a.instructions.push(d.parseByte());
                }
              }
            }
          }function Hb(a, b) {
            for (var c = [], d = 0; d < a.length; d += 1) {
              var e = a[d],
                  f = { x: b.xScale * e.x + b.scale01 * e.y + b.dx, y: b.scale10 * e.x + b.yScale * e.y + b.dy, onCurve: e.onCurve, lastPointOfContour: e.lastPointOfContour };c.push(f);
            }return c;
          }function Ib(a) {
            for (var b = [], c = [], d = 0; d < a.length; d += 1) {
              var e = a[d];c.push(e), e.lastPointOfContour && (b.push(c), c = []);
            }return xe.argument(0 === c.length, "There are still points left in the current contour."), b;
          }function Jb(a) {
            var b = new r();if (!a) return b;for (var c = Ib(a), d = 0; d < c.length; ++d) {
              var e = c[d],
                  f = null,
                  g = e[e.length - 1],
                  h = e[0];if (g.onCurve) b.moveTo(g.x, g.y);else if (h.onCurve) b.moveTo(h.x, h.y);else {
                var i = { x: .5 * (g.x + h.x), y: .5 * (g.y + h.y) };b.moveTo(i.x, i.y);
              }for (var j = 0; j < e.length; ++j) {
                if (f = g, g = h, h = e[(j + 1) % e.length], g.onCurve) b.lineTo(g.x, g.y);else {
                  var k = h;f.onCurve || { x: .5 * (g.x + f.x), y: .5 * (g.y + f.y) }, h.onCurve || (k = { x: .5 * (g.x + h.x), y: .5 * (g.y + h.y) }), b.quadraticCurveTo(g.x, g.y, k.x, k.y);
                }
              }b.closePath();
            }return b;
          }function Kb(a, b) {
            if (b.isComposite) for (var c = 0; c < b.components.length; c += 1) {
              var d = b.components[c],
                  e = a.get(d.glyphIndex);if (e.getPath(), e.points) {
                var f = void 0;if (void 0 === d.matchedPoints) f = Hb(e.points, d);else {
                  if (d.matchedPoints[0] > b.points.length - 1 || d.matchedPoints[1] > e.points.length - 1) throw Error("Matched points out of range in " + b.name);var g = b.points[d.matchedPoints[0]],
                      h = e.points[d.matchedPoints[1]],
                      i = { xScale: d.xScale, scale01: d.scale01, scale10: d.scale10, yScale: d.yScale, dx: 0, dy: 0 };h = Hb([h], i)[0], i.dx = g.x - h.x, i.dy = g.y - h.y, f = Hb(e.points, i);
                }b.points = b.points.concat(f);
              }
            }return Jb(b.points);
          }function Lb(a, b, c, d) {
            for (var e = new Se.GlyphSet(d), f = 0; f < c.length - 1; f += 1) {
              var g = c[f];g !== c[f + 1] ? e.push(f, Se.ttfGlyphLoader(d, f, Gb, a, b + g, Kb)) : e.push(f, Se.glyphLoader(d, f));
            }return e;
          }function Mb(a) {
            this.font = a, this.getCommands = function (a) {
              return vf.getPath(a).commands;
            }, this._fpgmState = this._prepState = void 0, this._errorState = 0;
          }function Nb(a) {
            return a;
          }function Ob(a) {
            return Math.sign(a) * Math.round(Math.abs(a));
          }function Pb(a) {
            return Math.sign(a) * Math.round(Math.abs(2 * a)) / 2;
          }function Qb(a) {
            return Math.sign(a) * (Math.round(Math.abs(a) + .5) - .5);
          }function Rb(a) {
            return Math.sign(a) * Math.ceil(Math.abs(a));
          }function Sb(a) {
            return Math.sign(a) * Math.floor(Math.abs(a));
          }function Tb(a, b) {
            this.x = a, this.y = b, this.axis = void 0, this.slope = b / a, this.normalSlope = -a / b, Object.freeze(this);
          }function Ub(a, b) {
            var c = Math.sqrt(a * a + b * b);return a /= c, b /= c, 1 === a && 0 === b ? xf : 0 === a && 1 === b ? yf : new Tb(a, b);
          }function Vb(a, b, c, d) {
            this.x = this.xo = Math.round(64 * a) / 64, this.y = this.yo = Math.round(64 * b) / 64, this.lastPointOfContour = c, this.onCurve = d, this.prevPointOnContour = void 0, this.nextPointOnContour = void 0, this.xTouched = !1, this.yTouched = !1, Object.preventExtensions(this);
          }function Wb(a, b) {
            switch (this.env = a, this.stack = [], this.prog = b, a) {case "glyf":
                this.zp0 = this.zp1 = this.zp2 = 1, this.rp0 = this.rp1 = this.rp2 = 0;case "prep":
                this.fv = this.pv = this.dpv = xf, this.round = Ob;}
          }function Xb(a) {
            for (var b = a.tZone = new Array(a.gZone.length), c = 0; c < b.length; c++) {
              b[c] = new Vb(0, 0);
            }
          }function Yb(a, b) {
            var c,
                d = a.prog,
                e = a.ip,
                f = 1;do {
              if (88 === (c = d[++e])) f++;else if (89 === c) f--;else if (64 === c) e += d[e + 1] + 1;else if (65 === c) e += 2 * d[e + 1] + 1;else if (c >= 176 && c <= 183) e += c - 176 + 1;else if (c >= 184 && c <= 191) e += 2 * (c - 184 + 1);else if (b && 1 === f && 27 === c) break;
            } while (f > 0);a.ip = e;
          }function Zb(b, c) {
            a.DEBUG && console.log(c.step, "SVTCA[" + b.axis + "]"), c.fv = c.pv = c.dpv = b;
          }function $b(b, c) {
            a.DEBUG && console.log(c.step, "SPVTCA[" + b.axis + "]"), c.pv = c.dpv = b;
          }function _b(b, c) {
            a.DEBUG && console.log(c.step, "SFVTCA[" + b.axis + "]"), c.fv = b;
          }function ac(b, c) {
            var d = c.stack,
                e = d.pop(),
                f = d.pop(),
                g = c.z2[e],
                h = c.z1[f];a.DEBUG && console.log("SPVTL[" + b + "]", e, f);var i, j;b ? (i = g.y - h.y, j = h.x - g.x) : (i = h.x - g.x, j = h.y - g.y), c.pv = c.dpv = Ub(i, j);
          }function bc(b, c) {
            var d = c.stack,
                e = d.pop(),
                f = d.pop(),
                g = c.z2[e],
                h = c.z1[f];a.DEBUG && console.log("SFVTL[" + b + "]", e, f);var i, j;b ? (i = g.y - h.y, j = h.x - g.x) : (i = h.x - g.x, j = h.y - g.y), c.fv = Ub(i, j);
          }function cc(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop();a.DEBUG && console.log(b.step, "SPVFS[]", d, e), b.pv = b.dpv = Ub(e, d);
          }function dc(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop();a.DEBUG && console.log(b.step, "SPVFS[]", d, e), b.fv = Ub(e, d);
          }function ec(b) {
            var c = b.stack,
                d = b.pv;a.DEBUG && console.log(b.step, "GPV[]"), c.push(16384 * d.x), c.push(16384 * d.y);
          }function fc(b) {
            var c = b.stack,
                d = b.fv;a.DEBUG && console.log(b.step, "GFV[]"), c.push(16384 * d.x), c.push(16384 * d.y);
          }function gc(b) {
            b.fv = b.pv, a.DEBUG && console.log(b.step, "SFVTPV[]");
          }function hc(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop(),
                f = c.pop(),
                g = c.pop(),
                h = c.pop(),
                i = b.z0,
                j = b.z1,
                k = i[d],
                l = i[e],
                m = j[f],
                n = j[g],
                o = b.z2[h];a.DEBUG && console.log("ISECT[], ", d, e, f, g, h);var p = k.x,
                q = k.y,
                r = l.x,
                s = l.y,
                t = m.x,
                u = m.y,
                v = n.x,
                w = n.y,
                x = (p - r) * (u - w) - (q - s) * (t - v),
                y = p * s - q * r,
                z = t * w - u * v;o.x = (y * (t - v) - z * (p - r)) / x, o.y = (y * (u - w) - z * (q - s)) / x;
          }function ic(b) {
            b.rp0 = b.stack.pop(), a.DEBUG && console.log(b.step, "SRP0[]", b.rp0);
          }function jc(b) {
            b.rp1 = b.stack.pop(), a.DEBUG && console.log(b.step, "SRP1[]", b.rp1);
          }function kc(b) {
            b.rp2 = b.stack.pop(), a.DEBUG && console.log(b.step, "SRP2[]", b.rp2);
          }function lc(b) {
            var c = b.stack.pop();switch (a.DEBUG && console.log(b.step, "SZP0[]", c), b.zp0 = c, c) {case 0:
                b.tZone || Xb(b), b.z0 = b.tZone;break;case 1:
                b.z0 = b.gZone;break;default:
                throw new Error("Invalid zone pointer");}
          }function mc(b) {
            var c = b.stack.pop();switch (a.DEBUG && console.log(b.step, "SZP1[]", c), b.zp1 = c, c) {case 0:
                b.tZone || Xb(b), b.z1 = b.tZone;break;case 1:
                b.z1 = b.gZone;break;default:
                throw new Error("Invalid zone pointer");}
          }function nc(b) {
            var c = b.stack.pop();switch (a.DEBUG && console.log(b.step, "SZP2[]", c), b.zp2 = c, c) {case 0:
                b.tZone || Xb(b), b.z2 = b.tZone;break;case 1:
                b.z2 = b.gZone;break;default:
                throw new Error("Invalid zone pointer");}
          }function oc(b) {
            var c = b.stack.pop();switch (a.DEBUG && console.log(b.step, "SZPS[]", c), b.zp0 = b.zp1 = b.zp2 = c, c) {case 0:
                b.tZone || Xb(b), b.z0 = b.z1 = b.z2 = b.tZone;break;case 1:
                b.z0 = b.z1 = b.z2 = b.gZone;break;default:
                throw new Error("Invalid zone pointer");}
          }function pc(b) {
            b.loop = b.stack.pop(), a.DEBUG && console.log(b.step, "SLOOP[]", b.loop);
          }function qc(b) {
            a.DEBUG && console.log(b.step, "RTG[]"), b.round = Ob;
          }function rc(b) {
            a.DEBUG && console.log(b.step, "RTHG[]"), b.round = Qb;
          }function sc(b) {
            var c = b.stack.pop();a.DEBUG && console.log(b.step, "SMD[]", c), b.minDis = c / 64;
          }function tc(b) {
            a.DEBUG && console.log(b.step, "ELSE[]"), Yb(b, !1);
          }function uc(b) {
            var c = b.stack.pop();a.DEBUG && console.log(b.step, "JMPR[]", c), b.ip += c - 1;
          }function vc(b) {
            var c = b.stack.pop();a.DEBUG && console.log(b.step, "SCVTCI[]", c), b.cvCutIn = c / 64;
          }function wc(b) {
            var c = b.stack;a.DEBUG && console.log(b.step, "DUP[]"), c.push(c[c.length - 1]);
          }function xc(b) {
            a.DEBUG && console.log(b.step, "POP[]"), b.stack.pop();
          }function yc(b) {
            a.DEBUG && console.log(b.step, "CLEAR[]"), b.stack.length = 0;
          }function zc(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop();a.DEBUG && console.log(b.step, "SWAP[]"), c.push(d), c.push(e);
          }function Ac(b) {
            var c = b.stack;a.DEBUG && console.log(b.step, "DEPTH[]"), c.push(c.length);
          }function Bc(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop();a.DEBUG && console.log(b.step, "LOOPCALL[]", d, e);var f = b.ip,
                g = b.prog;b.prog = b.funcs[d];for (var h = 0; h < e; h++) {
              sf(b), a.DEBUG && console.log(++b.step, h + 1 < e ? "next loopcall" : "done loopcall", h);
            }b.ip = f, b.prog = g;
          }function Cc(b) {
            var c = b.stack.pop();a.DEBUG && console.log(b.step, "CALL[]", c);var d = b.ip,
                e = b.prog;b.prog = b.funcs[c], sf(b), b.ip = d, b.prog = e, a.DEBUG && console.log(++b.step, "returning from", c);
          }function Dc(b) {
            var c = b.stack,
                d = c.pop();a.DEBUG && console.log(b.step, "CINDEX[]", d), c.push(c[c.length - d]);
          }function Ec(b) {
            var c = b.stack,
                d = c.pop();a.DEBUG && console.log(b.step, "MINDEX[]", d), c.push(c.splice(c.length - d, 1)[0]);
          }function Fc(b) {
            if ("fpgm" !== b.env) throw new Error("FDEF not allowed here");var c = b.stack,
                d = b.prog,
                e = b.ip,
                f = c.pop(),
                g = e;for (a.DEBUG && console.log(b.step, "FDEF[]", f); 45 !== d[++e];) {}b.ip = e, b.funcs[f] = d.slice(g + 1, e);
          }function Gc(b, c) {
            var d = c.stack.pop(),
                e = c.z0[d],
                f = c.fv,
                g = c.pv;a.DEBUG && console.log(c.step, "MDAP[" + b + "]", d);var h = g.distance(e, zf);b && (h = c.round(h)), f.setRelative(e, zf, h, g), f.touch(e), c.rp0 = c.rp1 = d;
          }function Hc(b, c) {
            var d,
                e,
                f,
                g = c.z2,
                h = g.length - 2;a.DEBUG && console.log(c.step, "IUP[" + b.axis + "]");for (var i = 0; i < h; i++) {
              d = g[i], b.touched(d) || (e = d.prevTouched(b)) !== d && (f = d.nextTouched(b), e === f && b.setRelative(d, d, b.distance(e, e, !1, !0), b, !0), b.interpolate(d, e, f, b));
            }
          }function Ic(b, c) {
            for (var d = c.stack, e = b ? c.rp1 : c.rp2, f = (b ? c.z0 : c.z1)[e], g = c.fv, h = c.pv, i = c.loop, j = c.z2; i--;) {
              var k = d.pop(),
                  l = j[k],
                  m = h.distance(f, f, !1, !0);g.setRelative(l, l, m, h), g.touch(l), a.DEBUG && console.log(c.step, (c.loop > 1 ? "loop " + (c.loop - i) + ": " : "") + "SHP[" + (b ? "rp1" : "rp2") + "]", k);
            }c.loop = 1;
          }function Jc(b, c) {
            var d = c.stack,
                e = b ? c.rp1 : c.rp2,
                f = (b ? c.z0 : c.z1)[e],
                g = c.fv,
                h = c.pv,
                i = d.pop(),
                j = c.z2[c.contours[i]],
                k = j;a.DEBUG && console.log(c.step, "SHC[" + b + "]", i);var l = h.distance(f, f, !1, !0);do {
              k !== f && g.setRelative(k, k, l, h), k = k.nextPointOnContour;
            } while (k !== j);
          }function Kc(b, c) {
            var d = c.stack,
                e = b ? c.rp1 : c.rp2,
                f = (b ? c.z0 : c.z1)[e],
                g = c.fv,
                h = c.pv,
                i = d.pop();a.DEBUG && console.log(c.step, "SHZ[" + b + "]", i);var j;switch (i) {case 0:
                j = c.tZone;break;case 1:
                j = c.gZone;break;default:
                throw new Error("Invalid zone");}for (var k, l = h.distance(f, f, !1, !0), m = j.length - 2, n = 0; n < m; n++) {
              k = j[n], g.setRelative(k, k, l, h);
            }
          }function Lc(b) {
            for (var c = b.stack, d = b.loop, e = b.fv, f = c.pop() / 64, g = b.z2; d--;) {
              var h = c.pop(),
                  i = g[h];a.DEBUG && console.log(b.step, (b.loop > 1 ? "loop " + (b.loop - d) + ": " : "") + "SHPIX[]", h, f), e.setRelative(i, i, f), e.touch(i);
            }b.loop = 1;
          }function Mc(b) {
            for (var c = b.stack, d = b.rp1, e = b.rp2, f = b.loop, g = b.z0[d], h = b.z1[e], i = b.fv, j = b.dpv, k = b.z2; f--;) {
              var l = c.pop(),
                  m = k[l];a.DEBUG && console.log(b.step, (b.loop > 1 ? "loop " + (b.loop - f) + ": " : "") + "IP[]", l, d, "<->", e), i.interpolate(m, g, h, j), i.touch(m);
            }b.loop = 1;
          }function Nc(b, c) {
            var d = c.stack,
                e = d.pop() / 64,
                f = d.pop(),
                g = c.z1[f],
                h = c.z0[c.rp0],
                i = c.fv,
                j = c.pv;i.setRelative(g, h, e, j), i.touch(g), a.DEBUG && console.log(c.step, "MSIRP[" + b + "]", e, f), c.rp1 = c.rp0, c.rp2 = f, b && (c.rp0 = f);
          }function Oc(b) {
            for (var c = b.stack, d = b.rp0, e = b.z0[d], f = b.loop, g = b.fv, h = b.pv, i = b.z1; f--;) {
              var j = c.pop(),
                  k = i[j];a.DEBUG && console.log(b.step, (b.loop > 1 ? "loop " + (b.loop - f) + ": " : "") + "ALIGNRP[]", j), g.setRelative(k, e, 0, h), g.touch(k);
            }b.loop = 1;
          }function Pc(b) {
            a.DEBUG && console.log(b.step, "RTDG[]"), b.round = Pb;
          }function Qc(b, c) {
            var d = c.stack,
                e = d.pop(),
                f = d.pop(),
                g = c.z0[f],
                h = c.fv,
                i = c.pv,
                j = c.cvt[e];a.DEBUG && console.log(c.step, "MIAP[" + b + "]", e, "(", j, ")", f);var k = i.distance(g, zf);b && (Math.abs(k - j) < c.cvCutIn && (k = j), k = c.round(k)), h.setRelative(g, zf, k, i), 0 === c.zp0 && (g.xo = g.x, g.yo = g.y), h.touch(g), c.rp0 = c.rp1 = f;
          }function Rc(b) {
            var c = b.prog,
                d = b.ip,
                e = b.stack,
                f = c[++d];a.DEBUG && console.log(b.step, "NPUSHB[]", f);for (var g = 0; g < f; g++) {
              e.push(c[++d]);
            }b.ip = d;
          }function Sc(b) {
            var c = b.ip,
                d = b.prog,
                e = b.stack,
                f = d[++c];a.DEBUG && console.log(b.step, "NPUSHW[]", f);for (var g = 0; g < f; g++) {
              var h = d[++c] << 8 | d[++c];32768 & h && (h = -(1 + (65535 ^ h))), e.push(h);
            }b.ip = c;
          }function Tc(b) {
            var c = b.stack,
                d = b.store;d || (d = b.store = []);var e = c.pop(),
                f = c.pop();a.DEBUG && console.log(b.step, "WS", e, f), d[f] = e;
          }function Uc(b) {
            var c = b.stack,
                d = b.store,
                e = c.pop();a.DEBUG && console.log(b.step, "RS", e);var f = d && d[e] || 0;c.push(f);
          }function Vc(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop();a.DEBUG && console.log(b.step, "WCVTP", d, e), b.cvt[e] = d / 64;
          }function Wc(b) {
            var c = b.stack,
                d = c.pop();a.DEBUG && console.log(b.step, "RCVT", d), c.push(64 * b.cvt[d]);
          }function Xc(b, c) {
            var d = c.stack,
                e = d.pop(),
                f = c.z2[e];a.DEBUG && console.log(c.step, "GC[" + b + "]", e), d.push(64 * c.dpv.distance(f, zf, b, !1));
          }function Yc(b, c) {
            var d = c.stack,
                e = d.pop(),
                f = d.pop(),
                g = c.z1[e],
                h = c.z0[f],
                i = c.dpv.distance(h, g, b, b);a.DEBUG && console.log(c.step, "MD[" + b + "]", e, f, "->", i), c.stack.push(Math.round(64 * i));
          }function Zc(b) {
            a.DEBUG && console.log(b.step, "MPPEM[]"), b.stack.push(b.ppem);
          }function $c(b) {
            a.DEBUG && console.log(b.step, "FLIPON[]"), b.autoFlip = !0;
          }function _c(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop();a.DEBUG && console.log(b.step, "LT[]", d, e), c.push(e < d ? 1 : 0);
          }function ad(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop();a.DEBUG && console.log(b.step, "LTEQ[]", d, e), c.push(e <= d ? 1 : 0);
          }function bd(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop();a.DEBUG && console.log(b.step, "GT[]", d, e), c.push(e > d ? 1 : 0);
          }function cd(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop();a.DEBUG && console.log(b.step, "GTEQ[]", d, e), c.push(e >= d ? 1 : 0);
          }function dd(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop();a.DEBUG && console.log(b.step, "EQ[]", d, e), c.push(d === e ? 1 : 0);
          }function ed(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop();a.DEBUG && console.log(b.step, "NEQ[]", d, e), c.push(d !== e ? 1 : 0);
          }function fd(b) {
            var c = b.stack,
                d = c.pop();a.DEBUG && console.log(b.step, "ODD[]", d), c.push(Math.trunc(d) % 2 ? 1 : 0);
          }function gd(b) {
            var c = b.stack,
                d = c.pop();a.DEBUG && console.log(b.step, "EVEN[]", d), c.push(Math.trunc(d) % 2 ? 0 : 1);
          }function hd(b) {
            var c = b.stack.pop();a.DEBUG && console.log(b.step, "IF[]", c), c || (Yb(b, !0), a.DEBUG && console.log(b.step, "EIF[]"));
          }function id(b) {
            a.DEBUG && console.log(b.step, "EIF[]");
          }function jd(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop();a.DEBUG && console.log(b.step, "AND[]", d, e), c.push(d && e ? 1 : 0);
          }function kd(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop();a.DEBUG && console.log(b.step, "OR[]", d, e), c.push(d || e ? 1 : 0);
          }function ld(b) {
            var c = b.stack,
                d = c.pop();a.DEBUG && console.log(b.step, "NOT[]", d), c.push(d ? 0 : 1);
          }function md(b, c) {
            var d = c.stack,
                e = d.pop(),
                f = c.fv,
                g = c.pv,
                h = c.ppem,
                i = c.deltaBase + 16 * (b - 1),
                j = c.deltaShift,
                k = c.z0;a.DEBUG && console.log(c.step, "DELTAP[" + b + "]", e, d);for (var l = 0; l < e; l++) {
              var m = d.pop(),
                  n = d.pop();if (i + ((240 & n) >> 4) === h) {
                var o = (15 & n) - 8;o >= 0 && o++, a.DEBUG && console.log(c.step, "DELTAPFIX", m, "by", o * j);var p = k[m];f.setRelative(p, p, o * j, g);
              }
            }
          }function nd(b) {
            var c = b.stack,
                d = c.pop();a.DEBUG && console.log(b.step, "SDB[]", d), b.deltaBase = d;
          }function od(b) {
            var c = b.stack,
                d = c.pop();a.DEBUG && console.log(b.step, "SDS[]", d), b.deltaShift = Math.pow(.5, d);
          }function pd(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop();a.DEBUG && console.log(b.step, "ADD[]", d, e), c.push(e + d);
          }function qd(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop();a.DEBUG && console.log(b.step, "SUB[]", d, e), c.push(e - d);
          }function rd(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop();a.DEBUG && console.log(b.step, "DIV[]", d, e), c.push(64 * e / d);
          }function sd(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop();a.DEBUG && console.log(b.step, "MUL[]", d, e), c.push(e * d / 64);
          }function td(b) {
            var c = b.stack,
                d = c.pop();a.DEBUG && console.log(b.step, "ABS[]", d), c.push(Math.abs(d));
          }function ud(b) {
            var c = b.stack,
                d = c.pop();a.DEBUG && console.log(b.step, "NEG[]", d), c.push(-d);
          }function vd(b) {
            var c = b.stack,
                d = c.pop();a.DEBUG && console.log(b.step, "FLOOR[]", d), c.push(64 * Math.floor(d / 64));
          }function wd(b) {
            var c = b.stack,
                d = c.pop();a.DEBUG && console.log(b.step, "CEILING[]", d), c.push(64 * Math.ceil(d / 64));
          }function xd(b, c) {
            var d = c.stack,
                e = d.pop();a.DEBUG && console.log(c.step, "ROUND[]"), d.push(64 * c.round(e / 64));
          }function yd(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop();a.DEBUG && console.log(b.step, "WCVTF[]", d, e), b.cvt[e] = d * b.ppem / b.font.unitsPerEm;
          }function zd(b, c) {
            var d = c.stack,
                e = d.pop(),
                f = c.ppem,
                g = c.deltaBase + 16 * (b - 1),
                h = c.deltaShift;a.DEBUG && console.log(c.step, "DELTAC[" + b + "]", e, d);for (var i = 0; i < e; i++) {
              var j = d.pop(),
                  k = d.pop();if (g + ((240 & k) >> 4) === f) {
                var l = (15 & k) - 8;l >= 0 && l++;var m = l * h;a.DEBUG && console.log(c.step, "DELTACFIX", j, "by", m), c.cvt[j] += m;
              }
            }
          }function Ad(b) {
            var c = b.stack.pop();a.DEBUG && console.log(b.step, "SROUND[]", c), b.round = wf;var d;switch (192 & c) {case 0:
                d = .5;break;case 64:
                d = 1;break;case 128:
                d = 2;break;default:
                throw new Error("invalid SROUND value");}switch (b.srPeriod = d, 48 & c) {case 0:
                b.srPhase = 0;break;case 16:
                b.srPhase = .25 * d;break;case 32:
                b.srPhase = .5 * d;break;case 48:
                b.srPhase = .75 * d;break;default:
                throw new Error("invalid SROUND value");}c &= 15, b.srThreshold = 0 === c ? 0 : (c / 8 - .5) * d;
          }function Bd(b) {
            var c = b.stack.pop();a.DEBUG && console.log(b.step, "S45ROUND[]", c), b.round = wf;var d;switch (192 & c) {case 0:
                d = Math.sqrt(2) / 2;break;case 64:
                d = Math.sqrt(2);break;case 128:
                d = 2 * Math.sqrt(2);break;default:
                throw new Error("invalid S45ROUND value");}switch (b.srPeriod = d, 48 & c) {case 0:
                b.srPhase = 0;break;case 16:
                b.srPhase = .25 * d;break;case 32:
                b.srPhase = .5 * d;break;case 48:
                b.srPhase = .75 * d;break;default:
                throw new Error("invalid S45ROUND value");}c &= 15, b.srThreshold = 0 === c ? 0 : (c / 8 - .5) * d;
          }function Cd(b) {
            a.DEBUG && console.log(b.step, "ROFF[]"), b.round = Nb;
          }function Dd(b) {
            a.DEBUG && console.log(b.step, "RUTG[]"), b.round = Rb;
          }function Ed(b) {
            a.DEBUG && console.log(b.step, "RDTG[]"), b.round = Sb;
          }function Fd(b) {
            var c = b.stack.pop();a.DEBUG && console.log(b.step, "SCANCTRL[]", c);
          }function Gd(b, c) {
            var d = c.stack,
                e = d.pop(),
                f = d.pop(),
                g = c.z2[e],
                h = c.z1[f];a.DEBUG && console.log(c.step, "SDPVTL[" + b + "]", e, f);var i, j;b ? (i = g.y - h.y, j = h.x - g.x) : (i = h.x - g.x, j = h.y - g.y), c.dpv = Ub(i, j);
          }function Hd(b) {
            var c = b.stack,
                d = c.pop(),
                e = 0;a.DEBUG && console.log(b.step, "GETINFO[]", d), 1 & d && (e = 35), 32 & d && (e |= 4096), c.push(e);
          }function Id(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop(),
                f = c.pop();a.DEBUG && console.log(b.step, "ROLL[]"), c.push(e), c.push(d), c.push(f);
          }function Jd(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop();a.DEBUG && console.log(b.step, "MAX[]", d, e), c.push(Math.max(e, d));
          }function Kd(b) {
            var c = b.stack,
                d = c.pop(),
                e = c.pop();a.DEBUG && console.log(b.step, "MIN[]", d, e), c.push(Math.min(e, d));
          }function Ld(b) {
            var c = b.stack.pop();a.DEBUG && console.log(b.step, "SCANTYPE[]", c);
          }function Md(b) {
            var c = b.stack.pop(),
                d = b.stack.pop();switch (a.DEBUG && console.log(b.step, "INSTCTRL[]", c, d), c) {case 1:
                return void (b.inhibitGridFit = !!d);case 2:
                return void (b.ignoreCvt = !!d);default:
                throw new Error("invalid INSTCTRL[] selector");}
          }function Nd(b, c) {
            var d = c.stack,
                e = c.prog,
                f = c.ip;a.DEBUG && console.log(c.step, "PUSHB[" + b + "]");for (var g = 0; g < b; g++) {
              d.push(e[++f]);
            }c.ip = f;
          }function Od(b, c) {
            var d = c.ip,
                e = c.prog,
                f = c.stack;a.DEBUG && console.log(c.ip, "PUSHW[" + b + "]");for (var g = 0; g < b; g++) {
              var h = e[++d] << 8 | e[++d];32768 & h && (h = -(1 + (65535 ^ h))), f.push(h);
            }c.ip = d;
          }function Pd(b, c, d, e, f, g) {
            var h,
                i,
                j,
                k,
                l = g.stack,
                m = b && l.pop(),
                n = l.pop(),
                o = g.rp0,
                p = g.z0[o],
                q = g.z1[n],
                r = g.minDis,
                s = g.fv,
                t = g.dpv;i = h = t.distance(q, p, !0, !0), j = i >= 0 ? 1 : -1, i = Math.abs(i), b && (k = g.cvt[m], e && Math.abs(i - k) < g.cvCutIn && (i = k)), d && i < r && (i = r), e && (i = g.round(i)), s.setRelative(q, p, j * i, t), s.touch(q), a.DEBUG && console.log(g.step, (b ? "MIRP[" : "MDRP[") + (c ? "M" : "m") + (d ? ">" : "_") + (e ? "R" : "_") + (0 === f ? "Gr" : 1 === f ? "Bl" : 2 === f ? "Wh" : "") + "]", b ? m + "(" + g.cvt[m] + "," + k + ")" : "", n, "(d =", h, "->", j * i, ")"), g.rp1 = g.rp0, g.rp2 = n, c && (g.rp0 = n);
          }function Qd(a) {
            a = a || {}, a.empty || (Eb(a.familyName, "When creating a new Font object, familyName is required."), Eb(a.styleName, "When creating a new Font object, styleName is required."), Eb(a.unitsPerEm, "When creating a new Font object, unitsPerEm is required."), Eb(a.ascender, "When creating a new Font object, ascender is required."), Eb(a.descender, "When creating a new Font object, descender is required."), Eb(a.descender < 0, "Descender should be negative (e.g. -512)."), this.names = { fontFamily: { en: a.familyName || " " }, fontSubfamily: { en: a.styleName || " " }, fullName: { en: a.fullName || a.familyName + " " + a.styleName }, postScriptName: { en: a.postScriptName || (a.familyName + a.styleName).replace(/\s/g, "") }, designer: { en: a.designer || " " }, designerURL: { en: a.designerURL || " " }, manufacturer: { en: a.manufacturer || " " }, manufacturerURL: { en: a.manufacturerURL || " " }, license: { en: a.license || " " }, licenseURL: { en: a.licenseURL || " " }, version: { en: a.version || "Version 0.1" }, description: { en: a.description || " " }, copyright: { en: a.copyright || " " }, trademark: { en: a.trademark || " " } }, this.unitsPerEm = a.unitsPerEm || 1e3, this.ascender = a.ascender, this.descender = a.descender, this.createdTimestamp = a.createdTimestamp, this.tables = { os2: { usWeightClass: a.weightClass || this.usWeightClasses.MEDIUM, usWidthClass: a.widthClass || this.usWidthClasses.MEDIUM, fsSelection: a.fsSelection || this.fsSelectionValues.REGULAR } }), this.supported = !0, this.glyphs = new Se.GlyphSet(this, a.glyphs || []), this.encoding = new X(this), this.position = new xb(this), this.substitution = new yb(this), this.tables = this.tables || {}, Object.defineProperty(this, "hinting", { get: function get() {
                return this._hinting ? this._hinting : "truetype" === this.outlinesFormat ? this._hinting = new Mb(this) : void 0;
              } });
          }function Rd(a, b) {
            var c = JSON.stringify(a),
                d = 256;for (var e in b) {
              var f = parseInt(e);if (f && !(f < 256)) {
                if (JSON.stringify(b[e]) === c) return f;d <= f && (d = f + 1);
              }
            }return b[d] = a, d;
          }function Sd(a, b, c) {
            var d = Rd(b.name, c);return [{ name: "tag_" + a, type: "TAG", value: b.tag }, { name: "minValue_" + a, type: "FIXED", value: b.minValue << 16 }, { name: "defaultValue_" + a, type: "FIXED", value: b.defaultValue << 16 }, { name: "maxValue_" + a, type: "FIXED", value: b.maxValue << 16 }, { name: "flags_" + a, type: "USHORT", value: 0 }, { name: "nameID_" + a, type: "USHORT", value: d }];
          }function Td(a, b, c) {
            var d = {},
                e = new Le.Parser(a, b);return d.tag = e.parseTag(), d.minValue = e.parseFixed(), d.defaultValue = e.parseFixed(), d.maxValue = e.parseFixed(), e.skip("uShort", 1), d.name = c[e.parseUShort()] || {}, d;
          }function Ud(a, b, c, d) {
            for (var e = Rd(b.name, d), f = [{ name: "nameID_" + a, type: "USHORT", value: e }, { name: "flags_" + a, type: "USHORT", value: 0 }], g = 0; g < c.length; ++g) {
              var h = c[g].tag;f.push({ name: "axis_" + a + " " + h, type: "FIXED", value: b.coordinates[h] << 16 });
            }return f;
          }function Vd(a, b, c, d) {
            var e = {},
                f = new Le.Parser(a, b);e.name = d[f.parseUShort()] || {}, f.skip("uShort", 1), e.coordinates = {};for (var g = 0; g < c.length; ++g) {
              e.coordinates[c[g].tag] = f.parseFixed();
            }return e;
          }function Wd(a, b) {
            var c = new Ie.Table("fvar", [{ name: "version", type: "ULONG", value: 65536 }, { name: "offsetToData", type: "USHORT", value: 0 }, { name: "countSizePairs", type: "USHORT", value: 2 }, { name: "axisCount", type: "USHORT", value: a.axes.length }, { name: "axisSize", type: "USHORT", value: 20 }, { name: "instanceCount", type: "USHORT", value: a.instances.length }, { name: "instanceSize", type: "USHORT", value: 4 + 4 * a.axes.length }]);c.offsetToData = c.sizeOf();for (var d = 0; d < a.axes.length; d++) {
              c.fields = c.fields.concat(Sd(d, a.axes[d], b));
            }for (var e = 0; e < a.instances.length; e++) {
              c.fields = c.fields.concat(Ud(e, a.instances[e], a.axes, b));
            }return c;
          }function Xd(a, b, c) {
            var d = new Le.Parser(a, b),
                e = d.parseULong();xe.argument(65536 === e, "Unsupported fvar table version.");var f = d.parseOffset16();d.skip("uShort", 1);for (var g = d.parseUShort(), h = d.parseUShort(), i = d.parseUShort(), j = d.parseUShort(), k = [], l = 0; l < g; l++) {
              k.push(Td(a, b + f + l * h, c));
            }for (var m = [], n = b + f + g * h, o = 0; o < i; o++) {
              m.push(Vd(a, n + o * j, k, c));
            }return { axes: k, instances: m };
          }function Yd(a, b) {
            b = b || 0;var c = new Q(a, b),
                d = c.parseVersion(1);return xe.argument(1 === d || 1.1 === d, "Unsupported GPOS table version " + d), 1 === d ? { version: d, scripts: c.parseScriptList(), features: c.parseFeatureList(), lookups: c.parseLookupList(Df) } : { version: d, scripts: c.parseScriptList(), features: c.parseFeatureList(), lookups: c.parseLookupList(Df), variations: c.parseFeatureVariationsList() };
          }function Zd(a) {
            return new Ie.Table("GPOS", [{ name: "version", type: "ULONG", value: 65536 }, { name: "scripts", type: "TABLE", value: new Ie.ScriptList(a.scripts) }, { name: "features", type: "TABLE", value: new Ie.FeatureList(a.features) }, { name: "lookups", type: "TABLE", value: new Ie.LookupList(a.lookups, Ef) }]);
          }function $d(a) {
            var b = {};a.skip("uShort");var c = a.parseUShort();xe.argument(0 === c, "Unsupported kern sub-table version."), a.skip("uShort", 2);var d = a.parseUShort();a.skip("uShort", 3);for (var e = 0; e < d; e += 1) {
              var f = a.parseUShort(),
                  g = a.parseUShort(),
                  h = a.parseShort();b[f + "," + g] = h;
            }return b;
          }function _d(a) {
            var b = {};a.skip("uShort"), a.parseULong() > 1 && console.warn("Only the first kern subtable is supported."), a.skip("uLong");var c = a.parseUShort(),
                d = 255 & c;if (a.skip("uShort"), 0 === d) {
              var e = a.parseUShort();a.skip("uShort", 3);for (var f = 0; f < e; f += 1) {
                var g = a.parseUShort(),
                    h = a.parseUShort(),
                    i = a.parseShort();b[g + "," + h] = i;
              }
            }return b;
          }function ae(a, b) {
            var c = new Le.Parser(a, b),
                d = c.parseUShort();if (0 === d) return $d(c);if (1 === d) return _d(c);throw new Error("Unsupported kern table version (" + d + ").");
          }function be(a, b, c, d) {
            for (var e = new Le.Parser(a, b), f = d ? e.parseUShort : e.parseULong, g = [], h = 0; h < c + 1; h += 1) {
              var i = f.call(e);d && (i *= 2), g.push(i);
            }return g;
          }function ce(a, c) {
            b("fs").readFile(a, function (a, b) {
              if (a) return c(a.message);c(null, Cb(b));
            });
          }function de(a, b) {
            var c = new XMLHttpRequest();c.open("get", a, !0), c.responseType = "arraybuffer", c.onload = function () {
              return c.response ? b(null, c.response) : b("Font could not be loaded: " + c.statusText);
            }, c.onerror = function () {
              b("Font could not be loaded");
            }, c.send();
          }function ee(a, b) {
            for (var c = [], d = 12, e = 0; e < b; e += 1) {
              var f = Le.getTag(a, d),
                  g = Le.getULong(a, d + 4),
                  h = Le.getULong(a, d + 8),
                  i = Le.getULong(a, d + 12);c.push({ tag: f, checksum: g, offset: h, length: i, compression: !1 }), d += 16;
            }return c;
          }function fe(a, b) {
            for (var c = [], d = 44, e = 0; e < b; e += 1) {
              var f = Le.getTag(a, d),
                  g = Le.getULong(a, d + 4),
                  h = Le.getULong(a, d + 8),
                  i = Le.getULong(a, d + 12),
                  j = void 0;j = h < i && "WOFF", c.push({ tag: f, offset: g, compression: j, compressedLength: h, length: i }), d += 20;
            }return c;
          }function ge(a, b) {
            if ("WOFF" === b.compression) {
              var c = new Uint8Array(a.buffer, b.offset + 2, b.compressedLength - 2),
                  d = new Uint8Array(b.length);if (we(c, d), d.byteLength !== b.length) throw new Error("Decompression error: " + b.tag + " decompressed length doesn't match recorded length");return { data: new DataView(d.buffer, 0), offset: 0 };
            }return { data: a, offset: b.offset };
          }function he(a) {
            var b,
                c,
                d,
                e = new Qd({ empty: !0 }),
                f = new DataView(a, 0),
                g = [],
                h = Le.getTag(f, 0);if (h === String.fromCharCode(0, 1, 0, 0) || "true" === h || "typ1" === h) e.outlinesFormat = "truetype", d = Le.getUShort(f, 4), g = ee(f, d);else if ("OTTO" === h) e.outlinesFormat = "cff", d = Le.getUShort(f, 4), g = ee(f, d);else {
              if ("wOFF" !== h) throw new Error("Unsupported OpenType signature " + h);var i = Le.getTag(f, 4);if (i === String.fromCharCode(0, 1, 0, 0)) e.outlinesFormat = "truetype";else {
                if ("OTTO" !== i) throw new Error("Unsupported OpenType flavor " + h);e.outlinesFormat = "cff";
              }d = Le.getUShort(f, 12), g = fe(f, d);
            }for (var j, k, l, m, n, o, p, q, r, s, t, u = 0; u < d; u += 1) {
              var v = g[u],
                  w = void 0;switch (v.tag) {case "cmap":
                  w = ge(f, v), e.tables.cmap = Me.parse(w.data, w.offset), e.encoding = new Y(e.tables.cmap);break;case "cvt ":
                  w = ge(f, v), t = new Le.Parser(w.data, w.offset), e.tables.cvt = t.parseShortList(v.length / 2);break;case "fvar":
                  k = v;break;case "fpgm":
                  w = ge(f, v), t = new Le.Parser(w.data, w.offset), e.tables.fpgm = t.parseByteList(v.length);break;case "head":
                  w = ge(f, v), e.tables.head = We.parse(w.data, w.offset), e.unitsPerEm = e.tables.head.unitsPerEm, b = e.tables.head.indexToLocFormat;break;case "hhea":
                  w = ge(f, v), e.tables.hhea = Xe.parse(w.data, w.offset), e.ascender = e.tables.hhea.ascender, e.descender = e.tables.hhea.descender, e.numberOfHMetrics = e.tables.hhea.numberOfHMetrics;break;case "hmtx":
                  o = v;break;case "ltag":
                  w = ge(f, v), c = Ze.parse(w.data, w.offset);break;case "maxp":
                  w = ge(f, v), e.tables.maxp = $e.parse(w.data, w.offset), e.numGlyphs = e.tables.maxp.numGlyphs;break;case "name":
                  r = v;break;case "OS/2":
                  w = ge(f, v), e.tables.os2 = jf.parse(w.data, w.offset);break;case "post":
                  w = ge(f, v), e.tables.post = kf.parse(w.data, w.offset), e.glyphNames = new $(e.tables.post);break;case "prep":
                  w = ge(f, v), t = new Le.Parser(w.data, w.offset), e.tables.prep = t.parseByteList(v.length);break;case "glyf":
                  l = v;break;case "loca":
                  q = v;break;case "CFF ":
                  j = v;break;case "kern":
                  p = v;break;case "GPOS":
                  m = v;break;case "GSUB":
                  n = v;break;case "meta":
                  s = v;}
            }var x = ge(f, r);if (e.tables.name = gf.parse(x.data, x.offset, c), e.names = e.tables.name, l && q) {
              var y = 0 === b,
                  z = ge(f, q),
                  A = Hf.parse(z.data, z.offset, e.numGlyphs, y),
                  B = ge(f, l);e.glyphs = vf.parse(B.data, B.offset, A, e);
            } else {
              if (!j) throw new Error("Font doesn't contain TrueType or CFF outlines.");var C = ge(f, j);Ve.parse(C.data, C.offset, e);
            }var D = ge(f, o);if (Ye.parse(D.data, D.offset, e.numberOfHMetrics, e.numGlyphs, e.glyphs), _(e), p) {
              var E = ge(f, p);e.kerningPairs = Gf.parse(E.data, E.offset);
            } else e.kerningPairs = {};if (m) {
              var F = ge(f, m);e.tables.gpos = Ff.parse(F.data, F.offset), e.position.init();
            }if (n) {
              var G = ge(f, n);e.tables.gsub = of.parse(G.data, G.offset);
            }if (k) {
              var H = ge(f, k);e.tables.fvar = Cf.parse(H.data, H.offset, e.names);
            }if (s) {
              var I = ge(f, s);e.tables.meta = pf.parse(I.data, I.offset), e.metas = e.tables.meta;
            }return e;
          }function ie(a, b) {
            ("undefined" == typeof window ? ce : de)(a, function (a, c) {
              if (a) return b(a);var d;try {
                d = he(c);
              } catch (a) {
                return b(a, null);
              }return b(null, d);
            });
          }function je(a) {
            return he(Cb(b("fs").readFileSync(a)));
          }String.prototype.codePointAt || function () {
            var a = function () {
              try {
                var a = {},
                    b = Object.defineProperty,
                    c = b(a, a, a) && b;
              } catch (a) {}return c;
            }(),
                b = function b(a) {
              if (null == this) throw TypeError();var b = String(this),
                  c = b.length,
                  d = a ? Number(a) : 0;if (d != d && (d = 0), !(d < 0 || d >= c)) {
                var e,
                    f = b.charCodeAt(d);return f >= 55296 && f <= 56319 && c > d + 1 && (e = b.charCodeAt(d + 1)) >= 56320 && e <= 57343 ? 1024 * (f - 55296) + e - 56320 + 65536 : f;
              }
            };a ? a(String.prototype, "codePointAt", { value: b, configurable: !0, writable: !0 }) : String.prototype.codePointAt = b;
          }();var ke = 0,
              le = -3,
              me = new c(),
              ne = new c(),
              oe = new Uint8Array(30),
              pe = new Uint16Array(30),
              qe = new Uint8Array(30),
              re = new Uint16Array(30),
              se = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
              te = new c(),
              ue = new Uint8Array(320),
              ve = new Uint16Array(16);g(me, ne), f(oe, pe, 4, 3), f(qe, re, 2, 1), oe[28] = 0, pe[28] = 258;var we = o;q.prototype.isEmpty = function () {
            return isNaN(this.x1) || isNaN(this.y1) || isNaN(this.x2) || isNaN(this.y2);
          }, q.prototype.addPoint = function (a, b) {
            "number" == typeof a && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = a, this.x2 = a), a < this.x1 && (this.x1 = a), a > this.x2 && (this.x2 = a)), "number" == typeof b && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = b, this.y2 = b), b < this.y1 && (this.y1 = b), b > this.y2 && (this.y2 = b));
          }, q.prototype.addX = function (a) {
            this.addPoint(a, null);
          }, q.prototype.addY = function (a) {
            this.addPoint(null, a);
          }, q.prototype.addBezier = function (a, b, c, d, e, f, g, h) {
            var i = this,
                j = [a, b],
                k = [c, d],
                l = [e, f],
                m = [g, h];this.addPoint(a, b), this.addPoint(g, h);for (var n = 0; n <= 1; n++) {
              var o = 6 * j[n] - 12 * k[n] + 6 * l[n],
                  q = -3 * j[n] + 9 * k[n] - 9 * l[n] + 3 * m[n],
                  r = 3 * k[n] - 3 * j[n];if (0 !== q) {
                var s = Math.pow(o, 2) - 4 * r * q;if (!(s < 0)) {
                  var t = (-o + Math.sqrt(s)) / (2 * q);0 < t && t < 1 && (0 === n && i.addX(p(j[n], k[n], l[n], m[n], t)), 1 === n && i.addY(p(j[n], k[n], l[n], m[n], t)));var u = (-o - Math.sqrt(s)) / (2 * q);0 < u && u < 1 && (0 === n && i.addX(p(j[n], k[n], l[n], m[n], u)), 1 === n && i.addY(p(j[n], k[n], l[n], m[n], u)));
                }
              } else {
                if (0 === o) continue;var v = -r / o;0 < v && v < 1 && (0 === n && i.addX(p(j[n], k[n], l[n], m[n], v)), 1 === n && i.addY(p(j[n], k[n], l[n], m[n], v)));
              }
            }
          }, q.prototype.addQuad = function (a, b, c, d, e, f) {
            var g = a + 2 / 3 * (c - a),
                h = b + 2 / 3 * (d - b),
                i = g + 1 / 3 * (e - a),
                j = h + 1 / 3 * (f - b);this.addBezier(a, b, g, h, i, j, e, f);
          }, r.prototype.moveTo = function (a, b) {
            this.commands.push({ type: "M", x: a, y: b });
          }, r.prototype.lineTo = function (a, b) {
            this.commands.push({ type: "L", x: a, y: b });
          }, r.prototype.curveTo = r.prototype.bezierCurveTo = function (a, b, c, d, e, f) {
            this.commands.push({ type: "C", x1: a, y1: b, x2: c, y2: d, x: e, y: f });
          }, r.prototype.quadTo = r.prototype.quadraticCurveTo = function (a, b, c, d) {
            this.commands.push({ type: "Q", x1: a, y1: b, x: c, y: d });
          }, r.prototype.close = r.prototype.closePath = function () {
            this.commands.push({ type: "Z" });
          }, r.prototype.extend = function (a) {
            if (a.commands) a = a.commands;else if (a instanceof q) {
              var b = a;return this.moveTo(b.x1, b.y1), this.lineTo(b.x2, b.y1), this.lineTo(b.x2, b.y2), this.lineTo(b.x1, b.y2), void this.close();
            }Array.prototype.push.apply(this.commands, a);
          }, r.prototype.getBoundingBox = function () {
            for (var a = this, b = new q(), c = 0, d = 0, e = 0, f = 0, g = 0; g < this.commands.length; g++) {
              var h = a.commands[g];switch (h.type) {case "M":
                  b.addPoint(h.x, h.y), c = e = h.x, d = f = h.y;break;case "L":
                  b.addPoint(h.x, h.y), e = h.x, f = h.y;break;case "Q":
                  b.addQuad(e, f, h.x1, h.y1, h.x, h.y), e = h.x, f = h.y;break;case "C":
                  b.addBezier(e, f, h.x1, h.y1, h.x2, h.y2, h.x, h.y), e = h.x, f = h.y;break;case "Z":
                  e = c, f = d;break;default:
                  throw new Error("Unexpected path command " + h.type);}
            }return b.isEmpty() && b.addPoint(0, 0), b;
          }, r.prototype.draw = function (a) {
            var b = this;a.beginPath();for (var c = 0; c < this.commands.length; c += 1) {
              var d = b.commands[c];"M" === d.type ? a.moveTo(d.x, d.y) : "L" === d.type ? a.lineTo(d.x, d.y) : "C" === d.type ? a.bezierCurveTo(d.x1, d.y1, d.x2, d.y2, d.x, d.y) : "Q" === d.type ? a.quadraticCurveTo(d.x1, d.y1, d.x, d.y) : "Z" === d.type && a.closePath();
            }this.fill && (a.fillStyle = this.fill, a.fill()), this.stroke && (a.strokeStyle = this.stroke, a.lineWidth = this.strokeWidth, a.stroke());
          }, r.prototype.toPathData = function (a) {
            function b(b) {
              return Math.round(b) === b ? "" + Math.round(b) : b.toFixed(a);
            }function c() {
              for (var a = arguments, c = "", d = 0; d < arguments.length; d += 1) {
                var e = a[d];e >= 0 && d > 0 && (c += " "), c += b(e);
              }return c;
            }var d = this;a = void 0 !== a ? a : 2;for (var e = "", f = 0; f < this.commands.length; f += 1) {
              var g = d.commands[f];"M" === g.type ? e += "M" + c(g.x, g.y) : "L" === g.type ? e += "L" + c(g.x, g.y) : "C" === g.type ? e += "C" + c(g.x1, g.y1, g.x2, g.y2, g.x, g.y) : "Q" === g.type ? e += "Q" + c(g.x1, g.y1, g.x, g.y) : "Z" === g.type && (e += "Z");
            }return e;
          }, r.prototype.toSVG = function (a) {
            var b = '<path d="';return b += this.toPathData(a), b += '"', this.fill && "black" !== this.fill && (null === this.fill ? b += ' fill="none"' : b += ' fill="' + this.fill + '"'), this.stroke && (b += ' stroke="' + this.stroke + '" stroke-width="' + this.strokeWidth + '"'), b += "/>";
          }, r.prototype.toDOMElement = function (a) {
            var b = this.toPathData(a),
                c = document.createElementNS("http://www.w3.org/2000/svg", "path");return c.setAttribute("d", b), c;
          };var xe = { fail: s, argument: t, assert: t },
              ye = 32768,
              ze = 2147483648,
              Ae = {},
              Be = {},
              Ce = {};Be.BYTE = function (a) {
            return xe.argument(a >= 0 && a <= 255, "Byte value should be between 0 and 255."), [a];
          }, Ce.BYTE = u(1), Be.CHAR = function (a) {
            return [a.charCodeAt(0)];
          }, Ce.CHAR = u(1), Be.CHARARRAY = function (a) {
            for (var b = [], c = 0; c < a.length; c += 1) {
              b[c] = a.charCodeAt(c);
            }return b;
          }, Ce.CHARARRAY = function (a) {
            return a.length;
          }, Be.USHORT = function (a) {
            return [a >> 8 & 255, 255 & a];
          }, Ce.USHORT = u(2), Be.SHORT = function (a) {
            return a >= ye && (a = -(2 * ye - a)), [a >> 8 & 255, 255 & a];
          }, Ce.SHORT = u(2), Be.UINT24 = function (a) {
            return [a >> 16 & 255, a >> 8 & 255, 255 & a];
          }, Ce.UINT24 = u(3), Be.ULONG = function (a) {
            return [a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a];
          }, Ce.ULONG = u(4), Be.LONG = function (a) {
            return a >= ze && (a = -(2 * ze - a)), [a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a];
          }, Ce.LONG = u(4), Be.FIXED = Be.ULONG, Ce.FIXED = Ce.ULONG, Be.FWORD = Be.SHORT, Ce.FWORD = Ce.SHORT, Be.UFWORD = Be.USHORT, Ce.UFWORD = Ce.USHORT, Be.LONGDATETIME = function (a) {
            return [0, 0, 0, 0, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a];
          }, Ce.LONGDATETIME = u(8), Be.TAG = function (a) {
            return xe.argument(4 === a.length, "Tag should be exactly 4 ASCII characters."), [a.charCodeAt(0), a.charCodeAt(1), a.charCodeAt(2), a.charCodeAt(3)];
          }, Ce.TAG = u(4), Be.Card8 = Be.BYTE, Ce.Card8 = Ce.BYTE, Be.Card16 = Be.USHORT, Ce.Card16 = Ce.USHORT, Be.OffSize = Be.BYTE, Ce.OffSize = Ce.BYTE, Be.SID = Be.USHORT, Ce.SID = Ce.USHORT, Be.NUMBER = function (a) {
            return a >= -107 && a <= 107 ? [a + 139] : a >= 108 && a <= 1131 ? (a -= 108, [247 + (a >> 8), 255 & a]) : a >= -1131 && a <= -108 ? (a = -a - 108, [251 + (a >> 8), 255 & a]) : a >= -32768 && a <= 32767 ? Be.NUMBER16(a) : Be.NUMBER32(a);
          }, Ce.NUMBER = function (a) {
            return Be.NUMBER(a).length;
          }, Be.NUMBER16 = function (a) {
            return [28, a >> 8 & 255, 255 & a];
          }, Ce.NUMBER16 = u(3), Be.NUMBER32 = function (a) {
            return [29, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a];
          }, Ce.NUMBER32 = u(5), Be.REAL = function (a) {
            var b = a.toString(),
                c = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(b);if (c) {
              var d = parseFloat("1e" + ((c[2] ? +c[2] : 0) + c[1].length));b = (Math.round(a * d) / d).toString();
            }for (var e = "", f = 0, g = b.length; f < g; f += 1) {
              var h = b[f];e += "e" === h ? "-" === b[++f] ? "c" : "b" : "." === h ? "a" : "-" === h ? "e" : h;
            }e += 1 & e.length ? "f" : "ff";for (var i = [30], j = 0, k = e.length; j < k; j += 2) {
              i.push(parseInt(e.substr(j, 2), 16));
            }return i;
          }, Ce.REAL = function (a) {
            return Be.REAL(a).length;
          }, Be.NAME = Be.CHARARRAY, Ce.NAME = Ce.CHARARRAY, Be.STRING = Be.CHARARRAY, Ce.STRING = Ce.CHARARRAY, Ae.UTF8 = function (a, b, c) {
            for (var d = [], e = c, f = 0; f < e; f++, b += 1) {
              d[f] = a.getUint8(b);
            }return String.fromCharCode.apply(null, d);
          }, Ae.UTF16 = function (a, b, c) {
            for (var d = [], e = c / 2, f = 0; f < e; f++, b += 2) {
              d[f] = a.getUint16(b);
            }return String.fromCharCode.apply(null, d);
          }, Be.UTF16 = function (a) {
            for (var b = [], c = 0; c < a.length; c += 1) {
              var d = a.charCodeAt(c);b[b.length] = d >> 8 & 255, b[b.length] = 255 & d;
            }return b;
          }, Ce.UTF16 = function (a) {
            return 2 * a.length;
          };var De = { "x-mac-croatian": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ", "x-mac-cyrillic": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю", "x-mac-gaelic": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ", "x-mac-greek": "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­", "x-mac-icelandic": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ", "x-mac-inuit": "ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł", "x-mac-ce": "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ", macintosh: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ", "x-mac-romanian": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ", "x-mac-turkish": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ" };Ae.MACSTRING = function (a, b, c, d) {
            var e = De[d];if (void 0 !== e) {
              for (var f = "", g = 0; g < c; g++) {
                var h = a.getUint8(b + g);f += h <= 127 ? String.fromCharCode(h) : e[127 & h];
              }return f;
            }
          };var Ee,
              Fe = "function" == typeof WeakMap && new WeakMap(),
              Ge = function Ge(a) {
            if (!Ee) {
              Ee = {};for (var b in De) {
                Ee[b] = new String(b);
              }
            }var c = Ee[a];if (void 0 !== c) {
              if (Fe) {
                var d = Fe.get(c);if (void 0 !== d) return d;
              }var e = De[a];if (void 0 !== e) {
                for (var f = {}, g = 0; g < e.length; g++) {
                  f[e.charCodeAt(g)] = g + 128;
                }return Fe && Fe.set(c, f), f;
              }
            }
          };Be.MACSTRING = function (a, b) {
            var c = Ge(b);if (void 0 !== c) {
              for (var d = [], e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);if (f >= 128 && void 0 === (f = c[f])) return;d[e] = f;
              }return d;
            }
          }, Ce.MACSTRING = function (a, b) {
            var c = Be.MACSTRING(a, b);return void 0 !== c ? c.length : 0;
          }, Be.VARDELTAS = function (a) {
            for (var b = 0, c = []; b < a.length;) {
              var d = a[b];b = 0 === d ? w(a, b, c) : d >= -128 && d <= 127 ? x(a, b, c) : y(a, b, c);
            }return c;
          }, Be.INDEX = function (a) {
            for (var b = 1, c = [b], d = [], e = 0; e < a.length; e += 1) {
              var f = Be.OBJECT(a[e]);Array.prototype.push.apply(d, f), b += f.length, c.push(b);
            }if (0 === d.length) return [0, 0];for (var g = [], h = 1 + Math.floor(Math.log(b) / Math.log(2)) / 8 | 0, i = [void 0, Be.BYTE, Be.USHORT, Be.UINT24, Be.ULONG][h], j = 0; j < c.length; j += 1) {
              var k = i(c[j]);Array.prototype.push.apply(g, k);
            }return Array.prototype.concat(Be.Card16(a.length), Be.OffSize(h), g, d);
          }, Ce.INDEX = function (a) {
            return Be.INDEX(a).length;
          }, Be.DICT = function (a) {
            for (var b = [], c = Object.keys(a), d = c.length, e = 0; e < d; e += 1) {
              var f = parseInt(c[e], 0),
                  g = a[f];b = b.concat(Be.OPERAND(g.value, g.type)), b = b.concat(Be.OPERATOR(f));
            }return b;
          }, Ce.DICT = function (a) {
            return Be.DICT(a).length;
          }, Be.OPERATOR = function (a) {
            return a < 1200 ? [a] : [12, a - 1200];
          }, Be.OPERAND = function (a, b) {
            var c = [];if (Array.isArray(b)) for (var d = 0; d < b.length; d += 1) {
              xe.argument(a.length === b.length, "Not enough arguments given for type" + b), c = c.concat(Be.OPERAND(a[d], b[d]));
            } else if ("SID" === b) c = c.concat(Be.NUMBER(a));else if ("offset" === b) c = c.concat(Be.NUMBER32(a));else if ("number" === b) c = c.concat(Be.NUMBER(a));else {
              if ("real" !== b) throw new Error("Unknown operand type " + b);c = c.concat(Be.REAL(a));
            }return c;
          }, Be.OP = Be.BYTE, Ce.OP = Ce.BYTE;var He = "function" == typeof WeakMap && new WeakMap();Be.CHARSTRING = function (a) {
            if (He) {
              var b = He.get(a);if (void 0 !== b) return b;
            }for (var c = [], d = a.length, e = 0; e < d; e += 1) {
              var f = a[e];c = c.concat(Be[f.type](f.value));
            }return He && He.set(a, c), c;
          }, Ce.CHARSTRING = function (a) {
            return Be.CHARSTRING(a).length;
          }, Be.OBJECT = function (a) {
            var b = Be[a.type];return xe.argument(void 0 !== b, "No encoding function for type " + a.type), b(a.value);
          }, Ce.OBJECT = function (a) {
            var b = Ce[a.type];return xe.argument(void 0 !== b, "No sizeOf function for type " + a.type), b(a.value);
          }, Be.TABLE = function (a) {
            for (var b = [], c = a.fields.length, d = [], e = [], f = 0; f < c; f += 1) {
              var g = a.fields[f],
                  h = Be[g.type];xe.argument(void 0 !== h, "No encoding function for field type " + g.type + " (" + g.name + ")");var i = a[g.name];void 0 === i && (i = g.value);var j = h(i);"TABLE" === g.type ? (e.push(b.length), b = b.concat([0, 0]), d.push(j)) : b = b.concat(j);
            }for (var k = 0; k < d.length; k += 1) {
              var l = e[k],
                  m = b.length;xe.argument(m < 65536, "Table " + a.tableName + " too big."), b[l] = m >> 8, b[l + 1] = 255 & m, b = b.concat(d[k]);
            }return b;
          }, Ce.TABLE = function (a) {
            for (var b = 0, c = a.fields.length, d = 0; d < c; d += 1) {
              var e = a.fields[d],
                  f = Ce[e.type];xe.argument(void 0 !== f, "No sizeOf function for field type " + e.type + " (" + e.name + ")");var g = a[e.name];void 0 === g && (g = e.value), b += f(g), "TABLE" === e.type && (b += 2);
            }return b;
          }, Be.RECORD = Be.TABLE, Ce.RECORD = Ce.TABLE, Be.LITERAL = function (a) {
            return a;
          }, Ce.LITERAL = function (a) {
            return a.length;
          }, z.prototype.encode = function () {
            return Be.TABLE(this);
          }, z.prototype.sizeOf = function () {
            return Ce.TABLE(this);
          }, D.prototype = Object.create(z.prototype), D.prototype.constructor = D, E.prototype = Object.create(z.prototype), E.prototype.constructor = E, F.prototype = Object.create(z.prototype), F.prototype.constructor = F, G.prototype = Object.create(z.prototype), G.prototype.constructor = G;var Ie = { Table: z, Record: z, Coverage: D, ScriptList: E, FeatureList: F, LookupList: G, ushortList: A, tableList: B, recordList: C },
              Je = { byte: 1, uShort: 2, short: 2, uLong: 4, fixed: 4, longDateTime: 8, tag: 4 };Q.prototype.parseByte = function () {
            var a = this.data.getUint8(this.offset + this.relativeOffset);return this.relativeOffset += 1, a;
          }, Q.prototype.parseChar = function () {
            var a = this.data.getInt8(this.offset + this.relativeOffset);return this.relativeOffset += 1, a;
          }, Q.prototype.parseCard8 = Q.prototype.parseByte, Q.prototype.parseUShort = function () {
            var a = this.data.getUint16(this.offset + this.relativeOffset);return this.relativeOffset += 2, a;
          }, Q.prototype.parseCard16 = Q.prototype.parseUShort, Q.prototype.parseSID = Q.prototype.parseUShort, Q.prototype.parseOffset16 = Q.prototype.parseUShort, Q.prototype.parseShort = function () {
            var a = this.data.getInt16(this.offset + this.relativeOffset);return this.relativeOffset += 2, a;
          }, Q.prototype.parseF2Dot14 = function () {
            var a = this.data.getInt16(this.offset + this.relativeOffset) / 16384;return this.relativeOffset += 2, a;
          }, Q.prototype.parseULong = function () {
            var a = K(this.data, this.offset + this.relativeOffset);return this.relativeOffset += 4, a;
          }, Q.prototype.parseOffset32 = Q.prototype.parseULong, Q.prototype.parseFixed = function () {
            var a = L(this.data, this.offset + this.relativeOffset);return this.relativeOffset += 4, a;
          }, Q.prototype.parseString = function (a) {
            var b = this.data,
                c = this.offset + this.relativeOffset,
                d = "";this.relativeOffset += a;for (var e = 0; e < a; e++) {
              d += String.fromCharCode(b.getUint8(c + e));
            }return d;
          }, Q.prototype.parseTag = function () {
            return this.parseString(4);
          }, Q.prototype.parseLongDateTime = function () {
            var a = K(this.data, this.offset + this.relativeOffset + 4);return a -= 2082844800, this.relativeOffset += 8, a;
          }, Q.prototype.parseVersion = function (a) {
            var b = I(this.data, this.offset + this.relativeOffset),
                c = I(this.data, this.offset + this.relativeOffset + 2);return this.relativeOffset += 4, void 0 === a && (a = 4096), b + c / a / 10;
          }, Q.prototype.skip = function (a, b) {
            void 0 === b && (b = 1), this.relativeOffset += Je[a] * b;
          }, Q.prototype.parseULongList = function (a) {
            void 0 === a && (a = this.parseULong());for (var b = new Array(a), c = this.data, d = this.offset + this.relativeOffset, e = 0; e < a; e++) {
              b[e] = c.getUint32(d), d += 4;
            }return this.relativeOffset += 4 * a, b;
          }, Q.prototype.parseOffset16List = Q.prototype.parseUShortList = function (a) {
            void 0 === a && (a = this.parseUShort());for (var b = new Array(a), c = this.data, d = this.offset + this.relativeOffset, e = 0; e < a; e++) {
              b[e] = c.getUint16(d), d += 2;
            }return this.relativeOffset += 2 * a, b;
          }, Q.prototype.parseShortList = function (a) {
            for (var b = new Array(a), c = this.data, d = this.offset + this.relativeOffset, e = 0; e < a; e++) {
              b[e] = c.getInt16(d), d += 2;
            }return this.relativeOffset += 2 * a, b;
          }, Q.prototype.parseByteList = function (a) {
            for (var b = new Array(a), c = this.data, d = this.offset + this.relativeOffset, e = 0; e < a; e++) {
              b[e] = c.getUint8(d++);
            }return this.relativeOffset += a, b;
          }, Q.prototype.parseList = function (a, b) {
            var c = this;b || (b = a, a = this.parseUShort());for (var d = new Array(a), e = 0; e < a; e++) {
              d[e] = b.call(c);
            }return d;
          }, Q.prototype.parseList32 = function (a, b) {
            var c = this;b || (b = a, a = this.parseULong());for (var d = new Array(a), e = 0; e < a; e++) {
              d[e] = b.call(c);
            }return d;
          }, Q.prototype.parseRecordList = function (a, b) {
            var c = this;b || (b = a, a = this.parseUShort());for (var d = new Array(a), e = Object.keys(b), f = 0; f < a; f++) {
              for (var g = {}, h = 0; h < e.length; h++) {
                var i = e[h],
                    j = b[i];g[i] = j.call(c);
              }d[f] = g;
            }return d;
          }, Q.prototype.parseRecordList32 = function (a, b) {
            var c = this;b || (b = a, a = this.parseULong());for (var d = new Array(a), e = Object.keys(b), f = 0; f < a; f++) {
              for (var g = {}, h = 0; h < e.length; h++) {
                var i = e[h],
                    j = b[i];g[i] = j.call(c);
              }d[f] = g;
            }return d;
          }, Q.prototype.parseStruct = function (a) {
            var b = this;if ("function" == typeof a) return a.call(this);for (var c = Object.keys(a), d = {}, e = 0; e < c.length; e++) {
              var f = c[e],
                  g = a[f];d[f] = g.call(b);
            }return d;
          }, Q.prototype.parseValueRecord = function (a) {
            if (void 0 === a && (a = this.parseUShort()), 0 !== a) {
              var b = {};return 1 & a && (b.xPlacement = this.parseShort()), 2 & a && (b.yPlacement = this.parseShort()), 4 & a && (b.xAdvance = this.parseShort()), 8 & a && (b.yAdvance = this.parseShort()), 16 & a && (b.xPlaDevice = void 0, this.parseShort()), 32 & a && (b.yPlaDevice = void 0, this.parseShort()), 64 & a && (b.xAdvDevice = void 0, this.parseShort()), 128 & a && (b.yAdvDevice = void 0, this.parseShort()), b;
            }
          }, Q.prototype.parseValueRecordList = function () {
            for (var a = this, b = this.parseUShort(), c = this.parseUShort(), d = new Array(c), e = 0; e < c; e++) {
              d[e] = a.parseValueRecord(b);
            }return d;
          }, Q.prototype.parsePointer = function (a) {
            var b = this.parseOffset16();if (b > 0) return new Q(this.data, this.offset + b).parseStruct(a);
          }, Q.prototype.parsePointer32 = function (a) {
            var b = this.parseOffset32();if (b > 0) return new Q(this.data, this.offset + b).parseStruct(a);
          }, Q.prototype.parseListOfLists = function (a) {
            for (var b = this, c = this.parseOffset16List(), d = c.length, e = this.relativeOffset, f = new Array(d), g = 0; g < d; g++) {
              var h = c[g];if (0 !== h) {
                if (b.relativeOffset = h, a) {
                  for (var i = b.parseOffset16List(), j = new Array(i.length), k = 0; k < i.length; k++) {
                    b.relativeOffset = h + i[k], j[k] = a.call(b);
                  }f[g] = j;
                } else f[g] = b.parseUShortList();
              } else f[g] = void 0;
            }return this.relativeOffset = e, f;
          }, Q.prototype.parseCoverage = function () {
            var a = this,
                b = this.offset + this.relativeOffset,
                c = this.parseUShort(),
                d = this.parseUShort();if (1 === c) return { format: 1, glyphs: this.parseUShortList(d) };if (2 === c) {
              for (var e = new Array(d), f = 0; f < d; f++) {
                e[f] = { start: a.parseUShort(), end: a.parseUShort(), index: a.parseUShort() };
              }return { format: 2, ranges: e };
            }throw new Error("0x" + b.toString(16) + ": Coverage format must be 1 or 2.");
          }, Q.prototype.parseClassDef = function () {
            var a = this.offset + this.relativeOffset,
                b = this.parseUShort();if (1 === b) return { format: 1, startGlyph: this.parseUShort(), classes: this.parseUShortList() };if (2 === b) return { format: 2, ranges: this.parseRecordList({ start: Q.uShort, end: Q.uShort, classId: Q.uShort }) };throw new Error("0x" + a.toString(16) + ": ClassDef format must be 1 or 2.");
          }, Q.list = function (a, b) {
            return function () {
              return this.parseList(a, b);
            };
          }, Q.list32 = function (a, b) {
            return function () {
              return this.parseList32(a, b);
            };
          }, Q.recordList = function (a, b) {
            return function () {
              return this.parseRecordList(a, b);
            };
          }, Q.recordList32 = function (a, b) {
            return function () {
              return this.parseRecordList32(a, b);
            };
          }, Q.pointer = function (a) {
            return function () {
              return this.parsePointer(a);
            };
          }, Q.pointer32 = function (a) {
            return function () {
              return this.parsePointer32(a);
            };
          }, Q.tag = Q.prototype.parseTag, Q.byte = Q.prototype.parseByte, Q.uShort = Q.offset16 = Q.prototype.parseUShort, Q.uShortList = Q.prototype.parseUShortList, Q.uLong = Q.offset32 = Q.prototype.parseULong, Q.uLongList = Q.prototype.parseULongList, Q.struct = Q.prototype.parseStruct, Q.coverage = Q.prototype.parseCoverage, Q.classDef = Q.prototype.parseClassDef;var Ke = { reserved: Q.uShort, reqFeatureIndex: Q.uShort, featureIndexes: Q.uShortList };Q.prototype.parseScriptList = function () {
            return this.parsePointer(Q.recordList({ tag: Q.tag, script: Q.pointer({ defaultLangSys: Q.pointer(Ke), langSysRecords: Q.recordList({ tag: Q.tag, langSys: Q.pointer(Ke) }) }) })) || [];
          }, Q.prototype.parseFeatureList = function () {
            return this.parsePointer(Q.recordList({ tag: Q.tag, feature: Q.pointer({ featureParams: Q.offset16, lookupListIndexes: Q.uShortList }) })) || [];
          }, Q.prototype.parseLookupList = function (a) {
            return this.parsePointer(Q.list(Q.pointer(function () {
              var b = this.parseUShort();xe.argument(1 <= b && b <= 9, "GPOS/GSUB lookup type " + b + " unknown.");var c = this.parseUShort(),
                  d = 16 & c;return { lookupType: b, lookupFlag: c, subtables: this.parseList(Q.pointer(a[b])), markFilteringSet: d ? this.parseUShort() : void 0 };
            }))) || [];
          }, Q.prototype.parseFeatureVariationsList = function () {
            return this.parsePointer32(function () {
              var a = this.parseUShort(),
                  b = this.parseUShort();return xe.argument(1 === a && b < 1, "GPOS/GSUB feature variations table unknown."), this.parseRecordList32({ conditionSetOffset: Q.offset32, featureTableSubstitutionOffset: Q.offset32 });
            }) || [];
          };var Le = { getByte: H, getCard8: H, getUShort: I, getCard16: I, getShort: J, getULong: K, getFixed: L, getTag: M, getOffset: N, getBytes: O, bytesToString: P, Parser: Q },
              Me = { parse: T, make: W },
              Ne = [".notdef", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "endash", "dagger", "daggerdbl", "periodcentered", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "questiondown", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "emdash", "AE", "ordfeminine", "Lslash", "Oslash", "OE", "ordmasculine", "ae", "dotlessi", "lslash", "oslash", "oe", "germandbls", "onesuperior", "logicalnot", "mu", "trademark", "Eth", "onehalf", "plusminus", "Thorn", "onequarter", "divide", "brokenbar", "degree", "thorn", "threequarters", "twosuperior", "registered", "minus", "eth", "multiply", "threesuperior", "copyright", "Aacute", "Acircumflex", "Adieresis", "Agrave", "Aring", "Atilde", "Ccedilla", "Eacute", "Ecircumflex", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Ntilde", "Oacute", "Ocircumflex", "Odieresis", "Ograve", "Otilde", "Scaron", "Uacute", "Ucircumflex", "Udieresis", "Ugrave", "Yacute", "Ydieresis", "Zcaron", "aacute", "acircumflex", "adieresis", "agrave", "aring", "atilde", "ccedilla", "eacute", "ecircumflex", "edieresis", "egrave", "iacute", "icircumflex", "idieresis", "igrave", "ntilde", "oacute", "ocircumflex", "odieresis", "ograve", "otilde", "scaron", "uacute", "ucircumflex", "udieresis", "ugrave", "yacute", "ydieresis", "zcaron", "exclamsmall", "Hungarumlautsmall", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "266 ff", "onedotenleader", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "isuperior", "lsuperior", "msuperior", "nsuperior", "osuperior", "rsuperior", "ssuperior", "tsuperior", "ff", "ffi", "ffl", "parenleftinferior", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "exclamdownsmall", "centoldstyle", "Lslashsmall", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "Dotaccentsmall", "Macronsmall", "figuredash", "hypheninferior", "Ogoneksmall", "Ringsmall", "Cedillasmall", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "zerosuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall", "001.000", "001.001", "001.002", "001.003", "Black", "Bold", "Book", "Light", "Medium", "Regular", "Roman", "Semibold"],
              Oe = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "", "endash", "dagger", "daggerdbl", "periodcentered", "", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "", "questiondown", "", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "", "ring", "cedilla", "", "hungarumlaut", "ogonek", "caron", "emdash", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "AE", "", "ordfeminine", "", "", "", "", "Lslash", "Oslash", "OE", "ordmasculine", "", "", "", "", "", "ae", "", "", "", "dotlessi", "", "", "lslash", "oslash", "oe", "germandbls"],
              Pe = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclamsmall", "Hungarumlautsmall", "", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "comma", "hyphen", "period", "fraction", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "colon", "semicolon", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "", "", "isuperior", "", "", "lsuperior", "msuperior", "nsuperior", "osuperior", "", "", "rsuperior", "ssuperior", "tsuperior", "", "ff", "fi", "fl", "ffi", "ffl", "parenleftinferior", "", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdownsmall", "centoldstyle", "Lslashsmall", "", "", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "", "Dotaccentsmall", "", "", "Macronsmall", "", "", "figuredash", "hypheninferior", "", "", "Ogoneksmall", "Ringsmall", "Cedillasmall", "", "", "", "onequarter", "onehalf", "threequarters", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "", "", "zerosuperior", "onesuperior", "twosuperior", "threesuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall"],
              Qe = [".notdef", ".null", "nonmarkingreturn", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quotesingle", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "grave", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "Adieresis", "Aring", "Ccedilla", "Eacute", "Ntilde", "Odieresis", "Udieresis", "aacute", "agrave", "acircumflex", "adieresis", "atilde", "aring", "ccedilla", "eacute", "egrave", "ecircumflex", "edieresis", "iacute", "igrave", "icircumflex", "idieresis", "ntilde", "oacute", "ograve", "ocircumflex", "odieresis", "otilde", "uacute", "ugrave", "ucircumflex", "udieresis", "dagger", "degree", "cent", "sterling", "section", "bullet", "paragraph", "germandbls", "registered", "copyright", "trademark", "acute", "dieresis", "notequal", "AE", "Oslash", "infinity", "plusminus", "lessequal", "greaterequal", "yen", "mu", "partialdiff", "summation", "product", "pi", "integral", "ordfeminine", "ordmasculine", "Omega", "ae", "oslash", "questiondown", "exclamdown", "logicalnot", "radical", "florin", "approxequal", "Delta", "guillemotleft", "guillemotright", "ellipsis", "nonbreakingspace", "Agrave", "Atilde", "Otilde", "OE", "oe", "endash", "emdash", "quotedblleft", "quotedblright", "quoteleft", "quoteright", "divide", "lozenge", "ydieresis", "Ydieresis", "fraction", "currency", "guilsinglleft", "guilsinglright", "fi", "fl", "daggerdbl", "periodcentered", "quotesinglbase", "quotedblbase", "perthousand", "Acircumflex", "Ecircumflex", "Aacute", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Oacute", "Ocircumflex", "apple", "Ograve", "Uacute", "Ucircumflex", "Ugrave", "dotlessi", "circumflex", "tilde", "macron", "breve", "dotaccent", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "Lslash", "lslash", "Scaron", "scaron", "Zcaron", "zcaron", "brokenbar", "Eth", "eth", "Yacute", "yacute", "Thorn", "thorn", "minus", "multiply", "onesuperior", "twosuperior", "threesuperior", "onehalf", "onequarter", "threequarters", "franc", "Gbreve", "gbreve", "Idotaccent", "Scedilla", "scedilla", "Cacute", "cacute", "Ccaron", "ccaron", "dcroat"];X.prototype.charToGlyphIndex = function (a) {
            var b = a.codePointAt(0),
                c = this.font.glyphs;if (c) for (var d = 0; d < c.length; d += 1) {
              for (var e = c.get(d), f = 0; f < e.unicodes.length; f += 1) {
                if (e.unicodes[f] === b) return d;
              }
            }return null;
          }, Y.prototype.charToGlyphIndex = function (a) {
            return this.cmap.glyphIndexMap[a.codePointAt(0)] || 0;
          }, Z.prototype.charToGlyphIndex = function (a) {
            var b = a.codePointAt(0),
                c = this.encoding[b];return this.charset.indexOf(c);
          }, $.prototype.nameToGlyphIndex = function (a) {
            return this.names.indexOf(a);
          }, $.prototype.glyphIndexToName = function (a) {
            return this.names[a];
          };var Re = { line: aa };ca.prototype.bindConstructorValues = function (a) {
            this.index = a.index || 0, this.name = a.name || null, this.unicode = a.unicode || void 0, this.unicodes = a.unicodes || void 0 !== a.unicode ? [a.unicode] : [], a.xMin && (this.xMin = a.xMin), a.yMin && (this.yMin = a.yMin), a.xMax && (this.xMax = a.xMax), a.yMax && (this.yMax = a.yMax), a.advanceWidth && (this.advanceWidth = a.advanceWidth), Object.defineProperty(this, "path", ba(this, a.path));
          }, ca.prototype.addUnicode = function (a) {
            0 === this.unicodes.length && (this.unicode = a), this.unicodes.push(a);
          }, ca.prototype.getBoundingBox = function () {
            return this.path.getBoundingBox();
          }, ca.prototype.getPath = function (a, b, c, d, e) {
            a = void 0 !== a ? a : 0, b = void 0 !== b ? b : 0, c = void 0 !== c ? c : 72;var f, g;d || (d = {});var h = d.xScale,
                i = d.yScale;if (d.hinting && e && e.hinting && (g = this.path && e.hinting.exec(this, c)), g) f = e.hinting.getCommands(g), a = Math.round(a), b = Math.round(b), h = i = 1;else {
              f = this.path.commands;var j = 1 / this.path.unitsPerEm * c;void 0 === h && (h = j), void 0 === i && (i = j);
            }for (var k = new r(), l = 0; l < f.length; l += 1) {
              var m = f[l];"M" === m.type ? k.moveTo(a + m.x * h, b + -m.y * i) : "L" === m.type ? k.lineTo(a + m.x * h, b + -m.y * i) : "Q" === m.type ? k.quadraticCurveTo(a + m.x1 * h, b + -m.y1 * i, a + m.x * h, b + -m.y * i) : "C" === m.type ? k.curveTo(a + m.x1 * h, b + -m.y1 * i, a + m.x2 * h, b + -m.y2 * i, a + m.x * h, b + -m.y * i) : "Z" === m.type && k.closePath();
            }return k;
          }, ca.prototype.getContours = function () {
            var a = this;if (void 0 === this.points) return [];for (var b = [], c = [], d = 0; d < this.points.length; d += 1) {
              var e = a.points[d];c.push(e), e.lastPointOfContour && (b.push(c), c = []);
            }return xe.argument(0 === c.length, "There are still points left in the current contour."), b;
          }, ca.prototype.getMetrics = function () {
            for (var a = this.path.commands, b = [], c = [], d = 0; d < a.length; d += 1) {
              var e = a[d];"Z" !== e.type && (b.push(e.x), c.push(e.y)), "Q" !== e.type && "C" !== e.type || (b.push(e.x1), c.push(e.y1)), "C" === e.type && (b.push(e.x2), c.push(e.y2));
            }var f = { xMin: Math.min.apply(null, b), yMin: Math.min.apply(null, c), xMax: Math.max.apply(null, b), yMax: Math.max.apply(null, c), leftSideBearing: this.leftSideBearing };return isFinite(f.xMin) || (f.xMin = 0), isFinite(f.xMax) || (f.xMax = this.advanceWidth), isFinite(f.yMin) || (f.yMin = 0), isFinite(f.yMax) || (f.yMax = 0), f.rightSideBearing = this.advanceWidth - f.leftSideBearing - (f.xMax - f.xMin), f;
          }, ca.prototype.draw = function (a, b, c, d, e) {
            this.getPath(b, c, d, e).draw(a);
          }, ca.prototype.drawPoints = function (a, b, c, d) {
            function e(b, c, d, e) {
              var f = 2 * Math.PI;a.beginPath();for (var g = 0; g < b.length; g += 1) {
                a.moveTo(c + b[g].x * e, d + b[g].y * e), a.arc(c + b[g].x * e, d + b[g].y * e, 2, 0, f, !1);
              }a.closePath(), a.fill();
            }b = void 0 !== b ? b : 0, c = void 0 !== c ? c : 0, d = void 0 !== d ? d : 24;for (var f = 1 / this.path.unitsPerEm * d, g = [], h = [], i = this.path, j = 0; j < i.commands.length; j += 1) {
              var k = i.commands[j];void 0 !== k.x && g.push({ x: k.x, y: -k.y }), void 0 !== k.x1 && h.push({ x: k.x1, y: -k.y1 }), void 0 !== k.x2 && h.push({ x: k.x2, y: -k.y2 });
            }a.fillStyle = "blue", e(g, b, c, f), a.fillStyle = "red", e(h, b, c, f);
          }, ca.prototype.drawMetrics = function (a, b, c, d) {
            var e;b = void 0 !== b ? b : 0, c = void 0 !== c ? c : 0, d = void 0 !== d ? d : 24, e = 1 / this.path.unitsPerEm * d, a.lineWidth = 1, a.strokeStyle = "black", Re.line(a, b, -1e4, b, 1e4), Re.line(a, -1e4, c, 1e4, c);var f = this.xMin || 0,
                g = this.yMin || 0,
                h = this.xMax || 0,
                i = this.yMax || 0,
                j = this.advanceWidth || 0;a.strokeStyle = "blue", Re.line(a, b + f * e, -1e4, b + f * e, 1e4), Re.line(a, b + h * e, -1e4, b + h * e, 1e4), Re.line(a, -1e4, c + -g * e, 1e4, c + -g * e), Re.line(a, -1e4, c + -i * e, 1e4, c + -i * e), a.strokeStyle = "green", Re.line(a, b + j * e, -1e4, b + j * e, 1e4);
          }, ea.prototype.get = function (a) {
            return "function" == typeof this.glyphs[a] && (this.glyphs[a] = this.glyphs[a]()), this.glyphs[a];
          }, ea.prototype.push = function (a, b) {
            this.glyphs[a] = b, this.length++;
          };var Se = { GlyphSet: ea, glyphLoader: fa, ttfGlyphLoader: ga, cffGlyphLoader: ha },
              Te = [{ name: "version", op: 0, type: "SID" }, { name: "notice", op: 1, type: "SID" }, { name: "copyright", op: 1200, type: "SID" }, { name: "fullName", op: 2, type: "SID" }, { name: "familyName", op: 3, type: "SID" }, { name: "weight", op: 4, type: "SID" }, { name: "isFixedPitch", op: 1201, type: "number", value: 0 }, { name: "italicAngle", op: 1202, type: "number", value: 0 }, { name: "underlinePosition", op: 1203, type: "number", value: -100 }, { name: "underlineThickness", op: 1204, type: "number", value: 50 }, { name: "paintType", op: 1205, type: "number", value: 0 }, { name: "charstringType", op: 1206, type: "number", value: 2 }, { name: "fontMatrix", op: 1207, type: ["real", "real", "real", "real", "real", "real"], value: [.001, 0, 0, .001, 0, 0] }, { name: "uniqueId", op: 13, type: "number" }, { name: "fontBBox", op: 5, type: ["number", "number", "number", "number"], value: [0, 0, 0, 0] }, { name: "strokeWidth", op: 1208, type: "number", value: 0 }, { name: "xuid", op: 14, type: [], value: null }, { name: "charset", op: 15, type: "offset", value: 0 }, { name: "encoding", op: 16, type: "offset", value: 0 }, { name: "charStrings", op: 17, type: "offset", value: 0 }, { name: "private", op: 18, type: ["number", "offset"], value: [0, 0] }, { name: "ros", op: 1230, type: ["SID", "SID", "number"] }, { name: "cidFontVersion", op: 1231, type: "number", value: 0 }, { name: "cidFontRevision", op: 1232, type: "number", value: 0 }, { name: "cidFontType", op: 1233, type: "number", value: 0 }, { name: "cidCount", op: 1234, type: "number", value: 8720 }, { name: "uidBase", op: 1235, type: "number" }, { name: "fdArray", op: 1236, type: "offset" }, { name: "fdSelect", op: 1237, type: "offset" }, { name: "fontName", op: 1238, type: "SID" }],
              Ue = [{ name: "subrs", op: 19, type: "offset", value: 0 }, { name: "defaultWidthX", op: 20, type: "number", value: 0 }, { name: "nominalWidthX", op: 21, type: "number", value: 0 }],
              Ve = { parse: za, make: Ma },
              We = { parse: Na, make: Oa },
              Xe = { parse: Pa, make: Qa },
              Ye = { parse: Ra, make: Sa },
              Ze = { make: Ta, parse: Ua },
              $e = { parse: Va, make: Wa },
              _e = ["copyright", "fontFamily", "fontSubfamily", "uniqueID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "manufacturerURL", "designerURL", "license", "licenseURL", "reserved", "preferredFamily", "preferredSubfamily", "compatibleFullName", "sampleText", "postScriptFindFontName", "wwsFamily", "wwsSubfamily"],
              af = { 0: "en", 1: "fr", 2: "de", 3: "it", 4: "nl", 5: "sv", 6: "es", 7: "da", 8: "pt", 9: "no", 10: "he", 11: "ja", 12: "ar", 13: "fi", 14: "el", 15: "is", 16: "mt", 17: "tr", 18: "hr", 19: "zh-Hant", 20: "ur", 21: "hi", 22: "th", 23: "ko", 24: "lt", 25: "pl", 26: "hu", 27: "es", 28: "lv", 29: "se", 30: "fo", 31: "fa", 32: "ru", 33: "zh", 34: "nl-BE", 35: "ga", 36: "sq", 37: "ro", 38: "cz", 39: "sk", 40: "si", 41: "yi", 42: "sr", 43: "mk", 44: "bg", 45: "uk", 46: "be", 47: "uz", 48: "kk", 49: "az-Cyrl", 50: "az-Arab", 51: "hy", 52: "ka", 53: "mo", 54: "ky", 55: "tg", 56: "tk", 57: "mn-CN", 58: "mn", 59: "ps", 60: "ks", 61: "ku", 62: "sd", 63: "bo", 64: "ne", 65: "sa", 66: "mr", 67: "bn", 68: "as", 69: "gu", 70: "pa", 71: "or", 72: "ml", 73: "kn", 74: "ta", 75: "te", 76: "si", 77: "my", 78: "km", 79: "lo", 80: "vi", 81: "id", 82: "tl", 83: "ms", 84: "ms-Arab", 85: "am", 86: "ti", 87: "om", 88: "so", 89: "sw", 90: "rw", 91: "rn", 92: "ny", 93: "mg", 94: "eo", 128: "cy", 129: "eu", 130: "ca", 131: "la", 132: "qu", 133: "gn", 134: "ay", 135: "tt", 136: "ug", 137: "dz", 138: "jv", 139: "su", 140: "gl", 141: "af", 142: "br", 143: "iu", 144: "gd", 145: "gv", 146: "ga", 147: "to", 148: "el-polyton", 149: "kl", 150: "az", 151: "nn" },
              bf = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 5, 11: 1, 12: 4, 13: 0, 14: 6, 15: 0, 16: 0, 17: 0, 18: 0, 19: 2, 20: 4,
            21: 9, 22: 21, 23: 3, 24: 29, 25: 29, 26: 29, 27: 29, 28: 29, 29: 0, 30: 0, 31: 4, 32: 7, 33: 25, 34: 0, 35: 0, 36: 0, 37: 0, 38: 29, 39: 29, 40: 0, 41: 5, 42: 7, 43: 7, 44: 7, 45: 7, 46: 7, 47: 7, 48: 7, 49: 7, 50: 4, 51: 24, 52: 23, 53: 7, 54: 7, 55: 7, 56: 7, 57: 27, 58: 7, 59: 4, 60: 4, 61: 4, 62: 4, 63: 26, 64: 9, 65: 9, 66: 9, 67: 13, 68: 13, 69: 11, 70: 10, 71: 12, 72: 17, 73: 16, 74: 14, 75: 15, 76: 18, 77: 19, 78: 20, 79: 22, 80: 30, 81: 0, 82: 0, 83: 0, 84: 4, 85: 28, 86: 28, 87: 28, 88: 0, 89: 0, 90: 0, 91: 0, 92: 0, 93: 0, 94: 0, 128: 0, 129: 0, 130: 0, 131: 0, 132: 0, 133: 0, 134: 0, 135: 7, 136: 4, 137: 26, 138: 0, 139: 0, 140: 0, 141: 0, 142: 0, 143: 28, 144: 0, 145: 0, 146: 0, 147: 0, 148: 6, 149: 0, 150: 0, 151: 0 },
              cf = { 1078: "af", 1052: "sq", 1156: "gsw", 1118: "am", 5121: "ar-DZ", 15361: "ar-BH", 3073: "ar", 2049: "ar-IQ", 11265: "ar-JO", 13313: "ar-KW", 12289: "ar-LB", 4097: "ar-LY", 6145: "ary", 8193: "ar-OM", 16385: "ar-QA", 1025: "ar-SA", 10241: "ar-SY", 7169: "aeb", 14337: "ar-AE", 9217: "ar-YE", 1067: "hy", 1101: "as", 2092: "az-Cyrl", 1068: "az", 1133: "ba", 1069: "eu", 1059: "be", 2117: "bn", 1093: "bn-IN", 8218: "bs-Cyrl", 5146: "bs", 1150: "br", 1026: "bg", 1027: "ca", 3076: "zh-HK", 5124: "zh-MO", 2052: "zh", 4100: "zh-SG", 1028: "zh-TW", 1155: "co", 1050: "hr", 4122: "hr-BA", 1029: "cs", 1030: "da", 1164: "prs", 1125: "dv", 2067: "nl-BE", 1043: "nl", 3081: "en-AU", 10249: "en-BZ", 4105: "en-CA", 9225: "en-029", 16393: "en-IN", 6153: "en-IE", 8201: "en-JM", 17417: "en-MY", 5129: "en-NZ", 13321: "en-PH", 18441: "en-SG", 7177: "en-ZA", 11273: "en-TT", 2057: "en-GB", 1033: "en", 12297: "en-ZW", 1061: "et", 1080: "fo", 1124: "fil", 1035: "fi", 2060: "fr-BE", 3084: "fr-CA", 1036: "fr", 5132: "fr-LU", 6156: "fr-MC", 4108: "fr-CH", 1122: "fy", 1110: "gl", 1079: "ka", 3079: "de-AT", 1031: "de", 5127: "de-LI", 4103: "de-LU", 2055: "de-CH", 1032: "el", 1135: "kl", 1095: "gu", 1128: "ha", 1037: "he", 1081: "hi", 1038: "hu", 1039: "is", 1136: "ig", 1057: "id", 1117: "iu", 2141: "iu-Latn", 2108: "ga", 1076: "xh", 1077: "zu", 1040: "it", 2064: "it-CH", 1041: "ja", 1099: "kn", 1087: "kk", 1107: "km", 1158: "quc", 1159: "rw", 1089: "sw", 1111: "kok", 1042: "ko", 1088: "ky", 1108: "lo", 1062: "lv", 1063: "lt", 2094: "dsb", 1134: "lb", 1071: "mk", 2110: "ms-BN", 1086: "ms", 1100: "ml", 1082: "mt", 1153: "mi", 1146: "arn", 1102: "mr", 1148: "moh", 1104: "mn", 2128: "mn-CN", 1121: "ne", 1044: "nb", 2068: "nn", 1154: "oc", 1096: "or", 1123: "ps", 1045: "pl", 1046: "pt", 2070: "pt-PT", 1094: "pa", 1131: "qu-BO", 2155: "qu-EC", 3179: "qu", 1048: "ro", 1047: "rm", 1049: "ru", 9275: "smn", 4155: "smj-NO", 5179: "smj", 3131: "se-FI", 1083: "se", 2107: "se-SE", 8251: "sms", 6203: "sma-NO", 7227: "sms", 1103: "sa", 7194: "sr-Cyrl-BA", 3098: "sr", 6170: "sr-Latn-BA", 2074: "sr-Latn", 1132: "nso", 1074: "tn", 1115: "si", 1051: "sk", 1060: "sl", 11274: "es-AR", 16394: "es-BO", 13322: "es-CL", 9226: "es-CO", 5130: "es-CR", 7178: "es-DO", 12298: "es-EC", 17418: "es-SV", 4106: "es-GT", 18442: "es-HN", 2058: "es-MX", 19466: "es-NI", 6154: "es-PA", 15370: "es-PY", 10250: "es-PE", 20490: "es-PR", 3082: "es", 1034: "es", 21514: "es-US", 14346: "es-UY", 8202: "es-VE", 2077: "sv-FI", 1053: "sv", 1114: "syr", 1064: "tg", 2143: "tzm", 1097: "ta", 1092: "tt", 1098: "te", 1054: "th", 1105: "bo", 1055: "tr", 1090: "tk", 1152: "ug", 1058: "uk", 1070: "hsb", 1056: "ur", 2115: "uz-Cyrl", 1091: "uz", 1066: "vi", 1106: "cy", 1160: "wo", 1157: "sah", 1144: "ii", 1130: "yo" },
              df = "utf-16",
              ef = { 0: "macintosh", 1: "x-mac-japanese", 2: "x-mac-chinesetrad", 3: "x-mac-korean", 6: "x-mac-greek", 7: "x-mac-cyrillic", 9: "x-mac-devanagai", 10: "x-mac-gurmukhi", 11: "x-mac-gujarati", 12: "x-mac-oriya", 13: "x-mac-bengali", 14: "x-mac-tamil", 15: "x-mac-telugu", 16: "x-mac-kannada", 17: "x-mac-malayalam", 18: "x-mac-sinhalese", 19: "x-mac-burmese", 20: "x-mac-khmer", 21: "x-mac-thai", 22: "x-mac-lao", 23: "x-mac-georgian", 24: "x-mac-armenian", 25: "x-mac-chinesesimp", 26: "x-mac-tibetan", 27: "x-mac-mongolian", 28: "x-mac-ethiopic", 29: "x-mac-ce", 30: "x-mac-vietnamese", 31: "x-mac-extarabic" },
              ff = { 15: "x-mac-icelandic", 17: "x-mac-turkish", 18: "x-mac-croatian", 24: "x-mac-ce", 25: "x-mac-ce", 26: "x-mac-ce", 27: "x-mac-ce", 28: "x-mac-ce", 30: "x-mac-icelandic", 37: "x-mac-romanian", 38: "x-mac-ce", 39: "x-mac-ce", 40: "x-mac-ce", 143: "x-mac-inuit", 146: "x-mac-gaelic" },
              gf = { parse: Za, make: cb },
              hf = [{ begin: 0, end: 127 }, { begin: 128, end: 255 }, { begin: 256, end: 383 }, { begin: 384, end: 591 }, { begin: 592, end: 687 }, { begin: 688, end: 767 }, { begin: 768, end: 879 }, { begin: 880, end: 1023 }, { begin: 11392, end: 11519 }, { begin: 1024, end: 1279 }, { begin: 1328, end: 1423 }, { begin: 1424, end: 1535 }, { begin: 42240, end: 42559 }, { begin: 1536, end: 1791 }, { begin: 1984, end: 2047 }, { begin: 2304, end: 2431 }, { begin: 2432, end: 2559 }, { begin: 2560, end: 2687 }, { begin: 2688, end: 2815 }, { begin: 2816, end: 2943 }, { begin: 2944, end: 3071 }, { begin: 3072, end: 3199 }, { begin: 3200, end: 3327 }, { begin: 3328, end: 3455 }, { begin: 3584, end: 3711 }, { begin: 3712, end: 3839 }, { begin: 4256, end: 4351 }, { begin: 6912, end: 7039 }, { begin: 4352, end: 4607 }, { begin: 7680, end: 7935 }, { begin: 7936, end: 8191 }, { begin: 8192, end: 8303 }, { begin: 8304, end: 8351 }, { begin: 8352, end: 8399 }, { begin: 8400, end: 8447 }, { begin: 8448, end: 8527 }, { begin: 8528, end: 8591 }, { begin: 8592, end: 8703 }, { begin: 8704, end: 8959 }, { begin: 8960, end: 9215 }, { begin: 9216, end: 9279 }, { begin: 9280, end: 9311 }, { begin: 9312, end: 9471 }, { begin: 9472, end: 9599 }, { begin: 9600, end: 9631 }, { begin: 9632, end: 9727 }, { begin: 9728, end: 9983 }, { begin: 9984, end: 10175 }, { begin: 12288, end: 12351 }, { begin: 12352, end: 12447 }, { begin: 12448, end: 12543 }, { begin: 12544, end: 12591 }, { begin: 12592, end: 12687 }, { begin: 43072, end: 43135 }, { begin: 12800, end: 13055 }, { begin: 13056, end: 13311 }, { begin: 44032, end: 55215 }, { begin: 55296, end: 57343 }, { begin: 67840, end: 67871 }, { begin: 19968, end: 40959 }, { begin: 57344, end: 63743 }, { begin: 12736, end: 12783 }, { begin: 64256, end: 64335 }, { begin: 64336, end: 65023 }, { begin: 65056, end: 65071 }, { begin: 65040, end: 65055 }, { begin: 65104, end: 65135 }, { begin: 65136, end: 65279 }, { begin: 65280, end: 65519 }, { begin: 65520, end: 65535 }, { begin: 3840, end: 4095 }, { begin: 1792, end: 1871 }, { begin: 1920, end: 1983 }, { begin: 3456, end: 3583 }, { begin: 4096, end: 4255 }, { begin: 4608, end: 4991 }, { begin: 5024, end: 5119 }, { begin: 5120, end: 5759 }, { begin: 5760, end: 5791 }, { begin: 5792, end: 5887 }, { begin: 6016, end: 6143 }, { begin: 6144, end: 6319 }, { begin: 10240, end: 10495 }, { begin: 40960, end: 42127 }, { begin: 5888, end: 5919 }, { begin: 66304, end: 66351 }, { begin: 66352, end: 66383 }, { begin: 66560, end: 66639 }, { begin: 118784, end: 119039 }, { begin: 119808, end: 120831 }, { begin: 1044480, end: 1048573 }, { begin: 65024, end: 65039 }, { begin: 917504, end: 917631 }, { begin: 6400, end: 6479 }, { begin: 6480, end: 6527 }, { begin: 6528, end: 6623 }, { begin: 6656, end: 6687 }, { begin: 11264, end: 11359 }, { begin: 11568, end: 11647 }, { begin: 19904, end: 19967 }, { begin: 43008, end: 43055 }, { begin: 65536, end: 65663 }, { begin: 65856, end: 65935 }, { begin: 66432, end: 66463 }, { begin: 66464, end: 66527 }, { begin: 66640, end: 66687 }, { begin: 66688, end: 66735 }, { begin: 67584, end: 67647 }, { begin: 68096, end: 68191 }, { begin: 119552, end: 119647 }, { begin: 73728, end: 74751 }, { begin: 119648, end: 119679 }, { begin: 7040, end: 7103 }, { begin: 7168, end: 7247 }, { begin: 7248, end: 7295 }, { begin: 43136, end: 43231 }, { begin: 43264, end: 43311 }, { begin: 43312, end: 43359 }, { begin: 43520, end: 43615 }, { begin: 65936, end: 65999 }, { begin: 66e3, end: 66047 }, { begin: 66208, end: 66271 }, { begin: 127024, end: 127135 }],
              jf = { parse: eb, make: fb, unicodeRanges: hf, getUnicodeRange: db },
              kf = { parse: gb, make: hb },
              lf = new Array(9);lf[1] = function () {
            var a = this.offset + this.relativeOffset,
                b = this.parseUShort();return 1 === b ? { substFormat: 1, coverage: this.parsePointer(Q.coverage), deltaGlyphId: this.parseUShort() } : 2 === b ? { substFormat: 2, coverage: this.parsePointer(Q.coverage), substitute: this.parseOffset16List() } : void xe.assert(!1, "0x" + a.toString(16) + ": lookup type 1 format must be 1 or 2.");
          }, lf[2] = function () {
            var a = this.parseUShort();return xe.argument(1 === a, "GSUB Multiple Substitution Subtable identifier-format must be 1"), { substFormat: a, coverage: this.parsePointer(Q.coverage), sequences: this.parseListOfLists() };
          }, lf[3] = function () {
            var a = this.parseUShort();return xe.argument(1 === a, "GSUB Alternate Substitution Subtable identifier-format must be 1"), { substFormat: a, coverage: this.parsePointer(Q.coverage), alternateSets: this.parseListOfLists() };
          }, lf[4] = function () {
            var a = this.parseUShort();return xe.argument(1 === a, "GSUB ligature table identifier-format must be 1"), { substFormat: a, coverage: this.parsePointer(Q.coverage), ligatureSets: this.parseListOfLists(function () {
                return { ligGlyph: this.parseUShort(), components: this.parseUShortList(this.parseUShort() - 1) };
              }) };
          };var mf = { sequenceIndex: Q.uShort, lookupListIndex: Q.uShort };lf[5] = function () {
            var a = this.offset + this.relativeOffset,
                b = this.parseUShort();if (1 === b) return { substFormat: b, coverage: this.parsePointer(Q.coverage), ruleSets: this.parseListOfLists(function () {
                var a = this.parseUShort(),
                    b = this.parseUShort();return { input: this.parseUShortList(a - 1), lookupRecords: this.parseRecordList(b, mf) };
              }) };if (2 === b) return { substFormat: b, coverage: this.parsePointer(Q.coverage), classDef: this.parsePointer(Q.classDef), classSets: this.parseListOfLists(function () {
                var a = this.parseUShort(),
                    b = this.parseUShort();return { classes: this.parseUShortList(a - 1), lookupRecords: this.parseRecordList(b, mf) };
              }) };if (3 === b) {
              var c = this.parseUShort(),
                  d = this.parseUShort();return { substFormat: b, coverages: this.parseList(c, Q.pointer(Q.coverage)), lookupRecords: this.parseRecordList(d, mf) };
            }xe.assert(!1, "0x" + a.toString(16) + ": lookup type 5 format must be 1, 2 or 3.");
          }, lf[6] = function () {
            var a = this.offset + this.relativeOffset,
                b = this.parseUShort();return 1 === b ? { substFormat: 1, coverage: this.parsePointer(Q.coverage), chainRuleSets: this.parseListOfLists(function () {
                return { backtrack: this.parseUShortList(), input: this.parseUShortList(this.parseShort() - 1), lookahead: this.parseUShortList(), lookupRecords: this.parseRecordList(mf) };
              }) } : 2 === b ? { substFormat: 2, coverage: this.parsePointer(Q.coverage), backtrackClassDef: this.parsePointer(Q.classDef), inputClassDef: this.parsePointer(Q.classDef), lookaheadClassDef: this.parsePointer(Q.classDef), chainClassSet: this.parseListOfLists(function () {
                return { backtrack: this.parseUShortList(), input: this.parseUShortList(this.parseShort() - 1), lookahead: this.parseUShortList(), lookupRecords: this.parseRecordList(mf) };
              }) } : 3 === b ? { substFormat: 3, backtrackCoverage: this.parseList(Q.pointer(Q.coverage)), inputCoverage: this.parseList(Q.pointer(Q.coverage)), lookaheadCoverage: this.parseList(Q.pointer(Q.coverage)), lookupRecords: this.parseRecordList(mf) } : void xe.assert(!1, "0x" + a.toString(16) + ": lookup type 6 format must be 1, 2 or 3.");
          }, lf[7] = function () {
            var a = this.parseUShort();xe.argument(1 === a, "GSUB Extension Substitution subtable identifier-format must be 1");var b = this.parseUShort(),
                c = new Q(this.data, this.offset + this.parseULong());return { substFormat: 1, lookupType: b, extension: lf[b].call(c) };
          }, lf[8] = function () {
            var a = this.parseUShort();return xe.argument(1 === a, "GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"), { substFormat: a, coverage: this.parsePointer(Q.coverage), backtrackCoverage: this.parseList(Q.pointer(Q.coverage)), lookaheadCoverage: this.parseList(Q.pointer(Q.coverage)), substitutes: this.parseUShortList() };
          };var nf = new Array(9);nf[1] = function (a) {
            return 1 === a.substFormat ? new Ie.Table("substitutionTable", [{ name: "substFormat", type: "USHORT", value: 1 }, { name: "coverage", type: "TABLE", value: new Ie.Coverage(a.coverage) }, { name: "deltaGlyphID", type: "USHORT", value: a.deltaGlyphId }]) : new Ie.Table("substitutionTable", [{ name: "substFormat", type: "USHORT", value: 2 }, { name: "coverage", type: "TABLE", value: new Ie.Coverage(a.coverage) }].concat(Ie.ushortList("substitute", a.substitute)));
          }, nf[3] = function (a) {
            return xe.assert(1 === a.substFormat, "Lookup type 3 substFormat must be 1."), new Ie.Table("substitutionTable", [{ name: "substFormat", type: "USHORT", value: 1 }, { name: "coverage", type: "TABLE", value: new Ie.Coverage(a.coverage) }].concat(Ie.tableList("altSet", a.alternateSets, function (a) {
              return new Ie.Table("alternateSetTable", Ie.ushortList("alternate", a));
            })));
          }, nf[4] = function (a) {
            return xe.assert(1 === a.substFormat, "Lookup type 4 substFormat must be 1."), new Ie.Table("substitutionTable", [{ name: "substFormat", type: "USHORT", value: 1 }, { name: "coverage", type: "TABLE", value: new Ie.Coverage(a.coverage) }].concat(Ie.tableList("ligSet", a.ligatureSets, function (a) {
              return new Ie.Table("ligatureSetTable", Ie.tableList("ligature", a, function (a) {
                return new Ie.Table("ligatureTable", [{ name: "ligGlyph", type: "USHORT", value: a.ligGlyph }].concat(Ie.ushortList("component", a.components, a.components.length + 1)));
              }));
            })));
          };var of = { parse: ib, make: jb },
              pf = { parse: kb, make: lb },
              qf = { make: pb, fontToTable: sb, computeCheckSum: nb };wb.prototype = { searchTag: tb, binSearch: ub, getTable: function getTable(a) {
              var b = this.font.tables[this.tableName];return !b && a && (b = this.font.tables[this.tableName] = this.createDefaultTable()), b;
            }, getScriptNames: function getScriptNames() {
              var a = this.getTable();return a ? a.scripts.map(function (a) {
                return a.tag;
              }) : [];
            }, getDefaultScriptName: function getDefaultScriptName() {
              var a = this.getTable();if (a) {
                for (var b = !1, c = 0; c < a.scripts.length; c++) {
                  var d = a.scripts[c].tag;if ("DFLT" === d) return d;"latn" === d && (b = !0);
                }return b ? "latn" : void 0;
              }
            }, getScriptTable: function getScriptTable(a, b) {
              var c = this.getTable(b);if (c) {
                a = a || "DFLT";var d = c.scripts,
                    e = tb(c.scripts, a);if (e >= 0) return d[e].script;if (b) {
                  var f = { tag: a, script: { defaultLangSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] }, langSysRecords: [] } };return d.splice(-1 - e, 0, f), f.script;
                }
              }
            }, getLangSysTable: function getLangSysTable(a, b, c) {
              var d = this.getScriptTable(a, c);if (d) {
                if (!b || "dflt" === b || "DFLT" === b) return d.defaultLangSys;var e = tb(d.langSysRecords, b);if (e >= 0) return d.langSysRecords[e].langSys;if (c) {
                  var f = { tag: b, langSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] } };return d.langSysRecords.splice(-1 - e, 0, f), f.langSys;
                }
              }
            }, getFeatureTable: function getFeatureTable(a, b, c, d) {
              var e = this.getLangSysTable(a, b, d);if (e) {
                for (var f, g = e.featureIndexes, h = this.font.tables[this.tableName].features, i = 0; i < g.length; i++) {
                  if (f = h[g[i]], f.tag === c) return f.feature;
                }if (d) {
                  var j = h.length;return xe.assert(0 === j || c >= h[j - 1].tag, "Features must be added in alphabetical order."), f = { tag: c, feature: { params: 0, lookupListIndexes: [] } }, h.push(f), g.push(j), f.feature;
                }
              }
            }, getLookupTables: function getLookupTables(a, b, c, d, e) {
              var f = this.getFeatureTable(a, b, c, e),
                  g = [];if (f) {
                for (var h, i = f.lookupListIndexes, j = this.font.tables[this.tableName].lookups, k = 0; k < i.length; k++) {
                  h = j[i[k]], h.lookupType === d && g.push(h);
                }if (0 === g.length && e) {
                  h = { lookupType: d, lookupFlag: 0, subtables: [], markFilteringSet: void 0 };var l = j.length;return j.push(h), i.push(l), [h];
                }
              }return g;
            }, getGlyphClass: function getGlyphClass(a, b) {
              switch (a.format) {case 1:
                  return a.startGlyph <= b && b < a.startGlyph + a.classes.length ? a.classes[b - a.startGlyph] : 0;case 2:
                  var c = vb(a.ranges, b);return c ? c.classId : 0;}
            }, getCoverageIndex: function getCoverageIndex(a, b) {
              switch (a.format) {case 1:
                  var c = ub(a.glyphs, b);return c >= 0 ? c : -1;case 2:
                  var d = vb(a.ranges, b);return d ? d.index + b - d.start : -1;}
            }, expandCoverage: function expandCoverage(a) {
              if (1 === a.format) return a.glyphs;for (var b = [], c = a.ranges, d = 0; d < c.length; d++) {
                for (var e = c[d], f = e.start, g = e.end, h = f; h <= g; h++) {
                  b.push(h);
                }
              }return b;
            } }, xb.prototype = wb.prototype, xb.prototype.init = function () {
            var a = this.getDefaultScriptName();this.defaultKerningTables = this.getKerningTables(a);
          }, xb.prototype.getKerningValue = function (a, b, c) {
            for (var d = this, e = 0; e < a.length; e++) {
              for (var f = a[e].subtables, g = 0; g < f.length; g++) {
                var h = f[g],
                    i = d.getCoverageIndex(h.coverage, b);if (!(i < 0)) switch (h.posFormat) {case 1:
                    for (var j = h.pairSets[i], k = 0; k < j.length; k++) {
                      var l = j[k];if (l.secondGlyph === c) return l.value1 && l.value1.xAdvance || 0;
                    }break;case 2:
                    var m = d.getGlyphClass(h.classDef1, b),
                        n = d.getGlyphClass(h.classDef2, c),
                        o = h.classRecords[m][n];return o.value1 && o.value1.xAdvance || 0;}
              }
            }return 0;
          }, xb.prototype.getKerningTables = function (a, b) {
            if (this.font.tables.gpos) return this.getLookupTables(a, b, "kern", 2);
          }, yb.prototype = wb.prototype, yb.prototype.createDefaultTable = function () {
            return { version: 1, scripts: [{ tag: "DFLT", script: { defaultLangSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] }, langSysRecords: [] } }], features: [], lookups: [] };
          }, yb.prototype.getSingle = function (a, b, c) {
            for (var d = this, e = [], f = this.getLookupTables(b, c, a, 1), g = 0; g < f.length; g++) {
              for (var h = f[g].subtables, i = 0; i < h.length; i++) {
                var j = h[i],
                    k = d.expandCoverage(j.coverage),
                    l = void 0;if (1 === j.substFormat) {
                  var m = j.deltaGlyphId;for (l = 0; l < k.length; l++) {
                    var n = k[l];e.push({ sub: n, by: n + m });
                  }
                } else {
                  var o = j.substitute;for (l = 0; l < k.length; l++) {
                    e.push({ sub: k[l], by: o[l] });
                  }
                }
              }
            }return e;
          }, yb.prototype.getAlternates = function (a, b, c) {
            for (var d = this, e = [], f = this.getLookupTables(b, c, a, 3), g = 0; g < f.length; g++) {
              for (var h = f[g].subtables, i = 0; i < h.length; i++) {
                for (var j = h[i], k = d.expandCoverage(j.coverage), l = j.alternateSets, m = 0; m < k.length; m++) {
                  e.push({ sub: k[m], by: l[m] });
                }
              }
            }return e;
          }, yb.prototype.getLigatures = function (a, b, c) {
            for (var d = this, e = [], f = this.getLookupTables(b, c, a, 4), g = 0; g < f.length; g++) {
              for (var h = f[g].subtables, i = 0; i < h.length; i++) {
                for (var j = h[i], k = d.expandCoverage(j.coverage), l = j.ligatureSets, m = 0; m < k.length; m++) {
                  for (var n = k[m], o = l[m], p = 0; p < o.length; p++) {
                    var q = o[p];e.push({ sub: [n].concat(q.components), by: q.ligGlyph });
                  }
                }
              }
            }return e;
          }, yb.prototype.addSingle = function (a, b, c, d) {
            var e = this.getLookupTables(c, d, a, 1, !0)[0],
                f = Ab(e, 2, { substFormat: 2, coverage: { format: 1, glyphs: [] }, substitute: [] });xe.assert(1 === f.coverage.format, "Ligature: unable to modify coverage table format " + f.coverage.format);var g = b.sub,
                h = this.binSearch(f.coverage.glyphs, g);h < 0 && (h = -1 - h, f.coverage.glyphs.splice(h, 0, g), f.substitute.splice(h, 0, 0)), f.substitute[h] = b.by;
          }, yb.prototype.addAlternate = function (a, b, c, d) {
            var e = this.getLookupTables(c, d, a, 3, !0)[0],
                f = Ab(e, 1, { substFormat: 1, coverage: { format: 1, glyphs: [] }, alternateSets: [] });xe.assert(1 === f.coverage.format, "Ligature: unable to modify coverage table format " + f.coverage.format);var g = b.sub,
                h = this.binSearch(f.coverage.glyphs, g);h < 0 && (h = -1 - h, f.coverage.glyphs.splice(h, 0, g), f.alternateSets.splice(h, 0, 0)), f.alternateSets[h] = b.by;
          }, yb.prototype.addLigature = function (a, b, c, d) {
            var e = this.getLookupTables(c, d, a, 4, !0)[0],
                f = e.subtables[0];f || (f = { substFormat: 1, coverage: { format: 1, glyphs: [] }, ligatureSets: [] }, e.subtables[0] = f), xe.assert(1 === f.coverage.format, "Ligature: unable to modify coverage table format " + f.coverage.format);var g = b.sub[0],
                h = b.sub.slice(1),
                i = { ligGlyph: b.by, components: h },
                j = this.binSearch(f.coverage.glyphs, g);if (j >= 0) {
              for (var k = f.ligatureSets[j], l = 0; l < k.length; l++) {
                if (zb(k[l].components, h)) return;
              }k.push(i);
            } else j = -1 - j, f.coverage.glyphs.splice(j, 0, g), f.ligatureSets.splice(j, 0, [i]);
          }, yb.prototype.getFeature = function (a, b, c) {
            if (/ss\d\d/.test(a)) return this.getSingle(a, b, c);switch (a) {case "aalt":case "salt":
                return this.getSingle(a, b, c).concat(this.getAlternates(a, b, c));case "dlig":case "liga":case "rlig":
                return this.getLigatures(a, b, c);}
          }, yb.prototype.add = function (a, b, c, d) {
            if (/ss\d\d/.test(a)) return this.addSingle(a, b, c, d);switch (a) {case "aalt":case "salt":
                return "number" == typeof b.by ? this.addSingle(a, b, c, d) : this.addAlternate(a, b, c, d);case "dlig":case "liga":case "rlig":
                return this.addLigature(a, b, c, d);}
          };var rf,
              sf,
              tf,
              uf,
              vf = { getPath: Jb, parse: Lb },
              wf = function wf(a) {
            var b = this.srPeriod,
                c = this.srPhase,
                d = this.srThreshold,
                e = 1;return a < 0 && (a = -a, e = -1), a += d - c, a = Math.trunc(a / b) * b, a += c, a < 0 ? c * e : a * e;
          },
              xf = { x: 1, y: 0, axis: "x", distance: function distance(a, b, c, d) {
              return (c ? a.xo : a.x) - (d ? b.xo : b.x);
            }, interpolate: function interpolate(a, b, c, d) {
              var e, f, g, h, i, j, k;return d && d !== this ? (e = d.distance(a, b, !0, !0), f = d.distance(a, c, !0, !0), i = d.distance(b, b, !1, !0), j = d.distance(c, c, !1, !0), g = Math.abs(e), h = Math.abs(f), 0 === (k = g + h) ? void xf.setRelative(a, a, (i + j) / 2, d, !0) : void xf.setRelative(a, a, (i * h + j * g) / k, d, !0)) : (e = a.xo - b.xo, f = a.xo - c.xo, i = b.x - b.xo, j = c.x - c.xo, g = Math.abs(e), h = Math.abs(f), 0 === (k = g + h) ? void (a.x = a.xo + (i + j) / 2) : void (a.x = a.xo + (i * h + j * g) / k));
            }, normalSlope: Number.NEGATIVE_INFINITY, setRelative: function setRelative(a, b, c, d, e) {
              if (!d || d === this) return void (a.x = (e ? b.xo : b.x) + c);var f = e ? b.xo : b.x,
                  g = e ? b.yo : b.y,
                  h = f + c * d.x,
                  i = g + c * d.y;a.x = h + (a.y - i) / d.normalSlope;
            }, slope: 0, touch: function touch(a) {
              a.xTouched = !0;
            }, touched: function touched(a) {
              return a.xTouched;
            }, untouch: function untouch(a) {
              a.xTouched = !1;
            } },
              yf = { x: 0, y: 1, axis: "y", distance: function distance(a, b, c, d) {
              return (c ? a.yo : a.y) - (d ? b.yo : b.y);
            }, interpolate: function interpolate(a, b, c, d) {
              var e, f, g, h, i, j, k;return d && d !== this ? (e = d.distance(a, b, !0, !0), f = d.distance(a, c, !0, !0), i = d.distance(b, b, !1, !0), j = d.distance(c, c, !1, !0), g = Math.abs(e), h = Math.abs(f), 0 === (k = g + h) ? void yf.setRelative(a, a, (i + j) / 2, d, !0) : void yf.setRelative(a, a, (i * h + j * g) / k, d, !0)) : (e = a.yo - b.yo, f = a.yo - c.yo, i = b.y - b.yo, j = c.y - c.yo, g = Math.abs(e), h = Math.abs(f), 0 === (k = g + h) ? void (a.y = a.yo + (i + j) / 2) : void (a.y = a.yo + (i * h + j * g) / k));
            }, normalSlope: 0, setRelative: function setRelative(a, b, c, d, e) {
              if (!d || d === this) return void (a.y = (e ? b.yo : b.y) + c);var f = e ? b.xo : b.x,
                  g = e ? b.yo : b.y,
                  h = f + c * d.x,
                  i = g + c * d.y;a.y = i + d.normalSlope * (a.x - h);
            }, slope: Number.POSITIVE_INFINITY, touch: function touch(a) {
              a.yTouched = !0;
            }, touched: function touched(a) {
              return a.yTouched;
            }, untouch: function untouch(a) {
              a.yTouched = !1;
            } };Object.freeze(xf), Object.freeze(yf), Tb.prototype.distance = function (a, b, c, d) {
            return this.x * xf.distance(a, b, c, d) + this.y * yf.distance(a, b, c, d);
          }, Tb.prototype.interpolate = function (a, b, c, d) {
            var e, f, g, h, i, j, k;if (g = d.distance(a, b, !0, !0), h = d.distance(a, c, !0, !0), e = d.distance(b, b, !1, !0), f = d.distance(c, c, !1, !0), i = Math.abs(g), j = Math.abs(h), 0 === (k = i + j)) return void this.setRelative(a, a, (e + f) / 2, d, !0);this.setRelative(a, a, (e * j + f * i) / k, d, !0);
          }, Tb.prototype.setRelative = function (a, b, c, d, e) {
            d = d || this;var f = e ? b.xo : b.x,
                g = e ? b.yo : b.y,
                h = f + c * d.x,
                i = g + c * d.y,
                j = d.normalSlope,
                k = this.slope,
                l = a.x,
                m = a.y;a.x = (k * l - j * h + i - m) / (k - j), a.y = k * (a.x - l) + m;
          }, Tb.prototype.touch = function (a) {
            a.xTouched = !0, a.yTouched = !0;
          }, Vb.prototype.nextTouched = function (a) {
            for (var b = this.nextPointOnContour; !a.touched(b) && b !== this;) {
              b = b.nextPointOnContour;
            }return b;
          }, Vb.prototype.prevTouched = function (a) {
            for (var b = this.prevPointOnContour; !a.touched(b) && b !== this;) {
              b = b.prevPointOnContour;
            }return b;
          };var zf = Object.freeze(new Vb(0, 0)),
              Af = { cvCutIn: 17 / 16, deltaBase: 9, deltaShift: .125, loop: 1, minDis: 1, autoFlip: !0 };Mb.prototype.exec = function (b, c) {
            if ("number" != typeof c) throw new Error("Point size is not a number!");if (!(this._errorState > 2)) {
              var d = this.font,
                  e = this._prepState;if (!e || e.ppem !== c) {
                var f = this._fpgmState;if (!f) {
                  Wb.prototype = Af, f = this._fpgmState = new Wb("fpgm", d.tables.fpgm), f.funcs = [], f.font = d, a.DEBUG && (console.log("---EXEC FPGM---"), f.step = -1);try {
                    sf(f);
                  } catch (a) {
                    return console.log("Hinting error in FPGM:" + a), void (this._errorState = 3);
                  }
                }Wb.prototype = f, e = this._prepState = new Wb("prep", d.tables.prep), e.ppem = c;var g = d.tables.cvt;if (g) for (var h = e.cvt = new Array(g.length), i = c / d.unitsPerEm, j = 0; j < g.length; j++) {
                  h[j] = g[j] * i;
                } else e.cvt = [];a.DEBUG && (console.log("---EXEC PREP---"), e.step = -1);try {
                  sf(e);
                } catch (a) {
                  this._errorState < 2 && console.log("Hinting error in PREP:" + a), this._errorState = 2;
                }
              }if (!(this._errorState > 1)) try {
                return tf(b, e);
              } catch (a) {
                return this._errorState < 1 && (console.log("Hinting error:" + a), console.log("Note: further hinting errors are silenced")), void (this._errorState = 1);
              }
            }
          }, tf = function tf(b, c) {
            var d,
                e,
                f,
                g = c.ppem / c.font.unitsPerEm,
                h = g,
                i = b.components;if (Wb.prototype = c, i) {
              var j = c.font;e = [], d = [];for (var k = 0; k < i.length; k++) {
                var l = i[k],
                    m = j.glyphs.get(l.glyphIndex);f = new Wb("glyf", m.instructions), a.DEBUG && (console.log("---EXEC COMP " + k + "---"), f.step = -1), uf(m, f, g, h);for (var n = Math.round(l.dx * g), o = Math.round(l.dy * h), p = f.gZone, q = f.contours, r = 0; r < p.length; r++) {
                  var s = p[r];s.xTouched = s.yTouched = !1, s.xo = s.x = s.x + n, s.yo = s.y = s.y + o;
                }var t = e.length;e.push.apply(e, p);for (var u = 0; u < q.length; u++) {
                  d.push(q[u] + t);
                }
              }b.instructions && !f.inhibitGridFit && (f = new Wb("glyf", b.instructions), f.gZone = f.z0 = f.z1 = f.z2 = e, f.contours = d, e.push(new Vb(0, 0), new Vb(Math.round(b.advanceWidth * g), 0)), a.DEBUG && (console.log("---EXEC COMPOSITE---"), f.step = -1), sf(f), e.length -= 2);
            } else f = new Wb("glyf", b.instructions), a.DEBUG && (console.log("---EXEC GLYPH---"), f.step = -1), uf(b, f, g, h), e = f.gZone;return e;
          }, uf = function uf(b, c, d, e) {
            for (var f, g = b.points || [], h = g.length, i = c.gZone = c.z0 = c.z1 = c.z2 = [], j = c.contours = [], k = 0; k < h; k++) {
              f = g[k], i[k] = new Vb(f.x * d, f.y * e, f.lastPointOfContour, f.onCurve);
            }for (var l, m, n = 0; n < h; n++) {
              f = i[n], l || (l = f, j.push(n)), f.lastPointOfContour ? (f.nextPointOnContour = l, l.prevPointOnContour = f, l = void 0) : (m = i[n + 1], f.nextPointOnContour = m, m.prevPointOnContour = f);
            }if (!c.inhibitGridFit) {
              if (a.DEBUG) {
                console.log("PROCESSING GLYPH", c.stack);for (var o = 0; o < h; o++) {
                  console.log(o, i[o].x, i[o].y);
                }
              }if (i.push(new Vb(0, 0), new Vb(Math.round(b.advanceWidth * d), 0)), sf(c), i.length -= 2, a.DEBUG) {
                console.log("FINISHED GLYPH", c.stack);for (var p = 0; p < h; p++) {
                  console.log(p, i[p].x, i[p].y);
                }
              }
            }
          }, sf = function sf(b) {
            var c = b.prog;if (c) {
              var d,
                  e = c.length;for (b.ip = 0; b.ip < e; b.ip++) {
                if (a.DEBUG && b.step++, !(d = rf[c[b.ip]])) throw new Error("unknown instruction: 0x" + Number(c[b.ip]).toString(16));d(b);
              }
            }
          }, rf = [Zb.bind(void 0, yf), Zb.bind(void 0, xf), $b.bind(void 0, yf), $b.bind(void 0, xf), _b.bind(void 0, yf), _b.bind(void 0, xf), ac.bind(void 0, 0), ac.bind(void 0, 1), bc.bind(void 0, 0), bc.bind(void 0, 1), cc, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc, nc, oc, pc, qc, rc, sc, tc, uc, vc, void 0, void 0, wc, xc, yc, zc, Ac, Dc, Ec, void 0, void 0, void 0, Bc, Cc, Fc, void 0, Gc.bind(void 0, 0), Gc.bind(void 0, 1), Hc.bind(void 0, yf), Hc.bind(void 0, xf), Ic.bind(void 0, 0), Ic.bind(void 0, 1), Jc.bind(void 0, 0), Jc.bind(void 0, 1), Kc.bind(void 0, 0), Kc.bind(void 0, 1), Lc, Mc, Nc.bind(void 0, 0), Nc.bind(void 0, 1), Oc, Pc, Qc.bind(void 0, 0), Qc.bind(void 0, 1), Rc, Sc, Tc, Uc, Vc, Wc, Xc.bind(void 0, 0), Xc.bind(void 0, 1), void 0, Yc.bind(void 0, 0), Yc.bind(void 0, 1), Zc, void 0, $c, void 0, void 0, _c, ad, bd, cd, dd, ed, fd, gd, hd, id, jd, kd, ld, md.bind(void 0, 1), nd, od, pd, qd, rd, sd, td, ud, vd, wd, xd.bind(void 0, 0), xd.bind(void 0, 1), xd.bind(void 0, 2), xd.bind(void 0, 3), void 0, void 0, void 0, void 0, yd, md.bind(void 0, 2), md.bind(void 0, 3), zd.bind(void 0, 1), zd.bind(void 0, 2), zd.bind(void 0, 3), Ad, Bd, void 0, void 0, Cd, void 0, Dd, Ed, xc, xc, void 0, void 0, void 0, void 0, void 0, Fd, Gd.bind(void 0, 0), Gd.bind(void 0, 1), Hd, void 0, Id, Jd, Kd, Ld, Md, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, Nd.bind(void 0, 1), Nd.bind(void 0, 2), Nd.bind(void 0, 3), Nd.bind(void 0, 4), Nd.bind(void 0, 5), Nd.bind(void 0, 6), Nd.bind(void 0, 7), Nd.bind(void 0, 8), Od.bind(void 0, 1), Od.bind(void 0, 2), Od.bind(void 0, 3), Od.bind(void 0, 4), Od.bind(void 0, 5), Od.bind(void 0, 6), Od.bind(void 0, 7), Od.bind(void 0, 8), Pd.bind(void 0, 0, 0, 0, 0, 0), Pd.bind(void 0, 0, 0, 0, 0, 1), Pd.bind(void 0, 0, 0, 0, 0, 2), Pd.bind(void 0, 0, 0, 0, 0, 3), Pd.bind(void 0, 0, 0, 0, 1, 0), Pd.bind(void 0, 0, 0, 0, 1, 1), Pd.bind(void 0, 0, 0, 0, 1, 2), Pd.bind(void 0, 0, 0, 0, 1, 3), Pd.bind(void 0, 0, 0, 1, 0, 0), Pd.bind(void 0, 0, 0, 1, 0, 1), Pd.bind(void 0, 0, 0, 1, 0, 2), Pd.bind(void 0, 0, 0, 1, 0, 3), Pd.bind(void 0, 0, 0, 1, 1, 0), Pd.bind(void 0, 0, 0, 1, 1, 1), Pd.bind(void 0, 0, 0, 1, 1, 2), Pd.bind(void 0, 0, 0, 1, 1, 3), Pd.bind(void 0, 0, 1, 0, 0, 0), Pd.bind(void 0, 0, 1, 0, 0, 1), Pd.bind(void 0, 0, 1, 0, 0, 2), Pd.bind(void 0, 0, 1, 0, 0, 3), Pd.bind(void 0, 0, 1, 0, 1, 0), Pd.bind(void 0, 0, 1, 0, 1, 1), Pd.bind(void 0, 0, 1, 0, 1, 2), Pd.bind(void 0, 0, 1, 0, 1, 3), Pd.bind(void 0, 0, 1, 1, 0, 0), Pd.bind(void 0, 0, 1, 1, 0, 1), Pd.bind(void 0, 0, 1, 1, 0, 2), Pd.bind(void 0, 0, 1, 1, 0, 3), Pd.bind(void 0, 0, 1, 1, 1, 0), Pd.bind(void 0, 0, 1, 1, 1, 1), Pd.bind(void 0, 0, 1, 1, 1, 2), Pd.bind(void 0, 0, 1, 1, 1, 3), Pd.bind(void 0, 1, 0, 0, 0, 0), Pd.bind(void 0, 1, 0, 0, 0, 1), Pd.bind(void 0, 1, 0, 0, 0, 2), Pd.bind(void 0, 1, 0, 0, 0, 3), Pd.bind(void 0, 1, 0, 0, 1, 0), Pd.bind(void 0, 1, 0, 0, 1, 1), Pd.bind(void 0, 1, 0, 0, 1, 2), Pd.bind(void 0, 1, 0, 0, 1, 3), Pd.bind(void 0, 1, 0, 1, 0, 0), Pd.bind(void 0, 1, 0, 1, 0, 1), Pd.bind(void 0, 1, 0, 1, 0, 2), Pd.bind(void 0, 1, 0, 1, 0, 3), Pd.bind(void 0, 1, 0, 1, 1, 0), Pd.bind(void 0, 1, 0, 1, 1, 1), Pd.bind(void 0, 1, 0, 1, 1, 2), Pd.bind(void 0, 1, 0, 1, 1, 3), Pd.bind(void 0, 1, 1, 0, 0, 0), Pd.bind(void 0, 1, 1, 0, 0, 1), Pd.bind(void 0, 1, 1, 0, 0, 2), Pd.bind(void 0, 1, 1, 0, 0, 3), Pd.bind(void 0, 1, 1, 0, 1, 0), Pd.bind(void 0, 1, 1, 0, 1, 1), Pd.bind(void 0, 1, 1, 0, 1, 2), Pd.bind(void 0, 1, 1, 0, 1, 3), Pd.bind(void 0, 1, 1, 1, 0, 0), Pd.bind(void 0, 1, 1, 1, 0, 1), Pd.bind(void 0, 1, 1, 1, 0, 2), Pd.bind(void 0, 1, 1, 1, 0, 3), Pd.bind(void 0, 1, 1, 1, 1, 0), Pd.bind(void 0, 1, 1, 1, 1, 1), Pd.bind(void 0, 1, 1, 1, 1, 2), Pd.bind(void 0, 1, 1, 1, 1, 3)];var Bf = Array.from || function (a) {
            return a.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]?|[^\uD800-\uDFFF]|./g) || [];
          };Qd.prototype.hasChar = function (a) {
            return null !== this.encoding.charToGlyphIndex(a);
          }, Qd.prototype.charToGlyphIndex = function (a) {
            return this.encoding.charToGlyphIndex(a);
          }, Qd.prototype.charToGlyph = function (a) {
            var b = this.charToGlyphIndex(a),
                c = this.glyphs.get(b);return c || (c = this.glyphs.get(0)), c;
          }, Qd.prototype.stringToGlyphs = function (a, b) {
            var c = this;b = b || this.defaultRenderOptions;for (var d = Bf(a), e = [], f = 0; f < d.length; f += 1) {
              var g = d[f];e.push(c.charToGlyphIndex(g));
            }var h = e.length;if (b.features) {
              var i = b.script || this.substitution.getDefaultScriptName(),
                  j = [];b.features.liga && (j = j.concat(this.substitution.getFeature("liga", i, b.language))), b.features.rlig && (j = j.concat(this.substitution.getFeature("rlig", i, b.language)));for (var k = 0; k < h; k += 1) {
                for (var l = 0; l < j.length; l++) {
                  for (var m = j[l], n = m.sub, o = n.length, p = 0; p < o && n[p] === e[k + p];) {
                    p++;
                  }p === o && (e.splice(k, o, m.by), h = h - o + 1);
                }
              }
            }for (var q = new Array(h), r = this.glyphs.get(0), s = 0; s < h; s += 1) {
              q[s] = c.glyphs.get(e[s]) || r;
            }return q;
          }, Qd.prototype.nameToGlyphIndex = function (a) {
            return this.glyphNames.nameToGlyphIndex(a);
          }, Qd.prototype.nameToGlyph = function (a) {
            var b = this.nameToGlyphIndex(a),
                c = this.glyphs.get(b);return c || (c = this.glyphs.get(0)), c;
          }, Qd.prototype.glyphIndexToName = function (a) {
            return this.glyphNames.glyphIndexToName ? this.glyphNames.glyphIndexToName(a) : "";
          }, Qd.prototype.getKerningValue = function (a, b) {
            a = a.index || a, b = b.index || b;var c = this.position.defaultKerningTables;return c ? this.position.getKerningValue(c, a, b) : this.kerningPairs[a + "," + b] || 0;
          }, Qd.prototype.defaultRenderOptions = { kerning: !0, features: { liga: !0, rlig: !0 } }, Qd.prototype.forEachGlyph = function (a, b, c, d, e, f) {
            var g = this;b = void 0 !== b ? b : 0, c = void 0 !== c ? c : 0, d = void 0 !== d ? d : 72, e = e || this.defaultRenderOptions;var h,
                i = 1 / this.unitsPerEm * d,
                j = this.stringToGlyphs(a, e);if (e.kerning) {
              var k = e.script || this.position.getDefaultScriptName();h = this.position.getKerningTables(k, e.language);
            }for (var l = 0; l < j.length; l += 1) {
              var m = j[l];if (f.call(g, m, b, c, d, e), m.advanceWidth && (b += m.advanceWidth * i), e.kerning && l < j.length - 1) {
                b += (h ? g.position.getKerningValue(h, m.index, j[l + 1].index) : g.getKerningValue(m, j[l + 1])) * i;
              }e.letterSpacing ? b += e.letterSpacing * d : e.tracking && (b += e.tracking / 1e3 * d);
            }return b;
          }, Qd.prototype.getPath = function (a, b, c, d, e) {
            var f = new r();return this.forEachGlyph(a, b, c, d, e, function (a, b, c, d) {
              var g = a.getPath(b, c, d, e, this);f.extend(g);
            }), f;
          }, Qd.prototype.getPaths = function (a, b, c, d, e) {
            var f = [];return this.forEachGlyph(a, b, c, d, e, function (a, b, c, d) {
              var g = a.getPath(b, c, d, e, this);f.push(g);
            }), f;
          }, Qd.prototype.getAdvanceWidth = function (a, b, c) {
            return this.forEachGlyph(a, 0, 0, b, c, function () {});
          }, Qd.prototype.draw = function (a, b, c, d, e, f) {
            this.getPath(b, c, d, e, f).draw(a);
          }, Qd.prototype.drawPoints = function (a, b, c, d, e, f) {
            this.forEachGlyph(b, c, d, e, f, function (b, c, d, e) {
              b.drawPoints(a, c, d, e);
            });
          }, Qd.prototype.drawMetrics = function (a, b, c, d, e, f) {
            this.forEachGlyph(b, c, d, e, f, function (b, c, d, e) {
              b.drawMetrics(a, c, d, e);
            });
          }, Qd.prototype.getEnglishName = function (a) {
            var b = this.names[a];if (b) return b.en;
          }, Qd.prototype.validate = function () {
            function a(a, b) {}function b(b) {
              var d = c.getEnglishName(b);a(d && d.trim().length > 0, "No English " + b + " specified.");
            }var c = this;b("fontFamily"), b("weightName"), b("manufacturer"), b("copyright"), b("version"), a(this.unitsPerEm > 0, "No unitsPerEm specified.");
          }, Qd.prototype.toTables = function () {
            return qf.fontToTable(this);
          }, Qd.prototype.toBuffer = function () {
            return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."), this.toArrayBuffer();
          }, Qd.prototype.toArrayBuffer = function () {
            for (var a = this.toTables(), b = a.encode(), c = new ArrayBuffer(b.length), d = new Uint8Array(c), e = 0; e < b.length; e++) {
              d[e] = b[e];
            }return c;
          }, Qd.prototype.download = function (a) {
            var c = this.getEnglishName("fontFamily"),
                d = this.getEnglishName("fontSubfamily");a = a || c.replace(/\s/g, "") + "-" + d + ".otf";var e = this.toArrayBuffer();if (Bb()) window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem, window.requestFileSystem(window.TEMPORARY, e.byteLength, function (b) {
              b.root.getFile(a, { create: !0 }, function (a) {
                a.createWriter(function (b) {
                  var c = new DataView(e),
                      d = new Blob([c], { type: "font/opentype" });b.write(d), b.addEventListener("writeend", function () {
                    location.href = a.toURL();
                  }, !1);
                });
              });
            }, function (a) {
              throw new Error(a.name + ": " + a.message);
            });else {
              var f = b("fs"),
                  g = Db(e);f.writeFileSync(a, g);
            }
          }, Qd.prototype.fsSelectionValues = { ITALIC: 1, UNDERSCORE: 2, NEGATIVE: 4, OUTLINED: 8, STRIKEOUT: 16, BOLD: 32, REGULAR: 64, USER_TYPO_METRICS: 128, WWS: 256, OBLIQUE: 512 }, Qd.prototype.usWidthClasses = { ULTRA_CONDENSED: 1, EXTRA_CONDENSED: 2, CONDENSED: 3, SEMI_CONDENSED: 4, MEDIUM: 5, SEMI_EXPANDED: 6, EXPANDED: 7, EXTRA_EXPANDED: 8, ULTRA_EXPANDED: 9 }, Qd.prototype.usWeightClasses = { THIN: 100, EXTRA_LIGHT: 200, LIGHT: 300, NORMAL: 400, MEDIUM: 500, SEMI_BOLD: 600, BOLD: 700, EXTRA_BOLD: 800, BLACK: 900 };var Cf = { make: Wd, parse: Xd },
              Df = new Array(10);Df[1] = function () {
            var a = this.offset + this.relativeOffset,
                b = this.parseUShort();return 1 === b ? { posFormat: 1, coverage: this.parsePointer(Q.coverage), value: this.parseValueRecord() } : 2 === b ? {
              posFormat: 2, coverage: this.parsePointer(Q.coverage), values: this.parseValueRecordList() } : void xe.assert(!1, "0x" + a.toString(16) + ": GPOS lookup type 1 format must be 1 or 2.");
          }, Df[2] = function () {
            var a = this.offset + this.relativeOffset,
                b = this.parseUShort();xe.assert(1 === b || 2 === b, "0x" + a.toString(16) + ": GPOS lookup type 2 format must be 1 or 2.");var c = this.parsePointer(Q.coverage),
                d = this.parseUShort(),
                e = this.parseUShort();if (1 === b) return { posFormat: b, coverage: c, valueFormat1: d, valueFormat2: e, pairSets: this.parseList(Q.pointer(Q.list(function () {
                return { secondGlyph: this.parseUShort(), value1: this.parseValueRecord(d), value2: this.parseValueRecord(e) };
              }))) };if (2 === b) {
              var f = this.parsePointer(Q.classDef),
                  g = this.parsePointer(Q.classDef),
                  h = this.parseUShort(),
                  i = this.parseUShort();return { posFormat: b, coverage: c, valueFormat1: d, valueFormat2: e, classDef1: f, classDef2: g, class1Count: h, class2Count: i, classRecords: this.parseList(h, Q.list(i, function () {
                  return { value1: this.parseValueRecord(d), value2: this.parseValueRecord(e) };
                })) };
            }
          }, Df[3] = function () {
            return { error: "GPOS Lookup 3 not supported" };
          }, Df[4] = function () {
            return { error: "GPOS Lookup 4 not supported" };
          }, Df[5] = function () {
            return { error: "GPOS Lookup 5 not supported" };
          }, Df[6] = function () {
            return { error: "GPOS Lookup 6 not supported" };
          }, Df[7] = function () {
            return { error: "GPOS Lookup 7 not supported" };
          }, Df[8] = function () {
            return { error: "GPOS Lookup 8 not supported" };
          }, Df[9] = function () {
            return { error: "GPOS Lookup 9 not supported" };
          };var Ef = new Array(10),
              Ff = { parse: Yd, make: Zd },
              Gf = { parse: ae },
              Hf = { parse: be };a.Font = Qd, a.Glyph = ca, a.Path = r, a.BoundingBox = q, a._parse = Le, a.parse = he, a.load = ie, a.loadSync = je, Object.defineProperty(a, "__esModule", { value: !0 });
        });
      }).call(this, b("buffer").Buffer);
    }, { buffer: 3, fs: 2 }], 11: [function (a, b, c) {
      function d() {
        throw new Error("setTimeout has not been defined");
      }function e() {
        throw new Error("clearTimeout has not been defined");
      }function f(a) {
        if (l === setTimeout) return setTimeout(a, 0);if ((l === d || !l) && setTimeout) return l = setTimeout, setTimeout(a, 0);try {
          return l(a, 0);
        } catch (b) {
          try {
            return l.call(null, a, 0);
          } catch (b) {
            return l.call(this, a, 0);
          }
        }
      }function g(a) {
        if (m === clearTimeout) return clearTimeout(a);if ((m === e || !m) && clearTimeout) return m = clearTimeout, clearTimeout(a);try {
          return m(a);
        } catch (b) {
          try {
            return m.call(null, a);
          } catch (b) {
            return m.call(this, a);
          }
        }
      }function h() {
        q && o && (q = !1, o.length ? p = o.concat(p) : r = -1, p.length && i());
      }function i() {
        if (!q) {
          var a = f(h);q = !0;for (var b = p.length; b;) {
            for (o = p, p = []; ++r < b;) {
              o && o[r].run();
            }r = -1, b = p.length;
          }o = null, q = !1, g(a);
        }
      }function j(a, b) {
        this.fun = a, this.array = b;
      }function k() {}var l,
          m,
          n = b.exports = {};!function () {
        try {
          l = "function" == typeof setTimeout ? setTimeout : d;
        } catch (a) {
          l = d;
        }try {
          m = "function" == typeof clearTimeout ? clearTimeout : e;
        } catch (a) {
          m = e;
        }
      }();var o,
          p = [],
          q = !1,
          r = -1;n.nextTick = function (a) {
        var b = new Array(arguments.length - 1);if (arguments.length > 1) for (var c = 1; c < arguments.length; c++) {
          b[c - 1] = arguments[c];
        }p.push(new j(a, b)), 1 !== p.length || q || f(i);
      }, j.prototype.run = function () {
        this.fun.apply(null, this.array);
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = k, n.addListener = k, n.once = k, n.off = k, n.removeListener = k, n.removeAllListeners = k, n.emit = k, n.prependListener = k, n.prependOnceListener = k, n.listeners = function (a) {
        return [];
      }, n.binding = function (a) {
        throw new Error("process.binding is not supported");
      }, n.cwd = function () {
        return "/";
      }, n.chdir = function (a) {
        throw new Error("process.chdir is not supported");
      }, n.umask = function () {
        return 0;
      };
    }, {}], 12: [function (a, b, c) {
      !function (a) {
        "use strict";
        function b(a) {
          if ("string" != typeof a && (a = String(a)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(a)) throw new TypeError("Invalid character in header field name");return a.toLowerCase();
        }function c(a) {
          return "string" != typeof a && (a = String(a)), a;
        }function d(a) {
          var b = { next: function next() {
              var b = a.shift();return { done: void 0 === b, value: b };
            } };return r.iterable && (b[Symbol.iterator] = function () {
            return b;
          }), b;
        }function e(a) {
          this.map = {}, a instanceof e ? a.forEach(function (a, b) {
            this.append(b, a);
          }, this) : Array.isArray(a) ? a.forEach(function (a) {
            this.append(a[0], a[1]);
          }, this) : a && Object.getOwnPropertyNames(a).forEach(function (b) {
            this.append(b, a[b]);
          }, this);
        }function f(a) {
          if (a.bodyUsed) return Promise.reject(new TypeError("Already read"));a.bodyUsed = !0;
        }function g(a) {
          return new Promise(function (b, c) {
            a.onload = function () {
              b(a.result);
            }, a.onerror = function () {
              c(a.error);
            };
          });
        }function h(a) {
          var b = new FileReader(),
              c = g(b);return b.readAsArrayBuffer(a), c;
        }function i(a) {
          var b = new FileReader(),
              c = g(b);return b.readAsText(a), c;
        }function j(a) {
          for (var b = new Uint8Array(a), c = new Array(b.length), d = 0; d < b.length; d++) {
            c[d] = String.fromCharCode(b[d]);
          }return c.join("");
        }function k(a) {
          if (a.slice) return a.slice(0);var b = new Uint8Array(a.byteLength);return b.set(new Uint8Array(a)), b.buffer;
        }function l() {
          return this.bodyUsed = !1, this._initBody = function (a) {
            if (this._bodyInit = a, a) {
              if ("string" == typeof a) this._bodyText = a;else if (r.blob && Blob.prototype.isPrototypeOf(a)) this._bodyBlob = a;else if (r.formData && FormData.prototype.isPrototypeOf(a)) this._bodyFormData = a;else if (r.searchParams && URLSearchParams.prototype.isPrototypeOf(a)) this._bodyText = a.toString();else if (r.arrayBuffer && r.blob && t(a)) this._bodyArrayBuffer = k(a.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);else {
                if (!r.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(a) && !u(a)) throw new Error("unsupported BodyInit type");this._bodyArrayBuffer = k(a);
              }
            } else this._bodyText = "";this.headers.get("content-type") || ("string" == typeof a ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r.searchParams && URLSearchParams.prototype.isPrototypeOf(a) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, r.blob && (this.blob = function () {
            var a = f(this);if (a) return a;if (this._bodyBlob) return Promise.resolve(this._bodyBlob);if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));if (this._bodyFormData) throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]));
          }, this.arrayBuffer = function () {
            return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(h);
          }), this.text = function () {
            var a = f(this);if (a) return a;if (this._bodyBlob) return i(this._bodyBlob);if (this._bodyArrayBuffer) return Promise.resolve(j(this._bodyArrayBuffer));if (this._bodyFormData) throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText);
          }, r.formData && (this.formData = function () {
            return this.text().then(o);
          }), this.json = function () {
            return this.text().then(JSON.parse);
          }, this;
        }function m(a) {
          var b = a.toUpperCase();return v.indexOf(b) > -1 ? b : a;
        }function n(a, b) {
          b = b || {};var c = b.body;if (a instanceof n) {
            if (a.bodyUsed) throw new TypeError("Already read");this.url = a.url, this.credentials = a.credentials, b.headers || (this.headers = new e(a.headers)), this.method = a.method, this.mode = a.mode, c || null == a._bodyInit || (c = a._bodyInit, a.bodyUsed = !0);
          } else this.url = String(a);if (this.credentials = b.credentials || this.credentials || "omit", !b.headers && this.headers || (this.headers = new e(b.headers)), this.method = m(b.method || this.method || "GET"), this.mode = b.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && c) throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(c);
        }function o(a) {
          var b = new FormData();return a.trim().split("&").forEach(function (a) {
            if (a) {
              var c = a.split("="),
                  d = c.shift().replace(/\+/g, " "),
                  e = c.join("=").replace(/\+/g, " ");b.append(decodeURIComponent(d), decodeURIComponent(e));
            }
          }), b;
        }function p(a) {
          var b = new e();return a.split(/\r?\n/).forEach(function (a) {
            var c = a.split(":"),
                d = c.shift().trim();if (d) {
              var e = c.join(":").trim();b.append(d, e);
            }
          }), b;
        }function q(a, b) {
          b || (b = {}), this.type = "default", this.status = "status" in b ? b.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in b ? b.statusText : "OK", this.headers = new e(b.headers), this.url = b.url || "", this._initBody(a);
        }if (!a.fetch) {
          var r = { searchParams: "URLSearchParams" in a, iterable: "Symbol" in a && "iterator" in Symbol, blob: "FileReader" in a && "Blob" in a && function () {
              try {
                return new Blob(), !0;
              } catch (a) {
                return !1;
              }
            }(), formData: "FormData" in a, arrayBuffer: "ArrayBuffer" in a };if (r.arrayBuffer) var s = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
              t = function t(a) {
            return a && DataView.prototype.isPrototypeOf(a);
          },
              u = ArrayBuffer.isView || function (a) {
            return a && s.indexOf(Object.prototype.toString.call(a)) > -1;
          };e.prototype.append = function (a, d) {
            a = b(a), d = c(d);var e = this.map[a];this.map[a] = e ? e + "," + d : d;
          }, e.prototype.delete = function (a) {
            delete this.map[b(a)];
          }, e.prototype.get = function (a) {
            return a = b(a), this.has(a) ? this.map[a] : null;
          }, e.prototype.has = function (a) {
            return this.map.hasOwnProperty(b(a));
          }, e.prototype.set = function (a, d) {
            this.map[b(a)] = c(d);
          }, e.prototype.forEach = function (a, b) {
            for (var c in this.map) {
              this.map.hasOwnProperty(c) && a.call(b, this.map[c], c, this);
            }
          }, e.prototype.keys = function () {
            var a = [];return this.forEach(function (b, c) {
              a.push(c);
            }), d(a);
          }, e.prototype.values = function () {
            var a = [];return this.forEach(function (b) {
              a.push(b);
            }), d(a);
          }, e.prototype.entries = function () {
            var a = [];return this.forEach(function (b, c) {
              a.push([c, b]);
            }), d(a);
          }, r.iterable && (e.prototype[Symbol.iterator] = e.prototype.entries);var v = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];n.prototype.clone = function () {
            return new n(this, { body: this._bodyInit });
          }, l.call(n.prototype), l.call(q.prototype), q.prototype.clone = function () {
            return new q(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new e(this.headers), url: this.url });
          }, q.error = function () {
            var a = new q(null, { status: 0, statusText: "" });return a.type = "error", a;
          };var w = [301, 302, 303, 307, 308];q.redirect = function (a, b) {
            if (-1 === w.indexOf(b)) throw new RangeError("Invalid status code");return new q(null, { status: b, headers: { location: a } });
          }, a.Headers = e, a.Request = n, a.Response = q, a.fetch = function (a, b) {
            return new Promise(function (c, d) {
              var e = new n(a, b),
                  f = new XMLHttpRequest();f.onload = function () {
                var a = { status: f.status, statusText: f.statusText, headers: p(f.getAllResponseHeaders() || "") };a.url = "responseURL" in f ? f.responseURL : a.headers.get("X-Request-URL");var b = "response" in f ? f.response : f.responseText;c(new q(b, a));
              }, f.onerror = function () {
                d(new TypeError("Network request failed"));
              }, f.ontimeout = function () {
                d(new TypeError("Network request failed"));
              }, f.open(e.method, e.url, !0), "include" === e.credentials && (f.withCredentials = !0), "responseType" in f && r.blob && (f.responseType = "blob"), e.headers.forEach(function (a, b) {
                f.setRequestHeader(b, a);
              }), f.send(void 0 === e._bodyInit ? null : e._bodyInit);
            });
          }, a.fetch.polyfill = !0;
        }
      }("undefined" != typeof self ? self : this);
    }, {}], 13: [function (a, b, c) {
      "use strict";
      var d = a("./core/main");a("./core/constants"), a("./core/environment"), a("./core/error_helpers"), a("./core/helpers"), a("./core/legacy"), a("./core/p5.Element"), a("./core/p5.Graphics"), a("./core/p5.Renderer"), a("./core/p5.Renderer2D"), a("./core/rendering"), a("./core/shim"), a("./core/structure"), a("./core/transform"), a("./core/shape/2d_primitives"), a("./core/shape/attributes"), a("./core/shape/curves"), a("./core/shape/vertex"), a("./color/color_conversion"), a("./color/creating_reading"), a("./color/p5.Color"), a("./color/setting"), a("./data/p5.TypedDict"), a("./events/acceleration"), a("./events/keyboard"), a("./events/mouse"), a("./events/touch"), a("./image/filters"), a("./image/image"), a("./image/loading_displaying"), a("./image/p5.Image"), a("./image/pixels"), a("./io/files"), a("./io/p5.Table"), a("./io/p5.TableRow"), a("./io/p5.XML"), a("./math/calculation"), a("./math/math"), a("./math/noise"), a("./math/p5.Vector"), a("./math/random"), a("./math/trigonometry"), a("./typography/attributes"), a("./typography/loading_displaying"), a("./typography/p5.Font"), a("./utilities/array_functions"), a("./utilities/conversion"), a("./utilities/string_functions"), a("./utilities/time_date"), a("./webgl/3d_primitives"), a("./webgl/interaction"), a("./webgl/light"), a("./webgl/loading"), a("./webgl/material"), a("./webgl/p5.Camera"), a("./webgl/p5.Geometry"), a("./webgl/p5.Matrix"), a("./webgl/p5.RendererGL.Immediate"), a("./webgl/p5.RendererGL"), a("./webgl/p5.RendererGL.Retained"), a("./webgl/p5.Shader"), a("./webgl/p5.Texture"), a("./webgl/text"), a("./core/init"), b.exports = d;
    }, { "./color/color_conversion": 14, "./color/creating_reading": 15, "./color/p5.Color": 16, "./color/setting": 17, "./core/constants": 18, "./core/environment": 19, "./core/error_helpers": 20, "./core/helpers": 21, "./core/init": 22, "./core/legacy": 23, "./core/main": 24, "./core/p5.Element": 25, "./core/p5.Graphics": 26, "./core/p5.Renderer": 27, "./core/p5.Renderer2D": 28, "./core/rendering": 29, "./core/shape/2d_primitives": 30, "./core/shape/attributes": 31, "./core/shape/curves": 32, "./core/shape/vertex": 33, "./core/shim": 34, "./core/structure": 35, "./core/transform": 36, "./data/p5.TypedDict": 37, "./events/acceleration": 38, "./events/keyboard": 39, "./events/mouse": 40, "./events/touch": 41, "./image/filters": 42, "./image/image": 43, "./image/loading_displaying": 44, "./image/p5.Image": 45, "./image/pixels": 46, "./io/files": 47, "./io/p5.Table": 48, "./io/p5.TableRow": 49, "./io/p5.XML": 50, "./math/calculation": 51, "./math/math": 52, "./math/noise": 53, "./math/p5.Vector": 54, "./math/random": 55, "./math/trigonometry": 56, "./typography/attributes": 57, "./typography/loading_displaying": 58, "./typography/p5.Font": 59, "./utilities/array_functions": 60, "./utilities/conversion": 61, "./utilities/string_functions": 62, "./utilities/time_date": 63, "./webgl/3d_primitives": 64, "./webgl/interaction": 65, "./webgl/light": 66, "./webgl/loading": 67, "./webgl/material": 68, "./webgl/p5.Camera": 69, "./webgl/p5.Geometry": 70, "./webgl/p5.Matrix": 71, "./webgl/p5.RendererGL": 74, "./webgl/p5.RendererGL.Immediate": 72, "./webgl/p5.RendererGL.Retained": 73, "./webgl/p5.Shader": 75, "./webgl/p5.Texture": 76, "./webgl/text": 77 }], 14: [function (a, b, c) {
      "use strict";
      var d = a("../core/main");d.ColorConversion = {}, d.ColorConversion._hsbaToHSLA = function (a) {
        var b = a[0],
            c = a[1],
            d = a[2],
            e = (2 - c) * d / 2;return 0 !== e && (1 === e ? c = 0 : e < .5 ? c /= 2 - c : c = c * d / (2 - 2 * e)), [b, c, e, a[3]];
      }, d.ColorConversion._hsbaToRGBA = function (a) {
        var b = 6 * a[0],
            c = a[1],
            d = a[2],
            e = [];if (0 === c) e = [d, d, d, a[3]];else {
          var f,
              g,
              h,
              i = Math.floor(b),
              j = d * (1 - c),
              k = d * (1 - c * (b - i)),
              l = d * (1 - c * (1 + i - b));1 === i ? (f = k, g = d, h = j) : 2 === i ? (f = j, g = d, h = l) : 3 === i ? (f = j, g = k, h = d) : 4 === i ? (f = l, g = j, h = d) : 5 === i ? (f = d, g = j, h = k) : (f = d, g = l, h = j), e = [f, g, h, a[3]];
        }return e;
      }, d.ColorConversion._hslaToHSBA = function (a) {
        var b,
            c = a[0],
            d = a[1],
            e = a[2];return b = e < .5 ? (1 + d) * e : e + d - e * d, d = 2 * (b - e) / b, [c, d, b, a[3]];
      }, d.ColorConversion._hslaToRGBA = function (a) {
        var b = 6 * a[0],
            c = a[1],
            d = a[2],
            e = [];if (0 === c) e = [d, d, d, a[3]];else {
          var f;f = d < .5 ? (1 + c) * d : d + c - d * c;var g = 2 * d - f,
              h = function h(a, b, c) {
            return a < 0 ? a += 6 : a >= 6 && (a -= 6), a < 1 ? b + (c - b) * a : a < 3 ? c : a < 4 ? b + (c - b) * (4 - a) : b;
          };e = [h(b + 2, g, f), h(b, g, f), h(b - 2, g, f), a[3]];
        }return e;
      }, d.ColorConversion._rgbaToHSBA = function (a) {
        var b,
            c,
            d = a[0],
            e = a[1],
            f = a[2],
            g = Math.max(d, e, f),
            h = g - Math.min(d, e, f);return 0 === h ? (b = 0, c = 0) : (c = h / g, d === g ? b = (e - f) / h : e === g ? b = 2 + (f - d) / h : f === g && (b = 4 + (d - e) / h), b < 0 ? b += 6 : b >= 6 && (b -= 6)), [b / 6, c, g, a[3]];
      }, d.ColorConversion._rgbaToHSLA = function (a) {
        var b,
            c,
            d = a[0],
            e = a[1],
            f = a[2],
            g = Math.max(d, e, f),
            h = Math.min(d, e, f),
            i = g + h,
            j = g - h;return 0 === j ? (b = 0, c = 0) : (c = i < 1 ? j / i : j / (2 - i), d === g ? b = (e - f) / j : e === g ? b = 2 + (f - d) / j : f === g && (b = 4 + (d - e) / j), b < 0 ? b += 6 : b >= 6 && (b -= 6)), [b / 6, c, i / 2, a[3]];
      }, b.exports = d.ColorConversion;
    }, { "../core/main": 24 }], 15: [function (a, b, c) {
      "use strict";
      var d = a("../core/main"),
          e = a("../core/constants");a("./p5.Color"), a("../core/error_helpers"), d.prototype.alpha = function (a) {
        return d._validateParameters("alpha", arguments), this.color(a)._getAlpha();
      }, d.prototype.blue = function (a) {
        return d._validateParameters("blue", arguments), this.color(a)._getBlue();
      }, d.prototype.brightness = function (a) {
        return d._validateParameters("brightness", arguments), this.color(a)._getBrightness();
      }, d.prototype.color = function () {
        if (d._validateParameters("color", arguments), arguments[0] instanceof d.Color) return arguments[0];var a = arguments[0] instanceof Array ? arguments[0] : arguments;return new d.Color(this, a);
      }, d.prototype.green = function (a) {
        return d._validateParameters("green", arguments), this.color(a)._getGreen();
      }, d.prototype.hue = function (a) {
        return d._validateParameters("hue", arguments), this.color(a)._getHue();
      }, d.prototype.lerpColor = function (a, b, c) {
        d._validateParameters("lerpColor", arguments);var f,
            g,
            h,
            i,
            j,
            k,
            l = this._colorMode,
            m = this._colorMaxes;if (l === e.RGB) j = a.levels.map(function (a) {
          return a / 255;
        }), k = b.levels.map(function (a) {
          return a / 255;
        });else if (l === e.HSB) a._getBrightness(), b._getBrightness(), j = a.hsba, k = b.hsba;else {
          if (l !== e.HSL) throw new Error(l + "cannot be used for interpolation.");a._getLightness(), b._getLightness(), j = a.hsla, k = b.hsla;
        }return c = Math.max(Math.min(c, 1), 0), void 0 === this.lerp && (this.lerp = function (a, b, c) {
          return c * (b - a) + a;
        }), f = this.lerp(j[0], k[0], c), g = this.lerp(j[1], k[1], c), h = this.lerp(j[2], k[2], c), i = this.lerp(j[3], k[3], c), f *= m[l][0], g *= m[l][1], h *= m[l][2], i *= m[l][3], this.color(f, g, h, i);
      }, d.prototype.lightness = function (a) {
        return d._validateParameters("lightness", arguments), this.color(a)._getLightness();
      }, d.prototype.red = function (a) {
        return d._validateParameters("red", arguments), this.color(a)._getRed();
      }, d.prototype.saturation = function (a) {
        return d._validateParameters("saturation", arguments), this.color(a)._getSaturation();
      }, b.exports = d;
    }, { "../core/constants": 18, "../core/error_helpers": 20, "../core/main": 24, "./p5.Color": 16 }], 16: [function (a, b, c) {
      "use strict";
      var d = a("../core/main"),
          e = a("../core/constants"),
          f = a("./color_conversion");d.Color = function (a, b) {
        if (this._storeModeAndMaxes(a._colorMode, a._colorMaxes), this.mode !== e.RGB && this.mode !== e.HSL && this.mode !== e.HSB) throw new Error(this.mode + " is an invalid colorMode.");return this._array = d.Color._parseInputs.apply(this, b), this._calculateLevels(), this;
      }, d.Color.prototype.toString = function (a) {
        this.hsba || (this.hsba = f._rgbaToHSBA(this._array)), this.hsla || (this.hsla = f._rgbaToHSLA(this._array));var b = this.levels,
            c = this._array,
            d = c[3];switch (a) {case "#rrggbb":
            return "#".concat(b[0] < 16 ? "0".concat(b[0].toString(16)) : b[0].toString(16), b[1] < 16 ? "0".concat(b[1].toString(16)) : b[1].toString(16), b[2] < 16 ? "0".concat(b[2].toString(16)) : b[2].toString(16));case "#rrggbbaa":
            return "#".concat(b[0] < 16 ? "0".concat(b[0].toString(16)) : b[0].toString(16), b[1] < 16 ? "0".concat(b[1].toString(16)) : b[1].toString(16), b[2] < 16 ? "0".concat(b[2].toString(16)) : b[2].toString(16), b[3] < 16 ? "0".concat(b[2].toString(16)) : b[3].toString(16));case "#rgb":
            return "#".concat(Math.round(15 * c[0]).toString(16), Math.round(15 * c[1]).toString(16), Math.round(15 * c[2]).toString(16));case "#rgba":
            return "#".concat(Math.round(15 * c[0]).toString(16), Math.round(15 * c[1]).toString(16), Math.round(15 * c[2]).toString(16), Math.round(15 * c[3]).toString(16));case "rgb":
            return "rgb(".concat(b[0], ", ", b[1], ", ", b[2], ")");case "rgb%":
            return "rgb(".concat((100 * c[0]).toPrecision(3), "%, ", (100 * c[1]).toPrecision(3), "%, ", (100 * c[2]).toPrecision(3), "%)");case "rgba%":
            return "rgba(".concat((100 * c[0]).toPrecision(3), "%, ", (100 * c[1]).toPrecision(3), "%, ", (100 * c[2]).toPrecision(3), "%, ", (100 * c[3]).toPrecision(3), "%)");case "hsb":case "hsv":
            return "hsb(".concat(this.hsba[0] * this.maxes[e.HSB][0], ", ", this.hsba[1] * this.maxes[e.HSB][1], ", ", this.hsba[2] * this.maxes[e.HSB][2], ")");case "hsb%":case "hsv%":
            return "hsb(".concat((100 * this.hsba[0]).toPrecision(3), "%, ", (100 * this.hsba[1]).toPrecision(3), "%, ", (100 * this.hsba[2]).toPrecision(3), "%)");case "hsba":case "hsva":
            return "hsba(".concat(this.hsba[0] * this.maxes[e.HSB][0], ", ", this.hsba[1] * this.maxes[e.HSB][1], ", ", this.hsba[2] * this.maxes[e.HSB][2], ", ", d, ")");case "hsba%":case "hsva%":
            return "hsba(".concat((100 * this.hsba[0]).toPrecision(3), "%, ", (100 * this.hsba[1]).toPrecision(3), "%, ", (100 * this.hsba[2]).toPrecision(3), "%, ", (100 * d).toPrecision(3), "%)");case "hsl":
            return "hsl(".concat(this.hsla[0] * this.maxes[e.HSL][0], ", ", this.hsla[1] * this.maxes[e.HSL][1], ", ", this.hsla[2] * this.maxes[e.HSL][2], ")");case "hsl%":
            return "hsl(".concat((100 * this.hsla[0]).toPrecision(3), "%, ", (100 * this.hsla[1]).toPrecision(3), "%, ", (100 * this.hsla[2]).toPrecision(3), "%)");case "hsla":
            return "hsla(".concat(this.hsla[0] * this.maxes[e.HSL][0], ", ", this.hsla[1] * this.maxes[e.HSL][1], ", ", this.hsla[2] * this.maxes[e.HSL][2], ", ", d, ")");case "hsla%":
            return "hsl(".concat((100 * this.hsla[0]).toPrecision(3), "%, ", (100 * this.hsla[1]).toPrecision(3), "%, ", (100 * this.hsla[2]).toPrecision(3), "%, ", (100 * d).toPrecision(3), "%)");case "rgba":default:
            return "rgba(" + b[0] + "," + b[1] + "," + b[2] + "," + d + ")";}
      }, d.Color.prototype.setRed = function (a) {
        this._array[0] = a / this.maxes[e.RGB][0], this._calculateLevels();
      }, d.Color.prototype.setGreen = function (a) {
        this._array[1] = a / this.maxes[e.RGB][1], this._calculateLevels();
      }, d.Color.prototype.setBlue = function (a) {
        this._array[2] = a / this.maxes[e.RGB][2], this._calculateLevels();
      }, d.Color.prototype.setAlpha = function (a) {
        this._array[3] = a / this.maxes[this.mode][3], this._calculateLevels();
      }, d.Color.prototype._calculateLevels = function () {
        for (var a = this._array, b = this.levels = new Array(a.length), c = a.length - 1; c >= 0; --c) {
          b[c] = Math.round(255 * a[c]);
        }
      }, d.Color.prototype._getAlpha = function () {
        return this._array[3] * this.maxes[this.mode][3];
      }, d.Color.prototype._storeModeAndMaxes = function (a, b) {
        this.mode = a, this.maxes = b;
      }, d.Color.prototype._getMode = function () {
        return this.mode;
      }, d.Color.prototype._getMaxes = function () {
        return this.maxes;
      }, d.Color.prototype._getBlue = function () {
        return this._array[2] * this.maxes[e.RGB][2];
      }, d.Color.prototype._getBrightness = function () {
        return this.hsba || (this.hsba = f._rgbaToHSBA(this._array)), this.hsba[2] * this.maxes[e.HSB][2];
      }, d.Color.prototype._getGreen = function () {
        return this._array[1] * this.maxes[e.RGB][1];
      }, d.Color.prototype._getHue = function () {
        return this.mode === e.HSB ? (this.hsba || (this.hsba = f._rgbaToHSBA(this._array)), this.hsba[0] * this.maxes[e.HSB][0]) : (this.hsla || (this.hsla = f._rgbaToHSLA(this._array)), this.hsla[0] * this.maxes[e.HSL][0]);
      }, d.Color.prototype._getLightness = function () {
        return this.hsla || (this.hsla = f._rgbaToHSLA(this._array)), this.hsla[2] * this.maxes[e.HSL][2];
      }, d.Color.prototype._getRed = function () {
        return this._array[0] * this.maxes[e.RGB][0];
      }, d.Color.prototype._getSaturation = function () {
        return this.mode === e.HSB ? (this.hsba || (this.hsba = f._rgbaToHSBA(this._array)), this.hsba[1] * this.maxes[e.HSB][1]) : (this.hsla || (this.hsla = f._rgbaToHSLA(this._array)), this.hsla[1] * this.maxes[e.HSL][1]);
      };var g = { aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", green: "#008000", greenyellow: "#adff2f", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370db", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#db7093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32" },
          h = /\s*/,
          i = /(\d{1,3})/,
          j = /((?:\d+(?:\.\d+)?)|(?:\.\d+))/,
          k = new RegExp(j.source + "%"),
          l = { HEX3: /^#([a-f0-9])([a-f0-9])([a-f0-9])$/i, HEX4: /^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])$/i, HEX6: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i, HEX8: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i, RGB: new RegExp(["^rgb\\(", i.source, ",", i.source, ",", i.source, "\\)$"].join(h.source), "i"), RGB_PERCENT: new RegExp(["^rgb\\(", k.source, ",", k.source, ",", k.source, "\\)$"].join(h.source), "i"), RGBA: new RegExp(["^rgba\\(", i.source, ",", i.source, ",", i.source, ",", j.source, "\\)$"].join(h.source), "i"), RGBA_PERCENT: new RegExp(["^rgba\\(", k.source, ",", k.source, ",", k.source, ",", j.source, "\\)$"].join(h.source), "i"), HSL: new RegExp(["^hsl\\(", i.source, ",", k.source, ",", k.source, "\\)$"].join(h.source), "i"), HSLA: new RegExp(["^hsla\\(", i.source, ",", k.source, ",", k.source, ",", j.source, "\\)$"].join(h.source), "i"), HSB: new RegExp(["^hsb\\(", i.source, ",", k.source, ",", k.source, "\\)$"].join(h.source), "i"), HSBA: new RegExp(["^hsba\\(", i.source, ",", k.source, ",", k.source, ",", j.source, "\\)$"].join(h.source), "i") };d.Color._parseInputs = function (a, b, c, h) {
        var i,
            j = arguments.length,
            k = this.mode,
            m = this.maxes[k],
            n = [];if (j >= 3) {
          for (n[0] = a / m[0], n[1] = b / m[1], n[2] = c / m[2], n[3] = "number" == typeof h ? h / m[3] : 1, i = n.length - 1; i >= 0; --i) {
            var o = n[i];o < 0 ? n[i] = 0 : o > 1 && (n[i] = 1);
          }return k === e.HSL ? f._hslaToRGBA(n) : k === e.HSB ? f._hsbaToRGBA(n) : n;
        }if (1 === j && "string" == typeof a) {
          var p = a.trim().toLowerCase();if (g[p]) return d.Color._parseInputs.call(this, g[p]);if (l.HEX3.test(p)) return n = l.HEX3.exec(p).slice(1).map(function (a) {
            return parseInt(a + a, 16) / 255;
          }), n[3] = 1, n;if (l.HEX6.test(p)) return n = l.HEX6.exec(p).slice(1).map(function (a) {
            return parseInt(a, 16) / 255;
          }), n[3] = 1, n;if (l.HEX4.test(p)) return n = l.HEX4.exec(p).slice(1).map(function (a) {
            return parseInt(a + a, 16) / 255;
          });if (l.HEX8.test(p)) return n = l.HEX8.exec(p).slice(1).map(function (a) {
            return parseInt(a, 16) / 255;
          });if (l.RGB.test(p)) return n = l.RGB.exec(p).slice(1).map(function (a) {
            return a / 255;
          }), n[3] = 1, n;if (l.RGB_PERCENT.test(p)) return n = l.RGB_PERCENT.exec(p).slice(1).map(function (a) {
            return parseFloat(a) / 100;
          }), n[3] = 1, n;if (l.RGBA.test(p)) return n = l.RGBA.exec(p).slice(1).map(function (a, b) {
            return 3 === b ? parseFloat(a) : a / 255;
          });if (l.RGBA_PERCENT.test(p)) return n = l.RGBA_PERCENT.exec(p).slice(1).map(function (a, b) {
            return 3 === b ? parseFloat(a) : parseFloat(a) / 100;
          });if (l.HSL.test(p) ? (n = l.HSL.exec(p).slice(1).map(function (a, b) {
            return 0 === b ? parseInt(a, 10) / 360 : parseInt(a, 10) / 100;
          }), n[3] = 1) : l.HSLA.test(p) && (n = l.HSLA.exec(p).slice(1).map(function (a, b) {
            return 0 === b ? parseInt(a, 10) / 360 : 3 === b ? parseFloat(a) : parseInt(a, 10) / 100;
          })), n = n.map(function (a) {
            return Math.max(Math.min(a, 1), 0);
          }), n.length) return f._hslaToRGBA(n);if (l.HSB.test(p) ? (n = l.HSB.exec(p).slice(1).map(function (a, b) {
            return 0 === b ? parseInt(a, 10) / 360 : parseInt(a, 10) / 100;
          }), n[3] = 1) : l.HSBA.test(p) && (n = l.HSBA.exec(p).slice(1).map(function (a, b) {
            return 0 === b ? parseInt(a, 10) / 360 : 3 === b ? parseFloat(a) : parseInt(a, 10) / 100;
          })), n.length) {
            for (i = n.length - 1; i >= 0; --i) {
              n[i] = Math.max(Math.min(n[i], 1), 0);
            }return f._hsbaToRGBA(n);
          }n = [1, 1, 1, 1];
        } else {
          if (1 !== j && 2 !== j || "number" != typeof a) throw new Error(arguments + "is not a valid color representation.");n[0] = a / m[2], n[1] = a / m[2], n[2] = a / m[2], n[3] = "number" == typeof b ? b / m[3] : 1, n = n.map(function (a) {
            return Math.max(Math.min(a, 1), 0);
          });
        }return n;
      }, b.exports = d.Color;
    }, { "../core/constants": 18, "../core/main": 24, "./color_conversion": 14 }], 17: [function (a, b, c) {
      "use strict";
      var d = a("../core/main"),
          e = a("../core/constants");a("./p5.Color"), d.prototype.background = function () {
        return arguments[0] instanceof d.Image ? this.image(arguments[0], 0, 0, this.width, this.height) : this._renderer.background.apply(this._renderer, arguments), this;
      }, d.prototype.clear = function () {
        return this._renderer.clear(), this;
      }, d.prototype.colorMode = function (a, b, c, f, g) {
        if (d._validateParameters("colorMode", arguments), a === e.RGB || a === e.HSB || a === e.HSL) {
          this._colorMode = a;var h = this._colorMaxes[a];2 === arguments.length ? (h[0] = b, h[1] = b, h[2] = b, h[3] = b) : 4 === arguments.length ? (h[0] = b, h[1] = c, h[2] = f) : 5 === arguments.length && (h[0] = b, h[1] = c, h[2] = f, h[3] = g);
        }return this;
      }, d.prototype.fill = function () {
        return this._renderer._setProperty("_fillSet", !0), this._renderer._setProperty("_doFill", !0), this._renderer.fill.apply(this._renderer, arguments), this;
      }, d.prototype.noFill = function () {
        return this._renderer._setProperty("_doFill", !1), this;
      }, d.prototype.noStroke = function () {
        return this._renderer._setProperty("_doStroke", !1), this;
      }, d.prototype.stroke = function () {
        return this._renderer._setProperty("_strokeSet", !0), this._renderer._setProperty("_doStroke", !0), this._renderer.stroke.apply(this._renderer, arguments), this;
      }, b.exports = d;
    }, { "../core/constants": 18, "../core/main": 24, "./p5.Color": 16 }], 18: [function (a, b, c) {
      "use strict";
      var d = Math.PI;b.exports = { P2D: "p2d", WEBGL: "webgl", ARROW: "default", CROSS: "crosshair", HAND: "pointer", MOVE: "move", TEXT: "text", WAIT: "wait", HALF_PI: d / 2, PI: d, QUARTER_PI: d / 4, TAU: 2 * d, TWO_PI: 2 * d, DEGREES: "degrees", RADIANS: "radians", DEG_TO_RAD: d / 180, RAD_TO_DEG: 180 / d, CORNER: "corner", CORNERS: "corners", RADIUS: "radius", RIGHT: "right", LEFT: "left", CENTER: "center", TOP: "top", BOTTOM: "bottom", BASELINE: "alphabetic", POINTS: 0, LINES: 1, LINE_STRIP: 3, LINE_LOOP: 2, TRIANGLES: 4, TRIANGLE_FAN: 6, TRIANGLE_STRIP: 5, QUADS: "quads", QUAD_STRIP: "quad_strip", CLOSE: "close", OPEN: "open", CHORD: "chord", PIE: "pie", PROJECT: "square", SQUARE: "butt", ROUND: "round", BEVEL: "bevel", MITER: "miter", RGB: "rgb", HSB: "hsb", HSL: "hsl", AUTO: "auto", ALT: 18, BACKSPACE: 8, CONTROL: 17, DELETE: 46, DOWN_ARROW: 40, ENTER: 13, ESCAPE: 27, LEFT_ARROW: 37, OPTION: 18, RETURN: 13, RIGHT_ARROW: 39, SHIFT: 16, TAB: 9, UP_ARROW: 38, BLEND: "source-over", ADD: "lighter", DARKEST: "darken", LIGHTEST: "lighten", DIFFERENCE: "difference", EXCLUSION: "exclusion", MULTIPLY: "multiply", SCREEN: "screen", REPLACE: "copy", OVERLAY: "overlay", HARD_LIGHT: "hard-light", SOFT_LIGHT: "soft-light", DODGE: "color-dodge", BURN: "color-burn", THRESHOLD: "threshold", GRAY: "gray", OPAQUE: "opaque", INVERT: "invert", POSTERIZE: "posterize", DILATE: "dilate", ERODE: "erode", BLUR: "blur", NORMAL: "normal", ITALIC: "italic", BOLD: "bold", _DEFAULT_TEXT_FILL: "#000000", _DEFAULT_LEADMULT: 1.25, _CTX_MIDDLE: "middle", LINEAR: "linear", QUADRATIC: "quadratic", BEZIER: "bezier", CURVE: "curve", STROKE: "stroke", FILL: "fill", TEXTURE: "texture", IMMEDIATE: "immediate", NEAREST: "nearest", REPEAT: "repeat", CLAMP: "clamp", MIRROR: "mirror", LANDSCAPE: "landscape", PORTRAIT: "portrait", _DEFAULT_STROKE: "#000000", _DEFAULT_FILL: "#FFFFFF", GRID: "grid", AXES: "axes" };
    }, {}], 19: [function (a, b, c) {
      "use strict";
      function d() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth || 0;
      }function e() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight || 0;
      }function f(a) {
        if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) throw new Error("Fullscreen not enabled in this browser.");a.requestFullscreen ? a.requestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen ? a.webkitRequestFullscreen() : a.msRequestFullscreen && a.msRequestFullscreen();
      }function g() {
        document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
      }var h = a("./main"),
          i = a("./constants"),
          j = [i.ARROW, i.CROSS, i.HAND, i.MOVE, i.TEXT, i.WAIT];h.prototype._frameRate = 0, h.prototype._lastFrameTime = window.performance.now(), h.prototype._targetFrameRate = 60;var k = window.print;h.prototype.print = function () {
        arguments.length ? console.log.apply(console, arguments) : k();
      }, h.prototype.frameCount = 0, h.prototype.focused = document.hasFocus(), h.prototype.cursor = function (a, b, c) {
        var d = "auto",
            e = this._curElement.elt;if (j.indexOf(a) > -1) d = a;else if ("string" == typeof a) {
          var f = "";b && c && "number" == typeof b && "number" == typeof c && (f = b + " " + c), d = "http://" === a.substring(0, 7) || "https://" === a.substring(0, 8) ? "url(" + a + ") " + f + ", auto" : /\.(cur|jpg|jpeg|gif|png|CUR|JPG|JPEG|GIF|PNG)$/.test(a) ? "url(" + a + ") " + f + ", auto" : a;
        }e.style.cursor = d;
      }, h.prototype.frameRate = function (a) {
        return h._validateParameters("frameRate", arguments), "number" != typeof a || a < 0 ? this._frameRate : (this._setProperty("_targetFrameRate", a), this._runFrames(), this);
      }, h.prototype.getFrameRate = function () {
        return this.frameRate();
      }, h.prototype.setFrameRate = function (a) {
        return this.frameRate(a);
      }, h.prototype.noCursor = function () {
        this._curElement.elt.style.cursor = "none";
      }, h.prototype.displayWidth = screen.width, h.prototype.displayHeight = screen.height, h.prototype.windowWidth = d(), h.prototype.windowHeight = e(), h.prototype._onresize = function (a) {
        this._setProperty("windowWidth", d()), this._setProperty("windowHeight", e());var b,
            c = this._isGlobal ? window : this;"function" == typeof c.windowResized && (void 0 === (b = c.windowResized(a)) || b || a.preventDefault());
      }, h.prototype.width = 0, h.prototype.height = 0, h.prototype.fullscreen = function (a) {
        if (h._validateParameters("fullscreen", arguments), void 0 === a) return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;a ? f(document.documentElement) : g();
      }, h.prototype.pixelDensity = function (a) {
        h._validateParameters("pixelDensity", arguments);var b;return "number" == typeof a ? (a !== this._pixelDensity && (this._pixelDensity = a, this._pixelsDirty = !0), b = this, this.resizeCanvas(this.width, this.height, !0)) : b = this._pixelDensity, b;
      }, h.prototype.displayDensity = function () {
        return window.devicePixelRatio;
      }, h.prototype.getURL = function () {
        return location.href;
      }, h.prototype.getURLPath = function () {
        return location.pathname.split("/").filter(function (a) {
          return "" !== a;
        });
      }, h.prototype.getURLParams = function () {
        for (var a, b = /[?&]([^&=]+)(?:[&=])([^&=]+)/gim, c = {}; null != (a = b.exec(location.search));) {
          a.index === b.lastIndex && b.lastIndex++, c[a[1]] = a[2];
        }return c;
      }, b.exports = h;
    }, { "./constants": 18, "./main": 24 }], 20: [function (a, b, c) {
      "use strict";
      var d = a("./main");a("./constants");d._validateParameters = d._friendlyFileLoadError = function () {};var e = null,
          f = "https://github.com/processing/p5.js/wiki/p5.js-overview#why-cant-i-assign-variables-using-p5-functions-and-variables-before-setup",
          g = function g() {
        var b = {},
            c = function c(a) {
          return Object.getOwnPropertyNames(a).filter(function (a) {
            return "_" !== a[0] && !(a in b) && (b[a] = !0, !0);
          }).map(function (b) {
            var c;return c = "function" == typeof a[b] ? "function" : b === b.toUpperCase() ? "constant" : "variable", { name: b, type: c };
          });
        };e = [].concat(c(d.prototype), c(a("./constants"))), e.sort(function (a, b) {
          return b.name.length - a.name.length;
        });
      },
          h = function h(a, b) {
        b || (b = console.log.bind(console)), e || g(), e.some(function (c) {
          if (a.message && null !== a.message.match("\\W?" + c.name + "\\W")) return b("Did you just try to use p5.js's " + c.name + ("function" === c.type ? "() " : " ") + c.type + "? If so, you may want to move it into your sketch's setup() function.\n\nFor more details, see: " + f), !0;
        });
      };d.prototype._helpForMisusedAtTopLevelCode = h, "complete" !== document.readyState && (window.addEventListener("error", h, !1), window.addEventListener("load", function () {
        window.removeEventListener("error", h, !1);
      })), b.exports = d;
    }, { "../../docs/reference/data.json": void 0, "./constants": 18, "./main": 24 }], 21: [function (a, b, c) {
      "use strict";
      var d = a("./constants");b.exports = { modeAdjust: function modeAdjust(a, b, c, e, f) {
          return f === d.CORNER ? { x: a, y: b, w: c, h: e } : f === d.CORNERS ? { x: a, y: b, w: c - a, h: e - b } : f === d.RADIUS ? { x: a - c, y: b - e, w: 2 * c, h: 2 * e } : f === d.CENTER ? { x: a - .5 * c, y: b - .5 * e, w: c, h: e } : void 0;
        } };
    }, { "./constants": 18 }], 22: [function (a, b, c) {
      "use strict";
      var d = a("../core/main"),
          e = function e() {
        window.mocha || (window.setup && "function" == typeof window.setup || window.draw && "function" == typeof window.draw) && !d.instance && new d();
      };"complete" === document.readyState ? e() : window.addEventListener("load", e, !1);
    }, { "../core/main": 24 }], 23: [function (a, b, c) {
      "use strict";
      var d = a("./main");d.prototype.exit = function () {
        throw new Error("exit() not implemented, see remove()");
      }, d.prototype.pushStyle = function () {
        throw new Error("pushStyle() not used, see push()");
      }, d.prototype.popStyle = function () {
        throw new Error("popStyle() not used, see pop()");
      }, d.prototype.size = function () {
        var a = "size() is not a valid p5 function, to set the size of the ";throw a += "drawing canvas, please use createCanvas() instead", new Error(a);
      }, b.exports = d;
    }, { "./main": 24 }], 24: [function (a, b, c) {
      "use strict";
      a("./shim");var d = a("./constants"),
          e = function e(a, b, c) {
        "boolean" == typeof b && void 0 === c && (c = b, b = void 0), this._setupDone = !1, this._pixelDensity = Math.ceil(window.devicePixelRatio) || 1, this._userNode = b, this._curElement = null, this._elements = [], this._requestAnimId = 0, this._preloadCount = 0, this._isGlobal = !1, this._loop = !0, this._initializeInstanceVariables(), this._defaultCanvasSize = { width: 100, height: 100 }, this._events = { mousemove: null, mousedown: null, mouseup: null, dragend: null, dragover: null, click: null, dblclick: null, mouseover: null, mouseout: null, keydown: null, keyup: null, keypress: null, touchstart: null, touchmove: null, touchend: null, resize: null, blur: null }, this._events.wheel = null, this._loadingScreenId = "p5_loading", this._registeredMethods = {};for (var d = Object.getOwnPropertyNames(e.prototype._registeredMethods), f = 0; f < d.length; f++) {
          var g = d[f];this._registeredMethods[g] = e.prototype._registeredMethods[g].slice();
        }window.DeviceOrientationEvent && (this._events.deviceorientation = null), window.DeviceMotionEvent && !window._isNodeWebkit && (this._events.devicemotion = null), this._start = function () {
          this._userNode && "string" == typeof this._userNode && (this._userNode = document.getElementById(this._userNode));var a = this._isGlobal ? window : this,
              b = a.preload;if (b) {
            var c = document.getElementById(this._loadingScreenId);if (!c) {
              c = document.createElement("div"), c.innerHTML = "Loading...", c.style.position = "absolute", c.id = this._loadingScreenId;(this._userNode || document.body).appendChild(c);
            }var d = this._preloadMethods;for (var f in d) {
              d[f] = d[f] || e;var g = d[f];g !== e.prototype && g !== e || (this._isGlobal && (window[f] = this._wrapPreload(this, f)), g = this), this._registeredPreloadMethods[f] = g[f], g[f] = this._wrapPreload(g, f);
            }b(), this._runIfPreloadsAreDone();
          } else this._setup(), this._runFrames(), this._draw();
        }.bind(this), this._runIfPreloadsAreDone = function () {
          var a = this._isGlobal ? window : this;if (0 === a._preloadCount) {
            var b = document.getElementById(a._loadingScreenId);b && b.parentNode.removeChild(b), a._setup(), a._runFrames(), a._draw();
          }
        }, this._decrementPreload = function () {
          var a = this._isGlobal ? window : this;"function" == typeof a.preload && (a._setProperty("_preloadCount", a._preloadCount - 1), a._runIfPreloadsAreDone());
        }, this._wrapPreload = function (a, b) {
          return function () {
            return this._incrementPreload(), this._registeredPreloadMethods[b].apply(a, arguments);
          }.bind(this);
        }, this._incrementPreload = function () {
          var a = this._isGlobal ? window : this;a._setProperty("_preloadCount", a._preloadCount + 1);
        }, this._setup = function () {
          this.createCanvas(this._defaultCanvasSize.width, this._defaultCanvasSize.height, "p2d");var a = this._isGlobal ? window : this;if ("function" == typeof a.preload) for (var b in this._preloadMethods) {
            a[b] = this._preloadMethods[b][b], a[b] && this && (a[b] = a[b].bind(this));
          }"function" == typeof a.setup && a.setup();for (var c = document.getElementsByTagName("canvas"), d = 0; d < c.length; d++) {
            var e = c[d];"true" === e.dataset.hidden && (e.style.visibility = "", delete e.dataset.hidden);
          }this._setupDone = !0;
        }.bind(this), this._draw = function () {
          var a = window.performance.now(),
              b = a - this._lastFrameTime,
              c = 1e3 / this._targetFrameRate;(!this._loop || b >= c - 5) && (this.redraw(), this._frameRate = 1e3 / (a - this._lastFrameTime), this._lastFrameTime = a, void 0 !== this._updateMouseCoords && this._updateMouseCoords()), this._loop && (this._requestAnimId = window.requestAnimationFrame(this._draw));
        }.bind(this), this._runFrames = function () {
          this._updateInterval && clearInterval(this._updateInterval);
        }.bind(this), this._setProperty = function (a, b) {
          this[a] = b, this._isGlobal && (window[a] = b);
        }.bind(this), this.remove = function () {
          var a = document.getElementById(this._loadingScreenId);if (a && (a.parentNode.removeChild(a), this._incrementPreload()), this._curElement) {
            this._loop = !1, this._requestAnimId && window.cancelAnimationFrame(this._requestAnimId);for (var b in this._events) {
              window.removeEventListener(b, this._events[b]);
            }for (var c = 0; c < this._elements.length; c++) {
              var d = this._elements[c];d.elt.parentNode && d.elt.parentNode.removeChild(d.elt);for (var f in d._events) {
                d.elt.removeEventListener(f, d._events[f]);
              }
            }var g = this;this._registeredMethods.remove.forEach(function (a) {
              void 0 !== a && a.call(g);
            });
          }if (this._isGlobal) {
            for (var h in e.prototype) {
              try {
                delete window[h];
              } catch (a) {
                window[h] = void 0;
              }
            }for (var i in this) {
              if (this.hasOwnProperty(i)) try {
                delete window[i];
              } catch (a) {
                window[i] = void 0;
              }
            }e.instance = null;
          }
        }.bind(this), this._registeredMethods.init.forEach(function (a) {
          void 0 !== a && a.call(this);
        }, this);var h = this._createFriendlyGlobalFunctionBinder();if (a) a(this);else {
          this._isGlobal = !0, e.instance = this;for (var i in e.prototype) {
            if ("function" == typeof e.prototype[i]) {
              var j = i.substring(2);this._events.hasOwnProperty(j) || (Math.hasOwnProperty(i) && Math[i] === e.prototype[i] ? h(i, e.prototype[i]) : h(i, e.prototype[i].bind(this)));
            } else h(i, e.prototype[i]);
          }for (var k in this) {
            this.hasOwnProperty(k) && h(k, this[k]);
          }
        }for (var l in this._events) {
          var m = this["_on" + l];if (m) {
            var n = m.bind(this);window.addEventListener(l, n, { passive: !1 }), this._events[l] = n;
          }
        }var o = function () {
          this._setProperty("focused", !0);
        }.bind(this),
            p = function () {
          this._setProperty("focused", !1);
        }.bind(this);window.addEventListener("focus", o), window.addEventListener("blur", p), this.registerMethod("remove", function () {
          window.removeEventListener("focus", o), window.removeEventListener("blur", p);
        }), c ? this._start() : "complete" === document.readyState ? this._start() : window.addEventListener("load", this._start.bind(this), !1);
      };e.prototype._initializeInstanceVariables = function () {
        this._styles = [], this._bezierDetail = 20, this._curveDetail = 20, this._colorMode = d.RGB, this._colorMaxes = { rgb: [255, 255, 255, 255], hsb: [360, 100, 100, 1], hsl: [360, 100, 100, 1] }, this._pixelsDirty = !0;
      }, e.instance = null, e.disableFriendlyErrors = !1;for (var f in d) {
        e.prototype[f] = d[f];
      }e.prototype._preloadMethods = { loadJSON: e.prototype, loadImage: e.prototype, loadStrings: e.prototype, loadXML: e.prototype, loadBytes: e.prototype, loadTable: e.prototype, loadFont: e.prototype, loadModel: e.prototype, loadShader: e.prototype }, e.prototype._registeredMethods = { init: [], pre: [], post: [], remove: [] }, e.prototype._registeredPreloadMethods = {}, e.prototype.registerPreloadMethod = function (a, b) {
        e.prototype._preloadMethods.hasOwnProperty(a) || (e.prototype._preloadMethods[a] = b);
      }, e.prototype.registerMethod = function (a, b) {
        var c = this || e.prototype;c._registeredMethods.hasOwnProperty(a) || (c._registeredMethods[a] = []), c._registeredMethods[a].push(b);
      }, e.prototype._createFriendlyGlobalFunctionBinder = function (a) {
        a = a || {};var b = a.globalObject || window,
            c = a.log || console.log.bind(console),
            d = { print: !0 };return function (a, f) {
          if (e.disableFriendlyErrors, 1) b[a] = f;else try {
            if (a in b && !(a in d)) throw new Error('global "' + a + '" already exists');Object.defineProperty(b, a, { configurable: !0, enumerable: !0, get: function get() {
                return f;
              }, set: function set(d) {
                Object.defineProperty(b, a, { configurable: !0, enumerable: !0, value: d, writable: !0 }), c('You just changed the value of "' + a + "\", which was a p5 function. This could cause problems later if you're not careful.");
              } });
          } catch (d) {
            c('p5 had problems creating the global function "' + a + '", possibly because your code is already using that name as a variable. You may want to rename your variable to something else.'), b[a] = f;
          }
        };
      }, b.exports = e;
    }, { "./constants": 18, "./shim": 34 }], 25: [function (a, b, c) {
      "use strict";
      function d(a, b, c) {
        return !1 === b ? f(a, c) : e(a, b, c), this;
      }function e(a, b, c) {
        c._events[a] && f(a, c);var d = b.bind(c);c.elt.addEventListener(a, d, !1), c._events[a] = d;
      }function f(a, b) {
        var c = b._events[a];b.elt.removeEventListener(a, c, !1), b._events[a] = null;
      }var g = a("./main");g.Element = function (a, b) {
        this.elt = a, this._pInst = b, this._events = {}, this.width = this.elt.offsetWidth, this.height = this.elt.offsetHeight;
      }, g.Element.prototype.parent = function (a) {
        return void 0 === a ? this.elt.parentNode : ("string" == typeof a ? ("#" === a[0] && (a = a.substring(1)), a = document.getElementById(a)) : a instanceof g.Element && (a = a.elt), a.appendChild(this.elt), this);
      }, g.Element.prototype.id = function (a) {
        return void 0 === a ? this.elt.id : (this.elt.id = a, this.width = this.elt.offsetWidth, this.height = this.elt.offsetHeight, this);
      }, g.Element.prototype.class = function (a) {
        return void 0 === a ? this.elt.className : (this.elt.className = a, this);
      }, g.Element.prototype.mousePressed = function (a) {
        return d("mousedown", function (b) {
          return this._pInst._setProperty("mouseIsPressed", !0), this._pInst._setMouseButton(b), a();
        }, this), this;
      }, g.Element.prototype.doubleClicked = function (a) {
        return d("dblclick", a, this), this;
      }, g.Element.prototype.mouseWheel = function (a) {
        return d("wheel", a, this), this;
      }, g.Element.prototype.mouseReleased = function (a) {
        return d("mouseup", a, this), this;
      }, g.Element.prototype.mouseClicked = function (a) {
        return d("click", a, this), this;
      }, g.Element.prototype.mouseMoved = function (a) {
        return d("mousemove", a, this), this;
      }, g.Element.prototype.mouseOver = function (a) {
        return d("mouseover", a, this), this;
      }, g.Element.prototype.changed = function (a) {
        return d("change", a, this), this;
      }, g.Element.prototype.input = function (a) {
        return d("input", a, this), this;
      }, g.Element.prototype.mouseOut = function (a) {
        return d("mouseout", a, this), this;
      }, g.Element.prototype.touchStarted = function (a) {
        return d("touchstart", a, this), this;
      }, g.Element.prototype.touchMoved = function (a) {
        return d("touchmove", a, this), this;
      }, g.Element.prototype.touchEnded = function (a) {
        return d("touchend", a, this), this;
      }, g.Element.prototype.dragOver = function (a) {
        return d("dragover", a, this), this;
      }, g.Element.prototype.dragLeave = function (a) {
        return d("dragleave", a, this), this;
      }, g.Element.prototype.drop = function (a, b) {
        function c(b) {
          var c = new g.File(b);return function (b) {
            c.data = b.target.result, a(c);
          };
        }return window.File && window.FileReader && window.FileList && window.Blob ? (e("dragover", function (a) {
          a.stopPropagation(), a.preventDefault();
        }, this), e("dragleave", function (a) {
          a.stopPropagation(), a.preventDefault();
        }, this), void 0 !== b && e("drop", b, this), e("drop", function (a) {
          a.stopPropagation(), a.preventDefault();for (var b = a.dataTransfer.files, d = 0; d < b.length; d++) {
            var e = b[d],
                f = new FileReader();f.onload = c(e), e.type.indexOf("text") > -1 ? f.readAsText(e) : f.readAsDataURL(e);
          }
        }, this)) : console.log("The File APIs are not fully supported in this browser."), this;
      }, g.Element.prototype._setProperty = function (a, b) {
        this[a] = b;
      }, b.exports = g.Element;
    }, { "./main": 24 }], 26: [function (a, b, c) {
      "use strict";
      var d = a("./main"),
          e = a("./constants");d.Graphics = function (a, b, c, f) {
        var g = c || e.P2D;this.canvas = document.createElement("canvas"), (f._userNode || document.body).appendChild(this.canvas), d.Element.call(this, this.canvas, f, !1);for (var h in d.prototype) {
          this[h] || ("function" == typeof d.prototype[h] ? this[h] = d.prototype[h].bind(this) : this[h] = d.prototype[h]);
        }return d.prototype._initializeInstanceVariables.apply(this), this.width = a, this.height = b, this._pixelDensity = f._pixelDensity, g === e.WEBGL ? this._renderer = new d.RendererGL(this.canvas, this, !1) : this._renderer = new d.Renderer2D(this.canvas, this, !1), f._elements.push(this), this._renderer.resize(a, b), this._renderer._applyDefaults(), this;
      }, d.Graphics.prototype = Object.create(d.Element.prototype), d.Graphics.prototype.remove = function () {
        this.elt.parentNode && this.elt.parentNode.removeChild(this.elt);var a = this._pInst._elements.indexOf(this);-1 !== a && this._pInst._elements.splice(a, 1);for (var b in this._events) {
          this.elt.removeEventListener(b, this._events[b]);
        }
      }, b.exports = d.Graphics;
    }, { "./constants": 18, "./main": 24 }], 27: [function (a, b, c) {
      "use strict";
      function d(a) {
        var b = 0,
            c = 0;if (a.offsetParent) do {
          b += a.offsetLeft, c += a.offsetTop;
        } while (a = a.offsetParent);else b += a.offsetLeft, c += a.offsetTop;return [b, c];
      }var e = a("./main"),
          f = a("../core/constants");e.Renderer = function (a, b, c) {
        e.Element.call(this, a, b), this.canvas = a, c ? (this._isMainCanvas = !0, this._pInst._setProperty("_curElement", this), this._pInst._setProperty("canvas", this.canvas), this._pInst._setProperty("width", this.width), this._pInst._setProperty("height", this.height)) : (this.canvas.style.display = "none", this._styles = []), this._textSize = 12, this._textLeading = 15, this._textFont = "sans-serif", this._textStyle = f.NORMAL, this._textAscent = null, this._textDescent = null, this._textAlign = f.LEFT, this._textBaseline = f.BASELINE, this._rectMode = f.CORNER, this._ellipseMode = f.CENTER, this._curveTightness = 0, this._imageMode = f.CORNER, this._tint = null, this._doStroke = !0, this._doFill = !0, this._strokeSet = !1, this._fillSet = !1;
      }, e.Renderer.prototype = Object.create(e.Element.prototype), e.Renderer.prototype.push = function () {
        return { properties: { _doStroke: this._doStroke, _strokeSet: this._strokeSet, _doFill: this._doFill, _fillSet: this._fillSet, _tint: this._tint, _imageMode: this._imageMode, _rectMode: this._rectMode, _ellipseMode: this._ellipseMode, _textFont: this._textFont, _textLeading: this._textLeading, _textSize: this._textSize, _textAlign: this._textAlign, _textBaseline: this._textBaseline, _textStyle: this._textStyle } };
      }, e.Renderer.prototype.pop = function (a) {
        a.properties && Object.assign(this, a.properties);
      }, e.Renderer.prototype.resize = function (a, b) {
        this.width = a, this.height = b, this.elt.width = a * this._pInst._pixelDensity, this.elt.height = b * this._pInst._pixelDensity, this.elt.style.width = a + "px", this.elt.style.height = b + "px", this._isMainCanvas && (this._pInst._setProperty("width", this.width), this._pInst._setProperty("height", this.height));
      }, e.Renderer.prototype.textLeading = function (a) {
        return "number" == typeof a ? (this._setProperty("_textLeading", a), this._pInst) : this._textLeading;
      }, e.Renderer.prototype.textSize = function (a) {
        return "number" == typeof a ? (this._setProperty("_textSize", a), this._setProperty("_textLeading", a * f._DEFAULT_LEADMULT), this._applyTextProperties()) : this._textSize;
      }, e.Renderer.prototype.textStyle = function (a) {
        return a ? (a !== f.NORMAL && a !== f.ITALIC && a !== f.BOLD || this._setProperty("_textStyle", a), this._applyTextProperties()) : this._textStyle;
      }, e.Renderer.prototype.textAscent = function () {
        return null === this._textAscent && this._updateTextMetrics(), this._textAscent;
      }, e.Renderer.prototype.textDescent = function () {
        return null === this._textDescent && this._updateTextMetrics(), this._textDescent;
      }, e.Renderer.prototype.textAlign = function (a, b) {
        return void 0 !== a ? (this._setProperty("_textAlign", a), void 0 !== b && this._setProperty("_textBaseline", b), this._applyTextProperties()) : { horizontal: this._textAlign, vertical: this._textBaseline };
      }, e.Renderer.prototype.text = function (a, b, c, d, e) {
        var g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p = this._pInst,
            q = Number.MAX_VALUE;if ((this._doFill || this._doStroke) && void 0 !== a) {
          if ("string" != typeof a && (a = a.toString()), a = a.replace(/(\t)/g, "  "), g = a.split("\n"), void 0 !== d) {
            for (o = 0, i = 0; i < g.length; i++) {
              for (k = "", n = g[i].split(" "), h = 0; h < n.length; h++) {
                l = k + n[h] + " ", m = this.textWidth(l), m > d ? (k = n[h] + " ", o += p.textLeading()) : k = l;
              }
            }switch (this._rectMode === f.CENTER && (b -= d / 2, c -= e / 2), this._textAlign) {case f.CENTER:
                b += d / 2;break;case f.RIGHT:
                b += d;}var r = !1;if (void 0 !== e) {
              switch (this._textBaseline) {case f.BOTTOM:
                  c += e - o;break;case f.CENTER:
                  c += (e - o) / 2;break;case f.BASELINE:
                  r = !0, this._textBaseline = f.TOP;}q = c + e - p.textAscent();
            }for (i = 0; i < g.length; i++) {
              for (k = "", n = g[i].split(" "), h = 0; h < n.length; h++) {
                l = k + n[h] + " ", m = this.textWidth(l), m > d && k.length > 0 ? (this._renderText(p, k, b, c, q), k = n[h] + " ", c += p.textLeading()) : k = l;
              }this._renderText(p, k, b, c, q), c += p.textLeading(), r && (this._textBaseline = f.BASELINE);
            }
          } else {
            var s = 0,
                t = p.textAlign().vertical;for (t === f.CENTER ? s = (g.length - 1) * p.textLeading() / 2 : t === f.BOTTOM && (s = (g.length - 1) * p.textLeading()), j = 0; j < g.length; j++) {
              this._renderText(p, g[j], b, c - s, q), c += p.textLeading();
            }
          }return p;
        }
      }, e.Renderer.prototype._applyDefaults = function () {
        return this;
      }, e.Renderer.prototype._isOpenType = function (a) {
        return "object" == _typeof(a = a || this._textFont) && a.font && a.font.supported;
      }, e.Renderer.prototype._updateTextMetrics = function () {
        if (this._isOpenType()) return this._setProperty("_textAscent", this._textFont._textAscent()), this._setProperty("_textDescent", this._textFont._textDescent()), this;var a = document.createElement("span");a.style.fontFamily = this._textFont, a.style.fontSize = this._textSize + "px", a.innerHTML = "ABCjgq|";var b = document.createElement("div");b.style.display = "inline-block", b.style.width = "1px", b.style.height = "0px";var c = document.createElement("div");c.appendChild(a), c.appendChild(b), c.style.height = "0px", c.style.overflow = "hidden", document.body.appendChild(c), b.style.verticalAlign = "baseline";var e = d(b),
            f = d(a),
            g = e[1] - f[1];b.style.verticalAlign = "bottom", e = d(b), f = d(a);var h = e[1] - f[1],
            i = h - g;return document.body.removeChild(c), this._setProperty("_textAscent", g), this._setProperty("_textDescent", i), this;
      }, b.exports = e.Renderer;
    }, { "../core/constants": 18, "./main": 24 }], 28: [function (a, b, c) {
      "use strict";
      var d = a("./main"),
          e = a("./constants"),
          f = a("../image/filters");a("./p5.Renderer");var g = "rgba(0,0,0,0)";d.Renderer2D = function (a, b, c) {
        return d.Renderer.call(this, a, b, c), this.drawingContext = this.canvas.getContext("2d"), this._pInst._setProperty("drawingContext", this.drawingContext), this;
      }, d.Renderer2D.prototype = Object.create(d.Renderer.prototype), d.Renderer2D.prototype._applyDefaults = function () {
        this._cachedFillStyle = this._cachedStrokeStyle = void 0, this._setFill(e._DEFAULT_FILL), this._setStroke(e._DEFAULT_STROKE), this.drawingContext.lineCap = e.ROUND, this.drawingContext.font = "normal 12px sans-serif";
      }, d.Renderer2D.prototype.resize = function (a, b) {
        d.Renderer.prototype.resize.call(this, a, b), this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity);
      }, d.Renderer2D.prototype.background = function () {
        if (this.drawingContext.save(), this.resetMatrix(), arguments[0] instanceof d.Image) this._pInst.image(arguments[0], 0, 0, this.width, this.height);else {
          var a = this._getFill(),
              b = this._pInst.color.apply(this._pInst, arguments),
              c = b.toString();this._setFill(c), this.drawingContext.fillRect(0, 0, this.width, this.height), this._setFill(a);
        }this.drawingContext.restore(), this._pInst._pixelsDirty = !0;
      }, d.Renderer2D.prototype.clear = function () {
        this.drawingContext.save(), this.resetMatrix(), this.drawingContext.clearRect(0, 0, this.width, this.height), this.drawingContext.restore(), this._pInst._pixelsDirty = !0;
      }, d.Renderer2D.prototype.fill = function () {
        var a = this._pInst.color.apply(this._pInst, arguments);this._setFill(a.toString());
      }, d.Renderer2D.prototype.stroke = function () {
        var a = this._pInst.color.apply(this._pInst, arguments);this._setStroke(a.toString());
      }, d.Renderer2D.prototype.image = function (a, b, c, e, f, g, h, i, j) {
        var k;try {
          this._tint && (d.MediaElement && a instanceof d.MediaElement && a.loadPixels(), a.canvas && (k = this._getTintedImageCanvas(a))), k || (k = a.canvas || a.elt);var l = 1;a.width && a.width > 0 && (l = k.width / a.width), this.drawingContext.drawImage(k, l * b, l * c, l * e, l * f, g, h, i, j);
        } catch (a) {
          if ("NS_ERROR_NOT_AVAILABLE" !== a.name) throw a;
        }this._pInst._pixelsDirty = !0;
      }, d.Renderer2D.prototype._getTintedImageCanvas = function (a) {
        if (!a.canvas) return a;var b = f._toPixels(a.canvas),
            c = document.createElement("canvas");c.width = a.canvas.width, c.height = a.canvas.height;for (var d = c.getContext("2d"), e = d.createImageData(a.canvas.width, a.canvas.height), g = e.data, h = 0; h < b.length; h += 4) {
          var i = b[h],
              j = b[h + 1],
              k = b[h + 2],
              l = b[h + 3];g[h] = i * this._tint[0] / 255, g[h + 1] = j * this._tint[1] / 255, g[h + 2] = k * this._tint[2] / 255, g[h + 3] = l * this._tint[3] / 255;
        }return d.putImageData(e, 0, 0), c;
      }, d.Renderer2D.prototype.blendMode = function (a) {
        this.drawingContext.globalCompositeOperation = a;
      }, d.Renderer2D.prototype.blend = function () {
        var a = this.drawingContext.globalCompositeOperation,
            b = arguments[arguments.length - 1],
            c = Array.prototype.slice.call(arguments, 0, arguments.length - 1);this.drawingContext.globalCompositeOperation = b, this._pInst ? this._pInst.copy.apply(this._pInst, c) : this.copy.apply(this, c), this.drawingContext.globalCompositeOperation = a;
      }, d.Renderer2D.prototype.copy = function () {
        var a, b, c, e, f, g, h, i, j;if (9 === arguments.length) a = arguments[0], b = arguments[1], c = arguments[2], e = arguments[3], f = arguments[4], g = arguments[5], h = arguments[6], i = arguments[7], j = arguments[8];else {
          if (8 !== arguments.length) throw new Error("Signature not supported");a = this._pInst, b = arguments[0], c = arguments[1], e = arguments[2], f = arguments[3], g = arguments[4], h = arguments[5], i = arguments[6], j = arguments[7];
        }d.Renderer2D._copyHelper(this, a, b, c, e, f, g, h, i, j), this._pInst._pixelsDirty = !0;
      }, d.Renderer2D._copyHelper = function (a, b, c, d, e, f, g, h, i, j) {
        b.loadPixels();var k = b.canvas.width / b.width;a.drawingContext.drawImage(b.canvas, k * c, k * d, k * e, k * f, g, h, i, j);
      }, d.Renderer2D.prototype.get = function (a, b, c, e) {
        if (void 0 === c && void 0 === e && (void 0 === a && void 0 === b ? (a = b = 0, c = this.width, e = this.height) : c = e = 1), a + c < 0 || b + e < 0 || a >= this.width || b >= this.height) return [0, 0, 0, 255];var f = this._pInst || this,
            g = f._pixelDensity;a = Math.floor(a), b = Math.floor(b), c = Math.floor(c), e = Math.floor(e);var h = a * g,
            i = b * g;if (1 !== c || 1 !== e || this instanceof d.RendererGL) {
          var j = Math.min(c, f.width),
              k = Math.min(e, f.height),
              l = j * g,
              m = k * g,
              n = new d.Image(j, k);return n.canvas.getContext("2d").drawImage(this.canvas, h, i, l, m, 0, 0, j, k), n;
        }var o, p;return f._pixelsDirty ? (o = this.drawingContext.getImageData(h, i, 1, 1).data, p = 0) : (o = f.pixels, p = 4 * (h + i * this.width * g)), [o[p + 0], o[p + 1], o[p + 2], o[p + 3]];
      }, d.Renderer2D.prototype.loadPixels = function () {
        var a = this._pInst || this;if (a._pixelsDirty) {
          a._pixelsDirty = !1;var b = a._pixelDensity,
              c = this.width * b,
              d = this.height * b,
              e = this.drawingContext.getImageData(0, 0, c, d);a._setProperty("imageData", e), a._setProperty("pixels", e.data);
        }
      }, d.Renderer2D.prototype.set = function (a, b, c) {
        a = Math.floor(a), b = Math.floor(b);var e = this._pInst || this;if (c instanceof d.Image) this.drawingContext.save(), this.drawingContext.setTransform(1, 0, 0, 1, 0, 0), this.drawingContext.scale(e._pixelDensity, e._pixelDensity), this.drawingContext.drawImage(c.canvas, a, b), this.drawingContext.restore(), e._pixelsDirty = !0;else {
          var f = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 4 * (b * e._pixelDensity * (this.width * e._pixelDensity) + a * e._pixelDensity);if (e.imageData && !e._pixelsDirty || e.loadPixels.call(e), "number" == typeof c) j < e.pixels.length && (f = c, g = c, h = c, i = 255);else if (c instanceof Array) {
            if (c.length < 4) throw new Error("pixel array must be of the form [R, G, B, A]");j < e.pixels.length && (f = c[0], g = c[1], h = c[2], i = c[3]);
          } else c instanceof d.Color && j < e.pixels.length && (f = c.levels[0], g = c.levels[1], h = c.levels[2], i = c.levels[3]);for (var k = 0; k < e._pixelDensity; k++) {
            for (var l = 0; l < e._pixelDensity; l++) {
              j = 4 * ((b * e._pixelDensity + l) * this.width * e._pixelDensity + (a * e._pixelDensity + k)), e.pixels[j] = f, e.pixels[j + 1] = g, e.pixels[j + 2] = h, e.pixels[j + 3] = i;
            }
          }
        }
      }, d.Renderer2D.prototype.updatePixels = function (a, b, c, d) {
        var e = this._pInst || this,
            f = e._pixelDensity;void 0 === a && void 0 === b && void 0 === c && void 0 === d && (a = 0, b = 0, c = this.width, d = this.height), c *= f, d *= f, this.drawingContext.putImageData(e.imageData, a, b, 0, 0, c, d), 0 === a && 0 === b && c === this.width && d === this.height || (e._pixelsDirty = !0);
      }, d.Renderer2D.prototype._acuteArcToBezier = function (a, b) {
        var c = b / 2,
            d = Math.cos(c),
            e = Math.sin(c),
            f = 1 / Math.tan(c),
            g = a + c,
            h = Math.cos(g),
            i = Math.sin(g),
            j = (4 - d) / 3,
            k = e + (d - j) * f;return { ax: Math.cos(a), ay: Math.sin(a), bx: j * h + k * i, by: j * i - k * h, cx: j * h - k * i, cy: j * i + k * h, dx: Math.cos(a + b), dy: Math.sin(a + b) };
      }, d.Renderer2D.prototype.arc = function (a, b, c, d, f, g, h) {
        var i = this.drawingContext,
            j = c / 2,
            k = d / 2,
            l = 1e-5,
            m = 0,
            n = [];for (a += j, b += k; g - f > l;) {
          m = Math.min(g - f, e.HALF_PI), n.push(this._acuteArcToBezier(f, m)), f += m;
        }return this._doFill && (i.beginPath(), n.forEach(function (c, d) {
          0 === d && i.moveTo(a + c.ax * j, b + c.ay * k), i.bezierCurveTo(a + c.bx * j, b + c.by * k, a + c.cx * j, b + c.cy * k, a + c.dx * j, b + c.dy * k);
        }), h !== e.PIE && null != h || i.lineTo(a, b), i.closePath(), i.fill()), this._doStroke && (i.beginPath(), n.forEach(function (c, d) {
          0 === d && i.moveTo(a + c.ax * j, b + c.ay * k), i.bezierCurveTo(a + c.bx * j, b + c.by * k, a + c.cx * j, b + c.cy * k, a + c.dx * j, b + c.dy * k);
        }), h === e.PIE ? (i.lineTo(a, b), i.closePath()) : h === e.CHORD && i.closePath(), i.stroke()), this;
      }, d.Renderer2D.prototype.ellipse = function (a) {
        var b = this.drawingContext,
            c = this._doFill,
            d = this._doStroke,
            e = a[0],
            f = a[1],
            h = a[2],
            i = a[3];if (c && !d) {
          if (this._getFill() === g) return this;
        } else if (!c && d && this._getStroke() === g) return this;var j = .5522847498,
            k = h / 2 * j,
            l = i / 2 * j,
            m = e + h,
            n = f + i,
            o = e + h / 2,
            p = f + i / 2;b.beginPath(), b.moveTo(e, p), b.bezierCurveTo(e, p - l, o - k, f, o, f), b.bezierCurveTo(o + k, f, m, p - l, m, p), b.bezierCurveTo(m, p + l, o + k, n, o, n), b.bezierCurveTo(o - k, n, e, p + l, e, p), b.closePath(), c && b.fill(), d && b.stroke();
      }, d.Renderer2D.prototype.line = function (a, b, c, d) {
        var e = this.drawingContext;return this._doStroke ? this._getStroke() === g ? this : (e.lineWidth % 2 == 1 && e.translate(.5, .5), e.beginPath(), e.moveTo(a, b), e.lineTo(c, d), e.stroke(), e.lineWidth % 2 == 1 && e.translate(-.5, -.5), this) : this;
      }, d.Renderer2D.prototype.point = function (a, b) {
        var c = this.drawingContext;if (!this._doStroke) return this;if (this._getStroke() === g) return this;var d = this._getStroke(),
            f = this._getFill();a = Math.round(a), b = Math.round(b), this._setFill(d), c.lineWidth > 1 ? (c.beginPath(), c.arc(a, b, c.lineWidth / 2, 0, e.TWO_PI, !1), c.fill()) : c.fillRect(a, b, 1, 1), this._setFill(f);
      }, d.Renderer2D.prototype.quad = function (a, b, c, d, e, f, h, i) {
        var j = this.drawingContext,
            k = this._doFill,
            l = this._doStroke;if (k && !l) {
          if (this._getFill() === g) return this;
        } else if (!k && l && this._getStroke() === g) return this;return j.beginPath(), j.moveTo(a, b), j.lineTo(c, d), j.lineTo(e, f), j.lineTo(h, i), j.closePath(), k && j.fill(), l && j.stroke(), this;
      }, d.Renderer2D.prototype.rect = function (a) {
        var b = a[0],
            c = a[1],
            d = a[2],
            e = a[3],
            f = a[4],
            h = a[5],
            i = a[6],
            j = a[7],
            k = this.drawingContext,
            l = this._doFill,
            m = this._doStroke;if (l && !m) {
          if (this._getFill() === g) return this;
        } else if (!l && m && this._getStroke() === g) return this;if (this._doStroke && k.lineWidth % 2 == 1 && k.translate(.5, .5), k.beginPath(), void 0 === f) k.rect(b, c, d, e);else {
          void 0 === h && (h = f), void 0 === i && (i = h), void 0 === j && (j = i);var n = d / 2,
              o = e / 2;d < 2 * f && (f = n), e < 2 * f && (f = o), d < 2 * h && (h = n), e < 2 * h && (h = o), d < 2 * i && (i = n), e < 2 * i && (i = o), d < 2 * j && (j = n), e < 2 * j && (j = o), k.beginPath(), k.moveTo(b + f, c), k.arcTo(b + d, c, b + d, c + e, h), k.arcTo(b + d, c + e, b, c + e, i), k.arcTo(b, c + e, b, c, j), k.arcTo(b, c, b + d, c, f), k.closePath();
        }return this._doFill && k.fill(), this._doStroke && k.stroke(), this._doStroke && k.lineWidth % 2 == 1 && k.translate(-.5, -.5), this;
      }, d.Renderer2D.prototype.triangle = function (a) {
        var b = this.drawingContext,
            c = this._doFill,
            d = this._doStroke,
            e = a[0],
            f = a[1],
            h = a[2],
            i = a[3],
            j = a[4],
            k = a[5];if (c && !d) {
          if (this._getFill() === g) return this;
        } else if (!c && d && this._getStroke() === g) return this;b.beginPath(), b.moveTo(e, f), b.lineTo(h, i), b.lineTo(j, k), b.closePath(), c && b.fill(), d && b.stroke();
      }, d.Renderer2D.prototype.endShape = function (a, b, c, d, f, g, h) {
        if (0 === b.length) return this;if (!this._doStroke && !this._doFill) return this;var i,
            j = a === e.CLOSE;j && !g && b.push(b[0]);var k,
            l,
            m = b.length;if (!c || h !== e.POLYGON && null !== h) {
          if (!d || h !== e.POLYGON && null !== h) {
            if (!f || h !== e.POLYGON && null !== h) {
              if (h === e.POINTS) for (k = 0; k < m; k++) {
                i = b[k], this._doStroke && this._pInst.stroke(i[6]), this._pInst.point(i[0], i[1]);
              } else if (h === e.LINES) for (k = 0; k + 1 < m; k += 2) {
                i = b[k], this._doStroke && this._pInst.stroke(b[k + 1][6]), this._pInst.line(i[0], i[1], b[k + 1][0], b[k + 1][1]);
              } else if (h === e.TRIANGLES) for (k = 0; k + 2 < m; k += 3) {
                i = b[k], this.drawingContext.beginPath(), this.drawingContext.moveTo(i[0], i[1]), this.drawingContext.lineTo(b[k + 1][0], b[k + 1][1]), this.drawingContext.lineTo(b[k + 2][0], b[k + 2][1]), this.drawingContext.closePath(), this._doFill && (this._pInst.fill(b[k + 2][5]), this.drawingContext.fill()), this._doStroke && (this._pInst.stroke(b[k + 2][6]), this.drawingContext.stroke());
              } else if (h === e.TRIANGLE_STRIP) for (k = 0; k + 1 < m; k++) {
                i = b[k], this.drawingContext.beginPath(), this.drawingContext.moveTo(b[k + 1][0], b[k + 1][1]), this.drawingContext.lineTo(i[0], i[1]), this._doStroke && this._pInst.stroke(b[k + 1][6]), this._doFill && this._pInst.fill(b[k + 1][5]), k + 2 < m && (this.drawingContext.lineTo(b[k + 2][0], b[k + 2][1]), this._doStroke && this._pInst.stroke(b[k + 2][6]), this._doFill && this._pInst.fill(b[k + 2][5])), this._doFillStrokeClose();
              } else if (h === e.TRIANGLE_FAN) {
                if (m > 2) {
                  for (this.drawingContext.beginPath(), k = 2; k < m; k++) {
                    i = b[k], this.drawingContext.moveTo(b[0][0], b[0][1]), this.drawingContext.lineTo(b[k - 1][0], b[k - 1][1]), this.drawingContext.lineTo(i[0], i[1]), this.drawingContext.lineTo(b[0][0], b[0][1]), k < m - 1 && (this._doFill && i[5] !== b[k + 1][5] || this._doStroke && i[6] !== b[k + 1][6]) && (this._doFill && (this._pInst.fill(i[5]), this.drawingContext.fill(), this._pInst.fill(b[k + 1][5])), this._doStroke && (this._pInst.stroke(i[6]), this.drawingContext.stroke(), this._pInst.stroke(b[k + 1][6])), this.drawingContext.closePath(), this.drawingContext.beginPath());
                  }this._doFillStrokeClose();
                }
              } else if (h === e.QUADS) for (k = 0; k + 3 < m; k += 4) {
                for (i = b[k], this.drawingContext.beginPath(), this.drawingContext.moveTo(i[0], i[1]), l = 1; l < 4; l++) {
                  this.drawingContext.lineTo(b[k + l][0], b[k + l][1]);
                }this.drawingContext.lineTo(i[0], i[1]), this._doFill && this._pInst.fill(b[k + 3][5]), this._doStroke && this._pInst.stroke(b[k + 3][6]), this._doFillStrokeClose();
              } else if (h === e.QUAD_STRIP) {
                if (m > 3) for (k = 0; k + 1 < m; k += 2) {
                  i = b[k], this.drawingContext.beginPath(), k + 3 < m ? (this.drawingContext.moveTo(b[k + 2][0], b[k + 2][1]), this.drawingContext.lineTo(i[0], i[1]), this.drawingContext.lineTo(b[k + 1][0], b[k + 1][1]), this.drawingContext.lineTo(b[k + 3][0], b[k + 3][1]), this._doFill && this._pInst.fill(b[k + 3][5]), this._doStroke && this._pInst.stroke(b[k + 3][6])) : (this.drawingContext.moveTo(i[0], i[1]), this.drawingContext.lineTo(b[k + 1][0], b[k + 1][1])), this._doFillStrokeClose();
                }
              } else {
                for (this.drawingContext.beginPath(), this.drawingContext.moveTo(b[0][0], b[0][1]), k = 1; k < m; k++) {
                  i = b[k], i.isVert && (i.moveTo ? this.drawingContext.moveTo(i[0], i[1]) : this.drawingContext.lineTo(i[0], i[1]));
                }this._doFillStrokeClose();
              }
            } else {
              for (this.drawingContext.beginPath(), k = 0; k < m; k++) {
                b[k].isVert ? b[k].moveTo ? this.drawingContext.moveTo([0], b[k][1]) : this.drawingContext.lineTo(b[k][0], b[k][1]) : this.drawingContext.quadraticCurveTo(b[k][0], b[k][1], b[k][2], b[k][3]);
              }this._doFillStrokeClose();
            }
          } else {
            for (this.drawingContext.beginPath(), k = 0; k < m; k++) {
              b[k].isVert ? b[k].moveTo ? this.drawingContext.moveTo(b[k][0], b[k][1]) : this.drawingContext.lineTo(b[k][0], b[k][1]) : this.drawingContext.bezierCurveTo(b[k][0], b[k][1], b[k][2], b[k][3], b[k][4], b[k][5]);
            }this._doFillStrokeClose();
          }
        } else if (m > 3) {
          var n = [],
              o = 1 - this._curveTightness;for (this.drawingContext.beginPath(), this.drawingContext.moveTo(b[1][0], b[1][1]), k = 1; k + 2 < m; k++) {
            i = b[k], n[0] = [i[0], i[1]], n[1] = [i[0] + (o * b[k + 1][0] - o * b[k - 1][0]) / 6, i[1] + (o * b[k + 1][1] - o * b[k - 1][1]) / 6], n[2] = [b[k + 1][0] + (o * b[k][0] - o * b[k + 2][0]) / 6, b[k + 1][1] + (o * b[k][1] - o * b[k + 2][1]) / 6], n[3] = [b[k + 1][0], b[k + 1][1]], this.drawingContext.bezierCurveTo(n[1][0], n[1][1], n[2][0], n[2][1], n[3][0], n[3][1]);
          }j && this.drawingContext.lineTo(b[k + 1][0], b[k + 1][1]), this._doFillStrokeClose();
        }return c = !1, d = !1, f = !1, g = !1, j && b.pop(), this._pInst._pixelsDirty = !0, this;
      }, d.Renderer2D.prototype.noSmooth = function () {
        return "imageSmoothingEnabled" in this.drawingContext && (this.drawingContext.imageSmoothingEnabled = !1), this;
      }, d.Renderer2D.prototype.smooth = function () {
        return "imageSmoothingEnabled" in this.drawingContext && (this.drawingContext.imageSmoothingEnabled = !0), this;
      }, d.Renderer2D.prototype.strokeCap = function (a) {
        return a !== e.ROUND && a !== e.SQUARE && a !== e.PROJECT || (this.drawingContext.lineCap = a), this;
      }, d.Renderer2D.prototype.strokeJoin = function (a) {
        return a !== e.ROUND && a !== e.BEVEL && a !== e.MITER || (this.drawingContext.lineJoin = a), this;
      }, d.Renderer2D.prototype.strokeWeight = function (a) {
        return this.drawingContext.lineWidth = void 0 === a || 0 === a ? 1e-4 : a, this;
      }, d.Renderer2D.prototype._getFill = function () {
        return this._cachedFillStyle || (this._cachedFillStyle = this.drawingContext.fillStyle), this._cachedFillStyle;
      }, d.Renderer2D.prototype._setFill = function (a) {
        a !== this._cachedFillStyle && (this.drawingContext.fillStyle = a, this._cachedFillStyle = a);
      }, d.Renderer2D.prototype._getStroke = function () {
        return this._cachedStrokeStyle || (this._cachedStrokeStyle = this.drawingContext.strokeStyle), this._cachedStrokeStyle;
      }, d.Renderer2D.prototype._setStroke = function (a) {
        a !== this._cachedStrokeStyle && (this.drawingContext.strokeStyle = a, this._cachedStrokeStyle = a);
      }, d.Renderer2D.prototype.bezier = function (a, b, c, d, e, f, g, h) {
        return this._pInst.beginShape(), this._pInst.vertex(a, b), this._pInst.bezierVertex(c, d, e, f, g, h), this._pInst.endShape(), this;
      }, d.Renderer2D.prototype.curve = function (a, b, c, d, e, f, g, h) {
        return this._pInst.beginShape(), this._pInst.curveVertex(a, b), this._pInst.curveVertex(c, d), this._pInst.curveVertex(e, f), this._pInst.curveVertex(g, h), this._pInst.endShape(), this;
      }, d.Renderer2D.prototype._doFillStrokeClose = function () {
        this._doFill && this.drawingContext.fill(), this._doStroke && this.drawingContext.stroke(), this.drawingContext.closePath(), this._pInst._pixelsDirty = !0;
      }, d.Renderer2D.prototype.applyMatrix = function (a, b, c, d, e, f) {
        this.drawingContext.transform(a, b, c, d, e, f);
      }, d.Renderer2D.prototype.resetMatrix = function () {
        return this.drawingContext.setTransform(1, 0, 0, 1, 0, 0), this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity), this;
      }, d.Renderer2D.prototype.rotate = function (a) {
        this.drawingContext.rotate(a);
      }, d.Renderer2D.prototype.scale = function (a, b) {
        return this.drawingContext.scale(a, b), this;
      }, d.Renderer2D.prototype.shearX = function (a) {
        return this.drawingContext.transform(1, 0, Math.tan(a), 1, 0, 0), this;
      }, d.Renderer2D.prototype.shearY = function (a) {
        return this.drawingContext.transform(1, Math.tan(a), 0, 1, 0, 0), this;
      }, d.Renderer2D.prototype.translate = function (a, b) {
        return a instanceof d.Vector && (b = a.y, a = a.x), this.drawingContext.translate(a, b), this;
      }, d.Renderer2D.prototype.text = function (a, b, c, f, g) {
        var h;void 0 !== f && void 0 !== g && this.drawingContext.textBaseline === e.BASELINE && (h = !0, this.drawingContext.textBaseline = e.TOP);var i = d.Renderer.prototype.text.apply(this, arguments);return h && (this.drawingContext.textBaseline = e.BASELINE), i;
      }, d.Renderer2D.prototype._renderText = function (a, b, c, d, f) {
        if (!(d >= f)) return a.push(), this._isOpenType() ? this._textFont._renderPath(b, c, d, { renderer: this }) : (this._doStroke && this._strokeSet && this.drawingContext.strokeText(b, c, d), this._doFill && (this._fillSet || this._setFill(e._DEFAULT_TEXT_FILL), this.drawingContext.fillText(b, c, d))), a.pop(), this._pInst._pixelsDirty = !0, a;
      }, d.Renderer2D.prototype.textWidth = function (a) {
        return this._isOpenType() ? this._textFont._textWidth(a, this._textSize) : this.drawingContext.measureText(a).width;
      }, d.Renderer2D.prototype._applyTextProperties = function () {
        var a,
            b = this._pInst;return this._setProperty("_textAscent", null), this._setProperty("_textDescent", null), a = this._textFont, this._isOpenType() && (a = this._textFont.font.familyName, this._setProperty("_textStyle", this._textFont.font.styleName)), this.drawingContext.font = (this._textStyle || "normal") + " " + (this._textSize || 12) + "px " + (a || "sans-serif"), this.drawingContext.textAlign = this._textAlign, this._textBaseline === e.CENTER ? this.drawingContext.textBaseline = e._CTX_MIDDLE : this.drawingContext.textBaseline = this._textBaseline, b;
      }, d.Renderer2D.prototype.push = function () {
        return this.drawingContext.save(), d.Renderer.prototype.push.apply(this);
      }, d.Renderer2D.prototype.pop = function (a) {
        this.drawingContext.restore(), this._cachedFillStyle = this.drawingContext.fillStyle, this._cachedStrokeStyle = this.drawingContext.strokeStyle, d.Renderer.prototype.pop.call(this, a);
      }, b.exports = d.Renderer2D;
    }, { "../image/filters": 42, "./constants": 18, "./main": 24, "./p5.Renderer": 27 }], 29: [function (a, b, c) {
      "use strict";
      var d = a("./main"),
          e = a("./constants");a("./p5.Graphics"), a("./p5.Renderer2D"), a("../webgl/p5.RendererGL");var f = "defaultCanvas0",
          g = "p5Canvas";d.prototype.createCanvas = function (a, b, c) {
        d._validateParameters("createCanvas", arguments);var h,
            i = c || e.P2D;if (i === e.WEBGL) {
          if (h = document.getElementById(f)) {
            h.parentNode.removeChild(h);var j = this._renderer;this._elements = this._elements.filter(function (a) {
              return a !== j;
            });
          }h = document.createElement("canvas"), h.id = f, h.classList.add(g);
        } else if (this._defaultGraphicsCreated) h = this.canvas;else {
          h = document.createElement("canvas");for (var k = 0; document.getElementById("defaultCanvas" + k);) {
            k++;
          }f = "defaultCanvas" + k, h.id = f, h.classList.add(g);
        }return this._setupDone || (h.dataset.hidden = !0, h.style.visibility = "hidden"), this._userNode ? this._userNode.appendChild(h) : document.body.appendChild(h), i === e.WEBGL ? (this._setProperty("_renderer", new d.RendererGL(h, this, !0)), this._elements.push(this._renderer)) : this._defaultGraphicsCreated || (this._setProperty("_renderer", new d.Renderer2D(h, this, !0)), this._defaultGraphicsCreated = !0, this._elements.push(this._renderer)), this._renderer.resize(a, b), this._renderer._applyDefaults(), this._renderer;
      }, d.prototype.resizeCanvas = function (a, b, c) {
        if (d._validateParameters("resizeCanvas", arguments), this._renderer) {
          var e = {};for (var f in this.drawingContext) {
            var g = this.drawingContext[f];"object" != (typeof g === "undefined" ? "undefined" : _typeof(g)) && "function" != typeof g && (e[f] = g);
          }this._renderer.resize(a, b), this.width = a, this.height = b;for (var h in e) {
            try {
              this.drawingContext[h] = e[h];
            } catch (a) {}
          }c || this.redraw();
        }
      }, d.prototype.noCanvas = function () {
        this.canvas && this.canvas.parentNode.removeChild(this.canvas);
      }, d.prototype.createGraphics = function (a, b, c) {
        return d._validateParameters("createGraphics", arguments), new d.Graphics(a, b, c, this);
      }, d.prototype.blendMode = function (a) {
        if (d._validateParameters("blendMode", arguments), a !== e.BLEND && a !== e.DARKEST && a !== e.LIGHTEST && a !== e.DIFFERENCE && a !== e.MULTIPLY && a !== e.EXCLUSION && a !== e.SCREEN && a !== e.REPLACE && a !== e.OVERLAY && a !== e.HARD_LIGHT && a !== e.SOFT_LIGHT && a !== e.DODGE && a !== e.BURN && a !== e.ADD && a !== e.NORMAL) throw new Error("Mode " + a + " not recognized.");this._renderer.blendMode(a);
      }, b.exports = d;
    }, { "../webgl/p5.RendererGL": 74, "./constants": 18, "./main": 24, "./p5.Graphics": 26, "./p5.Renderer2D": 28 }], 30: [function (a, b, c) {
      "use strict";
      var d = a("../main"),
          e = a("../constants"),
          f = a("../helpers");a("../error_helpers"), d.prototype.arc = function (a, b, c, g, h, i, j, k) {
        if (d._validateParameters("arc", arguments), !this._renderer._doStroke && !this._renderer._doFill) return this;for (h = this._toRadians(h), i = this._toRadians(i); h < 0;) {
          h += e.TWO_PI;
        }for (; i < 0;) {
          i += e.TWO_PI;
        }void 0 !== h && void 0 !== i && (i.toFixed(10) === h.toFixed(10) || Math.abs(i - h) === e.TWO_PI ? (h %= e.TWO_PI, i %= e.TWO_PI, h += e.TWO_PI) : Math.abs(i - h) > e.TWO_PI && (h %= e.TWO_PI, i %= e.TWO_PI, i += e.TWO_PI)), h <= e.HALF_PI ? h = Math.atan(c / g * Math.tan(h)) : h > e.HALF_PI && h <= 3 * e.HALF_PI && (h = Math.atan(c / g * Math.tan(h)) + e.PI), i <= e.HALF_PI ? i = Math.atan(c / g * Math.tan(i)) : i > e.HALF_PI && i <= 3 * e.HALF_PI && (i = Math.atan(c / g * Math.tan(i)) + e.PI), h > i && (i += e.TWO_PI), c = Math.abs(c), g = Math.abs(g);var l = f.modeAdjust(a, b, c, g, this._renderer._ellipseMode);return this._renderer.arc(l.x, l.y, l.w, l.h, h, i, j, k), this;
      }, d.prototype.ellipse = function (a, b, c, e, g) {
        if (d._validateParameters("ellipse", arguments), !this._renderer._doStroke && !this._renderer._doFill) return this;c < 0 && (c = Math.abs(c)), void 0 === e ? e = c : e < 0 && (e = Math.abs(e));var h = f.modeAdjust(a, b, c, e, this._renderer._ellipseMode);return this._renderer.ellipse([h.x, h.y, h.w, h.h, g]), this;
      }, d.prototype.line = function () {
        return d._validateParameters("line", arguments), this._renderer._doStroke && this._renderer.line.apply(this._renderer, arguments), this;
      }, d.prototype.point = function () {
        return d._validateParameters("point", arguments), this._renderer._doStroke && this._renderer.point.apply(this._renderer, arguments), this;
      }, d.prototype.quad = function () {
        return d._validateParameters("quad", arguments), (this._renderer._doStroke || this._renderer._doFill) && this._renderer.quad.apply(this._renderer, arguments), this;
      }, d.prototype.rect = function () {
        if (d._validateParameters("rect", arguments), this._renderer._doStroke || this._renderer._doFill) {
          for (var a = f.modeAdjust(arguments[0], arguments[1], arguments[2], arguments[3], this._renderer._rectMode), b = [a.x, a.y, a.w, a.h], c = 4; c < arguments.length; c++) {
            b[c] = arguments[c];
          }this._renderer.rect(b);
        }return this;
      }, d.prototype.triangle = function () {
        return d._validateParameters("triangle", arguments), (this._renderer._doStroke || this._renderer._doFill) && this._renderer.triangle(arguments), this;
      }, b.exports = d;
    }, { "../constants": 18, "../error_helpers": 20, "../helpers": 21, "../main": 24 }], 31: [function (a, b, c) {
      "use strict";
      var d = a("../main"),
          e = a("../constants");d.prototype.ellipseMode = function (a) {
        return d._validateParameters("ellipseMode", arguments), a !== e.CORNER && a !== e.CORNERS && a !== e.RADIUS && a !== e.CENTER || (this._renderer._ellipseMode = a), this;
      }, d.prototype.noSmooth = function () {
        return this._renderer.noSmooth(), this;
      }, d.prototype.rectMode = function (a) {
        return d._validateParameters("rectMode", arguments), a !== e.CORNER && a !== e.CORNERS && a !== e.RADIUS && a !== e.CENTER || (this._renderer._rectMode = a), this;
      }, d.prototype.smooth = function () {
        return this._renderer.smooth(), this;
      }, d.prototype.strokeCap = function (a) {
        return d._validateParameters("strokeCap", arguments), a !== e.ROUND && a !== e.SQUARE && a !== e.PROJECT || this._renderer.strokeCap(a), this;
      }, d.prototype.strokeJoin = function (a) {
        return d._validateParameters("strokeJoin", arguments), a !== e.ROUND && a !== e.BEVEL && a !== e.MITER || this._renderer.strokeJoin(a), this;
      }, d.prototype.strokeWeight = function (a) {
        return d._validateParameters("strokeWeight", arguments), this._renderer.strokeWeight(a), this;
      }, b.exports = d;
    }, { "../constants": 18, "../main": 24 }], 32: [function (a, b, c) {
      "use strict";
      var d = a("../main");a("../error_helpers"), d.prototype.bezier = function () {
        return d._validateParameters("bezier", arguments), this._renderer._doStroke || this._renderer._doFill ? (this._renderer.bezier.apply(this._renderer, arguments), this) : this;
      }, d.prototype.bezierDetail = function (a) {
        return d._validateParameters("bezierDetail", arguments), this._bezierDetail = a, this;
      }, d.prototype.bezierPoint = function (a, b, c, e, f) {
        d._validateParameters("bezierPoint", arguments);var g = 1 - f;return Math.pow(g, 3) * a + 3 * Math.pow(g, 2) * f * b + 3 * g * Math.pow(f, 2) * c + Math.pow(f, 3) * e;
      }, d.prototype.bezierTangent = function (a, b, c, e, f) {
        d._validateParameters("bezierTangent", arguments);var g = 1 - f;return 3 * e * Math.pow(f, 2) - 3 * c * Math.pow(f, 2) + 6 * c * g * f - 6 * b * g * f + 3 * b * Math.pow(g, 2) - 3 * a * Math.pow(g, 2);
      }, d.prototype.curve = function () {
        return d._validateParameters("curve", arguments), this._renderer._doStroke && this._renderer.curve.apply(this._renderer, arguments), this;
      }, d.prototype.curveDetail = function (a) {
        return d._validateParameters("curveDetail", arguments), this._curveDetail = a < 3 ? 3 : a, this;
      }, d.prototype.curveTightness = function (a) {
        return d._validateParameters("curveTightness", arguments), this._renderer._curveTightness = a, this;
      }, d.prototype.curvePoint = function (a, b, c, e, f) {
        d._validateParameters("curvePoint", arguments);var g = f * f * f,
            h = f * f;return a * (-.5 * g + h - .5 * f) + b * (1.5 * g - 2.5 * h + 1) + c * (-1.5 * g + 2 * h + .5 * f) + e * (.5 * g - .5 * h);
      }, d.prototype.curveTangent = function (a, b, c, e, f) {
        d._validateParameters("curveTangent", arguments);var g = f * f;return a * (-3 * g / 2 + 2 * f - .5) + b * (9 * g / 2 - 5 * f) + c * (-9 * g / 2 + 4 * f + .5) + e * (3 * g / 2 - f);
      }, b.exports = d;
    }, { "../error_helpers": 20, "../main": 24 }], 33: [function (a, b, c) {
      "use strict";
      var d = a("../main"),
          e = a("../constants"),
          f = null,
          g = [],
          h = [],
          i = !1,
          j = !1,
          k = !1,
          l = !1,
          m = !0;d.prototype.beginContour = function () {
        return h = [], l = !0, this;
      }, d.prototype.beginShape = function (a) {
        return d._validateParameters("beginShape", arguments), this._renderer.isP3D ? this._renderer.beginShape.apply(this._renderer, arguments) : (f = a === e.POINTS || a === e.LINES || a === e.TRIANGLES || a === e.TRIANGLE_FAN || a === e.TRIANGLE_STRIP || a === e.QUADS || a === e.QUAD_STRIP ? a : null, g = [], h = []), this;
      }, d.prototype.bezierVertex = function () {
        if (d._validateParameters("bezierVertex", arguments), this._renderer.isP3D) this._renderer.bezierVertex.apply(this._renderer, arguments);else {
          if (0 === g.length) throw "vertex() must be used once before calling bezierVertex()";i = !0;for (var a = [], b = 0; b < arguments.length; b++) {
            a[b] = arguments[b];
          }a.isVert = !1, l ? h.push(a) : g.push(a);
        }return this;
      }, d.prototype.curveVertex = function () {
        return d._validateParameters("curveVertex", arguments), this._renderer.isP3D ? this._renderer.curveVertex.apply(this._renderer, arguments) : (j = !0, this.vertex(arguments[0], arguments[1])), this;
      }, d.prototype.endContour = function () {
        var a = h[0].slice();a.isVert = h[0].isVert, a.moveTo = !1, h.push(a), m && (g.push(g[0]), m = !1);for (var b = 0; b < h.length; b++) {
          g.push(h[b]);
        }return this;
      }, d.prototype.endShape = function (a) {
        if (d._validateParameters("endShape", arguments), this._renderer.isP3D) this._renderer.endShape(a, j, i, k, l, f);else {
          if (0 === g.length) return this;if (!this._renderer._doStroke && !this._renderer._doFill) return this;var b = a === e.CLOSE;b && !l && g.push(g[0]), this._renderer.endShape(a, g, j, i, k, l, f), j = !1, i = !1, k = !1, l = !1, m = !0, b && g.pop();
        }return this;
      }, d.prototype.quadraticVertex = function () {
        if (d._validateParameters("quadraticVertex", arguments), this._renderer.isP3D) this._renderer.quadraticVertex.apply(this._renderer, arguments);else {
          if (this._contourInited) {
            var a = {};return a.x = arguments[0], a.y = arguments[1], a.x3 = arguments[2], a.y3 = arguments[3], a.type = e.QUADRATIC, this._contourVertices.push(a), this;
          }if (!(g.length > 0)) throw new Error("vertex() must be used once before calling quadraticVertex()");k = !0;for (var b = [], c = 0; c < arguments.length; c++) {
            b[c] = arguments[c];
          }b.isVert = !1, l ? h.push(b) : g.push(b);
        }return this;
      }, d.prototype.vertex = function (a, b, c, d, e) {
        if (this._renderer.isP3D) this._renderer.vertex.apply(this._renderer, arguments);else {
          var f = [];f.isVert = !0, f[0] = a, f[1] = b, f[2] = 0, f[3] = 0, f[4] = 0, f[5] = this._renderer._getFill(), f[6] = this._renderer._getStroke(), c && (f.moveTo = c), l ? (0 === h.length && (f.moveTo = !0), h.push(f)) : g.push(f);
        }return this;
      }, b.exports = d;
    }, { "../constants": 18, "../main": 24 }], 34: [function (a, b, c) {
      "use strict";
      window.requestAnimationFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a, b) {
          window.setTimeout(a, 1e3 / 60);
        };
      }(), function () {
        "undefined" == typeof Uint8ClampedArray || Uint8ClampedArray.prototype.slice || Object.defineProperty(Uint8ClampedArray.prototype, "slice", { value: Array.prototype.slice, writable: !0, configurable: !0, enumerable: !1 });
      }(), function () {
        if (!Object.assign) {
          var a = Object.keys,
              b = Object.defineProperty,
              c = function c(a) {
            return void 0 !== a && null !== a;
          },
              d = "function" == typeof Symbol && "symbol" == _typeof(Symbol()),
              e = Object.prototype.propertyIsEnumerable,
              f = function f(a) {
            return function (b) {
              return e.call(a, b);
            };
          },
              g = function g(b, e) {
            if (!c(b)) throw new TypeError("target must be an object");var g,
                h,
                i,
                j,
                k = Object(b);for (g = 1; g < arguments.length; ++g) {
              for (h = Object(arguments[g]), j = a(h), d && Object.getOwnPropertySymbols && j.push.apply(j, Object.getOwnPropertySymbols(h).filter(f(h))), i = 0; i < j.length; ++i) {
                k[j[i]] = h[j[i]];
              }
            }return k;
          };b(Object, "assign", { value: g, configurable: !0, enumerable: !1, writable: !0 });
        }
      }();
    }, {}], 35: [function (a, b, c) {
      "use strict";
      var d = a("./main");d.prototype.noLoop = function () {
        this._loop = !1;
      }, d.prototype.loop = function () {
        this._loop = !0, this._draw();
      }, d.prototype.push = function () {
        this._styles.push({ props: { _colorMode: this._colorMode }, renderer: this._renderer.push() });
      }, d.prototype.pop = function () {
        var a = this._styles.pop();a ? (this._renderer.pop(a.renderer), Object.assign(this, a.props)) : console.warn("pop() was called without matching push()");
      }, d.prototype.redraw = function (a) {
        var b = parseInt(a);(isNaN(b) || b < 1) && (b = 1);var c = this._isGlobal ? window : this,
            d = c.setup,
            e = c.draw;if ("function" == typeof e) {
          void 0 === d && c.scale(c._pixelDensity, c._pixelDensity);for (var f = function f(a) {
            a.call(c);
          }, g = 0; g < b; g++) {
            c.resetMatrix(), c._renderer.isP3D && c._renderer._update(), c._setProperty("frameCount", c.frameCount + 1), c._registeredMethods.pre.forEach(f), e(), c._registeredMethods.post.forEach(f);
          }
        }
      }, b.exports = d;
    }, { "./main": 24 }], 36: [function (a, b, c) {
      "use strict";
      var d = a("./main");d.prototype.applyMatrix = function (a, b, c, d, e, f) {
        return this._renderer.applyMatrix(a, b, c, d, e, f), this;
      }, d.prototype.popMatrix = function () {
        throw new Error("popMatrix() not used, see pop()");
      }, d.prototype.printMatrix = function () {
        throw new Error("printMatrix() not implemented");
      }, d.prototype.pushMatrix = function () {
        throw new Error("pushMatrix() not used, see push()");
      }, d.prototype.resetMatrix = function () {
        return this._renderer.resetMatrix(), this;
      }, d.prototype.rotate = function (a, b) {
        return d._validateParameters("rotate", arguments), this._renderer.rotate(this._toRadians(a), b), this;
      }, d.prototype.rotateX = function (a) {
        return this._assert3d("rotateX"), d._validateParameters("rotateX", arguments), this._renderer.rotateX(this._toRadians(a)), this;
      }, d.prototype.rotateY = function (a) {
        return this._assert3d("rotateY"), d._validateParameters("rotateY", arguments), this._renderer.rotateY(this._toRadians(a)), this;
      }, d.prototype.rotateZ = function (a) {
        return this._assert3d("rotateZ"), d._validateParameters("rotateZ", arguments), this._renderer.rotateZ(this._toRadians(a)), this;
      }, d.prototype.scale = function (a, b, c) {
        if (d._validateParameters("scale", arguments), a instanceof d.Vector) {
          var e = a;a = e.x, b = e.y, c = e.z;
        } else if (a instanceof Array) {
          var f = a;a = f[0], b = f[1], c = f[2] || 1;
        }return isNaN(b) ? b = c = a : isNaN(c) && (c = 1), this._renderer.scale.call(this._renderer, a, b, c), this;
      }, d.prototype.shearX = function (a) {
        return d._validateParameters("shearX", arguments), this._renderer.shearX(this._toRadians(a)), this;
      }, d.prototype.shearY = function (a) {
        return d._validateParameters("shearY", arguments), this._renderer.shearY(this._toRadians(a)), this;
      }, d.prototype.translate = function (a, b, c) {
        return d._validateParameters("translate", arguments), this._renderer.isP3D ? this._renderer.translate(a, b, c) : this._renderer.translate(a, b), this;
      }, b.exports = d;
    }, { "./main": 24 }], 37: [function (a, b, c) {
      "use strict";
      var d = a("../core/main");d.prototype.createStringDict = function (a, b) {
        return d._validateParameters("createStringDict", arguments), new d.StringDict(a, b);
      }, d.prototype.createNumberDict = function (a, b) {
        return d._validateParameters("createNumberDict", arguments), new d.NumberDict(a, b);
      }, d.TypedDict = function (a, b) {
        return a instanceof Object ? this.data = a : (this.data = {}, this.data[a] = b), this;
      }, d.TypedDict.prototype.size = function () {
        return Object.keys(this.data).length;
      }, d.TypedDict.prototype.hasKey = function (a) {
        return this.data.hasOwnProperty(a);
      }, d.TypedDict.prototype.get = function (a) {
        if (this.data.hasOwnProperty(a)) return this.data[a];console.log(a + " does not exist in this Dictionary");
      }, d.TypedDict.prototype.set = function (a, b) {
        this._validate(b) ? this.data[a] = b : console.log("Those values dont work for this dictionary type.");
      }, d.TypedDict.prototype._addObj = function (a) {
        for (var b in a) {
          this.set(b, a[b]);
        }
      }, d.TypedDict.prototype.create = function (a, b) {
        a instanceof Object && void 0 === b ? this._addObj(a) : void 0 !== a ? this.set(a, b) : console.log("In order to create a new Dictionary entry you must pass an object or a key, value pair");
      }, d.TypedDict.prototype.clear = function () {
        this.data = {};
      }, d.TypedDict.prototype.remove = function (a) {
        if (!this.data.hasOwnProperty(a)) throw new Error(a + " does not exist in this Dictionary");delete this.data[a];
      }, d.TypedDict.prototype.print = function () {
        for (var a in this.data) {
          console.log("key:" + a + " value:" + this.data[a]);
        }
      }, d.TypedDict.prototype.saveTable = function (a) {
        var b = "";for (var c in this.data) {
          b += c + "," + this.data[c] + "\n";
        }var e = new Blob([b], { type: "text/csv" });d.prototype.downloadFile(e, a || "mycsv", "csv");
      }, d.TypedDict.prototype.saveJSON = function (a, b) {
        d.prototype.saveJSON(this.data, a, b);
      }, d.TypedDict.prototype._validate = function (a) {
        return !0;
      }, d.StringDict = function () {
        d.TypedDict.apply(this, arguments);
      }, d.StringDict.prototype = Object.create(d.TypedDict.prototype), d.StringDict.prototype._validate = function (a) {
        return "string" == typeof a;
      }, d.NumberDict = function () {
        d.TypedDict.apply(this, arguments);
      }, d.NumberDict.prototype = Object.create(d.TypedDict.prototype), d.NumberDict.prototype._validate = function (a) {
        return "number" == typeof a;
      }, d.NumberDict.prototype.add = function (a, b) {
        this.data.hasOwnProperty(a) ? this.data[a] += b : console.log("The key - " + a + " does not exist in this dictionary.");
      }, d.NumberDict.prototype.sub = function (a, b) {
        this.add(a, -b);
      }, d.NumberDict.prototype.mult = function (a, b) {
        this.data.hasOwnProperty(a) ? this.data[a] *= b : console.log("The key - " + a + " does not exist in this dictionary.");
      }, d.NumberDict.prototype.div = function (a, b) {
        this.data.hasOwnProperty(a) ? this.data[a] /= b : console.log("The key - " + a + " does not exist in this dictionary.");
      }, d.NumberDict.prototype._valueTest = function (a) {
        if (0 === Object.keys(this.data).length) throw new Error("Unable to search for a minimum or maximum value on an empty NumberDict");if (1 === Object.keys(this.data).length) return this.data[Object.keys(this.data)[0]];var b = this.data[Object.keys(this.data)[0]];for (var c in this.data) {
          this.data[c] * a < b * a && (b = this.data[c]);
        }return b;
      }, d.NumberDict.prototype.minValue = function () {
        return this._valueTest(1);
      }, d.NumberDict.prototype.maxValue = function () {
        return this._valueTest(-1);
      }, d.NumberDict.prototype._keyTest = function (a) {
        if (0 === Object.keys(this.data).length) throw new Error("Unable to use minValue on an empty NumberDict");if (1 === Object.keys(this.data).length) return Object.keys(this.data)[0];for (var b = Object.keys(this.data)[0], c = 1; c < Object.keys(this.data).length; c++) {
          Object.keys(this.data)[c] * a < b * a && (b = Object.keys(this.data)[c]);
        }return b;
      }, d.NumberDict.prototype.minKey = function () {
        return this._keyTest(1);
      }, d.NumberDict.prototype.maxKey = function () {
        return this._keyTest(-1);
      }, b.exports = d.TypedDict;
    }, { "../core/main": 24 }], 38: [function (a, b, c) {
      "use strict";
      var d = a("../core/main");d.prototype.deviceOrientation = void 0, d.prototype.accelerationX = 0, d.prototype.accelerationY = 0, d.prototype.accelerationZ = 0, d.prototype.pAccelerationX = 0, d.prototype.pAccelerationY = 0, d.prototype.pAccelerationZ = 0, d.prototype._updatePAccelerations = function () {
        this._setProperty("pAccelerationX", this.accelerationX), this._setProperty("pAccelerationY", this.accelerationY), this._setProperty("pAccelerationZ", this.accelerationZ);
      }, d.prototype.rotationX = 0, d.prototype.rotationY = 0, d.prototype.rotationZ = 0, d.prototype.pRotationX = 0, d.prototype.pRotationY = 0, d.prototype.pRotationZ = 0;var e,
          f,
          g,
          h = 0,
          i = 0,
          j = 0,
          k = "clockwise",
          l = "clockwise",
          m = "clockwise";d.prototype._updatePRotations = function () {
        this._setProperty("pRotationX", this.rotationX), this._setProperty("pRotationY", this.rotationY), this._setProperty("pRotationZ", this.rotationZ);
      }, d.prototype.turnAxis = void 0;var n = .5,
          o = 30;d.prototype.setMoveThreshold = function (a) {
        d._validateParameters("setMoveThreshold", arguments), n = a;
      }, d.prototype.setShakeThreshold = function (a) {
        d._validateParameters("setShakeThreshold", arguments), o = a;
      }, d.prototype._ondeviceorientation = function (a) {
        this._updatePRotations(), this._setProperty("rotationX", a.beta), this._setProperty("rotationY", a.gamma), this._setProperty("rotationZ", a.alpha), this._handleMotion();
      }, d.prototype._ondevicemotion = function (a) {
        this._updatePAccelerations(), this._setProperty("accelerationX", 2 * a.acceleration.x), this._setProperty("accelerationY", 2 * a.acceleration.y), this._setProperty("accelerationZ", 2 * a.acceleration.z), this._handleMotion();
      }, d.prototype._handleMotion = function () {
        90 === window.orientation || -90 === window.orientation ? this._setProperty("deviceOrientation", "landscape") : 0 === window.orientation ? this._setProperty("deviceOrientation", "portrait") : void 0 === window.orientation && this._setProperty("deviceOrientation", "undefined");var a = this.deviceMoved || window.deviceMoved;"function" == typeof a && (Math.abs(this.accelerationX - this.pAccelerationX) > n || Math.abs(this.accelerationY - this.pAccelerationY) > n || Math.abs(this.accelerationZ - this.pAccelerationZ) > n) && a();var b = this.deviceTurned || window.deviceTurned;if ("function" == typeof b) {
          var c = this.rotationX + 180,
              d = this.pRotationX + 180,
              p = h + 180;c - d > 0 && c - d < 270 || c - d < -270 ? k = "clockwise" : (c - d < 0 || c - d > 270) && (k = "counter-clockwise"), k !== e && (p = c), Math.abs(c - p) > 90 && Math.abs(c - p) < 270 && (p = c, this._setProperty("turnAxis", "X"), b()), e = k, h = p - 180;var q = this.rotationY + 180,
              r = this.pRotationY + 180,
              s = i + 180;q - r > 0 && q - r < 270 || q - r < -270 ? l = "clockwise" : (q - r < 0 || q - this.pRotationY > 270) && (l = "counter-clockwise"), l !== f && (s = q), Math.abs(q - s) > 90 && Math.abs(q - s) < 270 && (s = q, this._setProperty("turnAxis", "Y"), b()), f = l, i = s - 180, this.rotationZ - this.pRotationZ > 0 && this.rotationZ - this.pRotationZ < 270 || this.rotationZ - this.pRotationZ < -270 ? m = "clockwise" : (this.rotationZ - this.pRotationZ < 0 || this.rotationZ - this.pRotationZ > 270) && (m = "counter-clockwise"), m !== g && (j = this.rotationZ), Math.abs(this.rotationZ - j) > 90 && Math.abs(this.rotationZ - j) < 270 && (j = this.rotationZ, this._setProperty("turnAxis", "Z"), b()), g = m, this._setProperty("turnAxis", void 0);
        }var t = this.deviceShaken || window.deviceShaken;if ("function" == typeof t) {
          var u, v;null !== this.pAccelerationX && (u = Math.abs(this.accelerationX - this.pAccelerationX), v = Math.abs(this.accelerationY - this.pAccelerationY)), u + v > o && t();
        }
      }, b.exports = d;
    }, { "../core/main": 24 }], 39: [function (a, b, c) {
      "use strict";
      function d() {
        for (var a in f) {
          if (f.hasOwnProperty(a) && !0 === f[a]) return !0;
        }return !1;
      }var e = a("../core/main"),
          f = {};e.prototype.isKeyPressed = !1, e.prototype.keyIsPressed = !1, e.prototype.key = "", e.prototype.keyCode = 0, e.prototype._onkeydown = function (a) {
        if (!f[a.which]) {
          this._setProperty("isKeyPressed", !0), this._setProperty("keyIsPressed", !0), this._setProperty("keyCode", a.which), f[a.which] = !0, this._setProperty("key", a.key || String.fromCharCode(a.which) || a.which);var b = this.keyPressed || window.keyPressed;if ("function" == typeof b && !a.charCode) {
            !1 === b(a) && a.preventDefault();
          }
        }
      }, e.prototype._onkeyup = function (a) {
        var b = this.keyReleased || window.keyReleased;if (f[a.which] = !1, d() || (this._setProperty("isKeyPressed", !1), this._setProperty("keyIsPressed", !1)), this._setProperty("_lastKeyCodeTyped", null), this._setProperty("key", a.key || String.fromCharCode(a.which) || a.which), this._setProperty("keyCode", a.which), "function" == typeof b) {
          !1 === b(a) && a.preventDefault();
        }
      }, e.prototype._onkeypress = function (a) {
        if (a.which !== this._lastKeyCodeTyped) {
          this._setProperty("keyCode", a.which), this._setProperty("_lastKeyCodeTyped", a.which), this._setProperty("key", String.fromCharCode(a.which));var b = this.keyTyped || window.keyTyped;if ("function" == typeof b) {
            !1 === b(a) && a.preventDefault();
          }
        }
      }, e.prototype._onblur = function (a) {
        f = {};
      }, e.prototype.keyIsDown = function (a) {
        return e._validateParameters("keyIsDown", arguments), f[a];
      }, b.exports = e;
    }, { "../core/main": 24 }], 40: [function (a, b, c) {
      "use strict";
      function d(a, b, c, d) {
        d && !d.clientX && (d.touches ? d = d.touches[0] : d.changedTouches && (d = d.changedTouches[0]));var e = a.getBoundingClientRect(),
            f = a.scrollWidth / b,
            g = a.scrollHeight / c;return { x: (d.clientX - e.left) / f, y: (d.clientY - e.top) / g, winX: d.clientX, winY: d.clientY, id: d.identifier };
      }var e = a("../core/main"),
          f = a("../core/constants");e.prototype._hasMouseInteracted = !1, e.prototype.mouseX = 0, e.prototype.mouseY = 0, e.prototype.pmouseX = 0, e.prototype.pmouseY = 0, e.prototype.winMouseX = 0, e.prototype.winMouseY = 0, e.prototype.pwinMouseX = 0, e.prototype.pwinMouseY = 0, e.prototype.mouseButton = 0, e.prototype.mouseIsPressed = !1, e.prototype._updateNextMouseCoords = function (a) {
        if (null !== this._curElement && (!a.touches || a.touches.length > 0)) {
          var b = d(this._curElement.elt, this.width, this.height, a);this._setProperty("mouseX", b.x), this._setProperty("mouseY", b.y), this._setProperty("winMouseX", b.winX), this._setProperty("winMouseY", b.winY);
        }this._hasMouseInteracted || (this._updateMouseCoords(), this._setProperty("_hasMouseInteracted", !0));
      }, e.prototype._updateMouseCoords = function () {
        this._setProperty("pmouseX", this.mouseX), this._setProperty("pmouseY", this.mouseY), this._setProperty("pwinMouseX", this.winMouseX), this._setProperty("pwinMouseY", this.winMouseY), this._setProperty("_pmouseWheelDeltaY", this._mouseWheelDeltaY);
      }, e.prototype._setMouseButton = function (a) {
        1 === a.button ? this._setProperty("mouseButton", f.CENTER) : 2 === a.button ? this._setProperty("mouseButton", f.RIGHT) : this._setProperty("mouseButton", f.LEFT);
      }, e.prototype._onmousemove = function (a) {
        var b = this._isGlobal ? window : this;this._updateNextMouseCoords(a), this.mouseIsPressed ? "function" == typeof b.mouseDragged ? !1 === b.mouseDragged(a) && a.preventDefault() : "function" == typeof b.touchMoved && !1 === b.touchMoved(a) && a.preventDefault() : "function" == typeof b.mouseMoved && !1 === b.mouseMoved(a) && a.preventDefault();
      }, e.prototype._onmousedown = function (a) {
        var b = this._isGlobal ? window : this;this._setProperty("mouseIsPressed", !0), this._setMouseButton(a), this._updateNextMouseCoords(a), "function" == typeof b.mousePressed ? !1 === b.mousePressed(a) && a.preventDefault() : "function" == typeof b.touchStarted && !1 === b.touchStarted(a) && a.preventDefault();
      }, e.prototype._onmouseup = function (a) {
        var b = this._isGlobal ? window : this;this._setProperty("mouseIsPressed", !1), "function" == typeof b.mouseReleased ? !1 === b.mouseReleased(a) && a.preventDefault() : "function" == typeof b.touchEnded && !1 === b.touchEnded(a) && a.preventDefault();
      }, e.prototype._ondragend = e.prototype._onmouseup, e.prototype._ondragover = e.prototype._onmousemove, e.prototype._onclick = function (a) {
        var b = this._isGlobal ? window : this;if ("function" == typeof b.mouseClicked) {
          !1 === b.mouseClicked(a) && a.preventDefault();
        }
      }, e.prototype._ondblclick = function (a) {
        var b = this._isGlobal ? window : this;if ("function" == typeof b.doubleClicked) {
          !1 === b.doubleClicked(a) && a.preventDefault();
        }
      }, e.prototype._mouseWheelDeltaY = 0, e.prototype._pmouseWheelDeltaY = 0, e.prototype._onwheel = function (a) {
        var b = this._isGlobal ? window : this;if (this._setProperty("_mouseWheelDeltaY", a.deltaY), "function" == typeof b.mouseWheel) {
          a.delta = a.deltaY;!1 === b.mouseWheel(a) && a.preventDefault();
        }
      }, b.exports = e;
    }, { "../core/constants": 18, "../core/main": 24 }], 41: [function (a, b, c) {
      "use strict";
      function d(a, b, c, d, e) {
        e = e || 0;var f = a.getBoundingClientRect(),
            g = a.scrollWidth / b,
            h = a.scrollHeight / c,
            i = d.touches[e] || d.changedTouches[e];return { x: (i.clientX - f.left) / g, y: (i.clientY - f.top) / h, winX: i.clientX, winY: i.clientY, id: i.identifier };
      }var e = a("../core/main");e.prototype.touches = [], e.prototype._updateTouchCoords = function (a) {
        if (null !== this._curElement) {
          for (var b = [], c = 0; c < a.touches.length; c++) {
            b[c] = d(this._curElement.elt, this.width, this.height, a, c);
          }this._setProperty("touches", b);
        }
      }, e.prototype._ontouchstart = function (a) {
        var b = this._isGlobal ? window : this;this._setProperty("mouseIsPressed", !0), this._updateTouchCoords(a), this._updateNextMouseCoords(a), this._updateMouseCoords(), "function" == typeof b.touchStarted ? !1 === b.touchStarted(a) && a.preventDefault() : "function" == typeof b.mousePressed && !1 === b.mousePressed(a) && a.preventDefault();
      }, e.prototype._ontouchmove = function (a) {
        var b = this._isGlobal ? window : this;this._updateTouchCoords(a), this._updateNextMouseCoords(a), "function" == typeof b.touchMoved ? !1 === b.touchMoved(a) && a.preventDefault() : "function" == typeof b.mouseDragged && !1 === b.mouseDragged(a) && a.preventDefault();
      }, e.prototype._ontouchend = function (a) {
        this._setProperty("mouseIsPressed", !1), this._updateTouchCoords(a), this._updateNextMouseCoords(a);var b = this._isGlobal ? window : this;"function" == typeof b.touchEnded ? !1 === b.touchEnded(a) && a.preventDefault() : "function" == typeof b.mouseReleased && !1 === b.mouseReleased(a) && a.preventDefault();
      }, b.exports = e;
    }, { "../core/main": 24 }], 42: [function (a, b, c) {
      "use strict";
      function d(a) {
        var b = 3.5 * a | 0;if (b = b < 1 ? 1 : b < 248 ? b : 248, g !== b) {
          g = b, h = 1 + g << 1, i = new Int32Array(h), j = new Array(h);for (var c = 0; c < h; c++) {
            j[c] = new Int32Array(256);
          }for (var d, e, f, k, l = 1, m = b - 1; l < b; l++) {
            i[b + l] = i[m] = e = m * m, f = j[b + l], k = j[m--];for (var n = 0; n < 256; n++) {
              f[n] = k[n] = e * n;
            }
          }d = i[b] = b * b, f = j[b];for (var o = 0; o < 256; o++) {
            f[o] = d * o;
          }
        }
      }function e(a, b) {
        for (var c = f._toPixels(a), e = a.width, k = a.height, l = e * k, m = new Int32Array(l), n = 0; n < l; n++) {
          m[n] = f._getARGB(c, n);
        }var o,
            p,
            q,
            r,
            s,
            t,
            u,
            v,
            w,
            x,
            y = new Int32Array(l),
            z = new Int32Array(l),
            A = new Int32Array(l),
            B = new Int32Array(l),
            C = 0;d(b);var D, E, F, G;for (E = 0; E < k; E++) {
          for (D = 0; D < e; D++) {
            if (r = q = p = s = o = 0, (t = D - g) < 0) x = -t, t = 0;else {
              if (t >= e) break;x = 0;
            }for (F = x; F < h && !(t >= e); F++) {
              var H = m[t + C];G = j[F], s += G[(-16777216 & H) >>> 24], p += G[(16711680 & H) >> 16], q += G[(65280 & H) >> 8], r += G[255 & H], o += i[F], t++;
            }u = C + D, y[u] = s / o, z[u] = p / o, A[u] = q / o, B[u] = r / o;
          }C += e;
        }for (C = 0, v = -g, w = v * e, E = 0; E < k; E++) {
          for (D = 0; D < e; D++) {
            if (r = q = p = s = o = 0, v < 0) x = u = -v, t = D;else {
              if (v >= k) break;x = 0, u = v, t = D + w;
            }for (F = x; F < h && !(u >= k); F++) {
              G = j[F], s += G[y[t]], p += G[z[t]], q += G[A[t]], r += G[B[t]], o += i[F], u++, t += e;
            }m[D + C] = s / o << 24 | p / o << 16 | q / o << 8 | r / o;
          }C += e, w += e, v++;
        }f._setPixels(c, m);
      }var f = {};f._toPixels = function (a) {
        return a instanceof ImageData ? a.data : a.getContext("2d").getImageData(0, 0, a.width, a.height).data;
      }, f._getARGB = function (a, b) {
        var c = 4 * b;return a[c + 3] << 24 & 4278190080 | a[c] << 16 & 16711680 | a[c + 1] << 8 & 65280 | 255 & a[c + 2];
      }, f._setPixels = function (a, b) {
        for (var c = 0, d = 0, e = a.length; d < e; d++) {
          c = 4 * d, a[c + 0] = (16711680 & b[d]) >>> 16, a[c + 1] = (65280 & b[d]) >>> 8, a[c + 2] = 255 & b[d], a[c + 3] = (4278190080 & b[d]) >>> 24;
        }
      }, f._toImageData = function (a) {
        return a instanceof ImageData ? a : a.getContext("2d").getImageData(0, 0, a.width, a.height);
      }, f._createImageData = function (a, b) {
        return f._tmpCanvas = document.createElement("canvas"), f._tmpCtx = f._tmpCanvas.getContext("2d"), this._tmpCtx.createImageData(a, b);
      }, f.apply = function (a, b, c) {
        var d = a.getContext("2d"),
            e = d.getImageData(0, 0, a.width, a.height),
            f = b(e, c);f instanceof ImageData ? d.putImageData(f, 0, 0, 0, 0, a.width, a.height) : d.putImageData(e, 0, 0, 0, 0, a.width, a.height);
      }, f.threshold = function (a, b) {
        var c = f._toPixels(a);void 0 === b && (b = .5);for (var d = Math.floor(255 * b), e = 0; e < c.length; e += 4) {
          var g,
              h = c[e],
              i = c[e + 1],
              j = c[e + 2],
              k = .2126 * h + .7152 * i + .0722 * j;g = k >= d ? 255 : 0, c[e] = c[e + 1] = c[e + 2] = g;
        }
      }, f.gray = function (a) {
        for (var b = f._toPixels(a), c = 0; c < b.length; c += 4) {
          var d = b[c],
              e = b[c + 1],
              g = b[c + 2],
              h = .2126 * d + .7152 * e + .0722 * g;b[c] = b[c + 1] = b[c + 2] = h;
        }
      }, f.opaque = function (a) {
        for (var b = f._toPixels(a), c = 0; c < b.length; c += 4) {
          b[c + 3] = 255;
        }return b;
      }, f.invert = function (a) {
        for (var b = f._toPixels(a), c = 0; c < b.length; c += 4) {
          b[c] = 255 - b[c], b[c + 1] = 255 - b[c + 1], b[c + 2] = 255 - b[c + 2];
        }
      }, f.posterize = function (a, b) {
        var c = f._toPixels(a);if (b < 2 || b > 255) throw new Error("Level must be greater than 2 and less than 255 for posterize");for (var d = b - 1, e = 0; e < c.length; e += 4) {
          var g = c[e],
              h = c[e + 1],
              i = c[e + 2];c[e] = 255 * (g * b >> 8) / d, c[e + 1] = 255 * (h * b >> 8) / d, c[e + 2] = 255 * (i * b >> 8) / d;
        }
      }, f.dilate = function (a) {
        for (var b, c, d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t = f._toPixels(a), u = 0, v = t.length ? t.length / 4 : 0, w = new Int32Array(v); u < v;) {
          for (b = u, c = u + a.width; u < c;) {
            d = e = f._getARGB(t, u), i = u - 1, h = u + 1, j = u - a.width, k = u + a.width, i < b && (i = u), h >= c && (h = u), j < 0 && (j = 0), k >= v && (k = u), n = f._getARGB(t, j), m = f._getARGB(t, i), o = f._getARGB(t, k), l = f._getARGB(t, h), g = 77 * (d >> 16 & 255) + 151 * (d >> 8 & 255) + 28 * (255 & d), q = 77 * (m >> 16 & 255) + 151 * (m >> 8 & 255) + 28 * (255 & m), p = 77 * (l >> 16 & 255) + 151 * (l >> 8 & 255) + 28 * (255 & l), r = 77 * (n >> 16 & 255) + 151 * (n >> 8 & 255) + 28 * (255 & n), s = 77 * (o >> 16 & 255) + 151 * (o >> 8 & 255) + 28 * (255 & o), q > g && (e = m, g = q), p > g && (e = l, g = p), r > g && (e = n, g = r), s > g && (e = o, g = s), w[u++] = e;
          }
        }f._setPixels(t, w);
      }, f.erode = function (a) {
        for (var b, c, d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t = f._toPixels(a), u = 0, v = t.length ? t.length / 4 : 0, w = new Int32Array(v); u < v;) {
          for (b = u, c = u + a.width; u < c;) {
            d = e = f._getARGB(t, u), i = u - 1, h = u + 1, j = u - a.width, k = u + a.width, i < b && (i = u), h >= c && (h = u), j < 0 && (j = 0), k >= v && (k = u), n = f._getARGB(t, j), m = f._getARGB(t, i), o = f._getARGB(t, k), l = f._getARGB(t, h), g = 77 * (d >> 16 & 255) + 151 * (d >> 8 & 255) + 28 * (255 & d), q = 77 * (m >> 16 & 255) + 151 * (m >> 8 & 255) + 28 * (255 & m), p = 77 * (l >> 16 & 255) + 151 * (l >> 8 & 255) + 28 * (255 & l), r = 77 * (n >> 16 & 255) + 151 * (n >> 8 & 255) + 28 * (255 & n), s = 77 * (o >> 16 & 255) + 151 * (o >> 8 & 255) + 28 * (255 & o), q < g && (e = m, g = q), p < g && (e = l, g = p), r < g && (e = n, g = r), s < g && (e = o, g = s), w[u++] = e;
          }
        }f._setPixels(t, w);
      };var g, h, i, j;f.blur = function (a, b) {
        e(a, b);
      }, b.exports = f;
    }, {}], 43: [function (a, b, c) {
      "use strict";
      var d = a("../core/main"),
          e = [];d.prototype.createImage = function (a, b) {
        return d._validateParameters("createImage", arguments), new d.Image(a, b);
      }, d.prototype.saveCanvas = function () {
        d._validateParameters("saveCanvas", arguments);var a,
            b,
            c,
            e = [].slice.call(arguments);arguments[0] instanceof HTMLCanvasElement ? (a = arguments[0], e.shift()) : arguments[0] instanceof d.Element ? (a = arguments[0].elt, e.shift()) : a = this._curElement && this._curElement.elt, e.length >= 1 && (b = e[0]), e.length >= 2 && (c = e[1]), c = c || d.prototype._checkFileExtension(b, c)[1] || "png";var f;switch (c) {default:
            f = "image/png";break;case "jpeg":case "jpg":
            f = "image/jpeg";}a.toBlob(function (a) {
          d.prototype.downloadFile(a, b, c);
        }, f);
      }, d.prototype.saveFrames = function (a, b, c, f, g) {
        d._validateParameters("saveFrames", arguments);var h = c || 3;h = d.prototype.constrain(h, 0, 15), h *= 1e3;var i = f || 15;i = d.prototype.constrain(i, 0, 22);var j = 0,
            k = d.prototype._makeFrame,
            l = this._curElement.elt,
            m = setInterval(function () {
          k(a + j, b, l), j++;
        }, 1e3 / i);setTimeout(function () {
          if (clearInterval(m), g) g(e);else for (var a = 0; a < e.length; a++) {
            var b = e[a];d.prototype.downloadFile(b.imageData, b.filename, b.ext);
          }e = [];
        }, h + .01);
      }, d.prototype._makeFrame = function (a, b, c) {
        var d;d = this ? this._curElement.elt : c;var f;if (b) switch (b.toLowerCase()) {case "png":
            f = "image/png";break;case "jpeg":case "jpg":
            f = "image/jpeg";break;default:
            f = "image/png";} else b = "png", f = "image/png";var g = d.toDataURL(f);g = g.replace(f, "image/octet-stream");var h = {};h.imageData = g, h.filename = a, h.ext = b, e.push(h);
      }, b.exports = d;
    }, { "../core/main": 24 }], 44: [function (a, b, c) {
      "use strict";
      function d(a, b) {
        return a > 0 && a < b ? a : b;
      }var e = a("../core/main"),
          f = a("./filters"),
          g = a("../core/helpers"),
          h = a("../core/constants");a("../core/error_helpers"), e.prototype.loadImage = function (a, b, c) {
        e._validateParameters("loadImage", arguments);var d = new Image(),
            f = new e.Image(1, 1, this),
            g = this;return d.onload = function () {
          f.width = f.canvas.width = d.width, f.height = f.canvas.height = d.height, f.drawingContext.drawImage(d, 0, 0), f.modified = !0, "function" == typeof b && b(f), g._decrementPreload();
        }, d.onerror = function (a) {
          e._friendlyFileLoadError(0, d.src), "function" == typeof c && c(a);
        }, 0 !== a.indexOf("data:image/") && (d.crossOrigin = "Anonymous"), d.src = a, f;
      }, e.prototype.image = function (a, b, c, f, h, i, j, k, l) {
        e._validateParameters("image", arguments);var m = a.width,
            n = a.height;a.elt && a.elt.videoWidth && !a.canvas && (m = a.elt.videoWidth, n = a.elt.videoHeight);var o = b,
            p = c,
            q = f || m,
            r = h || n,
            s = i || 0,
            t = j || 0,
            u = k || m,
            v = l || n;u = d(u, m), v = d(v, n);var w = 1;a.elt && !a.canvas && a.elt.style.width && (w = a.elt.videoWidth && !f ? a.elt.videoWidth : a.elt.width, w /= parseInt(a.elt.style.width, 10)), s *= w, t *= w, v *= w, u *= w;var x = g.modeAdjust(o, p, q, r, this._renderer._imageMode);this._renderer.image(a, s, t, u, v, x.x, x.y, x.w, x.h);
      }, e.prototype.tint = function () {
        e._validateParameters("tint", arguments);var a = this.color.apply(this, arguments);this._renderer._tint = a.levels;
      }, e.prototype.noTint = function () {
        this._renderer._tint = null;
      }, e.prototype._getTintedImageCanvas = function (a) {
        if (!a.canvas) return a;var b = f._toPixels(a.canvas),
            c = document.createElement("canvas");c.width = a.canvas.width, c.height = a.canvas.height;for (var d = c.getContext("2d"), e = d.createImageData(a.canvas.width, a.canvas.height), g = e.data, h = 0; h < b.length; h += 4) {
          var i = b[h],
              j = b[h + 1],
              k = b[h + 2],
              l = b[h + 3];g[h] = i * this._renderer._tint[0] / 255, g[h + 1] = j * this._renderer._tint[1] / 255, g[h + 2] = k * this._renderer._tint[2] / 255, g[h + 3] = l * this._renderer._tint[3] / 255;
        }return d.putImageData(e, 0, 0), c;
      }, e.prototype.imageMode = function (a) {
        e._validateParameters("imageMode", arguments), a !== h.CORNER && a !== h.CORNERS && a !== h.CENTER || (this._renderer._imageMode = a);
      }, b.exports = e;
    }, { "../core/constants": 18, "../core/error_helpers": 20, "../core/helpers": 21, "../core/main": 24, "./filters": 42 }], 45: [function (a, b, c) {
      "use strict";
      var d = a("../core/main"),
          e = a("./filters");d.Image = function (a, b) {
        this.width = a, this.height = b, this.canvas = document.createElement("canvas"), this.canvas.width = this.width, this.canvas.height = this.height, this.drawingContext = this.canvas.getContext("2d"), this._pixelDensity = 1, this._modified = !1, this._pixelsDirty = !0, this.pixels = [];
      }, d.Image.prototype._setProperty = function (a, b) {
        this[a] = b, this.setModified(!0);
      }, d.Image.prototype.loadPixels = function () {
        d.Renderer2D.prototype.loadPixels.call(this), this.setModified(!0);
      }, d.Image.prototype.updatePixels = function (a, b, c, e) {
        d.Renderer2D.prototype.updatePixels.call(this, a, b, c, e), this.setModified(!0);
      }, d.Image.prototype.get = function (a, b, c, e) {
        return d.Renderer2D.prototype.get.call(this, a, b, c, e);
      }, d.Image.prototype.set = function (a, b, c) {
        d.Renderer2D.prototype.set.call(this, a, b, c), this.setModified(!0);
      }, d.Image.prototype.resize = function (a, b) {
        0 === a && 0 === b ? (a = this.canvas.width, b = this.canvas.height) : 0 === a ? a = this.canvas.width * b / this.canvas.height : 0 === b && (b = this.canvas.height * a / this.canvas.width), a = Math.floor(a), b = Math.floor(b);var c = document.createElement("canvas");c.width = a, c.height = b, c.getContext("2d").drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height, 0, 0, c.width, c.height), this.canvas.width = this.width = a, this.canvas.height = this.height = b, this.drawingContext.drawImage(c, 0, 0, a, b, 0, 0, a, b), this.pixels.length > 0 && this.loadPixels(), this.setModified(!0), this._pixelsDirty = !0;
      }, d.Image.prototype.copy = function () {
        var a, b, c, e, f, g, h, i, j;if (9 === arguments.length) a = arguments[0], b = arguments[1], c = arguments[2], e = arguments[3], f = arguments[4], g = arguments[5], h = arguments[6], i = arguments[7], j = arguments[8];else {
          if (8 !== arguments.length) throw new Error("Signature not supported");a = this, b = arguments[0], c = arguments[1], e = arguments[2], f = arguments[3], g = arguments[4], h = arguments[5], i = arguments[6], j = arguments[7];
        }d.Renderer2D._copyHelper(this, a, b, c, e, f, g, h, i, j), this._pixelsDirty = !0;
      }, d.Image.prototype.mask = function (a) {
        void 0 === a && (a = this);var b = this.drawingContext.globalCompositeOperation,
            c = 1;a instanceof d.Renderer && (c = a._pInst._pixelDensity);var e = [a, 0, 0, c * a.width, c * a.height, 0, 0, this.width, this.height];this.drawingContext.globalCompositeOperation = "destination-in", d.Image.prototype.copy.apply(this, e), this.drawingContext.globalCompositeOperation = b, this.setModified(!0);
      }, d.Image.prototype.filter = function (a, b) {
        e.apply(this.canvas, e[a.toLowerCase()], b), this.setModified(!0);
      }, d.Image.prototype.blend = function () {
        d.prototype.blend.apply(this, arguments), this.setModified(!0);
      }, d.Image.prototype.setModified = function (a) {
        this._modified = a;
      }, d.Image.prototype.isModified = function () {
        return this._modified;
      }, d.Image.prototype.save = function (a, b) {
        d.prototype.saveCanvas(this.canvas, a, b);
      }, b.exports = d.Image;
    }, { "../core/main": 24, "./filters": 42 }], 46: [function (a, b, c) {
      "use strict";
      var d = a("../core/main"),
          e = a("./filters");a("../color/p5.Color"), d.prototype.pixels = [], d.prototype.blend = function () {
        d._validateParameters("blend", arguments), this._renderer ? this._renderer.blend.apply(this._renderer, arguments) : d.Renderer2D.prototype.blend.apply(this, arguments);
      }, d.prototype.copy = function () {
        d._validateParameters("copy", arguments), d.Renderer2D.prototype.copy.apply(this._renderer, arguments);
      }, d.prototype.filter = function (a, b) {
        d._validateParameters("filter", arguments), void 0 !== this.canvas ? e.apply(this.canvas, e[a.toLowerCase()], b) : e.apply(this.elt, e[a.toLowerCase()], b);
      }, d.prototype.get = function (a, b, c, d) {
        return this._renderer.get(a, b, c, d);
      }, d.prototype.loadPixels = function () {
        d._validateParameters("loadPixels", arguments), this._renderer.loadPixels();
      }, d.prototype.set = function (a, b, c) {
        this._renderer.set(a, b, c);
      }, d.prototype.updatePixels = function (a, b, c, e) {
        d._validateParameters("updatePixels", arguments), 0 !== this.pixels.length && this._renderer.updatePixels(a, b, c, e);
      }, b.exports = d;
    }, { "../color/p5.Color": 16, "../core/main": 24, "./filters": 42 }], 47: [function (a, b, c) {
      "use strict";
      function d(a, b) {
        var c = {};if (void 0 === (b = b || [])) for (var d = 0; d < a.length; d++) {
          b[d.toString()] = d;
        }for (var e = 0; e < b.length; e++) {
          var f = b[e],
              g = a[e];c[f] = g;
        }return c;
      }function e(a) {
        var b = new i.XML(),
            c = a.childNodes;if (c && c.length) {
          for (var d = 0; d < c.length; d++) {
            var f = e(c[d]);b.addChild(f);
          }b.setName(a.nodeName), b._setCont(a.textContent), b._setAttributes(a);for (var g = 0; g < b.children.length; g++) {
            b.children[g].parent = b;
          }return b;
        }return b.setName(a.nodeName), b._setCont(a.textContent), b._setAttributes(a), b;
      }function f(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
      }function g(a, b) {
        b && !0 !== b && "true" !== b || (b = ""), a || (a = "untitled");var c = "";return a && a.indexOf(".") > -1 && (c = a.split(".").pop()), b && c !== b && (c = b, a = a + "." + c), [a, c];
      }function h(a) {
        document.body.removeChild(a.target);
      }var i = a("../core/main");a("whatwg-fetch"), a("es6-promise").polyfill();var j = a("fetch-jsonp");a("../core/error_helpers"), i.prototype.loadJSON = function () {
        i._validateParameters("loadJSON", arguments);for (var a, b, c, d = arguments[0], e = {}, f = "json", g = 1; g < arguments.length; g++) {
          var h = arguments[g];"string" == typeof h ? "jsonp" !== h && "json" !== h || (f = h) : "function" == typeof h ? a ? b = h : a = h : "object" == (typeof h === "undefined" ? "undefined" : _typeof(h)) && h.hasOwnProperty("jsonpCallback") && (f = "jsonp", c = h);
        }var j = this;return this.httpDo(d, "GET", c, f, function (b) {
          for (var c in b) {
            e[c] = b[c];
          }void 0 !== a && a(b), j._decrementPreload();
        }, function (a) {
          if (i._friendlyFileLoadError(5, d), !b) throw a;b(a);
        }), e;
      }, i.prototype.loadStrings = function () {
        i._validateParameters("loadStrings", arguments);for (var a, b, c = [], d = 1; d < arguments.length; d++) {
          var e = arguments[d];"function" == typeof e && (void 0 === a ? a = e : void 0 === b && (b = e));
        }var f = this;return i.prototype.httpDo.call(this, arguments[0], "GET", "text", function (b) {
          var d = b.replace(/\r\n/g, "\r").replace(/\n/g, "\r").split(/\r/);Array.prototype.push.apply(c, d), void 0 !== a && a(c), f._decrementPreload();
        }, function (a) {
          if (i._friendlyFileLoadError(3, arguments[0]), !b) throw a;b(a);
        }), c;
      }, i.prototype.loadTable = function (a) {
        var b,
            c,
            e = [],
            f = !1,
            g = a.substring(a.lastIndexOf(".") + 1, a.length),
            h = ",",
            j = !1;"tsv" === g && (h = "\t");for (var k = 1; k < arguments.length; k++) {
          if ("function" == typeof arguments[k]) void 0 === b ? b = arguments[k] : void 0 === c && (c = arguments[k]);else if ("string" == typeof arguments[k]) if (e.push(arguments[k]), "header" === arguments[k] && (f = !0), "csv" === arguments[k]) {
            if (j) throw new Error("Cannot set multiple separator types.");h = ",", j = !0;
          } else if ("tsv" === arguments[k]) {
            if (j) throw new Error("Cannot set multiple separator types.");h = "\t", j = !0;
          }
        }var l = new i.Table(),
            m = this;return this.httpDo(a, "GET", "table", function (a) {
          for (var c, e = {}, g = 0, j = 1, n = 2, o = 4, p = '"', q = "\r", r = "\n", s = [], t = 0, u = null, v = function v() {
            e.currentState = g, e.token = "";
          }, w = function w() {
            u.push(e.token), v();
          }, x = function x() {
            e.escaped = !1, u = [], v();
          }, y = function y() {
            e.currentState = o, s.push(u), u = null;
          };;) {
            if (null == (c = a[t++])) {
              if (e.escaped) throw new Error("Unclosed quote in file.");if (u) {
                w(), y();break;
              }
            }if (null === u && x(), e.currentState === g) {
              if (c === p) {
                e.escaped = !0, e.currentState = j;continue;
              }e.currentState = j;
            }if (e.currentState === j && e.escaped) {
              if (c === p) a[t] === p ? (e.token += p, t++) : (e.escaped = !1, e.currentState = n);else {
                if (c === q) continue;e.token += c;
              }
            } else c === q ? (a[t] === r && t++, w(), y()) : c === r ? (w(), y()) : c === h ? w() : e.currentState === j && (e.token += c);
          }if (f) l.columns = s.shift();else for (k = 0; k < s[0].length; k++) {
            l.columns[k] = "null";
          }var z;for (k = 0; k < s.length; k++) {
            (1 !== s[k].length || "undefined" !== s[k][0] && "" !== s[k][0]) && (z = new i.TableRow(), z.arr = s[k], z.obj = d(s[k], l.columns), l.addRow(z));
          }"function" == typeof b && b(l), m._decrementPreload();
        }, function (b) {
          if (i._friendlyFileLoadError(2, a), !c) throw b;c(b);
        }), l;
      }, i.prototype.loadXML = function () {
        for (var a, b, c = {}, d = 1; d < arguments.length; d++) {
          var e = arguments[d];"function" == typeof e && (void 0 === a ? a = e : void 0 === b && (b = e));
        }var f = this;return this.httpDo(arguments[0], "GET", "xml", function (b) {
          for (var d in b) {
            c[d] = b[d];
          }void 0 !== a && a(c), f._decrementPreload();
        }, function (a) {
          if (i._friendlyFileLoadError(1, arguments[0]), !b) throw a;b(a);
        }), c;
      }, i.prototype.loadBytes = function (a, b, c) {
        var d = {},
            e = this;return this.httpDo(a, "GET", "arrayBuffer", function (a) {
          d.bytes = new Uint8Array(a), "function" == typeof b && b(d), e._decrementPreload();
        }, function (b) {
          if (i._friendlyFileLoadError(6, a), !c) throw b;c(b);
        }), d;
      }, i.prototype.httpGet = function () {
        i._validateParameters("httpGet", arguments);var a = Array.prototype.slice.call(arguments);return a.splice(1, 0, "GET"), i.prototype.httpDo.apply(this, a);
      }, i.prototype.httpPost = function () {
        i._validateParameters("httpPost", arguments);var a = Array.prototype.slice.call(arguments);return a.splice(1, 0, "POST"), i.prototype.httpDo.apply(this, a);
      }, i.prototype.httpDo = function () {
        for (var a, b, c, d, f, g = {}, h = 0, k = "text/plain", l = arguments.length - 1; l > 0 && "function" == typeof arguments[l]; l--) {
          h++;
        }var m = arguments.length - h,
            n = arguments[0];if (2 === m && "string" == typeof n && "object" == _typeof(arguments[1])) d = new Request(n, arguments[1]), b = arguments[2], c = arguments[3];else {
          for (var o, p = "GET", q = 1; q < arguments.length; q++) {
            var r = arguments[q];if ("string" == typeof r) "GET" === r || "POST" === r || "PUT" === r || "DELETE" === r ? p = r : "json" === r || "jsonp" === r || "binary" === r || "arrayBuffer" === r || "xml" === r || "text" === r || "table" === r ? a = r : o = r;else if ("number" == typeof r) o = r.toString();else if ("object" == (typeof r === "undefined" ? "undefined" : _typeof(r))) {
              if (r.hasOwnProperty("jsonpCallback")) for (var s in r) {
                g[s] = r[s];
              } else o = JSON.stringify(r), k = "application/json";
            } else "function" == typeof r && (b ? c = r : b = r);
          }d = new Request(n, { method: p, mode: "cors", body: o, headers: new Headers({ "Content-Type": k }) });
        }return a || (a = -1 !== n.indexOf("json") ? "json" : -1 !== n.indexOf("xml") ? "xml" : "text"), f = "jsonp" === a ? j(n, g) : fetch(d), f = f.then(function (b) {
          if (!b.ok) {
            var c = new Error(b.body);throw c.status = b.status, c.ok = !1, c;
          }var d = b.headers.get("content-length");switch (d && d > 64e6 && i._friendlyFileLoadError(7, n), a) {case "json":case "jsonp":
              return b.json();case "binary":
              return b.blob();case "arrayBuffer":
              return b.arrayBuffer();case "xml":
              return b.text().then(function (a) {
                return e(new DOMParser().parseFromString(a, "text/xml").documentElement);
              });default:
              return b.text();}
        }), f.then(b || function () {}), f.catch(c || console.error), f;
      }, window.URL = window.URL || window.webkitURL, i.prototype._pWriters = [], i.prototype.createWriter = function (a, b) {
        var c;for (var d in i.prototype._pWriters) {
          if (i.prototype._pWriters[d].name === a) return c = new i.PrintWriter(a + this.millis(), b), i.prototype._pWriters.push(c), c;
        }return c = new i.PrintWriter(a, b), i.prototype._pWriters.push(c), c;
      }, i.PrintWriter = function (a, b) {
        var c = this;this.name = a, this.content = "", this.write = function (a) {
          this.content += a;
        }, this.print = function (a) {
          this.content += a + "\n";
        }, this.clear = function () {
          this.content = "";
        }, this.close = function () {
          var d = [];d.push(this.content), i.prototype.writeFile(d, a, b);for (var e in i.prototype._pWriters) {
            i.prototype._pWriters[e].name === this.name && i.prototype._pWriters.splice(e, 1);
          }c.clear(), c = {};
        };
      }, i.prototype.save = function (a, b, c) {
        var d = arguments,
            e = this._curElement.elt;if (0 === d.length) return void i.prototype.saveCanvas(e);if (d[0] instanceof i.Renderer || d[0] instanceof i.Graphics) return void i.prototype.saveCanvas(d[0].elt, d[1], d[2]);if (1 === d.length && "string" == typeof d[0]) i.prototype.saveCanvas(e, d[0]);else {
          switch (g(d[1], d[2])[1]) {case "json":
              return void i.prototype.saveJSON(d[0], d[1], d[2]);case "txt":
              return void i.prototype.saveStrings(d[0], d[1], d[2]);default:
              d[0] instanceof Array ? i.prototype.saveStrings(d[0], d[1], d[2]) : d[0] instanceof i.Table ? i.prototype.saveTable(d[0], d[1], d[2]) : d[0] instanceof i.Image ? i.prototype.saveCanvas(d[0].canvas, d[1]) : d[0] instanceof i.SoundFile && i.prototype.saveSound(d[0], d[1], d[2], d[3]);}
        }
      }, i.prototype.saveJSON = function (a, b, c) {
        i._validateParameters("saveJSON", arguments);var d;d = c ? JSON.stringify(a) : JSON.stringify(a, void 0, 2), this.saveStrings(d.split("\n"), b, "json");
      }, i.prototype.saveJSONObject = i.prototype.saveJSON, i.prototype.saveJSONArray = i.prototype.saveJSON, i.prototype.saveStrings = function (a, b, c) {
        i._validateParameters("saveStrings", arguments);for (var d = c || "txt", e = this.createWriter(b, d), f = 0; f < a.length; f++) {
          a.length, e.print(a[f]);
        }e.close(), e.clear();
      }, i.prototype.saveTable = function (a, b, c) {
        i._validateParameters("saveTable", arguments);var d;d = void 0 === c ? b.substring(b.lastIndexOf(".") + 1, b.length) : c;var e = this.createWriter(b, d),
            g = a.columns,
            h = ",";if ("tsv" === d && (h = "\t"), "html" !== d) {
          if ("0" !== g[0]) {
            for (var j = 0; j < g.length; j++) {
              j < g.length - 1 ? e.write(g[j] + h) : e.write(g[j]);
            }e.write("\n");
          }for (var k = 0; k < a.rows.length; k++) {
            var l;for (l = 0; l < a.rows[k].arr.length; l++) {
              l < a.rows[k].arr.length - 1 ? e.write(a.rows[k].arr[l] + h) : (a.rows.length, e.write(a.rows[k].arr[l]));
            }e.write("\n");
          }
        } else {
          e.print("<html>"), e.print("<head>");var m = '  <meta http-equiv="content-type" content';if (m += '="text/html;charset=utf-8" />', e.print(m), e.print("</head>"), e.print("<body>"), e.print("  <table>"), "0" !== g[0]) {
            e.print("    <tr>");for (var n = 0; n < g.length; n++) {
              var o = f(g[n]);e.print("      <td>" + o), e.print("      </td>");
            }e.print("    </tr>");
          }for (var p = 0; p < a.rows.length; p++) {
            e.print("    <tr>");for (var q = 0; q < a.columns.length; q++) {
              var r = a.rows[p].getString(q),
                  s = f(r);e.print("      <td>" + s), e.print("      </td>");
            }e.print("    </tr>");
          }e.print("  </table>"), e.print("</body>"), e.print("</html>");
        }e.close(), e.clear();
      }, i.prototype.writeFile = function (a, b, c) {
        var d = "application/octet-stream";i.prototype._isSafari() && (d = "text/plain");var e = new Blob(a, { type: d });i.prototype.downloadFile(e, b, c);
      }, i.prototype.downloadFile = function (b, c, d) {
        var e = g(c, d),
            f = e[0];if (b instanceof Blob) {
          return void a("file-saver").saveAs(b, f);
        }var j = document.createElement("a");if (j.href = b, j.download = f, j.onclick = function (a) {
          h(a), a.stopPropagation();
        }, j.style.display = "none", document.body.appendChild(j), i.prototype._isSafari()) {
          var k = "Hello, Safari user! To download this file...\n";k += "1. Go to File --\x3e Save As.\n", k += '2. Choose "Page Source" as the Format.\n', k += '3. Name it with this extension: ."' + e[1] + '"', alert(k);
        }j.click();
      }, i.prototype._checkFileExtension = g, i.prototype._isSafari = function () {
        return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0;
      }, b.exports = i;
    }, { "../core/error_helpers": 20, "../core/main": 24, "es6-promise": 4, "fetch-jsonp": 5, "file-saver": 6, "whatwg-fetch": 12 }], 48: [function (a, b, c) {
      "use strict";
      var d = a("../core/main");d.Table = function (a) {
        this.columns = [], this.rows = [];
      }, d.Table.prototype.addRow = function (a) {
        var b = a || new d.TableRow();if (void 0 === b.arr || void 0 === b.obj) throw new Error("invalid TableRow: " + b);return b.table = this, this.rows.push(b), b;
      }, d.Table.prototype.removeRow = function (a) {
        this.rows[a].table = null;var b = this.rows.splice(a + 1, this.rows.length);this.rows.pop(), this.rows = this.rows.concat(b);
      }, d.Table.prototype.getRow = function (a) {
        return this.rows[a];
      }, d.Table.prototype.getRows = function () {
        return this.rows;
      }, d.Table.prototype.findRow = function (a, b) {
        if ("string" == typeof b) {
          for (var c = 0; c < this.rows.length; c++) {
            if (this.rows[c].obj[b] === a) return this.rows[c];
          }
        } else for (var d = 0; d < this.rows.length; d++) {
          if (this.rows[d].arr[b] === a) return this.rows[d];
        }return null;
      }, d.Table.prototype.findRows = function (a, b) {
        var c = [];if ("string" == typeof b) for (var d = 0; d < this.rows.length; d++) {
          this.rows[d].obj[b] === a && c.push(this.rows[d]);
        } else for (var e = 0; e < this.rows.length; e++) {
          this.rows[e].arr[b] === a && c.push(this.rows[e]);
        }return c;
      }, d.Table.prototype.matchRow = function (a, b) {
        if ("number" == typeof b) {
          for (var c = 0; c < this.rows.length; c++) {
            if (this.rows[c].arr[b].match(a)) return this.rows[c];
          }
        } else for (var d = 0; d < this.rows.length; d++) {
          if (this.rows[d].obj[b].match(a)) return this.rows[d];
        }return null;
      }, d.Table.prototype.matchRows = function (a, b) {
        var c = [];if ("number" == typeof b) for (var d = 0; d < this.rows.length; d++) {
          this.rows[d].arr[b].match(a) && c.push(this.rows[d]);
        } else for (var e = 0; e < this.rows.length; e++) {
          this.rows[e].obj[b].match(a) && c.push(this.rows[e]);
        }return c;
      }, d.Table.prototype.getColumn = function (a) {
        var b = [];if ("string" == typeof a) for (var c = 0; c < this.rows.length; c++) {
          b.push(this.rows[c].obj[a]);
        } else for (var d = 0; d < this.rows.length; d++) {
          b.push(this.rows[d].arr[a]);
        }return b;
      }, d.Table.prototype.clearRows = function () {
        delete this.rows, this.rows = [];
      }, d.Table.prototype.addColumn = function (a) {
        var b = a || null;this.columns.push(b);
      }, d.Table.prototype.getColumnCount = function () {
        return this.columns.length;
      }, d.Table.prototype.getRowCount = function () {
        return this.rows.length;
      }, d.Table.prototype.removeTokens = function (a, b) {
        for (var c = function c(a) {
          return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }, d = [], e = 0; e < a.length; e++) {
          d.push(c(a.charAt(e)));
        }var f = new RegExp(d.join("|"), "g");if (void 0 === b) for (var g = 0; g < this.columns.length; g++) {
          for (var h = 0; h < this.rows.length; h++) {
            var i = this.rows[h].arr[g];i = i.replace(f, ""), this.rows[h].arr[g] = i, this.rows[h].obj[this.columns[g]] = i;
          }
        } else if ("string" == typeof b) for (var j = 0; j < this.rows.length; j++) {
          var k = this.rows[j].obj[b];k = k.replace(f, ""), this.rows[j].obj[b] = k;var l = this.columns.indexOf(b);this.rows[j].arr[l] = k;
        } else for (var m = 0; m < this.rows.length; m++) {
          var n = this.rows[m].arr[b];n = n.replace(f, ""), this.rows[m].arr[b] = n, this.rows[m].obj[this.columns[b]] = n;
        }
      }, d.Table.prototype.trim = function (a) {
        var b = new RegExp(" ", "g");if (void 0 === a) for (var c = 0; c < this.columns.length; c++) {
          for (var d = 0; d < this.rows.length; d++) {
            var e = this.rows[d].arr[c];e = e.replace(b, ""), this.rows[d].arr[c] = e, this.rows[d].obj[this.columns[c]] = e;
          }
        } else if ("string" == typeof a) for (var f = 0; f < this.rows.length; f++) {
          var g = this.rows[f].obj[a];g = g.replace(b, ""), this.rows[f].obj[a] = g;var h = this.columns.indexOf(a);this.rows[f].arr[h] = g;
        } else for (var i = 0; i < this.rows.length; i++) {
          var j = this.rows[i].arr[a];j = j.replace(b, ""), this.rows[i].arr[a] = j, this.rows[i].obj[this.columns[a]] = j;
        }
      }, d.Table.prototype.removeColumn = function (a) {
        var b, c;"string" == typeof a ? (b = a, c = this.columns.indexOf(a)) : (c = a, b = this.columns[a]);var d = this.columns.splice(c + 1, this.columns.length);this.columns.pop(), this.columns = this.columns.concat(d);for (var e = 0; e < this.rows.length; e++) {
          var f = this.rows[e].arr,
              g = f.splice(c + 1, f.length);f.pop(), this.rows[e].arr = f.concat(g), delete this.rows[e].obj[b];
        }
      }, d.Table.prototype.set = function (a, b, c) {
        this.rows[a].set(b, c);
      }, d.Table.prototype.setNum = function (a, b, c) {
        this.rows[a].setNum(b, c);
      }, d.Table.prototype.setString = function (a, b, c) {
        this.rows[a].setString(b, c);
      }, d.Table.prototype.get = function (a, b) {
        return this.rows[a].get(b);
      }, d.Table.prototype.getNum = function (a, b) {
        return this.rows[a].getNum(b);
      }, d.Table.prototype.getString = function (a, b) {
        return this.rows[a].getString(b);
      }, d.Table.prototype.getObject = function (a) {
        for (var b, c, d = {}, e = 0; e < this.rows.length; e++) {
          if (b = this.rows[e].obj, "string" == typeof a) {
            if (!(this.columns.indexOf(a) >= 0)) throw new Error('This table has no column named "' + a + '"');c = b[a], d[c] = b;
          } else d[e] = this.rows[e].obj;
        }return d;
      }, d.Table.prototype.getArray = function () {
        for (var a = [], b = 0; b < this.rows.length; b++) {
          a.push(this.rows[b].arr);
        }return a;
      }, b.exports = d;
    }, { "../core/main": 24 }], 49: [function (a, b, c) {
      "use strict";
      var d = a("../core/main");d.TableRow = function (a, b) {
        var c = [],
            d = {};a && (b = b || ",", c = a.split(b));for (var e = 0; e < c.length; e++) {
          var f = e,
              g = c[e];d[f] = g;
        }this.arr = c, this.obj = d, this.table = null;
      }, d.TableRow.prototype.set = function (a, b) {
        if ("string" == typeof a) {
          var c = this.table.columns.indexOf(a);if (!(c >= 0)) throw new Error('This table has no column named "' + a + '"');this.obj[a] = b, this.arr[c] = b;
        } else {
          if (!(a < this.table.columns.length)) throw new Error("Column #" + a + " is out of the range of this table");this.arr[a] = b;var d = this.table.columns[a];this.obj[d] = b;
        }
      }, d.TableRow.prototype.setNum = function (a, b) {
        var c = parseFloat(b);this.set(a, c);
      }, d.TableRow.prototype.setString = function (a, b) {
        var c = b.toString();this.set(a, c);
      }, d.TableRow.prototype.get = function (a) {
        return "string" == typeof a ? this.obj[a] : this.arr[a];
      }, d.TableRow.prototype.getNum = function (a) {
        var b;if (b = "string" == typeof a ? parseFloat(this.obj[a]) : parseFloat(this.arr[a]), "NaN" === b.toString()) throw "Error: " + this.obj[a] + " is NaN (Not a Number)";return b;
      }, d.TableRow.prototype.getString = function (a) {
        return "string" == typeof a ? this.obj[a].toString() : this.arr[a].toString();
      }, b.exports = d;
    }, { "../core/main": 24 }], 50: [function (a, b, c) {
      "use strict";
      var d = a("../core/main");d.XML = function () {
        this.name = null, this.attributes = {}, this.children = [], this.parent = null, this.content = null;
      }, d.XML.prototype.getParent = function () {
        return this.parent;
      }, d.XML.prototype.getName = function () {
        return this.name;
      }, d.XML.prototype.setName = function (a) {
        this.name = a;
      }, d.XML.prototype.hasChildren = function () {
        return this.children.length > 0;
      }, d.XML.prototype.listChildren = function () {
        return this.children.map(function (a) {
          return a.name;
        });
      }, d.XML.prototype.getChildren = function (a) {
        return a ? this.children.filter(function (b) {
          return b.name === a;
        }) : this.children;
      }, d.XML.prototype.getChild = function (a) {
        if ("string" != typeof a) return this.children[a];for (var b = 0; b < this.children.length; b++) {
          var c = this.children[b];if (c.name === a) return c;
        }
      }, d.XML.prototype.addChild = function (a) {
        a instanceof d.XML && this.children.push(a);
      }, d.XML.prototype.removeChild = function (a) {
        var b = -1;if ("string" == typeof a) {
          for (var c = 0; c < this.children.length; c++) {
            if (this.children[c].name === a) {
              b = c;break;
            }
          }
        } else b = a;-1 !== b && this.children.splice(b, 1);
      }, d.XML.prototype.getAttributeCount = function () {
        return Object.keys(this.attributes).length;
      }, d.XML.prototype.listAttributes = function () {
        return Object.keys(this.attributes);
      }, d.XML.prototype.hasAttribute = function (a) {
        return !!this.attributes[a];
      }, d.XML.prototype.getNum = function (a, b) {
        return Number(this.attributes[a]) || b || 0;
      }, d.XML.prototype.getString = function (a, b) {
        return String(this.attributes[a]) || b || null;
      }, d.XML.prototype.setAttribute = function (a, b) {
        this.attributes[a] && (this.attributes[a] = b);
      }, d.XML.prototype.getContent = function (a) {
        return this.content || a || null;
      }, d.XML.prototype.setContent = function (a) {
        this.children.length || (this.content = a);
      }, d.XML.prototype._setCont = function (a) {
        var b;b = a, b = b.replace(/\s\s+/g, ","), this.content = b;
      }, d.XML.prototype._setAttributes = function (a) {
        var b = {},
            c = a.attributes;if (c) for (var d = 0; d < c.length; d++) {
          var e = c[d];b[e.nodeName] = e.nodeValue;
        }this.attributes = b;
      }, b.exports = d;
    }, { "../core/main": 24 }], 51: [function (a, b, c) {
      "use strict";
      function d(a, b, c) {
        if ("function" == typeof Math.hypot) return Math.hypot.apply(null, arguments);for (var d = arguments.length, e = [], f = 0, g = 0; g < d; g++) {
          var h = arguments[g];if ((h = +h) === 1 / 0 || h === -1 / 0) return 1 / 0;h = Math.abs(h), h > f && (f = h), e[g] = h;
        }0 === f && (f = 1);for (var i = 0, j = 0, k = 0; k < d; k++) {
          var l = e[k] / f,
              m = l * l - j,
              n = i + m;j = n - i - m, i = n;
        }return Math.sqrt(i) * f;
      }var e = a("../core/main");e.prototype.abs = Math.abs, e.prototype.ceil = Math.ceil, e.prototype.constrain = function (a, b, c) {
        return e._validateParameters("constrain", arguments), Math.max(Math.min(a, c), b);
      }, e.prototype.dist = function () {
        return e._validateParameters("dist", arguments), 4 === arguments.length ? d(arguments[2] - arguments[0], arguments[3] - arguments[1]) : 6 === arguments.length ? d(arguments[3] - arguments[0], arguments[4] - arguments[1], arguments[5] - arguments[2]) : void 0;
      }, e.prototype.exp = Math.exp, e.prototype.floor = Math.floor, e.prototype.lerp = function (a, b, c) {
        return e._validateParameters("lerp", arguments), c * (b - a) + a;
      }, e.prototype.log = Math.log, e.prototype.mag = function (a, b) {
        return e._validateParameters("mag", arguments), d(a, b);
      }, e.prototype.map = function (a, b, c, d, f, g) {
        e._validateParameters("map", arguments);var h = (a - b) / (c - b) * (f - d) + d;return g ? d < f ? this.constrain(h, d, f) : this.constrain(h, f, d) : h;
      }, e.prototype.max = function () {
        return e._validateParameters("max", arguments), arguments[0] instanceof Array ? Math.max.apply(null, arguments[0]) : Math.max.apply(null, arguments);
      }, e.prototype.min = function () {
        return e._validateParameters("min", arguments), arguments[0] instanceof Array ? Math.min.apply(null, arguments[0]) : Math.min.apply(null, arguments);
      }, e.prototype.norm = function (a, b, c) {
        return e._validateParameters("norm", arguments), this.map(a, b, c, 0, 1);
      }, e.prototype.pow = Math.pow, e.prototype.round = Math.round, e.prototype.sq = function (a) {
        return a * a;
      }, e.prototype.sqrt = Math.sqrt, b.exports = e;
    }, { "../core/main": 24 }], 52: [function (a, b, c) {
      "use strict";
      var d = a("../core/main");d.prototype.createVector = function (a, b, c) {
        return this instanceof d ? new d.Vector(this, arguments) : new d.Vector(a, b, c);
      }, b.exports = d;
    }, { "../core/main": 24 }], 53: [function (a, b, c) {
      "use strict";
      var d,
          e = a("../core/main"),
          f = 4,
          g = 1 << f,
          h = 8,
          i = 1 << h,
          j = 4095,
          k = 4,
          l = .5,
          m = function m(a) {
        return .5 * (1 - Math.cos(a * Math.PI));
      };e.prototype.noise = function (a, b, c) {
        if (b = b || 0, c = c || 0, null == d) {
          d = new Array(j + 1);for (var e = 0; e < j + 1; e++) {
            d[e] = Math.random();
          }
        }a < 0 && (a = -a), b < 0 && (b = -b), c < 0 && (c = -c);for (var n, o, p, q, r, s = Math.floor(a), t = Math.floor(b), u = Math.floor(c), v = a - s, w = b - t, x = c - u, y = 0, z = .5, A = 0; A < k; A++) {
          var B = s + (t << f) + (u << h);n = m(v), o = m(w), p = d[B & j], p += n * (d[B + 1 & j] - p), q = d[B + g & j], q += n * (d[B + g + 1 & j] - q), p += o * (q - p), B += i, q = d[B & j], q += n * (d[B + 1 & j] - q), r = d[B + g & j], r += n * (d[B + g + 1 & j] - r), q += o * (r - q), p += m(x) * (q - p), y += p * z, z *= l, s <<= 1, v *= 2, t <<= 1, w *= 2, u <<= 1, x *= 2, v >= 1 && (s++, v--), w >= 1 && (t++, w--), x >= 1 && (u++, x--);
        }return y;
      }, e.prototype.noiseDetail = function (a, b) {
        a > 0 && (k = a), b > 0 && (l = b);
      }, e.prototype.noiseSeed = function (a) {
        var b = function () {
          var a,
              b,
              c = 4294967296,
              d = 1664525,
              e = 1013904223;return { setSeed: function setSeed(d) {
              b = a = (null == d ? Math.random() * c : d) >>> 0;
            }, getSeed: function getSeed() {
              return a;
            }, rand: function rand() {
              return (b = (d * b + e) % c) / c;
            } };
        }();b.setSeed(a), d = new Array(j + 1);for (var c = 0; c < j + 1; c++) {
          d[c] = b.rand();
        }
      }, b.exports = e;
    }, { "../core/main": 24 }], 54: [function (a, b, c) {
      "use strict";
      var d = a("../core/main"),
          e = a("../core/constants");d.Vector = function () {
        var a, b, c;arguments[0] instanceof d ? (this.p5 = arguments[0], a = arguments[1][0] || 0, b = arguments[1][1] || 0, c = arguments[1][2] || 0) : (a = arguments[0] || 0, b = arguments[1] || 0, c = arguments[2] || 0), this.x = a, this.y = b, this.z = c;
      }, d.Vector.prototype.toString = function () {
        return "p5.Vector Object : [" + this.x + ", " + this.y + ", " + this.z + "]";
      }, d.Vector.prototype.set = function (a, b, c) {
        return a instanceof d.Vector ? (this.x = a.x || 0, this.y = a.y || 0, this.z = a.z || 0, this) : a instanceof Array ? (this.x = a[0] || 0, this.y = a[1] || 0, this.z = a[2] || 0, this) : (this.x = a || 0, this.y = b || 0, this.z = c || 0, this);
      }, d.Vector.prototype.copy = function () {
        return this.p5 ? new d.Vector(this.p5, [this.x, this.y, this.z]) : new d.Vector(this.x, this.y, this.z);
      }, d.Vector.prototype.add = function (a, b, c) {
        return a instanceof d.Vector ? (this.x += a.x || 0, this.y += a.y || 0, this.z += a.z || 0, this) : a instanceof Array ? (this.x += a[0] || 0, this.y += a[1] || 0, this.z += a[2] || 0, this) : (this.x += a || 0, this.y += b || 0, this.z += c || 0, this);
      }, d.Vector.prototype.sub = function (a, b, c) {
        return a instanceof d.Vector ? (this.x -= a.x || 0, this.y -= a.y || 0, this.z -= a.z || 0, this) : a instanceof Array ? (this.x -= a[0] || 0, this.y -= a[1] || 0, this.z -= a[2] || 0, this) : (this.x -= a || 0, this.y -= b || 0, this.z -= c || 0, this);
      }, d.Vector.prototype.mult = function (a) {
        return "number" == typeof a && isFinite(a) ? (this.x *= a, this.y *= a, this.z *= a, this) : (console.warn("p5.Vector.prototype.mult:", "n is undefined or not a finite number"), this);
      }, d.Vector.prototype.div = function (a) {
        return "number" == typeof a && isFinite(a) ? 0 === a ? (console.warn("p5.Vector.prototype.div:", "divide by 0"), this) : (this.x /= a, this.y /= a, this.z /= a, this) : (console.warn("p5.Vector.prototype.div:", "n is undefined or not a finite number"), this);
      }, d.Vector.prototype.mag = function () {
        return Math.sqrt(this.magSq());
      }, d.Vector.prototype.magSq = function () {
        var a = this.x,
            b = this.y,
            c = this.z;return a * a + b * b + c * c;
      }, d.Vector.prototype.dot = function (a, b, c) {
        return a instanceof d.Vector ? this.dot(a.x, a.y, a.z) : this.x * (a || 0) + this.y * (b || 0) + this.z * (c || 0);
      }, d.Vector.prototype.cross = function (a) {
        var b = this.y * a.z - this.z * a.y,
            c = this.z * a.x - this.x * a.z,
            e = this.x * a.y - this.y * a.x;return this.p5 ? new d.Vector(this.p5, [b, c, e]) : new d.Vector(b, c, e);
      }, d.Vector.prototype.dist = function (a) {
        return a.copy().sub(this).mag();
      }, d.Vector.prototype.normalize = function () {
        var a = this.mag();return 0 !== a && this.mult(1 / a), this;
      }, d.Vector.prototype.limit = function (a) {
        var b = this.magSq();return b > a * a && this.div(Math.sqrt(b)).mult(a), this;
      }, d.Vector.prototype.setMag = function (a) {
        return this.normalize().mult(a);
      }, d.Vector.prototype.heading = function () {
        var a = Math.atan2(this.y, this.x);return this.p5 ? this.p5._fromRadians(a) : a;
      }, d.Vector.prototype.rotate = function (a) {
        var b = this.heading() + a;this.p5 && (b = this.p5._toRadians(b));var c = this.mag();return this.x = Math.cos(b) * c, this.y = Math.sin(b) * c, this;
      }, d.Vector.prototype.angleBetween = function (a) {
        var b = this.dot(a) / (this.mag() * a.mag()),
            c = Math.acos(Math.min(1, Math.max(-1, b)));return this.p5 ? this.p5._fromRadians(c) : c;
      }, d.Vector.prototype.lerp = function (a, b, c, e) {
        return a instanceof d.Vector ? this.lerp(a.x, a.y, a.z, b) : (this.x += (a - this.x) * e || 0, this.y += (b - this.y) * e || 0, this.z += (c - this.z) * e || 0, this);
      }, d.Vector.prototype.array = function () {
        return [this.x || 0, this.y || 0, this.z || 0];
      }, d.Vector.prototype.equals = function (a, b, c) {
        var e, f, g;return a instanceof d.Vector ? (e = a.x || 0, f = a.y || 0, g = a.z || 0) : a instanceof Array ? (e = a[0] || 0, f = a[1] || 0, g = a[2] || 0) : (e = a || 0, f = b || 0, g = c || 0), this.x === e && this.y === f && this.z === g;
      }, d.Vector.fromAngle = function (a, b) {
        return void 0 === b && (b = 1), new d.Vector(b * Math.cos(a), b * Math.sin(a), 0);
      }, d.Vector.fromAngles = function (a, b, c) {
        void 0 === c && (c = 1);var e = Math.cos(b),
            f = Math.sin(b),
            g = Math.cos(a),
            h = Math.sin(a);return new d.Vector(c * h * f, -c * g, c * h * e);
      }, d.Vector.random2D = function () {
        return this.fromAngle(Math.random() * e.TWO_PI);
      }, d.Vector.random3D = function () {
        var a = Math.random() * e.TWO_PI,
            b = 2 * Math.random() - 1,
            c = Math.sqrt(1 - b * b),
            f = c * Math.cos(a),
            g = c * Math.sin(a);return new d.Vector(f, g, b);
      }, d.Vector.add = function (a, b, c) {
        return c ? c.set(a) : c = a.copy(), c.add(b), c;
      }, d.Vector.sub = function (a, b, c) {
        return c ? c.set(a) : c = a.copy(), c.sub(b), c;
      }, d.Vector.mult = function (a, b, c) {
        return c ? c.set(a) : c = a.copy(), c.mult(b), c;
      }, d.Vector.div = function (a, b, c) {
        return c ? c.set(a) : c = a.copy(), c.div(b), c;
      }, d.Vector.dot = function (a, b) {
        return a.dot(b);
      }, d.Vector.cross = function (a, b) {
        return a.cross(b);
      }, d.Vector.dist = function (a, b) {
        return a.dist(b);
      }, d.Vector.lerp = function (a, b, c, d) {
        return d ? d.set(a) : d = a.copy(), d.lerp(b, c), d;
      }, d.Vector.mag = function (a) {
        var b = a.x,
            c = a.y,
            d = a.z,
            e = b * b + c * c + d * d;return Math.sqrt(e);
      }, b.exports = d.Vector;
    }, { "../core/constants": 18, "../core/main": 24 }], 55: [function (a, b, c) {
      "use strict";
      var d = a("../core/main"),
          e = !1,
          f = !1,
          g = 0,
          h = function () {
        var a,
            b,
            c = 4294967296,
            d = 1664525,
            e = 1013904223;return { setSeed: function setSeed(d) {
            b = a = (null == d ? Math.random() * c : d) >>> 0;
          }, getSeed: function getSeed() {
            return a;
          }, rand: function rand() {
            return (b = (d * b + e) % c) / c;
          } };
      }();d.prototype.randomSeed = function (a) {
        h.setSeed(a), e = !0, f = !1;
      }, d.prototype.random = function (a, b) {
        var c;if (c = e ? h.rand() : Math.random(), void 0 === a) return c;if (void 0 === b) return a instanceof Array ? a[Math.floor(c * a.length)] : c * a;if (a > b) {
          var d = a;a = b, b = d;
        }return c * (b - a) + a;
      }, d.prototype.randomGaussian = function (a, b) {
        var c, d, e, h;if (f) c = g, f = !1;else {
          do {
            d = this.random(2) - 1, e = this.random(2) - 1, h = d * d + e * e;
          } while (h >= 1);h = Math.sqrt(-2 * Math.log(h) / h), c = d * h, g = e * h, f = !0;
        }var i = a || 0;return c * (b || 1) + i;
      }, b.exports = d;
    }, { "../core/main": 24 }], 56: [function (a, b, c) {
      "use strict";
      var d = a("../core/main"),
          e = a("../core/constants");d.prototype._angleMode = e.RADIANS, d.prototype.acos = function (a) {
        return this._fromRadians(Math.acos(a));
      }, d.prototype.asin = function (a) {
        return this._fromRadians(Math.asin(a));
      }, d.prototype.atan = function (a) {
        return this._fromRadians(Math.atan(a));
      }, d.prototype.atan2 = function (a, b) {
        return this._fromRadians(Math.atan2(a, b));
      }, d.prototype.cos = function (a) {
        return Math.cos(this._toRadians(a));
      }, d.prototype.sin = function (a) {
        return Math.sin(this._toRadians(a));
      }, d.prototype.tan = function (a) {
        return Math.tan(this._toRadians(a));
      }, d.prototype.degrees = function (a) {
        return a * e.RAD_TO_DEG;
      }, d.prototype.radians = function (a) {
        return a * e.DEG_TO_RAD;
      }, d.prototype.angleMode = function (a) {
        a !== e.DEGREES && a !== e.RADIANS || (this._angleMode = a);
      }, d.prototype._toRadians = function (a) {
        return this._angleMode === e.DEGREES ? a * e.DEG_TO_RAD : a;
      }, d.prototype._toDegrees = function (a) {
        return this._angleMode === e.RADIANS ? a * e.RAD_TO_DEG : a;
      }, d.prototype._fromRadians = function (a) {
        return this._angleMode === e.DEGREES ? a * e.RAD_TO_DEG : a;
      }, b.exports = d;
    }, { "../core/constants": 18, "../core/main": 24 }], 57: [function (a, b, c) {
      "use strict";
      var d = a("../core/main");d.prototype.textAlign = function (a, b) {
        return d._validateParameters("textAlign", arguments), this._renderer.textAlign.apply(this._renderer, arguments);
      }, d.prototype.textLeading = function (a) {
        return d._validateParameters("textLeading", arguments), this._renderer.textLeading.apply(this._renderer, arguments);
      }, d.prototype.textSize = function (a) {
        return d._validateParameters("textSize", arguments), this._renderer.textSize.apply(this._renderer, arguments);
      }, d.prototype.textStyle = function (a) {
        return d._validateParameters("textStyle", arguments), this._renderer.textStyle.apply(this._renderer, arguments);
      }, d.prototype.textWidth = function (a) {
        return d._validateParameters("textWidth", arguments), 0 === a.length ? 0 : this._renderer.textWidth.apply(this._renderer, arguments);
      }, d.prototype.textAscent = function () {
        return d._validateParameters("textAscent", arguments), this._renderer.textAscent();
      }, d.prototype.textDescent = function () {
        return d._validateParameters("textDescent", arguments), this._renderer.textDescent();
      }, d.prototype._updateTextMetrics = function () {
        return this._renderer._updateTextMetrics();
      }, b.exports = d;
    }, { "../core/main": 24 }], 58: [function (a, b, c) {
      "use strict";
      var d = a("../core/main"),
          e = a("../core/constants"),
          f = a("opentype.js");a("../core/error_helpers"), d.prototype.loadFont = function (a, b, c) {
        d._validateParameters("loadFont", arguments);var e = new d.Font(this),
            g = this;return f.load(a, function (f, h) {
          if (f) return void 0 !== c ? c(f) : (d._friendlyFileLoadError(4, a), void console.error(f, a));e.font = h, void 0 !== b && b(e), g._decrementPreload();var i,
              j,
              k = ["ttf", "otf", "woff", "woff2"],
              l = a.split("\\").pop().split("/").pop(),
              m = l.lastIndexOf("."),
              n = m < 1 ? null : l.substr(m + 1);k.indexOf(n) > -1 && (i = l.substr(0, m), j = document.createElement("style"), j.appendChild(document.createTextNode("\n@font-face {\nfont-family: " + i + ";\nsrc: url(" + a + ");\n}\n")), document.head.appendChild(j));
        }), e;
      }, d.prototype.text = function (a, b, c, e, f) {
        return d._validateParameters("text", arguments), this._renderer._doFill || this._renderer._doStroke ? this._renderer.text.apply(this._renderer, arguments) : this;
      }, d.prototype.textFont = function (a, b) {
        if (d._validateParameters("textFont", arguments), arguments.length) {
          if (!a) throw new Error("null font passed to textFont");return this._renderer._setProperty("_textFont", a), b && (this._renderer._setProperty("_textSize", b), this._renderer._setProperty("_textLeading", b * e._DEFAULT_LEADMULT)), this._renderer._applyTextProperties();
        }return this._renderer._textFont;
      }, b.exports = d;
    }, { "../core/constants": 18, "../core/error_helpers": 20, "../core/main": 24, "opentype.js": 10 }], 59: [function (a, b, c) {
      "use strict";
      function d(a, b) {
        for (var c = h(b, { sampleFactor: .1, simplifyThreshold: 0 }), d = n(a, 0, 1), f = d / (d * c.sampleFactor), g = [], i = 0; i < d; i += f) {
          g.push(n(a, i));
        }return c.simplifyThreshold && e(g, c.simplifyThreshold), g;
      }function e(a, b) {
        b = void 0 === b ? 0 : b;for (var c = 0, d = a.length - 1; a.length > 3 && d >= 0; --d) {
          j(i(a, d - 1), i(a, d), i(a, d + 1), b) && (a.splice(d % a.length, 1), c++);
        }return c;
      }function f(a) {
        for (var b, c = [], d = 0; d < a.length; d++) {
          "M" === a[d].type && (b && c.push(b), b = []), b.push(g(a[d]));
        }return c.push(b), c;
      }function g(a) {
        var b = [a.type];return "M" === a.type || "L" === a.type ? b.push(a.x, a.y) : "C" === a.type ? b.push(a.x1, a.y1, a.x2, a.y2, a.x, a.y) : "Q" === a.type && b.push(a.x1, a.y1, a.x, a.y), b;
      }function h(a, b) {
        if ("object" != (typeof a === "undefined" ? "undefined" : _typeof(a))) a = b;else for (var c in b) {
          void 0 === a[c] && (a[c] = b[c]);
        }return a;
      }function i(a, b) {
        var c = a.length;return a[b < 0 ? b % c + c : b % c];
      }function j(a, b, c, d) {
        if (!d) return 0 === k(a, b, c);void 0 === j.tmpPoint1 && (j.tmpPoint1 = [], j.tmpPoint2 = []);var e = j.tmpPoint1,
            f = j.tmpPoint2;e.x = b.x - a.x, e.y = b.y - a.y, f.x = c.x - b.x, f.y = c.y - b.y;var g = e.x * f.x + e.y * f.y,
            h = Math.sqrt(e.x * e.x + e.y * e.y),
            i = Math.sqrt(f.x * f.x + f.y * f.y);return Math.acos(g / (h * i)) < d;
      }function k(a, b, c) {
        return (b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1]);
      }function l(a, b, c, d, e, f, g, h, i) {
        var j = 1 - i,
            k = Math.pow(j, 3),
            l = Math.pow(j, 2),
            m = i * i,
            n = m * i,
            o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
            p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
            q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
            r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
            s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
            t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
            u = j * a + i * c,
            v = j * b + i * d,
            w = j * e + i * g,
            x = j * f + i * h,
            y = 90 - 180 * Math.atan2(q - s, r - t) / Math.PI;return (q > s || r < t) && (y += 180), { x: o, y: p, m: { x: q, y: r }, n: { x: s, y: t }, start: { x: u, y: v }, end: { x: w, y: x }, alpha: y };
      }function m(a, b, c, d, e, f, g, h, i) {
        return null == i ? u(a, b, c, d, e, f, g, h) : l(a, b, c, d, e, f, g, h, v(a, b, c, d, e, f, g, h, i));
      }function n(a, b, c) {
        a = p(a);for (var d, e, f, g, h, i = "", j = {}, k = 0, n = 0, o = a.length; n < o; n++) {
          if (f = a[n], "M" === f[0]) d = +f[1], e = +f[2];else {
            if (g = m(d, e, f[1], f[2], f[3], f[4], f[5], f[6]), k + g > b && !c) return h = m(d, e, f[1], f[2], f[3], f[4], f[5], f[6], b - k), { x: h.x, y: h.y, alpha: h.alpha };k += g, d = +f[5], e = +f[6];
          }i += f.shift() + f;
        }return j.end = i, h = c ? k : l(d, e, f[0], f[1], f[2], f[3], f[4], f[5], 1), h.alpha && (h = { x: h.x, y: h.y, alpha: h.alpha }), h;
      }function o(a) {
        var b = [],
            c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0;if (!a) return b;"M" === a[0][0] && (c = +a[0][1], d = +a[0][2], e = c, f = d, g++, b[0] = ["M", c, d]);for (var h, i, j, k = 3 === a.length && "M" === a[0][0] && "R" === a[1][0].toUpperCase() && "Z" === a[2][0].toUpperCase(), l = g, m = a.length; l < m; l++) {
          if (b.push(i = []), j = a[l], j[0] !== String.prototype.toUpperCase.call(j[0])) switch (i[0] = String.prototype.toUpperCase.call(j[0]), i[0]) {case "A":
              i[1] = j[1], i[2] = j[2], i[3] = j[3], i[4] = j[4], i[5] = j[5], i[6] = +(j[6] + c), i[7] = +(j[7] + d);break;case "V":
              i[1] = +j[1] + d;break;case "H":
              i[1] = +j[1] + c;break;case "R":
              h = [c, d].concat(j.slice(1));for (var n = 2, o = h.length; n < o; n++) {
                h[n] = +h[n] + c, h[++n] = +h[n] + d;
              }b.pop(), b = b.concat(r(h, k));break;case "M":
              e = +j[1] + c, f = +j[2] + d;break;default:
              for (n = 1, o = j.length; n < o; n++) {
                i[n] = +j[n] + (n % 2 ? c : d);
              }} else if ("R" === j[0]) h = [c, d].concat(j.slice(1)), b.pop(), b = b.concat(r(h, k)), i = ["R"].concat(j.slice(-2));else for (var p = 0, q = j.length; p < q; p++) {
            i[p] = j[p];
          }switch (i[0]) {case "Z":
              c = e, d = f;break;case "H":
              c = i[1];break;case "V":
              d = i[1];break;case "M":
              e = i[i.length - 2], f = i[i.length - 1];break;default:
              c = i[i.length - 2], d = i[i.length - 1];}
        }return b;
      }function p(a, b) {
        var c,
            d = o(a),
            e = b && o(b),
            f = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
            g = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
            h = [],
            i = [],
            j = function j(a, b, c) {
          var d,
              e,
              f = { T: 1, Q: 1 };if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];switch (a[0] in f || (b.qx = b.qy = null), a[0]) {case "M":
              b.X = a[1], b.Y = a[2];break;case "A":
              a = ["C"].concat(q.apply(0, [b.x, b.y].concat(a.slice(1))));break;case "S":
              "C" === c || "S" === c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e].concat(a.slice(1));break;case "T":
              "Q" === c || "T" === c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"].concat(t(b.x, b.y, b.qx, b.qy, a[1], a[2]));break;case "Q":
              b.qx = a[1], b.qy = a[2], a = ["C"].concat(t(b.x, b.y, a[1], a[2], a[3], a[4]));break;case "L":
              a = ["C"].concat(s(b.x, b.y, a[1], a[2]));break;case "H":
              a = ["C"].concat(s(b.x, b.y, a[1], b.y));break;case "V":
              a = ["C"].concat(s(b.x, b.y, b.x, a[1]));break;case "Z":
              a = ["C"].concat(s(b.x, b.y, b.X, b.Y));}return a;
        },
            k = function k(a, b) {
          if (a[b].length > 7) {
            a[b].shift();for (var f = a[b]; f.length;) {
              h[b] = "A", e && (i[b] = "A"), a.splice(b++, 0, ["C"].concat(f.splice(0, 6)));
            }a.splice(b, 1), c = Math.max(d.length, e && e.length || 0);
          }
        },
            l = function l(a, b, f, g, h) {
          a && b && "M" === a[h][0] && "M" !== b[h][0] && (b.splice(h, 0, ["M", g.x, g.y]), f.bx = 0, f.by = 0, f.x = a[h][1], f.y = a[h][2], c = Math.max(d.length, e && e.length || 0));
        },
            m = "",
            n = "";c = Math.max(d.length, e && e.length || 0);for (var p = 0; p < c; p++) {
          d[p] && (m = d[p][0]), "C" !== m && (h[p] = m, p && (n = h[p - 1])), d[p] = j(d[p], f, n), "A" !== h[p] && "C" === m && (h[p] = "C"), k(d, p), e && (e[p] && (m = e[p][0]), "C" !== m && (i[p] = m, p && (n = i[p - 1])), e[p] = j(e[p], g, n), "A" !== i[p] && "C" === m && (i[p] = "C"), k(e, p)), l(d, e, f, g, p), l(e, d, g, f, p);var r = d[p],
              u = e && e[p],
              v = r.length,
              w = e && u.length;f.x = r[v - 2], f.y = r[v - 1], f.bx = parseFloat(r[v - 4]) || f.x, f.by = parseFloat(r[v - 3]) || f.y, g.bx = e && (parseFloat(u[w - 4]) || g.x), g.by = e && (parseFloat(u[w - 3]) || g.y), g.x = e && u[w - 2], g.y = e && u[w - 1];
        }return e ? [d, e] : d;
      }function q(a, b, c, d, e, f, g, h, i, j) {
        var k,
            l,
            m,
            n,
            o,
            p = Math.PI,
            r = 120 * p / 180,
            s = p / 180 * (+e || 0),
            t = [],
            u = function u(a, b, c) {
          return { x: a * Math.cos(c) - b * Math.sin(c), y: a * Math.sin(c) + b * Math.cos(c) };
        };if (j) k = j[0], l = j[1], m = j[2], n = j[3];else {
          o = u(a, b, -s), a = o.x, b = o.y, o = u(h, i, -s), h = o.x, i = o.y;var v = (a - h) / 2,
              w = (b - i) / 2,
              x = v * v / (c * c) + w * w / (d * d);x > 1 && (x = Math.sqrt(x), c *= x, d *= x);var y = c * c,
              z = d * d,
              A = (f === g ? -1 : 1) * Math.sqrt(Math.abs((y * z - y * w * w - z * v * v) / (y * w * w + z * v * v)));m = A * c * w / d + (a + h) / 2, n = A * -d * v / c + (b + i) / 2, k = Math.asin(((b - n) / d).toFixed(9)), l = Math.asin(((i - n) / d).toFixed(9)), k = a < m ? p - k : k, l = h < m ? p - l : l, k < 0 && (k = 2 * p + k), l < 0 && (l = 2 * p + l), g && k > l && (k -= 2 * p), !g && l > k && (l -= 2 * p);
        }var B = l - k;if (Math.abs(B) > r) {
          var C = l,
              D = h,
              E = i;l = k + r * (g && l > k ? 1 : -1), h = m + c * Math.cos(l), i = n + d * Math.sin(l), t = q(h, i, c, d, e, 0, g, D, E, [l, C, m, n]);
        }B = l - k;var F = Math.cos(k),
            G = Math.sin(k),
            H = Math.cos(l),
            I = Math.sin(l),
            J = Math.tan(B / 4),
            K = 4 / 3 * c * J,
            L = 4 / 3 * d * J,
            M = [a, b],
            N = [a + K * G, b - L * F],
            O = [h + K * I, i - L * H],
            P = [h, i];if (N[0] = 2 * M[0] - N[0], N[1] = 2 * M[1] - N[1], j) return [N, O, P].concat(t);t = [N, O, P].concat(t).join().split(",");for (var Q = [], R = 0, S = t.length; R < S; R++) {
          Q[R] = R % 2 ? u(t[R - 1], t[R], s).y : u(t[R], t[R + 1], s).x;
        }return Q;
      }function r(a, b) {
        for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
          var f = [{ x: +a[d - 2], y: +a[d - 1] }, { x: +a[d], y: +a[d + 1] }, { x: +a[d + 2], y: +a[d + 3] }, { x: +a[d + 4], y: +a[d + 5] }];b ? d ? e - 4 === d ? f[3] = { x: +a[0], y: +a[1] } : e - 2 === d && (f[2] = { x: +a[0], y: +a[1] }, f[3] = { x: +a[2], y: +a[3] }) : f[0] = { x: +a[e - 2], y: +a[e - 1] } : e - 4 === d ? f[3] = f[2] : d || (f[0] = { x: +a[d], y: +a[d + 1] }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y]);
        }return c;
      }function s(a, b, c, d) {
        return [a, b, c, d, c, d];
      }function t(a, b, c, d, e, f) {
        var g = 1 / 3,
            h = 2 / 3;return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f];
      }function u(a, b, c, d, e, f, g, h, i) {
        null == i && (i = 1), i = i > 1 ? 1 : i < 0 ? 0 : i;for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], m = 0, n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0; o < k; o++) {
          var p = j * l[o] + j,
              q = w(p, a, c, e, g),
              r = w(p, b, d, f, h),
              s = q * q + r * r;m += n[o] * Math.sqrt(s);
        }return j * m;
      }function v(a, b, c, d, e, f, g, h, i) {
        if (!(i < 0 || u(a, b, c, d, e, f, g, h) < i)) {
          var j,
              k = 1,
              l = k / 2,
              m = k - l,
              n = .01;for (j = u(a, b, c, d, e, f, g, h, m); Math.abs(j - i) > n;) {
            l /= 2, m += (j < i ? 1 : -1) * l, j = u(a, b, c, d, e, f, g, h, m);
          }return m;
        }
      }function w(a, b, c, d, e) {
        return a * (a * (-3 * b + 9 * c - 9 * d + 3 * e) + 6 * b - 12 * c + 6 * d) - 3 * b + 3 * c;
      }function x() {
        for (var a = "", b = arguments.length - 1; b >= 0; --b) {
          var c = arguments[b];a += c === Object(c) ? JSON.stringify(c) : c;
        }return a;
      }var y = a("../core/main"),
          z = a("../core/constants");y.Font = function (a) {
        this.parent = a, this.cache = {}, this.font = void 0;
      }, y.Font.prototype.list = function () {
        throw new Error("not yet implemented");
      }, y.Font.prototype.textBounds = function (a, b, c, d, e) {
        b = void 0 !== b ? b : 0, c = void 0 !== c ? c : 0, d = d || this.parent._renderer._textSize;var f = e && e.renderer && e.renderer._pInst || this.parent,
            g = f._renderer,
            h = g._textAlign || z.LEFT,
            i = g._textBaseline || z.BASELINE,
            j = x("textBounds", a, b, c, d, h, i),
            k = this.cache[j];if (!k) {
          var l,
              m,
              n,
              o,
              p,
              q = [],
              r = [],
              s = this._scale(d);this.font.forEachGlyph(a, b, c, d, e, function (a, b, c, d) {
            var e = a.getMetrics();q.push(b + e.xMin * s), q.push(b + e.xMax * s), r.push(c + -e.yMin * s), r.push(c + -e.yMax * s);
          }), l = Math.min.apply(null, q), m = Math.min.apply(null, r), n = Math.max.apply(null, q), o = Math.max.apply(null, r), k = { x: l, y: m, h: o - m, w: n - l, advance: l - b }, p = this._handleAlignment(g, a, k.x, k.y, k.w + k.advance), k.x = p.x, k.y = p.y, this.cache[x("textBounds", a, b, c, d, h, i)] = k;
        }return k;
      }, y.Font.prototype.textToPoints = function (a, b, c, e, g) {
        function h(b) {
          return k[b].name && "space" === k[b].name || a.length === k.length && " " === a[b] || k[b].index && 3 === k[b].index;
        }var i = 0,
            j = [],
            k = this._getGlyphs(a);e = e || this.parent._renderer._textSize;for (var l = 0; l < k.length; l++) {
          if (!h(l)) for (var m = k[l].getPath(b, c, e), n = f(m.commands), o = 0; o < n.length; o++) {
            for (var p = d(n[o], g), q = 0; q < p.length; q++) {
              p[q].x += i, j.push(p[q]);
            }
          }i += k[l].advanceWidth * this._scale(e);
        }return j;
      }, y.Font.prototype._getGlyphs = function (a) {
        return this.font.stringToGlyphs(a);
      }, y.Font.prototype._getPath = function (a, b, c, d) {
        var e = d && d.renderer && d.renderer._pInst || this.parent,
            f = e._renderer,
            g = this._handleAlignment(f, a, b, c);return this.font.getPath(a, g.x, g.y, f._textSize, d);
      }, y.Font.prototype._getPathData = function (a, b, c, d) {
        var e = 3;return "string" == typeof a && arguments.length > 2 ? a = this._getPath(a, b, c, d) : "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (d = b), d && "number" == typeof d.decimals && (e = d.decimals), a.toPathData(e);
      }, y.Font.prototype._getSVG = function (a, b, c, d) {
        var e = 3;return "string" == typeof a && arguments.length > 2 ? a = this._getPath(a, b, c, d) : "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (d = b), d && ("number" == typeof d.decimals && (e = d.decimals), "number" == typeof d.strokeWidth && (a.strokeWidth = d.strokeWidth), void 0 !== d.fill && (a.fill = d.fill), void 0 !== d.stroke && (a.stroke = d.stroke)), a.toSVG(e);
      }, y.Font.prototype._renderPath = function (a, b, c, d) {
        var e,
            f = d && d.renderer || this.parent._renderer,
            g = f.drawingContext;e = "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && a.commands ? a.commands : this._getPath(a, b, c, d).commands, g.beginPath();for (var h = 0; h < e.length; h += 1) {
          var i = e[h];"M" === i.type ? g.moveTo(i.x, i.y) : "L" === i.type ? g.lineTo(i.x, i.y) : "C" === i.type ? g.bezierCurveTo(i.x1, i.y1, i.x2, i.y2, i.x, i.y) : "Q" === i.type ? g.quadraticCurveTo(i.x1, i.y1, i.x, i.y) : "Z" === i.type && g.closePath();
        }return f._doStroke && f._strokeSet && g.stroke(), f._doFill && (f._fillSet || f._setFill(z._DEFAULT_TEXT_FILL), g.fill()), this;
      }, y.Font.prototype._textWidth = function (a, b) {
        return this.font.getAdvanceWidth(a, b);
      }, y.Font.prototype._textAscent = function (a) {
        return this.font.ascender * this._scale(a);
      }, y.Font.prototype._textDescent = function (a) {
        return -this.font.descender * this._scale(a);
      }, y.Font.prototype._scale = function (a) {
        return 1 / this.font.unitsPerEm * (a || this.parent._renderer._textSize);
      }, y.Font.prototype._handleAlignment = function (a, b, c, d, e) {
        var f = a._textSize;switch (void 0 === e && (e = this._textWidth(b, f)), a._textAlign) {case z.CENTER:
            c -= e / 2;break;case z.RIGHT:
            c -= e;}switch (a._textBaseline) {case z.TOP:
            d += this._textAscent(f);break;case z.CENTER:
            d += this._textAscent(f) / 2;break;case z.BOTTOM:
            d -= this._textDescent(f);}return { x: c, y: d };
      }, b.exports = y;
    }, { "../core/constants": 18, "../core/main": 24 }], 60: [function (a, b, c) {
      "use strict";
      var d = a("../core/main");d.prototype.append = function (a, b) {
        return a.push(b), a;
      }, d.prototype.arrayCopy = function (a, b, c, d, e) {
        var f, g;void 0 !== e ? (g = Math.min(e, a.length), f = d, a = a.slice(b, g + b)) : (void 0 !== c ? (g = c, g = Math.min(g, a.length)) : g = a.length, f = 0, c = b, a = a.slice(0, g)), Array.prototype.splice.apply(c, [f, g].concat(a));
      }, d.prototype.concat = function (a, b) {
        return a.concat(b);
      }, d.prototype.reverse = function (a) {
        return a.reverse();
      }, d.prototype.shorten = function (a) {
        return a.pop(), a;
      }, d.prototype.shuffle = function (a, b) {
        var c = ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(a);a = b || c ? a : a.slice();for (var d, e, f = a.length; f > 1;) {
          d = Math.random() * f | 0, e = a[--f], a[f] = a[d], a[d] = e;
        }return a;
      }, d.prototype.sort = function (a, b) {
        var c = b ? a.slice(0, Math.min(b, a.length)) : a,
            d = b ? a.slice(Math.min(b, a.length)) : [];return c = "string" == typeof c[0] ? c.sort() : c.sort(function (a, b) {
          return a - b;
        }), c.concat(d);
      }, d.prototype.splice = function (a, b, c) {
        return Array.prototype.splice.apply(a, [c, 0].concat(b)), a;
      }, d.prototype.subset = function (a, b, c) {
        return void 0 !== c ? a.slice(b, b + c) : a.slice(b, a.length);
      }, b.exports = d;
    }, { "../core/main": 24 }], 61: [function (a, b, c) {
      "use strict";
      var d = a("../core/main");d.prototype.float = function (a) {
        return a instanceof Array ? a.map(parseFloat) : parseFloat(a);
      }, d.prototype.int = function (a, b) {
        return b = b || 10, "string" == typeof a ? parseInt(a, b) : "number" == typeof a ? 0 | a : "boolean" == typeof a ? a ? 1 : 0 : a instanceof Array ? a.map(function (a) {
          return d.prototype.int(a, b);
        }) : void 0;
      }, d.prototype.str = function (a) {
        return a instanceof Array ? a.map(d.prototype.str) : String(a);
      }, d.prototype.boolean = function (a) {
        return "number" == typeof a ? 0 !== a : "string" == typeof a ? "true" === a.toLowerCase() : "boolean" == typeof a ? a : a instanceof Array ? a.map(d.prototype.boolean) : void 0;
      }, d.prototype.byte = function (a) {
        var b = d.prototype.int(a, 10);return "number" == typeof b ? (b + 128) % 256 - 128 : b instanceof Array ? b.map(d.prototype.byte) : void 0;
      }, d.prototype.char = function (a) {
        return "number" != typeof a || isNaN(a) ? a instanceof Array ? a.map(d.prototype.char) : "string" == typeof a ? d.prototype.char(parseInt(a, 10)) : void 0 : String.fromCharCode(a);
      }, d.prototype.unchar = function (a) {
        return "string" == typeof a && 1 === a.length ? a.charCodeAt(0) : a instanceof Array ? a.map(d.prototype.unchar) : void 0;
      }, d.prototype.hex = function (a, b) {
        if (b = void 0 === b || null === b ? b = 8 : b, a instanceof Array) return a.map(function (a) {
          return d.prototype.hex(a, b);
        });if ("number" == typeof a) {
          a < 0 && (a = 4294967295 + a + 1);for (var c = Number(a).toString(16).toUpperCase(); c.length < b;) {
            c = "0" + c;
          }return c.length >= b && (c = c.substring(c.length - b, c.length)), c;
        }
      }, d.prototype.unhex = function (a) {
        return a instanceof Array ? a.map(d.prototype.unhex) : parseInt("0x" + a, 16);
      }, b.exports = d;
    }, { "../core/main": 24 }], 62: [function (a, b, c) {
      "use strict";
      function d(a, b, c) {
        var d = a < 0,
            e = d ? a.toString().substring(1) : a.toString(),
            f = e.indexOf("."),
            g = -1 !== f ? e.substring(0, f) : e,
            h = -1 !== f ? e.substring(f + 1) : "",
            i = d ? "-" : "";if (void 0 !== c) {
          var j = "";(-1 !== f || c - h.length > 0) && (j = "."), h.length > c && (h = h.substring(0, c));for (var k = 0; k < b - g.length; k++) {
            i += "0";
          }i += g, i += j, i += h;for (var l = 0; l < c - h.length; l++) {
            i += "0";
          }return i;
        }for (var m = 0; m < Math.max(b - g.length, 0); m++) {
          i += "0";
        }return i += e;
      }function e(a, b) {
        a = a.toString();var c = a.indexOf("."),
            d = -1 !== c ? a.substring(c) : "",
            e = -1 !== c ? a.substring(0, c) : a;if (e = e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 0 === b) d = "";else if (void 0 !== b) if (b > d.length) {
          d += -1 === c ? "." : "";for (var f = b - d.length + 1, g = 0; g < f; g++) {
            d += "0";
          }
        } else d = d.substring(0, b + 1);return e + d;
      }function f(a) {
        return parseFloat(a) > 0 ? "+" + a.toString() : a.toString();
      }function g(a) {
        return parseFloat(a) > 0 ? " " + a.toString() : a.toString();
      }var h = a("../core/main");a("../core/error_helpers"), h.prototype.join = function (a, b) {
        return h._validateParameters("join", arguments), a.join(b);
      }, h.prototype.match = function (a, b) {
        return h._validateParameters("match", arguments), a.match(b);
      }, h.prototype.matchAll = function (a, b) {
        h._validateParameters("matchAll", arguments);for (var c = new RegExp(b, "g"), d = c.exec(a), e = []; null !== d;) {
          e.push(d), d = c.exec(a);
        }return e;
      }, h.prototype.nf = function (a, b, c) {
        return h._validateParameters("nf", arguments), a instanceof Array ? a.map(function (a) {
          return d(a, b, c);
        }) : "[object Arguments]" === Object.prototype.toString.call(a) ? 3 === a.length ? this.nf(a[0], a[1], a[2]) : 2 === a.length ? this.nf(a[0], a[1]) : this.nf(a[0]) : d(a, b, c);
      }, h.prototype.nfc = function (a, b) {
        return h._validateParameters("nfc", arguments), a instanceof Array ? a.map(function (a) {
          return e(a, b);
        }) : e(a, b);
      }, h.prototype.nfp = function () {
        h._validateParameters("nfp", arguments);var a = h.prototype.nf.apply(this, arguments);return a instanceof Array ? a.map(f) : f(a);
      }, h.prototype.nfs = function () {
        h._validateParameters("nfs", arguments);var a = h.prototype.nf.apply(this, arguments);return a instanceof Array ? a.map(g) : g(a);
      }, h.prototype.split = function (a, b) {
        return h._validateParameters("split", arguments), a.split(b);
      }, h.prototype.splitTokens = function (a, b) {
        h._validateParameters("splitTokens", arguments);var c;if (void 0 !== b) {
          var d = b,
              e = /\]/g.exec(d),
              f = /\[/g.exec(d);f && e ? (d = d.slice(0, e.index) + d.slice(e.index + 1), f = /\[/g.exec(d), d = d.slice(0, f.index) + d.slice(f.index + 1), c = new RegExp("[\\[" + d + "\\]]", "g")) : e ? (d = d.slice(0, e.index) + d.slice(e.index + 1), c = new RegExp("[" + d + "\\]]", "g")) : f ? (d = d.slice(0, f.index) + d.slice(f.index + 1), c = new RegExp("[" + d + "\\[]", "g")) : c = new RegExp("[" + d + "]", "g");
        } else c = /\s/g;return a.split(c).filter(function (a) {
          return a;
        });
      }, h.prototype.trim = function (a) {
        return h._validateParameters("trim", arguments), a instanceof Array ? a.map(this.trim) : a.trim();
      }, b.exports = h;
    }, { "../core/error_helpers": 20, "../core/main": 24 }], 63: [function (a, b, c) {
      "use strict";
      var d = a("../core/main");d.prototype.day = function () {
        return new Date().getDate();
      }, d.prototype.hour = function () {
        return new Date().getHours();
      }, d.prototype.minute = function () {
        return new Date().getMinutes();
      }, d.prototype.millis = function () {
        return window.performance.now();
      }, d.prototype.month = function () {
        return new Date().getMonth() + 1;
      }, d.prototype.second = function () {
        return new Date().getSeconds();
      }, d.prototype.year = function () {
        return new Date().getFullYear();
      }, b.exports = d;
    }, { "../core/main": 24 }], 64: [function (a, b, c) {
      "use strict";
      var d = a("../core/main");a("./p5.Geometry");var e = a("../core/constants");d.prototype.plane = function (a, b, c, e) {
        this._assert3d("plane"), d._validateParameters("plane", arguments), void 0 === a && (a = 50), void 0 === b && (b = a), void 0 === c && (c = 1), void 0 === e && (e = 1);var f = "plane|" + c + "|" + e;if (!this._renderer.geometryInHash(f)) {
          var g = function g() {
            for (var a, b, c, e = 0; e <= this.detailY; e++) {
              b = e / this.detailY;for (var f = 0; f <= this.detailX; f++) {
                a = f / this.detailX, c = new d.Vector(a - .5, b - .5, 0), this.vertices.push(c), this.uvs.push(a, b);
              }
            }
          },
              h = new d.Geometry(c, e, g);h.computeFaces().computeNormals(), c <= 1 && e <= 1 ? h._makeTriangleEdges()._edgesToVertices() : console.log("Cannot draw stroke on plane objects with more than 1 detailX or 1 detailY"), this._renderer.createBuffers(f, h);
        }return this._renderer.drawBuffersScaled(f, a, b, 1), this;
      }, d.prototype.box = function (a, b, c, e, f) {
        this._assert3d("box"), d._validateParameters("box", arguments), void 0 === a && (a = 50), void 0 === b && (b = a), void 0 === c && (c = b);var g = this._renderer.attributes && this._renderer.attributes.perPixelLighting;void 0 === e && (e = g ? 1 : 4), void 0 === f && (f = g ? 1 : 4);var h = "box|" + e + "|" + f;if (!this._renderer.geometryInHash(h)) {
          var i = function i() {
            var a = [[0, 4, 2, 6], [1, 3, 5, 7], [0, 1, 4, 5], [2, 6, 3, 7], [0, 2, 1, 3], [4, 5, 6, 7]];this.strokeIndices = [[0, 1], [1, 3], [3, 2], [6, 7], [8, 9], [9, 11], [14, 15], [16, 17], [17, 19], [18, 19], [20, 21], [22, 23]];for (var b = 0; b < a.length; b++) {
              for (var c = a[b], e = 4 * b, f = 0; f < 4; f++) {
                var g = c[f],
                    h = new d.Vector((2 * (1 & g) - 1) / 2, ((2 & g) - 1) / 2, ((4 & g) / 2 - 1) / 2);this.vertices.push(h), this.uvs.push(1 & f, (2 & f) / 2);
              }this.faces.push([e, e + 1, e + 2]), this.faces.push([e + 2, e + 1, e + 3]);
            }
          },
              j = new d.Geometry(e, f, i);j.computeNormals(), e <= 4 && f <= 4 ? j._makeTriangleEdges()._edgesToVertices() : console.log("Cannot draw stroke on box objects with more than 4 detailX or 4 detailY"), this._renderer.createBuffers(h, j);
        }return this._renderer.drawBuffersScaled(h, a, b, c), this;
      }, d.prototype.sphere = function (a, b, c) {
        return this._assert3d("sphere"), d._validateParameters("sphere", arguments), void 0 === a && (a = 50), void 0 === b && (b = 24), void 0 === c && (c = 16), this.ellipsoid(a, a, a, b, c), this;
      };var f = function f(a, b, c, e, _f, g, h) {
        a = a <= 0 ? 1 : a, b = b < 0 ? 0 : b, c = c <= 0 ? a : c, e = e < 3 ? 3 : e, _f = _f < 1 ? 1 : _f, g = void 0 === g || g, h = void 0 === h ? 0 !== b : h;var i,
            j,
            k,
            l,
            m,
            n = g ? -2 : 0,
            o = _f + (h ? 2 : 0),
            p = {},
            q = Math.atan2(a - b, c);for (i = n; i <= o; ++i) {
          var r,
              s = i / _f,
              t = c * s;for (i < 0 ? (t = 0, s = 0, r = a) : i > _f ? (t = c, s = 1, r = b) : r = a + (b - a) * s, -2 !== i && i !== _f + 2 || (r = 0), t -= c / 2, p[i] = 0 === r ? 1 : e, j = 0; j < p[i]; ++j) {
            var u = j / e;this.vertices.push(new d.Vector(Math.sin(2 * u * Math.PI) * r, t, Math.cos(2 * u * Math.PI) * r)), this.vertexNormals.push(new d.Vector(i < 0 || i > _f ? 0 : Math.sin(2 * u * Math.PI) * Math.cos(q), i < 0 ? -1 : i > _f ? 1 : Math.sin(q), i < 0 || i > _f ? 0 : Math.cos(2 * u * Math.PI) * Math.cos(q))), this.uvs.push(u, s);
          }
        }var v = 0;if (g) {
          for (k = 0; k < p[-1]; ++k) {
            m = (k + 1) % p[-1], this.faces.push([v, v + 1 + m, v + 1 + k]);
          }v += p[-2] + p[-1];
        }for (i = 0; i < _f; ++i) {
          for (j = 0; j < p[i]; ++j) {
            1 === p[i + 1] ? (l = (j + 1) % p[i], this.faces.push([v + j, v + l, v + p[i]])) : (l = (j + 1) % p[i], this.faces.push([v + j, v + l, v + p[i] + l]), this.faces.push([v + j, v + p[i] + l, v + p[i] + j]));
          }v += p[i];
        }if (h) for (v += p[_f], j = 0; j < p[_f + 1]; ++j) {
          l = (j + 1) % p[_f + 1], this.faces.push([v + j, v + l, v + p[_f + 1]]);
        }
      };d.prototype.cylinder = function (a, b, c, e, g, h) {
        this._assert3d("cylinder"), d._validateParameters("cylinder", arguments), void 0 === a && (a = 50), void 0 === b && (b = a), void 0 === c && (c = 24), void 0 === e && (e = 1), void 0 === h && (h = !0), void 0 === g && (g = !0);var i = "cylinder|" + c + "|" + e + "|" + g + "|" + h;if (!this._renderer.geometryInHash(i)) {
          var j = new d.Geometry(c, e);f.call(j, 1, 1, 1, c, e, g, h), j.computeNormals(), c <= 24 && e <= 16 ? j._makeTriangleEdges()._edgesToVertices() : console.log("Cannot draw stroke on cylinder objects with more than 24 detailX or 16 detailY"), this._renderer.createBuffers(i, j);
        }return this._renderer.drawBuffersScaled(i, a, b, a), this;
      }, d.prototype.cone = function (a, b, c, e, g) {
        this._assert3d("cone"), d._validateParameters("cone", arguments), void 0 === a && (a = 50), void 0 === b && (b = a), void 0 === c && (c = 24), void 0 === e && (e = 1), void 0 === g && (g = !0);var h = "cone|" + c + "|" + e + "|" + g;if (!this._renderer.geometryInHash(h)) {
          var i = new d.Geometry(c, e);f.call(i, 1, 0, 1, c, e, g, !1), i.computeNormals(), c <= 24 && e <= 16 ? i._makeTriangleEdges()._edgesToVertices() : console.log("Cannot draw stroke on cone objects with more than 24 detailX or 16 detailY"), this._renderer.createBuffers(h, i);
        }return this._renderer.drawBuffersScaled(h, a, b, a), this;
      }, d.prototype.ellipsoid = function (a, b, c, e, f) {
        this._assert3d("ellipsoid"), d._validateParameters("ellipsoid", arguments), void 0 === a && (a = 50), void 0 === b && (b = a), void 0 === c && (c = a), void 0 === e && (e = 24), void 0 === f && (f = 16);var g = "ellipsoid|" + e + "|" + f;if (!this._renderer.geometryInHash(g)) {
          var h = function h() {
            for (var a = 0; a <= this.detailY; a++) {
              for (var b = a / this.detailY, c = Math.PI * b - Math.PI / 2, e = Math.cos(c), f = Math.sin(c), g = 0; g <= this.detailX; g++) {
                var h = g / this.detailX,
                    i = 2 * Math.PI * h,
                    j = Math.cos(i),
                    k = Math.sin(i),
                    l = new d.Vector(e * k, f, e * j);this.vertices.push(l), this.vertexNormals.push(l), this.uvs.push(h, b);
              }
            }
          },
              i = new d.Geometry(e, f, h);i.computeFaces(), e <= 24 && f <= 24 ? i._makeTriangleEdges()._edgesToVertices() : console.log("Cannot draw stroke on ellipsoids with more than 24 detailX or 24 detailY"), this._renderer.createBuffers(g, i);
        }return this._renderer.drawBuffersScaled(g, a, b, c), this;
      }, d.prototype.torus = function (a, b, c, e) {
        if (this._assert3d("torus"), d._validateParameters("torus", arguments), void 0 === a) a = 50;else if (!a) return;if (void 0 === b) b = 10;else if (!b) return;void 0 === c && (c = 24), void 0 === e && (e = 16);var f = (b / a).toPrecision(4),
            g = "torus|" + f + "|" + c + "|" + e;if (!this._renderer.geometryInHash(g)) {
          var h = function h() {
            for (var a = 0; a <= this.detailY; a++) {
              for (var b = a / this.detailY, c = 2 * Math.PI * b, e = Math.cos(c), g = Math.sin(c), h = 1 + f * e, i = 0; i <= this.detailX; i++) {
                var j = i / this.detailX,
                    k = 2 * Math.PI * j,
                    l = Math.cos(k),
                    m = Math.sin(k),
                    n = new d.Vector(h * l, h * m, f * g),
                    o = new d.Vector(e * l, e * m, g);this.vertices.push(n), this.vertexNormals.push(o), this.uvs.push(j, b);
              }
            }
          },
              i = new d.Geometry(c, e, h);i.computeFaces(), c <= 24 && e <= 16 ? i._makeTriangleEdges()._edgesToVertices() : console.log("Cannot draw strokes on torus object with more than 24 detailX or 16 detailY"), this._renderer.createBuffers(g, i);
        }return this._renderer.drawBuffersScaled(g, a, a, a), this;
      }, d.RendererGL.prototype.point = function (a, b, c) {
        this._usePointShader(), this.curPointShader.bindShader(), void 0 === c && (c = 0);var e = [];return e.push(new d.Vector(a, b, c)), this._drawPoints(e, this._pointVertexBuffer), this.curPointShader.unbindShader(), this;
      }, d.RendererGL.prototype.triangle = function (a) {
        var b = a[0],
            c = a[1],
            e = a[2],
            f = a[3],
            g = a[4],
            h = a[5],
            i = "tri";if (!this.geometryInHash(i)) {
          var j = function j() {
            var a = [];a.push(new d.Vector(0, 0, 0)), a.push(new d.Vector(0, 1, 0)), a.push(new d.Vector(1, 0, 0)), this.strokeIndices = [[0, 1], [1, 2], [2, 0]], this.vertices = a, this.faces = [[0, 1, 2]], this.uvs = [0, 0, 0, 1, 1, 1];
          },
              k = new d.Geometry(1, 1, j);k._makeTriangleEdges()._edgesToVertices(), k.computeNormals(), this.createBuffers(i, k);
        }var l = this.uMVMatrix.copy();try {
          var m = new d.Matrix([e - b, f - c, 0, 0, g - b, h - c, 0, 0, 0, 0, 1, 0, b, c, 0, 1]).mult(this.uMVMatrix);this.uMVMatrix = m, this.drawBuffers(i);
        } finally {
          this.uMVMatrix = l;
        }return this;
      }, d.RendererGL.prototype.ellipse = function (a) {
        this.arc(a[0], a[1], a[2], a[3], 0, e.TWO_PI, e.OPEN, a[4]);
      }, d.RendererGL.prototype.arc = function (a) {
        var b,
            c,
            f = arguments[0],
            g = arguments[1],
            h = arguments[2],
            i = arguments[3],
            j = arguments[4],
            k = arguments[5],
            l = arguments[6],
            m = arguments[7] || 25;if (Math.abs(k - j) >= e.TWO_PI ? (b = "ellipse", c = b + "|" + m + "|") : (b = "arc", c = b + "|" + j + "|" + k + "|" + l + "|" + m + "|"), !this.geometryInHash(c)) {
          var n = function n() {
            if (this.strokeIndices = [], j.toFixed(10) !== k.toFixed(10)) {
              l !== e.PIE && void 0 !== l || (this.vertices.push(new d.Vector(.5, .5, 0)), this.uvs.push([.5, .5]));for (var a = 0; a <= m; a++) {
                var b = a / m,
                    c = (k - j) * b + j,
                    f = .5 + Math.cos(c) / 2,
                    g = .5 + Math.sin(c) / 2;this.vertices.push(new d.Vector(f, g, 0)), this.uvs.push([f, g]), a < m - 1 && (this.faces.push([0, a + 1, a + 2]), this.strokeIndices.push([a + 1, a + 2]));
              }switch (l) {case e.PIE:
                  this.faces.push([0, this.vertices.length - 2, this.vertices.length - 1]), this.strokeIndices.push([0, 1]), this.strokeIndices.push([this.vertices.length - 2, this.vertices.length - 1]), this.strokeIndices.push([0, this.vertices.length - 1]);break;case e.CHORD:
                  this.strokeIndices.push([0, 1]), this.strokeIndices.push([0, this.vertices.length - 1]);break;case e.OPEN:
                  this.strokeIndices.push([0, 1]);break;default:
                  this.faces.push([0, this.vertices.length - 2, this.vertices.length - 1]), this.strokeIndices.push([this.vertices.length - 2, this.vertices.length - 1]);}
            }
          },
              o = new d.Geometry(m, 1, n);o.computeNormals(), m <= 50 ? o._makeTriangleEdges()._edgesToVertices(o) : console.log("Cannot stroke " + b + " with more than 50 detail"), this.createBuffers(c, o);
        }var p = this.uMVMatrix.copy();try {
          this.uMVMatrix.translate([f, g, 0]), this.uMVMatrix.scale(h, i, 1), this.drawBuffers(c);
        } finally {
          this.uMVMatrix = p;
        }return this;
      }, d.RendererGL.prototype.rect = function (a) {
        var b = this.attributes.perPixelLighting,
            c = a[0],
            e = a[1],
            f = a[2],
            g = a[3],
            h = a[4] || (b ? 1 : 24),
            i = a[5] || (b ? 1 : 16),
            j = "rect|" + h + "|" + i;if (!this.geometryInHash(j)) {
          var k = function k() {
            for (var a = 0; a <= this.detailY; a++) {
              for (var b = a / this.detailY, c = 0; c <= this.detailX; c++) {
                var e = c / this.detailX,
                    f = new d.Vector(e, b, 0);this.vertices.push(f), this.uvs.push(e, b);
              }
            }h > 0 && i > 0 && (this.strokeIndices = [[0, h], [h, (h + 1) * (i + 1) - 1], [(h + 1) * (i + 1) - 1, (h + 1) * i], [(h + 1) * i, 0]]);
          },
              l = new d.Geometry(h, i, k);l.computeFaces().computeNormals()._makeTriangleEdges()._edgesToVertices(), this.createBuffers(j, l);
        }var m = this.uMVMatrix.copy();try {
          this.uMVMatrix.translate([c, e, 0]), this.uMVMatrix.scale(f, g, 1), this.drawBuffers(j);
        } finally {
          this.uMVMatrix = m;
        }return this;
      }, d.RendererGL.prototype.quad = function (a, b, c, e, f, g, h, i) {
        var j = "quad|" + a + "|" + b + "|" + c + "|" + e + "|" + f + "|" + g + "|" + h + "|" + i;if (!this.geometryInHash(j)) {
          var k = function k() {
            this.vertices.push(new d.Vector(a, b, 0)), this.vertices.push(new d.Vector(c, e, 0)), this.vertices.push(new d.Vector(f, g, 0)), this.vertices.push(new d.Vector(h, i, 0)), this.uvs.push(0, 0, 1, 0, 1, 1, 0, 1), this.strokeIndices = [[0, 1], [1, 2], [2, 3], [3, 0]];
          },
              l = new d.Geometry(2, 2, k);l.computeNormals()._makeTriangleEdges()._edgesToVertices(), l.faces = [[0, 1, 2], [2, 3, 0]], this.createBuffers(j, l);
        }return this.drawBuffers(j), this;
      }, d.RendererGL.prototype.bezier = function (a, b, c, d, e, f, g, h, i, j, k, l) {
        8 === arguments.length && (j = g, k = h, g = e, h = d, d = c, e = d, c = f = i = l = 0);var m = this._pInst._bezierDetail || 20;this.beginShape();for (var n = 0; n <= m; n++) {
          var o = Math.pow(1 - n / m, 3),
              p = n / m * 3 * Math.pow(1 - n / m, 2),
              q = 3 * Math.pow(n / m, 2) * (1 - n / m),
              r = Math.pow(n / m, 3);this.vertex(a * o + d * p + g * q + j * r, b * o + e * p + h * q + k * r, c * o + f * p + i * q + l * r);
        }return this.endShape(), this;
      }, d.RendererGL.prototype.curve = function (a, b, c, d, e, f, g, h, i, j, k, l) {
        8 === arguments.length && (j = g, k = h, g = e, h = d, d = c, e = d, c = f = i = l = 0);var m = this._pInst._curveDetail;this.beginShape();for (var n = 0; n <= m; n++) {
          var o = .5 * Math.pow(n / m, 3),
              p = .5 * Math.pow(n / m, 2),
              q = n / m * .5,
              r = .5,
              s = o * (3 * d - a - 3 * g + j) + p * (2 * a - 5 * d + 4 * g - j) + q * (-a + g) + r * (2 * d),
              t = o * (3 * e - b - 3 * h + k) + p * (2 * b - 5 * e + 4 * h - k) + q * (-b + h) + r * (2 * e),
              u = o * (3 * f - c - 3 * i + l) + p * (2 * c - 5 * f + 4 * i - l) + q * (-c + i) + r * (2 * f);this.vertex(s, t, u);
        }return this.endShape(), this;
      }, d.RendererGL.prototype.line = function () {
        return 6 === arguments.length ? (this.beginShape(), this.vertex(arguments[0], arguments[1], arguments[2]), this.vertex(arguments[3], arguments[4], arguments[5]), this.endShape()) : 4 === arguments.length && (this.beginShape(), this.vertex(arguments[0], arguments[1], 0), this.vertex(arguments[2], arguments[3], 0), this.endShape()), this;
      }, d.RendererGL.prototype.bezierVertex = function () {
        if (0 === this.immediateMode._bezierVertex.length) throw Error("vertex() must be used once before calling bezierVertex()");var a,
            b,
            c,
            d,
            e,
            f = [],
            g = [],
            h = [],
            i = arguments.length;if (a = 0, 0 === this._lookUpTableBezier.length || this._lutBezierDetail !== this._pInst._curveDetail) {
          this._lookUpTableBezier = [], this._lutBezierDetail = this._pInst._curveDetail;for (var j = 1 / this._lutBezierDetail, k = 0, l = 1, m = 0; k < 1;) {
            if (a = parseFloat(k.toFixed(6)), this._lookUpTableBezier[m] = this._bezierCoefficients(a), l.toFixed(6) === j.toFixed(6)) {
              a = parseFloat(l.toFixed(6)) + parseFloat(k.toFixed(6)), ++m, this._lookUpTableBezier[m] = this._bezierCoefficients(a);break;
            }k += j, l -= j, ++m;
          }
        }var n = this._lookUpTableBezier.length;if (6 === i) {
          for (this.isBezier = !0, f = [this.immediateMode._bezierVertex[0], arguments[0], arguments[2], arguments[4]], g = [this.immediateMode._bezierVertex[1], arguments[1], arguments[3], arguments[5]], e = 0; e < n; e++) {
            b = f[0] * this._lookUpTableBezier[e][0] + f[1] * this._lookUpTableBezier[e][1] + f[2] * this._lookUpTableBezier[e][2] + f[3] * this._lookUpTableBezier[e][3], c = g[0] * this._lookUpTableBezier[e][0] + g[1] * this._lookUpTableBezier[e][1] + g[2] * this._lookUpTableBezier[e][2] + g[3] * this._lookUpTableBezier[e][3], this.vertex(b, c);
          }this.immediateMode._bezierVertex[0] = arguments[4], this.immediateMode._bezierVertex[1] = arguments[5];
        } else if (9 === i) {
          for (this.isBezier = !0, f = [this.immediateMode._bezierVertex[0], arguments[0], arguments[3], arguments[6]], g = [this.immediateMode._bezierVertex[1], arguments[1], arguments[4], arguments[7]], h = [this.immediateMode._bezierVertex[2], arguments[2], arguments[5], arguments[8]], e = 0; e < n; e++) {
            b = f[0] * this._lookUpTableBezier[e][0] + f[1] * this._lookUpTableBezier[e][1] + f[2] * this._lookUpTableBezier[e][2] + f[3] * this._lookUpTableBezier[e][3], c = g[0] * this._lookUpTableBezier[e][0] + g[1] * this._lookUpTableBezier[e][1] + g[2] * this._lookUpTableBezier[e][2] + g[3] * this._lookUpTableBezier[e][3], d = h[0] * this._lookUpTableBezier[e][0] + h[1] * this._lookUpTableBezier[e][1] + h[2] * this._lookUpTableBezier[e][2] + h[3] * this._lookUpTableBezier[e][3], this.vertex(b, c, d);
          }this.immediateMode._bezierVertex[0] = arguments[6], this.immediateMode._bezierVertex[1] = arguments[7], this.immediateMode._bezierVertex[2] = arguments[8];
        }
      }, d.RendererGL.prototype.quadraticVertex = function () {
        if (0 === this.immediateMode._quadraticVertex.length) throw Error("vertex() must be used once before calling quadraticVertex()");var a,
            b,
            c,
            d,
            e,
            f = [],
            g = [],
            h = [],
            i = arguments.length;if (a = 0, 0 === this._lookUpTableQuadratic.length || this._lutQuadraticDetail !== this._pInst._curveDetail) {
          this._lookUpTableQuadratic = [], this._lutQuadraticDetail = this._pInst._curveDetail;for (var j = 1 / this._lutQuadraticDetail, k = 0, l = 1, m = 0; k < 1;) {
            if (a = parseFloat(k.toFixed(6)), this._lookUpTableQuadratic[m] = this._quadraticCoefficients(a), l.toFixed(6) === j.toFixed(6)) {
              a = parseFloat(l.toFixed(6)) + parseFloat(k.toFixed(6)), ++m, this._lookUpTableQuadratic[m] = this._quadraticCoefficients(a);break;
            }k += j, l -= j, ++m;
          }
        }var n = this._lookUpTableQuadratic.length;if (4 === i) {
          for (this.isQuadratic = !0, f = [this.immediateMode._quadraticVertex[0], arguments[0], arguments[2]], g = [this.immediateMode._quadraticVertex[1], arguments[1], arguments[3]], e = 0; e < n; e++) {
            b = f[0] * this._lookUpTableQuadratic[e][0] + f[1] * this._lookUpTableQuadratic[e][1] + f[2] * this._lookUpTableQuadratic[e][2], c = g[0] * this._lookUpTableQuadratic[e][0] + g[1] * this._lookUpTableQuadratic[e][1] + g[2] * this._lookUpTableQuadratic[e][2], this.vertex(b, c);
          }this.immediateMode._quadraticVertex[0] = arguments[2], this.immediateMode._quadraticVertex[1] = arguments[3];
        } else if (6 === i) {
          for (this.isQuadratic = !0, f = [this.immediateMode._quadraticVertex[0], arguments[0], arguments[3]], g = [this.immediateMode._quadraticVertex[1], arguments[1], arguments[4]], h = [this.immediateMode._quadraticVertex[2], arguments[2], arguments[5]], e = 0; e < n; e++) {
            b = f[0] * this._lookUpTableQuadratic[e][0] + f[1] * this._lookUpTableQuadratic[e][1] + f[2] * this._lookUpTableQuadratic[e][2], c = g[0] * this._lookUpTableQuadratic[e][0] + g[1] * this._lookUpTableQuadratic[e][1] + g[2] * this._lookUpTableQuadratic[e][2], d = h[0] * this._lookUpTableQuadratic[e][0] + h[1] * this._lookUpTableQuadratic[e][1] + h[2] * this._lookUpTableQuadratic[e][2], this.vertex(b, c, d);
          }this.immediateMode._quadraticVertex[0] = arguments[3], this.immediateMode._quadraticVertex[1] = arguments[4], this.immediateMode._quadraticVertex[2] = arguments[5];
        }
      }, d.RendererGL.prototype.curveVertex = function () {
        var a,
            b,
            c,
            d,
            e,
            f = [],
            g = [],
            h = [];a = 0;var i = arguments.length;if (0 === this._lookUpTableBezier.length || this._lutBezierDetail !== this._pInst._curveDetail) {
          this._lookUpTableBezier = [], this._lutBezierDetail = this._pInst._curveDetail;for (var j = 1 / this._lutBezierDetail, k = 0, l = 1, m = 0; k < 1;) {
            if (a = parseFloat(k.toFixed(6)), this._lookUpTableBezier[m] = this._bezierCoefficients(a), l.toFixed(6) === j.toFixed(6)) {
              a = parseFloat(l.toFixed(6)) + parseFloat(k.toFixed(6)), ++m, this._lookUpTableBezier[m] = this._bezierCoefficients(a);break;
            }k += j, l -= j, ++m;
          }
        }var n = this._lookUpTableBezier.length;if (2 === i) {
          if (this.immediateMode._curveVertex.push(arguments[0]), this.immediateMode._curveVertex.push(arguments[1]), 8 === this.immediateMode._curveVertex.length) {
            for (this.isCurve = !0, f = this._bezierToCatmull([this.immediateMode._curveVertex[0], this.immediateMode._curveVertex[2], this.immediateMode._curveVertex[4], this.immediateMode._curveVertex[6]]), g = this._bezierToCatmull([this.immediateMode._curveVertex[1], this.immediateMode._curveVertex[3], this.immediateMode._curveVertex[5], this.immediateMode._curveVertex[7]]), e = 0; e < n; e++) {
              b = f[0] * this._lookUpTableBezier[e][0] + f[1] * this._lookUpTableBezier[e][1] + f[2] * this._lookUpTableBezier[e][2] + f[3] * this._lookUpTableBezier[e][3], c = g[0] * this._lookUpTableBezier[e][0] + g[1] * this._lookUpTableBezier[e][1] + g[2] * this._lookUpTableBezier[e][2] + g[3] * this._lookUpTableBezier[e][3], this.vertex(b, c);
            }for (e = 0; e < i; e++) {
              this.immediateMode._curveVertex.shift();
            }
          }
        } else if (3 === i && (this.immediateMode._curveVertex.push(arguments[0]), this.immediateMode._curveVertex.push(arguments[1]), this.immediateMode._curveVertex.push(arguments[2]), 12 === this.immediateMode._curveVertex.length)) {
          for (this.isCurve = !0, f = this._bezierToCatmull([this.immediateMode._curveVertex[0], this.immediateMode._curveVertex[3], this.immediateMode._curveVertex[6], this.immediateMode._curveVertex[9]]), g = this._bezierToCatmull([this.immediateMode._curveVertex[1], this.immediateMode._curveVertex[4], this.immediateMode._curveVertex[7], this.immediateMode._curveVertex[10]]), h = this._bezierToCatmull([this.immediateMode._curveVertex[2], this.immediateMode._curveVertex[5], this.immediateMode._curveVertex[8], this.immediateMode._curveVertex[11]]), e = 0; e < n; e++) {
            b = f[0] * this._lookUpTableBezier[e][0] + f[1] * this._lookUpTableBezier[e][1] + f[2] * this._lookUpTableBezier[e][2] + f[3] * this._lookUpTableBezier[e][3], c = g[0] * this._lookUpTableBezier[e][0] + g[1] * this._lookUpTableBezier[e][1] + g[2] * this._lookUpTableBezier[e][2] + g[3] * this._lookUpTableBezier[e][3], d = h[0] * this._lookUpTableBezier[e][0] + h[1] * this._lookUpTableBezier[e][1] + h[2] * this._lookUpTableBezier[e][2] + h[3] * this._lookUpTableBezier[e][3], this.vertex(b, c, d);
          }for (e = 0; e < i; e++) {
            this.immediateMode._curveVertex.shift();
          }
        }
      }, b.exports = d;
    }, { "../core/constants": 18, "../core/main": 24, "./p5.Geometry": 70 }], 65: [function (a, b, c) {
      "use strict";
      var d = a("../core/main"),
          e = a("../core/constants");d.prototype.orbitControl = function (a, b) {
        if (this._assert3d("orbitControl"), d._validateParameters("orbitControl", arguments), this.mouseX < this.width && this.mouseX > 0 && this.mouseY < this.height && this.mouseY > 0) {
          var c = this._renderer._curCamera;void 0 === a && (a = 1), void 0 === b && (b = a), !0 !== this.contextMenuDisabled && (this.canvas.oncontextmenu = function () {
            return !1;
          }, this._setProperty("contextMenuDisabled", !0)), !0 !== this.wheelDefaultDisabled && (this.canvas.onwheel = function () {
            return !1;
          }, this._setProperty("wheelDefaultDisabled", !0));var e = this.height < this.width ? this.height : this.width;if (this._mouseWheelDeltaY !== this._pmouseWheelDeltaY && (this._mouseWheelDeltaY > 0 ? this._renderer._curCamera._orbit(0, 0, .5 * e) : this._renderer._curCamera._orbit(0, 0, -.5 * e)), this.mouseIsPressed) if (this.mouseButton === this.LEFT) {
            var f = -a * (this.mouseX - this.pmouseX) / e,
                g = b * (this.mouseY - this.pmouseY) / e;this._renderer._curCamera._orbit(f, g, 0);
          } else if (this.mouseButton === this.RIGHT) {
            var h = c._getLocalAxes(),
                i = Math.sqrt(h.x[0] * h.x[0] + h.x[2] * h.x[2]);0 !== i && (h.x[0] /= i, h.x[2] /= i);var j = Math.sqrt(h.y[0] * h.y[0] + h.y[2] * h.y[2]);0 !== j && (h.y[0] /= j, h.y[2] /= j);var k = -1 * a * (this.mouseX - this.pmouseX),
                l = -1 * b * (this.mouseY - this.pmouseY);c.setPosition(c.eyeX + k * h.x[0] + l * h.z[0], c.eyeY, c.eyeZ + k * h.x[2] + l * h.z[2]);
          }return this;
        }
      }, d.prototype.debugMode = function () {
        this._assert3d("debugMode"), d._validateParameters("debugMode", arguments);for (var a = this._registeredMethods.post.length - 1; a >= 0; a--) {
          this._registeredMethods.post[a].toString() !== this._grid().toString() && this._registeredMethods.post[a].toString() !== this._axesIcon().toString() || this._registeredMethods.post.splice(a, 1);
        }arguments[0] === e.GRID ? this.registerMethod("post", this._grid.call(this, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])) : arguments[0] === e.AXES ? this.registerMethod("post", this._axesIcon.call(this, arguments[1], arguments[2], arguments[3], arguments[4])) : (this.registerMethod("post", this._grid.call(this, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4])), this.registerMethod("post", this._axesIcon.call(this, arguments[5], arguments[6], arguments[7], arguments[8])));
      }, d.prototype.noDebugMode = function () {
        this._assert3d("noDebugMode");for (var a = this._registeredMethods.post.length - 1; a >= 0; a--) {
          this._registeredMethods.post[a].toString() !== this._grid().toString() && this._registeredMethods.post[a].toString() !== this._axesIcon().toString() || this._registeredMethods.post.splice(a, 1);
        }
      }, d.prototype._grid = function (a, b, c, d, e) {
        void 0 === a && (a = this.width / 2), void 0 === b && (b = Math.round(a / 30) < 4 ? 4 : Math.round(a / 30)), void 0 === c && (c = 0), void 0 === d && (d = 0), void 0 === e && (e = 0);var f = a / b,
            g = a / 2;return function () {
          this.push(), this.stroke(255 * this._renderer.curStrokeColor[0], 255 * this._renderer.curStrokeColor[1], 255 * this._renderer.curStrokeColor[2]), this._renderer.uMVMatrix.set(this._renderer._curCamera.cameraMatrix.mat4[0], this._renderer._curCamera.cameraMatrix.mat4[1], this._renderer._curCamera.cameraMatrix.mat4[2], this._renderer._curCamera.cameraMatrix.mat4[3], this._renderer._curCamera.cameraMatrix.mat4[4], this._renderer._curCamera.cameraMatrix.mat4[5], this._renderer._curCamera.cameraMatrix.mat4[6], this._renderer._curCamera.cameraMatrix.mat4[7], this._renderer._curCamera.cameraMatrix.mat4[8], this._renderer._curCamera.cameraMatrix.mat4[9], this._renderer._curCamera.cameraMatrix.mat4[10], this._renderer._curCamera.cameraMatrix.mat4[11], this._renderer._curCamera.cameraMatrix.mat4[12], this._renderer._curCamera.cameraMatrix.mat4[13], this._renderer._curCamera.cameraMatrix.mat4[14], this._renderer._curCamera.cameraMatrix.mat4[15]);for (var a = 0; a <= b; a++) {
            this.beginShape(this.LINES), this.vertex(-g + c, d, a * f - g + e), this.vertex(+g + c, d, a * f - g + e), this.endShape();
          }for (var h = 0; h <= b; h++) {
            this.beginShape(this.LINES), this.vertex(h * f - g + c, d, -g + e), this.vertex(h * f - g + c, d, +g + e), this.endShape();
          }this.pop();
        };
      }, d.prototype._axesIcon = function (a, b, c, d) {
        return void 0 === a && (a = this.width / 20 > 40 ? this.width / 20 : 40), void 0 === b && (b = -this.width / 4), void 0 === c && (c = b), void 0 === d && (d = b), function () {
          this.push(), this._renderer.uMVMatrix.set(this._renderer._curCamera.cameraMatrix.mat4[0], this._renderer._curCamera.cameraMatrix.mat4[1], this._renderer._curCamera.cameraMatrix.mat4[2], this._renderer._curCamera.cameraMatrix.mat4[3], this._renderer._curCamera.cameraMatrix.mat4[4], this._renderer._curCamera.cameraMatrix.mat4[5], this._renderer._curCamera.cameraMatrix.mat4[6], this._renderer._curCamera.cameraMatrix.mat4[7], this._renderer._curCamera.cameraMatrix.mat4[8], this._renderer._curCamera.cameraMatrix.mat4[9], this._renderer._curCamera.cameraMatrix.mat4[10], this._renderer._curCamera.cameraMatrix.mat4[11], this._renderer._curCamera.cameraMatrix.mat4[12], this._renderer._curCamera.cameraMatrix.mat4[13], this._renderer._curCamera.cameraMatrix.mat4[14], this._renderer._curCamera.cameraMatrix.mat4[15]), this.strokeWeight(2), this.stroke(255, 0, 0), this.beginShape(this.LINES), this.vertex(b, c, d), this.vertex(b + a, c, d), this.endShape(), this.stroke(0, 255, 0), this.beginShape(this.LINES), this.vertex(b, c, d), this.vertex(b, c + a, d), this.endShape(), this.stroke(0, 0, 255), this.beginShape(this.LINES), this.vertex(b, c, d), this.vertex(b, c, d + a), this.endShape(), this.pop();
        };
      }, b.exports = d;
    }, { "../core/constants": 18, "../core/main": 24 }], 66: [function (a, b, c) {
      "use strict";
      var d = a("../core/main");d.prototype.ambientLight = function (a, b, c, e) {
        this._assert3d("ambientLight"), d._validateParameters("ambientLight", arguments);var f = this.color.apply(this, arguments),
            g = this._renderer._useLightShader();return g.setUniform("uUseLighting", !0), g.setUniform("uMaterialColor", this._renderer.curFillColor), this._renderer.ambientLightColors.push(f._array[0], f._array[1], f._array[2]), g.setUniform("uAmbientColor", this._renderer.ambientLightColors), g.setUniform("uAmbientLightCount", this._renderer.ambientLightColors.length / 3), this;
      }, d.prototype.directionalLight = function (a, b, c, e, f, g) {
        this._assert3d("directionalLight"), d._validateParameters("directionalLight", arguments);var h,
            i = this._renderer._useLightShader();h = a instanceof d.Color ? a : this.color(a, b, c);var j,
            k,
            l,
            m = arguments[arguments.length - 1];"number" == typeof m ? (j = arguments[arguments.length - 3], k = arguments[arguments.length - 2], l = arguments[arguments.length - 1]) : (j = m.x, k = m.y, l = m.z), i.setUniform("uUseLighting", !0), i.setUniform("uMaterialColor", this._renderer.curFillColor);var n = Math.sqrt(j * j + k * k + l * l);return this._renderer.directionalLightDirections.push(j / n, k / n, l / n), i.setUniform("uLightingDirection", this._renderer.directionalLightDirections), this._renderer.directionalLightColors.push(h._array[0], h._array[1], h._array[2]), i.setUniform("uDirectionalColor", this._renderer.directionalLightColors), i.setUniform("uDirectionalLightCount", this._renderer.directionalLightColors.length / 3), this;
      }, d.prototype.pointLight = function (a, b, c, e, f, g) {
        this._assert3d("pointLight"), d._validateParameters("pointLight", arguments);var h;h = a instanceof d.Color ? a : this.color(a, b, c);var i,
            j,
            k,
            l = arguments[arguments.length - 1];"number" == typeof l ? (i = arguments[arguments.length - 3], j = arguments[arguments.length - 2], k = arguments[arguments.length - 1]) : (i = l.x, j = l.y, k = l.z);var m = this._renderer._useLightShader();return m.setUniform("uUseLighting", !0), m.setUniform("uMaterialColor", this._renderer.curFillColor), this._renderer.pointLightPositions.push(i, j, k), m.setUniform("uPointLightLocation", this._renderer.pointLightPositions), this._renderer.pointLightColors.push(h._array[0], h._array[1], h._array[2]), m.setUniform("uPointLightColor", this._renderer.pointLightColors), m.setUniform("uPointLightCount", this._renderer.pointLightColors.length / 3), this;
      }, b.exports = d;
    }, { "../core/main": 24 }], 67: [function (a, b, c) {
      "use strict";
      function d(a, b) {
        for (var c = { v: [], vt: [], vn: [] }, d = {}, f = 0; f < b.length; ++f) {
          var g = b[f].trim().split(/\b\s+/);if (g.length > 0) if ("v" === g[0] || "vn" === g[0]) {
            var h = new e.Vector(parseFloat(g[1]), parseFloat(g[2]), parseFloat(g[3]));c[g[0]].push(h);
          } else if ("vt" === g[0]) {
            var i = [parseFloat(g[1]), parseFloat(g[2])];c[g[0]].push(i);
          } else if ("f" === g[0]) for (var j = 3; j < g.length; ++j) {
            for (var k = [], l = [1, j - 1, j], m = 0; m < l.length; ++m) {
              var n = g[l[m]],
                  o = 0;if (void 0 !== d[n]) o = d[n];else {
                for (var p = n.split("/"), q = 0; q < p.length; q++) {
                  p[q] = parseInt(p[q]) - 1;
                }o = d[n] = a.vertices.length, a.vertices.push(c.v[p[0]].copy()), c.vt[p[1]] ? a.uvs.push(c.vt[p[1]].slice()) : a.uvs.push([0, 0]), c.vn[p[2]] && a.vertexNormals.push(c.vn[p[2]].copy());
              }k.push(o);
            }k[0] !== k[1] && k[0] !== k[2] && k[1] !== k[2] && a.faces.push(k);
          }
        }return 0 === a.vertexNormals.length && a.computeNormals(), a;
      }var e = a("../core/main");a("./p5.Geometry"), e.prototype.loadModel = function (a) {
        e._validateParameters("loadModel", arguments);var b, c, f;"boolean" == typeof arguments[1] ? (b = arguments[1], c = arguments[2], f = arguments[3]) : (b = !1, c = arguments[1], f = arguments[2]);var g = new e.Geometry();g.gid = a + "|" + b;var h = this;return this.loadStrings(a, function (a) {
          d(g, a), b && g.normalize(), h._decrementPreload(), "function" == typeof c && c(g);
        }.bind(this), f), g;
      }, e.prototype.model = function (a) {
        this._assert3d("model"), e._validateParameters("model", arguments), a.vertices.length > 0 && (this._renderer.geometryInHash(a.gid) || (a._makeTriangleEdges()._edgesToVertices(), this._renderer.createBuffers(a.gid, a)), this._renderer.drawBuffers(a.gid));
      }, b.exports = e;
    }, { "../core/main": 24, "./p5.Geometry": 70 }], 68: [function (a, b, c) {
      "use strict";
      var d = a("../core/main"),
          e = a("../core/constants");a("./p5.Texture"), d.prototype.loadShader = function (a, b) {
        d._validateParameters("loadShader", arguments);var c = new d.Shader(),
            e = this,
            f = !1,
            g = !1;return this.loadStrings(b, function (a) {
          c._fragSrc = a.join("\n"), f = !0, g && e._decrementPreload();
        }), this.loadStrings(a, function (a) {
          c._vertSrc = a.join("\n"), g = !0, f && e._decrementPreload();
        }), c;
      }, d.prototype.createShader = function (a, b) {
        return this._assert3d("createShader"), d._validateParameters("createShader", arguments), new d.Shader(this._renderer, a, b);
      }, d.prototype.shader = function (a) {
        return this._assert3d("shader"), d._validateParameters("shader", arguments), void 0 === a._renderer && (a._renderer = this._renderer), a.isStrokeShader() ? this._renderer.setStrokeShader(a) : this._renderer.setFillShader(a), this;
      }, d.prototype.normalMaterial = function () {
        return this._assert3d("normalMaterial"), d._validateParameters("normalMaterial", arguments), this._renderer.drawMode = e.FILL, this._renderer.setFillShader(this._renderer._getNormalShader()), this._renderer.curFillColor = [1, 1, 1, 1], this.noStroke(), this;
      }, d.prototype.texture = function (a) {
        this._assert3d("texture"), d._validateParameters("texture", arguments), this._renderer.drawMode = e.TEXTURE;var b = this._renderer._useLightShader();return b.setUniform("uSpecular", !1), b.setUniform("isTexture", !0), b.setUniform("uSampler", a), this.noStroke(), this;
      }, d.prototype.ambientMaterial = function (a, b, c, e) {
        this._assert3d("ambientMaterial"), d._validateParameters("ambientMaterial", arguments);var f = d.prototype.color.apply(this, arguments);this._renderer.curFillColor = f._array;var g = this._renderer._useLightShader();return g.setUniform("uMaterialColor", this._renderer.curFillColor), g.setUniform("uSpecular", !1), g.setUniform("isTexture", !1), this;
      }, d.prototype.specularMaterial = function (a, b, c, e) {
        this._assert3d("specularMaterial"), d._validateParameters("specularMaterial", arguments);var f = d.prototype.color.apply(this, arguments);this._renderer.curFillColor = f._array;var g = this._renderer._useLightShader();return g.setUniform("uMaterialColor", this._renderer.curFillColor), g.setUniform("uSpecular", !0), g.setUniform("isTexture", !1), this;
      }, d.RendererGL.prototype._applyColorBlend = function (a) {
        var b = this.GL,
            c = this.drawMode === e.TEXTURE;return c || a[a.length - 1] < 1 ? (b.depthMask(c), b.enable(b.BLEND), b.blendEquation(b.FUNC_ADD), b.blendFunc(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA)) : (b.depthMask(!0), b.disable(b.BLEND)), a;
      }, b.exports = d;
    }, { "../core/constants": 18, "../core/main": 24, "./p5.Texture": 76 }], 69: [function (a, b, c) {
      "use strict";
      var d = a("../core/main");d.prototype.camera = function () {
        return this._assert3d("camera"), d._validateParameters("camera", arguments), this._renderer._curCamera.camera.apply(this._renderer._curCamera, arguments), this;
      }, d.prototype.perspective = function () {
        return this._assert3d("perspective"), d._validateParameters("perspective", arguments), this._renderer._curCamera.perspective.apply(this._renderer._curCamera, arguments), this;
      }, d.prototype.ortho = function () {
        return this._assert3d("ortho"), d._validateParameters("ortho", arguments), this._renderer._curCamera.ortho.apply(this._renderer._curCamera, arguments), this;
      }, d.prototype.createCamera = function () {
        this._assert3d("createCamera");var a = new d.Camera(this._renderer);return a._computeCameraDefaultSettings(), a._setDefaultCamera(), this._renderer._curCamera = a, a;
      }, d.Camera = function (a) {
        this._renderer = a, this.cameraType = "default", this.cameraMatrix = new d.Matrix(), this.projMatrix = new d.Matrix();
      }, d.Camera.prototype.perspective = function (a, b, c, e) {
        void 0 === a ? (a = this.defaultCameraFOV, this.cameraFOV = a) : this.cameraFOV = this._renderer._pInst._toRadians(a), void 0 === b && (b = this.defaultAspectRatio), void 0 === c && (c = this.defaultCameraNear), void 0 === e && (e = this.defaultCameraFar), c <= 1e-4 && (c = .01, console.log("Avoid perspective near plane values close to or below 0. Setting value to 0.01.")), e < c && console.log("Perspective far plane value is less than near plane value. Nothing will be shown."), this.cameraFOV = this._renderer._pInst._toRadians(a), this.aspectRatio = b, this.cameraNear = c, this.cameraFar = e, this.projMatrix = d.Matrix.identity();var f = 1 / Math.tan(this.cameraFOV / 2),
            g = 1 / (this.cameraNear - this.cameraFar);this.projMatrix.set(f / b, 0, 0, 0, 0, -f, 0, 0, 0, 0, (e + c) * g, -1, 0, 0, 2 * e * c * g, 0), this._isActive() && this._renderer.uPMatrix.set(this.projMatrix.mat4[0], this.projMatrix.mat4[1], this.projMatrix.mat4[2], this.projMatrix.mat4[3], this.projMatrix.mat4[4], this.projMatrix.mat4[5], this.projMatrix.mat4[6], this.projMatrix.mat4[7], this.projMatrix.mat4[8], this.projMatrix.mat4[9], this.projMatrix.mat4[10], this.projMatrix.mat4[11], this.projMatrix.mat4[12], this.projMatrix.mat4[13], this.projMatrix.mat4[14], this.projMatrix.mat4[15]), this.cameraType = "custom";
      }, d.Camera.prototype.ortho = function (a, b, c, e, f, g) {
        void 0 === a && (a = -this._renderer.width / 2), void 0 === b && (b = +this._renderer.width / 2), void 0 === c && (c = -this._renderer.height / 2), void 0 === e && (e = +this._renderer.height / 2), void 0 === f && (f = 0), void 0 === g && (g = Math.max(this._renderer.width, this._renderer.height));var h = b - a,
            i = e - c,
            j = g - f,
            k = 2 / h,
            l = 2 / i,
            m = -2 / j,
            n = -(b + a) / h,
            o = -(e + c) / i,
            p = -(g + f) / j;this.projMatrix = d.Matrix.identity(), this.projMatrix.set(k, 0, 0, 0, 0, -l, 0, 0, 0, 0, m, 0, n, o, p, 1), this._isActive() && this._renderer.uPMatrix.set(this.projMatrix.mat4[0], this.projMatrix.mat4[1], this.projMatrix.mat4[2], this.projMatrix.mat4[3], this.projMatrix.mat4[4], this.projMatrix.mat4[5], this.projMatrix.mat4[6], this.projMatrix.mat4[7], this.projMatrix.mat4[8], this.projMatrix.mat4[9], this.projMatrix.mat4[10], this.projMatrix.mat4[11], this.projMatrix.mat4[12], this.projMatrix.mat4[13], this.projMatrix.mat4[14], this.projMatrix.mat4[15]), this.cameraType = "custom";
      }, d.Camera.prototype._rotateView = function (a, b, c, e) {
        var f = this.centerX,
            g = this.centerY,
            h = this.centerZ;f -= this.eyeX, g -= this.eyeY, h -= this.eyeZ;var i = d.Matrix.identity(this._renderer._pInst);i.rotate(a, b, c, e);var j = [f * i.mat4[0] + g * i.mat4[4] + h * i.mat4[8], f * i.mat4[1] + g * i.mat4[5] + h * i.mat4[9], f * i.mat4[2] + g * i.mat4[6] + h * i.mat4[10]];j[0] += this.eyeX, j[1] += this.eyeY, j[2] += this.eyeZ, this.camera(this.eyeX, this.eyeY, this.eyeZ, j[0], j[1], j[2], this.upX, this.upY, this.upZ);
      }, d.Camera.prototype.pan = function (a) {
        var b = this._getLocalAxes();this._rotateView(a, b.y[0], b.y[1], b.y[2]);
      }, d.Camera.prototype.tilt = function (a) {
        var b = this._getLocalAxes();this._rotateView(a, b.x[0], b.x[1], b.x[2]);
      }, d.Camera.prototype.lookAt = function (a, b, c) {
        this.camera(this.eyeX, this.eyeY, this.eyeZ, a, b, c, this.upX, this.upY, this.upZ);
      }, d.Camera.prototype.camera = function (a, b, c, d, e, f, g, h, i) {
        void 0 === a && (a = this.defaultEyeX, b = this.defaultEyeY, c = this.defaultEyeZ, d = a, e = b, f = 0, g = 0, h = 1, i = 0), this.eyeX = a, this.eyeY = b, this.eyeZ = c, this.centerX = d, this.centerY = e, this.centerZ = f, this.upX = g, this.upY = h, this.upZ = i;var j = this._getLocalAxes();this.cameraMatrix.set(j.x[0], j.y[0], j.z[0], 0, j.x[1], j.y[1], j.z[1], 0, j.x[2], j.y[2], j.z[2], 0, 0, 0, 0, 1);var k = -a,
            l = -b,
            m = -c;return this.cameraMatrix.translate([k, l, m]), this._isActive() && this._renderer.uMVMatrix.set(this.cameraMatrix.mat4[0], this.cameraMatrix.mat4[1], this.cameraMatrix.mat4[2], this.cameraMatrix.mat4[3], this.cameraMatrix.mat4[4], this.cameraMatrix.mat4[5], this.cameraMatrix.mat4[6], this.cameraMatrix.mat4[7], this.cameraMatrix.mat4[8], this.cameraMatrix.mat4[9], this.cameraMatrix.mat4[10], this.cameraMatrix.mat4[11], this.cameraMatrix.mat4[12], this.cameraMatrix.mat4[13], this.cameraMatrix.mat4[14], this.cameraMatrix.mat4[15]), this;
      }, d.Camera.prototype.move = function (a, b, c) {
        var d = this._getLocalAxes(),
            e = [d.x[0] * a, d.x[1] * a, d.x[2] * a],
            f = [d.y[0] * b, d.y[1] * b, d.y[2] * b],
            g = [d.z[0] * c, d.z[1] * c, d.z[2] * c];this.camera(this.eyeX + e[0] + f[0] + g[0], this.eyeY + e[1] + f[1] + g[1], this.eyeZ + e[2] + f[2] + g[2], this.centerX + e[0] + f[0] + g[0], this.centerY + e[1] + f[1] + g[1], this.centerZ + e[2] + f[2] + g[2], 0, 1, 0);
      }, d.Camera.prototype.setPosition = function (a, b, c) {
        var d = a - this.eyeX,
            e = b - this.eyeY,
            f = c - this.eyeZ;this.camera(a, b, c, this.centerX + d, this.centerY + e, this.centerZ + f, 0, 1, 0);
      }, d.Camera.prototype._computeCameraDefaultSettings = function () {
        this.defaultCameraFOV = 60 / 180 * Math.PI, this.defaultAspectRatio = this._renderer.width / this._renderer.height, this.defaultEyeX = 0, this.defaultEyeY = 0, this.defaultEyeZ = this._renderer.height / 2 / Math.tan(this.defaultCameraFOV / 2), this.defaultCenterX = 0, this.defaultCenterY = 0, this.defaultCenterZ = 0, this.defaultCameraNear = .1 * this.defaultEyeZ, this.defaultCameraFar = 10 * this.defaultEyeZ;
      }, d.Camera.prototype._setDefaultCamera = function () {
        this.cameraFOV = this.defaultCameraFOV, this.aspectRatio = this.defaultAspectRatio, this.eyeX = this.defaultEyeX, this.eyeY = this.defaultEyeY, this.eyeZ = this.defaultEyeZ, this.centerX = this.defaultCenterX, this.centerY = this.defaultCenterY, this.centerZ = this.defaultCenterZ, this.upX = 0, this.upY = 1, this.upZ = 0, this.cameraNear = this.defaultCameraNear, this.cameraFar = this.defaultCameraFar, this.perspective(), this.camera(), this.cameraType = "default";
      }, d.Camera.prototype._resize = function () {
        "default" === this.cameraType ? (this._computeCameraDefaultSettings(), this._setDefaultCamera()) : this.perspective(this.cameraFOV, this._renderer.width / this._renderer.height);
      }, d.Camera.prototype.copy = function () {
        var a = new d.Camera(this._renderer);return a.cameraFOV = this.cameraFOV, a.aspectRatio = this.aspectRatio, a.eyeX = this.eyeX, a.eyeY = this.eyeY, a.eyeZ = this.eyeZ, a.centerX = this.centerX, a.centerY = this.centerY, a.centerZ = this.centerZ, a.cameraNear = this.cameraNear, a.cameraFar = this.cameraFar, a.cameraType = this.cameraType, a.cameraMatrix = this.cameraMatrix.copy(), a.projMatrix = this.projMatrix.copy(), a;
      }, d.Camera.prototype._getLocalAxes = function () {
        var a = this.eyeX - this.centerX,
            b = this.eyeY - this.centerY,
            c = this.eyeZ - this.centerZ,
            d = Math.sqrt(a * a + b * b + c * c);0 !== d && (a /= d, b /= d, c /= d);var e = this.upX,
            f = this.upY,
            g = this.upZ,
            h = f * c - g * b,
            i = -e * c + g * a,
            j = e * b - f * a;e = b * j - c * i, f = -a * j + c * h, g = a * i - b * h;var k = Math.sqrt(h * h + i * i + j * j);0 !== k && (h /= k, i /= k, j /= k);var l = Math.sqrt(e * e + f * f + g * g);return 0 !== l && (e /= l, f /= l, g /= l), { x: [h, i, j], y: [e, f, g], z: [a, b, c] };
      }, d.Camera.prototype._orbit = function (a, b, c) {
        var d = this.eyeX - this.centerX,
            e = this.eyeY - this.centerY,
            f = this.eyeZ - this.centerZ,
            g = Math.sqrt(d * d + e * e + f * f),
            h = Math.atan2(d, f),
            i = Math.acos(Math.max(-1, Math.min(1, e / g)));h += a, i += b, g += c, g < 0 && (g = .1), i > Math.PI ? i = Math.PI : i <= 0 && (i = .001);var j = Math.sin(i) * g * Math.sin(h),
            k = Math.cos(i) * g,
            l = Math.sin(i) * g * Math.cos(h);this.camera(j + this.centerX, k + this.centerY, l + this.centerZ, this.centerX, this.centerY, this.centerZ, 0, 1, 0);
      }, d.Camera.prototype._isActive = function () {
        return this === this._renderer._curCamera;
      }, d.prototype.setCamera = function (a) {
        this._renderer._curCamera = a, this._renderer.uPMatrix.set(a.projMatrix.mat4[0], a.projMatrix.mat4[1], a.projMatrix.mat4[2], a.projMatrix.mat4[3], a.projMatrix.mat4[4], a.projMatrix.mat4[5], a.projMatrix.mat4[6], a.projMatrix.mat4[7], a.projMatrix.mat4[8], a.projMatrix.mat4[9], a.projMatrix.mat4[10], a.projMatrix.mat4[11], a.projMatrix.mat4[12], a.projMatrix.mat4[13], a.projMatrix.mat4[14], a.projMatrix.mat4[15]);
      }, b.exports = d.Camera;
    }, { "../core/main": 24 }], 70: [function (a, b, c) {
      "use strict";
      var d = a("../core/main");d.Geometry = function (a, b, c) {
        return this.vertices = [], this.lineVertices = [], this.lineNormals = [], this.vertexNormals = [], this.faces = [], this.uvs = [], this.edges = [], this.detailX = void 0 !== a ? a : 1, this.detailY = void 0 !== b ? b : 1, c instanceof Function && c.call(this), this;
      }, d.Geometry.prototype.computeFaces = function () {
        this.faces.length = 0;for (var a, b, c, d, e = this.detailX + 1, f = 0; f < this.detailY; f++) {
          for (var g = 0; g < this.detailX; g++) {
            a = f * e + g, b = f * e + g + 1, c = (f + 1) * e + g + 1, d = (f + 1) * e + g, this.faces.push([a, b, d]), this.faces.push([d, b, c]);
          }
        }return this;
      }, d.Geometry.prototype._getFaceNormal = function (a) {
        var b = this.faces[a],
            c = this.vertices[b[0]],
            e = this.vertices[b[1]],
            f = this.vertices[b[2]],
            g = d.Vector.sub(e, c),
            h = d.Vector.sub(f, c),
            i = d.Vector.cross(g, h),
            j = d.Vector.mag(i),
            k = j / (d.Vector.mag(g) * d.Vector.mag(h));return 0 === k || isNaN(k) ? (console.warn("p5.Geometry.prototype._getFaceNormal:", "face has colinear sides or a repeated vertex"), i) : (k > 1 && (k = 1), i.mult(Math.asin(k) / j));
      }, d.Geometry.prototype.computeNormals = function () {
        var a,
            b = this.vertexNormals,
            c = this.vertices,
            e = this.faces;for (b.length = 0, a = 0; a < c.length; ++a) {
          b.push(new d.Vector());
        }for (var f = 0; f < e.length; ++f) {
          for (var g = e[f], h = this._getFaceNormal(f), i = 0; i < 3; ++i) {
            var j = g[i];b[j].add(h);
          }
        }for (a = 0; a < c.length; ++a) {
          b[a].normalize();
        }return this;
      }, d.Geometry.prototype.averageNormals = function () {
        for (var a = 0; a <= this.detailY; a++) {
          var b = this.detailX + 1,
              c = d.Vector.add(this.vertexNormals[a * b], this.vertexNormals[a * b + this.detailX]);c = d.Vector.div(c, 2), this.vertexNormals[a * b] = c, this.vertexNormals[a * b + this.detailX] = c;
        }return this;
      }, d.Geometry.prototype.averagePoleNormals = function () {
        for (var a = new d.Vector(0, 0, 0), b = 0; b < this.detailX; b++) {
          a.add(this.vertexNormals[b]);
        }for (a = d.Vector.div(a, this.detailX), b = 0; b < this.detailX; b++) {
          this.vertexNormals[b] = a;
        }for (a = new d.Vector(0, 0, 0), b = this.vertices.length - 1; b > this.vertices.length - 1 - this.detailX; b--) {
          a.add(this.vertexNormals[b]);
        }for (a = d.Vector.div(a, this.detailX), b = this.vertices.length - 1; b > this.vertices.length - 1 - this.detailX; b--) {
          this.vertexNormals[b] = a;
        }return this;
      }, d.Geometry.prototype._makeTriangleEdges = function () {
        if (this.edges.length = 0, Array.isArray(this.strokeIndices)) for (var a = 0, b = this.strokeIndices.length; a < b; a++) {
          this.edges.push(this.strokeIndices[a]);
        } else for (var c = 0; c < this.faces.length; c++) {
          this.edges.push([this.faces[c][0], this.faces[c][1]]), this.edges.push([this.faces[c][1], this.faces[c][2]]), this.edges.push([this.faces[c][2], this.faces[c][0]]);
        }return this;
      }, d.Geometry.prototype._edgesToVertices = function () {
        this.lineVertices.length = 0, this.lineNormals.length = 0;for (var a = 0; a < this.edges.length; a++) {
          var b = this.vertices[this.edges[a][0]],
              c = this.vertices[this.edges[a][1]],
              d = c.copy().sub(b).normalize(),
              e = b.array(),
              f = b.array(),
              g = c.array(),
              h = c.array(),
              i = d.array(),
              j = d.array();i.push(1), j.push(-1), this.lineNormals.push(i, j, i, i, j, j), this.lineVertices.push(e, f, g, g, f, h);
        }return this;
      }, d.Geometry.prototype.normalize = function () {
        if (this.vertices.length > 0) {
          for (var a = this.vertices[0].copy(), b = this.vertices[0].copy(), c = 0; c < this.vertices.length; c++) {
            a.x = Math.max(a.x, this.vertices[c].x), b.x = Math.min(b.x, this.vertices[c].x), a.y = Math.max(a.y, this.vertices[c].y), b.y = Math.min(b.y, this.vertices[c].y), a.z = Math.max(a.z, this.vertices[c].z), b.z = Math.min(b.z, this.vertices[c].z);
          }var e = d.Vector.lerp(a, b, .5),
              f = d.Vector.sub(a, b),
              g = Math.max(Math.max(f.x, f.y), f.z),
              h = 200 / g;for (c = 0; c < this.vertices.length; c++) {
            this.vertices[c].sub(e), this.vertices[c].mult(h);
          }
        }return this;
      }, b.exports = d.Geometry;
    }, { "../core/main": 24 }], 71: [function (a, b, c) {
      "use strict";
      var d = a("../core/main"),
          e = Array,
          f = function f(a) {
        return a instanceof Array;
      };"undefined" != typeof Float32Array && (e = Float32Array, f = function f(a) {
        return a instanceof Array || a instanceof Float32Array;
      }), d.Matrix = function () {
        for (var a = new Array(arguments.length), b = 0; b < a.length; ++b) {
          a[b] = arguments[b];
        }return a.length && a[a.length - 1] instanceof d && (this.p5 = a[a.length - 1]), "mat3" === a[0] ? this.mat3 = Array.isArray(a[1]) ? a[1] : new e([1, 0, 0, 0, 1, 0, 0, 0, 1]) : this.mat4 = Array.isArray(a[0]) ? a[0] : new e([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), this;
      }, d.Matrix.prototype.set = function (a) {
        return a instanceof d.Matrix ? (this.mat4 = a.mat4, this) : f(a) ? (this.mat4 = a, this) : (16 === arguments.length && (this.mat4[0] = arguments[0], this.mat4[1] = arguments[1], this.mat4[2] = arguments[2], this.mat4[3] = arguments[3], this.mat4[4] = arguments[4], this.mat4[5] = arguments[5], this.mat4[6] = arguments[6], this.mat4[7] = arguments[7], this.mat4[8] = arguments[8], this.mat4[9] = arguments[9], this.mat4[10] = arguments[10], this.mat4[11] = arguments[11], this.mat4[12] = arguments[12], this.mat4[13] = arguments[13], this.mat4[14] = arguments[14], this.mat4[15] = arguments[15]), this);
      }, d.Matrix.prototype.get = function () {
        return new d.Matrix(this.mat4, this.p5);
      }, d.Matrix.prototype.copy = function () {
        var a = new d.Matrix(this.p5);return a.mat4[0] = this.mat4[0], a.mat4[1] = this.mat4[1], a.mat4[2] = this.mat4[2], a.mat4[3] = this.mat4[3], a.mat4[4] = this.mat4[4], a.mat4[5] = this.mat4[5], a.mat4[6] = this.mat4[6], a.mat4[7] = this.mat4[7], a.mat4[8] = this.mat4[8], a.mat4[9] = this.mat4[9], a.mat4[10] = this.mat4[10], a.mat4[11] = this.mat4[11], a.mat4[12] = this.mat4[12], a.mat4[13] = this.mat4[13], a.mat4[14] = this.mat4[14], a.mat4[15] = this.mat4[15], a;
      }, d.Matrix.identity = function (a) {
        return new d.Matrix(a);
      }, d.Matrix.prototype.transpose = function (a) {
        var b, c, e, g, h, i;return a instanceof d.Matrix ? (b = a.mat4[1], c = a.mat4[2], e = a.mat4[3], g = a.mat4[6], h = a.mat4[7], i = a.mat4[11], this.mat4[0] = a.mat4[0], this.mat4[1] = a.mat4[4], this.mat4[2] = a.mat4[8], this.mat4[3] = a.mat4[12], this.mat4[4] = b, this.mat4[5] = a.mat4[5], this.mat4[6] = a.mat4[9], this.mat4[7] = a.mat4[13], this.mat4[8] = c, this.mat4[9] = g, this.mat4[10] = a.mat4[10], this.mat4[11] = a.mat4[14], this.mat4[12] = e, this.mat4[13] = h, this.mat4[14] = i, this.mat4[15] = a.mat4[15]) : f(a) && (b = a[1], c = a[2], e = a[3], g = a[6], h = a[7], i = a[11], this.mat4[0] = a[0], this.mat4[1] = a[4], this.mat4[2] = a[8], this.mat4[3] = a[12], this.mat4[4] = b, this.mat4[5] = a[5], this.mat4[6] = a[9], this.mat4[7] = a[13], this.mat4[8] = c, this.mat4[9] = g, this.mat4[10] = a[10], this.mat4[11] = a[14], this.mat4[12] = e, this.mat4[13] = h, this.mat4[14] = i, this.mat4[15] = a[15]), this;
      }, d.Matrix.prototype.invert = function (a) {
        var b, c, e, g, h, i, j, k, l, m, n, o, p, q, r, s;a instanceof d.Matrix ? (b = a.mat4[0], c = a.mat4[1], e = a.mat4[2], g = a.mat4[3], h = a.mat4[4], i = a.mat4[5], j = a.mat4[6], k = a.mat4[7], l = a.mat4[8], m = a.mat4[9], n = a.mat4[10], o = a.mat4[11], p = a.mat4[12], q = a.mat4[13], r = a.mat4[14], s = a.mat4[15]) : f(a) && (b = a[0], c = a[1], e = a[2], g = a[3], h = a[4], i = a[5], j = a[6], k = a[7], l = a[8], m = a[9], n = a[10], o = a[11], p = a[12], q = a[13], r = a[14], s = a[15]);var t = b * i - c * h,
            u = b * j - e * h,
            v = b * k - g * h,
            w = c * j - e * i,
            x = c * k - g * i,
            y = e * k - g * j,
            z = l * q - m * p,
            A = l * r - n * p,
            B = l * s - o * p,
            C = m * r - n * q,
            D = m * s - o * q,
            E = n * s - o * r,
            F = t * E - u * D + v * C + w * B - x * A + y * z;return F ? (F = 1 / F, this.mat4[0] = (i * E - j * D + k * C) * F, this.mat4[1] = (e * D - c * E - g * C) * F, this.mat4[2] = (q * y - r * x + s * w) * F, this.mat4[3] = (n * x - m * y - o * w) * F, this.mat4[4] = (j * B - h * E - k * A) * F, this.mat4[5] = (b * E - e * B + g * A) * F, this.mat4[6] = (r * v - p * y - s * u) * F, this.mat4[7] = (l * y - n * v + o * u) * F, this.mat4[8] = (h * D - i * B + k * z) * F, this.mat4[9] = (c * B - b * D - g * z) * F, this.mat4[10] = (p * x - q * v + s * t) * F, this.mat4[11] = (m * v - l * x - o * t) * F, this.mat4[12] = (i * A - h * C - j * z) * F, this.mat4[13] = (b * C - c * A + e * z) * F, this.mat4[14] = (q * u - p * w - r * t) * F, this.mat4[15] = (l * w - m * u + n * t) * F, this) : null;
      }, d.Matrix.prototype.invert3x3 = function () {
        var a = this.mat3[0],
            b = this.mat3[1],
            c = this.mat3[2],
            d = this.mat3[3],
            e = this.mat3[4],
            f = this.mat3[5],
            g = this.mat3[6],
            h = this.mat3[7],
            i = this.mat3[8],
            j = i * e - f * h,
            k = -i * d + f * g,
            l = h * d - e * g,
            m = a * j + b * k + c * l;return m ? (m = 1 / m, this.mat3[0] = j * m, this.mat3[1] = (-i * b + c * h) * m, this.mat3[2] = (f * b - c * e) * m, this.mat3[3] = k * m, this.mat3[4] = (i * a - c * g) * m, this.mat3[5] = (-f * a + c * d) * m, this.mat3[6] = l * m, this.mat3[7] = (-h * a + b * g) * m, this.mat3[8] = (e * a - b * d) * m, this) : null;
      }, d.Matrix.prototype.transpose3x3 = function (a) {
        var b = a[1],
            c = a[2],
            d = a[5];return this.mat3[1] = a[3], this.mat3[2] = a[6], this.mat3[3] = b, this.mat3[5] = a[7], this.mat3[6] = c, this.mat3[7] = d, this;
      }, d.Matrix.prototype.inverseTranspose = function (a) {
        void 0 === this.mat3 ? console.error("sorry, this function only works with mat3") : (this.mat3[0] = a.mat4[0], this.mat3[1] = a.mat4[1], this.mat3[2] = a.mat4[2], this.mat3[3] = a.mat4[4], this.mat3[4] = a.mat4[5], this.mat3[5] = a.mat4[6], this.mat3[6] = a.mat4[8], this.mat3[7] = a.mat4[9], this.mat3[8] = a.mat4[10]);var b = this.invert3x3();if (b) b.transpose3x3(this.mat3);else for (var c = 0; c < 9; c++) {
          this.mat3[c] = 0;
        }return this;
      }, d.Matrix.prototype.determinant = function () {
        var a = this.mat4[0] * this.mat4[5] - this.mat4[1] * this.mat4[4],
            b = this.mat4[0] * this.mat4[6] - this.mat4[2] * this.mat4[4],
            c = this.mat4[0] * this.mat4[7] - this.mat4[3] * this.mat4[4],
            d = this.mat4[1] * this.mat4[6] - this.mat4[2] * this.mat4[5],
            e = this.mat4[1] * this.mat4[7] - this.mat4[3] * this.mat4[5],
            f = this.mat4[2] * this.mat4[7] - this.mat4[3] * this.mat4[6],
            g = this.mat4[8] * this.mat4[13] - this.mat4[9] * this.mat4[12],
            h = this.mat4[8] * this.mat4[14] - this.mat4[10] * this.mat4[12],
            i = this.mat4[8] * this.mat4[15] - this.mat4[11] * this.mat4[12],
            j = this.mat4[9] * this.mat4[14] - this.mat4[10] * this.mat4[13],
            k = this.mat4[9] * this.mat4[15] - this.mat4[11] * this.mat4[13];return a * (this.mat4[10] * this.mat4[15] - this.mat4[11] * this.mat4[14]) - b * k + c * j + d * i - e * h + f * g;
      }, d.Matrix.prototype.mult = function (a) {
        var b;if (a === this || a === this.mat4) b = this.copy().mat4;else if (a instanceof d.Matrix) b = a.mat4;else {
          if (!f(a)) return;b = a;
        }var c = this.mat4[0],
            e = this.mat4[1],
            g = this.mat4[2],
            h = this.mat4[3];return this.mat4[0] = c * b[0] + e * b[4] + g * b[8] + h * b[12], this.mat4[1] = c * b[1] + e * b[5] + g * b[9] + h * b[13], this.mat4[2] = c * b[2] + e * b[6] + g * b[10] + h * b[14], this.mat4[3] = c * b[3] + e * b[7] + g * b[11] + h * b[15], c = this.mat4[4], e = this.mat4[5], g = this.mat4[6], h = this.mat4[7], this.mat4[4] = c * b[0] + e * b[4] + g * b[8] + h * b[12], this.mat4[5] = c * b[1] + e * b[5] + g * b[9] + h * b[13], this.mat4[6] = c * b[2] + e * b[6] + g * b[10] + h * b[14], this.mat4[7] = c * b[3] + e * b[7] + g * b[11] + h * b[15], c = this.mat4[8], e = this.mat4[9], g = this.mat4[10], h = this.mat4[11], this.mat4[8] = c * b[0] + e * b[4] + g * b[8] + h * b[12], this.mat4[9] = c * b[1] + e * b[5] + g * b[9] + h * b[13], this.mat4[10] = c * b[2] + e * b[6] + g * b[10] + h * b[14], this.mat4[11] = c * b[3] + e * b[7] + g * b[11] + h * b[15], c = this.mat4[12], e = this.mat4[13], g = this.mat4[14], h = this.mat4[15], this.mat4[12] = c * b[0] + e * b[4] + g * b[8] + h * b[12], this.mat4[13] = c * b[1] + e * b[5] + g * b[9] + h * b[13], this.mat4[14] = c * b[2] + e * b[6] + g * b[10] + h * b[14], this.mat4[15] = c * b[3] + e * b[7] + g * b[11] + h * b[15], this;
      }, d.Matrix.prototype.scale = function (a, b, c) {
        return a instanceof d.Vector ? (b = a.y, c = a.z, a = a.x) : a instanceof Array && (b = a[1], c = a[2], a = a[0]), this.mat4[0] *= a, this.mat4[1] *= a, this.mat4[2] *= a, this.mat4[3] *= a, this.mat4[4] *= b, this.mat4[5] *= b, this.mat4[6] *= b, this.mat4[7] *= b, this.mat4[8] *= c, this.mat4[9] *= c, this.mat4[10] *= c, this.mat4[11] *= c, this;
      }, d.Matrix.prototype.rotate = function (a, b, c, e) {
        var f = this.p5 ? this.p5._toRadians(a) : a;b instanceof d.Vector ? (c = b.y, e = b.z, b = b.x) : b instanceof Array && (c = b[1], e = b[2], b = b[0]);var g = Math.sqrt(b * b + c * c + e * e);b *= 1 / g, c *= 1 / g, e *= 1 / g;var h = this.mat4[0],
            i = this.mat4[1],
            j = this.mat4[2],
            k = this.mat4[3],
            l = this.mat4[4],
            m = this.mat4[5],
            n = this.mat4[6],
            o = this.mat4[7],
            p = this.mat4[8],
            q = this.mat4[9],
            r = this.mat4[10],
            s = this.mat4[11],
            t = Math.sin(f),
            u = Math.cos(f),
            v = 1 - u,
            w = b * b * v + u,
            x = c * b * v + e * t,
            y = e * b * v - c * t,
            z = b * c * v - e * t,
            A = c * c * v + u,
            B = e * c * v + b * t,
            C = b * e * v + c * t,
            D = c * e * v - b * t,
            E = e * e * v + u;return this.mat4[0] = h * w + l * x + p * y, this.mat4[1] = i * w + m * x + q * y, this.mat4[2] = j * w + n * x + r * y, this.mat4[3] = k * w + o * x + s * y, this.mat4[4] = h * z + l * A + p * B, this.mat4[5] = i * z + m * A + q * B, this.mat4[6] = j * z + n * A + r * B, this.mat4[7] = k * z + o * A + s * B, this.mat4[8] = h * C + l * D + p * E, this.mat4[9] = i * C + m * D + q * E, this.mat4[10] = j * C + n * D + r * E, this.mat4[11] = k * C + o * D + s * E, this;
      }, d.Matrix.prototype.translate = function (a) {
        var b = a[0],
            c = a[1],
            d = a[2] || 0;this.mat4[12] += this.mat4[0] * b + this.mat4[4] * c + this.mat4[8] * d, this.mat4[13] += this.mat4[1] * b + this.mat4[5] * c + this.mat4[9] * d, this.mat4[14] += this.mat4[2] * b + this.mat4[6] * c + this.mat4[10] * d, this.mat4[15] += this.mat4[3] * b + this.mat4[7] * c + this.mat4[11] * d;
      }, d.Matrix.prototype.rotateX = function (a) {
        this.rotate(a, 1, 0, 0);
      }, d.Matrix.prototype.rotateY = function (a) {
        this.rotate(a, 0, 1, 0);
      }, d.Matrix.prototype.rotateZ = function (a) {
        this.rotate(a, 0, 0, 1);
      }, d.Matrix.prototype.perspective = function (a, b, c, d) {
        var e = 1 / Math.tan(a / 2),
            f = 1 / (c - d);return this.mat4[0] = e / b, this.mat4[1] = 0, this.mat4[2] = 0, this.mat4[3] = 0, this.mat4[4] = 0, this.mat4[5] = e, this.mat4[6] = 0, this.mat4[7] = 0, this.mat4[8] = 0, this.mat4[9] = 0, this.mat4[10] = (d + c) * f, this.mat4[11] = -1, this.mat4[12] = 0, this.mat4[13] = 0, this.mat4[14] = 2 * d * c * f, this.mat4[15] = 0, this;
      }, d.Matrix.prototype.ortho = function (a, b, c, d, e, f) {
        var g = 1 / (a - b),
            h = 1 / (c - d),
            i = 1 / (e - f);return this.mat4[0] = -2 * g, this.mat4[1] = 0, this.mat4[2] = 0, this.mat4[3] = 0, this.mat4[4] = 0, this.mat4[5] = -2 * h, this.mat4[6] = 0, this.mat4[7] = 0, this.mat4[8] = 0, this.mat4[9] = 0, this.mat4[10] = 2 * i, this.mat4[11] = 0, this.mat4[12] = (a + b) * g, this.mat4[13] = (d + c) * h, this.mat4[14] = (f + e) * i, this.mat4[15] = 1, this;
      }, b.exports = d.Matrix;
    }, { "../core/main": 24 }], 72: [function (a, b, c) {
      "use strict";
      var d = a("../core/main"),
          e = a("../core/constants");d.RendererGL.prototype.beginShape = function (a) {
        return this.immediateMode.shapeMode = void 0 !== a ? a : e.LINE_STRIP, void 0 === this.immediateMode.vertices ? (this.immediateMode.vertices = [], this.immediateMode.edges = [], this.immediateMode.lineVertices = [], this.immediateMode.vertexColors = [], this.immediateMode.lineNormals = [], this.immediateMode.uvCoords = [], this.immediateMode.vertexBuffer = this.GL.createBuffer(), this.immediateMode.colorBuffer = this.GL.createBuffer(), this.immediateMode.uvBuffer = this.GL.createBuffer(), this.immediateMode.lineVertexBuffer = this.GL.createBuffer(), this.immediateMode.lineNormalBuffer = this.GL.createBuffer(), this.immediateMode.pointVertexBuffer = this.GL.createBuffer(), this.immediateMode._bezierVertex = [], this.immediateMode._quadraticVertex = [], this.immediateMode._curveVertex = []) : (this.immediateMode.vertices.length = 0, this.immediateMode.edges.length = 0, this.immediateMode.lineVertices.length = 0, this.immediateMode.lineNormals.length = 0, this.immediateMode.vertexColors.length = 0, this.immediateMode.uvCoords.length = 0), this.isImmediateDrawing = !0, this;
      }, d.RendererGL.prototype.vertex = function (a, b) {
        var c, e, f;c = e = f = 0, 3 === arguments.length ? c = arguments[2] : 4 === arguments.length ? (e = arguments[2], f = arguments[3]) : 5 === arguments.length && (c = arguments[2], e = arguments[3], f = arguments[4]);var g = new d.Vector(a, b, c);this.immediateMode.vertices.push(g);var h = this.curFillColor || [.5, .5, .5, 1];return this.immediateMode.vertexColors.push(h[0], h[1], h[2], h[3]), this.immediateMode.uvCoords.push(e, f), this.immediateMode._bezierVertex[0] = a, this.immediateMode._bezierVertex[1] = b, this.immediateMode._bezierVertex[2] = c, this.immediateMode._quadraticVertex[0] = a, this.immediateMode._quadraticVertex[1] = b, this.immediateMode._quadraticVertex[2] = c, this;
      }, d.RendererGL.prototype.endShape = function (a, b, c, f, g, h) {
        if (this.immediateMode.shapeMode === e.POINTS) this._usePointShader(), this.curPointShader.bindShader(), this._drawPoints(this.immediateMode.vertices, this.immediateMode.pointVertexBuffer), this.curPointShader.unbindShader();else if (this.immediateMode.vertices.length > 1) {
          if (this._useImmediateModeShader(), this._doStroke && this.drawMode !== e.TEXTURE) {
            for (var i = 0; i < this.immediateMode.vertices.length - 1; i++) {
              this.immediateMode.edges.push([i, i + 1]);
            }a === e.CLOSE && this.immediateMode.edges.push([this.immediateMode.vertices.length - 1, 0]), d.Geometry.prototype._edgesToVertices.call(this.immediateMode), this._drawStrokeImmediateMode();
          }if (this._doFill) {
            if (this.isBezier || this.isQuadratic || this.isCurve) {
              var j = [new Float32Array(this._vToNArray(this.immediateMode.vertices))],
                  k = this._triangulate(j);this.immediateMode.vertices = [];for (var l = 0, m = k.length; l < m; l += 3) {
                this.vertex(k[l], k[l + 1], k[l + 2]);
              }
            }this._drawFillImmediateMode(a, b, c, f, g, h);
          }
        }return this.immediateMode.vertices.length = 0, this.immediateMode.vertexColors.length = 0, this.immediateMode.uvCoords.length = 0, this.isImmediateDrawing = !1, this.isBezier = !1, this.isQuadratic = !1, this.isCurve = !1, this.immediateMode._bezierVertex.length = 0, this.immediateMode._quadraticVertex.length = 0, this.immediateMode._curveVertex.length = 0, this;
      }, d.RendererGL.prototype._drawFillImmediateMode = function (a, b, c, d, f, g) {
        var h = this.GL;if (this.curFillShader.bindShader(), this.curFillShader.attributes.aPosition && (this._bindBuffer(this.immediateMode.vertexBuffer, h.ARRAY_BUFFER, this._vToNArray(this.immediateMode.vertices), Float32Array, h.DYNAMIC_DRAW), this.curFillShader.enableAttrib(this.curFillShader.attributes.aPosition.location, 3, h.FLOAT, !1, 0, 0)), this.drawMode === e.FILL && this.curFillShader.attributes.aVertexColor && (this._bindBuffer(this.immediateMode.colorBuffer, h.ARRAY_BUFFER, this.immediateMode.vertexColors, Float32Array, h.DYNAMIC_DRAW), this.curFillShader.enableAttrib(this.curFillShader.attributes.aVertexColor.location, 4, h.FLOAT, !1, 0, 0)), this.drawMode === e.TEXTURE && this.curFillShader.attributes.aTexCoord && (this._bindBuffer(this.immediateMode.uvBuffer, h.ARRAY_BUFFER, this.immediateMode.uvCoords, Float32Array, h.DYNAMIC_DRAW), this.curFillShader.enableAttrib(this.curFillShader.attributes.aTexCoord.location, 2, h.FLOAT, !1, 0, 0)), this.drawMode === e.FILL || this.drawMode === e.TEXTURE) switch (this.immediateMode.shapeMode) {case e.LINE_STRIP:case e.LINES:case e.TRIANGLES:
            this.immediateMode.shapeMode = this.isBezier || this.isQuadratic || this.isCurve ? e.TRIANGLES : e.TRIANGLE_FAN;} else switch (this.immediateMode.shapeMode) {case e.LINE_STRIP:case e.LINES:
            this.immediateMode.shapeMode = e.LINE_LOOP;}if (this.immediateMode.shapeMode === e.QUADS || this.immediateMode.shapeMode === e.QUAD_STRIP) throw new Error("sorry, " + this.immediateMode.shapeMode + " not yet implemented in webgl mode.");this._applyColorBlend(this.curFillColor), h.enable(h.BLEND), h.drawArrays(this.immediateMode.shapeMode, 0, this.immediateMode.vertices.length), this._pInst._pixelsDirty = !0, this.curFillShader.unbindShader();
      }, d.RendererGL.prototype._drawStrokeImmediateMode = function () {
        var a = this.GL;this.curStrokeShader.bindShader(), this.curStrokeShader.attributes.aPosition && (this._bindBuffer(this.immediateMode.lineVertexBuffer, a.ARRAY_BUFFER, this._flatten(this.immediateMode.lineVertices), Float32Array, a.STATIC_DRAW), this.curStrokeShader.enableAttrib(this.curStrokeShader.attributes.aPosition.location, 3, a.FLOAT, !1, 0, 0)), this.curStrokeShader.attributes.aDirection && (this._bindBuffer(this.immediateMode.lineNormalBuffer, a.ARRAY_BUFFER, this._flatten(this.immediateMode.lineNormals), Float32Array, a.STATIC_DRAW), this.curStrokeShader.enableAttrib(this.curStrokeShader.attributes.aDirection.location, 4, a.FLOAT, !1, 0, 0)), this._applyColorBlend(this.curStrokeColor), a.drawArrays(a.TRIANGLES, 0, this.immediateMode.lineVertices.length), this.curStrokeShader.unbindShader(), this._pInst._pixelsDirty = !0;
      }, b.exports = d.RendererGL;
    }, { "../core/constants": 18, "../core/main": 24 }], 73: [function (a, b, c) {
      "use strict";
      var d = a("../core/main"),
          e = 0;d.RendererGL.prototype._initBufferDefaults = function (a) {
        if (this._freeBuffers(a), ++e > 1e3) {
          var b = Object.keys(this.gHash)[0];delete this.gHash[b], e--;
        }this.gHash[a] = {};
      }, d.RendererGL.prototype._freeBuffers = function (a) {
        var b = this.gHash[a];if (b) {
          delete this.gHash[a], e--;var c = this.GL;b.vertexBuffer && c.deleteBuffer(b.vertexBuffer), b.normalBuffer && c.deleteBuffer(b.normalBuffer), b.lineNormalBuffer && c.deleteBuffer(b.lineNormalBuffer), b.uvBuffer && c.deleteBuffer(b.uvBuffer), b.indexBuffer && c.deleteBuffer(b.indexBuffer), b.lineVertexBuffer && c.deleteBuffer(b.lineVertexBuffer);
        }
      }, d.RendererGL.prototype.createBuffers = function (a, b) {
        var c = this.GL;this._initBufferDefaults(a);var d = this.gHash[a];return d.numberOfItems = 3 * b.faces.length, d.lineVertexCount = b.lineVertices.length, this._useColorShader(), this.curStrokeShader.attributes.aPosition && (d.lineVertexBuffer = c.createBuffer(), this._bindBuffer(d.lineVertexBuffer, c.ARRAY_BUFFER, this._flatten(b.lineVertices), Float32Array, c.STATIC_DRAW), this.curStrokeShader.enableAttrib(this.curStrokeShader.attributes.aPosition.location, 3, c.FLOAT, !1, 0, 0)), this.curStrokeShader.attributes.aDirection && (d.lineNormalBuffer = c.createBuffer(), this._bindBuffer(d.lineNormalBuffer, c.ARRAY_BUFFER, this._flatten(b.lineNormals), Float32Array, c.STATIC_DRAW), this.curStrokeShader.enableAttrib(this.curStrokeShader.attributes.aDirection.location, 4, c.FLOAT, !1, 0, 0)), this.curFillShader.attributes.aPosition && (d.vertexBuffer = c.createBuffer(), this._bindBuffer(d.vertexBuffer, c.ARRAY_BUFFER, this._vToNArray(b.vertices), Float32Array, c.STATIC_DRAW), this.curFillShader.enableAttrib(this.curFillShader.attributes.aPosition.location, 3, c.FLOAT, !1, 0, 0)), d.indexBuffer = c.createBuffer(), this._bindBuffer(d.indexBuffer, c.ELEMENT_ARRAY_BUFFER, this._flatten(b.faces), Uint16Array, c.STATIC_DRAW), this.curFillShader.attributes.aNormal && (d.normalBuffer = c.createBuffer(), this._bindBuffer(d.normalBuffer, c.ARRAY_BUFFER, this._vToNArray(b.vertexNormals), Float32Array, c.STATIC_DRAW), this.curFillShader.enableAttrib(this.curFillShader.attributes.aNormal.location, 3, c.FLOAT, !1, 0, 0)), this.curFillShader.attributes.aTexCoord && (d.uvBuffer = c.createBuffer(), this._bindBuffer(d.uvBuffer, c.ARRAY_BUFFER, this._flatten(b.uvs), Float32Array, c.STATIC_DRAW), this.curFillShader.enableAttrib(this.curFillShader.attributes.aTexCoord.location, 2, c.FLOAT, !1, 0, 0)), d;
      }, d.RendererGL.prototype.drawBuffers = function (a) {
        var b = this.GL;this._useColorShader();var c = this.gHash[a];return this._doStroke && c.lineVertexCount > 0 && (this.curStrokeShader.bindShader(), c.lineVertexBuffer && (this._bindBuffer(c.lineVertexBuffer, b.ARRAY_BUFFER), this.curStrokeShader.enableAttrib(this.curStrokeShader.attributes.aPosition.location, 3, b.FLOAT, !1, 0, 0)), c.lineNormalBuffer && (this._bindBuffer(c.lineNormalBuffer, b.ARRAY_BUFFER), this.curStrokeShader.enableAttrib(this.curStrokeShader.attributes.aDirection.location, 4, b.FLOAT, !1, 0, 0)), this._applyColorBlend(this.curStrokeColor), this._drawArrays(b.TRIANGLES, a), this.curStrokeShader.unbindShader()), !1 !== this._doFill && (this.curFillShader.bindShader(), c.vertexBuffer && (this._bindBuffer(c.vertexBuffer, b.ARRAY_BUFFER), this.curFillShader.enableAttrib(this.curFillShader.attributes.aPosition.location, 3, b.FLOAT, !1, 0, 0)), c.indexBuffer && this._bindBuffer(c.indexBuffer, b.ELEMENT_ARRAY_BUFFER), c.normalBuffer && (this._bindBuffer(c.normalBuffer, b.ARRAY_BUFFER), this.curFillShader.enableAttrib(this.curFillShader.attributes.aNormal.location, 3, b.FLOAT, !1, 0, 0)), c.uvBuffer && (this._bindBuffer(c.uvBuffer, b.ARRAY_BUFFER), this.curFillShader.enableAttrib(this.curFillShader.attributes.aTexCoord.location, 2, b.FLOAT, !1, 0, 0)), this._applyColorBlend(this.curFillColor), this._drawElements(b.TRIANGLES, a), this.curFillShader.unbindShader()), this;
      }, d.RendererGL.prototype.drawBuffersScaled = function (a, b, c, d) {
        var e = this.uMVMatrix.copy();try {
          this.uMVMatrix.scale(b, c, d), this.drawBuffers(a);
        } finally {
          this.uMVMatrix = e;
        }
      }, d.RendererGL.prototype._drawArrays = function (a, b) {
        return this.GL.drawArrays(a, 0, this.gHash[b].lineVertexCount), this._pInst._pixelsDirty = !0, this;
      }, d.RendererGL.prototype._drawElements = function (a, b) {
        this.GL.drawElements(a, this.gHash[b].numberOfItems, this.GL.UNSIGNED_SHORT, 0), this._pInst._pixelsDirty = !0;
      }, d.RendererGL.prototype._drawPoints = function (a, b) {
        var c = this.GL;this._bindBuffer(b, c.ARRAY_BUFFER, this._vToNArray(a), Float32Array, c.STATIC_DRAW), this.curPointShader.enableAttrib(this.curPointShader.attributes.aPosition.location, 3, c.FLOAT, !1, 0, 0), c.drawArrays(c.Points, 0, a.length);
      }, b.exports = d.RendererGL;
    }, { "../core/main": 24 }], 74: [function (a, b, c) {
      "use strict";
      var d = a("../core/main"),
          e = a("../core/constants"),
          f = a("libtess");a("./p5.Shader"), a("./p5.Camera"), a("../core/p5.Renderer"), a("./p5.Matrix");var g = { immediateVert: "attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uResolution;\nuniform float uPointSize;\n\nvarying vec4 vColor;\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n  gl_PointSize = uPointSize;\n}\n", vertexColorVert: "attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n}\n", vertexColorFrag: "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n  gl_FragColor = vColor;\n}", normalVert: "attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\n\nvarying vec3 vVertexNormal;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vVertexNormal = normalize(vec3( uNormalMatrix * aNormal ));\n  vVertTexCoord = aTexCoord;\n}\n", normalFrag: "precision mediump float;\nvarying vec3 vVertexNormal;\nvoid main(void) {\n  gl_FragColor = vec4(vVertexNormal, 1.0);\n}", basicFrag: "precision mediump float;\nvarying vec3 vVertexNormal;\nuniform vec4 uMaterialColor;\nvoid main(void) {\n  gl_FragColor = uMaterialColor;\n}", lightVert: "attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uViewMatrix;\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform int uAmbientLightCount;\nuniform int uDirectionalLightCount;\nuniform int uPointLightCount;\n\nuniform vec3 uAmbientColor[8];\nuniform vec3 uLightingDirection[8];\nuniform vec3 uDirectionalColor[8];\nuniform vec3 uPointLightLocation[8];\nuniform vec3 uPointLightColor[8];\nuniform bool uSpecular;\n\nvarying vec3 vVertexNormal;\nvarying vec2 vVertTexCoord;\nvarying vec3 vLightWeighting;\n\nvoid main(void){\n\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n\n  vec3 vertexNormal = normalize(vec3( uNormalMatrix * aNormal ));\n  vVertexNormal = vertexNormal;\n  vVertTexCoord = aTexCoord;\n\n  vec4 mvPosition = uModelViewMatrix * vec4(aPosition, 1.0);\n  vec3 eyeDirection = normalize(-mvPosition.xyz);\n\n  float shininess = 32.0;\n  float specularFactor = 2.0;\n  float diffuseFactor = 0.3;\n\n  vec3 ambientLightFactor = vec3(0.0);\n\n  for (int i = 0; i < 8; i++) {\n    if (uAmbientLightCount == i) break;\n    ambientLightFactor += uAmbientColor[i];\n  }\n\n\n  vec3 directionalLightFactor = vec3(0.0);\n\n  for (int j = 0; j < 8; j++) {\n    if (uDirectionalLightCount == j) break;\n    vec3 dir = uLightingDirection[j];\n    float directionalLightWeighting = max(dot(vertexNormal, -dir), 0.0);\n    directionalLightFactor += uDirectionalColor[j] * directionalLightWeighting;\n  }\n\n\n  vec3 pointLightFactor = vec3(0.0);\n\n  for (int k = 0; k < 8; k++) {\n    if (uPointLightCount == k) break;\n    vec3 loc = (uViewMatrix * vec4(uPointLightLocation[k], 1.0)).xyz;\n    vec3 lightDirection = normalize(loc - mvPosition.xyz);\n\n    float directionalLightWeighting = max(dot(vertexNormal, lightDirection), 0.0);\n\n    float specularLightWeighting = 0.0;\n    if (uSpecular ){\n      vec3 reflectionDirection = reflect(-lightDirection, vertexNormal);\n      specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininess);\n    }\n\n    pointLightFactor += uPointLightColor[k] * (specularFactor * specularLightWeighting\n      + directionalLightWeighting * diffuseFactor);\n  }\n\n  vLightWeighting =  ambientLightFactor + directionalLightFactor + pointLightFactor;\n}\n", lightTextureFrag: "precision mediump float;\n\nuniform vec4 uMaterialColor;\nuniform sampler2D uSampler;\nuniform bool isTexture;\nuniform bool uUseLighting;\n\nvarying vec3 vLightWeighting;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  gl_FragColor = isTexture ? texture2D(uSampler, vVertTexCoord) : uMaterialColor;\n  if (uUseLighting)\n    gl_FragColor.rgb *= vLightWeighting;\n}", phongVert: "precision mediump float;\n\nattribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform vec3 uAmbientColor[8];\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform int uAmbientLightCount;\n\nvarying vec3 vNormal;\nvarying vec2 vTexCoord;\nvarying vec3 vViewPosition;\nvarying vec3 vAmbientColor;\n\nvoid main(void){\n\n  vec4 viewModelPosition = uModelViewMatrix * vec4(aPosition, 1.0);\n\n  // Pass varyings to fragment shader\n  vViewPosition = viewModelPosition.xyz;\n  gl_Position = uProjectionMatrix * viewModelPosition;  \n\n  vNormal = normalize(uNormalMatrix * normalize(aNormal));\n  vTexCoord = aTexCoord;\n\n  vAmbientColor = vec3(0.0);\n  for (int i = 0; i < 8; i++) {\n    if (uAmbientLightCount == i) break;\n    vAmbientColor += uAmbientColor[i];\n  }\n}\n",
        phongFrag: "precision mediump float;\n\n//uniform mat4 uModelViewMatrix;\nuniform mat4 uViewMatrix;\n\nuniform vec4 uMaterialColor;\nuniform sampler2D uSampler;\nuniform bool isTexture;\nuniform bool uUseLighting;\n\nuniform vec3 uLightingDirection[8];\nuniform vec3 uDirectionalColor[8];\nuniform vec3 uPointLightLocation[8];\nuniform vec3 uPointLightColor[8];\nuniform bool uSpecular;\n\nuniform int uDirectionalLightCount;\nuniform int uPointLightCount;\n\nvarying vec3 vNormal;\nvarying vec2 vTexCoord;\nvarying vec3 vViewPosition;\nvarying vec3 vAmbientColor;\n\nvec3 V;\nvec3 N;\n\nconst float shininess = 32.0;\nconst float specularFactor = 2.0;\nconst float diffuseFactor = 0.73;\n\nstruct LightResult {\n\tfloat specular;\n\tfloat diffuse;\n};\n\nfloat phongSpecular(\n  vec3 lightDirection,\n  vec3 viewDirection,\n  vec3 surfaceNormal,\n  float shininess) {\n\n  vec3 R = normalize(reflect(-lightDirection, surfaceNormal));  \n  return pow(max(0.0, dot(R, viewDirection)), shininess);\n}\n\nfloat lambertDiffuse(\n  vec3 lightDirection,\n  vec3 surfaceNormal) {\n  return max(0.0, dot(-lightDirection, surfaceNormal));\n}\n\nLightResult light(vec3 lightVector) {\n\n  vec3 L = normalize(lightVector);\n\n  //compute our diffuse & specular terms\n  LightResult lr;\n  if (uSpecular)\n    lr.specular = phongSpecular(L, V, N, shininess);\n  lr.diffuse = lambertDiffuse(L, N);\n  return lr;\n}\n\nvoid main(void) {\n\n  V = normalize(vViewPosition);\n  N = vNormal;\n\n  vec3 diffuse = vec3(0.0);\n  float specular = 0.0;\n\n  for (int j = 0; j < 8; j++) {\n    if (uDirectionalLightCount == j) break;\n\n    LightResult result = light(uLightingDirection[j]);\n    diffuse += result.diffuse * uDirectionalColor[j];\n    specular += result.specular;\n  }\n\n  for (int k = 0; k < 8; k++) {\n    if (uPointLightCount == k) break;\n\n    vec3 lightPosition = (uViewMatrix * vec4(uPointLightLocation[k], 1.0)).xyz;\n    vec3 lightVector = vViewPosition - lightPosition;\n\t\n    //calculate attenuation\n    float lightDistance = length(lightVector);\n    float falloff = 500.0 / (lightDistance + 500.0);\n\n    LightResult result = light(lightVector);\n    diffuse += result.diffuse * falloff * uPointLightColor[k];\n    specular += result.specular * falloff;\n  }\n\n  gl_FragColor = isTexture ? texture2D(uSampler, vTexCoord) : uMaterialColor;\n  gl_FragColor.rgb = gl_FragColor.rgb * (diffuse * diffuseFactor + vAmbientColor) + specular * specularFactor;\n}", fontVert: "precision mediump float;\n\nattribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nuniform vec4 uGlyphRect;\nuniform float uGlyphOffset;\n\nvarying vec2 vTexCoord;\nvarying float w;\n\nvoid main() {\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n\n  // scale by the size of the glyph's rectangle\n  positionVec4.xy *= uGlyphRect.zw - uGlyphRect.xy;\n\n  // move to the corner of the glyph\n  positionVec4.xy += uGlyphRect.xy;\n\n  // move to the letter's line offset\n  positionVec4.x += uGlyphOffset;\n  \n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vTexCoord = aTexCoord;\n  w = gl_Position.w;\n}\n", fontFrag: "#extension GL_OES_standard_derivatives : enable\nprecision mediump float;\n\n#if 0\n  // simulate integer math using floats\n\t#define int float\n\t#define ivec2 vec2\n\t#define INT(x) float(x)\n\n\tint ifloor(float v) { return floor(v); }\n\tivec2 ifloor(vec2 v) { return floor(v); }\n\n#else\n  // use native integer math\n\tprecision mediump int;\n\t#define INT(x) x\n\n\tint ifloor(float v) { return int(v); }\n\tint ifloor(int v) { return v; }\n\tivec2 ifloor(vec2 v) { return ivec2(v); }\n\n#endif\n\nuniform sampler2D uSamplerStrokes;\nuniform sampler2D uSamplerRowStrokes;\nuniform sampler2D uSamplerRows;\nuniform sampler2D uSamplerColStrokes;\nuniform sampler2D uSamplerCols;\n\nuniform ivec2 uStrokeImageSize;\nuniform ivec2 uCellsImageSize;\nuniform ivec2 uGridImageSize;\n\nuniform ivec2 uGridOffset;\nuniform ivec2 uGridSize;\nuniform vec4 uMaterialColor;\n\nvarying vec2 vTexCoord;\n\n// some helper functions\nint round(float v) { return ifloor(v + 0.5); }\nivec2 round(vec2 v) { return ifloor(v + 0.5); }\nfloat saturate(float v) { return clamp(v, 0.0, 1.0); }\nvec2 saturate(vec2 v) { return clamp(v, 0.0, 1.0); }\n\nint mul(float v1, int v2) {\n  return ifloor(v1 * float(v2));\n}\n\nivec2 mul(vec2 v1, ivec2 v2) {\n  return ifloor(v1 * vec2(v2) + 0.5);\n}\n\n// unpack a 16-bit integer from a float vec2\nint getInt16(vec2 v) {\n  ivec2 iv = round(v * 255.0);\n  return iv.x * INT(128) + iv.y;\n}\n\nvec2 pixelScale;\nvec2 coverage = vec2(0.0);\nvec2 weight = vec2(0.5);\nconst float minDistance = 1.0/8192.0;\nconst float hardness = 1.05; // amount of antialias\n\n// the maximum number of curves in a glyph\nconst int N = INT(250);\n\n// retrieves an indexed pixel from a sampler\nvec4 getTexel(sampler2D sampler, int pos, ivec2 size) {\n  int width = size.x;\n  int y = ifloor(pos / width);\n  int x = pos - y * width;  // pos % width\n\n  return texture2D(sampler, (vec2(x, y) + 0.5) / vec2(size));\n}\n\nvoid calulateCrossings(vec2 p0, vec2 p1, vec2 p2, out vec2 C1, out vec2 C2) {\n\n  // get the coefficients of the quadratic in t\n  vec2 a = p0 - p1 * 2.0 + p2;\n  vec2 b = p0 - p1;\n  vec2 c = p0 - vTexCoord;\n\n  // found out which values of 't' it crosses the axes\n  vec2 surd = sqrt(max(vec2(0.0), b * b - a * c));\n  vec2 t1 = ((b - surd) / a).yx;\n  vec2 t2 = ((b + surd) / a).yx;\n\n  // approximate straight lines to avoid rounding errors\n  if (abs(a.y) < 0.001)\n    t1.x = t2.x = c.y / (2.0 * b.y);\n\n  if (abs(a.x) < 0.001)\n    t1.y = t2.y = c.x / (2.0 * b.x);\n\n  // plug into quadratic formula to find the corrdinates of the crossings\n  C1 = ((a * t1 - b * 2.0) * t1 + c) * pixelScale;\n  C2 = ((a * t2 - b * 2.0) * t2 + c) * pixelScale;\n}\n\nvoid coverageX(vec2 p0, vec2 p1, vec2 p2) {\n\n  vec2 C1, C2;\n  calulateCrossings(p0, p1, p2, C1, C2);\n\n  // determine on which side of the x-axis the points lie\n  bool y0 = p0.y > vTexCoord.y;\n  bool y1 = p1.y > vTexCoord.y;\n  bool y2 = p2.y > vTexCoord.y;\n\n  // could web be under the curve (after t1)?\n  if (y1 ? !y2 : y0) {\n    // add the coverage for t1\n    coverage.x += saturate(C1.x + 0.5);\n    // calculate the anti-aliasing for t1\n    weight.x = min(weight.x, abs(C1.x));\n  }\n\n  // are we outside the curve (after t2)?\n  if (y1 ? !y0 : y2) {\n    // subtract the coverage for t2\n    coverage.x -= saturate(C2.x + 0.5);\n    // calculate the anti-aliasing for t2\n    weight.x = min(weight.x, abs(C2.x));\n  }\n}\n\n// this is essentially the same as coverageX, but with the axes swapped\nvoid coverageY(vec2 p0, vec2 p1, vec2 p2) {\n\n  vec2 C1, C2;\n  calulateCrossings(p0, p1, p2, C1, C2);\n\n  bool x0 = p0.x > vTexCoord.x;\n  bool x1 = p1.x > vTexCoord.x;\n  bool x2 = p2.x > vTexCoord.x;\n\n  if (x1 ? !x2 : x0) {\n    coverage.y -= saturate(C1.y + 0.5);\n    weight.y = min(weight.y, abs(C1.y));\n  }\n\n  if (x1 ? !x0 : x2) {\n    coverage.y += saturate(C2.y + 0.5);\n    weight.y = min(weight.y, abs(C2.y));\n  }\n}\n\nvoid main() {\n\n  // calculate the pixel scale based on screen-coordinates\n  pixelScale = hardness / fwidth(vTexCoord);\n\n  // which grid cell is this pixel in?\n  ivec2 gridCoord = ifloor(vTexCoord * vec2(uGridSize));\n\n  // intersect curves in this row\n  {\n    // the index into the row info bitmap\n    int rowIndex = gridCoord.y + uGridOffset.y;\n    // fetch the info texel\n    vec4 rowInfo = getTexel(uSamplerRows, rowIndex, uGridImageSize);\n    // unpack the rowInfo\n    int rowStrokeIndex = getInt16(rowInfo.xy);\n    int rowStrokeCount = getInt16(rowInfo.zw);\n\n    for (int iRowStroke = INT(0); iRowStroke < N; iRowStroke++) {\n      if (iRowStroke >= rowStrokeCount)\n        break;\n\n      // each stroke is made up of 3 points: the start and control point\n      // and the start of the next curve.\n      // fetch the indices of this pair of strokes:\n      vec4 strokeIndices = getTexel(uSamplerRowStrokes, rowStrokeIndex++, uCellsImageSize);\n\n      // unpack the stroke index\n      int strokePos = getInt16(strokeIndices.xy);\n\n      // fetch the two strokes\n      vec4 stroke0 = getTexel(uSamplerStrokes, strokePos + INT(0), uStrokeImageSize);\n      vec4 stroke1 = getTexel(uSamplerStrokes, strokePos + INT(1), uStrokeImageSize);\n\n      // calculate the coverage\n      coverageX(stroke0.xy, stroke0.zw, stroke1.xy);\n    }\n  }\n\n  // intersect curves in this column\n  {\n    int colIndex = gridCoord.x + uGridOffset.x;\n    vec4 colInfo = getTexel(uSamplerCols, colIndex, uGridImageSize);\n    int colStrokeIndex = getInt16(colInfo.xy);\n    int colStrokeCount = getInt16(colInfo.zw);\n    \n    for (int iColStroke = INT(0); iColStroke < N; iColStroke++) {\n      if (iColStroke >= colStrokeCount)\n        break;\n\n      vec4 strokeIndices = getTexel(uSamplerColStrokes, colStrokeIndex++, uCellsImageSize);\n\n      int strokePos = getInt16(strokeIndices.xy);\n      vec4 stroke0 = getTexel(uSamplerStrokes, strokePos + INT(0), uStrokeImageSize);\n      vec4 stroke1 = getTexel(uSamplerStrokes, strokePos + INT(1), uStrokeImageSize);\n      coverageY(stroke0.xy, stroke0.zw, stroke1.xy);\n    }\n  }\n\n  weight = saturate(1.0 - weight * 2.0);\n  float distance = max(weight.x + weight.y, minDistance); // manhattan approx.\n  float antialias = abs(dot(coverage, weight) / distance);\n  float cover = min(abs(coverage.x), abs(coverage.y));\n  gl_FragColor = uMaterialColor;\n  gl_FragColor.a *= saturate(max(antialias, cover));\n}", lineVert: "/*\n  Part of the Processing project - http://processing.org\n  Copyright (c) 2012-15 The Processing Foundation\n  Copyright (c) 2004-12 Ben Fry and Casey Reas\n  Copyright (c) 2001-04 Massachusetts Institute of Technology\n  This library is free software; you can redistribute it and/or\n  modify it under the terms of the GNU Lesser General Public\n  License as published by the Free Software Foundation, version 2.1.\n  This library is distributed in the hope that it will be useful,\n  but WITHOUT ANY WARRANTY; without even the implied warranty of\n  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n  Lesser General Public License for more details.\n  You should have received a copy of the GNU Lesser General\n  Public License along with this library; if not, write to the\n  Free Software Foundation, Inc., 59 Temple Place, Suite 330,\n  Boston, MA  02111-1307  USA\n*/\n\n#define PROCESSING_LINE_SHADER\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uStrokeWeight;\n\nuniform vec4 uViewport;\n\n// using a scale <1 moves the lines towards the camera\n// in order to prevent popping effects due to half of\n// the line disappearing behind the geometry faces.\nvec3 scale = vec3(0.9995);\n\nattribute vec4 aPosition;\nattribute vec4 aDirection;\n  \nvoid main() {\n  vec4 posp = uModelViewMatrix * aPosition;\n  vec4 posq = uModelViewMatrix * (aPosition + vec4(aDirection.xyz, 0));\n\n  // Moving vertices slightly toward the camera\n  // to avoid depth-fighting with the fill triangles.\n  // Discussed here:\n  // http://www.opengl.org/discussion_boards/ubbthreads.php?ubb=showflat&Number=252848  \n  posp.xyz = posp.xyz * scale;\n  posq.xyz = posq.xyz * scale;\n\n  vec4 p = uProjectionMatrix * posp;\n  vec4 q = uProjectionMatrix * posq;\n\n  // formula to convert from clip space (range -1..1) to screen space (range 0..[width or height])\n  // screen_p = (p.xy/p.w + <1,1>) * 0.5 * uViewport.zw\n\n  // prevent division by W by transforming the tangent formula (div by 0 causes\n  // the line to disappear, see https://github.com/processing/processing/issues/5183)\n  // t = screen_q - screen_p\n  //\n  // tangent is normalized and we don't care which aDirection it points to (+-)\n  // t = +- normalize( screen_q - screen_p )\n  // t = +- normalize( (q.xy/q.w+<1,1>)*0.5*uViewport.zw - (p.xy/p.w+<1,1>)*0.5*uViewport.zw )\n  //\n  // extract common factor, <1,1> - <1,1> cancels out\n  // t = +- normalize( (q.xy/q.w - p.xy/p.w) * 0.5 * uViewport.zw )\n  //\n  // convert to common divisor\n  // t = +- normalize( ((q.xy*p.w - p.xy*q.w) / (p.w*q.w)) * 0.5 * uViewport.zw )\n  //\n  // remove the common scalar divisor/factor, not needed due to normalize and +-\n  // (keep uViewport - can't remove because it has different components for x and y\n  //  and corrects for aspect ratio, see https://github.com/processing/processing/issues/5181)\n  // t = +- normalize( (q.xy*p.w - p.xy*q.w) * uViewport.zw )\n\n  vec2 tangent = normalize((q.xy*p.w - p.xy*q.w) * uViewport.zw);\n\n  // flip tangent to normal (it's already normalized)\n  vec2 normal = vec2(-tangent.y, tangent.x);\n\n  float thickness = aDirection.w * uStrokeWeight;\n  vec2 offset = normal * thickness / 2.0;\n\n  // Perspective ---\n  // convert from world to clip by multiplying with projection scaling factor\n  // to get the right thickness (see https://github.com/processing/processing/issues/5182)\n  // invert Y, projections in Processing invert Y\n  vec2 perspScale = (uProjectionMatrix * vec4(1, -1, 0, 0)).xy;\n\n  // No Perspective ---\n  // multiply by W (to cancel out division by W later in the pipeline) and\n  // convert from screen to clip (derived from clip to screen above)\n  vec2 noPerspScale = p.w / (0.5 * uViewport.zw);\n\n  //gl_Position.xy = p.xy + offset.xy * mix(noPerspScale, perspScale, float(perspective > 0));\n  gl_Position.xy = p.xy + offset.xy * perspScale;\n  gl_Position.zw = p.zw;\n}\n", lineFrag: "precision mediump float;\nprecision mediump int;\n\nuniform vec4 uMaterialColor;\n\nvoid main() {\n  gl_FragColor = uMaterialColor;\n}", pointVert: "attribute vec3 aPosition;\nuniform float uPointSize;\nvarying float vStrokeWeight;\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nvoid main() {\n\tvec4 positionVec4 =  vec4(aPosition, 1.0);\n\tgl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n\tgl_PointSize = uPointSize;\n\tvStrokeWeight = uPointSize;\n}", pointFrag: "precision mediump float;\nprecision mediump int;\nuniform vec4 uMaterialColor;\nvarying float vStrokeWeight;\n\nvoid main(){\n\tfloat mask = 0.0;\n\n\t// make a circular mask using the gl_PointCoord (goes from 0 - 1 on a point)\n    // might be able to get a nicer edge on big strokeweights with smoothstep but slightly less performant\n\n\tmask = step(0.98, length(gl_PointCoord * 2.0 - 1.0));\n\n\t// if strokeWeight is 1 or less lets just draw a square\n\t// this prevents weird artifacting from carving circles when our points are really small\n\t// if strokeWeight is larger than 1, we just use it as is\n\n\tmask = mix(0.0, mask, clamp(floor(vStrokeWeight - 0.5),0.0,1.0));\n\n\t// throw away the borders of the mask\n    // otherwise we get weird alpha blending issues\n\n\tif(mask > 0.98){\n      discard;\n  \t}\n\n  \tgl_FragColor = vec4(uMaterialColor.rgb * (1.0 - mask), uMaterialColor.a) ;\n}" };d.RendererGL = function (a, b, c, e) {
        return d.Renderer.call(this, a, b, c), this.attributes = {}, e = e || {}, this.attributes.alpha = void 0 === e.alpha || e.alpha, this.attributes.depth = void 0 === e.depth || e.depth, this.attributes.stencil = void 0 === e.stencil || e.stencil, this.attributes.antialias = void 0 !== e.antialias && e.antialias, this.attributes.premultipliedAlpha = void 0 !== e.premultipliedAlpha && e.premultipliedAlpha, this.attributes.preserveDrawingBuffer = void 0 === e.preserveDrawingBuffer || e.preserveDrawingBuffer, this.attributes.perPixelLighting = void 0 !== e.perPixelLighting && e.perPixelLighting, this._initContext(), this.isP3D = !0, this.GL = this.drawingContext, this.ambientLightColors = [], this.directionalLightDirections = [], this.directionalLightColors = [], this.pointLightPositions = [], this.pointLightColors = [], this.uMVMatrix = new d.Matrix(), this.uPMatrix = new d.Matrix(), this.uNMatrix = new d.Matrix("mat3"), this._curCamera = new d.Camera(this), this._curCamera._computeCameraDefaultSettings(), this._curCamera._setDefaultCamera(), this.gHash = {}, this._defaultLightShader = void 0, this._defaultImmediateModeShader = void 0, this._defaultNormalShader = void 0, this._defaultColorShader = void 0, this._defaultPointShader = void 0, this.curFillShader = void 0, this.curStrokeShader = void 0, this.curPointShader = void 0, this._useColorShader(), this.setStrokeShader(this._getLineShader()), this._usePointShader(), this._pointVertexBuffer = this.GL.createBuffer(), this.isImmediateDrawing = !1, this.immediateMode = {}, this.fill(255, 255, 255, 255), this.pointSize = 5, this.strokeWeight(1), this.stroke(0, 0, 0), this.textures = [], this._curveTightness = 6, this._lookUpTableBezier = [], this._lookUpTableQuadratic = [], this._lutBezierDetail = 0, this._lutQuadraticDetail = 0, this._tessy = this._initTessy(), this.fontInfos = {}, this;
      }, d.RendererGL.prototype = Object.create(d.Renderer.prototype), d.RendererGL.prototype._initContext = function () {
        try {
          if (this.drawingContext = this.canvas.getContext("webgl", this.attributes) || this.canvas.getContext("experimental-webgl", this.attributes), null === this.drawingContext) throw new Error("Error creating webgl context");console.log("p5.RendererGL: enabled webgl context");var a = this.drawingContext;a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL), a.viewport(0, 0, a.drawingBufferWidth, a.drawingBufferHeight), this._viewport = this.drawingContext.getParameter(this.drawingContext.VIEWPORT);
        } catch (a) {
          throw a;
        }
      }, d.RendererGL.prototype._resetContext = function (a, b, c) {
        var e = this.width,
            f = this.height,
            g = this.canvas.id,
            h = this.canvas;h && h.parentNode.removeChild(h), h = document.createElement("canvas"), h.id = g, this._pInst._userNode ? this._pInst._userNode.appendChild(h) : document.body.appendChild(h), this._pInst.canvas = h;var i = new d.RendererGL(this._pInst.canvas, this._pInst, !0, a);this._pInst._setProperty("_renderer", i), i.resize(e, f), i._applyDefaults(), this._pInst._elements.push(i), "function" == typeof c && setTimeout(function () {
          c.apply(window._renderer, b);
        }, 0);
      }, d.prototype.setAttributes = function (a, b) {
        this._assert3d("setAttributes");var c;void 0 !== b ? (c = {}, c[a] = b) : a instanceof Object && (c = a), this.push(), this._renderer._resetContext(c), this.pop();
      }, d.RendererGL.prototype._update = function () {
        this.uMVMatrix.set(this._curCamera.cameraMatrix.mat4[0], this._curCamera.cameraMatrix.mat4[1], this._curCamera.cameraMatrix.mat4[2], this._curCamera.cameraMatrix.mat4[3], this._curCamera.cameraMatrix.mat4[4], this._curCamera.cameraMatrix.mat4[5], this._curCamera.cameraMatrix.mat4[6], this._curCamera.cameraMatrix.mat4[7], this._curCamera.cameraMatrix.mat4[8], this._curCamera.cameraMatrix.mat4[9], this._curCamera.cameraMatrix.mat4[10], this._curCamera.cameraMatrix.mat4[11], this._curCamera.cameraMatrix.mat4[12], this._curCamera.cameraMatrix.mat4[13], this._curCamera.cameraMatrix.mat4[14], this._curCamera.cameraMatrix.mat4[15]), this.ambientLightColors.length = 0, this.directionalLightDirections.length = 0, this.directionalLightColors.length = 0, this.pointLightPositions.length = 0, this.pointLightColors.length = 0;
      }, d.RendererGL.prototype.background = function () {
        var a = this._pInst.color.apply(this._pInst, arguments),
            b = a.levels[0] / 255,
            c = a.levels[1] / 255,
            d = a.levels[2] / 255,
            e = a.levels[3] / 255;this.GL.clearColor(b, c, d, e), this.GL.depthMask(!0), this.GL.clear(this.GL.COLOR_BUFFER_BIT | this.GL.DEPTH_BUFFER_BIT);
      }, d.RendererGL.prototype.fill = function (a, b, c, f) {
        var g = d.prototype.color.apply(this._pInst, arguments);this.curFillColor = g._array, this.isImmediateDrawing ? this.setFillShader(this._getImmediateModeShader()) : this.setFillShader(this._getColorShader()), this.drawMode = e.FILL, this.curFillShader.setUniform("uMaterialColor", this.curFillColor);
      }, d.RendererGL.prototype.stroke = function (a, b, c, e) {
        arguments[3] = 255;var f = d.prototype.color.apply(this._pInst, arguments);this.curStrokeColor = f._array, this.curStrokeShader.setUniform("uMaterialColor", this.curStrokeColor), this.curPointShader.setUniform("uMaterialColor", f._array);
      }, d.RendererGL.prototype.strokeWeight = function (a) {
        this.curStrokeWeight !== a && (this.pointSize = a, this.curStrokeWeight = a, this.curStrokeShader.setUniform("uStrokeWeight", a), this.curPointShader.setUniform("uPointSize", a));
      }, d.RendererGL.prototype.get = function (a, b, c, e) {
        return d.Renderer2D.prototype.get.apply(this, [a, b, c, e]);
      }, d.RendererGL.prototype.loadPixels = function () {
        if (!0 !== this.attributes.preserveDrawingBuffer) return void console.log("loadPixels only works in WebGL when preserveDrawingBuffer is true.");var a = this._pInst._pixelDensity,
            b = this.width,
            c = this.height;b *= a, c *= a, void 0 === this.pixels && (this.pixels = new Uint8Array(this.GL.drawingBufferWidth * this.GL.drawingBufferHeight * 4)), this.GL.readPixels(0, 0, b, c, this.GL.RGBA, this.GL.UNSIGNED_BYTE, this.pixels), this._pInst._setProperty("pixels", this.pixels);
      }, d.RendererGL.prototype.geometryInHash = function (a) {
        return void 0 !== this.gHash[a];
      }, d.RendererGL.prototype.resize = function (a, b) {
        d.Renderer.prototype.resize.call(this, a, b), this.GL.viewport(0, 0, this.GL.drawingBufferWidth, this.GL.drawingBufferHeight), this._viewport = this.GL.getParameter(this.GL.VIEWPORT), this._curCamera._resize(), void 0 !== this.pixels && (this.pixels = new Uint8Array(this.GL.drawingBufferWidth * this.GL.drawingBufferHeight * 4));
      }, d.RendererGL.prototype.clear = function () {
        var a = arguments[0] || 0,
            b = arguments[1] || 0,
            c = arguments[2] || 0,
            d = arguments[3] || 0;this.GL.clearColor(a, b, c, d), this.GL.clear(this.GL.COLOR_BUFFER_BIT | this.GL.DEPTH_BUFFER_BIT);
      }, d.RendererGL.prototype.translate = function (a, b, c) {
        return a instanceof d.Vector && (c = a.z, b = a.y, a = a.x), this.uMVMatrix.translate([a, b, c]), this;
      }, d.RendererGL.prototype.scale = function (a, b, c) {
        return this.uMVMatrix.scale(a, b, c), this;
      }, d.RendererGL.prototype.rotate = function (a, b) {
        return void 0 === b ? this.rotateZ(a) : (arguments[0] = this._pInst._fromRadians(a), d.Matrix.prototype.rotate.apply(this.uMVMatrix, arguments), this);
      }, d.RendererGL.prototype.rotateX = function (a) {
        return this.rotate(a, 1, 0, 0), this;
      }, d.RendererGL.prototype.rotateY = function (a) {
        return this.rotate(a, 0, 1, 0), this;
      }, d.RendererGL.prototype.rotateZ = function (a) {
        return this.rotate(a, 0, 0, 1), this;
      }, d.RendererGL.prototype.push = function () {
        var a = d.Renderer.prototype.push.apply(this),
            b = a.properties;return b.uMVMatrix = this.uMVMatrix.copy(), b.uPMatrix = this.uPMatrix.copy(), b._curCamera = this._curCamera, this._curCamera = this._curCamera.copy(), a;
      }, d.RendererGL.prototype.resetMatrix = function () {
        return this.uMVMatrix = d.Matrix.identity(this._pInst), this;
      }, d.RendererGL.prototype.setFillShader = function (a) {
        return this.curFillShader !== a && (this.curFillShader = a, this.curFillShader.init()), this.curFillShader;
      }, d.RendererGL.prototype.setPointShader = function (a) {
        return this.curPointShader !== a && (this.curPointShader = a, this.curPointShader.init()), this.curPointShader;
      }, d.RendererGL.prototype.setStrokeShader = function (a) {
        return this.curStrokeShader !== a && (this.curStrokeShader = a, this.curStrokeShader.init()), this.curStrokeShader;
      }, d.RendererGL.prototype._useLightShader = function () {
        return this.curFillShader && this.curFillShader.isLightShader() || this.setFillShader(this._getLightShader()), this.curFillShader;
      }, d.RendererGL.prototype._useColorShader = function () {
        return this.curFillShader && this.curFillShader !== this._defaultImmediateModeShader || this.setFillShader(this._getColorShader()), this.curFillShader;
      }, d.RendererGL.prototype._usePointShader = function () {
        return this.curPointShader || this.setPointShader(this._getPointShader()), this.curPointShader;
      }, d.RendererGL.prototype._useImmediateModeShader = function () {
        return this.curFillShader && this.curFillShader !== this._defaultColorShader || this.setFillShader(this._getImmediateModeShader()), this.curFillShader;
      }, d.RendererGL.prototype._getLightShader = function () {
        return this._defaultLightShader || (this.attributes.perPixelLighting ? this._defaultLightShader = new d.Shader(this, g.phongVert, g.phongFrag) : this._defaultLightShader = new d.Shader(this, g.lightVert, g.lightTextureFrag)), this._defaultLightShader;
      }, d.RendererGL.prototype._getImmediateModeShader = function () {
        return this._defaultImmediateModeShader || (this._defaultImmediateModeShader = new d.Shader(this, g.immediateVert, g.vertexColorFrag)), this._defaultImmediateModeShader;
      }, d.RendererGL.prototype._getNormalShader = function () {
        return this._defaultNormalShader || (this._defaultNormalShader = new d.Shader(this, g.normalVert, g.normalFrag)), this._defaultNormalShader;
      }, d.RendererGL.prototype._getColorShader = function () {
        return this._defaultColorShader || (this._defaultColorShader = new d.Shader(this, g.normalVert, g.basicFrag)), this._defaultColorShader;
      }, d.RendererGL.prototype._getPointShader = function () {
        return this._defaultPointShader || (this._defaultPointShader = new d.Shader(this, g.pointVert, g.pointFrag)), this._defaultPointShader;
      }, d.RendererGL.prototype._getLineShader = function () {
        return this._defaultLineShader || (this._defaultLineShader = new d.Shader(this, g.lineVert, g.lineFrag)), this._defaultLineShader;
      }, d.RendererGL.prototype._getFontShader = function () {
        return this._defaultFontShader || (this.GL.getExtension("OES_standard_derivatives"), this._defaultFontShader = new d.Shader(this, g.fontVert, g.fontFrag)), this._defaultFontShader;
      }, d.RendererGL.prototype._getEmptyTexture = function () {
        if (!this._emptyTexture) {
          var a = new d.Image(1, 1);a.set(0, 0, 255), this._emptyTexture = new d.Texture(this, a);
        }return this._emptyTexture;
      }, d.RendererGL.prototype.getTexture = function (a) {
        for (var b = this.textures, c = 0; c < b.length; ++c) {
          var e = b[c];if (e.src === a) return e;
        }var f = new d.Texture(this, a);return this.textures.push(f), f;
      }, d.RendererGL.prototype._bindBuffer = function (a, b, c, d, e) {
        if (this.GL.bindBuffer(b, a), void 0 !== c) {
          var f = new d(c);this.GL.bufferData(b, f, e);
        }
      }, d.RendererGL.prototype.smooth = function () {
        !1 === this.attributes.antialias && this._pInst.setAttributes("antialias", !0);
      }, d.RendererGL.prototype.noSmooth = function () {
        !0 === this.attributes.antialias && this._pInst.setAttributes("antialias", !1);
      }, d.RendererGL.prototype._flatten = function (a) {
        if (0 === a.length) return [];if (a.length > 2e4) {
          var b,
              c = Object.prototype.toString,
              d = "[object Array]",
              e = [],
              f = a.slice();b = f.pop();do {
            c.call(b) === d ? f.push.apply(f, b) : e.push(b);
          } while (f.length && void 0 !== (b = f.pop()));return e.reverse(), e;
        }return [].concat.apply([], a);
      }, d.RendererGL.prototype._vToNArray = function (a) {
        return this._flatten(a.map(function (a) {
          return [a.x, a.y, a.z];
        }));
      }, d.prototype._assert3d = function (a) {
        if (!this._renderer.isP3D) throw new Error(a + "() is only supported in WEBGL mode. If you'd like to use 3D graphics and WebGL, see  https://p5js.org/examples/form-3d-primitives.html for more information.");
      }, d.RendererGL.prototype._initTessy = function () {
        function a(a, b) {
          b[b.length] = a[0], b[b.length] = a[1], b[b.length] = a[2];
        }function b(a) {
          a !== f.primitiveType.GL_TRIANGLES && console.log("expected TRIANGLES but got type: " + a);
        }function c(a) {
          console.log("error callback"), console.log("error number: " + a);
        }function d(a, b, c) {
          return [a[0], a[1], a[2]];
        }function e(a) {}var g = new f.GluTesselator();return g.gluTessCallback(f.gluEnum.GLU_TESS_VERTEX_DATA, a), g.gluTessCallback(f.gluEnum.GLU_TESS_BEGIN, b), g.gluTessCallback(f.gluEnum.GLU_TESS_ERROR, c), g.gluTessCallback(f.gluEnum.GLU_TESS_COMBINE, d), g.gluTessCallback(f.gluEnum.GLU_TESS_EDGE_FLAG, e), g;
      }, d.RendererGL.prototype._triangulate = function (a) {
        this._tessy.gluTessNormal(0, 0, 1);var b = [];this._tessy.gluTessBeginPolygon(b);for (var c = 0; c < a.length; c++) {
          this._tessy.gluTessBeginContour();for (var d = a[c], e = 0; e < d.length; e += 3) {
            var f = [d[e], d[e + 1], d[e + 2]];this._tessy.gluTessVertex(f, f);
          }this._tessy.gluTessEndContour();
        }return this._tessy.gluTessEndPolygon(), b;
      }, d.RendererGL.prototype._bezierCoefficients = function (a) {
        var b = a * a,
            c = b * a,
            d = 1 - a,
            e = d * d;return [e * d, 3 * e * a, 3 * d * b, c];
      }, d.RendererGL.prototype._quadraticCoefficients = function (a) {
        var b = a * a,
            c = 1 - a;return [c * c, 2 * c * a, b];
      }, d.RendererGL.prototype._bezierToCatmull = function (a) {
        return [a[1], a[1] + (a[2] - a[0]) / this._curveTightness, a[2] - (a[3] - a[1]) / this._curveTightness, a[2]];
      }, b.exports = d.RendererGL;
    }, { "../core/constants": 18, "../core/main": 24, "../core/p5.Renderer": 27, "./p5.Camera": 69, "./p5.Matrix": 71, "./p5.Shader": 75, libtess: 9 }], 75: [function (a, b, c) {
      "use strict";
      var d = a("../core/main");d.Shader = function (a, b, c) {
        this._renderer = a, this._vertSrc = b, this._fragSrc = c, this._vertShader = -1, this._fragShader = -1, this._glProgram = 0, this._loadedAttributes = !1, this.attributes = {}, this._loadedUniforms = !1, this.uniforms = {}, this._bound = !1, this.samplers = [];
      }, d.Shader.prototype.init = function () {
        if (0 === this._glProgram) {
          var a = this._renderer.GL;if (this._vertShader = a.createShader(a.VERTEX_SHADER), a.shaderSource(this._vertShader, this._vertSrc), a.compileShader(this._vertShader), !a.getShaderParameter(this._vertShader, a.COMPILE_STATUS)) return console.error("Yikes! An error occurred compiling the vertex shader:" + a.getShaderInfoLog(this._vertShader)), null;if (this._fragShader = a.createShader(a.FRAGMENT_SHADER), a.shaderSource(this._fragShader, this._fragSrc), a.compileShader(this._fragShader), !a.getShaderParameter(this._fragShader, a.COMPILE_STATUS)) return console.error("Darn! An error occurred compiling the fragment shader:" + a.getShaderInfoLog(this._fragShader)), null;this._glProgram = a.createProgram(), a.attachShader(this._glProgram, this._vertShader), a.attachShader(this._glProgram, this._fragShader), a.linkProgram(this._glProgram), a.getProgramParameter(this._glProgram, a.LINK_STATUS) || console.error("Snap! Error linking shader program: " + a.getProgramInfoLog(this._glProgram)), this._loadAttributes(), this._loadUniforms();
        }return this;
      }, d.Shader.prototype._loadAttributes = function () {
        if (!this._loadedAttributes) {
          this.attributes = {};for (var a = this._renderer.GL, b = a.getProgramParameter(this._glProgram, a.ACTIVE_ATTRIBUTES), c = 0; c < b; ++c) {
            var d = a.getActiveAttrib(this._glProgram, c),
                e = d.name,
                f = a.getAttribLocation(this._glProgram, e),
                g = {};g.name = e, g.location = f, g.type = d.type, g.size = d.size, this.attributes[e] = g;
          }this._loadedAttributes = !0;
        }
      }, d.Shader.prototype._loadUniforms = function () {
        if (!this._loadedUniforms) {
          for (var a = this._renderer.GL, b = a.getProgramParameter(this._glProgram, a.ACTIVE_UNIFORMS), c = 0, d = 0; d < b; ++d) {
            var e = a.getActiveUniform(this._glProgram, d),
                f = {};f.location = a.getUniformLocation(this._glProgram, e.name), f.size = e.size;var g = e.name;e.size > 1 && (g = g.substring(0, g.indexOf("[0]"))), f.name = g, f.type = e.type, f.type === a.SAMPLER_2D && (f.samplerIndex = c, c++, this.samplers.push(f)), this.uniforms[g] = f;
          }this._loadedUniforms = !0;
        }
      }, d.Shader.prototype.compile = function () {}, d.Shader.prototype.bindShader = function () {
        this.init(), this._bound || (this.useProgram(), this._bound = !0, this.bindTextures(), this._setMatrixUniforms(), this === this._renderer.curStrokeShader && this._setViewportUniform());
      }, d.Shader.prototype.unbindShader = function () {
        return this._bound && (this.unbindTextures(), this._bound = !1), this;
      }, d.Shader.prototype.bindTextures = function () {
        for (var a = this._renderer.GL, b = 0; b < this.samplers.length; b++) {
          var c = this.samplers[b],
              d = c.texture;void 0 === d && (d = this._renderer._getEmptyTexture()), a.activeTexture(a.TEXTURE0 + c.samplerIndex), d.bindTexture(), d.update(), a.uniform1i(c.location, c.samplerIndex);
        }
      }, d.Shader.prototype.updateTextures = function () {
        for (var a = 0; a < this.samplers.length; a++) {
          var b = this.samplers[a],
              c = b.texture;c && c.update();
        }
      }, d.Shader.prototype.unbindTextures = function () {}, d.Shader.prototype._setMatrixUniforms = function () {
        this.setUniform("uProjectionMatrix", this._renderer.uPMatrix.mat4), this.setUniform("uModelViewMatrix", this._renderer.uMVMatrix.mat4), this.setUniform("uViewMatrix", this._renderer._curCamera.cameraMatrix.mat4), this === this._renderer.curFillShader && (this._renderer.uNMatrix.inverseTranspose(this._renderer.uMVMatrix), this.setUniform("uNormalMatrix", this._renderer.uNMatrix.mat3));
      }, d.Shader.prototype._setViewportUniform = function () {
        this.setUniform("uViewport", this._renderer._viewport);
      }, d.Shader.prototype.useProgram = function () {
        return this._renderer.GL.useProgram(this._glProgram), this;
      }, d.Shader.prototype.setUniform = function (a, b) {
        var c = this.uniforms[a];if (c) {
          var d = c.location,
              e = this._renderer.GL;switch (this.useProgram(), c.type) {case e.BOOL:
              !0 === b ? e.uniform1i(d, 1) : e.uniform1i(d, 0);break;case e.INT:
              c.size > 1 ? b.length && e.uniform1iv(d, b) : e.uniform1i(d, b);break;case e.FLOAT:
              c.size > 1 ? b.length && e.uniform1fv(d, b) : e.uniform1f(d, b);break;case e.FLOAT_MAT3:
              e.uniformMatrix3fv(d, !1, b);break;case e.FLOAT_MAT4:
              e.uniformMatrix4fv(d, !1, b);break;case e.FLOAT_VEC2:
              c.size > 1 ? b.length && e.uniform2fv(d, b) : e.uniform2f(d, b[0], b[1]);break;case e.FLOAT_VEC3:
              c.size > 1 ? b.length && e.uniform3fv(d, b) : e.uniform3f(d, b[0], b[1], b[2]);break;case e.FLOAT_VEC4:
              c.size > 1 ? b.length && e.uniform4fv(d, b) : e.uniform4f(d, b[0], b[1], b[2], b[3]);break;case e.INT_VEC2:
              c.size > 1 ? b.length && e.uniform2iv(d, b) : e.uniform2i(d, b[0], b[1]);break;case e.INT_VEC3:
              c.size > 1 ? b.length && e.uniform3iv(d, b) : e.uniform3i(d, b[0], b[1], b[2]);break;case e.INT_VEC4:
              c.size > 1 ? b.length && e.uniform4iv(d, b) : e.uniform4i(d, b[0], b[1], b[2], b[3]);break;case e.SAMPLER_2D:
              e.activeTexture(e.TEXTURE0 + c.samplerIndex), c.texture = this._renderer.getTexture(b), e.uniform1i(c.location, c.samplerIndex);}return this;
        }
      }, d.Shader.prototype.isLightShader = function () {
        return void 0 !== this.uniforms.uUseLighting || void 0 !== this.uniforms.uAmbientLightCount || void 0 !== this.uniforms.uDirectionalLightCount || void 0 !== this.uniforms.uPointLightCount || void 0 !== this.uniforms.uAmbientColor || void 0 !== this.uniforms.uDirectionalColor || void 0 !== this.uniforms.uPointLightLocation || void 0 !== this.uniforms.uPointLightColor || void 0 !== this.uniforms.uLightingDirection || void 0 !== this.uniforms.uSpecular;
      }, d.Shader.prototype.isTextureShader = function () {
        return this.samplerIndex > 0;
      }, d.Shader.prototype.isColorShader = function () {
        return void 0 !== this.attributes.aVertexColor || void 0 !== this.uniforms.uMaterialColor;
      }, d.Shader.prototype.isTexLightShader = function () {
        return this.isLightShader() && this.isTextureShader();
      }, d.Shader.prototype.isStrokeShader = function () {
        return void 0 !== this.uniforms.uStrokeWeight;
      }, d.Shader.prototype.enableAttrib = function (a, b, c, d, e, f) {
        var g = this._renderer.GL;return -1 !== a && (g.enableVertexAttribArray(a), g.vertexAttribPointer(a, b, c, d, e, f)), this;
      }, b.exports = d.Shader;
    }, { "../core/main": 24 }], 76: [function (a, b, c) {
      "use strict";
      var d = a("../core/main"),
          e = a("../core/constants");d.Texture = function (a, b) {
        this._renderer = a;var c = this._renderer.GL;this.src = b, this.glTex = void 0, this.glTarget = c.TEXTURE_2D, this.glFormat = c.RGBA, this.mipmaps = !1, this.glMinFilter = c.LINEAR, this.glMagFilter = c.LINEAR, this.glWrapS = c.CLAMP_TO_EDGE, this.glWrapT = c.CLAMP_TO_EDGE, this.isSrcMediaElement = void 0 !== d.MediaElement && b instanceof d.MediaElement, this._videoPrevUpdateTime = 0, this.isSrcHTMLElement = void 0 !== d.Element && b instanceof d.Element && !(b instanceof d.Graphics), this.isSrcP5Image = b instanceof d.Image, this.isSrcP5Graphics = b instanceof d.Graphics, this.isImageData = "undefined" != typeof ImageData && b instanceof ImageData;var e = this._getTextureDataFromSource();return this.width = e.width, this.height = e.height, this.init(e), this;
      }, d.Texture.prototype._getTextureDataFromSource = function () {
        var a;return this.isSrcP5Image ? a = this.src.canvas : this.isSrcMediaElement || this.isSrcP5Graphics || this.isSrcHTMLElement ? a = this.src.elt : this.isImageData && (a = this.src), a;
      }, d.Texture.prototype.init = function (a) {
        var b = this._renderer.GL;if (this.glTex = b.createTexture(), this.bindTexture(), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, this.glMagFilter), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, this.glMinFilter), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, this.glWrapS), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, this.glWrapT), 0 === this.width || 0 === this.height || this.isSrcMediaElement && !this.src.loadedmetadata) {
          var c = new Uint8Array([1, 1, 1, 1]);b.texImage2D(this.glTarget, 0, b.RGBA, 1, 1, 0, this.glFormat, b.UNSIGNED_BYTE, c);
        } else b.texImage2D(this.glTarget, 0, this.glFormat, this.glFormat, b.UNSIGNED_BYTE, a);
      }, d.Texture.prototype.update = function () {
        var a = this.src;if (0 === a.width || 0 === a.height) return !1;var b = this._getTextureDataFromSource(),
            c = !1,
            d = this._renderer.GL;return b.width !== this.width || b.height !== this.height ? (c = !0, this.width = b.width, this.height = b.height, this.isSrcP5Image ? a.setModified(!1) : (this.isSrcMediaElement || this.isSrcHTMLElement) && a.setModified(!0)) : this.isSrcP5Image ? a.isModified() && (c = !0, a.setModified(!1)) : this.isSrcMediaElement ? a.isModified() ? (c = !0, a.setModified(!1)) : a.loadedmetadata && this._videoPrevUpdateTime !== a.time() && (this._videoPrevUpdateTime = a.time(), c = !0) : this.isImageData ? a._dirty && (a._dirty = !1, c = !0) : c = !0, c && (this.bindTexture(), d.texImage2D(this.glTarget, 0, this.glFormat, this.glFormat, d.UNSIGNED_BYTE, b)), c;
      }, d.Texture.prototype.bindTexture = function () {
        return this._renderer.GL.bindTexture(this.glTarget, this.glTex), this;
      }, d.Texture.prototype.unbindTexture = function () {
        this._renderer.GL.bindTexture(this.glTarget, null);
      }, d.Texture.prototype.setInterpolation = function (a, b) {
        var c = this._renderer.GL;a === e.NEAREST ? this.glMinFilter = c.NEAREST : this.glMinFilter = c.LINEAR, b === e.NEAREST ? this.glMagFilter = c.NEAREST : this.glMagFilter = c.LINEAR, this.bindTexture(), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, this.glMinFilter), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, this.glMagFilter), this.unbindTexture();
      }, d.Texture.prototype.setWrapMode = function (a, b) {
        var c = this._renderer.GL,
            d = function d(a) {
          return 0 == (a & a - 1);
        },
            f = d(this.width),
            g = d(this.width);a === e.REPEAT ? f && g ? this.glWrapS = c.REPEAT : (console.warn("You tried to set the wrap mode to REPEAT but the texture size is not a power of two. Setting to CLAMP instead"), this.glWrapS = c.CLAMP_TO_EDGE) : a === e.MIRROR ? f && g ? this.glWrapS = c.MIRRORED_REPEAT : (console.warn("You tried to set the wrap mode to MIRROR but the texture size is not a power of two. Setting to CLAMP instead"), this.glWrapS = c.CLAMP_TO_EDGE) : this.glWrapS = c.CLAMP_TO_EDGE, b === e.REPEAT ? f && g ? this.glWrapT = c.REPEAT : (console.warn("You tried to set the wrap mode to REPEAT but the texture size is not a power of two. Setting to CLAMP instead"), this.glWrapT = c.CLAMP_TO_EDGE) : b === e.MIRROR ? f && g ? this.glWrapT = c.MIRRORED_REPEAT : (console.warn("You tried to set the wrap mode to MIRROR but the texture size is not a power of two. Setting to CLAMP instead"), this.glWrapT = c.CLAMP_TO_EDGE) : this.glWrapT = c.CLAMP_TO_EDGE, this.bindTexture(), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, this.glWrapS), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, this.glWrapT), this.unbindTexture();
      }, b.exports = d.Texture;
    }, { "../core/constants": 18, "../core/main": 24 }], 77: [function (a, b, c) {
      "use strict";
      function d(a, b) {
        this.width = a, this.height = b, this.infos = [], this.findImage = function (a) {
          var b = this.width * this.height;if (a > b) throw new Error("font is too complex to render in 3D");for (var c, d, e = this.infos.length - 1; e >= 0; --e) {
            var f = this.infos[e];if (f.index + a < b) {
              c = f, d = f.imageData;break;
            }
          }if (!c) {
            try {
              d = new ImageData(this.width, this.height);
            } catch (a) {
              var g = document.getElementsByTagName("canvas")[0],
                  h = !g;g || (g = document.createElement("canvas"), g.style.display = "none", document.body.appendChild(g));var i = g.getContext("2d");i && (d = i.createImageData(this.width, this.height)), h && document.body.removeChild(g);
            }c = { index: 0, imageData: d }, this.infos.push(c);
          }var j = c.index;return c.index += a, d._dirty = !0, { imageData: d, index: j };
        };
      }function e(a, b, c, d, e) {
        var f = a.imageData,
            g = f.data,
            h = 4 * a.index++;g[h++] = b, g[h++] = c, g[h++] = d, g[h++] = e;
      }var f = a("../core/main"),
          g = a("../core/constants");a("./p5.Shader"), a("./p5.RendererGL"), f.RendererGL.prototype._applyTextProperties = function () {}, f.RendererGL.prototype.textWidth = function (a) {
        return this._isOpenType() ? this._textFont._textWidth(a, this._textSize) : 0;
      };var h = 9,
          i = h,
          j = 64,
          k = 64,
          l = 64,
          m = 64,
          n = 64,
          o = 64,
          p = Math.sqrt(3),
          q = function q(a) {
        this.font = a, this.strokeImageInfos = new d(j, k), this.colDimImageInfos = new d(l, m), this.rowDimImageInfos = new d(l, m), this.colCellImageInfos = new d(n, o), this.rowCellImageInfos = new d(n, o), this.glyphInfos = {}, this.getGlyphInfo = function (a) {
          function b(a, b, c) {
            function d(a, b, c) {
              for (var d = a.length; d-- > 0;) {
                var e = a[d];b > e && (b = e), c < e && (c = e);
              }return { min: b, max: c };
            }var e = w.length;w.push(c);for (var f = d(a, 1, 0), g = Math.max(Math.floor(f.min * h), 0), j = Math.min(Math.ceil(f.max * h), h), k = g; k < j; ++k) {
              y[k].push(e);
            }for (var l = d(b, 1, 0), m = Math.max(Math.floor(l.min * i), 0), n = Math.min(Math.ceil(l.max * i), i), o = m; o < n; ++o) {
              x[o].push(e);
            }
          }function c(a, b, c) {
            return a < b ? b : a > c ? c : a;
          }function d(a) {
            return c(255 * a, 0, 255);
          }function g(a, b, c, d) {
            this.p0 = a, this.c0 = b, this.c1 = c, this.p1 = d, this.toQuadratic = function () {
              return { x: this.p0.x, y: this.p0.y, x1: this.p1.x, y1: this.p1.y, cx: (3 * (this.c0.x + this.c1.x) - (this.p0.x + this.p1.x)) / 4, cy: (3 * (this.c0.y + this.c1.y) - (this.p0.y + this.p1.y)) / 4 };
            }, this.quadError = function () {
              return f.Vector.sub(f.Vector.sub(this.p1, this.p0), f.Vector.mult(f.Vector.sub(this.c1, this.c0), 3)).mag() / 2;
            }, this.split = function (a) {
              var b = f.Vector.lerp(this.p0, this.c0, a),
                  c = f.Vector.lerp(this.c0, this.c1, a),
                  d = f.Vector.lerp(b, c, a);this.c1 = f.Vector.lerp(this.c1, this.p1, a), this.c0 = f.Vector.lerp(c, this.c1, a);var e = f.Vector.lerp(d, this.c0, a),
                  h = new g(this.p0, b, d, e);return this.p0 = e, h;
            }, this.splitInflections = function () {
              var a = f.Vector.sub(this.c0, this.p0),
                  b = f.Vector.sub(f.Vector.sub(this.c1, this.c0), a),
                  c = f.Vector.sub(f.Vector.sub(f.Vector.sub(this.p1, this.c1), a), f.Vector.mult(b, 2)),
                  d = [],
                  e = b.x * c.y - b.y * c.x;if (0 !== e) {
                var g = a.x * c.y - a.y * c.x,
                    h = a.x * b.y - a.y * b.x,
                    i = g * g - 4 * e * h;if (i >= 0) {
                  e < 0 && (e = -e, g = -g, h = -h);var j = Math.sqrt(i),
                      k = (-g - j) / (2 * e),
                      l = (-g + j) / (2 * e);k > 0 && k < 1 && (d.push(this.split(k)), l = 1 - (1 - l) / (1 - k)), l > 0 && l < 1 && d.push(this.split(l));
                }
              }return d.push(this), d;
            };
          }function j(a, b, c, d, e, h, i, j) {
            for (var k = new g(new f.Vector(a, b), new f.Vector(c, d), new f.Vector(e, h), new f.Vector(i, j)).splitInflections(), l = [], m = 30 / p, n = 0; n < k.length; n++) {
              for (var o, q = k[n], r = []; !((o = m / q.quadError()) >= .125);) {
                var s = Math.pow(o, 1 / 3),
                    t = q.split(s),
                    u = q.split(1 - s / (1 - s));l.push(t), r.push(q), q = u;
              }o < 1 && l.push(q.split(.5)), l.push(q), Array.prototype.push.apply(l, r.reverse());
            }return l;
          }function k(a, c, d, e) {
            b([a, d], [c, e], { x: a, y: c, cx: (a + d) / 2, cy: (c + e) / 2 });
          }function l(a, b, c, d) {
            return Math.abs(c - a) < 1e-5 && Math.abs(d - b) < 1e-5;
          }function m(a, b, c) {
            for (var d = a.length, f = b.findImage(d), g = f.index, h = 0, i = 0; i < d; ++i) {
              h += a[i].length;
            }for (var j = c.findImage(h), k = 0; k < d; ++k) {
              var l = a[k],
                  m = l.length,
                  n = j.index;e(f, n >> 7, 127 & n, m >> 7, 127 & m);for (var o = 0; o < m; ++o) {
                var p = l[o] + S;e(j, p >> 7, 127 & p, 0, 0);
              }
            }return { cellImageInfo: j, dimOffset: g, dimImageInfo: f };
          }var n = this.glyphInfos[a.index];if (n) return n;var o = a.getBoundingBox(),
              q = o.x1,
              r = o.y1,
              s = o.x2 - q,
              t = o.y2 - r,
              u = a.path.commands;if (0 === s || 0 === t || !u.length) return this.glyphInfos[a.index] = {};var v,
              w = [],
              x = [],
              y = [];for (v = h - 1; v >= 0; --v) {
            y.push([]);
          }for (v = i - 1; v >= 0; --v) {
            x.push([]);
          }for (var z, A, B, C, D = 0; D < u.length; ++D) {
            var E = u[D],
                F = (E.x - q) / s,
                G = (E.y - r) / t;if (!l(z, A, F, G)) {
              switch (E.type) {case "M":
                  B = F, C = G;break;case "L":
                  k(z, A, F, G);break;case "Q":
                  var H = (E.x1 - q) / s,
                      I = (E.y1 - r) / t;b([z, F, H], [A, G, I], { x: z, y: A, cx: H, cy: I });break;case "Z":
                  l(z, A, B, C) ? w.push({ x: z, y: A }) : (k(z, A, B, C), w.push({ x: B, y: C }));break;case "C":
                  for (var J = (E.x1 - q) / s, K = (E.y1 - r) / t, L = (E.x2 - q) / s, M = (E.y2 - r) / t, N = j(z, A, J, K, L, M, F, G), O = 0; O < N.length; O++) {
                    var P = N[O].toQuadratic();b([P.x, P.x1, P.cx], [P.y, P.y1, P.cy], P);
                  }break;default:
                  throw new Error("unknown command type: " + E.type);}z = F, A = G;
            }
          }for (var Q = w.length, R = this.strokeImageInfos.findImage(Q), S = R.index, T = 0; T < Q; ++T) {
            var U = w[T];e(R, d(U.x), d(U.y), d(U.cx), d(U.cy));
          }return n = this.glyphInfos[a.index] = { glyph: a, uGlyphRect: [o.x1, -o.y1, o.x2, -o.y2], strokeImageInfo: R, strokes: w, colInfo: m(y, this.colDimImageInfos, this.colCellImageInfos), rowInfo: m(x, this.rowDimImageInfos, this.rowCellImageInfos) }, n.uGridOffset = [n.colInfo.dimOffset, n.rowInfo.dimOffset], n;
        };
      };f.RendererGL.prototype._renderText = function (a, b, c, d, e) {
        if (!(d >= e) && this._doFill) {
          if (!this._isOpenType()) return console.log("WEBGL: only opentype fonts are supported"), a;a.push();var p = this.curFillShader,
              r = this._doStroke,
              s = this.drawMode;this.curFillShader = null, this._doStroke = !1, this.drawMode = g.TEXTURE;var t = this._textFont.font,
              u = this._textFont._fontInfo;u || (u = this._textFont._fontInfo = new q(t));var v = this._textFont._handleAlignment(this, b, c, d),
              w = this._textSize,
              x = w / t.unitsPerEm;this.translate(v.x, v.y, 0), this.scale(x, x, 1);var y = this.GL,
              z = !this._defaultFontShader,
              A = this.setFillShader(this._getFontShader());z && (A.setUniform("uGridImageSize", [l, m]), A.setUniform("uCellsImageSize", [n, o]), A.setUniform("uStrokeImageSize", [j, k]), A.setUniform("uGridSize", [h, i])), this._applyColorBlend(this.curFillColor);var B = this.gHash.glyph;if (!B) {
            var C = this._textGeom = new f.Geometry(1, 1, function () {
              for (var a = 0; a <= 1; a++) {
                for (var b = 0; b <= 1; b++) {
                  this.vertices.push(new f.Vector(b, a, 0)), this.uvs.push(b, a);
                }
              }
            });C.computeFaces().computeNormals(), B = this.createBuffers("glyph", C);
          }this._bindBuffer(B.vertexBuffer, y.ARRAY_BUFFER), A.enableAttrib(A.attributes.aPosition.location, 3, y.FLOAT, !1, 0, 0), this._bindBuffer(B.indexBuffer, y.ELEMENT_ARRAY_BUFFER), this._bindBuffer(B.uvBuffer, y.ARRAY_BUFFER), A.enableAttrib(A.attributes.aTexCoord.location, 2, y.FLOAT, !1, 0, 0), A.setUniform("uMaterialColor", this.curFillColor);try {
            for (var D = 0, E = null, F = !1, G = t.stringToGlyphs(b), H = 0; H < G.length; ++H) {
              var I = G[H];E && (D += t.getKerningValue(E, I));var J = u.getGlyphInfo(I);if (J.uGlyphRect) {
                var K = J.rowInfo,
                    L = J.colInfo;A.setUniform("uSamplerStrokes", J.strokeImageInfo.imageData), A.setUniform("uSamplerRowStrokes", K.cellImageInfo.imageData), A.setUniform("uSamplerRows", K.dimImageInfo.imageData), A.setUniform("uSamplerColStrokes", L.cellImageInfo.imageData), A.setUniform("uSamplerCols", L.dimImageInfo.imageData), A.setUniform("uGridOffset", J.uGridOffset), A.setUniform("uGlyphRect", J.uGlyphRect), A.setUniform("uGlyphOffset", D), F ? A.bindTextures() : (F = !0, A.bindShader()), y.drawElements(y.TRIANGLES, 6, this.GL.UNSIGNED_SHORT, 0);
              }D += I.advanceWidth, E = I;
            }
          } finally {
            A.unbindShader(), this.curFillShader = p, this._doStroke = r, this.drawMode = s, a.pop();
          }return this._pInst._pixelsDirty = !0, a;
        }
      };
    }, { "../core/constants": 18, "../core/main": 24, "./p5.RendererGL": 74, "./p5.Shader": 75 }] }, {}, [13])(13);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ })
/******/ ]);
//# sourceMappingURL=drawing.js.map