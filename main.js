/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Lato-Italic.ttf */ \"./fonts/Lato-Italic.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Lato-Regular.ttf */ \"./fonts/Lato-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n@font-face {\\r\\n  font-family: 'LatoItalic';\\r\\n  src : url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  font-weight: 400;\\r\\n  font-style: italic;\\r\\n}\\r\\n@font-face {\\r\\n  font-family: 'Lato';\\r\\n  src : url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  font-weight: 400;\\r\\n  font-style: normal;\\r\\n}\\r\\n* {\\r\\n/* outline: 1px red solid; */\\r\\nmargin: 0;\\r\\npadding: 0;\\r\\nbox-sizing: border-box;\\r\\n}\\r\\n\\r\\n:root{\\r\\nfont-size: 62.5%;\\r\\n/* Primary color - a rich, warm shade of brown */\\r\\n--caramel-primary: #A15E3E;\\r\\n/* Secondary colors - lighter shades of brown and amber */\\r\\n--caramel-secondary-1: #C47951;\\r\\n--caramel-secondary-2: #D99063;\\r\\n--caramel-secondary-3: #F1B37E;\\r\\n\\r\\n/* Accent colors - shades of orange and red */\\r\\n--caramel-accent-1: #FF7F49;\\r\\n--caramel-accent-2: #FFA07A;\\r\\n--caramel-accent-3: #FFA07A;\\r\\n\\r\\n/* Text colors - black or white for high contrast */\\r\\n--caramel-text-1: #000000;\\r\\n--caramel-text-2: #FFFFFF;\\r\\n  \\r\\n--header-bg-color: rgba(0, 0, 0, 0.9);\\r\\n--H1-FS: clamp(3.2rem, 6vw, 6.4rem);\\r\\n--H1-FF: \\\"LatoItalic\\\", sans-serif;\\r\\n--H1-padding: 2rem;\\r\\n\\r\\n--nav-FS: clamp(2.4rem, 4vw, 4.2rem);\\r\\n--nav-FF: \\\"LatoItalic\\\", sans-serif;\\r\\n--nav-item-bg-color: var(--caramel-primary) ;\\r\\n--nav-bg-color: var(--caramel-secondary-3) ;\\r\\n--nav-padding: 2rem;\\r\\n\\r\\n--header-padding: 2rem;\\r\\n--font-color: rgba(238, 238, 238, 0.9);\\r\\n\\r\\n--p-FS: clamp(2rem, 2vw, 3.2rem);\\r\\n--p-FF:\\\"Lato\\\", sans-serif;\\r\\n}\\r\\nnav {\\r\\ndisplay: flex;\\r\\njustify-content: center;\\r\\nflex-direction: row;\\r\\nfont-size: var(--nav-FS);\\r\\n/* background-color: var(--nav-bg-color); */\\r\\nfont-family: var(--nav-FF);\\r\\npadding-top: var(--nav-padding);\\r\\n}\\r\\n\\r\\n.nav-item-nav:hover {\\r\\n  transform: translateY(-10%);\\r\\n  border-bottom: 2px solid #fff;\\r\\n}\\r\\n.nav-item{\\r\\ndisplay: inline;\\r\\nmargin-left: 2rem;\\r\\n/* background-color: var(--nav-item-bg-color); */\\r\\ncursor: pointer;\\r\\nopacity: 0.8;\\r\\n}\\r\\n\\r\\nbody{\\r\\nfont-size: 1.6rem;\\r\\ncolor: #eee;\\r\\n}\\r\\n\\r\\n#shop-name{\\r\\n  font-family: var(--H1-FF);\\r\\n  font-size: var(--H1-FS);\\r\\n  text-align: center;\\r\\n  padding: var(--H1-padding);\\r\\n}\\r\\n\\r\\nheader{\\r\\n  padding-top: var(--header-padding);\\r\\n  padding-bottom: var(--header-padding);\\r\\n  background-color: var(--header-bg-color);\\r\\n}\\r\\n\\r\\n\\r\\n/* .founder::before {\\r\\n  content: \\\"\\\";\\r\\n  display: block;\\r\\n  width: 100%;\\r\\n  padding-bottom: 100%;\\r\\n  border-radius: 50%;\\r\\n} */\\r\\n\\r\\n.coffee-item {\\r\\n  margin: 2rem;\\r\\n}\\r\\nbody {\\r\\n  background-repeat: no-repeat;\\r\\n  background-position: center center;\\r\\n  background-size: cover;\\r\\n}\\r\\n\\r\\n.founder {\\r\\n  max-width: 200px;\\r\\n  height: auto;\\r\\n  margin-bottom: 2rem;\\r\\n  border-radius: 45%;\\r\\n  /* overflow-clip-margin: content-box;\\r\\n  overflow: clip; */\\r\\n  opacity: 0.9;\\r\\n}\\r\\n#menu-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(5, 1fr);  /* specify 5 columns */\\r\\n  justify-items: center;\\r\\n  margin: 5rem;\\r\\n  background-color: var(--header-bg-color);\\r\\n}\\r\\n#menu-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));  /* specify 5 columns */\\r\\n  justify-items: center;\\r\\n}\\r\\n\\r\\n#menu-container .coffee-item {\\r\\n  min-width: 150px;\\r\\n  font-size: var(--p-FS);\\r\\n  font-family: var(--p-FF);\\r\\n}\\r\\n\\r\\n\\r\\n@media (min-width: 768px) {\\r\\n  body {\\r\\n    background-position: 50% 50%;\\r\\n  }.founder {\\r\\n    max-width: 30%;\\r\\n    height: auto;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (min-width: 992px) {\\r\\n  body {\\r\\n    background-position: 55% 50%;\\r\\n  }\\r\\n  #menu-container {\\r\\n    grid-template-columns: repeat(5, 1fr);  /* specify 5 columns */\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (min-width: 1200px) {\\r\\n  body {\\r\\n    background-position: 60% 50%;\\r\\n  }\\r\\n}\\r\\n\\r\\n.active{\\r\\n    border-bottom: 2px solid var(--font-color);\\r\\n    opacity: 1;\\r\\n}\\r\\n\\r\\n.main{\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  padding: 5rem;\\r\\n}\\r\\n\\r\\n#main{\\r\\n  max-width: 700px;\\r\\n  animation: fadeIn 1.5s;\\r\\n  text-align: center;\\r\\n  padding: 5rem;\\r\\n  background-color: var(--header-bg-color);\\r\\n}\\r\\n\\r\\np{\\r\\n  padding-bottom: 2rem;\\r\\n  padding-top: 2rem;\\r\\n  font-size: var(--p-FS);\\r\\n  font-family: var(--p-FF);\\r\\n}\\r\\n\\r\\n\\r\\nfooter p {\\r\\n  padding: 0;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.fab.fa-github {\\r\\n  color: white;\\r\\n  font-size: 32px;\\r\\n  padding-left: 0.5rem;\\r\\n  display: inline;\\r\\n  opacity: 0.7;\\r\\n}\\r\\n.fab.fa-github:hover {\\r\\nopacity: 1;\\r\\n}\\r\\n\\r\\nfooter p{\\r\\n  position: fixed;  /* position the footer at a fixed position on the page */\\r\\n  bottom: 0;  /* position the footer at the bottom of the page */\\r\\n  width: 100%;\\r\\n  background-color: var(--header-bg-color);\\r\\n  text-align: center;\\r\\n  padding-bottom: 1rem;\\r\\n}\\r\\n\\r\\nh3{\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\nimg.coffee-img{\\r\\n  display: block;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n#menu-container :nth-last-child(-n+2) {\\r\\n  /* styles go here */\\r\\n  margin-bottom: 5rem;\\r\\n}\\r\\n\\r\\nimg.location{\\r\\n  width: 100%;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/img/cafeBg.jpg":
/*!****************************!*\
  !*** ./src/img/cafeBg.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/80c6cfb8e6781a02651a4b3c85e64450.jpg\");\n\n//# sourceURL=webpack://restaurant/./src/img/cafeBg.jpg?");

/***/ }),

/***/ "./src/img/coffee-1.png":
/*!******************************!*\
  !*** ./src/img/coffee-1.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/35a27d223899eed15967be638bbc7986.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/coffee-1.png?");

/***/ }),

/***/ "./src/img/coffee-10.png":
/*!*******************************!*\
  !*** ./src/img/coffee-10.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/8ff78c1c0ec3dc5940e5da40c6b6bc6c.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/coffee-10.png?");

/***/ }),

/***/ "./src/img/coffee-2.png":
/*!******************************!*\
  !*** ./src/img/coffee-2.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/239397168ba8c2f6782178775718dfef.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/coffee-2.png?");

/***/ }),

/***/ "./src/img/coffee-3.png":
/*!******************************!*\
  !*** ./src/img/coffee-3.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/0c4400b0a6f281ee865af112578beac5.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/coffee-3.png?");

/***/ }),

/***/ "./src/img/coffee-4.png":
/*!******************************!*\
  !*** ./src/img/coffee-4.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/0a659fe06cdf4128e09b51f01e83f499.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/coffee-4.png?");

/***/ }),

/***/ "./src/img/coffee-5.png":
/*!******************************!*\
  !*** ./src/img/coffee-5.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/eb697b02f4cae9b0aea65135ea242232.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/coffee-5.png?");

/***/ }),

/***/ "./src/img/coffee-6.png":
/*!******************************!*\
  !*** ./src/img/coffee-6.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/77045b76d10907b03d17a346c5a53c4c.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/coffee-6.png?");

/***/ }),

/***/ "./src/img/coffee-7.png":
/*!******************************!*\
  !*** ./src/img/coffee-7.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/6153d8aabf7e6eb41c765591b9c48c86.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/coffee-7.png?");

/***/ }),

/***/ "./src/img/coffee-8.png":
/*!******************************!*\
  !*** ./src/img/coffee-8.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/fc363f18b3eaf8d20388054bacd6fa99.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/coffee-8.png?");

/***/ }),

/***/ "./src/img/coffee-9.png":
/*!******************************!*\
  !*** ./src/img/coffee-9.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/b36efff5fe1d429287af3c4d05795256.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/coffee-9.png?");

/***/ }),

/***/ "./src/img/founder.jpg":
/*!*****************************!*\
  !*** ./src/img/founder.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/64dc59e48e9d0931b13f997f2bb76adf.jpg\");\n\n//# sourceURL=webpack://restaurant/./src/img/founder.jpg?");

/***/ }),

/***/ "./src/img/location.png":
/*!******************************!*\
  !*** ./src/img/location.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/6ddced007c2603d7c2e153910da03b0f.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/location.png?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"coffee\": () => (/* binding */ coffee),\n/* harmony export */   \"contact\": () => (/* binding */ contact),\n/* harmony export */   \"homeData\": () => (/* binding */ homeData)\n/* harmony export */ });\n/* harmony import */ var _img_coffee_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/coffee-1.png */ \"./src/img/coffee-1.png\");\n/* harmony import */ var _img_coffee_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/coffee-2.png */ \"./src/img/coffee-2.png\");\n/* harmony import */ var _img_coffee_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/coffee-3.png */ \"./src/img/coffee-3.png\");\n/* harmony import */ var _img_coffee_4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/coffee-4.png */ \"./src/img/coffee-4.png\");\n/* harmony import */ var _img_coffee_5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/coffee-5.png */ \"./src/img/coffee-5.png\");\n/* harmony import */ var _img_coffee_6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/coffee-6.png */ \"./src/img/coffee-6.png\");\n/* harmony import */ var _img_coffee_7_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/coffee-7.png */ \"./src/img/coffee-7.png\");\n/* harmony import */ var _img_coffee_8_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/coffee-8.png */ \"./src/img/coffee-8.png\");\n/* harmony import */ var _img_coffee_9_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/coffee-9.png */ \"./src/img/coffee-9.png\");\n/* harmony import */ var _img_coffee_10_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/coffee-10.png */ \"./src/img/coffee-10.png\");\n/* harmony import */ var _img_location_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/location.png */ \"./src/img/location.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst homeData = {\r\n    title: 'Best coffee in the country',\r\n    tagline: 'Made with love since 1908',\r\n    callToAction: 'Order online or visit us!'\r\n  };\r\n\r\n  const coffee = [\r\n    {\r\n      name: 'Caramel Latte',\r\n      img: _img_coffee_1_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n    },\r\n    {\r\n      name: 'Latte',\r\n      img: _img_coffee_2_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n    },\r\n    {\r\n      name: 'Chai Latte',\r\n      img: _img_coffee_3_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n    },\r\n    {\r\n      name: 'Cappuccino',\r\n      img: _img_coffee_4_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\r\n    },\r\n    {\r\n      name: 'Coffee Americano',\r\n      img: _img_coffee_5_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\r\n    },\r\n    {\r\n      name: 'Espresso',\r\n      img: _img_coffee_6_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\r\n    },\r\n    {\r\n      name: 'Macchiato',\r\n      img: _img_coffee_7_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\r\n    },\r\n    {\r\n      name: 'Caramel Mocha',\r\n      img: _img_coffee_8_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\r\n    },\r\n    {\r\n      name: 'Hot Chocolate',\r\n      img: _img_coffee_9_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\r\n    },\r\n    {\r\n      name: 'Turkish Coffee',\r\n      img: _img_coffee_10_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\r\n    }\r\n  ];\r\n\r\n  const contact = {\r\n    phone: '📞 123 456 789',\r\n    address: '☕ Old Flyover, Road 69, Indiana',\r\n    img: _img_location_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\r\n    imageAlt: 'cafe location'\r\n  }\r\n  \r\n  \n\n//# sourceURL=webpack://restaurant/./src/config.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContact\": () => (/* binding */ loadContact)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n\r\n\r\n\r\nfunction loadContact() {\r\n    const div = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createElementWithId)('div', 'main');\r\n    const main = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createElementWithClass)('main', 'main');\r\n  \r\n    const p1 = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createElementWithTextContent)('p', _config_js__WEBPACK_IMPORTED_MODULE_0__.contact.phone);\r\n    const p2 = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createElementWithTextContent)('p', _config_js__WEBPACK_IMPORTED_MODULE_0__.contact.address);\r\n  \r\n    const imgElement = document.createElement('img');\r\n    imgElement.src = _config_js__WEBPACK_IMPORTED_MODULE_0__.contact.img;\r\n    imgElement.classList.add('location');\r\n  \r\n\r\n    const content = document.querySelector('#content');\r\n    const footer = document.querySelector('footer');\r\n    content.insertBefore(main, footer);\r\n    main.appendChild(div);\r\n    div.appendChild(p1);\r\n    div.appendChild(p2);\r\n    div.appendChild(imgElement);\r\n    };\r\n  \r\n  \r\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElementWithClass\": () => (/* binding */ createElementWithClass),\n/* harmony export */   \"createElementWithId\": () => (/* binding */ createElementWithId),\n/* harmony export */   \"createElementWithTextContent\": () => (/* binding */ createElementWithTextContent),\n/* harmony export */   \"removeFromMain\": () => (/* binding */ removeFromMain),\n/* harmony export */   \"toggleActiveClass\": () => (/* binding */ toggleActiveClass)\n/* harmony export */ });\n function createElementWithId(tag, id) {\r\n    const element = document.createElement(tag);\r\n    element.id = id;\r\n    return element;\r\n  }\r\n\r\n  function createElementWithTextContent(tag, textContent) {\r\n    const element = document.createElement(tag);\r\n    element.textContent = textContent;\r\n    return element;\r\n}\r\n\r\nfunction createElementWithClass(tag, className) {\r\n    const element = document.createElement(tag);\r\n    element.classList.add(className);\r\n    return element;\r\n  }\r\n  \r\n\r\nfunction toggleActiveClass(event) {\r\n  const navItems = event.target.parentElement.children;\r\n  for (const item of navItems) {\r\n    item.classList.remove('active');\r\n  }\r\n  event.target.classList.add('active');\r\n}\r\n\r\nfunction removeFromMain() {\r\n// Get a reference to the main element\r\nvar mainElement = document.querySelector(\"main\");\r\nmainElement.remove()\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/functions.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _img_founder_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/founder.jpg */ \"./src/img/founder.jpg\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n\r\n\r\n\r\n\r\nfunction loadHome() {\r\n    const div = (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.createElementWithId)('div', 'main');\r\n    const main = (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.createElementWithClass)('main', 'main');\r\n  \r\n    const p1 = (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.createElementWithTextContent)('p', _config_js__WEBPACK_IMPORTED_MODULE_1__.homeData.title);\r\n    const p2 = (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.createElementWithTextContent)('p', _config_js__WEBPACK_IMPORTED_MODULE_1__.homeData.tagline);\r\n    const p3 = (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.createElementWithTextContent)('p', _config_js__WEBPACK_IMPORTED_MODULE_1__.homeData.callToAction);\r\n  \r\n    const imgElement = document.createElement('img');\r\n    imgElement.src = _img_founder_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n    imgElement.classList.add('founder');\r\n  \r\n\r\n    const content = document.querySelector('#content');\r\n    const footer = document.querySelector('footer');\r\n    content.insertBefore(main, footer);\r\n    main.appendChild(div);\r\n    div.appendChild(p1);\r\n    div.appendChild(p2);\r\n    div.appendChild(imgElement);\r\n    div.appendChild(p3);\r\n    };\r\n  \r\n  \r\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_cafeBg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/cafeBg.jpg */ \"./src/img/cafeBg.jpg\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst shopName = 'Caramel Cafe';\r\nconst h1 = document.createElement('h1');\r\nh1.textContent = shopName;\r\nh1.id = 'shop-name';\r\n\r\nconst nav = document.createElement('nav');\r\nconst ul = document.createElement('ul');\r\n\r\nconst navItems = ['Home', 'Menu', 'Contact'];\r\nnavItems.forEach((item, index) => {\r\n  const li = document.createElement('li');\r\n  li.classList.add('nav-item');\r\n  if (index === 0) {\r\n    li.classList.add('active');\r\n  }\r\n  li.textContent = item;\r\n  li.tabIndex = 1;\r\n  ul.appendChild(li);\r\n});\r\n\r\nnav.appendChild(ul);\r\n\r\nconst header = document.createElement('header');\r\n\r\nconst body = document.querySelector('body');\r\nbody.style.backgroundImage = `url(${_img_cafeBg_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]})`;\r\n\r\nconst footer = (0,_functions_js__WEBPACK_IMPORTED_MODULE_4__.createElementWithClass)('footer', 'footer');\r\nconst currentYear = new Date().getFullYear();\r\nconst footerP = (0,_functions_js__WEBPACK_IMPORTED_MODULE_4__.createElementWithTextContent)(\r\n  'p',\r\n  `Copyright ${currentYear} | Jalalbello`\r\n);\r\n\r\nconst a = document.createElement('a');\r\na.setAttribute('href', 'https://github.com/jalalbello');\r\n\r\nconst i = document.createElement('i');\r\ni.className = 'fab fa-github';\r\ni.setAttribute('aria-hidden', 'true');\r\n\r\na.appendChild(i);\r\nfooterP.appendChild(a);\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n  const content = document.querySelector('#content');\r\n  header.append(h1, nav);\r\n  content.append(header);\r\n  footer.append(footerP);\r\n  content.append(footer);\r\n  (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.loadHome)();\r\n});\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n  const content = document.querySelector('#content');\r\n  footer.append(footerP);\r\n  content.append(footer);\r\n  const parentElement = document.querySelector('nav');\r\n  parentElement.addEventListener('click', (event) => {\r\n    if (\r\n      event.target.matches('li.nav-item') &&\r\n      !event.target.classList.contains('active')\r\n    ) {\r\n      const textContent = event.target.textContent;\r\n      if (textContent === \"Home\"){\r\n        (0,_functions_js__WEBPACK_IMPORTED_MODULE_4__.toggleActiveClass)(event);\r\n        (0,_functions_js__WEBPACK_IMPORTED_MODULE_4__.removeFromMain)()\r\n        ;(0,_home_js__WEBPACK_IMPORTED_MODULE_2__.loadHome)()\r\n      }else{\r\n        (0,_functions_js__WEBPACK_IMPORTED_MODULE_4__.toggleActiveClass)(event)\r\n      }\r\n      if (textContent === \"Menu\"){\r\n        (0,_functions_js__WEBPACK_IMPORTED_MODULE_4__.toggleActiveClass)(event);\r\n        (0,_functions_js__WEBPACK_IMPORTED_MODULE_4__.removeFromMain)()\r\n        ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.loadMenu)()\r\n      }else{\r\n        (0,_functions_js__WEBPACK_IMPORTED_MODULE_4__.toggleActiveClass)(event)\r\n      }\r\n      if (textContent === \"Contact\"){\r\n        (0,_functions_js__WEBPACK_IMPORTED_MODULE_4__.toggleActiveClass)(event);\r\n        (0,_functions_js__WEBPACK_IMPORTED_MODULE_4__.removeFromMain)()\r\n        ;(0,_contact__WEBPACK_IMPORTED_MODULE_5__.loadContact)()\r\n      }else{\r\n        (0,_functions_js__WEBPACK_IMPORTED_MODULE_4__.toggleActiveClass)(event)\r\n      }\r\n    }\r\n  });\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n\r\n\r\n\r\nfunction loadMenu(){\r\n\r\n    const main = document.createElement(\"main\")\r\n    const menuContainer = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createElementWithId)('div', 'menu-container');\r\n\r\n    for (const coffeeType of _config_js__WEBPACK_IMPORTED_MODULE_0__.coffee) {\r\n        const coffeeItem = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createElementWithClass)('div', 'coffee-item');\r\n\r\n        const coffeeName = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createElementWithTextContent)('h3', coffeeType.name);\r\n        coffeeItem.appendChild(coffeeName);\r\n\r\n        const coffeeImg = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createElementWithClass)('img', 'coffee-img');\r\n        coffeeImg.src = coffeeType.img;\r\n        coffeeItem.appendChild(coffeeImg);\r\n        menuContainer.appendChild(coffeeItem);\r\n        main.appendChild(menuContainer)\r\n    }\r\n    const content = document.querySelector('#content');\r\n    const footer = document.querySelector('footer');\r\n    content.insertBefore(main, footer);\r\n}\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./fonts/Lato-Italic.ttf":
/*!*******************************!*\
  !*** ./fonts/Lato-Italic.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a9f3ee269217f44df65f.ttf\";\n\n//# sourceURL=webpack://restaurant/./fonts/Lato-Italic.ttf?");

/***/ }),

/***/ "./fonts/Lato-Regular.ttf":
/*!********************************!*\
  !*** ./fonts/Lato-Regular.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9d883d540ee2b4de8024.ttf\";\n\n//# sourceURL=webpack://restaurant/./fonts/Lato-Regular.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;