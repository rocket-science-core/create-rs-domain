"use strict";
/**
 * Best Practices For Express Server
 * https://expressjs.com/en/advanced/best-practice-performance.html
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
/**
 * Middleware
 */
app.use((0, compression_1.default)());
app.use((0, morgan_1.default)("tiny"));
/**
 * Consume Aggregated Router
 */
app.use('/api', routes_1.default);
/**
 * Start the application
 */
const port = process.env.SERVER_PORT || 8000;
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
__exportStar(require("./routes"), exports);
//# sourceMappingURL=index.js.map