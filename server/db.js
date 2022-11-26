const sql = require('mysql2/promise');

const conexion = sql.createPool({
    host: 'localhost',
    database: 'task_db',
    user: 'root',
    password: ''
});

/*
conexion.connect((error)=>{
    if(error) throw error;
    else console.log("Conection Successful BD");
});
conexion.end();

*/

module.exports = conexion;