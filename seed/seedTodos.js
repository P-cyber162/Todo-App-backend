const fs = require('fs');
const Todo = require('../models/todoModel');

const seedTodos = async () => {
    try{
        const tasks = JSON.parse(fs.readFileSync('./data/todo.json', 'utf-8'));
        await Todo.deleteMany();

        await Todo.insertMany(tasks);
        console.log('Seeding Completed 👍');
    }catch(err){
        console.log('Seeding failed 😢: ', err.message);
    }
};

module.exports = seedTodos;