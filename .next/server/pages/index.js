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
                  src: "img/ecolo/pompe_a_chaleur.png",
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
                  placeholder: "/img/ecolo/ecologie-youtube.jpg",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9DZWUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvRGlzcG9zaXRpZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Ib21lLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvTWlzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Nb2JpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvUG91cnF1b2kuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvUmVub3ZlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcnRzeS9mcmVzbmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZW1haWxqcy1jb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hbmltYXRlZC1jc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiSGVhZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiZW1haWxqcyIsIk15TGF5b3V0Iiwic3RhdGUiLCJjaGlsZHJlbiIsIkNlZSIsIm1vYmlsZSIsImZvbnRGYW1pbHkiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsInBhZGRpbmdUb3AiLCJjb2xvciIsIkRpc3Bvc2l0aWYiLCJIb21lIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwicHJvcHJpbyIsInNhbGFyaWUiLCJjaGF1ZmZhZ2UiLCJmYW1pbGxlIiwiZmlzY2FsaXRlIiwibm9tIiwicHJlbm9tIiwiYWRyZXNzZSIsImxvY2FsaXRlIiwiZW1haWwiLCJ0ZWxlcGhvbmUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImVycm9yUHJvcHJpbyIsImNvbnRlbnQiLCJwb2ludGluZyIsImVycm9yU2FsYXJpZSIsImVycm9yQ2hhdWZmYWdlIiwiZXJyb3JGYW1pbGxlIiwiZXJyb3JGaXNjYWxpdGUiLCJhbGVydCIsImZpc2NhbGl0w6kiLCJkYXRhQ29udGFjdCIsInRlbXBsYXRlUGFyYW1zIiwiZnJvbV9uYW1lIiwidG9fbmFtZSIsInBlbm9tIiwidGhlbiIsInJlc3VsdCIsInRleHQiLCJlcnJvciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJiYWNrZ3JvdW5kQ29sb3IiLCJEcm9wZG93biIsImhhbmRsZUNoYW5nZSIsImtleSIsIk1lZGlhQ29udGV4dFByb3ZpZGVyIiwiTWVkaWEiLCJjcmVhdGVNZWRpYSIsImJyZWFrcG9pbnRzIiwidGFibGV0IiwiY29tcHV0ZXIiLCJlY3JhbiIsImh0bWwiLCJEZXNrdG9wQ29udGFpbmVyIiwiYWN0aXZlSXRlbSIsImZpeGVkIiwibm9kZSIsInNob3dGaXhlZE1lbnUiLCJoaWRlRml4ZWRNZW51IiwiaGFuZGxlSXRlbUNsaWNrIiwiTW9iaWxlQ29udGFpbmVyIiwic2lkZWJhck9wZW5lZCIsIlNpZGViYXIiLCJwdXNoYWJsZSIsIk1lbnUiLCJoYW5kbGVTaWRlYmFySGlkZSIsIm1pbkhlaWdodCIsInBhZGRpbmciLCJoYW5kbGVUb2dnbGUiLCJNeU1lbnUiLCJSZW5vdmUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiaGVpZ2h0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiTW9iaWxlIiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsInRleHREZWNvcmF0aW9uIiwiUG91cnF1b2kiLCJsaW5lSGVpZ2h0IiwiSW5kZXhDb250YWluZXIiLCJNb2JpbGVJbmRleCIsIkluZGV4Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBR2UsTUFBTUEsTUFBTixTQUFxQkMsNENBQUssQ0FBQ0MsU0FBM0IsQ0FBcUM7QUFDaERDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2YsVUFBTUEsS0FBTjtBQUVIOztBQUVEQyxRQUFNLEdBQUc7QUFDTCx3QkFDSTtBQUFBLDhCQUNJO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBLFVBREosZUFFSTtBQUFNLGNBQUksRUFBQyxhQUFYO0FBQXlCLGlCQUFPLEVBQUM7QUFBakMsVUFGSixlQUdJO0FBQU0sY0FBSSxFQUFDLFFBQVg7QUFBb0IsaUJBQU8sRUFB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REo7QUFRSDs7QUFYK0I7O0FBYXJCMkYsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNqREEsMkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTXlNZW51IGZyb20gXCIuLi9wYWdlcy9NZW51LmpzXCJcclxuaW1wb3J0ICogYXMgZW1haWxqcyBmcm9tICdlbWFpbGpzLWNvbSdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnJlbm92YXRpb248L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJyZW5vdmF0aW9uIHRlcnRpYWlyZSBzZXJ2aWNlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiZW1pbGUgY2hlbW1hbWFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCJjb250ZW50PVwibWluaW11bS1zY2FsZT0xLGluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiQ29udGVudC1UeXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwicG9tcGUgYSBjaGFsZXVyLHBsb21iZXJpZSxlbGVjdHJpY2l0ZSxzYWxsZSBkZSBiYWluXCIgLz5cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8bGluayBhc3luYyByZWw9XCJzdHlsZXNoZWV0XCIgbGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi4wLjEvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNzcy9tZW51LmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbmltYXRlLmNzcy8zLjUuMi9hbmltYXRlLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwic3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9lbWFpbGpzLWNvbUAyL2Rpc3QvZW1haWwubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL3JlY2FwdGNoYS9hcGkuanNcIiBhc3luYyBkZWZlcj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxqcy5pbml0KFwiWU9VUl9VU0VSX0lEXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDwvaGVhZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TXlNZW51IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBJbWFnZSwgQ29udGFpbmVyLCBTZWdtZW50LCBHcmlkLCBJdGVtIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDZWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IG1vYmlsZSB9ID0gdGhpcy5wcm9wc1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAzMCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxibG9ja3F1b3RlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZXMgQ2VydGlmaWNhdHMgZCfDiWNvbm9taWVzIGQnw4luZXJnaWU8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9ibG9ja3F1b3RlPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgdmVydGljYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdGFja2FibGUgdmVydGljYWxBbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1nL2Vjb2xvL2xvZ29jZWUucG5nXCIgY2VudGVyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEwfSBzdHlsZT17eyBwYWRkaW5nVG9wOiA5MCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9lY29sby9tYWlzb24tZXh0ZXJpZXVyLmpwZ1wiIHNpemU9J2xhcmdlJyBjZW50ZXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPSdsZWZ0JyB3aWR0aD17Nn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgZm9udEZhbWlseTogXCJDb21pYyBzYW5zIE1TXCIsIGNvbG9yOiBcIkdyZWVuXCIsIHBhZGRpbmdUb3A6IDkwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGVzIENlcnRpZmljYXRzIGQnw4ljb25vbWllcyBkJ8OJbmVyZ2llXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCBjb2xvcj0nZ3JlZW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhbnMgbGUgY2FkcmUgZCd1bmUgb2JsaWdhdGlvbiBlbmNhZHLDqWUgcGFyIGwnRXRhdCwgY2VydGFpbmVzIGVudHJlcHJpc2VzIChmb3Vybmlzc2V1ciBkZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXogb3UgZCfDqWxlY3RyaWNpdMOpLCBhY3RldXJzIGRlIGxhIGdyYW5kZSBkaXN0cmlidXRpb24gYXlhbnQgZGVzIHN0YXRpb25zIGVzc2VuY2UsIGVuc2VpZ25lcyBww6l0cm9sacOocmVzKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wb3NlbnQgZGVzIHByaW1lcyBwb3VyIHZvdXMgYWlkZXIgw6AgcsOpYWxpc2VyIGRlcyDDqWNvbm9taWVzIGQnw6luZXJnaWUuPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZXMgYWlkZXMgc29udCBhY2Nlc3NpYmxlcyDDoCB0b3VzIHNhbnMgY29uZGl0aW9ucyBkZSByZXNzb3VyY2VzLjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTCdhdmFudGFnZSBkZSBjZXMgZW50cmVwcmlzZXMgYydlc3QgZGUgZMOpZmlzY2FsaXNlciBsZXVyIHRheGUgY2FyYm9uZSBlbiB2b3VzIGF0dHJpYnVhbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmUgcHJpbWUuLjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBJbWFnZSwgQ29udGFpbmVyLCBTZWdtZW50LEdyaWQsSXRlbX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwb3NpdGlmIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBtb2JpbGUgfSA9IHRoaXMucHJvcHNcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8U2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkNvbWljIHNhbnMgTVNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDMwLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJsb2NrcXVvdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbiBMb2dlbWVudCxNYSBQcmltZSBSZW5vdicsQ0VFOkFjdGV1cnMgTWFqZXVycyBwb3VyIGxhPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUUkFOU0lUSU9OIEVORVJHRVRJUVVFPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2txdW90ZT48L3A+XHJcbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IHZlcnRpY2FsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3RhY2thYmxlIHZlcnRpY2FsQWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9XCJsZWZ0XCIgd2lkdGg9ezh9IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1nL2Vjb2xvL2FjdGlvbi1sb2dlbWVudC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiAgd2lkdGg9ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9lY29sby9wb21wZV9hX2NoYWxldXIucG5nXCIgc2l6ZT1cIm1lZGl1bVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9J2xlZnQnIHdpZHRoPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiLCBjb2xvcjpcIkdyZWVuXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZXMgY29uZGl0aW9ucyBwb3VyIGLDqW7DqWZpY2llciBkZSBsJ2FpZGUgw6AgbGEgcsOpbm92YXRpb24gw6luZXJnw6l0aXF1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPSdncmVlbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udEZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZvcyByZXZlbnVzIG91IGNldXggZGUgdm90cmUgbG9jYXRhaXJlIHNvbnQgaW5mw6lyaWV1cnMgYXV4IHBsYWZvbmRzIGRlIHJlc3NvdXJjZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXMgbcOpbmFnZXMgw6AgcmV2ZW51cyBtb2Rlc3Rlcy48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e2ZvbnRGYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nfX0+Vm90cmUgbG9nZW1lbnQgZXN0IHNpdHXDqSBlbiB6b25lIEIyIG91IEMgb3UgZGFucyB1bmUgY29tbXVuZSBkdSBwcm9ncmFtbWUgQWN0aW9uIGPFk3VyIGRlIHZpbGxlLjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQ+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7Zm9udEZhbWlseTogJ1RpbWVzIE5ldyBSb21hbid9fT5MZSBsb2dlbWVudCBkYW5zIGxlcXVlbCB2b3VzIHNvdWhhaXRlciBlZmZlY3R1ZXIgZGVzIHRyYXZhdXggZXN0IHZvdHJlIHLDqXNpZGVuY2UgcHJpbmNpcGFsZSBvdSBjZWxsZSBkZSB2b3RyZSBsb2NhdGFpcmUuPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLEltYWdlLCBHcmlkLCBEcm9wZG93biwgU2VnbWVudCwgRW1iZWQsIEZvcm0sIENoZWNrYm94LEl0ZW19IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0XCJcclxuaW1wb3J0IFBvdXJxdW9pIGZyb20nLi4vcGFnZXMvUG91cnF1b2knXHJcbmltcG9ydCAqIGFzIGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBEaXNwb3NpdGlmIGZyb20gJy4uL3BhZ2VzL0Rpc3Bvc2l0aWYnXHJcbmltcG9ydCBSZW5vdmUgZnJvbSBcIi4uL3BhZ2VzL1Jlbm92ZVwiXHJcbmltcG9ydCBDZWUgZnJvbVwiLi4vcGFnZXMvQ2VlXCJcclxuaW1wb3J0IE1pc3Npb24gZnJvbSBcIi4uL3BhZ2VzL01pc3Npb25cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge3Byb3ByaW86XCJcIixzYWxhcmllOlwiXCIsY2hhdWZmYWdlOlwiXCIsZmFtaWxsZTpcIlwiLGZpc2NhbGl0ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbm9tOlwiXCIscHJlbm9tOlwiXCIsYWRyZXNzZTpcIlwiLGxvY2FsaXRlOlwiXCIsZW1haWw6XCJcIix0ZWxlcGhvbmU6XCJcIn07XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgIFxyXG4gICAgXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZSwgeyBuYW1lLCB2YWx1ZSB9KSA9PiB0aGlzLnNldFN0YXRlKHsgW25hbWVdOiB2YWx1ZSB9KTtcclxuICAgIFxyXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucHJvcHJpbyA9PT0gXCJcIiA/IHRoaXMuc2V0U3RhdGUoeyBlcnJvclByb3ByaW86IHsgY29udGVudDpcIlwiLHBvaW50aW5nOm51bGx9fSkgOiB0aGlzLnNldFN0YXRlKHsgZXJyb3JQcm9wcmlvOiBudWxsIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2FsYXJpZSA9PT0gXCJcIiA/IHRoaXMuc2V0U3RhdGUoeyBlcnJvclNhbGFyaWU6IHsgY29udGVudDpcIlwiLHBvaW50aW5nOm51bGx9fSkgOiB0aGlzLnNldFN0YXRlKHsgZXJyb3JTYWxhcmllOiBudWxsIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2hhdWZmYWdlID09PSBcIlwiID8gdGhpcy5zZXRTdGF0ZSh7IGVycm9yQ2hhdWZmYWdlOiB7IGNvbnRlbnQ6IFwiXCIsIHBvaW50aW5nOm51bGx9fSkgOiB0aGlzLnNldFN0YXRlKHsgZXJyb3JDaGF1ZmZhZ2U6IG51bGwgfSlcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mYW1pbGxlID09PSBcIlwiID8gdGhpcy5zZXRTdGF0ZSh7IGVycm9yRmFtaWxsZTogeyBjb250ZW50OiBcIlwiLCBwb2ludGluZzpudWxsfX0pOiB0aGlzLnNldFN0YXRlKHsgZXJyb3JGYW1pbGxlOiBudWxsIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZmlzY2FsaXRlID09PSBcIlwiID8gdGhpcy5zZXRTdGF0ZSh7IGVycm9yRmlzY2FsaXRlOiB7IGNvbnRlbnQ6IFwiXCIsIHBvaW50aW5nOm51bGx9fSkgOiB0aGlzLnNldFN0YXRlKHsgZXJyb3JGaXNjYWxpdGU6IG51bGwgfSlcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcm9wcmlvID09PSBcIlwiID8gYWxlcnQoXCJTZWxlY3Rpb25uZXogdW4gY2hvaXhcIikgOlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNhbGFyaWUgPT09IFwiXCIgPyBhbGVydChcIlNlbGVjdGlvbm5leiB1biBjaG9peFwiKSA6XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2hhdWZmYWdlID09PSBcIlwiID8gYWxlcnQoXCJTZWxlY3Rpb25uZXogdW4gY2hvaXhcIik6XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZmFtaWxsZSA9PT0gXCJcIiA/IGFsZXJ0KFwiU2VsZWN0aW9ubmV6IHVuIGNob2l4XCIpOiBcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5maXNjYWxpdMOpID09PSBcIlwiID8gYWxlcnQoXCJTZWxlY3Rpb25uZXogdW4gY2hvaXhcIik6dGhpcy5kYXRhQ29udGFjdCgpXHJcbiAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgZGF0YUNvbnRhY3QoKXsgXHJcbiAgICBjb25zdCB7IHByb3ByaW8sIHNhbGFyaWUsIGNoYXVmZmFnZSwgZmFtaWxsZSwgZmlzY2FsaXRlLFxyXG4gICAgICAgICAgICBub20sIHByZW5vbSwgYWRyZXNzZSwgbG9jYWxpdGUsIGVtYWlsLCB0ZWxlcGhvbmV9PXRoaXMuc3RhdGVcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdGVtcGxhdGVQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIGZyb21fbmFtZTogZW1haWwsXHJcbiAgICAgICAgICAgIHRvX25hbWU6IG5vbSxcclxuICAgICAgICAgICAgcHJvcHJpbzogcHJvcHJpbyxcclxuICAgICAgICAgICAgc2FsYXJpZTogc2FsYXJpZSxcclxuICAgICAgICAgICAgY2hhdWZmYWdlOmNoYXVmZmFnZSxcclxuICAgICAgICAgICAgZmFtaWxsZTpmYW1pbGxlLFxyXG4gICAgICAgICAgICBmaXNjYWxpdGU6ZmlzY2FsaXRlLFxyXG4gICAgICAgICAgICBhZHJlc3NlOmFkcmVzc2UsXHJcbiAgICAgICAgICAgIGxvY2FsaXRlOmxvY2FsaXRlLFxyXG4gICAgICAgICAgICBlbWFpbDplbWFpbCxcclxuICAgICAgICAgICAgdGVsZXBob25lOnRlbGVwaG9uZSxcclxuICAgICAgICAgICAgcGVub206cHJlbm9tLFxyXG4gICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVtYWlsanMuc2VuZCgnbXlfR21haWwnLCdlbGlnaWJpbGl0ZScsIHRlbXBsYXRlUGFyYW1zLCd1c2VyX080clRteXZDeWhuVVlUSnJjemtNdicpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KHJlc3VsdC50ZXh0KTtcclxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvci50ZXh0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnByb3ByaW8gPT09IFwiXCIsdGhpcy5zdGF0ZS5zYWxhcmllID09PSBcIlwiICx0aGlzLnN0YXRlLmNoYXVmZmFnZSA9PT0gXCJcIix0aGlzLnN0YXRlLmZhbWlsbGUgPT09IFwiXCIgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZpc2NhbGl0ZSA9PT0gXCJcIiBcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubm9tPVwiXCIsdGhpcy5zdGF0ZS5wcmVub209XCJcIix0aGlzLnN0YXRlLmFkcmVzc2U9XCJcIix0aGlzLnN0YXRlLmxvY2FsaXRlPVwiXCIsdGhpcy5zdGF0ZS5lbWFpbD1cIlwiLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50ZWxlcGhvbmU9XCJcIlxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCB7IG1vYmlsZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIEhvbWUucHJvcFR5cGVzID0ge1xyXG4gICAgICAgICAgICBtb2JpbGU6IFByb3BUeXBlcy5ib29sXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IHZlcnRpY2FsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3RhY2thYmxlIHZlcnRpY2FsQWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9XCJsZWZ0XCIgd2lkdGg9ezZ9c3R5bGU9e3tmb250RmFtaWx5OiBcIkFyaWFsXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuJ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImdyZWVuXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOm1vYmlsZSA/IDI1IDo0MCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVm90cmUgUG9tcGUgw6AgY2hhbGV1ciBlbnRpZXJlbWVudCBmaW5hbmPDqSBwYXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9lY29sby9hY3Rpb24tbG9nZW1lbnQucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbWJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3BlY3RSYXRpbz0nMTY6OSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9JzBtMVFXVjN2VHpvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nL2ltZy9lY29sby9lY29sb2dpZS15b3V0dWJlLmpwZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPSd5b3V0dWJlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiY29taWMgc2FucyBNU1wiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGNvbG9yOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6bW9iaWxlPzI1OjM1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHU+Q29tbWVudCBsJ29idGVuaXI8L3U+PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkltYWdlIHNyYz1cImltZy9lY29sby92YWxpZGV6LnBuZ1wiIGFsdD1cInZhbGlkZXpcIiBzaXplPSd0aW55Jy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkNvbnRlbnQgdmVydGljYWxBbGlnbj0nbWlkZGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkhlYWRlcj5SZW1wbGlzc2V6IGxlIGZvcm11bGFpcmU8L0l0ZW0uSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5JbWFnZSBzaXplPSd0aW55JyBzcmM9XCJpbWcvZWNvbG8vdGVsZXBob25lLnBuZ1wiIGFsdD1cInRlbGVwaG9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkNvbnRlbnQgdmVydGljYWxBbGlnbj0nbWlkZGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkhlYWRlcj4gVW4gcHJvZmVzc2lvbm5lbCB2b3VzIGNvbnRhY3QgYWZpbiBkJ291dnJpciB2b3RyZSBkb3NzaWVyIGV0IGNvbnZlbmlyIGQndW4gcmVuZGV6LXZvdXM8L0l0ZW0uSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkltYWdlIHNpemU9J3RpbnknIHNyYz1cImltZy9lY29sby9vdXZyaWVyLnBuZ1wiIGFsdD1cIm91dnJpZXIgUkdFXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uQ29udGVudCB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uSGVhZGVyPiBVbmUgw6lxdWlwZSBkZSB0ZWNobmljaWVucyBjb25maXJtw6lzIFJHRSBzZSBkw6lwbGFjZSBjaGV6IHZvdXMgYWZpbiBkZSByw6lhbGlzZXIgdm9zIHRyYXZhdXg8L0l0ZW0uSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkltYWdlIHNpemU9J3RpbnknIHNyYz1cImltZy9lY29sby9yZW1lcmNpZW1lbnQucG5nXCIgYWx0PVwicmVtZXJjaWVtZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uQ29udGVudCB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uSGVhZGVyPlZvdXMgbmUgcGF5ZXogcXVlIDEgZXVybyBTdXIgcHLDqXNlbnRhdGlvbiBkdSBkZXZpcyAsIHNhbnMgYXVjdW4gZnJhaXMgYXZhbmPDqTwvSXRlbS5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbT48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5JbWFnZSBzaXplPSdzbWFsbCcgc3JjPVwiaW1nL2Vjb2xvL2xvZ29jZWUucG5nXCIgYWx0PVwibG9nby1jZWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5Db250ZW50IHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5IZWFkZXI+bCdldGF0IGZpbmFuY2UgIHBvdXIgMeKCrCBzeW1ib2xpcXVlPC9JdGVtLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPSdyaWdodCcgd2lkdGg9ezh9IHN0eWxlPXt7IHBhZGRpbmdUb3A6IG1vYmlsZSA/IDEwIDoyMCwgZm9udEZhbWlseTogXCJDb21pYyBzYW5zIE1TXCIsYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFucyBsZSBjYWRyZSBkZSBsYSB0cmFuc2l0aW9uIMOpY29sb2dpcXVlLCBsJ8OJdGF0IHByZW5kIGVuIGNoYXJnZSBsZSBjb8O7dCBkZSBs4oCZaW5zdGFsbGF0aW9uIGRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvdHJlIHBvbXBlIMOgIGNoYWxldXIgcG91ciBzZXVsZW1lbnQgMeKCrCAhPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlcyBtaWxsaWVycyBkZSBmb3llcnMgZnJhbsOnYWlzIGVuIG9udCBkw6lqw6AgcHJvZml0w6ksIHBvdXJxdW9pIHBhcyB2b3VzID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Piogc2Fpc2llIG9ibGlnYXRvaXJlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250RmFtaWx5OiBcIkNvbWljIHNhbnMgTVNcIiwgY29sb3I6IFwiZ3JlZW5cIiwgZm9udFNpemU6IG1vYmlsZSA/IDIwIDogMzAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFbDqXJpZmlleiB2b3RyZSDDqWxpZ2liaXTDqTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtlID0+IHRoaXMuaGFuZGxlU3VibWl0KGUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JQcm9wcmlvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJWb3VzIEV0ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS0tLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9wcmlvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9wcmlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBjbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvckNoYXVmZmFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVm90cmUgdHlwZSBkZSBDaGF1ZmZhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS0tLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjaGF1ZmZhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoYXVmZmFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBjbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvckZhbWlsbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5vbWJyZSBkZSBwZXJzb25uZSB2aXZhbnQgZGFucyBsZSBmb3llclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2ZhbWlsbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZhbWlsbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgY2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JGaXNjYWxpdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJldmVudWUgZmlzY2FsIGRlIHLDqWbDqXJlbmNlICgyMDIwIG91IDIwMTkpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmlzY2FsaXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXNjYWxpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J05vbSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17OX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5vbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj0nbG9jaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPSdsZWZ0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nUHLDqW5vbSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Byw6lub20nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJlbm9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJlbm9tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiYWRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPSdsZWZ0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFkcmVzc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQWRyZXNzZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZHJlc3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRyZXNzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0xvY2FsaXTDqSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0xvY2FsaXTDqSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb2NhbGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxvY2FsaXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2NvbnRhY3RAZ21haWwuY29tJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17OX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdUZWxlcGhvbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScwNjk4NjExMzcyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17OX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRlbGVwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRlbGVwaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+PGJyLz48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGxhYmVsPVwiSidhdXRvcmlzZSBSLlQuUyDDoCBtZSByZWNvbnRhY3RlciBwb3VyIG1lIGNvbW11bmlxdWVyIG1vbiBzdGF0dXQgZCfDqWxpZ2liaWxpdMOpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD48YnIvPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5CdXR0b24gZmx1aWQgdHlwZT1cInN1Ym1pdFwiIGNvbG9yPVwiZ3JlZW5cIiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOm1vYmlsZSA/MTU6MjBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVsOpcmlmaWVyIG1vbiDDqWxpZ2liaWxpdMOpPC9Gb3JtLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8UG91cnF1b2kgbW9iaWxlLz5cclxuICAgICAgICAgICAgPERpc3Bvc2l0aWYgbW9iaWxlLz5cclxuICAgICAgICAgICAgPFJlbm92ZSBtb2JpbGUvPlxyXG4gICAgICAgICAgICA8Q2VlIG1vYmlsZS8+XHJcbiAgICAgICAgICAgIDxNaXNzaW9uIG1vYmlsZS8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IHByb3ByaW8gPSBbXHJcblxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzEnLFxyXG4gICAgICAgIHRleHQ6ICdQcm9wcmnDqXRhaXJlJyxcclxuICAgICAgICB2YWx1ZTogJ1Byb3ByacOpdGFpcmUnLFxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMicsXHJcbiAgICAgICAgdGV4dDogJ0xvY2F0YWlyZScsXHJcbiAgICAgICAgdmFsdWU6ICdMb2NhdGFpcmUnLFxyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuY29uc3Qgc2FsYXJpZSA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcxJyxcclxuICAgICAgICB0ZXh0OiAnU2VjdGV1ciBwdWJsaWMnLFxyXG4gICAgICAgIHZhbHVlOiAnU2VjdGV1ciBwdWJsaWMnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcyJyxcclxuICAgICAgICB0ZXh0OiAnU2VjdGV1ciBwcml2ZScsXHJcbiAgICAgICAgdmFsdWU6ICdTZWN0ZXVyIHByaXZlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMycsXHJcbiAgICAgICAgdGV4dDogJ1NlY3RldXIgYWdyaWNvbGUnLFxyXG4gICAgICAgIHZhbHVlOiAnU2VjdGV1ciBhZ3JpY29sZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzQnLFxyXG4gICAgICAgIHRleHQ6ICdOb24gc2FsYXJpZScsXHJcbiAgICAgICAgdmFsdWU6ICdOb24gc2FsYXJpZScsXHJcbiAgICB9LFxyXG5cclxuXVxyXG5jb25zdCBjaGF1ZmZhZ2UgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMScsXHJcbiAgICAgICAgdGV4dDogJ0VsZWN0cmlxdWUnLFxyXG4gICAgICAgIHZhbHVlOiAnRWxlY3RyaXF1ZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzInLFxyXG4gICAgICAgIHRleHQ6ICdGaW91bCcsXHJcbiAgICAgICAgdmFsdWU6ICdGaW91bCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzMnLFxyXG4gICAgICAgIHRleHQ6ICdHYXonLFxyXG4gICAgICAgIHZhbHVlOiAnR2F6JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNCcsXHJcbiAgICAgICAgdGV4dDogJ0F1dHJlJyxcclxuICAgICAgICB2YWx1ZTogJ0F1dHJlJyxcclxuICAgIH0sXHJcbl1cclxuY29uc3QgZmFtaWxsZSA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcxJyxcclxuICAgICAgICB0ZXh0OiAnMScsXHJcbiAgICAgICAgdmFsdWU6ICcxJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMicsXHJcbiAgICAgICAgdGV4dDogJzInLFxyXG4gICAgICAgIHZhbHVlOiAnMicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzMnLFxyXG4gICAgICAgIHRleHQ6ICczJyxcclxuICAgICAgICB2YWx1ZTogJzMnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc0JyxcclxuICAgICAgICB0ZXh0OiAnNCcsXHJcbiAgICAgICAgdmFsdWU6ICc0JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNSBldCBwbHVzJyxcclxuICAgICAgICB0ZXh0OiAnNSBldCBwbHVzJyxcclxuICAgICAgICB2YWx1ZTogJzUgZXQgcGx1cycsXHJcbiAgICB9XHJcbl1cclxuY29uc3QgZmlzY2FsaXRlID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJzEnLFxyXG4gICAgICAgIHRleHQ6ICdkZSAw4oKsIMOgIDE5MDc04oKsJyxcclxuICAgICAgICB2YWx1ZTogJ2RlIDDigqwgw6AgMTkwNzTigqwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcyJyxcclxuICAgICAgICB0ZXh0OiAnZGUgMTkwNzTigqwgw6AgMjc4OTbigqwnLFxyXG4gICAgICAgIHZhbHVlOiAnZGUgMTkwNzTigqwgw6AgMjc4OTbigqwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICczJyxcclxuICAgICAgICB0ZXh0OiAnZGUgMjc4OTbigqwgw6AgMzM1NDfigqwnLFxyXG4gICAgICAgIHZhbHVlOiAnZGUgMjc4OTbigqwgw6AgMzM1NDfigqwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc0JyxcclxuICAgICAgICB0ZXh0OiAnZGUgMzM1NDfigqwgw6AgMzkxOTLigqwnLFxyXG4gICAgICAgIHZhbHVlOiAnZGUgMzM1NDfigqwgw6AgMzkxOTLigqwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc1JyxcclxuICAgICAgICB0ZXh0OiAnZGUgMzkxOTLigqwgw6AgNDQ4NjDigqwnLFxyXG4gICAgICAgIHZhbHVlOiAnZGUgMzkxOTLigqwgw6AgNDQ4NjDigqwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc2JyxcclxuICAgICAgICB0ZXh0OiAnKyBkZSA0NDk4NjDigqwnLFxyXG4gICAgICAgIHZhbHVlOiAnKyBkZSA0NDk4NjDigqwnLFxyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tICdAYXJ0c3kvZnJlc25lbCdcclxuaW1wb3J0IHtDb250YWluZXIsIEljb24sIEltYWdlLCBNZW51LFNlZ21lbnQsIFNpZGViYXIsIFZpc2liaWxpdHl9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTW9iaWxlIGZyb20gXCIuLi9wYWdlcy9Nb2JpbGUuanNcIlxyXG5cclxuXHJcbmNvbnN0IHsgTWVkaWFDb250ZXh0UHJvdmlkZXIsIE1lZGlhIH0gPSBjcmVhdGVNZWRpYSh7XHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIG1vYmlsZTogMCxcclxuICAgICAgICB0YWJsZXQ6IDc2OCxcclxuICAgICAgICBjb21wdXRlcjogMTAyNCxcclxuICAgICAgICBlY3JhbjogMTE5MlxyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgaHRtbCA9ICcnXHJcblxyXG5jbGFzcyBEZXNrdG9wQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge31cclxuICAgIHN0YXRlID0geyBhY3RpdmVJdGVtOiAnUG9tcGUgYSBjaGFsZXVyJyB9XHJcblxyXG4gICAgaGFuZGxlSXRlbUNsaWNrID0gKGUsIHsgbmFtZSB9KSA9PiB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSXRlbTogbmFtZSB9KVxyXG4gICAgaGlkZUZpeGVkTWVudSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmaXhlZDogZmFsc2UgfSlcclxuICAgIHNob3dGaXhlZE1lbnUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZml4ZWQ6IHRydWUgfSlcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgZml4ZWQgfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBjb25zdCB7IGFjdGl2ZUl0ZW0gfSA9IHRoaXMuc3RhdGVcclxuICAgICAgIFxyXG4gICAgICAgIERlc2t0b3BDb250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gICAgICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgICAgICAgICAgPE1lZGlhIGdyZWF0ZXJUaGFuPSdtb2JpbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uY2U9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJvdHRvbVBhc3NlZD17dGhpcy5zaG93Rml4ZWRNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJvdHRvbVBhc3NlZFJldmVyc2U9e3RoaXMuaGlkZUZpeGVkTWVudX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IHRleHRBbGlnbj0nY2VudGVyJ3ZlcnRpY2FsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgY29tcGFjdCBzaXplPSdzbWFsbCcgc3RhY2thYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvZWNvbG8vbG9nby5wbmdcIiBzaXplPVwic21hbGxcIi8+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gcG9zaXRpb249J2xlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nSG9tZScgaHJlZj1cIiNlc3NhaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnSG9tZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gcG9zaXRpb249J3JpZ2h0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdJbnRlcmV0JyBocmVmPXtcIiNpbnRlcmV0XCIgKyBodG1sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ0ludGVyZXQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J0xlcyBkaXNwb3NpdGlmcycgaHJlZj17XCIjZGlzcG9zaXRpZlwiICsgaHRtbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdMZXMgZGlzcG9zaXRpZnMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J05vdHJlIG1pc3Npb24nIGhyZWY9e1wiI21pc3Npb25cIitodG1sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ05vdHJlIG1pc3Npb24nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J05vcyBwYXJ0ZW5haXJlcycgaHJlZj17XCIjcGFydGVuYWlyZXNcIisgaHRtbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdOb3MgcGFydGVuYWlyZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVmlzaWJpbGl0eT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuY2xhc3MgTW9iaWxlQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge31cclxuICAgIHN0YXRlID0geyBhY3RpdmVJdGVtOiAnaG9tZScgfVxyXG5cclxuICAgIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSlcclxuICAgIGhhbmRsZVNpZGViYXJIaWRlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpZGViYXJPcGVuZWQ6IGZhbHNlIH0pXHJcbiAgICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2lkZWJhck9wZW5lZDogdHJ1ZSB9KVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgeyBzaWRlYmFyT3BlbmVkLCBhY3RpdmVJdGVtIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgICAgIE1vYmlsZUNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZWRpYSBhcz17U2lkZWJhci5wdXNoYWJsZX0gYmV0d2Vlbj17W1wibW9kdWxlXCIsIFwidGFibGV0XCJdfT5cclxuICAgICAgICAgICAgICAgIDxTaWRlYmFyLlB1c2hhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249J3B1c2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17dGhpcy5oYW5kbGVTaWRlYmFySGlkZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17c2lkZWJhck9wZW5lZH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J0hvbWUnIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ0hvbWUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J0ludGVyZXQnIGhyZWY9e1wiI2ludGVyZXRcIiArIGh0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdJbnRlcmV0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdMZXMgZGlzcG9zaXRpZnMnIGhyZWY9e1wiI2FpZGVcIiArIGh0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdMZXMgZGlzcG9zaXRpZnMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J05vdHJlIG1pc3Npb24nIGhyZWY9e1wiI21pc3Npb25cIiArIGh0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdOb3RyZSBtaXNzaW9uJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiTm9zIHBhcnRlbmFpcmVzXCIgaHJlZj17XCIjcGFydGVuYWlyZVwiICsgaHRtbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ05vcyBwYXJ0ZW5haXJlcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1NpZGViYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXIuUHVzaGVyIGRpbW1lZD17c2lkZWJhck9wZW5lZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiAyNTAsIHBhZGRpbmc6ICcwLjVlbSAwZW0nIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBpbnZlcnRlZCBzZWNvbmRhcnkgc2l6ZT0ndGlueSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17dGhpcy5oYW5kbGVUb2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2lyY3VsYXIgY29sb3I9J3RlYWwnIG5hbWU9J3NpZGViYXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vYmlsZSBtb2JpbGUvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L1NpZGViYXIuUHVzaGVyPlxyXG4gICAgICAgICAgICAgICAgPC9TaWRlYmFyLlB1c2hhYmxlPlxyXG4gICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgTXlNZW51ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8TWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDxEZXNrdG9wQ29udGFpbmVyPntjaGlsZHJlbn08L0Rlc2t0b3BDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxNb2JpbGVDb250YWluZXI+e2NoaWxkcmVufTwvTW9iaWxlQ29udGFpbmVyPlxyXG4gICAgICAgIDwvTWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15TWVudSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FyZCwgSW1hZ2UsIENvbnRhaW5lciwgU2VnbWVudCwgR3JpZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5vdmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IG1vYmlsZSB9ID0gdGhpcy5wcm9wc1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAzMCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxibG9ja3F1b3RlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDDgCBwcm9wb3MgZGUgR3JlZW4gUGFja2FnZSBSVFM8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9ibG9ja3F1b3RlPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgdmVydGljYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdGFja2FibGUgdmVydGljYWxBbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgZm9udEZhbWlseTogXCJDb21pYyBzYW5zIE1TXCIsIGNvbG9yOiBcIkdyZWVuXCIsIHBhZGRpbmdUb3A6IDkwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90cmUgTWlzc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCBjb2xvcj0nZ3JlZW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pk5vdXMgbm91cyBvY2N1cG9ucyBkZSBtZW5lciDDoCBiaWVuIHZvdHJlIHByb2pldCBzdXIgbGEgcsOpbm92YXRpb24gw6luZXJnw6l0aXF1ZS48YnIvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdHJlIHByaW9yaXTDqSBlc3QgZGUgdm91cyBkb25uZXIgdG91dGVzIGxlcyBpbmZvcm1hdGlvbnMgbsOpY2Vzc2FpcmVzIMOgIGxhIHLDqWFsaXNhdGlvbiBkZSBjZWx1aS1jaS4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbCBlc3Qgbm9ybWFsIGRlIHNlIHBlcmRyZSBkYW5zIGNldCBvY8OpYW4gZCdpbmZvcm1hdGlvbnMgZGl2ZXJzZXMgZXQgdmFyacOpZXMgZXQgbm90cmUgbWlzc2lvbiBlc3QgZGUgdm91cyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1aWRlci48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm91cyBwcmVub25zIGVuIGNoYXJnZSB0b3V0ZXMgbGVzIGTDqW1hcmNoZXMgYWRtaW5pc3RyYXRpdmVzLCBjb25zdGl0dW9ucyBsZSBkb3NzaWVyLCBjb250YWN0b25zIGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZmbDqXJlbnRzIGFydGlzYW5zIHJlY29ubnVzIGdhcmFudHMgZGUgbCdlbnZpcm9ubmVtZW50IChSR0UpIHByw6hzIGRlIGNoZXogdm91cy4gVW4gYWdlbnQgZGUgbWHDrnRyaXNlIMOgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCdvdXZyYWdlIChBTU8pIHNlcmEgcHLDqXNlbnQgYXZhbnQgbGVzIHRyYXZhdXggcG91ciBsYSBmYWlzYWJpbGl0w6kgZGUgdm90cmUgcHJvamV0IGV0IMOgIGxhIGZpbiBwb3VyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdsOpcmlmaWVyIHF1ZSBjZXV4LWNpIHNvbnQgcsOpYWxpc8OpcyBkYW5zIGxlcyByw6hnbGVzIGRlIGwnYXJ0Ljxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3VzIHZvdXMgYXNzdXJvbnMgdW5lIHByaXNlIGVuIGNoYXJnZSB0b3RhbGUgYXZlYyBBY3Rpb24gTG9nZW1lbnQgYXByw6hzIHZhbGlkYXRpb24gZGUgdm90cmUgZG9zc2llci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+QXVjdW5lIGluc3RhbGxhdGlvbiBuZSBzZXJhIGVmZmVjdHXDqWUgc2FucyBhY2NvcmQgcHLDqWFsYWJsZSBkZSBub3RyZSBwYXJ0ZW5haXJlIGV0IGF1Y3VuIGZyYWlzIG5lIHZvdXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJhIGZhY3R1csOpIG1hbGdyw6kgdW4gw6l2ZW50dWVsIHJlZnVzLjwvc3Ryb25nPjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gZmxvYXRlZD0nbGVmdCcgd2lkdGg9ezZ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiLCBjb2xvcjogXCJHcmVlblwiLCBwYWRkaW5nVG9wOiA5MCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvdXJxdW9pIG5vdXMgZmFpcmUgY29uZmlhbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCBjb2xvcj0nZ3JlZW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90cmUgdHJhdmFpbCBlc3QgZW5jYWRyw6kgcGFyIGxlcyBkaWZmw6lyZW50cyBvcmdhbmlzbWVzIGV4aXN0YW50cyBldCBjaGFjdW4gZGlzcG9zZSBkZSBsZXVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdG9jb2xlLjxici8+IExlcyBhaWRlcyBkb250IHZvdXMgcG91cnJleiBiw6luw6lmaWNpZXIgc2Vyb250IHRvdGFsZW1lbnQgdHJhbnNwYXJlbnRlcyBldCBsZXMgZG9jdW1lbnRzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZXN0YW50IGRlIHZvcyBhaWRlcyB2b3VzIHNlcm9udCBkaXJlY3RlbWVudCB0cmFuc21pcyBwYXIgbCdvcmdhbmlzbWUgZW4gcXVlc3Rpb24uPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdXMgdm91cyBhY2NvbXBhZ25lcm9ucyBkYW5zIGNlIHRyYXZhaWwgdHLDqHMgbWludXRpZXV4IGV0IHRvdXRlcyBsZXMgZMOpbWFyY2hlcyBhZG1pbmlzdHJhdGl2ZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJvbnQgZWZmZWN0dcOpZXMgcGFyIG5vcyBzb2lucy48YnIvPlZvdXMgcG91cnJleiB0cm91dmVyIGRlcyB0w6ltb2lnbmFnZXMgYXR0ZXN0YW50IGRlIG5vdHJlIHPDqXJpZXV4IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXQgbGUgcHJvY2VzdXMgZCdhY2NvbXBhZ25lbWVudCBkdSBkw6lidXQganVzcXUnw6AgbGEgZmluIGR1IHByb2pldC4gPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8U2VnbWVudCBzdHlsZT17eyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybCgnaW1nL2Vjb2xvL2xvZ28ucG5nJylcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDpcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MzAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOlwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6MjUwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjb2xvcj1cImdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWw6lyaWZpZXIgbW9uIMOpbGlnaWJpbGl0w6k8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGVyLCBJbWFnZSwgR3JpZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgeyBBbmltYXRlZCB9IGZyb20gXCJyZWFjdC1hbmltYXRlZC1jc3NcIjtcclxuXHJcbi8vbWVudSBtb2JpbGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9iaWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBtb2JpbGUgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIHRleHQ+XHJcbiAgICAgICAgICAgICAgICA8QW5pbWF0ZWQgYW5pbWF0aW9uSW49XCJmYWRlSW5cIiBhbmltYXRpb25PdXQ9XCJmYWRlT3V0XCIgYW5pbWF0aW9uSW5EdXJhdGlvbj17NTAwMH0gYW5pbWF0aW9uT3V0RHVyYXRpb249ezEwMDB9IGlzVmlzaWJsZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9lY29sby9sb2dvLnBuZ1wiIHNpemU9XCJzbWFsbFwiIGNlbnRlcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz0naDEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J1LDqW5vdmF0aW9uIFRlcnRpYWlyZSBzZXJ2aWNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAnMmVtJyA6ICc0ZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IG1vYmlsZSA/ICcwJyA6ICcxZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9J2gyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PSdWb3MgcHJvamV0cyBlbnRpZXJlbWVudCBmaW5hbmPDqSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAnMC43ZW0nIDogJzFlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogbW9iaWxlID8gJzAuNWVtJyA6ICcwLjVlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWQ+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmQsIEltYWdlICxDb250YWluZXIsU2VnbWVudH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnIFxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG91cnF1b2kgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge21vYmlsZX09dGhpcy5wcm9wc1xyXG4gICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8U2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OlwiQ29taWMgc2FucyBNU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDozMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6MzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxibG9ja3F1b3RlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlBvdXJxdW9pIGNob2lzaXIgbGUgcmVtcGxhY2VtZW50IGRlIHZvdHJlIHN5c3RlbWUgZGUgY2hhdWZmYWdlPC9zdHJvbmc+PC9ibG9ja3F1b3RlPjwvcD48L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8U2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuR3JvdXAgY2VudGVyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9J2ltZy9lY29sby9hcmdlbnQtZWNvbm9taWUucG5nJyB3cmFwcGVkIHVpPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5MZXMgYXZhbnRhZ2VzIGRlIGxhIHBvbXBlIMOgIGNoYWxldXI8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlc21va2UnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnQ29taWMgU2FucyBNUycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS41IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjxtYXJrPlVuZSBmYWlibGUgY29uc29tbWF0aW9uIGTigJnDqW5lcmdpZSA6PC9tYXJrPjwvc3Ryb25nPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvdXIgMWtXaCBk4oCZw6lsZWN0cmljaXTDqSBjb25zb21tw6llIHBvdXIgZm9uY3Rpb25uZXIsIGxhIHBhYyByZXN0aXR1ZSAzIMOgIDQga1doIGRlIGNoYWxldXIuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbGxlIHBlcm1ldCBhaW5zaSBkZSByw6lkdWlyZSBjb25zaWTDqXJhYmxlbWVudCBsZXMgZMOpcGVuc2VzICh2b3RyZSBmYWN0dXJlIGRlIGNoYXVmZmFnZSBwZXV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDDqnRyZSBkaXZpc8OpZSBwYXIgMyDDoCA0ICEpIDxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjxtYXJrPlVuIGNvbmZvcnQgZOKAmXV0aWxpc2F0aW9uIDo8L21hcms+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhIHBhYyBmb25jdGlvbm5lIGRlIGZhw6dvbiBhdXRvbm9tZSwgZWxsZSBjaGF1ZmZlIHJhcGlkZW1lbnQgZXQgYXNzdXJlIHVuZSB0ZW1ww6lyYXR1cmUgc3RhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbnMgdG91dGVzIGxlcyBwacOoY2VzPGJyLz4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjxtYXJrPlVuZSBwb3NlIHNpbXBsZSA6PC9tYXJrPjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYSBwYWMgYWlyIGVhdSBwZXV0IHNlIHJhY2NvcmRlciBzdXIgbOKAmWluc3RhbGxhdGlvbiBkZSBjaGF1ZmZhZ2UgZXhpc3RhbnRlIG91IHN1ciB1biBwbGFuY2hlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhdWZmYW50PGJyLz4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjxtYXJrPlBhcyBkZSByZWpldHMgOjwvbWFyaz48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2Ugc3lzdMOobWUgZGUgY2hhdWZmYWdlIG5lIHJlamV0dGUgcGFzIGRlIGZ1bcOpZXMgZGFucyBs4oCZYXRtb3NwaMOocmUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbCBu4oCZeSBhIGRvbmMgYXVjdW5lIHByb2Jsw6ltYXRpcXVlIGRlIGNvbmR1aXQgZOKAmcOpdmFjdWF0aW9uIMOgIHByw6l2b2lyIDxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjxtYXJrPlVuIHNldWwgYXBwYXJlaWwgcG91ciB0b3VzIHZvcyBiZXNvaW5zIDo8L21hcms+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExlIHN5c3TDqG1lIHZhIHByb2R1aXJlIGxlIGNoYXVmZmFnZSBldCBs4oCZZWF1IGNoYXVkZSBldCBwb3VycmEgw6lnYWxlbWVudCByYWZyYWljaGlyIHZvcyBwacOoY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuIHDDqXJpb2RlIGVzdGl2YWxlIChzaSB2b3VzIG9wdGV6IHBvdXIgdW4gbW9kw6hsZSByw6l2ZXJzaWJsZSk8YnIvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0naW1nL2Vjb2xvL2Vjb2xvZ2llLnBuZycgd3JhcHBlZCB1aT17ZmFsc2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+PGgyPkVjb2xvZ2llPC9oMj48L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlc21va2UnLCBmb250RmFtaWx5OiAnQ29taWMgU2FucyBNUycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6MS41fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48bWFyaz5MJ2ltcGFjdCBlbnZpcm9ubmVtZW50YWwgZGVzIHBvbXBlcyDDoCBjaGFsZXVyPC9tYXJrPjwvc3Ryb25nPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZSBmb25jdGlvbm5lbWVudCBk4oCZdW5lIFBBQyByZXBvc2Ugc3VyIGzigJl1c2FnZSBkZXMgw6luZXJnaWVzIHJlbm91dmVsYWJsZXMuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWxsZSB1dGlsaXNlIGxlcyBjYWxvcmllcyBwcsOpc2VudGVzIGRhbnMgbOKAmWFpciBleHTDqXJpZXVyIHBvdXIgY2hhdWZmZXIgbGUgbG9nZW1lbnQuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2VzIGRlcm5pw6hyZXMgbmUgc29udCBwYXMgcG9sbHVhbnRlcy4gRW4gZm9uY3Rpb24gZHUgY29lZmZpY2llbnQgZGUgcGVyZm9ybWFuY2UgKENPUCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGEgY29uc29tbWF0aW9uIGTigJnDqW5lcmdpZSBwb3VyIGNoYXVmZmVyIGzigJloYWJpdGF0aW9uIHNlcmEgZm9ydGVtZW50IHLDqWR1aXRlLjxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48bWFyaz4gUGV1IGRlIHJlamV0cyBkYW5zIGwnYXRtb3NwaMOocmU8L21hcms+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYSBwb21wZSDDoCBjaGFsZXVyIG7igJlleHBsb2l0ZSBwYXMgZGlyZWN0ZW1lbnQgZGUgZmlvdWwsIGdheiBvdSBhdXRyZSBjb21idXN0aWJsZSBmb3NzaWxlLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExlcyByZWpldHMgZGUgQ08yIHNvbnQgcmVsYXRpdmVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpYmxlcyBwYXIgcmFwcG9ydCDDoCB1bmUgY2hhdWRpw6hyZSBjbGFzc2lxdWUuIENldXggZGUgTk94IChveHlkZXMgZCdhem90ZSkgc29udCBpbmV4aXN0YW50cy4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48bWFyaz5MYSBwb21wZSDDoCBjaGFsZXVyIGFpciBlYXU6PC9tYXJrPjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5lIHNvbHV0aW9uIMOpY29sb2dpcXVlIGV0IMOpY29ub21pcXVlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tbWUgbm91cyB2ZW5vbnMgZGUgbGUgdm9pciwgbGVzIFBBQyBwcsOpc2VydmVudCBnbG9iYWxlbWVudCBsZXMgcmVzc291cmNlcyBkZSBsYSBwbGFuw6h0ZS4gRWxsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbnQsIHBvdXIgbOKAmWhldXJlLCB1biBtb2RlIGRlIGNoYXVmZmFnZSDDqWNvcmVzcG9uc2FibGUuIERlIHBsdXMsIGxlcyBpbm5vdmF0aW9ucyBmdXR1cmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbcOpbGlvcmVyb250IGVuY29yZSBkYXZhbnRhZ2UgbOKAmWVtcHJlaW50ZSBlbnZpcm9ubmVtZW50YWxlIGRlIGNlcyBhcHBhcmVpbHMuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0naW1nL2Vjb2xvL2ZyYW5jZS5wbmcnIHdyYXBwZWQgdWk9e2ZhbHNlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+PGgyPlN1YnZlbnRpb248L2gyPjwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24gc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlc21va2UnLGZvbnRGYW1pbHk6J0NvbWljIFNhbnMgTVMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OjEuNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48bWFyaz5BY3Rpb24gTG9nZW1lbnQgOiBOb3V2ZWxsZSBhaWRlIHBvdXIgbGVzIHNhbGFyacOpcyBkdSBwcml2w6k8L21hcms+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEzigJlvcmdhbmlzbWUgQWN0aW9uIExvZ2VtZW50LCBwcm9wb3NlIHVuZSBub3V2ZWxsZSBhaWRlIDogdW5lIGFpZGUgcG91ciBmaW5hbmNlciBs4oCZSW5zdGFsbGF0aW9uIGRlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b3RyZSBQb21wZSDDoCBDaGFsZXVyLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2V0dGUgYWlkZSBlc3QgYXR0cmlidcOpZSBhdXggcHJvcHJpw6l0YWlyZXMgb3UgbG9jYXRhaXJlLiBM4oCZYWlkZSDDoCBsYSByw6lub3ZhdGlvbiDDqW5lcmfDqXRpcXVlIGTigJlBY3Rpb24gTG9nZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgcG91ciBvYmplY3RpZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZSBjb3V2cmlyIGzigJlpbnTDqWdyYWxpdMOpIGR1IGNvw7t0IGRlcyB0cmF2YXV4LCBldCBzb24gbW9udGFudCBlc3QgcGxhZm9ubsOpIMOgIDIwIDAwMOKCrC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ+KAmWVzdCBncsOiY2Ugw6AgY2V0dGUgYWlkZSBxdWkgYXBwYXJhw650IGZpbiAyMDIwIHF1ZSBjZXR0ZSBwb21wZSDDoCBjaGFsZXVyIHBldXQgYXVqb3VyZOKAmWh1aSB2b3VzIMOqdHJlIHByb3Bvc8OpZSDDoCB1biBldXJvIHN5bWJvbGlxdWUgIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdW11bGV6IHBsdXNpZXVycyBhaWRlcyB0cmF2YXV4ICEgRGUgcGx1cywgdm91cyBhdXJleiBsYSBwb3NzaWJpbGl0w6kgZGUgY3VtdWxlciBjZXR0ZSBhaWRlIGF2ZWMgbGVzIGRpZmbDqXJlbnRlcyBwcmltZXMgJiBhaWRlcyBkw6lqw6AgZXhpc3RhbnRlcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmQsIEltYWdlLCBDb250YWluZXIsIFNlZ21lbnQsIEdyaWQsIEl0ZW0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbm92ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbW9iaWxlIH0gPSB0aGlzLnByb3BzXHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJDb21pYyBzYW5zIE1TXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDMwLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJsb2NrcXVvdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhIFByaW1lIFLDqW5vJ3YsIGMnZXN0IHF1b2kgPzwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrcXVvdGU+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCB2ZXJ0aWNhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0YWNrYWJsZSB2ZXJ0aWNhbEFsaWduPSdjZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0gc3R5bGU9e3sgZm9udEZhbWlseTogXCJDb21pYyBzYW5zIE1TXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvZWNvbG8vcHJpbWVyZW5vdi5wbmdcIiBjZW50ZXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEwfSBzdHlsZT17e3BhZGRpbmdUb3A6OTB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9lY29sby9tYWlzb24tcG9tcGUtYS1jaGFsZXVyLmpwZ1wiIHNpemU9J2xhcmdlJ2NlbnRlcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9J2xlZnQnIHdpZHRoPXs2fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250RmFtaWx5OiBcIkNvbWljIHNhbnMgTVNcIiwgY29sb3I6IFwiR3JlZW5cIixwYWRkaW5nVG9wOjkwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGEgUHJpbWUgUsOpbm8ndiwgYydlc3QgcXVvaSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCBjb2xvcj0nZ3JlZW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvdXIgbOKAmW9idGVuaXIsIGlsIGVzdCBuw6ljZXNzYWlyZSBkZSBjcsOpZXIgdW4gY29tcHRlIGVuIGxpZ25lIHN1ciBsZSBzaXRlIG1hcHJpbWVyZW5vdi5nb3V2LmZyLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPkxhIGRlbWFuZGUgZG9pdCDDqnRyZSBmYWl0ZSBhdmFudCBsZSBkw6lidXQgZGVzIHRyYXZhdXguXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGx1c2lldXJzIGNvbmRpdGlvbnMgc29udCBuw6ljZXNzYWlyZXMgcG91ciBlbiBiw6luw6lmaWNpZXIuIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTOKAmWluc3RhbGxhdGlvbiBkZSBsYSBwb21wZSDDoCBjaGFsZXVyIGRldnJhIG5vdGFtbWVudCDDqnRyZSBlZmZlY3R1w6llIHBhciB1biBwcm9mZXNzaW9ubmVsIHF1YWxpZmnDqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJHRSBRdWFsaVBBQy48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvdXIgZW4gc2F2b2lyIHBsdXMgc3VyIGxhIFByaW1lIFLDqW5vdicsIHTDqWzDqWNoYXJnZXIgbGUgZG9jdW1lbnQgY2ktZGVzc291cyBsZXF1ZWwgdm91cyBzb3VoYWl0ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0dWVyIGRlcyB0cmF2YXV4IGVzdCB2b3RyZSByw6lzaWRlbmNlIHByaW5jaXBhbGUgb3UgY2VsbGUgZGUgdm90cmUgbG9jYXRhaXJlLjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiXHJcbmltcG9ydCB7IGNyZWF0ZU1lZGlhIH0gZnJvbSAnQGFydHN5L2ZyZXNuZWwnIFxyXG5cclxuY29uc3QgeyBNZWRpYUNvbnRleHRQcm92aWRlciwgTWVkaWEgfSA9IGNyZWF0ZU1lZGlhKHtcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgbW9iaWxlOiAwLFxyXG4gICAgICAgIHRhYmxldDogNzY4LFxyXG4gICAgICAgIGNvbXB1dGVyOiAxMDI0LFxyXG4gICAgICAgIGVjcmFuOiAxMTkyXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuY2xhc3MgSW5kZXhDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVkaWEgZ3JlYXRlclRoYW49J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICA8SG9tZS8+XHJcbiAgICAgICAgICAgIDwvTWVkaWE+IFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTW9iaWxlSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVkaWEgYXQ9J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICA8SG9tZSBtb2JpbGUvPlxyXG4gICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+IFxyXG4gICAgICAgICAgICAgICAgPE1lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPEluZGV4Q29udGFpbmVyID57dGhpcy5wcm9wcy5jaGlsZHJlbn08L0luZGV4Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPE1vYmlsZUluZGV4Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvTW9iaWxlSW5kZXg+XHJcbiAgICAgICAgICAgICAgICA8L01lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXJ0c3kvZnJlc25lbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbWFpbGpzLWNvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFuaW1hdGVkLWNzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9