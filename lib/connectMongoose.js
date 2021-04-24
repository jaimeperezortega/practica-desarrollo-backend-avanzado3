'use strict';

//Cargo la librería de Mongoose

const mongoose = require("mongoose");

//Si no conseguimos conectar con la base de datos pintamos el error de conexón y tiro mi aplicación. Mi api necesita estar conectado a la base de datos para trabajar. Si no consigue conectar, mi aplicación no sirve para nada y por tanto  si la base de datos no está disponible hacemos que caiga la aplicación

mongoose.connection.on("error", err =>{
    console.log("Error de conexión", err);
    process.exit(1);
});

//Si la conexión a nuestra base de datos sí es exitosa lanzamos un mensaje de éxito en la consola

mongoose.connection.once("open",()=>{
    console.log("Conectado a MongoDB en", mongoose.connection.name)
} );

//Nos conectamos a nuestra base de datos

mongoose.connect('mongodb://localhost/nodepop', {
    useNewUrlParser: true,
    useUnifiedTopology: true  
});

//Exportamos la propiedad de mongoose.connection

module.exports = mongoose.connection;

//Vamos a trasladar este módulo a app.js para que cuando nuestra app arranque se conecte a nuestra base de datos