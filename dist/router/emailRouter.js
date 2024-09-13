"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const emailController_1 = __importDefault(require("../controller/emailController"));
const router = (0, express_1.Router)();
router.post('/email', emailController_1.default.enviarEmail);
exports.default = router;
//# sourceMappingURL=emailRouter.js.map