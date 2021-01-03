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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_Menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Menu.js */ "./pages/Menu.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emailjs-com */ "emailjs-com");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_3__);





class Header extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("head", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
          children: "renovation"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
          name: "description",
          content: "renovation tertiaire service"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
          name: "author",
          content: "emile chemmama"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
          name: "viewport",
          content: "minimum-scale=1,initial-scale=1.0, width=device-width"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
          httpEquiv: "Content-Type",
          content: "text/html; charset=utf-8"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
          name: "keywords",
          content: "pompe a chaleur,plomberie,electricite,salle de bain"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
          async: true,
          rel: "stylesheet",
          link: true,
          rel: "stylesheet",
          href: "//cdn.jsdelivr.net/npm/semantic-ui@2.0.1/dist/semantic.min.css"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
          rel: "stylesheet",
          href: "css/menu.css"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
          type: "text/javascript",
          src: "https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
          src: "https://www.google.com/recaptcha/api.js",
          async: true,
          defer: true
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
          type: "text/javascript",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("script", {
            type: "text/javascript",
            children: ["(function()", emailjs_com__WEBPACK_IMPORTED_MODULE_3__["init"]("YOUR_USER_ID"), ")();"]
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_pages_Menu_js__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
    });
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");




class MyLayout extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}), this.props.children]
    });
  }

}

/***/ }),

/***/ "./pages/Cee.js":
/*!**********************!*\
  !*** ./pages/Cee.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cee; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





class Cee extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      mobile
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          style: {
            fontFamily: "Comic sans MS",
            textAlign: "center",
            fontSize: 30
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("blockquote", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
              children: "Les Certificats d'\xC9conomies d'\xC9nergie"
            })
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        fluid: true,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
          vertical: true,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
            container: true,
            stackable: true,
            verticalAlign: "center",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
                width: 8,
                style: {
                  fontFamily: "Comic sans MS"
                },
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                  src: "img/ecolo/logocee.png",
                  centered: true
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
                width: 10,
                style: {
                  paddingTop: 90
                },
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                  src: "img/ecolo/maison-exterieur.jpg",
                  size: "large",
                  centered: true
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
                floated: "left",
                width: 6,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
                  style: {
                    fontFamily: "Comic sans MS",
                    color: "Green",
                    paddingTop: 90
                  },
                  children: "Les Certificats d'\xC9conomies d'\xC9nergie"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
                  color: "green",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h4", {
                    style: {
                      fontFamily: 'Times New Roman'
                    },
                    children: ["Dans le cadre d'une obligation encadr\xE9e par l'Etat, certaines entreprises (fournisseur de gaz ou d'\xE9lectricit\xE9, acteurs de la grande distribution ayant des stations essence, enseignes p\xE9troli\xE8res) proposent des primes pour vous aider \xE0 r\xE9aliser des \xE9conomies d'\xE9nergie.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Ces aides sont accessibles \xE0 tous sans conditions de ressources.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "L'avantage de ces entreprises c'est de d\xE9fiscaliser leur taxe carbone en vous attribuant une prime.."]
                  })
                })]
              })]
            })
          })
        })
      })]
    });
  }

}

/***/ }),

/***/ "./pages/Dispositif.js":
/*!*****************************!*\
  !*** ./pages/Dispositif.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dispositif; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





class Dispositif extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      mobile
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          style: {
            fontFamily: "Comic sans MS",
            textAlign: "center",
            paddingTop: 30,
            fontSize: 30
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("blockquote", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("strong", {
              children: ["Action Logement,Ma Prime Renov',CEE:Acteurs Majeurs pour la", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "TRANSITION ENERGETIQUE"]
            })
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        fluid: true,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
          vertical: true,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
            container: true,
            stackable: true,
            verticalAlign: "center",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
                floated: "left",
                width: 8,
                style: {
                  fontFamily: "Comic sans MS"
                },
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                  src: "img/ecolo/action-logement.png"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
                width: 10,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                  src: "img/ecolo/pompeachaleur.png",
                  size: "medium"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
                floated: "left",
                width: 6,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
                  style: {
                    fontFamily: "Comic sans MS",
                    color: "Green"
                  },
                  children: "Les conditions pour b\xE9n\xE9ficier de l'aide \xE0 la r\xE9novation \xE9nerg\xE9tique"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
                  color: "green",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
                    style: {
                      fontFamily: 'Times New Roman'
                    },
                    children: "Vos revenus ou ceux de votre locataire sont inf\xE9rieurs aux plafonds de ressources des m\xE9nages \xE0 revenus modestes."
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
                    style: {
                      fontFamily: 'Times New Roman'
                    },
                    children: "Votre logement est situ\xE9 en zone B2 ou C ou dans une commune du programme Action c\u0153ur de ville."
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
                    style: {
                      fontFamily: 'Times New Roman'
                    },
                    children: "Le logement dans lequel vous souhaiter effectuer des travaux est votre r\xE9sidence principale ou celle de votre locataire."
                  })
                })]
              })]
            })
          })
        })
      })]
    });
  }

}

/***/ }),

/***/ "./pages/Home.js":
/*!***********************!*\
  !*** ./pages/Home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _pages_Pourquoi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Pourquoi */ "./pages/Pourquoi.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! emailjs-com */ "emailjs-com");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pages_Dispositif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/Dispositif */ "./pages/Dispositif.js");
/* harmony import */ var _pages_Renove__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/Renove */ "./pages/Renove.js");
/* harmony import */ var _pages_Cee__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/Cee */ "./pages/Cee.js");
/* harmony import */ var _pages_Mission__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/Mission */ "./pages/Mission.js");



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class Home extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", (e, {
      name,
      value
    }) => this.setState({
      [name]: value
    }));

    this.state = {
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
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.proprio === "" ? this.setState({
      errorProprio: {
        content: "",
        pointing: null
      }
    }) : this.setState({
      errorProprio: null
    });
    this.state.salarie === "" ? this.setState({
      errorSalarie: {
        content: "",
        pointing: null
      }
    }) : this.setState({
      errorSalarie: null
    });
    this.state.chauffage === "" ? this.setState({
      errorChauffage: {
        content: "",
        pointing: null
      }
    }) : this.setState({
      errorChauffage: null
    });
    this.state.famille === "" ? this.setState({
      errorFamille: {
        content: "",
        pointing: null
      }
    }) : this.setState({
      errorFamille: null
    });
    this.state.fiscalite === "" ? this.setState({
      errorFiscalite: {
        content: "",
        pointing: null
      }
    }) : this.setState({
      errorFiscalite: null
    });
    this.state.proprio === "" ? alert("Selectionnez un choix") : this.state.salarie === "" ? alert("Selectionnez un choix") : this.state.chauffage === "" ? alert("Selectionnez un choix") : this.state.famille === "" ? alert("Selectionnez un choix") : this.state.fiscalité === "" ? alert("Selectionnez un choix") : this.dataContact();
  }

  dataContact() {
    const {
      proprio,
      salarie,
      chauffage,
      famille,
      fiscalite,
      nom,
      prenom,
      adresse,
      localite,
      email,
      telephone
    } = this.state;
    let templateParams = {
      from_name: email,
      to_name: nom,
      proprio: proprio,
      salarie: salarie,
      chauffage: chauffage,
      famille: famille,
      fiscalite: fiscalite,
      adresse: adresse,
      localite: localite,
      email: email,
      telephone: telephone,
      penom: prenom
    };
    emailjs_com__WEBPACK_IMPORTED_MODULE_5__["send"]('my_Gmail', 'eligibilite', templateParams, 'user_O4rTmyvCyhnUYTJrczkMv').then(result => {
      alert(result.text);
    }, error => {
      alert(error.text);
    });
    this.state.proprio === "", this.state.salarie === "", this.state.chauffage === "", this.state.famille === "";
    this.state.fiscalite === "";
    this.state.nom = "", this.state.prenom = "", this.state.adresse = "", this.state.localite = "", this.state.email = "", this.state.telephone = "";
  }

  render() {
    const {
      children
    } = this.props;
    const {
      mobile
    } = this.props;
    Home.propTypes = {
      mobile: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool
    };
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        fluid: true,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
          vertical: true,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
            container: true,
            stackable: true,
            verticalAlign: "center",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
                floated: "left",
                width: 6,
                style: {
                  fontFamily: "Arial"
                },
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
                  style: {
                    fontFamily: "Times New Roman'",
                    color: "green",
                    textAlign: "center",
                    fontSize: mobile ? 25 : 40
                  },
                  children: "Votre Pompe \xE0 chaleur entierement financ\xE9 par"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                  src: "img/ecolo/action-logement.png"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Embed"], {
                  aspectRatio: "16:9",
                  id: "0m1QWV3vTzo",
                  placeholder: "img/ecolo/ecologieyoutube.jpg",
                  source: "youtube"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
                  style: {
                    fontFamily: "comic sans MS",
                    textAlign: "center",
                    color: "green",
                    fontSize: mobile ? 25 : 35
                  },
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("u", {
                    children: "Comment l'obtenir"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"], {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Image, {
                    src: "img/ecolo/validez.png",
                    alt: "validez",
                    size: "tiny"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Content, {
                    verticalAlign: "middle",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Header, {
                      children: "Remplissez le formulaire"
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"], {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Image, {
                    size: "tiny",
                    src: "img/ecolo/telephone.png",
                    alt: "telephone"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Content, {
                    verticalAlign: "middle",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Header, {
                      children: " Un professionnel vous contact afin d'ouvrir votre dossier et convenir d'un rendez-vous"
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"], {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Image, {
                    size: "tiny",
                    src: "img/ecolo/ouvrier.png",
                    alt: "ouvrier RGE"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Content, {
                    verticalAlign: "middle",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Header, {
                      children: " Une \xE9quipe de techniciens confirm\xE9s RGE se d\xE9place chez vous afin de r\xE9aliser vos travaux"
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"], {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Image, {
                    size: "tiny",
                    src: "img/ecolo/remerciement.png",
                    alt: "remerciement"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Content, {
                    verticalAlign: "middle",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Header, {
                      children: "Vous ne payez que 1 euro Sur pr\xE9sentation du devis , sans aucun frais avanc\xE9"
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"], {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Image, {
                    size: "small",
                    src: "img/ecolo/logocee.png",
                    alt: "logo-cee"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Content, {
                    verticalAlign: "middle",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Header, {
                      children: "l'etat finance  pour 1\u20AC symbolique"
                    })
                  })]
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
                floated: "right",
                width: 8,
                style: {
                  paddingTop: mobile ? 10 : 20,
                  fontFamily: "Comic sans MS",
                  backgroundColor: "white"
                },
                children: ["Dans le cadre de la transition \xE9cologique, l'\xC9tat prend en charge le co\xFBt de l\u2019installation de votre pompe \xE0 chaleur pour seulement 1\u20AC !", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Des milliers de foyers fran\xE7ais en ont d\xE9j\xE0 profit\xE9, pourquoi pas vous ?", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                  style: {
                    color: 'red'
                  },
                  children: "* saisie obligatoire"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                  style: {
                    fontFamily: "Comic sans MS",
                    color: "green",
                    fontSize: mobile ? 20 : 30,
                    textAlign: "center"
                  },
                  children: "V\xE9rifiez votre \xE9ligibit\xE9"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
                  onSubmit: e => this.handleSubmit(e),
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
                    error: this.state.errorProprio,
                    required: true,
                    label: "Vous Etes",
                    placeholder: "----",
                    fluid: true,
                    options: proprio,
                    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"],
                    name: "proprio",
                    onChange: this.handleChange
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
                    clearable: true,
                    error: this.state.errorChauffage,
                    required: true,
                    label: "Votre type de Chauffage",
                    placeholder: "----",
                    fluid: true,
                    options: chauffage,
                    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"],
                    name: "chauffage",
                    onChange: this.handleChange
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
                    clearable: true,
                    error: this.state.errorFamille,
                    required: true,
                    label: "Nombre de personne vivant dans le foyer",
                    placeholder: "----",
                    fluid: true,
                    options: famille,
                    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"],
                    name: "famille",
                    onChange: this.handleChange
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
                    clearable: true,
                    error: this.state.errorFiscalite,
                    required: true,
                    label: "Revenue fiscal de r\xE9f\xE9rence (2020 ou 2019)",
                    placeholder: "----",
                    fluid: true,
                    options: fiscalite,
                    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"],
                    name: "fiscalite",
                    onChange: this.handleChange
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
                      required: true,
                      label: "Nom",
                      placeholder: "Nom",
                      width: 9,
                      name: "nom",
                      value: this.state.nom,
                      onChange: this.handleChange
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
                      icon: "lock",
                      iconPosition: "left",
                      required: true,
                      label: "Pr\xE9nom",
                      placeholder: "Pr\xE9nom",
                      width: 9,
                      name: "prenom",
                      value: this.state.prenom,
                      onChange: this.handleChange
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
                      required: true,
                      icon: "adress",
                      iconPosition: "left",
                      label: "Adresse",
                      placeholder: "Adresse",
                      width: 9,
                      name: "adresse",
                      value: this.state.adresse,
                      onChange: this.handleChange
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
                      required: true,
                      label: "Localit\xE9",
                      placeholder: "Localit\xE9",
                      width: 9,
                      name: "localite",
                      value: this.state.localite,
                      onChange: this.handleChange
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
                      type: "email",
                      required: true,
                      label: "Email",
                      placeholder: "contact@gmail.com",
                      width: 9,
                      name: "email",
                      value: this.state.email,
                      onChange: this.handleChange
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
                      required: true,
                      label: "Telephone",
                      placeholder: "0698611372",
                      width: 9,
                      name: "telephone",
                      value: this.state.telephone,
                      onChange: this.handleChange
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
                      label: "J'autorise R.T.S \xE0 me recontacter pour me communiquer mon statut d'\xE9ligibilit\xE9"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Button, {
                    fluid: true,
                    type: "submit",
                    color: "green",
                    style: {
                      fontSize: mobile ? 15 : 20
                    },
                    children: "V\xE9rifier mon \xE9ligibilit\xE9"
                  })]
                })]
              })]
            })
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_pages_Pourquoi__WEBPACK_IMPORTED_MODULE_4__["default"], {
        mobile: true
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_pages_Dispositif__WEBPACK_IMPORTED_MODULE_7__["default"], {
        mobile: true
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_pages_Renove__WEBPACK_IMPORTED_MODULE_8__["default"], {
        mobile: true
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_pages_Cee__WEBPACK_IMPORTED_MODULE_9__["default"], {
        mobile: true
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_pages_Mission__WEBPACK_IMPORTED_MODULE_10__["default"], {
        mobile: true
      })]
    });
  }

}
const proprio = [{
  key: '1',
  text: 'Propriétaire',
  value: 'Propriétaire'
}, {
  key: '2',
  text: 'Locataire',
  value: 'Locataire'
}];
const salarie = [{
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
const chauffage = [{
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
const famille = [{
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
const fiscalite = [{
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

/***/ }),

/***/ "./pages/Menu.js":
/*!***********************!*\
  !*** ./pages/Menu.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @artsy/fresnel */ "@artsy/fresnel");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_Mobile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Mobile.js */ "./pages/Mobile.js");



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const {
  MediaContextProvider,
  Media
} = Object(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_2__["createMedia"])({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
    ecran: 1192
  }
});
const html = '';

class DesktopContainer extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});

    _defineProperty(this, "state", {
      activeItem: 'Pompe a chaleur'
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
      fixed
    } = this.state;
    const {
      activeItem
    } = this.state;
    DesktopContainer.propTypes = {
      children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
    };
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      fluid: true,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(Media, {
        greaterThan: "mobile",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Visibility"], {
          once: false,
          onBottomPassed: this.showFixedMenu,
          onBottomPassedReverse: this.hideFixedMenu,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
            textAlign: "center",
            vertical: true,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
              compact: true,
              size: "small",
              stackable: true,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
                src: "img/ecolo/logo.png",
                size: "small"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
                  position: "left",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
                    name: "Home",
                    href: "#essai",
                    active: activeItem === 'Home',
                    onClick: this.handleItemClick
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
                  position: "right",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
                    name: "Interet",
                    href: "#interet" + html,
                    active: activeItem === 'Interet',
                    onClick: this.handleItemClick
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
                    name: "Les dispositifs",
                    href: "#dispositif" + html,
                    active: activeItem === 'Les dispositifs',
                    onClick: this.handleItemClick
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
                    name: "Notre mission",
                    href: "#mission" + html,
                    active: activeItem === 'Notre mission',
                    onClick: this.handleItemClick
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
                    name: "Nos partenaires",
                    href: "#partenaires" + html,
                    active: activeItem === 'Nos partenaires',
                    onClick: this.handleItemClick
                  })]
                })]
              })]
            })
          })
        }), children]
      })
    });
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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Media, {
      as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Sidebar"].pushable,
      between: ["module", "tablet"],
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Sidebar"].Pushable, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Sidebar"], {
          as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"],
          animation: "push",
          onHide: this.handleSidebarHide,
          vertical: true,
          visible: sidebarOpened,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
            name: "Home",
            href: "/",
            active: activeItem === 'Home',
            onClick: this.handleItemClick
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
            name: "Interet",
            href: "#interet" + html,
            active: activeItem === 'Interet',
            onClick: this.handleItemClick
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
            name: "Les dispositifs",
            href: "#aide" + html,
            active: activeItem === 'Les dispositifs',
            onClick: this.handleItemClick
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
            name: "Notre mission",
            href: "#mission" + html,
            active: activeItem === 'Notre mission',
            onClick: this.handleItemClick
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
            name: "Nos partenaires",
            href: "#partenaire" + html,
            active: activeItem === 'Nos partenaires',
            onClick: this.handleItemClick
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Sidebar"].Pusher, {
          dimmed: sidebarOpened,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
            textAlign: "center",
            style: {
              minHeight: 250,
              padding: '0.5em 0em'
            },
            vertical: true,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
                inverted: true,
                secondary: true,
                size: "tiny",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
                  onClick: this.handleToggle,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
                    circular: true,
                    color: "teal",
                    name: "sidebar"
                  })
                })
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_pages_Mobile_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
              mobile: true
            })]
          }), children]
        })]
      })
    });
  }

}

const MyMenu = ({
  children
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(MediaContextProvider, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(DesktopContainer, {
      children: children
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(MobileContainer, {
      children: children
    })]
  })
});

/* harmony default export */ __webpack_exports__["default"] = (MyMenu);

/***/ }),

/***/ "./pages/Mission.js":
/*!**************************!*\
  !*** ./pages/Mission.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renove; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);




class Renove extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      mobile
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          style: {
            fontFamily: "Comic sans MS",
            textAlign: "center",
            fontSize: 30
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("blockquote", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
              children: "\xC0 propos de Green Package RTS"
            })
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        fluid: true,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
          vertical: true,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
            container: true,
            stackable: true,
            verticalAlign: "center",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
                width: 8,
                style: {
                  fontFamily: "Comic sans MS"
                },
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
                  style: {
                    fontFamily: "Comic sans MS",
                    color: "Green",
                    paddingTop: 90
                  },
                  children: "Notre Mission"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
                  color: "green",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h4", {
                    children: ["Nous nous occupons de mener \xE0 bien votre projet sur la r\xE9novation \xE9nerg\xE9tique.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Notre priorit\xE9 est de vous donner toutes les informations n\xE9cessaires \xE0 la r\xE9alisation de celui-ci. Il est normal de se perdre dans cet oc\xE9an d'informations diverses et vari\xE9es et notre mission est de vous guider.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Nous prenons en charge toutes les d\xE9marches administratives, constituons le dossier, contactons les diff\xE9rents artisans reconnus garants de l'environnement (RGE) pr\xE8s de chez vous. Un agent de ma\xEEtrise \xE0 l'ouvrage (AMO) sera pr\xE9sent avant les travaux pour la faisabilit\xE9 de votre projet et \xE0 la fin pour v\xE9rifier que ceux-ci sont r\xE9alis\xE9s dans les r\xE8gles de l'art.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Nous vous assurons une prise en charge totale avec Action Logement apr\xE8s validation de votre dossier.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                      children: "Aucune installation ne sera effectu\xE9e sans accord pr\xE9alable de notre partenaire et aucun frais ne vous sera factur\xE9 malgr\xE9 un \xE9ventuel refus."
                    })]
                  })
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
                floated: "left",
                width: 6,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
                  style: {
                    fontFamily: "Comic sans MS",
                    color: "Green",
                    paddingTop: 90
                  },
                  children: "Pourquoi nous faire confiance"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
                  color: "green",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h4", {
                    style: {
                      fontFamily: 'Times New Roman'
                    },
                    children: ["Notre travail est encadr\xE9 par les diff\xE9rents organismes existants et chacun dispose de leur protocole.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), " Les aides dont vous pourrez b\xE9n\xE9ficier seront totalement transparentes et les documents attestant de vos aides vous seront directement transmis par l'organisme en question.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Nous vous accompagnerons dans ce travail tr\xE8s minutieux et toutes les d\xE9marches administratives seront effectu\xE9es par nos soins.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Vous pourrez trouver des t\xE9moignages attestant de notre s\xE9rieux et le procesus d'accompagnement du d\xE9but jusqu'\xE0 la fin du projet. "]
                  })
                })]
              })]
            })
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
        style: {
          backgroundImage: "url('img/ecolo/logo.png')",
          backgroundRepeat: "no-repeat",
          height: 300,
          textAlign: "center",
          backgroundPosition: "center",
          paddingTop: 250
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "submit",
          color: "green",
          children: "V\xE9rifier mon \xE9ligibilit\xE9"
        })
      })]
    });
  }

}

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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-animated-css */ "react-animated-css");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_animated_css__WEBPACK_IMPORTED_MODULE_3__);




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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      text: true,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_animated_css__WEBPACK_IMPORTED_MODULE_3__["Animated"], {
        animationIn: "fadeIn",
        animationOut: "fadeOut",
        animationInDuration: 5000,
        animationOutDuration: 1000,
        isVisible: true,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
          src: "img/ecolo/logo.png",
          size: "small",
          centered: true
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
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
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
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
        })]
      })
    });
  }

}

/***/ }),

/***/ "./pages/Pourquoi.js":
/*!***************************!*\
  !*** ./pages/Pourquoi.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pourquoi; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





class Pourquoi extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      mobile
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          style: {
            fontFamily: "Comic sans MS",
            textAlign: "center",
            paddingTop: 30,
            fontSize: 30
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("blockquote", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
              children: "Pourquoi choisir le remplacement de votre systeme de chauffage"
            })
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Group, {
          centered: true,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
              src: "img/ecolo/argent-economie.png",
              wrapped: true,
              ui: false
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Content, {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
                style: {
                  textAlign: 'center'
                },
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
                  children: "Les avantages de la pompe \xE0 chaleur"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Description, {
                style: {
                  textAlign: "center",
                  backgroundColor: 'whitesmoke',
                  fontFamily: 'Comic Sans MS',
                  lineHeight: 1.5
                },
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("mark", {
                    children: "Une faible consommation d\u2019\xE9nergie :"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Pour 1kWh d\u2019\xE9lectricit\xE9 consomm\xE9e pour fonctionner, la pac restitue 3 \xE0 4 kWh de chaleur. Elle permet ainsi de r\xE9duire consid\xE9rablement les d\xE9penses (votre facture de chauffage peut \xEAtre divis\xE9e par 3 \xE0 4 !) ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("mark", {
                    children: "Un confort d\u2019utilisation :"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "La pac fonctionne de fa\xE7on autonome, elle chauffe rapidement et assure une temp\xE9rature stable dans toutes les pi\xE8ces", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("mark", {
                    children: "Une pose simple :"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "La pac air eau peut se raccorder sur l\u2019installation de chauffage existante ou sur un plancher chauffant", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("mark", {
                    children: "Pas de rejets :"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Ce syst\xE8me de chauffage ne rejette pas de fum\xE9es dans l\u2019atmosph\xE8re, il n\u2019y a donc aucune probl\xE9matique de conduit d\u2019\xE9vacuation \xE0 pr\xE9voir ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("mark", {
                    children: "Un seul appareil pour tous vos besoins :"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Le syst\xE8me va produire le chauffage et l\u2019eau chaude et pourra \xE9galement rafraichir vos pi\xE8ces en p\xE9riode estivale (si vous optez pour un mod\xE8le r\xE9versible)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {})]
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
              src: "img/ecolo/ecologie.png",
              wrapped: true,
              ui: false
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Content, {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
                style: {
                  textAlign: 'center'
                },
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
                  children: "Ecologie"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Description, {
                style: {
                  textAlign: "center",
                  backgroundColor: 'whitesmoke',
                  fontFamily: 'Comic Sans MS',
                  lineHeight: 1.5
                },
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("mark", {
                    children: "L'impact environnemental des pompes \xE0 chaleur"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Le fonctionnement d\u2019une PAC repose sur l\u2019usage des \xE9nergies renouvelables. Elle utilise les calories pr\xE9sentes dans l\u2019air ext\xE9rieur pour chauffer le logement. Ces derni\xE8res ne sont pas polluantes. En fonction du coefficient de performance (COP), la consommation d\u2019\xE9nergie pour chauffer l\u2019habitation sera fortement r\xE9duite.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("mark", {
                    children: " Peu de rejets dans l'atmosph\xE8re"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "La pompe \xE0 chaleur n\u2019exploite pas directement de fioul, gaz ou autre combustible fossile. Les rejets de CO2 sont relativement faibles par rapport \xE0 une chaudi\xE8re classique. Ceux de NOx (oxydes d'azote) sont inexistants.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("mark", {
                    children: "La pompe \xE0 chaleur air eau:"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "une solution \xE9cologique et \xE9conomique Comme nous venons de le voir, les PAC pr\xE9servent globalement les ressources de la plan\xE8te. Elles sont, pour l\u2019heure, un mode de chauffage \xE9coresponsable. De plus, les innovations futures am\xE9lioreront encore davantage l\u2019empreinte environnementale de ces appareils."]
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
              src: "img/ecolo/france.png",
              wrapped: true,
              ui: false
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Content, {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
                style: {
                  textAlign: "center"
                },
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
                  children: "Subvention"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Description, {
                style: {
                  textAlign: "center",
                  backgroundColor: 'whitesmoke',
                  fontFamily: 'Comic Sans MS',
                  lineHeight: 1.5
                },
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("mark", {
                    children: "Action Logement : Nouvelle aide pour les salari\xE9s du priv\xE9"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "L\u2019organisme Action Logement, propose une nouvelle aide : une aide pour financer l\u2019Installation de votre Pompe \xE0 Chaleur. Cette aide est attribu\xE9e aux propri\xE9taires ou locataire. L\u2019aide \xE0 la r\xE9novation \xE9nerg\xE9tique d\u2019Action Logement a pour objectif de couvrir l\u2019int\xE9gralit\xE9 du co\xFBt des travaux, et son montant est plafonn\xE9 \xE0 20 000\u20AC. C\u2019est gr\xE2ce \xE0 cette aide qui appara\xEEt fin 2020 que cette pompe \xE0 chaleur peut aujourd\u2019hui vous \xEAtre propos\xE9e \xE0 un euro symbolique ! Cumulez plusieurs aides travaux ! De plus, vous aurez la possibilit\xE9 de cumuler cette aide avec les diff\xE9rentes primes & aides d\xE9j\xE0 existantes."]
              })]
            })]
          })]
        })
      })]
    });
  }

}

/***/ }),

/***/ "./pages/Renove.js":
/*!*************************!*\
  !*** ./pages/Renove.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renove; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





class Renove extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      mobile
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          style: {
            fontFamily: "Comic sans MS",
            textAlign: "center",
            fontSize: 30
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("blockquote", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
              children: "La Prime R\xE9no'v, c'est quoi ?"
            })
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        fluid: true,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
          vertical: true,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
            container: true,
            stackable: true,
            verticalAlign: "center",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
                width: 8,
                style: {
                  fontFamily: "Comic sans MS"
                },
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                  src: "img/ecolo/primerenov.png",
                  centered: true
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
                width: 10,
                style: {
                  paddingTop: 90
                },
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                  src: "img/ecolo/maison-pompe-a-chaleur.jpg",
                  size: "large",
                  centered: true
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
                floated: "left",
                width: 6,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
                  style: {
                    fontFamily: "Comic sans MS",
                    color: "Green",
                    paddingTop: 90
                  },
                  children: "La Prime R\xE9no'v, c'est quoi ?"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
                  color: "green",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h4", {
                    style: {
                      fontFamily: 'Times New Roman'
                    },
                    children: ["Pour l\u2019obtenir, il est n\xE9cessaire de cr\xE9er un compte en ligne sur le site maprimerenov.gouv.fr.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "La demande doit \xEAtre faite avant le d\xE9but des travaux. Plusieurs conditions sont n\xE9cessaires pour en b\xE9n\xE9ficier. ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "L\u2019installation de la pompe \xE0 chaleur devra notamment \xEAtre effectu\xE9e par un professionnel qualifi\xE9 RGE QualiPAC.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Pour en savoir plus sur la Prime R\xE9nov', t\xE9l\xE9charger le document ci-dessous lequel vous souhaiter effectuer des travaux est votre r\xE9sidence principale ou celle de votre locataire."]
                  })
                })]
              })]
            })
          })
        })
      })]
    });
  }

}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ "./pages/Home.js");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @artsy/fresnel */ "@artsy/fresnel");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_3__);





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

class IndexContainer extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Media, {
      greaterThan: "mobile",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {})
    });
  }

}

class MobileIndex extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Media, {
      at: "mobile",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
        mobile: true
      })
    });
  }

}

class Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(MediaContextProvider, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(IndexContainer, {
          children: this.props.children
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(MobileIndex, {
          children: this.props.children
        })]
      })
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

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

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9DZWUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvRGlzcG9zaXRpZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Ib21lLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvTWlzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Nb2JpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvUG91cnF1b2kuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvUmVub3ZlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcnRzeS9mcmVzbmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZW1haWxqcy1jb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hbmltYXRlZC1jc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiSGVhZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiZW1haWxqcyIsIk15TGF5b3V0Iiwic3RhdGUiLCJjaGlsZHJlbiIsIkNlZSIsIm1vYmlsZSIsImZvbnRGYW1pbHkiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsInBhZGRpbmdUb3AiLCJjb2xvciIsIkRpc3Bvc2l0aWYiLCJIb21lIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwicHJvcHJpbyIsInNhbGFyaWUiLCJjaGF1ZmZhZ2UiLCJmYW1pbGxlIiwiZmlzY2FsaXRlIiwibm9tIiwicHJlbm9tIiwiYWRyZXNzZSIsImxvY2FsaXRlIiwiZW1haWwiLCJ0ZWxlcGhvbmUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImVycm9yUHJvcHJpbyIsImNvbnRlbnQiLCJwb2ludGluZyIsImVycm9yU2FsYXJpZSIsImVycm9yQ2hhdWZmYWdlIiwiZXJyb3JGYW1pbGxlIiwiZXJyb3JGaXNjYWxpdGUiLCJhbGVydCIsImZpc2NhbGl0w6kiLCJkYXRhQ29udGFjdCIsInRlbXBsYXRlUGFyYW1zIiwiZnJvbV9uYW1lIiwidG9fbmFtZSIsInBlbm9tIiwidGhlbiIsInJlc3VsdCIsInRleHQiLCJlcnJvciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJiYWNrZ3JvdW5kQ29sb3IiLCJEcm9wZG93biIsImhhbmRsZUNoYW5nZSIsImtleSIsIk1lZGlhQ29udGV4dFByb3ZpZGVyIiwiTWVkaWEiLCJjcmVhdGVNZWRpYSIsImJyZWFrcG9pbnRzIiwidGFibGV0IiwiY29tcHV0ZXIiLCJlY3JhbiIsImh0bWwiLCJEZXNrdG9wQ29udGFpbmVyIiwiYWN0aXZlSXRlbSIsImZpeGVkIiwibm9kZSIsInNob3dGaXhlZE1lbnUiLCJoaWRlRml4ZWRNZW51IiwiaGFuZGxlSXRlbUNsaWNrIiwiTW9iaWxlQ29udGFpbmVyIiwic2lkZWJhck9wZW5lZCIsIlNpZGViYXIiLCJwdXNoYWJsZSIsIk1lbnUiLCJoYW5kbGVTaWRlYmFySGlkZSIsIm1pbkhlaWdodCIsInBhZGRpbmciLCJoYW5kbGVUb2dnbGUiLCJNeU1lbnUiLCJSZW5vdmUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiaGVpZ2h0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiTW9iaWxlIiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsInRleHREZWNvcmF0aW9uIiwiUG91cnF1b2kiLCJsaW5lSGVpZ2h0IiwiSW5kZXhDb250YWluZXIiLCJNb2JpbGVJbmRleCIsIkluZGV4Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBR2UsTUFBTUEsTUFBTixTQUFxQkMsNENBQUssQ0FBQ0MsU0FBM0IsQ0FBcUM7QUFDaERDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2YsVUFBTUEsS0FBTjtBQUVIOztBQUVEQyxRQUFNLEdBQUc7QUFDTCx3QkFDSTtBQUFBLDhCQUNJO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBLFVBREosZUFFSTtBQUFNLGNBQUksRUFBQyxhQUFYO0FBQXlCLGlCQUFPLEVBQUM7QUFBakMsVUFGSixlQUdJO0FBQU0sY0FBSSxFQUFDLFFBQVg7QUFBb0IsaUJBQU8sRUFB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OztBQVgrQjs7QUFhckIyRixvRUFBZixFOzs7Ozs7Ozs7OztBQ2pEQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNeU1lbnUgZnJvbSBcIi4uL3BhZ2VzL01lbnUuanNcIlxyXG5pbXBvcnQgKiBhcyBlbWFpbGpzIGZyb20gJ2VtYWlsanMtY29tJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+cmVub3ZhdGlvbjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cInJlbm92YXRpb24gdGVydGlhaXJlIHNlcnZpY2VcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJlbWlsZSBjaGVtbWFtYVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcImNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJwb21wZSBhIGNoYWxldXIscGxvbWJlcmllLGVsZWN0cmljaXRlLHNhbGxlIGRlIGJhaW5cIiAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGFzeW5jIHJlbD1cInN0eWxlc2hlZXRcIiBsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjAuMS9kaXN0L3NlbWFudGljLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL21lbnUuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FuaW1hdGUuY3NzLzMuNS4yL2FuaW1hdGUubWluLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2VtYWlsanMtY29tQDIvZGlzdC9lbWFpbC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FwaS5qc1wiIGFzeW5jIGRlZmVyPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbGpzLmluaXQoXCJZT1VSX1VTRVJfSURcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkPlxyXG5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxNeU1lbnUgLz5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIlxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUxheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmQsIEltYWdlLCBDb250YWluZXIsIFNlZ21lbnQsIEdyaWQsIEl0ZW0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENlZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbW9iaWxlIH0gPSB0aGlzLnByb3BzXHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJDb21pYyBzYW5zIE1TXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDMwLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJsb2NrcXVvdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExlcyBDZXJ0aWZpY2F0cyBkJ8OJY29ub21pZXMgZCfDiW5lcmdpZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrcXVvdGU+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCB2ZXJ0aWNhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0YWNrYWJsZSB2ZXJ0aWNhbEFsaWduPSdjZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0gc3R5bGU9e3sgZm9udEZhbWlseTogXCJDb21pYyBzYW5zIE1TXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvZWNvbG8vbG9nb2NlZS5wbmdcIiBjZW50ZXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9IHN0eWxlPXt7IHBhZGRpbmdUb3A6IDkwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1nL2Vjb2xvL21haXNvbi1leHRlcmlldXIuanBnXCIgc2l6ZT0nbGFyZ2UnIGNlbnRlcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9J2xlZnQnIHdpZHRoPXs2fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250RmFtaWx5OiBcIkNvbWljIHNhbnMgTVNcIiwgY29sb3I6IFwiR3JlZW5cIiwgcGFkZGluZ1RvcDogOTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZXMgQ2VydGlmaWNhdHMgZCfDiWNvbm9taWVzIGQnw4luZXJnaWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPSdncmVlbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udEZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFucyBsZSBjYWRyZSBkJ3VuZSBvYmxpZ2F0aW9uIGVuY2FkcsOpZSBwYXIgbCdFdGF0LCBjZXJ0YWluZXMgZW50cmVwcmlzZXMgKGZvdXJuaXNzZXVyIGRlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdheiBvdSBkJ8OpbGVjdHJpY2l0w6ksIGFjdGV1cnMgZGUgbGEgZ3JhbmRlIGRpc3RyaWJ1dGlvbiBheWFudCBkZXMgc3RhdGlvbnMgZXNzZW5jZSwgZW5zZWlnbmVzIHDDqXRyb2xpw6hyZXMpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2VudCBkZXMgcHJpbWVzIHBvdXIgdm91cyBhaWRlciDDoCByw6lhbGlzZXIgZGVzIMOpY29ub21pZXMgZCfDqW5lcmdpZS48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlcyBhaWRlcyBzb250IGFjY2Vzc2libGVzIMOgIHRvdXMgc2FucyBjb25kaXRpb25zIGRlIHJlc3NvdXJjZXMuPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMJ2F2YW50YWdlIGRlIGNlcyBlbnRyZXByaXNlcyBjJ2VzdCBkZSBkw6lmaXNjYWxpc2VyIGxldXIgdGF4ZSBjYXJib25lIGVuIHZvdXMgYXR0cmlidWFudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZSBwcmltZS4uPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmQsIEltYWdlLCBDb250YWluZXIsIFNlZ21lbnQsR3JpZCxJdGVtfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3Bvc2l0aWYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IG1vYmlsZSB9ID0gdGhpcy5wcm9wc1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMzAsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2txdW90ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uIExvZ2VtZW50LE1hIFByaW1lIFJlbm92JyxDRUU6QWN0ZXVycyBNYWpldXJzIHBvdXIgbGE8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRSQU5TSVRJT04gRU5FUkdFVElRVUU8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9ibG9ja3F1b3RlPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgdmVydGljYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdGFja2FibGUgdmVydGljYWxBbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gZmxvYXRlZD1cImxlZnRcIiB3aWR0aD17OH0gc3R5bGU9e3sgZm9udEZhbWlseTogXCJDb21pYyBzYW5zIE1TXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvZWNvbG8vYWN0aW9uLWxvZ2VtZW50LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uICB3aWR0aD17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1nL2Vjb2xvL3BvbXBlYWNoYWxldXIucG5nXCIgc2l6ZT1cIm1lZGl1bVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9J2xlZnQnIHdpZHRoPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiLCBjb2xvcjpcIkdyZWVuXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZXMgY29uZGl0aW9ucyBwb3VyIGLDqW7DqWZpY2llciBkZSBsJ2FpZGUgw6AgbGEgcsOpbm92YXRpb24gw6luZXJnw6l0aXF1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPSdncmVlbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udEZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZvcyByZXZlbnVzIG91IGNldXggZGUgdm90cmUgbG9jYXRhaXJlIHNvbnQgaW5mw6lyaWV1cnMgYXV4IHBsYWZvbmRzIGRlIHJlc3NvdXJjZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXMgbcOpbmFnZXMgw6AgcmV2ZW51cyBtb2Rlc3Rlcy48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e2ZvbnRGYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nfX0+Vm90cmUgbG9nZW1lbnQgZXN0IHNpdHXDqSBlbiB6b25lIEIyIG91IEMgb3UgZGFucyB1bmUgY29tbXVuZSBkdSBwcm9ncmFtbWUgQWN0aW9uIGPFk3VyIGRlIHZpbGxlLjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQ+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7Zm9udEZhbWlseTogJ1RpbWVzIE5ldyBSb21hbid9fT5MZSBsb2dlbWVudCBkYW5zIGxlcXVlbCB2b3VzIHNvdWhhaXRlciBlZmZlY3R1ZXIgZGVzIHRyYXZhdXggZXN0IHZvdHJlIHLDqXNpZGVuY2UgcHJpbmNpcGFsZSBvdSBjZWxsZSBkZSB2b3RyZSBsb2NhdGFpcmUuPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLEltYWdlLCBHcmlkLCBEcm9wZG93biwgU2VnbWVudCwgRW1iZWQsIEZvcm0sIENoZWNrYm94LEl0ZW19IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0XCJcclxuaW1wb3J0IFBvdXJxdW9pIGZyb20nLi4vcGFnZXMvUG91cnF1b2knXHJcbmltcG9ydCAqIGFzIGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBEaXNwb3NpdGlmIGZyb20gJy4uL3BhZ2VzL0Rpc3Bvc2l0aWYnXHJcbmltcG9ydCBSZW5vdmUgZnJvbSBcIi4uL3BhZ2VzL1Jlbm92ZVwiXHJcbmltcG9ydCBDZWUgZnJvbVwiLi4vcGFnZXMvQ2VlXCJcclxuaW1wb3J0IE1pc3Npb24gZnJvbSBcIi4uL3BhZ2VzL01pc3Npb25cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge3Byb3ByaW86XCJcIixzYWxhcmllOlwiXCIsY2hhdWZmYWdlOlwiXCIsZmFtaWxsZTpcIlwiLGZpc2NhbGl0ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbm9tOlwiXCIscHJlbm9tOlwiXCIsYWRyZXNzZTpcIlwiLGxvY2FsaXRlOlwiXCIsZW1haWw6XCJcIix0ZWxlcGhvbmU6XCJcIn07XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZSwgeyBuYW1lLCB2YWx1ZSB9KSA9PiB0aGlzLnNldFN0YXRlKHsgW25hbWVdOiB2YWx1ZSB9KTtcclxuICAgIFxyXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucHJvcHJpbyA9PT0gXCJcIiA/IHRoaXMuc2V0U3RhdGUoeyBlcnJvclByb3ByaW86IHsgY29udGVudDpcIlwiLHBvaW50aW5nOm51bGx9fSkgOiB0aGlzLnNldFN0YXRlKHsgZXJyb3JQcm9wcmlvOiBudWxsIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2FsYXJpZSA9PT0gXCJcIiA/IHRoaXMuc2V0U3RhdGUoeyBlcnJvclNhbGFyaWU6IHsgY29udGVudDpcIlwiLHBvaW50aW5nOm51bGx9fSkgOiB0aGlzLnNldFN0YXRlKHsgZXJyb3JTYWxhcmllOiBudWxsIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2hhdWZmYWdlID09PSBcIlwiID8gdGhpcy5zZXRTdGF0ZSh7IGVycm9yQ2hhdWZmYWdlOiB7IGNvbnRlbnQ6IFwiXCIsIHBvaW50aW5nOm51bGx9fSkgOiB0aGlzLnNldFN0YXRlKHsgZXJyb3JDaGF1ZmZhZ2U6IG51bGwgfSlcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mYW1pbGxlID09PSBcIlwiID8gdGhpcy5zZXRTdGF0ZSh7IGVycm9yRmFtaWxsZTogeyBjb250ZW50OiBcIlwiLCBwb2ludGluZzpudWxsfX0pOiB0aGlzLnNldFN0YXRlKHsgZXJyb3JGYW1pbGxlOiBudWxsIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZmlzY2FsaXRlID09PSBcIlwiID8gdGhpcy5zZXRTdGF0ZSh7IGVycm9yRmlzY2FsaXRlOiB7IGNvbnRlbnQ6IFwiXCIsIHBvaW50aW5nOm51bGx9fSkgOiB0aGlzLnNldFN0YXRlKHsgZXJyb3JGaXNjYWxpdGU6IG51bGwgfSlcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcm9wcmlvID09PSBcIlwiID8gYWxlcnQoXCJTZWxlY3Rpb25uZXogdW4gY2hvaXhcIikgOlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNhbGFyaWUgPT09IFwiXCIgPyBhbGVydChcIlNlbGVjdGlvbm5leiB1biBjaG9peFwiKSA6XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2hhdWZmYWdlID09PSBcIlwiID8gYWxlcnQoXCJTZWxlY3Rpb25uZXogdW4gY2hvaXhcIik6XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZmFtaWxsZSA9PT0gXCJcIiA/IGFsZXJ0KFwiU2VsZWN0aW9ubmV6IHVuIGNob2l4XCIpOiBcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5maXNjYWxpdMOpID09PSBcIlwiID8gYWxlcnQoXCJTZWxlY3Rpb25uZXogdW4gY2hvaXhcIik6dGhpcy5kYXRhQ29udGFjdCgpXHJcbiAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgZGF0YUNvbnRhY3QoKXsgXHJcbiAgICBjb25zdCB7IHByb3ByaW8sIHNhbGFyaWUsIGNoYXVmZmFnZSwgZmFtaWxsZSwgZmlzY2FsaXRlLFxyXG4gICAgICAgICAgICBub20sIHByZW5vbSwgYWRyZXNzZSwgbG9jYWxpdGUsIGVtYWlsLCB0ZWxlcGhvbmV9PXRoaXMuc3RhdGVcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdGVtcGxhdGVQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIGZyb21fbmFtZTogZW1haWwsXHJcbiAgICAgICAgICAgIHRvX25hbWU6IG5vbSxcclxuICAgICAgICAgICAgcHJvcHJpbzogcHJvcHJpbyxcclxuICAgICAgICAgICAgc2FsYXJpZTogc2FsYXJpZSxcclxuICAgICAgICAgICAgY2hhdWZmYWdlOmNoYXVmZmFnZSxcclxuICAgICAgICAgICAgZmFtaWxsZTpmYW1pbGxlLFxyXG4gICAgICAgICAgICBmaXNjYWxpdGU6ZmlzY2FsaXRlLFxyXG4gICAgICAgICAgICBhZHJlc3NlOmFkcmVzc2UsXHJcbiAgICAgICAgICAgIGxvY2FsaXRlOmxvY2FsaXRlLFxyXG4gICAgICAgICAgICBlbWFpbDplbWFpbCxcclxuICAgICAgICAgICAgdGVsZXBob25lOnRlbGVwaG9uZSxcclxuICAgICAgICAgICAgcGVub206cHJlbm9tLFxyXG4gICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVtYWlsanMuc2VuZCgnbXlfR21haWwnLCdlbGlnaWJpbGl0ZScsIHRlbXBsYXRlUGFyYW1zLCd1c2VyX080clRteXZDeWhuVVlUSnJjemtNdicpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KHJlc3VsdC50ZXh0KTtcclxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvci50ZXh0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnByb3ByaW8gPT09IFwiXCIsdGhpcy5zdGF0ZS5zYWxhcmllID09PSBcIlwiICx0aGlzLnN0YXRlLmNoYXVmZmFnZSA9PT0gXCJcIix0aGlzLnN0YXRlLmZhbWlsbGUgPT09IFwiXCIgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZpc2NhbGl0ZSA9PT0gXCJcIiBcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubm9tPVwiXCIsdGhpcy5zdGF0ZS5wcmVub209XCJcIix0aGlzLnN0YXRlLmFkcmVzc2U9XCJcIix0aGlzLnN0YXRlLmxvY2FsaXRlPVwiXCIsdGhpcy5zdGF0ZS5lbWFpbD1cIlwiLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50ZWxlcGhvbmU9XCJcIlxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCB7IG1vYmlsZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIEhvbWUucHJvcFR5cGVzID0ge1xyXG4gICAgICAgICAgICBtb2JpbGU6IFByb3BUeXBlcy5ib29sXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IHZlcnRpY2FsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3RhY2thYmxlIHZlcnRpY2FsQWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9XCJsZWZ0XCIgd2lkdGg9ezZ9c3R5bGU9e3tmb250RmFtaWx5OiBcIkFyaWFsXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuJ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImdyZWVuXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOm1vYmlsZSA/IDI1IDo0MCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVm90cmUgUG9tcGUgw6AgY2hhbGV1ciBlbnRpZXJlbWVudCBmaW5hbmPDqSBwYXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9lY29sby9hY3Rpb24tbG9nZW1lbnQucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbWJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3BlY3RSYXRpbz0nMTY6OSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9JzBtMVFXVjN2VHpvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0naW1nL2Vjb2xvL2Vjb2xvZ2lleW91dHViZS5qcGcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT0neW91dHViZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcImNvbWljIHNhbnMgTVNcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjb2xvcjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOm1vYmlsZT8yNTozNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1PkNvbW1lbnQgbCdvYnRlbmlyPC91PjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5JbWFnZSBzcmM9XCJpbWcvZWNvbG8vdmFsaWRlei5wbmdcIiBhbHQ9XCJ2YWxpZGV6XCIgc2l6ZT0ndGlueScvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5Db250ZW50IHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5IZWFkZXI+UmVtcGxpc3NleiBsZSBmb3JtdWxhaXJlPC9JdGVtLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uSW1hZ2Ugc2l6ZT0ndGlueScgc3JjPVwiaW1nL2Vjb2xvL3RlbGVwaG9uZS5wbmdcIiBhbHQ9XCJ0ZWxlcGhvbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5Db250ZW50IHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5IZWFkZXI+IFVuIHByb2Zlc3Npb25uZWwgdm91cyBjb250YWN0IGFmaW4gZCdvdXZyaXIgdm90cmUgZG9zc2llciBldCBjb252ZW5pciBkJ3VuIHJlbmRlei12b3VzPC9JdGVtLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5JbWFnZSBzaXplPSd0aW55JyBzcmM9XCJpbWcvZWNvbG8vb3V2cmllci5wbmdcIiBhbHQ9XCJvdXZyaWVyIFJHRVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkNvbnRlbnQgdmVydGljYWxBbGlnbj0nbWlkZGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkhlYWRlcj4gVW5lIMOpcXVpcGUgZGUgdGVjaG5pY2llbnMgY29uZmlybcOpcyBSR0Ugc2UgZMOpcGxhY2UgY2hleiB2b3VzIGFmaW4gZGUgcsOpYWxpc2VyIHZvcyB0cmF2YXV4PC9JdGVtLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5JbWFnZSBzaXplPSd0aW55JyBzcmM9XCJpbWcvZWNvbG8vcmVtZXJjaWVtZW50LnBuZ1wiIGFsdD1cInJlbWVyY2llbWVudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkNvbnRlbnQgdmVydGljYWxBbGlnbj0nbWlkZGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkhlYWRlcj5Wb3VzIG5lIHBheWV6IHF1ZSAxIGV1cm8gU3VyIHByw6lzZW50YXRpb24gZHUgZGV2aXMgLCBzYW5zIGF1Y3VuIGZyYWlzIGF2YW5jw6k8L0l0ZW0uSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uSW1hZ2Ugc2l6ZT0nc21hbGwnIHNyYz1cImltZy9lY29sby9sb2dvY2VlLnBuZ1wiIGFsdD1cImxvZ28tY2VlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uQ29udGVudCB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uSGVhZGVyPmwnZXRhdCBmaW5hbmNlICBwb3VyIDHigqwgc3ltYm9saXF1ZTwvSXRlbS5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gZmxvYXRlZD0ncmlnaHQnIHdpZHRoPXs4fSBzdHlsZT17eyBwYWRkaW5nVG9wOiBtb2JpbGUgPyAxMCA6MjAsIGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiLGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhbnMgbGUgY2FkcmUgZGUgbGEgdHJhbnNpdGlvbiDDqWNvbG9naXF1ZSwgbCfDiXRhdCBwcmVuZCBlbiBjaGFyZ2UgbGUgY2/Du3QgZGUgbOKAmWluc3RhbGxhdGlvbiBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b3RyZSBwb21wZSDDoCBjaGFsZXVyIHBvdXIgc2V1bGVtZW50IDHigqwgITxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXMgbWlsbGllcnMgZGUgZm95ZXJzIGZyYW7Dp2FpcyBlbiBvbnQgZMOpasOgIHByb2ZpdMOpLCBwb3VycXVvaSBwYXMgdm91cyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4qIHNhaXNpZSBvYmxpZ2F0b2lyZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udEZhbWlseTogXCJDb21pYyBzYW5zIE1TXCIsIGNvbG9yOiBcImdyZWVuXCIsIGZvbnRTaXplOiBtb2JpbGUgPyAyMCA6IDMwLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWw6lyaWZpZXogdm90cmUgw6lsaWdpYml0w6k8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17ZSA9PiB0aGlzLmhhbmRsZVN1Ym1pdChlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yUHJvcHJpb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVm91cyBFdGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cHJvcHJpb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtEcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvcHJpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgY2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JDaGF1ZmZhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlZvdHJlIHR5cGUgZGUgQ2hhdWZmYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y2hhdWZmYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGF1ZmZhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgY2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JGYW1pbGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOb21icmUgZGUgcGVyc29ubmUgdml2YW50IGRhbnMgbGUgZm95ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS0tLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtmYW1pbGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmYW1pbGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIGNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yRmlzY2FsaXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZXZlbnVlIGZpc2NhbCBkZSByw6lmw6lyZW5jZSAoMjAyMCBvdSAyMDE5KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2Zpc2NhbGl0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtEcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlzY2FsaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdOb20nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ub219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249J2xvY2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj0nbGVmdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1Byw6lub20nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQcsOpbm9tJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17OX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByZW5vbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByZW5vbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj0nbGVmdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZHJlc3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0FkcmVzc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRyZXNzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkcmVzc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdMb2NhbGl0w6knXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdMb2NhbGl0w6knXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9jYWxpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sb2NhbGl0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdjb250YWN0QGdtYWlsLmNvbSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nVGVsZXBob25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nMDY5ODYxMTM3MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZWxlcGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZWxlcGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPjxici8+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBsYWJlbD1cIkonYXV0b3Jpc2UgUi5ULlMgw6AgbWUgcmVjb250YWN0ZXIgcG91ciBtZSBjb21tdW5pcXVlciBtb24gc3RhdHV0IGQnw6lsaWdpYmlsaXTDqVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+PGJyLz48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQnV0dG9uIGZsdWlkIHR5cGU9XCJzdWJtaXRcIiBjb2xvcj1cImdyZWVuXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTptb2JpbGUgPzE1OjIwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFbDqXJpZmllciBtb24gw6lsaWdpYmlsaXTDqTwvRm9ybS5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFBvdXJxdW9pIG1vYmlsZS8+XHJcbiAgICAgICAgICAgIDxEaXNwb3NpdGlmIG1vYmlsZS8+XHJcbiAgICAgICAgICAgIDxSZW5vdmUgbW9iaWxlLz5cclxuICAgICAgICAgICAgPENlZSBtb2JpbGUvPlxyXG4gICAgICAgICAgICA8TWlzc2lvbiBtb2JpbGUvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5jb25zdCBwcm9wcmlvID0gW1xyXG5cclxuICAgIHtcclxuICAgICAgICBrZXk6ICcxJyxcclxuICAgICAgICB0ZXh0OiAnUHJvcHJpw6l0YWlyZScsXHJcbiAgICAgICAgdmFsdWU6ICdQcm9wcmnDqXRhaXJlJyxcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzInLFxyXG4gICAgICAgIHRleHQ6ICdMb2NhdGFpcmUnLFxyXG4gICAgICAgIHZhbHVlOiAnTG9jYXRhaXJlJyxcclxuICAgIH1cclxuXVxyXG5cclxuXHJcbmNvbnN0IHNhbGFyaWUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMScsXHJcbiAgICAgICAgdGV4dDogJ1NlY3RldXIgcHVibGljJyxcclxuICAgICAgICB2YWx1ZTogJ1NlY3RldXIgcHVibGljJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMicsXHJcbiAgICAgICAgdGV4dDogJ1NlY3RldXIgcHJpdmUnLFxyXG4gICAgICAgIHZhbHVlOiAnU2VjdGV1ciBwcml2ZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzMnLFxyXG4gICAgICAgIHRleHQ6ICdTZWN0ZXVyIGFncmljb2xlJyxcclxuICAgICAgICB2YWx1ZTogJ1NlY3RldXIgYWdyaWNvbGUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc0JyxcclxuICAgICAgICB0ZXh0OiAnTm9uIHNhbGFyaWUnLFxyXG4gICAgICAgIHZhbHVlOiAnTm9uIHNhbGFyaWUnLFxyXG4gICAgfSxcclxuXHJcbl1cclxuY29uc3QgY2hhdWZmYWdlID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJzEnLFxyXG4gICAgICAgIHRleHQ6ICdFbGVjdHJpcXVlJyxcclxuICAgICAgICB2YWx1ZTogJ0VsZWN0cmlxdWUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcyJyxcclxuICAgICAgICB0ZXh0OiAnRmlvdWwnLFxyXG4gICAgICAgIHZhbHVlOiAnRmlvdWwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICczJyxcclxuICAgICAgICB0ZXh0OiAnR2F6JyxcclxuICAgICAgICB2YWx1ZTogJ0dheicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzQnLFxyXG4gICAgICAgIHRleHQ6ICdBdXRyZScsXHJcbiAgICAgICAgdmFsdWU6ICdBdXRyZScsXHJcbiAgICB9LFxyXG5dXHJcbmNvbnN0IGZhbWlsbGUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMScsXHJcbiAgICAgICAgdGV4dDogJzEnLFxyXG4gICAgICAgIHZhbHVlOiAnMScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzInLFxyXG4gICAgICAgIHRleHQ6ICcyJyxcclxuICAgICAgICB2YWx1ZTogJzInLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICczJyxcclxuICAgICAgICB0ZXh0OiAnMycsXHJcbiAgICAgICAgdmFsdWU6ICczJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNCcsXHJcbiAgICAgICAgdGV4dDogJzQnLFxyXG4gICAgICAgIHZhbHVlOiAnNCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzUgZXQgcGx1cycsXHJcbiAgICAgICAgdGV4dDogJzUgZXQgcGx1cycsXHJcbiAgICAgICAgdmFsdWU6ICc1IGV0IHBsdXMnLFxyXG4gICAgfVxyXG5dXHJcbmNvbnN0IGZpc2NhbGl0ZSA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcxJyxcclxuICAgICAgICB0ZXh0OiAnZGUgMOKCrCDDoCAxOTA3NOKCrCcsXHJcbiAgICAgICAgdmFsdWU6ICdkZSAw4oKsIMOgIDE5MDc04oKsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMicsXHJcbiAgICAgICAgdGV4dDogJ2RlIDE5MDc04oKsIMOgIDI3ODk24oKsJyxcclxuICAgICAgICB2YWx1ZTogJ2RlIDE5MDc04oKsIMOgIDI3ODk24oKsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMycsXHJcbiAgICAgICAgdGV4dDogJ2RlIDI3ODk24oKsIMOgIDMzNTQ34oKsJyxcclxuICAgICAgICB2YWx1ZTogJ2RlIDI3ODk24oKsIMOgIDMzNTQ34oKsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNCcsXHJcbiAgICAgICAgdGV4dDogJ2RlIDMzNTQ34oKsIMOgIDM5MTky4oKsJyxcclxuICAgICAgICB2YWx1ZTogJ2RlIDMzNTQ34oKsIMOgIDM5MTky4oKsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNScsXHJcbiAgICAgICAgdGV4dDogJ2RlIDM5MTky4oKsIMOgIDQ0ODYw4oKsJyxcclxuICAgICAgICB2YWx1ZTogJ2RlIDM5MTky4oKsIMOgIDQ0ODYw4oKsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNicsXHJcbiAgICAgICAgdGV4dDogJysgZGUgNDQ5ODYw4oKsJyxcclxuICAgICAgICB2YWx1ZTogJysgZGUgNDQ5ODYw4oKsJyxcclxuICAgIH1cclxuXVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNyZWF0ZU1lZGlhIH0gZnJvbSAnQGFydHN5L2ZyZXNuZWwnXHJcbmltcG9ydCB7Q29udGFpbmVyLCBJY29uLCBJbWFnZSwgTWVudSxTZWdtZW50LCBTaWRlYmFyLCBWaXNpYmlsaXR5fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IE1vYmlsZSBmcm9tIFwiLi4vcGFnZXMvTW9iaWxlLmpzXCJcclxuXHJcblxyXG5jb25zdCB7IE1lZGlhQ29udGV4dFByb3ZpZGVyLCBNZWRpYSB9ID0gY3JlYXRlTWVkaWEoe1xyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICBtb2JpbGU6IDAsXHJcbiAgICAgICAgdGFibGV0OiA3NjgsXHJcbiAgICAgICAgY29tcHV0ZXI6IDEwMjQsXHJcbiAgICAgICAgZWNyYW46IDExOTJcclxuICAgIH1cclxufSlcclxuXHJcbmNvbnN0IGh0bWwgPSAnJ1xyXG5cclxuY2xhc3MgRGVza3RvcENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHt9XHJcbiAgICBzdGF0ZSA9IHsgYWN0aXZlSXRlbTogJ1BvbXBlIGEgY2hhbGV1cicgfVxyXG5cclxuICAgIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSlcclxuICAgIGhpZGVGaXhlZE1lbnUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZml4ZWQ6IGZhbHNlIH0pXHJcbiAgICBzaG93Rml4ZWRNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZpeGVkOiB0cnVlIH0pXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCB7IGZpeGVkIH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgY29uc3QgeyBhY3RpdmVJdGVtIH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICBcclxuICAgICAgICBEZXNrdG9wQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICAgICAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgICAgICAgICAgIDxNZWRpYSBncmVhdGVyVGhhbj0nbW9iaWxlJz5cclxuICAgICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbmNlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Cb3R0b21QYXNzZWQ9e3RoaXMuc2hvd0ZpeGVkTWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Cb3R0b21QYXNzZWRSZXZlcnNlPXt0aGlzLmhpZGVGaXhlZE1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCB0ZXh0QWxpZ249J2NlbnRlcid2ZXJ0aWNhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IGNvbXBhY3Qgc2l6ZT0nc21hbGwnIHN0YWNrYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1nL2Vjb2xvL2xvZ28ucG5nXCIgc2l6ZT1cInNtYWxsXCIvPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIHBvc2l0aW9uPSdsZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J0hvbWUnIGhyZWY9XCIjZXNzYWlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ0hvbWUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIHBvc2l0aW9uPSdyaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nSW50ZXJldCcgaHJlZj17XCIjaW50ZXJldFwiICsgaHRtbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdJbnRlcmV0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdMZXMgZGlzcG9zaXRpZnMnIGhyZWY9e1wiI2Rpc3Bvc2l0aWZcIiArIGh0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnTGVzIGRpc3Bvc2l0aWZzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdOb3RyZSBtaXNzaW9uJyBocmVmPXtcIiNtaXNzaW9uXCIraHRtbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdOb3RyZSBtaXNzaW9uJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdOb3MgcGFydGVuYWlyZXMnIGhyZWY9e1wiI3BhcnRlbmFpcmVzXCIrIGh0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnTm9zIHBhcnRlbmFpcmVzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Zpc2liaWxpdHk+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcbmNsYXNzIE1vYmlsZUNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHt9XHJcbiAgICBzdGF0ZSA9IHsgYWN0aXZlSXRlbTogJ2hvbWUnIH1cclxuXHJcbiAgICBoYW5kbGVJdGVtQ2xpY2sgPSAoZSwgeyBuYW1lIH0pID0+IHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBuYW1lIH0pXHJcbiAgICBoYW5kbGVTaWRlYmFySGlkZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaWRlYmFyT3BlbmVkOiBmYWxzZSB9KVxyXG4gICAgaGFuZGxlVG9nZ2xlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpZGViYXJPcGVuZWQ6IHRydWUgfSlcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgc2lkZWJhck9wZW5lZCwgYWN0aXZlSXRlbSB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgICAgICBNb2JpbGVDb250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gICAgICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVkaWEgYXM9e1NpZGViYXIucHVzaGFibGV9IGJldHdlZW49e1tcIm1vZHVsZVwiLCBcInRhYmxldFwiXX0+XHJcbiAgICAgICAgICAgICAgICA8U2lkZWJhci5QdXNoYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz17TWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPSdwdXNoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlU2lkZWJhckhpZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3NpZGViYXJPcGVuZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdIb21lJyBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdIb21lJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdJbnRlcmV0JyBocmVmPXtcIiNpbnRlcmV0XCIgKyBodG1sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnSW50ZXJldCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nTGVzIGRpc3Bvc2l0aWZzJyBocmVmPXtcIiNhaWRlXCIgKyBodG1sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnTGVzIGRpc3Bvc2l0aWZzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdOb3RyZSBtaXNzaW9uJyBocmVmPXtcIiNtaXNzaW9uXCIgKyBodG1sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnTm90cmUgbWlzc2lvbid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIk5vcyBwYXJ0ZW5haXJlc1wiIGhyZWY9e1wiI3BhcnRlbmFpcmVcIiArIGh0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdOb3MgcGFydGVuYWlyZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TaWRlYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyLlB1c2hlciBkaW1tZWQ9e3NpZGViYXJPcGVuZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogMjUwLCBwYWRkaW5nOiAnMC41ZW0gMGVtJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgaW52ZXJ0ZWQgc2Vjb25kYXJ5IHNpemU9J3RpbnknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNpcmN1bGFyIGNvbG9yPSd0ZWFsJyBuYW1lPSdzaWRlYmFyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2JpbGUgbW9iaWxlLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TaWRlYmFyLlB1c2hlcj5cclxuICAgICAgICAgICAgICAgIDwvU2lkZWJhci5QdXNoYWJsZT5cclxuICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IE15TWVudSA9ICh7IGNoaWxkcmVuIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPE1lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8RGVza3RvcENvbnRhaW5lcj57Y2hpbGRyZW59PC9EZXNrdG9wQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8TW9iaWxlQ29udGFpbmVyPntjaGlsZHJlbn08L01vYmlsZUNvbnRhaW5lcj5cclxuICAgICAgICA8L01lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeU1lbnUiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29udGFpbmVyLCBTZWdtZW50LCBHcmlkLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5vdmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IG1vYmlsZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8U2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkNvbWljIHNhbnMgTVNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMzAsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2txdW90ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgw4AgcHJvcG9zIGRlIEdyZWVuIFBhY2thZ2UgUlRTPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2txdW90ZT48L3A+XHJcbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IHZlcnRpY2FsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3RhY2thYmxlIHZlcnRpY2FsQWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fSBzdHlsZT17eyBmb250RmFtaWx5OiBcIkNvbWljIHNhbnMgTVNcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiLCBjb2xvcjogXCJHcmVlblwiLCBwYWRkaW5nVG9wOiA5MCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdHJlIE1pc3Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgY29sb3I9J2dyZWVuJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Ob3VzIG5vdXMgb2NjdXBvbnMgZGUgbWVuZXIgw6AgYmllbiB2b3RyZSBwcm9qZXQgc3VyIGxhIHLDqW5vdmF0aW9uIMOpbmVyZ8OpdGlxdWUuPGJyLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RyZSBwcmlvcml0w6kgZXN0IGRlIHZvdXMgZG9ubmVyIHRvdXRlcyBsZXMgaW5mb3JtYXRpb25zIG7DqWNlc3NhaXJlcyDDoCBsYSByw6lhbGlzYXRpb24gZGUgY2VsdWktY2kuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWwgZXN0IG5vcm1hbCBkZSBzZSBwZXJkcmUgZGFucyBjZXQgb2PDqWFuIGQnaW5mb3JtYXRpb25zIGRpdmVyc2VzIGV0IHZhcmnDqWVzIGV0IG5vdHJlIG1pc3Npb24gZXN0IGRlIHZvdXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWlkZXIuPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdXMgcHJlbm9ucyBlbiBjaGFyZ2UgdG91dGVzIGxlcyBkw6ltYXJjaGVzIGFkbWluaXN0cmF0aXZlcywgY29uc3RpdHVvbnMgbGUgZG9zc2llciwgY29udGFjdG9ucyBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWZmw6lyZW50cyBhcnRpc2FucyByZWNvbm51cyBnYXJhbnRzIGRlIGwnZW52aXJvbm5lbWVudCAoUkdFKSBwcsOocyBkZSBjaGV6IHZvdXMuIFVuIGFnZW50IGRlIG1hw650cmlzZSDDoCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwnb3V2cmFnZSAoQU1PKSBzZXJhIHByw6lzZW50IGF2YW50IGxlcyB0cmF2YXV4IHBvdXIgbGEgZmFpc2FiaWxpdMOpIGRlIHZvdHJlIHByb2pldCBldCDDoCBsYSBmaW4gcG91ciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHbDqXJpZmllciBxdWUgY2V1eC1jaSBzb250IHLDqWFsaXPDqXMgZGFucyBsZXMgcsOoZ2xlcyBkZSBsJ2FydC48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm91cyB2b3VzIGFzc3Vyb25zIHVuZSBwcmlzZSBlbiBjaGFyZ2UgdG90YWxlIGF2ZWMgQWN0aW9uIExvZ2VtZW50IGFwcsOocyB2YWxpZGF0aW9uIGRlIHZvdHJlIGRvc3NpZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkF1Y3VuZSBpbnN0YWxsYXRpb24gbmUgc2VyYSBlZmZlY3R1w6llIHNhbnMgYWNjb3JkIHByw6lhbGFibGUgZGUgbm90cmUgcGFydGVuYWlyZSBldCBhdWN1biBmcmFpcyBuZSB2b3VzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyYSBmYWN0dXLDqSBtYWxncsOpIHVuIMOpdmVudHVlbCByZWZ1cy48L3N0cm9uZz48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9J2xlZnQnIHdpZHRoPXs2fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250RmFtaWx5OiBcIkNvbWljIHNhbnMgTVNcIiwgY29sb3I6IFwiR3JlZW5cIiwgcGFkZGluZ1RvcDogOTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3VycXVvaSBub3VzIGZhaXJlIGNvbmZpYW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgY29sb3I9J2dyZWVuJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250RmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdHJlIHRyYXZhaWwgZXN0IGVuY2FkcsOpIHBhciBsZXMgZGlmZsOpcmVudHMgb3JnYW5pc21lcyBleGlzdGFudHMgZXQgY2hhY3VuIGRpc3Bvc2UgZGUgbGV1ciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvY29sZS48YnIvPiBMZXMgYWlkZXMgZG9udCB2b3VzIHBvdXJyZXogYsOpbsOpZmljaWVyIHNlcm9udCB0b3RhbGVtZW50IHRyYW5zcGFyZW50ZXMgZXQgbGVzIGRvY3VtZW50cyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVzdGFudCBkZSB2b3MgYWlkZXMgdm91cyBzZXJvbnQgZGlyZWN0ZW1lbnQgdHJhbnNtaXMgcGFyIGwnb3JnYW5pc21lIGVuIHF1ZXN0aW9uLjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3VzIHZvdXMgYWNjb21wYWduZXJvbnMgZGFucyBjZSB0cmF2YWlsIHRyw6hzIG1pbnV0aWV1eCBldCB0b3V0ZXMgbGVzIGTDqW1hcmNoZXMgYWRtaW5pc3RyYXRpdmVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vyb250IGVmZmVjdHXDqWVzIHBhciBub3Mgc29pbnMuPGJyLz5Wb3VzIHBvdXJyZXogdHJvdXZlciBkZXMgdMOpbW9pZ25hZ2VzIGF0dGVzdGFudCBkZSBub3RyZSBzw6lyaWV1eCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV0IGxlIHByb2Nlc3VzIGQnYWNjb21wYWduZW1lbnQgZHUgZMOpYnV0IGp1c3F1J8OgIGxhIGZpbiBkdSBwcm9qZXQuIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxTZWdtZW50IHN0eWxlPXt7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCdpbWcvZWNvbG8vbG9nby5wbmcnKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0Olwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDozMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjpcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246XCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDoyNTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNvbG9yPVwiZ3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFbDqXJpZmllciBtb24gw6lsaWdpYmlsaXTDqTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEhlYWRlciwgSW1hZ2UsIEdyaWQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHsgQW5pbWF0ZWQgfSBmcm9tIFwicmVhY3QtYW5pbWF0ZWQtY3NzXCI7XHJcblxyXG4vL21lbnUgbW9iaWxlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vYmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbW9iaWxlIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbnRhaW5lciB0ZXh0PlxyXG4gICAgICAgICAgICAgICAgPEFuaW1hdGVkIGFuaW1hdGlvbkluPVwiZmFkZUluXCIgYW5pbWF0aW9uT3V0PVwiZmFkZU91dFwiIGFuaW1hdGlvbkluRHVyYXRpb249ezUwMDB9IGFuaW1hdGlvbk91dER1cmF0aW9uPXsxMDAwfSBpc1Zpc2libGU9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvZWNvbG8vbG9nby5wbmdcIiBzaXplPVwic21hbGxcIiBjZW50ZXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9J2gxJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PSdSw6lub3ZhdGlvbiBUZXJ0aWFpcmUgc2VydmljZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogbW9iaWxlID8gJzJlbScgOiAnNGVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBtb2JpbGUgPyAnMCcgOiAnMWVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPSdoMidcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD0nVm9zIHByb2pldHMgZW50aWVyZW1lbnQgZmluYW5jw6knXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogbW9iaWxlID8gJzAuN2VtJyA6ICcxZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IG1vYmlsZSA/ICcwLjVlbScgOiAnMC41ZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVkPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBJbWFnZSAsQ29udGFpbmVyLFNlZ21lbnR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JyBcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvdXJxdW9pIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHttb2JpbGV9PXRoaXMucHJvcHNcclxuICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTpcIkNvbWljIHNhbnMgTVNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6MzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOjMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2txdW90ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Qb3VycXVvaSBjaG9pc2lyIGxlIHJlbXBsYWNlbWVudCBkZSB2b3RyZSBzeXN0ZW1lIGRlIGNoYXVmZmFnZTwvc3Ryb25nPjwvYmxvY2txdW90ZT48L3A+PC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkdyb3VwIGNlbnRlcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPSdpbWcvZWNvbG8vYXJnZW50LWVjb25vbWllLnBuZycgd3JhcHBlZCB1aT17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+TGVzIGF2YW50YWdlcyBkZSBsYSBwb21wZSDDoCBjaGFsZXVyPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZXNtb2tlJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ0NvbWljIFNhbnMgTVMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuNSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48bWFyaz5VbmUgZmFpYmxlIGNvbnNvbW1hdGlvbiBk4oCZw6luZXJnaWUgOjwvbWFyaz48L3N0cm9uZz48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3VyIDFrV2ggZOKAmcOpbGVjdHJpY2l0w6kgY29uc29tbcOpZSBwb3VyIGZvbmN0aW9ubmVyLCBsYSBwYWMgcmVzdGl0dWUgMyDDoCA0IGtXaCBkZSBjaGFsZXVyLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWxsZSBwZXJtZXQgYWluc2kgZGUgcsOpZHVpcmUgY29uc2lkw6lyYWJsZW1lbnQgbGVzIGTDqXBlbnNlcyAodm90cmUgZmFjdHVyZSBkZSBjaGF1ZmZhZ2UgcGV1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgw6p0cmUgZGl2aXPDqWUgcGFyIDMgw6AgNCAhKSA8YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48bWFyaz5VbiBjb25mb3J0IGTigJl1dGlsaXNhdGlvbiA6PC9tYXJrPjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYSBwYWMgZm9uY3Rpb25uZSBkZSBmYcOnb24gYXV0b25vbWUsIGVsbGUgY2hhdWZmZSByYXBpZGVtZW50IGV0IGFzc3VyZSB1bmUgdGVtcMOpcmF0dXJlIHN0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5zIHRvdXRlcyBsZXMgcGnDqGNlczxici8+IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48bWFyaz5VbmUgcG9zZSBzaW1wbGUgOjwvbWFyaz48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGEgcGFjIGFpciBlYXUgcGV1dCBzZSByYWNjb3JkZXIgc3VyIGzigJlpbnN0YWxsYXRpb24gZGUgY2hhdWZmYWdlIGV4aXN0YW50ZSBvdSBzdXIgdW4gcGxhbmNoZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXVmZmFudDxici8+IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48bWFyaz5QYXMgZGUgcmVqZXRzIDo8L21hcms+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlIHN5c3TDqG1lIGRlIGNoYXVmZmFnZSBuZSByZWpldHRlIHBhcyBkZSBmdW3DqWVzIGRhbnMgbOKAmWF0bW9zcGjDqHJlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWwgbuKAmXkgYSBkb25jIGF1Y3VuZSBwcm9ibMOpbWF0aXF1ZSBkZSBjb25kdWl0IGTigJnDqXZhY3VhdGlvbiDDoCBwcsOpdm9pciA8YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48bWFyaz5VbiBzZXVsIGFwcGFyZWlsIHBvdXIgdG91cyB2b3MgYmVzb2lucyA6PC9tYXJrPjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZSBzeXN0w6htZSB2YSBwcm9kdWlyZSBsZSBjaGF1ZmZhZ2UgZXQgbOKAmWVhdSBjaGF1ZGUgZXQgcG91cnJhIMOpZ2FsZW1lbnQgcmFmcmFpY2hpciB2b3MgcGnDqGNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbiBww6lyaW9kZSBlc3RpdmFsZSAoc2kgdm91cyBvcHRleiBwb3VyIHVuIG1vZMOobGUgcsOpdmVyc2libGUpPGJyLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9J2ltZy9lY29sby9lY29sb2dpZS5wbmcnIHdyYXBwZWQgdWk9e2ZhbHNlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PjxoMj5FY29sb2dpZTwvaDI+PC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZXNtb2tlJywgZm9udEZhbWlseTogJ0NvbWljIFNhbnMgTVMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OjEuNX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+PG1hcms+TCdpbXBhY3QgZW52aXJvbm5lbWVudGFsIGRlcyBwb21wZXMgw6AgY2hhbGV1cjwvbWFyaz48L3N0cm9uZz48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGUgZm9uY3Rpb25uZW1lbnQgZOKAmXVuZSBQQUMgcmVwb3NlIHN1ciBs4oCZdXNhZ2UgZGVzIMOpbmVyZ2llcyByZW5vdXZlbGFibGVzLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVsbGUgdXRpbGlzZSBsZXMgY2Fsb3JpZXMgcHLDqXNlbnRlcyBkYW5zIGzigJlhaXIgZXh0w6lyaWV1ciBwb3VyIGNoYXVmZmVyIGxlIGxvZ2VtZW50LiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlcyBkZXJuacOocmVzIG5lIHNvbnQgcGFzIHBvbGx1YW50ZXMuIEVuIGZvbmN0aW9uIGR1IGNvZWZmaWNpZW50IGRlIHBlcmZvcm1hbmNlIChDT1ApLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhIGNvbnNvbW1hdGlvbiBk4oCZw6luZXJnaWUgcG91ciBjaGF1ZmZlciBs4oCZaGFiaXRhdGlvbiBzZXJhIGZvcnRlbWVudCByw6lkdWl0ZS48YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+PG1hcms+IFBldSBkZSByZWpldHMgZGFucyBsJ2F0bW9zcGjDqHJlPC9tYXJrPjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGEgcG9tcGUgw6AgY2hhbGV1ciBu4oCZZXhwbG9pdGUgcGFzIGRpcmVjdGVtZW50IGRlIGZpb3VsLCBnYXogb3UgYXV0cmUgY29tYnVzdGlibGUgZm9zc2lsZS4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZXMgcmVqZXRzIGRlIENPMiBzb250IHJlbGF0aXZlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWJsZXMgcGFyIHJhcHBvcnQgw6AgdW5lIGNoYXVkacOocmUgY2xhc3NpcXVlLiBDZXV4IGRlIE5PeCAob3h5ZGVzIGQnYXpvdGUpIHNvbnQgaW5leGlzdGFudHMuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+PG1hcms+TGEgcG9tcGUgw6AgY2hhbGV1ciBhaXIgZWF1OjwvbWFyaz48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZSBzb2x1dGlvbiDDqWNvbG9naXF1ZSBldCDDqWNvbm9taXF1ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbW1lIG5vdXMgdmVub25zIGRlIGxlIHZvaXIsIGxlcyBQQUMgcHLDqXNlcnZlbnQgZ2xvYmFsZW1lbnQgbGVzIHJlc3NvdXJjZXMgZGUgbGEgcGxhbsOodGUuIEVsbGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb250LCBwb3VyIGzigJloZXVyZSwgdW4gbW9kZSBkZSBjaGF1ZmZhZ2Ugw6ljb3Jlc3BvbnNhYmxlLiBEZSBwbHVzLCBsZXMgaW5ub3ZhdGlvbnMgZnV0dXJlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW3DqWxpb3Jlcm9udCBlbmNvcmUgZGF2YW50YWdlIGzigJllbXByZWludGUgZW52aXJvbm5lbWVudGFsZSBkZSBjZXMgYXBwYXJlaWxzLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9J2ltZy9lY29sby9mcmFuY2UucG5nJyB3cmFwcGVkIHVpPXtmYWxzZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PjxoMj5TdWJ2ZW50aW9uPC9oMj48L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZXNtb2tlJyxmb250RmFtaWx5OidDb21pYyBTYW5zIE1TJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDoxLjUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+PG1hcms+QWN0aW9uIExvZ2VtZW50IDogTm91dmVsbGUgYWlkZSBwb3VyIGxlcyBzYWxhcmnDqXMgZHUgcHJpdsOpPC9tYXJrPjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBM4oCZb3JnYW5pc21lIEFjdGlvbiBMb2dlbWVudCwgcHJvcG9zZSB1bmUgbm91dmVsbGUgYWlkZSA6IHVuZSBhaWRlIHBvdXIgZmluYW5jZXIgbOKAmUluc3RhbGxhdGlvbiBkZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm90cmUgUG9tcGUgw6AgQ2hhbGV1ci4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENldHRlIGFpZGUgZXN0IGF0dHJpYnXDqWUgYXV4IHByb3ByacOpdGFpcmVzIG91IGxvY2F0YWlyZS4gTOKAmWFpZGUgw6AgbGEgcsOpbm92YXRpb24gw6luZXJnw6l0aXF1ZSBk4oCZQWN0aW9uIExvZ2VtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhIHBvdXIgb2JqZWN0aWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGUgY291dnJpciBs4oCZaW50w6lncmFsaXTDqSBkdSBjb8O7dCBkZXMgdHJhdmF1eCwgZXQgc29uIG1vbnRhbnQgZXN0IHBsYWZvbm7DqSDDoCAyMCAwMDDigqwuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEPigJllc3QgZ3LDomNlIMOgIGNldHRlIGFpZGUgcXVpIGFwcGFyYcOudCBmaW4gMjAyMCBxdWUgY2V0dGUgcG9tcGUgw6AgY2hhbGV1ciBwZXV0IGF1am91cmTigJlodWkgdm91cyDDqnRyZSBwcm9wb3PDqWUgw6AgdW4gZXVybyBzeW1ib2xpcXVlICFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtdWxleiBwbHVzaWV1cnMgYWlkZXMgdHJhdmF1eCAhIERlIHBsdXMsIHZvdXMgYXVyZXogbGEgcG9zc2liaWxpdMOpIGRlIGN1bXVsZXIgY2V0dGUgYWlkZSBhdmVjIGxlcyBkaWZmw6lyZW50ZXMgcHJpbWVzICYgYWlkZXMgZMOpasOgIGV4aXN0YW50ZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBJbWFnZSwgQ29udGFpbmVyLCBTZWdtZW50LCBHcmlkLCBJdGVtIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5vdmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IG1vYmlsZSB9ID0gdGhpcy5wcm9wc1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAzMCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxibG9ja3F1b3RlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYSBQcmltZSBSw6lubyd2LCBjJ2VzdCBxdW9pID88L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9ibG9ja3F1b3RlPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgdmVydGljYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdGFja2FibGUgdmVydGljYWxBbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1nL2Vjb2xvL3ByaW1lcmVub3YucG5nXCIgY2VudGVyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0gc3R5bGU9e3twYWRkaW5nVG9wOjkwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvZWNvbG8vbWFpc29uLXBvbXBlLWEtY2hhbGV1ci5qcGdcIiBzaXplPSdsYXJnZSdjZW50ZXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPSdsZWZ0JyB3aWR0aD17Nn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgZm9udEZhbWlseTogXCJDb21pYyBzYW5zIE1TXCIsIGNvbG9yOiBcIkdyZWVuXCIscGFkZGluZ1RvcDo5MCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhIFByaW1lIFLDqW5vJ3YsIGMnZXN0IHF1b2kgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgY29sb3I9J2dyZWVuJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250RmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3VyIGzigJlvYnRlbmlyLCBpbCBlc3QgbsOpY2Vzc2FpcmUgZGUgY3LDqWVyIHVuIGNvbXB0ZSBlbiBsaWduZSBzdXIgbGUgc2l0ZSBtYXByaW1lcmVub3YuZ291di5mci4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5MYSBkZW1hbmRlIGRvaXQgw6p0cmUgZmFpdGUgYXZhbnQgbGUgZMOpYnV0IGRlcyB0cmF2YXV4LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsdXNpZXVycyBjb25kaXRpb25zIHNvbnQgbsOpY2Vzc2FpcmVzIHBvdXIgZW4gYsOpbsOpZmljaWVyLiA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEzigJlpbnN0YWxsYXRpb24gZGUgbGEgcG9tcGUgw6AgY2hhbGV1ciBkZXZyYSBub3RhbW1lbnQgw6p0cmUgZWZmZWN0dcOpZSBwYXIgdW4gcHJvZmVzc2lvbm5lbCBxdWFsaWZpw6lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSR0UgUXVhbGlQQUMuPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3VyIGVuIHNhdm9pciBwbHVzIHN1ciBsYSBQcmltZSBSw6lub3YnLCB0w6lsw6ljaGFyZ2VyIGxlIGRvY3VtZW50IGNpLWRlc3NvdXMgbGVxdWVsIHZvdXMgc291aGFpdGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdHVlciBkZXMgdHJhdmF1eCBlc3Qgdm90cmUgcsOpc2lkZW5jZSBwcmluY2lwYWxlIG91IGNlbGxlIGRlIHZvdHJlIGxvY2F0YWlyZS48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIlxyXG5pbXBvcnQgeyBjcmVhdGVNZWRpYSB9IGZyb20gJ0BhcnRzeS9mcmVzbmVsJyBcclxuXHJcbmNvbnN0IHsgTWVkaWFDb250ZXh0UHJvdmlkZXIsIE1lZGlhIH0gPSBjcmVhdGVNZWRpYSh7XHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIG1vYmlsZTogMCxcclxuICAgICAgICB0YWJsZXQ6IDc2OCxcclxuICAgICAgICBjb21wdXRlcjogMTAyNCxcclxuICAgICAgICBlY3JhbjogMTE5MlxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmNsYXNzIEluZGV4Q29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1lZGlhIGdyZWF0ZXJUaGFuPSdtb2JpbGUnPlxyXG4gICAgICAgICAgICAgICAgPEhvbWUvPlxyXG4gICAgICAgICAgICA8L01lZGlhPiBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE1vYmlsZUluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1lZGlhIGF0PSdtb2JpbGUnPlxyXG4gICAgICAgICAgICAgICAgPEhvbWUgbW9iaWxlLz5cclxuICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PiBcclxuICAgICAgICAgICAgICAgIDxNZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgIDxJbmRleENvbnRhaW5lciA+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9JbmRleENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxNb2JpbGVJbmRleD57dGhpcy5wcm9wcy5jaGlsZHJlbn08L01vYmlsZUluZGV4PlxyXG4gICAgICAgICAgICAgICAgPC9NZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFydHN5L2ZyZXNuZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1haWxqcy1jb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hbmltYXRlZC1jc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==