const uuid = require('uuid');
const taskDatabase = {}; // Objeto para almacenar las tareas

function addTask(task) {
  taskDatabase[task.id] = task;
  console.log('Nueva tarea agregada desde taskController:', task); // Imprimir la nueva tarea en la consola
}

function getTaskById(taskId) {
  return taskDatabase[taskId];
}

function getAllTasks() {
  return Object.values(taskDatabase);
}

function getCompletedTasks() {
          return Object.values(taskDatabase).filter(task => task.isCompleted);
  }

function getIncompleteTasks() {
  return Object.values(taskDatabase).filter(task => !task.isCompleted);
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
  taskDatabase,
};
