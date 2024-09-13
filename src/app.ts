import express from 'express';
import emailRouter from './router/emailRouter'

const app = express()
.use(express.json())

app.use('/api', emailRouter)

export default app;