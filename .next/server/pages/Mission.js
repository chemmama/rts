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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Mission.js");
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

/***/ "./pages/Fiche.js":
/*!************************!*\
  !*** ./pages/Fiche.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fiche; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emailjs-com */ "emailjs-com");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");

var _jsxFileName = "C:\\Users\\famil\\Desktop\\emile programmation\\site_emile\\renovation\\pages\\Fiche.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Fiche extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", (e, {
      name,
      value
    }) => this.setState({
      [name]: value
    }));

    _defineProperty(this, "handleOpen", () => this.setState({
      modalOpen: true
    }));

    _defineProperty(this, "handleClose", () => this.setState({
      modalClose: false
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
    this.state = {};
  }

  handleSubmit(e) {
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
    emailjs_com__WEBPACK_IMPORTED_MODULE_3__["send"]('my_Gmail', 'eligibilite', templateParams, 'user_O4rTmyvCyhnUYTJrczkMv').then(result => {
      alert(result.text);
    }, error => {
      alert(error.text);
    });
    this.state.proprio = "", this.state.salarie = "", this.state.chauffage = "", this.state.famille = "";
    this.state.fiscalite = "";
    this.state.nom = "", this.state.prenom = "", this.state.adresse = "", this.state.localite = "", this.state.email = "", this.state.telephone = "";
  }

  render() {
    const {
      children
    } = this.props;
    const {
      mobile
    } = this.props;
    Fiche.propTypes = {
      mobile: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
    };
    const open = this.props.open;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
      inverted: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        open: open,
        onClose: this.props.handleClose,
        size: "mini",
        basic: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
          children: ["Dans le cadre de la transition \xE9cologique, l'\xC9tat prend en charge le co\xFBt de l\u2019installation de", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 115
          }, this), "Des milliers de foyers fran\xE7ais en ont d\xE9j\xE0 profit\xE9, pourquoi pas vous ?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: 'red'
            },
            children: "* saisie obligatoire"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              fontFamily: "Comic sans MS",
              fontSize: 30,
              textAlign: "center"
            },
            children: "V\xE9rifiez votre \xE9ligibit\xE9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Description, {
          style: {
            color: 'lightgrey'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
            inverted: true,
            onSubmit: e => this.handleSubmit(e),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
              error: this.state.errorProprio,
              required: true,
              label: "Vous Etes",
              placeholder: "----",
              style: {
                color: "yellow"
              },
              fluid: true,
              options: proprio,
              control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"],
              name: "proprio",
              onChange: this.handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
              error: this.state.errorSalarie,
              required: true,
              label: "Vous Etes salari\xE9 dans",
              placeholder: "----",
              style: {
                color: "yellow"
              },
              fluid: true,
              options: salarie,
              control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"],
              name: "salarie",
              onChange: this.handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
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
              control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"],
              name: "chauffage",
              onChange: this.handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
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
              control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"],
              name: "famille",
              onChange: this.handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
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
              control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"],
              name: "fiscalite",
              onChange: this.handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
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
                lineNumber: 163,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
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
                lineNumber: 172,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
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
                lineNumber: 186,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
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
                lineNumber: 197,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
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
                lineNumber: 208,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
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
                lineNumber: 217,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 38
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 44
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
                label: "J'autorise R.T.S \xE0 me recontacter pour me communiquer mon statut d'\xE9ligibilit\xE9"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 38
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 44
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Button, {
              fluid: true,
              type: "submit",
              color: "green",
              style: {
                fontSize: mobile ? 15 : 20
              },
              children: "V\xE9rifier mon \xE9ligibilit\xE9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Button, {
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
            lineNumber: 236,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, this);
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

/***/ }),

/***/ "./pages/IndexMission.js":
/*!*******************************!*\
  !*** ./pages/IndexMission.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mission; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _Fiche__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Fiche */ "./pages/Fiche.js");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @artsy/fresnel */ "@artsy/fresnel");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\famil\\Desktop\\emile programmation\\site_emile\\renovation\\pages\\IndexMission.js";

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

class IndexMission extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleOpen", () => this.setState({
      open: true
    }));

    _defineProperty(this, "handleClose", () => this.setState({
      open: false
    }));

    this.state = {};
  }

  render() {
    const {
      mobile
    } = this.props;
    const shadow = {
      color: 'white',
      textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
      textAlign: "center",
      fontFamily: "verdana",
      fontSize: 25
    };
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
        style: shadow,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("blockquote", {
          style: {
            fontSize: mobile ? 12 : 25
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: "\xC0 propos de R.T.S"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 59
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 64
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            color: "green",
            fluid: true,
            onClick: this.handleOpen,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "V\xE9rifier mon \xE9ligibilit\xE9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 88
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        fluid: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
          vertical: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
            container: true,
            stackable: true,
            verticalAlign: "center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
                width: 8,
                style: {
                  fontFamily: "Comic sans MS"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  style: {
                    fontFamily: "verdana",
                    color: "Green"
                  },
                  children: "Notre Mission"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
                  color: "green",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                    children: ["Nous nous occupons de mener \xE0 bien votre projet sur la r\xE9novation \xE9nerg\xE9tique.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 56,
                      columnNumber: 123
                    }, this), "Notre priorit\xE9 est de vous donner toutes les informations n\xE9cessaires \xE0 la r\xE9alisation de celui-ci. Il est normal de se perdre dans cet oc\xE9an d'informations diverses et vari\xE9es et notre mission est de vous guider.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 48
                    }, this), "Nous prenons en charge toutes les d\xE9marches administratives, constituons le dossier, contactons les diff\xE9rents artisans reconnus garants de l'environnement (RGE) pr\xE8s de chez vous. Un agent de ma\xEEtrise \xE0 l'ouvrage (AMO) sera pr\xE9sent avant les travaux pour la faisabilit\xE9 de votre projet et \xE0 la fin pour v\xE9rifier que ceux-ci sont r\xE9alis\xE9s dans les r\xE8gles de l'art.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 101
                    }, this), "Nous vous assurons une prise en charge totale avec Action Logement apr\xE8s validation de votre dossier.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                      children: "Aucune installation ne sera effectu\xE9e sans accord pr\xE9alable de notre partenaire et aucun frais ne vous sera factur\xE9 malgr\xE9 un \xE9ventuel refus."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
                floated: "left",
                width: 6,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  style: {
                    fontFamily: "verdana",
                    color: "Green"
                  },
                  children: "Pourquoi nous faire confiance"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
                  color: "green",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                    style: {
                      fontFamily: 'Times New Roman'
                    },
                    children: ["Notre travail est encadr\xE9 par les diff\xE9rents organismes existants et chacun dispose de leur protocole.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 78,
                      columnNumber: 54
                    }, this), " Les aides dont vous pourrez b\xE9n\xE9ficier seront totalement transparentes et les documents attestant de vos aides vous seront directement transmis par l'organisme en question.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 128
                    }, this), "Nous vous accompagnerons dans ce travail tr\xE8s minutieux et toutes les d\xE9marches administratives seront effectu\xE9es par nos soins.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 76
                    }, this), "Vous pourrez trouver des t\xE9moignages attestant de notre s\xE9rieux et le procesus d'accompagnement du d\xE9but jusqu'\xE0 la fin du projet. "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
          src: "img/ecolo/ecologie.png",
          centered: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("center", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            color: "green",
            onClick: this.handleOpen,
            children: "V\xE9rifier mon \xE9ligibilit\xE9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 30
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 36
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 42
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Fiche__WEBPACK_IMPORTED_MODULE_4__["default"], {
          open: this.state.open,
          onHide: () => this.handleClose()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this);
  }

}

class GreatherMission extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
      between: ["tablet", "ecran"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IndexMission, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }, this);
  }

}

class MobileMission extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
      between: ["mobile", "tablet"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IndexMission, {
        mobile: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }, this);
  }

}

class Mission extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MediaContextProvider, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GreatherMission, {
          children: this.props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MobileMission, {
          children: this.props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
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

/***/ "./pages/Mission.js":
/*!**************************!*\
  !*** ./pages/Mission.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mission; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _IndexMission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexMission */ "./pages/IndexMission.js");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @artsy/fresnel */ "@artsy/fresnel");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\famil\\Desktop\\emile programmation\\site_emile\\renovation\\pages\\Mission.js";



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

class GreatherMission extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
      between: ["tablet", "ecran"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_IndexMission__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
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

class MobileMission extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
      between: ["mobile", "tablet"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_IndexMission__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

class Mission extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MediaContextProvider, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GreatherMission, {
          children: this.props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MobileMission, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9GaWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9JbmRleE1pc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9NaXNzaW9uLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL01vYmlsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXJ0c3kvZnJlc25lbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtYWlsanMtY29tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYW5pbWF0ZWQtY3NzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJlbWFpbGpzIiwiTXlMYXlvdXQiLCJzdGF0ZSIsImNoaWxkcmVuIiwiRmljaGUiLCJlIiwibmFtZSIsInZhbHVlIiwic2V0U3RhdGUiLCJtb2RhbE9wZW4iLCJtb2RhbENsb3NlIiwicHJvcHJpbyIsInNhbGFyaWUiLCJjaGF1ZmZhZ2UiLCJmYW1pbGxlIiwiZmlzY2FsaXRlIiwibm9tIiwicHJlbm9tIiwiYWRyZXNzZSIsImxvY2FsaXRlIiwiZW1haWwiLCJ0ZWxlcGhvbmUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInVuZGVmaW5lZCIsImVycm9yUHJvcHJpbyIsImNvbnRlbnQiLCJwb2ludGluZyIsImVycm9yU2FsYXJpZSIsImVycm9yQ2hhdWZmYWdlIiwiZXJyb3JGYW1pbGxlIiwiZXJyb3JGaXNjYWxpdGUiLCJhbGVydCIsImRhdGFDb250YWN0IiwidGVtcGxhdGVQYXJhbXMiLCJmcm9tX25hbWUiLCJ0b19uYW1lIiwidGhlbiIsInJlc3VsdCIsInRleHQiLCJlcnJvciIsIm1vYmlsZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJvcGVuIiwiaGFuZGxlQ2xvc2UiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsIkRyb3Bkb3duIiwiaGFuZGxlQ2hhbmdlIiwib25IaWRlIiwia2V5IiwiTWVkaWFDb250ZXh0UHJvdmlkZXIiLCJNZWRpYSIsImNyZWF0ZU1lZGlhIiwiYnJlYWtwb2ludHMiLCJ0YWJsZXQiLCJjb21wdXRlciIsImVjcmFuIiwiSW5kZXhNaXNzaW9uIiwic2hhZG93IiwidGV4dFNoYWRvdyIsImhhbmRsZU9wZW4iLCJHcmVhdGhlck1pc3Npb24iLCJNb2JpbGVNaXNzaW9uIiwiTWlzc2lvbiIsInNoYWRvdzIiLCJodG1sIiwiRGVza3RvcENvbnRhaW5lciIsImFjdGl2ZUl0ZW0iLCJmaXhlZCIsIm5vZGUiLCJzaG93Rml4ZWRNZW51IiwiaGlkZUZpeGVkTWVudSIsImJhY2tncm91bmRDb2xvciIsImZvbnRXZWlnaHQiLCJoYW5kbGVJdGVtQ2xpY2siLCJNb2JpbGVDb250YWluZXIiLCJzaWRlYmFyT3BlbmVkIiwiU2lkZWJhciIsInB1c2hhYmxlIiwiTWVudSIsImhhbmRsZVNpZGViYXJIaWRlIiwibWluSGVpZ2h0IiwicGFkZGluZyIsImhhbmRsZVRvZ2dsZSIsIk15TWVudSIsIk1vYmlsZSIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsInRleHREZWNvcmF0aW9uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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LE1BQU0sR0FBRyxPQUFILEdBQWEsS0FEMUI7QUFFSHFDLHNCQUFVLEVBQUUsUUFGVDtBQUdIYyxxQkFBUyxFQUFFbkQsTUFBTSxHQUFHLE9BQUgsR0FBYSxPQUgzQjtBQUlIUyxxQkFBUyxFQUFFLFFBSlI7QUFLSEgsaUJBQUssRUFBRTtBQUxKO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFpQ0g7O0FBekMrQyxDOzs7Ozs7Ozs7OztBQ0xwRCwyQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9NaXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9NaXNzaW9uLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTXlNZW51IGZyb20gXCIuLi9wYWdlcy9NZW51LmpzXCJcclxuaW1wb3J0ICogYXMgZW1haWxqcyBmcm9tICdlbWFpbGpzLWNvbSdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnJlbm92YXRpb248L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJyZW5vdmF0aW9uIHRlcnRpYWlyZSBzZXJ2aWNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cImVtaWxlIGNoZW1tYW1hXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLGluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJwb21wZSBhIGNoYWxldXIscGxvbWJlcmllLGVsZWN0cmljaXRlLHNhbGxlIGRlIGJhaW5cIiAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgYXN5bmMgcmVsPVwic3R5bGVzaGVldFwiIGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuMC4zL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvbWVudS5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW5pbWF0ZS5jc3MvMy41LjIvYW5pbWF0ZS5taW4uY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2VtYWlsanMtY29tQDIvZGlzdC9lbWFpbC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNzcy9tZW51LmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxqcy5pbml0KFwiWU9VUl9VU0VSX0lEXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NjcmlwdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8L2hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8TXlNZW51IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15TGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge31cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBSZWFjdCx7Q2hpbGRyZW59IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBIZWFkZXIsIEljb24sIE1vZGFsLCBHcmlkLCBJbWFnZSwgQ29uZmlybSwgRm9ybSwgRHJvcGRvd24sIENoZWNrYm94LFNlZ21lbnR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgKiBhcyBlbWFpbGpzIGZyb20gJ2VtYWlsanMtY29tJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0XCJcclxuIFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWNoZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwcm9wcmlvOiBcIlwiLCBzYWxhcmllOiBcIlwiLCBjaGF1ZmZhZ2U6IFwiXCIsIGZhbWlsbGU6IFwiXCIsIGZpc2NhbGl0ZTogXCJcIixcclxuICAgICAgICAgICAgbm9tOiBcIlwiLCBwcmVub206IFwiXCIsIGFkcmVzc2U6IFwiXCIsIGxvY2FsaXRlOiBcIlwiLCBlbWFpbDogXCJcIiwgdGVsZXBob25lOiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge31cclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGUsIHsgbmFtZSwgdmFsdWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtuYW1lXTogdmFsdWUgfSlcclxuXHJcbiAgICBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnN0YXRlLnByb3ByaW8gPT09IHVuZGVmaW5lZCA/IHRoaXMuc2V0U3RhdGUoeyBlcnJvclByb3ByaW86IHsgY29udGVudDogXCJcIiwgcG9pbnRpbmc6IG51bGwgfSB9KSA6IHRoaXMuc2V0U3RhdGUoeyBlcnJvclByb3ByaW86IG51bGwgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLnNhbGFyaWUgPT09IHVuZGVmaW5lZCAgPyB0aGlzLnNldFN0YXRlKHsgZXJyb3JTYWxhcmllOiB7IGNvbnRlbnQ6IFwiXCIsIHBvaW50aW5nOiBudWxsIH0gfSkgOiB0aGlzLnNldFN0YXRlKHsgZXJyb3JTYWxhcmllOiBudWxsIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jaGF1ZmZhZ2UgPT09IHVuZGVmaW5lZCA/IHRoaXMuc2V0U3RhdGUoeyBlcnJvckNoYXVmZmFnZTogeyBjb250ZW50OiBcIlwiLCBwb2ludGluZzogbnVsbCB9IH0pIDogdGhpcy5zZXRTdGF0ZSh7IGVycm9yQ2hhdWZmYWdlOiBudWxsIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mYW1pbGxlID09PSB1bmRlZmluZWQgID8gdGhpcy5zZXRTdGF0ZSh7IGVycm9yRmFtaWxsZTogeyBjb250ZW50OiBcIlwiLCBwb2ludGluZzogbnVsbCB9IH0pIDogdGhpcy5zZXRTdGF0ZSh7IGVycm9yRmFtaWxsZTogbnVsbCB9KVxyXG4gICAgICAgIHRoaXMuc3RhdGUuZmlzY2FsaXRlID09PSB1bmRlZmluZWQgID8gdGhpcy5zZXRTdGF0ZSh7IGVycm9yRmlzY2FsaXRlOiB7IGNvbnRlbnQ6IFwiXCIsIHBvaW50aW5nOiBudWxsIH0gfSkgOiB0aGlzLnNldFN0YXRlKHsgZXJyb3JGaXNjYWxpdGU6IG51bGwgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLnByb3ByaW8gPT09IHVuZGVmaW5lZCA/IGFsZXJ0KFwiU2VsZWN0aW9ubmV6IFByb3ByaWV0YWlyZSBvdSBsb2NhdGFpcmUgP1wiKSA6XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zYWxhcmllID09PSB1bmRlZmluZWQgID8gYWxlcnQoXCJTZWxlY3Rpb25uZXogdm90cmUgdHlwZSBkZSBzYWxhaXJlXCIpIDpcclxuICAgICAgICB0aGlzLnN0YXRlLmNoYXVmZmFnZSA9PT0gdW5kZWZpbmVkICA/IGFsZXJ0KFwiU2VsZWN0aW9ubmV6IHZvdHJlIHR5cGUgZGUgY2hhdWZmYWdlXCIpOiBcclxuICAgICAgICB0aGlzLnN0YXRlLmZhbWlsbGUgPT09IHVuZGVmaW5lZCAgPyBhbGVydChcIlNlbGVjdGlvbm5leiBub21icmUgZGUgcGVyc29ubmVcIikgOlxyXG4gICAgICAgIHRoaXMuc3RhdGUuZmlzY2FsaXRlID09PSB1bmRlZmluZWQgPyBhbGVydChcIlNlbGVjdGlvbm5leiB2b3RyZSByZXZlbnUgZmlzY2FsXCIpIDp0aGlzLmRhdGFDb250YWN0KClcclxuICAgIH0gXHJcbiAgIFxyXG5cclxuICAgIGRhdGFDb250YWN0KCkge1xyXG4gICAgICAgIGNvbnN0IHsgcHJvcHJpbywgc2FsYXJpZSwgY2hhdWZmYWdlLCBmYW1pbGxlLCBmaXNjYWxpdGUsXHJcbiAgICAgICAgICAgIG5vbSwgcHJlbm9tLCBhZHJlc3NlLCBsb2NhbGl0ZSwgZW1haWwsIHRlbGVwaG9uZSB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgICAgICBsZXQgdGVtcGxhdGVQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIGZyb21fbmFtZTogZW1haWwsXHJcbiAgICAgICAgICAgIHByb3ByaW86IHByb3ByaW8sXHJcbiAgICAgICAgICAgIHNhbGFyaWU6IHNhbGFyaWUsXHJcbiAgICAgICAgICAgIGNoYXVmZmFnZTogY2hhdWZmYWdlLFxyXG4gICAgICAgICAgICBmYW1pbGxlOiBmYW1pbGxlLFxyXG4gICAgICAgICAgICBmaXNjYWxpdGU6IGZpc2NhbGl0ZSxcclxuICAgICAgICAgICAgdG9fbmFtZTogbm9tLFxyXG4gICAgICAgICAgICBwcmVub206IHByZW5vbSxcclxuICAgICAgICAgICAgYWRyZXNzZTogYWRyZXNzZSxcclxuICAgICAgICAgICAgbG9jYWxpdGU6IGxvY2FsaXRlLFxyXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgIHRlbGVwaG9uZTogdGVsZXBob25lXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZW1haWxqcy5zZW5kKCdteV9HbWFpbCcsICdlbGlnaWJpbGl0ZScsIHRlbXBsYXRlUGFyYW1zLCAndXNlcl9PNHJUbXl2Q3loblVZVEpyY3prTXYnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChyZXN1bHQudGV4dCk7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IudGV4dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnByb3ByaW89IFwiXCIsIHRoaXMuc3RhdGUuc2FsYXJpZSA9XCJcIiwgdGhpcy5zdGF0ZS5jaGF1ZmZhZ2UgPVwiXCIsIHRoaXMuc3RhdGUuZmFtaWxsZSA9XCJcIlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZpc2NhbGl0ZSA9XCJcIlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm5vbSA9IFwiXCIsIHRoaXMuc3RhdGUucHJlbm9tID0gXCJcIiwgdGhpcy5zdGF0ZS5hZHJlc3NlID0gXCJcIiwgdGhpcy5zdGF0ZS5sb2NhbGl0ZSA9IFwiXCIsIHRoaXMuc3RhdGUuZW1haWwgPSBcIlwiLFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRlbGVwaG9uZSA9IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBoYW5kbGVPcGVuID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1vZGFsT3BlbjogdHJ1ZSB9KVxyXG4gICAgICAgIGhhbmRsZUNsb3NlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1vZGFsQ2xvc2U6ZmFsc2UgfSkgXHJcbiAgICAgXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCB7IG1vYmlsZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIEZpY2hlLnByb3BUeXBlcyA9IHtcclxuICAgICAgICAgICAgICAgIG1vYmlsZTogUHJvcFR5cGVzLmJvb2xcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG9wZW49dGhpcy5wcm9wcy5vcGVuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNlZ21lbnQgaW52ZXJ0ZWQ+XHJcbiAgICAgICAgICAgIDxNb2RhbCBcclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLnByb3BzLmhhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT0nbWluaSdcclxuICAgICAgICAgICAgICAgIGJhc2ljICBcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICBEYW5zIGxlIGNhZHJlIGRlIGxhIHRyYW5zaXRpb24gw6ljb2xvZ2lxdWUsIGwnw4l0YXQgcHJlbmQgZW4gY2hhcmdlIGxlIGNvw7t0IGRlIGzigJlpbnN0YWxsYXRpb24gZGU8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBEZXMgbWlsbGllcnMgZGUgZm95ZXJzIGZyYW7Dp2FpcyBlbiBvbnQgZMOpasOgIHByb2ZpdMOpLCBwb3VycXVvaSBwYXMgdm91cyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Piogc2Fpc2llIG9ibGlnYXRvaXJlPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkZXI+ICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udEZhbWlseTogXCJDb21pYyBzYW5zIE1TXCIsIGZvbnRTaXplOiAzMCwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWw6lyaWZpZXogdm90cmUgw6lsaWdpYml0w6k8L3A+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxNb2RhbC5EZXNjcmlwdGlvbiBzdHlsZT17eyBjb2xvcjogJ2xpZ2h0Z3JleScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gaW52ZXJ0ZWQgb25TdWJtaXQ9e2UgPT4gdGhpcy5oYW5kbGVTdWJtaXQoZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvclByb3ByaW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJWb3VzIEV0ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLS0tXCIgc3R5bGU9e3sgY29sb3I6IFwieWVsbG93XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9wcmlvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvcHJpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yU2FsYXJpZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVm91cyBFdGVzIHNhbGFyacOpIGRhbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS0tLVwic3R5bGU9e3tjb2xvcjpcInllbGxvd1wifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3NhbGFyaWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNhbGFyaWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBjbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yQ2hhdWZmYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVm90cmUgdHlwZSBkZSBDaGF1ZmZhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLS0tXCIgc3R5bGU9e3sgY29sb3I6IFwieWVsbG93XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjaGF1ZmZhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtEcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGF1ZmZhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgY2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvckZhbWlsbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOb21icmUgZGUgcGVyc29ubmUgdml2YW50IGRhbnMgbGUgZm95ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLS0tXCIgc3R5bGU9e3sgY29sb3I6IFwieWVsbG93XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtmYW1pbGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmFtaWxsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBjbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yRmlzY2FsaXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmV2ZW51ZSBmaXNjYWwgZGUgcsOpZsOpcmVuY2UgKDIwMjAgb3UgMjAxOSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLS0tXCIgc3R5bGU9e3sgY29sb3I6IFwieWVsbG93XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtmaXNjYWxpdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtEcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXNjYWxpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J05vbSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tLS1cIiBzdHlsZT17eyBjb2xvcjogXCJ5ZWxsb3dcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5vbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPSdsb2NrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj0nbGVmdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdQcsOpbm9tJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSctLS0tJyBzdHlsZT17eyBjb2xvcjogXCJ5ZWxsb3dcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcmVub21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByZW5vbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiYWRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249J2xlZnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZHJlc3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nLS0tLScgc3R5bGU9e3sgY29sb3I6IFwieWVsbG93XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17OX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRyZXNzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRyZXNzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdMb2NhbGl0w6knXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9Jy0tLS0nIHN0eWxlPXt7IGNvbG9yOiBcInllbGxvd1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvY2FsaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sb2NhbGl0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nY29udGFjdEBnbWFpbC5jb20nIHN0eWxlPXt7IGNvbG9yOiBcInllbGxvd1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdUZWxlcGhvbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9Jy0tLS0nIHN0eWxlPXt7IGNvbG9yOiBcInllbGxvd1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRlbGVwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGVsZXBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD48YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggbGFiZWw9XCJKJ2F1dG9yaXNlIFIuVC5TIMOgIG1lIHJlY29udGFjdGVyIHBvdXIgbWUgY29tbXVuaXF1ZXIgbW9uIHN0YXR1dCBkJ8OpbGlnaWJpbGl0w6lcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+PGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5CdXR0b24gZmx1aWQgdHlwZT1cInN1Ym1pdFwiIGNvbG9yPVwiZ3JlZW5cIiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IG1vYmlsZSA/IDE1IDogMjB9fT5Ww6lyaWZpZXIgbW9uIMOpbGlnaWJpbGl0w6lcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQnV0dG9uIGNvbG9yPSdncmV5bGlnaHQnIGZsdWlkIG9uQ2xpY2s9e3RoaXMucHJvcHMub25IaWRlfSBpbnZlcnRlZCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogbW9iaWxlID8gMTUgOiAyMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGZXJtZXJcclxuICAgICAgICAgICAgICAgICAgIDwvRm9ybS5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuICAgXHJcbiBcclxuXHJcbmNvbnN0IHByb3ByaW8gPSBbXHJcblxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzEnLFxyXG4gICAgICAgIHRleHQ6ICdQcm9wcmnDqXRhaXJlJyxcclxuICAgICAgICB2YWx1ZTogJ1Byb3ByacOpdGFpcmUnLFxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMicsXHJcbiAgICAgICAgdGV4dDogJ0xvY2F0YWlyZScsXHJcbiAgICAgICAgdmFsdWU6ICdMb2NhdGFpcmUnLFxyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuY29uc3Qgc2FsYXJpZSA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcxJyxcclxuICAgICAgICB0ZXh0OiAnU2VjdGV1ciBwdWJsaWMnLFxyXG4gICAgICAgIHZhbHVlOiAnU2VjdGV1ciBwdWJsaWMnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcyJyxcclxuICAgICAgICB0ZXh0OiAnU2VjdGV1ciBwcml2ZScsXHJcbiAgICAgICAgdmFsdWU6ICdTZWN0ZXVyIHByaXZlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMycsXHJcbiAgICAgICAgdGV4dDogJ1NlY3RldXIgYWdyaWNvbGUnLFxyXG4gICAgICAgIHZhbHVlOiAnU2VjdGV1ciBhZ3JpY29sZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzQnLFxyXG4gICAgICAgIHRleHQ6ICdOb24gc2FsYXJpZScsXHJcbiAgICAgICAgdmFsdWU6ICdOb24gc2FsYXJpZScsXHJcbiAgICB9LFxyXG5cclxuXVxyXG5jb25zdCBjaGF1ZmZhZ2UgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMScsXHJcbiAgICAgICAgdGV4dDogJ0VsZWN0cmlxdWUnLFxyXG4gICAgICAgIHZhbHVlOiAnRWxlY3RyaXF1ZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzInLFxyXG4gICAgICAgIHRleHQ6ICdGaW91bCcsXHJcbiAgICAgICAgdmFsdWU6ICdGaW91bCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzMnLFxyXG4gICAgICAgIHRleHQ6ICdHYXonLFxyXG4gICAgICAgIHZhbHVlOiAnR2F6JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNCcsXHJcbiAgICAgICAgdGV4dDogJ0F1dHJlJyxcclxuICAgICAgICB2YWx1ZTogJ0F1dHJlJyxcclxuICAgIH0sXHJcbl1cclxuY29uc3QgZmFtaWxsZSA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcxJyxcclxuICAgICAgICB0ZXh0OiAnMScsXHJcbiAgICAgICAgdmFsdWU6ICcxJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMicsXHJcbiAgICAgICAgdGV4dDogJzInLFxyXG4gICAgICAgIHZhbHVlOiAnMicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzMnLFxyXG4gICAgICAgIHRleHQ6ICczJyxcclxuICAgICAgICB2YWx1ZTogJzMnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc0JyxcclxuICAgICAgICB0ZXh0OiAnNCcsXHJcbiAgICAgICAgdmFsdWU6ICc0JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNSBldCBwbHVzJyxcclxuICAgICAgICB0ZXh0OiAnNSBldCBwbHVzJyxcclxuICAgICAgICB2YWx1ZTogJzUgZXQgcGx1cycsXHJcbiAgICB9XHJcbl1cclxuY29uc3QgZmlzY2FsaXRlID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJzEnLFxyXG4gICAgICAgIHRleHQ6ICdkZSAw4oKsIMOgIDE5MDc04oKsJyxcclxuICAgICAgICB2YWx1ZTogJ2RlIDDigqwgw6AgMTkwNzTigqwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcyJyxcclxuICAgICAgICB0ZXh0OiAnZGUgMTkwNzTigqwgw6AgMjc4OTbigqwnLFxyXG4gICAgICAgIHZhbHVlOiAnZGUgMTkwNzTigqwgw6AgMjc4OTbigqwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICczJyxcclxuICAgICAgICB0ZXh0OiAnZGUgMjc4OTbigqwgw6AgMzM1NDfigqwnLFxyXG4gICAgICAgIHZhbHVlOiAnZGUgMjc4OTbigqwgw6AgMzM1NDfigqwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc0JyxcclxuICAgICAgICB0ZXh0OiAnZGUgMzM1NDfigqwgw6AgMzkxOTLigqwnLFxyXG4gICAgICAgIHZhbHVlOiAnZGUgMzM1NDfigqwgw6AgMzkxOTLigqwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc1JyxcclxuICAgICAgICB0ZXh0OiAnZGUgMzkxOTLigqwgw6AgNDQ4NjDigqwnLFxyXG4gICAgICAgIHZhbHVlOiAnZGUgMzkxOTLigqwgw6AgNDQ4NjDigqwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc2JyxcclxuICAgICAgICB0ZXh0OiAnKyBkZSA0NDk4NjDigqwnLFxyXG4gICAgICAgIHZhbHVlOiAnKyBkZSA0NDk4NjDigqwnLFxyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiBcclxuXHJcbiBzaG93ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSlcclxuICAgIGhhbmRsZUNvbmZpcm0gPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSlcclxuICAgIGhhbmRsZUNhbmNlbCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KVxyXG5cclxucmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNob3d9PlNob3c8L0J1dHRvbj5cclxuICAgICAgICAgICAgPENvbmZpcm1cclxuICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cclxuICAgICAgICAgICAgICAgIGhlYWRlcj0nVGhpcyBpcyBhIGN1c3RvbSBoZWFkZXInXHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5oYW5kbGVDYW5jZWx9XHJcbiAgICAgICAgICAgICAgICBvbkNvbmZpcm09e3RoaXMuaGFuZGxlQ29uZmlybX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG59Ki8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRhaW5lciwgU2VnbWVudCwgR3JpZCwgQnV0dG9uLEltYWdlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0XCJcbmltcG9ydCBGaWNoZSBmcm9tIFwiLi9GaWNoZVwiXG5pbXBvcnQgeyBjcmVhdGVNZWRpYSB9IGZyb20gJ0BhcnRzeS9mcmVzbmVsJ1xuXG5jb25zdCB7IE1lZGlhQ29udGV4dFByb3ZpZGVyLCBNZWRpYSB9ID0gY3JlYXRlTWVkaWEoe1xuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIG1vYmlsZTogMCxcbiAgICAgICAgdGFibGV0OiA3NjgsXG4gICAgICAgIGNvbXB1dGVyOiAxMDI0LFxuICAgICAgICBlY3JhbjogMTE5MlxuICAgIH1cbn0pXG5cbmNsYXNzIEluZGV4TWlzc2lvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICBcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e31cbiAgICB9XG4gICAgXG4gICAgaGFuZGxlT3BlbiA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlfSlcbiAgICBoYW5kbGVDbG9zZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOmZhbHNlIH0pXG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IG1vYmlsZSB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBjb25zdCBzaGFkb3cgPVxuICAgICAgICB7XG4gICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgIHRleHRTaGFkb3c6ICctMnB4IDAgYmxhY2ssIDAgMnB4IGJsYWNrLCAycHggMCBibGFjaywgMCAtMnB4IGJsYWNrJyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwidmVyZGFuYVwiLFxuICAgICAgICAgICAgZm9udFNpemU6IDI1XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8U2VnbWVudCBzdHlsZT17c2hhZG93fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxibG9ja3F1b3RlIHN0eWxlPXt7Zm9udFNpemU6bW9iaWxlID8gMTI6MjV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDDgCBwcm9wb3MgZGUgUi5ULlM8L3N0cm9uZz48YnIvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJncmVlblwiIGZsdWlkIG9uQ2xpY2s9e3RoaXMuaGFuZGxlT3Blbn0gPjxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVsOpcmlmaWVyIG1vbiDDqWxpZ2liaWxpdMOpPC9oMz48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2txdW90ZT4gXG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQ+XG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IHZlcnRpY2FsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0YWNrYWJsZSB2ZXJ0aWNhbEFsaWduPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fSBzdHlsZT17eyBmb250RmFtaWx5OiBcIkNvbWljIHNhbnMgTVNcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250RmFtaWx5OiBcInZlcmRhbmFcIiwgY29sb3I6IFwiR3JlZW5cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdHJlIE1pc3Npb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCBjb2xvcj0nZ3JlZW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Ob3VzIG5vdXMgb2NjdXBvbnMgZGUgbWVuZXIgw6AgYmllbiB2b3RyZSBwcm9qZXQgc3VyIGxhIHLDqW5vdmF0aW9uIMOpbmVyZ8OpdGlxdWUuPGJyLz4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90cmUgcHJpb3JpdMOpIGVzdCBkZSB2b3VzIGRvbm5lciB0b3V0ZXMgbGVzIGluZm9ybWF0aW9ucyBuw6ljZXNzYWlyZXMgw6AgbGEgcsOpYWxpc2F0aW9uIGRlIGNlbHVpLWNpLiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbCBlc3Qgbm9ybWFsIGRlIHNlIHBlcmRyZSBkYW5zIGNldCBvY8OpYW4gZCdpbmZvcm1hdGlvbnMgZGl2ZXJzZXMgZXQgdmFyacOpZXMgZXQgbm90cmUgbWlzc2lvbiBlc3QgZGUgdm91cyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWlkZXIuPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3VzIHByZW5vbnMgZW4gY2hhcmdlIHRvdXRlcyBsZXMgZMOpbWFyY2hlcyBhZG1pbmlzdHJhdGl2ZXMsIGNvbnN0aXR1b25zIGxlIGRvc3NpZXIsIGNvbnRhY3RvbnMgbGVzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZmbDqXJlbnRzIGFydGlzYW5zIHJlY29ubnVzIGdhcmFudHMgZGUgbCdlbnZpcm9ubmVtZW50IChSR0UpIHByw6hzIGRlIGNoZXogdm91cy4gVW4gYWdlbnQgZGUgbWHDrnRyaXNlIMOgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwnb3V2cmFnZSAoQU1PKSBzZXJhIHByw6lzZW50IGF2YW50IGxlcyB0cmF2YXV4IHBvdXIgbGEgZmFpc2FiaWxpdMOpIGRlIHZvdHJlIHByb2pldCBldCDDoCBsYSBmaW4gcG91ciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2w6lyaWZpZXIgcXVlIGNldXgtY2kgc29udCByw6lhbGlzw6lzIGRhbnMgbGVzIHLDqGdsZXMgZGUgbCdhcnQuPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3VzIHZvdXMgYXNzdXJvbnMgdW5lIHByaXNlIGVuIGNoYXJnZSB0b3RhbGUgYXZlYyBBY3Rpb24gTG9nZW1lbnQgYXByw6hzIHZhbGlkYXRpb24gZGUgdm90cmUgZG9zc2llci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkF1Y3VuZSBpbnN0YWxsYXRpb24gbmUgc2VyYSBlZmZlY3R1w6llIHNhbnMgYWNjb3JkIHByw6lhbGFibGUgZGUgbm90cmUgcGFydGVuYWlyZSBldCBhdWN1biBmcmFpcyBuZSB2b3VzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmEgZmFjdHVyw6kgbWFsZ3LDqSB1biDDqXZlbnR1ZWwgcmVmdXMuPC9zdHJvbmc+PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gZmxvYXRlZD0nbGVmdCcgd2lkdGg9ezZ9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250RmFtaWx5OiBcInZlcmRhbmFcIiwgY29sb3I6IFwiR3JlZW5cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvdXJxdW9pIG5vdXMgZmFpcmUgY29uZmlhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCBjb2xvcj0nZ3JlZW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250RmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RyZSB0cmF2YWlsIGVzdCBlbmNhZHLDqSBwYXIgbGVzIGRpZmbDqXJlbnRzIG9yZ2FuaXNtZXMgZXhpc3RhbnRzIGV0IGNoYWN1biBkaXNwb3NlIGRlIGxldXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdG9jb2xlLjxici8+IExlcyBhaWRlcyBkb250IHZvdXMgcG91cnJleiBiw6luw6lmaWNpZXIgc2Vyb250IHRvdGFsZW1lbnQgdHJhbnNwYXJlbnRlcyBldCBsZXMgZG9jdW1lbnRzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVzdGFudCBkZSB2b3MgYWlkZXMgdm91cyBzZXJvbnQgZGlyZWN0ZW1lbnQgdHJhbnNtaXMgcGFyIGwnb3JnYW5pc21lIGVuIHF1ZXN0aW9uLjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm91cyB2b3VzIGFjY29tcGFnbmVyb25zIGRhbnMgY2UgdHJhdmFpbCB0csOocyBtaW51dGlldXggZXQgdG91dGVzIGxlcyBkw6ltYXJjaGVzIGFkbWluaXN0cmF0aXZlcyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJvbnQgZWZmZWN0dcOpZXMgcGFyIG5vcyBzb2lucy48YnIvPlZvdXMgcG91cnJleiB0cm91dmVyIGRlcyB0w6ltb2lnbmFnZXMgYXR0ZXN0YW50IGRlIG5vdHJlIHPDqXJpZXV4IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV0IGxlIHByb2Nlc3VzIGQnYWNjb21wYWduZW1lbnQgZHUgZMOpYnV0IGp1c3F1J8OgIGxhIGZpbiBkdSBwcm9qZXQuIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvZWNvbG8vZWNvbG9naWUucG5nXCIgY2VudGVyZWQvPlxuICAgICAgICAgICAgICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImdyZWVuXCIgb25DbGljaz17dGhpcy5oYW5kbGVPcGVufT5Ww6lyaWZpZXIgbW9uIMOpbGlnaWJpbGl0w6k8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9jZW50ZXI+PGJyIC8+PGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGaWNoZSBcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHRoaXMuaGFuZGxlQ2xvc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIClcbiAgICB9XG59XG5jbGFzcyBHcmVhdGhlck1pc3Npb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1lZGlhIGJldHdlZW49e1tcInRhYmxldFwiLCBcImVjcmFuXCJdfT5cbiAgICAgICAgICAgICAgICA8SW5kZXhNaXNzaW9uIC8+XG4gICAgICAgICAgICA8L01lZGlhPlxuICAgICAgICApXG4gICAgfVxufVxuXG5jbGFzcyBNb2JpbGVNaXNzaW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNZWRpYSBiZXR3ZWVuPXtbXCJtb2JpbGVcIiwgXCJ0YWJsZXRcIl19PlxuICAgICAgICAgICAgICAgIDxJbmRleE1pc3Npb24gbW9iaWxlIC8+XG4gICAgICAgICAgICA8L01lZGlhPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaXNzaW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE1lZGlhQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgICA8R3JlYXRoZXJNaXNzaW9uID57dGhpcy5wcm9wcy5jaGlsZHJlbn08L0dyZWF0aGVyTWlzc2lvbj5cbiAgICAgICAgICAgICAgICAgICAgPE1vYmlsZU1pc3Npb24+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9Nb2JpbGVNaXNzaW9uPlxuICAgICAgICAgICAgICAgIDwvTWVkaWFDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tICdAYXJ0c3kvZnJlc25lbCdcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBJY29uLCBJbWFnZSwgTWVudSwgU2VnbWVudCwgU2lkZWJhciwgVmlzaWJpbGl0eSxEcm9wZG93biB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTW9iaWxlIGZyb20gXCIuLi9wYWdlcy9Nb2JpbGUuanNcIlxyXG5cclxuY29uc3QgeyBNZWRpYUNvbnRleHRQcm92aWRlciwgTWVkaWEgfSA9IGNyZWF0ZU1lZGlhKHtcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgbW9iaWxlOiAwLFxyXG4gICAgICAgIHRhYmxldDogOTAwLFxyXG4gICAgICAgIGNvbXB1dGVyOiAxMDI0LFxyXG4gICAgICAgIGVjcmFuOiAxMTkyXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBzaGFkb3cgPVxyXG57XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHRleHRTaGFkb3c6ICctMnB4IDAgYmxhY2ssIDAgMnB4IGJsYWNrLCAycHggMCBibGFjaywgMCAtMnB4IGJsYWNrJyxcclxuICAgIGZvbnRGYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLFxyXG4gICAgZm9udFNpemU6IDE3XHJcbn1cclxuXHJcbmNvbnN0IHNoYWRvdzIgPVxyXG57XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHRleHRTaGFkb3c6ICcycHggMnB4IDRweCAjMDAwMDAwJyxcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGZvbnRGYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLFxyXG4gICAgZm9udFNpemU6IDExXHJcbn1cclxuXHJcbmNvbnN0IGh0bWwgPVwiXCJcclxuXHJcblxyXG5jbGFzcyBEZXNrdG9wQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHsgYWN0aXZlSXRlbTogJycgfVxyXG5cclxuICAgIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSlcclxuICAgIGhpZGVGaXhlZE1lbnUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZml4ZWQ6IGZhbHNlIH0pXHJcbiAgICBzaG93Rml4ZWRNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZpeGVkOiB0cnVlIH0pXHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgYWN0aXZlSXRlbSB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIGNvbnN0IHtjb2xvcn09dGhpcy5wcm9wc1xyXG5cclxuICAgICAgICBEZXNrdG9wQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICAgICAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZCA+XHJcbiAgICAgICAgICAgICAgICA8TWVkaWEgZ3JlYXRlclRoYW49J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFZpc2liaWxpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25jZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQm90dG9tUGFzc2VkPXt0aGlzLnNob3dGaXhlZE1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQm90dG9tUGFzc2VkUmV2ZXJzZT17dGhpcy5oaWRlRml4ZWRNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgdmVydGljYWwgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J2xpZ2h0Z3JleSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlc21va2UnIH19IHN0YWNrYWJsZSBmbHVpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPjxJbWFnZSBzcmM9J2ltZy9lY29sby9ydHMucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz0nYSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0ndGlueSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0nLydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gaW52ZXJ0ZWQgc3R5bGU9e3NoYWRvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nUsOpbm92YXRpb24gVGVydGlhaXJlIFNlcnZpY2UnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gcG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J05ldHRveWFnZScgaHJlZj17XCIvTmV0dG95YWdlXCIraHRtbH0gc3R5bGU9e3sgZm9udFdlaWdodDpcImJvbGRcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ05ldHRveWFnZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9uZXcxLnBuZ1wiIHNpemU9XCJtaW5pXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXR0b3lhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGl0ZW0gdGV4dD0nUi5HLkUnc2ltcGxlIHN0eWxlPXt7Zm9udFdlaWdodDpcImJvbGRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvUGFjXCIraHRtbH0+UGFjIGFpciBlYXU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL0l0ZVwiK2h0bWx9Pklzb2xhdGlvbiBleHRlcmlldXI8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL0l0aVwiK2h0bWx9Pklzb2xhdGlvbiBpbnRlcmlldXI8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL0FpckFpclwiK2h0bWx9PlBhYyBhaXIgYWlyPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9QaG90b3ZvbHRhaXF1ZVwiK2h0bWx9PlBob3Rvdm9sdGFpcXVlPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9CYWxsb25Tb2xhaXJlXCIraHRtbH0+QmFsbG9uIFNvbGFpcmU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBpdGVtIHRleHQ9J0xlIEJhdGltZW50JyBzaW1wbGUgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvRWxlY3RyaWNpdGVcIitodG1sfT5FbGVjdHJpY2l0w6k8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL1Bsb21iZXJpZVwiK2h0bWx9PlBsb21iZXJpZTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvUmV2ZXRlbWVudFwiK2h0bWx9PlJldmV0ZW1lbnQgc29sPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9DbG9pc29uXCIraHRtbH0+Q2xvaXNvbiBidXJlYXU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gc3R5bGU9e3tmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdOb3MgUGFydGVuYWlyZXMnIGhyZWY9e1wiL1BhcnRlbmFpcmVcIitodG1sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdOb3MgUGFydGVuYWlyZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J1F1aSBzb21tZXMgbm91cycgaHJlZj17XCIvTWlzc2lvblwiK2h0bWx9c3R5bGU9e3tmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdRdWkgc29tbWVzIG5vdXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nUXVhbGlmaWNhdGlvbicgaHJlZj17XCIvUXVhbGlmaWNhdGlvblwiK2h0bWx9IHN0eWxlPXt7Zm9udFdlaWdodDogXCJib2xkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnUXVhbGlmaWNhdGlvbid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Zpc2liaWxpdHk+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTW9iaWxlQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge31cclxuICAgIHN0YXRlID0geyBhY3RpdmVJdGVtOiAnaG9tZScgfVxyXG5cclxuICAgIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSlcclxuICAgIGhhbmRsZVNpZGViYXJIaWRlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpZGViYXJPcGVuZWQ6IGZhbHNlIH0pXHJcbiAgICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2lkZWJhck9wZW5lZDogdHJ1ZSB9KVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgeyBzaWRlYmFyT3BlbmVkLCBhY3RpdmVJdGVtIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgICAgIE1vYmlsZUNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZWRpYSBhcz17U2lkZWJhci5wdXNoYWJsZX0gYmV0d2Vlbj17W1wibW9iaWxlXCIsIFwidGFibGV0XCJdfT5cclxuICAgICAgICAgICAgICAgIDxTaWRlYmFyLlB1c2hhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249J3B1c2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17dGhpcy5oYW5kbGVTaWRlYmFySGlkZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17c2lkZWJhck9wZW5lZH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J05ldHRveWFnZScgaHJlZj17XCIvTmV0dG95YWdlXCIgKyBodG1sfSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnTmV0dG95YWdlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1nL25ldzEucG5nXCIgc2l6ZT1cIm1pbmlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXR0b3lhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gaXRlbSB0ZXh0PSdSLkcuRScgcG9pbnRpbmc9XCJsZWZ0XCIgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL1BhY1wiICsgaHRtbH0+UGFjIGFpciBlYXU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9JdGVcIiArIGh0bWx9Pklzb2xhdGlvbiBleHRlcmlldXI8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9JdGlcIiArIGh0bWx9Pklzb2xhdGlvbiBpbnRlcmlldXI8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9BaXJBaXJcIiArIGh0bWx9PlBhYyBhaXIgYWlyPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvUGhvdG92b2x0YWlxdWVcIiArIGh0bWx9PlBob3Rvdm9sdGFpcXVlPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvQmFsbG9uU29sYWlyZVwiICsgaHRtbH0+QmFsbG9uIFNvbGFpcmU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBpdGVtIHRleHQ9J0xlIEJhdGltZW50J3BvaW50aW5nPVwibGVmdFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvRWxlY3RyaWNpdGVcIiArIGh0bWx9PkVsZWN0cmljaXTDqTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL1Bsb21iZXJpZVwiICsgaHRtbH0+UGxvbWJlcmllPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvUmV2ZXRlbWVudFwiICsgaHRtbH0+UmV2ZXRlbWVudCBzb2w8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9DbG9pc29uXCIgKyBodG1sfT5DbG9pc29uIGJ1cmVhdTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gcG9zaXRpb249XCJyaWdodFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdOb3MgUGFydGVuYWlyZXMnIGhyZWY9e1wiL1BhcnRlbmFpcmVcIiArIGh0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdOb3MgUGFydGVuYWlyZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdRdWkgc29tbWVzIG5vdXMnIGhyZWY9e1wiL01pc3Npb25cIiArIGh0bWx9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdRdWkgc29tbWVzIG5vdXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nUXVhbGlmaWNhdGlvbicgaHJlZj17XCIvUXVhbGlmaWNhdGlvblwiICsgaHRtbH0gc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ1F1YWxpZmljYXRpb24nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2lkZWJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhci5QdXNoZXIgZGltbWVkPXtzaWRlYmFyT3BlbmVkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogMjUwLCBwYWRkaW5nOiAnMC41ZW0gMGVtJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgaW52ZXJ0ZWQgc2Vjb25kYXJ5IHNpemU9J3RpbnknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNpcmN1bGFyIGNvbG9yPSd0ZWFsJyBuYW1lPSdzaWRlYmFyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2JpbGUgbW9iaWxlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2lkZWJhci5QdXNoZXI+XHJcbiAgICAgICAgICAgICAgICA8L1NpZGViYXIuUHVzaGFibGU+XHJcbiAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBNeU1lbnUgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxNZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgPERlc2t0b3BDb250YWluZXI+e2NoaWxkcmVufTwvRGVza3RvcENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPE1vYmlsZUNvbnRhaW5lcj57Y2hpbGRyZW59PC9Nb2JpbGVDb250YWluZXI+XHJcbiAgICAgICAgPC9NZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlNZW51IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW5kZXhNaXNzaW9uIGZyb20gXCIuL0luZGV4TWlzc2lvblwiXHJcbmltcG9ydCB7IGNyZWF0ZU1lZGlhIH0gZnJvbSAnQGFydHN5L2ZyZXNuZWwnXHJcblxyXG5jb25zdCB7IE1lZGlhQ29udGV4dFByb3ZpZGVyLCBNZWRpYSB9ID0gY3JlYXRlTWVkaWEoe1xyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICBtb2JpbGU6IDAsXHJcbiAgICAgICAgdGFibGV0OiA3NjgsXHJcbiAgICAgICAgY29tcHV0ZXI6IDEwMjQsXHJcbiAgICAgICAgZWNyYW46IDExOTJcclxuICAgIH1cclxufSlcclxuXHJcblxyXG5jbGFzcyBHcmVhdGhlck1pc3Npb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVkaWEgYmV0d2Vlbj17W1widGFibGV0XCIsIFwiZWNyYW5cIl19PlxyXG4gICAgICAgICAgICAgICAgPEluZGV4TWlzc2lvbiAvPlxyXG4gICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTW9iaWxlTWlzc2lvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZWRpYSBiZXR3ZWVuPXtbXCJtb2JpbGVcIiwgXCJ0YWJsZXRcIl19PlxyXG4gICAgICAgICAgICAgICAgPEluZGV4TWlzc2lvbiBtb2JpbGUgLz5cclxuICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pc3Npb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPE1lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmVhdGhlck1pc3Npb24gPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvR3JlYXRoZXJNaXNzaW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2JpbGVNaXNzaW9uPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvTW9iaWxlTWlzc2lvbj5cclxuICAgICAgICAgICAgICAgIDwvTWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGVyLCBJbWFnZSwgR3JpZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgeyBBbmltYXRlZCB9IGZyb20gXCJyZWFjdC1hbmltYXRlZC1jc3NcIjtcclxuXHJcbi8vbWVudSBtb2JpbGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9iaWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBtb2JpbGUgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIHRleHQ+XHJcbiAgICAgICAgICAgICAgICA8QW5pbWF0ZWQgYW5pbWF0aW9uSW49XCJmYWRlSW5cIiBhbmltYXRpb25PdXQ9XCJmYWRlT3V0XCIgYW5pbWF0aW9uSW5EdXJhdGlvbj17NTAwMH0gYW5pbWF0aW9uT3V0RHVyYXRpb249ezEwMDB9IGlzVmlzaWJsZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9lY29sby9ydHMucG5nXCIgc2l6ZT1cInNtYWxsXCIgY2VudGVyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPSdoMSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD0nUsOpbm92YXRpb24gVGVydGlhaXJlIHNlcnZpY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IG1vYmlsZSA/ICcyZW0nIDogJzRlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogbW9iaWxlID8gJzAnIDogJzFlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz0naDInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J1ZvcyBwcm9qZXRzIGVudGllcmVtZW50IGZpbmFuY8OpJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IG1vYmlsZSA/ICcwLjdlbScgOiAnMWVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBtb2JpbGUgPyAnMC41ZW0nIDogJzAuNWVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWQ+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXJ0c3kvZnJlc25lbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbWFpbGpzLWNvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFuaW1hdGVkLWNzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==