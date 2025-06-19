import express from 'express';
import {
  getBoards,
  createBoard,
  getTasksInBoard,
  createTaskInBoard,
} from '../controllers/boardController.js';

const router = express.Router();

router.get('/', getBoards);
router.post('/', createBoard);
router.get('/:id/tasks', getTasksInBoard);
router.post('/:id/tasks', createTaskInBoard);

export default router;