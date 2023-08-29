// validateTaskMiddleware.js
const taskController = require('./taskController');

function validateTaskData(req, res, next) {
    const { id, title, description,isCompleted } = req.body;
  /*console.log(id);
  console.log(title);
  console.log(description);
*/
    if (!id || !title || !description  || isCompleted === undefined) {
      return res.status(400).json({ error: 'El cuerpo de la solicitud debe contener un id, título, una descripción y el estado true o false.' });
    }
   
    // Validación del ID para verificar si ya existe una tarea con el mismo ID
  const isExistingTask = taskController.getAllTasks().some(task => task.id === id);
  console.log("SI YA EXISTE UN IDE EL VALOR SERA TRUE",isExistingTask);
  if (isExistingTask) {
    return res.status(409).json({ error: 'Ya existe una tarea con el mismo ID.' });
  }
    
    if (typeof title !== 'string' || title.trim().length < 3) {
      return res.status(400).json({ error: 'El título debe contener al menos tres letras válidas.' });
    }
  
    // Aquí puedes agregar más validaciones específicas según tus necesidades
  
    next();
  }
  
  module.exports = {
    validateTaskData,
 };
  