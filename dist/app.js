"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const emailRouter_1 = __importDefault(require("./router/emailRouter"));
const app = (0, express_1.default)()
    .use(express_1.default.json());
app.use('/api', emailRouter_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map