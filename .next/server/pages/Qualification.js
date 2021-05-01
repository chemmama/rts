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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Qualification.js");
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

/***/ "./pages/IndexQualification.js":
/*!*************************************!*\
  !*** ./pages/IndexQualification.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexQualification; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _Fiche__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Fiche */ "./pages/Fiche.js");

var _jsxFileName = "C:\\Users\\famil\\Desktop\\emile programmation\\site_emile\\renovation\\pages\\IndexQualification.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class IndexQualification extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
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
      fontSize: mobile ? 22 : 32
    };
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        style: shadow,
        children: ["Nos qualifications RGE", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
          src: "img/rge/Bandeau-RGE-chantier-par-chantier.png",
          spaced: true,
          size: "medium"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 58
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        style: {
          textAlign: 'center'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          divided: "vertically",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
            columns: mobile ? 2 : 4,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                  src: "img/rge/logo-QualiPAC-2021-RGE.png",
                  wrapped: true,
                  ui: false
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Content, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
                    children: "Chauffage et ECS"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Description, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                      style: {
                        color: "purple"
                      },
                      children: "QualiPAC, la qualification RGE pour l'installation de pompes \xE0 chaleur"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 160
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 166
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 172
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 178
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 184
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                  src: "img/rge/logo-QualiPV-2021-RGE.png",
                  wrapped: true,
                  ui: false
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Content, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
                    children: "QualiPV"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Description, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                      style: {
                        color: "blue"
                      },
                      children: "QualiPV, la qualification de l'installation des syst\xE8mes solaires photovolta\xEFques"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 169
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 175
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 181
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 187
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                  src: "img/rge/logo-Qualisol-2021-RGE.png",
                  wrapped: true,
                  ui: false
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Content, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
                    children: "Qualisol"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Description, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                      style: {
                        color: 'orangered'
                      },
                      children: "Qualisol, la qualification RGE de l'installation de syst\xE8mes solaires thermiques"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 173
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 179
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 185
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 191
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                  src: "img/rge/qualibat.png"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Content, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
                    children: "Qualibat"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Description, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                      style: {
                        color: "blueviolet"
                      },
                      children: "A travers nos labels de qualification et de certification, nous valorisons une s\xE9lection d\u2019entreprises de toutes sp\xE9cialit\xE9s et de toutes tailles ayant fait preuve de leurs comp\xE9tences et de leur savoir-faire."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 59
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("center", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            color: "green",
            fluid: true,
            onClick: this.handleOpen,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "V\xE9rifier mon \xE9ligibilit\xE9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 79
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 30
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 36
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 42
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Fiche__WEBPACK_IMPORTED_MODULE_4__["default"], {
          open: this.state.open,
          onHide: () => this.handleClose()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
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

/***/ "./pages/Qualification.js":
/*!********************************!*\
  !*** ./pages/Qualification.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Qualification; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _IndexQualification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexQualification */ "./pages/IndexQualification.js");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @artsy/fresnel */ "@artsy/fresnel");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\famil\\Desktop\\emile programmation\\site_emile\\renovation\\pages\\Qualification.js";



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

class GreatherQualification extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
      greaterThan: "mobile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_IndexQualification__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
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

class MobileQualification extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
      between: ["mobile", "tablet"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_IndexQualification__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

class Qualification extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MediaContextProvider, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GreatherQualification, {
          children: this.props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MobileQualification, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9GaWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9JbmRleFF1YWxpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Nb2JpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvUXVhbGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXJ0c3kvZnJlc25lbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtYWlsanMtY29tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYW5pbWF0ZWQtY3NzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJlbWFpbGpzIiwiTXlMYXlvdXQiLCJzdGF0ZSIsImNoaWxkcmVuIiwiRmljaGUiLCJlIiwibmFtZSIsInZhbHVlIiwic2V0U3RhdGUiLCJtb2RhbE9wZW4iLCJtb2RhbENsb3NlIiwicHJvcHJpbyIsInNhbGFyaWUiLCJjaGF1ZmZhZ2UiLCJmYW1pbGxlIiwiZmlzY2FsaXRlIiwibm9tIiwicHJlbm9tIiwiYWRyZXNzZSIsImxvY2FsaXRlIiwiZW1haWwiLCJ0ZWxlcGhvbmUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInVuZGVmaW5lZCIsImVycm9yUHJvcHJpbyIsImNvbnRlbnQiLCJwb2ludGluZyIsImVycm9yU2FsYXJpZSIsImVycm9yQ2hhdWZmYWdlIiwiZXJyb3JGYW1pbGxlIiwiZXJyb3JGaXNjYWxpdGUiLCJhbGVydCIsImRhdGFDb250YWN0IiwidGVtcGxhdGVQYXJhbXMiLCJmcm9tX25hbWUiLCJ0b19uYW1lIiwidGhlbiIsInJlc3VsdCIsInRleHQiLCJlcnJvciIsIm1vYmlsZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJvcGVuIiwiaGFuZGxlQ2xvc2UiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsIkRyb3Bkb3duIiwiaGFuZGxlQ2hhbmdlIiwib25IaWRlIiwia2V5IiwiSW5kZXhRdWFsaWZpY2F0aW9uIiwic2hhZG93IiwidGV4dFNoYWRvdyIsImhhbmRsZU9wZW4iLCJNZWRpYUNvbnRleHRQcm92aWRlciIsIk1lZGlhIiwiY3JlYXRlTWVkaWEiLCJicmVha3BvaW50cyIsInRhYmxldCIsImNvbXB1dGVyIiwiZWNyYW4iLCJzaGFkb3cyIiwiaHRtbCIsIkRlc2t0b3BDb250YWluZXIiLCJhY3RpdmVJdGVtIiwiZml4ZWQiLCJub2RlIiwic2hvd0ZpeGVkTWVudSIsImhpZGVGaXhlZE1lbnUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250V2VpZ2h0IiwiaGFuZGxlSXRlbUNsaWNrIiwiTW9iaWxlQ29udGFpbmVyIiwic2lkZWJhck9wZW5lZCIsIlNpZGViYXIiLCJwdXNoYWJsZSIsIk1lbnUiLCJoYW5kbGVTaWRlYmFySGlkZSIsIm1pbkhlaWdodCIsInBhZGRpbmciLCJoYW5kbGVUb2dnbGUiLCJNeU1lbnUiLCJNb2JpbGUiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJ0ZXh0RGVjb3JhdGlvbiIsIkdyZWF0aGVyUXVhbGlmaWNhdGlvbiIsIk1vYmlsZVF1YWxpZmljYXRpb24iLCJRdWFsaWZpY2F0aW9uIl0sIm1hcHBpbmdzIjoiOztRQUFB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LDRDQUFLLENBQUNDLFNBQWxDLENBQTRDO0FBRXZERyxRQUFNLEdBQUc7QUFDTCx3QkFDSTtBQUFBLDZCQUNJLHFFQUFDLG9CQUFEO0FBQUEsZ0NBQ0kscUVBQUMscUJBQUQ7QUFBQSxvQkFBMEIsS0FBS0QsS0FBTCxDQUFXSztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUkscUVBQUMsbUJBQUQ7QUFBQSxvQkFBdUIsS0FBS0wsS0FBTCxDQUFXSztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQVFIOztBQVhzRCxDOzs7Ozs7Ozs7OztBQ3BDM0QsMkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvUXVhbGlmaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvUXVhbGlmaWNhdGlvbi5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE15TWVudSBmcm9tIFwiLi4vcGFnZXMvTWVudS5qc1wiXHJcbmltcG9ydCAqIGFzIGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5yZW5vdmF0aW9uPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwicmVub3ZhdGlvbiB0ZXJ0aWFpcmUgc2VydmljZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJlbWlsZSBjaGVtbWFtYVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwicG9tcGUgYSBjaGFsZXVyLHBsb21iZXJpZSxlbGVjdHJpY2l0ZSxzYWxsZSBkZSBiYWluXCIgLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGFzeW5jIHJlbD1cInN0eWxlc2hlZXRcIiBsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjAuMy9kaXN0L3NlbWFudGljLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL21lbnUuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FuaW1hdGUuY3NzLzMuNS4yL2FuaW1hdGUubWluLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9lbWFpbGpzLWNvbUAyL2Rpc3QvZW1haWwubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvbWVudS5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsanMuaW5pdChcIllPVVJfVVNFUl9JRFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JpcHQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkPlxyXG4gICAgICAgICAgICAgICAgPE15TWVudSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUxheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgUmVhY3Qse0NoaWxkcmVufSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSGVhZGVyLCBJY29uLCBNb2RhbCwgR3JpZCwgSW1hZ2UsIENvbmZpcm0sIEZvcm0sIERyb3Bkb3duLCBDaGVja2JveCxTZWdtZW50fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0ICogYXMgZW1haWxqcyBmcm9tICdlbWFpbGpzLWNvbSdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUxheW91dFwiXHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmljaGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcHJvcHJpbzogXCJcIiwgc2FsYXJpZTogXCJcIiwgY2hhdWZmYWdlOiBcIlwiLCBmYW1pbGxlOiBcIlwiLCBmaXNjYWxpdGU6IFwiXCIsXHJcbiAgICAgICAgICAgIG5vbTogXCJcIiwgcHJlbm9tOiBcIlwiLCBhZHJlc3NlOiBcIlwiLCBsb2NhbGl0ZTogXCJcIiwgZW1haWw6IFwiXCIsIHRlbGVwaG9uZTogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IChlLCB7IG5hbWUsIHZhbHVlIH0pID0+IHRoaXMuc2V0U3RhdGUoeyBbbmFtZV06IHZhbHVlIH0pXHJcblxyXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wcm9wcmlvID09PSB1bmRlZmluZWQgPyB0aGlzLnNldFN0YXRlKHsgZXJyb3JQcm9wcmlvOiB7IGNvbnRlbnQ6IFwiXCIsIHBvaW50aW5nOiBudWxsIH0gfSkgOiB0aGlzLnNldFN0YXRlKHsgZXJyb3JQcm9wcmlvOiBudWxsIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zYWxhcmllID09PSB1bmRlZmluZWQgID8gdGhpcy5zZXRTdGF0ZSh7IGVycm9yU2FsYXJpZTogeyBjb250ZW50OiBcIlwiLCBwb2ludGluZzogbnVsbCB9IH0pIDogdGhpcy5zZXRTdGF0ZSh7IGVycm9yU2FsYXJpZTogbnVsbCB9KVxyXG4gICAgICAgIHRoaXMuc3RhdGUuY2hhdWZmYWdlID09PSB1bmRlZmluZWQgPyB0aGlzLnNldFN0YXRlKHsgZXJyb3JDaGF1ZmZhZ2U6IHsgY29udGVudDogXCJcIiwgcG9pbnRpbmc6IG51bGwgfSB9KSA6IHRoaXMuc2V0U3RhdGUoeyBlcnJvckNoYXVmZmFnZTogbnVsbCB9KVxyXG4gICAgICAgIHRoaXMuc3RhdGUuZmFtaWxsZSA9PT0gdW5kZWZpbmVkICA/IHRoaXMuc2V0U3RhdGUoeyBlcnJvckZhbWlsbGU6IHsgY29udGVudDogXCJcIiwgcG9pbnRpbmc6IG51bGwgfSB9KSA6IHRoaXMuc2V0U3RhdGUoeyBlcnJvckZhbWlsbGU6IG51bGwgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLmZpc2NhbGl0ZSA9PT0gdW5kZWZpbmVkICA/IHRoaXMuc2V0U3RhdGUoeyBlcnJvckZpc2NhbGl0ZTogeyBjb250ZW50OiBcIlwiLCBwb2ludGluZzogbnVsbCB9IH0pIDogdGhpcy5zZXRTdGF0ZSh7IGVycm9yRmlzY2FsaXRlOiBudWxsIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wcm9wcmlvID09PSB1bmRlZmluZWQgPyBhbGVydChcIlNlbGVjdGlvbm5leiBQcm9wcmlldGFpcmUgb3UgbG9jYXRhaXJlID9cIikgOlxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2FsYXJpZSA9PT0gdW5kZWZpbmVkICA/IGFsZXJ0KFwiU2VsZWN0aW9ubmV6IHZvdHJlIHR5cGUgZGUgc2FsYWlyZVwiKSA6XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jaGF1ZmZhZ2UgPT09IHVuZGVmaW5lZCAgPyBhbGVydChcIlNlbGVjdGlvbm5leiB2b3RyZSB0eXBlIGRlIGNoYXVmZmFnZVwiKTogXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mYW1pbGxlID09PSB1bmRlZmluZWQgID8gYWxlcnQoXCJTZWxlY3Rpb25uZXogbm9tYnJlIGRlIHBlcnNvbm5lXCIpIDpcclxuICAgICAgICB0aGlzLnN0YXRlLmZpc2NhbGl0ZSA9PT0gdW5kZWZpbmVkID8gYWxlcnQoXCJTZWxlY3Rpb25uZXogdm90cmUgcmV2ZW51IGZpc2NhbFwiKSA6dGhpcy5kYXRhQ29udGFjdCgpXHJcbiAgICB9IFxyXG4gICBcclxuXHJcbiAgICBkYXRhQ29udGFjdCgpIHtcclxuICAgICAgICBjb25zdCB7IHByb3ByaW8sIHNhbGFyaWUsIGNoYXVmZmFnZSwgZmFtaWxsZSwgZmlzY2FsaXRlLFxyXG4gICAgICAgICAgICBub20sIHByZW5vbSwgYWRyZXNzZSwgbG9jYWxpdGUsIGVtYWlsLCB0ZWxlcGhvbmUgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgbGV0IHRlbXBsYXRlUGFyYW1zID0ge1xyXG4gICAgICAgICAgICBmcm9tX25hbWU6IGVtYWlsLFxyXG4gICAgICAgICAgICBwcm9wcmlvOiBwcm9wcmlvLFxyXG4gICAgICAgICAgICBzYWxhcmllOiBzYWxhcmllLFxyXG4gICAgICAgICAgICBjaGF1ZmZhZ2U6IGNoYXVmZmFnZSxcclxuICAgICAgICAgICAgZmFtaWxsZTogZmFtaWxsZSxcclxuICAgICAgICAgICAgZmlzY2FsaXRlOiBmaXNjYWxpdGUsXHJcbiAgICAgICAgICAgIHRvX25hbWU6IG5vbSxcclxuICAgICAgICAgICAgcHJlbm9tOiBwcmVub20sXHJcbiAgICAgICAgICAgIGFkcmVzc2U6IGFkcmVzc2UsXHJcbiAgICAgICAgICAgIGxvY2FsaXRlOiBsb2NhbGl0ZSxcclxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICB0ZWxlcGhvbmU6IHRlbGVwaG9uZVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVtYWlsanMuc2VuZCgnbXlfR21haWwnLCAnZWxpZ2liaWxpdGUnLCB0ZW1wbGF0ZVBhcmFtcywgJ3VzZXJfTzRyVG15dkN5aG5VWVRKcmN6a012JylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQocmVzdWx0LnRleHQpO1xyXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yLnRleHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcm9wcmlvPSBcIlwiLCB0aGlzLnN0YXRlLnNhbGFyaWUgPVwiXCIsIHRoaXMuc3RhdGUuY2hhdWZmYWdlID1cIlwiLCB0aGlzLnN0YXRlLmZhbWlsbGUgPVwiXCJcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5maXNjYWxpdGUgPVwiXCJcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5ub20gPSBcIlwiLCB0aGlzLnN0YXRlLnByZW5vbSA9IFwiXCIsIHRoaXMuc3RhdGUuYWRyZXNzZSA9IFwiXCIsIHRoaXMuc3RhdGUubG9jYWxpdGUgPSBcIlwiLCB0aGlzLnN0YXRlLmVtYWlsID0gXCJcIixcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS50ZWxlcGhvbmUgPSBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgaGFuZGxlT3BlbiA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBtb2RhbE9wZW46IHRydWUgfSlcclxuICAgICAgICBoYW5kbGVDbG9zZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBtb2RhbENsb3NlOmZhbHNlIH0pIFxyXG4gICAgIFxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgeyBtb2JpbGUgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBGaWNoZS5wcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBtb2JpbGU6IFByb3BUeXBlcy5ib29sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBvcGVuPXRoaXMucHJvcHMub3BlblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxTZWdtZW50IGludmVydGVkPlxyXG4gICAgICAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5wcm9wcy5oYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgIHNpemU9J21pbmknXHJcbiAgICAgICAgICAgICAgICBiYXNpYyAgXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgRGFucyBsZSBjYWRyZSBkZSBsYSB0cmFuc2l0aW9uIMOpY29sb2dpcXVlLCBsJ8OJdGF0IHByZW5kIGVuIGNoYXJnZSBsZSBjb8O7dCBkZSBs4oCZaW5zdGFsbGF0aW9uIGRlPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgRGVzIG1pbGxpZXJzIGRlIGZveWVycyBmcmFuw6dhaXMgZW4gb250IGTDqWrDoCBwcm9maXTDqSwgcG91cnF1b2kgcGFzIHZvdXMgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4qIHNhaXNpZSBvYmxpZ2F0b2lyZTwvcD5cclxuICAgICAgICAgICAgICAgIDwvSGVhZGVyPiAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiLCBmb250U2l6ZTogMzAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVsOpcmlmaWV6IHZvdHJlIMOpbGlnaWJpdMOpPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuRGVzY3JpcHRpb24gc3R5bGU9e3sgY29sb3I6ICdsaWdodGdyZXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGludmVydGVkIG9uU3VibWl0PXtlID0+IHRoaXMuaGFuZGxlU3VibWl0KGUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JQcm9wcmlvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVm91cyBFdGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS0tLVwiIHN0eWxlPXt7IGNvbG9yOiBcInllbGxvd1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cHJvcHJpb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb3ByaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvclNhbGFyaWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlZvdXMgRXRlcyBzYWxhcmnDqSBkYW5zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tLS1cInN0eWxlPXt7Y29sb3I6XCJ5ZWxsb3dcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtzYWxhcmllfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzYWxhcmllXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgY2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvckNoYXVmZmFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlZvdHJlIHR5cGUgZGUgQ2hhdWZmYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS0tLVwiIHN0eWxlPXt7IGNvbG9yOiBcInllbGxvd1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y2hhdWZmYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2hhdWZmYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIGNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JGYW1pbGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTm9tYnJlIGRlIHBlcnNvbm5lIHZpdmFudCBkYW5zIGxlIGZveWVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS0tLVwiIHN0eWxlPXt7IGNvbG9yOiBcInllbGxvd1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmFtaWxsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZhbWlsbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgY2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvckZpc2NhbGl0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJldmVudWUgZmlzY2FsIGRlIHLDqWbDqXJlbmNlICgyMDIwIG91IDIwMTkpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS0tLVwiIHN0eWxlPXt7IGNvbG9yOiBcInllbGxvd1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmlzY2FsaXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlzY2FsaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdOb20nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLS0tXCIgc3R5bGU9e3sgY29sb3I6IFwieWVsbG93XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17OX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ub219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj0nbG9jaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249J2xlZnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nUHLDqW5vbSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nLS0tLScgc3R5bGU9e3sgY29sb3I6IFwieWVsbG93XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17OX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJlbm9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcmVub219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPSdsZWZ0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWRyZXNzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9Jy0tLS0nIHN0eWxlPXt7IGNvbG9yOiBcInllbGxvd1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFkcmVzc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkcmVzc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTG9jYWxpdMOpJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSctLS0tJyBzdHlsZT17eyBjb2xvcjogXCJ5ZWxsb3dcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb2NhbGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubG9jYWxpdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2NvbnRhY3RAZ21haWwuY29tJyBzdHlsZT17eyBjb2xvcjogXCJ5ZWxsb3dcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nVGVsZXBob25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSctLS0tJyBzdHlsZT17eyBjb2xvcjogXCJ5ZWxsb3dcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZWxlcGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRlbGVwaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+PGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGxhYmVsPVwiSidhdXRvcmlzZSBSLlQuUyDDoCBtZSByZWNvbnRhY3RlciBwb3VyIG1lIGNvbW11bmlxdWVyIG1vbiBzdGF0dXQgZCfDqWxpZ2liaWxpdMOpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPjxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQnV0dG9uIGZsdWlkIHR5cGU9XCJzdWJtaXRcIiBjb2xvcj1cImdyZWVuXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAxNSA6IDIwfX0+VsOpcmlmaWVyIG1vbiDDqWxpZ2liaWxpdMOpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkJ1dHRvbiBjb2xvcj0nZ3JleWxpZ2h0JyBmbHVpZCBvbkNsaWNrPXt0aGlzLnByb3BzLm9uSGlkZX0gaW52ZXJ0ZWQgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IG1vYmlsZSA/IDE1IDogMjB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmVybWVyXHJcbiAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiAgIFxyXG4gXHJcblxyXG5jb25zdCBwcm9wcmlvID0gW1xyXG5cclxuICAgIHtcclxuICAgICAgICBrZXk6ICcxJyxcclxuICAgICAgICB0ZXh0OiAnUHJvcHJpw6l0YWlyZScsXHJcbiAgICAgICAgdmFsdWU6ICdQcm9wcmnDqXRhaXJlJyxcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzInLFxyXG4gICAgICAgIHRleHQ6ICdMb2NhdGFpcmUnLFxyXG4gICAgICAgIHZhbHVlOiAnTG9jYXRhaXJlJyxcclxuICAgIH1cclxuXVxyXG5cclxuXHJcbmNvbnN0IHNhbGFyaWUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMScsXHJcbiAgICAgICAgdGV4dDogJ1NlY3RldXIgcHVibGljJyxcclxuICAgICAgICB2YWx1ZTogJ1NlY3RldXIgcHVibGljJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMicsXHJcbiAgICAgICAgdGV4dDogJ1NlY3RldXIgcHJpdmUnLFxyXG4gICAgICAgIHZhbHVlOiAnU2VjdGV1ciBwcml2ZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzMnLFxyXG4gICAgICAgIHRleHQ6ICdTZWN0ZXVyIGFncmljb2xlJyxcclxuICAgICAgICB2YWx1ZTogJ1NlY3RldXIgYWdyaWNvbGUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc0JyxcclxuICAgICAgICB0ZXh0OiAnTm9uIHNhbGFyaWUnLFxyXG4gICAgICAgIHZhbHVlOiAnTm9uIHNhbGFyaWUnLFxyXG4gICAgfSxcclxuXHJcbl1cclxuY29uc3QgY2hhdWZmYWdlID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJzEnLFxyXG4gICAgICAgIHRleHQ6ICdFbGVjdHJpcXVlJyxcclxuICAgICAgICB2YWx1ZTogJ0VsZWN0cmlxdWUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcyJyxcclxuICAgICAgICB0ZXh0OiAnRmlvdWwnLFxyXG4gICAgICAgIHZhbHVlOiAnRmlvdWwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICczJyxcclxuICAgICAgICB0ZXh0OiAnR2F6JyxcclxuICAgICAgICB2YWx1ZTogJ0dheicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzQnLFxyXG4gICAgICAgIHRleHQ6ICdBdXRyZScsXHJcbiAgICAgICAgdmFsdWU6ICdBdXRyZScsXHJcbiAgICB9LFxyXG5dXHJcbmNvbnN0IGZhbWlsbGUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMScsXHJcbiAgICAgICAgdGV4dDogJzEnLFxyXG4gICAgICAgIHZhbHVlOiAnMScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzInLFxyXG4gICAgICAgIHRleHQ6ICcyJyxcclxuICAgICAgICB2YWx1ZTogJzInLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICczJyxcclxuICAgICAgICB0ZXh0OiAnMycsXHJcbiAgICAgICAgdmFsdWU6ICczJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNCcsXHJcbiAgICAgICAgdGV4dDogJzQnLFxyXG4gICAgICAgIHZhbHVlOiAnNCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzUgZXQgcGx1cycsXHJcbiAgICAgICAgdGV4dDogJzUgZXQgcGx1cycsXHJcbiAgICAgICAgdmFsdWU6ICc1IGV0IHBsdXMnLFxyXG4gICAgfVxyXG5dXHJcbmNvbnN0IGZpc2NhbGl0ZSA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcxJyxcclxuICAgICAgICB0ZXh0OiAnZGUgMOKCrCDDoCAxOTA3NOKCrCcsXHJcbiAgICAgICAgdmFsdWU6ICdkZSAw4oKsIMOgIDE5MDc04oKsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMicsXHJcbiAgICAgICAgdGV4dDogJ2RlIDE5MDc04oKsIMOgIDI3ODk24oKsJyxcclxuICAgICAgICB2YWx1ZTogJ2RlIDE5MDc04oKsIMOgIDI3ODk24oKsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMycsXHJcbiAgICAgICAgdGV4dDogJ2RlIDI3ODk24oKsIMOgIDMzNTQ34oKsJyxcclxuICAgICAgICB2YWx1ZTogJ2RlIDI3ODk24oKsIMOgIDMzNTQ34oKsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNCcsXHJcbiAgICAgICAgdGV4dDogJ2RlIDMzNTQ34oKsIMOgIDM5MTky4oKsJyxcclxuICAgICAgICB2YWx1ZTogJ2RlIDMzNTQ34oKsIMOgIDM5MTky4oKsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNScsXHJcbiAgICAgICAgdGV4dDogJ2RlIDM5MTky4oKsIMOgIDQ0ODYw4oKsJyxcclxuICAgICAgICB2YWx1ZTogJ2RlIDM5MTky4oKsIMOgIDQ0ODYw4oKsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNicsXHJcbiAgICAgICAgdGV4dDogJysgZGUgNDQ5ODYw4oKsJyxcclxuICAgICAgICB2YWx1ZTogJysgZGUgNDQ5ODYw4oKsJyxcclxuICAgIH1cclxuXVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogXHJcblxyXG4gc2hvdyA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pXHJcbiAgICBoYW5kbGVDb25maXJtID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pXHJcbiAgICBoYW5kbGVDYW5jZWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSlcclxuXHJcbnJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5zaG93fT5TaG93PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxDb25maXJtXHJcbiAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9J1RoaXMgaXMgYSBjdXN0b20gaGVhZGVyJ1xyXG4gICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGFuZGxlQ2FuY2VsfVxyXG4gICAgICAgICAgICAgICAgb25Db25maXJtPXt0aGlzLmhhbmRsZUNvbmZpcm19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxufSovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEltYWdlLCBDYXJkLCBHcmlkICxCdXR0b259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0XCJcclxuaW1wb3J0IEZpY2hlIGZyb20gXCIuL0ZpY2hlXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleFF1YWxpZmljYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU9wZW4gPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KVxyXG4gICAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSlcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBtb2JpbGUgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgY29uc3Qgc2hhZG93ID1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICB0ZXh0U2hhZG93OiAnLTJweCAwIGJsYWNrLCAwIDJweCBibGFjaywgMnB4IDAgYmxhY2ssIDAgLTJweCBibGFjaycsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJ2ZXJkYW5hXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAyMiA6IDMyXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3NoYWRvd30+Tm9zIHF1YWxpZmljYXRpb25zIFJHRTxJbWFnZSBzcmM9J2ltZy9yZ2UvQmFuZGVhdS1SR0UtY2hhbnRpZXItcGFyLWNoYW50aWVyLnBuZycgc3BhY2VkIHNpemU9XCJtZWRpdW1cIiAvPjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgZGl2aWRlZD0ndmVydGljYWxseSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdyBjb2x1bW5zPXttb2JpbGUgPyAyIDogNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9J2ltZy9yZ2UvbG9nby1RdWFsaVBBQy0yMDIxLVJHRS5wbmcnIHdyYXBwZWQgdWk9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPkNoYXVmZmFnZSBldCBFQ1M8L0NhcmQuSGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3sgY29sb3I6IFwicHVycGxlXCIgfX0+UXVhbGlQQUMsIGxhIHF1YWxpZmljYXRpb24gUkdFIHBvdXIgbCdpbnN0YWxsYXRpb24gZGUgcG9tcGVzIMOgIGNoYWxldXI8L3N0cm9uZz48YnIgLz48YnIgLz48YnIgLz48YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0naW1nL3JnZS9sb2dvLVF1YWxpUFYtMjAyMS1SR0UucG5nJyB3cmFwcGVkIHVpPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5RdWFsaVBWPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3sgY29sb3I6IFwiYmx1ZVwiIH19PlF1YWxpUFYsIGxhIHF1YWxpZmljYXRpb24gZGUgbCdpbnN0YWxsYXRpb24gZGVzIHN5c3TDqG1lcyBzb2xhaXJlcyBwaG90b3ZvbHRhw69xdWVzPC9zdHJvbmc+PGJyIC8+PGJyIC8+PGJyIC8+PGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0naW1nL3JnZS9sb2dvLVF1YWxpc29sLTIwMjEtUkdFLnBuZycgd3JhcHBlZCB1aT17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+UXVhbGlzb2w8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBzdHlsZT17eyBjb2xvcjogJ29yYW5nZXJlZCcgfX0+UXVhbGlzb2wsIGxhIHF1YWxpZmljYXRpb24gUkdFIGRlIGwnaW5zdGFsbGF0aW9uIGRlIHN5c3TDqG1lcyBzb2xhaXJlcyB0aGVybWlxdWVzPC9zdHJvbmc+PGJyIC8+PGJyIC8+PGJyIC8+PGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPSdpbWcvcmdlL3F1YWxpYmF0LnBuZycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5RdWFsaWJhdDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj48c3Ryb25nIHN0eWxlPXt7Y29sb3I6XCJibHVldmlvbGV0XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBIHRyYXZlcnMgbm9zIGxhYmVscyBkZSBxdWFsaWZpY2F0aW9uIGV0IGRlIGNlcnRpZmljYXRpb24sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdXMgdmFsb3Jpc29ucyB1bmUgc8OpbGVjdGlvbiBk4oCZZW50cmVwcmlzZXMgZGUgdG91dGVzIHNww6ljaWFsaXTDqXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXQgZGUgdG91dGVzIHRhaWxsZXMgYXlhbnQgZmFpdCBwcmV1dmUgZGUgbGV1cnMgY29tcMOpdGVuY2VzIGV0IGRlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldXIgc2F2b2lyLWZhaXJlLjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImdyZWVuXCIgZmx1aWQgb25DbGljaz17dGhpcy5oYW5kbGVPcGVufT48aDM+VsOpcmlmaWVyIG1vbiDDqWxpZ2liaWxpdMOpPC9oMz48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2NlbnRlcj48YnIgLz48YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8RmljaGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHRoaXMuaGFuZGxlQ2xvc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tICdAYXJ0c3kvZnJlc25lbCdcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBJY29uLCBJbWFnZSwgTWVudSwgU2VnbWVudCwgU2lkZWJhciwgVmlzaWJpbGl0eSxEcm9wZG93biB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTW9iaWxlIGZyb20gXCIuLi9wYWdlcy9Nb2JpbGUuanNcIlxyXG5cclxuY29uc3QgeyBNZWRpYUNvbnRleHRQcm92aWRlciwgTWVkaWEgfSA9IGNyZWF0ZU1lZGlhKHtcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgbW9iaWxlOiAwLFxyXG4gICAgICAgIHRhYmxldDogOTAwLFxyXG4gICAgICAgIGNvbXB1dGVyOiAxMDI0LFxyXG4gICAgICAgIGVjcmFuOiAxMTkyXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBzaGFkb3cgPVxyXG57XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHRleHRTaGFkb3c6ICctMnB4IDAgYmxhY2ssIDAgMnB4IGJsYWNrLCAycHggMCBibGFjaywgMCAtMnB4IGJsYWNrJyxcclxuICAgIGZvbnRGYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLFxyXG4gICAgZm9udFNpemU6IDE3XHJcbn1cclxuXHJcbmNvbnN0IHNoYWRvdzIgPVxyXG57XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHRleHRTaGFkb3c6ICcycHggMnB4IDRweCAjMDAwMDAwJyxcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGZvbnRGYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLFxyXG4gICAgZm9udFNpemU6IDExXHJcbn1cclxuXHJcbmNvbnN0IGh0bWwgPVwiXCJcclxuXHJcblxyXG5jbGFzcyBEZXNrdG9wQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHsgYWN0aXZlSXRlbTogJycgfVxyXG5cclxuICAgIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSlcclxuICAgIGhpZGVGaXhlZE1lbnUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZml4ZWQ6IGZhbHNlIH0pXHJcbiAgICBzaG93Rml4ZWRNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZpeGVkOiB0cnVlIH0pXHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgYWN0aXZlSXRlbSB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIGNvbnN0IHtjb2xvcn09dGhpcy5wcm9wc1xyXG5cclxuICAgICAgICBEZXNrdG9wQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICAgICAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZCA+XHJcbiAgICAgICAgICAgICAgICA8TWVkaWEgZ3JlYXRlclRoYW49J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFZpc2liaWxpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25jZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQm90dG9tUGFzc2VkPXt0aGlzLnNob3dGaXhlZE1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQm90dG9tUGFzc2VkUmV2ZXJzZT17dGhpcy5oaWRlRml4ZWRNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgdmVydGljYWwgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J2xpZ2h0Z3JleSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlc21va2UnIH19IHN0YWNrYWJsZSBmbHVpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPjxJbWFnZSBzcmM9J2ltZy9lY29sby9ydHMucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz0nYSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0ndGlueSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0nLydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gaW52ZXJ0ZWQgc3R5bGU9e3NoYWRvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nUsOpbm92YXRpb24gVGVydGlhaXJlIFNlcnZpY2UnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gcG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J05ldHRveWFnZScgaHJlZj17XCIvTmV0dG95YWdlXCIraHRtbH0gc3R5bGU9e3sgZm9udFdlaWdodDpcImJvbGRcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ05ldHRveWFnZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9uZXcxLnBuZ1wiIHNpemU9XCJtaW5pXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXR0b3lhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGl0ZW0gdGV4dD0nUi5HLkUnc2ltcGxlIHN0eWxlPXt7Zm9udFdlaWdodDpcImJvbGRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvUGFjXCIraHRtbH0+UGFjIGFpciBlYXU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL0l0ZVwiK2h0bWx9Pklzb2xhdGlvbiBleHRlcmlldXI8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL0l0aVwiK2h0bWx9Pklzb2xhdGlvbiBpbnRlcmlldXI8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL0FpckFpclwiK2h0bWx9PlBhYyBhaXIgYWlyPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9QaG90b3ZvbHRhaXF1ZVwiK2h0bWx9PlBob3Rvdm9sdGFpcXVlPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9CYWxsb25Tb2xhaXJlXCIraHRtbH0+QmFsbG9uIFNvbGFpcmU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBpdGVtIHRleHQ9J0xlIEJhdGltZW50JyBzaW1wbGUgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvRWxlY3RyaWNpdGVcIitodG1sfT5FbGVjdHJpY2l0w6k8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL1Bsb21iZXJpZVwiK2h0bWx9PlBsb21iZXJpZTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvUmV2ZXRlbWVudFwiK2h0bWx9PlJldmV0ZW1lbnQgc29sPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9DbG9pc29uXCIraHRtbH0+Q2xvaXNvbiBidXJlYXU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gc3R5bGU9e3tmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdOb3MgUGFydGVuYWlyZXMnIGhyZWY9e1wiL1BhcnRlbmFpcmVcIitodG1sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdOb3MgUGFydGVuYWlyZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J1F1aSBzb21tZXMgbm91cycgaHJlZj17XCIvTWlzc2lvblwiK2h0bWx9c3R5bGU9e3tmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdRdWkgc29tbWVzIG5vdXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nUXVhbGlmaWNhdGlvbicgaHJlZj17XCIvUXVhbGlmaWNhdGlvblwiK2h0bWx9IHN0eWxlPXt7Zm9udFdlaWdodDogXCJib2xkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnUXVhbGlmaWNhdGlvbid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Zpc2liaWxpdHk+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTW9iaWxlQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge31cclxuICAgIHN0YXRlID0geyBhY3RpdmVJdGVtOiAnaG9tZScgfVxyXG5cclxuICAgIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSlcclxuICAgIGhhbmRsZVNpZGViYXJIaWRlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpZGViYXJPcGVuZWQ6IGZhbHNlIH0pXHJcbiAgICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2lkZWJhck9wZW5lZDogdHJ1ZSB9KVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgeyBzaWRlYmFyT3BlbmVkLCBhY3RpdmVJdGVtIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgICAgIE1vYmlsZUNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZWRpYSBhcz17U2lkZWJhci5wdXNoYWJsZX0gYmV0d2Vlbj17W1wibW9iaWxlXCIsIFwidGFibGV0XCJdfT5cclxuICAgICAgICAgICAgICAgIDxTaWRlYmFyLlB1c2hhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249J3B1c2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17dGhpcy5oYW5kbGVTaWRlYmFySGlkZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17c2lkZWJhck9wZW5lZH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J05ldHRveWFnZScgaHJlZj17XCIvTmV0dG95YWdlXCIgKyBodG1sfSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnTmV0dG95YWdlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1nL25ldzEucG5nXCIgc2l6ZT1cIm1pbmlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXR0b3lhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gaXRlbSB0ZXh0PSdSLkcuRScgcG9pbnRpbmc9XCJsZWZ0XCIgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL1BhY1wiICsgaHRtbH0+UGFjIGFpciBlYXU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9JdGVcIiArIGh0bWx9Pklzb2xhdGlvbiBleHRlcmlldXI8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9JdGlcIiArIGh0bWx9Pklzb2xhdGlvbiBpbnRlcmlldXI8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9BaXJBaXJcIiArIGh0bWx9PlBhYyBhaXIgYWlyPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvUGhvdG92b2x0YWlxdWVcIiArIGh0bWx9PlBob3Rvdm9sdGFpcXVlPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvQmFsbG9uU29sYWlyZVwiICsgaHRtbH0+QmFsbG9uIFNvbGFpcmU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBpdGVtIHRleHQ9J0xlIEJhdGltZW50J3BvaW50aW5nPVwibGVmdFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvRWxlY3RyaWNpdGVcIiArIGh0bWx9PkVsZWN0cmljaXTDqTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL1Bsb21iZXJpZVwiICsgaHRtbH0+UGxvbWJlcmllPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvUmV2ZXRlbWVudFwiICsgaHRtbH0+UmV2ZXRlbWVudCBzb2w8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9DbG9pc29uXCIgKyBodG1sfT5DbG9pc29uIGJ1cmVhdTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gcG9zaXRpb249XCJyaWdodFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdOb3MgUGFydGVuYWlyZXMnIGhyZWY9e1wiL1BhcnRlbmFpcmVcIiArIGh0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdOb3MgUGFydGVuYWlyZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdRdWkgc29tbWVzIG5vdXMnIGhyZWY9e1wiL01pc3Npb25cIiArIGh0bWx9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdRdWkgc29tbWVzIG5vdXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nUXVhbGlmaWNhdGlvbicgaHJlZj17XCIvUXVhbGlmaWNhdGlvblwiICsgaHRtbH0gc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ1F1YWxpZmljYXRpb24nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2lkZWJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhci5QdXNoZXIgZGltbWVkPXtzaWRlYmFyT3BlbmVkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogMjUwLCBwYWRkaW5nOiAnMC41ZW0gMGVtJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgaW52ZXJ0ZWQgc2Vjb25kYXJ5IHNpemU9J3RpbnknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNpcmN1bGFyIGNvbG9yPSd0ZWFsJyBuYW1lPSdzaWRlYmFyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2JpbGUgbW9iaWxlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2lkZWJhci5QdXNoZXI+XHJcbiAgICAgICAgICAgICAgICA8L1NpZGViYXIuUHVzaGFibGU+XHJcbiAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBNeU1lbnUgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxNZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgPERlc2t0b3BDb250YWluZXI+e2NoaWxkcmVufTwvRGVza3RvcENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPE1vYmlsZUNvbnRhaW5lcj57Y2hpbGRyZW59PC9Nb2JpbGVDb250YWluZXI+XHJcbiAgICAgICAgPC9NZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlNZW51IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEhlYWRlciwgSW1hZ2UsIEdyaWQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHsgQW5pbWF0ZWQgfSBmcm9tIFwicmVhY3QtYW5pbWF0ZWQtY3NzXCI7XHJcblxyXG4vL21lbnUgbW9iaWxlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vYmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbW9iaWxlIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbnRhaW5lciB0ZXh0PlxyXG4gICAgICAgICAgICAgICAgPEFuaW1hdGVkIGFuaW1hdGlvbkluPVwiZmFkZUluXCIgYW5pbWF0aW9uT3V0PVwiZmFkZU91dFwiIGFuaW1hdGlvbkluRHVyYXRpb249ezUwMDB9IGFuaW1hdGlvbk91dER1cmF0aW9uPXsxMDAwfSBpc1Zpc2libGU9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvZWNvbG8vcnRzLnBuZ1wiIHNpemU9XCJzbWFsbFwiIGNlbnRlcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz0naDEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J1LDqW5vdmF0aW9uIFRlcnRpYWlyZSBzZXJ2aWNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAnMmVtJyA6ICc0ZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IG1vYmlsZSA/ICcwJyA6ICcxZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9J2gyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PSdWb3MgcHJvamV0cyBlbnRpZXJlbWVudCBmaW5hbmPDqSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAnMC43ZW0nIDogJzFlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogbW9iaWxlID8gJzAuNWVtJyA6ICcwLjVlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVkPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW5kZXhRdWFsaWZpY2F0aW9uIGZyb20gXCIuL0luZGV4UXVhbGlmaWNhdGlvblwiXHJcbmltcG9ydCB7IGNyZWF0ZU1lZGlhIH0gZnJvbSAnQGFydHN5L2ZyZXNuZWwnXHJcblxyXG5jb25zdCB7IE1lZGlhQ29udGV4dFByb3ZpZGVyLCBNZWRpYSB9ID0gY3JlYXRlTWVkaWEoe1xyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICBtb2JpbGU6IDAsXHJcbiAgICAgICAgdGFibGV0OiA3NjgsXHJcbiAgICAgICAgY29tcHV0ZXI6IDEwMjQsXHJcbiAgICAgICAgZWNyYW46IDExOTJcclxuICAgIH1cclxufSlcclxuXHJcblxyXG5jbGFzcyBHcmVhdGhlclF1YWxpZmljYXRpb24gIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1lZGlhIGdyZWF0ZXJUaGFuPSdtb2JpbGUnPlxyXG4gICAgICAgICAgICAgICAgPEluZGV4UXVhbGlmaWNhdGlvbiAgLz5cclxuICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE1vYmlsZVF1YWxpZmljYXRpb24gIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1lZGlhIGJldHdlZW49e1tcIm1vYmlsZVwiLCBcInRhYmxldFwiXX0+XHJcbiAgICAgICAgICAgICAgICA8SW5kZXhRdWFsaWZpY2F0aW9uICBtb2JpbGUgLz5cclxuICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1YWxpZmljYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPE1lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmVhdGhlclF1YWxpZmljYXRpb24gID57dGhpcy5wcm9wcy5jaGlsZHJlbn08L0dyZWF0aGVyUXVhbGlmaWNhdGlvbiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vYmlsZVF1YWxpZmljYXRpb24gPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvTW9iaWxlUXVhbGlmaWNhdGlvbiA+XHJcbiAgICAgICAgICAgICAgICA8L01lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFydHN5L2ZyZXNuZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1haWxqcy1jb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hbmltYXRlZC1jc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=