import { createConnection } from 'mysql';
import config from "../config";
import rx from 'rx';
let connection = createConnection(config);
let product = class{
    constructor(ProductName="", ProductId = 0){
        this.ProductName=ProductName
        this.ProductId = ProductId
    }
    static getAllProducts(){
        let sql = `CALL sp_GetAllProducts`;
		connection.query(sql,(error, results, _fields) => {
		  error?console.error(error.message):callback(results[0][0]);
		});
    }
}