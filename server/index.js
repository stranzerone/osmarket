const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory storage for tasks
let tasks = [];
let currentId = 1;

// Retrieve a list of all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Retrieve a specific task by ID
app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('Task not found');
  res.json(task);
});

// Create a new task
app.post('/tasks', (req, res) => {
  const task = {
    id: currentId++,
    title: req.body.title,
    completed: req.body.completed || false
  };
  tasks.push(task);
  res.status(201).json(task);
});

// Update an existing task by ID
app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('Task not found');
  
  task.title = req.body.title !== undefined ? req.body.title : task.title;
  task.completed = req.body.completed !== undefined ? req.body.completed : task.completed;

  res.json(task);
});

// Delete a task by ID
app.delete('/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (taskIndex === -1) return res.status(404).send('Task not found');
  
  const deletedTask = tasks.splice(taskIndex, 1);
  res.json(deletedTask[0]);
});

// Start the server
app.listen(port, () => {
  console.log(`Task manager API is running on http://localhost:${port}`);
});
