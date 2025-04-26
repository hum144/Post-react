
import { Sequelize } from 'sequelize'
import {config} from 'dotenv'
config()
// Configuración de la base de datos
// Cambia estos valores según tu configuración en el archivo .env

const database = process.env.DB_NAME ;
const username = process.env.DB_USER ;
const password = process.env.DB_PASS ;
const host = process.env.HOST || 'localhost' ;


const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });


export default sequelize;