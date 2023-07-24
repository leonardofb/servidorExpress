//list-view-router.js
const express = require('express');
const listViewRouter = express.Router();

// Ruta para listar tareas completed
listViewRouter.get('/completed', (req, res) => {
  // Aquí implementa la lógica para obtener las tareas completed
  // y envía la respuesta en formato JSON
  const tareascompleted = obtenerTareascompleted();
  res.json(tareascompleted);
});

// Ruta para listar tareas incomplete
listViewRouter.get('/incomplete', (req, res) => {
  // Aquí implementa la lógica para obtener las tareas incomplete
  // y envía la respuesta en formato JSON
  const tareasincomplete = obtenerTareasincomplete();
  res.json(tareasincomplete);
});

// Funciones de ejemplo para obtener tareas completed e incomplete
function obtenerTareascompleted() {
  return [
    { id: 1, nombre: 'Tarea 1', completada: true },
    { id: 2, nombre: 'Tarea 2', completada: true },
    // Agrega más tareas completadas si es necesario
  ];
}

function obtenerTareasincomplete() {
  return [
    { id: 3, nombre: 'Tarea 3', completada: false },
    { id: 4, nombre: 'Tarea 4', completada: false },
    // Agrega más tareas incomplete si es necesario
  ];
}

module.exports = listViewRouter;