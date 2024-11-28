const express = requir('express');
const router = express.Router();
const res = require('express/lib/response');
const Task = require('../models/Task');

//Create Task
router.post('/', async (req, res) => {
    const newTask = new Task(req.body);
    try {
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (err) {
        res.status(500).json(err);
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

//Read One Tasks
router.get('/:id', async (req, res) => {
    try {
        const tasks = await Task.findById();
        res.status(200).json(tasks);
    } catch (err) {
        res.statis(500).json(err);
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