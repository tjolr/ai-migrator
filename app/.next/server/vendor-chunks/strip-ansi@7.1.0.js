"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/strip-ansi@7.1.0";
exports.ids = ["vendor-chunks/strip-ansi@7.1.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/strip-ansi@7.1.0/node_modules/strip-ansi/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/strip-ansi@7.1.0/node_modules/strip-ansi/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ stripAnsi)\n/* harmony export */ });\n/* harmony import */ var ansi_regex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-regex */ \"(rsc)/./node_modules/.pnpm/ansi-regex@6.2.0/node_modules/ansi-regex/index.js\");\n\nconst regex = (0,ansi_regex__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nfunction stripAnsi(string) {\n    if (typeof string !== \"string\") {\n        throw new TypeError(`Expected a \\`string\\`, got \\`${typeof string}\\``);\n    }\n    // Even though the regex is global, we don't need to reset the `.lastIndex`\n    // because unlike `.exec()` and `.test()`, `.replace()` does it automatically\n    // and doing it manually has a performance penalty.\n    return string.replace(regex, \"\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vc3RyaXAtYW5zaUA3LjEuMC9ub2RlX21vZHVsZXMvc3RyaXAtYW5zaS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtQztBQUVuQyxNQUFNQyxRQUFRRCxzREFBU0E7QUFFUixTQUFTRSxVQUFVQyxNQUFNO0lBQ3ZDLElBQUksT0FBT0EsV0FBVyxVQUFVO1FBQy9CLE1BQU0sSUFBSUMsVUFBVSxDQUFDLDZCQUE2QixFQUFFLE9BQU9ELE9BQU8sRUFBRSxDQUFDO0lBQ3RFO0lBRUEsMkVBQTJFO0lBQzNFLDZFQUE2RTtJQUM3RSxtREFBbUQ7SUFDbkQsT0FBT0EsT0FBT0UsT0FBTyxDQUFDSixPQUFPO0FBQzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktbWlncmF0b3ItYXBwLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0cmlwLWFuc2lANy4xLjAvbm9kZV9tb2R1bGVzL3N0cmlwLWFuc2kvaW5kZXguanM/YTAxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYW5zaVJlZ2V4IGZyb20gJ2Fuc2ktcmVnZXgnO1xuXG5jb25zdCByZWdleCA9IGFuc2lSZWdleCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHJpcEFuc2koc3RyaW5nKSB7XG5cdGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIGEgXFxgc3RyaW5nXFxgLCBnb3QgXFxgJHt0eXBlb2Ygc3RyaW5nfVxcYGApO1xuXHR9XG5cblx0Ly8gRXZlbiB0aG91Z2ggdGhlIHJlZ2V4IGlzIGdsb2JhbCwgd2UgZG9uJ3QgbmVlZCB0byByZXNldCB0aGUgYC5sYXN0SW5kZXhgXG5cdC8vIGJlY2F1c2UgdW5saWtlIGAuZXhlYygpYCBhbmQgYC50ZXN0KClgLCBgLnJlcGxhY2UoKWAgZG9lcyBpdCBhdXRvbWF0aWNhbGx5XG5cdC8vIGFuZCBkb2luZyBpdCBtYW51YWxseSBoYXMgYSBwZXJmb3JtYW5jZSBwZW5hbHR5LlxuXHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UocmVnZXgsICcnKTtcbn1cbiJdLCJuYW1lcyI6WyJhbnNpUmVnZXgiLCJyZWdleCIsInN0cmlwQW5zaSIsInN0cmluZyIsIlR5cGVFcnJvciIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/strip-ansi@7.1.0/node_modules/strip-ansi/index.js\n");

/***/ })

};
;