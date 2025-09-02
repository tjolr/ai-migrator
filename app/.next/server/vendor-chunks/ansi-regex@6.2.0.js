"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ansi-regex@6.2.0";
exports.ids = ["vendor-chunks/ansi-regex@6.2.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/ansi-regex@6.2.0/node_modules/ansi-regex/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/ansi-regex@6.2.0/node_modules/ansi-regex/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ansiRegex)\n/* harmony export */ });\nfunction ansiRegex({ onlyFirst = false } = {}) {\n    // Valid string terminator sequences are BEL, ESC\\, and 0x9c\n    const ST = \"(?:\\\\u0007|\\\\u001B\\\\u005C|\\\\u009C)\";\n    // OSC sequences only: ESC ] ... ST (non-greedy until the first ST)\n    const osc = `(?:\\\\u001B\\\\][\\\\s\\\\S]*?${ST})`;\n    // CSI and related: ESC/C1, optional intermediates, optional params (supports ; and :) then final byte\n    const csi = \"[\\\\u001B\\\\u009B][[\\\\]()#;?]*(?:\\\\d{1,4}(?:[;:]\\\\d{0,4})*)?[\\\\dA-PR-TZcf-nq-uy=><~]\";\n    const pattern = `${osc}|${csi}`;\n    return new RegExp(pattern, onlyFirst ? undefined : \"g\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vYW5zaS1yZWdleEA2LjIuMC9ub2RlX21vZHVsZXMvYW5zaS1yZWdleC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsVUFBVSxFQUFDQyxZQUFZLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQztJQUN6RCw0REFBNEQ7SUFDNUQsTUFBTUMsS0FBSztJQUVYLG1FQUFtRTtJQUNuRSxNQUFNQyxNQUFNLENBQUMsdUJBQXVCLEVBQUVELEdBQUcsQ0FBQyxDQUFDO0lBRTNDLHNHQUFzRztJQUN0RyxNQUFNRSxNQUFNO0lBRVosTUFBTUMsVUFBVSxDQUFDLEVBQUVGLElBQUksQ0FBQyxFQUFFQyxJQUFJLENBQUM7SUFFL0IsT0FBTyxJQUFJRSxPQUFPRCxTQUFTSixZQUFZTSxZQUFZO0FBQ3BEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktbWlncmF0b3ItYXBwLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2Fuc2ktcmVnZXhANi4yLjAvbm9kZV9tb2R1bGVzL2Fuc2ktcmVnZXgvaW5kZXguanM/MGQwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbnNpUmVnZXgoe29ubHlGaXJzdCA9IGZhbHNlfSA9IHt9KSB7XG5cdC8vIFZhbGlkIHN0cmluZyB0ZXJtaW5hdG9yIHNlcXVlbmNlcyBhcmUgQkVMLCBFU0NcXCwgYW5kIDB4OWNcblx0Y29uc3QgU1QgPSAnKD86XFxcXHUwMDA3fFxcXFx1MDAxQlxcXFx1MDA1Q3xcXFxcdTAwOUMpJztcblxuXHQvLyBPU0Mgc2VxdWVuY2VzIG9ubHk6IEVTQyBdIC4uLiBTVCAobm9uLWdyZWVkeSB1bnRpbCB0aGUgZmlyc3QgU1QpXG5cdGNvbnN0IG9zYyA9IGAoPzpcXFxcdTAwMUJcXFxcXVtcXFxcc1xcXFxTXSo/JHtTVH0pYDtcblxuXHQvLyBDU0kgYW5kIHJlbGF0ZWQ6IEVTQy9DMSwgb3B0aW9uYWwgaW50ZXJtZWRpYXRlcywgb3B0aW9uYWwgcGFyYW1zIChzdXBwb3J0cyA7IGFuZCA6KSB0aGVuIGZpbmFsIGJ5dGVcblx0Y29uc3QgY3NpID0gJ1tcXFxcdTAwMUJcXFxcdTAwOUJdW1tcXFxcXSgpIzs/XSooPzpcXFxcZHsxLDR9KD86Wzs6XVxcXFxkezAsNH0pKik/W1xcXFxkQS1QUi1UWmNmLW5xLXV5PT48fl0nO1xuXG5cdGNvbnN0IHBhdHRlcm4gPSBgJHtvc2N9fCR7Y3NpfWA7XG5cblx0cmV0dXJuIG5ldyBSZWdFeHAocGF0dGVybiwgb25seUZpcnN0ID8gdW5kZWZpbmVkIDogJ2cnKTtcbn1cbiJdLCJuYW1lcyI6WyJhbnNpUmVnZXgiLCJvbmx5Rmlyc3QiLCJTVCIsIm9zYyIsImNzaSIsInBhdHRlcm4iLCJSZWdFeHAiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/ansi-regex@6.2.0/node_modules/ansi-regex/index.js\n");

/***/ })

};
;