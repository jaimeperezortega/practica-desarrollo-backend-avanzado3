# EXPRESS

## npx express-generator --ejs nodepop 

(Para crear una aplicación de nodejs que utiliza express en la carpeta donde queramos crear nuestra api)

 ## npm install

(Para instalar dentro de nuestra aplicación todas las dependencias incluidas en nuestro package.json. Lee el archivo package.json e instala todas las librerías indicadas en ese archivo en nuestra aplicación)

## node ./bin/www

(Para ejecutar nuestra aplicación)

 ## npm run start

  (Para arrancar también nuestra aplicación express sin necesidad de utilizar node ./bin/www tal y como aparece en nuestro package.json. De esta forma se ejectuta el script start sin necesidad de poner todo el texto).

 ## npm i nodemon

  (Para instalar nodemon en el proyecto concreto en el que estemos trabajando y no tener que andar arrancando el servidor cada vez que metamos un cambio sino que se actualiza cada vez que guardamos)

  ## Variables de entorno de desarrollo, pruebas y producción

  Podemos establecer variables para que nuestro servidor sepa que está en desarrollo, pruebas o en producción. Es importante hacer esta distincion. Lo establecemos en el script de dev del package.json

  Copy .env.example to .env and review the config

### npm install cross-env

Permite poner distintas variables de entorno a lo largo de distintos sistema operativos. Traducirá nuestra variable de entorno al sistema operativo que estemos usando. No hay problema si usas windows, mac, linux....

### npm install express-validator

Para instalar la librería de validaciones express-validator


### ./bin/mongod --dbpath 
Comando para arrancar mongoDB en la ruta que nosotros especifiquemos de nuestro ordenador. En nuestro caso la carpeta que he creado. En nuestro caso, nuestra ruta es: ./bin/mongod --dbpath ./data-practica-nodepop/db

### ./bin/mongo

En otra ventana del terminal ponemos este comando para arrancar

### show dbs;

Nos enseña que base de datos tenemos. Por defecto te saca admin, config y local.

### use nodepop (Para crear la base de datos "nodepop")

Para crear una base de datos en mongon DB no hace falta decirle que la cree. Con que intentemos meter datos en ella, la va a crear y meter directamente allí.

### show collections

Para mostrar las colecciones que hay dentro de una base de datos en concreto. Las colecciones erían como las tablas en mysql

### db.mascarillas.insert({type: "FFP2", stock: 15, protection: 98})

Comando para crear un nuevo documento en la colección (recien creada) mascarillas

### db.mascarillas.find()

Para mostrar los documentos contenidos dentro de nuestra colección de mascarillas

### db.mascarillas.find()

Para mostrar los documentos contenidos dentro de nuestra colección de mascarillas

Cada documento creado se le añade automáticamente la propiedad _id que es un identificador único para diferenciar un documento de otro

Cada documento puede tener un esquema distinto (propiedades distintas)

### db.mascarillas.find().pretty()

Para ver los documentos de esa colección más ordenados

### db.mascarillas.update({"_id" : ObjectId("601c399b972e71229b10bb93")}, {})

Para cambiar algún parámetro de un documento. Suele utilizarse el identificador único para localizar el que quieres modificar. Le pasamos otro objeto con los cambios que queremos aplicar. Si solo pasamos un parámetro sustituiremos todo lo que tenía por el nuevo objeto que le pasamos. Para hacer una actualización parcial y no sustituir su contenido completo hay que hacerlo así:

db.mascarillas.update({"_id" : ObjectId("601c399b972e71229b10bb93")}, {$set:{age: "cambiado"}})

# MONGOOSE

Es un ODM (Object Document Mapper) . Es una herramienta que nos permite persistir objetos en MongoDB, recuperarlos y mantener esquemas de estos facilmente. Nos aporta más comodidad a la hora de guardar los datos y más comodidad a la hora de recuperarlos

## npm install mongoose

Para instalar mongoose

Una vez instalado nos vamos a crear un conector a Mongoose. Creamos una carpeta que llamamos lib (como nuestra propia libreria) y dentro de lib creamos un fichero que se llamará connectMongoose.js


## API METHODS

### GET api/productos

Conseguir una lista de productos

### POST api/productos

Para crear un nuevo producto

### PUT api/productos:id(body)

Para actualizar un producto ya existente


<---------------------------->

## PRACTICA DE AVANZADO:

### NGROK

Protocolo https NGROK

Comando para arrancar NGROK en un puerto determinado: ./ngrok http 3000

### CLUSTER

Podemos arrancar varias instancias de nodeapi y que las peticiones van a llegar a un módulo cluster que luego va a redigirir las peticiones a cualquiera de las instancias que haya arrancadas. Cada proceso va a utiliozar un hilo distinto. El módulo cluster va recibiendo peticiones y las va repartiendo para dar el mejor rendimiento posible en función de los recursos de mi máquina.

Todas las instancias comparten el mismo puerto.

Podemos ver cada uno de los workers con su pid en el monitor de actividfad del mac

### SECRETS AND CONFIG

Es necesario habilitar un sistema de control de acceso a la BBDD. Para ello nos creamos un fichero de configuración en el que establecemos unas credenciales iniciales para poder entrar a la BBDD. Es un fichero externo a nuestro código que no está expuesta en nuestro código.

Usamos el módulo de terceros dotenv. 

Se instala con npm install dotenv

Creo un archivo.env con el comando: MONGODB_CONNECTION_STR = mongodb://localhost/nodepop


Al principio de nuestra app tenemos que poner : require('dotenv).config()

En connectMongoose en lugar de harcodear la URL de la BBDD pongo la variable de entorno:

mongoose.connect(process.env.MONGODB_CONNECTION_STR, { 
    useNewUrlParser: true,
    useUnifiedTopology: true ,
    useCreateIndex: true 
});


### INTERNACIONALIZACION

Permitimos que un único sitio web sirva sus contenidos en diferentes idiomas y formatos adaptados al cliente. 

--> Internacionalizacion: Preparar el software para que sea localizable
---> Localizacion: escribir la traduccion y los formatos locales (trabajo de traductores)

i18n = acronimo de internacionalizacion

Inatalar i18n en node: npm install i18n
Inicializar i18n con: i18n.configure({...})
Crear archivos de mensajes en carpetas locales
En nuestro código, usar la función i18n._ _()


### Database Initialization

npm run init-db
