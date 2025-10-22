import express from 'express';
import questionRouter from './router/questionsRouter.js'
import userRouter from './router/userRouter.js'
import logger from './middleware/logger.js'

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(logger)

app.use('/questions', questionRouter);
app.use('/users', userRouter);

app.listen(PORT, ()=>{
    console.log(`serveur running on http://localhost:${PORT}`);
})