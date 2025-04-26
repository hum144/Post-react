import Post from '../models/post.model.js'
import { QueryTypes } from 'sequelize';

//Controlador para la creacion, obtencion y eliminacion de posts


//Metodod para crear posts, necesita el nombre y la descripcion a traves de app.get
//Si no se le pasa el nombre o la descripcion, devuelve un mensaje de error 
export const createPost = async (pos) => {
    try {
        const { name, description } = pos;
        if (!name) {
            console.log('El nombre es requerido')
            return false
        }
        if (!description) {
            console.log('La descripcion es requerida')
            return false
        }
        const newPos = await Post.create({ name, description });
        console.log(`Post ${newPos.name} creado con exito`)
        return newPos;

    } catch (error) {
        console.log(error)
    }
}

//Metodo para obtener todos los posts, devuelve un array con todos los posts
//Si no hay posts, devuelve un mensaje de error
export const findAllPost = async () => {
    try {
        const AllPost = await Post.findAll({ raw: true })
        if (AllPost.length === 0) {
            console.log('No hay posts')
            return false
        }
        console.log('Posts encontrados con exito')
        return AllPost
    } catch (error) {
        console.log(error)
    }
}

//Metodo para eliminar un post, necesita el id del post a eliminar a traves de app.get
//Si no se le pasa el id, devuelve un mensaje de error
export const deletePost= async (id)=>{
    try{
        if(!id){
            console.log('El id es requerido')
            return false
        }
        const findPost = await Post.findByPk(id);
        if(!findPost){
            console.log('No existe el post')
            return false
        }else{
            await Post.destroy({where:{id}})
            console.log('Post eliminado con exito')
            return true
        }
    }catch(error){
        console.log(error)
        return false
    }
}


export default { findAllPost, createPost, deletePost }