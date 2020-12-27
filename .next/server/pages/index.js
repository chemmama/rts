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
    this.state.proprio === "" ? alert("Selectionnez un choix") : this.state.salarie === "" ? alert("Selectionnez un choix") : this.state.chauffage === "" ? alert("Selectionnez un choix") : this.state.famille === "" ? alert("Selectionnez un choix") : this.state.fiscalité === "" ? alert("Selectionnez un choix") : alert("bonne saisie");
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
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
                    error: true,
                    header: "Action Forbidden",
                    content: "You can only sign up for an account once with a given e-mail address."
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
                    disabled: this.state.active,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Ib21lLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvTW9iaWxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcnRzeS9mcmVzbmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYW5pbWF0ZWQtY3NzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIkhlYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsIk15TGF5b3V0Iiwic3RhdGUiLCJjaGlsZHJlbiIsIkhvbWUiLCJlIiwibmFtZSIsInZhbHVlIiwic2V0U3RhdGUiLCJwcm9wcmlvIiwic2FsYXJpZSIsImNoYXVmZmFnZSIsImZhbWlsbGUiLCJmaXNjYWxpdGUiLCJub20iLCJwcmVub20iLCJhZHJlc3NlIiwibG9jYWxpdGUiLCJlbWFpbCIsInRlbGVwaG9uZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZXJyb3JQcm9wcmlvIiwiY29udGVudCIsInBvaW50aW5nIiwiZXJyb3JTYWxhcmllIiwiZXJyb3JDaGF1ZmZhZ2UiLCJlcnJvckZhbWlsbGUiLCJlcnJvckZpc2NhbGl0ZSIsImFsZXJ0IiwiZmlzY2FsaXTDqSIsIm1vYmlsZSIsInBhZGRpbmdUb3AiLCJmb250RmFtaWx5IiwiY29sb3IiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsIkRyb3Bkb3duIiwiaGFuZGxlQ2hhbmdlIiwiYWN0aXZlIiwia2V5IiwidGV4dCIsIk1lZGlhQ29udGV4dFByb3ZpZGVyIiwiTWVkaWEiLCJjcmVhdGVNZWRpYSIsImJyZWFrcG9pbnRzIiwic20iLCJtZCIsImxnIiwieGwiLCJodG1sIiwiRGVza3RvcENvbnRhaW5lciIsImFjdGl2ZUl0ZW0iLCJmaXhlZCIsInNob3dGaXhlZE1lbnUiLCJoaWRlRml4ZWRNZW51IiwiaGFuZGxlSXRlbUNsaWNrIiwiTW9iaWxlQ29udGFpbmVyIiwic2lkZWJhck9wZW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJTaWRlYmFyIiwicHVzaGFibGUiLCJNZW51IiwiaGFuZGxlU2lkZWJhckhpZGUiLCJtaW5IZWlnaHQiLCJwYWRkaW5nIiwiaGFuZGxlVG9nZ2xlIiwiTXlNZW51IiwiTW9iaWxlIiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsInRleHREZWNvcmF0aW9uIiwidGFibGV0IiwiY29tcHV0ZXIiLCJJbmRleENvbnRhaW5lciIsIk1vYmlsZUluZGV4IiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QXpCLFVBRkE7QUFBQTtBQURKLE1BREo7QUFRSDs7QUFYK0I7O0FBYXJCNEUsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUMxREEsMkM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTXlNZW51IGZyb20gXCIuLi9wYWdlcy9NZW51LmpzXCJcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5yZW5vdmF0aW9uPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwicmVub3ZhdGlvbiB0ZXJ0aWFpcmUgc2VydmljZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cImVtaWxlIGNoZW1tYW1hXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cInBvbXBlIGEgY2hhbGV1cixwbG9tYmVyaWUsZWxlY3RyaWNpdGUsc2FsbGUgZGUgYmFpblwiIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgYXN5bmMgcmVsPVwic3R5bGVzaGVldFwiIGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuMC4xL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvbWVudS5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW5pbWF0ZS5jc3MvMy41LjIvYW5pbWF0ZS5taW4uY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvaGVhZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Ym9keSA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgICAgICAgICAgPE15TWVudSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15TGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge31cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCdXR0b24sIEltYWdlLCBHcmlkLCBEcm9wZG93biwgU2VnbWVudCwgTGFiZWwsIEZvcm0sIENoZWNrYm94LCBJY29uLE1lc3NhZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUxheW91dFwiXHJcbiAgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7cHJvcHJpbzpcIlwiLHNhbGFyaWU6XCJcIixjaGF1ZmZhZ2U6XCJcIixmYW1pbGxlOlwiXCIsZmlzY2FsaXRlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBub206XCJcIixwcmVub206XCJcIixhZHJlc3NlOlwiXCIsbG9jYWxpdGU6XCJcIixlbWFpbDpcIlwiLHRlbGVwaG9uZTpcIlwifTtcclxuICAgIH1cclxuICAgIGhhbmRsZUNoYW5nZSA9IChlLCB7IG5hbWUsIHZhbHVlIH0pID0+IHRoaXMuc2V0U3RhdGUoeyBbbmFtZV06IHZhbHVlIH0pO1xyXG4gICAgXHJcbiAgICBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcm9wcmlvID09PSBcIlwiID8gdGhpcy5zZXRTdGF0ZSh7IGVycm9yUHJvcHJpbzogeyBjb250ZW50OlwiXCIscG9pbnRpbmc6bnVsbH19KSA6IHRoaXMuc2V0U3RhdGUoeyBlcnJvclByb3ByaW86IG51bGwgfSlcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zYWxhcmllID09PSBcIlwiID8gdGhpcy5zZXRTdGF0ZSh7IGVycm9yU2FsYXJpZTogeyBjb250ZW50OlwiXCIscG9pbnRpbmc6bnVsbH19KSA6IHRoaXMuc2V0U3RhdGUoeyBlcnJvclNhbGFyaWU6IG51bGwgfSlcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jaGF1ZmZhZ2UgPT09IFwiXCIgPyB0aGlzLnNldFN0YXRlKHsgZXJyb3JDaGF1ZmZhZ2U6IHsgY29udGVudDogXCJcIiwgcG9pbnRpbmc6bnVsbH19KSA6IHRoaXMuc2V0U3RhdGUoeyBlcnJvckNoYXVmZmFnZTogbnVsbCB9KVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZhbWlsbGUgPT09IFwiXCIgPyB0aGlzLnNldFN0YXRlKHsgZXJyb3JGYW1pbGxlOiB7IGNvbnRlbnQ6IFwiXCIsIHBvaW50aW5nOm51bGx9fSk6IHRoaXMuc2V0U3RhdGUoeyBlcnJvckZhbWlsbGU6IG51bGwgfSlcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5maXNjYWxpdGUgPT09IFwiXCIgPyB0aGlzLnNldFN0YXRlKHsgZXJyb3JGaXNjYWxpdGU6IHsgY29udGVudDogXCJcIiwgcG9pbnRpbmc6bnVsbH19KSA6IHRoaXMuc2V0U3RhdGUoeyBlcnJvckZpc2NhbGl0ZTogbnVsbCB9KVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnByb3ByaW8gPT09IFwiXCIgPyBhbGVydChcIlNlbGVjdGlvbm5leiB1biBjaG9peFwiKSA6XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2FsYXJpZSA9PT0gXCJcIiA/IGFsZXJ0KFwiU2VsZWN0aW9ubmV6IHVuIGNob2l4XCIpIDpcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jaGF1ZmZhZ2UgPT09IFwiXCIgPyBhbGVydChcIlNlbGVjdGlvbm5leiB1biBjaG9peFwiKSA6XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZmFtaWxsZSA9PT0gXCJcIiA/IGFsZXJ0KFwiU2VsZWN0aW9ubmV6IHVuIGNob2l4XCIpOiBcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5maXNjYWxpdMOpID09PSBcIlwiID8gYWxlcnQoXCJTZWxlY3Rpb25uZXogdW4gY2hvaXhcIikgOmFsZXJ0KFwiYm9ubmUgc2Fpc2llXCIpXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbW9iaWxlIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdyBjZW50ZXJlZCBjb2x1bW5zPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHlsZT17eyBwYWRkaW5nVG9wOiAxMCwgZm9udEZhbWlseTogXCJDb21pYyBzYW5zIE1TXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiLCBjb2xvcjogXCJncmVlblwiIH19PjxjZW50ZXI+Vm90cmUgUG9tcGUgw6AgY2hhbGV1ciBlbnRpZXJlbWVudCBmaW5hbmPDqSBwYXI8L2NlbnRlcj48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvZWNvbG8vYWN0aW9uLWxvZ2VtZW50LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Sw6lkdWlzZXogdm9zIGZhY3R1cmVzIGRlIDcwJSA8L3N0cm9uZz46TGEgcG9tcGUgw6AgY2hhbGV1ciB2b3VzIHBlcm1ldCBkZSBmYWlyZSBkZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDDqWNvbm9taWVzIGNvbnNpZMOpcmFibGVzIDxzdHJvbmc+RWxsZSBkaXZpc2UgbGEgZmFjdHVyZSBkZSBjaGF1ZmZhZ2UgcGFyIDMgITwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+RmluaSBsYSBwb2xsdXRpb248L3N0cm9uZz46UGFzc2V6IGF1eCDDqW5lcmdpZXMgdmVydGVzIGV0IHByb3ByZXMuPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPiBEZXMgcHJvZmVzc2lvbm5lbHMgUmVjb25udXMgR3JlbmVsbGUgZGUgbOKAmUVudmlyb25uZW1lbnQ8L3N0cm9uZz4sIHZvdXMgZmVyb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiw6luw6lmaWNpZXIgZGUgbGEgTG9pIGRlIFRyYW5zaXRpb24gRW5lcmfDqXRpcXVlIHt0aGlzLnN0YXRlLnByb3ByaW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgd2lkdGg9XCI0MjBcIiBoZWlnaHQ9XCIzMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8wbTFRV1YzdlR6b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Ob3MgcXVhbGlmaWNhdGlvbnM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZS5Hcm91cCBzaXplPSd0aW55Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9lY29sby9lbmdhZ2VtZW50LXF1YWxpdGUucG5nXCIgd2lkdGg9XCJhdXRvXCIgaGVpZ2h0PVwiNjBcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1nL2Vjb2xvL3F1YWxpcGFjLnBuZ1wiIHdpZHRoPVwiYXV0b1wiIGhlaWdodD1cIjYwXCIgYWx0PVwiLi4uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9lY29sby9nYXJhbnRpZS1zYXRpc2ZhY3Rpb24ucG5nXCIgd2lkdGg9XCJhdXRvXCIgaGVpZ2h0PVwiNjBcIiBhbHQ9XCIuLi5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2UuR3JvdXA+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7IHBhZGRpbmdUb3A6IG1vYmlsZSA/IDEwIDogMjAsIGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPVwiYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFucyBsZSBjYWRyZSBkZSBsYSB0cmFuc2l0aW9uIMOpY29sb2dpcXVlLCBsJ8OJdGF0IHByZW5kIGVuIGNoYXJnZSBsZSBjb8O7dCBkZSBs4oCZaW5zdGFsbGF0aW9uIGRlIHZvdHJlIHBvbXBlIMOgIGNoYWxldXIgcG91ciBzZXVsZW1lbnQgMeKCrCAhPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlcyBtaWxsaWVycyBkZSBmb3llcnMgZnJhbsOnYWlzIGVuIG9udCBkw6lqw6AgcHJvZml0w6ksIHBvdXJxdW9pIHBhcyB2b3VzID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjoncmVkJ319Piogc2Fpc2llIG9ibGlnYXRvaXJlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiLCBjb2xvcjogXCJncmVlblwiLCBmb250U2l6ZTogMzAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFbDqXJpZmlleiB2b3RyZSDDqWxpZ2liaXTDqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2U9PnRoaXMuaGFuZGxlU3VibWl0KGUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yUHJvcHJpb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJWb3VzIEV0ZXNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cHJvcHJpb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9wcmlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj0nQWN0aW9uIEZvcmJpZGRlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PSdZb3UgY2FuIG9ubHkgc2lnbiB1cCBmb3IgYW4gYWNjb3VudCBvbmNlIHdpdGggYSBnaXZlbiBlLW1haWwgYWRkcmVzcy4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIGNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvclNhbGFyaWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlZvdXMgZXRlcyBzYWxhcmnDqVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS0tLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3NhbGFyaWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2FsYXJpZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIGNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvckNoYXVmZmFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVm90cmUgdHlwZSBkZSBDaGF1ZmZhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjaGF1ZmZhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2hhdWZmYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIGNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvckZhbWlsbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5vbWJyZSBkZSBwZXJzb25uZSB2aXZhbnQgZGFucyBsZSBmb3llclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS0tLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2ZhbWlsbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmFtaWxsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBjbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JGaXNjYWxpdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJldmVudWUgZmlzY2FsIGRlIHLDqWbDqXJlbmNlICgyMDIwIG91IDIwMTkpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmlzY2FsaXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtEcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpc2NhbGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdOb20nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm9tXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ub219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPSdsb2NrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249J2xlZnQnICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1Byw6lub20nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Byw6lub20nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByZW5vbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcmVub219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJhZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPSdsZWZ0JyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFkcmVzc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0FkcmVzc2UnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFkcmVzc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRyZXNzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdMb2NhbGl0w6knIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0xvY2FsaXTDqScgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17OX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb2NhbGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sb2NhbGl0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0VtYWlsJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2NvbnRhY3RAZ21haWwuY29tJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nVGVsZXBob25lJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9JzA2OTg2MTEzNzInIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17OX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRlbGVwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRlbGVwaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGxhYmVsPVwiSidhdXRvcmlzZSBSLlQuUyDDoCBtZSByZWNvbnRhY3RlciBwb3VyIG1lIGNvbW11bmlxdWVyIG1vbiBzdGF0dXQgZCfDqWxpZ2liaWxpdMOpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkJ1dHRvbiBkaXNhYmxlZD17dGhpcy5zdGF0ZS5hY3RpdmV9IGZsdWlkIHR5cGU9XCJzdWJtaXRcImNvbG9yPVwiZ3JlZW5cIiA+PGgyPlbDqXJpZmllciBtb24gw6lsaWdpYmlsaXTDqTwvaDI+PC9Gb3JtLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5jb25zdCBwcm9wcmlvID0gW1xyXG5cclxuICAgIHtcclxuICAgICAgICBrZXk6ICcxJyxcclxuICAgICAgICB0ZXh0OiAnUHJvcHJpw6l0YWlyZScsXHJcbiAgICAgICAgdmFsdWU6ICdQcm9wcmnDqXRhaXJlJyxcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzInLFxyXG4gICAgICAgIHRleHQ6ICdMb2NhdGFpcmUnLFxyXG4gICAgICAgIHZhbHVlOiAnTG9jYXRhaXJlJyxcclxuICAgIH1cclxuXVxyXG5cclxuXHJcbmNvbnN0IHNhbGFyaWUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMScsXHJcbiAgICAgICAgdGV4dDogJ1NlY3RldXIgcHVibGljJyxcclxuICAgICAgICB2YWx1ZTogJ1NlY3RldXIgcHVibGljJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMicsXHJcbiAgICAgICAgdGV4dDogJ1NlY3RldXIgcHJpdmUnLFxyXG4gICAgICAgIHZhbHVlOiAnU2VjdGV1ciBwcml2ZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzMnLFxyXG4gICAgICAgIHRleHQ6ICdTZWN0ZXVyIGFncmljb2xlJyxcclxuICAgICAgICB2YWx1ZTogJ1NlY3RldXIgYWdyaWNvbGUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc0JyxcclxuICAgICAgICB0ZXh0OiAnTm9uIHNhbGFyaWUnLFxyXG4gICAgICAgIHZhbHVlOiAnTm9uIHNhbGFyaWUnLFxyXG4gICAgfSxcclxuXHJcbl1cclxuY29uc3QgY2hhdWZmYWdlID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJzEnLFxyXG4gICAgICAgIHRleHQ6ICdFbGVjdHJpcXVlJyxcclxuICAgICAgICB2YWx1ZTogJ0VsZWN0cmlxdWUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcyJyxcclxuICAgICAgICB0ZXh0OiAnRmlvdWwnLFxyXG4gICAgICAgIHZhbHVlOiAnRmlvdWwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICczJyxcclxuICAgICAgICB0ZXh0OiAnR2F6JyxcclxuICAgICAgICB2YWx1ZTogJ0dheicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzQnLFxyXG4gICAgICAgIHRleHQ6ICdBdXRyZScsXHJcbiAgICAgICAgdmFsdWU6ICdBdXRyZScsXHJcbiAgICB9LFxyXG5dXHJcbmNvbnN0IGZhbWlsbGUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMScsXHJcbiAgICAgICAgdGV4dDogJzEnLFxyXG4gICAgICAgIHZhbHVlOiAnMScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzInLFxyXG4gICAgICAgIHRleHQ6ICcyJyxcclxuICAgICAgICB2YWx1ZTogJzInLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICczJyxcclxuICAgICAgICB0ZXh0OiAnMycsXHJcbiAgICAgICAgdmFsdWU6ICczJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNCcsXHJcbiAgICAgICAgdGV4dDogJzQnLFxyXG4gICAgICAgIHZhbHVlOiAnNCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzUgZXQgcGx1cycsXHJcbiAgICAgICAgdGV4dDogJzUgZXQgcGx1cycsXHJcbiAgICAgICAgdmFsdWU6ICc1IGV0IHBsdXMnLFxyXG4gICAgfVxyXG5dXHJcbmNvbnN0IGZpc2NhbGl0ZSA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcxJyxcclxuICAgICAgICB0ZXh0OiAnZGUgMOKCrCDDoCAxOTA3NOKCrCcsXHJcbiAgICAgICAgdmFsdWU6ICdkZSAw4oKsIMOgIDE5MDc04oKsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMicsXHJcbiAgICAgICAgdGV4dDogJ2RlIDE5MDc04oKsIMOgIDI3ODk24oKsJyxcclxuICAgICAgICB2YWx1ZTogJ2RlIDE5MDc04oKsIMOgIDI3ODk24oKsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMycsXHJcbiAgICAgICAgdGV4dDogJ2RlIDI3ODk24oKsIMOgIDMzNTQ34oKsJyxcclxuICAgICAgICB2YWx1ZTogJ2RlIDI3ODk24oKsIMOgIDMzNTQ34oKsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNCcsXHJcbiAgICAgICAgdGV4dDogJ2RlIDMzNTQ34oKsIMOgIDM5MTky4oKsJyxcclxuICAgICAgICB2YWx1ZTogJ2RlIDMzNTQ34oKsIMOgIDM5MTky4oKsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNScsXHJcbiAgICAgICAgdGV4dDogJ2RlIDM5MTky4oKsIMOgIDQ0ODYw4oKsJyxcclxuICAgICAgICB2YWx1ZTogJ2RlIDM5MTky4oKsIMOgIDQ0ODYw4oKsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNicsXHJcbiAgICAgICAgdGV4dDogJysgZGUgNDQ5ODYw4oKsJyxcclxuICAgICAgICB2YWx1ZTogJysgZGUgNDQ5ODYw4oKsJyxcclxuICAgIH1cclxuXVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNyZWF0ZU1lZGlhIH0gZnJvbSAnQGFydHN5L2ZyZXNuZWwnXHJcbmltcG9ydCB7Q29udGFpbmVyLCBJY29uLCBJbWFnZSwgTWVudSxTZWdtZW50LCBTaWRlYmFyLCBWaXNpYmlsaXR5fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBNb2JpbGUgZnJvbSBcIi4vTW9iaWxlLmpzXCJcclxuXHJcblxyXG5jb25zdCB7IE1lZGlhQ29udGV4dFByb3ZpZGVyLCBNZWRpYSB9ID0gY3JlYXRlTWVkaWEoe1xyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICBzbTogMCxcclxuICAgICAgICBtZDogNzY4LFxyXG4gICAgICAgIGxnOiAxMDI0LFxyXG4gICAgICAgIHhsOiAxMTkyXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBodG1sID0gJydcclxuXHJcblxyXG5cclxuY2xhc3MgRGVza3RvcENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHt9XHJcbiAgICBzdGF0ZSA9IHsgYWN0aXZlSXRlbTogJ1BvbXBlIGEgY2hhbGV1cicgfVxyXG5cclxuICAgIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSlcclxuICAgIGhpZGVGaXhlZE1lbnUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZml4ZWQ6IGZhbHNlIH0pXHJcbiAgICBzaG93Rml4ZWRNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZpeGVkOiB0cnVlIH0pXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCB7IGZpeGVkIH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgY29uc3QgeyBhY3RpdmVJdGVtIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgICAgICAgICAgICA8TWVkaWEgZ3JlYXRlclRoYW49J2xnJz5cclxuICAgICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbmNlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Cb3R0b21QYXNzZWQ9e3RoaXMuc2hvd0ZpeGVkTWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Cb3R0b21QYXNzZWRSZXZlcnNlPXt0aGlzLmhpZGVGaXhlZE1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCB0ZXh0QWxpZ249J2NlbnRlcid2ZXJ0aWNhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IGNvbXBhY3Qgc2l6ZT0nc21hbGwnIHN0YWNrYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1nL2Vjb2xvL2xvZ28ucG5nXCIgc2l6ZT1cInNtYWxsXCIvPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIHBvc2l0aW9uPSdsZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J0hvbWUnIGhyZWY9XCIjZXNzYWlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ0hvbWUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIHBvc2l0aW9uPSdyaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nUG91cnF1b2knIGhyZWY9e1wiI3BvdXJxdW9pXCIgKyBodG1sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ1BvdXJxdW9pJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdEaXNwb3NpdGlmJyBocmVmPXtcIiNkaXNwb3NpdGZcIiArIGh0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnRGlzcG9zaXRpZid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nTWlzc2lvbicgaHJlZj17XCIjbWlzc2lvblwiK2h0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnbWlzc2lvbid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nUGFydGVuYWlyZXMnIGhyZWY9e1wiI3BhcnRlbmFpcmVzXCIrIGh0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAncGFydGVuYWlyZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJDb250YWN0XCIgaHJlZj17XCIjQ29udGFjdGV6IG5vdXNcIiArIGh0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnQ29udGFjdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9WaXNpYmlsaXR5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNsYXNzIE1vYmlsZUNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHt9XHJcbiAgICBzdGF0ZSA9IHsgYWN0aXZlSXRlbTogJ2hvbWUnIH1cclxuXHJcbiAgICBoYW5kbGVJdGVtQ2xpY2sgPSAoZSwgeyBuYW1lIH0pID0+IHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBuYW1lIH0pXHJcbiAgICBoYW5kbGVTaWRlYmFySGlkZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaWRlYmFyT3BlbmVkOiBmYWxzZSB9KVxyXG4gICAgaGFuZGxlVG9nZ2xlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpZGViYXJPcGVuZWQ6IHRydWUgfSlcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgc2lkZWJhck9wZW5lZCwgYWN0aXZlSXRlbSB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgICAgICBNb2JpbGVDb250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gICAgICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVkaWEgYXM9e1NpZGViYXIucHVzaGFibGV9IGJldHdlZW49e1tcInNtXCIsIFwieGxcIl19PlxyXG4gICAgICAgICAgICAgICAgPFNpZGViYXIuUHVzaGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9e01lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj0ncHVzaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZVNpZGViYXJIaWRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXtzaWRlYmFyT3BlbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT48SW1hZ2Ugc3JjPVwiaW1nL2Vjb2xvL2ZyYW5jZS5wbmdcIiAvPjwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdIb21lJyBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdIb21lJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdQb3VycXVvaScgaHJlZj17XCIvUG91cnF1b2lcIiArIGh0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdQb3VycXVvaSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nUXVpIHNvbW1lcyBub3VzJyBocmVmPXtcIi9RdWlTb21tZXNOb3VzXCIgKyBodG1sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnUXVpIFNvbW1lIE5vdXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3RlbGVjaGFyZ2VyIGxlIHJlZ2xlbWVudCcgaHJlZj17XCIvRG93bmxvYWRcIiArIGh0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICd0ZWxlY2hhcmdlciBsZSByZWdsZW1lbnQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJDb250YWN0XCIgaHJlZj17XCIvQ29udGFjdGV6XCIgKyBodG1sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnQ29udGFjdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1NpZGViYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXIuUHVzaGVyIGRpbW1lZD17c2lkZWJhck9wZW5lZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiAyNTAsIHBhZGRpbmc6ICcwLjVlbSAwZW0nIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBpbnZlcnRlZCBwb2ludGluZyBzZWNvbmRhcnkgc2l6ZT0ndGlueSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17dGhpcy5oYW5kbGVUb2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0nc2lkZWJhcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9iaWxlIG1vYmlsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L1NpZGViYXIuUHVzaGVyPlxyXG4gICAgICAgICAgICAgICAgPC9TaWRlYmFyLlB1c2hhYmxlPlxyXG4gICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgTXlNZW51ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8TWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcblxyXG4gICAgICAgICAgICA8RGVza3RvcENvbnRhaW5lcj57Y2hpbGRyZW59PC9EZXNrdG9wQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8TW9iaWxlQ29udGFpbmVyPntjaGlsZHJlbn08L01vYmlsZUNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPC9NZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlNZW51IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEhlYWRlciwgSW1hZ2UsIEdyaWQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHsgQW5pbWF0ZWQgfSBmcm9tIFwicmVhY3QtYW5pbWF0ZWQtY3NzXCI7XHJcblxyXG4vL21lbnUgbW9iaWxlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vYmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7IG1vYmlsZSB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgPENvbnRhaW5lciB0ZXh0PlxyXG4gICAgICAgICAgICAgICAgPEFuaW1hdGVkIGFuaW1hdGlvbkluPVwiZmFkZUluXCIgYW5pbWF0aW9uT3V0PVwiZmFkZU91dFwiIGFuaW1hdGlvbkluRHVyYXRpb249ezUwMDB9IGFuaW1hdGlvbk91dER1cmF0aW9uPXsxMDAwfSBpc1Zpc2libGU9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvZWNvbG8vbG9nby5wbmdcIiBzaXplPVwic21hbGxcIiBjZW50ZXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9J2gxJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PSdSw6lub3ZhdGlvbiBUZXJ0aWFpcmUgc2VydmljZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmVlblwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IG1vYmlsZSA/ICcyZW0nIDogJzRlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogbW9iaWxlID8gJzAuNWVtJyA6ICcxZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPSdoMidcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD0nVm9zIHByb2pldHMgZW50aWVyZW1lbnQgZmluYW5jw6knXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogbW9iaWxlID8gJzAuN2VtJyA6ICcxZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IG1vYmlsZSA/ICcwLjVlbScgOiAnMC41ZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWQ+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIlxyXG5pbXBvcnQgeyBjcmVhdGVNZWRpYSB9IGZyb20gJ0BhcnRzeS9mcmVzbmVsJ1xyXG4gXHJcbmNvbnN0IHsgTWVkaWFDb250ZXh0UHJvdmlkZXIsIE1lZGlhIH0gPSBjcmVhdGVNZWRpYSh7XHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIG1vYmlsZTogMCxcclxuICAgICAgICB0YWJsZXQ6IDc2OCxcclxuICAgICAgICBjb21wdXRlcjogMTAyNCxcclxuICAgIH1cclxufSlcclxuXHJcbmNsYXNzIEluZGV4Q29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICBcclxuICAgIH1cclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVkaWEgZ3JlYXRlclRoYW49J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICA8SG9tZSAvPlxyXG4gICAgICAgICAgICA8L01lZGlhPiBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBNb2JpbGVJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgPE1lZGlhIGF0PSdtb2JpbGUnPlxyXG4gICAgICAgICAgICAgICAgPEhvbWUgbW9iaWxlIC8+XHJcbiAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj4gXHJcbiAgICAgICAgICAgICAgICA8TWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8SW5kZXhDb250YWluZXIgPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvSW5kZXhDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8TW9iaWxlSW5kZXg+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9Nb2JpbGVJbmRleD5cclxuICAgICAgICAgICAgICAgIDwvTWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcnRzeS9mcmVzbmVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYW5pbWF0ZWQtY3NzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=