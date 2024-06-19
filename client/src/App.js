import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('All');

    const fetchTasks = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/tasks');
            setTasks(res.data);
        } catch (err) {
            console.error('Error fetching tasks:', err);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const addTask = async (task) => {
        try {
            const res = await axios.post('http://localhost:5000/api/tasks', task);
            setTasks([...tasks, res.data]);
        } catch (err) {
            console.error('Error adding task:', err);
        }
    };

    const updateTask = async (taskId, updatedFields) => {
        try {
            const response = await axios.patch(`http://localhost:5000/api/tasks/${taskId}`, updatedFields);
            console.log('Task updated successfully:', response.data);

            // Update tasks in the frontend state
            const updatedTaskIndex = tasks.findIndex(task => task._id === taskId);
            if (updatedTaskIndex !== -1) {
                const updatedTasks = [...tasks];
                updatedTasks[updatedTaskIndex] = response.data;
                setTasks(updatedTasks);
            }

            // Handle any success actions (if needed)
        } catch (error) {
            console.error('Error updating task:', error);
            // Handle error state or display error message
        }
    };


    const deleteTask = async (id) => {
        try {
            console.log(`Attempting to delete task with ID: ${id}`);
            await axios.delete(`http://localhost:5000/api/tasks/${id}`);
            setTasks(tasks.filter(task => task._id !== id));
        } catch (err) {
            console.error('Error deleting task:', err);
        }
    };

    const filteredTasks = tasks.filter(task => filter === 'All' || task.status === filter);

    return (
        <div className="App">
            <h1>Task Management</h1>
            <TaskForm addTask={addTask} />
            <div className="filter">
                <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                    <option value="All">All</option>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <TaskList tasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask} />
        </div>
    );
};

export default App;
