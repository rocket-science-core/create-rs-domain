"use strict";
/**
 * ExampleSearch Router
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handlers_1 = require("./handlers");
const ExampleAuthRouter = express_1.default.Router();
/**
 * /api/login
 * returns all results
 */
ExampleAuthRouter.get("/login", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const responseObject = yield (0, handlers_1.exampleLogin)();
    res.json(yield responseObject);
}));
/**
 * /api/logout
 * returns all results matching searchTerm
 */
ExampleAuthRouter.get("/logout", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const responseObject = yield (0, handlers_1.exampleLogout)();
    res.json(yield responseObject);
}));
exports.default = ExampleAuthRouter;
//# sourceMappingURL=router.js.map