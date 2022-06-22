/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/shatterdomepersonalusegrunge-8bzd-webfont.woff2 */ \"./src/font/shatterdomepersonalusegrunge-8bzd-webfont.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./font/shatterdomepersonalusegrunge-8bzd-webfont.woff */ \"./src/font/shatterdomepersonalusegrunge-8bzd-webfont.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'Battle';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff2'),\\n         url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff');\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n\\nbody {\\n    margin: 0;\\n}\\n\\nheader {\\n    font-family: 'Battle';\\n    font-size: 7rem;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    height: 200px;\\n}\\n\\n.footer {\\n    margin-top: 1rem;\\n    background-color: rgba(25,25,25,0.5);\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: 100%;\\n    text-align: center;\\n    font-weight: bold;\\n    font-family: Arial, Helvetica, sans-serif;\\n    color: white;\\n    background-color: #68A7AD;\\n    position: fixed;\\n    bottom: 0%;\\n    left: 0%;\\n}\\n\\n.footer img {\\n    width: 1.2rem;\\n    height: 1.2rem;\\n    padding-left: 0.2rem;\\n    transition: transform .5s ease-in-out;\\n    filter: brightness(0) invert(1);\\n}\\n\\n.footer img:hover {\\n    transform: rotate(360deg);\\n}\\n\\n.overlay {\\n    top: 0px;\\n    bottom: 0px;\\n    background-color: rgba(0,0,0,0.5); \\n    position: fixed;\\n    height: 100vh;\\n    width: 100vw;\\n}\\n\\n.placement {\\n    flex: 1;\\n    height: 50rem;\\n    width: 40rem;\\n    position: fixed;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    background-color: white;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    box-sizing: border-box;\\n}\\n\\n.placement p:first-child {\\n    font-size: 3rem;\\n    font-family: 'Battle';\\n    margin: 1rem 0;\\n}\\n\\n.placement p:nth-child(2) {\\n    margin: 1rem 0;\\n    font-size: 2rem;\\n}\\n\\n.shipType {\\n    text-decoration: underline;\\n}\\n\\n.placement button {\\n    background-color: black;\\n    border-radius: 10px;\\n    color: white;\\n    padding: 1rem;\\n    font-size: 1.5rem;\\n    border-width: 0;\\n}\\n\\n.placement button:hover {\\n    transform: scale(1.05) perspective(1px)\\n  }\\n\\n.container {\\n    display: flex;\\n    padding: 2rem;\\n    padding-top: 0;\\n    justify-content: space-evenly;\\n}\\n\\n.placer, .left, .right {\\n    display: flex;\\n    height: 30rem;\\n    width: 30rem;\\n    margin-top: 1rem;\\n    border: 1px solid black;\\n}\\n\\n.column {\\n    display: flex;\\n    flex: 1;\\n}\\n\\n.cell {\\n    outline: 0.1px solid black;\\n    flex: 1;\\n    box-sizing: border-box;\\n    height: 3rem;\\n    width: 3rem;\\n    /* cursor: url(NicePng_target-png_44385.png), auto;  */\\n}\\n\\n/* .cell:hover {\\n    cursor: url(NicePng_target-png_44385.png), auto;\\n    background-color: lightgray\\n} */\\n\\n\\n.placerCell {\\n    background-color: lightblue;\\n}\\n\\n.occupied {\\n    background-color: darkgray;\\n    outline: 0.1px solid black;\\n    flex: 1\\n}\\n\\n.miss {\\n    background-color: lightgreen;\\n}\\n\\n.occupied.hit {\\n    background-color: black;\\n}\\n\\n.occupied2.hit {\\n    background-color: black;\\n}\\n\\n.gameOver {\\n    position: fixed;\\n    background-color: white;\\n    height: 25rem;\\n    width: 30rem;\\n    border-radius: 10px;\\n    display: none;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    position: fixed;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    border: 1px solid black;\\n}\\n\\n.winner {\\n    font-size: 5rem;\\n}\\n\\n.playAgain {\\n    width: 8rem;\\n    height: 2rem;\\n    margin-top: 1rem;\\n    font-size: 1rem;\\n    border: none;\\n    border-radius: 10px;\\n    cursor: pointer;\\n}\\n\\n.playAgain:hover {\\n    border: 1px solid black;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/battleship.js":
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
/***/ ((module) => {

eval("//create battleship factory\n// hit() that takes a number, and marks that position as hit\n//turn ship length into an array, 0=not hit, and 1=hit\n//use array constructor, new Array(length) and fill it first with non-hit (0)\n//use .every() to see if all values are equal 1, to mean the whole ship has been hit\n\nconst battleshipFactory = (name, length) => {\n    const shipBlocks = new Array(length).fill(true)\n    \n    const getShipBlocks = () => shipBlocks;\n\n    const hit = (num) => {\n        shipBlocks[num] = null;\n    };\n    const isSunk = () => {\n        const result = shipBlocks.every((block) => block === null);\n\n        return result\n    };\n\n    return { name, length, hit, isSunk, getShipBlocks }\n}\n\nmodule.exports = battleshipFactory;\n\n//# sourceURL=webpack://battleship/./src/battleship.js?");

/***/ }),

/***/ "./src/domDisplay.js":
/*!***************************!*\
  !*** ./src/domDisplay.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayCompDiv\": () => (/* binding */ displayCompDiv),\n/* harmony export */   \"displayPlayerDiv\": () => (/* binding */ displayPlayerDiv),\n/* harmony export */   \"gameOverDisplay\": () => (/* binding */ gameOverDisplay),\n/* harmony export */   \"listenForClick\": () => (/* binding */ listenForClick)\n/* harmony export */ });\n\n\nconst displayPlayerDiv = (board) => {\n    const playerDiv =  document.querySelector('.left')\n    while (playerDiv.firstChild) {\n        playerDiv.removeChild(playerDiv.firstChild)\n    }\n\n    const includesArray = (data, arr) => {\n        return data.some(e => Array.isArray(e) && e.every((o, i) => Object.is(arr[i], o)));\n    }\n\n    board.board.forEach((column, i) => {\n        const columnCell = document.createElement('div');\n        columnCell.dataset.column = i;\n        column.forEach((cell, idx) => {\n            const boardCell = document.createElement('div')\n            boardCell.dataset.row = idx;\n\n            if (cell.hasShip === false) {                   //if cell.hasShip = classlist.add not occupied //this is not working\n                boardCell.classList.add('cell')\n            } else if (cell.hasShip === true) {\n                boardCell.classList.add('cell')\n                boardCell.classList.add('occupied')\n            }\n\n            if (cell.isShot === true) {\n                boardCell.classList.add('hit');\n            } else if (includesArray(board.missed, [i, idx])) {\n                boardCell.classList.add('miss')\n            }\n\n            columnCell.appendChild(boardCell)\n        });\n\n        playerDiv.appendChild(columnCell)\n    })\n}\n\nconst displayCompDiv = (board) => {\n    const compDiv =  document.querySelector('.right')\n    while (compDiv.firstChild) {\n        compDiv.removeChild(compDiv.firstChild)\n    }\n\n    const includesArray = (data, arr) => {\n        return data.some(e => Array.isArray(e) && e.every((o, i) => Object.is(arr[i], o)));\n    }\n\n    board.board.forEach((column, i) => {\n        const columnCell = document.createElement('div');\n        columnCell.dataset.column = i;\n        column.forEach((cell, idx) => {\n            const boardCell = document.createElement('div')\n            boardCell.dataset.row = idx;\n\n            if (cell.hasShip === false) {                   //if cell.hasShip = classlist.add not occupied //this is not working\n                boardCell.classList.add('cell')\n            } else if (cell.hasShip === true) {\n                boardCell.classList.add('cell')\n                boardCell.classList.add('occupied2')\n                // boardCell.classList.add('occupied') //here\n            }\n\n            if (cell.isShot === true) {\n                boardCell.classList.add('hit');\n            } else if (includesArray(board.missed, [i, idx])) {\n                boardCell.classList.add('miss') \n            }\n\n            columnCell.appendChild(boardCell)\n        });\n\n        compDiv.appendChild(columnCell)\n    })\n}\n\n//returns a promise for when turn ends\nconst listenForClick = (board) => {\n    const compBoard = document.querySelector('.right')\n    const promise = new Promise((resolve) => {\n        compBoard.addEventListener('click', (e) => {\n            if (e.target.className !== 'cell hit' && e.target.className !== 'cell occupied hit' && e.target.className !== 'cell miss') { //should only trigger if its not already shot\n                const columnIndex = parseInt(e.target.parentElement.dataset.column, 10);\n                const cellIndex = parseInt(e.target.dataset.row, 10);\n                board.receiveAttack([columnIndex, cellIndex]);\n                while (compBoard.firstChild) {\n                compBoard.removeChild(compBoard.firstChild) \n                };\n                displayCompDiv(board);\n                resolve();\n            }\n        });\n    });\n\n    return promise;\n};\n\nconst playAgainListener = (newGame) => {\n    const playAgainBtn = document.querySelector('.playAgain')\n    playAgainBtn.addEventListener('click', () => {\n        const overlay = document.querySelector('#overlay');\n        const gameOverDisplay = document.querySelector('.gameOver')\n        overlay.classList.remove('.overlay')\n        gameOverDisplay.style.display = 'none';\n        newGame();\n    },\n    { once: true }\n    );\n};\n\nconst gameOverDisplay = (text, newGame) => {\n    const overlay = document.querySelector('#overlay')\n    const gameOverDisplay = document.querySelector('.gameOver')\n    const gameOverWinner = document.querySelector('.winner')\n    overlay.classList.add('.overlay')\n    gameOverDisplay.style.display = 'flex';\n    gameOverWinner.textContent = text;\n\n    playAgainListener(newGame)\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/domDisplay.js?");

/***/ }),

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayPlacement\": () => (/* binding */ displayPlacement),\n/* harmony export */   \"playerPlaceShips\": () => (/* binding */ playerPlaceShips)\n/* harmony export */ });\n/* harmony import */ var _domDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domDisplay */ \"./src/domDisplay.js\");\n\n\nconst displayPlacement = (board) => {\n    const overlay = document.querySelector('#overlay')\n    overlay.classList.add('overlay')\n    const container = document.querySelector('.placement')\n    container.style.display = 'flex'\n    const placer = document.querySelector('.placer')\n    while (placer.firstChild) {\n        placer.removeChild(placer.firstChild)\n    }\n\n    board.board.forEach((column, i) => {\n        const columnCell = document.createElement('div');\n        columnCell.dataset.column = i;\n        column.forEach((cell, idx) => {\n            const boardCell = document.createElement('div')\n            boardCell.dataset.column = i;\n            boardCell.dataset.row = idx;\n\n            if (cell.hasShip === false) {                   //if cell.hasShip = classlist.add not occupied //this is not working\n                boardCell.classList.add('cell')\n            } else if (cell.hasShip === true) {\n                boardCell.classList.add('cell')\n                boardCell.classList.add('occupied')\n            }\n\n            columnCell.appendChild(boardCell)\n        });\n\n        placer.appendChild(columnCell)\n    })\n}\n\nconst playerPlaceShips = (() => {\n    let rotator = 1; //default direction placement horizontal\n    let idx = 0; //used to loop through ships\n    const shipName = document.querySelector('.shipType') //to change name each time a ship is placed\n\n    const resetProperties = () => {\n        rotator = 1;\n        idx = 0;\n    };\n\n    const horizontalElement = (columnIndex, cellIndex, i) => {\n        const columnNum = parseInt(columnIndex, 10) + i;\n        const rowNum = parseInt(cellIndex, 10);\n\n        const selector = `.cell[data-column=\"${columnNum}\"][data-row=\"${rowNum}\"]`; // e.g.    .cell[1][3]\n        const hoverCell = document.querySelector(selector) \n\n        return hoverCell;\n    }\n\n    const verticalElement = (columnIndex, cellIndex, i) => {\n        const columnNum = parseInt(columnIndex, 10);\n        const rowNum = parseInt(cellIndex, 10) + i;\n\n        const selector = `.cell[data-column=\"${columnNum}\"][data-row=\"${rowNum}\"]`\n        const hoverCell = document.querySelector(selector);\n\n        return hoverCell;   \n    }\n\n    const placePicker = (board, ships) => {\n        let ship = ships[idx]\n        shipName.innerHTML = ship.name\n        const cells = document.querySelectorAll('.placer .cell')\n\n        const hoverListener = (e) => {\n            const columnIndex = e.target.parentElement.dataset.column;\n            const cellIndex = e.target.dataset.row;\n\n            if (rotator === 1) {\n                for (let i = 0; i < ship.length; i++) {\n                    const hoverCell = horizontalElement(columnIndex, cellIndex, i)\n                    hoverCell.classList.add('placerCell')\n                }\n            } else if (rotator === 2) {\n                for (let i = 0; i < ship.length; i++) {\n                    const hoverCell = verticalElement(columnIndex, cellIndex, i)\n                    hoverCell.classList.add('placerCell')\n                }\n            }\n        }\n\n        const hoverOutListener = (e) => {\n            const columnIndex = e.target.parentElement.dataset.column;\n            const cellIndex = e.target.dataset.row;\n        \n            if (rotator === 1) {\n                for (let i = 0; i < ship.length; i += 1) {\n                const hoverCell = horizontalElement(columnIndex, cellIndex, i);\n                hoverCell.classList.remove(\"placerCell\");\n                }\n            } else if (rotator === 2) {\n                for (let i = 0; i < ship.length; i += 1) {\n                const hoverCell = verticalElement(columnIndex, cellIndex, i);\n                hoverCell.classList.remove(\"placerCell\");\n                }\n            }\n        };\n\n        cells.forEach((cell) => {\n            cell.addEventListener('mouseenter', hoverListener);\n            cell.addEventListener('mouseleave', hoverOutListener);\n            \n            const listener = (e) => {\n                const x = parseInt(e.target.dataset.column, 10) \n                const y = parseInt(e.target.dataset.row, 10)\n\n                let orientation;\n                \n                if (rotator === 1) {\n                    orientation = \"horizontal\"\n                } else {\n                    orientation = \"vertical\"\n                }\n                \n                if (board.validatePlacement([x, y], orientation, ship) === true) {\n                    board.placeShip([x, y], orientation, ship)\n                    idx += 1;\n\n                    if (idx === ships.length) {\n                        const overlay = document.querySelector('#overlay')\n                        overlay.classList.remove('overlay')\n                        const popup = document.querySelector(\".placement\");\n                        popup.style.display = \"none\";\n                        (0,_domDisplay__WEBPACK_IMPORTED_MODULE_0__.displayPlayerDiv)(board);\n                        return;\n                    }\n                    \n                    displayPlacement(board);\n                    placePicker(board, ships)\n                }\n\n                cell.removeEventListener('click', listener)\n                };\n            cell.addEventListener('click', listener);\n        })\n    };\n\n    const changeRotator = () => {\n        if (rotator === 1) {\n          rotator = 2;\n        } else {\n          rotator = 1;\n        }\n      };\n    \n    const rotatorBtn = document.querySelector(\".rotate\");\n    rotatorBtn.addEventListener(\"click\", () => {\n    changeRotator();\n    })\n\n    return { placePicker, resetProperties }\n})();\n\n\n\n\n//to create the hover effect, tell cell orientation and length of the ships, and then tell which/index we will add class = placerCell and\n//this placerCell will have the hover effect. ,create the same one for removing placercell when mouse leave cell\n\n//# sourceURL=webpack://battleship/./src/domManipulation.js?");

/***/ }),

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory */ \"./src/gameboardFactory.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_player__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domManipulation */ \"./src/domManipulation.js\");\n/* harmony import */ var _domDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domDisplay */ \"./src/domDisplay.js\");\n\n\n\n\n\nconst gameLoop = () => {\n\n    const computerPlayer = _player__WEBPACK_IMPORTED_MODULE_1___default()();\n    const computerGameboard = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const humanGameboard = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    const gameOverCheck = () => {\n        if (humanGameboard.allShipsSunk()) { //This is triggering when we have nothing set yet\n            console.log('all human ships sunk')\n            return true;\n        } \n\n        if (computerGameboard.allShipsSunk()) { //comes out as false even tho its true!!!!!!\n            console.log('all pc ships sunk') \n            return true; //once this triggers, i can still click on the board // but shouldnt be problem cause it will reset\n        }\n        return false;\n    }\n\n    const gameTurn = () => {\n        if (gameOverCheck()) {\n            _domManipulation__WEBPACK_IMPORTED_MODULE_2__.playerPlaceShips.resetProperties();\n\n            if (humanGameboard.allShipsSunk()) {\n                (0,_domDisplay__WEBPACK_IMPORTED_MODULE_3__.gameOverDisplay)('You lost!', gameLoop);\n            } else {\n                (0,_domDisplay__WEBPACK_IMPORTED_MODULE_3__.gameOverDisplay)('You win!', gameLoop);\n            }\n            \n        } else {\n            (0,_domDisplay__WEBPACK_IMPORTED_MODULE_3__.listenForClick)(computerGameboard).then(() => {\n                computerPlayer.computerTurn(humanGameboard); //this should only go through if above is resolves itself\n                (0,_domDisplay__WEBPACK_IMPORTED_MODULE_3__.displayPlayerDiv)(humanGameboard);\n                gameTurn();\n            })\n        }\n    }\n\n    ;(0,_domManipulation__WEBPACK_IMPORTED_MODULE_2__.displayPlacement)(humanGameboard)\n    _domManipulation__WEBPACK_IMPORTED_MODULE_2__.playerPlaceShips.placePicker(humanGameboard, humanGameboard.getShips());\n    \n    computerGameboard.getShips().forEach((ship) => {\n        let result = computerPlayer.generatePlacement();\n\n        while (!computerGameboard.validatePlacement(result[0], result[1], ship)) {\n            result = computerPlayer.generatePlacement();\n        } \n        computerGameboard.placeShip(result[0], result[1], ship)\n    });\n\n    (0,_domDisplay__WEBPACK_IMPORTED_MODULE_3__.displayPlayerDiv)(humanGameboard);\n    (0,_domDisplay__WEBPACK_IMPORTED_MODULE_3__.displayCompDiv)(computerGameboard); \n\n    gameTurn();\n};\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameLoop);\n\n//# sourceURL=webpack://battleship/./src/gameLoop.js?");

/***/ }),

/***/ "./src/gameboardFactory.js":
/*!*********************************!*\
  !*** ./src/gameboardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship */ \"./src/battleship.js\");\n/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_battleship__WEBPACK_IMPORTED_MODULE_0__);\n//create a board\n//place ship on board\n//send hit coordinates\n\n\nconst gameboardFactory = () => {\n\n    //board, visualize it as a 10x10 for now.\n    let board = []\n    for (let i = 0; i < 10; i++) {\n        board[i] = [];\n        for (let j = 0; j < 10; j++) {\n            board[i][j] = { isShot: false, hasShip: false};\n        };\n    };\n    \n    let unavailable = []\n    //place ships horizontally + vertically. should only place if it not already taken up\n    function placeHorizontally(coordinates, ship) {\n        for (let i = 0; i < ship.length; i++) { \n             // [0, 0]\n            board[coordinates[0] + i][coordinates[1]].hasShip = true;\n            board[coordinates[0] + i][coordinates[1]].ship = ship;\n            board[coordinates[0] + i][coordinates[1]].index = i\n            //push coordinates to unavailable so that when i use it to validate placement, it will give either true or false to give me\n            //permission to place ship\n            unavailable.push([coordinates[0]+i, coordinates[1]])\n            \n        }\n    }\n    \n    function placeVertically(coordinates, ship) {\n        for (let i = 0; i < ship.length; i++) {\n            board[coordinates[0]][coordinates[1]+ i].ship = ship;\n            board[coordinates[0]][coordinates[1]+ i].index = i;\n            board[coordinates[0]][coordinates[1]+ i].hasShip = true;\n            unavailable.push([coordinates[0], coordinates[1]+i])\n        }\n    }\n\n    //recieveAttack, mark a spot as hit or miss, if hit, take it to hit(), records coordinates, \n    //coordinates is an array of [x, y]\n    //keeps track of missed attacks\n    let missed = []\n    let hits = []\n\n    function receiveAttack(coordinates) {\n        // board[coordinates[0]][coordinates[1]].isShot = true;\n\n        if (board[coordinates[0]][coordinates[1]].hasShip === false) {\n            if (!includesArray(coordinates, missed)) {\n                missed.push(coordinates)\n            } \n        } else {\n            const cell = board[coordinates[0]][coordinates[1]]\n            cell.isShot = true;\n            cell.ship.hit(cell.index);\n\n            if (!includesArray(coordinates, hits)) {\n                hits.push(coordinates)\n            }\n            \n            if (cell.ship.isSunk()) {\n                sinkShip(cell.ship);\n            }\n        }\n    }\n\n    function allShipsSunk(gameShips = ships) {\n        if (gameShips.length > 0) {\n            return false\n        }\n        return true\n    }\n\n    function createShips() {\n        const carrier = _battleship__WEBPACK_IMPORTED_MODULE_0___default()(\"carrier\", 5);\n        const battleship = _battleship__WEBPACK_IMPORTED_MODULE_0___default()(\"battleship\", 4);\n        const destroyer = _battleship__WEBPACK_IMPORTED_MODULE_0___default()(\"destroyer\", 3);\n        const submarine = _battleship__WEBPACK_IMPORTED_MODULE_0___default()(\"submarine\", 3);\n        const patrolBoat = _battleship__WEBPACK_IMPORTED_MODULE_0___default()(\"patrol boat\", 2);\n    \n        return [carrier, battleship, destroyer, submarine, patrolBoat];\n      }\n    \n    const ships = createShips();\n    \n    function getShips() {\n        return ships;\n      }\n\n    function getOccupied() {\n        const occupied = [];\n\n        board.forEach((row, i) => {\n            row.forEach((element, idx) => {\n                if (element.hasShip !== true) {\n                    occupied.push([i, idx])\n                }\n            })\n        })\n\n        return occupied;\n    }\n\n\n    function sinkShip(sunkShip) {\n        const index = ships.findIndex((ship) => sunkShip.name === ship.name);\n    \n        if (index !== -1) {\n          ships.splice(index, 1);\n        }\n    }\n\n    const includesArray = (data, arr) => {\n        return data.some(e => Array.isArray(e) && e.every((o, i) => Object.is(arr[i], o)));\n      }\n\n    function validatePlacement(coords, orientation, ship) {\n        let x = coords[0];\n        let y = coords[1];\n\n        for (let i = 0; i < ship.length; i++) {\n            if (orientation === 'horizontal') {\n                if (includesArray(unavailable, [x + i, y])) return false; //works, but only for the pointer cell\n            } else if (orientation === 'vertical') {\n                if (includesArray(unavailable, [x, y + i])) return false;\n            }\n        }\n\n        for (let i = 1; i < ship.length; i++) {\n            if (orientation === \"horizontal\") {\n                x++;\n                if (x > 9) return false;\n            } else {\n                y++;\n                if (y > 9) return false;\n            }\n        }\n\n        return true\n    }\n\n    function placeShip(coords, orientation, ship) {\n        if (orientation === \"vertical\") {\n          placeVertically(coords, ship);\n        } else {\n          placeHorizontally(coords, ship);\n        }\n      }\n\n    return { board, placeShip, allShipsSunk, receiveAttack, placeVertically, placeHorizontally, missed, hits, getShips, getOccupied, validatePlacement }\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboardFactory);\n\n\n\n//# sourceURL=webpack://battleship/./src/gameboardFactory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameLoop */ \"./src/gameLoop.js\");\n \n\n\n(0,_gameLoop__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module) => {

eval("const playerFactory = () => {\n    const previousMoves = [];\n\n    function generatePlacement() {\n        let xCoordinate = Math.floor(Math.random() * 10);\n        let yCoordinate = Math.floor(Math.random() * 10);\n        let result = [[xCoordinate, yCoordinate]]\n        result.push(chooseOrientation())\n        return result\n    }\n\n    function randomInteger(min, max) { // min and max included \n        return Math.floor(Math.random() * (max - min + 1) + min)\n      }\n\n    function generateRandomCoordinates() {\n        const result = [];\n\n        const x = randomInteger(0, 9);\n        const y = randomInteger(0, 9);\n\n        result.push(x);\n        result.push(y);\n\n        return result;\n    }\n\n    function computerTurn(enemyBoard) {\n        let coords = generateRandomCoordinates();\n    \n\n        function hasElement(arr,cell) {\n            return arr.some(x => x[0] === cell[0] && x[1] === cell[1])\n       }\n\n        while (hasElement(previousMoves, coords)) { //THIS IS GIVING ME FALSE, even tho it does includes, do the coords not match?\n            coords = generateRandomCoordinates();\n          }\n\n        enemyBoard.receiveAttack(coords)\n        previousMoves.push(coords);\n    }\n   \n    function chooseOrientation() {\n        let orientation = '';\n        orientation = Math.floor(Math.random() * 2);\n        if (orientation === 0) {\n            orientation = 'vertical';\n        } else {\n            orientation = 'horizontal';\n        }\n        return orientation\n    }\n\n    return { previousMoves, chooseOrientation, computerTurn, generatePlacement }\n};\n\nmodule.exports = playerFactory;\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/font/shatterdomepersonalusegrunge-8bzd-webfont.woff":
/*!*****************************************************************!*\
  !*** ./src/font/shatterdomepersonalusegrunge-8bzd-webfont.woff ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"efd97e96af3e24098d08.woff\";\n\n//# sourceURL=webpack://battleship/./src/font/shatterdomepersonalusegrunge-8bzd-webfont.woff?");

/***/ }),

/***/ "./src/font/shatterdomepersonalusegrunge-8bzd-webfont.woff2":
/*!******************************************************************!*\
  !*** ./src/font/shatterdomepersonalusegrunge-8bzd-webfont.woff2 ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b385a16147bfcaaf8d6b.woff2\";\n\n//# sourceURL=webpack://battleship/./src/font/shatterdomepersonalusegrunge-8bzd-webfont.woff2?");

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