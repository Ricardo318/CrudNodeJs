const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'registro_db'
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+error);
        return
    }
    console.log('┬íConectado a la BD MySQL!');
})

module.exports = conexion;