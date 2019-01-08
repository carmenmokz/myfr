var mysql = require('mysql');
var connection = mysql.createConnection({
	
	host: 'localhost',
	user: 'root',
	passowrd: 'chickenlittle',
	database: 'mydb' 

});

connection.query('SELECT * FROM Provincia', function(err,rows,field){
	if(!err){
	console.log(rows);
	}else{
	console.log(err);
	}
});
connection.end();

