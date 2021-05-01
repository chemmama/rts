module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Nettoyage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_Menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Menu.js */ "./pages/Menu.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emailjs-com */ "emailjs-com");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\famil\\Desktop\\emile programmation\\site_emile\\renovation\\components\\Header.js";



class Header extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("head", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "renovation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "description",
          content: "renovation tertiaire service"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "author",
          content: "emile chemmama"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "viewport",
          content: "minimum-scale=1,initial-scale=1.0, width=device-width"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          httpEquiv: "Content-Type",
          content: "text/html; charset=utf-8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "keywords",
          content: "pompe a chaleur,plomberie,electricite,salle de bain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          async: true,
          rel: "stylesheet",
          link: true,
          rel: "stylesheet",
          href: "//cdn.jsdelivr.net/npm/semantic-ui@2.0.3/dist/semantic.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "css/menu.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          type: "text/javascript",
          src: "https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "css/menu.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          type: "text/javascript",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
            type: "text/javascript",
            children: ["(function()", emailjs_com__WEBPACK_IMPORTED_MODULE_3__["init"]("YOUR_USER_ID"), ")();"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Menu_js__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyLayout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");

var _jsxFileName = "C:\\Users\\famil\\Desktop\\emile programmation\\site_emile\\renovation\\components\\MyLayout.js";


class MyLayout extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), this.props.children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./pages/Menu.js":
/*!***********************!*\
  !*** ./pages/Menu.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @artsy/fresnel */ "@artsy/fresnel");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_Mobile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Mobile.js */ "./pages/Mobile.js");

var _jsxFileName = "C:\\Users\\famil\\Desktop\\emile programmation\\site_emile\\renovation\\pages\\Menu.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const {
  MediaContextProvider,
  Media
} = Object(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_2__["createMedia"])({
  breakpoints: {
    mobile: 0,
    tablet: 900,
    computer: 1024,
    ecran: 1192
  }
});
const shadow = {
  color: 'white',
  textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
  fontFamily: "Comic Sans MS",
  fontSize: 17
};
const shadow2 = {
  color: 'white',
  textShadow: '2px 2px 4px #000000',
  textAlign: "center",
  fontFamily: "Comic Sans MS",
  fontSize: 11
};
const html = "";

class DesktopContainer extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      activeItem: ''
    });

    _defineProperty(this, "handleItemClick", (e, {
      name
    }) => this.setState({
      activeItem: name
    }));

    _defineProperty(this, "hideFixedMenu", () => this.setState({
      fixed: false
    }));

    _defineProperty(this, "showFixedMenu", () => this.setState({
      fixed: true
    }));
  }

  render() {
    const {
      children
    } = this.props;
    const {
      activeItem
    } = this.state;
    const {
      color
    } = this.props;
    DesktopContainer.propTypes = {
      children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
    };
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      fluid: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
        greaterThan: "mobile",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Visibility"], {
          once: false,
          onBottomPassed: this.showFixedMenu,
          onBottomPassedReverse: this.hideFixedMenu,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
            vertical: true,
            style: {
              backgroundColor: 'lightgrey'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
              style: {
                backgroundColor: 'whitesmoke'
              },
              stackable: true,
              fluid: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
                  src: "img/ecolo/rts.png",
                  as: "a",
                  size: "tiny",
                  href: "/"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 44
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
                inverted: true,
                style: shadow,
                name: "R\xE9novation Tertiaire Service"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 34
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
                position: "right",
                name: "Nettoyage",
                href: "/Nettoyage" + html,
                style: {
                  fontWeight: "bold"
                },
                active: activeItem === 'Nettoyage',
                onClick: this.handleItemClick,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
                  src: "img/new1.png",
                  size: "mini"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 37
                }, this), "Nettoyage"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
                item: true,
                text: "R.G.E",
                simple: true,
                style: {
                  fontWeight: "bold"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Menu, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                    Link: true,
                    href: "/Pac" + html,
                    children: "Pac air eau"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                    Link: true,
                    href: "/Ite" + html,
                    children: "Isolation exterieur"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                    Link: true,
                    href: "/Iti" + html,
                    children: "Isolation interieur"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                    Link: true,
                    href: "/AirAir" + html,
                    children: "Pac air air"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                    Link: true,
                    href: "/Photovoltaique" + html,
                    children: "Photovoltaique"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                    Link: true,
                    href: "/BallonSolaire" + html,
                    children: "Ballon Solaire"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
                item: true,
                text: "Le Batiment",
                simple: true,
                style: {
                  fontWeight: "bold"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Menu, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                    Link: true,
                    href: "/Electricite" + html,
                    children: "Electricit\xE9"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                    Link: true,
                    href: "/Plomberie" + html,
                    children: "Plomberie"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                    Link: true,
                    href: "/Revetement" + html,
                    children: "Revetement sol"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                    Link: true,
                    href: "/Cloison" + html,
                    children: "Cloison bureau"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
                style: {
                  fontWeight: "bold"
                },
                name: "Nos Partenaires",
                href: "/Partenaire" + html,
                active: activeItem === 'Nos Partenaires',
                onClick: this.handleItemClick
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
                name: "Qui sommes nous",
                href: "/Mission" + html,
                style: {
                  fontWeight: "bold"
                },
                active: activeItem === 'Qui sommes nous',
                onClick: this.handleItemClick
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
                name: "Qualification",
                href: "/Qualification" + html,
                style: {
                  fontWeight: "bold"
                },
                active: activeItem === 'Qualification',
                onClick: this.handleItemClick
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this);
  }

}

class MobileContainer extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});

    _defineProperty(this, "state", {
      activeItem: 'home'
    });

    _defineProperty(this, "handleItemClick", (e, {
      name
    }) => this.setState({
      activeItem: name
    }));

    _defineProperty(this, "handleSidebarHide", () => this.setState({
      sidebarOpened: false
    }));

    _defineProperty(this, "handleToggle", () => this.setState({
      sidebarOpened: true
    }));
  }

  render() {
    const {
      children
    } = this.props;
    const {
      sidebarOpened,
      activeItem
    } = this.state;
    MobileContainer.propTypes = {
      children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
    };
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
      as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Sidebar"].pushable,
      between: ["mobile", "tablet"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Sidebar"].Pushable, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Sidebar"], {
          as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"],
          animation: "push",
          onHide: this.handleSidebarHide,
          vertical: true,
          visible: sidebarOpened,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
            name: "Nettoyage",
            href: "/Nettoyage" + html,
            style: {
              fontWeight: "bold"
            },
            active: activeItem === 'Nettoyage',
            onClick: this.handleItemClick,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
              src: "img/new1.png",
              size: "mini"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 29
            }, this), "Nettoyage"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
            item: true,
            text: "R.G.E",
            pointing: "left",
            style: {
              fontWeight: "bold"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Menu, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                Link: true,
                href: "/Pac" + html,
                children: "Pac air eau"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                Link: true,
                href: "/Ite" + html,
                children: "Isolation exterieur"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                Link: true,
                href: "/Iti" + html,
                children: "Isolation interieur"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                Link: true,
                href: "/AirAir" + html,
                children: "Pac air air"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                Link: true,
                href: "/Photovoltaique" + html,
                children: "Photovoltaique"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                Link: true,
                href: "/BallonSolaire" + html,
                children: "Ballon Solaire"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
            item: true,
            text: "Le Batiment",
            pointing: "left",
            style: {
              fontWeight: "bold"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Menu, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                Link: true,
                href: "/Electricite" + html,
                children: "Electricit\xE9"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                Link: true,
                href: "/Plomberie" + html,
                children: "Plomberie"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                Link: true,
                href: "/Revetement" + html,
                children: "Revetement sol"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                Link: true,
                href: "/Cloison" + html,
                children: "Cloison bureau"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
            position: "right",
            style: {
              fontWeight: "bold"
            },
            name: "Nos Partenaires",
            href: "/Partenaire" + html,
            active: activeItem === 'Nos Partenaires',
            onClick: this.handleItemClick
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
            name: "Qui sommes nous",
            href: "/Mission" + html,
            style: {
              fontWeight: "bold"
            },
            active: activeItem === 'Qui sommes nous',
            onClick: this.handleItemClick
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
            name: "Qualification",
            href: "/Qualification" + html,
            style: {
              fontWeight: "bold"
            },
            active: activeItem === 'Qualification',
            onClick: this.handleItemClick
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Sidebar"].Pusher, {
          dimmed: sidebarOpened,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
            textAlign: "center",
            style: {
              minHeight: 250,
              padding: '0.5em 0em'
            },
            vertical: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
                inverted: true,
                secondary: true,
                size: "tiny",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
                  onClick: this.handleToggle,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
                    circular: true,
                    color: "teal",
                    name: "sidebar"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 221,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Mobile_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
              mobile: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 25
          }, this), children]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }, this);
  }

}

const MyMenu = ({
  children
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MediaContextProvider, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DesktopContainer, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MobileContainer, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 237,
    columnNumber: 9
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 236,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (MyMenu);

/***/ }),

/***/ "./pages/Mobile.js":
/*!*************************!*\
  !*** ./pages/Mobile.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mobile; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-animated-css */ "react-animated-css");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_animated_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\famil\\Desktop\\emile programmation\\site_emile\\renovation\\pages\\Mobile.js";


 //menu mobile

class Mobile extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      mobile
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      text: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_animated_css__WEBPACK_IMPORTED_MODULE_3__["Animated"], {
        animationIn: "fadeIn",
        animationOut: "fadeOut",
        animationInDuration: 5000,
        animationOutDuration: 1000,
        isVisible: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
          src: "img/ecolo/rts.png",
          size: "small",
          centered: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
          as: "h1",
          content: "R\xE9novation Tertiaire service",
          color: "green",
          style: {
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '0' : '1em',
            textDecoration: "underline",
            textAlign: "center"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
          as: "h2",
          content: "Vos projets entierement financ\xE9",
          inverted: true,
          style: {
            fontSize: mobile ? '0.7em' : '1em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '0.5em',
            textAlign: "center",
            color: 'black'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./pages/Nettoyage.js":
/*!****************************!*\
  !*** ./pages/Nettoyage.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nettoyage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ "next/dist/next-server/lib/utils");
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @artsy/fresnel */ "@artsy/fresnel");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\famil\\Desktop\\emile programmation\\site_emile\\renovation\\pages\\Nettoyage.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const {
  MediaContextProvider,
  Media
} = Object(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_5__["createMedia"])({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
    ecran: 1192
  }
});

class IndexNettoyage extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      activeIndex: 0
    });

    _defineProperty(this, "handleClick", (e, titleProps) => {
      const {
        index
      } = titleProps;
      const {
        activeIndex
      } = this.state;
      const newIndex = activeIndex === index ? -1 : index;
      this.setState({
        activeIndex: newIndex
      });
    });
  }

  render() {
    const {
      activeIndex
    } = this.state;
    const {
      mobile
    } = this.props;
    const shadow = {
      color: 'lightgreen',
      textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
      textAlign: "center",
      fontFamily: "verdana",
      fontSize: mobile ? 2 : 25
    };
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        style: {
          letterSpacing: 3,
          paddingTop: 30
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("center", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              style: shadow,
              children: "N\xE9ttoyage "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          style: {
            fontFamily: "Comic Sans MS",
            textAlign: 'center'
          },
          children: "RTS \u2013 Le nettoyage adapt\xE9 a vos besoin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Accordion"], {
          styled: true,
          fluid: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Accordion"].Title, {
            active: activeIndex === 0,
            index: 0,
            onClick: this.handleClick,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
              name: "dropdown"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, this), "Notre soci\xE9t\xE9"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Accordion"].Content, {
            active: activeIndex === 0,
            style: {
              textAlign: "center"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
                src: "img/r.t.s.jpg",
                spaced: "left",
                size: "small"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                style: shadow,
                children: "Qui sommes nous?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                backgroundColor: "whitesmoke"
              },
              children: "Situ\xE9e \xE0 Montreuil (93), en p\xE9riph\xE9rie imm\xE9diate de Paris, l\u2019entreprise R\xE9novation Tertiaire Service a \xE9t\xE9 cr\xE9\xE9e il y a 6 ans. Son activit\xE9 initiale de r\xE9novation s\u2019est tr\xE8s rapidement transform\xE9e en entreprise dans laquelle le \xAB Tout Corps d\u2019\xE9tat \xBB s\u2019est impos\xE9 avec succ\xE8s et avec une croissance exponentielle rapide due \xE0 la qualit\xE9 de ses ouvrages. Aujourd\u2019hui, l\u2019entreprise s\u2019est sp\xE9cialis\xE9e aussi bien dans la restructuration compl\xE8te de B\xE2timents, que dans la pose de rev\xEAtements muraux ou de sols, la r\xE9novation de salles, cloisonnements, la mise aux normes des installations \xE9lectriques ou encore l\u2019isolation. Un d\xE9partement de nettoyage sp\xE9cialis\xE9 tous supports, a \xE9galement \xE9t\xE9 cr\xE9\xE9 afin de pallier aux n\xE9cessit\xE9s de nos chantiers, o\xF9 parfois la restauration de support est n\xE9cessaire en compl\xE9ment de nos travaux (ex pierre de Paris, Pierre de taille, marbres). Notre bureau d\u2019\xE9tudes (dont architecture d\u2019int\xE9rieur) nous a \xE9galement amen\xE9 \xE0 effectuer des missions sur du patrimoine ancien et parfois class\xE9. L\u2019entreprise s\u2019est confront\xE9e \xE0 une demande sans cesse grandissante de la part de ses clients, qui souhaitent confier leurs travaux \xE0 un seul interlocuteur. Nous prenons ainsi en charge tous les aspects du chantier, et ce, depuis la phase d\u2019\xE9tude, la conception, jusqu\u2019\xE0 la r\xE9alisation finale."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                style: shadow,
                children: "L'ecoute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                backgroundColor: "whitesmoke"
              },
              children: "Qu\u2019il s\u2019agisse de g\xE9rer l\u2019agencement, l\u2019agrandissement ou la r\xE9novation compl\xE8te, ou encore les divers travaux de plomberiesanitaire, \xE9lectricit\xE9, menuiserie, pl\xE2trerie etc\u2026 nous restons toujours \xE0 l\u2019\xE9coute de nos clients pour intervenir dans les d\xE9lais et selon les imp\xE9ratifs de l\u2019\xE9tablissement."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                style: shadow,
                children: "L'experience"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                backgroundColor: "whitesmoke"
              },
              children: "RTS \u2013 R\xE9novation Tertiaire Service m\xE8ne depuis plus de 5 ans des projets de r\xE9novation d\u2019envergure \xE9tant un v\xE9ritable sp\xE9cialiste pour vos travaux. Nous g\xE9rons aussi bien les travaux standards de peinture, de d\xE9coration, la pose de parquet, les travaux de ma\xE7onnerie, la pose de carrelage, de faux plafond ou encore les r\xE9novations totales.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                style: shadow,
                children: "La r\xE9activit\xE8"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                backgroundColor: "whitesmoke"
              },
              children: "Le suivi des souhaits et des imp\xE9ratifs de nos clients est notre priorit\xE9. R\xE9novation Tertiaire Service s\u2019engage aupr\xE8s de ses clients \xE0 garantir un niveau de r\xE9activit\xE9 maximale en proposant des solutions alliant fiabilit\xE9 et performance durable."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                style: shadow,
                children: "Nos valeurs et engagements"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                backgroundColor: "whitesmoke"
              },
              children: "Qualit\xE9, Confiance et innovation R\xE9novation Tertiaire Service est n\xE9e en 2016 de l'association de deux entrepreneurs sp\xE9cialistes du b\xE2timent. Leur volont\xE9 commune \xE9tait de cr\xE9er une entreprise g\xE9n\xE9rale du b\xE2timent ayant comme exigence un travail de qualit\xE9 et un engagement total dans chacun des projets \xE0 r\xE9aliser. Ces valeurs capitales, plac\xE9es au coeur de l'activit\xE9, permettent de remplir deux objectifs : - la satisfaction du client et la satisfaction personnelle d'un travail r\xE9ussi. C'est \xE9galement gr\xE2ce \xE0 nos collaborateurs qui partagent la m\xEAme vision, \xE0 leur professionnalisme et \xE0 leur implication, que notre soci\xE9t\xE9 a pu instaurer des relations solides avec ses clients et ses fournisseurs sur le long terme et ainsi se d\xE9velopper solidement et durablement. La confiance accord\xE9e par nos clients est un moteur de l'entreprise. En effet votre satisfaction est essentielle. Afin d'apporter des r\xE9ponses \xE0 chacune des demandes nous \xE9voluons en permanence et proposons des solutions innovantes afin de faire de chaque projet une r\xE9alit\xE9."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Accordion"].Title, {
            active: activeIndex === 1,
            index: 1,
            onClick: this.handleClick,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
              name: "dropdown"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 29
            }, this), "Proprement Engag\xE9"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Accordion"].Content, {
            active: activeIndex === 1,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
              textAlign: "center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                style: shadow,
                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
                  src: "img/engage.jpg",
                  spaced: "left",
                  size: "small"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 57
                }, this), "Plan d\u2019actions de Responsabilit\xE9 Soci\xE9tale Entreprise"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                backgroundColor: "whitesmoke"
              },
              children: ["Depuis 2018, R\xE9novation Tertiaire Service s\u2019est inscrit dans une d\xE9marche d\u2019entreprise responsable, soucieuse de l\u2019environnement, de l\u2019\xE9cologie et de son milieu \xE9conomique. En 2021 nous confirmons notre volont\xE9 en y int\xE9grant l\u2019ensemble de nos \xE9quipes, en d\xE9veloppant des actions responsables. Nous nous engageons dans une d\xE9marche visant \xE0 int\xE9grer des enjeux de d\xE9veloppement durable, \xE0 moyen et long terme, et de fournir un cadre d\u2019exigence \xE0 nos interlocuteurs. Notre Responsabilit\xE9 Soci\xE9tale Entreprise s\u2019inscrit dans une d\xE9marche en \xE9volution :", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 113
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: " Innover sur le long terme Responsabilit\xE9 dans le domaine \xE9conomique Nous souhaitons une r\xE9duction de notre empreinte environnementale, une politique d\u2019approvisionnement durable et responsable des mati\xE8res premi\xE8res utilis\xE9es, l\u2019\xE9coconception des emballages de nos mat\xE9riaux, un engagement pour la \u201Cz\xE9ro d\xE9forestation\u201D."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 42
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "Sensibilisation aupr\xE8s des salari\xE9s Responsabilit\xE9 dans le domaine social Faire participer les salari\xE9s sur le terrain pour avoir des id\xE9es d\u2019am\xE9lioration dans la gestion des mat\xE9riaux; devenir \xE9coresponsables. Sensibiliser les chefs d\u2019\xE9quipes et responsables de chantier pour transmettre les informations aupr\xE8s des \xE9quipes et ainsi former les collaborateurs."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 43
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "Strat\xE9gies de r\xE9duction des d\xE9chets Responsabilit\xE9 dans le domaine environnemental Nous r\xE9alisons des fiches de tri pour les d\xE9chets inertes et les d\xE9chets non dangereux non inertes. Nous envoyons en centre de traitement les d\xE9chets sp\xE9cifiques."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 42
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "Am\xE9lioration de la performance environnementale de nos constructions Responsabilit\xE9 dans le domaine environnemental Nous essayons de nous engager dans une politique environnementale lors de nos diff\xE9rents chantiers afin de r\xE9pondre au mieux aux contraintes \xE9conomiques et \xE9cologiques de nos clients. Les produits \xE9co labellis\xE9s ainsi que les produits de mat\xE9riaux recycl\xE9s sont favoris\xE9s."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 42
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "Garantir la performance \xE9conomique de l\u2019entreprise Responsabilit\xE9 dans le domaine \xE9conomique Instaurer des relations durables avec nos partenaires (sous-traitants et fournisseurs). Nous nous effor\xE7ons d\u2019instaurer et de cr\xE9er au maximum des relations de confiance durables avec l\u2019ensemble de nos collaborateurs et garantir une meilleure efficacit\xE9 dans la gestion des projets."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 42
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: [" Respecter les impacts environnementaux Responsabilit\xE9 dans le domaine environnemental Mise en place d\u2019une strat\xE9gie de d\xE9placements d\u2019entreprise. Un syst\xE8me de co-voiturage par chef d\u2019\xE9quipe a \xE9t\xE9 mis en place pour se rendre sur chaque chantier et ainsi limiter l\u2019empreinte carbone.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 168,
                    columnNumber: 113
                  }, this), "7/ Interagir avec les acteurs publics locaux Responsabilit\xE9 dans le domaine territorial Participer \xE0 l\u2019activit\xE9 \xE9conomique de la r\xE9gion, au d\xE9veloppement du domaine territorial. Accueillir des stagiaires et leur faire d\xE9couvrir les m\xE9tiers du b\xE2timent."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 42
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: " Optimisation de notre flotte professionnelle Responsabilit\xE9 dans le domaine environnemental Nous entretenons tous nos v\xE9hicules en garages certifi\xE9s et/ou labellis\xE9s inscrits dans une d\xE9marche qualit\xE9 et/ou environnementale. Notre flotte actuelle est compos\xE9e de v\xE9hicules \xE9lectriques et hybrides, pour passer en totalit\xE9 en v\xE9hicules \xE9lectrique \xE0 l\u2019horizon 2023."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 42
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: " Favoriser les achats responsables Responsabilit\xE9 dans le domaine \xE9conomique Il s\u2019agit de privil\xE9gier les achats responsables aupr\xE8s de fournisseurs lanc\xE9s dans une m\xEAme d\xE9marche; et aupr\xE8s d\u2019artisans et fournisseurs locaux."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 42
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: " Etre fiscalement responsable Responsabilit\xE9 dans le domaine de la gouvernance Le paiement des imp\xF4ts de fa\xE7on responsable, v\xE9rification mensuelle de toutes les attestations de vigilance \xE0"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Accordion"].Title, {
            active: activeIndex === 2,
            index: 2,
            onClick: this.handleClick,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
              name: "dropdown"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 29
            }, this), "D\xE9veloppement"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Accordion"].Content, {
            active: activeIndex === 2,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
              textAlign: "center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                style: shadow,
                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
                  src: "img/demarche.jpg",
                  spaced: "left",
                  size: "small"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 57
                }, this), "Notre d\xE9marche d\xE9veloppement durable"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                backgroundColor: "whitesmoke"
              },
              children: ["Notre entreprise s\u2019est orient\xE9e vers deux axes : - Apprendre \xE0 \xE9conomiser et \xE0 partager de mani\xE8re \xE9quitable les ressources de l\u2019environnement et \xE0 tenir compte des facult\xE9s limit\xE9es de celui-ci \xE0 absorber les d\xE9chets et les pollutions. Utiliser au maximum des produits et mat\xE9riaux \xE9cologiques et ou \xE0 base de mati\xE8res recycl\xE9es. \u2192 c\u2019est la dimension environnementale du d\xE9veloppement durable. - Garantir une croissance \xE9conomique cr\xE9atrice d\u2019emploi et d\u2019\xE9quit\xE9 sociale \u2192 c\u2019est l\u2019aspect \xE9conomique et social du d\xE9veloppement durable. 1) Bilan carbone Nous calculons chaque ann\xE9e le bilan carbone de notre entreprise afin de conna\xEEtre finement nos sources d\u2019\xE9missions des gaz carboniques afin de les r\xE9duire. Notre objectif est d\u2019\xEAtre une entreprise \xAB z\xE9ro carbone \xBB \xE0 fin 2024, pour cela nous avons engag\xE9 un plan pluriannuel en trois points :", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 41
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: [" La croissance de notre activit\xE9 ne doit pas se traduire par la croissance des \xE9missions de gaz \xE0 effet de serre. Nous voulons diminuer nos \xE9missions de CO2 par des actions concr\xE8tes :", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 220,
                    columnNumber: 107
                  }, this), "\uF0B7 Achat de v\xE9hicules \xAB vert \xBB", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 221,
                    columnNumber: 66
                  }, this), "\uF0B7 Am\xE9liorer durablement l\u2019isolation de nos b\xE2timents", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 89
                  }, this), "\uF0B7 Diminuer nos consommations \xE9nerg\xE9tiques et de consommables", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 97
                  }, this), "\uF0B7 Donner la pr\xE9f\xE9rence aux fournisseurs locaux et ayant une vraie d\xE9marche environnementale", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 224,
                    columnNumber: 128
                  }, this), "\uF0B7 Am\xE9liorer nos flux avec les fournisseurs et nos flux clients", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 99
                  }, this), "\uF0B7 Innover constamment et int\xE9grer de nouvelles technologies dites \xAB propres \xBB", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 114
                  }, this), "Compenser l\u2019ensemble de nos \xE9missions restantes de CO2 par la plantation d\u2019arbres dans les zones du monde n\xE9cessitant un reboisement (Afrique, Asie) par le biais de dons \xE0 des associations.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
                    columnNumber: 105
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 34
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: ["Gestion des d\xE9chets : Nous privil\xE9gions la collaboration avec les fournisseurs ayant engag\xE9s des d\xE9marches environnementales (production du verre, utilisation de PVC sans plomb, mat\xE9riaux de construction issus du recyclage, bois issus d\u2019une gestion durable des for\xEAts, Notre soci\xE9t\xE9 a mis en place le circuit d\u2019\xE9vacuation des d\xE9chets suivants :", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 233,
                    columnNumber: 112
                  }, this), "\uF0B7 Tra\xE7abilit\xE9 des d\xE9chets", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 234,
                    columnNumber: 62
                  }, this), "\uF0B7 Recyclage des d\xE9chets sp\xE9cifiques dans des centres de traitement.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 104
                  }, this), "\uF0B7 Recyclage des produits dans les fili\xE8res de valorisation", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 95
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 34
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: " Concilier le progr\xE8s \xE9conomique et social avec le respect de l\u2019environnement : Nos collaborateurs sont sensibilis\xE9s sur la n\xE9cessit\xE9 imp\xE9rieuse du d\xE9veloppement durable \xE0 travers un certain nombre d\u2019actions et de formations. Nous mettons tout particuli\xE8rement l\u2019accent sur l\u2019int\xE9gration et la formation de notre personnel. Cet axe nous permet sa fid\xE9lisation et sa motivation. Ainsi moins d\u2019absent\xE9isme, moins de turn-over et plus de professionnalisme sont les garanties d\u2019une continuit\xE9 et d\u2019une \xE9volution de la qualit\xE9 de nos services."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Accordion"].Title, {
            active: activeIndex === 3,
            index: 3,
            onClick: this.handleClick,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
              name: "dropdown"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 29
            }, this), "Diversit\xE9"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Accordion"].Content, {
            active: activeIndex === 3,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
              textAlign: "center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                style: shadow,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
                  src: "img/diversite.jpg",
                  spaced: "left",
                  size: "small"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 259,
                  columnNumber: 56
                }, this), "La diversit\xE9"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                backgroundColor: "whitesmoke"
              },
              children: ["  Refl\xE9ter la diversit\xE9 de la soci\xE9t\xE9, c\u2019est avant tout promouvoir la diversit\xE9 et garantir l\u2019\xE9galit\xE9 des chances \xE0 tous les niveaux de l\u2019organisation.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 262,
                columnNumber: 55
              }, this), "S\u2019enrichir de la diversit\xE9 des Hommes et des Femmes, c\u2019est s \u2019appuyer sur les meilleures comp\xE9tences sans aucune distinction, ce qui est l\u2019une des cl\xE9s r\xE9pondant \xE0 nos enjeux actuels et \xE0 venir. Faire en sorte que chacun d \u2019entre nous puisse se sentir bien \xE0 sa place est \xE9galement un enjeu . C\u2019est pourquoi, R\xE9novation tertiaire Service s \u2019est engag\xE9e dans une d\xE9marche de promotion de la diversit\xE9.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 266,
                columnNumber: 109
              }, this), "Notre ambition : ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 46
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: ["respecter et promouvoir la mixit\xE9, la diversit\xE9 et l\u2019\xE9galit\xE9 des chances :", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 269,
                    columnNumber: 107
                  }, this), "Parce que la diversit\xE9 est un facteur de performance et de d\xE9veloppement \xE0 la fois personnel et collectif , R\xE9novation tertiaire Service s \u2019engage en faveur de la diversit\xE9, de l\u2019\xE9galit\xE9 des chances et de la lutte contre toute forme de discrimination."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 273,
                  columnNumber: 34
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "Favoriser la transversalit\xE9 des m\xE9tiers : R\xE9novation Tertiaire Service favorise les passerelles entre les diff\xE9rents m\xE9tiers. Conducteur de travaux, compagnon\u2026 Chacun de nos collaborateurs pourra \xE9voluer , s\u2019il le souhaite , vers les diff\xE9rents m\xE9tiers de notre activit\xE9"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 274,
                  columnNumber: 29
                }, this), ".", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 278,
                  columnNumber: 35
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: ["Promotion \xE9quitable et gestion des talents : Notre politique individualis\xE9e de d\xE9veloppement des comp\xE9tences s\u2019inscrit dans la d\xE9marche de progr\xE8s social de notre entreprise. Parce que chaque collaborateur est unique, nous \xE9laborons ensemble son parcours professionnel et l\u2019accompagnons, afin qu\u2019il se r\xE9alise au sein de notre entit\xE9, quelle que soit ses origines humaines et sociales. Nous sommes persuad\xE9s que la dynamique d\u2019\xE9quipe passe par la valorisation des comp\xE9tences individuelles. Plan de formation personnalis\xE9, briefing manag\xE9rial, \xE9coute, nous mettons tout en oeuvre pour que chacun de nos talents s\u2019\xE9panouisse. Nos engagements", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 285,
                    columnNumber: 48
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 279,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "Sensibiliser l\u2019ensemble des collaborateurs et offrir \xE0 chacun une \xE9galit\xE9 de droit et de traitement. . D\xE9velopper la mixit\xE9 dans tous les m\xE9tiers, \xE0 chaque niveau de responsabilit\xE9."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 287,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 289,
                  columnNumber: 34
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "Former et accompagner les managers impliqu\xE9s dans le parcours professionnel de nos collaborateurs"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 290,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 291,
                  columnNumber: 34
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "Garantir la coll\xE9gialit\xE9 des d\xE9cisions prises pour les recrutements et la gestion de carri\xE8re afin d\u2019assurer une \xE9galit\xE9 de traitement."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 292,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 294,
                  columnNumber: 34
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "Permettre l\u2019expression de toute situation de discrimination ou de harc\xE8lement via une cellule ind\xE9pendante d\u2019\xE9coute et soutenir toute personne confront\xE9e \xE0 cette situation."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 295,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 297,
                  columnNumber: 34
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "Associer nos fournisseurs et sous-traitants \xE0 la d\xE9marche et nous assurer de leur adh\xE9sion notamment au moment de leur s\xE9lection et de leur \xE9valuation."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 298,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 300,
                  columnNumber: 34
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "D\xE9velopper des partenariats avec le secteur adapt\xE9 et de l\u2019insertion et soutenir l\u2019engagement solidaire des collaborateurs pour renforcer les liens entre l\u2019entreprise et le monde associatif.."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 301,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 303,
                  columnNumber: 34
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this);
  }

}

class GreatherNettoyage extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
      greaterThan: "mobile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IndexNettoyage, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 13
    }, this);
  }

}

class MobileNettoyage extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
      between: ["mobile", "tablet"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IndexNettoyage, {
        mobile: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 13
    }, this);
  }

}

class Nettoyage extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MediaContextProvider, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GreatherNettoyage, {
          children: this.props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MobileNettoyage, {
          children: this.props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "@artsy/fresnel":
/*!*********************************!*\
  !*** external "@artsy/fresnel" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@artsy/fresnel");

/***/ }),

/***/ "emailjs-com":
/*!******************************!*\
  !*** external "emailjs-com" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emailjs-com");

/***/ }),

/***/ "next/dist/next-server/lib/utils":
/*!**************************************************!*\
  !*** external "next/dist/next-server/lib/utils" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-animated-css":
/*!*************************************!*\
  !*** external "react-animated-css" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-animated-css");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9NZW51LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL01vYmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9OZXR0b3lhZ2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFydHN5L2ZyZXNuZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbWFpbGpzLWNvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hbmltYXRlZC1jc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIkhlYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImVtYWlsanMiLCJNeUxheW91dCIsInN0YXRlIiwiY2hpbGRyZW4iLCJNZWRpYUNvbnRleHRQcm92aWRlciIsIk1lZGlhIiwiY3JlYXRlTWVkaWEiLCJicmVha3BvaW50cyIsIm1vYmlsZSIsInRhYmxldCIsImNvbXB1dGVyIiwiZWNyYW4iLCJzaGFkb3ciLCJjb2xvciIsInRleHRTaGFkb3ciLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJzaGFkb3cyIiwidGV4dEFsaWduIiwiaHRtbCIsIkRlc2t0b3BDb250YWluZXIiLCJhY3RpdmVJdGVtIiwiZSIsIm5hbWUiLCJzZXRTdGF0ZSIsImZpeGVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsInNob3dGaXhlZE1lbnUiLCJoaWRlRml4ZWRNZW51IiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFdlaWdodCIsImhhbmRsZUl0ZW1DbGljayIsIk1vYmlsZUNvbnRhaW5lciIsInNpZGViYXJPcGVuZWQiLCJTaWRlYmFyIiwicHVzaGFibGUiLCJNZW51IiwiaGFuZGxlU2lkZWJhckhpZGUiLCJtaW5IZWlnaHQiLCJwYWRkaW5nIiwiaGFuZGxlVG9nZ2xlIiwiTXlNZW51IiwiTW9iaWxlIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwidGV4dERlY29yYXRpb24iLCJJbmRleE5ldHRveWFnZSIsImFjdGl2ZUluZGV4IiwidGl0bGVQcm9wcyIsImluZGV4IiwibmV3SW5kZXgiLCJsZXR0ZXJTcGFjaW5nIiwicGFkZGluZ1RvcCIsImhhbmRsZUNsaWNrIiwiR3JlYXRoZXJOZXR0b3lhZ2UiLCJNb2JpbGVOZXR0b3lhZ2UiLCJOZXR0b3lhZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBC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QUFBO0FBQUE7QUFBQSxZQURKO0FBS0g7O0FBUjJDOztBQVdoRCxNQUFNMkQsZUFBTixTQUE4QjlELDRDQUFLLENBQUNDLFNBQXBDLENBQThDO0FBQzFDRyxRQUFNLEdBQUc7QUFDTCxVQUFNO0FBQUVJO0FBQUYsUUFBZSxLQUFLTCxLQUExQjtBQUNBLHdCQUNJLHFFQUFDLEtBQUQ7QUFBTyxhQUFPLEVBQUUsQ0FBQyxRQUFELEVBQVcsUUFBWCxDQUFoQjtBQUFBLDZCQUNJLHFFQUFDLGNBQUQ7QUFBZ0IsY0FBTTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBS0g7O0FBUnlDOztBQVcvQixNQUFNNEQsU0FBTixTQUF3Qi9ELDRDQUFLLENBQUNDLFNBQTlCLENBQXdDO0FBRW5ERyxRQUFNLEdBQUc7QUFDTCx3QkFDSTtBQUFBLDZCQUNJLHFFQUFDLG9CQUFEO0FBQUEsZ0NBQ0kscUVBQUMsaUJBQUQ7QUFBQSxvQkFBcUIsS0FBS0QsS0FBTCxDQUFXSztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUkscUVBQUMsZUFBRDtBQUFBLG9CQUFrQixLQUFLTCxLQUFMLENBQVdLO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBUUg7O0FBWGtELEM7Ozs7Ozs7Ozs7O0FDaFZ2RCwyQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9OZXR0b3lhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL05ldHRveWFnZS5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE15TWVudSBmcm9tIFwiLi4vcGFnZXMvTWVudS5qc1wiXHJcbmltcG9ydCAqIGFzIGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5yZW5vdmF0aW9uPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwicmVub3ZhdGlvbiB0ZXJ0aWFpcmUgc2VydmljZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJlbWlsZSBjaGVtbWFtYVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwicG9tcGUgYSBjaGFsZXVyLHBsb21iZXJpZSxlbGVjdHJpY2l0ZSxzYWxsZSBkZSBiYWluXCIgLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGFzeW5jIHJlbD1cInN0eWxlc2hlZXRcIiBsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjAuMy9kaXN0L3NlbWFudGljLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL21lbnUuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FuaW1hdGUuY3NzLzMuNS4yL2FuaW1hdGUubWluLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9lbWFpbGpzLWNvbUAyL2Rpc3QvZW1haWwubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvbWVudS5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsanMuaW5pdChcIllPVVJfVVNFUl9JRFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JpcHQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkPlxyXG4gICAgICAgICAgICAgICAgPE15TWVudSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUxheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNyZWF0ZU1lZGlhIH0gZnJvbSAnQGFydHN5L2ZyZXNuZWwnXHJcbmltcG9ydCB7IENvbnRhaW5lciwgSWNvbiwgSW1hZ2UsIE1lbnUsIFNlZ21lbnQsIFNpZGViYXIsIFZpc2liaWxpdHksRHJvcGRvd24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IE1vYmlsZSBmcm9tIFwiLi4vcGFnZXMvTW9iaWxlLmpzXCJcclxuXHJcbmNvbnN0IHsgTWVkaWFDb250ZXh0UHJvdmlkZXIsIE1lZGlhIH0gPSBjcmVhdGVNZWRpYSh7XHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIG1vYmlsZTogMCxcclxuICAgICAgICB0YWJsZXQ6IDkwMCxcclxuICAgICAgICBjb21wdXRlcjogMTAyNCxcclxuICAgICAgICBlY3JhbjogMTE5MlxyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3Qgc2hhZG93ID1cclxue1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB0ZXh0U2hhZG93OiAnLTJweCAwIGJsYWNrLCAwIDJweCBibGFjaywgMnB4IDAgYmxhY2ssIDAgLTJweCBibGFjaycsXHJcbiAgICBmb250RmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIixcclxuICAgIGZvbnRTaXplOiAxN1xyXG59XHJcblxyXG5jb25zdCBzaGFkb3cyID1cclxue1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB0ZXh0U2hhZG93OiAnMnB4IDJweCA0cHggIzAwMDAwMCcsXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBmb250RmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIixcclxuICAgIGZvbnRTaXplOiAxMVxyXG59XHJcblxyXG5jb25zdCBodG1sID1cIlwiXHJcblxyXG5cclxuY2xhc3MgRGVza3RvcENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7IGFjdGl2ZUl0ZW06ICcnIH1cclxuXHJcbiAgICBoYW5kbGVJdGVtQ2xpY2sgPSAoZSwgeyBuYW1lIH0pID0+IHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBuYW1lIH0pXHJcbiAgICBoaWRlRml4ZWRNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZpeGVkOiBmYWxzZSB9KVxyXG4gICAgc2hvd0ZpeGVkTWVudSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmaXhlZDogdHJ1ZSB9KVxyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCB7IGFjdGl2ZUl0ZW0gfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBjb25zdCB7Y29sb3J9PXRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgRGVza3RvcENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQgPlxyXG4gICAgICAgICAgICAgICAgPE1lZGlhIGdyZWF0ZXJUaGFuPSdtb2JpbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uY2U9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJvdHRvbVBhc3NlZD17dGhpcy5zaG93Rml4ZWRNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJvdHRvbVBhc3NlZFJldmVyc2U9e3RoaXMuaGlkZUZpeGVkTWVudX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IHZlcnRpY2FsIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOidsaWdodGdyZXknfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZXNtb2tlJyB9fSBzdGFja2FibGUgZmx1aWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT48SW1hZ2Ugc3JjPSdpbWcvZWNvbG8vcnRzLnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9J2EnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3RpbnknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9Jy8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGludmVydGVkIHN0eWxlPXtzaGFkb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J1LDqW5vdmF0aW9uIFRlcnRpYWlyZSBTZXJ2aWNlJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIHBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdOZXR0b3lhZ2UnIGhyZWY9e1wiL05ldHRveWFnZVwiK2h0bWx9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6XCJib2xkXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdOZXR0b3lhZ2UnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvbmV3MS5wbmdcIiBzaXplPVwibWluaVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV0dG95YWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBpdGVtIHRleHQ9J1IuRy5FJ3NpbXBsZSBzdHlsZT17e2ZvbnRXZWlnaHQ6XCJib2xkXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL1BhY1wiK2h0bWx9PlBhYyBhaXIgZWF1PC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9JdGVcIitodG1sfT5Jc29sYXRpb24gZXh0ZXJpZXVyPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9JdGlcIitodG1sfT5Jc29sYXRpb24gaW50ZXJpZXVyPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9BaXJBaXJcIitodG1sfT5QYWMgYWlyIGFpcjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvUGhvdG92b2x0YWlxdWVcIitodG1sfT5QaG90b3ZvbHRhaXF1ZTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvQmFsbG9uU29sYWlyZVwiK2h0bWx9PkJhbGxvbiBTb2xhaXJlPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gaXRlbSB0ZXh0PSdMZSBCYXRpbWVudCcgc2ltcGxlIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL0VsZWN0cmljaXRlXCIraHRtbH0+RWxlY3RyaWNpdMOpPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9QbG9tYmVyaWVcIitodG1sfT5QbG9tYmVyaWU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL1JldmV0ZW1lbnRcIitodG1sfT5SZXZldGVtZW50IHNvbDwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvQ2xvaXNvblwiK2h0bWx9PkNsb2lzb24gYnVyZWF1PC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIHN0eWxlPXt7Zm9udFdlaWdodDogXCJib2xkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nTm9zIFBhcnRlbmFpcmVzJyBocmVmPXtcIi9QYXJ0ZW5haXJlXCIraHRtbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnTm9zIFBhcnRlbmFpcmVzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdRdWkgc29tbWVzIG5vdXMnIGhyZWY9e1wiL01pc3Npb25cIitodG1sfXN0eWxlPXt7Zm9udFdlaWdodDogXCJib2xkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnUXVpIHNvbW1lcyBub3VzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J1F1YWxpZmljYXRpb24nIGhyZWY9e1wiL1F1YWxpZmljYXRpb25cIitodG1sfSBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ1F1YWxpZmljYXRpb24nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9WaXNpYmlsaXR5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE1vYmlsZUNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHt9XHJcbiAgICBzdGF0ZSA9IHsgYWN0aXZlSXRlbTogJ2hvbWUnIH1cclxuXHJcbiAgICBoYW5kbGVJdGVtQ2xpY2sgPSAoZSwgeyBuYW1lIH0pID0+IHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBuYW1lIH0pXHJcbiAgICBoYW5kbGVTaWRlYmFySGlkZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaWRlYmFyT3BlbmVkOiBmYWxzZSB9KVxyXG4gICAgaGFuZGxlVG9nZ2xlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpZGViYXJPcGVuZWQ6IHRydWUgfSlcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgc2lkZWJhck9wZW5lZCwgYWN0aXZlSXRlbSB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgICAgICBNb2JpbGVDb250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gICAgICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVkaWEgYXM9e1NpZGViYXIucHVzaGFibGV9IGJldHdlZW49e1tcIm1vYmlsZVwiLCBcInRhYmxldFwiXX0+XHJcbiAgICAgICAgICAgICAgICA8U2lkZWJhci5QdXNoYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz17TWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPSdwdXNoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlU2lkZWJhckhpZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3NpZGViYXJPcGVuZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdOZXR0b3lhZ2UnIGhyZWY9e1wiL05ldHRveWFnZVwiICsgaHRtbH0gc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ05ldHRveWFnZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9uZXcxLnBuZ1wiIHNpemU9XCJtaW5pXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV0dG95YWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGl0ZW0gdGV4dD0nUi5HLkUnIHBvaW50aW5nPVwibGVmdFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9QYWNcIiArIGh0bWx9PlBhYyBhaXIgZWF1PC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvSXRlXCIgKyBodG1sfT5Jc29sYXRpb24gZXh0ZXJpZXVyPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvSXRpXCIgKyBodG1sfT5Jc29sYXRpb24gaW50ZXJpZXVyPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvQWlyQWlyXCIgKyBodG1sfT5QYWMgYWlyIGFpcjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL1Bob3Rvdm9sdGFpcXVlXCIgKyBodG1sfT5QaG90b3ZvbHRhaXF1ZTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL0JhbGxvblNvbGFpcmVcIiArIGh0bWx9PkJhbGxvbiBTb2xhaXJlPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gaXRlbSB0ZXh0PSdMZSBCYXRpbWVudCdwb2ludGluZz1cImxlZnRcIiBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL0VsZWN0cmljaXRlXCIgKyBodG1sfT5FbGVjdHJpY2l0w6k8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9QbG9tYmVyaWVcIiArIGh0bWx9PlBsb21iZXJpZTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL1JldmV0ZW1lbnRcIiArIGh0bWx9PlJldmV0ZW1lbnQgc29sPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvQ2xvaXNvblwiICsgaHRtbH0+Q2xvaXNvbiBidXJlYXU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIHBvc2l0aW9uPVwicmlnaHRcIiBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nTm9zIFBhcnRlbmFpcmVzJyBocmVmPXtcIi9QYXJ0ZW5haXJlXCIgKyBodG1sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnTm9zIFBhcnRlbmFpcmVzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nUXVpIHNvbW1lcyBub3VzJyBocmVmPXtcIi9NaXNzaW9uXCIgKyBodG1sfSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnUXVpIHNvbW1lcyBub3VzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J1F1YWxpZmljYXRpb24nIGhyZWY9e1wiL1F1YWxpZmljYXRpb25cIiArIGh0bWx9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdRdWFsaWZpY2F0aW9uJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L1NpZGViYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXIuUHVzaGVyIGRpbW1lZD17c2lkZWJhck9wZW5lZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IDI1MCwgcGFkZGluZzogJzAuNWVtIDBlbScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IGludmVydGVkIHNlY29uZGFyeSBzaXplPSd0aW55Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjaXJjdWxhciBjb2xvcj0ndGVhbCcgbmFtZT0nc2lkZWJhcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9iaWxlIG1vYmlsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L1NpZGViYXIuUHVzaGVyPlxyXG4gICAgICAgICAgICAgICAgPC9TaWRlYmFyLlB1c2hhYmxlPlxyXG4gICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgTXlNZW51ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8TWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDxEZXNrdG9wQ29udGFpbmVyPntjaGlsZHJlbn08L0Rlc2t0b3BDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxNb2JpbGVDb250YWluZXI+e2NoaWxkcmVufTwvTW9iaWxlQ29udGFpbmVyPlxyXG4gICAgICAgIDwvTWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15TWVudSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBIZWFkZXIsIEltYWdlLCBHcmlkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCB7IEFuaW1hdGVkIH0gZnJvbSBcInJlYWN0LWFuaW1hdGVkLWNzc1wiO1xyXG5cclxuLy9tZW51IG1vYmlsZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2JpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IG1vYmlsZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDb250YWluZXIgdGV4dD5cclxuICAgICAgICAgICAgICAgIDxBbmltYXRlZCBhbmltYXRpb25Jbj1cImZhZGVJblwiIGFuaW1hdGlvbk91dD1cImZhZGVPdXRcIiBhbmltYXRpb25JbkR1cmF0aW9uPXs1MDAwfSBhbmltYXRpb25PdXREdXJhdGlvbj17MTAwMH0gaXNWaXNpYmxlPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1nL2Vjb2xvL3J0cy5wbmdcIiBzaXplPVwic21hbGxcIiBjZW50ZXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9J2gxJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PSdSw6lub3ZhdGlvbiBUZXJ0aWFpcmUgc2VydmljZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogbW9iaWxlID8gJzJlbScgOiAnNGVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBtb2JpbGUgPyAnMCcgOiAnMWVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPSdoMidcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD0nVm9zIHByb2pldHMgZW50aWVyZW1lbnQgZmluYW5jw6knXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogbW9iaWxlID8gJzAuN2VtJyA6ICcxZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IG1vYmlsZSA/ICcwLjVlbScgOiAnMC41ZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9BbmltYXRlZD5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IHVybE9iamVjdEtleXMgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEltYWdlLCBDb250YWluZXIsIEdyaWQsIFNlZ21lbnQsIEFjY29yZGlvbiwgSWNvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0XCJcclxuXHJcbmltcG9ydCB7IGNyZWF0ZU1lZGlhIH0gZnJvbSAnQGFydHN5L2ZyZXNuZWwnXHJcbmNvbnN0IHsgTWVkaWFDb250ZXh0UHJvdmlkZXIsIE1lZGlhIH0gPSBjcmVhdGVNZWRpYSh7XHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIG1vYmlsZTogMCxcclxuICAgICAgICB0YWJsZXQ6IDc2OCxcclxuICAgICAgICBjb21wdXRlcjogMTAyNCxcclxuICAgICAgICBlY3JhbjogMTE5MlxyXG4gICAgfVxyXG59KVxyXG5cclxuIGNsYXNzIEluZGV4TmV0dG95YWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZSA9IHsgYWN0aXZlSW5kZXg6IDAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrID0gKGUsIHRpdGxlUHJvcHMpID0+IHtcclxuICAgICAgICBjb25zdCB7IGluZGV4IH0gPSB0aXRsZVByb3BzXHJcbiAgICAgICAgY29uc3QgeyBhY3RpdmVJbmRleCB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIGNvbnN0IG5ld0luZGV4ID0gYWN0aXZlSW5kZXggPT09IGluZGV4ID8gLTEgOiBpbmRleFxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSW5kZXg6IG5ld0luZGV4IH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgYWN0aXZlSW5kZXggfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBjb25zdCB7IG1vYmlsZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHNoYWRvdyA9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb2xvcjogJ2xpZ2h0Z3JlZW4nLFxyXG4gICAgICAgICAgICB0ZXh0U2hhZG93OiAnLTJweCAwIGJsYWNrLCAwIDJweCBibGFjaywgMnB4IDAgYmxhY2ssIDAgLTJweCBibGFjaycsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJ2ZXJkYW5hXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGU/MjoyNVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBsZXR0ZXJTcGFjaW5nOiAzLCBwYWRkaW5nVG9wOiAzMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNlbnRlcj48c3Ryb25nIHN0eWxlPXtzaGFkb3d9Pk7DqXR0b3lhZ2UgPC9zdHJvbmc+PC9jZW50ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBmb250RmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5SVFMg4oCTIExlIG5ldHRveWFnZSBhZGFwdMOpIGEgdm9zIGJlc29pbjwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gc3R5bGVkIGZsdWlkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5UaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJbmRleCA9PT0gMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0nZHJvcGRvd24nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdHJlIHNvY2nDqXTDqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db250ZW50IGFjdGl2ZT17YWN0aXZlSW5kZXggPT09IDB9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvci50LnMuanBnXCIgc3BhY2VkPVwibGVmdFwiIHNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBzdHlsZT17c2hhZG93fT5RdWkgc29tbWVzIG5vdXM/PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlc21va2VcIiB9fT5TaXR1w6llIMOgIE1vbnRyZXVpbCAoOTMpLCBlbiBww6lyaXBow6lyaWUgaW1tw6lkaWF0ZSBkZSBQYXJpcywgbOKAmWVudHJlcHJpc2UgUsOpbm92YXRpb24gVGVydGlhaXJlIFNlcnZpY2UgYSDDqXTDqSBjcsOpw6llIGlsIHkgYSA2IGFucy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbiBhY3Rpdml0w6kgaW5pdGlhbGUgZGUgcsOpbm92YXRpb24gc+KAmWVzdCB0csOocyByYXBpZGVtZW50IHRyYW5zZm9ybcOpZSBlbiBlbnRyZXByaXNlIGRhbnMgbGFxdWVsbGUgbGUgwqsgVG91dCBDb3JwcyBk4oCZw6l0YXQgwrsgc+KAmWVzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3PDqSBhdmVjIHN1Y2PDqHMgZXQgYXZlYyB1bmUgY3JvaXNzYW5jZSBleHBvbmVudGllbGxlIHJhcGlkZSBkdWUgw6AgbGEgcXVhbGl0w6kgZGUgc2VzIG91dnJhZ2VzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVqb3VyZOKAmWh1aSwgbOKAmWVudHJlcHJpc2Ugc+KAmWVzdCBzcMOpY2lhbGlzw6llIGF1c3NpIGJpZW4gZGFucyBsYSByZXN0cnVjdHVyYXRpb24gY29tcGzDqHRlIGRlIELDonRpbWVudHMsIHF1ZSBkYW5zIGxhIHBvc2UgZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldsOqdGVtZW50cyBtdXJhdXggb3UgZGUgc29scywgbGEgcsOpbm92YXRpb24gZGUgc2FsbGVzLCBjbG9pc29ubmVtZW50cywgbGEgbWlzZSBhdXggbm9ybWVzIGRlcyBpbnN0YWxsYXRpb25zIMOpbGVjdHJpcXVlcyBvdVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5jb3JlIGzigJlpc29sYXRpb24uIFVuIGTDqXBhcnRlbWVudCBkZSBuZXR0b3lhZ2Ugc3DDqWNpYWxpc8OpIHRvdXMgc3VwcG9ydHMsIGEgw6lnYWxlbWVudCDDqXTDqSBjcsOpw6kgYWZpbiBkZSBwYWxsaWVyIGF1eCBuw6ljZXNzaXTDqXMgZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcyBjaGFudGllcnMsIG/DuSBwYXJmb2lzIGxhIHJlc3RhdXJhdGlvbiBkZSBzdXBwb3J0IGVzdCBuw6ljZXNzYWlyZSBlbiBjb21wbMOpbWVudCBkZSBub3MgdHJhdmF1eCAoZXggcGllcnJlIGRlIFBhcmlzLCBQaWVycmUgZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhaWxsZSwgbWFyYnJlcykuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RyZSBidXJlYXUgZOKAmcOpdHVkZXMgKGRvbnQgYXJjaGl0ZWN0dXJlIGTigJlpbnTDqXJpZXVyKSBub3VzIGEgw6lnYWxlbWVudCBhbWVuw6kgw6AgZWZmZWN0dWVyIGRlcyBtaXNzaW9ucyBzdXIgZHUgcGF0cmltb2luZSBhbmNpZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV0IHBhcmZvaXMgY2xhc3PDqS4gTOKAmWVudHJlcHJpc2Ugc+KAmWVzdCBjb25mcm9udMOpZSDDoCB1bmUgZGVtYW5kZSBzYW5zIGNlc3NlIGdyYW5kaXNzYW50ZSBkZSBsYSBwYXJ0IGRlIHNlcyBjbGllbnRzLCBxdWkgc291aGFpdGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmllciBsZXVycyB0cmF2YXV4IMOgIHVuIHNldWwgaW50ZXJsb2N1dGV1ci4gTm91cyBwcmVub25zIGFpbnNpIGVuIGNoYXJnZSB0b3VzIGxlcyBhc3BlY3RzIGR1IGNoYW50aWVyLCBldCBjZSwgZGVwdWlzIGxhIHBoYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBk4oCZw6l0dWRlLCBsYSBjb25jZXB0aW9uLCBqdXNxdeKAmcOgIGxhIHLDqWFsaXNhdGlvbiBmaW5hbGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIHN0eWxlPXtzaGFkb3d9PkwnZWNvdXRlPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVzbW9rZVwiIH19ID5RdeKAmWlsIHPigJlhZ2lzc2UgZGUgZ8OpcmVyIGzigJlhZ2VuY2VtZW50LCBs4oCZYWdyYW5kaXNzZW1lbnQgb3UgbGEgcsOpbm92YXRpb24gY29tcGzDqHRlLCBvdSBlbmNvcmUgbGVzIGRpdmVycyB0cmF2YXV4IGRlIHBsb21iZXJpZXNhbml0YWlyZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIMOpbGVjdHJpY2l0w6ksIG1lbnVpc2VyaWUsIHBsw6J0cmVyaWUgZXRj4oCmIG5vdXMgcmVzdG9ucyB0b3Vqb3VycyDDoCBs4oCZw6ljb3V0ZSBkZSBub3MgY2xpZW50cyBwb3VyIGludGVydmVuaXIgZGFucyBsZXMgZMOpbGFpcyBldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vsb24gbGVzIGltcMOpcmF0aWZzIGRlIGzigJnDqXRhYmxpc3NlbWVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3NoYWRvd30+TCdleHBlcmllbmNlPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVzbW9rZVwiIH19PlJUUyDigJMgUsOpbm92YXRpb24gVGVydGlhaXJlIFNlcnZpY2UgbcOobmUgZGVwdWlzIHBsdXMgZGUgNSBhbnMgZGVzIHByb2pldHMgZGUgcsOpbm92YXRpb24gZOKAmWVudmVyZ3VyZSDDqXRhbnQgdW4gdsOpcml0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3DDqWNpYWxpc3RlIHBvdXIgdm9zIHRyYXZhdXguIE5vdXMgZ8Opcm9ucyBhdXNzaSBiaWVuIGxlcyB0cmF2YXV4IHN0YW5kYXJkcyBkZSBwZWludHVyZSwgZGUgZMOpY29yYXRpb24sIGxhIHBvc2UgZGUgcGFycXVldCwgbGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmF2YXV4IGRlIG1hw6dvbm5lcmllLCBsYSBwb3NlIGRlIGNhcnJlbGFnZSwgZGUgZmF1eCBwbGFmb25kIG91IGVuY29yZSBsZXMgcsOpbm92YXRpb25zIHRvdGFsZXMuLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBzdHlsZT17c2hhZG93fT5MYSByw6lhY3Rpdml0w6g8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZXNtb2tlXCIgfX0+TGUgc3VpdmkgZGVzIHNvdWhhaXRzIGV0IGRlcyBpbXDDqXJhdGlmcyBkZSBub3MgY2xpZW50cyBlc3Qgbm90cmUgcHJpb3JpdMOpLiBSw6lub3ZhdGlvbiBUZXJ0aWFpcmUgU2VydmljZSBz4oCZZW5nYWdlIGF1cHLDqHMgZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcyBjbGllbnRzIMOgIGdhcmFudGlyIHVuIG5pdmVhdSBkZSByw6lhY3Rpdml0w6kgbWF4aW1hbGUgZW4gcHJvcG9zYW50IGRlcyBzb2x1dGlvbnMgYWxsaWFudCBmaWFiaWxpdMOpIGV0IHBlcmZvcm1hbmNlIGR1cmFibGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIHN0eWxlPXtzaGFkb3d9Pk5vcyB2YWxldXJzIGV0IGVuZ2FnZW1lbnRzPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVzbW9rZVwiIH19PlF1YWxpdMOpLCBDb25maWFuY2UgZXQgaW5ub3ZhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUsOpbm92YXRpb24gVGVydGlhaXJlIFNlcnZpY2UgZXN0IG7DqWUgZW4gMjAxNiBkZSBsJ2Fzc29jaWF0aW9uIGRlIGRldXggZW50cmVwcmVuZXVycyBzcMOpY2lhbGlzdGVzIGR1IGLDonRpbWVudC4gTGV1ciB2b2xvbnTDqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbXVuZSDDqXRhaXQgZGUgY3LDqWVyIHVuZSBlbnRyZXByaXNlIGfDqW7DqXJhbGUgZHUgYsOidGltZW50IGF5YW50IGNvbW1lIGV4aWdlbmNlIHVuIHRyYXZhaWwgZGUgcXVhbGl0w6kgZXQgdW4gZW5nYWdlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWwgZGFucyBjaGFjdW4gZGVzIHByb2pldHMgw6AgcsOpYWxpc2VyLiBDZXMgdmFsZXVycyBjYXBpdGFsZXMsIHBsYWPDqWVzIGF1IGNvZXVyIGRlIGwnYWN0aXZpdMOpLCBwZXJtZXR0ZW50IGRlIHJlbXBsaXIgZGV1eFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0aWZzIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gbGEgc2F0aXNmYWN0aW9uIGR1IGNsaWVudCBldCBsYSBzYXRpc2ZhY3Rpb24gcGVyc29ubmVsbGUgZCd1biB0cmF2YWlsIHLDqXVzc2kuIEMnZXN0IMOpZ2FsZW1lbnQgZ3LDomNlIMOgIG5vcyBjb2xsYWJvcmF0ZXVycyBxdWlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRhZ2VudCBsYSBtw6ptZSB2aXNpb24sIMOgIGxldXIgcHJvZmVzc2lvbm5hbGlzbWUgZXQgw6AgbGV1ciBpbXBsaWNhdGlvbiwgcXVlIG5vdHJlIHNvY2nDqXTDqSBhIHB1IGluc3RhdXJlciBkZXMgcmVsYXRpb25zIHNvbGlkZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2ZWMgc2VzIGNsaWVudHMgZXQgc2VzIGZvdXJuaXNzZXVycyBzdXIgbGUgbG9uZyB0ZXJtZSBldCBhaW5zaSBzZSBkw6l2ZWxvcHBlciBzb2xpZGVtZW50IGV0IGR1cmFibGVtZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGEgY29uZmlhbmNlIGFjY29yZMOpZSBwYXIgbm9zIGNsaWVudHMgZXN0IHVuIG1vdGV1ciBkZSBsJ2VudHJlcHJpc2UuIEVuIGVmZmV0IHZvdHJlIHNhdGlzZmFjdGlvbiBlc3QgZXNzZW50aWVsbGUuIEFmaW4gZCdhcHBvcnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzIHLDqXBvbnNlcyDDoCBjaGFjdW5lIGRlcyBkZW1hbmRlcyBub3VzIMOpdm9sdW9ucyBlbiBwZXJtYW5lbmNlIGV0IHByb3Bvc29ucyBkZXMgc29sdXRpb25zIGlubm92YW50ZXMgYWZpbiBkZSBmYWlyZSBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcXVlIHByb2pldCB1bmUgcsOpYWxpdMOpLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5UaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJbmRleCA9PT0gMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0nZHJvcGRvd24nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9wcmVtZW50IEVuZ2Fnw6lcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29udGVudCBhY3RpdmU9e2FjdGl2ZUluZGV4ID09PSAxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIHN0eWxlPXtzaGFkb3d9PiA8SW1hZ2Ugc3JjPVwiaW1nL2VuZ2FnZS5qcGdcIiBzcGFjZWQ9XCJsZWZ0XCIgc2l6ZT1cInNtYWxsXCIgLz5QbGFuIGTigJlhY3Rpb25zIGRlIFJlc3BvbnNhYmlsaXTDqSBTb2Npw6l0YWxlIEVudHJlcHJpc2U8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZXNtb2tlXCIgfX0+RGVwdWlzIDIwMTgsIFLDqW5vdmF0aW9uIFRlcnRpYWlyZSBTZXJ2aWNlIHPigJllc3QgaW5zY3JpdCBkYW5zIHVuZSBkw6ltYXJjaGUgZOKAmWVudHJlcHJpc2UgcmVzcG9uc2FibGUsIHNvdWNpZXVzZSBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbOKAmWVudmlyb25uZW1lbnQsIGRlIGzigJnDqWNvbG9naWUgZXQgZGUgc29uIG1pbGlldSDDqWNvbm9taXF1ZS4gRW4gMjAyMSBub3VzIGNvbmZpcm1vbnMgbm90cmUgdm9sb250w6kgZW4geSBpbnTDqWdyYW50IGzigJllbnNlbWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGUgbm9zIMOpcXVpcGVzLCBlbiBkw6l2ZWxvcHBhbnQgZGVzIGFjdGlvbnMgcmVzcG9uc2FibGVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm91cyBub3VzIGVuZ2FnZW9ucyBkYW5zIHVuZSBkw6ltYXJjaGUgdmlzYW50IMOgIGludMOpZ3JlciBkZXMgZW5qZXV4IGRlIGTDqXZlbG9wcGVtZW50IGR1cmFibGUsIMOgIG1veWVuIGV0IGxvbmcgdGVybWUsIGV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZSBmb3VybmlyIHVuIGNhZHJlIGTigJlleGlnZW5jZSDDoCBub3MgaW50ZXJsb2N1dGV1cnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RyZSBSZXNwb25zYWJpbGl0w6kgU29jacOpdGFsZSBFbnRyZXByaXNlIHPigJlpbnNjcml0IGRhbnMgdW5lIGTDqW1hcmNoZSBlbiDDqXZvbHV0aW9uIDo8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+IElubm92ZXIgc3VyIGxlIGxvbmcgdGVybWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlc3BvbnNhYmlsaXTDqSBkYW5zIGxlIGRvbWFpbmUgw6ljb25vbWlxdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdXMgc291aGFpdG9ucyB1bmUgcsOpZHVjdGlvbiBkZSBub3RyZSBlbXByZWludGUgZW52aXJvbm5lbWVudGFsZSwgdW5lIHBvbGl0aXF1ZSBk4oCZYXBwcm92aXNpb25uZW1lbnQgZHVyYWJsZSBldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2FibGUgZGVzIG1hdGnDqHJlcyBwcmVtacOocmVzIHV0aWxpc8OpZXMsIGzigJnDqWNvY29uY2VwdGlvbiBkZXMgZW1iYWxsYWdlcyBkZSBub3MgbWF0w6lyaWF1eCwgdW4gZW5nYWdlbWVudCBwb3VyIGxhIOKAnHrDqXJvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkw6lmb3Jlc3RhdGlvbuKAnS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNlbnNpYmlsaXNhdGlvbiBhdXByw6hzIGRlcyBzYWxhcmnDqXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlc3BvbnNhYmlsaXTDqSBkYW5zIGxlIGRvbWFpbmUgc29jaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYWlyZSBwYXJ0aWNpcGVyIGxlcyBzYWxhcmnDqXMgc3VyIGxlIHRlcnJhaW4gcG91ciBhdm9pciBkZXMgaWTDqWVzIGTigJlhbcOpbGlvcmF0aW9uIGRhbnMgbGEgZ2VzdGlvbiBkZXMgbWF0w6lyaWF1eDsgZGV2ZW5pclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgw6ljb3Jlc3BvbnNhYmxlcy4gU2Vuc2liaWxpc2VyIGxlcyBjaGVmcyBk4oCZw6lxdWlwZXMgZXQgcmVzcG9uc2FibGVzIGRlIGNoYW50aWVyIHBvdXIgdHJhbnNtZXR0cmUgbGVzIGluZm9ybWF0aW9ucyBhdXByw6hzIGRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgw6lxdWlwZXMgZXQgYWluc2kgZm9ybWVyIGxlcyBjb2xsYWJvcmF0ZXVycy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TdHJhdMOpZ2llcyBkZSByw6lkdWN0aW9uIGRlcyBkw6ljaGV0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzcG9uc2FiaWxpdMOpIGRhbnMgbGUgZG9tYWluZSBlbnZpcm9ubmVtZW50YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdXMgcsOpYWxpc29ucyBkZXMgZmljaGVzIGRlIHRyaSBwb3VyIGxlcyBkw6ljaGV0cyBpbmVydGVzIGV0IGxlcyBkw6ljaGV0cyBub24gZGFuZ2VyZXV4IG5vbiBpbmVydGVzLiBOb3VzIGVudm95b25zIGVuIGNlbnRyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGUgdHJhaXRlbWVudCBsZXMgZMOpY2hldHMgc3DDqWNpZmlxdWVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QW3DqWxpb3JhdGlvbiBkZSBsYSBwZXJmb3JtYW5jZSBlbnZpcm9ubmVtZW50YWxlIGRlIG5vcyBjb25zdHJ1Y3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXNwb25zYWJpbGl0w6kgZGFucyBsZSBkb21haW5lIGVudmlyb25uZW1lbnRhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm91cyBlc3NheW9ucyBkZSBub3VzIGVuZ2FnZXIgZGFucyB1bmUgcG9saXRpcXVlIGVudmlyb25uZW1lbnRhbGUgbG9ycyBkZSBub3MgZGlmZsOpcmVudHMgY2hhbnRpZXJzIGFmaW4gZGUgcsOpcG9uZHJlIGF1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWV1eCBhdXggY29udHJhaW50ZXMgw6ljb25vbWlxdWVzIGV0IMOpY29sb2dpcXVlcyBkZSBub3MgY2xpZW50cy4gTGVzIHByb2R1aXRzIMOpY28gbGFiZWxsaXPDqXMgYWluc2kgcXVlIGxlcyBwcm9kdWl0cyBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0w6lyaWF1eCByZWN5Y2zDqXMgc29udCBmYXZvcmlzw6lzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+R2FyYW50aXIgbGEgcGVyZm9ybWFuY2Ugw6ljb25vbWlxdWUgZGUgbOKAmWVudHJlcHJpc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlc3BvbnNhYmlsaXTDqSBkYW5zIGxlIGRvbWFpbmUgw6ljb25vbWlxdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluc3RhdXJlciBkZXMgcmVsYXRpb25zIGR1cmFibGVzIGF2ZWMgbm9zIHBhcnRlbmFpcmVzIChzb3VzLXRyYWl0YW50cyBldCBmb3Vybmlzc2V1cnMpLiBOb3VzIG5vdXMgZWZmb3LDp29ucyBk4oCZaW5zdGF1cmVyIGV0IGRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcsOpZXIgYXUgbWF4aW11bSBkZXMgcmVsYXRpb25zIGRlIGNvbmZpYW5jZSBkdXJhYmxlcyBhdmVjIGzigJllbnNlbWJsZSBkZSBub3MgY29sbGFib3JhdGV1cnMgZXQgZ2FyYW50aXIgdW5lIG1laWxsZXVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmaWNhY2l0w6kgZGFucyBsYSBnZXN0aW9uIGRlcyBwcm9qZXRzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+IFJlc3BlY3RlciBsZXMgaW1wYWN0cyBlbnZpcm9ubmVtZW50YXV4IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzcG9uc2FiaWxpdMOpIGRhbnMgbGUgZG9tYWluZSBlbnZpcm9ubmVtZW50YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1pc2UgZW4gcGxhY2UgZOKAmXVuZSBzdHJhdMOpZ2llIGRlIGTDqXBsYWNlbWVudHMgZOKAmWVudHJlcHJpc2UuIFVuIHN5c3TDqG1lIGRlIGNvLXZvaXR1cmFnZSBwYXIgY2hlZiBk4oCZw6lxdWlwZSBhIMOpdMOpIG1pcyBlbiBwbGFjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG91ciBzZSByZW5kcmUgc3VyIGNoYXF1ZSBjaGFudGllciBldCBhaW5zaSBsaW1pdGVyIGzigJllbXByZWludGUgY2FyYm9uZS48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDcvIEludGVyYWdpciBhdmVjIGxlcyBhY3RldXJzIHB1YmxpY3MgbG9jYXV4IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzcG9uc2FiaWxpdMOpIGRhbnMgbGUgZG9tYWluZSB0ZXJyaXRvcmlhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFydGljaXBlciDDoCBs4oCZYWN0aXZpdMOpIMOpY29ub21pcXVlIGRlIGxhIHLDqWdpb24sIGF1IGTDqXZlbG9wcGVtZW50IGR1IGRvbWFpbmUgdGVycml0b3JpYWwuIEFjY3VlaWxsaXIgZGVzIHN0YWdpYWlyZXMgZXQgbGV1ciBmYWlyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZMOpY291dnJpciBsZXMgbcOpdGllcnMgZHUgYsOidGltZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+IE9wdGltaXNhdGlvbiBkZSBub3RyZSBmbG90dGUgcHJvZmVzc2lvbm5lbGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzcG9uc2FiaWxpdMOpIGRhbnMgbGUgZG9tYWluZSBlbnZpcm9ubmVtZW50YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3VzIGVudHJldGVub25zIHRvdXMgbm9zIHbDqWhpY3VsZXMgZW4gZ2FyYWdlcyBjZXJ0aWZpw6lzIGV0L291IGxhYmVsbGlzw6lzIGluc2NyaXRzIGRhbnMgdW5lIGTDqW1hcmNoZSBxdWFsaXTDqSBldC9vdVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudmlyb25uZW1lbnRhbGUuIE5vdHJlIGZsb3R0ZSBhY3R1ZWxsZSBlc3QgY29tcG9zw6llIGRlIHbDqWhpY3VsZXMgw6lsZWN0cmlxdWVzIGV0IGh5YnJpZGVzLCBwb3VyIHBhc3NlciBlbiB0b3RhbGl0w6kgZW4gdsOpaGljdWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMOpbGVjdHJpcXVlIMOgIGzigJlob3Jpem9uIDIwMjMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gRmF2b3Jpc2VyIGxlcyBhY2hhdHMgcmVzcG9uc2FibGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzcG9uc2FiaWxpdMOpIGRhbnMgbGUgZG9tYWluZSDDqWNvbm9taXF1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElsIHPigJlhZ2l0IGRlIHByaXZpbMOpZ2llciBsZXMgYWNoYXRzIHJlc3BvbnNhYmxlcyBhdXByw6hzIGRlIGZvdXJuaXNzZXVycyBsYW5jw6lzIGRhbnMgdW5lIG3Dqm1lIGTDqW1hcmNoZTsgZXQgYXVwcsOocyBk4oCZYXJ0aXNhbnMgZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3Vybmlzc2V1cnMgbG9jYXV4LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+IEV0cmUgZmlzY2FsZW1lbnQgcmVzcG9uc2FibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlc3BvbnNhYmlsaXTDqSBkYW5zIGxlIGRvbWFpbmUgZGUgbGEgZ291dmVybmFuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExlIHBhaWVtZW50IGRlcyBpbXDDtHRzIGRlIGZhw6dvbiByZXNwb25zYWJsZSwgdsOpcmlmaWNhdGlvbiBtZW5zdWVsbGUgZGUgdG91dGVzIGxlcyBhdHRlc3RhdGlvbnMgZGUgdmlnaWxhbmNlIMOgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5UaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJbmRleCA9PT0gMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0nZHJvcGRvd24nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEw6l2ZWxvcHBlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db250ZW50IGFjdGl2ZT17YWN0aXZlSW5kZXggPT09IDJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBzdHlsZT17c2hhZG93fT4gPEltYWdlIHNyYz1cImltZy9kZW1hcmNoZS5qcGdcIiBzcGFjZWQ9XCJsZWZ0XCIgc2l6ZT1cInNtYWxsXCIgLz5Ob3RyZSBkw6ltYXJjaGUgZMOpdmVsb3BwZW1lbnQgZHVyYWJsZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlc21va2VcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RyZSBlbnRyZXByaXNlIHPigJllc3Qgb3JpZW50w6llIHZlcnMgZGV1eCBheGVzIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIEFwcHJlbmRyZSDDoCDDqWNvbm9taXNlciBldCDDoCBwYXJ0YWdlciBkZSBtYW5pw6hyZSDDqXF1aXRhYmxlIGxlcyByZXNzb3VyY2VzIGRlIGzigJllbnZpcm9ubmVtZW50IGV0IMOgIHRlbmlyIGNvbXB0ZSBkZXMgZmFjdWx0w6lzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGltaXTDqWVzIGRlIGNlbHVpLWNpIMOgIGFic29yYmVyIGxlcyBkw6ljaGV0cyBldCBsZXMgcG9sbHV0aW9ucy4gVXRpbGlzZXIgYXUgbWF4aW11bSBkZXMgcHJvZHVpdHMgZXQgbWF0w6lyaWF1eCDDqWNvbG9naXF1ZXMgZXQgb3Ugw6BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlIGRlIG1hdGnDqHJlcyByZWN5Y2zDqWVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKGkiBj4oCZZXN0IGxhIGRpbWVuc2lvbiBlbnZpcm9ubmVtZW50YWxlIGR1IGTDqXZlbG9wcGVtZW50IGR1cmFibGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBHYXJhbnRpciB1bmUgY3JvaXNzYW5jZSDDqWNvbm9taXF1ZSBjcsOpYXRyaWNlIGTigJllbXBsb2kgZXQgZOKAmcOpcXVpdMOpIHNvY2lhbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDihpIgY+KAmWVzdCBs4oCZYXNwZWN0IMOpY29ub21pcXVlIGV0IHNvY2lhbCBkdSBkw6l2ZWxvcHBlbWVudCBkdXJhYmxlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEpIEJpbGFuIGNhcmJvbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3VzIGNhbGN1bG9ucyBjaGFxdWUgYW5uw6llIGxlIGJpbGFuIGNhcmJvbmUgZGUgbm90cmUgZW50cmVwcmlzZSBhZmluIGRlIGNvbm5hw650cmUgZmluZW1lbnQgbm9zIHNvdXJjZXMgZOKAmcOpbWlzc2lvbnMgZGVzIGdhelxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmJvbmlxdWVzIGFmaW4gZGUgbGVzIHLDqWR1aXJlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdHJlIG9iamVjdGlmIGVzdCBk4oCZw6p0cmUgdW5lIGVudHJlcHJpc2UgwqsgesOpcm8gY2FyYm9uZSDCuyDDoCBmaW4gMjAyNCwgcG91ciBjZWxhIG5vdXMgYXZvbnMgZW5nYWfDqSB1biBwbGFuIHBsdXJpYW5udWVsIGVuIHRyb2lzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzIDo8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiBMYSBjcm9pc3NhbmNlIGRlIG5vdHJlIGFjdGl2aXTDqSBuZSBkb2l0IHBhcyBzZSB0cmFkdWlyZSBwYXIgbGEgY3JvaXNzYW5jZSBkZXMgw6ltaXNzaW9ucyBkZSBnYXogw6BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmZXQgZGUgc2VycmUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdXMgdm91bG9ucyBkaW1pbnVlciBub3Mgw6ltaXNzaW9ucyBkZSBDTzIgcGFyIGRlcyBhY3Rpb25zIGNvbmNyw6h0ZXMgOjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIO+CtyBBY2hhdCBkZSB2w6loaWN1bGVzIMKrIHZlcnQgwrs8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg74K3IEFtw6lsaW9yZXIgZHVyYWJsZW1lbnQgbOKAmWlzb2xhdGlvbiBkZSBub3MgYsOidGltZW50czxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDvgrcgRGltaW51ZXIgbm9zIGNvbnNvbW1hdGlvbnMgw6luZXJnw6l0aXF1ZXMgZXQgZGUgY29uc29tbWFibGVzPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIO+CtyBEb25uZXIgbGEgcHLDqWbDqXJlbmNlIGF1eCBmb3Vybmlzc2V1cnMgbG9jYXV4IGV0IGF5YW50IHVuZSB2cmFpZSBkw6ltYXJjaGUgZW52aXJvbm5lbWVudGFsZTxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDvgrcgQW3DqWxpb3JlciBub3MgZmx1eCBhdmVjIGxlcyBmb3Vybmlzc2V1cnMgZXQgbm9zIGZsdXggY2xpZW50czxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDvgrcgSW5ub3ZlciBjb25zdGFtbWVudCBldCBpbnTDqWdyZXIgZGUgbm91dmVsbGVzIHRlY2hub2xvZ2llcyBkaXRlcyDCqyBwcm9wcmVzIMK7PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBlbnNlciBs4oCZZW5zZW1ibGUgZGUgbm9zIMOpbWlzc2lvbnMgcmVzdGFudGVzIGRlIENPMiBwYXIgbGEgcGxhbnRhdGlvbiBk4oCZYXJicmVzIGRhbnMgbGVzIHpvbmVzIGR1IG1vbmRlIG7DqWNlc3NpdGFudCB1blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWJvaXNlbWVudCAoQWZyaXF1ZSwgQXNpZSkgcGFyIGxlIGJpYWlzIGRlIGRvbnMgw6AgZGVzIGFzc29jaWF0aW9ucy48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5HZXN0aW9uIGRlcyBkw6ljaGV0cyA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdXMgcHJpdmlsw6lnaW9ucyBsYSBjb2xsYWJvcmF0aW9uIGF2ZWMgbGVzIGZvdXJuaXNzZXVycyBheWFudCBlbmdhZ8OpcyBkZXMgZMOpbWFyY2hlcyBlbnZpcm9ubmVtZW50YWxlcyAocHJvZHVjdGlvbiBkdVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJyZSwgdXRpbGlzYXRpb24gZGUgUFZDIHNhbnMgcGxvbWIsIG1hdMOpcmlhdXggZGUgY29uc3RydWN0aW9uIGlzc3VzIGR1IHJlY3ljbGFnZSwgYm9pcyBpc3N1cyBk4oCZdW5lIGdlc3Rpb24gZHVyYWJsZSBkZXMgZm9yw6p0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90cmUgc29jacOpdMOpIGEgbWlzIGVuIHBsYWNlIGxlIGNpcmN1aXQgZOKAmcOpdmFjdWF0aW9uIGRlcyBkw6ljaGV0cyBzdWl2YW50cyA6PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIO+CtyBUcmHDp2FiaWxpdMOpIGRlcyBkw6ljaGV0czxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDvgrcgUmVjeWNsYWdlIGRlcyBkw6ljaGV0cyBzcMOpY2lmaXF1ZXMgZGFucyBkZXMgY2VudHJlcyBkZSB0cmFpdGVtZW50LjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDvgrcgUmVjeWNsYWdlIGRlcyBwcm9kdWl0cyBkYW5zIGxlcyBmaWxpw6hyZXMgZGUgdmFsb3Jpc2F0aW9uPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+IENvbmNpbGllciBsZSBwcm9ncsOocyDDqWNvbm9taXF1ZSBldCBzb2NpYWwgYXZlYyBsZSByZXNwZWN0IGRlIGzigJllbnZpcm9ubmVtZW50IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9zIGNvbGxhYm9yYXRldXJzIHNvbnQgc2Vuc2liaWxpc8OpcyBzdXIgbGEgbsOpY2Vzc2l0w6kgaW1ww6lyaWV1c2UgZHUgZMOpdmVsb3BwZW1lbnQgZHVyYWJsZSDDoCB0cmF2ZXJzIHVuIGNlcnRhaW4gbm9tYnJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGTigJlhY3Rpb25zIGV0IGRlIGZvcm1hdGlvbnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdXMgbWV0dG9ucyB0b3V0IHBhcnRpY3VsacOocmVtZW50IGzigJlhY2NlbnQgc3VyIGzigJlpbnTDqWdyYXRpb24gZXQgbGEgZm9ybWF0aW9uIGRlIG5vdHJlIHBlcnNvbm5lbC4gQ2V0IGF4ZSBub3VzIHBlcm1ldCBzYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWTDqWxpc2F0aW9uIGV0IHNhIG1vdGl2YXRpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFpbnNpIG1vaW5zIGTigJlhYnNlbnTDqWlzbWUsIG1vaW5zIGRlIHR1cm4tb3ZlciBldCBwbHVzIGRlIHByb2Zlc3Npb25uYWxpc21lIHNvbnQgbGVzIGdhcmFudGllcyBk4oCZdW5lIGNvbnRpbnVpdMOpIGV0IGTigJl1bmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgw6l2b2x1dGlvbiBkZSBsYSBxdWFsaXTDqSBkZSBub3Mgc2VydmljZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSW5kZXggPT09IDN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J2Ryb3Bkb3duJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGl2ZXJzaXTDqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db250ZW50IGFjdGl2ZT17YWN0aXZlSW5kZXggPT09IDN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBzdHlsZT17c2hhZG93fT48SW1hZ2Ugc3JjPVwiaW1nL2RpdmVyc2l0ZS5qcGdcIiBzcGFjZWQ9XCJsZWZ0XCIgc2l6ZT1cInNtYWxsXCIgLz5MYSBkaXZlcnNpdMOpPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVzbW9rZVwiIH19PiAgUmVmbMOpdGVyIGxhIGRpdmVyc2l0w6kgZGUgbGEgc29jacOpdMOpLCBj4oCZZXN0IGF2YW50IHRvdXQgcHJvbW91dm9pciBsYSBkaXZlcnNpdMOpIGV0IGdhcmFudGlyIGzigJnDqWdhbGl0w6kgZGVzIGNoYW5jZXMgw6AgdG91cyBsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pdmVhdXggZGUgbOKAmW9yZ2FuaXNhdGlvbi48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU+KAmWVucmljaGlyIGRlIGxhIGRpdmVyc2l0w6kgZGVzIEhvbW1lcyBldCBkZXMgRmVtbWVzLCBj4oCZZXN0IHMg4oCZYXBwdXllciBzdXIgbGVzIG1laWxsZXVyZXMgY29tcMOpdGVuY2VzIHNhbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1Y3VuZSBkaXN0aW5jdGlvbiwgY2UgcXVpIGVzdCBs4oCZdW5lIGRlcyBjbMOpcyByw6lwb25kYW50IMOgIG5vcyBlbmpldXggYWN0dWVscyBldCDDoCB2ZW5pci4gRmFpcmUgZW4gc29ydGUgcXVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFjdW4gZCDigJllbnRyZSBub3VzIHB1aXNzZSBzZSBzZW50aXIgYmllbiDDoCBzYSBwbGFjZSBlc3Qgw6lnYWxlbWVudCB1biBlbmpldSAuIEPigJllc3QgcG91cnF1b2ksIFLDqW5vdmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJ0aWFpcmUgU2VydmljZSBzIOKAmWVzdCBlbmdhZ8OpZSBkYW5zIHVuZSBkw6ltYXJjaGUgZGUgcHJvbW90aW9uIGRlIGxhIGRpdmVyc2l0w6kuPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdHJlIGFtYml0aW9uIDogPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5yZXNwZWN0ZXIgZXQgcHJvbW91dm9pciBsYSBtaXhpdMOpLCBsYSBkaXZlcnNpdMOpIGV0IGzigJnDqWdhbGl0w6kgZGVzIGNoYW5jZXMgOjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFyY2UgcXVlIGxhIGRpdmVyc2l0w6kgZXN0IHVuIGZhY3RldXIgZGUgcGVyZm9ybWFuY2UgZXQgZGUgZMOpdmVsb3BwZW1lbnQgw6AgbGEgZm9pcyBwZXJzb25uZWwgZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aWYgLCBSw6lub3ZhdGlvbiB0ZXJ0aWFpcmUgU2VydmljZSBzIOKAmWVuZ2FnZSBlbiBmYXZldXIgZGUgbGEgZGl2ZXJzaXTDqSwgZGUgbOKAmcOpZ2FsaXTDqSBkZXMgY2hhbmNlcyBldCBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhIGx1dHRlIGNvbnRyZSB0b3V0ZSBmb3JtZSBkZSBkaXNjcmltaW5hdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GYXZvcmlzZXIgbGEgdHJhbnN2ZXJzYWxpdMOpIGRlcyBtw6l0aWVycyA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFLDqW5vdmF0aW9uIFRlcnRpYWlyZSBTZXJ2aWNlIGZhdm9yaXNlIGxlcyBwYXNzZXJlbGxlcyBlbnRyZSBsZXMgZGlmZsOpcmVudHMgbcOpdGllcnMuIENvbmR1Y3RldXIgZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhdmF1eCwgY29tcGFnbm9u4oCmIENoYWN1biBkZSBub3MgY29sbGFib3JhdGV1cnMgcG91cnJhIMOpdm9sdWVyICwgc+KAmWlsIGxlIHNvdWhhaXRlICwgdmVycyBsZXMgZGlmZsOpcmVudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbcOpdGllcnMgZGUgbm90cmUgYWN0aXZpdMOpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPi48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Qcm9tb3Rpb24gw6lxdWl0YWJsZSBldCBnZXN0aW9uIGRlcyB0YWxlbnRzIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90cmUgcG9saXRpcXVlIGluZGl2aWR1YWxpc8OpZSBkZSBkw6l2ZWxvcHBlbWVudCBkZXMgY29tcMOpdGVuY2VzIHPigJlpbnNjcml0IGRhbnMgbGEgZMOpbWFyY2hlIGRlIHByb2dyw6hzIHNvY2lhbCBkZSBub3RyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyZXByaXNlLiBQYXJjZSBxdWUgY2hhcXVlIGNvbGxhYm9yYXRldXIgZXN0IHVuaXF1ZSwgbm91cyDDqWxhYm9yb25zIGVuc2VtYmxlIHNvbiBwYXJjb3VycyBwcm9mZXNzaW9ubmVsIGV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGzigJlhY2NvbXBhZ25vbnMsIGFmaW4gcXXigJlpbCBzZSByw6lhbGlzZSBhdSBzZWluIGRlIG5vdHJlIGVudGl0w6ksIHF1ZWxsZSBxdWUgc29pdCBzZXMgb3JpZ2luZXMgaHVtYWluZXMgZXQgc29jaWFsZXMuIE5vdXMgc29tbWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnN1YWTDqXMgcXVlIGxhIGR5bmFtaXF1ZSBk4oCZw6lxdWlwZSBwYXNzZSBwYXIgbGEgdmFsb3Jpc2F0aW9uIGRlcyBjb21ww6l0ZW5jZXMgaW5kaXZpZHVlbGxlcy4gUGxhbiBkZSBmb3JtYXRpb24gcGVyc29ubmFsaXPDqSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJpZWZpbmcgbWFuYWfDqXJpYWwsIMOpY291dGUsIG5vdXMgbWV0dG9ucyB0b3V0IGVuIG9ldXZyZSBwb3VyIHF1ZSBjaGFjdW4gZGUgbm9zIHRhbGVudHMgc+KAmcOpcGFub3Vpc3NlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vcyBlbmdhZ2VtZW50czxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TZW5zaWJpbGlzZXIgbOKAmWVuc2VtYmxlIGRlcyBjb2xsYWJvcmF0ZXVycyBldCBvZmZyaXIgw6AgY2hhY3VuIHVuZSDDqWdhbGl0w6kgZGUgZHJvaXQgZXQgZGUgdHJhaXRlbWVudC4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4gRMOpdmVsb3BwZXIgbGEgbWl4aXTDqSBkYW5zIHRvdXMgbGVzIG3DqXRpZXJzLCDDoCBjaGFxdWUgbml2ZWF1IGRlIHJlc3BvbnNhYmlsaXTDqS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Rm9ybWVyIGV0IGFjY29tcGFnbmVyIGxlcyBtYW5hZ2VycyBpbXBsaXF1w6lzIGRhbnMgbGUgcGFyY291cnMgcHJvZmVzc2lvbm5lbCBkZSBub3MgY29sbGFib3JhdGV1cnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+R2FyYW50aXIgbGEgY29sbMOpZ2lhbGl0w6kgZGVzIGTDqWNpc2lvbnMgcHJpc2VzIHBvdXIgbGVzIHJlY3J1dGVtZW50cyBldCBsYSBnZXN0aW9uIGRlIGNhcnJpw6hyZSBhZmluIGTigJlhc3N1cmVyIHVuZSDDqWdhbGl0w6kgZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhaXRlbWVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UGVybWV0dHJlIGzigJlleHByZXNzaW9uIGRlIHRvdXRlIHNpdHVhdGlvbiBkZSBkaXNjcmltaW5hdGlvbiBvdSBkZSBoYXJjw6hsZW1lbnQgdmlhIHVuZSBjZWxsdWxlIGluZMOpcGVuZGFudGUgZOKAmcOpY291dGUgZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291dGVuaXIgdG91dGUgcGVyc29ubmUgY29uZnJvbnTDqWUgw6AgY2V0dGUgc2l0dWF0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Bc3NvY2llciBub3MgZm91cm5pc3NldXJzIGV0IHNvdXMtdHJhaXRhbnRzIMOgIGxhIGTDqW1hcmNoZSBldCBub3VzIGFzc3VyZXIgZGUgbGV1ciBhZGjDqXNpb24gbm90YW1tZW50IGF1IG1vbWVudCBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXVyIHPDqWxlY3Rpb24gZXQgZGUgbGV1ciDDqXZhbHVhdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RMOpdmVsb3BwZXIgZGVzIHBhcnRlbmFyaWF0cyBhdmVjIGxlIHNlY3RldXIgYWRhcHTDqSBldCBkZSBs4oCZaW5zZXJ0aW9uIGV0IHNvdXRlbmlyIGzigJllbmdhZ2VtZW50IHNvbGlkYWlyZSBkZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFib3JhdGV1cnMgcG91ciByZW5mb3JjZXIgbGVzIGxpZW5zIGVudHJlIGzigJllbnRyZXByaXNlIGV0IGxlIG1vbmRlIGFzc29jaWF0aWYuLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBHcmVhdGhlck5ldHRveWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZWRpYSBncmVhdGVyVGhhbj0nbW9iaWxlJz5cclxuICAgICAgICAgICAgICAgIDxJbmRleE5ldHRveWFnZSAvPlxyXG4gICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTW9iaWxlTmV0dG95YWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1lZGlhIGJldHdlZW49e1tcIm1vYmlsZVwiLCBcInRhYmxldFwiXX0+XHJcbiAgICAgICAgICAgICAgICA8SW5kZXhOZXR0b3lhZ2UgbW9iaWxlIC8+XHJcbiAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXR0b3lhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPE1lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmVhdGhlck5ldHRveWFnZSA+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9HcmVhdGhlck5ldHRveWFnZT5cclxuICAgICAgICAgICAgICAgICAgICA8TW9iaWxlTmV0dG95YWdlPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvTW9iaWxlTmV0dG95YWdlPlxyXG4gICAgICAgICAgICAgICAgPC9NZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcnRzeS9mcmVzbmVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtYWlsanMtY29tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hbmltYXRlZC1jc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=