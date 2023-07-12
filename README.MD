<img align="right" src="https://github.com/ada-school/module-template/blob/main/ada.png">

## TENER EN CUENTA QUE SON METODOS CRUD

* create - POST
* Read -   GET
* Updata - PUT
* Delete - DELETE

* GET: Estoy comnicandome con la intecion de obtener informacion
/*no tienen Body
 Elenvio de la ingformacion se realiza atravez de la url
 Path Params: Para indicar un recurso especifico
 Query Params: para indicar un recurso en especifico 
 acciones de filtrado
/users                 o           /user/id

# POS -> Estoy realizando na solicitud para insercion de datos en la BD
data: Body
{
    key:value,
    name: nombre
}

# PUT -> Realizar cambios en registros ya existentes el la base dedatos
actualiza la informacion 
Le puede realizar una solicitud y la cago con una data: body
 data: Body

 # DELETE
 A data viaja atravez de la url
 ejemplo
 /user/id

/users?filter=activos == envio informacion para poder filtrarlos en el codigo
## METODOS DE ENRUTAMIENTO EN EXPRESS

* Express proporciona métodos de enrutamiento correspondientes a los principales métodos
 HTTP, como GET, POST, PUT, DELETE, entre otros. Estos métodos de enrutamiento se utilizan para configurar cómo se manejan las solicitudes entrantes para rutas específicas en tu aplicación Express.

Aquí hay una lista de los métodos de enrutamiento principales en Express y sus correspondientes
 métodos HTTP:

app.get(path, callback): Configura una ruta para manejar solicitudes HTTP GET.
app.post(path, callback): Configura una ruta para manejar solicitudes HTTP POST.
app.put(path, callback): Configura una ruta para manejar solicitudes HTTP PUT.
app.delete(path, callback): Configura una ruta para manejar solicitudes HTTP DELETE.
app.patch(path, callback): Configura una ruta para manejar solicitudes HTTP PATCH.
app.head(path, callback): Configura una ruta para manejar solicitudes HTTP HEAD.
app.options(path, callback): Configura una ruta para manejar solicitudes HTTP OPTIONS.
Donde path es la URL o el patrón de URL de la ruta y callback es la función que se ejecutará 
cuando se reciba una solicitud en esa ruta. La función de devolución de llamada toma 
dos parámetros: req (objeto de solicitud) y res (objeto de respuesta), y se utiliza para realizar
 la lógica del manejo de la solicitud y enviar la respuesta al cliente.

Es importante tener en cuenta que Express también proporciona métodos de enrutamiento adicionales,
como app.all() para manejar todos los métodos de solicitud y app.use() para aplicar middleware a 
una ruta o a toda la aplicación. Estos métodos ofrecen flexibilidad adicional para personalizar el
manejo de las solicitudes en tu aplicación Express.