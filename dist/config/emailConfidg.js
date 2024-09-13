"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// se crea la instancia de createTransport y contiene el tipo se servicio y la autenticación
exports.transporter = nodemailer_1.default.createTransport({
    service: process.env.SERVICE,
    auth: {
        user: process.env.FROM_EMAEIL,
        pass: process.env.PASSAPPGMAIL
    }
});
//# sourceMappingURL=emailConfidg.js.map