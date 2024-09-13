import { Request, Response } from 'express';
import EmailRepository from '../emailRepository/emailRepository';

class EmailController{
   static async  enviarEmail(req:Request, res:Response){
        try {
            const { email, asunto, contenido } = req.body
            await EmailRepository.optionEmail(email, asunto, contenido);
            return res.status(200).json({message: 'Mensaje enviado al correo', email})
        } catch (error) {
            console.error('error al enviar el mensaje', error);
            return res.status(500).json({message: 'Error al enviar el mensaje'})
            
        }
   }
}

export default EmailController;