import { Router } from 'express';
import EmailController from '../controller/emailController';

const router = Router();

router.post('/email', EmailController.enviarEmail);

export default router;
