Todo App Backend API

todo-backend/
├── config/
│   └── db.js               # MongoDB connection
├── controllers/
│   └── todoController.js   # Task CRUD operations
├── data/
│   └── todo.json           # Sample tasks for seeding
├── models/
│   └── todoModel.js        # Mongoose schema and model
├── routes/
│   └── todoRoutes.js       # Task routes
├── seed/
│   └── seedTodos.js        # DB seeding script
├── .env                    # Environment variables (DB string, PORT)
├── .gitignore              # Ignored files
└── server.js               # Entry point / server setup


A simple RESTful Todo API built with Node.js, Express, and MongoDB (Mongoose).
Supports full CRUD operations and includes a seed script to populate the database from JSON.

Features

Create, read, update, and delete tasks (CRUD)

Task validation using Mongoose schema

Automatic MongoDB collection creation

JSON-based seeding for initial data

Async DB connection ensures server starts only after MongoDB is ready

RESTful routes ready for Postman testing

Technologies

Node.js

Express.js

MongoDB

Mongoose

dotenv

