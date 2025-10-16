import {Router} from 'express'
import { createQuestion, deleteQuestion, getAllQestions } from '../controllers/questionController.js';


const router = Router();

router.get('/', getAllQestions)

router.post('/', createQuestion)

router.delete('/:id', deleteQuestion)

export default router