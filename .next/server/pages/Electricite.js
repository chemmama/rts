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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Electricite.js");
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

/***/ "./pages/Electricite.js":
/*!******************************!*\
  !*** ./pages/Electricite.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Electricite; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _IndexElectricite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexElectricite */ "./pages/IndexElectricite.js");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @artsy/fresnel */ "@artsy/fresnel");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\famil\\Desktop\\emile programmation\\site_emile\\renovation\\pages\\Electricite.js";



const {
  MediaContextProvider,
  Media
} = Object(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_3__["createMedia"])({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
    ecran: 1192
  }
});

class GreatherIndexElectricite extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
      greaterThan: "mobile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_IndexElectricite__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
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

}

class MobileIndexElectricite extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
      between: ["mobile", "tablet"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_IndexElectricite__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

}

class Electricite extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MediaContextProvider, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GreatherIndexElectricite, {
          children: this.props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MobileIndexElectricite, {
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

}

/***/ }),

/***/ "./pages/IndexElectricite.js":
/*!***********************************!*\
  !*** ./pages/IndexElectricite.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Electricite; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @artsy/fresnel */ "@artsy/fresnel");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\famil\\Desktop\\emile programmation\\site_emile\\renovation\\pages\\IndexElectricite.js";




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

class IndexElectricite extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
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
          textAlign: "center",
          letterSpacing: 3,
          paddingTop: 30
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            style: shadow,
            children: " R.T.S des electriciens reconnus Agr\xE9es Consuel/Qualifelec"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
          children: [" R.T.S est un professionnel de l'installation \xE9lectrique au savoir-faire reconnu.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 106
          }, this), "Bas\xE9e \xE0 LES LILAS  certifi\xE9 par l'elite des electriciens ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: "CONSUEL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 90
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 114
          }, this), "R.T.S vous accompagne et vous propose des equipements adapt\xE9s aux tendances et aux \xE9volutions du march\xE9 de l'\xE9lectricit\xE9 tout en respectant les exigences de la norme NF C 15-100 qui concerne les locaux d\u2019habitation.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 104
          }, this), "R.T.S est specialis\xE9 dans les ERP ,s'occupe de faire vos demarche aupres d'EDF afin d'obtenir les contrats les mieux adapt\xE9s a votre profession", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: shadow,
              children: "Des installateurs aux comp\xE9tences multiples"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Renover une installation"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Remise aux normes de l'installation"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Mise en securit\xE9 de votre installation"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Remise d'un Consuel certifiant l'installation conforme"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          columns: 3,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                src: "img/electricite/loi alure.png",
                size: "larg",
                alt: "loi allure"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                src: "img/electricite/habilitation electrique.png",
                size: "larg",
                alt: "habilitation"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                src: "img/electricite/mise en conformite.png",
                size: "larg",
                alt: "mise en conformite"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: shadow,
            children: "OBJECTIFS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
          children: ["La r\xE9glementation relative \xE0 la mise en location des logements existants dont l\u2019installation \xE9lectrique a plus de 15 ans.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 72
          }, this), "Nous serons capables d\u2019identifier et de formaliser dans un rapport les d\xE9fauts de s\xE9curit\xE9 \xE0 corriger dans le cadre de la mise en s\xE9curit\xE9.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 41
          }, this), "Nous sommes capables d\u2019analyser l\u2019\xE9tat de l\u2019installation \xE9lectrique d\u2019un logement et de d\xE9tecter les anomalies de s\xE9curit\xE9 \xE0 corriger pour assurer la s\xE9curit\xE9 des personnes et la conservation des biens, de pouvoir analyser diff\xE9rentes solutions techniques et d\u2019en choisir la mieux adapt\xE9e", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 61
          }, this), "Connaitre les r\xE8gles de mise en \u0153uvre des derni\xE8res \xE9volutions normatives"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 29
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 35
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          columns: 3,
          divided: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                src: "img/electricite/tableau1.png",
                size: "larg",
                alt: "mise en securite "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                src: "img/electricite/tableau2.png",
                size: "larg",
                alt: "mise en securite"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                src: "img/electricite/disjoncteurs.png",
                size: "larg",
                alt: "disjoncteur"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: shadow,
            children: "Les Obligations"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 22
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
          children: "Apr\xE8s la loi ENL qui a instaur\xE9 en 2009 l\u2019obligation de la fourniture de l\u2019\xE9tat de l\u2019installation \xE9lectrique \xE0 chaque transaction de vente immobili\xE8re, la loi ALUR et son d\xE9cret du 11 ao\xFBt 2016 relatif \xE0 l\u2019\xE9tat de l\u2019installation int\xE9rieure d\u2019\xE9lectricit\xE9 dans les logements en location, va obliger les propri\xE9taires bailleurs, d\xE8s juillet 2017, \xE0 annexer au contrat de location un \xE9tat de l\u2019installation int\xE9rieure d\u2019\xE9lectricit\xE9 ou, mieux encore car elle apporte une v\xE9ritable garantie de r\xE9sultat, une Attestation de Conformit\xE9 pour mise en s\xE9curit\xE9 vis\xE9e par CONSUEL suite aux travaux r\xE9alis\xE9s."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 127
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 133
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this);
  }

}

class GreatherIndexElectricite extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
      greaterThan: "mobile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IndexElectricite, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }, this);
  }

}

class MobileIndexElectricite extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
      between: ["mobile", "tablet"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IndexElectricite, {
        mobile: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }, this);
  }

}

class Electricite extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MediaContextProvider, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GreatherIndexElectricite, {
          children: this.props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MobileIndexElectricite, {
          children: this.props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9FbGVjdHJpY2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9JbmRleEVsZWN0cmljaXRlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvTW9iaWxlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcnRzeS9mcmVzbmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZW1haWxqcy1jb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hbmltYXRlZC1jc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIkhlYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImVtYWlsanMiLCJNeUxheW91dCIsInN0YXRlIiwiY2hpbGRyZW4iLCJNZWRpYUNvbnRleHRQcm92aWRlciIsIk1lZGlhIiwiY3JlYXRlTWVkaWEiLCJicmVha3BvaW50cyIsIm1vYmlsZSIsInRhYmxldCIsImNvbXB1dGVyIiwiZWNyYW4iLCJHcmVhdGhlckluZGV4RWxlY3RyaWNpdGUiLCJNb2JpbGVJbmRleEVsZWN0cmljaXRlIiwiRWxlY3RyaWNpdGUiLCJJbmRleEVsZWN0cmljaXRlIiwic2hhZG93IiwiY29sb3IiLCJ0ZXh0U2hhZG93IiwidGV4dEFsaWduIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibGV0dGVyU3BhY2luZyIsInBhZGRpbmdUb3AiLCJzaGFkb3cyIiwiaHRtbCIsIkRlc2t0b3BDb250YWluZXIiLCJhY3RpdmVJdGVtIiwiZSIsIm5hbWUiLCJzZXRTdGF0ZSIsImZpeGVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsInNob3dGaXhlZE1lbnUiLCJoaWRlRml4ZWRNZW51IiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFdlaWdodCIsImhhbmRsZUl0ZW1DbGljayIsIk1vYmlsZUNvbnRhaW5lciIsInNpZGViYXJPcGVuZWQiLCJTaWRlYmFyIiwicHVzaGFibGUiLCJNZW51IiwiaGFuZGxlU2lkZWJhckhpZGUiLCJtaW5IZWlnaHQiLCJwYWRkaW5nIiwiaGFuZGxlVG9nZ2xlIiwiTXlNZW51IiwiTW9iaWxlIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwidGV4dERlY29yYXRpb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNE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MEJBQWMsRUFBRSxXQUxiO0FBTUhsQyxxQkFBUyxFQUFFO0FBTlI7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBZUkscUVBQUMsd0RBQUQ7QUFDSSxZQUFFLEVBQUMsSUFEUDtBQUVJLGlCQUFPLEVBQUMsb0NBRlo7QUFHSSxrQkFBUSxNQUhaO0FBSUksZUFBSyxFQUFFO0FBQ0hFLG9CQUFRLEVBQUViLE1BQU0sR0FBRyxPQUFILEdBQWEsS0FEMUI7QUFFSDhCLHNCQUFVLEVBQUUsUUFGVDtBQUdIYyxxQkFBUyxFQUFFNUMsTUFBTSxHQUFHLE9BQUgsR0FBYSxPQUgzQjtBQUlIVyxxQkFBUyxFQUFFLFFBSlI7QUFLSEYsaUJBQUssRUFBRTtBQUxKO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFpQ0g7O0FBekMrQyxDOzs7Ozs7Ozs7OztBQ0xwRCwyQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9FbGVjdHJpY2l0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvRWxlY3RyaWNpdGUuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNeU1lbnUgZnJvbSBcIi4uL3BhZ2VzL01lbnUuanNcIlxyXG5pbXBvcnQgKiBhcyBlbWFpbGpzIGZyb20gJ2VtYWlsanMtY29tJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+cmVub3ZhdGlvbjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cInJlbm92YXRpb24gdGVydGlhaXJlIHNlcnZpY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiZW1pbGUgY2hlbW1hbWFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiQ29udGVudC1UeXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cInBvbXBlIGEgY2hhbGV1cixwbG9tYmVyaWUsZWxlY3RyaWNpdGUsc2FsbGUgZGUgYmFpblwiIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBhc3luYyByZWw9XCJzdHlsZXNoZWV0XCIgbGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi4wLjMvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNzcy9tZW51LmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbmltYXRlLmNzcy8zLjUuMi9hbmltYXRlLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vZW1haWxqcy1jb21AMi9kaXN0L2VtYWlsLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL21lbnUuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbGpzLmluaXQoXCJZT1VSX1VTRVJfSURcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDwvaGVhZD5cclxuICAgICAgICAgICAgICAgIDxNeU1lbnUgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW5kZXhFbGVjdHJpY2l0ZSBmcm9tIFwiLi9JbmRleEVsZWN0cmljaXRlXCJcclxuaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tICdAYXJ0c3kvZnJlc25lbCdcclxuXHJcbmNvbnN0IHsgTWVkaWFDb250ZXh0UHJvdmlkZXIsIE1lZGlhIH0gPSBjcmVhdGVNZWRpYSh7XHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIG1vYmlsZTogMCxcclxuICAgICAgICB0YWJsZXQ6IDc2OCxcclxuICAgICAgICBjb21wdXRlcjogMTAyNCxcclxuICAgICAgICBlY3JhbjogMTE5MlxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmNsYXNzIEdyZWF0aGVySW5kZXhFbGVjdHJpY2l0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZWRpYSBncmVhdGVyVGhhbj0nbW9iaWxlJz5cclxuICAgICAgICAgICAgICAgIDxJbmRleEVsZWN0cmljaXRlIC8+XHJcbiAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBNb2JpbGVJbmRleEVsZWN0cmljaXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1lZGlhIGJldHdlZW49e1tcIm1vYmlsZVwiLCBcInRhYmxldFwiXX0+XHJcbiAgICAgICAgICAgICAgICA8SW5kZXhFbGVjdHJpY2l0ZSBtb2JpbGUgLz5cclxuICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZWN0cmljaXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxNZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JlYXRoZXJJbmRleEVsZWN0cmljaXRlID57dGhpcy5wcm9wcy5jaGlsZHJlbn08L0dyZWF0aGVySW5kZXhFbGVjdHJpY2l0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8TW9iaWxlSW5kZXhFbGVjdHJpY2l0ZT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L01vYmlsZUluZGV4RWxlY3RyaWNpdGU+XHJcbiAgICAgICAgICAgICAgICA8L01lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJbWFnZSxDb250YWluZXIsIEdyaWQsU2VnbWVudCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0XCJcclxuaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tICdAYXJ0c3kvZnJlc25lbCdcclxuXHJcbmNvbnN0IHsgTWVkaWFDb250ZXh0UHJvdmlkZXIsIE1lZGlhIH0gPSBjcmVhdGVNZWRpYSh7XHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIG1vYmlsZTogMCxcclxuICAgICAgICB0YWJsZXQ6IDc2OCxcclxuICAgICAgICBjb21wdXRlcjogMTAyNCxcclxuICAgICAgICBlY3JhbjogMTE5MlxyXG4gICAgfVxyXG59KVxyXG5cclxuY2xhc3MgSW5kZXhFbGVjdHJpY2l0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbW9iaWxlIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3Qgc2hhZG93ID1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnbGlnaHRncmVlbicsXHJcbiAgICAgICAgICAgIHRleHRTaGFkb3c6ICctMnB4IDAgYmxhY2ssIDAgMnB4IGJsYWNrLCAycHggMCBibGFjaywgMCAtMnB4IGJsYWNrJyxcclxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcInZlcmRhbmFcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDI1XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLGxldHRlclNwYWNpbmc6MyxwYWRkaW5nVG9wOjMwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIHN0eWxlPXtzaGFkb3d9PiBSLlQuUyBkZXMgZWxlY3RyaWNpZW5zIHJlY29ubnVzIEFncsOpZXMgQ29uc3VlbC9RdWFsaWZlbGVjPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxlbT4gUi5ULlMgZXN0IHVuIHByb2Zlc3Npb25uZWwgZGUgbCdpbnN0YWxsYXRpb24gw6lsZWN0cmlxdWUgYXUgc2F2b2lyLWZhaXJlIHJlY29ubnUuPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFzw6llIMOgIExFUyBMSUxBUyAgY2VydGlmacOpIHBhciBsJ2VsaXRlIGRlcyBlbGVjdHJpY2llbnMgPHN0cm9uZz5DT05TVUVMPC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUi5ULlMgdm91cyBhY2NvbXBhZ25lIGV0IHZvdXMgcHJvcG9zZSBkZXMgZXF1aXBlbWVudHMgYWRhcHTDqXMgYXV4IHRlbmRhbmNlcyBldCBhdXggw6l2b2x1dGlvbnMgZHUgbWFyY2jDqSBkZSBsJ8OpbGVjdHJpY2l0w6kgdG91dCBlbiByZXNwZWN0YW50IGxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aWdlbmNlcyBkZSBsYSBub3JtZSBORiBDIDE1LTEwMCBxdWkgY29uY2VybmUgbGVzIGxvY2F1eCBk4oCZaGFiaXRhdGlvbi48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSLlQuUyBlc3Qgc3BlY2lhbGlzw6kgZGFucyBsZXMgRVJQICxzJ29jY3VwZSBkZSBmYWlyZSB2b3MgZGVtYXJjaGUgYXVwcmVzIGQnRURGIGFmaW4gZCdvYnRlbmlyIGxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyYXRzIGxlcyBtaWV1eCBhZGFwdMOpcyBhIHZvdHJlIHByb2Zlc3Npb25cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtzaGFkb3d9PkRlcyBpbnN0YWxsYXRldXJzIGF1eCBjb21ww6l0ZW5jZXMgbXVsdGlwbGVzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UmVub3ZlciB1bmUgaW5zdGFsbGF0aW9uPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlJlbWlzZSBhdXggbm9ybWVzIGRlIGwnaW5zdGFsbGF0aW9uPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk1pc2UgZW4gc2VjdXJpdMOpIGRlIHZvdHJlIGluc3RhbGxhdGlvbjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5SZW1pc2UgZCd1biBDb25zdWVsIGNlcnRpZmlhbnQgbCdpbnN0YWxsYXRpb24gY29uZm9ybWU8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+PC9lbT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb2x1bW5zPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvZWxlY3RyaWNpdGUvbG9pIGFsdXJlLnBuZ1wiIHNpemU9XCJsYXJnXCIgYWx0PVwibG9pIGFsbHVyZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvZWxlY3RyaWNpdGUvaGFiaWxpdGF0aW9uIGVsZWN0cmlxdWUucG5nXCIgc2l6ZT1cImxhcmdcIiBhbHQ9XCJoYWJpbGl0YXRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1nL2VsZWN0cmljaXRlL21pc2UgZW4gY29uZm9ybWl0ZS5wbmdcIiBzaXplPVwibGFyZ1wiIGFsdD1cIm1pc2UgZW4gY29uZm9ybWl0ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3NoYWRvd30+T0JKRUNUSUZTPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZW0gID5MYSByw6lnbGVtZW50YXRpb24gcmVsYXRpdmUgw6AgbGEgbWlzZSBlbiBsb2NhdGlvbiBkZXMgbG9nZW1lbnRzIGV4aXN0YW50cyBkb250XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBs4oCZaW5zdGFsbGF0aW9uIMOpbGVjdHJpcXVlIGEgcGx1cyBkZSAxNSBhbnMuPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3VzIHNlcm9ucyBjYXBhYmxlcyBk4oCZaWRlbnRpZmllciBldCBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWFsaXNlciBkYW5zIHVuIHJhcHBvcnQgbGVzIGTDqWZhdXRzIGRlIHPDqWN1cml0w6kgw6AgY29ycmlnZXIgZGFucyBsZSBjYWRyZSBkZSBsYSBtaXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbiBzw6ljdXJpdMOpLjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm91cyBzb21tZXMgY2FwYWJsZXMgZOKAmWFuYWx5c2VyIGzigJnDqXRhdCBkZSBs4oCZaW5zdGFsbGF0aW9uIMOpbGVjdHJpcXVlIGTigJl1biBsb2dlbWVudCBldCBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZMOpdGVjdGVyIGxlcyBhbm9tYWxpZXMgZGUgc8OpY3VyaXTDqSDDoCBjb3JyaWdlciBwb3VyIGFzc3VyZXIgbGEgc8OpY3VyaXTDqSBkZXMgcGVyc29ubmVzIGV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYSBjb25zZXJ2YXRpb24gZGVzIGJpZW5zLCBkZSBwb3V2b2lyIGFuYWx5c2VyIGRpZmbDqXJlbnRlcyBzb2x1dGlvbnMgdGVjaG5pcXVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXQgZOKAmWVuIGNob2lzaXIgbGEgbWlldXggYWRhcHTDqWU8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5haXRyZSBsZXMgcsOoZ2xlcyBkZSBtaXNlIGVuIMWTdXZyZSBkZXMgZGVybmnDqHJlcyDDqXZvbHV0aW9ucyBub3JtYXRpdmVzPC9lbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbHVtbnM9ezN9IGRpdmlkZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9lbGVjdHJpY2l0ZS90YWJsZWF1MS5wbmdcIiBzaXplPVwibGFyZ1wiYWx0PVwibWlzZSBlbiBzZWN1cml0ZSBcIiAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvZWxlY3RyaWNpdGUvdGFibGVhdTIucG5nXCIgc2l6ZT1cImxhcmdcImFsdD1cIm1pc2UgZW4gc2VjdXJpdGVcIiAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9lbGVjdHJpY2l0ZS9kaXNqb25jdGV1cnMucG5nXCIgc2l6ZT1cImxhcmdcIiBhbHQ9XCJkaXNqb25jdGV1clwiIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtzaGFkb3d9PkxlcyBPYmxpZ2F0aW9uczwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxlbT5BcHLDqHMgbGEgbG9pIEVOTCBxdWkgYSBpbnN0YXVyw6kgZW4gMjAwOSBs4oCZb2JsaWdhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZSBsYSBmb3Vybml0dXJlIGRlIGzigJnDqXRhdCBkZSBs4oCZaW5zdGFsbGF0aW9uIMOpbGVjdHJpcXVlIMOgIGNoYXF1ZSB0cmFuc2FjdGlvbiBkZSB2ZW50ZSBpbW1vYmlsacOocmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhIGxvaSBBTFVSIGV0IHNvbiBkw6ljcmV0IGR1IDExIGFvw7t0IDIwMTYgcmVsYXRpZiDDoCBs4oCZw6l0YXQgZGUgbOKAmWluc3RhbGxhdGlvbiBpbnTDqXJpZXVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBk4oCZw6lsZWN0cmljaXTDqSBkYW5zIGxlcyBsb2dlbWVudHMgZW4gbG9jYXRpb24sIHZhIG9ibGlnZXIgbGVzIHByb3ByacOpdGFpcmVzIGJhaWxsZXVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZMOocyBqdWlsbGV0IDIwMTcsIMOgIGFubmV4ZXIgYXUgY29udHJhdCBkZSBsb2NhdGlvbiB1biDDqXRhdCBkZSBs4oCZaW5zdGFsbGF0aW9uIGludMOpcmlldXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGTigJnDqWxlY3RyaWNpdMOpIG91LCBtaWV1eCBlbmNvcmUgY2FyIGVsbGUgYXBwb3J0ZSB1bmUgdsOpcml0YWJsZSBnYXJhbnRpZSBkZSByw6lzdWx0YXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZSBBdHRlc3RhdGlvbiBkZSBDb25mb3JtaXTDqSBwb3VyIG1pc2UgZW4gc8OpY3VyaXTDqSB2aXPDqWUgcGFyIENPTlNVRUwgc3VpdGUgYXV4IHRyYXZhdXggcsOpYWxpc8Opcy48L2VtPjxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5jbGFzcyBHcmVhdGhlckluZGV4RWxlY3RyaWNpdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVkaWEgZ3JlYXRlclRoYW49J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICA8SW5kZXhFbGVjdHJpY2l0ZSAvPlxyXG4gICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTW9iaWxlSW5kZXhFbGVjdHJpY2l0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZWRpYSBiZXR3ZWVuPXtbXCJtb2JpbGVcIiwgXCJ0YWJsZXRcIl19PlxyXG4gICAgICAgICAgICAgICAgPEluZGV4RWxlY3RyaWNpdGUgbW9iaWxlIC8+XHJcbiAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVjdHJpY2l0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyZWF0aGVySW5kZXhFbGVjdHJpY2l0ZSA+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9HcmVhdGhlckluZGV4RWxlY3RyaWNpdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vYmlsZUluZGV4RWxlY3RyaWNpdGU+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9Nb2JpbGVJbmRleEVsZWN0cmljaXRlPlxyXG4gICAgICAgICAgICAgICAgPC9NZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tICdAYXJ0c3kvZnJlc25lbCdcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBJY29uLCBJbWFnZSwgTWVudSwgU2VnbWVudCwgU2lkZWJhciwgVmlzaWJpbGl0eSxEcm9wZG93biB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTW9iaWxlIGZyb20gXCIuLi9wYWdlcy9Nb2JpbGUuanNcIlxyXG5cclxuY29uc3QgeyBNZWRpYUNvbnRleHRQcm92aWRlciwgTWVkaWEgfSA9IGNyZWF0ZU1lZGlhKHtcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgbW9iaWxlOiAwLFxyXG4gICAgICAgIHRhYmxldDogOTAwLFxyXG4gICAgICAgIGNvbXB1dGVyOiAxMDI0LFxyXG4gICAgICAgIGVjcmFuOiAxMTkyXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBzaGFkb3cgPVxyXG57XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHRleHRTaGFkb3c6ICctMnB4IDAgYmxhY2ssIDAgMnB4IGJsYWNrLCAycHggMCBibGFjaywgMCAtMnB4IGJsYWNrJyxcclxuICAgIGZvbnRGYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLFxyXG4gICAgZm9udFNpemU6IDE3XHJcbn1cclxuXHJcbmNvbnN0IHNoYWRvdzIgPVxyXG57XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHRleHRTaGFkb3c6ICcycHggMnB4IDRweCAjMDAwMDAwJyxcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGZvbnRGYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLFxyXG4gICAgZm9udFNpemU6IDExXHJcbn1cclxuXHJcbmNvbnN0IGh0bWwgPVwiXCJcclxuXHJcblxyXG5jbGFzcyBEZXNrdG9wQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHsgYWN0aXZlSXRlbTogJycgfVxyXG5cclxuICAgIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSlcclxuICAgIGhpZGVGaXhlZE1lbnUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZml4ZWQ6IGZhbHNlIH0pXHJcbiAgICBzaG93Rml4ZWRNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZpeGVkOiB0cnVlIH0pXHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgYWN0aXZlSXRlbSB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIGNvbnN0IHtjb2xvcn09dGhpcy5wcm9wc1xyXG5cclxuICAgICAgICBEZXNrdG9wQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICAgICAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZCA+XHJcbiAgICAgICAgICAgICAgICA8TWVkaWEgZ3JlYXRlclRoYW49J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFZpc2liaWxpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25jZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQm90dG9tUGFzc2VkPXt0aGlzLnNob3dGaXhlZE1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQm90dG9tUGFzc2VkUmV2ZXJzZT17dGhpcy5oaWRlRml4ZWRNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgdmVydGljYWwgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J2xpZ2h0Z3JleSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlc21va2UnIH19IHN0YWNrYWJsZSBmbHVpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPjxJbWFnZSBzcmM9J2ltZy9lY29sby9ydHMucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz0nYSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0ndGlueSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0nLydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gaW52ZXJ0ZWQgc3R5bGU9e3NoYWRvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nUsOpbm92YXRpb24gVGVydGlhaXJlIFNlcnZpY2UnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gcG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J05ldHRveWFnZScgaHJlZj17XCIvTmV0dG95YWdlXCIraHRtbH0gc3R5bGU9e3sgZm9udFdlaWdodDpcImJvbGRcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ05ldHRveWFnZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9uZXcxLnBuZ1wiIHNpemU9XCJtaW5pXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXR0b3lhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGl0ZW0gdGV4dD0nUi5HLkUnc2ltcGxlIHN0eWxlPXt7Zm9udFdlaWdodDpcImJvbGRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvUGFjXCIraHRtbH0+UGFjIGFpciBlYXU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL0l0ZVwiK2h0bWx9Pklzb2xhdGlvbiBleHRlcmlldXI8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL0l0aVwiK2h0bWx9Pklzb2xhdGlvbiBpbnRlcmlldXI8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL0FpckFpclwiK2h0bWx9PlBhYyBhaXIgYWlyPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9QaG90b3ZvbHRhaXF1ZVwiK2h0bWx9PlBob3Rvdm9sdGFpcXVlPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9CYWxsb25Tb2xhaXJlXCIraHRtbH0+QmFsbG9uIFNvbGFpcmU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBpdGVtIHRleHQ9J0xlIEJhdGltZW50JyBzaW1wbGUgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvRWxlY3RyaWNpdGVcIitodG1sfT5FbGVjdHJpY2l0w6k8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL1Bsb21iZXJpZVwiK2h0bWx9PlBsb21iZXJpZTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvUmV2ZXRlbWVudFwiK2h0bWx9PlJldmV0ZW1lbnQgc29sPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9DbG9pc29uXCIraHRtbH0+Q2xvaXNvbiBidXJlYXU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gc3R5bGU9e3tmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdOb3MgUGFydGVuYWlyZXMnIGhyZWY9e1wiL1BhcnRlbmFpcmVcIitodG1sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdOb3MgUGFydGVuYWlyZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J1F1aSBzb21tZXMgbm91cycgaHJlZj17XCIvTWlzc2lvblwiK2h0bWx9c3R5bGU9e3tmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdRdWkgc29tbWVzIG5vdXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nUXVhbGlmaWNhdGlvbicgaHJlZj17XCIvUXVhbGlmaWNhdGlvblwiK2h0bWx9IHN0eWxlPXt7Zm9udFdlaWdodDogXCJib2xkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnUXVhbGlmaWNhdGlvbid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Zpc2liaWxpdHk+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTW9iaWxlQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge31cclxuICAgIHN0YXRlID0geyBhY3RpdmVJdGVtOiAnaG9tZScgfVxyXG5cclxuICAgIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSlcclxuICAgIGhhbmRsZVNpZGViYXJIaWRlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpZGViYXJPcGVuZWQ6IGZhbHNlIH0pXHJcbiAgICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2lkZWJhck9wZW5lZDogdHJ1ZSB9KVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgeyBzaWRlYmFyT3BlbmVkLCBhY3RpdmVJdGVtIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgICAgIE1vYmlsZUNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZWRpYSBhcz17U2lkZWJhci5wdXNoYWJsZX0gYmV0d2Vlbj17W1wibW9iaWxlXCIsIFwidGFibGV0XCJdfT5cclxuICAgICAgICAgICAgICAgIDxTaWRlYmFyLlB1c2hhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249J3B1c2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17dGhpcy5oYW5kbGVTaWRlYmFySGlkZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17c2lkZWJhck9wZW5lZH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J05ldHRveWFnZScgaHJlZj17XCIvTmV0dG95YWdlXCIgKyBodG1sfSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnTmV0dG95YWdlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1nL25ldzEucG5nXCIgc2l6ZT1cIm1pbmlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXR0b3lhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gaXRlbSB0ZXh0PSdSLkcuRScgcG9pbnRpbmc9XCJsZWZ0XCIgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL1BhY1wiICsgaHRtbH0+UGFjIGFpciBlYXU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9JdGVcIiArIGh0bWx9Pklzb2xhdGlvbiBleHRlcmlldXI8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9JdGlcIiArIGh0bWx9Pklzb2xhdGlvbiBpbnRlcmlldXI8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9BaXJBaXJcIiArIGh0bWx9PlBhYyBhaXIgYWlyPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvUGhvdG92b2x0YWlxdWVcIiArIGh0bWx9PlBob3Rvdm9sdGFpcXVlPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvQmFsbG9uU29sYWlyZVwiICsgaHRtbH0+QmFsbG9uIFNvbGFpcmU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBpdGVtIHRleHQ9J0xlIEJhdGltZW50J3BvaW50aW5nPVwibGVmdFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvRWxlY3RyaWNpdGVcIiArIGh0bWx9PkVsZWN0cmljaXTDqTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL1Bsb21iZXJpZVwiICsgaHRtbH0+UGxvbWJlcmllPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvUmV2ZXRlbWVudFwiICsgaHRtbH0+UmV2ZXRlbWVudCBzb2w8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9DbG9pc29uXCIgKyBodG1sfT5DbG9pc29uIGJ1cmVhdTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gcG9zaXRpb249XCJyaWdodFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdOb3MgUGFydGVuYWlyZXMnIGhyZWY9e1wiL1BhcnRlbmFpcmVcIiArIGh0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdOb3MgUGFydGVuYWlyZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdRdWkgc29tbWVzIG5vdXMnIGhyZWY9e1wiL01pc3Npb25cIiArIGh0bWx9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdRdWkgc29tbWVzIG5vdXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nUXVhbGlmaWNhdGlvbicgaHJlZj17XCIvUXVhbGlmaWNhdGlvblwiICsgaHRtbH0gc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ1F1YWxpZmljYXRpb24nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2lkZWJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhci5QdXNoZXIgZGltbWVkPXtzaWRlYmFyT3BlbmVkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogMjUwLCBwYWRkaW5nOiAnMC41ZW0gMGVtJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgaW52ZXJ0ZWQgc2Vjb25kYXJ5IHNpemU9J3RpbnknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNpcmN1bGFyIGNvbG9yPSd0ZWFsJyBuYW1lPSdzaWRlYmFyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2JpbGUgbW9iaWxlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2lkZWJhci5QdXNoZXI+XHJcbiAgICAgICAgICAgICAgICA8L1NpZGViYXIuUHVzaGFibGU+XHJcbiAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBNeU1lbnUgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxNZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgPERlc2t0b3BDb250YWluZXI+e2NoaWxkcmVufTwvRGVza3RvcENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPE1vYmlsZUNvbnRhaW5lcj57Y2hpbGRyZW59PC9Nb2JpbGVDb250YWluZXI+XHJcbiAgICAgICAgPC9NZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlNZW51IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEhlYWRlciwgSW1hZ2UsIEdyaWQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHsgQW5pbWF0ZWQgfSBmcm9tIFwicmVhY3QtYW5pbWF0ZWQtY3NzXCI7XHJcblxyXG4vL21lbnUgbW9iaWxlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vYmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbW9iaWxlIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbnRhaW5lciB0ZXh0PlxyXG4gICAgICAgICAgICAgICAgPEFuaW1hdGVkIGFuaW1hdGlvbkluPVwiZmFkZUluXCIgYW5pbWF0aW9uT3V0PVwiZmFkZU91dFwiIGFuaW1hdGlvbkluRHVyYXRpb249ezUwMDB9IGFuaW1hdGlvbk91dER1cmF0aW9uPXsxMDAwfSBpc1Zpc2libGU9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvZWNvbG8vcnRzLnBuZ1wiIHNpemU9XCJzbWFsbFwiIGNlbnRlcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz0naDEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J1LDqW5vdmF0aW9uIFRlcnRpYWlyZSBzZXJ2aWNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAnMmVtJyA6ICc0ZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IG1vYmlsZSA/ICcwJyA6ICcxZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9J2gyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PSdWb3MgcHJvamV0cyBlbnRpZXJlbWVudCBmaW5hbmPDqSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAnMC43ZW0nIDogJzFlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogbW9iaWxlID8gJzAuNWVtJyA6ICcwLjVlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVkPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFydHN5L2ZyZXNuZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1haWxqcy1jb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hbmltYXRlZC1jc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=