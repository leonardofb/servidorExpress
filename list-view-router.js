// listViewRouter.js
const express = require('express');
const listViewRouter = express.Router();
const taskController = require('./taskController');
const { validateRoute } = require('./validateRouteMiddleware');
const { checkEmptyObjectMiddleware } = require('./validateRouteMiddleware');

//listViewRouter.use(checkEmptyObjectMiddleware);
 
// Middleware para validar la ruta
//listViewRouter.use(validateRoute); // me presenta error cuando hago PUT

// Ruta para listar tareas completadas
listViewRouter.get('/completed', (req, res) => {
  const completedTasks = taskController.getCompletedTasks();
  res.json(completedTasks);
});

// Ruta para listar tareas incompletas
listViewRouter.get('/incomplete',(req, res) => {
  const incompleteTasks = taskController.getIncompleteTasks();
  res.json(incompleteTasks);
});

module.exports = listViewRouter;

