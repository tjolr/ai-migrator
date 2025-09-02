"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/restore-cursor@5.1.0";
exports.ids = ["vendor-chunks/restore-cursor@5.1.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/restore-cursor@5.1.0/node_modules/restore-cursor/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/restore-cursor@5.1.0/node_modules/restore-cursor/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var node_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:process */ \"node:process\");\n/* harmony import */ var onetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! onetime */ \"(rsc)/./node_modules/.pnpm/onetime@7.0.0/node_modules/onetime/index.js\");\n/* harmony import */ var signal_exit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! signal-exit */ \"(rsc)/./node_modules/.pnpm/signal-exit@4.1.0/node_modules/signal-exit/dist/mjs/index.js\");\n\n\n\n\nconst terminal = node_process__WEBPACK_IMPORTED_MODULE_0__.stderr.isTTY\n\t? node_process__WEBPACK_IMPORTED_MODULE_0__.stderr\n\t: (node_process__WEBPACK_IMPORTED_MODULE_0__.stdout.isTTY ? node_process__WEBPACK_IMPORTED_MODULE_0__.stdout : undefined);\n\nconst restoreCursor = terminal ? (0,onetime__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(() => {\n\t(0,signal_exit__WEBPACK_IMPORTED_MODULE_1__.onExit)(() => {\n\t\tterminal.write('\\u001B[?25h');\n\t}, {alwaysLast: true});\n}) : () => {};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (restoreCursor);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVzdG9yZS1jdXJzb3JANS4xLjAvbm9kZV9tb2R1bGVzL3Jlc3RvcmUtY3Vyc29yL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUM7QUFDTDtBQUNLOztBQUVuQyxpQkFBaUIsZ0RBQWM7QUFDL0IsR0FBRyxnREFBYztBQUNqQixJQUFJLGdEQUFjLFNBQVMsZ0RBQWM7O0FBRXpDLGlDQUFpQyxtREFBTztBQUN4QyxDQUFDLG1EQUFNO0FBQ1A7QUFDQSxFQUFFLEdBQUcsaUJBQWlCO0FBQ3RCLENBQUM7O0FBRUQsaUVBQWUsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktbWlncmF0b3ItYXBwLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3Jlc3RvcmUtY3Vyc29yQDUuMS4wL25vZGVfbW9kdWxlcy9yZXN0b3JlLWN1cnNvci9pbmRleC5qcz9lYmEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2Vzcyc7XG5pbXBvcnQgb25ldGltZSBmcm9tICdvbmV0aW1lJztcbmltcG9ydCB7b25FeGl0fSBmcm9tICdzaWduYWwtZXhpdCc7XG5cbmNvbnN0IHRlcm1pbmFsID0gcHJvY2Vzcy5zdGRlcnIuaXNUVFlcblx0PyBwcm9jZXNzLnN0ZGVyclxuXHQ6IChwcm9jZXNzLnN0ZG91dC5pc1RUWSA/IHByb2Nlc3Muc3Rkb3V0IDogdW5kZWZpbmVkKTtcblxuY29uc3QgcmVzdG9yZUN1cnNvciA9IHRlcm1pbmFsID8gb25ldGltZSgoKSA9PiB7XG5cdG9uRXhpdCgoKSA9PiB7XG5cdFx0dGVybWluYWwud3JpdGUoJ1xcdTAwMUJbPzI1aCcpO1xuXHR9LCB7YWx3YXlzTGFzdDogdHJ1ZX0pO1xufSkgOiAoKSA9PiB7fTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzdG9yZUN1cnNvcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/restore-cursor@5.1.0/node_modules/restore-cursor/index.js\n");

/***/ })

};
;