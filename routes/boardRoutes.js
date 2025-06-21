import express from 'express';
import {
  getBoards,
  createBoard,
  getTasksInBoard,
  createTaskInBoard,
  deleteBoard
} from '../controllers/boardController.js';

const router = express.Router();

router.get('/', getBoards);
router.post('/', createBoard);
router.get('/:id/tasks', getTasksInBoard);
router.post('/:id/tasks', createTaskInBoard);
router.delete('/:id', deleteBoard); // ✅ THIS LINE

export default router;
