// app.js
const express = require('express');
const app = express();
const port = 8080;

const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

app.use(express.json());

// Ruta para obtener la lista de todas las tareas
app.get('/tasks', (req, res) => {
  // Aquí se podría realizar alguna lógica adicional, si es necesario
  // antes de enviar la lista de todas las tareas
  const todasLasTareas = obtenerTodasLasTareas();
  res.json(todasLasTareas);
});

// Usar el enrutador de la lista de tareas completed e incomplete (listViewRouter.js)
app.use('/tasks/completed', listViewRouter);

// Usar el enrutador para crear, eliminar y actualizar tareas (listEditRouter.js)
app.use('/tasks/incomplete', listEditRouter);

// Función de ejemplo para obtener todas las tareas
function obtenerTodasLasTareas() {
  // Aquí implementa la lógica para obtener todas las tareas
  // de la base de datos o del objeto taskDatabase si lo prefieres
  // Por ejemplo, si tienes un objeto taskDatabase que contiene todas las tareas:
  // return Object.values(taskDatabase);
  // Si utilizas una base de datos, aquí deberías hacer una consulta a la base de datos
  // y devolver las tareas correspondientes.
  return [
    {
      "id": "1",
      "isCompleted": false,
      "description": "Walk the dog",
    },
    {
      "id": "2",
      "isCompleted": false,
      "description": "bañarme",
    },
    // Agrega más tareas si es necesario
  ];
}

// Iniciar el servidor por el puerto disponible 8080
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto http://localhost:${port}`);
});
