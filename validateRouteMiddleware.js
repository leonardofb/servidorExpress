// validateRouteMiddleware.js
function validateRoute(req, res, next) {
  console.log("probando puta ruta",req.path);
  if (req.path !== '/completed' && req.path !== '/incomplete' && req.path !== '/') {
    return res.status(400).json({ error: 'La ruta debe ser "/completed" o "/incomplete".' });
  }

  // Si la ruta es correcta, continuar con la siguiente función
  next();
}

module.exports = {
  validateRoute,
};

