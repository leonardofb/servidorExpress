// listViewRouter.js
const express = require('express');
const listViewRouter = express.Router();
const taskController = require('./taskController');

// Ruta para listar tareas completadas
listViewRouter.get('/completed', (req, res) => {
  const completedTasks = taskController.getCompletedTasks();
  res.json(completedTasks);
});

// Ruta para listar tareas incompletas
listViewRouter.get('/incomplete', (req, res) => {
  const incompleteTasks = taskController.getIncompleteTasks();
  res.json(incompleteTasks);
});


module.exports = listViewRouter;
