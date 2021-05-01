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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/BallonSolaire.js");
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

/***/ "./pages/BallonSolaire.js":
/*!********************************!*\
  !*** ./pages/BallonSolaire.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BallonSolaire; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @artsy/fresnel */ "@artsy/fresnel");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\famil\\Desktop\\emile programmation\\site_emile\\renovation\\pages\\BallonSolaire.js";




const {
  MediaContextProvider,
  Media
} = Object(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_4__["createMedia"])({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
    ecran: 1192
  }
});

class IndexBallonSolaire extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      mobile
    } = this.props;
    const shadow = {
      color: 'lightgreen',
      textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
      textAlign: "center",
      fontFamily: "verdana",
      fontSize: 25
    };
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        style: {
          textAlign: "left",
          letterSpacing: 3,
          paddingTop: 30
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
          style: shadow,
          children: "Ballon solaire Qualisol"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("center", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            style: {
              fontFamily: "Comic Sans MS"
            },
            children: "QualiSOL CESI, QualiSOL Combi, QualiSOL Collectif "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 124
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("center", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
            src: "img/photovoltaique/solaire hybride.jpg",
            size: "big"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
          secondary: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("u", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  children: "Qualification Qualisol CESI : pour les chauffe-eau solaires individuels,"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 39
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 28
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
            children: "d\u2019une surface de capteurs inf\xE9rieure ou \xE9gale \xE0 20 m2, et destin\xE9s \xE0 la production d\u2019eau chaude sanitaire dans l\u2019habitat individuel."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 64
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 69
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("u", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  children: "Qualification Qualisol Combi : pour les chauffe-eau solaires combin\xE9s,"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 39
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 28
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
            children: "Qualification Qualisol Combi : pour les installations de syst\xE8mes solaire combin\xE9s, d\u2019une surface de capteurs inf\xE9rieure ou \xE9gale \xE0 20 m2, destin\xE9s \xE0 l\u2019habitat individuel."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 99
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 104
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("u", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  children: "Qualification Qualisol Collectif : pour les chauffe-eau solaires combin\xE9s,"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 39
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 28
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
            children: "Qualification Qualisol Collectif : pour l\u2019installation de chauffe-eau solaires collectifs, d\u2019une surface de capteurs inf\xE9rieure ou \xE9gale \xE0 20 m2, destin\xE9s \xE0 l'habitat collectif."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this);
  }

}

class GreatherBallonSolaire extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
      greaterThan: "mobile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IndexBallonSolaire, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, this);
  }

}

class MobileBallonSolaire extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
      between: ["mobile", "tablet"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IndexBallonSolaire, {
        mobile: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, this);
  }

}

class BallonSolaire extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MediaContextProvider, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GreatherBallonSolaire, {
          children: this.props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MobileBallonSolaire, {
          children: this.props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9CYWxsb25Tb2xhaXJlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvTW9iaWxlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcnRzeS9mcmVzbmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZW1haWxqcy1jb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hbmltYXRlZC1jc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIkhlYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImVtYWlsanMiLCJNeUxheW91dCIsInN0YXRlIiwiY2hpbGRyZW4iLCJNZWRpYUNvbnRleHRQcm92aWRlciIsIk1lZGlhIiwiY3JlYXRlTWVkaWEiLCJicmVha3BvaW50cyIsIm1vYmlsZSIsInRhYmxldCIsImNvbXB1dGVyIiwiZWNyYW4iLCJJbmRleEJhbGxvblNvbGFpcmUiLCJzaGFkb3ciLCJjb2xvciIsInRleHRTaGFkb3ciLCJ0ZXh0QWxpZ24iLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwicGFkZGluZ1RvcCIsIkdyZWF0aGVyQmFsbG9uU29sYWlyZSIsIk1vYmlsZUJhbGxvblNvbGFpcmUiLCJCYWxsb25Tb2xhaXJlIiwic2hhZG93MiIsImh0bWwiLCJEZXNrdG9wQ29udGFpbmVyIiwiYWN0aXZlSXRlbSIsImUiLCJuYW1lIiwic2V0U3RhdGUiLCJmaXhlZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJzaG93Rml4ZWRNZW51IiwiaGlkZUZpeGVkTWVudSIsImJhY2tncm91bmRDb2xvciIsImZvbnRXZWlnaHQiLCJoYW5kbGVJdGVtQ2xpY2siLCJNb2JpbGVDb250YWluZXIiLCJzaWRlYmFyT3BlbmVkIiwiU2lkZWJhciIsInB1c2hhYmxlIiwiTWVudSIsImhhbmRsZVNpZGViYXJIaWRlIiwibWluSGVpZ2h0IiwicGFkZGluZyIsImhhbmRsZVRvZ2dsZSIsIk15TWVudSIsIk1vYmlsZSIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsInRleHREZWNvcmF0aW9uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7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QUFRO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSxxRUFBQyx3REFBRDtBQUNJLFlBQUUsRUFBQyxJQURQO0FBRUksaUJBQU8sRUFBQyxpQ0FGWjtBQUdJLGVBQUssRUFBQyxPQUhWO0FBSUksZUFBSyxFQUFFO0FBQ0hvQixvQkFBUSxFQUFFVixNQUFNLEdBQUcsS0FBSCxHQUFXLEtBRHhCO0FBRUg4QixzQkFBVSxFQUFFLFFBRlQ7QUFHSGEsd0JBQVksRUFBRSxDQUhYO0FBSUhDLHFCQUFTLEVBQUU1QyxNQUFNLEdBQUcsR0FBSCxHQUFTLEtBSnZCO0FBS0g2QywwQkFBYyxFQUFFLFdBTGI7QUFNSHJDLHFCQUFTLEVBQUU7QUFOUjtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFlSSxxRUFBQyx3REFBRDtBQUNJLFlBQUUsRUFBQyxJQURQO0FBRUksaUJBQU8sRUFBQyxvQ0FGWjtBQUdJLGtCQUFRLE1BSFo7QUFJSSxlQUFLLEVBQUU7QUFDSEUsb0JBQVEsRUFBRVYsTUFBTSxHQUFHLE9BQUgsR0FBYSxLQUQxQjtBQUVIOEIsc0JBQVUsRUFBRSxRQUZUO0FBR0hjLHFCQUFTLEVBQUU1QyxNQUFNLEdBQUcsT0FBSCxHQUFhLE9BSDNCO0FBSUhRLHFCQUFTLEVBQUUsUUFKUjtBQUtIRixpQkFBSyxFQUFFO0FBTEo7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQWlDSDs7QUF6QytDLEM7Ozs7Ozs7Ozs7O0FDTHBELDJDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL0JhbGxvblNvbGFpcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL0JhbGxvblNvbGFpcmUuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNeU1lbnUgZnJvbSBcIi4uL3BhZ2VzL01lbnUuanNcIlxyXG5pbXBvcnQgKiBhcyBlbWFpbGpzIGZyb20gJ2VtYWlsanMtY29tJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+cmVub3ZhdGlvbjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cInJlbm92YXRpb24gdGVydGlhaXJlIHNlcnZpY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiZW1pbGUgY2hlbW1hbWFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiQ29udGVudC1UeXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cInBvbXBlIGEgY2hhbGV1cixwbG9tYmVyaWUsZWxlY3RyaWNpdGUsc2FsbGUgZGUgYmFpblwiIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBhc3luYyByZWw9XCJzdHlsZXNoZWV0XCIgbGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi4wLjMvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNzcy9tZW51LmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbmltYXRlLmNzcy8zLjUuMi9hbmltYXRlLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vZW1haWxqcy1jb21AMi9kaXN0L2VtYWlsLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL21lbnUuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbGpzLmluaXQoXCJZT1VSX1VTRVJfSURcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDwvaGVhZD5cclxuICAgICAgICAgICAgICAgIDxNeU1lbnUgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJbWFnZSwgQ29udGFpbmVyLCBHcmlkLCBTZWdtZW50IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXRcIlxyXG5pbXBvcnQgeyBjcmVhdGVNZWRpYSB9IGZyb20gJ0BhcnRzeS9mcmVzbmVsJ1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgeyBNZWRpYUNvbnRleHRQcm92aWRlciwgTWVkaWEgfSA9IGNyZWF0ZU1lZGlhKHtcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgbW9iaWxlOiAwLFxyXG4gICAgICAgIHRhYmxldDogNzY4LFxyXG4gICAgICAgIGNvbXB1dGVyOiAxMDI0LFxyXG4gICAgICAgIGVjcmFuOiAxMTkyXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuIGNsYXNzIEluZGV4QmFsbG9uU29sYWlyZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbW9iaWxlIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3Qgc2hhZG93ID1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnbGlnaHRncmVlbicsXHJcbiAgICAgICAgICAgIHRleHRTaGFkb3c6ICctMnB4IDAgYmxhY2ssIDAgMnB4IGJsYWNrLCAycHggMCBibGFjaywgMCAtMnB4IGJsYWNrJyxcclxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcInZlcmRhbmFcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDI1XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiLCBsZXR0ZXJTcGFjaW5nOiAzLCBwYWRkaW5nVG9wOiAzMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCBzdHlsZT17c2hhZG93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQmFsbG9uIHNvbGFpcmUgUXVhbGlzb2xcclxuICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiIH19PlF1YWxpU09MIENFU0ksIFF1YWxpU09MIENvbWJpLCBRdWFsaVNPTCBDb2xsZWN0aWYgPC9oMj48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Y2VudGVyID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9waG90b3ZvbHRhaXF1ZS9zb2xhaXJlIGh5YnJpZGUuanBnXCIgc2l6ZT1cImJpZ1wiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvY2VudGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IHNlY29uZGFyeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz48dT48aDI+UXVhbGlmaWNhdGlvbiBRdWFsaXNvbCBDRVNJIDogcG91ciBsZXMgY2hhdWZmZS1lYXUgc29sYWlyZXMgaW5kaXZpZHVlbHMsPC9oMj48L3U+PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGTigJl1bmUgc3VyZmFjZSBkZSBjYXB0ZXVycyBpbmbDqXJpZXVyZSBvdSDDqWdhbGUgw6AgMjAgbTIsIGV0IGRlc3RpbsOpcyDDoCBsYSBwcm9kdWN0aW9uIGTigJllYXUgY2hhdWRlIHNhbml0YWlyZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5zIGzigJloYWJpdGF0IGluZGl2aWR1ZWwuPC9lbT48YnIvPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+PHU+PGgyPlF1YWxpZmljYXRpb24gUXVhbGlzb2wgQ29tYmkgOiBwb3VyIGxlcyBjaGF1ZmZlLWVhdSBzb2xhaXJlcyBjb21iaW7DqXMsPC9oMj48L3U+PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1YWxpZmljYXRpb24gUXVhbGlzb2wgQ29tYmkgOiBwb3VyIGxlcyBpbnN0YWxsYXRpb25zIGRlIHN5c3TDqG1lcyBzb2xhaXJlIGNvbWJpbsOpcywgZOKAmXVuZSBzdXJmYWNlIGRlIGNhcHRldXJzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZsOpcmlldXJlIG91IMOpZ2FsZSDDoCAyMCBtMiwgZGVzdGluw6lzIMOgIGzigJloYWJpdGF0IGluZGl2aWR1ZWwuPC9lbT48YnIvPjxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPjx1PjxoMj5RdWFsaWZpY2F0aW9uIFF1YWxpc29sIENvbGxlY3RpZiA6IHBvdXIgbGVzIGNoYXVmZmUtZWF1IHNvbGFpcmVzIGNvbWJpbsOpcyw8L2gyPjwvdT48L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWFsaWZpY2F0aW9uIFF1YWxpc29sIENvbGxlY3RpZiA6IHBvdXIgbOKAmWluc3RhbGxhdGlvbiBkZSBjaGF1ZmZlLWVhdSBzb2xhaXJlcyBjb2xsZWN0aWZzLCBk4oCZdW5lIHN1cmZhY2UgZGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGV1cnMgaW5mw6lyaWV1cmUgb3Ugw6lnYWxlIMOgIDIwIG0yLCBkZXN0aW7DqXMgw6AgbCdoYWJpdGF0IGNvbGxlY3RpZi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEdyZWF0aGVyQmFsbG9uU29sYWlyZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZWRpYSBncmVhdGVyVGhhbj0nbW9iaWxlJz5cclxuICAgICAgICAgICAgICAgIDxJbmRleEJhbGxvblNvbGFpcmUgLz5cclxuICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE1vYmlsZUJhbGxvblNvbGFpcmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVkaWEgYmV0d2Vlbj17W1wibW9iaWxlXCIsIFwidGFibGV0XCJdfT5cclxuICAgICAgICAgICAgICAgIDxJbmRleEJhbGxvblNvbGFpcmUgbW9iaWxlIC8+XHJcbiAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsb25Tb2xhaXJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxNZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JlYXRoZXJCYWxsb25Tb2xhaXJlID57dGhpcy5wcm9wcy5jaGlsZHJlbn08L0dyZWF0aGVyQmFsbG9uU29sYWlyZSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vYmlsZUJhbGxvblNvbGFpcmU+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9Nb2JpbGVCYWxsb25Tb2xhaXJlPlxyXG4gICAgICAgICAgICAgICAgPC9NZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tICdAYXJ0c3kvZnJlc25lbCdcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBJY29uLCBJbWFnZSwgTWVudSwgU2VnbWVudCwgU2lkZWJhciwgVmlzaWJpbGl0eSxEcm9wZG93biB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTW9iaWxlIGZyb20gXCIuLi9wYWdlcy9Nb2JpbGUuanNcIlxyXG5cclxuY29uc3QgeyBNZWRpYUNvbnRleHRQcm92aWRlciwgTWVkaWEgfSA9IGNyZWF0ZU1lZGlhKHtcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgbW9iaWxlOiAwLFxyXG4gICAgICAgIHRhYmxldDogOTAwLFxyXG4gICAgICAgIGNvbXB1dGVyOiAxMDI0LFxyXG4gICAgICAgIGVjcmFuOiAxMTkyXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBzaGFkb3cgPVxyXG57XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHRleHRTaGFkb3c6ICctMnB4IDAgYmxhY2ssIDAgMnB4IGJsYWNrLCAycHggMCBibGFjaywgMCAtMnB4IGJsYWNrJyxcclxuICAgIGZvbnRGYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLFxyXG4gICAgZm9udFNpemU6IDE3XHJcbn1cclxuXHJcbmNvbnN0IHNoYWRvdzIgPVxyXG57XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHRleHRTaGFkb3c6ICcycHggMnB4IDRweCAjMDAwMDAwJyxcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGZvbnRGYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLFxyXG4gICAgZm9udFNpemU6IDExXHJcbn1cclxuXHJcbmNvbnN0IGh0bWwgPVwiXCJcclxuXHJcblxyXG5jbGFzcyBEZXNrdG9wQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHsgYWN0aXZlSXRlbTogJycgfVxyXG5cclxuICAgIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSlcclxuICAgIGhpZGVGaXhlZE1lbnUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZml4ZWQ6IGZhbHNlIH0pXHJcbiAgICBzaG93Rml4ZWRNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZpeGVkOiB0cnVlIH0pXHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgYWN0aXZlSXRlbSB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIGNvbnN0IHtjb2xvcn09dGhpcy5wcm9wc1xyXG5cclxuICAgICAgICBEZXNrdG9wQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICAgICAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZCA+XHJcbiAgICAgICAgICAgICAgICA8TWVkaWEgZ3JlYXRlclRoYW49J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFZpc2liaWxpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25jZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQm90dG9tUGFzc2VkPXt0aGlzLnNob3dGaXhlZE1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQm90dG9tUGFzc2VkUmV2ZXJzZT17dGhpcy5oaWRlRml4ZWRNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgdmVydGljYWwgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J2xpZ2h0Z3JleSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlc21va2UnIH19IHN0YWNrYWJsZSBmbHVpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPjxJbWFnZSBzcmM9J2ltZy9lY29sby9ydHMucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz0nYSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0ndGlueSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0nLydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gaW52ZXJ0ZWQgc3R5bGU9e3NoYWRvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nUsOpbm92YXRpb24gVGVydGlhaXJlIFNlcnZpY2UnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gcG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J05ldHRveWFnZScgaHJlZj17XCIvTmV0dG95YWdlXCIraHRtbH0gc3R5bGU9e3sgZm9udFdlaWdodDpcImJvbGRcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ05ldHRveWFnZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9uZXcxLnBuZ1wiIHNpemU9XCJtaW5pXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXR0b3lhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGl0ZW0gdGV4dD0nUi5HLkUnc2ltcGxlIHN0eWxlPXt7Zm9udFdlaWdodDpcImJvbGRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvUGFjXCIraHRtbH0+UGFjIGFpciBlYXU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL0l0ZVwiK2h0bWx9Pklzb2xhdGlvbiBleHRlcmlldXI8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL0l0aVwiK2h0bWx9Pklzb2xhdGlvbiBpbnRlcmlldXI8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL0FpckFpclwiK2h0bWx9PlBhYyBhaXIgYWlyPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9QaG90b3ZvbHRhaXF1ZVwiK2h0bWx9PlBob3Rvdm9sdGFpcXVlPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9CYWxsb25Tb2xhaXJlXCIraHRtbH0+QmFsbG9uIFNvbGFpcmU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBpdGVtIHRleHQ9J0xlIEJhdGltZW50JyBzaW1wbGUgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvRWxlY3RyaWNpdGVcIitodG1sfT5FbGVjdHJpY2l0w6k8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL1Bsb21iZXJpZVwiK2h0bWx9PlBsb21iZXJpZTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvUmV2ZXRlbWVudFwiK2h0bWx9PlJldmV0ZW1lbnQgc29sPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9DbG9pc29uXCIraHRtbH0+Q2xvaXNvbiBidXJlYXU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gc3R5bGU9e3tmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdOb3MgUGFydGVuYWlyZXMnIGhyZWY9e1wiL1BhcnRlbmFpcmVcIitodG1sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdOb3MgUGFydGVuYWlyZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J1F1aSBzb21tZXMgbm91cycgaHJlZj17XCIvTWlzc2lvblwiK2h0bWx9c3R5bGU9e3tmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdRdWkgc29tbWVzIG5vdXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nUXVhbGlmaWNhdGlvbicgaHJlZj17XCIvUXVhbGlmaWNhdGlvblwiK2h0bWx9IHN0eWxlPXt7Zm9udFdlaWdodDogXCJib2xkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnUXVhbGlmaWNhdGlvbid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Zpc2liaWxpdHk+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTW9iaWxlQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge31cclxuICAgIHN0YXRlID0geyBhY3RpdmVJdGVtOiAnaG9tZScgfVxyXG5cclxuICAgIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSlcclxuICAgIGhhbmRsZVNpZGViYXJIaWRlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpZGViYXJPcGVuZWQ6IGZhbHNlIH0pXHJcbiAgICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2lkZWJhck9wZW5lZDogdHJ1ZSB9KVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgeyBzaWRlYmFyT3BlbmVkLCBhY3RpdmVJdGVtIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgICAgIE1vYmlsZUNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZWRpYSBhcz17U2lkZWJhci5wdXNoYWJsZX0gYmV0d2Vlbj17W1wibW9iaWxlXCIsIFwidGFibGV0XCJdfT5cclxuICAgICAgICAgICAgICAgIDxTaWRlYmFyLlB1c2hhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249J3B1c2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17dGhpcy5oYW5kbGVTaWRlYmFySGlkZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17c2lkZWJhck9wZW5lZH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J05ldHRveWFnZScgaHJlZj17XCIvTmV0dG95YWdlXCIgKyBodG1sfSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnTmV0dG95YWdlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1nL25ldzEucG5nXCIgc2l6ZT1cIm1pbmlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXR0b3lhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gaXRlbSB0ZXh0PSdSLkcuRScgcG9pbnRpbmc9XCJsZWZ0XCIgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL1BhY1wiICsgaHRtbH0+UGFjIGFpciBlYXU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9JdGVcIiArIGh0bWx9Pklzb2xhdGlvbiBleHRlcmlldXI8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9JdGlcIiArIGh0bWx9Pklzb2xhdGlvbiBpbnRlcmlldXI8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9BaXJBaXJcIiArIGh0bWx9PlBhYyBhaXIgYWlyPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvUGhvdG92b2x0YWlxdWVcIiArIGh0bWx9PlBob3Rvdm9sdGFpcXVlPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvQmFsbG9uU29sYWlyZVwiICsgaHRtbH0+QmFsbG9uIFNvbGFpcmU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBpdGVtIHRleHQ9J0xlIEJhdGltZW50J3BvaW50aW5nPVwibGVmdFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvRWxlY3RyaWNpdGVcIiArIGh0bWx9PkVsZWN0cmljaXTDqTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL1Bsb21iZXJpZVwiICsgaHRtbH0+UGxvbWJlcmllPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvUmV2ZXRlbWVudFwiICsgaHRtbH0+UmV2ZXRlbWVudCBzb2w8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9DbG9pc29uXCIgKyBodG1sfT5DbG9pc29uIGJ1cmVhdTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gcG9zaXRpb249XCJyaWdodFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdOb3MgUGFydGVuYWlyZXMnIGhyZWY9e1wiL1BhcnRlbmFpcmVcIiArIGh0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdOb3MgUGFydGVuYWlyZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdRdWkgc29tbWVzIG5vdXMnIGhyZWY9e1wiL01pc3Npb25cIiArIGh0bWx9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdRdWkgc29tbWVzIG5vdXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nUXVhbGlmaWNhdGlvbicgaHJlZj17XCIvUXVhbGlmaWNhdGlvblwiICsgaHRtbH0gc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ1F1YWxpZmljYXRpb24nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2lkZWJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhci5QdXNoZXIgZGltbWVkPXtzaWRlYmFyT3BlbmVkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogMjUwLCBwYWRkaW5nOiAnMC41ZW0gMGVtJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgaW52ZXJ0ZWQgc2Vjb25kYXJ5IHNpemU9J3RpbnknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNpcmN1bGFyIGNvbG9yPSd0ZWFsJyBuYW1lPSdzaWRlYmFyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2JpbGUgbW9iaWxlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2lkZWJhci5QdXNoZXI+XHJcbiAgICAgICAgICAgICAgICA8L1NpZGViYXIuUHVzaGFibGU+XHJcbiAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBNeU1lbnUgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxNZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgPERlc2t0b3BDb250YWluZXI+e2NoaWxkcmVufTwvRGVza3RvcENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPE1vYmlsZUNvbnRhaW5lcj57Y2hpbGRyZW59PC9Nb2JpbGVDb250YWluZXI+XHJcbiAgICAgICAgPC9NZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlNZW51IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEhlYWRlciwgSW1hZ2UsIEdyaWQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHsgQW5pbWF0ZWQgfSBmcm9tIFwicmVhY3QtYW5pbWF0ZWQtY3NzXCI7XHJcblxyXG4vL21lbnUgbW9iaWxlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vYmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbW9iaWxlIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbnRhaW5lciB0ZXh0PlxyXG4gICAgICAgICAgICAgICAgPEFuaW1hdGVkIGFuaW1hdGlvbkluPVwiZmFkZUluXCIgYW5pbWF0aW9uT3V0PVwiZmFkZU91dFwiIGFuaW1hdGlvbkluRHVyYXRpb249ezUwMDB9IGFuaW1hdGlvbk91dER1cmF0aW9uPXsxMDAwfSBpc1Zpc2libGU9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvZWNvbG8vcnRzLnBuZ1wiIHNpemU9XCJzbWFsbFwiIGNlbnRlcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz0naDEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J1LDqW5vdmF0aW9uIFRlcnRpYWlyZSBzZXJ2aWNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAnMmVtJyA6ICc0ZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IG1vYmlsZSA/ICcwJyA6ICcxZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9J2gyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PSdWb3MgcHJvamV0cyBlbnRpZXJlbWVudCBmaW5hbmPDqSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAnMC43ZW0nIDogJzFlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogbW9iaWxlID8gJzAuNWVtJyA6ICcwLjVlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVkPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFydHN5L2ZyZXNuZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1haWxqcy1jb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hbmltYXRlZC1jc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=