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
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emailjs-com */ "emailjs-com");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_4__);



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
    emailjs_com__WEBPACK_IMPORTED_MODULE_4__["send"]('my_Gmail', 'eligibilite', templateParams, 'user_O4rTmyvCyhnUYTJrczkMv').then(result => {
      alert(result.text);
    }, error => {
      alert(error.text);
    });
  }

  render() {
    const {
      mobile
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
            centered: true,
            columns: 2,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
              style: {
                paddingTop: 10,
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
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                    children: "R\xE9duisez vos factures de 70% "
                  }), ":La pompe \xE0 chaleur vous permet de faire des \xE9conomies consid\xE9rables ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                    children: "Elle divise la facture de chauffage par 3 !"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                    children: "Fini la pollution"
                  }), ":Passez aux \xE9nergies vertes et propres."]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                    children: " Des professionnels Reconnus Grenelle de l\u2019Environnement"
                  }), ", vous ferons b\xE9n\xE9ficier de la Loi de Transition Energ\xE9tique ", this.state.proprio]
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("iframe", {
                width: "420",
                height: "315",
                src: "https://www.youtube.com/embed/0m1QWV3vTzo"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
                children: "Nos qualifications"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"].Group, {
                size: "tiny",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                  src: "img/ecolo/engagement-qualite.png",
                  width: "auto",
                  height: "60",
                  alt: ""
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                  src: "img/ecolo/qualipac.png",
                  width: "auto",
                  height: "60",
                  alt: "..."
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                  src: "img/ecolo/garantie-satisfaction.png",
                  width: "auto",
                  height: "60",
                  alt: "..."
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
              style: {
                paddingTop: mobile ? 10 : 20,
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
                    fontSize: 30,
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
      })
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
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
              src: "img/ecolo/france.png"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Ib21lLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvTW9iaWxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcnRzeS9mcmVzbmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZW1haWxqcy1jb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hbmltYXRlZC1jc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiSGVhZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiZW1haWxqcyIsIk15TGF5b3V0Iiwic3RhdGUiLCJjaGlsZHJlbiIsIkhvbWUiLCJlIiwibmFtZSIsInZhbHVlIiwic2V0U3RhdGUiLCJwcm9wcmlvIiwic2FsYXJpZSIsImNoYXVmZmFnZSIsImZhbWlsbGUiLCJmaXNjYWxpdGUiLCJub20iLCJwcmVub20iLCJhZHJlc3NlIiwibG9jYWxpdGUiLCJlbWFpbCIsInRlbGVwaG9uZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZXJyb3JQcm9wcmlvIiwiY29udGVudCIsInBvaW50aW5nIiwiZXJyb3JTYWxhcmllIiwiZXJyb3JDaGF1ZmZhZ2UiLCJlcnJvckZhbWlsbGUiLCJlcnJvckZpc2NhbGl0ZSIsImFsZXJ0IiwiZmlzY2FsaXTDqSIsImRhdGFDb250YWN0IiwidGVtcGxhdGVQYXJhbXMiLCJmcm9tX25hbWUiLCJ0b19uYW1lIiwicGVub20iLCJ0aGVuIiwicmVzdWx0IiwidGV4dCIsImVycm9yIiwibW9iaWxlIiwicGFkZGluZ1RvcCIsImZvbnRGYW1pbHkiLCJjb2xvciIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiRHJvcGRvd24iLCJoYW5kbGVDaGFuZ2UiLCJrZXkiLCJNZWRpYUNvbnRleHRQcm92aWRlciIsIk1lZGlhIiwiY3JlYXRlTWVkaWEiLCJicmVha3BvaW50cyIsInNtIiwibWQiLCJsZyIsInhsIiwiaHRtbCIsIkRlc2t0b3BDb250YWluZXIiLCJhY3RpdmVJdGVtIiwiZml4ZWQiLCJzaG93Rml4ZWRNZW51IiwiaGlkZUZpeGVkTWVudSIsImhhbmRsZUl0ZW1DbGljayIsIk1vYmlsZUNvbnRhaW5lciIsInNpZGViYXJPcGVuZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiU2lkZWJhciIsInB1c2hhYmxlIiwiTWVudSIsImhhbmRsZVNpZGViYXJIaWRlIiwibWluSGVpZ2h0IiwicGFkZGluZyIsImhhbmRsZVRvZ2dsZSIsIk15TWVudSIsIk1vYmlsZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJ0ZXh0RGVjb3JhdGlvbiIsInRhYmxldCIsImNvbXB1dGVyIiwiSW5kZXhDb250YWluZXIiLCJNb2JpbGVJbmRleCIsIkluZGV4Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMs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b0JBQWMsS0FBS0wsS0FBTCxDQUFXSztBQUF6QixVQUZBO0FBQUE7QUFESixNQURKO0FBUUg7O0FBWCtCOztBQWFyQm1GLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDMURBLDJDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE15TWVudSBmcm9tIFwiLi4vcGFnZXMvTWVudS5qc1wiXHJcbmltcG9ydCAqIGFzIGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5yZW5vdmF0aW9uPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwicmVub3ZhdGlvbiB0ZXJ0aWFpcmUgc2VydmljZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cImVtaWxlIGNoZW1tYW1hXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cInBvbXBlIGEgY2hhbGV1cixwbG9tYmVyaWUsZWxlY3RyaWNpdGUsc2FsbGUgZGUgYmFpblwiIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgYXN5bmMgcmVsPVwic3R5bGVzaGVldFwiIGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuMC4xL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvbWVudS5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW5pbWF0ZS5jc3MvMy41LjIvYW5pbWF0ZS5taW4uY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcInNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vZW1haWxqcy1jb21AMi9kaXN0L2VtYWlsLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpLmpzXCIgYXN5bmMgZGVmZXI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsanMuaW5pdChcIllPVVJfVVNFUl9JRFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8L2hlYWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJvZHkgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvYm9keT5cclxuICAgICAgICAgICAgICAgIDxNeU1lbnUgLz5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIlxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUxheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQnV0dG9uLCBJbWFnZSwgR3JpZCwgRHJvcGRvd24sIFNlZ21lbnQsIExhYmVsLCBGb3JtLCBDaGVja2JveCwgSWNvbixNZXNzYWdlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXRcIlxyXG5cclxuaW1wb3J0ICogYXMgZW1haWxqcyBmcm9tICdlbWFpbGpzLWNvbSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge3Byb3ByaW86XCJcIixzYWxhcmllOlwiXCIsY2hhdWZmYWdlOlwiXCIsZmFtaWxsZTpcIlwiLGZpc2NhbGl0ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbm9tOlwiXCIscHJlbm9tOlwiXCIsYWRyZXNzZTpcIlwiLGxvY2FsaXRlOlwiXCIsZW1haWw6XCJcIix0ZWxlcGhvbmU6XCJcIn07XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGUsIHsgbmFtZSwgdmFsdWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtuYW1lXTogdmFsdWUgfSk7XHJcbiAgICBcclxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnByb3ByaW8gPT09IFwiXCIgPyB0aGlzLnNldFN0YXRlKHsgZXJyb3JQcm9wcmlvOiB7IGNvbnRlbnQ6XCJcIixwb2ludGluZzpudWxsfX0pIDogdGhpcy5zZXRTdGF0ZSh7IGVycm9yUHJvcHJpbzogbnVsbCB9KVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNhbGFyaWUgPT09IFwiXCIgPyB0aGlzLnNldFN0YXRlKHsgZXJyb3JTYWxhcmllOiB7IGNvbnRlbnQ6XCJcIixwb2ludGluZzpudWxsfX0pIDogdGhpcy5zZXRTdGF0ZSh7IGVycm9yU2FsYXJpZTogbnVsbCB9KVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNoYXVmZmFnZSA9PT0gXCJcIiA/IHRoaXMuc2V0U3RhdGUoeyBlcnJvckNoYXVmZmFnZTogeyBjb250ZW50OiBcIlwiLCBwb2ludGluZzpudWxsfX0pIDogdGhpcy5zZXRTdGF0ZSh7IGVycm9yQ2hhdWZmYWdlOiBudWxsIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZmFtaWxsZSA9PT0gXCJcIiA/IHRoaXMuc2V0U3RhdGUoeyBlcnJvckZhbWlsbGU6IHsgY29udGVudDogXCJcIiwgcG9pbnRpbmc6bnVsbH19KTogdGhpcy5zZXRTdGF0ZSh7IGVycm9yRmFtaWxsZTogbnVsbCB9KVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZpc2NhbGl0ZSA9PT0gXCJcIiA/IHRoaXMuc2V0U3RhdGUoeyBlcnJvckZpc2NhbGl0ZTogeyBjb250ZW50OiBcIlwiLCBwb2ludGluZzpudWxsfX0pIDogdGhpcy5zZXRTdGF0ZSh7IGVycm9yRmlzY2FsaXRlOiBudWxsIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucHJvcHJpbyA9PT0gXCJcIiA/IGFsZXJ0KFwiU2VsZWN0aW9ubmV6IHVuIGNob2l4XCIpIDpcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zYWxhcmllID09PSBcIlwiID8gYWxlcnQoXCJTZWxlY3Rpb25uZXogdW4gY2hvaXhcIikgOlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNoYXVmZmFnZSA9PT0gXCJcIiA/IGFsZXJ0KFwiU2VsZWN0aW9ubmV6IHVuIGNob2l4XCIpOlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZhbWlsbGUgPT09IFwiXCIgPyBhbGVydChcIlNlbGVjdGlvbm5leiB1biBjaG9peFwiKTogXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZmlzY2FsaXTDqSA9PT0gXCJcIiA/IGFsZXJ0KFwiU2VsZWN0aW9ubmV6IHVuIGNob2l4XCIpOnRoaXMuZGF0YUNvbnRhY3QoKVxyXG4gICAgfVxyXG4gICAgICAgICBcclxuICAgIGRhdGFDb250YWN0KCl7IFxyXG4gICAgY29uc3QgeyBwcm9wcmlvLCBzYWxhcmllLCBjaGF1ZmZhZ2UsIGZhbWlsbGUsIGZpc2NhbGl0ZSxcclxuICAgICAgICAgICAgbm9tLCBwcmVub20sIGFkcmVzc2UsIGxvY2FsaXRlLCBlbWFpbCwgdGVsZXBob25lfT10aGlzLnN0YXRlXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHRlbXBsYXRlUGFyYW1zID0ge1xyXG4gICAgICAgICAgICBmcm9tX25hbWU6IGVtYWlsLFxyXG4gICAgICAgICAgICB0b19uYW1lOiBub20sXHJcbiAgICAgICAgICAgIHByb3ByaW86IHByb3ByaW8sXHJcbiAgICAgICAgICAgIHNhbGFyaWU6IHNhbGFyaWUsXHJcbiAgICAgICAgICAgIGNoYXVmZmFnZTpjaGF1ZmZhZ2UsXHJcbiAgICAgICAgICAgIGZhbWlsbGU6ZmFtaWxsZSxcclxuICAgICAgICAgICAgZmlzY2FsaXRlOmZpc2NhbGl0ZSxcclxuICAgICAgICAgICAgYWRyZXNzZTphZHJlc3NlLFxyXG4gICAgICAgICAgICBsb2NhbGl0ZTpsb2NhbGl0ZSxcclxuICAgICAgICAgICAgZW1haWw6ZW1haWwsXHJcbiAgICAgICAgICAgIHRlbGVwaG9uZTp0ZWxlcGhvbmUsXHJcbiAgICAgICAgICAgIHBlbm9tOnByZW5vbSxcclxuICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbWFpbGpzLnNlbmQoJ215X0dtYWlsJywnZWxpZ2liaWxpdGUnLCB0ZW1wbGF0ZVBhcmFtcywndXNlcl9PNHJUbXl2Q3loblVZVEpyY3prTXYnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChyZXN1bHQudGV4dCk7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IudGV4dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IG1vYmlsZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3cgY2VudGVyZWQgY29sdW1ucz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3sgcGFkZGluZ1RvcDogMTAsIGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250RmFtaWx5OiBcIkNvbWljIHNhbnMgTVNcIiwgY29sb3I6IFwiZ3JlZW5cIiB9fT48Y2VudGVyPlZvdHJlIFBvbXBlIMOgIGNoYWxldXIgZW50aWVyZW1lbnQgZmluYW5jw6kgcGFyPC9jZW50ZXI+PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1nL2Vjb2xvL2FjdGlvbi1sb2dlbWVudC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+UsOpZHVpc2V6IHZvcyBmYWN0dXJlcyBkZSA3MCUgPC9zdHJvbmc+OkxhIHBvbXBlIMOgIGNoYWxldXIgdm91cyBwZXJtZXQgZGUgZmFpcmUgZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgw6ljb25vbWllcyBjb25zaWTDqXJhYmxlcyA8c3Ryb25nPkVsbGUgZGl2aXNlIGxhIGZhY3R1cmUgZGUgY2hhdWZmYWdlIHBhciAzICE8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPkZpbmkgbGEgcG9sbHV0aW9uPC9zdHJvbmc+OlBhc3NleiBhdXggw6luZXJnaWVzIHZlcnRlcyBldCBwcm9wcmVzLjwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz4gRGVzIHByb2Zlc3Npb25uZWxzIFJlY29ubnVzIEdyZW5lbGxlIGRlIGzigJlFbnZpcm9ubmVtZW50PC9zdHJvbmc+LCB2b3VzIGZlcm9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYsOpbsOpZmljaWVyIGRlIGxhIExvaSBkZSBUcmFuc2l0aW9uIEVuZXJnw6l0aXF1ZSB7dGhpcy5zdGF0ZS5wcm9wcmlvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHdpZHRoPVwiNDIwXCIgaGVpZ2h0PVwiMzE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvMG0xUVdWM3ZUem9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+Tm9zIHF1YWxpZmljYXRpb25zPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UuR3JvdXAgc2l6ZT0ndGlueSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvZWNvbG8vZW5nYWdlbWVudC1xdWFsaXRlLnBuZ1wiIHdpZHRoPVwiYXV0b1wiIGhlaWdodD1cIjYwXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9lY29sby9xdWFsaXBhYy5wbmdcIiB3aWR0aD1cImF1dG9cIiBoZWlnaHQ9XCI2MFwiIGFsdD1cIi4uLlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvZWNvbG8vZ2FyYW50aWUtc2F0aXNmYWN0aW9uLnBuZ1wiIHdpZHRoPVwiYXV0b1wiIGhlaWdodD1cIjYwXCIgYWx0PVwiLi4uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ltYWdlLkdyb3VwPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7IHBhZGRpbmdUb3A6IG1vYmlsZSA/IDEwIDogMjAsIGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPVwiYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFucyBsZSBjYWRyZSBkZSBsYSB0cmFuc2l0aW9uIMOpY29sb2dpcXVlLCBsJ8OJdGF0IHByZW5kIGVuIGNoYXJnZSBsZSBjb8O7dCBkZSBs4oCZaW5zdGFsbGF0aW9uIGRlIHZvdHJlIHBvbXBlIMOgIGNoYWxldXIgcG91ciBzZXVsZW1lbnQgMeKCrCAhPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlcyBtaWxsaWVycyBkZSBmb3llcnMgZnJhbsOnYWlzIGVuIG9udCBkw6lqw6AgcHJvZml0w6ksIHBvdXJxdW9pIHBhcyB2b3VzID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjoncmVkJ319Piogc2Fpc2llIG9ibGlnYXRvaXJlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiLCBjb2xvcjogXCJncmVlblwiLCBmb250U2l6ZTogMzAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFbDqXJpZmlleiB2b3RyZSDDqWxpZ2liaXTDqTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtlPT50aGlzLmhhbmRsZVN1Ym1pdChlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JQcm9wcmlvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlZvdXMgRXRlc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9wcmlvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtEcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb3ByaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBjbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JTYWxhcmllfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJWb3VzIGV0ZXMgc2FsYXJpw6lcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtzYWxhcmllfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtEcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNhbGFyaWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBjbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JDaGF1ZmZhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlZvdHJlIHR5cGUgZGUgQ2hhdWZmYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y2hhdWZmYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtEcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoYXVmZmFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBjbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JGYW1pbGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOb21icmUgZGUgcGVyc29ubmUgdml2YW50IGRhbnMgbGUgZm95ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtmYW1pbGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtEcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZhbWlsbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgY2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yRmlzY2FsaXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZXZlbnVlIGZpc2NhbCBkZSByw6lmw6lyZW5jZSAoMjAyMCBvdSAyMDE5KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS0tLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2Zpc2NhbGl0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXNjYWxpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTm9tJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vbVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubm9tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj0nbG9jaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPSdsZWZ0JyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdQcsOpbm9tJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQcsOpbm9tJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs5fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcmVub21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJlbm9tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiYWRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj0nbGVmdCcgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZHJlc3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdBZHJlc3NlJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs5fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZHJlc3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkcmVzc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTG9jYWxpdMOpJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdMb2NhbGl0w6knIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9jYWxpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubG9jYWxpdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFbWFpbCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdjb250YWN0QGdtYWlsLmNvbScgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs5fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1RlbGVwaG9uZScgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScwNjk4NjExMzcyJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZWxlcGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZWxlcGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggbGFiZWw9XCJKJ2F1dG9yaXNlIFIuVC5TIMOgIG1lIHJlY29udGFjdGVyIHBvdXIgbWUgY29tbXVuaXF1ZXIgbW9uIHN0YXR1dCBkJ8OpbGlnaWJpbGl0w6lcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkJ1dHRvbiBmbHVpZCB0eXBlPVwic3VibWl0XCJjb2xvcj1cImdyZWVuXCIgPjxoMj5Ww6lyaWZpZXIgbW9uIMOpbGlnaWJpbGl0w6k8L2gyPjwvRm9ybS5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuY29uc3QgcHJvcHJpbyA9IFtcclxuXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMScsXHJcbiAgICAgICAgdGV4dDogJ1Byb3ByacOpdGFpcmUnLFxyXG4gICAgICAgIHZhbHVlOiAnUHJvcHJpw6l0YWlyZScsXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcyJyxcclxuICAgICAgICB0ZXh0OiAnTG9jYXRhaXJlJyxcclxuICAgICAgICB2YWx1ZTogJ0xvY2F0YWlyZScsXHJcbiAgICB9XHJcbl1cclxuXHJcblxyXG5jb25zdCBzYWxhcmllID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJzEnLFxyXG4gICAgICAgIHRleHQ6ICdTZWN0ZXVyIHB1YmxpYycsXHJcbiAgICAgICAgdmFsdWU6ICdTZWN0ZXVyIHB1YmxpYycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzInLFxyXG4gICAgICAgIHRleHQ6ICdTZWN0ZXVyIHByaXZlJyxcclxuICAgICAgICB2YWx1ZTogJ1NlY3RldXIgcHJpdmUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICczJyxcclxuICAgICAgICB0ZXh0OiAnU2VjdGV1ciBhZ3JpY29sZScsXHJcbiAgICAgICAgdmFsdWU6ICdTZWN0ZXVyIGFncmljb2xlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNCcsXHJcbiAgICAgICAgdGV4dDogJ05vbiBzYWxhcmllJyxcclxuICAgICAgICB2YWx1ZTogJ05vbiBzYWxhcmllJyxcclxuICAgIH0sXHJcblxyXG5dXHJcbmNvbnN0IGNoYXVmZmFnZSA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcxJyxcclxuICAgICAgICB0ZXh0OiAnRWxlY3RyaXF1ZScsXHJcbiAgICAgICAgdmFsdWU6ICdFbGVjdHJpcXVlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMicsXHJcbiAgICAgICAgdGV4dDogJ0Zpb3VsJyxcclxuICAgICAgICB2YWx1ZTogJ0Zpb3VsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMycsXHJcbiAgICAgICAgdGV4dDogJ0dheicsXHJcbiAgICAgICAgdmFsdWU6ICdHYXonLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc0JyxcclxuICAgICAgICB0ZXh0OiAnQXV0cmUnLFxyXG4gICAgICAgIHZhbHVlOiAnQXV0cmUnLFxyXG4gICAgfSxcclxuXVxyXG5jb25zdCBmYW1pbGxlID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJzEnLFxyXG4gICAgICAgIHRleHQ6ICcxJyxcclxuICAgICAgICB2YWx1ZTogJzEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcyJyxcclxuICAgICAgICB0ZXh0OiAnMicsXHJcbiAgICAgICAgdmFsdWU6ICcyJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMycsXHJcbiAgICAgICAgdGV4dDogJzMnLFxyXG4gICAgICAgIHZhbHVlOiAnMycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzQnLFxyXG4gICAgICAgIHRleHQ6ICc0JyxcclxuICAgICAgICB2YWx1ZTogJzQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc1IGV0IHBsdXMnLFxyXG4gICAgICAgIHRleHQ6ICc1IGV0IHBsdXMnLFxyXG4gICAgICAgIHZhbHVlOiAnNSBldCBwbHVzJyxcclxuICAgIH1cclxuXVxyXG5jb25zdCBmaXNjYWxpdGUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMScsXHJcbiAgICAgICAgdGV4dDogJ2RlIDDigqwgw6AgMTkwNzTigqwnLFxyXG4gICAgICAgIHZhbHVlOiAnZGUgMOKCrCDDoCAxOTA3NOKCrCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzInLFxyXG4gICAgICAgIHRleHQ6ICdkZSAxOTA3NOKCrCDDoCAyNzg5NuKCrCcsXHJcbiAgICAgICAgdmFsdWU6ICdkZSAxOTA3NOKCrCDDoCAyNzg5NuKCrCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzMnLFxyXG4gICAgICAgIHRleHQ6ICdkZSAyNzg5NuKCrCDDoCAzMzU0N+KCrCcsXHJcbiAgICAgICAgdmFsdWU6ICdkZSAyNzg5NuKCrCDDoCAzMzU0N+KCrCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzQnLFxyXG4gICAgICAgIHRleHQ6ICdkZSAzMzU0N+KCrCDDoCAzOTE5MuKCrCcsXHJcbiAgICAgICAgdmFsdWU6ICdkZSAzMzU0N+KCrCDDoCAzOTE5MuKCrCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzUnLFxyXG4gICAgICAgIHRleHQ6ICdkZSAzOTE5MuKCrCDDoCA0NDg2MOKCrCcsXHJcbiAgICAgICAgdmFsdWU6ICdkZSAzOTE5MuKCrCDDoCA0NDg2MOKCrCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzYnLFxyXG4gICAgICAgIHRleHQ6ICcrIGRlIDQ0OTg2MOKCrCcsXHJcbiAgICAgICAgdmFsdWU6ICcrIGRlIDQ0OTg2MOKCrCcsXHJcbiAgICB9XHJcbl1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjcmVhdGVNZWRpYSB9IGZyb20gJ0BhcnRzeS9mcmVzbmVsJ1xyXG5pbXBvcnQge0NvbnRhaW5lciwgSWNvbiwgSW1hZ2UsIE1lbnUsU2VnbWVudCwgU2lkZWJhciwgVmlzaWJpbGl0eX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcblxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTW9iaWxlIGZyb20gXCIuL01vYmlsZS5qc1wiXHJcblxyXG5cclxuY29uc3QgeyBNZWRpYUNvbnRleHRQcm92aWRlciwgTWVkaWEgfSA9IGNyZWF0ZU1lZGlhKHtcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgc206IDAsXHJcbiAgICAgICAgbWQ6IDc2OCxcclxuICAgICAgICBsZzogMTAyNCxcclxuICAgICAgICB4bDogMTE5MlxyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgaHRtbCA9ICcnXHJcblxyXG5cclxuXHJcbmNsYXNzIERlc2t0b3BDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7fVxyXG4gICAgc3RhdGUgPSB7IGFjdGl2ZUl0ZW06ICdQb21wZSBhIGNoYWxldXInIH1cclxuXHJcbiAgICBoYW5kbGVJdGVtQ2xpY2sgPSAoZSwgeyBuYW1lIH0pID0+IHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBuYW1lIH0pXHJcbiAgICBoaWRlRml4ZWRNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZpeGVkOiBmYWxzZSB9KVxyXG4gICAgc2hvd0ZpeGVkTWVudSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmaXhlZDogdHJ1ZSB9KVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgeyBmaXhlZCB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIGNvbnN0IHsgYWN0aXZlSXRlbSB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgICAgICAgICAgPE1lZGlhIGdyZWF0ZXJUaGFuPSdsZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFZpc2liaWxpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25jZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQm90dG9tUGFzc2VkPXt0aGlzLnNob3dGaXhlZE1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQm90dG9tUGFzc2VkUmV2ZXJzZT17dGhpcy5oaWRlRml4ZWRNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgdGV4dEFsaWduPSdjZW50ZXIndmVydGljYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBjb21wYWN0IHNpemU9J3NtYWxsJyBzdGFja2FibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9lY29sby9sb2dvLnBuZ1wiIHNpemU9XCJzbWFsbFwiLz4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBwb3NpdGlvbj0nbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdIb21lJyBocmVmPVwiI2Vzc2FpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdIb21lJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBwb3NpdGlvbj0ncmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J1BvdXJxdW9pJyBocmVmPXtcIiNwb3VycXVvaVwiICsgaHRtbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdQb3VycXVvaSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nRGlzcG9zaXRpZicgaHJlZj17XCIjZGlzcG9zaXRmXCIgKyBodG1sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ0Rpc3Bvc2l0aWYnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J01pc3Npb24nIGhyZWY9e1wiI21pc3Npb25cIitodG1sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ21pc3Npb24nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J1BhcnRlbmFpcmVzJyBocmVmPXtcIiNwYXJ0ZW5haXJlc1wiKyBodG1sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3BhcnRlbmFpcmVzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiQ29udGFjdFwiIGhyZWY9e1wiI0NvbnRhY3RleiBub3VzXCIgKyBodG1sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ0NvbnRhY3QnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVmlzaWJpbGl0eT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBNb2JpbGVDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7fVxyXG4gICAgc3RhdGUgPSB7IGFjdGl2ZUl0ZW06ICdob21lJyB9XHJcblxyXG4gICAgaGFuZGxlSXRlbUNsaWNrID0gKGUsIHsgbmFtZSB9KSA9PiB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSXRlbTogbmFtZSB9KVxyXG4gICAgaGFuZGxlU2lkZWJhckhpZGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2lkZWJhck9wZW5lZDogZmFsc2UgfSlcclxuICAgIGhhbmRsZVRvZ2dsZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaWRlYmFyT3BlbmVkOiB0cnVlIH0pXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCB7IHNpZGViYXJPcGVuZWQsIGFjdGl2ZUl0ZW0gfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgTW9iaWxlQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICAgICAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1lZGlhIGFzPXtTaWRlYmFyLnB1c2hhYmxlfSBiZXR3ZWVuPXtbXCJzbVwiLCBcInhsXCJdfT5cclxuICAgICAgICAgICAgICAgIDxTaWRlYmFyLlB1c2hhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249J3B1c2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17dGhpcy5oYW5kbGVTaWRlYmFySGlkZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17c2lkZWJhck9wZW5lZH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+PEltYWdlIHNyYz1cImltZy9lY29sby9mcmFuY2UucG5nXCIgLz48L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nSG9tZScgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnSG9tZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nUG91cnF1b2knIGhyZWY9e1wiL1BvdXJxdW9pXCIgKyBodG1sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnUG91cnF1b2knfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J1F1aSBzb21tZXMgbm91cycgaHJlZj17XCIvUXVpU29tbWVzTm91c1wiICsgaHRtbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ1F1aSBTb21tZSBOb3VzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd0ZWxlY2hhcmdlciBsZSByZWdsZW1lbnQnIGhyZWY9e1wiL0Rvd25sb2FkXCIgKyBodG1sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAndGVsZWNoYXJnZXIgbGUgcmVnbGVtZW50J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiQ29udGFjdFwiIGhyZWY9e1wiL0NvbnRhY3RlelwiICsgaHRtbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ0NvbnRhY3QnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TaWRlYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyLlB1c2hlciBkaW1tZWQ9e3NpZGViYXJPcGVuZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogMjUwLCBwYWRkaW5nOiAnMC41ZW0gMGVtJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgaW52ZXJ0ZWQgcG9pbnRpbmcgc2Vjb25kYXJ5IHNpemU9J3RpbnknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J3NpZGViYXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vYmlsZSBtb2JpbGUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TaWRlYmFyLlB1c2hlcj5cclxuICAgICAgICAgICAgICAgIDwvU2lkZWJhci5QdXNoYWJsZT5cclxuICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IE15TWVudSA9ICh7IGNoaWxkcmVuIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPE1lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG5cclxuICAgICAgICAgICAgPERlc2t0b3BDb250YWluZXI+e2NoaWxkcmVufTwvRGVza3RvcENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPE1vYmlsZUNvbnRhaW5lcj57Y2hpbGRyZW59PC9Nb2JpbGVDb250YWluZXI+XHJcblxyXG4gICAgICAgIDwvTWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15TWVudSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBIZWFkZXIsIEltYWdlLCBHcmlkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCB7IEFuaW1hdGVkIH0gZnJvbSBcInJlYWN0LWFuaW1hdGVkLWNzc1wiO1xyXG5cclxuLy9tZW51IG1vYmlsZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2JpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBtb2JpbGUgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxDb250YWluZXIgdGV4dD5cclxuICAgICAgICAgICAgICAgIDxBbmltYXRlZCBhbmltYXRpb25Jbj1cImZhZGVJblwiIGFuaW1hdGlvbk91dD1cImZhZGVPdXRcIiBhbmltYXRpb25JbkR1cmF0aW9uPXs1MDAwfSBhbmltYXRpb25PdXREdXJhdGlvbj17MTAwMH0gaXNWaXNpYmxlPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1nL2Vjb2xvL2xvZ28ucG5nXCIgc2l6ZT1cInNtYWxsXCIgY2VudGVyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPSdoMSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD0nUsOpbm92YXRpb24gVGVydGlhaXJlIHNlcnZpY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JlZW5cIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAnMmVtJyA6ICc0ZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IG1vYmlsZSA/ICcwLjVlbScgOiAnMWVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz0naDInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J1ZvcyBwcm9qZXRzIGVudGllcmVtZW50IGZpbmFuY8OpJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IG1vYmlsZSA/ICcwLjdlbScgOiAnMWVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBtb2JpbGUgPyAnMC41ZW0nIDogJzAuNWVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVkPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCJcclxuaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tICdAYXJ0c3kvZnJlc25lbCdcclxuIFxyXG5jb25zdCB7IE1lZGlhQ29udGV4dFByb3ZpZGVyLCBNZWRpYSB9ID0gY3JlYXRlTWVkaWEoe1xyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICBtb2JpbGU6IDAsXHJcbiAgICAgICAgdGFibGV0OiA3NjgsXHJcbiAgICAgICAgY29tcHV0ZXI6IDEwMjQsXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jbGFzcyBJbmRleENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1lZGlhIGdyZWF0ZXJUaGFuPSdtb2JpbGUnPlxyXG4gICAgICAgICAgICAgICAgPEhvbWUgLz5cclxuICAgICAgICAgICAgPC9NZWRpYT4gXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgTW9iaWxlSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgICBcclxuICAgIH1cclxuICAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxNZWRpYSBhdD0nbW9iaWxlJz5cclxuICAgICAgICAgICAgICAgIDxIb21lIG1vYmlsZSAvPlxyXG4gICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+IFxyXG4gICAgICAgICAgICAgICAgPE1lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPEluZGV4Q29udGFpbmVyID57dGhpcy5wcm9wcy5jaGlsZHJlbn08L0luZGV4Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPE1vYmlsZUluZGV4Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvTW9iaWxlSW5kZXg+XHJcbiAgICAgICAgICAgICAgICA8L01lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXJ0c3kvZnJlc25lbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbWFpbGpzLWNvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFuaW1hdGVkLWNzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9