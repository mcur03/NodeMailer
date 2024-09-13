import { transporter } from "../config/emailConfidg";

class EmailRepository{

    // las opciones para enviar el email
static async optionEmail(email:string, asunto:string, contenido:string){
    try {
        const mailOption = {
            from: process.env.FROM_EMAEIL, //quien lo envia
            to: email, // quien lo recibe 
            subject: asunto, // el asunto
            text: contenido // el contenido
        };
        transporter.sendMail(mailOption, (error, info)=>{
            if(error){
                console.error('Error: ', error);
            }
            console.log('Mensaje enviado', info.response);
        })
    } catch (error) {
        console.error('Error al enviar el correo');
    }
}
}

export default EmailRepository;