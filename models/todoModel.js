const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A task must have a name'], 
    },
    description: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        required: [true, 'A status is required'],
        enum: ['pending','in-progress', 'completed']
    },
    priority: {
        type: String,
        required: [true, 'A priority tag must be specified'],
        enum: ['low', 'medium', 'high']
    },
    startTime: {
        type: Date,
        required: [true, 'A start time is required']
    },
    endTime: {
        type: Date,
        required: [true, 'An end time is required']
    }
});

//CREATE A TASK MODULE
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
