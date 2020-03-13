const mysql = require('mysql');
const connection = mysql.createConnection({
  
 host     : 'localhost',
  user     : 'root',
  password : 'Ja122189!!',
  port : '3306',
  database :  'mydb'

});



connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports=connection;