"use strict";
/**
 * ExampleSearch Route Handlers
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleSearchBySearchTerm = exports.exampleSearchAll = void 0;
/**
 * /api/search
 * returns all results
 */
const exampleSearchAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const responseObject = { response: [] };
    return responseObject;
});
exports.exampleSearchAll = exampleSearchAll;
/**
 * /api/search/:searchTerm
 * returns all results matching searchTerm
 */
const exampleSearchBySearchTerm = (requestParameters) => __awaiter(void 0, void 0, void 0, function* () {
    const responseObject = {
        response: [],
        requestParameters,
    };
    return responseObject;
});
exports.exampleSearchBySearchTerm = exampleSearchBySearchTerm;
//# sourceMappingURL=handlers.js.map