"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DomainHandlers_1 = require("./DomainHandlers");
const ExampleSearchRouter = express_1.default.Router();
/**
 * GET Route Examples
 * 1: no parameters
 * 2: with parameters
 */
ExampleSearchRouter.get("/", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const responseObject = yield (0, DomainHandlers_1.exampleRouteHandler)();
    res.json(yield responseObject);
}));
ExampleSearchRouter.get("/:searchTerm", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const responseObject = yield (0, DomainHandlers_1.exampleRouteHandler)(req.params);
    res.json(yield responseObject);
}));
exports.default = ExampleSearchRouter;
//# sourceMappingURL=ExampleSearchRouter.js.map