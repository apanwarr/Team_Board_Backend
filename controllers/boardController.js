import Board from '../models/Board.js';
import Task from '../models/Task.js';

export const getBoards = async (req, res) => {
  try {
    const boards = await Board.find();
    res.json(boards);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get boards' });
  }
};

export const createBoard = async (req, res) => {
  try {
    const board = new Board({ name: req.body.name });
    await board.save();
    res.status(201).json(board);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create board' });
  }
};

export const getTasksInBoard = async (req, res) => {
  try {
    const tasks = await Task.find({ boardId: req.params.id });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks for board' });
  }
};

export const createTaskInBoard = async (req, res) => {
  try {
    const task = new Task({ ...req.body, boardId: req.params.id });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create task' });
  }
};

