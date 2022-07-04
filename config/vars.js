const path = require('path');
const dotenv = require('dotenv');

console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV.trim() == 'prod'){
    dotenv.config({
        path: path.resolve(__dirname, '../../test/.env') ///${process.env.NODE_ENV}   Users/ismael/Documents/proyectos/NodeJS/Diplomado-Backend-4/clase6/src/shared/config
    });

  }else{
    dotenv.config({
      path: path.resolve(__dirname, `../../test/.dev.env`) 
    });
    console.log(path.resolve(__dirname, '../../test/.dev.env'))

}

const vars = {
  APP_ENV: {
    HOST: process.env.APP_HOST,
    PORT: process.env.APP_PORT,
    },
  DATABASE_ENV: {
    HOST: process.env.DB_HOST,
    DATABASE: process.env.DB_DATABASE,
    PORT: process.env.DB_PORT,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    TABLE: process.env.DB_TABLE,
  },
};



  
module.exports = vars;