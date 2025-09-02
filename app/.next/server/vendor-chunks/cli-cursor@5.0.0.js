"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/cli-cursor@5.0.0";
exports.ids = ["vendor-chunks/cli-cursor@5.0.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/cli-cursor@5.0.0/node_modules/cli-cursor/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/cli-cursor@5.0.0/node_modules/cli-cursor/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var node_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:process */ \"node:process\");\n/* harmony import */ var restore_cursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! restore-cursor */ \"(rsc)/./node_modules/.pnpm/restore-cursor@5.1.0/node_modules/restore-cursor/index.js\");\n\n\n\nlet isHidden = false;\n\nconst cliCursor = {};\n\ncliCursor.show = (writableStream = node_process__WEBPACK_IMPORTED_MODULE_0__.stderr) => {\n\tif (!writableStream.isTTY) {\n\t\treturn;\n\t}\n\n\tisHidden = false;\n\twritableStream.write('\\u001B[?25h');\n};\n\ncliCursor.hide = (writableStream = node_process__WEBPACK_IMPORTED_MODULE_0__.stderr) => {\n\tif (!writableStream.isTTY) {\n\t\treturn;\n\t}\n\n\t(0,restore_cursor__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\tisHidden = true;\n\twritableStream.write('\\u001B[?25l');\n};\n\ncliCursor.toggle = (force, writableStream) => {\n\tif (force !== undefined) {\n\t\tisHidden = force;\n\t}\n\n\tif (isHidden) {\n\t\tcliCursor.show(writableStream);\n\t} else {\n\t\tcliCursor.hide(writableStream);\n\t}\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cliCursor);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vY2xpLWN1cnNvckA1LjAuMC9ub2RlX21vZHVsZXMvY2xpLWN1cnNvci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUM7QUFDUTs7QUFFM0M7O0FBRUE7O0FBRUEsbUNBQW1DLGdEQUFjO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLGdEQUFjO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLDBEQUFhO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLW1pZ3JhdG9yLWFwcC8uL25vZGVfbW9kdWxlcy8ucG5wbS9jbGktY3Vyc29yQDUuMC4wL25vZGVfbW9kdWxlcy9jbGktY3Vyc29yL2luZGV4LmpzPzcwYzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJztcbmltcG9ydCByZXN0b3JlQ3Vyc29yIGZyb20gJ3Jlc3RvcmUtY3Vyc29yJztcblxubGV0IGlzSGlkZGVuID0gZmFsc2U7XG5cbmNvbnN0IGNsaUN1cnNvciA9IHt9O1xuXG5jbGlDdXJzb3Iuc2hvdyA9ICh3cml0YWJsZVN0cmVhbSA9IHByb2Nlc3Muc3RkZXJyKSA9PiB7XG5cdGlmICghd3JpdGFibGVTdHJlYW0uaXNUVFkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpc0hpZGRlbiA9IGZhbHNlO1xuXHR3cml0YWJsZVN0cmVhbS53cml0ZSgnXFx1MDAxQls/MjVoJyk7XG59O1xuXG5jbGlDdXJzb3IuaGlkZSA9ICh3cml0YWJsZVN0cmVhbSA9IHByb2Nlc3Muc3RkZXJyKSA9PiB7XG5cdGlmICghd3JpdGFibGVTdHJlYW0uaXNUVFkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRyZXN0b3JlQ3Vyc29yKCk7XG5cdGlzSGlkZGVuID0gdHJ1ZTtcblx0d3JpdGFibGVTdHJlYW0ud3JpdGUoJ1xcdTAwMUJbPzI1bCcpO1xufTtcblxuY2xpQ3Vyc29yLnRvZ2dsZSA9IChmb3JjZSwgd3JpdGFibGVTdHJlYW0pID0+IHtcblx0aWYgKGZvcmNlICE9PSB1bmRlZmluZWQpIHtcblx0XHRpc0hpZGRlbiA9IGZvcmNlO1xuXHR9XG5cblx0aWYgKGlzSGlkZGVuKSB7XG5cdFx0Y2xpQ3Vyc29yLnNob3cod3JpdGFibGVTdHJlYW0pO1xuXHR9IGVsc2Uge1xuXHRcdGNsaUN1cnNvci5oaWRlKHdyaXRhYmxlU3RyZWFtKTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpQ3Vyc29yO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/cli-cursor@5.0.0/node_modules/cli-cursor/index.js\n");

/***/ })

};
;