const express = require('express');
const router = express.Router();
const res = require('express/lib/response');
const Task = require('../models/Task');

//Create Task
router.post('/', async (req, res) => {
    try {
      const { title, description } = req.body;
      console.log('Request body:', req.body);
  
      if (!title) {
        return res.status(400).json({ error: 'Title is required' });
      }
  
      const newTask = new Task({ title, description });
      const savedTask = await newTask.save();
      res.status(201).json(savedTask);
    } catch (error) {
      console.error("Erreur lors de la création de la tâche :", error);
      res.status(500).json(error);
    }
  });

//Read All Tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.statis(500).json(err);
    }
});

// Read One Task
router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (err) {
        console.error('Erreur lors de la récupération de la tâche :', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//Update Task
router.put('/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedTask);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Delete Task
router.delete('/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json('Task deleted');
    } catch (error) {
        res.status(500).json(err);
    }
});

module.exports = router;