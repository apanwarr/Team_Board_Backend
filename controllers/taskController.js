import Task from '../models/Task.js';

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update task' });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete task' });
  }
};