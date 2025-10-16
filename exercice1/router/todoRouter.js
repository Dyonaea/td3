import {Router} from 'express'
import { createTodo, getOneTodo } from '../controllers/todoController.js';

const router = Router();

router.post('/', createTodo)

router.get('/:id', getOneTodo)

export default router