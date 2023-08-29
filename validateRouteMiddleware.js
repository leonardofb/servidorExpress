// validateRouteMiddleware.js
function validateRoute(req, res, next) {
  if (req.path !== '/completed' && req.path !== '/incomplete') {
    return res.status(400).json({ error: 'La ruta debe ser "/completed" o "/incomplete".' });
  }

  // Si la ruta es correcta, continuar con la siguiente función
  next();
}

function checkEmptyObjectMiddleware(req, res, next) {
  const tasks = req.tasks || {}; // Si req.tasks es undefined o null, se establece un objeto vacío
  if (Object.keys(tasks).length === 0) {
    return res.status(404).json({ message: 'No hay tareas disponibles.' });
  }
  next();
}

module.exports = {
  validateRoute,
  checkEmptyObjectMiddleware,
};
