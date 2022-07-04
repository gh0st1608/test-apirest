const mysql = require('mysql');
const vars = require('../config/vars');

class Database {
	constructor() {
		this.connection = mysql.createConnection({
            host: vars.DATABASE_ENV.HOST,
            database: vars.DATABASE_ENV.DATABASE,
            user: vars.DATABASE_ENV.USER,
            password: vars.DATABASE_ENV.PASSWORD,
            port: vars.DATABASE_ENV.PORT,
			multipleStatements: true
		});	
	}

	query(sql, args) {
		return new Promise((resolve, reject) => {
			this.connection.query(sql, args, (err, rows) => {
				if (err) return reject(err);
				resolve(rows);
			});
		});
	}
	close() {
		return new Promise((resolve, reject) => {
			this.connection.end((err) => {
				if (err) return reject(err);
				resolve();
			});
		});
    }
}

module.exports = new Database();