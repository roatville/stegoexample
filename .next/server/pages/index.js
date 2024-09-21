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

/***/ "./components/Banner.js":
/*!******************************!*\
  !*** ./components/Banner.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "R:\\VIT Research\\Research Papers for topics\\Stegnography for medical imaging\\portalwebsite\\StegaPhoto\\components\\Banner.js";

const Banner = ({
  stars
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
  className: "bg-gradient-to-b from-gray-500 to-gray-900",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container xl:max-w-screen-xl mx-auto px-8 pt-32 pb-16",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-wrap items-center justify-between",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "text-4xl mr-4 mb-4 font-bold",
        children: "Steganography for Medical Images or patients"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "rounded-lg text-xl bg-gray-900 bg-opacity-10 opacity-95 shadow-inner hover:bg-opacity-20 focus:outline-none focus-visible:ring ring-gray-100 ring-opacity-25 pl-2 pr-3 mb-4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "text-4xl md:text-5xl lg:text-4xl pt-8",
      children: "Hide files inside images"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 2,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/ChooseFlow.js":
/*!**********************************!*\
  !*** ./components/ChooseFlow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormRadio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormRadio */ "./components/FormRadio.js");

var _jsxFileName = "R:\\VIT Research\\Research Papers for topics\\Stegnography for medical imaging\\portalwebsite\\StegaPhoto\\components\\ChooseFlow.js";


const ChooseFlow = ({
  onChoice
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
  form: "form",
  className: "grid gap-4 mb-32",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    className: "mb-4",
    children: "Choose"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormRadio__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "chooseFlow",
    value: "hide",
    label: "Create a secret image for Another Doctor with password",
    onChange: onChoice
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormRadio__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "chooseFlow",
    value: "find",
    label: "Retrieve the information & files from an image which is sent by another doctor",
    onChange: onChoice
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (ChooseFlow);

/***/ }),

/***/ "./components/Flow.js":
/*!****************************!*\
  !*** ./components/Flow.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChooseFlow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChooseFlow */ "./components/ChooseFlow.js");
/* harmony import */ var _StepsFind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StepsFind */ "./components/StepsFind.js");
/* harmony import */ var _StepsHide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StepsHide */ "./components/StepsHide.js");

var _jsxFileName = "R:\\VIT Research\\Research Papers for topics\\Stegnography for medical imaging\\portalwebsite\\StegaPhoto\\components\\Flow.js";





const Flow = () => {
  const {
    0: flow,
    1: setFlow
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const ChosenFlow = flow === "find" ? _StepsFind__WEBPACK_IMPORTED_MODULE_3__["default"] : _StepsHide__WEBPACK_IMPORTED_MODULE_4__["default"];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    className: "relative",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "absolute top-0 pt-32 w-full bg-gradient-to-b from-gray-900 to-gray-800 opacity-50"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "py-32 container xl:max-w-screen-xl mx-auto px-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("noscript", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mb-32 bg-gradient-to-b from-red-800 to-red-900 p-8 -mx-8 sm:-mx-4 sm:rounded-lg shadow-lg",
          children: "StegaPhoto requires JavaScript to hide and find files within images!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ChooseFlow__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onChoice: setFlow
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChosenFlow, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "absolute bottom-0 pt-32 w-full bg-gradient-to-t from-gray-900 to-gray-800 opacity-10"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Flow);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "R:\\VIT Research\\Research Papers for topics\\Stegnography for medical imaging\\portalwebsite\\StegaPhoto\\components\\Footer.js";

const Footer = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
  className: "bg-gray-900 bg-opacity-25 text-lg",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container xl:max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between px-8 pt-16 pb-16",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "mb-4 sm:mb-0",
      children: ["Created by", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-blue-400 hover:text-blue-300 focus:text-blue-300 focus-visible:underline focus:outline-none",
        children: "Roatville"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-blue-400 hover:text-blue-300 focus:text-blue-300 focus-visible:underline focus:outline-none",
        children: "how It was made"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 2,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/FormFiles.js":
/*!*********************************!*\
  !*** ./components/FormFiles.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pretty_bytes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pretty-bytes */ "pretty-bytes");
/* harmony import */ var pretty_bytes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pretty_bytes__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "R:\\VIT Research\\Research Papers for topics\\Stegnography for medical imaging\\portalwebsite\\StegaPhoto\\components\\FormFiles.js";



const FormFiles = ({
  type = "file",
  multiple,
  accept,
  files,
  setFiles
}) => {
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const fileInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const readFile = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve({
          contents: reader.result,
          name: file.name,
          date: new Date(file.lastModified),
          size: file.size,
          type: file.type
        });
      };

      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  const loadFiles = async event => {
    setLoading(true);

    try {
      const newFiles = await Promise.all([...event.target.files].map(readFile));
      setError(false);
      setFiles([...files, ...newFiles].reduce(uniqueFiles, []));
    } catch {
      setError(true);
    }

    setLoading(false);
  };

  const uniqueFiles = (uniqueFiles, file) => {
    const exists = uniqueFiles.find(existing => existing.name === file.name && existing.lastModified === file.lastModified && existing.size === file.size && existing.type === file.type);
    return exists ? uniqueFiles : [...uniqueFiles, file];
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-900 bg-opacity-25 shadow-inner p-8 -mx-8 sm:-mx-4 sm:rounded-lg",
    children: [files.map((file, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: "relative flex flex-row items-center text-base md:text-lg bg-gray-700 shadow rounded",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "flex-grow py-2 px-4 truncate",
        children: file.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "flex-shrink whitespace-nowrap py-2 px-4 text-gray-500",
        children: pretty_bytes__WEBPACK_IMPORTED_MODULE_2___default()(file.size)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "self-stretch px-3 text-3xl bg-gray-800 bg-opacity-25 hover:bg-opacity-50 focus:outline-none focus-visible:ring ring-blue-500 ring-opacity-50 rounded-r",
        type: "button",
        onClick: () => setFiles(files.filter((_, i) => i !== index)),
        children: "\xD7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }, undefined)]
    }, index, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }, undefined)), (files.length === 0 || multiple) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: "relative flex flex-row items-center text-base md:text-lg bg-gray-700 shadow rounded",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "file",
        accept: accept,
        onChange: loadFiles,
        multiple: multiple,
        hidden: true,
        ref: fileInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "flex-grow py-2 px-4 truncate",
        children: [error ? "Error loading " : loading ? "Loading " : "Add ", type, multiple && "s", loading && "..."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "self-stretch px-3 text-3xl bg-gray-800 bg-opacity-25 hover:bg-opacity-50 focus:outline-none focus-visible:ring ring-blue-500 ring-opacity-50 rounded-r",
        type: "button",
        onClick: () => fileInput.current.click(),
        children: ["+", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "absolute w-full h-full inset-0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }, undefined)]
    }, files.length + 1, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FormFiles);

/***/ }),

/***/ "./components/FormPassword.js":
/*!************************************!*\
  !*** ./components/FormPassword.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "R:\\VIT Research\\Research Papers for topics\\Stegnography for medical imaging\\portalwebsite\\StegaPhoto\\components\\FormPassword.js";

const FormPassword = ({
  value,
  confirm,
  onChange,
  onConfirm,
  valid
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: `-mx-4 grid gap-8 ${onConfirm ? "md:grid-cols-2" : ""}`,
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
    className: "bg-gray-900 bg-opacity-25 placeholder-gray-700 rounded-lg shadow-inner focus:outline-none focus-visible:ring ring-blue-500 ring-opacity-50 md:text-3xl w-full px-4 py-2 border-2 border-transparent",
    type: "password",
    autoComplete: "new-password",
    value: value,
    onChange: event => onChange(event.target.value),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, undefined), onConfirm && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
    className: `bg-gray-900 bg-opacity-25 placeholder-gray-700 rounded-lg shadow-inner focus:outline-none md:text-3xl w-full px-4 py-2 border-2 ${valid ? "border-transparent focus-visible:ring ring-blue-500 ring-opacity-50" : "border-red-500 focus-visible:ring ring-red-500 ring-opacity-50"}`,
    type: "password",
    autoComplete: "new-password",
    value: confirm,
    onChange: event => onConfirm(event.target.value),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 13
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 2,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (FormPassword);

/***/ }),

/***/ "./components/FormRadio.js":
/*!*********************************!*\
  !*** ./components/FormRadio.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "R:\\VIT Research\\Research Papers for topics\\Stegnography for medical imaging\\portalwebsite\\StegaPhoto\\components\\FormRadio.js";

const FormRadio = ({
  name,
  label,
  value,
  onChange
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
  className: "flex flex-row items-center cursor-pointer",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "relative rounded-full border-2 border-gray-700 shadow-inner mr-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "radio",
      name: name,
      value: value,
      className: "block appearance-none cursor-pointer focus:outline-none focus-visible:ring ring-blue-500 ring-opacity-50 rounded-full border-8 border-transparent checked:border-blue-500 p-1 checked:bg-gray-100",
      onChange: event => onChange(event.target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "absolute inset-0 m-2 rounded-full shadow-sm"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, undefined), label]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 2,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (FormRadio);

/***/ }),

/***/ "./components/FormRange.js":
/*!*********************************!*\
  !*** ./components/FormRange.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "R:\\VIT Research\\Research Papers for topics\\Stegnography for medical imaging\\portalwebsite\\StegaPhoto\\components\\FormRange.js";

const FormRange = ({
  min,
  max,
  step,
  value,
  onChange
}) => {
  // Generate range of numbers
  const range = Array.from(new Array((max - min) / step + 1).keys(), index => min + index * step);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "block rounded-full appearance-none cursor-pointer focus:outline-none focus-visible:ring ring-blue-500 ring-opacity-50 bg-gray-900 bg-opacity-25 shadow-inner w-full -mx-4 px-4 h-4 box-content",
      type: "range",
      min: min,
      max: max,
      step: step,
      value: value,
      onChange: event => onChange(Number(event.target.value))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex justify-between text-base cursor-default mt-4 -mx-1",
      children: range.map(number => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: number === value ? "text-gray-100 cursor-pointer text-center w-5" : "text-gray-500 cursor-pointer text-center w-5",
        onClick: () => onChange(number),
        children: number
      }, number, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FormRange);

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "R:\\VIT Research\\Research Papers for topics\\Stegnography for medical imaging\\portalwebsite\\StegaPhoto\\components\\Page.js";

const NOSCRIPT = `
    form {
        opacity: 0.5;
        pointer-events: none;
    }
`;

const Page = ({
  children
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: "min-h-screen flex flex-col justify-between bg-gray-800 text-gray-100 text-xl lg:text-2xl",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      charSet: "utf-8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: "Medical Images"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "preload",
      as: "style",
      href: "https://fonts.googleapis.com/css2?family=Inter&display=swap"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
      media: "print",
      onLoad: "this.media='all'"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "description",
      content: "Hide files inside images easily using StegaPhoto, using in-browser steganography techniques."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "manifest",
      href: "/site.webmanifest"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("noscript", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: NOSCRIPT
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined), children]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 11,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./components/ProgressButton.js":
/*!**************************************!*\
  !*** ./components/ProgressButton.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "R:\\VIT Research\\Research Papers for topics\\Stegnography for medical imaging\\portalwebsite\\StegaPhoto\\components\\ProgressButton.js";

const ProgressButton = ({
  onClick,
  progress,
  download,
  children
}) => {
  return download ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
    className: "block relative text-center bg-green-700 hover:bg-green-600 transition duration-300 transform hover:scale-105 text-2xl md:text-3xl lg:text-4xl p-6 md:p-8 mx-auto w-full max-w-screen-sm rounded-full shadow-lg focus:outline-none focus-visible:ring ring-blue-500 ring-opacity-50",
    href: download,
    download: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "absolute inset-0 rounded-full bg-green-400 animate-pulse bg-opacity-50 overflow-hidden"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "relative",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "block relative bg-gray-700 hover:bg-gray-600 focus:bg-blue-600 transition-transform duration-300 transform hover:scale-105 focus:scale-105 text-2xl md:text-3xl lg:text-4xl p-6 md:p-8 mx-auto w-full max-w-screen-sm rounded-full shadow-lg focus:outline-none",
    type: "button",
    onClick: onClick,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "absolute inset-0 rounded-full bg-gray-400 hover:animate-pulse bg-opacity-25 overflow-hidden",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "absolute inset-0 origin-left transition-transform ease-linear duration-700 bg-blue-900 bg-opacity-50",
        style: {
          transform: `scaleX(${progress / 100})`
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressButton);

/***/ }),

/***/ "./components/StepsFind.js":
/*!*********************************!*\
  !*** ./components/StepsFind.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormFiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormFiles */ "./components/FormFiles.js");
/* harmony import */ var _FormPassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormPassword */ "./components/FormPassword.js");
/* harmony import */ var _ProgressButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProgressButton */ "./components/ProgressButton.js");
/* harmony import */ var _workers_Find_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../workers/Find.worker */ "./workers/Find.worker.js");

var _jsxFileName = "R:\\VIT Research\\Research Papers for topics\\Stegnography for medical imaging\\portalwebsite\\StegaPhoto\\components\\StepsFind.js";






const StepsFind = () => {
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: finding,
    1: setFinding
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: progress,
    1: setProgress
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: result,
    1: setResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);

  const findFiles = () => {
    setFinding(true);
    const worker = new _workers_Find_worker__WEBPACK_IMPORTED_MODULE_5__["default"]();

    worker.onmessage = ({
      data: {
        progress,
        result
      }
    }) => {
      setProgress(progress);
      setResult(result);
    };

    worker.postMessage({
      image,
      password
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    id: "form",
    className: "grid gap-32",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "mb-8",
        children: "Add the image you want to retrieve files from within"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFiles__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "image",
        accept: "image/*",
        files: image,
        setFiles: setImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "mb-8",
        children: ["Enter the password used to hide the files", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "text-gray-400",
          children: "(may be blank)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormPassword__WEBPACK_IMPORTED_MODULE_3__["default"], {
        value: password,
        onChange: setPassword
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgressButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onClick: findFiles,
        progress: progress,
        download: result && URL.createObjectURL(result),
        children: result ? "Download files" : finding ? "Finding files..." : "Find files inside image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StepsFind);

/***/ }),

/***/ "./components/StepsHide.js":
/*!*********************************!*\
  !*** ./components/StepsHide.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormFiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormFiles */ "./components/FormFiles.js");
/* harmony import */ var _FormRange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormRange */ "./components/FormRange.js");
/* harmony import */ var _FormPassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormPassword */ "./components/FormPassword.js");
/* harmony import */ var _ProgressButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProgressButton */ "./components/ProgressButton.js");
/* harmony import */ var _workers_Hide_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../workers/Hide.worker */ "./workers/Hide.worker.js");

var _jsxFileName = "R:\\VIT Research\\Research Papers for topics\\Stegnography for medical imaging\\portalwebsite\\StegaPhoto\\components\\StepsHide.js";







const StepsHide = () => {
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: files,
    1: setFiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: compression,
    1: setCompression
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(9);
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: confirmPassword,
    1: setConfirmPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: hiding,
    1: setHiding
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: progress,
    1: setProgress
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: result,
    1: setResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);

  const hideFiles = () => {
    setHiding(true);
    const worker = new _workers_Hide_worker__WEBPACK_IMPORTED_MODULE_6__["default"]();

    worker.onmessage = ({
      data: {
        progress,
        result
      }
    }) => {
      setProgress(progress);
      setResult(result);
    };

    worker.postMessage({
      image,
      files,
      compression,
      password
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    id: "form",
    className: "grid gap-32",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "mb-8",
        children: "Add the image you want to hide the files inside"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFiles__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "image",
        accept: "image/*",
        files: image,
        setFiles: setImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "mb-8",
        children: "Add the files you would like to hide"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFiles__WEBPACK_IMPORTED_MODULE_2__["default"], {
        multiple: true,
        files: files,
        setFiles: setFiles
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "mb-8",
        children: "Choose the compression level"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormRange__WEBPACK_IMPORTED_MODULE_3__["default"], {
        min: 0,
        max: 9,
        step: 1,
        value: compression,
        onChange: setCompression
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "mb-8",
        children: ["Choose and confirm password", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "text-gray-400",
          children: "(optional)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormPassword__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: password,
        confirm: confirmPassword,
        onChange: setPassword,
        onConfirm: setConfirmPassword,
        valid: password === confirmPassword
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgressButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClick: hideFiles,
        progress: progress,
        download: result && URL.createObjectURL(result),
        children: result ? "Download image" : hiding ? "Hiding files..." : "Hide files inside image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StepsHide);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Banner */ "./components/Banner.js");
/* harmony import */ var _components_Flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Flow */ "./components/Flow.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");

var _jsxFileName = "R:\\VIT Research\\Research Papers for topics\\Stegnography for medical imaging\\portalwebsite\\StegaPhoto\\pages\\index.js";





const Home = ({
  stars
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
      stars: stars
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Flow__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./workers/Find.worker.js":
/*!********************************!*\
  !*** ./workers/Find.worker.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Worker_fn; });
function Worker_fn() {
  return new Worker(__webpack_require__.p + "Find.worker.worker.js");
}

/***/ }),

/***/ "./workers/Hide.worker.js":
/*!********************************!*\
  !*** ./workers/Hide.worker.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Worker_fn; });
function Worker_fn() {
  return new Worker(__webpack_require__.p + "Hide.worker.worker.js");
}

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "pretty-bytes":
/*!*******************************!*\
  !*** external "pretty-bytes" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pretty-bytes");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaG9vc2VGbG93LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmxvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm1GaWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm1QYXNzd29yZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm1SYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm1SYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9ncmVzc0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N0ZXBzRmluZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N0ZXBzSGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi93b3JrZXJzL0ZpbmQud29ya2VyLmpzIiwid2VicGFjazovLy8uL3dvcmtlcnMvSGlkZS53b3JrZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJldHR5LWJ5dGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJCYW5uZXIiLCJzdGFycyIsIkNob29zZUZsb3ciLCJvbkNob2ljZSIsIkZsb3ciLCJmbG93Iiwic2V0RmxvdyIsInVzZVN0YXRlIiwiQ2hvc2VuRmxvdyIsIlN0ZXBzRmluZCIsIlN0ZXBzSGlkZSIsIkZvb3RlciIsIkZvcm1GaWxlcyIsInR5cGUiLCJtdWx0aXBsZSIsImFjY2VwdCIsImZpbGVzIiwic2V0RmlsZXMiLCJlcnJvciIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmaWxlSW5wdXQiLCJ1c2VSZWYiLCJyZWFkRmlsZSIsImZpbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJjb250ZW50cyIsInJlc3VsdCIsIm5hbWUiLCJkYXRlIiwiRGF0ZSIsImxhc3RNb2RpZmllZCIsInNpemUiLCJvbmVycm9yIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJsb2FkRmlsZXMiLCJldmVudCIsIm5ld0ZpbGVzIiwiYWxsIiwidGFyZ2V0IiwibWFwIiwicmVkdWNlIiwidW5pcXVlRmlsZXMiLCJleGlzdHMiLCJmaW5kIiwiZXhpc3RpbmciLCJpbmRleCIsInByZXR0eSIsImZpbHRlciIsIl8iLCJpIiwibGVuZ3RoIiwiY3VycmVudCIsImNsaWNrIiwiRm9ybVBhc3N3b3JkIiwidmFsdWUiLCJjb25maXJtIiwib25DaGFuZ2UiLCJvbkNvbmZpcm0iLCJ2YWxpZCIsIkZvcm1SYWRpbyIsImxhYmVsIiwiRm9ybVJhbmdlIiwibWluIiwibWF4Iiwic3RlcCIsInJhbmdlIiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsIk51bWJlciIsIm51bWJlciIsIk5PU0NSSVBUIiwiUGFnZSIsImNoaWxkcmVuIiwiUHJvZ3Jlc3NCdXR0b24iLCJvbkNsaWNrIiwicHJvZ3Jlc3MiLCJkb3dubG9hZCIsInRyYW5zZm9ybSIsImltYWdlIiwic2V0SW1hZ2UiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZmluZGluZyIsInNldEZpbmRpbmciLCJzZXRQcm9ncmVzcyIsInNldFJlc3VsdCIsImZpbmRGaWxlcyIsIndvcmtlciIsIkZpbmRXb3JrZXIiLCJvbm1lc3NhZ2UiLCJkYXRhIiwicG9zdE1lc3NhZ2UiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjb21wcmVzc2lvbiIsInNldENvbXByZXNzaW9uIiwiY29uZmlybVBhc3N3b3JkIiwic2V0Q29uZmlybVBhc3N3b3JkIiwiaGlkaW5nIiwic2V0SGlkaW5nIiwiaGlkZUZpbGVzIiwiSGlkZVdvcmtlciIsIkhvbWUiLCJXb3JrZXJfZm4iLCJXb3JrZXIiLCJfX3dlYnBhY2tfcHVibGljX3BhdGhfXyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsa0JBQ1g7QUFBUSxXQUFTLEVBQUMsNENBQWxCO0FBQUEseUJBQ0k7QUFBSyxhQUFTLEVBQUMsdURBQWY7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyw2Q0FBZjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyw4QkFBZDtBQUFBO0FBQUE7QUFBQTtB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Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgQmFubmVyID0gKHsgc3RhcnMgfSkgPT4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iIGZyb20tZ3JheS01MDAgdG8tZ3JheS05MDBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB4bDptYXgtdy1zY3JlZW4teGwgbXgtYXV0byBweC04IHB0LTMyIHBiLTE2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIG1yLTQgbWItNCBmb250LWJvbGRcIj5TdGVnYW5vZ3JhcGh5IGZvciBNZWRpY2FsIEltYWdlcyBvciBwYXRpZW50czwvaDE+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyB0ZXh0LXhsIGJnLWdyYXktOTAwIGJnLW9wYWNpdHktMTAgb3BhY2l0eS05NSBzaGFkb3ctaW5uZXIgaG92ZXI6Ymctb3BhY2l0eS0yMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nIHJpbmctZ3JheS0xMDAgcmluZy1vcGFjaXR5LTI1IHBsLTIgcHItMyBtYi00XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7LyogJiM5NzMzOyB7c3RhcnN9IHN0YXJzICovfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC00eGwgbWQ6dGV4dC01eGwgbGc6dGV4dC00eGwgcHQtOFwiPlxyXG4gICAgICAgICAgICAgICAgSGlkZSBmaWxlcyBpbnNpZGUgaW1hZ2VzXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xyXG4iLCJpbXBvcnQgRm9ybVJhZGlvIGZyb20gXCIuL0Zvcm1SYWRpb1wiO1xyXG5cclxuY29uc3QgQ2hvb3NlRmxvdyA9ICh7IG9uQ2hvaWNlIH0pID0+IChcclxuICAgIDxmaWVsZHNldCBmb3JtPVwiZm9ybVwiIGNsYXNzTmFtZT1cImdyaWQgZ2FwLTQgbWItMzJcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00XCI+Q2hvb3NlPC9wPlxyXG4gICAgICAgIDxGb3JtUmFkaW9cclxuICAgICAgICAgICAgbmFtZT1cImNob29zZUZsb3dcIlxyXG4gICAgICAgICAgICB2YWx1ZT1cImhpZGVcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkNyZWF0ZSBhIHNlY3JldCBpbWFnZSBmb3IgQW5vdGhlciBEb2N0b3Igd2l0aCBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNob2ljZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxGb3JtUmFkaW9cclxuICAgICAgICAgICAgbmFtZT1cImNob29zZUZsb3dcIlxyXG4gICAgICAgICAgICB2YWx1ZT1cImZpbmRcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlJldHJpZXZlIHRoZSBpbmZvcm1hdGlvbiAmIGZpbGVzIGZyb20gYW4gaW1hZ2Ugd2hpY2ggaXMgc2VudCBieSBhbm90aGVyIGRvY3RvclwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNob2ljZX1cclxuICAgICAgICAvPlxyXG4gICAgPC9maWVsZHNldD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENob29zZUZsb3c7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaG9vc2VGbG93IGZyb20gXCIuL0Nob29zZUZsb3dcIjtcclxuaW1wb3J0IFN0ZXBzRmluZCBmcm9tIFwiLi9TdGVwc0ZpbmRcIjtcclxuaW1wb3J0IFN0ZXBzSGlkZSBmcm9tIFwiLi9TdGVwc0hpZGVcIjtcclxuXHJcbmNvbnN0IEZsb3cgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZmxvdywgc2V0Rmxvd10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IENob3NlbkZsb3cgPSBmbG93ID09PSBcImZpbmRcIiA/IFN0ZXBzRmluZCA6IFN0ZXBzSGlkZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcHQtMzIgdy1mdWxsIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1ncmF5LTkwMCB0by1ncmF5LTgwMCBvcGFjaXR5LTUwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMzIgY29udGFpbmVyIHhsOm1heC13LXNjcmVlbi14bCBteC1hdXRvIHB4LThcIj5cclxuICAgICAgICAgICAgICAgIDxub3NjcmlwdD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMyIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1yZWQtODAwIHRvLXJlZC05MDAgcC04IC1teC04IHNtOi1teC00IHNtOnJvdW5kZWQtbGcgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0ZWdhUGhvdG8gcmVxdWlyZXMgSmF2YVNjcmlwdCB0byBoaWRlIGFuZCBmaW5kIGZpbGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhpbiBpbWFnZXMhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L25vc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPENob29zZUZsb3cgb25DaG9pY2U9e3NldEZsb3d9IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2hvc2VuRmxvdyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBwdC0zMiB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWdyYXktOTAwIHRvLWdyYXktODAwIG9wYWNpdHktMTBcIj48L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmxvdztcclxuIiwiY29uc3QgRm9vdGVyID0gKCkgPT4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1ncmF5LTkwMCBiZy1vcGFjaXR5LTI1IHRleHQtbGdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB4bDptYXgtdy1zY3JlZW4teGwgbXgtYXV0byBmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBweC04IHB0LTE2IHBiLTE2XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTQgc206bWItMFwiPlxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlZCBieXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwIGhvdmVyOnRleHQtYmx1ZS0zMDAgZm9jdXM6dGV4dC1ibHVlLTMwMCBmb2N1cy12aXNpYmxlOnVuZGVybGluZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFJvYXR2aWxsZVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDAgaG92ZXI6dGV4dC1ibHVlLTMwMCBmb2N1czp0ZXh0LWJsdWUtMzAwIGZvY3VzLXZpc2libGU6dW5kZXJsaW5lIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgaG93IEl0IHdhcyBtYWRlXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcmV0dHkgZnJvbSBcInByZXR0eS1ieXRlc1wiO1xyXG5cclxuY29uc3QgRm9ybUZpbGVzID0gKHsgdHlwZSA9IFwiZmlsZVwiLCBtdWx0aXBsZSwgYWNjZXB0LCBmaWxlcywgc2V0RmlsZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBmaWxlSW5wdXQgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgY29uc3QgcmVhZEZpbGUgPSAoZmlsZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50czogcmVhZGVyLnJlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoZmlsZS5sYXN0TW9kaWZpZWQpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBmaWxlLnR5cGUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3Q7XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbG9hZEZpbGVzID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdGaWxlcyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgICAgICAgWy4uLmV2ZW50LnRhcmdldC5maWxlc10ubWFwKHJlYWRGaWxlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzZXRFcnJvcihmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldEZpbGVzKFsuLi5maWxlcywgLi4ubmV3RmlsZXNdLnJlZHVjZSh1bmlxdWVGaWxlcywgW10pKTtcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1bmlxdWVGaWxlcyA9ICh1bmlxdWVGaWxlcywgZmlsZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0cyA9IHVuaXF1ZUZpbGVzLmZpbmQoXHJcbiAgICAgICAgICAgIChleGlzdGluZykgPT5cclxuICAgICAgICAgICAgICAgIGV4aXN0aW5nLm5hbWUgPT09IGZpbGUubmFtZSAmJlxyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmcubGFzdE1vZGlmaWVkID09PSBmaWxlLmxhc3RNb2RpZmllZCAmJlxyXG4gICAgICAgICAgICAgICAgZXhpc3Rpbmcuc2l6ZSA9PT0gZmlsZS5zaXplICYmXHJcbiAgICAgICAgICAgICAgICBleGlzdGluZy50eXBlID09PSBmaWxlLnR5cGVcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gZXhpc3RzID8gdW5pcXVlRmlsZXMgOiBbLi4udW5pcXVlRmlsZXMsIGZpbGVdO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC04IGJnLWdyYXktOTAwIGJnLW9wYWNpdHktMjUgc2hhZG93LWlubmVyIHAtOCAtbXgtOCBzbTotbXgtNCBzbTpyb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgIHtmaWxlcy5tYXAoKGZpbGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtZDp0ZXh0LWxnIGJnLWdyYXktNzAwIHNoYWRvdyByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcHktMiBweC00IHRydW5jYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmaWxlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rIHdoaXRlc3BhY2Utbm93cmFwIHB5LTIgcHgtNCB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcmV0dHkoZmlsZS5zaXplKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxmLXN0cmV0Y2ggcHgtMyB0ZXh0LTN4bCBiZy1ncmF5LTgwMCBiZy1vcGFjaXR5LTI1IGhvdmVyOmJnLW9wYWNpdHktNTAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZyByaW5nLWJsdWUtNTAwIHJpbmctb3BhY2l0eS01MCByb3VuZGVkLXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpbGVzKGZpbGVzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmdGltZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgeyhmaWxlcy5sZW5ndGggPT09IDAgfHwgbXVsdGlwbGUpICYmIChcclxuICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17ZmlsZXMubGVuZ3RoICsgMX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbWQ6dGV4dC1sZyBiZy1ncmF5LTcwMCBzaGFkb3cgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PXthY2NlcHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtsb2FkRmlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlPXttdWx0aXBsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZmlsZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleC1ncm93IHB5LTIgcHgtNCB0cnVuY2F0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJFcnJvciBsb2FkaW5nIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJMb2FkaW5nIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQWRkIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge211bHRpcGxlICYmIFwic1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiBcIi4uLlwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGYtc3RyZXRjaCBweC0zIHRleHQtM3hsIGJnLWdyYXktODAwIGJnLW9wYWNpdHktMjUgaG92ZXI6Ymctb3BhY2l0eS01MCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nIHJpbmctYmx1ZS01MDAgcmluZy1vcGFjaXR5LTUwIHJvdW5kZWQtclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmaWxlSW5wdXQuY3VycmVudC5jbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIGluc2V0LTBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUZpbGVzO1xyXG4iLCJjb25zdCBGb3JtUGFzc3dvcmQgPSAoeyB2YWx1ZSwgY29uZmlybSwgb25DaGFuZ2UsIG9uQ29uZmlybSwgdmFsaWQgfSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2AtbXgtNCBncmlkIGdhcC04ICR7b25Db25maXJtID8gXCJtZDpncmlkLWNvbHMtMlwiIDogXCJcIn1gfT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgYmctb3BhY2l0eS0yNSBwbGFjZWhvbGRlci1ncmF5LTcwMCByb3VuZGVkLWxnIHNoYWRvdy1pbm5lciBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nIHJpbmctYmx1ZS01MDAgcmluZy1vcGFjaXR5LTUwIG1kOnRleHQtM3hsIHctZnVsbCBweC00IHB5LTIgYm9yZGVyLTIgYm9yZGVyLXRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiZidWxsOyZidWxsOyZidWxsOyZidWxsOyZidWxsOyZidWxsO1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7b25Db25maXJtICYmIChcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BiZy1ncmF5LTkwMCBiZy1vcGFjaXR5LTI1IHBsYWNlaG9sZGVyLWdyYXktNzAwIHJvdW5kZWQtbGcgc2hhZG93LWlubmVyIGZvY3VzOm91dGxpbmUtbm9uZSBtZDp0ZXh0LTN4bCB3LWZ1bGwgcHgtNCBweS0yIGJvcmRlci0yICR7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJvcmRlci10cmFuc3BhcmVudCBmb2N1cy12aXNpYmxlOnJpbmcgcmluZy1ibHVlLTUwMCByaW5nLW9wYWNpdHktNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiYm9yZGVyLXJlZC01MDAgZm9jdXMtdmlzaWJsZTpyaW5nIHJpbmctcmVkLTUwMCByaW5nLW9wYWNpdHktNTBcIlxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb25maXJtfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gb25Db25maXJtKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiZidWxsOyZidWxsOyZidWxsOyZidWxsOyZidWxsOyZidWxsO1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybVBhc3N3b3JkO1xyXG4iLCJjb25zdCBGb3JtUmFkaW8gPSAoeyBuYW1lLCBsYWJlbCwgdmFsdWUsIG9uQ2hhbmdlIH0pID0+IChcclxuICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci1ncmF5LTcwMCBzaGFkb3ctaW5uZXIgbXItNFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgYXBwZWFyYW5jZS1ub25lIGN1cnNvci1wb2ludGVyIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmcgcmluZy1ibHVlLTUwMCByaW5nLW9wYWNpdHktNTAgcm91bmRlZC1mdWxsIGJvcmRlci04IGJvcmRlci10cmFuc3BhcmVudCBjaGVja2VkOmJvcmRlci1ibHVlLTUwMCBwLTEgY2hlY2tlZDpiZy1ncmF5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgbS0yIHJvdW5kZWQtZnVsbCBzaGFkb3ctc21cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7bGFiZWx9XHJcbiAgICA8L2xhYmVsPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybVJhZGlvO1xyXG4iLCJjb25zdCBGb3JtUmFuZ2UgPSAoeyBtaW4sIG1heCwgc3RlcCwgdmFsdWUsIG9uQ2hhbmdlIH0pID0+IHtcclxuICAgIC8vIEdlbmVyYXRlIHJhbmdlIG9mIG51bWJlcnNcclxuICAgIGNvbnN0IHJhbmdlID0gQXJyYXkuZnJvbShcclxuICAgICAgICBuZXcgQXJyYXkoKG1heCAtIG1pbikgLyBzdGVwICsgMSkua2V5cygpLFxyXG4gICAgICAgIChpbmRleCkgPT4gbWluICsgaW5kZXggKiBzdGVwXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayByb3VuZGVkLWZ1bGwgYXBwZWFyYW5jZS1ub25lIGN1cnNvci1wb2ludGVyIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmcgcmluZy1ibHVlLTUwMCByaW5nLW9wYWNpdHktNTAgYmctZ3JheS05MDAgYmctb3BhY2l0eS0yNSBzaGFkb3ctaW5uZXIgdy1mdWxsIC1teC00IHB4LTQgaC00IGJveC1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXHJcbiAgICAgICAgICAgICAgICBtaW49e21pbn1cclxuICAgICAgICAgICAgICAgIG1heD17bWF4fVxyXG4gICAgICAgICAgICAgICAgc3RlcD17c3RlcH1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uQ2hhbmdlKE51bWJlcihldmVudC50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LWJhc2UgY3Vyc29yLWRlZmF1bHQgbXQtNCAtbXgtMVwiPlxyXG4gICAgICAgICAgICAgICAge3JhbmdlLm1hcCgobnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtudW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXIgPT09IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInRleHQtZ3JheS0xMDAgY3Vyc29yLXBvaW50ZXIgdGV4dC1jZW50ZXIgdy01XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTUwMCBjdXJzb3ItcG9pbnRlciB0ZXh0LWNlbnRlciB3LTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKG51bWJlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtUmFuZ2U7XHJcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmNvbnN0IE5PU0NSSVBUID0gYFxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUGFnZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGJnLWdyYXktODAwIHRleHQtZ3JheS0xMDAgdGV4dC14bCBsZzp0ZXh0LTJ4bFwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDx0aXRsZT5NZWRpY2FsIEltYWdlczwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICByZWw9XCJwcmVjb25uZWN0XCJcclxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCJcclxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxyXG4gICAgICAgICAgICAgICAgYXM9XCJzdHlsZVwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlciZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlciZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgICAgICAgbWVkaWE9XCJwcmludFwiXHJcbiAgICAgICAgICAgICAgICBvbkxvYWQ9XCJ0aGlzLm1lZGlhPSdhbGwnXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiSGlkZSBmaWxlcyBpbnNpZGUgaW1hZ2VzIGVhc2lseSB1c2luZyBTdGVnYVBob3RvLCB1c2luZyBpbi1icm93c2VyIHN0ZWdhbm9ncmFwaHkgdGVjaG5pcXVlcy5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXHJcbiAgICAgICAgICAgICAgICBzaXplcz1cIjE4MHgxODBcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICByZWw9XCJpY29uXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZXM9XCIzMngzMlwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiL2Zhdmljb24tMzJ4MzIucG5nXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgIHJlbD1cImljb25cIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXHJcbiAgICAgICAgICAgICAgICBzaXplcz1cIjE2eDE2XCJcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvZmF2aWNvbi0xNngxNi5wbmdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XHJcbiAgICAgICAgICAgIDxub3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZT57Tk9TQ1JJUFR9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9ub3NjcmlwdD5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iLCJjb25zdCBQcm9ncmVzc0J1dHRvbiA9ICh7IG9uQ2xpY2ssIHByb2dyZXNzLCBkb3dubG9hZCwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgcmV0dXJuIGRvd25sb2FkID8gKFxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHJlbGF0aXZlIHRleHQtY2VudGVyIGJnLWdyZWVuLTcwMCBob3ZlcjpiZy1ncmVlbi02MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSB0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBsZzp0ZXh0LTR4bCBwLTYgbWQ6cC04IG14LWF1dG8gdy1mdWxsIG1heC13LXNjcmVlbi1zbSByb3VuZGVkLWZ1bGwgc2hhZG93LWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmcgcmluZy1ibHVlLTUwMCByaW5nLW9wYWNpdHktNTBcIlxyXG4gICAgICAgICAgICBocmVmPXtkb3dubG9hZH1cclxuICAgICAgICAgICAgZG93bmxvYWRcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgcm91bmRlZC1mdWxsIGJnLWdyZWVuLTQwMCBhbmltYXRlLXB1bHNlIGJnLW9wYWNpdHktNTAgb3ZlcmZsb3ctaGlkZGVuXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPntjaGlsZHJlbn08L3NwYW4+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgKSA6IChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHJlbGF0aXZlIGJnLWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNjAwIGZvY3VzOmJnLWJsdWUtNjAwIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGZvY3VzOnNjYWxlLTEwNSB0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBsZzp0ZXh0LTR4bCBwLTYgbWQ6cC04IG14LWF1dG8gdy1mdWxsIG1heC13LXNjcmVlbi1zbSByb3VuZGVkLWZ1bGwgc2hhZG93LWxnIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCByb3VuZGVkLWZ1bGwgYmctZ3JheS00MDAgaG92ZXI6YW5pbWF0ZS1wdWxzZSBiZy1vcGFjaXR5LTI1IG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIG9yaWdpbi1sZWZ0IHRyYW5zaXRpb24tdHJhbnNmb3JtIGVhc2UtbGluZWFyIGR1cmF0aW9uLTcwMCBiZy1ibHVlLTkwMCBiZy1vcGFjaXR5LTUwXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IGBzY2FsZVgoJHtwcm9ncmVzcyAvIDEwMH0pYCB9fVxyXG4gICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCdXR0b247XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtRmlsZXMgZnJvbSBcIi4vRm9ybUZpbGVzXCI7XHJcbmltcG9ydCBGb3JtUGFzc3dvcmQgZnJvbSBcIi4vRm9ybVBhc3N3b3JkXCI7XHJcbmltcG9ydCBQcm9ncmVzc0J1dHRvbiBmcm9tIFwiLi9Qcm9ncmVzc0J1dHRvblwiO1xyXG5pbXBvcnQgRmluZFdvcmtlciBmcm9tIFwiLi4vd29ya2Vycy9GaW5kLndvcmtlclwiO1xyXG5cclxuY29uc3QgU3RlcHNGaW5kID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2ZpbmRpbmcsIHNldEZpbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBmaW5kRmlsZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RmluZGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCB3b3JrZXIgPSBuZXcgRmluZFdvcmtlcigpO1xyXG5cclxuICAgICAgICB3b3JrZXIub25tZXNzYWdlID0gKHsgZGF0YTogeyBwcm9ncmVzcywgcmVzdWx0IH0gfSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQcm9ncmVzcyhwcm9ncmVzcyk7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIGltYWdlLFxyXG4gICAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBpZD1cImZvcm1cIiBjbGFzc05hbWU9XCJncmlkIGdhcC0zMlwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEFkZCB0aGUgaW1hZ2UgeW91IHdhbnQgdG8gcmV0cmlldmUgZmlsZXMgZnJvbSB3aXRoaW5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxGb3JtRmlsZXNcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVzPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICBzZXRGaWxlcz17c2V0SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj5cclxuICAgICAgICAgICAgICAgICAgICBFbnRlciB0aGUgcGFzc3dvcmQgdXNlZCB0byBoaWRlIHRoZSBmaWxlc3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+KG1heSBiZSBibGFuayk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybVBhc3N3b3JkIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e3NldFBhc3N3b3JkfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxQcm9ncmVzc0J1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2ZpbmRGaWxlc31cclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcz17cHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgZG93bmxvYWQ9e3Jlc3VsdCAmJiBVUkwuY3JlYXRlT2JqZWN0VVJMKHJlc3VsdCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3Jlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiRG93bmxvYWQgZmlsZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGZpbmRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkZpbmRpbmcgZmlsZXMuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiRmluZCBmaWxlcyBpbnNpZGUgaW1hZ2VcIn1cclxuICAgICAgICAgICAgICAgIDwvUHJvZ3Jlc3NCdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGVwc0ZpbmQ7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtRmlsZXMgZnJvbSBcIi4vRm9ybUZpbGVzXCI7XHJcbmltcG9ydCBGb3JtUmFuZ2UgZnJvbSBcIi4vRm9ybVJhbmdlXCI7XHJcbmltcG9ydCBGb3JtUGFzc3dvcmQgZnJvbSBcIi4vRm9ybVBhc3N3b3JkXCI7XHJcbmltcG9ydCBQcm9ncmVzc0J1dHRvbiBmcm9tIFwiLi9Qcm9ncmVzc0J1dHRvblwiO1xyXG5pbXBvcnQgSGlkZVdvcmtlciBmcm9tIFwiLi4vd29ya2Vycy9IaWRlLndvcmtlclwiO1xyXG5cclxuY29uc3QgU3RlcHNIaWRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb21wcmVzc2lvbiwgc2V0Q29tcHJlc3Npb25dID0gdXNlU3RhdGUoOSk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2NvbmZpcm1QYXNzd29yZCwgc2V0Q29uZmlybVBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2hpZGluZywgc2V0SGlkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgaGlkZUZpbGVzID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEhpZGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCB3b3JrZXIgPSBuZXcgSGlkZVdvcmtlcigpO1xyXG5cclxuICAgICAgICB3b3JrZXIub25tZXNzYWdlID0gKHsgZGF0YTogeyBwcm9ncmVzcywgcmVzdWx0IH0gfSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQcm9ncmVzcyhwcm9ncmVzcyk7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIGltYWdlLFxyXG4gICAgICAgICAgICBmaWxlcyxcclxuICAgICAgICAgICAgY29tcHJlc3Npb24sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIGlkPVwiZm9ybVwiIGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMyXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkIHRoZSBpbWFnZSB5b3Ugd2FudCB0byBoaWRlIHRoZSBmaWxlcyBpbnNpZGVcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxGb3JtRmlsZXNcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVzPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICBzZXRGaWxlcz17c2V0SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj5BZGQgdGhlIGZpbGVzIHlvdSB3b3VsZCBsaWtlIHRvIGhpZGU8L3A+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUZpbGVzIG11bHRpcGxlIGZpbGVzPXtmaWxlc30gc2V0RmlsZXM9e3NldEZpbGVzfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj5DaG9vc2UgdGhlIGNvbXByZXNzaW9uIGxldmVsPC9wPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1SYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICBtYXg9ezl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcHJlc3Npb259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldENvbXByZXNzaW9ufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hvb3NlIGFuZCBjb25maXJtIHBhc3N3b3Jke1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj4ob3B0aW9uYWwpPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1QYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtPXtjb25maXJtUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17c2V0Q29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkPXtwYXNzd29yZCA9PT0gY29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoaWRlRmlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3Byb2dyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIGRvd25sb2FkPXtyZXN1bHQgJiYgVVJMLmNyZWF0ZU9iamVjdFVSTChyZXN1bHQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkRvd25sb2FkIGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBoaWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkhpZGluZyBmaWxlcy4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJIaWRlIGZpbGVzIGluc2lkZSBpbWFnZVwifVxyXG4gICAgICAgICAgICAgICAgPC9Qcm9ncmVzc0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0ZXBzSGlkZTtcclxuIiwiaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9CYW5uZXJcIjtcclxuaW1wb3J0IEZsb3cgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmxvd1wiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlXCI7XHJcblxyXG5jb25zdCBIb21lID0gKHsgc3RhcnMgfSkgPT4gKFxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJhbm5lciBzdGFycz17c3RhcnN9IC8+XHJcbiAgICAgICAgICAgIDxGbG93IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9QYWdlPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya2VyX2ZuKCkge1xuICByZXR1cm4gbmV3IFdvcmtlcihfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiRmluZC53b3JrZXIud29ya2VyLmpzXCIpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya2VyX2ZuKCkge1xuICByZXR1cm4gbmV3IFdvcmtlcihfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiSGlkZS53b3JrZXIud29ya2VyLmpzXCIpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByZXR0eS1ieXRlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==