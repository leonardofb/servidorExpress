// taskController.js
const uuid = require('uuid');
const taskDatabase = {}; // Objeto para almacenar las tareas

function addTask(task) {
 /* const taskId = uuid.v4(); // Generar un ID único para la tarea utilizando uuid se debe instalar (npm install uuid) no olvidar
  task.id = taskId;
  taskDatabase[taskId] = task;*/

  taskDatabase[task.id] = task;
  console.log('Nueva tarea agregada desde taskcontroler:', task); // Imprimir la nueva tarea en la consola
}
function getTaskById(taskId) {
  return taskDatabase[taskId];
}

function getAllTasks() {
  return Object.values(taskDatabase);
}

function getCompletedTasks() {
  return Object.values(taskDatabase).filter(task => task.isCompleted); // esta funcio me retorna las tareas True
}

function getIncompleteTasks() {
  return Object.values(taskDatabase).filter(task => !task.isCompleted); // Este me tetorna las tareas NO true
}

function deleteTask(taskId) {
  delete taskDatabase[taskId];
}

function updateTask(taskId, updatedTask) {
  taskDatabase[taskId] = updatedTask;
}


module.exports = {
  getTaskById,
  addTask,
  getAllTasks,
  getCompletedTasks,
  getIncompleteTasks,
  deleteTask,
  updateTask,
};
