const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const mongoose = require('mongoose');

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new task
router.post('/', async (req, res) => {
    const { title, description, status, dueDate } = req.body;

    try {
        const newTask = new Task({
            title,
            description,
            status,
            dueDate, // Ensure dueDate is included
        });

        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Example in routes/tasks.js
router.patch('/:id', async (req, res) => {
    const taskId = req.params.id;
    const { title, description, status, dueDate } = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            {
                title,
                description,
                status,
                dueDate, // Ensure dueDate is included
            },
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Delete a task

router.delete('/:id', async (req, res) => {
    try {
        const taskId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(taskId)) {
            console.log(`Invalid ID format: ${taskId}`);
            return res.status(400).json({ message: 'Invalid ID format' });
        }

        console.log(`Deleting task with ID: ${taskId}`);
        const task = await Task.findById(taskId);
        if (task == null) {
            console.log(`Task with ID ${taskId} not found`);
            return res.status(404).json({ message: 'Task not found' });
        }

        // Corrected line to delete the task
        await Task.deleteOne({ _id: taskId });

        res.json({ message: 'Task deleted' });
    } catch (err) {
        console.error(`Error deleting task with ID ${req.params.id}:`, err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
});


module.exports = router;
