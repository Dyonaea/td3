import express from 'express';
import todoRouter from './router/todoRouter.js'

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/todo', todoRouter);

app.listen(PORT, ()=>{
    console.log(`serveur running on http://localhost:${PORT}`);
})