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
exports.id = "app/api/send/route";
exports.ids = ["app/api/send/route"];
exports.modules = {

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

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend%2Froute&page=%2Fapi%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend%2Froute.js&appDir=E%3A%5CDiya's%20documents%5CWeb%5CPortfolio%5Cportfolio_DV%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CDiya's%20documents%5CWeb%5CPortfolio%5Cportfolio_DV&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend%2Froute&page=%2Fapi%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend%2Froute.js&appDir=E%3A%5CDiya's%20documents%5CWeb%5CPortfolio%5Cportfolio_DV%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CDiya's%20documents%5CWeb%5CPortfolio%5Cportfolio_DV&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_Diya_s_documents_Web_Portfolio_portfolio_DV_app_api_send_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/send/route.js */ \"(rsc)/./app/api/send/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/send/route\",\n        pathname: \"/api/send\",\n        filename: \"route\",\n        bundlePath: \"app/api/send/route\"\n    },\n    resolvedPagePath: \"E:\\\\Diya's documents\\\\Web\\\\Portfolio\\\\portfolio_DV\\\\app\\\\api\\\\send\\\\route.js\",\n    nextConfigOutput,\n    userland: E_Diya_s_documents_Web_Portfolio_portfolio_DV_app_api_send_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/send/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZW5kJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2VuZCUyRnJvdXRlLmpzJmFwcERpcj1FJTNBJTVDRGl5YSdzJTIwZG9jdW1lbnRzJTVDV2ViJTVDUG9ydGZvbGlvJTVDcG9ydGZvbGlvX0RWJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1FJTNBJTVDRGl5YSdzJTIwZG9jdW1lbnRzJTVDV2ViJTVDUG9ydGZvbGlvJTVDcG9ydGZvbGlvX0RWJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzRCO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcGVyc29uYWwtcG9ydGZvbGlvLz9kOGNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkU6XFxcXERpeWEncyBkb2N1bWVudHNcXFxcV2ViXFxcXFBvcnRmb2xpb1xcXFxwb3J0Zm9saW9fRFZcXFxcYXBwXFxcXGFwaVxcXFxzZW5kXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zZW5kL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2VuZFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2VuZC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkU6XFxcXERpeWEncyBkb2N1bWVudHNcXFxcV2ViXFxcXFBvcnRmb2xpb1xcXFxwb3J0Zm9saW9fRFZcXFxcYXBwXFxcXGFwaVxcXFxzZW5kXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3NlbmQvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend%2Froute&page=%2Fapi%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend%2Froute.js&appDir=E%3A%5CDiya's%20documents%5CWeb%5CPortfolio%5Cportfolio_DV%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CDiya's%20documents%5CWeb%5CPortfolio%5Cportfolio_DV&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/send/route.js":
/*!*******************************!*\
  !*** ./app/api/send/route.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/resend/dist/index.mjs\");\n/* eslint-disable react/react-in-jsx-scope */ \n\n\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_2__.Resend(process.env.RESEND_API_KEY);\nconst fromEmail = process.env.FROM_EMAIL;\nasync function POST(req, res) {\n    const { body } = await req.json();\n    const { email, subject, message } = body;\n    try {\n        const data = await resend.emails.send({\n            from: fromEmail,\n            to: email,\n            subject,\n            react: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: subject\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Diya's documents\\\\Web\\\\Portfolio\\\\portfolio_DV\\\\app\\\\api\\\\send\\\\route.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Thank you for contancting me!\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Diya's documents\\\\Web\\\\Portfolio\\\\portfolio_DV\\\\app\\\\api\\\\send\\\\route.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"New message submitted:\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Diya's documents\\\\Web\\\\Portfolio\\\\portfolio_DV\\\\app\\\\api\\\\send\\\\route.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: message\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Diya's documents\\\\Web\\\\Portfolio\\\\portfolio_DV\\\\app\\\\api\\\\send\\\\route.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true)\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json(data);\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            status: \"fail\",\n            error\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NlbmQvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwyQ0FBMkM7QUFDRDtBQUNYO0FBRS9CLE1BQU1FLFNBQVMsSUFBSUQsMENBQU1BLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUNwRCxNQUFNQyxZQUFZSCxRQUFRQyxHQUFHLENBQUNHLFVBQVU7QUFFakMsZUFBZUMsS0FBTUMsR0FBRyxFQUFFQyxHQUFHO0lBQ2xDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTUYsSUFBSUcsSUFBSTtJQUMvQixNQUFNLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUUsR0FBR0o7SUFDcEMsSUFBSTtRQUNGLE1BQU1LLE9BQU8sTUFBTWQsT0FBT2UsTUFBTSxDQUFDQyxJQUFJLENBQUM7WUFDcENDLE1BQU1iO1lBQ05jLElBQUlQO1lBQ0pDO1lBQ0FPLHFCQUNFOztrQ0FDRSw4REFBQ0M7a0NBQUlSOzs7Ozs7a0NBQ0wsOERBQUNTO2tDQUFFOzs7Ozs7a0NBQ0gsOERBQUNBO2tDQUFFOzs7Ozs7a0NBQ0gsOERBQUNBO2tDQUFHUjs7Ozs7Ozs7UUFHVjtRQUVBLE9BQU9mLGtGQUFZQSxDQUFDWSxJQUFJLENBQUNJO0lBQzNCLEVBQUUsT0FBT1EsT0FBTztRQUNkLE9BQU94QixrRkFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUVhLFFBQVE7WUFBUUQ7UUFBTTtJQUNuRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcGVyc29uYWwtcG9ydGZvbGlvLy4vYXBwL2FwaS9zZW5kL3JvdXRlLmpzP2JmZjUiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcmVhY3QtaW4tanN4LXNjb3BlICovXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB7IFJlc2VuZCB9IGZyb20gJ3Jlc2VuZCdcblxuY29uc3QgcmVzZW5kID0gbmV3IFJlc2VuZChwcm9jZXNzLmVudi5SRVNFTkRfQVBJX0tFWSlcbmNvbnN0IGZyb21FbWFpbCA9IHByb2Nlc3MuZW52LkZST01fRU1BSUxcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QgKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgYm9keSB9ID0gYXdhaXQgcmVxLmpzb24oKVxuICBjb25zdCB7IGVtYWlsLCBzdWJqZWN0LCBtZXNzYWdlIH0gPSBib2R5XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc2VuZC5lbWFpbHMuc2VuZCh7XG4gICAgICBmcm9tOiBmcm9tRW1haWwsXG4gICAgICB0bzogZW1haWwsXG4gICAgICBzdWJqZWN0LFxuICAgICAgcmVhY3Q6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aDE+e3N1YmplY3R9PC9oMT5cbiAgICAgICAgICA8cD5UaGFuayB5b3UgZm9yIGNvbnRhbmN0aW5nIG1lITwvcD5cbiAgICAgICAgICA8cD5OZXcgbWVzc2FnZSBzdWJtaXR0ZWQ6PC9wPlxuICAgICAgICAgIDxwPnttZXNzYWdlfTwvcD5cbiAgICAgICAgPC8+XG4gICAgICApXG4gICAgfSlcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihkYXRhKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN0YXR1czogJ2ZhaWwnLCBlcnJvciB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiUmVzZW5kIiwicmVzZW5kIiwicHJvY2VzcyIsImVudiIsIlJFU0VORF9BUElfS0VZIiwiZnJvbUVtYWlsIiwiRlJPTV9FTUFJTCIsIlBPU1QiLCJyZXEiLCJyZXMiLCJib2R5IiwianNvbiIsImVtYWlsIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJkYXRhIiwiZW1haWxzIiwic2VuZCIsImZyb20iLCJ0byIsInJlYWN0IiwiaDEiLCJwIiwiZXJyb3IiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/send/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/entities","vendor-chunks/domutils","vendor-chunks/js-beautify","vendor-chunks/htmlparser2","vendor-chunks/peberminta","vendor-chunks/domhandler","vendor-chunks/dom-serializer","vendor-chunks/selderee","vendor-chunks/resend","vendor-chunks/parseley","vendor-chunks/leac","vendor-chunks/html-to-text","vendor-chunks/domelementtype","vendor-chunks/@selderee","vendor-chunks/@react-email","vendor-chunks/deepmerge"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend%2Froute&page=%2Fapi%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend%2Froute.js&appDir=E%3A%5CDiya's%20documents%5CWeb%5CPortfolio%5Cportfolio_DV%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CDiya's%20documents%5CWeb%5CPortfolio%5Cportfolio_DV&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();