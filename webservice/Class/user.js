var mysql= require('mysql');
var config = require( "../config");
const { Observable } =  require("rxjs")
let newconfig = new config()
let connection = mysql.createConnection(newconfig);
let user = class {
	constructor(Email = "") {
		this.Email = Email
	}
	
	getUserDetailbyEmail(obj) {
		return new Observable(subscriber =>{
			let sql = `CALL sp_GetUser(?, ?)`;
			this.Email = obj.Email
			connection.query(sql, [this.Email, obj.Password], (error, results, _fields) => {
				error?subscriber.error(error.message):subscriber.next(results[0][0]);
				subscriber.complete();
			});
		});
	}
	createUserDetail(obj){
		return new Observable(subscriber =>{
		let params = Object.values(obj)
		let i = params.length
		while(params.length < 9){
			params[i] = ""
			i++
		}
		let sql = `CALL sp_CreateUser(?, ?, ?, ?, ?, ?, ?,?, ?);`
		connection.query(sql, params, (error, results, _fields) => {
			console.log(results)
			error? subscriber.error(error):subscriber.next(results[0][0]);
			subscriber.complete();
		  });
		});
	}
}
module.exports = user