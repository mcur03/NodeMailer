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
const emailRepository_1 = __importDefault(require("../emailRepository/emailRepository"));
class EmailController {
    static enviarEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, asunto, contenido } = req.body;
                yield emailRepository_1.default.optionEmail(email, asunto, contenido);
                return res.status(200).json({ message: 'Mensaje enviado al correo', email });
            }
            catch (error) {
                console.error('error al enviar el mensaje', error);
                return res.status(500).json({ message: 'Error al enviar el mensaje' });
            }
        });
    }
}
exports.default = EmailController;
//# sourceMappingURL=emailController.js.map