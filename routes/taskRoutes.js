import express from 'express';
import { updateTask, deleteTask } from '../controllers/taskController.js';

const router = express.Router();

router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;