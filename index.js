//Cree mi primer servidor remoto
const express = require('express');
const app = express();
const port = 8080;

// Aqui se crea la Lista de tareas con su id
const tasks = [
                {
                    "id":"123456",
                    "isCompleted":false,
                    "description":"Walk the dog",
                },
            
             ];

// creo la ruta para obtener la lista de tareas
app.get('/tasks', (req, res) => {
    res.status(200).send(tasks) // enviado como Objeto teniendo un mayo control sobre la respuesta con estatus 200
    //res.json(tasks);   // enviado en formato Json automaticamente
 
});

// Inicio el servidor por el puerto disponible 8080
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});