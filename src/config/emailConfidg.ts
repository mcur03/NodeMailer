import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
// se crea la instancia de createTransport y contiene el tipo se servicio y la autenticación
export const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
        user: process.env.FROM_EMAEIL,
        pass: process.env.PASSAPPGMAIL
    }
});


