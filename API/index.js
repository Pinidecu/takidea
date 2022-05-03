// VAMOS A necesitar nodemon, express, sequelize, pg, morgan
//npm i express sequelize pg morgan

const Express = require ('express')

const app = Express()

// Setear nuestros headers


// Setear rutas
app.get('/', (req, res)=>{
    res.send('Hola Mundo!')
})

//Middlewar de control de errores

// Server.listen

app.listen(3000, () =>{
    console.log('El servidor esta escuchando el puerto 3000')
})