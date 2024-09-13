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
Object.defineProperty(exports, "__esModule", { value: true });
const emailConfidg_1 = require("../config/emailConfidg");
class EmailRepository {
    // las opciones para enviar el email
    static optionEmail(email, asunto, contenido) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mailOption = {
                    from: process.env.FROM_EMAEIL, //quien lo envia
                    to: email, // quien lo recibe 
                    subject: asunto, // el asunto
                    text: contenido // el contenido
                };
                emailConfidg_1.transporter.sendMail(mailOption, (error, info) => {
                    if (error) {
                        console.error('Error: ', error);
                    }
                    console.log('Mensaje enviado', info.response);
                });
            }
            catch (error) {
                console.error('Error al enviar el correo');
            }
        });
    }
}
exports.default = EmailRepository;
//# sourceMappingURL=emailRepository.js.map