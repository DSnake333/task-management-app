import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('To Do');
    const [dueDate, setDueDate] = useState('');
    const [error, setError] = useState({ title: false, description: false });

    const handleSubmit = (e) => {
        e.preventDefault();

        const isTitleEmpty = title.trim() === '';
        const isDescriptionEmpty = description.trim() === '';

        if (isTitleEmpty || isDescriptionEmpty) {
            setError({
                title: isTitleEmpty,
                description: isDescriptionEmpty
            });
            return;
        }

        const task = { title, description, status, dueDate: dueDate || null };
        addTask(task);
        setTitle('');
        setDescription('');
        setStatus('To Do');
        setDueDate('');
        setError({ title: false, description: false });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ borderColor: error.title ? 'red' : 'initial' }}
                />
                {error.title && <span style={{ color: 'red' }}>Please fill out this field.</span>}
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ borderColor: error.description ? 'red' : 'initial' }}
                />
                {error.description && <span style={{ color: 'red' }}>Please fill out this field.</span>}
            </div>
            <div>
                <label htmlFor="status">Status</label>
                <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <div>
                <label htmlFor="dueDate">Due Date</label>
                <input
                    id="dueDate"
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
            </div>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
