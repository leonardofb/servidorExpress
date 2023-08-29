// list-edit-router.js
const express = require('express');
const listEditRouter = express.Router();
const taskController = require('./taskController');
const validateTaskMiddleware = require('./validateTaskMiddleware');
const  validateRouteMiddleware  = require('./validateRouteMiddleware');


 

// Middleware para validar las solicitudes POST y PUT
// Ruta para crear una nueva tarea
listEditRouter.post('/', validateTaskMiddleware.validateTaskData, (req, res) => {
  const newTask = req.body;
  taskController.addTask(newTask);
  res.status(200).json({ message: 'Tarea creada exitosamente.', newTask });
  console.log(newTask);
});

// Ruta para actualizar una tarea por su ID
listEditRouter.put('/:id',validateTaskMiddleware.validateTaskData, (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;

  const tarea = taskController.getTaskById(taskId);

  if (tarea) {
    taskController.updateTask(taskId, updatedTask);
    res.json({ message: `Tarea con ID ${taskId} modificada.` });
  } else {
    res.json({ message: `Tarea con ID ${taskId} NO ENCONTRADA` });
  }
});


// Ruta para eliminar una tarea por su ID
listEditRouter.delete('/:id', (req, res) => {
  const taskId = req.params.id;
  const tarea = taskController.getTaskById(taskId);
console.log("Tarea a emininar",tarea);
  if (tarea) {
    taskController.deleteTask(taskId);
    res.json({ message: `Tarea con ID ${taskId} eliminada.` });
  } else {
    res.json({ message: `Tarea con ID ${taskId} NO ENCONTRADA PARA ELIMINARLA` });
  }
});


module.exports = listEditRouter;
