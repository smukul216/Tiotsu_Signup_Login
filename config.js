var mysql= require('mysql');
var pool= mysql.createPool({
host : 'localhost',
user : 'root',
password: '',
database: 'test'
});


pool.getConnection(function(err, connection){  
if(err)
	console.log('errror connnecting');
else
console.log('connected');}

CREATE PROCEDURE Table_create(table_name){
	As
	begin
	CREATE TABLE table_name
	@name varchar(20),
	@password varchar(10),
	@email varchar(20)
end};

CREATE PROCEDURE insert_data(req.name,req.password,req.email){
	@name varchar(20),
	@password varchar(10),
	@email varchar(20)
	
	As
	begin
	INSERT INTO table_name(name,password,email) VALUES(@name,@password,@email)
end};



CREATE PROCEDURE select_data(email,password){
	@email varchar(20),
	@password varchar(10),
	
	
	As
	begin
	SELECT* FROM table_name WHERE {(email=req.email)&(password=req.password)}
end};