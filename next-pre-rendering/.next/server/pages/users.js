"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/users";
exports.ids = ["pages/users"];
exports.modules = {

/***/ "./components/user.js":
/*!****************************!*\
  !*** ./components/user.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst User = ({ user  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: user.name\n            }, void 0, false, {\n                fileName: \"E:\\\\code\\\\NEXTJs\\\\next-pre-rendering\\\\components\\\\user.js\",\n                lineNumber: 4,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: user.email\n            }, void 0, false, {\n                fileName: \"E:\\\\code\\\\NEXTJs\\\\next-pre-rendering\\\\components\\\\user.js\",\n                lineNumber: 5,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQSxNQUFNQSxPQUFPLENBQUMsRUFBRUMsS0FBSSxFQUFFLEdBQUs7SUFDdkIscUJBQ0k7OzBCQUNJLDhEQUFDQzswQkFBR0QsS0FBS0UsSUFBSTs7Ozs7OzBCQUNiLDhEQUFDRDswQkFBR0QsS0FBS0csS0FBSzs7Ozs7Ozs7QUFHMUI7QUFFQSxpRUFBZUosSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcHJlLXJlbmRlcmluZy8uL2NvbXBvbmVudHMvdXNlci5qcz9jN2UzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFVzZXIgPSAoeyB1c2VyIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHA+e3VzZXIubmFtZX08L3A+XHJcbiAgICAgICAgICAgIDxwPnt1c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjsiXSwibmFtZXMiOlsiVXNlciIsInVzZXIiLCJwIiwibmFtZSIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/user.js\n");

/***/ }),

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UserList),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/user */ \"./components/user.js\");\n\n\nfunction UserList({ users  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"List of Users\"\n            }, void 0, false, {\n                fileName: \"E:\\\\code\\\\NEXTJs\\\\next-pre-rendering\\\\pages\\\\users.js\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, this),\n            users.map((user)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            user: user\n                        }, void 0, false, {\n                            fileName: \"E:\\\\code\\\\NEXTJs\\\\next-pre-rendering\\\\pages\\\\users.js\",\n                            lineNumber: 11,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"E:\\\\code\\\\NEXTJs\\\\next-pre-rendering\\\\pages\\\\users.js\",\n                            lineNumber: 12,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, user.id, true, {\n                    fileName: \"E:\\\\code\\\\NEXTJs\\\\next-pre-rendering\\\\pages\\\\users.js\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, this);\n            })\n        ]\n    }, void 0, true);\n}\nconst getStaticProps = async ()=>{\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n    const data = await response.json();\n    console.log(data);\n    return {\n        props: {\n            users: data // any key value pair which will be automatically injected as props\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXNDO0FBRXZCLFNBQVNDLFNBQVMsRUFBRUMsTUFBSyxFQUFFLEVBQUU7SUFDeEMscUJBQ0U7OzBCQUNFLDhEQUFDQzswQkFBRzs7Ozs7O1lBRUhELE1BQU1FLEdBQUcsQ0FBQyxDQUFDQyxPQUFTO2dCQUNuQixxQkFDRSw4REFBQ0M7O3NDQUNDLDhEQUFDTix3REFBSUE7NEJBQUNLLE1BQU1BOzs7Ozs7c0NBQ1osOERBQUNFOzs7Ozs7bUJBRk9GLEtBQUtHLEVBQUU7Ozs7O1lBS3JCOzs7QUFHUixDQUFDO0FBRU0sTUFBTUMsaUJBQWlCLFVBQVk7SUFDdEMsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO0lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtJQUNoQ0MsUUFBUUMsR0FBRyxDQUFDSDtJQUVaLE9BQU87UUFDSEksT0FBTztZQUNIZCxPQUFPVSxLQUFhLG1FQUFtRTtRQUMzRjtJQUNKO0FBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcHJlLXJlbmRlcmluZy8uL3BhZ2VzL3VzZXJzLmpzPzAwNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvdXNlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckxpc3QoeyB1c2VycyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxoMT5MaXN0IG9mIFVzZXJzPC9oMT5cclxuXHJcbiAgICAgICAge3VzZXJzLm1hcCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e3VzZXIuaWR9PlxyXG4gICAgICAgICAgICAgIDxVc2VyIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHVzZXJzOiBkYXRhICAgICAgICAgLy8gYW55IGtleSB2YWx1ZSBwYWlyIHdoaWNoIHdpbGwgYmUgYXV0b21hdGljYWxseSBpbmplY3RlZCBhcyBwcm9wc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJVc2VyIiwiVXNlckxpc3QiLCJ1c2VycyIsImgxIiwibWFwIiwidXNlciIsImRpdiIsImhyIiwiaWQiLCJnZXRTdGF0aWNQcm9wcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users.js"));
module.exports = __webpack_exports__;

})();