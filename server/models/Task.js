const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['To Do', 'In Progress', 'Done'],
        default: 'To Do',
    },
    dueDate: {
        type: Date, // Ensure type is Date for dueDate
        required: false, // Not required
    },
});

module.exports = mongoose.model('Task', taskSchema);
