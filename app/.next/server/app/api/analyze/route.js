"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/analyze/route";
exports.ids = ["app/api/analyze/route"];
exports.modules = {

/***/ "@ai-sdk/openai":
/*!*********************************!*\
  !*** external "@ai-sdk/openai" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@ai-sdk/openai");

/***/ }),

/***/ "ai":
/*!*********************!*\
  !*** external "ai" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("ai");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ "node:net":
/*!***************************!*\
  !*** external "node:net" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:net");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ "node:process":
/*!*******************************!*\
  !*** external "node:process" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ "node:url":
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:url");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "node:zlib":
/*!****************************!*\
  !*** external "node:zlib" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:zlib");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@14.2.5_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fanalyze%2Froute&page=%2Fapi%2Fanalyze%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fanalyze%2Froute.ts&appDir=%2FUsers%2Ftjol%2Fdev%2Fsandbox%2Fai-migrator%2Fapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ftjol%2Fdev%2Fsandbox%2Fai-migrator%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@14.2.5_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fanalyze%2Froute&page=%2Fapi%2Fanalyze%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fanalyze%2Froute.ts&appDir=%2FUsers%2Ftjol%2Fdev%2Fsandbox%2Fai-migrator%2Fapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ftjol%2Fdev%2Fsandbox%2Fai-migrator%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@14.2.5_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/.pnpm/next@14.2.5_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@14.2.5_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_tjol_dev_sandbox_ai_migrator_app_src_app_api_analyze_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/analyze/route.ts */ \"(rsc)/./src/app/api/analyze/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/analyze/route\",\n        pathname: \"/api/analyze\",\n        filename: \"route\",\n        bundlePath: \"app/api/analyze/route\"\n    },\n    resolvedPagePath: \"/Users/tjol/dev/sandbox/ai-migrator/app/src/app/api/analyze/route.ts\",\n    nextConfigOutput,\n    userland: _Users_tjol_dev_sandbox_ai_migrator_app_src_app_api_analyze_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/analyze/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNC4yLjVfQG9wZW50ZWxlbWV0cnkrYXBpQDEuOS4wX3JlYWN0LWRvbUAxOC4zLjFfcmVhY3RAMTguMy4xX19yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGYXBpJTJGYW5hbHl6ZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYW5hbHl6ZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmFuYWx5emUlMkZyb3V0ZS50cyZhcHBEaXI9JTJGVXNlcnMlMkZ0am9sJTJGZGV2JTJGc2FuZGJveCUyRmFpLW1pZ3JhdG9yJTJGYXBwJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnRqb2wlMkZkZXYlMkZzYW5kYm94JTJGYWktbWlncmF0b3IlMkZhcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ29CO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktbWlncmF0b3ItYXBwLz9mNTc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy90am9sL2Rldi9zYW5kYm94L2FpLW1pZ3JhdG9yL2FwcC9zcmMvYXBwL2FwaS9hbmFseXplL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hbmFseXplL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYW5hbHl6ZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYW5hbHl6ZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy90am9sL2Rldi9zYW5kYm94L2FpLW1pZ3JhdG9yL2FwcC9zcmMvYXBwL2FwaS9hbmFseXplL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hbmFseXplL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@14.2.5_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fanalyze%2Froute&page=%2Fapi%2Fanalyze%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fanalyze%2Froute.ts&appDir=%2FUsers%2Ftjol%2Fdev%2Fsandbox%2Fai-migrator%2Fapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ftjol%2Fdev%2Fsandbox%2Fai-migrator%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/analyze/route.ts":
/*!**************************************!*\
  !*** ./src/app/api/analyze/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@14.2.5_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_ai_analyzer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/ai-analyzer */ \"(rsc)/./src/lib/ai-analyzer.ts\");\n\n\nasync function POST(request) {\n    try {\n        const { packageUpdate, apiKey } = await request.json();\n        if (!packageUpdate) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Package update data required\"\n            }, {\n                status: 400\n            });\n        }\n        if (!apiKey) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"OpenAI API key required\"\n            }, {\n                status: 400\n            });\n        }\n        process.env.OPENAI_API_KEY = apiKey;\n        const aiAnalyzer = new _lib_ai_analyzer__WEBPACK_IMPORTED_MODULE_1__.AIAnalyzer();\n        const migrationAnalysis = await aiAnalyzer.analyzePackageUpgrade(packageUpdate);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            migrationAnalysis\n        });\n    } catch (error) {\n        console.error(\"Analysis error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to analyze package\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hbmFseXplL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1RDtBQUNUO0FBR3ZDLGVBQWVFLEtBQUtDLE9BQW9CO0lBQzdDLElBQUk7UUFDRixNQUFNLEVBQUVDLGFBQWEsRUFBRUMsTUFBTSxFQUFFLEdBQUcsTUFBTUYsUUFBUUcsSUFBSTtRQUVwRCxJQUFJLENBQUNGLGVBQWU7WUFDbEIsT0FBT0oscURBQVlBLENBQUNNLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUErQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDcEY7UUFFQSxJQUFJLENBQUNILFFBQVE7WUFDWCxPQUFPTCxxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQTBCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUMvRTtRQUVBQyxRQUFRQyxHQUFHLENBQUNDLGNBQWMsR0FBR047UUFDN0IsTUFBTU8sYUFBYSxJQUFJWCx3REFBVUE7UUFDakMsTUFBTVksb0JBQW9CLE1BQU1ELFdBQVdFLHFCQUFxQixDQUFDVjtRQUVqRSxPQUFPSixxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO1lBQ3ZCUyxTQUFTO1lBQ1RGO1FBQ0Y7SUFDRixFQUFFLE9BQU9OLE9BQU87UUFDZFMsUUFBUVQsS0FBSyxDQUFDLG1CQUFtQkE7UUFDakMsT0FBT1AscURBQVlBLENBQUNNLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQTRCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ2pGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1taWdyYXRvci1hcHAvLi9zcmMvYXBwL2FwaS9hbmFseXplL3JvdXRlLnRzPzA3ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuaW1wb3J0IHsgQUlBbmFseXplciB9IGZyb20gJ0AvbGliL2FpLWFuYWx5emVyJ1xuaW1wb3J0IHR5cGUgeyBQYWNrYWdlVXBkYXRlIH0gZnJvbSAnQC9saWIvYW5hbHl6ZXInXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBwYWNrYWdlVXBkYXRlLCBhcGlLZXkgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpXG4gICAgXG4gICAgaWYgKCFwYWNrYWdlVXBkYXRlKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1BhY2thZ2UgdXBkYXRlIGRhdGEgcmVxdWlyZWQnIH0sIHsgc3RhdHVzOiA0MDAgfSlcbiAgICB9XG5cbiAgICBpZiAoIWFwaUtleSkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdPcGVuQUkgQVBJIGtleSByZXF1aXJlZCcgfSwgeyBzdGF0dXM6IDQwMCB9KVxuICAgIH1cblxuICAgIHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZID0gYXBpS2V5XG4gICAgY29uc3QgYWlBbmFseXplciA9IG5ldyBBSUFuYWx5emVyKClcbiAgICBjb25zdCBtaWdyYXRpb25BbmFseXNpcyA9IGF3YWl0IGFpQW5hbHl6ZXIuYW5hbHl6ZVBhY2thZ2VVcGdyYWRlKHBhY2thZ2VVcGRhdGUgYXMgUGFja2FnZVVwZGF0ZSlcbiAgICBcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1pZ3JhdGlvbkFuYWx5c2lzXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBbmFseXNpcyBlcnJvcjonLCBlcnJvcilcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBhbmFseXplIHBhY2thZ2UnIH0sIHsgc3RhdHVzOiA1MDAgfSlcbiAgfVxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJBSUFuYWx5emVyIiwiUE9TVCIsInJlcXVlc3QiLCJwYWNrYWdlVXBkYXRlIiwiYXBpS2V5IiwianNvbiIsImVycm9yIiwic3RhdHVzIiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwiYWlBbmFseXplciIsIm1pZ3JhdGlvbkFuYWx5c2lzIiwiYW5hbHl6ZVBhY2thZ2VVcGdyYWRlIiwic3VjY2VzcyIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/analyze/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/ai-analyzer.ts":
/*!********************************!*\
  !*** ./src/lib/ai-analyzer.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AIAnalyzer: () => (/* binding */ AIAnalyzer)\n/* harmony export */ });\n/* harmony import */ var _ai_sdk_openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ai-sdk/openai */ \"@ai-sdk/openai\");\n/* harmony import */ var _ai_sdk_openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ai_sdk_openai__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ai */ \"ai\");\n/* harmony import */ var ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ai__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-fetch */ \"(rsc)/./node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/index.js\");\n\n\n\nclass AIAnalyzer {\n    async fetchChangelogInfo(packageName, fromVersion, toVersion) {\n        try {\n            const response = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`https://registry.npmjs.org/${packageName}`);\n            if (!response.ok) return \"\";\n            const data = await response.json();\n            const repository = data.repository?.url || \"\";\n            const homepage = data.homepage || \"\";\n            const changelogSources = [\n                `${repository}/releases`,\n                `${repository}/blob/main/CHANGELOG.md`,\n                `${repository}/blob/master/CHANGELOG.md`,\n                `${homepage}/releases`,\n                `${homepage}/changelog`\n            ].filter(Boolean);\n            return `Repository: ${repository}\\nHomepage: ${homepage}\\nChangelog sources: ${changelogSources.join(\", \")}`;\n        } catch (error) {\n            return `Failed to fetch package info for ${packageName}`;\n        }\n    }\n    async analyzePackageUpgrade(update) {\n        const changelogInfo = await this.fetchChangelogInfo(update.name, update.currentVersion, update.latestVersion);\n        const prompt = `Analyze the upgrade of npm package \"${update.name}\" from version ${update.currentVersion} to ${update.latestVersion}.\n\nPackage info:\n${changelogInfo}\n\nPlease provide:\n1. A concise summary of the key changes\n2. List of breaking changes (if any)\n3. Step-by-step migration instructions\n4. Risk assessment (low/medium/high)\n\nFocus on practical migration steps developers need to take. If this is a major version bump, pay special attention to breaking changes.`;\n        try {\n            const { text } = await (0,ai__WEBPACK_IMPORTED_MODULE_1__.generateText)({\n                model: (0,_ai_sdk_openai__WEBPACK_IMPORTED_MODULE_0__.openai)(\"gpt-4o-mini\"),\n                prompt\n            });\n            return this.parseAnalysisResponse(update.name, text);\n        } catch (error) {\n            console.warn(`AI analysis failed for ${update.name}:`, error);\n            return {\n                packageName: update.name,\n                summary: `Failed to analyze upgrade from ${update.currentVersion} to ${update.latestVersion}`,\n                breakingChanges: [],\n                migrationSteps: [\n                    `Update ${update.name} from ${update.currentVersion} to ${update.latestVersion}`\n                ],\n                riskLevel: update.updateType === \"major\" ? \"high\" : update.updateType === \"minor\" ? \"medium\" : \"low\"\n            };\n        }\n    }\n    parseAnalysisResponse(packageName, response) {\n        const lines = response.split(\"\\n\").map((line)=>line.trim()).filter(Boolean);\n        let summary = \"\";\n        const breakingChanges = [];\n        const migrationSteps = [];\n        let riskLevel = \"medium\";\n        let currentSection = \"\";\n        for (const line of lines){\n            const lowerLine = line.toLowerCase();\n            if (lowerLine.includes(\"summary\") || lowerLine.includes(\"changes\")) {\n                currentSection = \"summary\";\n                continue;\n            } else if (lowerLine.includes(\"breaking\")) {\n                currentSection = \"breaking\";\n                continue;\n            } else if (lowerLine.includes(\"migration\") || lowerLine.includes(\"steps\")) {\n                currentSection = \"migration\";\n                continue;\n            } else if (lowerLine.includes(\"risk\")) {\n                currentSection = \"risk\";\n                if (lowerLine.includes(\"high\")) riskLevel = \"high\";\n                else if (lowerLine.includes(\"low\")) riskLevel = \"low\";\n                else riskLevel = \"medium\";\n                continue;\n            }\n            if (line.startsWith(\"-\") || line.startsWith(\"*\") || line.match(/^\\d+\\./)) {\n                const cleanLine = line.replace(/^[-*\\d.]\\s*/, \"\");\n                if (currentSection === \"breaking\") {\n                    breakingChanges.push(cleanLine);\n                } else if (currentSection === \"migration\") {\n                    migrationSteps.push(cleanLine);\n                }\n            } else if (currentSection === \"summary\" && line.length > 10) {\n                summary = line;\n            }\n        }\n        if (!summary) {\n            summary = `Upgrade ${packageName} with standard version bump considerations`;\n        }\n        return {\n            packageName,\n            summary,\n            breakingChanges,\n            migrationSteps,\n            riskLevel\n        };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1taWdyYXRvci1hcHAvLi9zcmMvbGliL2FpLWFuYWx5emVyLnRzPzY1Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb3BlbmFpIH0gZnJvbSAnQGFpLXNkay9vcGVuYWknO1xuaW1wb3J0IHsgZ2VuZXJhdGVUZXh0IH0gZnJvbSAnYWknO1xuaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xuaW1wb3J0IHsgUGFja2FnZVVwZGF0ZSB9IGZyb20gJy4vYW5hbHl6ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1pZ3JhdGlvbkFuYWx5c2lzIHtcbiAgcGFja2FnZU5hbWU6IHN0cmluZztcbiAgc3VtbWFyeTogc3RyaW5nO1xuICBicmVha2luZ0NoYW5nZXM6IHN0cmluZ1tdO1xuICBtaWdyYXRpb25TdGVwczogc3RyaW5nW107XG4gIHJpc2tMZXZlbDogJ2xvdycgfCAnbWVkaXVtJyB8ICdoaWdoJztcbn1cblxuZXhwb3J0IGNsYXNzIEFJQW5hbHl6ZXIge1xuICBwcml2YXRlIGFzeW5jIGZldGNoQ2hhbmdlbG9nSW5mbyhwYWNrYWdlTmFtZTogc3RyaW5nLCBmcm9tVmVyc2lvbjogc3RyaW5nLCB0b1ZlcnNpb246IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcmVnaXN0cnkubnBtanMub3JnLyR7cGFja2FnZU5hbWV9YCk7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSByZXR1cm4gJyc7XG4gICAgICBcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgYW55O1xuICAgICAgY29uc3QgcmVwb3NpdG9yeSA9IGRhdGEucmVwb3NpdG9yeT8udXJsIHx8ICcnO1xuICAgICAgY29uc3QgaG9tZXBhZ2UgPSBkYXRhLmhvbWVwYWdlIHx8ICcnO1xuICAgICAgXG4gICAgICBjb25zdCBjaGFuZ2Vsb2dTb3VyY2VzID0gW1xuICAgICAgICBgJHtyZXBvc2l0b3J5fS9yZWxlYXNlc2AsXG4gICAgICAgIGAke3JlcG9zaXRvcnl9L2Jsb2IvbWFpbi9DSEFOR0VMT0cubWRgLFxuICAgICAgICBgJHtyZXBvc2l0b3J5fS9ibG9iL21hc3Rlci9DSEFOR0VMT0cubWRgLFxuICAgICAgICBgJHtob21lcGFnZX0vcmVsZWFzZXNgLFxuICAgICAgICBgJHtob21lcGFnZX0vY2hhbmdlbG9nYFxuICAgICAgXS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICBcbiAgICAgIHJldHVybiBgUmVwb3NpdG9yeTogJHtyZXBvc2l0b3J5fVxcbkhvbWVwYWdlOiAke2hvbWVwYWdlfVxcbkNoYW5nZWxvZyBzb3VyY2VzOiAke2NoYW5nZWxvZ1NvdXJjZXMuam9pbignLCAnKX1gO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gYEZhaWxlZCB0byBmZXRjaCBwYWNrYWdlIGluZm8gZm9yICR7cGFja2FnZU5hbWV9YDtcbiAgICB9XG4gIH1cblxuICBhc3luYyBhbmFseXplUGFja2FnZVVwZ3JhZGUodXBkYXRlOiBQYWNrYWdlVXBkYXRlKTogUHJvbWlzZTxNaWdyYXRpb25BbmFseXNpcz4ge1xuICAgIGNvbnN0IGNoYW5nZWxvZ0luZm8gPSBhd2FpdCB0aGlzLmZldGNoQ2hhbmdlbG9nSW5mbyhcbiAgICAgIHVwZGF0ZS5uYW1lLFxuICAgICAgdXBkYXRlLmN1cnJlbnRWZXJzaW9uLFxuICAgICAgdXBkYXRlLmxhdGVzdFZlcnNpb25cbiAgICApO1xuXG4gICAgY29uc3QgcHJvbXB0ID0gYEFuYWx5emUgdGhlIHVwZ3JhZGUgb2YgbnBtIHBhY2thZ2UgXCIke3VwZGF0ZS5uYW1lfVwiIGZyb20gdmVyc2lvbiAke3VwZGF0ZS5jdXJyZW50VmVyc2lvbn0gdG8gJHt1cGRhdGUubGF0ZXN0VmVyc2lvbn0uXG5cblBhY2thZ2UgaW5mbzpcbiR7Y2hhbmdlbG9nSW5mb31cblxuUGxlYXNlIHByb3ZpZGU6XG4xLiBBIGNvbmNpc2Ugc3VtbWFyeSBvZiB0aGUga2V5IGNoYW5nZXNcbjIuIExpc3Qgb2YgYnJlYWtpbmcgY2hhbmdlcyAoaWYgYW55KVxuMy4gU3RlcC1ieS1zdGVwIG1pZ3JhdGlvbiBpbnN0cnVjdGlvbnNcbjQuIFJpc2sgYXNzZXNzbWVudCAobG93L21lZGl1bS9oaWdoKVxuXG5Gb2N1cyBvbiBwcmFjdGljYWwgbWlncmF0aW9uIHN0ZXBzIGRldmVsb3BlcnMgbmVlZCB0byB0YWtlLiBJZiB0aGlzIGlzIGEgbWFqb3IgdmVyc2lvbiBidW1wLCBwYXkgc3BlY2lhbCBhdHRlbnRpb24gdG8gYnJlYWtpbmcgY2hhbmdlcy5gO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgdGV4dCB9ID0gYXdhaXQgZ2VuZXJhdGVUZXh0KHtcbiAgICAgICAgbW9kZWw6IG9wZW5haSgnZ3B0LTRvLW1pbmknKSxcbiAgICAgICAgcHJvbXB0LFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLnBhcnNlQW5hbHlzaXNSZXNwb25zZSh1cGRhdGUubmFtZSwgdGV4dCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUud2FybihgQUkgYW5hbHlzaXMgZmFpbGVkIGZvciAke3VwZGF0ZS5uYW1lfTpgLCBlcnJvcik7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWNrYWdlTmFtZTogdXBkYXRlLm5hbWUsXG4gICAgICAgIHN1bW1hcnk6IGBGYWlsZWQgdG8gYW5hbHl6ZSB1cGdyYWRlIGZyb20gJHt1cGRhdGUuY3VycmVudFZlcnNpb259IHRvICR7dXBkYXRlLmxhdGVzdFZlcnNpb259YCxcbiAgICAgICAgYnJlYWtpbmdDaGFuZ2VzOiBbXSxcbiAgICAgICAgbWlncmF0aW9uU3RlcHM6IFtgVXBkYXRlICR7dXBkYXRlLm5hbWV9IGZyb20gJHt1cGRhdGUuY3VycmVudFZlcnNpb259IHRvICR7dXBkYXRlLmxhdGVzdFZlcnNpb259YF0sXG4gICAgICAgIHJpc2tMZXZlbDogdXBkYXRlLnVwZGF0ZVR5cGUgPT09ICdtYWpvcicgPyAnaGlnaCcgOiB1cGRhdGUudXBkYXRlVHlwZSA9PT0gJ21pbm9yJyA/ICdtZWRpdW0nIDogJ2xvdydcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZUFuYWx5c2lzUmVzcG9uc2UocGFja2FnZU5hbWU6IHN0cmluZywgcmVzcG9uc2U6IHN0cmluZyk6IE1pZ3JhdGlvbkFuYWx5c2lzIHtcbiAgICBjb25zdCBsaW5lcyA9IHJlc3BvbnNlLnNwbGl0KCdcXG4nKS5tYXAobGluZSA9PiBsaW5lLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pO1xuICAgIFxuICAgIGxldCBzdW1tYXJ5ID0gJyc7XG4gICAgY29uc3QgYnJlYWtpbmdDaGFuZ2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IG1pZ3JhdGlvblN0ZXBzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGxldCByaXNrTGV2ZWw6ICdsb3cnIHwgJ21lZGl1bScgfCAnaGlnaCcgPSAnbWVkaXVtJztcbiAgICBcbiAgICBsZXQgY3VycmVudFNlY3Rpb24gPSAnJztcbiAgICBcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgIGNvbnN0IGxvd2VyTGluZSA9IGxpbmUudG9Mb3dlckNhc2UoKTtcbiAgICAgIFxuICAgICAgaWYgKGxvd2VyTGluZS5pbmNsdWRlcygnc3VtbWFyeScpIHx8IGxvd2VyTGluZS5pbmNsdWRlcygnY2hhbmdlcycpKSB7XG4gICAgICAgIGN1cnJlbnRTZWN0aW9uID0gJ3N1bW1hcnknO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAobG93ZXJMaW5lLmluY2x1ZGVzKCdicmVha2luZycpKSB7XG4gICAgICAgIGN1cnJlbnRTZWN0aW9uID0gJ2JyZWFraW5nJztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2UgaWYgKGxvd2VyTGluZS5pbmNsdWRlcygnbWlncmF0aW9uJykgfHwgbG93ZXJMaW5lLmluY2x1ZGVzKCdzdGVwcycpKSB7XG4gICAgICAgIGN1cnJlbnRTZWN0aW9uID0gJ21pZ3JhdGlvbic7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIGlmIChsb3dlckxpbmUuaW5jbHVkZXMoJ3Jpc2snKSkge1xuICAgICAgICBjdXJyZW50U2VjdGlvbiA9ICdyaXNrJztcbiAgICAgICAgaWYgKGxvd2VyTGluZS5pbmNsdWRlcygnaGlnaCcpKSByaXNrTGV2ZWwgPSAnaGlnaCc7XG4gICAgICAgIGVsc2UgaWYgKGxvd2VyTGluZS5pbmNsdWRlcygnbG93JykpIHJpc2tMZXZlbCA9ICdsb3cnO1xuICAgICAgICBlbHNlIHJpc2tMZXZlbCA9ICdtZWRpdW0nO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGxpbmUuc3RhcnRzV2l0aCgnLScpIHx8IGxpbmUuc3RhcnRzV2l0aCgnKicpIHx8IGxpbmUubWF0Y2goL15cXGQrXFwuLykpIHtcbiAgICAgICAgY29uc3QgY2xlYW5MaW5lID0gbGluZS5yZXBsYWNlKC9eWy0qXFxkLl1cXHMqLywgJycpO1xuICAgICAgICBpZiAoY3VycmVudFNlY3Rpb24gPT09ICdicmVha2luZycpIHtcbiAgICAgICAgICBicmVha2luZ0NoYW5nZXMucHVzaChjbGVhbkxpbmUpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRTZWN0aW9uID09PSAnbWlncmF0aW9uJykge1xuICAgICAgICAgIG1pZ3JhdGlvblN0ZXBzLnB1c2goY2xlYW5MaW5lKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50U2VjdGlvbiA9PT0gJ3N1bW1hcnknICYmIGxpbmUubGVuZ3RoID4gMTApIHtcbiAgICAgICAgc3VtbWFyeSA9IGxpbmU7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICghc3VtbWFyeSkge1xuICAgICAgc3VtbWFyeSA9IGBVcGdyYWRlICR7cGFja2FnZU5hbWV9IHdpdGggc3RhbmRhcmQgdmVyc2lvbiBidW1wIGNvbnNpZGVyYXRpb25zYDtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2thZ2VOYW1lLFxuICAgICAgc3VtbWFyeSxcbiAgICAgIGJyZWFraW5nQ2hhbmdlcyxcbiAgICAgIG1pZ3JhdGlvblN0ZXBzLFxuICAgICAgcmlza0xldmVsXG4gICAgfTtcbiAgfVxufSJdLCJuYW1lcyI6WyJvcGVuYWkiLCJnZW5lcmF0ZVRleHQiLCJmZXRjaCIsIkFJQW5hbHl6ZXIiLCJmZXRjaENoYW5nZWxvZ0luZm8iLCJwYWNrYWdlTmFtZSIsImZyb21WZXJzaW9uIiwidG9WZXJzaW9uIiwicmVzcG9uc2UiLCJvayIsImRhdGEiLCJqc29uIiwicmVwb3NpdG9yeSIsInVybCIsImhvbWVwYWdlIiwiY2hhbmdlbG9nU291cmNlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZXJyb3IiLCJhbmFseXplUGFja2FnZVVwZ3JhZGUiLCJ1cGRhdGUiLCJjaGFuZ2Vsb2dJbmZvIiwibmFtZSIsImN1cnJlbnRWZXJzaW9uIiwibGF0ZXN0VmVyc2lvbiIsInByb21wdCIsInRleHQiLCJtb2RlbCIsInBhcnNlQW5hbHlzaXNSZXNwb25zZSIsImNvbnNvbGUiLCJ3YXJuIiwic3VtbWFyeSIsImJyZWFraW5nQ2hhbmdlcyIsIm1pZ3JhdGlvblN0ZXBzIiwicmlza0xldmVsIiwidXBkYXRlVHlwZSIsImxpbmVzIiwic3BsaXQiLCJtYXAiLCJsaW5lIiwidHJpbSIsImN1cnJlbnRTZWN0aW9uIiwibG93ZXJMaW5lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInN0YXJ0c1dpdGgiLCJtYXRjaCIsImNsZWFuTGluZSIsInJlcGxhY2UiLCJwdXNoIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/ai-analyzer.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@14.2.5_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1","vendor-chunks/@opentelemetry+api@1.9.0","vendor-chunks/node-fetch@3.3.2","vendor-chunks/web-streams-polyfill@3.3.3","vendor-chunks/fetch-blob@3.2.0","vendor-chunks/formdata-polyfill@4.0.10","vendor-chunks/data-uri-to-buffer@4.0.1","vendor-chunks/node-domexception@1.0.0"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@14.2.5_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fanalyze%2Froute&page=%2Fapi%2Fanalyze%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fanalyze%2Froute.ts&appDir=%2FUsers%2Ftjol%2Fdev%2Fsandbox%2Fai-migrator%2Fapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ftjol%2Fdev%2Fsandbox%2Fai-migrator%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();