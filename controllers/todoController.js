const fs = require('fs');
const Todo =  require('../models/todoModel');

const tasks = JSON.parse(fs.readFileSync('./data/todo.json', 'utf-8'));

exports.getAllTasks = async (req, res) => {
    try{
        const tasks = await Todo.find();
        res.status(200).json({
        status: 'success',
        data: {
            tasks
        }
    });
    }catch(err) {
        res.status(500).json({
            status: 'fail',
            message: 'Server Error'
        });
    }
    
};

exports.getTask = async (req, res) => {
    try{
        const task = Todo.findById(req.params.id);
    if(!task) {
        res.status(404).json({
        status: 'fail',
        message: 'Task not found'
    })
    }
        res.status(200).json({
        status: 'success',
        data: {
            task
        }
    });
    }catch(err) {
        res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    
}

exports.createTask = async (req, res) => {
    try{
        const newtask = await Todo.create(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            newtask
        }
    })
    }catch (err){
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
};

exports.updateTask = async (req, res) => {
    try{
        const task = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if(!task){
            res.status(404).json({
                status: 'fail',
                message: 'Task not found'
            })
        }
            res.status(200).json({
                status: 'success',
                data: {
                    task
                }
            })
        
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

exports.deleteTask = async (req, res) => {
    try{
        const task = await Todo.findByIdAndDelete(req.params.id);
        if(!task){
            res.status(404).json({
                status: 'fail',
                message: 'Task not found'
            })
        }
        res.status(204).json({
            status: 'success',
            data: null
             
        })
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}