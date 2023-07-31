//app.js
// app.js
const express = require('express');
const app = express();
const port = 8080;
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');
const taskController = require('./taskController');

app.use(express.json());


app.use('/tasks', listViewRouter);

// Ruta para crear, eliminar y actualizar tareas
app.use('/tasks', listEditRouter);

// Ruta para obtener la lista de todas las tareas
app.get('/tasks', (req, res) => {
  const todasLasTareas = obtenerTodasLasTareas();
  res.json(todasLasTareas);
});

// Aqui se muestra la Lista de tareas con su id
function obtenerTodasLasTareas() {
  return Object.values(taskController.getAllTasks());
}

// Inicio el servidor por el puerto disponible 8080
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto http://localhost:${port}`);
});
