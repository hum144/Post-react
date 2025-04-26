import {  DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';


//Modelo de la base de datos para los posts
const Post = sequelize.define(
  'posts',
  {
    // Atributos del modelo post
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description:{
        type:DataTypes.TEXT,
        allowNull: true,
    },
    
  },
  {
    // Otras opciones del modelo
    createdAt: false,
    updatedAt: false,
  },
);

export default Post