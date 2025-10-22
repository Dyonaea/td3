import {Router} from 'express'
import { createQuestion, deleteQuestion, getAllQestions } from '../controllers/questionController.js';
import { validateBody, validateParam } from '../middleware/validation.js';
import { createQuestionSchema, questionIdSchema } from '../models/questions.js';


const router = Router();

router.get('/', getAllQestions)

router.post('/', validateBody(createQuestionSchema), createQuestion)

router.delete('/:id',validateParam(questionIdSchema), deleteQuestion)

export default router