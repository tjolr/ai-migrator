"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-unicode-supported@1.3.0";
exports.ids = ["vendor-chunks/is-unicode-supported@1.3.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/is-unicode-supported@1.3.0/node_modules/is-unicode-supported/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/is-unicode-supported@1.3.0/node_modules/is-unicode-supported/index.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isUnicodeSupported)\n/* harmony export */ });\n/* harmony import */ var node_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:process */ \"node:process\");\n\n\nfunction isUnicodeSupported() {\n\tif (node_process__WEBPACK_IMPORTED_MODULE_0__.platform !== 'win32') {\n\t\treturn node_process__WEBPACK_IMPORTED_MODULE_0__.env.TERM !== 'linux'; // Linux console (kernel)\n\t}\n\n\treturn Boolean(node_process__WEBPACK_IMPORTED_MODULE_0__.env.CI)\n\t\t|| Boolean(node_process__WEBPACK_IMPORTED_MODULE_0__.env.WT_SESSION) // Windows Terminal\n\t\t|| Boolean(node_process__WEBPACK_IMPORTED_MODULE_0__.env.TERMINUS_SUBLIME) // Terminus (<0.2.27)\n\t\t|| node_process__WEBPACK_IMPORTED_MODULE_0__.env.ConEmuTask === '{cmd::Cmder}' // ConEmu and cmder\n\t\t|| node_process__WEBPACK_IMPORTED_MODULE_0__.env.TERM_PROGRAM === 'Terminus-Sublime'\n\t\t|| node_process__WEBPACK_IMPORTED_MODULE_0__.env.TERM_PROGRAM === 'vscode'\n\t\t|| node_process__WEBPACK_IMPORTED_MODULE_0__.env.TERM === 'xterm-256color'\n\t\t|| node_process__WEBPACK_IMPORTED_MODULE_0__.env.TERM === 'alacritty'\n\t\t|| node_process__WEBPACK_IMPORTED_MODULE_0__.env.TERMINAL_EMULATOR === 'JetBrains-JediTerm';\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vaXMtdW5pY29kZS1zdXBwb3J0ZWRAMS4zLjAvbm9kZV9tb2R1bGVzL2lzLXVuaWNvZGUtc3VwcG9ydGVkL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1DOztBQUVwQjtBQUNmLEtBQUssa0RBQWdCO0FBQ3JCLFNBQVMsNkNBQVcsbUJBQW1CO0FBQ3ZDOztBQUVBLGdCQUFnQiw2Q0FBVztBQUMzQixhQUFhLDZDQUFXO0FBQ3hCLGFBQWEsNkNBQVc7QUFDeEIsS0FBSyw2Q0FBVyxrQkFBa0IsV0FBVztBQUM3QyxLQUFLLDZDQUFXO0FBQ2hCLEtBQUssNkNBQVc7QUFDaEIsS0FBSyw2Q0FBVztBQUNoQixLQUFLLDZDQUFXO0FBQ2hCLEtBQUssNkNBQVc7QUFDaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1taWdyYXRvci1hcHAvLi9ub2RlX21vZHVsZXMvLnBucG0vaXMtdW5pY29kZS1zdXBwb3J0ZWRAMS4zLjAvbm9kZV9tb2R1bGVzL2lzLXVuaWNvZGUtc3VwcG9ydGVkL2luZGV4LmpzPzgzZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNVbmljb2RlU3VwcG9ydGVkKCkge1xuXHRpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ3dpbjMyJykge1xuXHRcdHJldHVybiBwcm9jZXNzLmVudi5URVJNICE9PSAnbGludXgnOyAvLyBMaW51eCBjb25zb2xlIChrZXJuZWwpXG5cdH1cblxuXHRyZXR1cm4gQm9vbGVhbihwcm9jZXNzLmVudi5DSSlcblx0XHR8fCBCb29sZWFuKHByb2Nlc3MuZW52LldUX1NFU1NJT04pIC8vIFdpbmRvd3MgVGVybWluYWxcblx0XHR8fCBCb29sZWFuKHByb2Nlc3MuZW52LlRFUk1JTlVTX1NVQkxJTUUpIC8vIFRlcm1pbnVzICg8MC4yLjI3KVxuXHRcdHx8IHByb2Nlc3MuZW52LkNvbkVtdVRhc2sgPT09ICd7Y21kOjpDbWRlcn0nIC8vIENvbkVtdSBhbmQgY21kZXJcblx0XHR8fCBwcm9jZXNzLmVudi5URVJNX1BST0dSQU0gPT09ICdUZXJtaW51cy1TdWJsaW1lJ1xuXHRcdHx8IHByb2Nlc3MuZW52LlRFUk1fUFJPR1JBTSA9PT0gJ3ZzY29kZSdcblx0XHR8fCBwcm9jZXNzLmVudi5URVJNID09PSAneHRlcm0tMjU2Y29sb3InXG5cdFx0fHwgcHJvY2Vzcy5lbnYuVEVSTSA9PT0gJ2FsYWNyaXR0eSdcblx0XHR8fCBwcm9jZXNzLmVudi5URVJNSU5BTF9FTVVMQVRPUiA9PT0gJ0pldEJyYWlucy1KZWRpVGVybSc7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/is-unicode-supported@1.3.0/node_modules/is-unicode-supported/index.js\n");

/***/ })

};
;