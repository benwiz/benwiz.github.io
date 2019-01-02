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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
/* 2 */
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

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCRippleAdapter = function () {
  function MDCRippleAdapter() {
    _classCallCheck(this, MDCRippleAdapter);
  }

  _createClass(MDCRippleAdapter, [{
    key: "browserSupportsCssVars",

    /** @return {boolean} */
    value: function browserSupportsCssVars() {}

    /** @return {boolean} */

  }, {
    key: "isUnbounded",
    value: function isUnbounded() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceActive",
    value: function isSurfaceActive() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceDisabled",
    value: function isSurfaceDisabled() {}

    /** @param {string} className */

  }, {
    key: "addClass",
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /** @param {!EventTarget} target */

  }, {
    key: "containsEventTarget",
    value: function containsEventTarget(target) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerDocumentInteractionHandler",
    value: function registerDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterDocumentInteractionHandler",
    value: function deregisterDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "registerResizeHandler",
    value: function registerResizeHandler(handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "deregisterResizeHandler",
    value: function deregisterResizeHandler(handler) {}

    /**
     * @param {string} varName
     * @param {?number|string} value
     */

  }, {
    key: "updateCssVariable",
    value: function updateCssVariable(varName, value) {}

    /** @return {!ClientRect} */

  }, {
    key: "computeBoundingRect",
    value: function computeBoundingRect() {}

    /** @return {{x: number, y: number}} */

  }, {
    key: "getWindowPageOffset",
    value: function getWindowPageOffset() {}
  }]);

  return MDCRippleAdapter;
}();

exports.default = MDCRippleAdapter;

/***/ }),
/* 3 */
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
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
var supportsCssVariables_ = void 0;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
var supportsPassive_ = void 0;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = windowObj.getComputedStyle(node);
  var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */

function supportsCssVariables(windowObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var supportsCssVariables = supportsCssVariables_;
  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables;
  }

  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVariables;
  }
  return supportsCssVariables;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|!EventListenerOptions}
 */
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
          return isSupported;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? /** @type {!EventListenerOptions} */{ passive: true } : false;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {string}
 */
function getMatchesProperty(HTMLElementPrototype) {
  /**
   * Order is important because we return the first existing method we find.
   * Do not change the order of the items in the below array.
   */
  var matchesMethods = ['matches', 'webkitMatchesSelector', 'msMatchesSelector'];
  var method = 'matches';
  for (var i = 0; i < matchesMethods.length; i++) {
    var matchesMethod = matchesMethods[i];
    if (matchesMethod in HTMLElementPrototype) {
      method = matchesMethod;
      break;
    }
  }

  return method;
}

/**
 * @param {!Event} ev
 * @param {{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    ev = /** @type {!TouchEvent} */ev;
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    ev = /** @type {!MouseEvent} */ev;
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

exports.supportsCssVariables = supportsCssVariables;
exports.applyPassive = applyPassive;
exports.getMatchesProperty = getMatchesProperty;
exports.getNormalizedEventCoords = getNormalizedEventCoords;

/***/ }),
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(8);

var _index2 = __webpack_require__(11);

var _formField = __webpack_require__(14);

var _checkbox = __webpack_require__(15);

var _boba = __webpack_require__(16);

var Boba = _interopRequireWildcard(_boba);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var options = {
  // Canvas
  x: 0,
  y: 0,
  width: document.documentElement.scrollWidth,
  height: document.documentElement.scrollHeight,
  // Vertices
  drawVertices: true,
  vertexMinRadius: 8,
  vertexMaxRadius: 16,
  vertexMinSpeed: 0.5,
  vertexMaxSpeed: 0.8,
  vertexColor: {
    r: 30,
    g: 144,
    b: 255,
    a: 0.2
  },
  // Edges
  drawEdges: true,
  edgeColor: {
    r: 30,
    g: 144,
    b: 255,
    a: 0.2
  },
  // Triangles
  drawTriangles: true,
  triangleColor: {
    r: 30,
    g: 144,
    b: 255,
    a: 0.2
  }
};
// import * as Boba from '@benwiz/boba.js';

Boba.start(options);

// //
// // Boba.js
// //

// // Initialize boba.js options by grabbing the defaults
// const bobaOptions = Boba.getDefaultOptions();

// // Vertex configs
// bobaOptions.numVertices = 40;
// bobaOptions.drawVertices = true;
// bobaOptions.vertexMinSize = 8;
// bobaOptions.vertexMaxSize = 16;
// bobaOptions.vertexMinSpeed = 0.5;
// bobaOptions.vertexMaxSpeed = 2;
// bobaOptions.vertexColors = [
//   {
//     r: 30,
//     g: 144,
//     b: 255,
//     a: 0.1,
//   },
// ];

// // Edge configs
// bobaOptions.numNeighbors = 2;
// bobaOptions.drawEdges = false;
// bobaOptions.edgeColors = [
//   {
//     r: 30,
//     g: 144,
//     b: 255,
//     a: 0.1,
//   },
// ];

// // Shape configs
// bobaOptions.drawShapes = true;
// bobaOptions.shapeColors = [
//   {
//     r: 30,
//     g: 144,
//     b: 255,
//     a: 0.05,
//   },
// ];

// // Start the animation
// Boba.start(bobaOptions);

// //
// // Event Listeners
// //
// const restartBoba = (options) => {
//   Boba.stop();
//   Boba.start(options);
// };

// const container = document.querySelector('#container');

// const numVerticesSlider = new MDCSlider(container.querySelector('#num-vertices'));
// numVerticesSlider.listen('MDCSlider:change', () => {
//   bobaOptions.numVertices = numVerticesSlider.value;
//   restartBoba(bobaOptions);
// });

// const numNeighborsSlider = new MDCSlider(container.querySelector('#num-neighbors'));
// numNeighborsSlider.listen('MDCSlider:change', () => {
//   bobaOptions.numNeighbors = numNeighborsSlider.value;
//   restartBoba(bobaOptions);
// });

// // This commented out code supposedly sets up the ripple, but it's not working
// // const showVerticesCheckbox = new MDCCheckbox(container.querySelector('#vertex-checkbox'));
// // const showVerticesFormField = new MDCFormField(container.querySelector('#vertex-form-field'));
// // showVerticesFormField.input = showVerticesCheckbox;

// const showVerticesCheckboxInput = container.querySelector('#vertex-checkbox input');
// showVerticesCheckboxInput.addEventListener('change', (e) => {
//   bobaOptions.drawVertices = e.target.checked;
//   restartBoba(bobaOptions);
// });

// const showEdgesCheckboxInput = container.querySelector('#edge-checkbox input');
// showEdgesCheckboxInput.addEventListener('change', (e) => {
//   bobaOptions.drawEdges = e.target.checked;
//   restartBoba(bobaOptions);
// });

// const showShapesCheckboxInput = container.querySelector('#shape-checkbox input');
// showShapesCheckboxInput.addEventListener('change', (e) => {
//   bobaOptions.drawShapes = e.target.checked;
//   restartBoba(bobaOptions);
// });

// // TODO: Use the following as a starting point for the hue slider
// // document.documentElement.style.setProperty('--mdc-theme-primary', '#ff0000');
// // document.documentElement.style.setProperty('--mdc-theme-secondary', '#ff0000');

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.RippleCapableSurface = exports.MDCRippleFoundation = exports.MDCRipple = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(2);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(9);

var _foundation2 = _interopRequireDefault(_foundation);

var _util = __webpack_require__(3);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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
 * @extends MDCComponent<!MDCRippleFoundation>
 */
var MDCRipple = function (_MDCComponent) {
  _inherits(MDCRipple, _MDCComponent);

  /** @param {...?} args */
  function MDCRipple() {
    var _ref;

    _classCallCheck(this, MDCRipple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {boolean} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).call.apply(_ref, [this].concat(args)));

    _this.disabled = false;

    /** @private {boolean} */
    _this.unbounded_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */


  _createClass(MDCRipple, [{
    key: 'setUnbounded_',


    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     * @private
     */
    value: function setUnbounded_() {
      this.foundation_.setUnbounded(this.unbounded_);
    }
  }, {
    key: 'activate',
    value: function activate() {
      this.foundation_.activate();
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.foundation_.layout();
    }

    /**
     * @return {!MDCRippleFoundation}
     * @override
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      return new _foundation2.default(MDCRipple.createAdapter(this));
    }

    /** @override */

  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
    }
  }, {
    key: 'unbounded',


    /** @return {boolean} */
    get: function get() {
      return this.unbounded_;
    }

    /** @param {boolean} unbounded */
    ,
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$isUnbounded = _ref2.isUnbounded,
          isUnbounded = _ref2$isUnbounded === undefined ? undefined : _ref2$isUnbounded;

      var ripple = new MDCRipple(root);
      // Only override unbounded behavior if option is explicitly specified
      if (isUnbounded !== undefined) {
        ripple.unbounded = /** @type {boolean} */isUnbounded;
      }
      return ripple;
    }

    /**
     * @param {!RippleCapableSurface} instance
     * @return {!MDCRippleAdapter}
     */

  }, {
    key: 'createAdapter',
    value: function createAdapter(instance) {
      var MATCHES = util.getMatchesProperty(HTMLElement.prototype);

      return {
        browserSupportsCssVars: function browserSupportsCssVars() {
          return util.supportsCssVariables(window);
        },
        isUnbounded: function isUnbounded() {
          return instance.unbounded;
        },
        isSurfaceActive: function isSurfaceActive() {
          return instance.root_[MATCHES](':active');
        },
        isSurfaceDisabled: function isSurfaceDisabled() {
          return instance.disabled;
        },
        addClass: function addClass(className) {
          return instance.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return instance.root_.classList.remove(className);
        },
        containsEventTarget: function containsEventTarget(target) {
          return instance.root_.contains(target);
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return instance.root_.addEventListener(evtType, handler, util.applyPassive());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return instance.root_.removeEventListener(evtType, handler, util.applyPassive());
        },
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.addEventListener(evtType, handler, util.applyPassive());
        },
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.removeEventListener(evtType, handler, util.applyPassive());
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return instance.root_.style.setProperty(varName, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return instance.root_.getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        }
      };
    }
  }]);

  return MDCRipple;
}(_component2.default);

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */


var RippleCapableSurface = function RippleCapableSurface() {
  _classCallCheck(this, RippleCapableSurface);
};

/** @protected {!Element} */


RippleCapableSurface.prototype.root_;

/**
 * Whether or not the ripple bleeds out of the bounds of the element.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.unbounded;

/**
 * Whether or not the ripple is attached to a disabled component.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.disabled;

exports.MDCRipple = MDCRipple;
exports.MDCRippleFoundation = _foundation2.default;
exports.RippleCapableSurface = RippleCapableSurface;
exports.util = util;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(2);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(10);

var _util = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationEvent: (!Event|undefined),
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
var ActivationStateType = void 0;

/**
 * @typedef {{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
var ListenerInfoType = void 0;

/**
 * @typedef {{
 *   activate: function(!Event),
 *   deactivate: function(!Event=),
 *   focus: function(),
 *   blur: function()
 * }}
 */
var ListenersType = void 0;

/**
 * @typedef {{
 *   x: number,
 *   y: number
 * }}
 */
var PointType = void 0;

// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu'];

// Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
/** @type {!Array<!EventTarget>} */
var activatedTargets = [];

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */

var MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        containsEventTarget: function containsEventTarget() /* target: !EventTarget */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    _classCallCheck(this, MDCRippleFoundation);

    /** @private {number} */
    var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, Object.assign(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

    /** @private {!ActivationStateType} */
    _this.activationState_ = _this.defaultActivationState_();

    /** @private {number} */
    _this.initialSize_ = 0;

    /** @private {number} */
    _this.maxRadius_ = 0;

    /** @private {function(!Event)} */
    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    /** @private {function(!Event=)} */
    _this.deactivateHandler_ = function () {
      return _this.deactivate_();
    };

    /** @private {function(!Event=)} */
    _this.focusHandler_ = function () {
      return _this.handleFocus();
    };

    /** @private {function(!Event=)} */
    _this.blurHandler_ = function () {
      return _this.handleBlur();
    };

    /** @private {!Function} */
    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    /** @private {{left: number, top:number}} */
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };

    /** @private {number} */
    _this.fgScale_ = 0;

    /** @private {number} */
    _this.activationTimer_ = 0;

    /** @private {number} */
    _this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    _this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;
      _this.runDeactivationUXLogicIfReady_();
    };

    /** @private {!Event|undefined} */
    _this.previousActivationEvent_;
    return _this;
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   * @private
   */


  _createClass(MDCRippleFoundation, [{
    key: 'supportsPressRipple_',
    value: function supportsPressRipple_() {
      return this.adapter_.browserSupportsCssVars();
    }

    /**
     * @return {!ActivationStateType}
     */

  }, {
    key: 'defaultActivationState_',
    value: function defaultActivationState_() {
      return {
        isActivated: false,
        hasDeactivationUXRun: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false,
        activationEvent: undefined,
        isProgrammatic: false
      };
    }

    /** @override */

  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      var supportsPressRipple = this.supportsPressRipple_();

      this.registerRootHandlers_(supportsPressRipple);

      if (supportsPressRipple) {
        var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
            ROOT = _MDCRippleFoundation$.ROOT,
            UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

        requestAnimationFrame(function () {
          _this2.adapter_.addClass(ROOT);
          if (_this2.adapter_.isUnbounded()) {
            _this2.adapter_.addClass(UNBOUNDED);
            // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
            _this2.layoutInternal_();
          }
        });
      }
    }

    /** @override */

  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      if (this.supportsPressRipple_()) {
        if (this.activationTimer_) {
          clearTimeout(this.activationTimer_);
          this.activationTimer_ = 0;
          this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
        }

        if (this.fgDeactivationRemovalTimer_) {
          clearTimeout(this.fgDeactivationRemovalTimer_);
          this.fgDeactivationRemovalTimer_ = 0;
          this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
        }

        var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
            ROOT = _MDCRippleFoundation$2.ROOT,
            UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;

        requestAnimationFrame(function () {
          _this3.adapter_.removeClass(ROOT);
          _this3.adapter_.removeClass(UNBOUNDED);
          _this3.removeCssVars_();
        });
      }

      this.deregisterRootHandlers_();
      this.deregisterDeactivationHandlers_();
    }

    /**
     * @param {boolean} supportsPressRipple Passed from init to save a redundant function call
     * @private
     */

  }, {
    key: 'registerRootHandlers_',
    value: function registerRootHandlers_(supportsPressRipple) {
      var _this4 = this;

      if (supportsPressRipple) {
        ACTIVATION_EVENT_TYPES.forEach(function (type) {
          _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
        });
        if (this.adapter_.isUnbounded()) {
          this.adapter_.registerResizeHandler(this.resizeHandler_);
        }
      }

      this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
      this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    }

    /**
     * @param {!Event} e
     * @private
     */

  }, {
    key: 'registerDeactivationHandlers_',
    value: function registerDeactivationHandlers_(e) {
      var _this5 = this;

      if (e.type === 'keydown') {
        this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
      } else {
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
          _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
        });
      }
    }

    /** @private */

  }, {
    key: 'deregisterRootHandlers_',
    value: function deregisterRootHandlers_() {
      var _this6 = this;

      ACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
      });
      this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
      this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

      if (this.adapter_.isUnbounded()) {
        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
      }
    }

    /** @private */

  }, {
    key: 'deregisterDeactivationHandlers_',
    value: function deregisterDeactivationHandlers_() {
      var _this7 = this;

      this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
      });
    }

    /** @private */

  }, {
    key: 'removeCssVars_',
    value: function removeCssVars_() {
      var _this8 = this;

      var strings = MDCRippleFoundation.strings;

      Object.keys(strings).forEach(function (k) {
        if (k.indexOf('VAR_') === 0) {
          _this8.adapter_.updateCssVariable(strings[k], null);
        }
      });
    }

    /**
     * @param {!Event=} e
     * @private
     */

  }, {
    key: 'activate_',
    value: function activate_(e) {
      var _this9 = this;

      if (this.adapter_.isSurfaceDisabled()) {
        return;
      }

      var activationState = this.activationState_;
      if (activationState.isActivated) {
        return;
      }

      // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
      var previousActivationEvent = this.previousActivationEvent_;
      var isSameInteraction = previousActivationEvent && e !== undefined && previousActivationEvent.type !== e.type;
      if (isSameInteraction) {
        return;
      }

      activationState.isActivated = true;
      activationState.isProgrammatic = e === undefined;
      activationState.activationEvent = e;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e !== undefined && (e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown');

      var hasActivatedChild = e !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
        return _this9.adapter_.containsEventTarget(target);
      });
      if (hasActivatedChild) {
        // Immediately reset activation state, while preserving logic that prevents touch follow-on events
        this.resetActivationState_();
        return;
      }

      if (e !== undefined) {
        activatedTargets.push( /** @type {!EventTarget} */e.target);
        this.registerDeactivationHandlers_(e);
      }

      activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
      if (activationState.wasElementMadeActive) {
        this.animateActivation_();
      }

      requestAnimationFrame(function () {
        // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
        activatedTargets = [];

        if (!activationState.wasElementMadeActive && e !== undefined && (e.key === ' ' || e.keyCode === 32)) {
          // If space was pressed, try again within an rAF call to detect :active, because different UAs report
          // active states inconsistently when they're called within event handling code:
          // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
          // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
          // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
          // variable is set within a rAF callback for a submit button interaction (#2241).
          activationState.wasElementMadeActive = _this9.checkElementMadeActive_(e);
          if (activationState.wasElementMadeActive) {
            _this9.animateActivation_();
          }
        }

        if (!activationState.wasElementMadeActive) {
          // Reset activation state immediately if element was not made active.
          _this9.activationState_ = _this9.defaultActivationState_();
        }
      });
    }

    /**
     * @param {!Event=} e
     * @private
     */

  }, {
    key: 'checkElementMadeActive_',
    value: function checkElementMadeActive_(e) {
      return e !== undefined && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
    }

    /**
     * @param {!Event=} event Optional event containing position information.
     */

  }, {
    key: 'activate',
    value: function activate(event) {
      this.activate_(event);
    }

    /** @private */

  }, {
    key: 'animateActivation_',
    value: function animateActivation_() {
      var _this10 = this;

      var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
          VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
          VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
      var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
          FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
          FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;


      this.layoutInternal_();

      var translateStart = '';
      var translateEnd = '';

      if (!this.adapter_.isUnbounded()) {
        var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
            startPoint = _getFgTranslationCoor.startPoint,
            endPoint = _getFgTranslationCoor.endPoint;

        translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
        translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
      }

      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
      // Cancel any ongoing activation/deactivation animations
      clearTimeout(this.activationTimer_);
      clearTimeout(this.fgDeactivationRemovalTimer_);
      this.rmBoundedActivationClasses_();
      this.adapter_.removeClass(FG_DEACTIVATION);

      // Force layout in order to re-trigger the animation.
      this.adapter_.computeBoundingRect();
      this.adapter_.addClass(FG_ACTIVATION);
      this.activationTimer_ = setTimeout(function () {
        return _this10.activationTimerCallback_();
      }, DEACTIVATION_TIMEOUT_MS);
    }

    /**
     * @private
     * @return {{startPoint: PointType, endPoint: PointType}}
     */

  }, {
    key: 'getFgTranslationCoordinates_',
    value: function getFgTranslationCoordinates_() {
      var _activationState_ = this.activationState_,
          activationEvent = _activationState_.activationEvent,
          wasActivatedByPointer = _activationState_.wasActivatedByPointer;


      var startPoint = void 0;
      if (wasActivatedByPointer) {
        startPoint = (0, _util.getNormalizedEventCoords)(
        /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        };
      }
      // Center the element around the start point.
      startPoint = {
        x: startPoint.x - this.initialSize_ / 2,
        y: startPoint.y - this.initialSize_ / 2
      };

      var endPoint = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };

      return { startPoint: startPoint, endPoint: endPoint };
    }

    /** @private */

  }, {
    key: 'runDeactivationUXLogicIfReady_',
    value: function runDeactivationUXLogicIfReady_() {
      var _this11 = this;

      // This method is called both when a pointing device is released, and when the activation animation ends.
      // The deactivation animation should only run after both of those occur.
      var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
      var _activationState_2 = this.activationState_,
          hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
          isActivated = _activationState_2.isActivated;

      var activationHasEnded = hasDeactivationUXRun || !isActivated;

      if (activationHasEnded && this.activationAnimationHasEnded_) {
        this.rmBoundedActivationClasses_();
        this.adapter_.addClass(FG_DEACTIVATION);
        this.fgDeactivationRemovalTimer_ = setTimeout(function () {
          _this11.adapter_.removeClass(FG_DEACTIVATION);
        }, _constants.numbers.FG_DEACTIVATION_MS);
      }
    }

    /** @private */

  }, {
    key: 'rmBoundedActivationClasses_',
    value: function rmBoundedActivationClasses_() {
      var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

      this.adapter_.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded_ = false;
      this.adapter_.computeBoundingRect();
    }
  }, {
    key: 'resetActivationState_',
    value: function resetActivationState_() {
      var _this12 = this;

      this.previousActivationEvent_ = this.activationState_.activationEvent;
      this.activationState_ = this.defaultActivationState_();
      // Touch devices may fire additional events for the same interaction within a short time.
      // Store the previous event until it's safe to assume that subsequent events are for new interactions.
      setTimeout(function () {
        return _this12.previousActivationEvent_ = undefined;
      }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    }

    /**
     * @private
     */

  }, {
    key: 'deactivate_',
    value: function deactivate_() {
      var _this13 = this;

      var activationState = this.activationState_;
      // This can happen in scenarios such as when you have a keyup event that blurs the element.
      if (!activationState.isActivated) {
        return;
      }

      var state = /** @type {!ActivationStateType} */Object.assign({}, activationState);

      if (activationState.isProgrammatic) {
        requestAnimationFrame(function () {
          return _this13.animateDeactivation_(state);
        });
        this.resetActivationState_();
      } else {
        this.deregisterDeactivationHandlers_();
        requestAnimationFrame(function () {
          _this13.activationState_.hasDeactivationUXRun = true;
          _this13.animateDeactivation_(state);
          _this13.resetActivationState_();
        });
      }
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.deactivate_();
    }

    /**
     * @param {!ActivationStateType} options
     * @private
     */

  }, {
    key: 'animateDeactivation_',
    value: function animateDeactivation_(_ref) {
      var wasActivatedByPointer = _ref.wasActivatedByPointer,
          wasElementMadeActive = _ref.wasElementMadeActive;

      if (wasActivatedByPointer || wasElementMadeActive) {
        this.runDeactivationUXLogicIfReady_();
      }
    }
  }, {
    key: 'layout',
    value: function layout() {
      var _this14 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }
      this.layoutFrame_ = requestAnimationFrame(function () {
        _this14.layoutInternal_();
        _this14.layoutFrame_ = 0;
      });
    }

    /** @private */

  }, {
    key: 'layoutInternal_',
    value: function layoutInternal_() {
      var _this15 = this;

      this.frame_ = this.adapter_.computeBoundingRect();
      var maxDim = Math.max(this.frame_.height, this.frame_.width);

      // Surface diameter is treated differently for unbounded vs. bounded ripples.
      // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
      // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
      // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
      // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
      // `overflow: hidden`.
      var getBoundedRadius = function getBoundedRadius() {
        var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
        return hypotenuse + MDCRippleFoundation.numbers.PADDING;
      };

      this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

      // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
      this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
      this.fgScale_ = this.maxRadius_ / this.initialSize_;

      this.updateLayoutCssVars_();
    }

    /** @private */

  }, {
    key: 'updateLayoutCssVars_',
    value: function updateLayoutCssVars_() {
      var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
          VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
          VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
          VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
          VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;


      this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

      if (this.adapter_.isUnbounded()) {
        this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        };

        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
      }
    }

    /** @param {boolean} unbounded */

  }, {
    key: 'setUnbounded',
    value: function setUnbounded(unbounded) {
      var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

      if (unbounded) {
        this.adapter_.addClass(UNBOUNDED);
      } else {
        this.adapter_.removeClass(UNBOUNDED);
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      var _this16 = this;

      requestAnimationFrame(function () {
        return _this16.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      var _this17 = this;

      requestAnimationFrame(function () {
        return _this17.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    }
  }]);

  return MDCRippleFoundation;
}(_foundation2.default);

exports.default = MDCRippleFoundation;

/***/ }),
/* 10 */
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

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};

var strings = {
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};

var numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
  FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
  TAP_DELAY_MS: 300 // Delay between touch and simulated mouse events on touch devices
};

exports.cssClasses = cssClasses;
exports.strings = strings;
exports.numbers = numbers;

/***/ }),
/* 11 */
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

var _foundation = __webpack_require__(12);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(4);

var _adapter = __webpack_require__(5);

var _adapter2 = _interopRequireDefault(_adapter);

var _index = __webpack_require__(13);

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
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 Material Components for the Web
 Copyright (c) 2018 Google Inc.
 License: MIT
*/
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["formField"] = factory();else root["mdc"] = root["mdc"] || {}, root["mdc"]["formField"] = factory();
})(undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 107);
      /******/
    }(
    /************************************************************************/
    /******/{

      /***/0:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

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

        /* harmony default export */__webpack_exports__["a"] = MDCFoundation;

        /***/
      },

      /***/1:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(0);
        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

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
              return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
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

        /* harmony default export */__webpack_exports__["a"] = MDCComponent;

        /***/
      },

      /***/107:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCFormField", function () {
          return MDCFormField;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(108);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__material_selection_control_index__ = __webpack_require__(8);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCFormFieldFoundation", function () {
          return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"];
        });
        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

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

        /* eslint-enable no-unused-vars */

        /**
         * @extends MDCComponent<!MDCFormFieldFoundation>
         */

        var MDCFormField = function (_MDCComponent) {
          _inherits(MDCFormField, _MDCComponent);

          _createClass(MDCFormField, [{
            key: 'input',

            /** @param {?MDCSelectionControl} input */
            set: function set(input) {
              this.input_ = input;
            }

            /** @return {?MDCSelectionControl} */

            , get: function get() {
              return this.input_;
            }
          }], [{
            key: 'attachTo',
            value: function attachTo(root) {
              return new MDCFormField(root);
            }
          }]);

          function MDCFormField() {
            var _ref;

            _classCallCheck(this, MDCFormField);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            /** @private {?MDCSelectionControl} */
            var _this = _possibleConstructorReturn(this, (_ref = MDCFormField.__proto__ || Object.getPrototypeOf(MDCFormField)).call.apply(_ref, [this].concat(args)));

            _this.input_;
            return _this;
          }

          /**
           * @return {!Element}
           * @private
           */

          _createClass(MDCFormField, [{
            key: 'getDefaultFoundation',

            /** @return {!MDCFormFieldFoundation} */
            value: function getDefaultFoundation() {
              var _this2 = this;

              return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
                registerInteractionHandler: function registerInteractionHandler(type, handler) {
                  return _this2.label_.addEventListener(type, handler);
                },
                deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
                  return _this2.label_.removeEventListener(type, handler);
                },
                activateInputRipple: function activateInputRipple() {
                  if (_this2.input_ && _this2.input_.ripple) {
                    _this2.input_.ripple.activate();
                  }
                },
                deactivateInputRipple: function deactivateInputRipple() {
                  if (_this2.input_ && _this2.input_.ripple) {
                    _this2.input_.ripple.deactivate();
                  }
                }
              });
            }
          }, {
            key: 'label_',
            get: function get() {
              var LABEL_SELECTOR = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.LABEL_SELECTOR;

              return (/** @type {!Element} */this.root_.querySelector(LABEL_SELECTOR)
              );
            }
          }]);

          return MDCFormField;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

        /***/
      },

      /***/108:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(109);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(110);
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

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

        /**
         * @extends {MDCFoundation<!MDCFormFieldAdapter>}
         */

        var MDCFormFieldFoundation = function (_MDCFoundation) {
          _inherits(MDCFormFieldFoundation, _MDCFoundation);

          _createClass(MDCFormFieldFoundation, null, [{
            key: 'cssClasses',

            /** @return enum {cssClasses} */
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
            }

            /** @return enum {strings} */

          }, {
            key: 'strings',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
            }

            /** @return {!MDCFormFieldAdapter} */

          }, {
            key: 'defaultAdapter',
            get: function get() {
              return {
                registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
                deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
                activateInputRipple: function activateInputRipple() {},
                deactivateInputRipple: function deactivateInputRipple() {}
              };
            }
          }]);

          function MDCFormFieldFoundation(adapter) {
            _classCallCheck(this, MDCFormFieldFoundation);

            /** @private {!EventListener} */
            var _this = _possibleConstructorReturn(this, (MDCFormFieldFoundation.__proto__ || Object.getPrototypeOf(MDCFormFieldFoundation)).call(this, _extends(MDCFormFieldFoundation.defaultAdapter, adapter)));

            _this.clickHandler_ = /** @type {!EventListener} */function () {
              return _this.handleClick_();
            };
            return _this;
          }

          _createClass(MDCFormFieldFoundation, [{
            key: 'init',
            value: function init() {
              this.adapter_.registerInteractionHandler('click', this.clickHandler_);
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
            }

            /** @private */

          }, {
            key: 'handleClick_',
            value: function handleClick_() {
              var _this2 = this;

              this.adapter_.activateInputRipple();
              requestAnimationFrame(function () {
                return _this2.adapter_.deactivateInputRipple();
              });
            }
          }]);

          return MDCFormFieldFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

        /* harmony default export */__webpack_exports__["a"] = MDCFormFieldFoundation;

        /***/
      },

      /***/109:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

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

        /* eslint no-unused-vars: [2, {"args": "none"}] */

        /**
         * Adapter for MDC Form Field. Provides an interface for managing
         * - event handlers
         * - ripple activation
         *
         * Additionally, provides type information for the adapter to the Closure
         * compiler.
         *
         * Implement this adapter for your framework of choice to delegate updates to
         * the component in your framework of choice. See architecture documentation
         * for more details.
         * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
         *
         * @record
         */
        var MDCFormFieldAdapter = function () {
          function MDCFormFieldAdapter() {
            _classCallCheck(this, MDCFormFieldAdapter);
          }

          _createClass(MDCFormFieldAdapter, [{
            key: "registerInteractionHandler",

            /**
             * @param {string} type
             * @param {!EventListener} handler
             */
            value: function registerInteractionHandler(type, handler) {}

            /**
             * @param {string} type
             * @param {!EventListener} handler
             */

          }, {
            key: "deregisterInteractionHandler",
            value: function deregisterInteractionHandler(type, handler) {}
          }, {
            key: "activateInputRipple",
            value: function activateInputRipple() {}
          }, {
            key: "deactivateInputRipple",
            value: function deactivateInputRipple() {}
          }]);

          return MDCFormFieldAdapter;
        }();

        /* unused harmony default export */var _unused_webpack_default_export = MDCFormFieldAdapter;

        /***/
      },

      /***/110:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return cssClasses;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
          return strings;
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
          ROOT: 'mdc-form-field'
        };

        /** @enum {string} */
        var strings = {
          LABEL_SELECTOR: '.mdc-form-field > label'
        };

        /***/
      },

      /***/2:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "supportsCssVariables", function () {
          return supportsCssVariables;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "applyPassive", function () {
          return applyPassive;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "getMatchesProperty", function () {
          return getMatchesProperty;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function () {
          return getNormalizedEventCoords;
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
         * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
         * @private {boolean|undefined}
         */
        var supportsCssVariables_ = void 0;

        /**
         * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
         * @private {boolean|undefined}
         */
        var supportsPassive_ = void 0;

        /**
         * @param {!Window} windowObj
         * @return {boolean}
         */
        function detectEdgePseudoVarBug(windowObj) {
          // Detect versions of Edge with buggy var() support
          // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
          var document = windowObj.document;
          var node = document.createElement('div');
          node.className = 'mdc-ripple-surface--test-edge-var-bug';
          document.body.appendChild(node);

          // The bug exists if ::before style ends up propagating to the parent element.
          // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
          // but Firefox is known to support CSS custom properties correctly.
          // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
          var computedStyle = windowObj.getComputedStyle(node);
          var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
          node.remove();
          return hasPseudoVarBug;
        }

        /**
         * @param {!Window} windowObj
         * @param {boolean=} forceRefresh
         * @return {boolean|undefined}
         */

        function supportsCssVariables(windowObj) {
          var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          var supportsCssVariables = supportsCssVariables_;
          if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
            return supportsCssVariables;
          }

          var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
          if (!supportsFunctionPresent) {
            return;
          }

          var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
          // See: https://bugs.webkit.org/show_bug.cgi?id=154669
          // See: README section on Safari
          var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

          if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
            supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
          } else {
            supportsCssVariables = false;
          }

          if (!forceRefresh) {
            supportsCssVariables_ = supportsCssVariables;
          }
          return supportsCssVariables;
        }

        //
        /**
         * Determine whether the current browser supports passive event listeners, and if so, use them.
         * @param {!Window=} globalObj
         * @param {boolean=} forceRefresh
         * @return {boolean|!EventListenerOptions}
         */
        function applyPassive() {
          var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
          var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (supportsPassive_ === undefined || forceRefresh) {
            var isSupported = false;
            try {
              globalObj.document.addEventListener('test', null, { get passive() {
                  isSupported = true;
                  return isSupported;
                } });
            } catch (e) {}

            supportsPassive_ = isSupported;
          }

          return supportsPassive_ ? /** @type {!EventListenerOptions} */{ passive: true } : false;
        }

        /**
         * @param {!Object} HTMLElementPrototype
         * @return {string}
         */
        function getMatchesProperty(HTMLElementPrototype) {
          /**
           * Order is important because we return the first existing method we find.
           * Do not change the order of the items in the below array.
           */
          var matchesMethods = ['matches', 'webkitMatchesSelector', 'msMatchesSelector'];
          var method = 'matches';
          for (var i = 0; i < matchesMethods.length; i++) {
            var matchesMethod = matchesMethods[i];
            if (matchesMethod in HTMLElementPrototype) {
              method = matchesMethod;
              break;
            }
          }

          return method;
        }

        /**
         * @param {!Event} ev
         * @param {{x: number, y: number}} pageOffset
         * @param {!ClientRect} clientRect
         * @return {{x: number, y: number}}
         */
        function getNormalizedEventCoords(ev, pageOffset, clientRect) {
          var x = pageOffset.x,
              y = pageOffset.y;

          var documentX = x + clientRect.left;
          var documentY = y + clientRect.top;

          var normalizedX = void 0;
          var normalizedY = void 0;
          // Determine touch point relative to the ripple container.
          if (ev.type === 'touchstart') {
            ev = /** @type {!TouchEvent} */ev;
            normalizedX = ev.changedTouches[0].pageX - documentX;
            normalizedY = ev.changedTouches[0].pageY - documentY;
          } else {
            ev = /** @type {!MouseEvent} */ev;
            normalizedX = ev.pageX - documentX;
            normalizedY = ev.pageY - documentY;
          }

          return { x: normalizedX, y: normalizedY };
        }

        /***/
      },

      /***/3:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

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

        /* eslint no-unused-vars: [2, {"args": "none"}] */

        /**
         * Adapter for MDC Ripple. Provides an interface for managing
         * - classes
         * - dom
         * - CSS variables
         * - position
         * - dimensions
         * - scroll position
         * - event handlers
         * - unbounded, active and disabled states
         *
         * Additionally, provides type information for the adapter to the Closure
         * compiler.
         *
         * Implement this adapter for your framework of choice to delegate updates to
         * the component in your framework of choice. See architecture documentation
         * for more details.
         * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
         *
         * @record
         */
        var MDCRippleAdapter = function () {
          function MDCRippleAdapter() {
            _classCallCheck(this, MDCRippleAdapter);
          }

          _createClass(MDCRippleAdapter, [{
            key: "browserSupportsCssVars",

            /** @return {boolean} */
            value: function browserSupportsCssVars() {}

            /** @return {boolean} */

          }, {
            key: "isUnbounded",
            value: function isUnbounded() {}

            /** @return {boolean} */

          }, {
            key: "isSurfaceActive",
            value: function isSurfaceActive() {}

            /** @return {boolean} */

          }, {
            key: "isSurfaceDisabled",
            value: function isSurfaceDisabled() {}

            /** @param {string} className */

          }, {
            key: "addClass",
            value: function addClass(className) {}

            /** @param {string} className */

          }, {
            key: "removeClass",
            value: function removeClass(className) {}

            /** @param {!EventTarget} target */

          }, {
            key: "containsEventTarget",
            value: function containsEventTarget(target) {}

            /**
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: "registerInteractionHandler",
            value: function registerInteractionHandler(evtType, handler) {}

            /**
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: "deregisterInteractionHandler",
            value: function deregisterInteractionHandler(evtType, handler) {}

            /**
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: "registerDocumentInteractionHandler",
            value: function registerDocumentInteractionHandler(evtType, handler) {}

            /**
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: "deregisterDocumentInteractionHandler",
            value: function deregisterDocumentInteractionHandler(evtType, handler) {}

            /**
             * @param {!Function} handler
             */

          }, {
            key: "registerResizeHandler",
            value: function registerResizeHandler(handler) {}

            /**
             * @param {!Function} handler
             */

          }, {
            key: "deregisterResizeHandler",
            value: function deregisterResizeHandler(handler) {}

            /**
             * @param {string} varName
             * @param {?number|string} value
             */

          }, {
            key: "updateCssVariable",
            value: function updateCssVariable(varName, value) {}

            /** @return {!ClientRect} */

          }, {
            key: "computeBoundingRect",
            value: function computeBoundingRect() {}

            /** @return {{x: number, y: number}} */

          }, {
            key: "getWindowPageOffset",
            value: function getWindowPageOffset() {}
          }]);

          return MDCRippleAdapter;
        }();

        /* unused harmony default export */var _unused_webpack_default_export = MDCRippleAdapter;

        /***/
      },

      /***/4:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCRipple", function () {
          return MDCRipple;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "RippleCapableSurface", function () {
          return RippleCapableSurface;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(5);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function () {
          return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
        });
        /* harmony reexport (module object) */__webpack_require__.d(__webpack_exports__, "util", function () {
          return __WEBPACK_IMPORTED_MODULE_3__util__;
        });
        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

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
         * @extends MDCComponent<!MDCRippleFoundation>
         */

        var MDCRipple = function (_MDCComponent) {
          _inherits(MDCRipple, _MDCComponent);

          /** @param {...?} args */
          function MDCRipple() {
            var _ref;

            _classCallCheck(this, MDCRipple);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            /** @type {boolean} */
            var _this = _possibleConstructorReturn(this, (_ref = MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).call.apply(_ref, [this].concat(args)));

            _this.disabled = false;

            /** @private {boolean} */
            _this.unbounded_;
            return _this;
          }

          /**
           * @param {!Element} root
           * @param {{isUnbounded: (boolean|undefined)}=} options
           * @return {!MDCRipple}
           */

          _createClass(MDCRipple, [{
            key: 'setUnbounded_',

            /**
             * Closure Compiler throws an access control error when directly accessing a
             * protected or private property inside a getter/setter, like unbounded above.
             * By accessing the protected property inside a method, we solve that problem.
             * That's why this function exists.
             * @private
             */
            value: function setUnbounded_() {
              this.foundation_.setUnbounded(this.unbounded_);
            }
          }, {
            key: 'activate',
            value: function activate() {
              this.foundation_.activate();
            }
          }, {
            key: 'deactivate',
            value: function deactivate() {
              this.foundation_.deactivate();
            }
          }, {
            key: 'layout',
            value: function layout() {
              this.foundation_.layout();
            }

            /**
             * @return {!MDCRippleFoundation}
             * @override
             */

          }, {
            key: 'getDefaultFoundation',
            value: function getDefaultFoundation() {
              return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](MDCRipple.createAdapter(this));
            }

            /** @override */

          }, {
            key: 'initialSyncWithDOM',
            value: function initialSyncWithDOM() {
              this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
            }
          }, {
            key: 'unbounded',

            /** @return {boolean} */
            get: function get() {
              return this.unbounded_;
            }

            /** @param {boolean} unbounded */

            , set: function set(unbounded) {
              this.unbounded_ = Boolean(unbounded);
              this.setUnbounded_();
            }
          }], [{
            key: 'attachTo',
            value: function attachTo(root) {
              var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                  _ref2$isUnbounded = _ref2.isUnbounded,
                  isUnbounded = _ref2$isUnbounded === undefined ? undefined : _ref2$isUnbounded;

              var ripple = new MDCRipple(root);
              // Only override unbounded behavior if option is explicitly specified
              if (isUnbounded !== undefined) {
                ripple.unbounded = /** @type {boolean} */isUnbounded;
              }
              return ripple;
            }

            /**
             * @param {!RippleCapableSurface} instance
             * @return {!MDCRippleAdapter}
             */

          }, {
            key: 'createAdapter',
            value: function createAdapter(instance) {
              var MATCHES = __WEBPACK_IMPORTED_MODULE_3__util__["getMatchesProperty"](HTMLElement.prototype);

              return {
                browserSupportsCssVars: function browserSupportsCssVars() {
                  return __WEBPACK_IMPORTED_MODULE_3__util__["supportsCssVariables"](window);
                },
                isUnbounded: function isUnbounded() {
                  return instance.unbounded;
                },
                isSurfaceActive: function isSurfaceActive() {
                  return instance.root_[MATCHES](':active');
                },
                isSurfaceDisabled: function isSurfaceDisabled() {
                  return instance.disabled;
                },
                addClass: function addClass(className) {
                  return instance.root_.classList.add(className);
                },
                removeClass: function removeClass(className) {
                  return instance.root_.classList.remove(className);
                },
                containsEventTarget: function containsEventTarget(target) {
                  return instance.root_.contains(target);
                },
                registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                  return instance.root_.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
                },
                deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                  return instance.root_.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
                },
                registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
                  return document.documentElement.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
                },
                deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
                  return document.documentElement.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
                },
                registerResizeHandler: function registerResizeHandler(handler) {
                  return window.addEventListener('resize', handler);
                },
                deregisterResizeHandler: function deregisterResizeHandler(handler) {
                  return window.removeEventListener('resize', handler);
                },
                updateCssVariable: function updateCssVariable(varName, value) {
                  return instance.root_.style.setProperty(varName, value);
                },
                computeBoundingRect: function computeBoundingRect() {
                  return instance.root_.getBoundingClientRect();
                },
                getWindowPageOffset: function getWindowPageOffset() {
                  return { x: window.pageXOffset, y: window.pageYOffset };
                }
              };
            }
          }]);

          return MDCRipple;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

        /**
         * See Material Design spec for more details on when to use ripples.
         * https://material.io/guidelines/motion/choreography.html#choreography-creation
         * @record
         */

        var RippleCapableSurface = function RippleCapableSurface() {
          _classCallCheck(this, RippleCapableSurface);
        };

        /** @protected {!Element} */

        RippleCapableSurface.prototype.root_;

        /**
         * Whether or not the ripple bleeds out of the bounds of the element.
         * @type {boolean|undefined}
         */
        RippleCapableSurface.prototype.unbounded;

        /**
         * Whether or not the ripple is attached to a disabled component.
         * @type {boolean|undefined}
         */
        RippleCapableSurface.prototype.disabled;

        /***/
      },

      /***/5:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(6);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

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
         *   isActivated: (boolean|undefined),
         *   hasDeactivationUXRun: (boolean|undefined),
         *   wasActivatedByPointer: (boolean|undefined),
         *   wasElementMadeActive: (boolean|undefined),
         *   activationEvent: (!Event|undefined),
         *   isProgrammatic: (boolean|undefined)
         * }}
         */
        var ActivationStateType = void 0;

        /**
         * @typedef {{
         *   activate: (string|undefined),
         *   deactivate: (string|undefined),
         *   focus: (string|undefined),
         *   blur: (string|undefined)
         * }}
         */
        var ListenerInfoType = void 0;

        /**
         * @typedef {{
         *   activate: function(!Event),
         *   deactivate: function(!Event=),
         *   focus: function(),
         *   blur: function()
         * }}
         */
        var ListenersType = void 0;

        /**
         * @typedef {{
         *   x: number,
         *   y: number
         * }}
         */
        var PointType = void 0;

        // Activation events registered on the root element of each instance for activation
        var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

        // Deactivation events registered on documentElement when a pointer-related down event occurs
        var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu'];

        // Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
        /** @type {!Array<!EventTarget>} */
        var activatedTargets = [];

        /**
         * @extends {MDCFoundation<!MDCRippleAdapter>}
         */

        var MDCRippleFoundation = function (_MDCFoundation) {
          _inherits(MDCRippleFoundation, _MDCFoundation);

          _createClass(MDCRippleFoundation, null, [{
            key: 'cssClasses',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
            }
          }, {
            key: 'strings',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
            }
          }, {
            key: 'numbers',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
            }
          }, {
            key: 'defaultAdapter',
            get: function get() {
              return {
                browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
                isUnbounded: function isUnbounded() /* boolean */{},
                isSurfaceActive: function isSurfaceActive() /* boolean */{},
                isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
                addClass: function addClass() /* className: string */{},
                removeClass: function removeClass() /* className: string */{},
                containsEventTarget: function containsEventTarget() /* target: !EventTarget */{},
                registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
                deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
                registerDocumentInteractionHandler: function registerDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
                deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
                registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
                deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
                updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
                computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
                getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
              };
            }
          }]);

          function MDCRippleFoundation(adapter) {
            _classCallCheck(this, MDCRippleFoundation);

            /** @private {number} */
            var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, _extends(MDCRippleFoundation.defaultAdapter, adapter)));

            _this.layoutFrame_ = 0;

            /** @private {!ClientRect} */
            _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

            /** @private {!ActivationStateType} */
            _this.activationState_ = _this.defaultActivationState_();

            /** @private {number} */
            _this.initialSize_ = 0;

            /** @private {number} */
            _this.maxRadius_ = 0;

            /** @private {function(!Event)} */
            _this.activateHandler_ = function (e) {
              return _this.activate_(e);
            };

            /** @private {function(!Event=)} */
            _this.deactivateHandler_ = function () {
              return _this.deactivate_();
            };

            /** @private {function(!Event=)} */
            _this.focusHandler_ = function () {
              return _this.handleFocus();
            };

            /** @private {function(!Event=)} */
            _this.blurHandler_ = function () {
              return _this.handleBlur();
            };

            /** @private {!Function} */
            _this.resizeHandler_ = function () {
              return _this.layout();
            };

            /** @private {{left: number, top:number}} */
            _this.unboundedCoords_ = {
              left: 0,
              top: 0
            };

            /** @private {number} */
            _this.fgScale_ = 0;

            /** @private {number} */
            _this.activationTimer_ = 0;

            /** @private {number} */
            _this.fgDeactivationRemovalTimer_ = 0;

            /** @private {boolean} */
            _this.activationAnimationHasEnded_ = false;

            /** @private {!Function} */
            _this.activationTimerCallback_ = function () {
              _this.activationAnimationHasEnded_ = true;
              _this.runDeactivationUXLogicIfReady_();
            };

            /** @private {!Event|undefined} */
            _this.previousActivationEvent_;
            return _this;
          }

          /**
           * We compute this property so that we are not querying information about the client
           * until the point in time where the foundation requests it. This prevents scenarios where
           * client-side feature-detection may happen too early, such as when components are rendered on the server
           * and then initialized at mount time on the client.
           * @return {boolean}
           * @private
           */

          _createClass(MDCRippleFoundation, [{
            key: 'supportsPressRipple_',
            value: function supportsPressRipple_() {
              return this.adapter_.browserSupportsCssVars();
            }

            /**
             * @return {!ActivationStateType}
             */

          }, {
            key: 'defaultActivationState_',
            value: function defaultActivationState_() {
              return {
                isActivated: false,
                hasDeactivationUXRun: false,
                wasActivatedByPointer: false,
                wasElementMadeActive: false,
                activationEvent: undefined,
                isProgrammatic: false
              };
            }

            /** @override */

          }, {
            key: 'init',
            value: function init() {
              var _this2 = this;

              var supportsPressRipple = this.supportsPressRipple_();

              this.registerRootHandlers_(supportsPressRipple);

              if (supportsPressRipple) {
                var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
                    ROOT = _MDCRippleFoundation$.ROOT,
                    UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

                requestAnimationFrame(function () {
                  _this2.adapter_.addClass(ROOT);
                  if (_this2.adapter_.isUnbounded()) {
                    _this2.adapter_.addClass(UNBOUNDED);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this2.layoutInternal_();
                  }
                });
              }
            }

            /** @override */

          }, {
            key: 'destroy',
            value: function destroy() {
              var _this3 = this;

              if (this.supportsPressRipple_()) {
                if (this.activationTimer_) {
                  clearTimeout(this.activationTimer_);
                  this.activationTimer_ = 0;
                  this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
                }

                if (this.fgDeactivationRemovalTimer_) {
                  clearTimeout(this.fgDeactivationRemovalTimer_);
                  this.fgDeactivationRemovalTimer_ = 0;
                  this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
                }

                var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
                    ROOT = _MDCRippleFoundation$2.ROOT,
                    UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;

                requestAnimationFrame(function () {
                  _this3.adapter_.removeClass(ROOT);
                  _this3.adapter_.removeClass(UNBOUNDED);
                  _this3.removeCssVars_();
                });
              }

              this.deregisterRootHandlers_();
              this.deregisterDeactivationHandlers_();
            }

            /**
             * @param {boolean} supportsPressRipple Passed from init to save a redundant function call
             * @private
             */

          }, {
            key: 'registerRootHandlers_',
            value: function registerRootHandlers_(supportsPressRipple) {
              var _this4 = this;

              if (supportsPressRipple) {
                ACTIVATION_EVENT_TYPES.forEach(function (type) {
                  _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
                });
                if (this.adapter_.isUnbounded()) {
                  this.adapter_.registerResizeHandler(this.resizeHandler_);
                }
              }

              this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
              this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
            }

            /**
             * @param {!Event} e
             * @private
             */

          }, {
            key: 'registerDeactivationHandlers_',
            value: function registerDeactivationHandlers_(e) {
              var _this5 = this;

              if (e.type === 'keydown') {
                this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
              } else {
                POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
                  _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
                });
              }
            }

            /** @private */

          }, {
            key: 'deregisterRootHandlers_',
            value: function deregisterRootHandlers_() {
              var _this6 = this;

              ACTIVATION_EVENT_TYPES.forEach(function (type) {
                _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
              });
              this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
              this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

              if (this.adapter_.isUnbounded()) {
                this.adapter_.deregisterResizeHandler(this.resizeHandler_);
              }
            }

            /** @private */

          }, {
            key: 'deregisterDeactivationHandlers_',
            value: function deregisterDeactivationHandlers_() {
              var _this7 = this;

              this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
              POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
                _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
              });
            }

            /** @private */

          }, {
            key: 'removeCssVars_',
            value: function removeCssVars_() {
              var _this8 = this;

              var strings = MDCRippleFoundation.strings;

              Object.keys(strings).forEach(function (k) {
                if (k.indexOf('VAR_') === 0) {
                  _this8.adapter_.updateCssVariable(strings[k], null);
                }
              });
            }

            /**
             * @param {!Event=} e
             * @private
             */

          }, {
            key: 'activate_',
            value: function activate_(e) {
              var _this9 = this;

              if (this.adapter_.isSurfaceDisabled()) {
                return;
              }

              var activationState = this.activationState_;
              if (activationState.isActivated) {
                return;
              }

              // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
              var previousActivationEvent = this.previousActivationEvent_;
              var isSameInteraction = previousActivationEvent && e !== undefined && previousActivationEvent.type !== e.type;
              if (isSameInteraction) {
                return;
              }

              activationState.isActivated = true;
              activationState.isProgrammatic = e === undefined;
              activationState.activationEvent = e;
              activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e !== undefined && (e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown');

              var hasActivatedChild = e !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
                return _this9.adapter_.containsEventTarget(target);
              });
              if (hasActivatedChild) {
                // Immediately reset activation state, while preserving logic that prevents touch follow-on events
                this.resetActivationState_();
                return;
              }

              if (e !== undefined) {
                activatedTargets.push( /** @type {!EventTarget} */e.target);
                this.registerDeactivationHandlers_(e);
              }

              activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
              if (activationState.wasElementMadeActive) {
                this.animateActivation_();
              }

              requestAnimationFrame(function () {
                // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
                activatedTargets = [];

                if (!activationState.wasElementMadeActive && e !== undefined && (e.key === ' ' || e.keyCode === 32)) {
                  // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                  // active states inconsistently when they're called within event handling code:
                  // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                  // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                  // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                  // variable is set within a rAF callback for a submit button interaction (#2241).
                  activationState.wasElementMadeActive = _this9.checkElementMadeActive_(e);
                  if (activationState.wasElementMadeActive) {
                    _this9.animateActivation_();
                  }
                }

                if (!activationState.wasElementMadeActive) {
                  // Reset activation state immediately if element was not made active.
                  _this9.activationState_ = _this9.defaultActivationState_();
                }
              });
            }

            /**
             * @param {!Event=} e
             * @private
             */

          }, {
            key: 'checkElementMadeActive_',
            value: function checkElementMadeActive_(e) {
              return e !== undefined && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
            }

            /**
             * @param {!Event=} event Optional event containing position information.
             */

          }, {
            key: 'activate',
            value: function activate(event) {
              this.activate_(event);
            }

            /** @private */

          }, {
            key: 'animateActivation_',
            value: function animateActivation_() {
              var _this10 = this;

              var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
                  VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
                  VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
              var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
                  FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
                  FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
              var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;

              this.layoutInternal_();

              var translateStart = '';
              var translateEnd = '';

              if (!this.adapter_.isUnbounded()) {
                var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
                    startPoint = _getFgTranslationCoor.startPoint,
                    endPoint = _getFgTranslationCoor.endPoint;

                translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
                translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
              }

              this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
              this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
              // Cancel any ongoing activation/deactivation animations
              clearTimeout(this.activationTimer_);
              clearTimeout(this.fgDeactivationRemovalTimer_);
              this.rmBoundedActivationClasses_();
              this.adapter_.removeClass(FG_DEACTIVATION);

              // Force layout in order to re-trigger the animation.
              this.adapter_.computeBoundingRect();
              this.adapter_.addClass(FG_ACTIVATION);
              this.activationTimer_ = setTimeout(function () {
                return _this10.activationTimerCallback_();
              }, DEACTIVATION_TIMEOUT_MS);
            }

            /**
             * @private
             * @return {{startPoint: PointType, endPoint: PointType}}
             */

          }, {
            key: 'getFgTranslationCoordinates_',
            value: function getFgTranslationCoordinates_() {
              var _activationState_ = this.activationState_,
                  activationEvent = _activationState_.activationEvent,
                  wasActivatedByPointer = _activationState_.wasActivatedByPointer;

              var startPoint = void 0;
              if (wasActivatedByPointer) {
                startPoint = Object(__WEBPACK_IMPORTED_MODULE_3__util__["getNormalizedEventCoords"])(
                /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
              } else {
                startPoint = {
                  x: this.frame_.width / 2,
                  y: this.frame_.height / 2
                };
              }
              // Center the element around the start point.
              startPoint = {
                x: startPoint.x - this.initialSize_ / 2,
                y: startPoint.y - this.initialSize_ / 2
              };

              var endPoint = {
                x: this.frame_.width / 2 - this.initialSize_ / 2,
                y: this.frame_.height / 2 - this.initialSize_ / 2
              };

              return { startPoint: startPoint, endPoint: endPoint };
            }

            /** @private */

          }, {
            key: 'runDeactivationUXLogicIfReady_',
            value: function runDeactivationUXLogicIfReady_() {
              var _this11 = this;

              // This method is called both when a pointing device is released, and when the activation animation ends.
              // The deactivation animation should only run after both of those occur.
              var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
              var _activationState_2 = this.activationState_,
                  hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
                  isActivated = _activationState_2.isActivated;

              var activationHasEnded = hasDeactivationUXRun || !isActivated;

              if (activationHasEnded && this.activationAnimationHasEnded_) {
                this.rmBoundedActivationClasses_();
                this.adapter_.addClass(FG_DEACTIVATION);
                this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                  _this11.adapter_.removeClass(FG_DEACTIVATION);
                }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].FG_DEACTIVATION_MS);
              }
            }

            /** @private */

          }, {
            key: 'rmBoundedActivationClasses_',
            value: function rmBoundedActivationClasses_() {
              var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

              this.adapter_.removeClass(FG_ACTIVATION);
              this.activationAnimationHasEnded_ = false;
              this.adapter_.computeBoundingRect();
            }
          }, {
            key: 'resetActivationState_',
            value: function resetActivationState_() {
              var _this12 = this;

              this.previousActivationEvent_ = this.activationState_.activationEvent;
              this.activationState_ = this.defaultActivationState_();
              // Touch devices may fire additional events for the same interaction within a short time.
              // Store the previous event until it's safe to assume that subsequent events are for new interactions.
              setTimeout(function () {
                return _this12.previousActivationEvent_ = undefined;
              }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
            }

            /**
             * @private
             */

          }, {
            key: 'deactivate_',
            value: function deactivate_() {
              var _this13 = this;

              var activationState = this.activationState_;
              // This can happen in scenarios such as when you have a keyup event that blurs the element.
              if (!activationState.isActivated) {
                return;
              }

              var state = /** @type {!ActivationStateType} */_extends({}, activationState);

              if (activationState.isProgrammatic) {
                requestAnimationFrame(function () {
                  return _this13.animateDeactivation_(state);
                });
                this.resetActivationState_();
              } else {
                this.deregisterDeactivationHandlers_();
                requestAnimationFrame(function () {
                  _this13.activationState_.hasDeactivationUXRun = true;
                  _this13.animateDeactivation_(state);
                  _this13.resetActivationState_();
                });
              }
            }
          }, {
            key: 'deactivate',
            value: function deactivate() {
              this.deactivate_();
            }

            /**
             * @param {!ActivationStateType} options
             * @private
             */

          }, {
            key: 'animateDeactivation_',
            value: function animateDeactivation_(_ref) {
              var wasActivatedByPointer = _ref.wasActivatedByPointer,
                  wasElementMadeActive = _ref.wasElementMadeActive;

              if (wasActivatedByPointer || wasElementMadeActive) {
                this.runDeactivationUXLogicIfReady_();
              }
            }
          }, {
            key: 'layout',
            value: function layout() {
              var _this14 = this;

              if (this.layoutFrame_) {
                cancelAnimationFrame(this.layoutFrame_);
              }
              this.layoutFrame_ = requestAnimationFrame(function () {
                _this14.layoutInternal_();
                _this14.layoutFrame_ = 0;
              });
            }

            /** @private */

          }, {
            key: 'layoutInternal_',
            value: function layoutInternal_() {
              var _this15 = this;

              this.frame_ = this.adapter_.computeBoundingRect();
              var maxDim = Math.max(this.frame_.height, this.frame_.width);

              // Surface diameter is treated differently for unbounded vs. bounded ripples.
              // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
              // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
              // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
              // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
              // `overflow: hidden`.
              var getBoundedRadius = function getBoundedRadius() {
                var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
                return hypotenuse + MDCRippleFoundation.numbers.PADDING;
              };

              this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

              // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
              this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
              this.fgScale_ = this.maxRadius_ / this.initialSize_;

              this.updateLayoutCssVars_();
            }

            /** @private */

          }, {
            key: 'updateLayoutCssVars_',
            value: function updateLayoutCssVars_() {
              var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
                  VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
                  VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
                  VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
                  VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;

              this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
              this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

              if (this.adapter_.isUnbounded()) {
                this.unboundedCoords_ = {
                  left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
                  top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
                };

                this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
                this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
              }
            }

            /** @param {boolean} unbounded */

          }, {
            key: 'setUnbounded',
            value: function setUnbounded(unbounded) {
              var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

              if (unbounded) {
                this.adapter_.addClass(UNBOUNDED);
              } else {
                this.adapter_.removeClass(UNBOUNDED);
              }
            }
          }, {
            key: 'handleFocus',
            value: function handleFocus() {
              var _this16 = this;

              requestAnimationFrame(function () {
                return _this16.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
              });
            }
          }, {
            key: 'handleBlur',
            value: function handleBlur() {
              var _this17 = this;

              requestAnimationFrame(function () {
                return _this17.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
              });
            }
          }]);

          return MDCRippleFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

        /* harmony default export */__webpack_exports__["a"] = MDCRippleFoundation;

        /***/
      },

      /***/6:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return cssClasses;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
          return strings;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
          return numbers;
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

        var cssClasses = {
          // Ripple is a special case where the "root" component is really a "mixin" of sorts,
          // given that it's an 'upgrade' to an existing component. That being said it is the root
          // CSS class that all other CSS classes derive from.
          ROOT: 'mdc-ripple-upgraded',
          UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
          BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
          FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
          FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
        };

        var strings = {
          VAR_LEFT: '--mdc-ripple-left',
          VAR_TOP: '--mdc-ripple-top',
          VAR_FG_SIZE: '--mdc-ripple-fg-size',
          VAR_FG_SCALE: '--mdc-ripple-fg-scale',
          VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
          VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
        };

        var numbers = {
          PADDING: 10,
          INITIAL_ORIGIN_SCALE: 0.6,
          DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
          FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
          TAP_DELAY_MS: 300 };

        /***/
      },

      /***/8:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCSelectionControlState", function () {
          return MDCSelectionControlState;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCSelectionControl", function () {
          return MDCSelectionControl;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_ripple_index__ = __webpack_require__(4);
        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

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

        /* eslint-enable no-unused-vars */

        /**
         * @typedef {{
         *   checked: boolean,
         *   indeterminate: boolean,
         *   disabled: boolean,
         *   value: ?string
         * }}
         */
        var MDCSelectionControlState = void 0;

        /**
         * @record
         */

        var MDCSelectionControl = function () {
          function MDCSelectionControl() {
            _classCallCheck(this, MDCSelectionControl);
          }

          _createClass(MDCSelectionControl, [{
            key: 'ripple',

            /** @return {?MDCRipple} */
            get: function get() {}
          }]);

          return MDCSelectionControl;
        }();

        /***/
      }

      /******/ })
  );
});
//# sourceMappingURL=mdc.formField.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 Material Components for the Web
 Copyright (c) 2018 Google Inc.
 License: MIT
*/
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["checkbox"] = factory();else root["mdc"] = root["mdc"] || {}, root["mdc"]["checkbox"] = factory();
})(undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 87);
      /******/
    }(
    /************************************************************************/
    /******/{

      /***/0:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

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

        /* harmony default export */__webpack_exports__["a"] = MDCFoundation;

        /***/
      },

      /***/1:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(0);
        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

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
              return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
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

        /* harmony default export */__webpack_exports__["a"] = MDCComponent;

        /***/
      },

      /***/10:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "transformStyleProperties", function () {
          return transformStyleProperties;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "getCorrectEventName", function () {
          return getCorrectEventName;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "getCorrectPropertyName", function () {
          return getCorrectPropertyName;
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

        /***/
      },

      /***/2:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "supportsCssVariables", function () {
          return supportsCssVariables;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "applyPassive", function () {
          return applyPassive;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "getMatchesProperty", function () {
          return getMatchesProperty;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function () {
          return getNormalizedEventCoords;
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
         * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
         * @private {boolean|undefined}
         */
        var supportsCssVariables_ = void 0;

        /**
         * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
         * @private {boolean|undefined}
         */
        var supportsPassive_ = void 0;

        /**
         * @param {!Window} windowObj
         * @return {boolean}
         */
        function detectEdgePseudoVarBug(windowObj) {
          // Detect versions of Edge with buggy var() support
          // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
          var document = windowObj.document;
          var node = document.createElement('div');
          node.className = 'mdc-ripple-surface--test-edge-var-bug';
          document.body.appendChild(node);

          // The bug exists if ::before style ends up propagating to the parent element.
          // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
          // but Firefox is known to support CSS custom properties correctly.
          // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
          var computedStyle = windowObj.getComputedStyle(node);
          var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
          node.remove();
          return hasPseudoVarBug;
        }

        /**
         * @param {!Window} windowObj
         * @param {boolean=} forceRefresh
         * @return {boolean|undefined}
         */

        function supportsCssVariables(windowObj) {
          var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          var supportsCssVariables = supportsCssVariables_;
          if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
            return supportsCssVariables;
          }

          var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
          if (!supportsFunctionPresent) {
            return;
          }

          var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
          // See: https://bugs.webkit.org/show_bug.cgi?id=154669
          // See: README section on Safari
          var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

          if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
            supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
          } else {
            supportsCssVariables = false;
          }

          if (!forceRefresh) {
            supportsCssVariables_ = supportsCssVariables;
          }
          return supportsCssVariables;
        }

        //
        /**
         * Determine whether the current browser supports passive event listeners, and if so, use them.
         * @param {!Window=} globalObj
         * @param {boolean=} forceRefresh
         * @return {boolean|!EventListenerOptions}
         */
        function applyPassive() {
          var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
          var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (supportsPassive_ === undefined || forceRefresh) {
            var isSupported = false;
            try {
              globalObj.document.addEventListener('test', null, { get passive() {
                  isSupported = true;
                  return isSupported;
                } });
            } catch (e) {}

            supportsPassive_ = isSupported;
          }

          return supportsPassive_ ? /** @type {!EventListenerOptions} */{ passive: true } : false;
        }

        /**
         * @param {!Object} HTMLElementPrototype
         * @return {string}
         */
        function getMatchesProperty(HTMLElementPrototype) {
          /**
           * Order is important because we return the first existing method we find.
           * Do not change the order of the items in the below array.
           */
          var matchesMethods = ['matches', 'webkitMatchesSelector', 'msMatchesSelector'];
          var method = 'matches';
          for (var i = 0; i < matchesMethods.length; i++) {
            var matchesMethod = matchesMethods[i];
            if (matchesMethod in HTMLElementPrototype) {
              method = matchesMethod;
              break;
            }
          }

          return method;
        }

        /**
         * @param {!Event} ev
         * @param {{x: number, y: number}} pageOffset
         * @param {!ClientRect} clientRect
         * @return {{x: number, y: number}}
         */
        function getNormalizedEventCoords(ev, pageOffset, clientRect) {
          var x = pageOffset.x,
              y = pageOffset.y;

          var documentX = x + clientRect.left;
          var documentY = y + clientRect.top;

          var normalizedX = void 0;
          var normalizedY = void 0;
          // Determine touch point relative to the ripple container.
          if (ev.type === 'touchstart') {
            ev = /** @type {!TouchEvent} */ev;
            normalizedX = ev.changedTouches[0].pageX - documentX;
            normalizedY = ev.changedTouches[0].pageY - documentY;
          } else {
            ev = /** @type {!MouseEvent} */ev;
            normalizedX = ev.pageX - documentX;
            normalizedY = ev.pageY - documentY;
          }

          return { x: normalizedX, y: normalizedY };
        }

        /***/
      },

      /***/3:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

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

        /* eslint no-unused-vars: [2, {"args": "none"}] */

        /**
         * Adapter for MDC Ripple. Provides an interface for managing
         * - classes
         * - dom
         * - CSS variables
         * - position
         * - dimensions
         * - scroll position
         * - event handlers
         * - unbounded, active and disabled states
         *
         * Additionally, provides type information for the adapter to the Closure
         * compiler.
         *
         * Implement this adapter for your framework of choice to delegate updates to
         * the component in your framework of choice. See architecture documentation
         * for more details.
         * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
         *
         * @record
         */
        var MDCRippleAdapter = function () {
          function MDCRippleAdapter() {
            _classCallCheck(this, MDCRippleAdapter);
          }

          _createClass(MDCRippleAdapter, [{
            key: "browserSupportsCssVars",

            /** @return {boolean} */
            value: function browserSupportsCssVars() {}

            /** @return {boolean} */

          }, {
            key: "isUnbounded",
            value: function isUnbounded() {}

            /** @return {boolean} */

          }, {
            key: "isSurfaceActive",
            value: function isSurfaceActive() {}

            /** @return {boolean} */

          }, {
            key: "isSurfaceDisabled",
            value: function isSurfaceDisabled() {}

            /** @param {string} className */

          }, {
            key: "addClass",
            value: function addClass(className) {}

            /** @param {string} className */

          }, {
            key: "removeClass",
            value: function removeClass(className) {}

            /** @param {!EventTarget} target */

          }, {
            key: "containsEventTarget",
            value: function containsEventTarget(target) {}

            /**
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: "registerInteractionHandler",
            value: function registerInteractionHandler(evtType, handler) {}

            /**
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: "deregisterInteractionHandler",
            value: function deregisterInteractionHandler(evtType, handler) {}

            /**
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: "registerDocumentInteractionHandler",
            value: function registerDocumentInteractionHandler(evtType, handler) {}

            /**
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: "deregisterDocumentInteractionHandler",
            value: function deregisterDocumentInteractionHandler(evtType, handler) {}

            /**
             * @param {!Function} handler
             */

          }, {
            key: "registerResizeHandler",
            value: function registerResizeHandler(handler) {}

            /**
             * @param {!Function} handler
             */

          }, {
            key: "deregisterResizeHandler",
            value: function deregisterResizeHandler(handler) {}

            /**
             * @param {string} varName
             * @param {?number|string} value
             */

          }, {
            key: "updateCssVariable",
            value: function updateCssVariable(varName, value) {}

            /** @return {!ClientRect} */

          }, {
            key: "computeBoundingRect",
            value: function computeBoundingRect() {}

            /** @return {{x: number, y: number}} */

          }, {
            key: "getWindowPageOffset",
            value: function getWindowPageOffset() {}
          }]);

          return MDCRippleAdapter;
        }();

        /* unused harmony default export */var _unused_webpack_default_export = MDCRippleAdapter;

        /***/
      },

      /***/4:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCRipple", function () {
          return MDCRipple;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "RippleCapableSurface", function () {
          return RippleCapableSurface;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(5);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function () {
          return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
        });
        /* harmony reexport (module object) */__webpack_require__.d(__webpack_exports__, "util", function () {
          return __WEBPACK_IMPORTED_MODULE_3__util__;
        });
        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

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
         * @extends MDCComponent<!MDCRippleFoundation>
         */

        var MDCRipple = function (_MDCComponent) {
          _inherits(MDCRipple, _MDCComponent);

          /** @param {...?} args */
          function MDCRipple() {
            var _ref;

            _classCallCheck(this, MDCRipple);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            /** @type {boolean} */
            var _this = _possibleConstructorReturn(this, (_ref = MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).call.apply(_ref, [this].concat(args)));

            _this.disabled = false;

            /** @private {boolean} */
            _this.unbounded_;
            return _this;
          }

          /**
           * @param {!Element} root
           * @param {{isUnbounded: (boolean|undefined)}=} options
           * @return {!MDCRipple}
           */

          _createClass(MDCRipple, [{
            key: 'setUnbounded_',

            /**
             * Closure Compiler throws an access control error when directly accessing a
             * protected or private property inside a getter/setter, like unbounded above.
             * By accessing the protected property inside a method, we solve that problem.
             * That's why this function exists.
             * @private
             */
            value: function setUnbounded_() {
              this.foundation_.setUnbounded(this.unbounded_);
            }
          }, {
            key: 'activate',
            value: function activate() {
              this.foundation_.activate();
            }
          }, {
            key: 'deactivate',
            value: function deactivate() {
              this.foundation_.deactivate();
            }
          }, {
            key: 'layout',
            value: function layout() {
              this.foundation_.layout();
            }

            /**
             * @return {!MDCRippleFoundation}
             * @override
             */

          }, {
            key: 'getDefaultFoundation',
            value: function getDefaultFoundation() {
              return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](MDCRipple.createAdapter(this));
            }

            /** @override */

          }, {
            key: 'initialSyncWithDOM',
            value: function initialSyncWithDOM() {
              this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
            }
          }, {
            key: 'unbounded',

            /** @return {boolean} */
            get: function get() {
              return this.unbounded_;
            }

            /** @param {boolean} unbounded */

            , set: function set(unbounded) {
              this.unbounded_ = Boolean(unbounded);
              this.setUnbounded_();
            }
          }], [{
            key: 'attachTo',
            value: function attachTo(root) {
              var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                  _ref2$isUnbounded = _ref2.isUnbounded,
                  isUnbounded = _ref2$isUnbounded === undefined ? undefined : _ref2$isUnbounded;

              var ripple = new MDCRipple(root);
              // Only override unbounded behavior if option is explicitly specified
              if (isUnbounded !== undefined) {
                ripple.unbounded = /** @type {boolean} */isUnbounded;
              }
              return ripple;
            }

            /**
             * @param {!RippleCapableSurface} instance
             * @return {!MDCRippleAdapter}
             */

          }, {
            key: 'createAdapter',
            value: function createAdapter(instance) {
              var MATCHES = __WEBPACK_IMPORTED_MODULE_3__util__["getMatchesProperty"](HTMLElement.prototype);

              return {
                browserSupportsCssVars: function browserSupportsCssVars() {
                  return __WEBPACK_IMPORTED_MODULE_3__util__["supportsCssVariables"](window);
                },
                isUnbounded: function isUnbounded() {
                  return instance.unbounded;
                },
                isSurfaceActive: function isSurfaceActive() {
                  return instance.root_[MATCHES](':active');
                },
                isSurfaceDisabled: function isSurfaceDisabled() {
                  return instance.disabled;
                },
                addClass: function addClass(className) {
                  return instance.root_.classList.add(className);
                },
                removeClass: function removeClass(className) {
                  return instance.root_.classList.remove(className);
                },
                containsEventTarget: function containsEventTarget(target) {
                  return instance.root_.contains(target);
                },
                registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                  return instance.root_.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
                },
                deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                  return instance.root_.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
                },
                registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
                  return document.documentElement.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
                },
                deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
                  return document.documentElement.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
                },
                registerResizeHandler: function registerResizeHandler(handler) {
                  return window.addEventListener('resize', handler);
                },
                deregisterResizeHandler: function deregisterResizeHandler(handler) {
                  return window.removeEventListener('resize', handler);
                },
                updateCssVariable: function updateCssVariable(varName, value) {
                  return instance.root_.style.setProperty(varName, value);
                },
                computeBoundingRect: function computeBoundingRect() {
                  return instance.root_.getBoundingClientRect();
                },
                getWindowPageOffset: function getWindowPageOffset() {
                  return { x: window.pageXOffset, y: window.pageYOffset };
                }
              };
            }
          }]);

          return MDCRipple;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

        /**
         * See Material Design spec for more details on when to use ripples.
         * https://material.io/guidelines/motion/choreography.html#choreography-creation
         * @record
         */

        var RippleCapableSurface = function RippleCapableSurface() {
          _classCallCheck(this, RippleCapableSurface);
        };

        /** @protected {!Element} */

        RippleCapableSurface.prototype.root_;

        /**
         * Whether or not the ripple bleeds out of the bounds of the element.
         * @type {boolean|undefined}
         */
        RippleCapableSurface.prototype.unbounded;

        /**
         * Whether or not the ripple is attached to a disabled component.
         * @type {boolean|undefined}
         */
        RippleCapableSurface.prototype.disabled;

        /***/
      },

      /***/5:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(6);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

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
         *   isActivated: (boolean|undefined),
         *   hasDeactivationUXRun: (boolean|undefined),
         *   wasActivatedByPointer: (boolean|undefined),
         *   wasElementMadeActive: (boolean|undefined),
         *   activationEvent: (!Event|undefined),
         *   isProgrammatic: (boolean|undefined)
         * }}
         */
        var ActivationStateType = void 0;

        /**
         * @typedef {{
         *   activate: (string|undefined),
         *   deactivate: (string|undefined),
         *   focus: (string|undefined),
         *   blur: (string|undefined)
         * }}
         */
        var ListenerInfoType = void 0;

        /**
         * @typedef {{
         *   activate: function(!Event),
         *   deactivate: function(!Event=),
         *   focus: function(),
         *   blur: function()
         * }}
         */
        var ListenersType = void 0;

        /**
         * @typedef {{
         *   x: number,
         *   y: number
         * }}
         */
        var PointType = void 0;

        // Activation events registered on the root element of each instance for activation
        var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

        // Deactivation events registered on documentElement when a pointer-related down event occurs
        var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu'];

        // Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
        /** @type {!Array<!EventTarget>} */
        var activatedTargets = [];

        /**
         * @extends {MDCFoundation<!MDCRippleAdapter>}
         */

        var MDCRippleFoundation = function (_MDCFoundation) {
          _inherits(MDCRippleFoundation, _MDCFoundation);

          _createClass(MDCRippleFoundation, null, [{
            key: 'cssClasses',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
            }
          }, {
            key: 'strings',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
            }
          }, {
            key: 'numbers',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
            }
          }, {
            key: 'defaultAdapter',
            get: function get() {
              return {
                browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
                isUnbounded: function isUnbounded() /* boolean */{},
                isSurfaceActive: function isSurfaceActive() /* boolean */{},
                isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
                addClass: function addClass() /* className: string */{},
                removeClass: function removeClass() /* className: string */{},
                containsEventTarget: function containsEventTarget() /* target: !EventTarget */{},
                registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
                deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
                registerDocumentInteractionHandler: function registerDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
                deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
                registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
                deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
                updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
                computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
                getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
              };
            }
          }]);

          function MDCRippleFoundation(adapter) {
            _classCallCheck(this, MDCRippleFoundation);

            /** @private {number} */
            var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, _extends(MDCRippleFoundation.defaultAdapter, adapter)));

            _this.layoutFrame_ = 0;

            /** @private {!ClientRect} */
            _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

            /** @private {!ActivationStateType} */
            _this.activationState_ = _this.defaultActivationState_();

            /** @private {number} */
            _this.initialSize_ = 0;

            /** @private {number} */
            _this.maxRadius_ = 0;

            /** @private {function(!Event)} */
            _this.activateHandler_ = function (e) {
              return _this.activate_(e);
            };

            /** @private {function(!Event=)} */
            _this.deactivateHandler_ = function () {
              return _this.deactivate_();
            };

            /** @private {function(!Event=)} */
            _this.focusHandler_ = function () {
              return _this.handleFocus();
            };

            /** @private {function(!Event=)} */
            _this.blurHandler_ = function () {
              return _this.handleBlur();
            };

            /** @private {!Function} */
            _this.resizeHandler_ = function () {
              return _this.layout();
            };

            /** @private {{left: number, top:number}} */
            _this.unboundedCoords_ = {
              left: 0,
              top: 0
            };

            /** @private {number} */
            _this.fgScale_ = 0;

            /** @private {number} */
            _this.activationTimer_ = 0;

            /** @private {number} */
            _this.fgDeactivationRemovalTimer_ = 0;

            /** @private {boolean} */
            _this.activationAnimationHasEnded_ = false;

            /** @private {!Function} */
            _this.activationTimerCallback_ = function () {
              _this.activationAnimationHasEnded_ = true;
              _this.runDeactivationUXLogicIfReady_();
            };

            /** @private {!Event|undefined} */
            _this.previousActivationEvent_;
            return _this;
          }

          /**
           * We compute this property so that we are not querying information about the client
           * until the point in time where the foundation requests it. This prevents scenarios where
           * client-side feature-detection may happen too early, such as when components are rendered on the server
           * and then initialized at mount time on the client.
           * @return {boolean}
           * @private
           */

          _createClass(MDCRippleFoundation, [{
            key: 'supportsPressRipple_',
            value: function supportsPressRipple_() {
              return this.adapter_.browserSupportsCssVars();
            }

            /**
             * @return {!ActivationStateType}
             */

          }, {
            key: 'defaultActivationState_',
            value: function defaultActivationState_() {
              return {
                isActivated: false,
                hasDeactivationUXRun: false,
                wasActivatedByPointer: false,
                wasElementMadeActive: false,
                activationEvent: undefined,
                isProgrammatic: false
              };
            }

            /** @override */

          }, {
            key: 'init',
            value: function init() {
              var _this2 = this;

              var supportsPressRipple = this.supportsPressRipple_();

              this.registerRootHandlers_(supportsPressRipple);

              if (supportsPressRipple) {
                var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
                    ROOT = _MDCRippleFoundation$.ROOT,
                    UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

                requestAnimationFrame(function () {
                  _this2.adapter_.addClass(ROOT);
                  if (_this2.adapter_.isUnbounded()) {
                    _this2.adapter_.addClass(UNBOUNDED);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this2.layoutInternal_();
                  }
                });
              }
            }

            /** @override */

          }, {
            key: 'destroy',
            value: function destroy() {
              var _this3 = this;

              if (this.supportsPressRipple_()) {
                if (this.activationTimer_) {
                  clearTimeout(this.activationTimer_);
                  this.activationTimer_ = 0;
                  this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
                }

                if (this.fgDeactivationRemovalTimer_) {
                  clearTimeout(this.fgDeactivationRemovalTimer_);
                  this.fgDeactivationRemovalTimer_ = 0;
                  this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
                }

                var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
                    ROOT = _MDCRippleFoundation$2.ROOT,
                    UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;

                requestAnimationFrame(function () {
                  _this3.adapter_.removeClass(ROOT);
                  _this3.adapter_.removeClass(UNBOUNDED);
                  _this3.removeCssVars_();
                });
              }

              this.deregisterRootHandlers_();
              this.deregisterDeactivationHandlers_();
            }

            /**
             * @param {boolean} supportsPressRipple Passed from init to save a redundant function call
             * @private
             */

          }, {
            key: 'registerRootHandlers_',
            value: function registerRootHandlers_(supportsPressRipple) {
              var _this4 = this;

              if (supportsPressRipple) {
                ACTIVATION_EVENT_TYPES.forEach(function (type) {
                  _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
                });
                if (this.adapter_.isUnbounded()) {
                  this.adapter_.registerResizeHandler(this.resizeHandler_);
                }
              }

              this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
              this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
            }

            /**
             * @param {!Event} e
             * @private
             */

          }, {
            key: 'registerDeactivationHandlers_',
            value: function registerDeactivationHandlers_(e) {
              var _this5 = this;

              if (e.type === 'keydown') {
                this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
              } else {
                POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
                  _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
                });
              }
            }

            /** @private */

          }, {
            key: 'deregisterRootHandlers_',
            value: function deregisterRootHandlers_() {
              var _this6 = this;

              ACTIVATION_EVENT_TYPES.forEach(function (type) {
                _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
              });
              this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
              this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

              if (this.adapter_.isUnbounded()) {
                this.adapter_.deregisterResizeHandler(this.resizeHandler_);
              }
            }

            /** @private */

          }, {
            key: 'deregisterDeactivationHandlers_',
            value: function deregisterDeactivationHandlers_() {
              var _this7 = this;

              this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
              POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
                _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
              });
            }

            /** @private */

          }, {
            key: 'removeCssVars_',
            value: function removeCssVars_() {
              var _this8 = this;

              var strings = MDCRippleFoundation.strings;

              Object.keys(strings).forEach(function (k) {
                if (k.indexOf('VAR_') === 0) {
                  _this8.adapter_.updateCssVariable(strings[k], null);
                }
              });
            }

            /**
             * @param {!Event=} e
             * @private
             */

          }, {
            key: 'activate_',
            value: function activate_(e) {
              var _this9 = this;

              if (this.adapter_.isSurfaceDisabled()) {
                return;
              }

              var activationState = this.activationState_;
              if (activationState.isActivated) {
                return;
              }

              // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
              var previousActivationEvent = this.previousActivationEvent_;
              var isSameInteraction = previousActivationEvent && e !== undefined && previousActivationEvent.type !== e.type;
              if (isSameInteraction) {
                return;
              }

              activationState.isActivated = true;
              activationState.isProgrammatic = e === undefined;
              activationState.activationEvent = e;
              activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e !== undefined && (e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown');

              var hasActivatedChild = e !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
                return _this9.adapter_.containsEventTarget(target);
              });
              if (hasActivatedChild) {
                // Immediately reset activation state, while preserving logic that prevents touch follow-on events
                this.resetActivationState_();
                return;
              }

              if (e !== undefined) {
                activatedTargets.push( /** @type {!EventTarget} */e.target);
                this.registerDeactivationHandlers_(e);
              }

              activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
              if (activationState.wasElementMadeActive) {
                this.animateActivation_();
              }

              requestAnimationFrame(function () {
                // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
                activatedTargets = [];

                if (!activationState.wasElementMadeActive && e !== undefined && (e.key === ' ' || e.keyCode === 32)) {
                  // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                  // active states inconsistently when they're called within event handling code:
                  // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                  // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                  // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                  // variable is set within a rAF callback for a submit button interaction (#2241).
                  activationState.wasElementMadeActive = _this9.checkElementMadeActive_(e);
                  if (activationState.wasElementMadeActive) {
                    _this9.animateActivation_();
                  }
                }

                if (!activationState.wasElementMadeActive) {
                  // Reset activation state immediately if element was not made active.
                  _this9.activationState_ = _this9.defaultActivationState_();
                }
              });
            }

            /**
             * @param {!Event=} e
             * @private
             */

          }, {
            key: 'checkElementMadeActive_',
            value: function checkElementMadeActive_(e) {
              return e !== undefined && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
            }

            /**
             * @param {!Event=} event Optional event containing position information.
             */

          }, {
            key: 'activate',
            value: function activate(event) {
              this.activate_(event);
            }

            /** @private */

          }, {
            key: 'animateActivation_',
            value: function animateActivation_() {
              var _this10 = this;

              var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
                  VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
                  VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
              var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
                  FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
                  FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
              var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;

              this.layoutInternal_();

              var translateStart = '';
              var translateEnd = '';

              if (!this.adapter_.isUnbounded()) {
                var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
                    startPoint = _getFgTranslationCoor.startPoint,
                    endPoint = _getFgTranslationCoor.endPoint;

                translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
                translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
              }

              this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
              this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
              // Cancel any ongoing activation/deactivation animations
              clearTimeout(this.activationTimer_);
              clearTimeout(this.fgDeactivationRemovalTimer_);
              this.rmBoundedActivationClasses_();
              this.adapter_.removeClass(FG_DEACTIVATION);

              // Force layout in order to re-trigger the animation.
              this.adapter_.computeBoundingRect();
              this.adapter_.addClass(FG_ACTIVATION);
              this.activationTimer_ = setTimeout(function () {
                return _this10.activationTimerCallback_();
              }, DEACTIVATION_TIMEOUT_MS);
            }

            /**
             * @private
             * @return {{startPoint: PointType, endPoint: PointType}}
             */

          }, {
            key: 'getFgTranslationCoordinates_',
            value: function getFgTranslationCoordinates_() {
              var _activationState_ = this.activationState_,
                  activationEvent = _activationState_.activationEvent,
                  wasActivatedByPointer = _activationState_.wasActivatedByPointer;

              var startPoint = void 0;
              if (wasActivatedByPointer) {
                startPoint = Object(__WEBPACK_IMPORTED_MODULE_3__util__["getNormalizedEventCoords"])(
                /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
              } else {
                startPoint = {
                  x: this.frame_.width / 2,
                  y: this.frame_.height / 2
                };
              }
              // Center the element around the start point.
              startPoint = {
                x: startPoint.x - this.initialSize_ / 2,
                y: startPoint.y - this.initialSize_ / 2
              };

              var endPoint = {
                x: this.frame_.width / 2 - this.initialSize_ / 2,
                y: this.frame_.height / 2 - this.initialSize_ / 2
              };

              return { startPoint: startPoint, endPoint: endPoint };
            }

            /** @private */

          }, {
            key: 'runDeactivationUXLogicIfReady_',
            value: function runDeactivationUXLogicIfReady_() {
              var _this11 = this;

              // This method is called both when a pointing device is released, and when the activation animation ends.
              // The deactivation animation should only run after both of those occur.
              var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
              var _activationState_2 = this.activationState_,
                  hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
                  isActivated = _activationState_2.isActivated;

              var activationHasEnded = hasDeactivationUXRun || !isActivated;

              if (activationHasEnded && this.activationAnimationHasEnded_) {
                this.rmBoundedActivationClasses_();
                this.adapter_.addClass(FG_DEACTIVATION);
                this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                  _this11.adapter_.removeClass(FG_DEACTIVATION);
                }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].FG_DEACTIVATION_MS);
              }
            }

            /** @private */

          }, {
            key: 'rmBoundedActivationClasses_',
            value: function rmBoundedActivationClasses_() {
              var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

              this.adapter_.removeClass(FG_ACTIVATION);
              this.activationAnimationHasEnded_ = false;
              this.adapter_.computeBoundingRect();
            }
          }, {
            key: 'resetActivationState_',
            value: function resetActivationState_() {
              var _this12 = this;

              this.previousActivationEvent_ = this.activationState_.activationEvent;
              this.activationState_ = this.defaultActivationState_();
              // Touch devices may fire additional events for the same interaction within a short time.
              // Store the previous event until it's safe to assume that subsequent events are for new interactions.
              setTimeout(function () {
                return _this12.previousActivationEvent_ = undefined;
              }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
            }

            /**
             * @private
             */

          }, {
            key: 'deactivate_',
            value: function deactivate_() {
              var _this13 = this;

              var activationState = this.activationState_;
              // This can happen in scenarios such as when you have a keyup event that blurs the element.
              if (!activationState.isActivated) {
                return;
              }

              var state = /** @type {!ActivationStateType} */_extends({}, activationState);

              if (activationState.isProgrammatic) {
                requestAnimationFrame(function () {
                  return _this13.animateDeactivation_(state);
                });
                this.resetActivationState_();
              } else {
                this.deregisterDeactivationHandlers_();
                requestAnimationFrame(function () {
                  _this13.activationState_.hasDeactivationUXRun = true;
                  _this13.animateDeactivation_(state);
                  _this13.resetActivationState_();
                });
              }
            }
          }, {
            key: 'deactivate',
            value: function deactivate() {
              this.deactivate_();
            }

            /**
             * @param {!ActivationStateType} options
             * @private
             */

          }, {
            key: 'animateDeactivation_',
            value: function animateDeactivation_(_ref) {
              var wasActivatedByPointer = _ref.wasActivatedByPointer,
                  wasElementMadeActive = _ref.wasElementMadeActive;

              if (wasActivatedByPointer || wasElementMadeActive) {
                this.runDeactivationUXLogicIfReady_();
              }
            }
          }, {
            key: 'layout',
            value: function layout() {
              var _this14 = this;

              if (this.layoutFrame_) {
                cancelAnimationFrame(this.layoutFrame_);
              }
              this.layoutFrame_ = requestAnimationFrame(function () {
                _this14.layoutInternal_();
                _this14.layoutFrame_ = 0;
              });
            }

            /** @private */

          }, {
            key: 'layoutInternal_',
            value: function layoutInternal_() {
              var _this15 = this;

              this.frame_ = this.adapter_.computeBoundingRect();
              var maxDim = Math.max(this.frame_.height, this.frame_.width);

              // Surface diameter is treated differently for unbounded vs. bounded ripples.
              // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
              // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
              // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
              // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
              // `overflow: hidden`.
              var getBoundedRadius = function getBoundedRadius() {
                var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
                return hypotenuse + MDCRippleFoundation.numbers.PADDING;
              };

              this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

              // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
              this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
              this.fgScale_ = this.maxRadius_ / this.initialSize_;

              this.updateLayoutCssVars_();
            }

            /** @private */

          }, {
            key: 'updateLayoutCssVars_',
            value: function updateLayoutCssVars_() {
              var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
                  VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
                  VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
                  VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
                  VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;

              this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
              this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

              if (this.adapter_.isUnbounded()) {
                this.unboundedCoords_ = {
                  left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
                  top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
                };

                this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
                this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
              }
            }

            /** @param {boolean} unbounded */

          }, {
            key: 'setUnbounded',
            value: function setUnbounded(unbounded) {
              var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

              if (unbounded) {
                this.adapter_.addClass(UNBOUNDED);
              } else {
                this.adapter_.removeClass(UNBOUNDED);
              }
            }
          }, {
            key: 'handleFocus',
            value: function handleFocus() {
              var _this16 = this;

              requestAnimationFrame(function () {
                return _this16.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
              });
            }
          }, {
            key: 'handleBlur',
            value: function handleBlur() {
              var _this17 = this;

              requestAnimationFrame(function () {
                return _this17.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
              });
            }
          }]);

          return MDCRippleFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

        /* harmony default export */__webpack_exports__["a"] = MDCRippleFoundation;

        /***/
      },

      /***/6:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return cssClasses;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
          return strings;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
          return numbers;
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

        var cssClasses = {
          // Ripple is a special case where the "root" component is really a "mixin" of sorts,
          // given that it's an 'upgrade' to an existing component. That being said it is the root
          // CSS class that all other CSS classes derive from.
          ROOT: 'mdc-ripple-upgraded',
          UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
          BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
          FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
          FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
        };

        var strings = {
          VAR_LEFT: '--mdc-ripple-left',
          VAR_TOP: '--mdc-ripple-top',
          VAR_FG_SIZE: '--mdc-ripple-fg-size',
          VAR_FG_SCALE: '--mdc-ripple-fg-scale',
          VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
          VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
        };

        var numbers = {
          PADDING: 10,
          INITIAL_ORIGIN_SCALE: 0.6,
          DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
          FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
          TAP_DELAY_MS: 300 };

        /***/
      },

      /***/8:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCSelectionControlState", function () {
          return MDCSelectionControlState;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCSelectionControl", function () {
          return MDCSelectionControl;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_ripple_index__ = __webpack_require__(4);
        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

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

        /* eslint-enable no-unused-vars */

        /**
         * @typedef {{
         *   checked: boolean,
         *   indeterminate: boolean,
         *   disabled: boolean,
         *   value: ?string
         * }}
         */
        var MDCSelectionControlState = void 0;

        /**
         * @record
         */

        var MDCSelectionControl = function () {
          function MDCSelectionControl() {
            _classCallCheck(this, MDCSelectionControl);
          }

          _createClass(MDCSelectionControl, [{
            key: 'ripple',

            /** @return {?MDCRipple} */
            get: function get() {}
          }]);

          return MDCSelectionControl;
        }();

        /***/
      },

      /***/87:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCCheckbox", function () {
          return MDCCheckbox;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_animation_index__ = __webpack_require__(10);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__material_selection_control_index__ = __webpack_require__(8);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(88);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__material_ripple_index__ = __webpack_require__(4);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__material_ripple_util__ = __webpack_require__(2);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCCheckboxFoundation", function () {
          return __WEBPACK_IMPORTED_MODULE_3__foundation__["a"];
        });
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _get = function get(object, property, receiver) {
          if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);if (parent === null) {
              return undefined;
            } else {
              return get(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;if (getter === undefined) {
              return undefined;
            }return getter.call(receiver);
          }
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

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

        /* eslint-disable no-unused-vars */

        /* eslint-enable no-unused-vars */

        /** @const {!Array<string>} */
        var CB_PROTO_PROPS = ['checked', 'indeterminate'];

        /**
         * @extends MDCComponent<!MDCCheckboxFoundation>
         * @implements {MDCSelectionControl}
         */

        var MDCCheckbox = function (_MDCComponent) {
          _inherits(MDCCheckbox, _MDCComponent);

          _createClass(MDCCheckbox, [{
            key: 'nativeCb_',

            /**
             * Returns the state of the native control element, or null if the native control element is not present.
             * @return {!MDCSelectionControlState}
             * @private
             */
            get: function get() {
              var NATIVE_CONTROL_SELECTOR = __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */].strings.NATIVE_CONTROL_SELECTOR;

              var cbEl = /** @type {!MDCSelectionControlState} */this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
              return cbEl;
            }
          }], [{
            key: 'attachTo',
            value: function attachTo(root) {
              return new MDCCheckbox(root);
            }
          }]);

          function MDCCheckbox() {
            var _ref;

            _classCallCheck(this, MDCCheckbox);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            /** @private {!MDCRipple} */
            var _this = _possibleConstructorReturn(this, (_ref = MDCCheckbox.__proto__ || Object.getPrototypeOf(MDCCheckbox)).call.apply(_ref, [this].concat(args)));

            _this.ripple_ = _this.initRipple_();
            /** @private {!Function} */
            _this.handleChange_;
            /** @private {!Function} */
            _this.handleAnimationEnd_;
            return _this;
          }

          _createClass(MDCCheckbox, [{
            key: 'initialSyncWithDOM',
            value: function initialSyncWithDOM() {
              var _this2 = this;

              this.handleChange_ = function () {
                return _this2.foundation_.handleChange();
              };
              this.handleAnimationEnd_ = function () {
                return _this2.foundation_.handleAnimationEnd();
              };
              this.nativeCb_.addEventListener('change', this.handleChange_);
              this.listen(Object(__WEBPACK_IMPORTED_MODULE_0__material_animation_index__["getCorrectEventName"])(window, 'animationend'), this.handleAnimationEnd_);
              this.installPropertyChangeHooks_();
            }

            /**
             * @return {!MDCRipple}
             * @private
             */

          }, {
            key: 'initRipple_',
            value: function initRipple_() {
              var _this3 = this;

              var MATCHES = Object(__WEBPACK_IMPORTED_MODULE_5__material_ripple_util__["getMatchesProperty"])(HTMLElement.prototype);
              var adapter = _extends(__WEBPACK_IMPORTED_MODULE_4__material_ripple_index__["MDCRipple"].createAdapter(this), {
                isUnbounded: function isUnbounded() {
                  return true;
                },
                isSurfaceActive: function isSurfaceActive() {
                  return _this3.nativeCb_[MATCHES](':active');
                },
                registerInteractionHandler: function registerInteractionHandler(type, handler) {
                  return _this3.nativeCb_.addEventListener(type, handler);
                },
                deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
                  return _this3.nativeCb_.removeEventListener(type, handler);
                }
              });
              var foundation = new __WEBPACK_IMPORTED_MODULE_4__material_ripple_index__["MDCRippleFoundation"](adapter);
              return new __WEBPACK_IMPORTED_MODULE_4__material_ripple_index__["MDCRipple"](this.root_, foundation);
            }

            /** @private */

          }, {
            key: 'installPropertyChangeHooks_',
            value: function installPropertyChangeHooks_() {
              var _this4 = this;

              var nativeCb = this.nativeCb_;
              var cbProto = Object.getPrototypeOf(nativeCb);

              CB_PROTO_PROPS.forEach(function (controlState) {
                var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
                // We have to check for this descriptor, since some browsers (Safari) don't support its return.
                // See: https://bugs.webkit.org/show_bug.cgi?id=49739
                if (validDescriptor(desc)) {
                  var nativeCbDesc = /** @type {!ObjectPropertyDescriptor} */{
                    get: desc.get,
                    set: function set(state) {
                      desc.set.call(nativeCb, state);
                      _this4.foundation_.handleChange();
                    },
                    configurable: desc.configurable,
                    enumerable: desc.enumerable
                  };
                  Object.defineProperty(nativeCb, controlState, nativeCbDesc);
                }
              });
            }

            /** @private */

          }, {
            key: 'uninstallPropertyChangeHooks_',
            value: function uninstallPropertyChangeHooks_() {
              var nativeCb = this.nativeCb_;
              var cbProto = Object.getPrototypeOf(nativeCb);

              CB_PROTO_PROPS.forEach(function (controlState) {
                var desc = /** @type {!ObjectPropertyDescriptor} */Object.getOwnPropertyDescriptor(cbProto, controlState);
                if (validDescriptor(desc)) {
                  Object.defineProperty(nativeCb, controlState, desc);
                }
              });
            }

            /** @return {!MDCCheckboxFoundation} */

          }, {
            key: 'getDefaultFoundation',
            value: function getDefaultFoundation() {
              var _this5 = this;

              return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */]({
                addClass: function addClass(className) {
                  return _this5.root_.classList.add(className);
                },
                removeClass: function removeClass(className) {
                  return _this5.root_.classList.remove(className);
                },
                setNativeControlAttr: function setNativeControlAttr(attr, value) {
                  return _this5.nativeCb_.setAttribute(attr, value);
                },
                removeNativeControlAttr: function removeNativeControlAttr(attr) {
                  return _this5.nativeCb_.removeAttribute(attr);
                },
                isIndeterminate: function isIndeterminate() {
                  return _this5.indeterminate;
                },
                isChecked: function isChecked() {
                  return _this5.checked;
                },
                hasNativeControl: function hasNativeControl() {
                  return !!_this5.nativeCb_;
                },
                setNativeControlDisabled: function setNativeControlDisabled(disabled) {
                  return _this5.nativeCb_.disabled = disabled;
                },
                forceLayout: function forceLayout() {
                  return _this5.root_.offsetWidth;
                },
                isAttachedToDOM: function isAttachedToDOM() {
                  return Boolean(_this5.root_.parentNode);
                }
              });
            }

            /** @return {!MDCRipple} */

          }, {
            key: 'destroy',
            value: function destroy() {
              this.ripple_.destroy();
              this.nativeCb_.removeEventListener('change', this.handleChange_);
              this.unlisten(Object(__WEBPACK_IMPORTED_MODULE_0__material_animation_index__["getCorrectEventName"])(window, 'animationend'), this.handleAnimationEnd_);
              this.uninstallPropertyChangeHooks_();
              _get(MDCCheckbox.prototype.__proto__ || Object.getPrototypeOf(MDCCheckbox.prototype), 'destroy', this).call(this);
            }
          }, {
            key: 'ripple',
            get: function get() {
              return this.ripple_;
            }

            /** @return {boolean} */

          }, {
            key: 'checked',
            get: function get() {
              return this.nativeCb_.checked;
            }

            /** @param {boolean} checked */

            , set: function set(checked) {
              this.nativeCb_.checked = checked;
            }

            /** @return {boolean} */

          }, {
            key: 'indeterminate',
            get: function get() {
              return this.nativeCb_.indeterminate;
            }

            /** @param {boolean} indeterminate */

            , set: function set(indeterminate) {
              this.nativeCb_.indeterminate = indeterminate;
            }

            /** @return {boolean} */

          }, {
            key: 'disabled',
            get: function get() {
              return this.nativeCb_.disabled;
            }

            /** @param {boolean} disabled */

            , set: function set(disabled) {
              this.foundation_.setDisabled(disabled);
            }

            /** @return {?string} */

          }, {
            key: 'value',
            get: function get() {
              return this.nativeCb_.value;
            }

            /** @param {?string} value */

            , set: function set(value) {
              this.nativeCb_.value = value;
            }
          }]);

          return MDCCheckbox;
        }(__WEBPACK_IMPORTED_MODULE_1__material_base_component__["a" /* default */]);

        /**
         * @param {ObjectPropertyDescriptor|undefined} inputPropDesc
         * @return {boolean}
         */

        function validDescriptor(inputPropDesc) {
          return !!inputPropDesc && typeof inputPropDesc.set === 'function';
        }

        /***/
      },

      /***/88:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__material_selection_control_index__ = __webpack_require__(8);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__(89);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(90);
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

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

        /* eslint-disable no-unused-vars */

        /* eslint-enable no-unused-vars */

        /**
         * @extends {MDCFoundation<!MDCCheckboxAdapter>}
         */

        var MDCCheckboxFoundation = function (_MDCFoundation) {
          _inherits(MDCCheckboxFoundation, _MDCFoundation);

          _createClass(MDCCheckboxFoundation, null, [{
            key: 'cssClasses',

            /** @return enum {cssClasses} */
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */];
            }

            /** @return enum {strings} */

          }, {
            key: 'strings',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */];
            }

            /** @return enum {numbers} */

          }, {
            key: 'numbers',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* numbers */];
            }

            /** @return {!MDCCheckboxAdapter} */

          }, {
            key: 'defaultAdapter',
            get: function get() {
              return (/** @type {!MDCCheckboxAdapter} */{
                  addClass: function addClass() /* className: string */{},
                  removeClass: function removeClass() /* className: string */{},
                  setNativeControlAttr: function setNativeControlAttr() /* attr: string, value: string */{},
                  removeNativeControlAttr: function removeNativeControlAttr() /* attr: string */{},
                  forceLayout: function forceLayout() {},
                  isAttachedToDOM: function isAttachedToDOM() /* boolean */{},
                  isIndeterminate: function isIndeterminate() /* boolean */{},
                  isChecked: function isChecked() /* boolean */{},
                  hasNativeControl: function hasNativeControl() /* boolean */{},
                  setNativeControlDisabled: function setNativeControlDisabled() /* disabled: boolean */{}
                }
              );
            }
          }]);

          function MDCCheckboxFoundation(adapter) {
            _classCallCheck(this, MDCCheckboxFoundation);

            /** @private {string} */
            var _this = _possibleConstructorReturn(this, (MDCCheckboxFoundation.__proto__ || Object.getPrototypeOf(MDCCheckboxFoundation)).call(this, _extends(MDCCheckboxFoundation.defaultAdapter, adapter)));

            _this.currentCheckState_ = __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].TRANSITION_STATE_INIT;

            /** @private {string} */
            _this.currentAnimationClass_ = '';

            /** @private {number} */
            _this.animEndLatchTimer_ = 0;

            /** @private {boolean} */
            _this.enableAnimationEndHandler_ = false;
            return _this;
          }

          /** @override */

          _createClass(MDCCheckboxFoundation, [{
            key: 'init',
            value: function init() {
              this.currentCheckState_ = this.determineCheckState_();
              this.updateAriaChecked_();
              this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].UPGRADED);
            }

            /** @override */

          }, {
            key: 'destroy',
            value: function destroy() {
              clearTimeout(this.animEndLatchTimer_);
            }

            /** @param {boolean} disabled */

          }, {
            key: 'setDisabled',
            value: function setDisabled(disabled) {
              this.adapter_.setNativeControlDisabled(disabled);
              if (disabled) {
                this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].DISABLED);
              } else {
                this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].DISABLED);
              }
            }

            /**
             * Handles the animationend event for the checkbox
             */

          }, {
            key: 'handleAnimationEnd',
            value: function handleAnimationEnd() {
              var _this2 = this;

              if (!this.enableAnimationEndHandler_) return;

              clearTimeout(this.animEndLatchTimer_);

              this.animEndLatchTimer_ = setTimeout(function () {
                _this2.adapter_.removeClass(_this2.currentAnimationClass_);
                _this2.enableAnimationEndHandler_ = false;
              }, __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* numbers */].ANIM_END_LATCH_MS);
            }

            /**
             * Handles the change event for the checkbox
             */

          }, {
            key: 'handleChange',
            value: function handleChange() {
              this.transitionCheckState_();
            }

            /** @private */

          }, {
            key: 'transitionCheckState_',
            value: function transitionCheckState_() {
              if (!this.adapter_.hasNativeControl()) {
                return;
              }
              var oldState = this.currentCheckState_;
              var newState = this.determineCheckState_();

              if (oldState === newState) {
                return;
              }

              this.updateAriaChecked_();

              // Check to ensure that there isn't a previously existing animation class, in case for example
              // the user interacted with the checkbox before the animation was finished.
              if (this.currentAnimationClass_.length > 0) {
                clearTimeout(this.animEndLatchTimer_);
                this.adapter_.forceLayout();
                this.adapter_.removeClass(this.currentAnimationClass_);
              }

              this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
              this.currentCheckState_ = newState;

              // Check for parentNode so that animations are only run when the element is attached
              // to the DOM.
              if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
                this.adapter_.addClass(this.currentAnimationClass_);
                this.enableAnimationEndHandler_ = true;
              }
            }

            /**
             * @return {string}
             * @private
             */

          }, {
            key: 'determineCheckState_',
            value: function determineCheckState_() {
              var TRANSITION_STATE_INDETERMINATE = __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].TRANSITION_STATE_INDETERMINATE,
                  TRANSITION_STATE_CHECKED = __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].TRANSITION_STATE_CHECKED,
                  TRANSITION_STATE_UNCHECKED = __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].TRANSITION_STATE_UNCHECKED;

              if (this.adapter_.isIndeterminate()) {
                return TRANSITION_STATE_INDETERMINATE;
              }
              return this.adapter_.isChecked() ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
            }

            /**
             * @param {string} oldState
             * @param {string} newState
             * @return {string}
             */

          }, {
            key: 'getTransitionAnimationClass_',
            value: function getTransitionAnimationClass_(oldState, newState) {
              var TRANSITION_STATE_INIT = __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].TRANSITION_STATE_INIT,
                  TRANSITION_STATE_CHECKED = __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].TRANSITION_STATE_CHECKED,
                  TRANSITION_STATE_UNCHECKED = __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].TRANSITION_STATE_UNCHECKED;
              var _MDCCheckboxFoundatio = MDCCheckboxFoundation.cssClasses,
                  ANIM_UNCHECKED_CHECKED = _MDCCheckboxFoundatio.ANIM_UNCHECKED_CHECKED,
                  ANIM_UNCHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_UNCHECKED_INDETERMINATE,
                  ANIM_CHECKED_UNCHECKED = _MDCCheckboxFoundatio.ANIM_CHECKED_UNCHECKED,
                  ANIM_CHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_CHECKED_INDETERMINATE,
                  ANIM_INDETERMINATE_CHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_CHECKED,
                  ANIM_INDETERMINATE_UNCHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_UNCHECKED;

              switch (oldState) {
                case TRANSITION_STATE_INIT:
                  if (newState === TRANSITION_STATE_UNCHECKED) {
                    return '';
                  }
                // fallthrough
                case TRANSITION_STATE_UNCHECKED:
                  return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
                case TRANSITION_STATE_CHECKED:
                  return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
                // TRANSITION_STATE_INDETERMINATE
                default:
                  return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
              }
            }
          }, {
            key: 'updateAriaChecked_',
            value: function updateAriaChecked_() {
              // Ensure aria-checked is set to mixed if checkbox is in indeterminate state.
              if (this.adapter_.isIndeterminate()) {
                this.adapter_.setNativeControlAttr(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].ARIA_CHECKED_ATTR, __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].ARIA_CHECKED_INDETERMINATE_VALUE);
              } else {
                // The on/off state does not need to keep track of aria-checked, since
                // the screenreader uses the checked property on the checkbox element.
                this.adapter_.removeNativeControlAttr(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].ARIA_CHECKED_ATTR);
              }
            }
          }]);

          return MDCCheckboxFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

        /* harmony default export */__webpack_exports__["a"] = MDCCheckboxFoundation;

        /***/
      },

      /***/89:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__material_selection_control_index__ = __webpack_require__(8);
        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

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

        /* eslint-disable no-unused-vars */

        /* eslint no-unused-vars: [2, {"args": "none"}] */

        /**
         * Adapter for MDC Checkbox. Provides an interface for managing
         * - classes
         * - dom
         * - event handlers
         *
         * Additionally, provides type information for the adapter to the Closure
         * compiler.
         *
         * Implement this adapter for your framework of choice to delegate updates to
         * the component in your framework of choice. See architecture documentation
         * for more details.
         * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
         *
         * @record
         */

        var MDCCheckboxAdapter = function () {
          function MDCCheckboxAdapter() {
            _classCallCheck(this, MDCCheckboxAdapter);
          }

          _createClass(MDCCheckboxAdapter, [{
            key: 'addClass',

            /** @param {string} className */
            value: function addClass(className) {}

            /** @param {string} className */

          }, {
            key: 'removeClass',
            value: function removeClass(className) {}

            /**
             * Sets an attribute with a given value on the input element.
             * @param {string} attr
             * @param {string} value
             */

          }, {
            key: 'setNativeControlAttr',
            value: function setNativeControlAttr(attr, value) {}

            /**
             * Removes an attribute from the input element.
             * @param {string} attr
             */

          }, {
            key: 'removeNativeControlAttr',
            value: function removeNativeControlAttr(attr) {}
          }, {
            key: 'forceLayout',
            value: function forceLayout() {}

            /** @return {boolean} */

          }, {
            key: 'isAttachedToDOM',
            value: function isAttachedToDOM() {}

            /** @return {boolean} */

          }, {
            key: 'isIndeterminate',
            value: function isIndeterminate() {}

            /** @return {boolean} */

          }, {
            key: 'isChecked',
            value: function isChecked() {}

            /** @return {boolean} */

          }, {
            key: 'hasNativeControl',
            value: function hasNativeControl() {}

            /** @param {boolean} disabled */

          }, {
            key: 'setNativeControlDisabled',
            value: function setNativeControlDisabled(disabled) {}
          }]);

          return MDCCheckboxAdapter;
        }();

        /* unused harmony default export */var _unused_webpack_default_export = MDCCheckboxAdapter;

        /***/
      },

      /***/90:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return cssClasses;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
          return strings;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
          return numbers;
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

        /** @const {string} */
        var ROOT = 'mdc-checkbox';

        /** @enum {string} */
        var cssClasses = {
          UPGRADED: 'mdc-checkbox--upgraded',
          CHECKED: 'mdc-checkbox--checked',
          INDETERMINATE: 'mdc-checkbox--indeterminate',
          DISABLED: 'mdc-checkbox--disabled',
          ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
          ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
          ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
          ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
          ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
          ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked'
        };

        /** @enum {string} */
        var strings = {
          NATIVE_CONTROL_SELECTOR: '.' + ROOT + '__native-control',
          TRANSITION_STATE_INIT: 'init',
          TRANSITION_STATE_CHECKED: 'checked',
          TRANSITION_STATE_UNCHECKED: 'unchecked',
          TRANSITION_STATE_INDETERMINATE: 'indeterminate',
          ARIA_CHECKED_ATTR: 'aria-checked',
          ARIA_CHECKED_INDETERMINATE_VALUE: 'mixed'
        };

        /** @enum {number} */
        var numbers = {
          ANIM_END_LATCH_MS: 250
        };

        /***/
      }

      /******/ })
  );
});
//# sourceMappingURL=mdc.checkbox.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports =
/******/function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
                /******/configurable: false,
                /******/enumerable: true,
                /******/get: getter
                /******/ });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 0);
    /******/
}(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.start = undefined;

    var _webassembly = __webpack_require__(1);

    var _webassembly2 = _interopRequireDefault(_webassembly);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    //
    // Canvas
    //
    var createCanvas = function createCanvas(x, y, width, height) {
        // Create canvas
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        // Set css-based location
        canvas.style.position = 'absolute';
        canvas.style.left = String(x);
        canvas.style.top = String(y);
        canvas.style.zIndex = '-1';

        // Append canvas to dom and return canvas
        document.body.appendChild(canvas);
        return canvas;
    };

    //
    // Drawing function
    // Generally (maybe always?) these will map 1:1 to the WASM-C imports
    //
    var clearCanvas = function clearCanvas(ctx) {
        var x = 0;
        var y = 0;
        ctx.clearRect(x, y, ctx.canvas.width, ctx.canvas.height);
    };

    var drawVertex = function drawVertex(ctx, id, x, y, color) {
        ctx.strokeStyle = 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + color.a + ')';
        ctx.fillStyle = 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + color.a / 2 + ')';

        var r = 12;
        var startAngle = 0;
        var endAngle = 2 * Math.PI;

        ctx.beginPath();
        ctx.arc(x, y, r, startAngle, endAngle, false);
        ctx.stroke();
        ctx.fill();

        // ctx.font = '12px Arial black';
        // ctx.fillStyle = 'black';
        // ctx.textAlign = 'center';
        // ctx.fillText(id, x, y);
    };

    var drawEdge = function drawEdge(ctx, x1, y1, x2, y2, color) {
        ctx.strokeStyle = 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + color.a + ')';

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    };

    var drawTriangle = function drawTriangle(ctx, x1, y1, x2, y2, x3, y3, color) {
        ctx.fillStyle = 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + color.a + ')';

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        // ctx.closePath();
        ctx.fill();
    };

    //
    // Wasm
    //
    var loadWasm = async function loadWasm(ctx, vertexColor, edgeColor, triangleColor) {
        var wasmPath = './node_modules/@benwiz/boba.wasm/dist/boba.wasm'; // TODO: Solve the wasmPath
        var wasmModule = await _webassembly2.default.load(wasmPath, {
            imports: {
                jsSetInterval: function jsSetInterval(f, n) {
                    // setInterval is a JS function that calls the provided function every n milliseconds
                    setInterval(function () {
                        return wasmModule.exports.runCallback(f);
                    }, n);
                },
                jsClearCanvas: function jsClearCanvas() {
                    return clearCanvas(ctx);
                },
                jsDrawVertex: function jsDrawVertex(id, x, y) {
                    return drawVertex(ctx, id, x, y, vertexColor);
                },
                jsDrawEdge: function jsDrawEdge(x1, y1, x2, y2) {
                    return drawEdge(ctx, x1, y1, x2, y2, edgeColor);
                },
                jsDrawTriangle: function jsDrawTriangle(x1, y1, x2, y2, x3, y3) {
                    return drawTriangle(ctx, x1, y1, x2, y2, x3, y3, triangleColor);
                }
            }
        });

        return wasmModule;
    };

    //
    // Start
    //
    var start = exports.start = async function start(options) {
        // Create the canvas
        var canvas = createCanvas(options.x, options.y, options.width, options.height);
        var ctx = canvas.getContext('2d');

        // Start the wasm module
        var wasmModule = await loadWasm(ctx, options.vertexColor, options.edgeColor, options.triangleColor);
        wasmModule.exports.start(options.width, options.height, options.vertexMinRadius, options.vertexMaxRadius, options.vertexMinSpeed, options.vertexMaxSpeed, options.drawVertices, options.drawEdges, options.drawTriangles);
    };

    // const options = {
    //   // Canvas
    //   x: 0,
    //   y: 0,
    //   width: document.documentElement.scrollWidth,
    //   height: document.documentElement.scrollHeight,
    //   // Vertices
    //   drawVertices: true,
    //   vertexMinRadius: 8,
    //   vertexMaxRadius: 16,
    //   vertexMinSpeed: 0.5,
    //   vertexMaxSpeed: 0.8,
    //   vertexColor: {
    //     r: 30,
    //     g: 144,
    //     b: 255,
    //     a: 0.2,
    //   },
    //   // Edges
    //   drawEdges: true,
    //   edgeColor: {
    //     r: 30,
    //     g: 144,
    //     b: 255,
    //     a: 0.2,
    //   },
    //   // Triangles
    //   drawTriangles: true,
    //   triangleColor: {
    //     r: 30,
    //     g: 144,
    //     b: 255,
    //     a: 0.2,
    //   },
    // };
    // start(options);

    /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    module.exports = __webpack_require__(2);

    /***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    if (typeof window !== "undefined" && window) window.webassembly = exports;

    // Common aliases
    var getOwnPropertyNames = Object.getOwnPropertyNames;

    /**
     * Describes a module instance as returned by {@link load}.
     * @interface IModule
     * @property {Object.<string,*>} exports Exports
     * @property {Object.<string,*>} imports Imports
     * @property {IMemory} memory Memory
     * @property {Object.<string,*>} env Environment
     */

    /**
     * Describes a module memory instance.
     * @interface IMemory
     * @property {ArrayBuffer} buffer Underlying buffer
     * @property {number} initial=1 Specified initial amount of memory in 64k pages
     * @property {number} [maximum] If specified, maximum amount of memory in 64k pages
     * @property {Uint8Array} U8 Byte-level view
     * @property {Uint32Array} U32 Aligned unsigned 32-bit integer view
     * @property {Int32Array} S32 Aligned signed 32-bit integer view
     * @property {Float32Array} F32 Aligned 32-bit float view
     * @property {Float64Array} F64 Aligned 64-bit double view
     * @property {GetInt} getInt Reads a 32-bit signed integer starting at the specified memory offset (aligned to 4 bytes)
     * @property {GetUint} getUint Reads a 32-bit unsigned integer starting at the specified memory offset (aligned to 4 bytes)
     * @property {GetFloat} getFloat Reads a 32-bit float starting at the specified memory offset (aligned to 4 bytes)
     * @property {GetDouble} getDouble Reads a 64-bit double starting at the specified memory offset (aligned to 8 bytes)
     * @property {GetString} getString Reads the (zero-terminated, exclusive) string starting at the specified memory offset (aligned to 4 bytes)
     */

    /**
     * Loads a WebAssembly.
     * @param {string} file File name
     * @param {LoadOptions} [options] Options
     * @returns {Promise.<IModule>} Promise resolving to the instantiated module
     */
    function load(file, options) {

        /**
         * Options as used by {@link load}.
         * @interface LoadOptions
         * @property {number} [initialMemory=1] Initial memory in pages of 64k
         * @property {number} [maximumMemory] Maximum memory in pages of 64k
         * @property {Object.<string,*>} [imports] Imports
         */

        options || (options = {});

        var imports = options.imports || {};

        // Initialize memory

        var memory = imports.memory;
        if (!memory) {
            var opts = { initial: options.initialMemory || 1 };
            if (options.maximumMemory) opts.maximum = options.maximumMemory;
            memory = new WebAssembly.Memory(opts);
            memory.initial = options.initialMemory || 1;
            memory.maximum = options.maximumMemory;
        }

        var table = imports.table;
        if (!table) table = new WebAssembly.Table({ initial: 0, element: "anyfunc" });

        function grow() {
            var buf = memory.buffer;
            memory.U8 = new Uint8Array(buf);
            memory.S32 = new Int32Array(buf);
            memory.U32 = new Uint32Array(buf);
            memory.F32 = new Float32Array(buf);
            memory.F64 = new Float64Array(buf);
        }

        grow();

        // Add utilty to memory

        /**
         * Reads a 32-bit signed integer starting at the specified memory offset.
         * @typedef GetInt
         * @function
         * @param {number} ptr Memory offset
         * @returns {number} Signed 32-bit integer value
         */
        function getInt(ptr) {
            return memory.S32[ptr >> 2];
        }

        memory.getInt = getInt;

        /**
         * Reads a 32-bit unsigned integer starting at the specified memory offset.
         * @typedef GetUint
         * @function
         * @param {number} ptr Memory offset
         * @returns {number} Unsigned 32-bit integer value
         */
        function getUint(ptr) {
            return memory.U32[ptr >> 2];
        }

        memory.getUint = getUint;

        /**
         * Reads a 32-bit float starting at the specified memory offset.
         * @typedef GetFloat
         * @function
         * @param {number} ptr Memory offset
         * @returns {number} 32-bit float value
         */
        function getFloat(ptr) {
            return memory.F32[ptr >> 2];
        }

        memory.getFloat = getFloat;

        /**
         * Reads a 64-bit double starting at the specified memory offset.
         * @typedef GetDouble
         * @function
         * @param {number} ptr Memory offset
         * @returns {number} 64-bit float value
         */
        function getDouble(ptr) {
            return memory.F64[ptr >> 3];
        }

        memory.getDouble = getDouble;

        /**
         * Reads a (zero-terminated, exclusive) string starting at the specified memory offset.
         * @typedef GetString
         * @function
         * @param {number} ptr Memory offset
         * @returns {string} String value
         */
        function getString(ptr) {
            var start = ptr >>>= 0;
            while (memory.U8[ptr++]) {}
            getString.bytes = ptr - start;
            return String.fromCharCode.apply(null, memory.U8.subarray(start, ptr - 1));
        }

        memory.getString = getString;

        // Initialize environment

        var env = {};

        env.memoryBase = imports.memoryBase || 0;
        env.memory = memory;
        env.tableBase = imports.tableBase || 0;
        env.table = table;

        // Add console to environment

        function sprintf(ptr, base) {
            var s = getString(ptr);
            return base ? s.replace(/%([dfisu]|lf)/g, function ($0, $1) {
                var val;
                return base += $1 === "u" ? (val = getUint(base), 4) : $1 === "f" ? (val = getFloat(base), 4) : $1 === "s" ? (val = getString(getUint(base)), 4) : $1 === "lf" ? (val = getDouble(base), 8) : (val = getInt(base), 4), val;
            }) : s;
        }

        getOwnPropertyNames(console).forEach(function (key) {
            if (typeof console[key] === "function") // eslint-disable-line no-console
                env["console_" + key] = function (ptr, base) {
                    console[key](sprintf(ptr, base)); // eslint-disable-line no-console
                };
        });

        // Add Math to environment

        getOwnPropertyNames(Math).forEach(function (key) {
            if (typeof Math[key] === "function") env["Math_" + key] = Math[key];
        });

        // Add imports to environment

        Object.keys(imports).forEach(function (key) {
            return env[key] = imports[key];
        });

        // Add default exit listeners if not explicitly imported

        if (!env._abort) env._abort = function (errno) {
            throw Error("abnormal abort in " + file + ": " + errno);
        };
        if (!env._exit) env._exit = function (code) {
            if (code) throw Error("abnormal exit in " + file + ": " + code);
        };

        // Finally, fetch the assembly and instantiate it

        env._grow = grow;

        return (typeof fetch === "function" && fetch || fetch_node)(file).then(function (result) {
            return result.arrayBuffer();
        }).then(function (buffer) {
            return WebAssembly.instantiate(buffer, { env: env });
        }).then(function (module) {
            var instance = module.instance;
            instance.imports = imports;
            instance.memory = memory;
            instance.env = env;
            return instance;
        });
    }

    exports.load = load;

    // Internal fetch API polyfill for node that doesn't trigger webpack
    var fs;
    function fetch_node(file) {
        return new Promise(function (resolve, reject) {
            return (fs || (fs = eval("equire".replace(/^/, "r"))("fs"))).readFile(file, function (err, data) {
                return err ? reject(err) : resolve({ arrayBuffer: function arrayBuffer() {
                        return data;
                    } });
            });
        });
    }

    /***/
}]
/******/);
//# sourceMappingURL=bundle.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map