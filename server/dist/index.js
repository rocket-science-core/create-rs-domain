/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\r\n/**\r\n * Best Practices For Express Server\r\n * https://expressjs.com/en/advanced/best-practice-performance.html\r\n */\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar compression_1 = __importDefault(__webpack_require__(/*! compression */ \"compression\"));\r\nvar morgan_1 = __importDefault(__webpack_require__(/*! morgan */ \"morgan\"));\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar routes_1 = __importDefault(__webpack_require__(/*! ./routes */ \"./src/routes/index.ts\"));\r\nvar app = (0, express_1[\"default\"])();\r\n/**\r\n * Middleware\r\n */\r\napp.use((0, compression_1[\"default\"])());\r\napp.use((0, morgan_1[\"default\"])(\"tiny\"));\r\n/**\r\n * Consume Aggregated Router\r\n */\r\napp.use(\"/api\", routes_1[\"default\"]);\r\n/**\r\n * Start the application\r\n */\r\nvar port = process.env.SERVER_PORT || 8000;\r\napp.get(\"/\", function (_, res) {\r\n    res.send({\r\n        message: \"hello world\"\r\n    });\r\n});\r\nif (__webpack_require__.c[__webpack_require__.s] === module) {\r\n    // true if file is executed\r\n    app.listen(port, function () {\r\n        // tslint:disable-next-line:no-console\r\n        console.log(\"server started at http://localhost:\".concat(port));\r\n    });\r\n}\r\n__exportStar(__webpack_require__(/*! ./routes */ \"./src/routes/index.ts\"), exports);\r\nexports[\"default\"] = app;\r\n\n\n//# sourceURL=webpack://new-server/./src/index.ts?");

/***/ }),

/***/ "./src/routes/ExampleAuth/handlers.ts":
/*!********************************************!*\
  !*** ./src/routes/ExampleAuth/handlers.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\n/**\r\n * ExampleSearch Route Handlers\r\n */\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nexports.exampleLogout = exports.exampleLogin = void 0;\r\n/**\r\n * /api/search\r\n * returns all results\r\n */\r\nvar exampleLogin = function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    var responseObject;\r\n    return __generator(this, function (_a) {\r\n        responseObject = { response: [] };\r\n        return [2 /*return*/, responseObject];\r\n    });\r\n}); };\r\nexports.exampleLogin = exampleLogin;\r\n/**\r\n * /api/search/:searchTerm\r\n * returns all results matching searchTerm\r\n */\r\nvar exampleLogout = function (requestParameters) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var responseObject;\r\n    return __generator(this, function (_a) {\r\n        responseObject = {\r\n            response: [],\r\n            requestParameters: requestParameters\r\n        };\r\n        return [2 /*return*/, responseObject];\r\n    });\r\n}); };\r\nexports.exampleLogout = exampleLogout;\r\n\n\n//# sourceURL=webpack://new-server/./src/routes/ExampleAuth/handlers.ts?");

/***/ }),

/***/ "./src/routes/ExampleAuth/index.ts":
/*!*****************************************!*\
  !*** ./src/routes/ExampleAuth/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nexports.__esModule = true;\r\nexports[\"default\"] = void 0;\r\nvar router_1 = __webpack_require__(/*! ./router */ \"./src/routes/ExampleAuth/router.ts\");\r\n__createBinding(exports, router_1, \"default\");\r\n__exportStar(__webpack_require__(/*! ./handlers */ \"./src/routes/ExampleAuth/handlers.ts\"), exports);\r\n\n\n//# sourceURL=webpack://new-server/./src/routes/ExampleAuth/index.ts?");

/***/ }),

/***/ "./src/routes/ExampleAuth/router.ts":
/*!******************************************!*\
  !*** ./src/routes/ExampleAuth/router.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\n/**\r\n * ExampleSearch Router\r\n */\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar handlers_1 = __webpack_require__(/*! ./handlers */ \"./src/routes/ExampleAuth/handlers.ts\");\r\nvar ExampleAuthRouter = express_1[\"default\"].Router();\r\n/**\r\n * /api/login\r\n * returns all results\r\n */\r\nExampleAuthRouter.get(\"/login\", function (_, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var responseObject, _a, _b;\r\n    return __generator(this, function (_c) {\r\n        switch (_c.label) {\r\n            case 0: return [4 /*yield*/, (0, handlers_1.exampleLogin)()];\r\n            case 1:\r\n                responseObject = _c.sent();\r\n                _b = (_a = res).json;\r\n                return [4 /*yield*/, responseObject];\r\n            case 2:\r\n                _b.apply(_a, [_c.sent()]);\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n/**\r\n * /api/logout\r\n * returns all results matching searchTerm\r\n */\r\nExampleAuthRouter.get(\"/logout\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var responseObject, _a, _b;\r\n    return __generator(this, function (_c) {\r\n        switch (_c.label) {\r\n            case 0: return [4 /*yield*/, (0, handlers_1.exampleLogout)()];\r\n            case 1:\r\n                responseObject = _c.sent();\r\n                _b = (_a = res).json;\r\n                return [4 /*yield*/, responseObject];\r\n            case 2:\r\n                _b.apply(_a, [_c.sent()]);\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports[\"default\"] = ExampleAuthRouter;\r\n\n\n//# sourceURL=webpack://new-server/./src/routes/ExampleAuth/router.ts?");

/***/ }),

/***/ "./src/routes/ExampleSearch/handlers.ts":
/*!**********************************************!*\
  !*** ./src/routes/ExampleSearch/handlers.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\n/**\r\n * ExampleSearch Route Handlers\r\n */\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nexports.exampleSearchBySearchTerm = exports.exampleSearchAll = void 0;\r\n/**\r\n * /api/search\r\n * returns all results\r\n */\r\nvar exampleSearchAll = function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    var responseObject;\r\n    return __generator(this, function (_a) {\r\n        responseObject = { response: [] };\r\n        return [2 /*return*/, responseObject];\r\n    });\r\n}); };\r\nexports.exampleSearchAll = exampleSearchAll;\r\n/**\r\n * /api/search/:searchTerm\r\n * returns all results matching searchTerm\r\n */\r\nvar exampleSearchBySearchTerm = function (requestParameters) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var responseObject;\r\n    return __generator(this, function (_a) {\r\n        responseObject = {\r\n            response: [],\r\n            requestParameters: requestParameters\r\n        };\r\n        return [2 /*return*/, responseObject];\r\n    });\r\n}); };\r\nexports.exampleSearchBySearchTerm = exampleSearchBySearchTerm;\r\n\n\n//# sourceURL=webpack://new-server/./src/routes/ExampleSearch/handlers.ts?");

/***/ }),

/***/ "./src/routes/ExampleSearch/index.ts":
/*!*******************************************!*\
  !*** ./src/routes/ExampleSearch/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nexports.__esModule = true;\r\nexports[\"default\"] = void 0;\r\nvar router_1 = __webpack_require__(/*! ./router */ \"./src/routes/ExampleSearch/router.ts\");\r\n__createBinding(exports, router_1, \"default\");\r\n__exportStar(__webpack_require__(/*! ./handlers */ \"./src/routes/ExampleSearch/handlers.ts\"), exports);\r\n\n\n//# sourceURL=webpack://new-server/./src/routes/ExampleSearch/index.ts?");

/***/ }),

/***/ "./src/routes/ExampleSearch/router.ts":
/*!********************************************!*\
  !*** ./src/routes/ExampleSearch/router.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\n/**\r\n * ExampleSearch Router\r\n */\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar handlers_1 = __webpack_require__(/*! ./handlers */ \"./src/routes/ExampleSearch/handlers.ts\");\r\nvar ExampleSearchRouter = express_1[\"default\"].Router();\r\n/**\r\n * /api/search\r\n * returns all results\r\n */\r\nExampleSearchRouter.get(\"/\", function (_, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var responseObject, _a, _b;\r\n    return __generator(this, function (_c) {\r\n        switch (_c.label) {\r\n            case 0: return [4 /*yield*/, (0, handlers_1.exampleSearchAll)()];\r\n            case 1:\r\n                responseObject = _c.sent();\r\n                _b = (_a = res).json;\r\n                return [4 /*yield*/, responseObject];\r\n            case 2:\r\n                _b.apply(_a, [_c.sent()]);\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n/**\r\n * /api/search/:searchTerm\r\n * returns all results matching searchTerm\r\n */\r\nExampleSearchRouter.get(\"/:searchTerm\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var responseObject, _a, _b;\r\n    return __generator(this, function (_c) {\r\n        switch (_c.label) {\r\n            case 0: return [4 /*yield*/, (0, handlers_1.exampleSearchBySearchTerm)(req.params)];\r\n            case 1:\r\n                responseObject = _c.sent();\r\n                _b = (_a = res).json;\r\n                return [4 /*yield*/, responseObject];\r\n            case 2:\r\n                _b.apply(_a, [_c.sent()]);\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports[\"default\"] = ExampleSearchRouter;\r\n\n\n//# sourceURL=webpack://new-server/./src/routes/ExampleSearch/router.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar express = __importStar(__webpack_require__(/*! express */ \"express\"));\r\n/**\r\n *  Import Application Sub-Routers\r\n */\r\nvar ExampleSearch_1 = __importDefault(__webpack_require__(/*! ./ExampleSearch */ \"./src/routes/ExampleSearch/index.ts\"));\r\nvar ExampleAuth_1 = __importDefault(__webpack_require__(/*! ./ExampleAuth */ \"./src/routes/ExampleAuth/index.ts\"));\r\n/**\r\n * Aggregate of all Application Sub-Routers\r\n */\r\nvar RouterAggregate = express.Router();\r\nRouterAggregate.use(\"/search\", ExampleSearch_1[\"default\"]);\r\nRouterAggregate.use(\"/auth\", ExampleAuth_1[\"default\"]);\r\nexports[\"default\"] = RouterAggregate;\r\n\n\n//# sourceURL=webpack://new-server/./src/routes/index.ts?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ 	
/******/ })()
;