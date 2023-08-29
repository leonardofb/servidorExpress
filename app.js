// app.js

const express = require('express');
const jwt = require('jsonwebtoken'); //autorizaciones y autenticaciones
require("dotenv").config(); //para servir variables de entorno
// Importar el componente LoginForm.js
const app = express();
const port = 8080;
const path = require('path'); //manejo de Rutas //absolutas y relativas.

//es un middleware en Express que se utiliza para poder enviar datos desde el formulario HTML /POST.
app.use(express.urlencoded({extended:false})); /// con esto ya podemos hacer el parcin de los parametros

const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');
const taskController = require('./taskController');
const  validateRouteMiddleware  = require('./validateRouteMiddleware');
app.use(express.json());

const users = [
  { email: "planeaweb@gmail.com", name: "admin", role: "admin", password: "123"},
  { email: "user@example.com", name: "user", role: "user",password: "123"},
];
//se debe instalar (npm install ejs)
app.set('view engine','ejs');// en Express se utiliza para configurar el motor de vistas que se utilizará para renderizar las plantillas del lado del servidor y generar el HTML que se enviará al cliente.

app.use(express.static("public"));
//ESTA ES LA MEJOR MANERA QUE SUGIERE EXPRESS PARA EL MANEJO DE ARCHIVOS ESTATICOS
app.use("/recursos",express.static(__dirname+"/public"));  // Gracias a esta linea podemos referencia todo en la careta /recursos
//ESTA ES LA MEJOR MANERA QUE SUGIERE EXPRESS PARA EL MANEJO DE ARCHIVOS ESTATICOS
console.log(__dirname); // me muestra la carpea raiz del proyecto
console.log(__filename);// me muestra el archivo raiz del proyecto

app.get('/', (req, res) => {
    res.render('index.ejs');
  });


app.get('/login', (req, res) => {
  //res.render('form'); 
  console.log(__dirname);
  app.use(express.static(path.join(__dirname, 'my-frontend-app', 'build')));   //resolve absuluta y join relativa
  res.sendFile(path.join(__dirname, 'my-frontend-app', 'build', 'index.html'));    
  });

  app.post('/auth', (req, res) => {
    const {username,password}=req.body;
// consultar BBDD para constatar que existe el username y el password
const userVerify = users.find(userVerify => userVerify.email === username && userVerify.password == password);
console.log(userVerify);
if (!userVerify) {
  console.log("Invalid user name or password");    
  return res.status(401).json({ error: "Invalid user name or password" });
}   
 
    const accessToken = generateAccesstoken(userVerify);
    
          res.header("authorization",accessToken).json({
              message: "usuario autenticado",
              username, 
              password, //temp
              token: accessToken //temp
              
          })
    console.log("Token creado",accessToken)
    });
    
    function generateAccesstoken(userVerify){
    return jwt.sign(userVerify,process.env.SECRET,{expiresIn:"5m"}) //expira a los 5 minutos
    //return jwt.sign(userVerify,process.env.SECRET) //CREAR TOKEN SIN TIEMPO DE EXPIRACION
    }
    
    function validateToken(req, res, next) {
      const accessToken = req.headers["authorization"] || req.query.accessToken;
      console.log("Token por verificar:",accessToken)
      if (!accessToken) {
        res.send("Acceso Denegado");
      } else {
        jwt.verify(accessToken, process.env.SECRET, (err, user) => {
          if (err) {
            res.send("Acceso denegado, token expirado o incorrecto");
          } else {
            // Si Token válido, permite el acceso al siguiente middleware o controlador
            req.user=user; // gracias a esto puedo ver el usuario dentro del array de tuist
          next();
          }
        });
      }
    }
// Middleware para validar los métodos HTTP permitidos
function validateAllowedMethods(req, res, next) {
  const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];
  const method = req.method.toUpperCase();

  if (!allowedMethods.includes(method)) {
    return res.status(405).json({ error: 'Método HTTP no permitido.' });
  }

  next();
}

// Aplicar el middleware a nivel de aplicación
app.use(validateAllowedMethods);
// Ruta para obtener la lista de todas las tareas

app.get('/tasks',validateToken,(req, res) => {
  const todasLasTareas = obtenerTodasLasTareas();
  res.json(todasLasTareas);
});

app.use('/tasks',validateToken, listViewRouter);

// Ruta para crear, eliminar y actualizar tareas
app.use('/tasks',validateToken, listEditRouter);



// Aqui se muestra la Lista de tareas con su id
function obtenerTodasLasTareas() {
  return Object.values(taskController.getAllTasks());
}

// Inicio el servidor por el puerto disponible 8080
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto http://localhost:${port}`);
});
