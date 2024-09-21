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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js?!./workers/Find.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js?!./workers/Find.worker.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js??ref--6-1!./workers/Find.worker.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const decryptZip = async (zipUint, imageUint, password) => {
  const passwordUint = new TextEncoder().encode(password);
  const baseKey = await crypto.subtle.importKey("raw", passwordUint, {
    name: "PBKDF2"
  }, false, ["deriveKey"]);
  const cryptoKey = await crypto.subtle.deriveKey({
    name: "PBKDF2",
    salt: imageUint.slice(0, 16),
    iterations: 10000,
    hash: "SHA-256"
  }, baseKey, {
    name: "AES-CTR",
    length: 128
  }, false, ["decrypt"]);
  const zipDecrypted = await crypto.subtle.decrypt({
    name: "AES-CTR",
    counter: new Uint8Array(16),
    length: 128
  }, cryptoKey, zipUint.buffer);
  return new Uint8Array(zipDecrypted);
};

onmessage = async ({
  data: {
    image: [{
      contents,
      type
    }],
    password
  }
}) => {
  const imageUint = new Uint8Array(contents);
  const marker = {
    "image/png": [174, 66, 96, 130],
    "image/jpeg": [255, 217],
    "image/gif": [59]
  }[type];
  const indexOfZip = imageUint.findIndex((_, index) => imageUint.slice(index, index + marker.length).toString() === marker.toString()) + marker.length;
  const zipEncryptedUint = imageUint.slice(indexOfZip);
  const zipUint = await decryptZip(zipEncryptedUint, imageUint, password);
  postMessage({
    result: new Blob([zipUint], {
      type: "application/zip"
    })
  });
  close();
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd29ya2Vycy9GaW5kLndvcmtlci5qcyJdLCJuYW1lcyI6WyJkZWNyeXB0WmlwIiwiemlwVWludCIsImltYWdlVWludCIsInBhc3N3b3JkIiwicGFzc3dvcmRVaW50IiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJiYXNlS2V5IiwiY3J5cHRvIiwic3VidGxlIiwiaW1wb3J0S2V5IiwibmFtZSIsImNyeXB0b0tleSIsImRlcml2ZUtleSIsInNhbHQiLCJzbGljZSIsIml0ZXJhdGlvbnMiLCJoYXNoIiwibGVuZ3RoIiwiemlwRGVjcnlwdGVkIiwiZGVjcnlwdCIsImNvdW50ZXIiLCJVaW50OEFycmF5IiwiYnVmZmVyIiwib25tZXNzYWdlIiwiZGF0YSIsImltYWdlIiwiY29udGVudHMiLCJ0eXBlIiwibWFya2VyIiwiaW5kZXhPZlppcCIsImZpbmRJbmRleCIsIl8iLCJpbmRleCIsInRvU3RyaW5nIiwiemlwRW5jcnlwdGVkVWludCIsInBvc3RNZXNzYWdlIiwicmVzdWx0IiwiQmxvYiIsImNsb3NlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1C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ZXIud29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtYmFiZWwtbG9hZGVyLmpzPyEuL3dvcmtlcnMvRmluZC53b3JrZXIuanNcIik7XG4iLCJjb25zdCBkZWNyeXB0WmlwID0gYXN5bmMgKHppcFVpbnQsIGltYWdlVWludCwgcGFzc3dvcmQpID0+IHtcclxuICAgIGNvbnN0IHBhc3N3b3JkVWludCA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShwYXNzd29yZCk7XHJcbiAgICBjb25zdCBiYXNlS2V5ID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5pbXBvcnRLZXkoXHJcbiAgICAgICAgXCJyYXdcIixcclxuICAgICAgICBwYXNzd29yZFVpbnQsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlBCS0RGMlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgW1wiZGVyaXZlS2V5XCJdXHJcbiAgICApO1xyXG4gICAgY29uc3QgY3J5cHRvS2V5ID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kZXJpdmVLZXkoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlBCS0RGMlwiLFxyXG4gICAgICAgICAgICBzYWx0OiBpbWFnZVVpbnQuc2xpY2UoMCwgMTYpLFxyXG4gICAgICAgICAgICBpdGVyYXRpb25zOiAxMDAwMCxcclxuICAgICAgICAgICAgaGFzaDogXCJTSEEtMjU2XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYXNlS2V5LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJBRVMtQ1RSXCIsXHJcbiAgICAgICAgICAgIGxlbmd0aDogMTI4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgW1wiZGVjcnlwdFwiXVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHppcERlY3J5cHRlZCA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGVjcnlwdChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQUVTLUNUUlwiLFxyXG4gICAgICAgICAgICBjb3VudGVyOiBuZXcgVWludDhBcnJheSgxNiksXHJcbiAgICAgICAgICAgIGxlbmd0aDogMTI4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3J5cHRvS2V5LFxyXG4gICAgICAgIHppcFVpbnQuYnVmZmVyXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHppcERlY3J5cHRlZCk7XHJcbn07XHJcblxyXG5vbm1lc3NhZ2UgPSBhc3luYyAoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGltYWdlOiBbeyBjb250ZW50cywgdHlwZSB9XSxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgIH0sXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGltYWdlVWludCA9IG5ldyBVaW50OEFycmF5KGNvbnRlbnRzKTtcclxuXHJcbiAgICBjb25zdCBtYXJrZXIgPSB7XHJcbiAgICAgICAgXCJpbWFnZS9wbmdcIjogWzE3NCwgNjYsIDk2LCAxMzBdLFxyXG4gICAgICAgIFwiaW1hZ2UvanBlZ1wiOiBbMjU1LCAyMTddLFxyXG4gICAgICAgIFwiaW1hZ2UvZ2lmXCI6IFs1OV0sXHJcbiAgICB9W3R5cGVdO1xyXG5cclxuICAgIGNvbnN0IGluZGV4T2ZaaXAgPVxyXG4gICAgICAgIGltYWdlVWludC5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgIChfLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgIGltYWdlVWludC5zbGljZShpbmRleCwgaW5kZXggKyBtYXJrZXIubGVuZ3RoKS50b1N0cmluZygpID09PVxyXG4gICAgICAgICAgICAgICAgbWFya2VyLnRvU3RyaW5nKClcclxuICAgICAgICApICsgbWFya2VyLmxlbmd0aDtcclxuXHJcbiAgICBjb25zdCB6aXBFbmNyeXB0ZWRVaW50ID0gaW1hZ2VVaW50LnNsaWNlKGluZGV4T2ZaaXApO1xyXG4gICAgY29uc3QgemlwVWludCA9IGF3YWl0IGRlY3J5cHRaaXAoemlwRW5jcnlwdGVkVWludCwgaW1hZ2VVaW50LCBwYXNzd29yZCk7XHJcblxyXG4gICAgcG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgIHJlc3VsdDogbmV3IEJsb2IoW3ppcFVpbnRdLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vemlwXCIgfSksXHJcbiAgICB9KTtcclxuICAgIGNsb3NlKCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=