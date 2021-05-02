webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

var _s = $RefreshSig$();

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

var prefetched = {};

function prefetch(router, href, as, options) {
  if ( false || !router) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options)["catch"](function (err) {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  var curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  var target = event.currentTarget.target;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  var nodeName = e.currentTarget.nodeName;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow: shallow,
    locale: locale,
    scroll: scroll
  }).then(function (success) {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  _s();

  if (true) {
    var createPropError = function createPropError(args) {
      return new Error("Failed prop type: The prop `".concat(args.key, "` expects a ").concat(args.expected, " in `<Link>`, but got `").concat(args.actual, "` instead.") + (true ? "\nOpen your browser's console to view the Component stack trace." : undefined));
    }; // TypeScript trick for type-guarding:


    var requiredPropsGuard = {
      href: true
    };
    var requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(function (key) {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // TypeScript trick for type-guarding:

    var optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    var optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(function (key) {
      var valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key: key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key: key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    var hasWarned = _react["default"].useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  var p = props.prefetch !== false;
  var router = (0, _router2.useRouter)();
  var pathname = router && router.pathname || '/';

  var _react$default$useMem = _react["default"].useMemo(function () {
    var _ref = (0, _router.resolveHref)(pathname, props.href, true),
        _ref2 = _slicedToArray(_ref, 2),
        resolvedHref = _ref2[0],
        resolvedAs = _ref2[1];

    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]),
      href = _react$default$useMem.href,
      as = _react$default$useMem.as;

  var children = props.children,
      replace = props.replace,
      shallow = props.shallow,
      scroll = props.scroll,
      locale = props.locale; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react["default"].createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  var child = _react.Children.only(children);

  var childRef = child && typeof child === 'object' && child.ref;

  var _ref3 = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  }),
      _ref4 = _slicedToArray(_ref3, 2),
      setIntersectionRef = _ref4[0],
      isVisible = _ref4[1];

  var setRef = _react["default"].useCallback(function (el) {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(function () {
    var shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    var isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  var childProps = {
    ref: setRef,
    onClick: function onClick(e) {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = function (e) {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    var localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react["default"].cloneElement(child, childProps);
}

_s(Link, "7cX92ILFgstKFyzTMH+g73G4t5k=");

_c = Link;
var _default = Link;
exports["default"] = _default;

var _c;

$RefreshReg$(_c, "Link");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection(_ref) {
  var rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;
  var unobserve = (0, _react.useRef)();

  var _ref2 = (0, _react.useState)(false),
      _ref3 = _slicedToArray(_ref2, 2),
      visible = _ref3[0],
      setVisible = _ref3[1];

  var setRef = (0, _react.useCallback)(function (el) {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, function (isVisible) {
        return isVisible && setVisible(isVisible);
      }, {
        rootMargin: rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(function () {
    if (!hasIntersectionObserver) {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback.requestIdleCallback)(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
        };
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
    }
  };
}

var observers = new Map();

function createObserver(options) {
  var id = options.rootMargin || '';
  var instance = observers.get(id);

  if (instance) {
    return instance;
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id: id,
    observer: observer,
    elements: elements
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/Fiche.js":
/*!************************!*\
  !*** ./pages/Fiche.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fiche; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");








var _jsxFileName = "C:\\Users\\famil\\Desktop\\emile programmation\\site_emile\\renovation\\pages\\Fiche.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Fiche = /*#__PURE__*/function (_React$Component) {
  Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Fiche, _React$Component);

  var _super = _createSuper(Fiche);

  function Fiche(props) {
    var _this;

    Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Fiche);

    _this = _super.call(this, props);

    Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleChange", function (e, _ref) {
      var name = _ref.name,
          value = _ref.value;
      return _this.setState(Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, name, value));
    });

    Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleOpen", function () {
      return _this.setState({
        modalOpen: true
      });
    });

    Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleClose", function () {
      return _this.setState({
        modalClose: false
      });
    });

    _this.state = {
      proprio: "",
      salarie: "",
      chauffage: "",
      famille: "",
      fiscalite: "",
      nom: "",
      prenom: "",
      adresse: "",
      localite: "",
      email: "",
      telephone: ""
    };
    _this.state = {};
    return _this;
  }

  Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Fiche, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.state.proprio === undefined ? this.setState({
        errorProprio: {
          content: "",
          pointing: null
        }
      }) : this.setState({
        errorProprio: null
      });
      this.state.salarie === undefined ? this.setState({
        errorSalarie: {
          content: "",
          pointing: null
        }
      }) : this.setState({
        errorSalarie: null
      });
      this.state.chauffage === undefined ? this.setState({
        errorChauffage: {
          content: "",
          pointing: null
        }
      }) : this.setState({
        errorChauffage: null
      });
      this.state.famille === undefined ? this.setState({
        errorFamille: {
          content: "",
          pointing: null
        }
      }) : this.setState({
        errorFamille: null
      });
      this.state.fiscalite === undefined ? this.setState({
        errorFiscalite: {
          content: "",
          pointing: null
        }
      }) : this.setState({
        errorFiscalite: null
      });
      this.state.proprio === undefined ? alert("Selectionnez Proprietaire ou locataire ?") : this.state.salarie === undefined ? alert("Selectionnez votre type de salaire") : this.state.chauffage === undefined ? alert("Selectionnez votre type de chauffage") : this.state.famille === undefined ? alert("Selectionnez nombre de personne") : this.state.fiscalite === undefined ? alert("Selectionnez votre revenu fiscal") : this.dataContact();
    }
  }, {
    key: "dataContact",
    value: function dataContact() {
      var _this$state = this.state,
          proprio = _this$state.proprio,
          salarie = _this$state.salarie,
          chauffage = _this$state.chauffage,
          famille = _this$state.famille,
          fiscalite = _this$state.fiscalite,
          nom = _this$state.nom,
          prenom = _this$state.prenom,
          adresse = _this$state.adresse,
          localite = _this$state.localite,
          email = _this$state.email,
          telephone = _this$state.telephone;
      var templateParams = {
        from_name: email,
        proprio: proprio,
        salarie: salarie,
        chauffage: chauffage,
        famille: famille,
        fiscalite: fiscalite,
        to_name: nom,
        prenom: prenom,
        adresse: adresse,
        localite: localite,
        email: email,
        telephone: telephone
      };
      emailjs_com__WEBPACK_IMPORTED_MODULE_10__["send"]('my_Gmail', 'eligibilite', templateParams, 'user_O4rTmyvCyhnUYTJrczkMv').then(function (result) {
        alert(result.text);
      }, function (error) {
        alert(error.text);
      });
      this.state.proprio = "", this.state.salarie = "", this.state.chauffage = "", this.state.famille = "";
      this.state.fiscalite = "";
      this.state.nom = "", this.state.prenom = "", this.state.adresse = "", this.state.localite = "", this.state.email = "", this.state.telephone = "";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var mobile = this.props.mobile;
      Fiche.propTypes = {
        mobile: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool
      };
      var open = this.props.open;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Segment"], {
        inverted: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
          open: open,
          onClose: this.props.handleClose,
          size: "mini",
          basic: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
            children: ["Dans le cadre de la transition \xE9cologique, l'\xC9tat prend en charge le co\xFBt de l\u2019installation de", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 115
            }, this), "Des milliers de foyers fran\xE7ais en ont d\xE9j\xE0 profit\xE9, pourquoi pas vous ?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                color: 'red'
              },
              children: "* saisie obligatoire"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Content, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                fontFamily: "Comic sans MS",
                fontSize: 30,
                textAlign: "center"
              },
              children: "V\xE9rifiez votre \xE9ligibit\xE9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Description, {
            style: {
              color: 'lightgrey'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
              inverted: true,
              onSubmit: function onSubmit(e) {
                return _this2.handleSubmit(e);
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
                error: this.state.errorProprio,
                required: true,
                label: "Vous Etes",
                placeholder: "----",
                style: {
                  color: "yellow"
                },
                fluid: true,
                options: proprio,
                control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Dropdown"],
                name: "proprio",
                onChange: this.handleChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
                error: this.state.errorSalarie,
                required: true,
                label: "Vous Etes salari\xE9 dans",
                placeholder: "----",
                style: {
                  color: "yellow"
                },
                fluid: true,
                options: salarie,
                control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Dropdown"],
                name: "salarie",
                onChange: this.handleChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
                clearable: true,
                error: this.state.errorChauffage,
                required: true,
                label: "Votre type de Chauffage",
                placeholder: "----",
                style: {
                  color: "yellow"
                },
                fluid: true,
                options: chauffage,
                control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Dropdown"],
                name: "chauffage",
                onChange: this.handleChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
                clearable: true,
                error: this.state.errorFamille,
                required: true,
                label: "Nombre de personne vivant dans le foyer",
                placeholder: "----",
                style: {
                  color: "yellow"
                },
                fluid: true,
                options: famille,
                control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Dropdown"],
                name: "famille",
                onChange: this.handleChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
                clearable: true,
                error: this.state.errorFiscalite,
                required: true,
                label: "Revenue fiscal de r\xE9f\xE9rence (2020 ou 2019)",
                placeholder: "----",
                style: {
                  color: "yellow"
                },
                fluid: true,
                options: fiscalite,
                control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Dropdown"],
                name: "fiscalite",
                onChange: this.handleChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Input, {
                  required: true,
                  label: "Nom",
                  placeholder: "----",
                  style: {
                    color: "yellow"
                  },
                  width: 9,
                  name: "nom",
                  value: this.state.nom,
                  onChange: this.handleChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Input, {
                  icon: "lock",
                  iconPosition: "left",
                  required: true,
                  label: "Pr\xE9nom",
                  placeholder: "----",
                  style: {
                    color: "yellow"
                  },
                  width: 9,
                  name: "prenom",
                  value: this.state.prenom,
                  onChange: this.handleChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Input, {
                  required: true,
                  icon: "adress",
                  iconPosition: "left",
                  label: "Adresse",
                  placeholder: "----",
                  style: {
                    color: "yellow"
                  },
                  width: 9,
                  name: "adresse",
                  value: this.state.adresse,
                  onChange: this.handleChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Input, {
                  required: true,
                  label: "Localit\xE9",
                  placeholder: "----",
                  style: {
                    color: "yellow"
                  },
                  width: 9,
                  name: "localite",
                  value: this.state.localite,
                  onChange: this.handleChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Input, {
                  type: "email",
                  required: true,
                  label: "Email",
                  placeholder: "contact@gmail.com",
                  style: {
                    color: "yellow"
                  },
                  width: 9,
                  name: "email",
                  value: this.state.email,
                  onChange: this.handleChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Input, {
                  required: true,
                  label: "Telephone",
                  placeholder: "----",
                  style: {
                    color: "yellow"
                  },
                  width: 9,
                  name: "telephone",
                  value: this.state.telephone,
                  onChange: this.handleChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 38
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 44
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Checkbox"], {
                  label: "J'autorise R.T.S \xE0 me recontacter pour me communiquer mon statut d'\xE9ligibilit\xE9"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 38
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 44
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Button, {
                fluid: true,
                type: "submit",
                color: "green",
                style: {
                  fontSize: mobile ? 15 : 20
                },
                children: "V\xE9rifier mon \xE9ligibilit\xE9"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Button, {
              color: "greylight",
              fluid: true,
              onClick: this.props.onHide,
              inverted: true,
              style: {
                fontSize: mobile ? 15 : 20
              },
              children: "Fermer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }, this);
    }
  }]);

  return Fiche;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);


var proprio = [{
  key: '1',
  text: 'Propriétaire',
  value: 'Propriétaire'
}, {
  key: '2',
  text: 'Locataire',
  value: 'Locataire'
}];
var salarie = [{
  key: '1',
  text: 'Secteur public',
  value: 'Secteur public'
}, {
  key: '2',
  text: 'Secteur prive',
  value: 'Secteur prive'
}, {
  key: '3',
  text: 'Secteur agricole',
  value: 'Secteur agricole'
}, {
  key: '4',
  text: 'Non salarie',
  value: 'Non salarie'
}];
var chauffage = [{
  key: '1',
  text: 'Electrique',
  value: 'Electrique'
}, {
  key: '2',
  text: 'Fioul',
  value: 'Fioul'
}, {
  key: '3',
  text: 'Gaz',
  value: 'Gaz'
}, {
  key: '4',
  text: 'Autre',
  value: 'Autre'
}];
var famille = [{
  key: '1',
  text: '1',
  value: '1'
}, {
  key: '2',
  text: '2',
  value: '2'
}, {
  key: '3',
  text: '3',
  value: '3'
}, {
  key: '4',
  text: '4',
  value: '4'
}, {
  key: '5 et plus',
  text: '5 et plus',
  value: '5 et plus'
}];
var fiscalite = [{
  key: '1',
  text: 'de 0€ à 19074€',
  value: 'de 0€ à 19074€'
}, {
  key: '2',
  text: 'de 19074€ à 27896€',
  value: 'de 19074€ à 27896€'
}, {
  key: '3',
  text: 'de 27896€ à 33547€',
  value: 'de 27896€ à 33547€'
}, {
  key: '4',
  text: 'de 33547€ à 39192€',
  value: 'de 33547€ à 39192€'
}, {
  key: '5',
  text: 'de 39192€ à 44860€',
  value: 'de 39192€ à 44860€'
}, {
  key: '6',
  text: '+ de 449860€',
  value: '+ de 449860€'
}];
/* 

 show = () => this.setState({ open: true })
    handleConfirm = () => this.setState({ open: false })
    handleCancel = () => this.setState({ open: false })

render() {

    return (
        <div>
            <Button onClick={this.show}>Show</Button>
            <Confirm
                open={this.state.open}
                header='This is a custom header'
                onCancel={this.handleCancel}
                onConfirm={this.handleConfirm}
            />
        </div>
    )
}
}*/

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/Home.js":
/*!***********************!*\
  !*** ./pages/Home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-animated-css */ "./node_modules/react-animated-css/lib/index.js");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_animated_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Fiche__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Fiche */ "./pages/Fiche.js");








var _jsxFileName = "C:\\Users\\famil\\Desktop\\emile programmation\\site_emile\\renovation\\pages\\Home.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var Home = /*#__PURE__*/function (_React$Component) {
  Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _React$Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this;

    Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Home);

    _this = _super.call(this, props);

    Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleOpen", function () {
      return _this.setState({
        open: true
      });
    });

    Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleClose", function () {
      return _this.setState({
        open: false
      });
    });

    _this.state = {};
    return _this;
  }

  Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Home, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var mobile = this.props.mobile;
      var shadow = {
        color: 'white',
        textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
        textAlign: "center",
        fontFamily: "verdana",
        fontSize: mobile ? 22 : 32,
        paddingTop: 20
      };
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MyLayout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_animated_css__WEBPACK_IMPORTED_MODULE_13__["Animated"], {
          animationIn: "fadeIn",
          animationOut: "fadeOut",
          animationInDuration: 5000,
          animationOutDuration: 1000,
          isVisible: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            style: shadow,
            children: "Sp\xE9cialit\xE9 en r\xE9novation Energetique"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Container"], {
            style: {
              textAlign: 'center'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, {
                columns: mobile ? 2 : 5,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
                  style: {
                    paddingTop: 20
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"], {
                    color: "red",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
                      src: "img/avatar/pac.png",
                      size: "tiny",
                      centered: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 39,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Content, {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Header, {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
                          src: "img/ecolo/RGE.png",
                          size: "mini"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 41,
                          columnNumber: 54
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
                          href: "/IndexPac",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            children: "PAC"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 41,
                            columnNumber: 121
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 41,
                          columnNumber: 98
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 41,
                        columnNumber: 41
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Description, {
                        children: "PAC air-eau"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 42,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 40,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
                  style: {
                    paddingTop: 20
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"], {
                    color: "orange",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
                      src: "img/avatar/maison_exterieur.png",
                      size: "tiny",
                      centered: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 51,
                      columnNumber: 33
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Content, {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Header, {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
                          src: "img/ecolo/RGE.png",
                          size: "mini"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 53,
                          columnNumber: 54
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
                          href: "/Ite",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            children: "ITE"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 53,
                            columnNumber: 117
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 53,
                          columnNumber: 99
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 53,
                        columnNumber: 41
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Description, {
                        children: "Isolation Exterieur"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 54,
                        columnNumber: 33
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 29
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
                  style: {
                    paddingTop: 20
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"], {
                    color: "yellow",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
                      src: "img/avatar/maison_exterieur.png",
                      size: "tiny",
                      centered: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Content, {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Header, {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
                          src: "img/ecolo/RGE.png",
                          size: "mini"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 65,
                          columnNumber: 54
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
                          href: "/Itt",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            children: "ITT"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 65,
                            columnNumber: 117
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 65,
                          columnNumber: 99
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 65,
                        columnNumber: 41
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Description, {
                        children: "Isolation Interieur"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 66,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
                  style: {
                    paddingTop: 20
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"], {
                    color: "olive",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
                      src: "img/avatar/climatisation.png",
                      size: "tiny",
                      centered: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 75,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Content, {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Header, {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
                          src: "img/ecolo/RGE.png",
                          size: "mini"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 77,
                          columnNumber: 54
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
                          href: "/Climatisation",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            children: "Climatisation"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 77,
                            columnNumber: 127
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 77,
                          columnNumber: 99
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 41
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Description, {
                        children: "Pac air-air"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 78,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
                  style: {
                    paddingTop: 20
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"], {
                    color: "red",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
                      src: "img/avatar/cellule-photovoltaique.png",
                      size: "tiny",
                      centered: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Content, {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Header, {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
                          src: "img/ecolo/RGE.png",
                          size: "mini"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 89,
                          columnNumber: 54
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
                          href: "/Photovoltaique",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            children: "photovoltaique"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 89,
                            columnNumber: 128
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 89,
                          columnNumber: 99
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 41
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Description, {
                        children: "Photovoltaique"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 90,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 88,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
                  style: {
                    paddingTop: 20
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"], {
                    color: "olive",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
                      src: "img/avatar/ballon-photovoltaique.png",
                      size: "tiny",
                      centered: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 102,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Content, {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Header, {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
                          src: "img/ecolo/RGE.png",
                          size: "mini"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 104,
                          columnNumber: 54
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
                          href: "/Ballon",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            children: "Ballon Solaire"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 104,
                            columnNumber: 120
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 104,
                          columnNumber: 99
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 104,
                        columnNumber: 41
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Description, {
                        children: "Ballon Solaire"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 105,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
                  style: {
                    paddingTop: 20
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"], {
                    color: "green",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
                      src: "img/avatar/electricite.png",
                      size: "tiny",
                      centered: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 114,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Content, {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Header, {
                        style: {
                          color: 'green'
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
                          href: "/Electricite",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            children: "Electricit\xE9"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 116,
                            columnNumber: 107
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 116,
                          columnNumber: 81
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 116,
                        columnNumber: 41
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Description, {
                        children: "Renovation-consuel"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 117,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 115,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
                  style: {
                    paddingTop: 20
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"], {
                    color: "teal",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
                      src: "img/avatar/plomberie.png",
                      size: "tiny",
                      centered: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Content, {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Header, {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
                          href: "/Plomberie",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            children: "Plomberie"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 129,
                            columnNumber: 78
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 129,
                          columnNumber: 54
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 129,
                        columnNumber: 41
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Description, {
                        children: "Douche-salle de bain"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 130,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 128,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
                  style: {
                    paddingTop: 20
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"], {
                    color: "blue",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
                      src: "img/avatar/revetement_sol.png",
                      size: "tiny",
                      centered: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 139,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Content, {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Header, {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
                          href: "/Revetement",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            children: "Revetement Sol"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 141,
                            columnNumber: 79
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 141,
                          columnNumber: 54
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 141,
                        columnNumber: 41
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Description, {
                        children: "Carrelage-Parquet"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 142,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 140,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
                  style: {
                    paddingTop: 20
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"], {
                    color: "blue",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
                      src: "img/avatar/cloison.png",
                      size: "tiny",
                      centered: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 151,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Content, {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Header, {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
                          href: "/Cloison",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            children: "Cloison bureau"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 153,
                            columnNumber: 76
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 153,
                          columnNumber: 54
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 153,
                        columnNumber: 41
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Description, {
                        children: "Porte-Vitr\xE9e-Cloison"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 154,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 152,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 21
            }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
              color: "greylight",
              circular: true,
              onClick: this.handleOpen,
              fluid: true,
              inverted: true,
              children: "V\xE9rifier mon \xE9ligibilit\xE9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 18
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Fiche__WEBPACK_IMPORTED_MODULE_14__["default"], {
          open: this.state.open,
          onHide: function onHide() {
            return _this2.handleClose();
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, this);
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/Home */ "./pages/Home.js");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @artsy/fresnel */ "./node_modules/@artsy/fresnel/dist/index.js");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "C:\\Users\\famil\\Desktop\\emile programmation\\site_emile\\renovation\\pages\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var _createMedia = Object(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_8__["createMedia"])({
  breakpoints: {
    mobile: 0,
    tablet: 900,
    computer: 1024,
    ecran: 1192
  }
}),
    MediaContextProvider = _createMedia.MediaContextProvider,
    Media = _createMedia.Media;

var IndexContainer = /*#__PURE__*/function (_React$Component) {
  Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(IndexContainer, _React$Component);

  var _super = _createSuper(IndexContainer);

  function IndexContainer() {
    Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, IndexContainer);

    return _super.apply(this, arguments);
  }

  Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(IndexContainer, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
        greaterThan: "mobile",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Home__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, this);
    }
  }]);

  return IndexContainer;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var MobileIndex = /*#__PURE__*/function (_React$Component2) {
  Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MobileIndex, _React$Component2);

  var _super2 = _createSuper(MobileIndex);

  function MobileIndex() {
    Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MobileIndex);

    return _super2.apply(this, arguments);
  }

  Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MobileIndex, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
        at: "mobile",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Home__WEBPACK_IMPORTED_MODULE_7__["default"], {
          mobile: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, this);
    }
  }]);

  return MobileIndex;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var Index = /*#__PURE__*/function (_React$Component3) {
  Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _React$Component3);

  var _super3 = _createSuper(Index);

  function Index() {
    Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    return _super3.apply(this, arguments);
  }

  Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MediaContextProvider, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IndexContainer, {
            children: this.props.children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MobileIndex, {
            children: this.props.children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, this);
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRmljaGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInByZWZldGNoZWQiLCJyb3V0ZXIiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic2hhbGxvdyIsImxvY2FsZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFjdHVhbCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsImNvbnNvbGUiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImNhbGxiYWNrIiwiRmljaGUiLCJuYW1lIiwidmFsdWUiLCJzZXRTdGF0ZSIsIm1vZGFsT3BlbiIsIm1vZGFsQ2xvc2UiLCJzdGF0ZSIsInByb3ByaW8iLCJzYWxhcmllIiwiY2hhdWZmYWdlIiwiZmFtaWxsZSIsImZpc2NhbGl0ZSIsIm5vbSIsInByZW5vbSIsImFkcmVzc2UiLCJsb2NhbGl0ZSIsImVtYWlsIiwidGVsZXBob25lIiwicHJldmVudERlZmF1bHQiLCJ1bmRlZmluZWQiLCJlcnJvclByb3ByaW8iLCJjb250ZW50IiwicG9pbnRpbmciLCJlcnJvclNhbGFyaWUiLCJlcnJvckNoYXVmZmFnZSIsImVycm9yRmFtaWxsZSIsImVycm9yRmlzY2FsaXRlIiwiYWxlcnQiLCJkYXRhQ29udGFjdCIsInRlbXBsYXRlUGFyYW1zIiwiZnJvbV9uYW1lIiwidG9fbmFtZSIsImVtYWlsanMiLCJ0aGVuIiwicmVzdWx0IiwidGV4dCIsImVycm9yIiwibW9iaWxlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm9wZW4iLCJoYW5kbGVDbG9zZSIsImNvbG9yIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiaGFuZGxlU3VibWl0IiwiRHJvcGRvd24iLCJoYW5kbGVDaGFuZ2UiLCJvbkhpZGUiLCJDb21wb25lbnQiLCJIb21lIiwic2hhZG93IiwidGV4dFNoYWRvdyIsInBhZGRpbmdUb3AiLCJoYW5kbGVPcGVuIiwiY3JlYXRlTWVkaWEiLCJicmVha3BvaW50cyIsInRhYmxldCIsImNvbXB1dGVyIiwiZWNyYW4iLCJNZWRpYUNvbnRleHRQcm92aWRlciIsIk1lZGlhIiwi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QUFBO0FBQUE7QUFBQSxjQURKO0FBS0g7Ozs7RUFScUJMLDRDQUFLLENBQUMwRixTOztJQVdYZSxLOzs7Ozs7Ozs7Ozs7OzZCQUVSO0FBQ0wsMEJBQ0k7QUFBQSwrQkFDSSxxRUFBQyxvQkFBRDtBQUFBLGtDQUNJLHFFQUFDLGNBQUQ7QUFBQSxzQkFBa0IsS0FBS25ILEtBQUwsQ0FBV2U7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJLHFFQUFDLFdBQUQ7QUFBQSxzQkFBYyxLQUFLZixLQUFMLENBQVdlO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBUUg7Ozs7RUFYOEJMLDRDQUFLLENBQUMwRixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE0YzYxY2M4YmVkN2E1OGRmM2Y1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIC8vIEZJWE1FOiBwcm9wZXIgcm91dGUgYW5ub3VuY2luZyBhdCBSb3V0ZXIgbGV2ZWwsIG5vdCBMaW5rOlxuICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0LHtDaGlsZHJlbn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIEhlYWRlciwgSWNvbiwgTW9kYWwsIEdyaWQsIEltYWdlLCBDb25maXJtLCBGb3JtLCBEcm9wZG93biwgQ2hlY2tib3gsU2VnbWVudH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCAqIGFzIGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXRcIlxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpY2hlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHByb3ByaW86IFwiXCIsIHNhbGFyaWU6IFwiXCIsIGNoYXVmZmFnZTogXCJcIiwgZmFtaWxsZTogXCJcIiwgZmlzY2FsaXRlOiBcIlwiLFxyXG4gICAgICAgICAgICBub206IFwiXCIsIHByZW5vbTogXCJcIiwgYWRyZXNzZTogXCJcIiwgbG9jYWxpdGU6IFwiXCIsIGVtYWlsOiBcIlwiLCB0ZWxlcGhvbmU6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZSwgeyBuYW1lLCB2YWx1ZSB9KSA9PiB0aGlzLnNldFN0YXRlKHsgW25hbWVdOiB2YWx1ZSB9KVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUucHJvcHJpbyA9PT0gdW5kZWZpbmVkID8gdGhpcy5zZXRTdGF0ZSh7IGVycm9yUHJvcHJpbzogeyBjb250ZW50OiBcIlwiLCBwb2ludGluZzogbnVsbCB9IH0pIDogdGhpcy5zZXRTdGF0ZSh7IGVycm9yUHJvcHJpbzogbnVsbCB9KVxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2FsYXJpZSA9PT0gdW5kZWZpbmVkICA/IHRoaXMuc2V0U3RhdGUoeyBlcnJvclNhbGFyaWU6IHsgY29udGVudDogXCJcIiwgcG9pbnRpbmc6IG51bGwgfSB9KSA6IHRoaXMuc2V0U3RhdGUoeyBlcnJvclNhbGFyaWU6IG51bGwgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLmNoYXVmZmFnZSA9PT0gdW5kZWZpbmVkID8gdGhpcy5zZXRTdGF0ZSh7IGVycm9yQ2hhdWZmYWdlOiB7IGNvbnRlbnQ6IFwiXCIsIHBvaW50aW5nOiBudWxsIH0gfSkgOiB0aGlzLnNldFN0YXRlKHsgZXJyb3JDaGF1ZmZhZ2U6IG51bGwgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLmZhbWlsbGUgPT09IHVuZGVmaW5lZCAgPyB0aGlzLnNldFN0YXRlKHsgZXJyb3JGYW1pbGxlOiB7IGNvbnRlbnQ6IFwiXCIsIHBvaW50aW5nOiBudWxsIH0gfSkgOiB0aGlzLnNldFN0YXRlKHsgZXJyb3JGYW1pbGxlOiBudWxsIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5maXNjYWxpdGUgPT09IHVuZGVmaW5lZCAgPyB0aGlzLnNldFN0YXRlKHsgZXJyb3JGaXNjYWxpdGU6IHsgY29udGVudDogXCJcIiwgcG9pbnRpbmc6IG51bGwgfSB9KSA6IHRoaXMuc2V0U3RhdGUoeyBlcnJvckZpc2NhbGl0ZTogbnVsbCB9KVxyXG4gICAgICAgIHRoaXMuc3RhdGUucHJvcHJpbyA9PT0gdW5kZWZpbmVkID8gYWxlcnQoXCJTZWxlY3Rpb25uZXogUHJvcHJpZXRhaXJlIG91IGxvY2F0YWlyZSA/XCIpIDpcclxuICAgICAgICB0aGlzLnN0YXRlLnNhbGFyaWUgPT09IHVuZGVmaW5lZCAgPyBhbGVydChcIlNlbGVjdGlvbm5leiB2b3RyZSB0eXBlIGRlIHNhbGFpcmVcIikgOlxyXG4gICAgICAgIHRoaXMuc3RhdGUuY2hhdWZmYWdlID09PSB1bmRlZmluZWQgID8gYWxlcnQoXCJTZWxlY3Rpb25uZXogdm90cmUgdHlwZSBkZSBjaGF1ZmZhZ2VcIik6IFxyXG4gICAgICAgIHRoaXMuc3RhdGUuZmFtaWxsZSA9PT0gdW5kZWZpbmVkICA/IGFsZXJ0KFwiU2VsZWN0aW9ubmV6IG5vbWJyZSBkZSBwZXJzb25uZVwiKSA6XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5maXNjYWxpdGUgPT09IHVuZGVmaW5lZCA/IGFsZXJ0KFwiU2VsZWN0aW9ubmV6IHZvdHJlIHJldmVudSBmaXNjYWxcIikgOnRoaXMuZGF0YUNvbnRhY3QoKVxyXG4gICAgfSBcclxuICAgXHJcblxyXG4gICAgZGF0YUNvbnRhY3QoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwcm9wcmlvLCBzYWxhcmllLCBjaGF1ZmZhZ2UsIGZhbWlsbGUsIGZpc2NhbGl0ZSxcclxuICAgICAgICAgICAgbm9tLCBwcmVub20sIGFkcmVzc2UsIGxvY2FsaXRlLCBlbWFpbCwgdGVsZXBob25lIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgICAgIGxldCB0ZW1wbGF0ZVBhcmFtcyA9IHtcclxuICAgICAgICAgICAgZnJvbV9uYW1lOiBlbWFpbCxcclxuICAgICAgICAgICAgcHJvcHJpbzogcHJvcHJpbyxcclxuICAgICAgICAgICAgc2FsYXJpZTogc2FsYXJpZSxcclxuICAgICAgICAgICAgY2hhdWZmYWdlOiBjaGF1ZmZhZ2UsXHJcbiAgICAgICAgICAgIGZhbWlsbGU6IGZhbWlsbGUsXHJcbiAgICAgICAgICAgIGZpc2NhbGl0ZTogZmlzY2FsaXRlLFxyXG4gICAgICAgICAgICB0b19uYW1lOiBub20sXHJcbiAgICAgICAgICAgIHByZW5vbTogcHJlbm9tLFxyXG4gICAgICAgICAgICBhZHJlc3NlOiBhZHJlc3NlLFxyXG4gICAgICAgICAgICBsb2NhbGl0ZTogbG9jYWxpdGUsXHJcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgdGVsZXBob25lOiB0ZWxlcGhvbmVcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbWFpbGpzLnNlbmQoJ215X0dtYWlsJywgJ2VsaWdpYmlsaXRlJywgdGVtcGxhdGVQYXJhbXMsICd1c2VyX080clRteXZDeWhuVVlUSnJjemtNdicpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KHJlc3VsdC50ZXh0KTtcclxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvci50ZXh0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucHJvcHJpbz0gXCJcIiwgdGhpcy5zdGF0ZS5zYWxhcmllID1cIlwiLCB0aGlzLnN0YXRlLmNoYXVmZmFnZSA9XCJcIiwgdGhpcy5zdGF0ZS5mYW1pbGxlID1cIlwiXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZmlzY2FsaXRlID1cIlwiXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubm9tID0gXCJcIiwgdGhpcy5zdGF0ZS5wcmVub20gPSBcIlwiLCB0aGlzLnN0YXRlLmFkcmVzc2UgPSBcIlwiLCB0aGlzLnN0YXRlLmxvY2FsaXRlID0gXCJcIiwgdGhpcy5zdGF0ZS5lbWFpbCA9IFwiXCIsXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudGVsZXBob25lID0gXCJcIlxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIGhhbmRsZU9wZW4gPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgbW9kYWxPcGVuOiB0cnVlIH0pXHJcbiAgICAgICAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgbW9kYWxDbG9zZTpmYWxzZSB9KSBcclxuICAgICBcclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgbW9iaWxlIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgXHJcbiAgICAgICAgRmljaGUucHJvcFR5cGVzID0ge1xyXG4gICAgICAgICAgICAgICAgbW9iaWxlOiBQcm9wVHlwZXMuYm9vbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgb3Blbj10aGlzLnByb3BzLm9wZW5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxTZWdtZW50IGludmVydGVkPlxyXG4gICAgICAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5wcm9wcy5oYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgIHNpemU9J21pbmknXHJcbiAgICAgICAgICAgICAgICBiYXNpYyAgXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgRGFucyBsZSBjYWRyZSBkZSBsYSB0cmFuc2l0aW9uIMOpY29sb2dpcXVlLCBsJ8OJdGF0IHByZW5kIGVuIGNoYXJnZSBsZSBjb8O7dCBkZSBs4oCZaW5zdGFsbGF0aW9uIGRlPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgRGVzIG1pbGxpZXJzIGRlIGZveWVycyBmcmFuw6dhaXMgZW4gb250IGTDqWrDoCBwcm9maXTDqSwgcG91cnF1b2kgcGFzIHZvdXMgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4qIHNhaXNpZSBvYmxpZ2F0b2lyZTwvcD5cclxuICAgICAgICAgICAgICAgIDwvSGVhZGVyPiAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiLCBmb250U2l6ZTogMzAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVsOpcmlmaWV6IHZvdHJlIMOpbGlnaWJpdMOpPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuRGVzY3JpcHRpb24gc3R5bGU9e3sgY29sb3I6ICdsaWdodGdyZXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGludmVydGVkIG9uU3VibWl0PXtlID0+IHRoaXMuaGFuZGxlU3VibWl0KGUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JQcm9wcmlvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVm91cyBFdGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS0tLVwiIHN0eWxlPXt7IGNvbG9yOiBcInllbGxvd1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cHJvcHJpb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb3ByaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvclNhbGFyaWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlZvdXMgRXRlcyBzYWxhcmnDqSBkYW5zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tLS1cInN0eWxlPXt7Y29sb3I6XCJ5ZWxsb3dcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtzYWxhcmllfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzYWxhcmllXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgY2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvckNoYXVmZmFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlZvdHJlIHR5cGUgZGUgQ2hhdWZmYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS0tLVwiIHN0eWxlPXt7IGNvbG9yOiBcInllbGxvd1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y2hhdWZmYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2hhdWZmYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIGNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JGYW1pbGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTm9tYnJlIGRlIHBlcnNvbm5lIHZpdmFudCBkYW5zIGxlIGZveWVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS0tLVwiIHN0eWxlPXt7IGNvbG9yOiBcInllbGxvd1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmFtaWxsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZhbWlsbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgY2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvckZpc2NhbGl0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJldmVudWUgZmlzY2FsIGRlIHLDqWbDqXJlbmNlICgyMDIwIG91IDIwMTkpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS0tLVwiIHN0eWxlPXt7IGNvbG9yOiBcInllbGxvd1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmlzY2FsaXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlzY2FsaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdOb20nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLS0tXCIgc3R5bGU9e3sgY29sb3I6IFwieWVsbG93XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17OX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ub219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj0nbG9jaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249J2xlZnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nUHLDqW5vbSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nLS0tLScgc3R5bGU9e3sgY29sb3I6IFwieWVsbG93XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17OX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJlbm9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcmVub219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPSdsZWZ0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWRyZXNzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9Jy0tLS0nIHN0eWxlPXt7IGNvbG9yOiBcInllbGxvd1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFkcmVzc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkcmVzc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTG9jYWxpdMOpJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSctLS0tJyBzdHlsZT17eyBjb2xvcjogXCJ5ZWxsb3dcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb2NhbGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubG9jYWxpdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2NvbnRhY3RAZ21haWwuY29tJyBzdHlsZT17eyBjb2xvcjogXCJ5ZWxsb3dcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nVGVsZXBob25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSctLS0tJyBzdHlsZT17eyBjb2xvcjogXCJ5ZWxsb3dcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZWxlcGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRlbGVwaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+PGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGxhYmVsPVwiSidhdXRvcmlzZSBSLlQuUyDDoCBtZSByZWNvbnRhY3RlciBwb3VyIG1lIGNvbW11bmlxdWVyIG1vbiBzdGF0dXQgZCfDqWxpZ2liaWxpdMOpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPjxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQnV0dG9uIGZsdWlkIHR5cGU9XCJzdWJtaXRcIiBjb2xvcj1cImdyZWVuXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAxNSA6IDIwfX0+VsOpcmlmaWVyIG1vbiDDqWxpZ2liaWxpdMOpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkJ1dHRvbiBjb2xvcj0nZ3JleWxpZ2h0JyBmbHVpZCBvbkNsaWNrPXt0aGlzLnByb3BzLm9uSGlkZX0gaW52ZXJ0ZWQgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IG1vYmlsZSA/IDE1IDogMjB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmVybWVyXHJcbiAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICA8L1NlZ21lbnQ+IFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4gICBcclxuIFxyXG5cclxuY29uc3QgcHJvcHJpbyA9IFtcclxuXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMScsXHJcbiAgICAgICAgdGV4dDogJ1Byb3ByacOpdGFpcmUnLFxyXG4gICAgICAgIHZhbHVlOiAnUHJvcHJpw6l0YWlyZScsXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcyJyxcclxuICAgICAgICB0ZXh0OiAnTG9jYXRhaXJlJyxcclxuICAgICAgICB2YWx1ZTogJ0xvY2F0YWlyZScsXHJcbiAgICB9XHJcbl1cclxuXHJcblxyXG5jb25zdCBzYWxhcmllID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJzEnLFxyXG4gICAgICAgIHRleHQ6ICdTZWN0ZXVyIHB1YmxpYycsXHJcbiAgICAgICAgdmFsdWU6ICdTZWN0ZXVyIHB1YmxpYycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzInLFxyXG4gICAgICAgIHRleHQ6ICdTZWN0ZXVyIHByaXZlJyxcclxuICAgICAgICB2YWx1ZTogJ1NlY3RldXIgcHJpdmUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICczJyxcclxuICAgICAgICB0ZXh0OiAnU2VjdGV1ciBhZ3JpY29sZScsXHJcbiAgICAgICAgdmFsdWU6ICdTZWN0ZXVyIGFncmljb2xlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNCcsXHJcbiAgICAgICAgdGV4dDogJ05vbiBzYWxhcmllJyxcclxuICAgICAgICB2YWx1ZTogJ05vbiBzYWxhcmllJyxcclxuICAgIH0sXHJcblxyXG5dXHJcbmNvbnN0IGNoYXVmZmFnZSA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcxJyxcclxuICAgICAgICB0ZXh0OiAnRWxlY3RyaXF1ZScsXHJcbiAgICAgICAgdmFsdWU6ICdFbGVjdHJpcXVlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMicsXHJcbiAgICAgICAgdGV4dDogJ0Zpb3VsJyxcclxuICAgICAgICB2YWx1ZTogJ0Zpb3VsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMycsXHJcbiAgICAgICAgdGV4dDogJ0dheicsXHJcbiAgICAgICAgdmFsdWU6ICdHYXonLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc0JyxcclxuICAgICAgICB0ZXh0OiAnQXV0cmUnLFxyXG4gICAgICAgIHZhbHVlOiAnQXV0cmUnLFxyXG4gICAgfSxcclxuXVxyXG5jb25zdCBmYW1pbGxlID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJzEnLFxyXG4gICAgICAgIHRleHQ6ICcxJyxcclxuICAgICAgICB2YWx1ZTogJzEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcyJyxcclxuICAgICAgICB0ZXh0OiAnMicsXHJcbiAgICAgICAgdmFsdWU6ICcyJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMycsXHJcbiAgICAgICAgdGV4dDogJzMnLFxyXG4gICAgICAgIHZhbHVlOiAnMycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzQnLFxyXG4gICAgICAgIHRleHQ6ICc0JyxcclxuICAgICAgICB2YWx1ZTogJzQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc1IGV0IHBsdXMnLFxyXG4gICAgICAgIHRleHQ6ICc1IGV0IHBsdXMnLFxyXG4gICAgICAgIHZhbHVlOiAnNSBldCBwbHVzJyxcclxuICAgIH1cclxuXVxyXG5jb25zdCBmaXNjYWxpdGUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMScsXHJcbiAgICAgICAgdGV4dDogJ2RlIDDigqwgw6AgMTkwNzTigqwnLFxyXG4gICAgICAgIHZhbHVlOiAnZGUgMOKCrCDDoCAxOTA3NOKCrCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzInLFxyXG4gICAgICAgIHRleHQ6ICdkZSAxOTA3NOKCrCDDoCAyNzg5NuKCrCcsXHJcbiAgICAgICAgdmFsdWU6ICdkZSAxOTA3NOKCrCDDoCAyNzg5NuKCrCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzMnLFxyXG4gICAgICAgIHRleHQ6ICdkZSAyNzg5NuKCrCDDoCAzMzU0N+KCrCcsXHJcbiAgICAgICAgdmFsdWU6ICdkZSAyNzg5NuKCrCDDoCAzMzU0N+KCrCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzQnLFxyXG4gICAgICAgIHRleHQ6ICdkZSAzMzU0N+KCrCDDoCAzOTE5MuKCrCcsXHJcbiAgICAgICAgdmFsdWU6ICdkZSAzMzU0N+KCrCDDoCAzOTE5MuKCrCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzUnLFxyXG4gICAgICAgIHRleHQ6ICdkZSAzOTE5MuKCrCDDoCA0NDg2MOKCrCcsXHJcbiAgICAgICAgdmFsdWU6ICdkZSAzOTE5MuKCrCDDoCA0NDg2MOKCrCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzYnLFxyXG4gICAgICAgIHRleHQ6ICcrIGRlIDQ0OTg2MOKCrCcsXHJcbiAgICAgICAgdmFsdWU6ICcrIGRlIDQ0OTg2MOKCrCcsXHJcbiAgICB9XHJcbl1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qIFxyXG5cclxuIHNob3cgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KVxyXG4gICAgaGFuZGxlQ29uZmlybSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KVxyXG4gICAgaGFuZGxlQ2FuY2VsID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2hvd30+U2hvdzwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8Q29uZmlybVxyXG4gICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPSdUaGlzIGlzIGEgY3VzdG9tIGhlYWRlcidcclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhhbmRsZUNhbmNlbH1cclxuICAgICAgICAgICAgICAgIG9uQ29uZmlybT17dGhpcy5oYW5kbGVDb25maXJtfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbn0qLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBJbWFnZSxDYXJkLEdyaWQsQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUxheW91dFwiXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIiBcclxuaW1wb3J0IHsgQW5pbWF0ZWQgfSBmcm9tIFwicmVhY3QtYW5pbWF0ZWQtY3NzXCI7XHJcbmltcG9ydCBGaWNoZSBmcm9tIFwiLi9GaWNoZVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVPcGVuID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSlcclxuICAgIGhhbmRsZUNsb3NlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbW9iaWxlIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3Qgc2hhZG93ID1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0U2hhZG93OiAnLTJweCAwIGJsYWNrLCAwIDJweCBibGFjaywgMnB4IDAgYmxhY2ssIDAgLTJweCBibGFjaycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcInZlcmRhbmFcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOm1vYmlsZSA/IDIyOjMyLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDoyMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICA8QW5pbWF0ZWQgYW5pbWF0aW9uSW49XCJmYWRlSW5cIiBhbmltYXRpb25PdXQ9XCJmYWRlT3V0XCIgYW5pbWF0aW9uSW5EdXJhdGlvbj17NTAwMH0gYW5pbWF0aW9uT3V0RHVyYXRpb249ezEwMDB9IGlzVmlzaWJsZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXtzaGFkb3d9PlNww6ljaWFsaXTDqSBlbiByw6lub3ZhdGlvbiBFbmVyZ2V0aXF1ZTwvaDE+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXIgIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93ICBjb2x1bW5zPXttb2JpbGU/Mjo1fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHlsZT17eyBwYWRkaW5nVG9wOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjb2xvcj1cInJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPSdpbWcvYXZhdGFyL3BhYy5wbmcnIHNpemU9XCJ0aW55XCIgY2VudGVyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPjxJbWFnZSBzcmM9XCJpbWcvZWNvbG8vUkdFLnBuZ1wiIHNpemU9J21pbmknLz48TGluayBocmVmPVwiL0luZGV4UGFjXCI+PGE+UEFDPC9hPjwvTGluaz48L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQQUMgYWlyLWVhdVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY29sb3I9XCJvcmFuZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPSdpbWcvYXZhdGFyL21haXNvbl9leHRlcmlldXIucG5nJyBzaXplPVwidGlueVwiIGNlbnRlcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPjxJbWFnZSBzcmM9XCJpbWcvZWNvbG8vUkdFLnBuZ1wiIHNpemU9J21pbmknIC8+PExpbmsgaHJlZj1cIi9JdGVcIj48YT5JVEU8L2E+PC9MaW5rPjwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElzb2xhdGlvbiBFeHRlcmlldXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNvbG9yPVwieWVsbG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9J2ltZy9hdmF0YXIvbWFpc29uX2V4dGVyaWV1ci5wbmcnIHNpemU9XCJ0aW55XCIgY2VudGVyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj48SW1hZ2Ugc3JjPVwiaW1nL2Vjb2xvL1JHRS5wbmdcIiBzaXplPSdtaW5pJyAvPjxMaW5rIGhyZWY9XCIvSXR0XCI+PGE+SVRUPC9hPjwvTGluaz48L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJc29sYXRpb24gSW50ZXJpZXVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3sgcGFkZGluZ1RvcDogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY29sb3I9XCJvbGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPSdpbWcvYXZhdGFyL2NsaW1hdGlzYXRpb24ucG5nJyBzaXplPVwidGlueVwiIGNlbnRlcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+PEltYWdlIHNyYz1cImltZy9lY29sby9SR0UucG5nXCIgc2l6ZT0nbWluaScgLz48TGluayBocmVmPVwiL0NsaW1hdGlzYXRpb25cIj48YT5DbGltYXRpc2F0aW9uPC9hPjwvTGluaz48L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFjIGFpci1haXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3sgcGFkZGluZ1RvcDogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY29sb3I9XCJyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0naW1nL2F2YXRhci9jZWxsdWxlLXBob3Rvdm9sdGFpcXVlLnBuZycgc2l6ZT1cInRpbnlcIiBjZW50ZXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPjxJbWFnZSBzcmM9XCJpbWcvZWNvbG8vUkdFLnBuZ1wiIHNpemU9J21pbmknIC8+PExpbmsgaHJlZj1cIi9QaG90b3ZvbHRhaXF1ZVwiPjxhPnBob3Rvdm9sdGFpcXVlPC9hPjwvTGluaz48L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGhvdG92b2x0YWlxdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7cGFkZGluZ1RvcDoyMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNvbG9yPVwib2xpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0naW1nL2F2YXRhci9iYWxsb24tcGhvdG92b2x0YWlxdWUucG5nJyBzaXplPVwidGlueVwiIGNlbnRlcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+PEltYWdlIHNyYz1cImltZy9lY29sby9SR0UucG5nXCIgc2l6ZT0nbWluaScgLz48TGluayBocmVmPVwiL0JhbGxvblwiPjxhPkJhbGxvbiBTb2xhaXJlPC9hPjwvTGluaz48L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFsbG9uIFNvbGFpcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3twYWRkaW5nVG9wOjIwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY29sb3I9XCJncmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPSdpbWcvYXZhdGFyL2VsZWN0cmljaXRlLnBuZycgc2l6ZT1cInRpbnlcIiBjZW50ZXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+PExpbmsgaHJlZj1cIi9FbGVjdHJpY2l0ZVwiPjxhPkVsZWN0cmljaXTDqTwvYT48L0xpbms+PC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbm92YXRpb24tY29uc3VlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3sgcGFkZGluZ1RvcDogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY29sb3I9XCJ0ZWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9J2ltZy9hdmF0YXIvcGxvbWJlcmllLnBuZycgc2l6ZT1cInRpbnlcIiBjZW50ZXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPjxMaW5rIGhyZWY9XCIvUGxvbWJlcmllXCI+PGE+UGxvbWJlcmllPC9hPjwvTGluaz48L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb3VjaGUtc2FsbGUgZGUgYmFpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7cGFkZGluZ1RvcDoyMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNvbG9yPVwiYmx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPSdpbWcvYXZhdGFyL3JldmV0ZW1lbnRfc29sLnBuZycgc2l6ZT1cInRpbnlcIiBjZW50ZXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPjxMaW5rIGhyZWY9XCIvUmV2ZXRlbWVudFwiPjxhPlJldmV0ZW1lbnQgU29sPC9hPjwvTGluaz48L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXJyZWxhZ2UtUGFycXVldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNvbG9yPVwiYmx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPSdpbWcvYXZhdGFyL2Nsb2lzb24ucG5nJyBzaXplPVwidGlueVwiIGNlbnRlcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+PExpbmsgaHJlZj1cIi9DbG9pc29uXCI+PGE+Q2xvaXNvbiBidXJlYXU8L2E+PC9MaW5rPjwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3J0ZS1WaXRyw6llLUNsb2lzb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJncmV5bGlnaHRcIiBjaXJjdWxhciBvbkNsaWNrPXt0aGlzLmhhbmRsZU9wZW59Zmx1aWQgaW52ZXJ0ZWQ+VsOpcmlmaWVyIG1vbiDDqWxpZ2liaWxpdMOpPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj4gXHJcbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVkPlxyXG4gICAgICAgICAgICAgICAgPEZpY2hlXHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4gdGhpcy5oYW5kbGVDbG9zZSgpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIb21lIGZyb20gXCIuLi9wYWdlcy9Ib21lXCJcclxuaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tICdAYXJ0c3kvZnJlc25lbCdcclxuXHJcbmNvbnN0IHsgTWVkaWFDb250ZXh0UHJvdmlkZXIsIE1lZGlhIH0gPSBjcmVhdGVNZWRpYSh7XHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIG1vYmlsZTogMCxcclxuICAgICAgICB0YWJsZXQ6IDkwMCxcclxuICAgICAgICBjb21wdXRlcjogMTAyNCxcclxuICAgICAgICBlY3JhbjogMTE5MlxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmNsYXNzIEluZGV4Q29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1lZGlhIGdyZWF0ZXJUaGFuPSdtb2JpbGUnPlxyXG4gICAgICAgICAgICAgICAgPEhvbWUvPlxyXG4gICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTW9iaWxlSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVkaWEgYXQ9J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICA8SG9tZSBtb2JpbGUgLz5cclxuICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxNZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5kZXhDb250YWluZXIgPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvSW5kZXhDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vYmlsZUluZGV4Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvTW9iaWxlSW5kZXg+XHJcbiAgICAgICAgICAgICAgICA8L01lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==