/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js?!./workers/Hide.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js?!./workers/Hide.worker.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js??ref--6-1!./workers/Hide.worker.js ***!
  \**************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jszip */ "jszip");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_0__);


const encryptZip = async (zipUint, imageUint, password) => {
  const passwordUint = new TextEncoder().encode(password);
  const baseKey = await crypto.subtle.importKey("raw", passwordUint, "PBKDF2", false, ["deriveBits", "deriveKey"]);
  const cryptoKey = await crypto.subtle.deriveKey({
    name: "PBKDF2",
    salt: imageUint.slice(0, 16),
    iterations: 10000,
    hash: "SHA-256"
  }, baseKey, {
    name: "AES-CTR",
    length: 128
  }, false, ["encrypt"]);
  const zipEncrypted = await crypto.subtle.encrypt({
    name: "AES-CTR",
    counter: new Uint8Array(16),
    length: 128
  }, cryptoKey, zipUint.buffer);
  return new Uint8Array(zipEncrypted);
};

onmessage = async ({
  data: {
    image: [{
      contents,
      type
    }],
    files,
    compression,
    password
  }
}) => {
  const zip = new jszip__WEBPACK_IMPORTED_MODULE_0___default.a();
  files.forEach(file => {
    const {
      name,
      contents,
      date
    } = file;
    zip.file(name, contents, {
      date
    });
  });
  const imageUint = new Uint8Array(contents);
  const zipUint = await zip.generateAsync({
    type: "uint8array",
    compression: compression === 0 ? "STORE" : "DEFLATE",
    compressionOptions: {
      level: compression
    }
  }, ({
    percent
  }) => {
    postMessage({
      progress: percent
    });
  });
  const zipEncryptedUint = await encryptZip(zipUint, imageUint, password);
  const resultUint = new Uint8Array([...imageUint, ...zipEncryptedUint]);
  postMessage({
    result: new Blob([resultUint], {
      type
    })
  });
  close();
};

/***/ }),

/***/ "jszip":
/*!************************!*\
  !*** external "jszip" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jszip");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd29ya2Vycy9IaWRlLndvcmtlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc3ppcFwiIl0sIm5hbWVzIjpbImVuY3J5cHRaaXAiLCJ6aXBVaW50IiwiaW1hZ2VVaW50IiwicGFzc3dvcmQiLCJwYXNzd29yZFVpbnQiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsImJhc2VLZXkiLCJjcnlwdG8iLCJzdWJ0bGUiLCJpbXBvcnRLZXkiLCJjcnlwdG9LZXkiLCJkZXJpdmVLZXkiLCJuYW1lIiwic2FsdCIsInNsaWNlIiwiaXRlcmF0aW9ucyIsImhhc2giLCJsZW5ndGgiLCJ6aXBFbmNyeXB0ZWQiLCJlbmNyeXB0IiwiY291bnRlciIsIlVpbnQ4QXJyYXkiLCJidWZmZXIiLCJvbm1lc3NhZ2UiLCJkYXRhIiwiaW1hZ2UiLCJjb250ZW50cyIsInR5cGUiLCJmaWxlcyIsImNvbXByZXNzaW9uIiwiemlwIiwiSlNaaXAiLCJmb3JFYWNoIiwiZmlsZSIsImRhdGUiLCJnZW5lcmF0ZUFzeW5jIiwiY29tcHJlc3Npb25PcHRpb25zIiwibGV2ZWwiLCJwZXJjZW50IiwicG9zdE1lc3NhZ2UiLCJwcm9ncmVzcyIsInppcEVuY3J5cHRlZFVpbnQiLCJyZXN1bHRVaW50IiwicmVzdWx0IiwiQmxvYiIsImNsb3NlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFF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RyxnQkFBZ0IsR0FBRyxNQUFNMUMsVUFBVSxDQUFDQyxPQUFELEVBQVVDLFNBQVYsRUFBcUJDLFFBQXJCLENBQXpDO0FBQ0EsUUFBTXdDLFVBQVUsR0FBRyxJQUFJckIsVUFBSixDQUFlLENBQUMsR0FBR3BCLFNBQUosRUFBZSxHQUFHd0MsZ0JBQWxCLENBQWYsQ0FBbkI7QUFFQUYsYUFBVyxDQUFDO0FBQ1JJLFVBQU0sRUFBRSxJQUFJQyxJQUFKLENBQVMsQ0FBQ0YsVUFBRCxDQUFULEVBQXVCO0FBQUVmO0FBQUYsS0FBdkI7QUFEQSxHQUFELENBQVg7QUFHQWtCLE9BQUs7QUFDUixDQXRDRCxDOzs7Ozs7Ozs7OztBQ3RDQSxrQyIsImZpbGUiOiJIaWRlLndvcmtlci53b3JrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1iYWJlbC1sb2FkZXIuanM/IS4vd29ya2Vycy9IaWRlLndvcmtlci5qc1wiKTtcbiIsImltcG9ydCBKU1ppcCBmcm9tIFwianN6aXBcIjtcclxuXHJcbmNvbnN0IGVuY3J5cHRaaXAgPSBhc3luYyAoemlwVWludCwgaW1hZ2VVaW50LCBwYXNzd29yZCkgPT4ge1xyXG4gICAgY29uc3QgcGFzc3dvcmRVaW50ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHBhc3N3b3JkKTtcclxuICAgIGNvbnN0IGJhc2VLZXkgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmltcG9ydEtleShcclxuICAgICAgICBcInJhd1wiLFxyXG4gICAgICAgIHBhc3N3b3JkVWludCxcclxuICAgICAgICBcIlBCS0RGMlwiLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIFtcImRlcml2ZUJpdHNcIiwgXCJkZXJpdmVLZXlcIl1cclxuICAgICk7XHJcbiAgICBjb25zdCBjcnlwdG9LZXkgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmRlcml2ZUtleShcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiUEJLREYyXCIsXHJcbiAgICAgICAgICAgIHNhbHQ6IGltYWdlVWludC5zbGljZSgwLCAxNiksXHJcbiAgICAgICAgICAgIGl0ZXJhdGlvbnM6IDEwMDAwLFxyXG4gICAgICAgICAgICBoYXNoOiBcIlNIQS0yNTZcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhc2VLZXksXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkFFUy1DVFJcIixcclxuICAgICAgICAgICAgbGVuZ3RoOiAxMjgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICBbXCJlbmNyeXB0XCJdXHJcbiAgICApO1xyXG4gICAgY29uc3QgemlwRW5jcnlwdGVkID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5lbmNyeXB0KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJBRVMtQ1RSXCIsXHJcbiAgICAgICAgICAgIGNvdW50ZXI6IG5ldyBVaW50OEFycmF5KDE2KSxcclxuICAgICAgICAgICAgbGVuZ3RoOiAxMjgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcnlwdG9LZXksXHJcbiAgICAgICAgemlwVWludC5idWZmZXJcclxuICAgICk7XHJcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoemlwRW5jcnlwdGVkKTtcclxufTtcclxuXHJcbm9ubWVzc2FnZSA9IGFzeW5jICh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgaW1hZ2U6IFt7IGNvbnRlbnRzLCB0eXBlIH1dLFxyXG4gICAgICAgIGZpbGVzLFxyXG4gICAgICAgIGNvbXByZXNzaW9uLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgfSxcclxufSkgPT4ge1xyXG4gICAgY29uc3QgemlwID0gbmV3IEpTWmlwKCk7XHJcbiAgICBmaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCBjb250ZW50cywgZGF0ZSB9ID0gZmlsZTtcclxuICAgICAgICB6aXAuZmlsZShuYW1lLCBjb250ZW50cywge1xyXG4gICAgICAgICAgICBkYXRlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VVaW50ID0gbmV3IFVpbnQ4QXJyYXkoY29udGVudHMpO1xyXG5cclxuICAgIGNvbnN0IHppcFVpbnQgPSBhd2FpdCB6aXAuZ2VuZXJhdGVBc3luYyhcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidWludDhhcnJheVwiLFxyXG4gICAgICAgICAgICBjb21wcmVzc2lvbjogY29tcHJlc3Npb24gPT09IDAgPyBcIlNUT1JFXCIgOiBcIkRFRkxBVEVcIixcclxuICAgICAgICAgICAgY29tcHJlc3Npb25PcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBsZXZlbDogY29tcHJlc3Npb24sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICAoeyBwZXJjZW50IH0pID0+IHtcclxuICAgICAgICAgICAgcG9zdE1lc3NhZ2UoeyBwcm9ncmVzczogcGVyY2VudCB9KTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHppcEVuY3J5cHRlZFVpbnQgPSBhd2FpdCBlbmNyeXB0WmlwKHppcFVpbnQsIGltYWdlVWludCwgcGFzc3dvcmQpO1xyXG4gICAgY29uc3QgcmVzdWx0VWludCA9IG5ldyBVaW50OEFycmF5KFsuLi5pbWFnZVVpbnQsIC4uLnppcEVuY3J5cHRlZFVpbnRdKTtcclxuXHJcbiAgICBwb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgcmVzdWx0OiBuZXcgQmxvYihbcmVzdWx0VWludF0sIHsgdHlwZSB9KSxcclxuICAgIH0pO1xyXG4gICAgY2xvc2UoKTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianN6aXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==