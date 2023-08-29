# ¿Qué es mi producto y para qué sirve?
Este producto es una aplicación web basada en Express.js que proporciona funcionalidades para la gestión de tareas. Los usuarios pueden utilizarla para administrar su lista de tareas, tanto completadas como incompletas, de manera eficiente y sencilla.

# ¿Cuáles son las funcionalidades más importantes y por qué los usuarios las usarían?
Es la implementacion de un servidor Express que proporciona una API para gestionar una lista de tareas. Esta API sigue los estándares de RESTful (Representational State Transfer), que es una arquitectura para diseñar servicios web que se basan en recursos y acciones.

# principales características y funcionalidades del código:

Mi aplicacion app.js. 
En esta aplicacion Estoy haciendo un servidor web usando una cosa llamada Express, que es súper útil para manejar aplicaciones web y APIs. Imagina que quiero tener una lista de tareas en mi app, entonces estoy montando todo este rollo para eso.

Primero, me aseguro de tener todas mis herramientas listas: Express y otras librerias como jsonwebtoken para hacer autenticación. También configuro el puerto donde voy a escuchar las peticiones (lo puse en el 8080).

Luego, le digo a Express que me muestre mis archivos estáticos, como imágenes o estilos. Además, configuré una carpeta llamada "public" para tener esos recursos accesibles desde la web.

Aquí viene lo bueno: configuré un sistema de autenticación con un par de rutas. Los usuarios pueden enviar su nombre de usuario y contraseña, y yo les doy un código especial (un token) para que puedan acceder a las partes protegidas de mi app.

También tengo unos métodos que revisan si los tokens son válidos y qué métodos HTTP pueden usar (tipo GET, POST, etc.). Esto es importante para mantener todo seguro y organizado.

Y para asegurarme de tener todas mis configuraciones seguras, uso este truco llamado (dotenv) que me permite cargar variables de entorno desde un archivo .env. Es como si tuviera un lugar secreto donde guardo cosas importantes, como claves o contraseñas
Claro no falta la lista de tareas! Armé unas rutas para crear, leer, actualizar y borrar tareas. Y claro, solo dejo que gente autenticada haga estas cosas, no cualquiera.

Y para darle una mejor imagen visual configuré unas vistas usando EJS, que es un motor de plantillas. Así, cuando alguien entra en ciertas rutas, les muestro una página chévere con la lista de tareas y eso.

Para cerrar, inicio el servidor en el puerto 8080 y ¡listo! Mi app está en marcha, gestionando tareas y manteniéndolas seguras con autenticación. 
¡Espero les guste!
Leonardo fierro
Cohorte-18 - Protalento