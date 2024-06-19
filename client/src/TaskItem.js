import React, { useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [editedDescription, setEditedDescription] = useState(task.description);
    const [editedDueDate, setEditedDueDate] = useState(task.dueDate ? task.dueDate.split('T')[0] : '');

    const handleUpdate = () => {
        updateTask(task._id, { title: editedTitle, description: editedDescription, dueDate: editedDueDate });
        setIsEditing(false);
    };

    return (
        <div className="task-item">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                    />
                    <input
                        type="date"
                        value={editedDueDate}
                        onChange={(e) => setEditedDueDate(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            ) : (
                <div>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>Due Date: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date'}</p>
                    <select
                        value={task.status}
                        onChange={(e) => updateTask(task._id, { status: e.target.value })}
                    >
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => deleteTask(task._id)}>Delete</button>
                </div>
            )}
        </div>
    );
};


export default TaskItem;
