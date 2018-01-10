var express=require('express');
var app=express()
var connection=require('config.js');
var register=function(req,res){
var users={
 "name":req.name,
        "password":req.password,
		"email":req.email
      
    }
app.get('/api/register',register.users);}


			
			//Create a table 
 var call_1= CALL Table_create('USERS');
   connection.query(call_1,function(err,result){
	   if(err)
		   console.log('error message');
	   else 
		   console.log(result[]);}





	//insert a new user
	var call_2=	CALL insert_data(users);
		 connection.query(call_2,function(err,result){
	   if(err)
		   console.log('error in registration process');
	   else 
            console.log('User succesfully registered');
					   console.log(result[]);
   }