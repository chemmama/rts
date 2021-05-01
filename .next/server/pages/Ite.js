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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Ite.js");
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

/***/ "./pages/Contact.js":
/*!**************************!*\
  !*** ./pages/Contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emailjs-com */ "emailjs-com");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\famil\\Desktop\\emile programmation\\site_emile\\renovation\\pages\\Contact.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Contact extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
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
    this.state.proprio === undefined ? alert("Selectionnez Proprietaire ou locataire ?") : this.state.salarie === undefined ? alert("Selectionnez votre type de salaire") : this.state.chauffage === undefined ? alert("Selectionnez votre type de chauffage") : this.state.famille === undefined ? alert("Selectionnez nombre de personne") : this.state.fiscalité === undefined ? alert("Selectionnez votre revenu fiscal") : this.dataContact();
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
    Contact.propTypes = {
      mobile: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
    };
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
      floated: "right",
      width: 8,
      style: {
        paddingTop: mobile ? 10 : 20,
        fontFamily: "Comic sans MS",
        backgroundColor: "white"
      },
      children: ["Dans le cadre de la transition \xE9cologique, l'\xC9tat prend en charge le co\xFBt de l\u2019installation de", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 36
      }, this), "Des milliers de foyers fran\xE7ais en ont d\xE9j\xE0 profit\xE9, pourquoi pas vous ?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          color: 'red'
        },
        children: "* saisie obligatoire"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          fontFamily: "Comic sans MS",
          color: "green",
          fontSize: mobile ? 20 : 30,
          textAlign: "center"
        },
        children: "V\xE9rifiez votre \xE9ligibit\xE9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onSubmit: e => this.handleSubmit(e),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
          error: this.state.errorProprio,
          required: true,
          label: "Vous Etes",
          placeholder: "----",
          fluid: true,
          options: proprio,
          control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"],
          name: "proprio",
          onChange: this.handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
          error: this.state.errorSalarie,
          required: true,
          label: "Vous Etes salari\xE9 dans",
          placeholder: "----",
          fluid: true,
          options: salarie,
          control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"],
          name: "salarie",
          onChange: this.handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
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
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
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
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
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
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
            required: true,
            label: "Nom",
            placeholder: "Nom",
            width: 9,
            name: "nom",
            value: this.state.nom,
            onChange: this.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
            icon: "lock",
            iconPosition: "left",
            required: true,
            label: "Pr\xE9nom",
            placeholder: "Pr\xE9nom",
            width: 9,
            name: "prenom",
            value: this.state.prenom,
            onChange: this.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
            required: true,
            icon: "adress",
            iconPosition: "left",
            label: "Adresse",
            placeholder: "Adresse",
            width: 9,
            name: "adresse",
            value: this.state.adresse,
            onChange: this.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
            required: true,
            label: "Localit\xE9",
            placeholder: "Localit\xE9",
            width: 9,
            name: "localite",
            value: this.state.localite,
            onChange: this.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
            type: "email",
            required: true,
            label: "Email",
            placeholder: "contact@gmail.com",
            width: 9,
            name: "email",
            value: this.state.email,
            onChange: this.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
            required: true,
            label: "Telephone",
            placeholder: "0698611372",
            width: 9,
            name: "telephone",
            value: this.state.telephone,
            onChange: this.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 34
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 40
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
            label: "J'autorise R.T.S \xE0 me recontacter pour me communiquer mon statut d'\xE9ligibilit\xE9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 34
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 40
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
          lineNumber: 212,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
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

/***/ }),

/***/ "./pages/IndexIte.js":
/*!***************************!*\
  !*** ./pages/IndexIte.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ite; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Contact */ "./pages/Contact.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! emailjs-com */ "emailjs-com");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @artsy/fresnel */ "@artsy/fresnel");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\famil\\Desktop\\emile programmation\\site_emile\\renovation\\pages\\IndexIte.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const {
  MediaContextProvider,
  Media
} = Object(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_6__["createMedia"])({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
    ecran: 1192
  }
});

class IndexIte extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
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
    this.state = {};
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
    const shadow = {
      color: 'lightgreen',
      textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
      textAlign: "center",
      fontFamily: "verdana",
      fontSize: mobile ? 22 : 32
    };
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        fluid: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
          vertical: true,
          fluid: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
            container: true,
            stackable: true,
            verticalAlign: "center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
                floated: "left",
                width: 8,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    fontFamily: "Comic sans MS",
                    color: "lightgreen",
                    textAlign: "center",
                    fontSize: mobile ? 15 : 25,
                    textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
                    letterSpacing: 3
                  },
                  children: ["L'Isolation Thermique de vos murs par l'Ext\xE9rieur pris en charge jusqu'\xE0 90% c'est possible", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                    src: "img/ecolo/logocee.png",
                    centered: true,
                    size: "small",
                    spaced: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 82
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Embed"], {
                  aspectRatio: "16:9",
                  id: "0m1QWV3vTzo",
                  placeholder: "img/ecolo/ecologieyouTube.png",
                  source: "youtube"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  style: {
                    fontFamily: "verdana",
                    textAlign: "center",
                    color: "green",
                    fontSize: mobile ? 25 : 35
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("u", {
                    children: "Comment l'obtenir"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Image, {
                    src: "img/ecolo/validez.png",
                    alt: "validez",
                    size: "tiny"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Content, {
                    verticalAlign: "middle",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Header, {
                      children: "Remplissez le formulaire"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 121,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Image, {
                    size: "tiny",
                    src: "img/ecolo/telephone.png",
                    alt: "telephone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Content, {
                    verticalAlign: "middle",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Header, {
                      children: " Un professionnel vous contact afin d'ouvrir votre dossier et convenir d'un rendez-vous"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Image, {
                    size: "tiny",
                    src: "img/ecolo/ouvrier.png",
                    alt: "ouvrier RGE"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Content, {
                    verticalAlign: "middle",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Header, {
                      children: " Une \xE9quipe de techniciens confirm\xE9s RGE se d\xE9place chez vous afin de r\xE9aliser vos travaux"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 133,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Image, {
                    size: "tiny",
                    src: "img/ecolo/remerciement.png",
                    alt: "remerciement"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Content, {
                    verticalAlign: "middle",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Header, {
                      children: "Vous ne payez que 1 euro Sur pr\xE9sentation du devis , sans aucun frais avanc\xE9"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 139,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 44
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Image, {
                    size: "small",
                    src: "img/ecolo/logocee.png",
                    alt: "logo-cee"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Content, {
                    verticalAlign: "middle",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Header, {
                      children: "l'etat finance  pour 1\u20AC symbolique"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Contact__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("blockquote", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              style: shadow,
              children: "Pourquoi isoler votre fa\xE7ade ?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 91
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                wordSpacing: 5
              },
              children: "L'ITE regroupe l'ensemble des techniques d'isolation de la fa\xE7ade d'une maison. Ces techniques visent \xE0 limiter, par l\u2019ext\xE9rieur, les transferts thermiques entre les murs et l\u2019int\xE9rieur d\u2019un b\xE2timent. Elle se r\xE9alise par la pose d\u2019un isolant, recouvert d\u2019un rev\xEAtement de finition (enduit de fa\xE7ade ou bardage ext\xE9rieur). L\u2019isolation thermique par l'ext\xE9rieur permet de constituer un v\xE9ritable manteau isolant continu autour d\u2019une construction. L\u2019isolation thermique ext\xE9rieure contribue ainsi au maintien d\u2019une temp\xE9rature homog\xE8ne dans le logement, hiver comme \xE9t\xE9."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Group, {
            centered: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                src: "img/ite/accueil.png",
                wrapped: true,
                ui: false
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Content, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
                  style: {
                    textAlign: 'center'
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                    children: "Les avantages de l'isolation"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Description, {
                  style: {
                    textAlign: "center",
                    backgroundColor: 'whitesmoke',
                    fontFamily: 'Times New Roman',
                    lineHeight: 1.5
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("mark", {
                      children: "Des \xE9conomies :"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 177,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 86
                  }, this), "Economisez jusqu'\xE0 30% sur vos factures ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 77
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 83
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("mark", {
                      children: "Un nouveau visage:"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 180,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 89
                  }, this), "Votre maison b\xE9n\xE9fcie d'un ravalement de fa\xE7ade", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 84
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 90
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("mark", {
                      children: "Une plus-value :"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 87
                  }, this), "Une augmentation de la valeur de votre bien", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 80
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 86
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("mark", {
                      children: "Une surface habitable inchang\xE9e :"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 186,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 104
                  }, this), "L'isolation des murs par l'ext\xE9rieur ne r\xE9duit pas la surface habitable ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 108
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 114
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("mark", {
                      children: "Une maison saine :"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 189,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 89
                  }, this), "L'isolation contribue \xE0 r\xE9duire l'humidit\xE9", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 79
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 85
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("mark", {
                      children: "Une temp\xE9rature agr\xE9able :"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 192,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                    columnNumber: 97
                  }, this), "Restez au chaud en hiver et au frais en \xE9t\xE9", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 193,
                    columnNumber: 80
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                src: "img/ecolo/ecologie.png",
                wrapped: true,
                ui: false
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Content, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
                  style: {
                    textAlign: 'center'
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                    children: "Quelles subventions pour l'isolation thermique ext\xE9rieur ?"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 201,
                    columnNumber: 82
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Description, {
                  style: {
                    textAlign: "center",
                    backgroundColor: 'whitesmoke',
                    fontFamily: 'Times New Roman',
                    lineHeight: 1.5
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 40
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("mark", {
                      children: "1 - Les certificats d'\xE9conomie d'\xE9nergie"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 206,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 206,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 206,
                    columnNumber: 111
                  }, this), "La loi pope oblige les vendeurs d'\xE9nergie de votre r\xE9gion (Total, EDF, Engie...) \xE0 acqu\xE9rir des \"certificats d'\xE9conomie d'\xE9nergie\" en finan\xE7ant les travaux d'isolation de votre foyer.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 107
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("mark", {
                      children: "2 - MaPrimR\xE9nov"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 211,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 211,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 211,
                    columnNumber: 86
                  }, this), "Une aide pour \xEAtre mieux chez vous et pour un logement mieux pour la plan\xE8te MaPrimeR\xE9nov\u2019 est la nouvelle prime d\u2019Etat qui vient simplifier les aides \xE0 la r\xE9novation \xE9nerg\xE9tique. Pr\xE8s de la moiti\xE9 des Fran\xE7ais y a droit d\xE8s 2020, avant un \xE9largissement des publics qui peuvent en b\xE9n\xE9ficier \xE0 partir de 2021.Cette nouvelle aide a pour but d\u2019am\xE9liorer la qualit\xE9 de service en acc\xE9l\xE9rant et en implifiant les d\xE9marches. D\xE9sormais, un simple dossier en ligne vous permettra de b\xE9n\xE9ficier d\u2019une aide vers\xE9e d\xE8s la fin des travaux sans attendre une r\xE9duction fiscale l\u2019ann\xE9e suivante comme auparavant.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 221,
                    columnNumber: 56
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("mark", {
                      children: "Pour avoir le droit \xE0 MaPrimeR\xE9nov, il vous faut :"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 222,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 121
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                    style: {
                      textAlign: 'left'
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: "\xEAtre propri\xE9taire d\u2019un logement construit depuis plus de 2 ans"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 224,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: "l\u2019occuper comme r\xE9sidence principale"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 225,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: "\xEAtre propri\xE9taire d\u2019un logement construit depuis plus de 2 ans"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: "l\u2019occuper comme r\xE9sidence principale"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: "ne pas d\xE9passer un plafond de ressources"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 228,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: "faire r\xE9aliser les travaux par une entreprise Reconnues Garantes de l\u2019Environnement (RGE)"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 229,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                src: "img/ecolo/france.png",
                wrapped: true,
                ui: false
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Content, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
                  style: {
                    textAlign: "center"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                    children: "R.T.S Habitat vous accompagne "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 82
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Description, {
                  style: {
                    textAlign: "center",
                    backgroundColor: 'whitesmoke',
                    fontFamily: 'Times New Roman',
                    lineHeight: 1.5
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 242,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("mark", {
                      children: "RTS sera pres de vous"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 243,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 92
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                    style: {
                      textAlign: "left"
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: "Conseils pour l'obtention des aides, primes, subventions et \xE9conomies  d'imp\xF4ts ... "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 245,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: "Prise en charge de toutes les d\xE9marches administratives"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 246,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: " Un interlocuteur unique, du d\xE9but \xE0 la fin de votre projet"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 247,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: "Des solutions de cr\xE9dit avec nos partenaires financiers"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 248,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
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

class GreatherIte extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
      greaterThan: "mobile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IndexIte, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 13
    }, this);
  }

}

class MobileIte extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
      between: ["mobile", "tablet"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IndexIte, {
        mobile: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 13
    }, this);
  }

}

class Ite extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MediaContextProvider, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GreatherIte, {
          children: this.props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MobileIte, {
          children: this.props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 287,
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

/***/ }),

/***/ "./pages/Ite.js":
/*!**********************!*\
  !*** ./pages/Ite.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ite; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _IndexIte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexIte */ "./pages/IndexIte.js");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @artsy/fresnel */ "@artsy/fresnel");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\famil\\Desktop\\emile programmation\\site_emile\\renovation\\pages\\Ite.js";



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

class GreatherIte extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
      greaterThan: "mobile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_IndexIte__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
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

class MobileIte extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Media, {
      between: ["mobile", "tablet"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_IndexIte__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

class Ite extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MediaContextProvider, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GreatherIte, {
          children: this.props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MobileIte, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Db250YWN0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL0luZGV4SXRlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL0l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9NZW51LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL01vYmlsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXJ0c3kvZnJlc25lbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtYWlsanMtY29tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYW5pbWF0ZWQtY3NzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJlbWFpbGpzIiwiTXlMYXlvdXQiLCJzdGF0ZSIsImNoaWxkcmVuIiwiQ29udGFjdCIsImUiLCJuYW1lIiwidmFsdWUiLCJzZXRTdGF0ZSIsInByb3ByaW8iLCJzYWxhcmllIiwiY2hhdWZmYWdlIiwiZmFtaWxsZSIsImZpc2NhbGl0ZSIsIm5vbSIsInByZW5vbSIsImFkcmVzc2UiLCJsb2NhbGl0ZSIsImVtYWlsIiwidGVsZXBob25lIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ1bmRlZmluZWQiLCJlcnJvclByb3ByaW8iLCJjb250ZW50IiwicG9pbnRpbmciLCJlcnJvclNhbGFyaWUiLCJlcnJvckNoYXVmZmFnZSIsImVycm9yRmFtaWxsZSIsImVycm9yRmlzY2FsaXRlIiwiYWxlcnQiLCJmaXNjYWxpdMOpIiwiZGF0YUNvbnRhY3QiLCJ0ZW1wbGF0ZVBhcmFtcyIsImZyb21fbmFtZSIsInRvX25hbWUiLCJwZW5vbSIsInRoZW4iLCJyZXN1bHQiLCJ0ZXh0IiwiZXJyb3IiLCJtb2JpbGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwicGFkZGluZ1RvcCIsImZvbnRGYW1pbHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiRHJvcGRvd24iLCJoYW5kbGVDaGFuZ2UiLCJrZXkiLCJNZWRpYUNvbnRleHRQcm92aWRlciIsIk1lZGlhIiwiY3JlYXRlTWVkaWEiLCJicmVha3BvaW50cyIsInRhYmxldCIsImNvbXB1dGVyIiwiZWNyYW4iLCJJbmRleEl0ZSIsInNoYWRvdyIsInRleHRTaGFkb3ciLCJsZXR0ZXJTcGFjaW5nIiwid29yZFNwYWNpbmciLCJsaW5lSGVpZ2h0IiwiR3JlYXRoZXJJdGUiLCJNb2JpbGVJdGUiLCJJdGUiLCJzaGFkb3cyIiwiaHRtbCIsIkRlc2t0b3BDb250YWluZXIiLCJhY3RpdmVJdGVtIiwiZml4ZWQiLCJub2RlIiwic2hvd0ZpeGVkTWVudSIsImhpZGVGaXhlZE1lbnUiLCJmb250V2VpZ2h0IiwiaGFuZGxlSXRlbUNsaWNrIiwiTW9iaWxlQ29udGFpbmVyIiwic2lkZWJhck9wZW5lZCIsIlNpZGViYXIiLCJwdXNoYWJsZSIsIk1lbnUiLCJoYW5kbGVTaWRlYmFySGlkZSIsIm1pbkhlaWdodCIsInBhZGRpbmciLCJoYW5kbGVUb2dnbGUiLCJNeU1lbnUiLCJNb2JpbGUiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUdlLE1BQU1BLE1BQU4sU0FBcUJDLDRDQUFLLENBQUNDLFNBQTNCLENBQXFDO0FBQ2hEQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNmLFVBQU1BLEtBQU47QUFFSDs7QUFFREMsUUFBTSxHQUFHO0FBQ0wsd0JBQ0k7QUFBQSw4QkFDSTtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBTSxjQUFJLEVBQUMsYUFBWDtBQUF5QixpQkFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSTtBQUFNLGNBQUksRUFBQyxRQUFYO0FBQW9CLGlCQUFPLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQUlJO0FBQU0sY0FBSSxFQUFDLFVBQVg7QUFBc0IsaUJBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBS0k7QUFBTSxtQkFBUyxFQUFDLGNBQWhCO0FBQStCLGlCQUFPLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSixlQU1JO0FBQU0sY0FBSSxFQUFDLFVBQVg7QUFBc0IsaUJBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KLGVBU0k7QUFBTSxlQUFLLE1BQVg7QUFBWSxhQUFHLEVBQUMsWUFBaEI7QUFBNkIsY0FBSSxNQUFqQztBQUFrQyxhQUFHLEVBQUMsWUFBdEM7QUFBbUQsY0FBSSxFQUFDO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEosZUFVSTtBQUFNLGFBQUcsRUFBQyxZQUFWO0FBQXVCLGNBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZKLGVBV0k7QUFBTSxhQUFHLEVBQUMsWUFBVjtBQUF1QixjQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYSixlQVlJO0FBQVEsY0FBSSxFQUFDLGlCQUFiO0FBQStCLGFBQUcsRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpKLGVBYUk7QUFBTSxhQUFHLEVBQUMsWUFBVjtBQUF1QixjQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiSixlQWVJO0FBQVEsY0FBSSxFQUFDLGlCQUFiO0FBQUEsaUNBQ0k7QUFBUSxnQkFBSSxFQUFDLGlCQUFiO0FBQUEsc0NBRVFDLGdEQUFBLENBQWEsY0FBYixDQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUF5QkkscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQTZCSDs7QUFwQytDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xwRDtBQUNBO0FBRWUsTUFBTUMsUUFBTixTQUF1Qk4sNENBQUssQ0FBQ0MsU0FBN0IsQ0FBdUM7QUFFbERDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2YsVUFBTUEsS0FBTjtBQUNBLFNBQUtJLEtBQUwsR0FBYSxFQUFiO0FBRUg7O0FBRURILFFBQU0sR0FBRztBQUNMLHdCQUNJO0FBQUEsOEJBQ0kscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUssS0FBS0QsS0FBTCxDQUFXSyxRQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQU1IOztBQWZpRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUllLE1BQU1DLE9BQU4sU0FBc0JULDRDQUFLLENBQUNDLFNBQTVCLENBQXNDO0FBQ2pEQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNmLFVBQU1BLEtBQU47O0FBRGUsMENBU0osQ0FBQ08sQ0FBRCxFQUFJO0FBQUVDLFVBQUY7QUFBUUM7QUFBUixLQUFKLEtBQXdCLEtBQUtDLFFBQUwsQ0FBYztBQUFFLE9BQUNGLElBQUQsR0FBUUM7QUFBVixLQUFkLENBVHBCOztBQUVmLFNBQUtMLEtBQUwsR0FBYTtBQUNUTyxhQUFPLEVBQUUsRUFEQTtBQUNJQyxhQUFPLEVBQUUsRUFEYjtBQUNpQkMsZUFBUyxFQUFFLEVBRDVCO0FBQ2dDQyxhQUFPLEVBQUUsRUFEekM7QUFDNkNDLGVBQVMsRUFBRSxFQUR4RDtBQUVUQyxTQUFHLEVBQUUsRUFGSTtBQUVBQyxZQUFNLEVBQUUsRUFGUjtBQUVZQyxhQUFPLEVBQUUsRUFGckI7QUFFeUJDLGNBQVEsRUFBRSxFQUZuQztBQUV1Q0MsV0FBSyxFQUFFLEVBRjlDO0FBRWtEQyxlQUFTLEVBQUU7QUFGN0QsS0FBYjtBQUlIOztBQUtEQyxjQUFZLENBQUNmLENBQUQsRUFBSTtBQUNaQSxLQUFDLENBQUNnQixjQUFGO0FBQ0EsU0FBS25CLEtBQUwsQ0FBV08sT0FBWCxLQUF1QmEsU0FBdkIsR0FBbUMsS0FBS2QsUUFBTCxDQUFjO0FBQUVlLGtCQUFZLEVBQUU7QUFBRUMsZUFBTyxFQUFFLEVBQVg7QUFBZUMsZ0JBQVEsRUFBRTtBQUF6QjtBQUFoQixLQUFkLENBQW5DLEdBQXNHLEtBQUtqQixRQUFMLENBQWM7QUFBRWUsa0JBQVksRUFBRTtBQUFoQixLQUFkLENBQXRHO0FBQ0EsU0FBS3JCLEtBQUwsQ0FBV1EsT0FBWCxLQUF1QlksU0FBdkIsR0FBbUMsS0FBS2QsUUFBTCxDQUFjO0FBQUVrQixrQkFBWSxFQUFFO0FBQUVGLGVBQU8sRUFBRSxFQUFYO0FBQWVDLGdCQUFRLEVBQUU7QUFBekI7QUFBaEIsS0FBZCxDQUFuQyxHQUFzRyxLQUFLakIsUUFBTCxDQUFjO0FBQUVrQixrQkFBWSxFQUFFO0FBQWhCLEtBQWQsQ0FBdEc7QUFDQSxTQUFLeEIsS0FBTCxDQUFXUyxTQUFYLEtBQXlCVyxTQUF6QixHQUFxQyxLQUFLZCxRQUFMLENBQWM7QUFBRW1CLG9CQUFjLEVBQUU7QUFBRUgsZUFBTyxFQUFFLEVBQVg7QUFBZUMsZ0JBQVEsRUFBRTtBQUF6QjtBQUFsQixLQUFkLENBQXJDLEdBQTBHLEtBQUtqQixRQUFMLENBQWM7QUFBRW1CLG9CQUFjLEVBQUU7QUFBbEIsS0FBZCxDQUExRztBQUNBLFNBQUt6QixLQUFMLENBQVdVLE9BQVgsS0FBdUJVLFNBQXZCLEdBQW1DLEtBQUtkLFFBQUwsQ0FBYztBQUFFb0Isa0JBQVksRUFBRTtBQUFFSixlQUFPLEVBQUUsRUFBWDtBQUFlQyxnQkFBUSxFQUFFO0FBQXpCO0FBQWhCLEtBQWQsQ0FBbkMsR0FBc0csS0FBS2pCLFFBQUwsQ0FBYztBQUFFb0Isa0JBQVksRUFBRTtBQUFoQixLQUFkLENBQXRHO0FBQ0EsU0FBSzFCLEtBQUwsQ0FBV1csU0FBWCxLQUF5QlMsU0FBekIsR0FBcUMsS0FBS2QsUUFBTCxDQUFjO0FBQUVxQixvQkFBYyxFQUFFO0FBQUVMLGVBQU8sRUFBRSxFQUFYO0FBQWVDLGdCQUFRLEVBQUU7QUFBekI7QUFBbEIsS0FBZCxDQUFyQyxHQUEwRyxLQUFLakIsUUFBTCxDQUFjO0FBQUVxQixvQkFBYyxFQUFFO0FBQWxCLEtBQWQsQ0FBMUc7QUFDQSxTQUFLM0IsS0FBTCxDQUFXTyxPQUFYLEtBQXVCYSxTQUF2QixHQUFtQ1EsS0FBSyxDQUFDLDBDQUFELENBQXhDLEdBQ0ksS0FBSzVCLEtBQUwsQ0FBV1EsT0FBWCxLQUF1QlksU0FBdkIsR0FBbUNRLEtBQUssQ0FBQyxvQ0FBRCxDQUF4QyxHQUNJLEtBQUs1QixLQUFMLENBQVdTLFNBQVgsS0FBeUJXLFNBQXpCLEdBQXFDUSxLQUFLLENBQUMsc0NBQUQsQ0FBMUMsR0FDSSxLQUFLNUIsS0FBTCxDQUFXVSxPQUFYLEtBQXVCVSxTQUF2QixHQUFtQ1EsS0FBSyxDQUFDLGlDQUFELENBQXhDLEdBQ0ksS0FBSzVCLEtBQUwsQ0FBVzZCLFNBQVgsS0FBeUJULFNBQXpCLEdBQXFDUSxLQUFLLENBQUMsa0NBQUQsQ0FBMUMsR0FBZ0YsS0FBS0UsV0FBTCxFQUpoRztBQUtIOztBQUVEQSxhQUFXLEdBQUc7QUFDVixVQUFNO0FBQUV2QixhQUFGO0FBQVdDLGFBQVg7QUFBb0JDLGVBQXBCO0FBQStCQyxhQUEvQjtBQUF3Q0MsZUFBeEM7QUFDRkMsU0FERTtBQUNHQyxZQURIO0FBQ1dDLGFBRFg7QUFDb0JDLGNBRHBCO0FBQzhCQyxXQUQ5QjtBQUNxQ0M7QUFEckMsUUFDbUQsS0FBS2pCLEtBRDlEO0FBR0EsUUFBSStCLGNBQWMsR0FBRztBQUNqQkMsZUFBUyxFQUFFaEIsS0FETTtBQUVqQmlCLGFBQU8sRUFBRXJCLEdBRlE7QUFHakJMLGFBQU8sRUFBRUEsT0FIUTtBQUlqQkMsYUFBTyxFQUFFQSxPQUpRO0FBS2pCQyxlQUFTLEVBQUVBLFNBTE07QUFNakJDLGFBQU8sRUFBRUEsT0FOUTtBQU9qQkMsZUFBUyxFQUFFQSxTQVBNO0FBUWpCRyxhQUFPLEVBQUVBLE9BUlE7QUFTakJDLGNBQVEsRUFBRUEsUUFUTztBQVVqQkMsV0FBSyxFQUFFQSxLQVZVO0FBV2pCQyxlQUFTLEVBQUVBLFNBWE07QUFZakJpQixXQUFLLEVBQUVyQjtBQVpVLEtBQXJCO0FBZUFmLG9EQUFBLENBQWEsVUFBYixFQUF5QixhQUF6QixFQUF3Q2lDLGNBQXhDLEVBQXdELDRCQUF4RCxFQUNLSSxJQURMLENBQ1dDLE1BQUQsSUFBWTtBQUNkUixXQUFLLENBQUNRLE1BQU0sQ0FBQ0MsSUFBUixDQUFMO0FBQ0gsS0FITCxFQUdRQyxLQUFELElBQVc7QUFDVlYsV0FBSyxDQUFDVSxLQUFLLENBQUNELElBQVAsQ0FBTDtBQUNILEtBTEw7QUFNQSxTQUFLckMsS0FBTCxDQUFXTyxPQUFYLEtBQXVCLEVBQXZCLEVBQTJCLEtBQUtQLEtBQUwsQ0FBV1EsT0FBWCxLQUF1QixFQUFsRCxFQUFzRCxLQUFLUixLQUFMLENBQVdTLFNBQVgsS0FBeUIsRUFBL0UsRUFBbUYsS0FBS1QsS0FBTCxDQUFXVSxPQUFYLEtBQXVCLEVBQTFHO0FBQ0EsU0FBS1YsS0FBTCxDQUFXVyxTQUFYLEtBQXlCLEVBQXpCO0FBQ0EsU0FBS1gsS0FBTCxDQUFXWSxHQUFYLEdBQWlCLEVBQWpCLEVBQXFCLEtBQUtaLEtBQUwsQ0FBV2EsTUFBWCxHQUFvQixFQUF6QyxFQUE2QyxLQUFLYixLQUFMLENBQVdjLE9BQVgsR0FBcUIsRUFBbEUsRUFBc0UsS0FBS2QsS0FBTCxDQUFXZSxRQUFYLEdBQXNCLEVBQTVGLEVBQWdHLEtBQUtmLEtBQUwsQ0FBV2dCLEtBQVgsR0FBbUIsRUFBbkgsRUFDQSxLQUFLaEIsS0FBTCxDQUFXaUIsU0FBWCxHQUF1QixFQUR2QjtBQUVIOztBQUVEcEIsUUFBTSxHQUFHO0FBQ0wsVUFBTTtBQUFFSTtBQUFGLFFBQWUsS0FBS0wsS0FBMUI7QUFDQSxVQUFNO0FBQUUyQztBQUFGLFFBQWEsS0FBSzNDLEtBQXhCO0FBQ0FNLFdBQU8sQ0FBQ3NDLFNBQVIsR0FBb0I7QUFDaEJELFlBQU0sRUFBRUUsaURBQVMsQ0FBQ0M7QUFERixLQUFwQjtBQUdBLHdCQUVJLHFFQUFDLHNEQUFELENBQU0sTUFBTjtBQUFhLGFBQU8sRUFBQyxPQUFyQjtBQUE2QixXQUFLLEVBQUUsQ0FBcEM7QUFBdUMsV0FBSyxFQUFFO0FBQUVDLGtCQUFVLEVBQUVKLE1BQU0sR0FBRyxFQUFILEdBQVEsRUFBNUI7QUFBZ0NLLGtCQUFVLEVBQUUsZUFBNUM7QUFBNkRDLHVCQUFlLEVBQUU7QUFBOUUsT0FBOUM7QUFBQSw4SUFFdUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZ2Qix1R0FJSTtBQUFHLGFBQUssRUFBRTtBQUFFQyxlQUFLLEVBQUU7QUFBVCxTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFLSTtBQUFHLGFBQUssRUFBRTtBQUFFRixvQkFBVSxFQUFFLGVBQWQ7QUFBK0JFLGVBQUssRUFBRSxPQUF0QztBQUErQ0Msa0JBQVEsRUFBRVIsTUFBTSxHQUFHLEVBQUgsR0FBUSxFQUF2RTtBQUEyRVMsbUJBQVMsRUFBRTtBQUF0RixTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosZUFRSSxxRUFBQyxzREFBRDtBQUFNLGdCQUFRLEVBQUU3QyxDQUFDLElBQUksS0FBS2UsWUFBTCxDQUFrQmYsQ0FBbEIsQ0FBckI7QUFBQSxnQ0FDSSxxRUFBQyxzREFBRCxDQUFNLEtBQU47QUFDSSxlQUFLLEVBQUUsS0FBS0gsS0FBTCxDQUFXcUIsWUFEdEI7QUFFSSxrQkFBUSxNQUZaO0FBR0ksZUFBSyxFQUFDLFdBSFY7QUFJSSxxQkFBVyxFQUFDLE1BSmhCO0FBS0ksZUFBSyxNQUxUO0FBTUksaUJBQU8sRUFBRWQsT0FOYjtBQU9JLGlCQUFPLEVBQUUwQywwREFQYjtBQVFJLGNBQUksRUFBQyxTQVJUO0FBU0ksa0JBQVEsRUFBRSxLQUFLQztBQVRuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBY0kscUVBQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQ0ksZUFBSyxFQUFFLEtBQUtsRCxLQUFMLENBQVd3QixZQUR0QjtBQUVJLGtCQUFRLE1BRlo7QUFHSSxlQUFLLEVBQUMsMkJBSFY7QUFJSSxxQkFBVyxFQUFDLE1BSmhCO0FBS0ksZUFBSyxNQUxUO0FBTUksaUJBQU8sRUFBRWhCLE9BTmI7QUFPSSxpQkFBTyxFQUFFeUMsMERBUGI7QUFRSSxjQUFJLEVBQUMsU0FSVDtBQVNJLGtCQUFRLEVBQUUsS0FBS0M7QUFUbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkSixlQTBCSSxxRUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxtQkFBUyxNQUFyQjtBQUNJLGVBQUssRUFBRSxLQUFLbEQsS0FBTCxDQUFXeUIsY0FEdEI7QUFFSSxrQkFBUSxNQUZaO0FBR0ksZUFBSyxFQUFDLHlCQUhWO0FBSUkscUJBQVcsRUFBQyxNQUpoQjtBQUtJLGVBQUssTUFMVDtBQU1JLGlCQUFPLEVBQUVoQixTQU5iO0FBT0ksaUJBQU8sRUFBRXdDLDBEQVBiO0FBUUksY0FBSSxFQUFDLFdBUlQ7QUFTSSxrQkFBUSxFQUFFLEtBQUtDO0FBVG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBMUJKLGVBc0NJLHFFQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLG1CQUFTLE1BQXJCO0FBQ0ksZUFBSyxFQUFFLEtBQUtsRCxLQUFMLENBQVcwQixZQUR0QjtBQUVJLGtCQUFRLE1BRlo7QUFHSSxlQUFLLEVBQUMseUNBSFY7QUFJSSxxQkFBVyxFQUFDLE1BSmhCO0FBS0ksZUFBSyxNQUxUO0FBTUksaUJBQU8sRUFBRWhCLE9BTmI7QUFPSSxpQkFBTyxFQUFFdUMsMERBUGI7QUFRSSxjQUFJLEVBQUMsU0FSVDtBQVNJLGtCQUFRLEVBQUUsS0FBS0M7QUFUbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0Q0osZUFrREkscUVBQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQVksbUJBQVMsTUFBckI7QUFDSSxlQUFLLEVBQUUsS0FBS2xELEtBQUwsQ0FBVzJCLGNBRHRCO0FBRUksa0JBQVEsTUFGWjtBQUdJLGVBQUssRUFBQyxrREFIVjtBQUlJLHFCQUFXLEVBQUMsTUFKaEI7QUFLSSxlQUFLLE1BTFQ7QUFNSSxpQkFBTyxFQUFFaEIsU0FOYjtBQU9JLGlCQUFPLEVBQUVzQywwREFQYjtBQVFJLGNBQUksRUFBQyxXQVJUO0FBU0ksa0JBQVEsRUFBRSxLQUFLQztBQVRuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxESixlQThESSxxRUFBQyxzREFBRCxDQUFNLEtBQU47QUFBQSxrQ0FDSSxxRUFBQyxzREFBRCxDQUFNLEtBQU47QUFDSSxvQkFBUSxNQURaO0FBRUksaUJBQUssRUFBQyxLQUZWO0FBR0ksdUJBQVcsRUFBQyxLQUhoQjtBQUlJLGlCQUFLLEVBQUUsQ0FKWDtBQUtJLGdCQUFJLEVBQUMsS0FMVDtBQU1JLGlCQUFLLEVBQUUsS0FBS2xELEtBQUwsQ0FBV1ksR0FOdEI7QUFPSSxvQkFBUSxFQUFFLEtBQUtzQztBQVBuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBVUkscUVBQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQ0ksZ0JBQUksRUFBQyxNQURUO0FBRUksd0JBQVksRUFBQyxNQUZqQjtBQUdJLG9CQUFRLE1BSFo7QUFJSSxpQkFBSyxFQUFDLFdBSlY7QUFLSSx1QkFBVyxFQUFDLFdBTGhCO0FBTUksaUJBQUssRUFBRSxDQU5YO0FBT0ksZ0JBQUksRUFBQyxRQVBUO0FBUUksaUJBQUssRUFBRSxLQUFLbEQsS0FBTCxDQUFXYSxNQVJ0QjtBQVNJLG9CQUFRLEVBQUUsS0FBS3FDO0FBVG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlESixlQXFGSSxxRUFBQyxzREFBRCxDQUFNLEtBQU47QUFBQSxrQ0FDSSxxRUFBQyxzREFBRCxDQUFNLEtBQU47QUFDSSxvQkFBUSxNQURaO0FBRUksZ0JBQUksRUFBQyxRQUZUO0FBR0ksd0JBQVksRUFBQyxNQUhqQjtBQUlJLGlCQUFLLEVBQUMsU0FKVjtBQUtJLHVCQUFXLEVBQUMsU0FMaEI7QUFNSSxpQkFBSyxFQUFFLENBTlg7QUFPSSxnQkFBSSxFQUFDLFNBUFQ7QUFRSSxpQkFBSyxFQUFFLEtBQUtsRCxLQUFMLENBQVdjLE9BUnRCO0FBU0ksb0JBQVEsRUFBRSxLQUFLb0M7QUFUbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQVlJLHFFQUFDLHNEQUFELENBQU0sS0FBTjtBQUNJLG9CQUFRLE1BRFo7QUFFSSxpQkFBSyxFQUFDLGFBRlY7QUFHSSx1QkFBVyxFQUFDLGFBSGhCO0FBSUksaUJBQUssRUFBRSxDQUpYO0FBS0ksZ0JBQUksRUFBQyxVQUxUO0FBTUksaUJBQUssRUFBRSxLQUFLbEQsS0FBTCxDQUFXZSxRQU50QjtBQU9JLG9CQUFRLEVBQUUsS0FBS21DO0FBUG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJGSixlQTJHSSxxRUFBQyxzREFBRCxDQUFNLEtBQU47QUFBQSxrQ0FDSSxxRUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxnQkFBSSxFQUFDLE9BQWpCO0FBQ0ksb0JBQVEsTUFEWjtBQUVJLGlCQUFLLEVBQUMsT0FGVjtBQUdJLHVCQUFXLEVBQUMsbUJBSGhCO0FBSUksaUJBQUssRUFBRSxDQUpYO0FBS0ksZ0JBQUksRUFBQyxPQUxUO0FBTUksaUJBQUssRUFBRSxLQUFLbEQsS0FBTCxDQUFXZ0IsS0FOdEI7QUFPSSxvQkFBUSxFQUFFLEtBQUtrQztBQVBuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBVUkscUVBQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQ0ksb0JBQVEsTUFEWjtBQUVJLGlCQUFLLEVBQUMsV0FGVjtBQUdJLHVCQUFXLEVBQUMsWUFIaEI7QUFJSSxpQkFBSyxFQUFFLENBSlg7QUFLSSxnQkFBSSxFQUFDLFdBTFQ7QUFNSSxpQkFBSyxFQUFFLEtBQUtsRCxLQUFMLENBQVdpQixTQU50QjtBQU9JLG9CQUFRLEVBQUUsS0FBS2lDO0FBUG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTNHSixlQThIaUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE5SGpCLGVBOEh1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlIdkIsZUErSEkscUVBQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQUEsaUNBQ0kscUVBQUMsMERBQUQ7QUFBVSxpQkFBSyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9ISixlQWlJaUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqSWpCLGVBaUl1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpJdkIsZUFrSUkscUVBQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsZUFBSyxNQUFsQjtBQUFtQixjQUFJLEVBQUMsUUFBeEI7QUFBaUMsZUFBSyxFQUFDLE9BQXZDO0FBQStDLGVBQUssRUFBRTtBQUNsREgsb0JBQVEsRUFBRVIsTUFBTSxHQUFHLEVBQUgsR0FBUTtBQUQwQixXQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsSUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFxSkg7O0FBcE5nRDtBQXNOckQsTUFBTWhDLE9BQU8sR0FBRyxDQUVaO0FBQ0k0QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsY0FGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FGWSxFQVFaO0FBQ0k4QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsV0FGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FSWSxDQUFoQjtBQWdCQSxNQUFNRyxPQUFPLEdBQUcsQ0FDWjtBQUNJMkMsS0FBRyxFQUFFLEdBRFQ7QUFFSWQsTUFBSSxFQUFFLGdCQUZWO0FBR0loQyxPQUFLLEVBQUU7QUFIWCxDQURZLEVBTVo7QUFDSThDLEtBQUcsRUFBRSxHQURUO0FBRUlkLE1BQUksRUFBRSxlQUZWO0FBR0loQyxPQUFLLEVBQUU7QUFIWCxDQU5ZLEVBV1o7QUFDSThDLEtBQUcsRUFBRSxHQURUO0FBRUlkLE1BQUksRUFBRSxrQkFGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FYWSxFQWdCWjtBQUNJOEMsS0FBRyxFQUFFLEdBRFQ7QUFFSWQsTUFBSSxFQUFFLGFBRlY7QUFHSWhDLE9BQUssRUFBRTtBQUhYLENBaEJZLENBQWhCO0FBdUJBLE1BQU1JLFNBQVMsR0FBRyxDQUNkO0FBQ0kwQyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsWUFGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FEYyxFQU1kO0FBQ0k4QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsT0FGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FOYyxFQVdkO0FBQ0k4QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsS0FGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FYYyxFQWdCZDtBQUNJOEMsS0FBRyxFQUFFLEdBRFQ7QUFFSWQsTUFBSSxFQUFFLE9BRlY7QUFHSWhDLE9BQUssRUFBRTtBQUhYLENBaEJjLENBQWxCO0FBc0JBLE1BQU1LLE9BQU8sR0FBRyxDQUNaO0FBQ0l5QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsR0FGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FEWSxFQU1aO0FBQ0k4QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsR0FGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FOWSxFQVdaO0FBQ0k4QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsR0FGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FYWSxFQWdCWjtBQUNJOEMsS0FBRyxFQUFFLEdBRFQ7QUFFSWQsTUFBSSxFQUFFLEdBRlY7QUFHSWhDLE9BQUssRUFBRTtBQUhYLENBaEJZLEVBcUJaO0FBQ0k4QyxLQUFHLEVBQUUsV0FEVDtBQUVJZCxNQUFJLEVBQUUsV0FGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FyQlksQ0FBaEI7QUEyQkEsTUFBTU0sU0FBUyxHQUFHLENBQ2Q7QUFDSXdDLEtBQUcsRUFBRSxHQURUO0FBRUlkLE1BQUksRUFBRSxnQkFGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FEYyxFQU1kO0FBQ0k4QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsb0JBRlY7QUFHSWhDLE9BQUssRUFBRTtBQUhYLENBTmMsRUFXZDtBQUNJOEMsS0FBRyxFQUFFLEdBRFQ7QUFFSWQsTUFBSSxFQUFFLG9CQUZWO0FBR0loQyxPQUFLLEVBQUU7QUFIWCxDQVhjLEVBZ0JkO0FBQ0k4QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsb0JBRlY7QUFHSWhDLE9BQUssRUFBRTtBQUhYLENBaEJjLEVBcUJkO0FBQ0k4QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsb0JBRlY7QUFHSWhDLE9BQUssRUFBRTtBQUhYLENBckJjLEVBMEJkO0FBQ0k4QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsY0FGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0ExQmMsQ0FBbEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNO0FBQUUrQyxzQkFBRjtBQUF3QkM7QUFBeEIsSUFBa0NDLGtFQUFXLENBQUM7QUFDaERDLGFBQVcsRUFBRTtBQUNUaEIsVUFBTSxFQUFFLENBREM7QUFFVGlCLFVBQU0sRUFBRSxHQUZDO0FBR1RDLFlBQVEsRUFBRSxJQUhEO0FBSVRDLFNBQUssRUFBRTtBQUpFO0FBRG1DLENBQUQsQ0FBbkQ7O0FBVUEsTUFBTUMsUUFBTixTQUF1QmxFLDRDQUFLLENBQUNDLFNBQTdCLENBQXVDO0FBQ25DQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNmLFVBQU1BLEtBQU47O0FBRGUsMENBU0osQ0FBQ08sQ0FBRCxFQUFJO0FBQUVDLFVBQUY7QUFBUUM7QUFBUixLQUFKLEtBQXdCLEtBQUtDLFFBQUwsQ0FBYztBQUFFLE9BQUNGLElBQUQsR0FBUUM7QUFBVixLQUFkLENBVHBCOztBQUVmLFNBQUtMLEtBQUwsR0FBYTtBQUNUTyxhQUFPLEVBQUUsRUFEQTtBQUNJQyxhQUFPLEVBQUUsRUFEYjtBQUNpQkMsZUFBUyxFQUFFLEVBRDVCO0FBQ2dDQyxhQUFPLEVBQUUsRUFEekM7QUFDNkNDLGVBQVMsRUFBRSxFQUR4RDtBQUVUQyxTQUFHLEVBQUUsRUFGSTtBQUVBQyxZQUFNLEVBQUUsRUFGUjtBQUVZQyxhQUFPLEVBQUUsRUFGckI7QUFFeUJDLGNBQVEsRUFBRSxFQUZuQztBQUV1Q0MsV0FBSyxFQUFFLEVBRjlDO0FBRWtEQyxlQUFTLEVBQUU7QUFGN0QsS0FBYjtBQUlBLFNBQUtqQixLQUFMLEdBQWEsRUFBYjtBQUNIOztBQUlEa0IsY0FBWSxDQUFDZixDQUFELEVBQUk7QUFDWkEsS0FBQyxDQUFDZ0IsY0FBRjtBQUNBLFNBQUtuQixLQUFMLENBQVdPLE9BQVgsS0FBdUIsRUFBdkIsR0FBNEIsS0FBS0QsUUFBTCxDQUFjO0FBQUVlLGtCQUFZLEVBQUU7QUFBRUMsZUFBTyxFQUFFLEVBQVg7QUFBZUMsZ0JBQVEsRUFBRTtBQUF6QjtBQUFoQixLQUFkLENBQTVCLEdBQStGLEtBQUtqQixRQUFMLENBQWM7QUFBRWUsa0JBQVksRUFBRTtBQUFoQixLQUFkLENBQS9GO0FBQ0EsU0FBS3JCLEtBQUwsQ0FBV1EsT0FBWCxLQUF1QixFQUF2QixHQUE0QixLQUFLRixRQUFMLENBQWM7QUFBRWtCLGtCQUFZLEVBQUU7QUFBRUYsZUFBTyxFQUFFLEVBQVg7QUFBZUMsZ0JBQVEsRUFBRTtBQUF6QjtBQUFoQixLQUFkLENBQTVCLEdBQStGLEtBQUtqQixRQUFMLENBQWM7QUFBRWtCLGtCQUFZLEVBQUU7QUFBaEIsS0FBZCxDQUEvRjtBQUNBLFNBQUt4QixLQUFMLENBQVdTLFNBQVgsS0FBeUIsRUFBekIsR0FBOEIsS0FBS0gsUUFBTCxDQUFjO0FBQUVtQixvQkFBYyxFQUFFO0FBQUVILGVBQU8sRUFBRSxFQUFYO0FBQWVDLGdCQUFRLEVBQUU7QUFBekI7QUFBbEIsS0FBZCxDQUE5QixHQUFtRyxLQUFLakIsUUFBTCxDQUFjO0FBQUVtQixvQkFBYyxFQUFFO0FBQWxCLEtBQWQsQ0FBbkc7QUFDQSxTQUFLekIsS0FBTCxDQUFXVSxPQUFYLEtBQXVCLEVBQXZCLEdBQTRCLEtBQUtKLFFBQUwsQ0FBYztBQUFFb0Isa0JBQVksRUFBRTtBQUFFSixlQUFPLEVBQUUsRUFBWDtBQUFlQyxnQkFBUSxFQUFFO0FBQXpCO0FBQWhCLEtBQWQsQ0FBNUIsR0FBK0YsS0FBS2pCLFFBQUwsQ0FBYztBQUFFb0Isa0JBQVksRUFBRTtBQUFoQixLQUFkLENBQS9GO0FBQ0EsU0FBSzFCLEtBQUwsQ0FBV1csU0FBWCxLQUF5QixFQUF6QixHQUE4QixLQUFLTCxRQUFMLENBQWM7QUFBRXFCLG9CQUFjLEVBQUU7QUFBRUwsZUFBTyxFQUFFLEVBQVg7QUFBZUMsZ0JBQVEsRUFBRTtBQUF6QjtBQUFsQixLQUFkLENBQTlCLEdBQW1HLEtBQUtqQixRQUFMLENBQWM7QUFBRXFCLG9CQUFjLEVBQUU7QUFBbEIsS0FBZCxDQUFuRztBQUNBLFNBQUszQixLQUFMLENBQVdPLE9BQVgsS0FBdUIsRUFBdkIsR0FBNEJxQixLQUFLLENBQUMsdUJBQUQsQ0FBakMsR0FDSSxLQUFLNUIsS0FBTCxDQUFXUSxPQUFYLEtBQXVCLEVBQXZCLEdBQTRCb0IsS0FBSyxDQUFDLHVCQUFELENBQWpDLEdBQ0ksS0FBSzVCLEtBQUwsQ0FBV1MsU0FBWCxLQUF5QixFQUF6QixHQUE4Qm1CLEtBQUssQ0FBQyx1QkFBRCxDQUFuQyxHQUNJLEtBQUs1QixLQUFMLENBQVdVLE9BQVgsS0FBdUIsRUFBdkIsR0FBNEJrQixLQUFLLENBQUMsdUJBQUQsQ0FBakMsR0FDSSxLQUFLNUIsS0FBTCxDQUFXNkIsU0FBWCxLQUF5QixFQUF6QixHQUE4QkQsS0FBSyxDQUFDLHVCQUFELENBQW5DLEdBQStELEtBQUtFLFdBQUwsRUFKL0U7QUFLSDs7QUFFREEsYUFBVyxHQUFHO0FBQ1YsVUFBTTtBQUFFdkIsYUFBRjtBQUFXQyxhQUFYO0FBQW9CQyxlQUFwQjtBQUErQkMsYUFBL0I7QUFBd0NDLGVBQXhDO0FBQ0ZDLFNBREU7QUFDR0MsWUFESDtBQUNXQyxhQURYO0FBQ29CQyxjQURwQjtBQUM4QkMsV0FEOUI7QUFDcUNDO0FBRHJDLFFBQ21ELEtBQUtqQixLQUQ5RDtBQUdBLFFBQUkrQixjQUFjLEdBQUc7QUFDakJDLGVBQVMsRUFBRWhCLEtBRE07QUFFakJpQixhQUFPLEVBQUVyQixHQUZRO0FBR2pCTCxhQUFPLEVBQUVBLE9BSFE7QUFJakJDLGFBQU8sRUFBRUEsT0FKUTtBQUtqQkMsZUFBUyxFQUFFQSxTQUxNO0FBTWpCQyxhQUFPLEVBQUVBLE9BTlE7QUFPakJDLGVBQVMsRUFBRUEsU0FQTTtBQVFqQkcsYUFBTyxFQUFFQSxPQVJRO0FBU2pCQyxjQUFRLEVBQUVBLFFBVE87QUFVakJDLFdBQUssRUFBRUEsS0FWVTtBQVdqQkMsZUFBUyxFQUFFQSxTQVhNO0FBWWpCaUIsV0FBSyxFQUFFckI7QUFaVSxLQUFyQjtBQWVBZixvREFBQSxDQUFhLFVBQWIsRUFBeUIsYUFBekIsRUFBd0NpQyxjQUF4QyxFQUF3RCw0QkFBeEQsRUFDS0ksSUFETCxDQUNXQyxNQUFELElBQVk7QUFDZFIsV0FBSyxDQUFDUSxNQUFNLENBQUNDLElBQVIsQ0FBTDtBQUNILEtBSEwsRUFHUUMsS0FBRCxJQUFXO0FBQ1ZWLFdBQUssQ0FBQ1UsS0FBSyxDQUFDRCxJQUFQLENBQUw7QUFDSCxLQUxMO0FBTUEsU0FBS3JDLEtBQUwsQ0FBV08sT0FBWCxLQUF1QixFQUF2QixFQUEyQixLQUFLUCxLQUFMLENBQVdRLE9BQVgsS0FBdUIsRUFBbEQsRUFBc0QsS0FBS1IsS0FBTCxDQUFXUyxTQUFYLEtBQXlCLEVBQS9FLEVBQW1GLEtBQUtULEtBQUwsQ0FBV1UsT0FBWCxLQUF1QixFQUExRztBQUNBLFNBQUtWLEtBQUwsQ0FBV1csU0FBWCxLQUF5QixFQUF6QjtBQUNBLFNBQUtYLEtBQUwsQ0FBV1ksR0FBWCxHQUFpQixFQUFqQixFQUFxQixLQUFLWixLQUFMLENBQVdhLE1BQVgsR0FBb0IsRUFBekMsRUFBNkMsS0FBS2IsS0FBTCxDQUFXYyxPQUFYLEdBQXFCLEVBQWxFLEVBQXNFLEtBQUtkLEtBQUwsQ0FBV2UsUUFBWCxHQUFzQixFQUE1RixFQUFnRyxLQUFLZixLQUFMLENBQVdnQixLQUFYLEdBQW1CLEVBQW5ILEVBQ0ksS0FBS2hCLEtBQUwsQ0FBV2lCLFNBQVgsR0FBdUIsRUFEM0I7QUFFSDs7QUFFRHBCLFFBQU0sR0FBRztBQUNMLFVBQU07QUFBRUk7QUFBRixRQUFlLEtBQUtMLEtBQTFCO0FBQ0EsVUFBTTtBQUFFMkM7QUFBRixRQUFhLEtBQUszQyxLQUF4QjtBQUNBLFVBQU1nRSxNQUFNLEdBQUc7QUFDWGQsV0FBSyxFQUFFLFlBREk7QUFFWGUsZ0JBQVUsRUFBRSxzREFGRDtBQUdYYixlQUFTLEVBQUUsUUFIQTtBQUlYSixnQkFBVSxFQUFFLFNBSkQ7QUFLWEcsY0FBUSxFQUFFUixNQUFNLEdBQUcsRUFBSCxHQUFRO0FBTGIsS0FBZjtBQVFBLHdCQUNJLHFFQUFDLDREQUFEO0FBQUEsNkJBQ0kscUVBQUMsMkRBQUQ7QUFBVyxhQUFLLE1BQWhCO0FBQUEsZ0NBQ0kscUVBQUMseURBQUQ7QUFBUyxrQkFBUSxNQUFqQjtBQUFrQixlQUFLLE1BQXZCO0FBQUEsaUNBQ0kscUVBQUMsc0RBQUQ7QUFBTSxxQkFBUyxNQUFmO0FBQWdCLHFCQUFTLE1BQXpCO0FBQTBCLHlCQUFhLEVBQUMsUUFBeEM7QUFBQSxtQ0FDSSxxRUFBQyxzREFBRCxDQUFNLEdBQU47QUFBQSxzQ0FDSSxxRUFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSx1QkFBTyxFQUFDLE1BQXJCO0FBQTRCLHFCQUFLLEVBQUUsQ0FBbkM7QUFBQSx3Q0FDSTtBQUFHLHVCQUFLLEVBQUU7QUFDTkssOEJBQVUsRUFBRSxlQUROO0FBRU5FLHlCQUFLLEVBQUUsWUFGRDtBQUdORSw2QkFBUyxFQUFFLFFBSEw7QUFJTkQsNEJBQVEsRUFBRVIsTUFBTSxHQUFHLEVBQUgsR0FBUSxFQUpsQjtBQUtOc0IsOEJBQVUsRUFBRSxzREFMTjtBQU1OQyxpQ0FBYSxFQUFFO0FBTlQsbUJBQVY7QUFBQSwrSUFTNkMscUVBQUMsdURBQUQ7QUFBTyx1QkFBRyxFQUFDLHVCQUFYO0FBQW1DLDRCQUFRLE1BQTNDO0FBQTRDLHdCQUFJLEVBQUMsT0FBakQ7QUFBeUQsMEJBQU07QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFUN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBWUkscUVBQUMsdURBQUQ7QUFDSSw2QkFBVyxFQUFDLE1BRGhCO0FBRUksb0JBQUUsRUFBQyxhQUZQO0FBR0ksNkJBQVcsRUFBQywrQkFIaEI7QUFJSSx3QkFBTSxFQUFDO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFaSixlQW1CSTtBQUFJLHVCQUFLLEVBQUU7QUFDUGxCLDhCQUFVLEVBQUUsU0FETDtBQUVQSSw2QkFBUyxFQUFFLFFBRko7QUFFY0YseUJBQUssRUFBRSxPQUZyQjtBQUdQQyw0QkFBUSxFQUFFUixNQUFNLEdBQUcsRUFBSCxHQUFRO0FBSGpCLG1CQUFYO0FBQUEseUNBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQW5CSixlQTBCSSxxRUFBQyxzREFBRDtBQUFBLDBDQUNJLHFFQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLHVCQUFHLEVBQUMsdUJBQWhCO0FBQXdDLHVCQUFHLEVBQUMsU0FBNUM7QUFBc0Qsd0JBQUksRUFBQztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLGVBRUkscUVBQUMsc0RBQUQsQ0FBTSxPQUFOO0FBQWMsaUNBQWEsRUFBQyxRQUE1QjtBQUFBLDJDQUNJLHFFQUFDLHNEQUFELENBQU0sTUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQTFCSixlQWdDSSxxRUFBQyxzREFBRDtBQUFBLDBDQUNJLHFFQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLHdCQUFJLEVBQUMsTUFBakI7QUFBd0IsdUJBQUcsRUFBQyx5QkFBNUI7QUFBc0QsdUJBQUcsRUFBQztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLGVBRUkscUVBQUMsc0RBQUQsQ0FBTSxPQUFOO0FBQWMsaUNBQWEsRUFBQyxRQUE1QjtBQUFBLDJDQUNJLHFFQUFDLHNEQUFELENBQU0sTUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWhDSixlQXNDSSxxRUFBQyxzREFBRDtBQUFBLDBDQUNJLHFFQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLHdCQUFJLEVBQUMsTUFBakI7QUFBd0IsdUJBQUcsRUFBQyx1QkFBNUI7QUFBb0QsdUJBQUcsRUFBQztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLGVBRUkscUVBQUMsc0RBQUQsQ0FBTSxPQUFOO0FBQWMsaUNBQWEsRUFBQyxRQUE1QjtBQUFBLDJDQUNJLHFFQUFDLHNEQUFELENBQU0sTUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXRDSixlQTRDSSxxRUFBQyxzREFBRDtBQUFBLDBDQUNJLHFFQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLHdCQUFJLEVBQUMsTUFBakI7QUFBd0IsdUJBQUcsRUFBQyw0QkFBNUI7QUFBeUQsdUJBQUcsRUFBQztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLGVBRUkscUVBQUMsc0RBQUQsQ0FBTSxPQUFOO0FBQWMsaUNBQWEsRUFBQyxRQUE1QjtBQUFBLDJDQUNJLHFFQUFDLHNEQUFELENBQU0sTUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQTVDSixlQWlEVztBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWpEWCxlQWtESSxxRUFBQyxzREFBRDtBQUFBLDBDQUNJLHFFQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLHdCQUFJLEVBQUMsT0FBakI7QUFBeUIsdUJBQUcsRUFBQyx1QkFBN0I7QUFBcUQsdUJBQUcsRUFBQztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLGVBRUkscUVBQUMsc0RBQUQsQ0FBTSxPQUFOO0FBQWMsaUNBQWEsRUFBQyxRQUE1QjtBQUFBLDJDQUNJLHFFQUFDLHNEQUFELENBQU0sTUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWxESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUEyREkscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkEzREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFrRUkscUVBQUMseURBQUQ7QUFBQSxpQ0FFSTtBQUFBLG9DQUNJO0FBQVEsbUJBQUssRUFBRXFCLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFDa0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEbEUsZUFFSTtBQUFHLG1CQUFLLEVBQUU7QUFBRUcsMkJBQVcsRUFBRTtBQUFmLGVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsRUosZUErRUkscUVBQUMseURBQUQ7QUFBQSxpQ0FDSSxxRUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxvQkFBUSxNQUFwQjtBQUFBLG9DQUNJLHFFQUFDLHNEQUFEO0FBQUEsc0NBQ0kscUVBQUMsdURBQUQ7QUFBTyxtQkFBRyxFQUFDLHFCQUFYO0FBQWlDLHVCQUFPLE1BQXhDO0FBQXlDLGtCQUFFLEVBQUU7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUVJLHFFQUFDLHNEQUFELENBQU0sT0FBTjtBQUFBLHdDQUNJLHFFQUFDLHNEQUFELENBQU0sTUFBTjtBQUNJLHVCQUFLLEVBQUU7QUFBRWYsNkJBQVMsRUFBRTtBQUFiLG1CQURYO0FBQUEseUNBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBS0kscUVBQUMsc0RBQUQsQ0FBTSxXQUFOO0FBQWtCLHVCQUFLLEVBQUU7QUFBRUEsNkJBQVMsRUFBRSxRQUFiO0FBQXVCSCxtQ0FBZSxFQUFFLFlBQXhDO0FBQXNERCw4QkFBVSxFQUFFLGlCQUFsRTtBQUFxRm9CLDhCQUFVLEVBQUU7QUFBakcsbUJBQXpCO0FBQUEsMENBQ0k7QUFBQSwyQ0FBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosZUFDaUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFEakQsOERBRXdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRnhDLGVBRThDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRjlDLGVBSUk7QUFBQSwyQ0FBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSkosZUFJb0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKcEQsMkVBSytDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTC9DLGVBS3FEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTHJELGVBT0k7QUFBQSwyQ0FBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBUEosZUFPa0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFQbEQsOERBUTJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBUjNDLGVBUWlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBUmpELGVBVUk7QUFBQSwyQ0FBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBVkosZUFVbUU7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFWbkUsaUdBV3VFO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBWHZFLGVBVzZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBWDdFLGVBYUk7QUFBQSwyQ0FBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBYkosZUFhb0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFicEQsc0VBYzBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBZDFDLGVBY2dEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBZGhELGVBZ0JJO0FBQUEsMkNBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQWhCSixlQWdCNEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFoQjVELG9FQWlCMkM7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFqQjNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBOEJJLHFFQUFDLHNEQUFEO0FBQUEsc0NBQ0kscUVBQUMsdURBQUQ7QUFBTyxtQkFBRyxFQUFDLHdCQUFYO0FBQW9DLHVCQUFPLE1BQTNDO0FBQTRDLGtCQUFFLEVBQUU7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUVJLHFFQUFDLHNEQUFELENBQU0sT0FBTjtBQUFBLHdDQUNJLHFFQUFDLHNEQUFELENBQU0sTUFBTjtBQUFhLHVCQUFLLEVBQUU7QUFBRWhCLDZCQUFTLEVBQUU7QUFBYixtQkFBcEI7QUFBQSx5Q0FBNkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQUVJLHFFQUFDLHNEQUFELENBQU0sV0FBTjtBQUFrQix1QkFBSyxFQUFFO0FBQ3JCQSw2QkFBUyxFQUFFLFFBRFU7QUFDQUgsbUNBQWUsRUFBRSxZQURqQjtBQUMrQkQsOEJBQVUsRUFBRSxpQkFEM0M7QUFFckJvQiw4QkFBVSxFQUFFO0FBRlMsbUJBQXpCO0FBQUEsMENBR0c7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFISCxlQUlJO0FBQUEsMkNBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUpKLGVBSTBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSjFFLGlPQU9zRTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQVB0RSxlQVNJO0FBQUEsMkNBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQVRKLGVBU2lEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBVGpELG10QkFtQm1CO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBbkJuQixlQW9CSTtBQUFBLDJDQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFwQkosZUFvQm9GO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBcEJwRixlQXFCSTtBQUFJLHlCQUFLLEVBQUU7QUFBRWhCLCtCQUFTLEVBQUU7QUFBYixxQkFBWDtBQUFBLDRDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFISixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUpKLGVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBTEosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTlCSixlQWtFSSxxRUFBQyxzREFBRDtBQUFBLHNDQUNJLHFFQUFDLHVEQUFEO0FBQU8sbUJBQUcsRUFBQyxzQkFBWDtBQUFrQyx1QkFBTyxNQUF6QztBQUEwQyxrQkFBRSxFQUFFO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSSxxRUFBQyxzREFBRCxDQUFNLE9BQU47QUFBQSx3Q0FDSSxxRUFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSx1QkFBSyxFQUFFO0FBQUVBLDZCQUFTLEVBQUU7QUFBYixtQkFBcEI7QUFBQSx5Q0FBNkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQUVJLHFFQUFDLHNEQUFELENBQU0sV0FBTjtBQUFrQix1QkFBSyxFQUFFO0FBQ3JCQSw2QkFBUyxFQUFFLFFBRFU7QUFDQUgsbUNBQWUsRUFBRSxZQURqQjtBQUMrQkQsOEJBQVUsRUFBRSxpQkFEM0M7QUFFckJvQiw4QkFBVSxFQUFFO0FBRlMsbUJBQXpCO0FBQUEsMENBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKSixlQUtJO0FBQUEsMkNBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUxKLGVBS3VEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTHZELGVBTUk7QUFBSSx5QkFBSyxFQUFFO0FBQUVoQiwrQkFBUyxFQUFFO0FBQWIscUJBQVg7QUFBQSw0Q0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBSEosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbEVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBL0VKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQTRLSDs7QUFoUGtDOztBQW1QdkMsTUFBTWlCLFdBQU4sU0FBMEJ4RSw0Q0FBSyxDQUFDQyxTQUFoQyxDQUEwQztBQUN0Q0csUUFBTSxHQUFHO0FBQ0wsVUFBTTtBQUFFSTtBQUFGLFFBQWUsS0FBS0wsS0FBMUI7QUFDQSx3QkFDSSxxRUFBQyxLQUFEO0FBQU8saUJBQVcsRUFBQyxRQUFuQjtBQUFBLDZCQUNJLHFFQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQUtIOztBQVJxQzs7QUFXMUMsTUFBTXNFLFNBQU4sU0FBd0J6RSw0Q0FBSyxDQUFDQyxTQUE5QixDQUF3QztBQUNwQ0csUUFBTSxHQUFHO0FBQ0wsVUFBTTtBQUFFSTtBQUFGLFFBQWUsS0FBS0wsS0FBMUI7QUFDQSx3QkFDSSxxRUFBQyxLQUFEO0FBQU8sYUFBTyxFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FBaEI7QUFBQSw2QkFDSSxxRUFBQyxRQUFEO0FBQVUsY0FBTTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBS0g7O0FBUm1DOztBQVd6QixNQUFNdUUsR0FBTixTQUFrQjFFLDRDQUFLLENBQUNDLFNBQXhCLENBQWtDO0FBRTdDRyxRQUFNLEdBQUc7QUFDTCx3QkFDSTtBQUFBLDZCQUNJLHFFQUFDLG9CQUFEO0FBQUEsZ0NBQ0kscUVBQUMsV0FBRDtBQUFBLG9CQUFlLEtBQUtELEtBQUwsQ0FBV0s7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLHFFQUFDLFNBQUQ7QUFBQSxvQkFBWSxLQUFLTCxLQUFMLENBQVdLO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBUUg7O0FBWDRDO0FBZWpELE1BQU1NLE9BQU8sR0FBRyxDQUVaO0FBQ0k0QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsY0FGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FGWSxFQVFaO0FBQ0k4QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsV0FGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FSWSxDQUFoQjtBQWdCQSxNQUFNRyxPQUFPLEdBQUcsQ0FDWjtBQUNJMkMsS0FBRyxFQUFFLEdBRFQ7QUFFSWQsTUFBSSxFQUFFLGdCQUZWO0FBR0loQyxPQUFLLEVBQUU7QUFIWCxDQURZLEVBTVo7QUFDSThDLEtBQUcsRUFBRSxHQURUO0FBRUlkLE1BQUksRUFBRSxlQUZWO0FBR0loQyxPQUFLLEVBQUU7QUFIWCxDQU5ZLEVBV1o7QUFDSThDLEtBQUcsRUFBRSxHQURUO0FBRUlkLE1BQUksRUFBRSxrQkFGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FYWSxFQWdCWjtBQUNJOEMsS0FBRyxFQUFFLEdBRFQ7QUFFSWQsTUFBSSxFQUFFLGFBRlY7QUFHSWhDLE9BQUssRUFBRTtBQUhYLENBaEJZLENBQWhCO0FBdUJBLE1BQU1JLFNBQVMsR0FBRyxDQUNkO0FBQ0kwQyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsWUFGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FEYyxFQU1kO0FBQ0k4QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsT0FGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FOYyxFQVdkO0FBQ0k4QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsS0FGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FYYyxFQWdCZDtBQUNJOEMsS0FBRyxFQUFFLEdBRFQ7QUFFSWQsTUFBSSxFQUFFLE9BRlY7QUFHSWhDLE9BQUssRUFBRTtBQUhYLENBaEJjLENBQWxCO0FBc0JBLE1BQU1LLE9BQU8sR0FBRyxDQUNaO0FBQ0l5QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsR0FGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FEWSxFQU1aO0FBQ0k4QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsR0FGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FOWSxFQVdaO0FBQ0k4QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsR0FGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FYWSxFQWdCWjtBQUNJOEMsS0FBRyxFQUFFLEdBRFQ7QUFFSWQsTUFBSSxFQUFFLEdBRlY7QUFHSWhDLE9BQUssRUFBRTtBQUhYLENBaEJZLEVBcUJaO0FBQ0k4QyxLQUFHLEVBQUUsV0FEVDtBQUVJZCxNQUFJLEVBQUUsV0FGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FyQlksQ0FBaEI7QUEyQkEsTUFBTU0sU0FBUyxHQUFHLENBQ2Q7QUFDSXdDLEtBQUcsRUFBRSxHQURUO0FBRUlkLE1BQUksRUFBRSxnQkFGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0FEYyxFQU1kO0FBQ0k4QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsb0JBRlY7QUFHSWhDLE9BQUssRUFBRTtBQUhYLENBTmMsRUFXZDtBQUNJOEMsS0FBRyxFQUFFLEdBRFQ7QUFFSWQsTUFBSSxFQUFFLG9CQUZWO0FBR0loQyxPQUFLLEVBQUU7QUFIWCxDQVhjLEVBZ0JkO0FBQ0k4QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsb0JBRlY7QUFHSWhDLE9BQUssRUFBRTtBQUhYLENBaEJjLEVBcUJkO0FBQ0k4QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsb0JBRlY7QUFHSWhDLE9BQUssRUFBRTtBQUhYLENBckJjLEVBMEJkO0FBQ0k4QyxLQUFHLEVBQUUsR0FEVDtBQUVJZCxNQUFJLEVBQUUsY0FGVjtBQUdJaEMsT0FBSyxFQUFFO0FBSFgsQ0ExQmMsQ0FBbEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqWUE7QUFDQTtBQUNBO0FBRUEsTUFBTTtBQUFFK0Msc0JBQUY7QUFBd0JDO0FBQXhCLElBQWtDQyxrRUFBVyxDQUFDO0FBQ2hEQyxhQUFXLEVBQUU7QUFDVGhCLFVBQU0sRUFBRSxDQURDO0FBRVRpQixVQUFNLEVBQUUsR0FGQztBQUdUQyxZQUFRLEVBQUUsSUFIRDtBQUlUQyxTQUFLLEVBQUU7QUFKRTtBQURtQyxDQUFELENBQW5EOztBQVVBLE1BQU1PLFdBQU4sU0FBMEJ4RSw0Q0FBSyxDQUFDQyxTQUFoQyxDQUEwQztBQUN0Q0csUUFBTSxHQUFHO0FBQ0wsVUFBTTtBQUFFSTtBQUFGLFFBQWUsS0FBS0wsS0FBMUI7QUFDQSx3QkFDSSxxRUFBQyxLQUFEO0FBQU8saUJBQVcsRUFBQyxRQUFuQjtBQUFBLDZCQUNJLHFFQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFLSDs7QUFScUM7O0FBVzFDLE1BQU1zRSxTQUFOLFNBQXdCekUsNENBQUssQ0FBQ0MsU0FBOUIsQ0FBd0M7QUFDcENHLFFBQU0sR0FBRztBQUNMLFVBQU07QUFBRUk7QUFBRixRQUFlLEtBQUtMLEtBQTFCO0FBQ0Esd0JBQ0kscUVBQUMsS0FBRDtBQUFPLGFBQU8sRUFBRSxDQUFDLFFBQUQsRUFBVyxRQUFYLENBQWhCO0FBQUEsNkJBQ0kscUVBQUMsaURBQUQ7QUFBVSxjQUFNO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFLSDs7QUFSbUM7O0FBV3pCLE1BQU11RSxHQUFOLFNBQWtCMUUsNENBQUssQ0FBQ0MsU0FBeEIsQ0FBa0M7QUFFN0NHLFFBQU0sR0FBRztBQUNMLHdCQUNJO0FBQUEsNkJBQ0kscUVBQUMsb0JBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxXQUFEO0FBQUEsb0JBQWUsS0FBS0QsS0FBTCxDQUFXSztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUkscUVBQUMsU0FBRDtBQUFBLG9CQUFZLEtBQUtMLEtBQUwsQ0FBV0s7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFRSDs7QUFYNEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNO0FBQUVtRCxzQkFBRjtBQUF3QkM7QUFBeEIsSUFBa0NDLGtFQUFXLENBQUM7QUFDaERDLGFBQVcsRUFBRTtBQUNUaEIsVUFBTSxFQUFFLENBREM7QUFFVGlCLFVBQU0sRUFBRSxHQUZDO0FBR1RDLFlBQVEsRUFBRSxJQUhEO0FBSVRDLFNBQUssRUFBRTtBQUpFO0FBRG1DLENBQUQsQ0FBbkQ7QUFTQSxNQUFNRSxNQUFNLEdBQ1o7QUFDSWQsT0FBSyxFQUFFLE9BRFg7QUFFSWUsWUFBVSxFQUFFLHNEQUZoQjtBQUdJakIsWUFBVSxFQUFFLGVBSGhCO0FBSUlHLFVBQVEsRUFBRTtBQUpkLENBREE7QUFRQSxNQUFNcUIsT0FBTyxHQUNiO0FBQ0l0QixPQUFLLEVBQUUsT0FEWDtBQUVJZSxZQUFVLEVBQUUscUJBRmhCO0FBR0liLFdBQVMsRUFBRSxRQUhmO0FBSUlKLFlBQVUsRUFBRSxlQUpoQjtBQUtJRyxVQUFRLEVBQUU7QUFMZCxDQURBO0FBU0EsTUFBTXNCLElBQUksR0FBRSxFQUFaOztBQUdBLE1BQU1DLGdCQUFOLFNBQStCN0UsNENBQUssQ0FBQ0MsU0FBckMsQ0FBK0M7QUFBQTtBQUFBOztBQUFBLG1DQUVuQztBQUFFNkUsZ0JBQVUsRUFBRTtBQUFkLEtBRm1DOztBQUFBLDZDQUl6QixDQUFDcEUsQ0FBRCxFQUFJO0FBQUVDO0FBQUYsS0FBSixLQUFpQixLQUFLRSxRQUFMLENBQWM7QUFBRWlFLGdCQUFVLEVBQUVuRTtBQUFkLEtBQWQsQ0FKUTs7QUFBQSwyQ0FLM0IsTUFBTSxLQUFLRSxRQUFMLENBQWM7QUFBRWtFLFdBQUssRUFBRTtBQUFULEtBQWQsQ0FMcUI7O0FBQUEsMkNBTTNCLE1BQU0sS0FBS2xFLFFBQUwsQ0FBYztBQUFFa0UsV0FBSyxFQUFFO0FBQVQsS0FBZCxDQU5xQjtBQUFBOztBQVEzQzNFLFFBQU0sR0FBRztBQUNMLFVBQU07QUFBRUk7QUFBRixRQUFlLEtBQUtMLEtBQTFCO0FBQ0EsVUFBTTtBQUFFMkU7QUFBRixRQUFpQixLQUFLdkUsS0FBNUI7QUFDQSxVQUFNO0FBQUM4QztBQUFELFFBQVEsS0FBS2xELEtBQW5CO0FBRUEwRSxvQkFBZ0IsQ0FBQzlCLFNBQWpCLEdBQTZCO0FBQ3pCdkMsY0FBUSxFQUFFd0MsaURBQVMsQ0FBQ2dDO0FBREssS0FBN0I7QUFJQSx3QkFDSSxxRUFBQywyREFBRDtBQUFXLFdBQUssTUFBaEI7QUFBQSw2QkFDSSxxRUFBQyxLQUFEO0FBQU8sbUJBQVcsRUFBQyxRQUFuQjtBQUFBLGdDQUNJLHFFQUFDLDREQUFEO0FBQ0ksY0FBSSxFQUFFLEtBRFY7QUFFSSx3QkFBYyxFQUFFLEtBQUtDLGFBRnpCO0FBR0ksK0JBQXFCLEVBQUUsS0FBS0MsYUFIaEM7QUFBQSxpQ0FLSSxxRUFBQyx5REFBRDtBQUFTLG9CQUFRLE1BQWpCO0FBQWtCLGlCQUFLLEVBQUU7QUFBQzlCLDZCQUFlLEVBQUM7QUFBakIsYUFBekI7QUFBQSxtQ0FDSSxxRUFBQyxzREFBRDtBQUFNLG1CQUFLLEVBQUU7QUFBRUEsK0JBQWUsRUFBRTtBQUFuQixlQUFiO0FBQWdELHVCQUFTLE1BQXpEO0FBQTBELG1CQUFLLE1BQS9EO0FBQUEsc0NBRUkscUVBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQUEsdUNBQVcscUVBQUMsdURBQUQ7QUFBTyxxQkFBRyxFQUFDLG1CQUFYO0FBQ1Asb0JBQUUsRUFBQyxHQURJO0FBRVAsc0JBQUksRUFBQyxNQUZFO0FBR1Asc0JBQUksRUFBQztBQUhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLGVBV0sscUVBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsd0JBQVEsTUFBbkI7QUFBb0IscUJBQUssRUFBRWUsTUFBM0I7QUFDRyxvQkFBSSxFQUFDO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFYTCxlQWdCSSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyx3QkFBUSxFQUFDLE9BQXBCO0FBQ0ksb0JBQUksRUFBQyxXQURUO0FBQ3FCLG9CQUFJLEVBQUUsZUFBYVMsSUFEeEM7QUFDOEMscUJBQUssRUFBRTtBQUFFTyw0QkFBVSxFQUFDO0FBQWIsaUJBRHJEO0FBRUksc0JBQU0sRUFBRUwsVUFBVSxLQUFLLFdBRjNCO0FBR0ksdUJBQU8sRUFBRSxLQUFLTSxlQUhsQjtBQUFBLHdDQUtJLHFFQUFDLHVEQUFEO0FBQU8scUJBQUcsRUFBQyxjQUFYO0FBQTBCLHNCQUFJLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBaEJKLGVBeUJJLHFFQUFDLDBEQUFEO0FBQVUsb0JBQUksTUFBZDtBQUFlLG9CQUFJLEVBQUMsT0FBcEI7QUFBMkIsc0JBQU0sTUFBakM7QUFBa0MscUJBQUssRUFBRTtBQUFDRCw0QkFBVSxFQUFDO0FBQVosaUJBQXpDO0FBQUEsdUNBQ0kscUVBQUMsMERBQUQsQ0FBVSxJQUFWO0FBQUEsMENBQ0kscUVBQUMsMERBQUQsQ0FBVSxJQUFWO0FBQWUsd0JBQUksTUFBbkI7QUFBb0Isd0JBQUksRUFBRSxTQUFPUCxJQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixlQUVJLHFFQUFDLDBEQUFELENBQVUsSUFBVjtBQUFlLHdCQUFJLE1BQW5CO0FBQW9CLHdCQUFJLEVBQUUsU0FBT0EsSUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkosZUFHSSxxRUFBQywwREFBRCxDQUFVLElBQVY7QUFBZSx3QkFBSSxNQUFuQjtBQUFvQix3QkFBSSxFQUFFLFNBQU9BLElBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUhKLGVBSUkscUVBQUMsMERBQUQsQ0FBVSxJQUFWO0FBQWUsd0JBQUksTUFBbkI7QUFBb0Isd0JBQUksRUFBRSxZQUFVQSxJQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKSixlQUtJLHFFQUFDLDBEQUFELENBQVUsSUFBVjtBQUFlLHdCQUFJLE1BQW5CO0FBQW9CLHdCQUFJLEVBQUUsb0JBQWtCQSxJQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFMSixlQU1JLHFFQUFDLDBEQUFELENBQVUsSUFBVjtBQUFlLHdCQUFJLE1BQW5CO0FBQW9CLHdCQUFJLEVBQUUsbUJBQWlCQSxJQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXpCSixlQW1DSSxxRUFBQywwREFBRDtBQUFVLG9CQUFJLE1BQWQ7QUFBZSxvQkFBSSxFQUFDLGFBQXBCO0FBQWtDLHNCQUFNLE1BQXhDO0FBQXlDLHFCQUFLLEVBQUU7QUFBRU8sNEJBQVUsRUFBRTtBQUFkLGlCQUFoRDtBQUFBLHVDQUNJLHFFQUFDLDBEQUFELENBQVUsSUFBVjtBQUFBLDBDQUNJLHFFQUFDLDBEQUFELENBQVUsSUFBVjtBQUFlLHdCQUFJLE1BQW5CO0FBQW9CLHdCQUFJLEVBQUUsaUJBQWVQLElBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLGVBRUkscUVBQUMsMERBQUQsQ0FBVSxJQUFWO0FBQWUsd0JBQUksTUFBbkI7QUFBb0Isd0JBQUksRUFBRSxlQUFhQSxJQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGSixlQUdJLHFFQUFDLDBEQUFELENBQVUsSUFBVjtBQUFlLHdCQUFJLE1BQW5CO0FBQW9CLHdCQUFJLEVBQUUsZ0JBQWNBLElBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUhKLGVBSUkscUVBQUMsMERBQUQsQ0FBVSxJQUFWO0FBQWUsd0JBQUksTUFBbkI7QUFBb0Isd0JBQUksRUFBRSxhQUFXQSxJQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQW5DSixlQTRDSSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxxQkFBSyxFQUFFO0FBQUNPLDRCQUFVLEVBQUU7QUFBYixpQkFBbEI7QUFDSSxvQkFBSSxFQUFDLGlCQURUO0FBQzJCLG9CQUFJLEVBQUUsZ0JBQWNQLElBRC9DO0FBRUksc0JBQU0sRUFBRUUsVUFBVSxLQUFLLGlCQUYzQjtBQUdJLHVCQUFPLEVBQUUsS0FBS007QUFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkE1Q0osZUFrREkscUVBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQ0ksb0JBQUksRUFBQyxpQkFEVDtBQUMyQixvQkFBSSxFQUFFLGFBQVdSLElBRDVDO0FBQ2lELHFCQUFLLEVBQUU7QUFBQ08sNEJBQVUsRUFBRTtBQUFiLGlCQUR4RDtBQUVJLHNCQUFNLEVBQUVMLFVBQVUsS0FBSyxpQkFGM0I7QUFHSSx1QkFBTyxFQUFFLEtBQUtNO0FBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBbERKLGVBeURJLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUNJLG9CQUFJLEVBQUMsZUFEVDtBQUN5QixvQkFBSSxFQUFFLG1CQUFpQlIsSUFEaEQ7QUFDc0QscUJBQUssRUFBRTtBQUFDTyw0QkFBVSxFQUFFO0FBQWIsaUJBRDdEO0FBRUksc0JBQU0sRUFBRUwsVUFBVSxLQUFLLGVBRjNCO0FBR0ksdUJBQU8sRUFBRSxLQUFLTTtBQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXpESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQXdFSzVFLFFBeEVMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQStFSDs7QUFoRzBDOztBQW1HL0MsTUFBTTZFLGVBQU4sU0FBOEJyRiw0Q0FBSyxDQUFDQyxTQUFwQyxDQUE4QztBQUFBO0FBQUE7O0FBQUEsbUNBQ2xDLEVBRGtDOztBQUFBLG1DQUVsQztBQUFFNkUsZ0JBQVUsRUFBRTtBQUFkLEtBRmtDOztBQUFBLDZDQUl4QixDQUFDcEUsQ0FBRCxFQUFJO0FBQUVDO0FBQUYsS0FBSixLQUFpQixLQUFLRSxRQUFMLENBQWM7QUFBRWlFLGdCQUFVLEVBQUVuRTtBQUFkLEtBQWQsQ0FKTzs7QUFBQSwrQ0FLdEIsTUFBTSxLQUFLRSxRQUFMLENBQWM7QUFBRXlFLG1CQUFhLEVBQUU7QUFBakIsS0FBZCxDQUxnQjs7QUFBQSwwQ0FNM0IsTUFBTSxLQUFLekUsUUFBTCxDQUFjO0FBQUV5RSxtQkFBYSxFQUFFO0FBQWpCLEtBQWQsQ0FOcUI7QUFBQTs7QUFRMUNsRixRQUFNLEdBQUc7QUFDTCxVQUFNO0FBQUVJO0FBQUYsUUFBZSxLQUFLTCxLQUExQjtBQUNBLFVBQU07QUFBRW1GLG1CQUFGO0FBQWlCUjtBQUFqQixRQUFnQyxLQUFLdkUsS0FBM0M7QUFFQThFLG1CQUFlLENBQUN0QyxTQUFoQixHQUE0QjtBQUN4QnZDLGNBQVEsRUFBRXdDLGlEQUFTLENBQUNnQztBQURJLEtBQTVCO0FBSUEsd0JBQ0kscUVBQUMsS0FBRDtBQUFPLFFBQUUsRUFBRU8seURBQU8sQ0FBQ0MsUUFBbkI7QUFBNkIsYUFBTyxFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FBdEM7QUFBQSw2QkFDSSxxRUFBQyx5REFBRCxDQUFTLFFBQVQ7QUFBQSxnQ0FDSSxxRUFBQyx5REFBRDtBQUNJLFlBQUUsRUFBRUMsc0RBRFI7QUFFSSxtQkFBUyxFQUFDLE1BRmQ7QUFHSSxnQkFBTSxFQUFFLEtBQUtDLGlCQUhqQjtBQUlJLGtCQUFRLE1BSlo7QUFLSSxpQkFBTyxFQUFFSixhQUxiO0FBQUEsa0NBUUkscUVBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQ0ksZ0JBQUksRUFBQyxXQURUO0FBQ3FCLGdCQUFJLEVBQUUsZUFBZVYsSUFEMUM7QUFDZ0QsaUJBQUssRUFBRTtBQUFFTyx3QkFBVSxFQUFFO0FBQWQsYUFEdkQ7QUFFSSxrQkFBTSxFQUFFTCxVQUFVLEtBQUssV0FGM0I7QUFHSSxtQkFBTyxFQUFFLEtBQUtNLGVBSGxCO0FBQUEsb0NBS0kscUVBQUMsdURBQUQ7QUFBTyxpQkFBRyxFQUFDLGNBQVg7QUFBMEIsa0JBQUksRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSSixlQWlCSSxxRUFBQywwREFBRDtBQUFVLGdCQUFJLE1BQWQ7QUFBZSxnQkFBSSxFQUFDLE9BQXBCO0FBQTRCLG9CQUFRLEVBQUMsTUFBckM7QUFBNEMsaUJBQUssRUFBRTtBQUFFRCx3QkFBVSxFQUFFO0FBQWQsYUFBbkQ7QUFBQSxtQ0FDSSxxRUFBQywwREFBRCxDQUFVLElBQVY7QUFBQSxzQ0FDSSxxRUFBQywwREFBRCxDQUFVLElBQVY7QUFBZSxvQkFBSSxNQUFuQjtBQUFvQixvQkFBSSxFQUFFLFNBQVNQLElBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBRUkscUVBQUMsMERBQUQsQ0FBVSxJQUFWO0FBQWUsb0JBQUksTUFBbkI7QUFBb0Isb0JBQUksRUFBRSxTQUFTQSxJQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixlQUdJLHFFQUFDLDBEQUFELENBQVUsSUFBVjtBQUFlLG9CQUFJLE1BQW5CO0FBQW9CLG9CQUFJLEVBQUUsU0FBU0EsSUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEosZUFJSSxxRUFBQywwREFBRCxDQUFVLElBQVY7QUFBZSxvQkFBSSxNQUFuQjtBQUFvQixvQkFBSSxFQUFFLFlBQVlBLElBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpKLGVBS0kscUVBQUMsMERBQUQsQ0FBVSxJQUFWO0FBQWUsb0JBQUksTUFBbkI7QUFBb0Isb0JBQUksRUFBRSxvQkFBb0JBLElBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxKLGVBTUkscUVBQUMsMERBQUQsQ0FBVSxJQUFWO0FBQWUsb0JBQUksTUFBbkI7QUFBb0Isb0JBQUksRUFBRSxtQkFBbUJBLElBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBakJKLGVBMkJJLHFFQUFDLDBEQUFEO0FBQVUsZ0JBQUksTUFBZDtBQUFlLGdCQUFJLEVBQUMsYUFBcEI7QUFBaUMsb0JBQVEsRUFBQyxNQUExQztBQUFpRCxpQkFBSyxFQUFFO0FBQUVPLHdCQUFVLEVBQUU7QUFBZCxhQUF4RDtBQUFBLG1DQUNJLHFFQUFDLDBEQUFELENBQVUsSUFBVjtBQUFBLHNDQUNJLHFFQUFDLDBEQUFELENBQVUsSUFBVjtBQUFlLG9CQUFJLE1BQW5CO0FBQW9CLG9CQUFJLEVBQUUsaUJBQWlCUCxJQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUVJLHFFQUFDLDBEQUFELENBQVUsSUFBVjtBQUFlLG9CQUFJLE1BQW5CO0FBQW9CLG9CQUFJLEVBQUUsZUFBZUEsSUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkosZUFHSSxxRUFBQywwREFBRCxDQUFVLElBQVY7QUFBZSxvQkFBSSxNQUFuQjtBQUFvQixvQkFBSSxFQUFFLGdCQUFnQkEsSUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEosZUFJSSxxRUFBQywwREFBRCxDQUFVLElBQVY7QUFBZSxvQkFBSSxNQUFuQjtBQUFvQixvQkFBSSxFQUFFLGFBQWFBLElBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBM0JKLGVBb0NJLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLG9CQUFRLEVBQUMsT0FBcEI7QUFBNEIsaUJBQUssRUFBRTtBQUFFTyx3QkFBVSxFQUFFO0FBQWQsYUFBbkM7QUFDSSxnQkFBSSxFQUFDLGlCQURUO0FBQzJCLGdCQUFJLEVBQUUsZ0JBQWdCUCxJQURqRDtBQUVJLGtCQUFNLEVBQUVFLFVBQVUsS0FBSyxpQkFGM0I7QUFHSSxtQkFBTyxFQUFFLEtBQUtNO0FBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBcENKLGVBMENJLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUNJLGdCQUFJLEVBQUMsaUJBRFQ7QUFDMkIsZ0JBQUksRUFBRSxhQUFhUixJQUQ5QztBQUNvRCxpQkFBSyxFQUFFO0FBQUVPLHdCQUFVLEVBQUU7QUFBZCxhQUQzRDtBQUVJLGtCQUFNLEVBQUVMLFVBQVUsS0FBSyxpQkFGM0I7QUFHSSxtQkFBTyxFQUFFLEtBQUtNO0FBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBMUNKLGVBaURJLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUNJLGdCQUFJLEVBQUMsZUFEVDtBQUN5QixnQkFBSSxFQUFFLG1CQUFtQlIsSUFEbEQ7QUFDd0QsaUJBQUssRUFBRTtBQUFFTyx3QkFBVSxFQUFFO0FBQWQsYUFEL0Q7QUFFSSxrQkFBTSxFQUFFTCxVQUFVLEtBQUssZUFGM0I7QUFHSSxtQkFBTyxFQUFFLEtBQUtNO0FBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBakRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQXlESSxxRUFBQyx5REFBRCxDQUFTLE1BQVQ7QUFBZ0IsZ0JBQU0sRUFBRUUsYUFBeEI7QUFBQSxrQ0FDSSxxRUFBQyx5REFBRDtBQUVJLHFCQUFTLEVBQUMsUUFGZDtBQUdJLGlCQUFLLEVBQUU7QUFBRUssdUJBQVMsRUFBRSxHQUFiO0FBQWtCQyxxQkFBTyxFQUFFO0FBQTNCLGFBSFg7QUFJSSxvQkFBUSxNQUpaO0FBQUEsb0NBT0kscUVBQUMsMkRBQUQ7QUFBQSxxQ0FDSSxxRUFBQyxzREFBRDtBQUFNLHdCQUFRLE1BQWQ7QUFBZSx5QkFBUyxNQUF4QjtBQUF5QixvQkFBSSxFQUFDLE1BQTlCO0FBQUEsdUNBQ0kscUVBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcseUJBQU8sRUFBRSxLQUFLQyxZQUF6QjtBQUFBLHlDQUNJLHFFQUFDLHNEQUFEO0FBQU0sNEJBQVEsTUFBZDtBQUFlLHlCQUFLLEVBQUMsTUFBckI7QUFBNEIsd0JBQUksRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBKLGVBY0kscUVBQUMsd0RBQUQ7QUFBUSxvQkFBTTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLEVBaUJLckYsUUFqQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFpRkg7O0FBakd5Qzs7QUFvRzlDLE1BQU1zRixNQUFNLEdBQUcsQ0FBQztBQUFFdEY7QUFBRixDQUFELGtCQUNYO0FBQUEseUJBQ0kscUVBQUMsb0JBQUQ7QUFBQSw0QkFDSSxxRUFBQyxnQkFBRDtBQUFBLGdCQUFtQkE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJLHFFQUFDLGVBQUQ7QUFBQSxnQkFBa0JBO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKOztBQVVlc0YscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFBBO0FBQ0E7Q0FHQTs7QUFDZSxNQUFNQyxNQUFOLFNBQXFCL0YsNENBQUssQ0FBQ0MsU0FBM0IsQ0FBcUM7QUFDaERDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2YsVUFBTUEsS0FBTjtBQUNBLFNBQUtJLEtBQUwsR0FBYSxFQUFiO0FBQ0g7O0FBRURILFFBQU0sR0FBRztBQUNMLFVBQU07QUFBRTBDO0FBQUYsUUFBYSxLQUFLM0MsS0FBeEI7QUFDQSx3QkFDSSxxRUFBQywyREFBRDtBQUFXLFVBQUksTUFBZjtBQUFBLDZCQUNJLHFFQUFDLDJEQUFEO0FBQVUsbUJBQVcsRUFBQyxRQUF0QjtBQUErQixvQkFBWSxFQUFDLFNBQTVDO0FBQXNELDJCQUFtQixFQUFFLElBQTNFO0FBQWlGLDRCQUFvQixFQUFFLElBQXZHO0FBQTZHLGlCQUFTLEVBQUUsSUFBeEg7QUFBQSxnQ0FDSSxxRUFBQyx1REFBRDtBQUFPLGFBQUcsRUFBQyxtQkFBWDtBQUErQixjQUFJLEVBQUMsT0FBcEM7QUFBNEMsa0JBQVE7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLHFFQUFDLHdEQUFEO0FBQ0ksWUFBRSxFQUFDLElBRFA7QUFFSSxpQkFBTyxFQUFDLGlDQUZaO0FBR0ksZUFBSyxFQUFDLE9BSFY7QUFJSSxlQUFLLEVBQUU7QUFDSG1ELG9CQUFRLEVBQUVSLE1BQU0sR0FBRyxLQUFILEdBQVcsS0FEeEI7QUFFSHFDLHNCQUFVLEVBQUUsUUFGVDtBQUdIYSx3QkFBWSxFQUFFLENBSFg7QUFJSEMscUJBQVMsRUFBRW5ELE1BQU0sR0FBRyxHQUFILEdBQVMsS0FKdkI7QUFLSG9ELDBCQUFjLEVBQUUsV0FMYjtBQU1IM0MscUJBQVMsRUFBRTtBQU5SO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQWVJLHFFQUFDLHdEQUFEO0FBQ0ksWUFBRSxFQUFDLElBRFA7QUFFSSxpQkFBTyxFQUFDLG9DQUZaO0FBR0ksa0JBQVEsTUFIWjtBQUlJLGVBQUssRUFBRTtBQUNIRCxvQkFBUSxFQUFFUixNQUFNLEdBQUcsT0FBSCxHQUFhLEtBRDFCO0FBRUhxQyxzQkFBVSxFQUFFLFFBRlQ7QUFHSGMscUJBQVMsRUFBRW5ELE1BQU0sR0FBRyxPQUFILEdBQWEsT0FIM0I7QUFJSFMscUJBQVMsRUFBRSxRQUpSO0FBS0hGLGlCQUFLLEVBQUU7QUFMSjtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBaUNIOztBQXpDK0MsQzs7Ozs7Ozs7Ozs7QUNMcEQsMkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvSXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9JdGUuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNeU1lbnUgZnJvbSBcIi4uL3BhZ2VzL01lbnUuanNcIlxyXG5pbXBvcnQgKiBhcyBlbWFpbGpzIGZyb20gJ2VtYWlsanMtY29tJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+cmVub3ZhdGlvbjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cInJlbm92YXRpb24gdGVydGlhaXJlIHNlcnZpY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiZW1pbGUgY2hlbW1hbWFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiQ29udGVudC1UeXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cInBvbXBlIGEgY2hhbGV1cixwbG9tYmVyaWUsZWxlY3RyaWNpdGUsc2FsbGUgZGUgYmFpblwiIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBhc3luYyByZWw9XCJzdHlsZXNoZWV0XCIgbGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi4wLjMvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNzcy9tZW51LmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbmltYXRlLmNzcy8zLjUuMi9hbmltYXRlLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vZW1haWxqcy1jb21AMi9kaXN0L2VtYWlsLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL21lbnUuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbGpzLmluaXQoXCJZT1VSX1VTRVJfSURcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDwvaGVhZD5cclxuICAgICAgICAgICAgICAgIDxNeU1lbnUgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgSW1hZ2UsIEdyaWQsIERyb3Bkb3duLCBTZWdtZW50LCBFbWJlZCwgRm9ybSwgQ2hlY2tib3gsIEl0ZW0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUxheW91dFwiXHJcbmltcG9ydCAqIGFzIGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbiBcclxuIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwcm9wcmlvOiBcIlwiLCBzYWxhcmllOiBcIlwiLCBjaGF1ZmZhZ2U6IFwiXCIsIGZhbWlsbGU6IFwiXCIsIGZpc2NhbGl0ZTogXCJcIixcclxuICAgICAgICAgICAgbm9tOiBcIlwiLCBwcmVub206IFwiXCIsIGFkcmVzc2U6IFwiXCIsIGxvY2FsaXRlOiBcIlwiLCBlbWFpbDogXCJcIiwgdGVsZXBob25lOiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGUsIHsgbmFtZSwgdmFsdWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtuYW1lXTogdmFsdWUgfSlcclxuXHJcbiAgICBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnN0YXRlLnByb3ByaW8gPT09IHVuZGVmaW5lZCA/IHRoaXMuc2V0U3RhdGUoeyBlcnJvclByb3ByaW86IHsgY29udGVudDogXCJcIiwgcG9pbnRpbmc6IG51bGwgfSB9KSA6IHRoaXMuc2V0U3RhdGUoeyBlcnJvclByb3ByaW86IG51bGwgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLnNhbGFyaWUgPT09IHVuZGVmaW5lZCA/IHRoaXMuc2V0U3RhdGUoeyBlcnJvclNhbGFyaWU6IHsgY29udGVudDogXCJcIiwgcG9pbnRpbmc6IG51bGwgfSB9KSA6IHRoaXMuc2V0U3RhdGUoeyBlcnJvclNhbGFyaWU6IG51bGwgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLmNoYXVmZmFnZSA9PT0gdW5kZWZpbmVkID8gdGhpcy5zZXRTdGF0ZSh7IGVycm9yQ2hhdWZmYWdlOiB7IGNvbnRlbnQ6IFwiXCIsIHBvaW50aW5nOiBudWxsIH0gfSkgOiB0aGlzLnNldFN0YXRlKHsgZXJyb3JDaGF1ZmZhZ2U6IG51bGwgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLmZhbWlsbGUgPT09IHVuZGVmaW5lZCA/IHRoaXMuc2V0U3RhdGUoeyBlcnJvckZhbWlsbGU6IHsgY29udGVudDogXCJcIiwgcG9pbnRpbmc6IG51bGwgfSB9KSA6IHRoaXMuc2V0U3RhdGUoeyBlcnJvckZhbWlsbGU6IG51bGwgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLmZpc2NhbGl0ZSA9PT0gdW5kZWZpbmVkID8gdGhpcy5zZXRTdGF0ZSh7IGVycm9yRmlzY2FsaXRlOiB7IGNvbnRlbnQ6IFwiXCIsIHBvaW50aW5nOiBudWxsIH0gfSkgOiB0aGlzLnNldFN0YXRlKHsgZXJyb3JGaXNjYWxpdGU6IG51bGwgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLnByb3ByaW8gPT09IHVuZGVmaW5lZCA/IGFsZXJ0KFwiU2VsZWN0aW9ubmV6IFByb3ByaWV0YWlyZSBvdSBsb2NhdGFpcmUgP1wiKSA6XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2FsYXJpZSA9PT0gdW5kZWZpbmVkID8gYWxlcnQoXCJTZWxlY3Rpb25uZXogdm90cmUgdHlwZSBkZSBzYWxhaXJlXCIpIDpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2hhdWZmYWdlID09PSB1bmRlZmluZWQgPyBhbGVydChcIlNlbGVjdGlvbm5leiB2b3RyZSB0eXBlIGRlIGNoYXVmZmFnZVwiKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5mYW1pbGxlID09PSB1bmRlZmluZWQgPyBhbGVydChcIlNlbGVjdGlvbm5leiBub21icmUgZGUgcGVyc29ubmVcIikgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZpc2NhbGl0w6kgPT09IHVuZGVmaW5lZCA/IGFsZXJ0KFwiU2VsZWN0aW9ubmV6IHZvdHJlIHJldmVudSBmaXNjYWxcIikgOnRoaXMuZGF0YUNvbnRhY3QoKVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGFDb250YWN0KCkge1xyXG4gICAgICAgIGNvbnN0IHsgcHJvcHJpbywgc2FsYXJpZSwgY2hhdWZmYWdlLCBmYW1pbGxlLCBmaXNjYWxpdGUsXHJcbiAgICAgICAgICAgIG5vbSwgcHJlbm9tLCBhZHJlc3NlLCBsb2NhbGl0ZSwgZW1haWwsIHRlbGVwaG9uZSB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgICAgICBsZXQgdGVtcGxhdGVQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIGZyb21fbmFtZTogZW1haWwsXHJcbiAgICAgICAgICAgIHRvX25hbWU6IG5vbSxcclxuICAgICAgICAgICAgcHJvcHJpbzogcHJvcHJpbyxcclxuICAgICAgICAgICAgc2FsYXJpZTogc2FsYXJpZSxcclxuICAgICAgICAgICAgY2hhdWZmYWdlOiBjaGF1ZmZhZ2UsXHJcbiAgICAgICAgICAgIGZhbWlsbGU6IGZhbWlsbGUsXHJcbiAgICAgICAgICAgIGZpc2NhbGl0ZTogZmlzY2FsaXRlLFxyXG4gICAgICAgICAgICBhZHJlc3NlOiBhZHJlc3NlLFxyXG4gICAgICAgICAgICBsb2NhbGl0ZTogbG9jYWxpdGUsXHJcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgdGVsZXBob25lOiB0ZWxlcGhvbmUsXHJcbiAgICAgICAgICAgIHBlbm9tOiBwcmVub20sXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbWFpbGpzLnNlbmQoJ215X0dtYWlsJywgJ2VsaWdpYmlsaXRlJywgdGVtcGxhdGVQYXJhbXMsICd1c2VyX080clRteXZDeWhuVVlUSnJjemtNdicpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KHJlc3VsdC50ZXh0KTtcclxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvci50ZXh0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wcm9wcmlvID09PSBcIlwiLCB0aGlzLnN0YXRlLnNhbGFyaWUgPT09IFwiXCIsIHRoaXMuc3RhdGUuY2hhdWZmYWdlID09PSBcIlwiLCB0aGlzLnN0YXRlLmZhbWlsbGUgPT09IFwiXCJcclxuICAgICAgICB0aGlzLnN0YXRlLmZpc2NhbGl0ZSA9PT0gXCJcIlxyXG4gICAgICAgIHRoaXMuc3RhdGUubm9tID0gXCJcIiwgdGhpcy5zdGF0ZS5wcmVub20gPSBcIlwiLCB0aGlzLnN0YXRlLmFkcmVzc2UgPSBcIlwiLCB0aGlzLnN0YXRlLmxvY2FsaXRlID0gXCJcIiwgdGhpcy5zdGF0ZS5lbWFpbCA9IFwiXCIsXHJcbiAgICAgICAgdGhpcy5zdGF0ZS50ZWxlcGhvbmUgPSBcIlwiXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCB7IG1vYmlsZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIENvbnRhY3QucHJvcFR5cGVzID0ge1xyXG4gICAgICAgICAgICBtb2JpbGU6IFByb3BUeXBlcy5ib29sXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPSdyaWdodCcgd2lkdGg9ezh9IHN0eWxlPXt7IHBhZGRpbmdUb3A6IG1vYmlsZSA/IDEwIDogMjAsIGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9fT5cclxuICAgICAgICAgICAgICAgIERhbnMgbGUgY2FkcmUgZGUgbGEgdHJhbnNpdGlvbiDDqWNvbG9naXF1ZSwgbCfDiXRhdCBwcmVuZCBlbiBjaGFyZ2UgbGUgY2/Du3QgZGUgbOKAmWluc3RhbGxhdGlvbiBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXMgbWlsbGllcnMgZGUgZm95ZXJzIGZyYW7Dp2FpcyBlbiBvbnQgZMOpasOgIHByb2ZpdMOpLCBwb3VycXVvaSBwYXMgdm91cyA/XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+KiBzYWlzaWUgb2JsaWdhdG9pcmU8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250RmFtaWx5OiBcIkNvbWljIHNhbnMgTVNcIiwgY29sb3I6IFwiZ3JlZW5cIiwgZm9udFNpemU6IG1vYmlsZSA/IDIwIDogMzAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICBWw6lyaWZpZXogdm90cmUgw6lsaWdpYml0w6k8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2UgPT4gdGhpcy5oYW5kbGVTdWJtaXQoZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yUHJvcHJpb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJWb3VzIEV0ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9wcmlvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtEcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb3ByaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yU2FsYXJpZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJWb3VzIEV0ZXMgc2FsYXJpw6kgZGFuc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS0tLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3NhbGFyaWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2FsYXJpZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBjbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JDaGF1ZmZhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVm90cmUgdHlwZSBkZSBDaGF1ZmZhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjaGF1ZmZhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2hhdWZmYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIGNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvckZhbWlsbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTm9tYnJlIGRlIHBlcnNvbm5lIHZpdmFudCBkYW5zIGxlIGZveWVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmFtaWxsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmYW1pbGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIGNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvckZpc2NhbGl0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZXZlbnVlIGZpc2NhbCBkZSByw6lmw6lyZW5jZSAoMjAyMCBvdSAyMDE5KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS0tLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2Zpc2NhbGl0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXNjYWxpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J05vbSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ub219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPSdsb2NrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPSdsZWZ0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdQcsOpbm9tJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Byw6lub20nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17OX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcmVub21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJlbm9tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249J2xlZnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFkcmVzc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0FkcmVzc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17OX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZHJlc3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkcmVzc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0xvY2FsaXTDqSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdMb2NhbGl0w6knXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17OX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb2NhbGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sb2NhbGl0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2NvbnRhY3RAZ21haWwuY29tJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1RlbGVwaG9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScwNjk4NjExMzcyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGVsZXBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRlbGVwaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+PGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBsYWJlbD1cIkonYXV0b3Jpc2UgUi5ULlMgw6AgbWUgcmVjb250YWN0ZXIgcG91ciBtZSBjb21tdW5pcXVlciBtb24gc3RhdHV0IGQnw6lsaWdpYmlsaXTDqVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPjxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkJ1dHRvbiBmbHVpZCB0eXBlPVwic3VibWl0XCIgY29sb3I9XCJncmVlblwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAxNSA6IDIwXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFbDqXJpZmllciBtb24gw6lsaWdpYmlsaXTDqTwvRm9ybS5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuY29uc3QgcHJvcHJpbyA9IFtcclxuXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMScsXHJcbiAgICAgICAgdGV4dDogJ1Byb3ByacOpdGFpcmUnLFxyXG4gICAgICAgIHZhbHVlOiAnUHJvcHJpw6l0YWlyZScsXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcyJyxcclxuICAgICAgICB0ZXh0OiAnTG9jYXRhaXJlJyxcclxuICAgICAgICB2YWx1ZTogJ0xvY2F0YWlyZScsXHJcbiAgICB9XHJcbl1cclxuXHJcblxyXG5jb25zdCBzYWxhcmllID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJzEnLFxyXG4gICAgICAgIHRleHQ6ICdTZWN0ZXVyIHB1YmxpYycsXHJcbiAgICAgICAgdmFsdWU6ICdTZWN0ZXVyIHB1YmxpYycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzInLFxyXG4gICAgICAgIHRleHQ6ICdTZWN0ZXVyIHByaXZlJyxcclxuICAgICAgICB2YWx1ZTogJ1NlY3RldXIgcHJpdmUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICczJyxcclxuICAgICAgICB0ZXh0OiAnU2VjdGV1ciBhZ3JpY29sZScsXHJcbiAgICAgICAgdmFsdWU6ICdTZWN0ZXVyIGFncmljb2xlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNCcsXHJcbiAgICAgICAgdGV4dDogJ05vbiBzYWxhcmllJyxcclxuICAgICAgICB2YWx1ZTogJ05vbiBzYWxhcmllJyxcclxuICAgIH0sXHJcblxyXG5dXHJcbmNvbnN0IGNoYXVmZmFnZSA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcxJyxcclxuICAgICAgICB0ZXh0OiAnRWxlY3RyaXF1ZScsXHJcbiAgICAgICAgdmFsdWU6ICdFbGVjdHJpcXVlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMicsXHJcbiAgICAgICAgdGV4dDogJ0Zpb3VsJyxcclxuICAgICAgICB2YWx1ZTogJ0Zpb3VsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMycsXHJcbiAgICAgICAgdGV4dDogJ0dheicsXHJcbiAgICAgICAgdmFsdWU6ICdHYXonLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc0JyxcclxuICAgICAgICB0ZXh0OiAnQXV0cmUnLFxyXG4gICAgICAgIHZhbHVlOiAnQXV0cmUnLFxyXG4gICAgfSxcclxuXVxyXG5jb25zdCBmYW1pbGxlID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJzEnLFxyXG4gICAgICAgIHRleHQ6ICcxJyxcclxuICAgICAgICB2YWx1ZTogJzEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcyJyxcclxuICAgICAgICB0ZXh0OiAnMicsXHJcbiAgICAgICAgdmFsdWU6ICcyJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMycsXHJcbiAgICAgICAgdGV4dDogJzMnLFxyXG4gICAgICAgIHZhbHVlOiAnMycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzQnLFxyXG4gICAgICAgIHRleHQ6ICc0JyxcclxuICAgICAgICB2YWx1ZTogJzQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc1IGV0IHBsdXMnLFxyXG4gICAgICAgIHRleHQ6ICc1IGV0IHBsdXMnLFxyXG4gICAgICAgIHZhbHVlOiAnNSBldCBwbHVzJyxcclxuICAgIH1cclxuXVxyXG5jb25zdCBmaXNjYWxpdGUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMScsXHJcbiAgICAgICAgdGV4dDogJ2RlIDDigqwgw6AgMTkwNzTigqwnLFxyXG4gICAgICAgIHZhbHVlOiAnZGUgMOKCrCDDoCAxOTA3NOKCrCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzInLFxyXG4gICAgICAgIHRleHQ6ICdkZSAxOTA3NOKCrCDDoCAyNzg5NuKCrCcsXHJcbiAgICAgICAgdmFsdWU6ICdkZSAxOTA3NOKCrCDDoCAyNzg5NuKCrCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzMnLFxyXG4gICAgICAgIHRleHQ6ICdkZSAyNzg5NuKCrCDDoCAzMzU0N+KCrCcsXHJcbiAgICAgICAgdmFsdWU6ICdkZSAyNzg5NuKCrCDDoCAzMzU0N+KCrCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzQnLFxyXG4gICAgICAgIHRleHQ6ICdkZSAzMzU0N+KCrCDDoCAzOTE5MuKCrCcsXHJcbiAgICAgICAgdmFsdWU6ICdkZSAzMzU0N+KCrCDDoCAzOTE5MuKCrCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzUnLFxyXG4gICAgICAgIHRleHQ6ICdkZSAzOTE5MuKCrCDDoCA0NDg2MOKCrCcsXHJcbiAgICAgICAgdmFsdWU6ICdkZSAzOTE5MuKCrCDDoCA0NDg2MOKCrCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzYnLFxyXG4gICAgICAgIHRleHQ6ICcrIGRlIDQ0OTg2MOKCrCcsXHJcbiAgICAgICAgdmFsdWU6ICcrIGRlIDQ0OTg2MOKCrCcsXHJcbiAgICB9XHJcbl1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgSW1hZ2UsIEdyaWQsIFNlZ21lbnQsIEVtYmVkLCBJdGVtICxDYXJkfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUxheW91dFwiXHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCdcclxuaW1wb3J0ICogYXMgZW1haWxqcyBmcm9tICdlbWFpbGpzLWNvbSdcclxuaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tICdAYXJ0c3kvZnJlc25lbCdcclxuXHJcbmNvbnN0IHsgTWVkaWFDb250ZXh0UHJvdmlkZXIsIE1lZGlhIH0gPSBjcmVhdGVNZWRpYSh7XHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIG1vYmlsZTogMCxcclxuICAgICAgICB0YWJsZXQ6IDc2OCxcclxuICAgICAgICBjb21wdXRlcjogMTAyNCxcclxuICAgICAgICBlY3JhbjogMTE5MlxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmNsYXNzIEluZGV4SXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHByb3ByaW86IFwiXCIsIHNhbGFyaWU6IFwiXCIsIGNoYXVmZmFnZTogXCJcIiwgZmFtaWxsZTogXCJcIiwgZmlzY2FsaXRlOiBcIlwiLFxyXG4gICAgICAgICAgICBub206IFwiXCIsIHByZW5vbTogXCJcIiwgYWRyZXNzZTogXCJcIiwgbG9jYWxpdGU6IFwiXCIsIGVtYWlsOiBcIlwiLCB0ZWxlcGhvbmU6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IChlLCB7IG5hbWUsIHZhbHVlIH0pID0+IHRoaXMuc2V0U3RhdGUoeyBbbmFtZV06IHZhbHVlIH0pXHJcblxyXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wcm9wcmlvID09PSBcIlwiID8gdGhpcy5zZXRTdGF0ZSh7IGVycm9yUHJvcHJpbzogeyBjb250ZW50OiBcIlwiLCBwb2ludGluZzogbnVsbCB9IH0pIDogdGhpcy5zZXRTdGF0ZSh7IGVycm9yUHJvcHJpbzogbnVsbCB9KVxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2FsYXJpZSA9PT0gXCJcIiA/IHRoaXMuc2V0U3RhdGUoeyBlcnJvclNhbGFyaWU6IHsgY29udGVudDogXCJcIiwgcG9pbnRpbmc6IG51bGwgfSB9KSA6IHRoaXMuc2V0U3RhdGUoeyBlcnJvclNhbGFyaWU6IG51bGwgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLmNoYXVmZmFnZSA9PT0gXCJcIiA/IHRoaXMuc2V0U3RhdGUoeyBlcnJvckNoYXVmZmFnZTogeyBjb250ZW50OiBcIlwiLCBwb2ludGluZzogbnVsbCB9IH0pIDogdGhpcy5zZXRTdGF0ZSh7IGVycm9yQ2hhdWZmYWdlOiBudWxsIH0pXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mYW1pbGxlID09PSBcIlwiID8gdGhpcy5zZXRTdGF0ZSh7IGVycm9yRmFtaWxsZTogeyBjb250ZW50OiBcIlwiLCBwb2ludGluZzogbnVsbCB9IH0pIDogdGhpcy5zZXRTdGF0ZSh7IGVycm9yRmFtaWxsZTogbnVsbCB9KVxyXG4gICAgICAgIHRoaXMuc3RhdGUuZmlzY2FsaXRlID09PSBcIlwiID8gdGhpcy5zZXRTdGF0ZSh7IGVycm9yRmlzY2FsaXRlOiB7IGNvbnRlbnQ6IFwiXCIsIHBvaW50aW5nOiBudWxsIH0gfSkgOiB0aGlzLnNldFN0YXRlKHsgZXJyb3JGaXNjYWxpdGU6IG51bGwgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLnByb3ByaW8gPT09IFwiXCIgPyBhbGVydChcIlNlbGVjdGlvbm5leiB1biBjaG9peFwiKSA6XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2FsYXJpZSA9PT0gXCJcIiA/IGFsZXJ0KFwiU2VsZWN0aW9ubmV6IHVuIGNob2l4XCIpIDpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2hhdWZmYWdlID09PSBcIlwiID8gYWxlcnQoXCJTZWxlY3Rpb25uZXogdW4gY2hvaXhcIikgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZmFtaWxsZSA9PT0gXCJcIiA/IGFsZXJ0KFwiU2VsZWN0aW9ubmV6IHVuIGNob2l4XCIpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5maXNjYWxpdMOpID09PSBcIlwiID8gYWxlcnQoXCJTZWxlY3Rpb25uZXogdW4gY2hvaXhcIikgOiB0aGlzLmRhdGFDb250YWN0KClcclxuICAgIH1cclxuXHJcbiAgICBkYXRhQ29udGFjdCgpIHtcclxuICAgICAgICBjb25zdCB7IHByb3ByaW8sIHNhbGFyaWUsIGNoYXVmZmFnZSwgZmFtaWxsZSwgZmlzY2FsaXRlLFxyXG4gICAgICAgICAgICBub20sIHByZW5vbSwgYWRyZXNzZSwgbG9jYWxpdGUsIGVtYWlsLCB0ZWxlcGhvbmUgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgbGV0IHRlbXBsYXRlUGFyYW1zID0ge1xyXG4gICAgICAgICAgICBmcm9tX25hbWU6IGVtYWlsLFxyXG4gICAgICAgICAgICB0b19uYW1lOiBub20sXHJcbiAgICAgICAgICAgIHByb3ByaW86IHByb3ByaW8sXHJcbiAgICAgICAgICAgIHNhbGFyaWU6IHNhbGFyaWUsXHJcbiAgICAgICAgICAgIGNoYXVmZmFnZTogY2hhdWZmYWdlLFxyXG4gICAgICAgICAgICBmYW1pbGxlOiBmYW1pbGxlLFxyXG4gICAgICAgICAgICBmaXNjYWxpdGU6IGZpc2NhbGl0ZSxcclxuICAgICAgICAgICAgYWRyZXNzZTogYWRyZXNzZSxcclxuICAgICAgICAgICAgbG9jYWxpdGU6IGxvY2FsaXRlLFxyXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgIHRlbGVwaG9uZTogdGVsZXBob25lLFxyXG4gICAgICAgICAgICBwZW5vbTogcHJlbm9tLFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZW1haWxqcy5zZW5kKCdteV9HbWFpbCcsICdlbGlnaWJpbGl0ZScsIHRlbXBsYXRlUGFyYW1zLCAndXNlcl9PNHJUbXl2Q3loblVZVEpyY3prTXYnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChyZXN1bHQudGV4dCk7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IudGV4dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUucHJvcHJpbyA9PT0gXCJcIiwgdGhpcy5zdGF0ZS5zYWxhcmllID09PSBcIlwiLCB0aGlzLnN0YXRlLmNoYXVmZmFnZSA9PT0gXCJcIiwgdGhpcy5zdGF0ZS5mYW1pbGxlID09PSBcIlwiXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5maXNjYWxpdGUgPT09IFwiXCJcclxuICAgICAgICB0aGlzLnN0YXRlLm5vbSA9IFwiXCIsIHRoaXMuc3RhdGUucHJlbm9tID0gXCJcIiwgdGhpcy5zdGF0ZS5hZHJlc3NlID0gXCJcIiwgdGhpcy5zdGF0ZS5sb2NhbGl0ZSA9IFwiXCIsIHRoaXMuc3RhdGUuZW1haWwgPSBcIlwiLFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRlbGVwaG9uZSA9IFwiXCJcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgbW9iaWxlIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3Qgc2hhZG93ID0ge1xyXG4gICAgICAgICAgICBjb2xvcjogJ2xpZ2h0Z3JlZW4nLFxyXG4gICAgICAgICAgICB0ZXh0U2hhZG93OiAnLTJweCAwIGJsYWNrLCAwIDJweCBibGFjaywgMnB4IDAgYmxhY2ssIDAgLTJweCBibGFjaycsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJ2ZXJkYW5hXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAyMiA6IDMyXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCB2ZXJ0aWNhbCBmbHVpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0YWNrYWJsZSB2ZXJ0aWNhbEFsaWduPSdjZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPVwibGVmdFwiIHdpZHRoPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwibGlnaHRncmVlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IG1vYmlsZSA/IDE1IDogMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U2hhZG93OiAnLTJweCAwIGJsYWNrLCAwIDJweCBibGFjaywgMnB4IDAgYmxhY2ssIDAgLTJweCBibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTCdJc29sYXRpb24gVGhlcm1pcXVlIGRlIHZvcyBtdXJzIHBhciBsJ0V4dMOpcmlldXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXMgZW4gY2hhcmdlIGp1c3F1J8OgIDkwJSBjJ2VzdCBwb3NzaWJsZTxJbWFnZSBzcmM9XCJpbWcvZWNvbG8vbG9nb2NlZS5wbmdcIiBjZW50ZXJlZCBzaXplPVwic21hbGxcIiBzcGFjZWQgLz48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RW1iZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzcGVjdFJhdGlvPScxNjo5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9JzBtMVFXVjN2VHpvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2ltZy9lY29sby9lY29sb2dpZXlvdVR1YmUucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPSd5b3V0dWJlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcInZlcmRhbmFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgY29sb3I6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAyNSA6IDM1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHU+Q29tbWVudCBsJ29idGVuaXI8L3U+PC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uSW1hZ2Ugc3JjPVwiaW1nL2Vjb2xvL3ZhbGlkZXoucG5nXCIgYWx0PVwidmFsaWRlelwiIHNpemU9J3RpbnknIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5Db250ZW50IHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uSGVhZGVyPlJlbXBsaXNzZXogbGUgZm9ybXVsYWlyZTwvSXRlbS5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkltYWdlIHNpemU9J3RpbnknIHNyYz1cImltZy9lY29sby90ZWxlcGhvbmUucG5nXCIgYWx0PVwidGVsZXBob25lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkNvbnRlbnQgdmVydGljYWxBbGlnbj0nbWlkZGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5IZWFkZXI+IFVuIHByb2Zlc3Npb25uZWwgdm91cyBjb250YWN0IGFmaW4gZCdvdXZyaXIgdm90cmUgZG9zc2llciBldCBjb252ZW5pciBkJ3VuIHJlbmRlei12b3VzPC9JdGVtLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uSW1hZ2Ugc2l6ZT0ndGlueScgc3JjPVwiaW1nL2Vjb2xvL291dnJpZXIucG5nXCIgYWx0PVwib3V2cmllciBSR0VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uQ29udGVudCB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkhlYWRlcj4gVW5lIMOpcXVpcGUgZGUgdGVjaG5pY2llbnMgY29uZmlybcOpcyBSR0Ugc2UgZMOpcGxhY2UgY2hleiB2b3VzIGFmaW4gZGUgcsOpYWxpc2VyIHZvcyB0cmF2YXV4PC9JdGVtLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uSW1hZ2Ugc2l6ZT0ndGlueScgc3JjPVwiaW1nL2Vjb2xvL3JlbWVyY2llbWVudC5wbmdcIiBhbHQ9XCJyZW1lcmNpZW1lbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uQ29udGVudCB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkhlYWRlcj5Wb3VzIG5lIHBheWV6IHF1ZSAxIGV1cm8gU3VyIHByw6lzZW50YXRpb24gZHUgZGV2aXMgLCBzYW5zIGF1Y3VuIGZyYWlzIGF2YW5jw6k8L0l0ZW0uSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbT48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5JbWFnZSBzaXplPSdzbWFsbCcgc3JjPVwiaW1nL2Vjb2xvL2xvZ29jZWUucG5nXCIgYWx0PVwibG9nby1jZWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uQ29udGVudCB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkhlYWRlcj5sJ2V0YXQgZmluYW5jZSAgcG91ciAx4oKsIHN5bWJvbGlxdWU8L0l0ZW0uSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFjdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxibG9ja3F1b3RlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBzdHlsZT17c2hhZG93fT5Qb3VycXVvaSBpc29sZXIgdm90cmUgZmHDp2FkZSA/PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyB3b3JkU3BhY2luZzogNSB9fT5MJ0lURSByZWdyb3VwZSBsJ2Vuc2VtYmxlIGRlcyB0ZWNobmlxdWVzIGQnaXNvbGF0aW9uIGRlIGxhIGZhw6dhZGUgZCd1bmUgbWFpc29uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2VzIHRlY2huaXF1ZXMgdmlzZW50IMOgIGxpbWl0ZXIsIHBhciBs4oCZZXh0w6lyaWV1ciwgbGVzIHRyYW5zZmVydHMgdGhlcm1pcXVlcyBlbnRyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVzIG11cnMgZXQgbOKAmWludMOpcmlldXIgZOKAmXVuIGLDonRpbWVudC4gRWxsZSBzZSByw6lhbGlzZSBwYXIgbGEgcG9zZSBk4oCZdW4gaXNvbGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY291dmVydCBk4oCZdW4gcmV2w6p0ZW1lbnQgZGUgZmluaXRpb24gKGVuZHVpdCBkZSBmYcOnYWRlIG91IGJhcmRhZ2UgZXh0w6lyaWV1cikuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBM4oCZaXNvbGF0aW9uIHRoZXJtaXF1ZSBwYXIgbCdleHTDqXJpZXVyIHBlcm1ldCBkZSBjb25zdGl0dWVyIHVuIHbDqXJpdGFibGUgbWFudGVhdVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNvbGFudCBjb250aW51IGF1dG91ciBk4oCZdW5lIGNvbnN0cnVjdGlvbi4gTOKAmWlzb2xhdGlvbiB0aGVybWlxdWUgZXh0w6lyaWV1cmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyaWJ1ZSBhaW5zaSBhdSBtYWludGllbiBk4oCZdW5lIHRlbXDDqXJhdHVyZSBob21vZ8OobmUgZGFucyBsZSBsb2dlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpdmVyIGNvbW1lIMOpdMOpLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9ibG9ja3F1b3RlPjwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuR3JvdXAgY2VudGVyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPSdpbWcvaXRlL2FjY3VlaWwucG5nJyB3cmFwcGVkIHVpPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+TGVzIGF2YW50YWdlcyBkZSBsJ2lzb2xhdGlvbjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgYmFja2dyb3VuZENvbG9yOiAnd2hpdGVzbW9rZScsIGZvbnRGYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBsaW5lSGVpZ2h0OiAxLjUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjxtYXJrPkRlcyDDqWNvbm9taWVzIDo8L21hcms+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVjb25vbWlzZXoganVzcXUnw6AgMzAlIHN1ciB2b3MgZmFjdHVyZXMgPGJyIC8+PGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48bWFyaz5VbiBub3V2ZWF1IHZpc2FnZTo8L21hcms+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZvdHJlIG1haXNvbiBiw6luw6lmY2llIGQndW4gcmF2YWxlbWVudCBkZSBmYcOnYWRlPGJyIC8+PGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48bWFyaz5VbmUgcGx1cy12YWx1ZSA6PC9tYXJrPjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbmUgYXVnbWVudGF0aW9uIGRlIGxhIHZhbGV1ciBkZSB2b3RyZSBiaWVuPGJyIC8+PGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48bWFyaz5VbmUgc3VyZmFjZSBoYWJpdGFibGUgaW5jaGFuZ8OpZSA6PC9tYXJrPjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEwnaXNvbGF0aW9uIGRlcyBtdXJzIHBhciBsJ2V4dMOpcmlldXIgbmUgcsOpZHVpdCBwYXMgbGEgc3VyZmFjZSBoYWJpdGFibGUgPGJyIC8+PGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48bWFyaz5VbmUgbWFpc29uIHNhaW5lIDo8L21hcms+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEwnaXNvbGF0aW9uIGNvbnRyaWJ1ZSDDoCByw6lkdWlyZSBsJ2h1bWlkaXTDqTxiciAvPjxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+PG1hcms+VW5lIHRlbXDDqXJhdHVyZSBhZ3LDqWFibGUgOjwvbWFyaz48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzdGV6IGF1IGNoYXVkIGVuIGhpdmVyIGV0IGF1IGZyYWlzIGVuIMOpdMOpPGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPSdpbWcvZWNvbG8vZWNvbG9naWUucG5nJyB3cmFwcGVkIHVpPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT48aDI+UXVlbGxlcyBzdWJ2ZW50aW9ucyBwb3VyIGwnaXNvbGF0aW9uIHRoZXJtaXF1ZSBleHTDqXJpZXVyID88L2gyPjwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlc21va2UnLCBmb250RmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+PG1hcms+MSAtIExlcyBjZXJ0aWZpY2F0cyBkJ8OpY29ub21pZSBkJ8OpbmVyZ2llPC9tYXJrPjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGEgbG9pIHBvcGUgb2JsaWdlIGxlcyB2ZW5kZXVycyBkJ8OpbmVyZ2llIGRlIHZvdHJlIHLDqWdpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChUb3RhbCwgRURGLCBFbmdpZS4uLikgw6AgYWNxdcOpcmlyIGRlcyBcImNlcnRpZmljYXRzIGQnw6ljb25vbWllXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkJ8OpbmVyZ2llXCIgZW4gZmluYW7Dp2FudCBsZXMgdHJhdmF1eCBkJ2lzb2xhdGlvbiBkZSB2b3RyZSBmb3llci48YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjxtYXJrPjIgLSBNYVByaW1Sw6lub3Y8L21hcms+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVW5lIGFpZGUgcG91ciDDqnRyZSBtaWV1eCBjaGV6IHZvdXMgZXQgcG91ciB1biBsb2dlbWVudCBtaWV1eCBwb3VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGEgcGxhbsOodGUgTWFQcmltZVLDqW5vduKAmSBlc3QgbGEgbm91dmVsbGUgcHJpbWUgZOKAmUV0YXQgcXVpIHZpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltcGxpZmllciBsZXMgYWlkZXMgw6AgbGEgcsOpbm92YXRpb24gw6luZXJnw6l0aXF1ZS4gUHLDqHMgZGUgbGEgbW9pdGnDqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcyBGcmFuw6dhaXMgeSBhIGRyb2l0IGTDqHMgMjAyMCwgYXZhbnQgdW4gw6lsYXJnaXNzZW1lbnQgZGVzIHB1YmxpY3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWkgcGV1dmVudCBlbiBiw6luw6lmaWNpZXIgw6AgcGFydGlyIGRlIDIwMjEuQ2V0dGUgbm91dmVsbGUgYWlkZSBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG91ciBidXQgZOKAmWFtw6lsaW9yZXIgbGEgcXVhbGl0w6kgZGUgc2VydmljZSBlbiBhY2PDqWzDqXJhbnQgZXQgZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBsaWZpYW50IGxlcyBkw6ltYXJjaGVzLiBEw6lzb3JtYWlzLCB1biBzaW1wbGUgZG9zc2llciBlbiBsaWduZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvdXMgcGVybWV0dHJhIGRlIGLDqW7DqWZpY2llciBk4oCZdW5lIGFpZGUgdmVyc8OpZSBkw6hzIGxhIGZpbiBkZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmF2YXV4IHNhbnMgYXR0ZW5kcmUgdW5lIHLDqWR1Y3Rpb24gZmlzY2FsZSBs4oCZYW5uw6llIHN1aXZhbnRlIGNvbW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXVwYXJhdmFudC48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+PG1hcms+UG91ciBhdm9pciBsZSBkcm9pdCDDoCBNYVByaW1lUsOpbm92LCBpbCB2b3VzIGZhdXQgOjwvbWFyaz48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+w6p0cmUgcHJvcHJpw6l0YWlyZSBk4oCZdW4gbG9nZW1lbnQgY29uc3RydWl0IGRlcHVpcyBwbHVzIGRlIDIgYW5zPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+bOKAmW9jY3VwZXIgY29tbWUgcsOpc2lkZW5jZSBwcmluY2lwYWxlPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+w6p0cmUgcHJvcHJpw6l0YWlyZSBk4oCZdW4gbG9nZW1lbnQgY29uc3RydWl0IGRlcHVpcyBwbHVzIGRlIDIgYW5zPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+bOKAmW9jY3VwZXIgY29tbWUgcsOpc2lkZW5jZSBwcmluY2lwYWxlPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+bmUgcGFzIGTDqXBhc3NlciB1biBwbGFmb25kIGRlIHJlc3NvdXJjZXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5mYWlyZSByw6lhbGlzZXIgbGVzIHRyYXZhdXggcGFyIHVuZSBlbnRyZXByaXNlIFJlY29ubnVlcyBHYXJhbnRlcyBkZSBs4oCZRW52aXJvbm5lbWVudCAoUkdFKTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPSdpbWcvZWNvbG8vZnJhbmNlLnBuZycgd3JhcHBlZCB1aT17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT48aDI+Ui5ULlMgSGFiaXRhdCB2b3VzIGFjY29tcGFnbmUgPC9oMj48L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZXNtb2tlJywgZm9udEZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+PG1hcms+UlRTIHNlcmEgcHJlcyBkZSB2b3VzPC9tYXJrPjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbnNlaWxzIHBvdXIgbCdvYnRlbnRpb24gZGVzIGFpZGVzLCBwcmltZXMsIHN1YnZlbnRpb25zIGV0IMOpY29ub21pZXMgIGQnaW1ww7R0cyAuLi4gPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UHJpc2UgZW4gY2hhcmdlIGRlIHRvdXRlcyBsZXMgZMOpbWFyY2hlcyBhZG1pbmlzdHJhdGl2ZXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gVW4gaW50ZXJsb2N1dGV1ciB1bmlxdWUsIGR1IGTDqWJ1dCDDoCBsYSBmaW4gZGUgdm90cmUgcHJvamV0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RGVzIHNvbHV0aW9ucyBkZSBjcsOpZGl0IGF2ZWMgbm9zIHBhcnRlbmFpcmVzIGZpbmFuY2llcnM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgR3JlYXRoZXJJdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVkaWEgZ3JlYXRlclRoYW49J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICA8SW5kZXhJdGUgLz5cclxuICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE1vYmlsZUl0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZWRpYSBiZXR3ZWVuPXtbXCJtb2JpbGVcIiwgXCJ0YWJsZXRcIl19PlxyXG4gICAgICAgICAgICAgICAgPEluZGV4SXRlIG1vYmlsZSAvPlxyXG4gICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxNZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JlYXRoZXJJdGUgPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvR3JlYXRoZXJJdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vYmlsZUl0ZT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L01vYmlsZUl0ZT5cclxuICAgICAgICAgICAgICAgIDwvTWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHByb3ByaW8gPSBbXHJcblxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzEnLFxyXG4gICAgICAgIHRleHQ6ICdQcm9wcmnDqXRhaXJlJyxcclxuICAgICAgICB2YWx1ZTogJ1Byb3ByacOpdGFpcmUnLFxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMicsXHJcbiAgICAgICAgdGV4dDogJ0xvY2F0YWlyZScsXHJcbiAgICAgICAgdmFsdWU6ICdMb2NhdGFpcmUnLFxyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuY29uc3Qgc2FsYXJpZSA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcxJyxcclxuICAgICAgICB0ZXh0OiAnU2VjdGV1ciBwdWJsaWMnLFxyXG4gICAgICAgIHZhbHVlOiAnU2VjdGV1ciBwdWJsaWMnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcyJyxcclxuICAgICAgICB0ZXh0OiAnU2VjdGV1ciBwcml2ZScsXHJcbiAgICAgICAgdmFsdWU6ICdTZWN0ZXVyIHByaXZlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMycsXHJcbiAgICAgICAgdGV4dDogJ1NlY3RldXIgYWdyaWNvbGUnLFxyXG4gICAgICAgIHZhbHVlOiAnU2VjdGV1ciBhZ3JpY29sZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzQnLFxyXG4gICAgICAgIHRleHQ6ICdOb24gc2FsYXJpZScsXHJcbiAgICAgICAgdmFsdWU6ICdOb24gc2FsYXJpZScsXHJcbiAgICB9LFxyXG5cclxuXVxyXG5jb25zdCBjaGF1ZmZhZ2UgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMScsXHJcbiAgICAgICAgdGV4dDogJ0VsZWN0cmlxdWUnLFxyXG4gICAgICAgIHZhbHVlOiAnRWxlY3RyaXF1ZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzInLFxyXG4gICAgICAgIHRleHQ6ICdGaW91bCcsXHJcbiAgICAgICAgdmFsdWU6ICdGaW91bCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzMnLFxyXG4gICAgICAgIHRleHQ6ICdHYXonLFxyXG4gICAgICAgIHZhbHVlOiAnR2F6JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNCcsXHJcbiAgICAgICAgdGV4dDogJ0F1dHJlJyxcclxuICAgICAgICB2YWx1ZTogJ0F1dHJlJyxcclxuICAgIH0sXHJcbl1cclxuY29uc3QgZmFtaWxsZSA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcxJyxcclxuICAgICAgICB0ZXh0OiAnMScsXHJcbiAgICAgICAgdmFsdWU6ICcxJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnMicsXHJcbiAgICAgICAgdGV4dDogJzInLFxyXG4gICAgICAgIHZhbHVlOiAnMicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJzMnLFxyXG4gICAgICAgIHRleHQ6ICczJyxcclxuICAgICAgICB2YWx1ZTogJzMnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc0JyxcclxuICAgICAgICB0ZXh0OiAnNCcsXHJcbiAgICAgICAgdmFsdWU6ICc0JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnNSBldCBwbHVzJyxcclxuICAgICAgICB0ZXh0OiAnNSBldCBwbHVzJyxcclxuICAgICAgICB2YWx1ZTogJzUgZXQgcGx1cycsXHJcbiAgICB9XHJcbl1cclxuY29uc3QgZmlzY2FsaXRlID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJzEnLFxyXG4gICAgICAgIHRleHQ6ICdkZSAw4oKsIMOgIDE5MDc04oKsJyxcclxuICAgICAgICB2YWx1ZTogJ2RlIDDigqwgw6AgMTkwNzTigqwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICcyJyxcclxuICAgICAgICB0ZXh0OiAnZGUgMTkwNzTigqwgw6AgMjc4OTbigqwnLFxyXG4gICAgICAgIHZhbHVlOiAnZGUgMTkwNzTigqwgw6AgMjc4OTbigqwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICczJyxcclxuICAgICAgICB0ZXh0OiAnZGUgMjc4OTbigqwgw6AgMzM1NDfigqwnLFxyXG4gICAgICAgIHZhbHVlOiAnZGUgMjc4OTbigqwgw6AgMzM1NDfigqwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc0JyxcclxuICAgICAgICB0ZXh0OiAnZGUgMzM1NDfigqwgw6AgMzkxOTLigqwnLFxyXG4gICAgICAgIHZhbHVlOiAnZGUgMzM1NDfigqwgw6AgMzkxOTLigqwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc1JyxcclxuICAgICAgICB0ZXh0OiAnZGUgMzkxOTLigqwgw6AgNDQ4NjDigqwnLFxyXG4gICAgICAgIHZhbHVlOiAnZGUgMzkxOTLigqwgw6AgNDQ4NjDigqwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICc2JyxcclxuICAgICAgICB0ZXh0OiAnKyBkZSA0NDk4NjDigqwnLFxyXG4gICAgICAgIHZhbHVlOiAnKyBkZSA0NDk4NjDigqwnLFxyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEluZGV4SXRlIGZyb20gXCIuL0luZGV4SXRlXCJcclxuaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tICdAYXJ0c3kvZnJlc25lbCdcclxuXHJcbmNvbnN0IHsgTWVkaWFDb250ZXh0UHJvdmlkZXIsIE1lZGlhIH0gPSBjcmVhdGVNZWRpYSh7XHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIG1vYmlsZTogMCxcclxuICAgICAgICB0YWJsZXQ6IDc2OCxcclxuICAgICAgICBjb21wdXRlcjogMTAyNCxcclxuICAgICAgICBlY3JhbjogMTE5MlxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmNsYXNzIEdyZWF0aGVySXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1lZGlhIGdyZWF0ZXJUaGFuPSdtb2JpbGUnPlxyXG4gICAgICAgICAgICAgICAgPEluZGV4SXRlIC8+XHJcbiAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBNb2JpbGVJdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVkaWEgYmV0d2Vlbj17W1wibW9iaWxlXCIsIFwidGFibGV0XCJdfT5cclxuICAgICAgICAgICAgICAgIDxJbmRleEl0ZSBtb2JpbGUgLz5cclxuICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyZWF0aGVySXRlID57dGhpcy5wcm9wcy5jaGlsZHJlbn08L0dyZWF0aGVySXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2JpbGVJdGU+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9Nb2JpbGVJdGU+XHJcbiAgICAgICAgICAgICAgICA8L01lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjcmVhdGVNZWRpYSB9IGZyb20gJ0BhcnRzeS9mcmVzbmVsJ1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEljb24sIEltYWdlLCBNZW51LCBTZWdtZW50LCBTaWRlYmFyLCBWaXNpYmlsaXR5LERyb3Bkb3duIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBNb2JpbGUgZnJvbSBcIi4uL3BhZ2VzL01vYmlsZS5qc1wiXHJcblxyXG5jb25zdCB7IE1lZGlhQ29udGV4dFByb3ZpZGVyLCBNZWRpYSB9ID0gY3JlYXRlTWVkaWEoe1xyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICBtb2JpbGU6IDAsXHJcbiAgICAgICAgdGFibGV0OiA5MDAsXHJcbiAgICAgICAgY29tcHV0ZXI6IDEwMjQsXHJcbiAgICAgICAgZWNyYW46IDExOTJcclxuICAgIH1cclxufSlcclxuXHJcbmNvbnN0IHNoYWRvdyA9XHJcbntcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgdGV4dFNoYWRvdzogJy0ycHggMCBibGFjaywgMCAycHggYmxhY2ssIDJweCAwIGJsYWNrLCAwIC0ycHggYmxhY2snLFxyXG4gICAgZm9udEZhbWlseTogXCJDb21pYyBTYW5zIE1TXCIsXHJcbiAgICBmb250U2l6ZTogMTdcclxufVxyXG5cclxuY29uc3Qgc2hhZG93MiA9XHJcbntcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgdGV4dFNoYWRvdzogJzJweCAycHggNHB4ICMwMDAwMDAnLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgZm9udEZhbWlseTogXCJDb21pYyBTYW5zIE1TXCIsXHJcbiAgICBmb250U2l6ZTogMTFcclxufVxyXG5cclxuY29uc3QgaHRtbCA9XCJcIlxyXG5cclxuXHJcbmNsYXNzIERlc2t0b3BDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0geyBhY3RpdmVJdGVtOiAnJyB9XHJcblxyXG4gICAgaGFuZGxlSXRlbUNsaWNrID0gKGUsIHsgbmFtZSB9KSA9PiB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSXRlbTogbmFtZSB9KVxyXG4gICAgaGlkZUZpeGVkTWVudSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmaXhlZDogZmFsc2UgfSlcclxuICAgIHNob3dGaXhlZE1lbnUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZml4ZWQ6IHRydWUgfSlcclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgeyBhY3RpdmVJdGVtIH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgY29uc3Qge2NvbG9yfT10aGlzLnByb3BzXHJcblxyXG4gICAgICAgIERlc2t0b3BDb250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gICAgICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkID5cclxuICAgICAgICAgICAgICAgIDxNZWRpYSBncmVhdGVyVGhhbj0nbW9iaWxlJz5cclxuICAgICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbmNlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Cb3R0b21QYXNzZWQ9e3RoaXMuc2hvd0ZpeGVkTWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Cb3R0b21QYXNzZWRSZXZlcnNlPXt0aGlzLmhpZGVGaXhlZE1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCB2ZXJ0aWNhbCBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonbGlnaHRncmV5J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGVzbW9rZScgfX0gc3RhY2thYmxlIGZsdWlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+PEltYWdlIHNyYz0naW1nL2Vjb2xvL3J0cy5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPSdhJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSd0aW55J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPScvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBpbnZlcnRlZCBzdHlsZT17c2hhZG93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdSw6lub3ZhdGlvbiBUZXJ0aWFpcmUgU2VydmljZScgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBwb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nTmV0dG95YWdlJyBocmVmPXtcIi9OZXR0b3lhZ2VcIitodG1sfSBzdHlsZT17eyBmb250V2VpZ2h0OlwiYm9sZFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnTmV0dG95YWdlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1nL25ldzEucG5nXCIgc2l6ZT1cIm1pbmlcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldHRveWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gaXRlbSB0ZXh0PSdSLkcuRSdzaW1wbGUgc3R5bGU9e3tmb250V2VpZ2h0OlwiYm9sZFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9QYWNcIitodG1sfT5QYWMgYWlyIGVhdTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvSXRlXCIraHRtbH0+SXNvbGF0aW9uIGV4dGVyaWV1cjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvSXRpXCIraHRtbH0+SXNvbGF0aW9uIGludGVyaWV1cjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvQWlyQWlyXCIraHRtbH0+UGFjIGFpciBhaXI8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL1Bob3Rvdm9sdGFpcXVlXCIraHRtbH0+UGhvdG92b2x0YWlxdWU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL0JhbGxvblNvbGFpcmVcIitodG1sfT5CYWxsb24gU29sYWlyZTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGl0ZW0gdGV4dD0nTGUgQmF0aW1lbnQnIHNpbXBsZSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9FbGVjdHJpY2l0ZVwiK2h0bWx9PkVsZWN0cmljaXTDqTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvUGxvbWJlcmllXCIraHRtbH0+UGxvbWJlcmllPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9SZXZldGVtZW50XCIraHRtbH0+UmV2ZXRlbWVudCBzb2w8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL0Nsb2lzb25cIitodG1sfT5DbG9pc29uIGJ1cmVhdTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J05vcyBQYXJ0ZW5haXJlcycgaHJlZj17XCIvUGFydGVuYWlyZVwiK2h0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ05vcyBQYXJ0ZW5haXJlcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nUXVpIHNvbW1lcyBub3VzJyBocmVmPXtcIi9NaXNzaW9uXCIraHRtbH1zdHlsZT17e2ZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ1F1aSBzb21tZXMgbm91cyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdRdWFsaWZpY2F0aW9uJyBocmVmPXtcIi9RdWFsaWZpY2F0aW9uXCIraHRtbH0gc3R5bGU9e3tmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdRdWFsaWZpY2F0aW9uJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVmlzaWJpbGl0eT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBNb2JpbGVDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7fVxyXG4gICAgc3RhdGUgPSB7IGFjdGl2ZUl0ZW06ICdob21lJyB9XHJcblxyXG4gICAgaGFuZGxlSXRlbUNsaWNrID0gKGUsIHsgbmFtZSB9KSA9PiB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSXRlbTogbmFtZSB9KVxyXG4gICAgaGFuZGxlU2lkZWJhckhpZGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2lkZWJhck9wZW5lZDogZmFsc2UgfSlcclxuICAgIGhhbmRsZVRvZ2dsZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaWRlYmFyT3BlbmVkOiB0cnVlIH0pXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCB7IHNpZGViYXJPcGVuZWQsIGFjdGl2ZUl0ZW0gfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgTW9iaWxlQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICAgICAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1lZGlhIGFzPXtTaWRlYmFyLnB1c2hhYmxlfSBiZXR3ZWVuPXtbXCJtb2JpbGVcIiwgXCJ0YWJsZXRcIl19PlxyXG4gICAgICAgICAgICAgICAgPFNpZGViYXIuUHVzaGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9e01lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj0ncHVzaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZVNpZGViYXJIaWRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXtzaWRlYmFyT3BlbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nTmV0dG95YWdlJyBocmVmPXtcIi9OZXR0b3lhZ2VcIiArIGh0bWx9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdOZXR0b3lhZ2UnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvbmV3MS5wbmdcIiBzaXplPVwibWluaVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldHRveWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBpdGVtIHRleHQ9J1IuRy5FJyBwb2ludGluZz1cImxlZnRcIiBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvUGFjXCIgKyBodG1sfT5QYWMgYWlyIGVhdTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL0l0ZVwiICsgaHRtbH0+SXNvbGF0aW9uIGV4dGVyaWV1cjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL0l0aVwiICsgaHRtbH0+SXNvbGF0aW9uIGludGVyaWV1cjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL0FpckFpclwiICsgaHRtbH0+UGFjIGFpciBhaXI8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9QaG90b3ZvbHRhaXF1ZVwiICsgaHRtbH0+UGhvdG92b2x0YWlxdWU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9CYWxsb25Tb2xhaXJlXCIgKyBodG1sfT5CYWxsb24gU29sYWlyZTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGl0ZW0gdGV4dD0nTGUgQmF0aW1lbnQncG9pbnRpbmc9XCJsZWZ0XCIgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9FbGVjdHJpY2l0ZVwiICsgaHRtbH0+RWxlY3RyaWNpdMOpPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIExpbmsgaHJlZj17XCIvUGxvbWJlcmllXCIgKyBodG1sfT5QbG9tYmVyaWU8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gTGluayBocmVmPXtcIi9SZXZldGVtZW50XCIgKyBodG1sfT5SZXZldGVtZW50IHNvbDwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBMaW5rIGhyZWY9e1wiL0Nsb2lzb25cIiArIGh0bWx9PkNsb2lzb24gYnVyZWF1PC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBwb3NpdGlvbj1cInJpZ2h0XCIgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J05vcyBQYXJ0ZW5haXJlcycgaHJlZj17XCIvUGFydGVuYWlyZVwiICsgaHRtbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ05vcyBQYXJ0ZW5haXJlcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J1F1aSBzb21tZXMgbm91cycgaHJlZj17XCIvTWlzc2lvblwiICsgaHRtbH0gc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ1F1aSBzb21tZXMgbm91cyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdRdWFsaWZpY2F0aW9uJyBocmVmPXtcIi9RdWFsaWZpY2F0aW9uXCIgKyBodG1sfSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnUXVhbGlmaWNhdGlvbid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9TaWRlYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyLlB1c2hlciBkaW1tZWQ9e3NpZGViYXJPcGVuZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiAyNTAsIHBhZGRpbmc6ICcwLjVlbSAwZW0nIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBpbnZlcnRlZCBzZWNvbmRhcnkgc2l6ZT0ndGlueSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17dGhpcy5oYW5kbGVUb2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2lyY3VsYXIgY29sb3I9J3RlYWwnIG5hbWU9J3NpZGViYXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vYmlsZSBtb2JpbGUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TaWRlYmFyLlB1c2hlcj5cclxuICAgICAgICAgICAgICAgIDwvU2lkZWJhci5QdXNoYWJsZT5cclxuICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IE15TWVudSA9ICh7IGNoaWxkcmVuIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPE1lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8RGVza3RvcENvbnRhaW5lcj57Y2hpbGRyZW59PC9EZXNrdG9wQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8TW9iaWxlQ29udGFpbmVyPntjaGlsZHJlbn08L01vYmlsZUNvbnRhaW5lcj5cclxuICAgICAgICA8L01lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeU1lbnUiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGVyLCBJbWFnZSwgR3JpZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgeyBBbmltYXRlZCB9IGZyb20gXCJyZWFjdC1hbmltYXRlZC1jc3NcIjtcclxuXHJcbi8vbWVudSBtb2JpbGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9iaWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBtb2JpbGUgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIHRleHQ+XHJcbiAgICAgICAgICAgICAgICA8QW5pbWF0ZWQgYW5pbWF0aW9uSW49XCJmYWRlSW5cIiBhbmltYXRpb25PdXQ9XCJmYWRlT3V0XCIgYW5pbWF0aW9uSW5EdXJhdGlvbj17NTAwMH0gYW5pbWF0aW9uT3V0RHVyYXRpb249ezEwMDB9IGlzVmlzaWJsZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9lY29sby9ydHMucG5nXCIgc2l6ZT1cInNtYWxsXCIgY2VudGVyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPSdoMSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD0nUsOpbm92YXRpb24gVGVydGlhaXJlIHNlcnZpY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IG1vYmlsZSA/ICcyZW0nIDogJzRlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogbW9iaWxlID8gJzAnIDogJzFlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz0naDInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J1ZvcyBwcm9qZXRzIGVudGllcmVtZW50IGZpbmFuY8OpJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IG1vYmlsZSA/ICcwLjdlbScgOiAnMWVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBtb2JpbGUgPyAnMC41ZW0nIDogJzAuNWVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWQ+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXJ0c3kvZnJlc25lbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbWFpbGpzLWNvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFuaW1hdGVkLWNzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==