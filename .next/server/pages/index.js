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
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("body", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_pages_Menu_js__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
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
      mobile
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
            centered: true,
            columns: 2,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
              style: {
                fontFamily: "Comic sans MS"
              },
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
                style: {
                  fontFamily: "Comic sans MS",
                  color: "green"
                },
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("center", {
                  children: "Votre Pompe \xE0 chaleur entierement financ\xE9 par"
                })
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
                  color: "green"
                },
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("u", {
                  children: "Comment l'obtenir"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Group, {
                divided: true,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"], {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Image, {
                    size: "tiny",
                    src: "img/ecolo/validez.png",
                    alt: "validez"
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
                    alt: "merci"
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
                    alt: "merci"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Content, {
                    verticalAlign: "middle",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Header, {
                      children: "Vous ne payez que 1 euro Sur pr\xE9sentation du devis , sans aucun frais avanc\xE9"
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"], {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Image, {
                    size: "tiny",
                    src: "img/ecolo/logocee.png",
                    alt: ""
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Content, {
                    verticalAlign: "middle",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Header, {
                      children: "l'etat finance  pour 1\u20AC symbolique"
                    })
                  })]
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
              style: {
                paddingTop: mobile ? 10 : 100,
                fontFamily: "Comic sans MS"
              },
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
                color: "black",
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
                    error: this.state.errorSalarie,
                    required: true,
                    label: "Vous etes salari\xE9",
                    placeholder: "----",
                    fluid: true,
                    options: salarie,
                    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"],
                    name: "salarie",
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
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
                      label: "J'autorise R.T.S \xE0 me recontacter pour me communiquer mon statut d'\xE9ligibilit\xE9"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Button, {
                    fluid: true,
                    type: "submit",
                    color: "green",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
                      children: "V\xE9rifier mon \xE9ligibilit\xE9"
                    })
                  })]
                })]
              })
            })]
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_pages_Pourquoi__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
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
/* harmony import */ var _Mobile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Mobile.js */ "./pages/Mobile.js");



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const {
  MediaContextProvider,
  Media
} = Object(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_2__["createMedia"])({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192
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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      fluid: true,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(Media, {
        greaterThan: "lg",
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
                    name: "Pourquoi",
                    href: "#pourquoi" + html,
                    active: activeItem === 'Pourquoi',
                    onClick: this.handleItemClick
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
                    name: "Dispositif",
                    href: "#dispositf" + html,
                    active: activeItem === 'Dispositif',
                    onClick: this.handleItemClick
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
                    name: "Mission",
                    href: "#mission" + html,
                    active: activeItem === 'mission',
                    onClick: this.handleItemClick
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
                    name: "Partenaires",
                    href: "#partenaires" + html,
                    active: activeItem === 'partenaires',
                    onClick: this.handleItemClick
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
                    name: "Contact",
                    href: "#Contactez nous" + html,
                    active: activeItem === 'Contact',
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
      between: ["sm", "xl"],
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Sidebar"].Pushable, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Sidebar"], {
          as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"],
          animation: "push",
          inverted: true,
          onHide: this.handleSidebarHide,
          vertical: true,
          visible: sidebarOpened,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
            name: "Home",
            href: "/",
            active: activeItem === 'Home',
            onClick: this.handleItemClick
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
            name: "Pourquoi",
            href: "/Pourquoi" + html,
            active: activeItem === 'Pourquoi',
            onClick: this.handleItemClick
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
            name: "Qui sommes nous",
            href: "/QuiSommesNous" + html,
            active: activeItem === 'Qui Somme Nous',
            onClick: this.handleItemClick
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
            name: "telecharger le reglement",
            href: "/Download" + html,
            active: activeItem === 'telecharger le reglement',
            onClick: this.handleItemClick
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
            name: "Contact",
            href: "/Contactez" + html,
            active: activeItem === 'Contact',
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
                pointing: true,
                secondary: true,
                size: "tiny",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
                  onClick: this.handleToggle,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
                    name: "sidebar"
                  })
                })
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Mobile_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
            marginTop: mobile ? '0.5em' : '1em',
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
            textAlign: "center"
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




class Pourquoi extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
          style: {
            fontFamily: "Comic sans MS",
            textAlign: "center",
            paddingTop: 100
          },
          children: "Pourquoi choisir le remplacement de votre systeme de chauffage"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          divided: "vertically",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
            columns: 3,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                  src: "img/ecolo/argent-economie.png",
                  wrapped: true,
                  ui: false
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
                  style: {
                    textAlign: 'center'
                  },
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
                    children: "Les avantages de la pompe \xE0 chaleur"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Description, {
                  style: {
                    textAlign: "center",
                    backgroundColor: 'whitesmoke'
                  },
                  children: ["La pompe \xE0 chaleur pr\xE9sente beaucoup d\u2019atouts, \xE0 la fois pour les \xE9conomies d\u2019\xE9nergie qu\u2019elle offre mais aussi pour son confort de chauffe et d\u2019utilisation. En effet, elle ne n\xE9cessite pas d\u2019espace de stockage pour le combustible (contrairement \xE0 d\u2019autres \xE9nergies comme le bois, le propane ou le fioul) et elle peut produire le chauffage et l\u2019eau chaude sanitaire.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("mark", {
                      children: "Une faible consommation d\u2019\xE9nergie :"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Pour 1kWh d\u2019\xE9lectricit\xE9 consomm\xE9e pour fonctionner, la pac restitue 3 \xE0 4 kWh de chaleur. Elle permet ainsi de r\xE9duire consid\xE9rablement les d\xE9penses (votre facture de chauffage peut \xEAtre divis\xE9e par 3 \xE0 4 !). ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("mark", {
                      children: "Un confort d\u2019utilisation :"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "La pac fonctionne de fa\xE7on autonome, elle chauffe rapidement et assure une temp\xE9rature stable dans toutes les pi\xE8ces.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("mark", {
                      children: "Une pose simple :"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "La pac air eau peut se raccorder sur l\u2019installation de chauffage existante ou sur un plancher chauffant.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("mark", {
                      children: "Pas de rejets :"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Ce syst\xE8me de chauffage ne rejette pas de fum\xE9es dans l\u2019atmosph\xE8re, il n\u2019y a donc aucune probl\xE9matique de conduit d\u2019\xE9vacuation \xE0 pr\xE9voir ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("mark", {
                      children: "Un seul appareil pour tous vos besoins :"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Le syst\xE8me va produire le chauffage et l\u2019eau chaude et pourra \xE9galement rafraichir vos pi\xE8ces en p\xE9riode estivale (si vous optez pour un mod\xE8le r\xE9versible)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {})]
                })]
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
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
                      backgroundColor: 'whitesmoke'
                    },
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("mark", {
                        children: "L'impact environnemental des pompes \xE0 chaleur"
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Le fonctionnement d\u2019une PAC repose sur l\u2019usage des \xE9nergies renouvelables. Elle utilise les calories pr\xE9sentes dans l\u2019air ext\xE9rieur pour chauffer le logement. Ces derni\xE8res ne sont pas polluantes. En fonction du coefficient de performance (COP), la consommation d\u2019\xE9nergie pour chauffer l\u2019habitation sera fortement r\xE9duite.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("mark", {
                        children: " Peu de rejets dans l'atmosph\xE8re"
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "La pompe \xE0 chaleur n\u2019exploite pas directement de fioul, gaz ou autre combustible fossile. Elle pr\xE9serve par cons\xE9quent les r\xE9serves naturelles. Les rejets de CO2 sont relativement faibles par rapport \xE0 une chaudi\xE8re classique. Ceux de NOx (oxydes d'azote) sont inexistants. A contrario, les fluides frigorig\xE8nes utilis\xE9s pour capter les calories favorisent l\u2019effet de serre. N\xE9anmoins, la r\xE9glementation F-Gas impose d\xE9sormais une r\xE9duction importante de l\u2019utilisation de fluides \xE0 fort GWP (Global Warning Potentiel). Les nouveaux mod\xE8les de PAC commercialis\xE9s sur le march\xE9 sont donc plus \xE9cologiques.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("mark", {
                        children: "La pompe \xE0 chaleur air eau :"
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "une solution \xE9cologique et \xE9conomique soutenue par le biais de primes Comme nous venons de le voir, les PAC pr\xE9servent globalement les ressources de la plan\xE8te. Elles sont, pour l\u2019heure, un mode de chauffage \xE9coresponsable. De plus, les innovations futures am\xE9lioreront encore davantage l\u2019empreinte environnementale de ces appareils.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {})]
                  })]
                })]
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
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
                      backgroundColor: 'whitesmoke'
                    },
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("mark", {
                        children: "Action Logement : Nouvelle aide pour les salari\xE9s du priv\xE9"
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "L\u2019organisme Action Logement, propose une nouvelle aide : une aide pour financer l\u2019Installation de votre Pompe \xE0 Chaleur. Cette aide est attribu\xE9e aux propri\xE9taires ou locataire. L\u2019aide \xE0 la r\xE9novation \xE9nerg\xE9tique d\u2019Action Logement a pour objectif de couvrir l\u2019int\xE9gralit\xE9 du co\xFBt des travaux, et son montant est plafonn\xE9 \xE0 20 000\u20AC. C\u2019est gr\xE2ce \xE0 cette aide qui appara\xEEt fin 2020 que cette pompe \xE0 chaleur peut aujourd\u2019hui vous \xEAtre propos\xE9e \xE0 un euro symbolique ! Cumulez plusieurs aides travaux ! De plus, vous aurez la possibilit\xE9 de cumuler cette aide avec les diff\xE9rentes primes & aides d\xE9j\xE0 existantes."]
                  })]
                })]
              })
            })]
          })
        })]
      })
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
    computer: 1024
  }
});

class IndexContainer extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Media, {
      greaterThan: "mobile",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {})
    });
  }

}

class MobileIndex extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor() {
    super();
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Ib21lLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvTW9iaWxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL1BvdXJxdW9pLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcnRzeS9mcmVzbmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZW1haWxqcy1jb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hbmltYXRlZC1jc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiSGVhZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiZW1haWxqcyIsIk15TGF5b3V0Iiwic3RhdGUiLCJjaGlsZHJlbiIsIkhvbWUiLCJlIiwibmFtZSIsInZhbHVlIiwic2V0U3RhdGUiLCJwcm9wcmlvIiwic2FsYXJpZSIsImNoYXVmZmFnZSIsImZhbWlsbGUiLCJmaXNjYWxpdGUiLCJub20iLCJwcmVub20iLCJhZHJlc3NlIiwibG9jYWxpdGUiLCJlbWFpbCIsInRlbGVwaG9uZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZXJyb3JQcm9wcmlvIiwiY29udGVudCIsInBvaW50aW5nIiwiZXJyb3JTYWxhcmllIiwiZXJyb3JDaGF1ZmZhZ2UiLCJlcnJvckZhbWlsbGUiLCJlcnJvckZpc2NhbGl0ZSIsImFsZXJ0IiwiZmlzY2FsaXTDqSIsImRhdGFDb250YWN0IiwidGVtcGxhdGVQYXJhbXMiLCJmcm9tX25hbWUiLCJ0b19uYW1lIiwicGVub20iLCJ0aGVuIiwicmVzdWx0IiwidGV4dCIsImVycm9yIiwibW9iaWxlIiwiZm9udEZhbWlseSIsImNvbG9yIiwidGV4dEFsaWduIiwicGFkZGluZ1RvcCIsImZvbnRTaXplIiwiRHJvcGRvd24iLCJoYW5kbGVDaGFuZ2UiLCJrZXkiLCJNZWRpYUNvbnRleHRQcm92aWRlciIsIk1lZGlhIiwiY3JlYXRlTWVkaWEiLCJicmVha3BvaW50cyIsInNtIiwibWQiLCJsZyIsInhsIiwiaHRtbCIsIkRlc2t0b3BDb250YWluZXIiLCJhY3RpdmVJdGVtIiwiZml4ZWQiLCJzaG93Rml4ZWRNZW51IiwiaGlkZUZpeGVkTWVudSIsImhhbmRsZUl0ZW1DbGljayIsIk1vYmlsZUNvbnRhaW5lciIsInNpZGViYXJPcGVuZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiU2lkZWJhciIsInB1c2hhYmxlIiwiTWVudSIsImhhbmRsZVNpZGViYXJIaWRlIiwibWluSGVpZ2h0IiwicGFkZGluZyIsImhhbmRsZVRvZ2dsZSIsIk15TWVudSIsIk1vYmlsZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJ0ZXh0RGVjb3JhdGlvbiIsIlBvdXJxdW9pIiwiYmFja2dyb3VuZENvbG9yIiwidGFibGV0IiwiY29tcHV0ZXIiLCJJbmRleENvbnRhaW5lciIsIk1vYmlsZUluZGV4IiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVB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MURBLDJDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE15TWVudSBmcm9tIFwiLi4vcGFnZXMvTWVudS5qc1wiXHJcbmltcG9ydCAqIGFzIGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5yZW5vdmF0aW9uPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwicmVub3ZhdGlvbiB0ZXJ0aWFpcmUgc2VydmljZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cImVtaWxlIGNoZW1tYW1hXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cInBvbXBlIGEgY2hhbGV1cixwbG9tYmVyaWUsZWxlY3RyaWNpdGUsc2FsbGUgZGUgYmFpblwiIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgYXN5bmMgcmVsPVwic3R5bGVzaGVldFwiIGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuMC4xL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvbWVudS5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW5pbWF0ZS5jc3MvMy41LjIvYW5pbWF0ZS5taW4uY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcInNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vZW1haWxqcy1jb21AMi9kaXN0L2VtYWlsLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpLmpzXCIgYXN5bmMgZGVmZXI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsanMuaW5pdChcIllPVVJfVVNFUl9JRFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8L2hlYWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJvZHkgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvYm9keT5cclxuICAgICAgICAgICAgICAgIDxNeU1lbnUgLz5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIlxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUxheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQnV0dG9uLCBJbWFnZSwgR3JpZCwgRHJvcGRvd24sIFNlZ21lbnQsIEVtYmVkLCBGb3JtLCBDaGVja2JveCwgSWNvbixJdGVtfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUxheW91dFwiXHJcbmltcG9ydCBQb3VycXVvaSBmcm9tJy4uL3BhZ2VzL1BvdXJxdW9pJ1xyXG5pbXBvcnQgKiBhcyBlbWFpbGpzIGZyb20gJ2VtYWlsanMtY29tJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge3Byb3ByaW86XCJcIixzYWxhcmllOlwiXCIsY2hhdWZmYWdlOlwiXCIsZmFtaWxsZTpcIlwiLGZpc2NhbGl0ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbm9tOlwiXCIscHJlbm9tOlwiXCIsYWRyZXNzZTpcIlwiLGxvY2FsaXRlOlwiXCIsZW1haWw6XCJcIix0ZWxlcGhvbmU6XCJcIn07XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGUsIHsgbmFtZSwgdmFsdWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtuYW1lXTogdmFsdWUgfSk7XHJcbiAgICBcclxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnByb3ByaW8gPT09IFwiXCIgPyB0aGlzLnNldFN0YXRlKHsgZXJyb3JQcm9wcmlvOiB7IGNvbnRlbnQ6XCJcIixwb2ludGluZzpudWxsfX0pIDogdGhpcy5zZXRTdGF0ZSh7IGVycm9yUHJvcHJpbzogbnVsbCB9KVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNhbGFyaWUgPT09IFwiXCIgPyB0aGlzLnNldFN0YXRlKHsgZXJyb3JTYWxhcmllOiB7IGNvbnRlbnQ6XCJcIixwb2ludGluZzpudWxsfX0pIDogdGhpcy5zZXRTdGF0ZSh7IGVycm9yU2FsYXJpZTogbnVsbCB9KVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNoYXVmZmFnZSA9PT0gXCJcIiA/IHRoaXMuc2V0U3RhdGUoeyBlcnJvckNoYXVmZmFnZTogeyBjb250ZW50OiBcIlwiLCBwb2ludGluZzpudWxsfX0pIDogdGhpcy5zZXRTdGF0ZSh7IGVycm9yQ2hhdWZmYWdlOiBudWxsIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZmFtaWxsZSA9PT0gXCJcIiA/IHRoaXMuc2V0U3RhdGUoeyBlcnJvckZhbWlsbGU6IHsgY29udGVudDogXCJcIiwgcG9pbnRpbmc6bnVsbH19KTogdGhpcy5zZXRTdGF0ZSh7IGVycm9yRmFtaWxsZTogbnVsbCB9KVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZpc2NhbGl0ZSA9PT0gXCJcIiA/IHRoaXMuc2V0U3RhdGUoeyBlcnJvckZpc2NhbGl0ZTogeyBjb250ZW50OiBcIlwiLCBwb2ludGluZzpudWxsfX0pIDogdGhpcy5zZXRTdGF0ZSh7IGVycm9yRmlzY2FsaXRlOiBudWxsIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucHJvcHJpbyA9PT0gXCJcIiA/IGFsZXJ0KFwiU2VsZWN0aW9ubmV6IHVuIGNob2l4XCIpIDpcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zYWxhcmllID09PSBcIlwiID8gYWxlcnQoXCJTZWxlY3Rpb25uZXogdW4gY2hvaXhcIikgOlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNoYXVmZmFnZSA9PT0gXCJcIiA/IGFsZXJ0KFwiU2VsZWN0aW9ubmV6IHVuIGNob2l4XCIpOlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZhbWlsbGUgPT09IFwiXCIgPyBhbGVydChcIlNlbGVjdGlvbm5leiB1biBjaG9peFwiKTogXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZmlzY2FsaXTDqSA9PT0gXCJcIiA/IGFsZXJ0KFwiU2VsZWN0aW9ubmV6IHVuIGNob2l4XCIpOnRoaXMuZGF0YUNvbnRhY3QoKVxyXG4gICAgfVxyXG4gICAgICAgICBcclxuICAgIGRhdGFDb250YWN0KCl7IFxyXG4gICAgY29uc3QgeyBwcm9wcmlvLCBzYWxhcmllLCBjaGF1ZmZhZ2UsIGZhbWlsbGUsIGZpc2NhbGl0ZSxcclxuICAgICAgICAgICAgbm9tLCBwcmVub20sIGFkcmVzc2UsIGxvY2FsaXRlLCBlbWFpbCwgdGVsZXBob25lfT10aGlzLnN0YXRlXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHRlbXBsYXRlUGFyYW1zID0ge1xyXG4gICAgICAgICAgICBmcm9tX25hbWU6IGVtYWlsLFxyXG4gICAgICAgICAgICB0b19uYW1lOiBub20sXHJcbiAgICAgICAgICAgIHByb3ByaW86IHByb3ByaW8sXHJcbiAgICAgICAgICAgIHNhbGFyaWU6IHNhbGFyaWUsXHJcbiAgICAgICAgICAgIGNoYXVmZmFnZTpjaGF1ZmZhZ2UsXHJcbiAgICAgICAgICAgIGZhbWlsbGU6ZmFtaWxsZSxcclxuICAgICAgICAgICAgZmlzY2FsaXRlOmZpc2NhbGl0ZSxcclxuICAgICAgICAgICAgYWRyZXNzZTphZHJlc3NlLFxyXG4gICAgICAgICAgICBsb2NhbGl0ZTpsb2NhbGl0ZSxcclxuICAgICAgICAgICAgZW1haWw6ZW1haWwsXHJcbiAgICAgICAgICAgIHRlbGVwaG9uZTp0ZWxlcGhvbmUsXHJcbiAgICAgICAgICAgIHBlbm9tOnByZW5vbSxcclxuICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbWFpbGpzLnNlbmQoJ215X0dtYWlsJywnZWxpZ2liaWxpdGUnLCB0ZW1wbGF0ZVBhcmFtcywndXNlcl9PNHJUbXl2Q3loblVZVEpyY3prTXYnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChyZXN1bHQudGV4dCk7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IudGV4dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcm9wcmlvID09PSBcIlwiLHRoaXMuc3RhdGUuc2FsYXJpZSA9PT0gXCJcIiAsdGhpcy5zdGF0ZS5jaGF1ZmZhZ2UgPT09IFwiXCIsdGhpcy5zdGF0ZS5mYW1pbGxlID09PSBcIlwiIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5maXNjYWxpdGUgPT09IFwiXCIgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm5vbT1cIlwiLHRoaXMuc3RhdGUucHJlbm9tPVwiXCIsdGhpcy5zdGF0ZS5hZHJlc3NlPVwiXCIsdGhpcy5zdGF0ZS5sb2NhbGl0ZT1cIlwiLHRoaXMuc3RhdGUuZW1haWw9XCJcIixcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGVsZXBob25lPVwiXCJcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IG1vYmlsZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3cgY2VudGVyZWQgY29sdW1ucz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3tmb250RmFtaWx5OiBcIkNvbWljIHNhbnMgTVNcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgZm9udEZhbWlseTogXCJDb21pYyBzYW5zIE1TXCIsIGNvbG9yOiBcImdyZWVuXCIgfX0+PGNlbnRlcj5Wb3RyZSBQb21wZSDDoCBjaGFsZXVyIGVudGllcmVtZW50IGZpbmFuY8OpIHBhcjwvY2VudGVyPjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9lY29sby9hY3Rpb24tbG9nZW1lbnQucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbWJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3BlY3RSYXRpbz0nMTY6OSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9JzBtMVFXVjN2VHpvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9Jy9pbWcvZWNvbG8vZWNvbG9naWUteW91dHViZS5qcGcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT0neW91dHViZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250RmFtaWx5OiBcImNvbWljIHNhbnMgTVNcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjb2xvcjogXCJncmVlblwiIH19Pjx1PkNvbW1lbnQgbCdvYnRlbmlyPC91PjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uR3JvdXAgZGl2aWRlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5JbWFnZSBzaXplPSd0aW55JyBzcmM9XCJpbWcvZWNvbG8vdmFsaWRlei5wbmdcIiBhbHQ9XCJ2YWxpZGV6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uQ29udGVudCB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkhlYWRlcj5SZW1wbGlzc2V6IGxlIGZvcm11bGFpcmU8L0l0ZW0uSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5JbWFnZSBzaXplPSd0aW55JyAgc3JjPVwiaW1nL2Vjb2xvL3RlbGVwaG9uZS5wbmdcIiBhbHQ9XCJ0ZWxlcGhvbmVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5Db250ZW50IHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uSGVhZGVyPiBVbiBwcm9mZXNzaW9ubmVsIHZvdXMgY29udGFjdCBhZmluIGQnb3V2cmlyIHZvdHJlIGRvc3NpZXIgZXQgY29udmVuaXIgZCd1biByZW5kZXotdm91czwvSXRlbS5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkltYWdlIHNpemU9J3RpbnknICBzcmM9XCJpbWcvZWNvbG8vb3V2cmllci5wbmdcIiBhbHQ9XCJtZXJjaVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkNvbnRlbnQgdmVydGljYWxBbGlnbj0nbWlkZGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5IZWFkZXI+IFVuZSDDqXF1aXBlIGRlIHRlY2huaWNpZW5zIGNvbmZpcm3DqXMgUkdFIHNlIGTDqXBsYWNlIGNoZXogdm91cyBhZmluIGRlIHLDqWFsaXNlciB2b3MgdHJhdmF1eDwvSXRlbS5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkltYWdlIHNpemU9J3RpbnknICBzcmM9XCJpbWcvZWNvbG8vcmVtZXJjaWVtZW50LnBuZ1wiIGFsdD1cIm1lcmNpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkNvbnRlbnQgdmVydGljYWxBbGlnbj0nbWlkZGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5IZWFkZXI+Vm91cyBuZSBwYXlleiBxdWUgMSBldXJvIFN1ciBwcsOpc2VudGF0aW9uIGR1IGRldmlzICwgc2FucyBhdWN1biBmcmFpcyBhdmFuY8OpPC9JdGVtLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uSW1hZ2Ugc2l6ZT0ndGlueScgc3JjPVwiaW1nL2Vjb2xvL2xvZ29jZWUucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkNvbnRlbnQgdmVydGljYWxBbGlnbj0nbWlkZGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5IZWFkZXI+bCdldGF0IGZpbmFuY2UgIHBvdXIgMeKCrCBzeW1ib2xpcXVlPC9JdGVtLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3sgcGFkZGluZ1RvcDogbW9iaWxlID8gMTAgOiAxMDAsIGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPVwiYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFucyBsZSBjYWRyZSBkZSBsYSB0cmFuc2l0aW9uIMOpY29sb2dpcXVlLCBsJ8OJdGF0IHByZW5kIGVuIGNoYXJnZSBsZSBjb8O7dCBkZSBs4oCZaW5zdGFsbGF0aW9uIGRlIHZvdHJlIHBvbXBlIMOgIGNoYWxldXIgcG91ciBzZXVsZW1lbnQgMeKCrCAhPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlcyBtaWxsaWVycyBkZSBmb3llcnMgZnJhbsOnYWlzIGVuIG9udCBkw6lqw6AgcHJvZml0w6ksIHBvdXJxdW9pIHBhcyB2b3VzID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjoncmVkJ319Piogc2Fpc2llIG9ibGlnYXRvaXJlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiLCBjb2xvcjogXCJncmVlblwiLCBmb250U2l6ZTogbW9iaWxlID8yMDozMCwgdGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWw6lyaWZpZXogdm90cmUgw6lsaWdpYml0w6k8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17ZT0+dGhpcy5oYW5kbGVTdWJtaXQoZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yUHJvcHJpb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJWb3VzIEV0ZXNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cHJvcHJpb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9wcmlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgY2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yU2FsYXJpZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVm91cyBldGVzIHNhbGFyacOpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17c2FsYXJpZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzYWxhcmllXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgY2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yQ2hhdWZmYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJWb3RyZSB0eXBlIGRlIENoYXVmZmFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS0tLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NoYXVmZmFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGF1ZmZhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIGNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvckZhbWlsbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5vbWJyZSBkZSBwZXJzb25uZSB2aXZhbnQgZGFucyBsZSBmb3llclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS0tLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2ZhbWlsbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmFtaWxsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBjbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JGaXNjYWxpdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJldmVudWUgZmlzY2FsIGRlIHLDqWbDqXJlbmNlICgyMDIwIG91IDIwMTkpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmlzY2FsaXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtEcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpc2NhbGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdOb20nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm9tXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ub219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPSdsb2NrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249J2xlZnQnICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1Byw6lub20nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Byw6lub20nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByZW5vbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcmVub219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiYWRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj0nbGVmdCcgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZHJlc3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdBZHJlc3NlJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs5fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZHJlc3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkcmVzc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTG9jYWxpdMOpJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdMb2NhbGl0w6knIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9jYWxpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubG9jYWxpdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFbWFpbCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdjb250YWN0QGdtYWlsLmNvbScgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs5fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1RlbGVwaG9uZScgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScwNjk4NjExMzcyJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZWxlcGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZWxlcGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGxhYmVsPVwiSidhdXRvcmlzZSBSLlQuUyDDoCBtZSByZWNvbnRhY3RlciBwb3VyIG1lIGNvbW11bmlxdWVyIG1vbiBzdGF0dXQgZCfDqWxpZ2liaWxpdMOpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkJ1dHRvbiBmbHVpZCB0eXBlPVwic3VibWl0XCJjb2xvcj1cImdyZWVuXCIgPjxoMj5Ww6lyaWZpZXIgbW9uIMOpbGlnaWJpbGl0w6k8L2gyPjwvRm9ybS5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8UG91cnF1b2kvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5jb25zdCBwcm9wcmlvID0gW1xyXG5cclxuICAgIHtcclxuICAgICAgICBrZXk6ICcxJyxcclxuICAgICAgICB0ZXh0OiAnUHJvcHJpw6l0YWlyZScsXHJcbiAgICAgICAgdmFsdWU6ICdQcm9wcmnDqXRhaXJlJyxcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzInLFxyXG4gICAgICAgIHRleHQ6ICdMb2NhdGFpcmUnLFxyXG4gICAgICAgIHZhbHVlOiAnTG9jYXRhaXJlJyxcclxuICAgIH1cclxuXVxyXG5cclxuXHJcbmNvbnN0IHNhbGFyaWUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMScsXHJcbiAgICAgICAgdGV4dDogJ1NlY3RldXIgcHVibGljJyxcclxuICAgICAgICB2YWx1ZTogJ1NlY3RldXIgcHVibGljJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMicsXHJcbiAgICAgICAgdGV4dDogJ1NlY3RldXIgcHJpdmUnLFxyXG4gICAgICAgIHZhbHVlOiAnU2VjdGV1ciBwcml2ZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzMnLFxyXG4gICAgICAgIHRleHQ6ICdTZWN0ZXVyIGFncmljb2xlJyxcclxuICAgICAgICB2YWx1ZTogJ1NlY3RldXIgYWdyaWNvbGUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc0JyxcclxuICAgICAgICB0ZXh0OiAnTm9uIHNhbGFyaWUnLFxyXG4gICAgICAgIHZhbHVlOiAnTm9uIHNhbGFyaWUnLFxyXG4gICAgfSxcclxuXHJcbl1cclxuY29uc3QgY2hhdWZmYWdlID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJzEnLFxyXG4gICAgICAgIHRleHQ6ICdFbGVjdHJpcXVlJyxcclxuICAgICAgICB2YWx1ZTogJ0VsZWN0cmlxdWUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcyJyxcclxuICAgICAgICB0ZXh0OiAnRmlvdWwnLFxyXG4gICAgICAgIHZhbHVlOiAnRmlvdWwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICczJyxcclxuICAgICAgICB0ZXh0OiAnR2F6JyxcclxuICAgICAgICB2YWx1ZTogJ0dheicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzQnLFxyXG4gICAgICAgIHRleHQ6ICdBdXRyZScsXHJcbiAgICAgICAgdmFsdWU6ICdBdXRyZScsXHJcbiAgICB9LFxyXG5dXHJcbmNvbnN0IGZhbWlsbGUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMScsXHJcbiAgICAgICAgdGV4dDogJzEnLFxyXG4gICAgICAgIHZhbHVlOiAnMScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzInLFxyXG4gICAgICAgIHRleHQ6ICcyJyxcclxuICAgICAgICB2YWx1ZTogJzInLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICczJyxcclxuICAgICAgICB0ZXh0OiAnMycsXHJcbiAgICAgICAgdmFsdWU6ICczJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNCcsXHJcbiAgICAgICAgdGV4dDogJzQnLFxyXG4gICAgICAgIHZhbHVlOiAnNCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzUgZXQgcGx1cycsXHJcbiAgICAgICAgdGV4dDogJzUgZXQgcGx1cycsXHJcbiAgICAgICAgdmFsdWU6ICc1IGV0IHBsdXMnLFxyXG4gICAgfVxyXG5dXHJcbmNvbnN0IGZpc2NhbGl0ZSA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcxJyxcclxuICAgICAgICB0ZXh0OiAnZGUgMOKCrCDDoCAxOTA3NOKCrCcsXHJcbiAgICAgICAgdmFsdWU6ICdkZSAw4oKsIMOgIDE5MDc04oKsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMicsXHJcbiAgICAgICAgdGV4dDogJ2RlIDE5MDc04oKsIMOgIDI3ODk24oKsJyxcclxuICAgICAgICB2YWx1ZTogJ2RlIDE5MDc04oKsIMOgIDI3ODk24oKsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMycsXHJcbiAgICAgICAgdGV4dDogJ2RlIDI3ODk24oKsIMOgIDMzNTQ34oKsJyxcclxuICAgICAgICB2YWx1ZTogJ2RlIDI3ODk24oKsIMOgIDMzNTQ34oKsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNCcsXHJcbiAgICAgICAgdGV4dDogJ2RlIDMzNTQ34oKsIMOgIDM5MTky4oKsJyxcclxuICAgICAgICB2YWx1ZTogJ2RlIDMzNTQ34oKsIMOgIDM5MTky4oKsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNScsXHJcbiAgICAgICAgdGV4dDogJ2RlIDM5MTky4oKsIMOgIDQ0ODYw4oKsJyxcclxuICAgICAgICB2YWx1ZTogJ2RlIDM5MTky4oKsIMOgIDQ0ODYw4oKsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNicsXHJcbiAgICAgICAgdGV4dDogJysgZGUgNDQ5ODYw4oKsJyxcclxuICAgICAgICB2YWx1ZTogJysgZGUgNDQ5ODYw4oKsJyxcclxuICAgIH1cclxuXVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNyZWF0ZU1lZGlhIH0gZnJvbSAnQGFydHN5L2ZyZXNuZWwnXHJcbmltcG9ydCB7Q29udGFpbmVyLCBJY29uLCBJbWFnZSwgTWVudSxTZWdtZW50LCBTaWRlYmFyLCBWaXNpYmlsaXR5fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IE1vYmlsZSBmcm9tIFwiLi9Nb2JpbGUuanNcIlxyXG5cclxuY29uc3QgeyBNZWRpYUNvbnRleHRQcm92aWRlciwgTWVkaWEgfSA9IGNyZWF0ZU1lZGlhKHtcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgc206IDAsXHJcbiAgICAgICAgbWQ6IDc2OCxcclxuICAgICAgICBsZzogMTAyNCxcclxuICAgICAgICB4bDogMTE5MlxyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgaHRtbCA9ICcnXHJcblxyXG5jbGFzcyBEZXNrdG9wQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge31cclxuICAgIHN0YXRlID0geyBhY3RpdmVJdGVtOiAnUG9tcGUgYSBjaGFsZXVyJyB9XHJcblxyXG4gICAgaGFuZGxlSXRlbUNsaWNrID0gKGUsIHsgbmFtZSB9KSA9PiB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSXRlbTogbmFtZSB9KVxyXG4gICAgaGlkZUZpeGVkTWVudSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmaXhlZDogZmFsc2UgfSlcclxuICAgIHNob3dGaXhlZE1lbnUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZml4ZWQ6IHRydWUgfSlcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgZml4ZWQgfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBjb25zdCB7IGFjdGl2ZUl0ZW0gfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgICAgICAgICAgIDxNZWRpYSBncmVhdGVyVGhhbj0nbGcnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uY2U9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJvdHRvbVBhc3NlZD17dGhpcy5zaG93Rml4ZWRNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJvdHRvbVBhc3NlZFJldmVyc2U9e3RoaXMuaGlkZUZpeGVkTWVudX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IHRleHRBbGlnbj0nY2VudGVyJ3ZlcnRpY2FsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgY29tcGFjdCBzaXplPSdzbWFsbCcgc3RhY2thYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvZWNvbG8vbG9nby5wbmdcIiBzaXplPVwic21hbGxcIi8+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gcG9zaXRpb249J2xlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nSG9tZScgaHJlZj1cIiNlc3NhaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnSG9tZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gcG9zaXRpb249J3JpZ2h0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdQb3VycXVvaScgaHJlZj17XCIjcG91cnF1b2lcIiArIGh0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnUG91cnF1b2knfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J0Rpc3Bvc2l0aWYnIGhyZWY9e1wiI2Rpc3Bvc2l0ZlwiICsgaHRtbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdEaXNwb3NpdGlmJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdNaXNzaW9uJyBocmVmPXtcIiNtaXNzaW9uXCIraHRtbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdtaXNzaW9uJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdQYXJ0ZW5haXJlcycgaHJlZj17XCIjcGFydGVuYWlyZXNcIisgaHRtbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdwYXJ0ZW5haXJlcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkNvbnRhY3RcIiBocmVmPXtcIiNDb250YWN0ZXogbm91c1wiICsgaHRtbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdDb250YWN0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Zpc2liaWxpdHk+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuY2xhc3MgTW9iaWxlQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge31cclxuICAgIHN0YXRlID0geyBhY3RpdmVJdGVtOiAnaG9tZScgfVxyXG5cclxuICAgIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSlcclxuICAgIGhhbmRsZVNpZGViYXJIaWRlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpZGViYXJPcGVuZWQ6IGZhbHNlIH0pXHJcbiAgICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2lkZWJhck9wZW5lZDogdHJ1ZSB9KVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgeyBzaWRlYmFyT3BlbmVkLCBhY3RpdmVJdGVtIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgICAgIE1vYmlsZUNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZWRpYSBhcz17U2lkZWJhci5wdXNoYWJsZX0gYmV0d2Vlbj17W1wic21cIiwgXCJ4bFwiXX0+XHJcbiAgICAgICAgICAgICAgICA8U2lkZWJhci5QdXNoYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz17TWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPSdwdXNoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlU2lkZWJhckhpZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3NpZGViYXJPcGVuZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J0hvbWUnIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ0hvbWUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J1BvdXJxdW9pJyBocmVmPXtcIi9Qb3VycXVvaVwiICsgaHRtbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ1BvdXJxdW9pJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdRdWkgc29tbWVzIG5vdXMnIGhyZWY9e1wiL1F1aVNvbW1lc05vdXNcIiArIGh0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdRdWkgU29tbWUgTm91cyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndGVsZWNoYXJnZXIgbGUgcmVnbGVtZW50JyBocmVmPXtcIi9Eb3dubG9hZFwiICsgaHRtbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3RlbGVjaGFyZ2VyIGxlIHJlZ2xlbWVudCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkNvbnRhY3RcIiBocmVmPXtcIi9Db250YWN0ZXpcIiArIGh0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdDb250YWN0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2lkZWJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhci5QdXNoZXIgZGltbWVkPXtzaWRlYmFyT3BlbmVkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IDI1MCwgcGFkZGluZzogJzAuNWVtIDBlbScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IGludmVydGVkIHBvaW50aW5nIHNlY29uZGFyeSBzaXplPSd0aW55Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdzaWRlYmFyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2JpbGUgbW9iaWxlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2lkZWJhci5QdXNoZXI+XHJcbiAgICAgICAgICAgICAgICA8L1NpZGViYXIuUHVzaGFibGU+XHJcbiAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBNeU1lbnUgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxNZWRpYUNvbnRleHRQcm92aWRlcj5cclxuXHJcbiAgICAgICAgICAgIDxEZXNrdG9wQ29udGFpbmVyPntjaGlsZHJlbn08L0Rlc2t0b3BDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxNb2JpbGVDb250YWluZXI+e2NoaWxkcmVufTwvTW9iaWxlQ29udGFpbmVyPlxyXG5cclxuICAgICAgICA8L01lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeU1lbnUiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGVyLCBJbWFnZSwgR3JpZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgeyBBbmltYXRlZCB9IGZyb20gXCJyZWFjdC1hbmltYXRlZC1jc3NcIjtcclxuXHJcbi8vbWVudSBtb2JpbGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9iaWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgbW9iaWxlIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIHRleHQ+XHJcbiAgICAgICAgICAgICAgICA8QW5pbWF0ZWQgYW5pbWF0aW9uSW49XCJmYWRlSW5cIiBhbmltYXRpb25PdXQ9XCJmYWRlT3V0XCIgYW5pbWF0aW9uSW5EdXJhdGlvbj17NTAwMH0gYW5pbWF0aW9uT3V0RHVyYXRpb249ezEwMDB9IGlzVmlzaWJsZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9lY29sby9sb2dvLnBuZ1wiIHNpemU9XCJzbWFsbFwiIGNlbnRlcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz0naDEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J1LDqW5vdmF0aW9uIFRlcnRpYWlyZSBzZXJ2aWNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImdyZWVuXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogbW9iaWxlID8gJzJlbScgOiAnNGVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBtb2JpbGUgPyAnMC41ZW0nIDogJzFlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9J2gyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PSdWb3MgcHJvamV0cyBlbnRpZXJlbWVudCBmaW5hbmPDqSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAnMC43ZW0nIDogJzFlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogbW9iaWxlID8gJzAuNWVtJyA6ICcwLjVlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9BbmltYXRlZD5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FyZCwgSWNvbiwgSW1hZ2UgLEdyaWQsQ29udGFpbmVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCcgXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG91cnF1b2kgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3tmb250RmFtaWx5OlwiQ29taWMgc2FucyBNU1wiLHRleHRBbGlnbjpcImNlbnRlclwiLHBhZGRpbmdUb3A6MTAwfX0+UG91cnF1b2kgY2hvaXNpciBsZSByZW1wbGFjZW1lbnQgZGUgdm90cmUgc3lzdGVtZSBkZSBjaGF1ZmZhZ2U8L2gxPiBcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBkaXZpZGVkPSd2ZXJ0aWNhbGx5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPSdpbWcvZWNvbG8vYXJnZW50LWVjb25vbWllLnBuZycgd3JhcHBlZCB1aT17ZmFsc2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcid9fT48aDI+TGVzIGF2YW50YWdlcyBkZSBsYSBwb21wZSDDoCBjaGFsZXVyPC9oMj48L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlc21va2UnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhIHBvbXBlIMOgIGNoYWxldXIgcHLDqXNlbnRlIGJlYXVjb3VwIGTigJlhdG91dHMsIMOgIGxhIGZvaXMgcG91ciBsZXMgw6ljb25vbWllcyBk4oCZw6luZXJnaWUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF14oCZZWxsZSBvZmZyZSBtYWlzIGF1c3NpIHBvdXIgc29uIGNvbmZvcnQgZGUgY2hhdWZmZSBldCBk4oCZdXRpbGlzYXRpb24uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbiBlZmZldCwgZWxsZSBuZSBuw6ljZXNzaXRlIHBhcyBk4oCZZXNwYWNlIGRlIHN0b2NrYWdlIHBvdXIgbGUgY29tYnVzdGlibGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb250cmFpcmVtZW50IMOgIGTigJlhdXRyZXMgw6luZXJnaWVzIGNvbW1lIGxlIGJvaXMsIGxlIHByb3BhbmUgb3UgbGUgZmlvdWwpIGV0IGVsbGUgcGV1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVpcmUgbGUgY2hhdWZmYWdlIGV0IGzigJllYXUgY2hhdWRlIHNhbml0YWlyZS48YnIvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48bWFyaz5VbmUgZmFpYmxlIGNvbnNvbW1hdGlvbiBk4oCZw6luZXJnaWUgOjwvbWFyaz48L3N0cm9uZz48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3VyIDFrV2ggZOKAmcOpbGVjdHJpY2l0w6kgY29uc29tbcOpZSBwb3VyIGZvbmN0aW9ubmVyLCBsYSBwYWMgcmVzdGl0dWUgMyDDoCA0IGtXaCBkZSBjaGFsZXVyLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWxsZSBwZXJtZXQgYWluc2kgZGUgcsOpZHVpcmUgY29uc2lkw6lyYWJsZW1lbnQgbGVzIGTDqXBlbnNlcyAodm90cmUgZmFjdHVyZSBkZSBjaGF1ZmZhZ2UgcGV1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgw6p0cmUgZGl2aXPDqWUgcGFyIDMgw6AgNCAhKS4gPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+PG1hcms+VW4gY29uZm9ydCBk4oCZdXRpbGlzYXRpb24gOjwvbWFyaz48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGEgcGFjIGZvbmN0aW9ubmUgZGUgZmHDp29uIGF1dG9ub21lLCBlbGxlIGNoYXVmZmUgcmFwaWRlbWVudCBldCBhc3N1cmUgdW5lIHRlbXDDqXJhdHVyZSBzdGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFucyB0b3V0ZXMgbGVzIHBpw6hjZXMuPGJyLz4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjxtYXJrPlVuZSBwb3NlIHNpbXBsZSA6PC9tYXJrPjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYSBwYWMgYWlyIGVhdSBwZXV0IHNlIHJhY2NvcmRlciBzdXIgbOKAmWluc3RhbGxhdGlvbiBkZSBjaGF1ZmZhZ2UgZXhpc3RhbnRlIG91IHN1ciB1biBwbGFuY2hlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhdWZmYW50Ljxici8+IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48bWFyaz5QYXMgZGUgcmVqZXRzIDo8L21hcms+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlIHN5c3TDqG1lIGRlIGNoYXVmZmFnZSBuZSByZWpldHRlIHBhcyBkZSBmdW3DqWVzIGRhbnMgbOKAmWF0bW9zcGjDqHJlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWwgbuKAmXkgYSBkb25jIGF1Y3VuZSBwcm9ibMOpbWF0aXF1ZSBkZSBjb25kdWl0IGTigJnDqXZhY3VhdGlvbiDDoCBwcsOpdm9pciA8YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48bWFyaz5VbiBzZXVsIGFwcGFyZWlsIHBvdXIgdG91cyB2b3MgYmVzb2lucyA6PC9tYXJrPjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZSBzeXN0w6htZSB2YSBwcm9kdWlyZSBsZSBjaGF1ZmZhZ2UgZXQgbOKAmWVhdSBjaGF1ZGUgZXQgcG91cnJhIMOpZ2FsZW1lbnQgcmFmcmFpY2hpciB2b3MgcGnDqGNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbiBww6lyaW9kZSBlc3RpdmFsZSAoc2kgdm91cyBvcHRleiBwb3VyIHVuIG1vZMOobGUgcsOpdmVyc2libGUpPGJyLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0naW1nL2Vjb2xvL2Vjb2xvZ2llLnBuZycgd3JhcHBlZCB1aT17ZmFsc2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT48aDI+RWNvbG9naWU8L2gyPjwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGJhY2tncm91bmRDb2xvcjond2hpdGVzbW9rZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48bWFyaz5MJ2ltcGFjdCBlbnZpcm9ubmVtZW50YWwgZGVzIHBvbXBlcyDDoCBjaGFsZXVyPC9tYXJrPjwvc3Ryb25nPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGUgZm9uY3Rpb25uZW1lbnQgZOKAmXVuZSBQQUMgcmVwb3NlIHN1ciBs4oCZdXNhZ2UgZGVzIMOpbmVyZ2llcyByZW5vdXZlbGFibGVzLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbGxlIHV0aWxpc2UgbGVzIGNhbG9yaWVzIHByw6lzZW50ZXMgZGFucyBs4oCZYWlyIGV4dMOpcmlldXIgcG91ciBjaGF1ZmZlciBsZSBsb2dlbWVudC4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2VzIGRlcm5pw6hyZXMgbmUgc29udCBwYXMgcG9sbHVhbnRlcy4gRW4gZm9uY3Rpb24gZHUgY29lZmZpY2llbnQgZGUgcGVyZm9ybWFuY2UgKENPUCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhIGNvbnNvbW1hdGlvbiBk4oCZw6luZXJnaWUgcG91ciBjaGF1ZmZlciBs4oCZaGFiaXRhdGlvbiBzZXJhIGZvcnRlbWVudCByw6lkdWl0ZS48YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjxtYXJrPiBQZXUgZGUgcmVqZXRzIGRhbnMgbCdhdG1vc3Bow6hyZTwvbWFyaz48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYSBwb21wZSDDoCBjaGFsZXVyIG7igJlleHBsb2l0ZSBwYXMgZGlyZWN0ZW1lbnQgZGUgZmlvdWwsIGdheiBvdSBhdXRyZSBjb21idXN0aWJsZSBmb3NzaWxlLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbGxlIHByw6lzZXJ2ZSBwYXIgY29uc8OpcXVlbnQgbGVzIHLDqXNlcnZlcyBuYXR1cmVsbGVzLiBMZXMgcmVqZXRzIGRlIENPMiBzb250IHJlbGF0aXZlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlibGVzIHBhciByYXBwb3J0IMOgIHVuZSBjaGF1ZGnDqHJlIGNsYXNzaXF1ZS4gQ2V1eCBkZSBOT3ggKG94eWRlcyBkJ2F6b3RlKSBzb250IGluZXhpc3RhbnRzLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBIGNvbnRyYXJpbywgbGVzIGZsdWlkZXMgZnJpZ29yaWfDqG5lcyB1dGlsaXPDqXMgcG91ciBjYXB0ZXIgbGVzIGNhbG9yaWVzIGZhdm9yaXNlbnQgbOKAmWVmZmV0IGRlIHNlcnJlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE7DqWFubW9pbnMsIGxhIHLDqWdsZW1lbnRhdGlvbiBGLUdhcyBpbXBvc2UgZMOpc29ybWFpcyB1bmUgcsOpZHVjdGlvbiBpbXBvcnRhbnRlIGRlIGzigJl1dGlsaXNhdGlvbiBkZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZGVzIMOgIGZvcnQgR1dQIChHbG9iYWwgV2FybmluZyBQb3RlbnRpZWwpLiBMZXMgbm91dmVhdXggbW9kw6hsZXMgZGUgUEFDIGNvbW1lcmNpYWxpc8OpcyBzdXIgbGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyY2jDqSBzb250IGRvbmMgcGx1cyDDqWNvbG9naXF1ZXMuPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48bWFyaz5MYSBwb21wZSDDoCBjaGFsZXVyIGFpciBlYXUgOjwvbWFyaz48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5lIHNvbHV0aW9uIMOpY29sb2dpcXVlIGV0IMOpY29ub21pcXVlIHNvdXRlbnVlIHBhciBsZSBiaWFpcyBkZSBwcmltZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21tZSBub3VzIHZlbm9ucyBkZSBsZSB2b2lyLCBsZXMgUEFDIHByw6lzZXJ2ZW50IGdsb2JhbGVtZW50IGxlcyByZXNzb3VyY2VzIGRlIGxhIHBsYW7DqHRlLiBFbGxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbnQsIHBvdXIgbOKAmWhldXJlLCB1biBtb2RlIGRlIGNoYXVmZmFnZSDDqWNvcmVzcG9uc2FibGUuIERlIHBsdXMsIGxlcyBpbm5vdmF0aW9ucyBmdXR1cmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW3DqWxpb3Jlcm9udCBlbmNvcmUgZGF2YW50YWdlIGzigJllbXByZWludGUgZW52aXJvbm5lbWVudGFsZSBkZSBjZXMgYXBwYXJlaWxzLjxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPSdpbWcvZWNvbG8vZnJhbmNlLnBuZycgd3JhcHBlZCB1aT17ZmFsc2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+PGgyPlN1YnZlbnRpb248L2gyPjwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24gc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlc21va2UnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+PG1hcms+QWN0aW9uIExvZ2VtZW50IDogTm91dmVsbGUgYWlkZSBwb3VyIGxlcyBzYWxhcmnDqXMgZHUgcHJpdsOpPC9tYXJrPjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBM4oCZb3JnYW5pc21lIEFjdGlvbiBMb2dlbWVudCwgcHJvcG9zZSB1bmUgbm91dmVsbGUgYWlkZSA6IHVuZSBhaWRlIHBvdXIgZmluYW5jZXIgbOKAmUluc3RhbGxhdGlvbiBkZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm90cmUgUG9tcGUgw6AgQ2hhbGV1ci4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENldHRlIGFpZGUgZXN0IGF0dHJpYnXDqWUgYXV4IHByb3ByacOpdGFpcmVzIG91IGxvY2F0YWlyZS4gTOKAmWFpZGUgw6AgbGEgcsOpbm92YXRpb24gw6luZXJnw6l0aXF1ZSBk4oCZQWN0aW9uIExvZ2VtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhIHBvdXIgb2JqZWN0aWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGUgY291dnJpciBs4oCZaW50w6lncmFsaXTDqSBkdSBjb8O7dCBkZXMgdHJhdmF1eCwgZXQgc29uIG1vbnRhbnQgZXN0IHBsYWZvbm7DqSDDoCAyMCAwMDDigqwuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEPigJllc3QgZ3LDomNlIMOgIGNldHRlIGFpZGUgcXVpIGFwcGFyYcOudCBmaW4gMjAyMCBxdWUgY2V0dGUgcG9tcGUgw6AgY2hhbGV1ciBwZXV0IGF1am91cmTigJlodWkgdm91cyDDqnRyZSBwcm9wb3PDqWUgw6AgdW4gZXVybyBzeW1ib2xpcXVlICFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtdWxleiBwbHVzaWV1cnMgYWlkZXMgdHJhdmF1eCAhIERlIHBsdXMsIHZvdXMgYXVyZXogbGEgcG9zc2liaWxpdMOpIGRlIGN1bXVsZXIgY2V0dGUgYWlkZSBhdmVjIGxlcyBkaWZmw6lyZW50ZXMgcHJpbWVzICYgYWlkZXMgZMOpasOgIGV4aXN0YW50ZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIlxyXG5pbXBvcnQgeyBjcmVhdGVNZWRpYSB9IGZyb20gJ0BhcnRzeS9mcmVzbmVsJ1xyXG4gXHJcbmNvbnN0IHsgTWVkaWFDb250ZXh0UHJvdmlkZXIsIE1lZGlhIH0gPSBjcmVhdGVNZWRpYSh7XHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIG1vYmlsZTogMCxcclxuICAgICAgICB0YWJsZXQ6IDc2OCxcclxuICAgICAgICBjb21wdXRlcjogMTAyNCxcclxuICAgIH1cclxufSlcclxuXHJcbmNsYXNzIEluZGV4Q29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICBcclxuICAgIH1cclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVkaWEgZ3JlYXRlclRoYW49J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICA8SG9tZSAvPlxyXG4gICAgICAgICAgICA8L01lZGlhPiBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBNb2JpbGVJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgPE1lZGlhIGF0PSdtb2JpbGUnPlxyXG4gICAgICAgICAgICAgICAgPEhvbWUgbW9iaWxlIC8+XHJcbiAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj4gXHJcbiAgICAgICAgICAgICAgICA8TWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8SW5kZXhDb250YWluZXIgPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvSW5kZXhDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8TW9iaWxlSW5kZXg+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9Nb2JpbGVJbmRleD5cclxuICAgICAgICAgICAgICAgIDwvTWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcnRzeS9mcmVzbmVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtYWlsanMtY29tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYW5pbWF0ZWQtY3NzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=