const { rejects } = require('assert');
const dbConn  = require('../loaders/db');

class User {
    /*
    constructor() {
    this.id = id,
    this.user = user,
    this.password = password,
    this.fullname = fullname,
    this.createdAt = new Date(),
    this.updatedAt = new Date()
    }
*/
    async getUserByParams(user,password) {
        return new Promise ((resolve,reject) => {
        dbConn.query('SELECT * FROM Users WHERE user=? and password=?',[user,password])
        .then(
            data => {
                console.log(data);
                resolve(data); 
              })
        })
    }



    }



module.exports = new User();