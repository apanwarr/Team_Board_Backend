import mongoose from 'mongoose';
import Board from '../models/Board.js';
import Task from '../models/Task.js';

export const getBoards = async (req, res) => {
  const boards = await Board.find().sort({ createdAt: -1 });
  res.json(boards);
};

export const createBoard = async (req, res) => {
  const { name } = req.body;
  const board = new Board({ name });
  await board.save();
  res.status(201).json(board);
};

export const getTasksInBoard = async (req, res) => {
  const tasks = await Task.find({ boardId: req.params.id });
  res.json(tasks);
};

export const createTaskInBoard = async (req, res) => {
  const task = new Task({ ...req.body, boardId: req.params.id });
  await task.save();
  res.status(201).json(task);
};

export const deleteBoard = async (req, res) => {
  const boardId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(boardId)) {
    return res.status(400).json({ error: 'Invalid board ID format' });
  }

  try {
    const deletedBoard = await Board.findByIdAndDelete(boardId);

    if (!deletedBoard) {
      return res.status(404).json({ error: 'Board not found' });
    }

    await Task.deleteMany({ boardId }); // Also delete related tasks

    res.status(200).json({ message: 'Board deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error while deleting board' });
  }
};
