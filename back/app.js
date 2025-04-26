import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import postController from './controllers/post.controller.js'

import db from './config/db.config.js'

//Archivo principal para iniciar el servidor y su conexion con la base de datos


// Prepara la variable de entorno necesaria
config()

// Configuracion de API
const app = express()

const PORT = process.env.PORT || 3000

const main = async () => {
    try {
        await db.authenticate()
        await db.sync({})
    } catch (error) {
        console.log("Error de conexion: ", error)
    }
}
//Inicio de API
main();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs')


// Configuracion de rutas

// Rutas para el controlador de posts

//Ruta para obtener todos los posts
app.get('/getPost', async(req, res) => {
    res.send(await postController.findAllPost())
})
//Ruta para eliminar un post por id
// Se espera que el id del post a eliminar sea enviado como query param
// Ejemplo: /deletePost/1
app.delete('/deletePost/:id', async(req, res) => {
    const { id } = req.params
    const result = await postController.deletePost(id)
    if (result) {
        res.send('Post eliminado con exito')
    } else {
        res.send('No se pudo eliminar el post')
    }
})
//Ruta para crear un post
// Se espera que el nombre y la descripcion sean enviados como query params
app.get('/createPost', async(req, res) => {
    const { name, description } = req.query
    const result = await postController.createPost({ name, description })
    if (result) {
        res.send('Post creado con exito')
    } else {
        res.send('No se pudo crear el post')
    }
})

//Listener del servidor
// Se espera que el puerto sea enviado como variable de entorno o por defecto 3000
app.listen(PORT, () => {
    try {
        console.log(`Servidor iniciado en http://localhost:${PORT}`)
    } catch (error) {
        console.log(`error: `, error)
    }
})

