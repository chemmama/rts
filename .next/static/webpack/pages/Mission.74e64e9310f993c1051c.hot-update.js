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
      alert('ok');
      this.setState({
        open: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var mobile = this.props.mobile;
      var shadow = {
        color: 'white',
        textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
        textAlign: "center",
        fontFamily: "verdana",
        fontSize: 25
      };
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
              lineNumber: 36,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 59
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 64
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
              type: "submit",
              color: "green",
              fluid: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: "V\xE9rifier mon \xE9ligibilit\xE9"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 71
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
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
                    lineNumber: 47,
                    columnNumber: 37
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Segment"], {
                    color: "green",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                      children: ["Nous nous occupons de mener \xE0 bien votre projet sur la r\xE9novation \xE9nerg\xE9tique.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 51,
                        columnNumber: 123
                      }, this), "Notre priorit\xE9 est de vous donner toutes les informations n\xE9cessaires \xE0 la r\xE9alisation de celui-ci. Il est normal de se perdre dans cet oc\xE9an d'informations diverses et vari\xE9es et notre mission est de vous guider.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 54,
                        columnNumber: 48
                      }, this), "Nous prenons en charge toutes les d\xE9marches administratives, constituons le dossier, contactons les diff\xE9rents artisans reconnus garants de l'environnement (RGE) pr\xE8s de chez vous. Un agent de ma\xEEtrise \xE0 l'ouvrage (AMO) sera pr\xE9sent avant les travaux pour la faisabilit\xE9 de votre projet et \xE0 la fin pour v\xE9rifier que ceux-ci sont r\xE9alis\xE9s dans les r\xE8gles de l'art.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 58,
                        columnNumber: 101
                      }, this), "Nous vous assurons une prise en charge totale avec Action Logement apr\xE8s validation de votre dossier.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                        children: "Aucune installation ne sera effectu\xE9e sans accord pr\xE9alable de notre partenaire et aucun frais ne vous sera factur\xE9 malgr\xE9 un \xE9ventuel refus."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 60,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 51,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
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
                    lineNumber: 66,
                    columnNumber: 37
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Segment"], {
                    color: "green",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                      style: {
                        fontFamily: 'Times New Roman'
                      },
                      children: ["Notre travail est encadr\xE9 par les diff\xE9rents organismes existants et chacun dispose de leur protocole.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 73,
                        columnNumber: 54
                      }, this), " Les aides dont vous pourrez b\xE9n\xE9ficier seront totalement transparentes et les documents attestant de vos aides vous seront directement transmis par l'organisme en question.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                        columnNumber: 128
                      }, this), "Nous vous accompagnerons dans ce travail tr\xE8s minutieux et toutes les d\xE9marches administratives seront effectu\xE9es par nos soins.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 76,
                        columnNumber: 76
                      }, this), "Vous pourrez trouver des t\xE9moignages attestant de notre s\xE9rieux et le procesus d'accompagnement du d\xE9but jusqu'\xE0 la fin du projet. "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Image"], {
            src: "img/ecolo/ecologie.png",
            centered: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("center", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
              type: "submit",
              color: "green",
              onClick: this.handleOpen,
              children: "V\xE9rifier mon \xE9ligibilit\xE9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Fiche__WEBPACK_IMPORTED_MODULE_9__["default"], {
            open: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTWlzc2lvbi5qcyJdLCJuYW1lcyI6WyJNaXNzaW9uIiwicHJvcHMiLCJzdGF0ZSIsIm9wZW4iLCJhbGVydCIsInNldFN0YXRlIiwibW9iaWxlIiwic2hhZG93IiwiY29sb3IiLCJ0ZXh0U2hhZG93IiwidGV4dEFsaWduIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiaGFuZGxlT3BlbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFHcUJBLE87Ozs7O0FBRWpCLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQVc7QUFBQ0MsVUFBSSxFQUFDO0FBQU4sS0FBWDtBQUZlO0FBR2xCOzs7O2lDQUVZO0FBQ1RDLFdBQUssQ0FBQyxJQUFELENBQUw7QUFDQyxXQUFLQyxRQUFMLENBQWM7QUFBRUYsWUFBSSxFQUFFO0FBQVIsT0FBZDtBQUNKOzs7NkJBRVE7QUFBQSxVQUNHRyxNQURILEdBQ2MsS0FBS0wsS0FEbkIsQ0FDR0ssTUFESDtBQUVMLFVBQU1DLE1BQU0sR0FDWjtBQUNJQyxhQUFLLEVBQUUsT0FEWDtBQUVJQyxrQkFBVSxFQUFFLHNEQUZoQjtBQUdJQyxpQkFBUyxFQUFFLFFBSGY7QUFJSUMsa0JBQVUsRUFBRSxTQUpoQjtBQUtJQyxnQkFBUSxFQUFFO0FBTGQsT0FEQTtBQVdBLDBCQUNJLHFFQUFDLDREQUFEO0FBQUEsZ0NBQ0kscUVBQUMseURBQUQ7QUFBUyxlQUFLLEVBQUVMLE1BQWhCO0FBQUEsaUNBQ1E7QUFBWSxpQkFBSyxFQUFFO0FBQUNLLHNCQUFRLEVBQUNOLE1BQU0sR0FBRyxFQUFILEdBQU07QUFBdEIsYUFBbkI7QUFBQSxvQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVrQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZsQyxlQUV1QztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZ2QyxlQUdJLHFFQUFDLHdEQUFEO0FBQVEsa0JBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFLLEVBQUMsT0FBNUI7QUFBb0MsbUJBQUssTUFBekM7QUFBQSxxQ0FBMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBU0kscUVBQUMsMkRBQUQ7QUFBVyxlQUFLLE1BQWhCO0FBQUEsa0NBQ0kscUVBQUMseURBQUQ7QUFBUyxvQkFBUSxNQUFqQjtBQUFBLG1DQUNJLHFFQUFDLHNEQUFEO0FBQU0sdUJBQVMsTUFBZjtBQUFnQix1QkFBUyxNQUF6QjtBQUEwQiwyQkFBYSxFQUFDLFFBQXhDO0FBQUEscUNBQ0kscUVBQUMsc0RBQUQsQ0FBTSxHQUFOO0FBQUEsd0NBQ0kscUVBQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsdUJBQUssRUFBRSxDQUFwQjtBQUF1Qix1QkFBSyxFQUFFO0FBQUVLLDhCQUFVLEVBQUU7QUFBZCxtQkFBOUI7QUFBQSwwQ0FDSTtBQUFJLHlCQUFLLEVBQUU7QUFBRUEsZ0NBQVUsRUFBRSxTQUFkO0FBQXlCSCwyQkFBSyxFQUFFO0FBQWhDLHFCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLGVBSUkscUVBQUMseURBQUQ7QUFBUyx5QkFBSyxFQUFDLE9BQWY7QUFBQSwyQ0FDSTtBQUFBLDRJQUFrRjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUFsRiwwUEFHTztBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUhQLG1hQU80RDtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQVA1RCwySEFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQW9CSSxxRUFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSx5QkFBTyxFQUFDLE1BQXJCO0FBQTRCLHVCQUFLLEVBQUUsQ0FBbkM7QUFBQSwwQ0FDSTtBQUFJLHlCQUFLLEVBQUU7QUFBRUcsZ0NBQVUsRUFBRSxTQUFkO0FBQXlCSCwyQkFBSyxFQUFFO0FBQWhDLHFCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLGVBS0kscUVBQUMseURBQUQ7QUFBUyx5QkFBSyxFQUFDLE9BQWY7QUFBQSwyQ0FDSTtBQUFJLDJCQUFLLEVBQUU7QUFBRUcsa0NBQVUsRUFBRTtBQUFkLHVCQUFYO0FBQUEsOEpBRWE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFGYixzTUFHdUY7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFIdkYsNEpBS21DO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBTG5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXBCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQTJDSSxxRUFBQyx1REFBRDtBQUFPLGVBQUcsRUFBQyx3QkFBWDtBQUFvQyxvQkFBUTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTNDSixlQTRDSTtBQUFBLG1DQUNJLHFFQUFDLHdEQUFEO0FBQVEsa0JBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFLLEVBQUMsT0FBNUI7QUFBb0MscUJBQU8sRUFBRSxLQUFLRSxVQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBNUNKLGVBK0NJLHFFQUFDLG9EQUFEO0FBQU8sZ0JBQUk7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQS9DSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFnRUg7Ozs7RUF6RmdDQyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL01pc3Npb24uNzRlNjRlOTMxMGY5OTNjMTA1MWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udGFpbmVyLCBTZWdtZW50LCBHcmlkLCBCdXR0b24sSW1hZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXRcIlxuaW1wb3J0IEZpY2hlIGZyb20gXCIuLi9wYWdlcy9GaWNoZVwiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlzc2lvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICBcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e29wZW46ZmFsc2V9XG4gICAgfVxuICAgIFxuICAgIGhhbmRsZU9wZW4oKSB7XG4gICAgICAgIGFsZXJ0KCdvaycpXG4gICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBtb2JpbGUgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgY29uc3Qgc2hhZG93ID1cbiAgICAgICAge1xuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICB0ZXh0U2hhZG93OiAnLTJweCAwIGJsYWNrLCAwIDJweCBibGFjaywgMnB4IDAgYmxhY2ssIDAgLTJweCBibGFjaycsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcInZlcmRhbmFcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiAyNVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgIFxuICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8U2VnbWVudCBzdHlsZT17c2hhZG93fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxibG9ja3F1b3RlIHN0eWxlPXt7Zm9udFNpemU6bW9iaWxlID8gMTI6MjV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDDgCBwcm9wb3MgZGUgUi5ULlM8L3N0cm9uZz48YnIvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY29sb3I9XCJncmVlblwiIGZsdWlkPjxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVsOpcmlmaWVyIG1vbiDDqWxpZ2liaWxpdMOpPC9oMz48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2txdW90ZT4gXG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQ+XG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IHZlcnRpY2FsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0YWNrYWJsZSB2ZXJ0aWNhbEFsaWduPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fSBzdHlsZT17eyBmb250RmFtaWx5OiBcIkNvbWljIHNhbnMgTVNcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250RmFtaWx5OiBcInZlcmRhbmFcIiwgY29sb3I6IFwiR3JlZW5cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdHJlIE1pc3Npb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCBjb2xvcj0nZ3JlZW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Ob3VzIG5vdXMgb2NjdXBvbnMgZGUgbWVuZXIgw6AgYmllbiB2b3RyZSBwcm9qZXQgc3VyIGxhIHLDqW5vdmF0aW9uIMOpbmVyZ8OpdGlxdWUuPGJyLz4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90cmUgcHJpb3JpdMOpIGVzdCBkZSB2b3VzIGRvbm5lciB0b3V0ZXMgbGVzIGluZm9ybWF0aW9ucyBuw6ljZXNzYWlyZXMgw6AgbGEgcsOpYWxpc2F0aW9uIGRlIGNlbHVpLWNpLiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbCBlc3Qgbm9ybWFsIGRlIHNlIHBlcmRyZSBkYW5zIGNldCBvY8OpYW4gZCdpbmZvcm1hdGlvbnMgZGl2ZXJzZXMgZXQgdmFyacOpZXMgZXQgbm90cmUgbWlzc2lvbiBlc3QgZGUgdm91cyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWlkZXIuPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3VzIHByZW5vbnMgZW4gY2hhcmdlIHRvdXRlcyBsZXMgZMOpbWFyY2hlcyBhZG1pbmlzdHJhdGl2ZXMsIGNvbnN0aXR1b25zIGxlIGRvc3NpZXIsIGNvbnRhY3RvbnMgbGVzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZmbDqXJlbnRzIGFydGlzYW5zIHJlY29ubnVzIGdhcmFudHMgZGUgbCdlbnZpcm9ubmVtZW50IChSR0UpIHByw6hzIGRlIGNoZXogdm91cy4gVW4gYWdlbnQgZGUgbWHDrnRyaXNlIMOgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwnb3V2cmFnZSAoQU1PKSBzZXJhIHByw6lzZW50IGF2YW50IGxlcyB0cmF2YXV4IHBvdXIgbGEgZmFpc2FiaWxpdMOpIGRlIHZvdHJlIHByb2pldCBldCDDoCBsYSBmaW4gcG91ciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2w6lyaWZpZXIgcXVlIGNldXgtY2kgc29udCByw6lhbGlzw6lzIGRhbnMgbGVzIHLDqGdsZXMgZGUgbCdhcnQuPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3VzIHZvdXMgYXNzdXJvbnMgdW5lIHByaXNlIGVuIGNoYXJnZSB0b3RhbGUgYXZlYyBBY3Rpb24gTG9nZW1lbnQgYXByw6hzIHZhbGlkYXRpb24gZGUgdm90cmUgZG9zc2llci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkF1Y3VuZSBpbnN0YWxsYXRpb24gbmUgc2VyYSBlZmZlY3R1w6llIHNhbnMgYWNjb3JkIHByw6lhbGFibGUgZGUgbm90cmUgcGFydGVuYWlyZSBldCBhdWN1biBmcmFpcyBuZSB2b3VzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmEgZmFjdHVyw6kgbWFsZ3LDqSB1biDDqXZlbnR1ZWwgcmVmdXMuPC9zdHJvbmc+PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gZmxvYXRlZD0nbGVmdCcgd2lkdGg9ezZ9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250RmFtaWx5OiBcInZlcmRhbmFcIiwgY29sb3I6IFwiR3JlZW5cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvdXJxdW9pIG5vdXMgZmFpcmUgY29uZmlhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCBjb2xvcj0nZ3JlZW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250RmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RyZSB0cmF2YWlsIGVzdCBlbmNhZHLDqSBwYXIgbGVzIGRpZmbDqXJlbnRzIG9yZ2FuaXNtZXMgZXhpc3RhbnRzIGV0IGNoYWN1biBkaXNwb3NlIGRlIGxldXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdG9jb2xlLjxici8+IExlcyBhaWRlcyBkb250IHZvdXMgcG91cnJleiBiw6luw6lmaWNpZXIgc2Vyb250IHRvdGFsZW1lbnQgdHJhbnNwYXJlbnRlcyBldCBsZXMgZG9jdW1lbnRzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVzdGFudCBkZSB2b3MgYWlkZXMgdm91cyBzZXJvbnQgZGlyZWN0ZW1lbnQgdHJhbnNtaXMgcGFyIGwnb3JnYW5pc21lIGVuIHF1ZXN0aW9uLjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm91cyB2b3VzIGFjY29tcGFnbmVyb25zIGRhbnMgY2UgdHJhdmFpbCB0csOocyBtaW51dGlldXggZXQgdG91dGVzIGxlcyBkw6ltYXJjaGVzIGFkbWluaXN0cmF0aXZlcyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJvbnQgZWZmZWN0dcOpZXMgcGFyIG5vcyBzb2lucy48YnIvPlZvdXMgcG91cnJleiB0cm91dmVyIGRlcyB0w6ltb2lnbmFnZXMgYXR0ZXN0YW50IGRlIG5vdHJlIHPDqXJpZXV4IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV0IGxlIHByb2Nlc3VzIGQnYWNjb21wYWduZW1lbnQgZHUgZMOpYnV0IGp1c3F1J8OgIGxhIGZpbiBkdSBwcm9qZXQuIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWcvZWNvbG8vZWNvbG9naWUucG5nXCIgY2VudGVyZWQvPlxuICAgICAgICAgICAgICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY29sb3I9XCJncmVlblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlT3Blbn0+VsOpcmlmaWVyIG1vbiDDqWxpZ2liaWxpdMOpPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvY2VudGVyPlxuICAgICAgICAgICAgICAgICAgICA8RmljaGUgb3BlbiAvPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=