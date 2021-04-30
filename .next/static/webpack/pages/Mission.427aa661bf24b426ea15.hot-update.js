webpackHotUpdate_N_E("pages/Mission",{

/***/ "./pages/Mission.js":
/*!**************************!*\
  !*** ./pages/Mission.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mission; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _pages_Fiche__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/Fiche */ "./pages/Fiche.js");






var _jsxFileName = "C:\\Users\\famil\\Desktop\\emile programmation\\site_emile\\renovation\\pages\\Mission.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Mission = /*#__PURE__*/function (_React$Component) {
  Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Mission, _React$Component);

  var _super = _createSuper(Mission);

  function Mission(props) {
    var _this;

    Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Mission);

    _this = _super.call(this, props);
    _this.state = {
      open: false
    };
    return _this;
  }

  Object(C_Users_famil_Desktop_emile_programmation_site_emile_renovation_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Mission, [{
    key: "handleOpen",
    value: function handleOpen() {
      this.setState({
        open: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var mobile = this.props.mobile;
      var shadow = {
        color: 'white',
        textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
        textAlign: "center",
        fontFamily: "verdana",
        fontSize: 25
      };
      var open = this.state.open;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MyLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Segment"], {
          style: shadow,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("blockquote", {
            style: {
              fontSize: mobile ? 12 : 25
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "\xC0 propos de R.T.S"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 59
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 64
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
              type: "submit",
              color: "green",
              fluid: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: "V\xE9rifier mon \xE9ligibilit\xE9"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 71
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Container"], {
          fluid: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Segment"], {
            vertical: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
              container: true,
              stackable: true,
              verticalAlign: "center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Row, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, {
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
                    lineNumber: 44,
                    columnNumber: 37
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Segment"], {
                    color: "green",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                      children: ["Nous nous occupons de mener \xE0 bien votre projet sur la r\xE9novation \xE9nerg\xE9tique.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 48,
                        columnNumber: 123
                      }, this), "Notre priorit\xE9 est de vous donner toutes les informations n\xE9cessaires \xE0 la r\xE9alisation de celui-ci. Il est normal de se perdre dans cet oc\xE9an d'informations diverses et vari\xE9es et notre mission est de vous guider.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 51,
                        columnNumber: 48
                      }, this), "Nous prenons en charge toutes les d\xE9marches administratives, constituons le dossier, contactons les diff\xE9rents artisans reconnus garants de l'environnement (RGE) pr\xE8s de chez vous. Un agent de ma\xEEtrise \xE0 l'ouvrage (AMO) sera pr\xE9sent avant les travaux pour la faisabilit\xE9 de votre projet et \xE0 la fin pour v\xE9rifier que ceux-ci sont r\xE9alis\xE9s dans les r\xE8gles de l'art.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 55,
                        columnNumber: 101
                      }, this), "Nous vous assurons une prise en charge totale avec Action Logement apr\xE8s validation de votre dossier.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                        children: "Aucune installation ne sera effectu\xE9e sans accord pr\xE9alable de notre partenaire et aucun frais ne vous sera factur\xE9 malgr\xE9 un \xE9ventuel refus."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 57,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, {
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
                    lineNumber: 63,
                    columnNumber: 37
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Segment"], {
                    color: "green",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                      style: {
                        fontFamily: 'Times New Roman'
                      },
                      children: ["Notre travail est encadr\xE9 par les diff\xE9rents organismes existants et chacun dispose de leur protocole.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 70,
                        columnNumber: 54
                      }, this), " Les aides dont vous pourrez b\xE9n\xE9ficier seront totalement transparentes et les documents attestant de vos aides vous seront directement transmis par l'organisme en question.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 71,
                        columnNumber: 128
                      }, this), "Nous vous accompagnerons dans ce travail tr\xE8s minutieux et toutes les d\xE9marches administratives seront effectu\xE9es par nos soins.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 73,
                        columnNumber: 76
                      }, this), "Vous pourrez trouver des t\xE9moignages attestant de notre s\xE9rieux et le procesus d'accompagnement du d\xE9but jusqu'\xE0 la fin du projet. "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Image"], {
            src: "img/ecolo/ecologie.png",
            centered: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("center", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
              type: "submit",
              color: "green",
              onClick: function onClick() {
                _this2.handleOpen;
              },
              children: "V\xE9rifier mon \xE9ligibilit\xE9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 30
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 36
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 42
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: ["je suis ", this.state.open]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, this);
    }
  }]);

  return Mission;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTWlzc2lvbi5qcyJdLCJuYW1lcyI6WyJNaXNzaW9uIiwicHJvcHMiLCJzdGF0ZSIsIm9wZW4iLCJzZXRTdGF0ZSIsIm1vYmlsZSIsInNoYWRvdyIsImNvbG9yIiwidGV4dFNoYWRvdyIsInRleHRBbGlnbiIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImhhbmRsZU9wZW4iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBR3FCQSxPOzs7OztBQUVqQixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFXO0FBQUNDLFVBQUksRUFBQztBQUFOLEtBQVg7QUFGZTtBQUdsQjs7OztpQ0FFWTtBQUNSLFdBQUtDLFFBQUwsQ0FBYztBQUFFRCxZQUFJLEVBQUM7QUFBUCxPQUFkO0FBQ0o7Ozs2QkFFUTtBQUFBOztBQUFBLFVBQ0dFLE1BREgsR0FDYyxLQUFLSixLQURuQixDQUNHSSxNQURIO0FBRUwsVUFBTUMsTUFBTSxHQUNaO0FBQ0lDLGFBQUssRUFBRSxPQURYO0FBRUlDLGtCQUFVLEVBQUUsc0RBRmhCO0FBR0lDLGlCQUFTLEVBQUUsUUFIZjtBQUlJQyxrQkFBVSxFQUFFLFNBSmhCO0FBS0lDLGdCQUFRLEVBQUU7QUFMZCxPQURBO0FBRkssVUFVRVIsSUFWRixHQVVRLEtBQUtELEtBVmIsQ0FVRUMsSUFWRjtBQVdMLDBCQUNJLHFFQUFDLDREQUFEO0FBQUEsZ0NBQ0kscUVBQUMseURBQUQ7QUFBUyxlQUFLLEVBQUVHLE1BQWhCO0FBQUEsaUNBQ1E7QUFBWSxpQkFBSyxFQUFFO0FBQUNLLHNCQUFRLEVBQUNOLE1BQU0sR0FBRyxFQUFILEdBQU07QUFBdEIsYUFBbkI7QUFBQSxvQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QThDYTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTlDYixlQThDbUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE5Q25CLGVBOEN5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTlDekIsZUErQ0k7QUFBQSxtQ0FBYSxLQUFLVixLQUFMLENBQVdDLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEvQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBaUVIOzs7O0VBdkZnQ1UsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9NaXNzaW9uLjQyN2FhNjYxYmYyNGI0MjZlYTE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRhaW5lciwgU2VnbWVudCwgR3JpZCwgQnV0dG9uLEltYWdlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0XCJcbmltcG9ydCBGaWNoZSBmcm9tIFwiLi4vcGFnZXMvRmljaGVcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pc3Npb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlPXtvcGVuOmZhbHNlfVxuICAgIH1cbiAgICBcbiAgICBoYW5kbGVPcGVuKCkge1xuICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46dHJ1ZSB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBtb2JpbGUgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgY29uc3Qgc2hhZG93ID1cbiAgICAgICAge1xuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICB0ZXh0U2hhZG93OiAnLTJweCAwIGJsYWNrLCAwIDJweCBibGFjaywgMnB4IDAgYmxhY2ssIDAgLTJweCBibGFjaycsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcInZlcmRhbmFcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiAyNVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHtvcGVufT10aGlzLnN0YXRlXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxTZWdtZW50IHN0eWxlPXtzaGFkb3d9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJsb2NrcXVvdGUgc3R5bGU9e3tmb250U2l6ZTptb2JpbGUgPyAxMjoyNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMOAIHByb3BvcyBkZSBSLlQuUzwvc3Ryb25nPjxici8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjb2xvcj1cImdyZWVuXCIgZmx1aWQ+PGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWw6lyaWZpZXIgbW9uIMOpbGlnaWJpbGl0w6k8L2gzPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9ibG9ja3F1b3RlPiBcbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgdmVydGljYWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3RhY2thYmxlIHZlcnRpY2FsQWxpZ249J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiQ29taWMgc2FucyBNU1wiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwidmVyZGFuYVwiLCBjb2xvcjogXCJHcmVlblwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90cmUgTWlzc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPSdncmVlbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pk5vdXMgbm91cyBvY2N1cG9ucyBkZSBtZW5lciDDoCBiaWVuIHZvdHJlIHByb2pldCBzdXIgbGEgcsOpbm92YXRpb24gw6luZXJnw6l0aXF1ZS48YnIvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RyZSBwcmlvcml0w6kgZXN0IGRlIHZvdXMgZG9ubmVyIHRvdXRlcyBsZXMgaW5mb3JtYXRpb25zIG7DqWNlc3NhaXJlcyDDoCBsYSByw6lhbGlzYXRpb24gZGUgY2VsdWktY2kuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElsIGVzdCBub3JtYWwgZGUgc2UgcGVyZHJlIGRhbnMgY2V0IG9jw6lhbiBkJ2luZm9ybWF0aW9ucyBkaXZlcnNlcyBldCB2YXJpw6llcyBldCBub3RyZSBtaXNzaW9uIGVzdCBkZSB2b3VzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1aWRlci48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdXMgcHJlbm9ucyBlbiBjaGFyZ2UgdG91dGVzIGxlcyBkw6ltYXJjaGVzIGFkbWluaXN0cmF0aXZlcywgY29uc3RpdHVvbnMgbGUgZG9zc2llciwgY29udGFjdG9ucyBsZXMgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlmZsOpcmVudHMgYXJ0aXNhbnMgcmVjb25udXMgZ2FyYW50cyBkZSBsJ2Vudmlyb25uZW1lbnQgKFJHRSkgcHLDqHMgZGUgY2hleiB2b3VzLiBVbiBhZ2VudCBkZSBtYcOudHJpc2Ugw6AgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCdvdXZyYWdlIChBTU8pIHNlcmEgcHLDqXNlbnQgYXZhbnQgbGVzIHRyYXZhdXggcG91ciBsYSBmYWlzYWJpbGl0w6kgZGUgdm90cmUgcHJvamV0IGV0IMOgIGxhIGZpbiBwb3VyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHbDqXJpZmllciBxdWUgY2V1eC1jaSBzb250IHLDqWFsaXPDqXMgZGFucyBsZXMgcsOoZ2xlcyBkZSBsJ2FydC48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdXMgdm91cyBhc3N1cm9ucyB1bmUgcHJpc2UgZW4gY2hhcmdlIHRvdGFsZSBhdmVjIEFjdGlvbiBMb2dlbWVudCBhcHLDqHMgdmFsaWRhdGlvbiBkZSB2b3RyZSBkb3NzaWVyLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+QXVjdW5lIGluc3RhbGxhdGlvbiBuZSBzZXJhIGVmZmVjdHXDqWUgc2FucyBhY2NvcmQgcHLDqWFsYWJsZSBkZSBub3RyZSBwYXJ0ZW5haXJlIGV0IGF1Y3VuIGZyYWlzIG5lIHZvdXMgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyYSBmYWN0dXLDqSBtYWxncsOpIHVuIMOpdmVudHVlbCByZWZ1cy48L3N0cm9uZz48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPSdsZWZ0JyB3aWR0aD17Nn0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwidmVyZGFuYVwiLCBjb2xvcjogXCJHcmVlblwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUG91cnF1b2kgbm91cyBmYWlyZSBjb25maWFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPSdncmVlbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdHJlIHRyYXZhaWwgZXN0IGVuY2FkcsOpIHBhciBsZXMgZGlmZsOpcmVudHMgb3JnYW5pc21lcyBleGlzdGFudHMgZXQgY2hhY3VuIGRpc3Bvc2UgZGUgbGV1ciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm90b2NvbGUuPGJyLz4gTGVzIGFpZGVzIGRvbnQgdm91cyBwb3VycmV6IGLDqW7DqWZpY2llciBzZXJvbnQgdG90YWxlbWVudCB0cmFuc3BhcmVudGVzIGV0IGxlcyBkb2N1bWVudHMgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZXN0YW50IGRlIHZvcyBhaWRlcyB2b3VzIHNlcm9udCBkaXJlY3RlbWVudCB0cmFuc21pcyBwYXIgbCdvcmdhbmlzbWUgZW4gcXVlc3Rpb24uPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3VzIHZvdXMgYWNjb21wYWduZXJvbnMgZGFucyBjZSB0cmF2YWlsIHRyw6hzIG1pbnV0aWV1eCBldCB0b3V0ZXMgbGVzIGTDqW1hcmNoZXMgYWRtaW5pc3RyYXRpdmVzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcm9udCBlZmZlY3R1w6llcyBwYXIgbm9zIHNvaW5zLjxici8+Vm91cyBwb3VycmV6IHRyb3V2ZXIgZGVzIHTDqW1vaWduYWdlcyBhdHRlc3RhbnQgZGUgbm90cmUgc8OpcmlldXggXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXQgbGUgcHJvY2VzdXMgZCdhY2NvbXBhZ25lbWVudCBkdSBkw6lidXQganVzcXUnw6AgbGEgZmluIGR1IHByb2pldC4gPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltZy9lY29sby9lY29sb2dpZS5wbmdcIiBjZW50ZXJlZC8+XG4gICAgICAgICAgICAgICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjb2xvcj1cImdyZWVuXCIgb25DbGljaz17KCkgPT57dGhpcy5oYW5kbGVPcGVufX0+VsOpcmlmaWVyIG1vbiDDqWxpZ2liaWxpdMOpPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvY2VudGVyPjxiciAvPjxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8aDE+amUgc3VpcyB7dGhpcy5zdGF0ZS5vcGVufTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=