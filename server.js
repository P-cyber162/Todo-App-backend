const express = require('express');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');
const seedTodos = require('./seed/seedTodos');

const app = express();
app.use(express.json());
app.use('/api/v1/tasks', todoRoutes);

const startServer = async() => {
    try {
    await connectDB();
    await seedTodos();
    const port = process.env.PORT || 3000;
    
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
    } catch(err) {
        console.log('ERROR ', err);
    }
};

startServer();

