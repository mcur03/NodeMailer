import app from './app';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('Servidor escuchando en el perto', PORT);
}).on('error', (err: any) => {
    throw new Error(err.message);
});