const mysql = require('mysql');

const db = mysql.createConnection({
	host: 'localhost',
	user: 'user'
	password: 'password',
	database: 'mapdb'
});

db.connect(function(err){
	if (err){
		throw err;
	}
	console.log("Connected to MySQL");
});
