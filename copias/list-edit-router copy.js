//list-edit-router.js
const express = require('express');
const listEditRouter = express.Router();
const taskController = require('./taskController');

// Ruta para crear una nueva tarea
listEditRouter.post('/', (req, res) => {
  const newTask = req.body;
  taskController.addTask(newTask); // Llama a la función addTask del taskController para guardar la nueva tarea
  res.status(201).json({ message: 'Tarea creada exitosamente.', newTask });
});

// Ruta para eliminar una tarea por su ID
listEditRouter.delete('/:id', (req, res) => {
  const taskId = req.params.id;
  taskController.deleteTask(taskId);
  res.json({ message: `Tarea con ID ${taskId} eliminada.` });
});

// Ruta para actualizar una tarea por su ID
listEditRouter.put('/:id', (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;
  taskController.updateTask(taskId, updatedTask);
  res.json({ message: `Tarea con ID ${taskId} actualizada.` });
});

module.exports = listEditRouter;

