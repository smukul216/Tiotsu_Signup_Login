
var express=require('express');
var app=express();
var connection=require('config.js');
var authenticate=function(req,res){
    var email=req.email;
var password=req.password;
			app.get('/api/authenticate',authenticate);}
			
			
			//Authenticate the user
	var call_3=	CALL select_data(email,password);
		 connection.query(call_3,function(err,result){
			  if (error) {
            console.log('email/password do not match');
            
      }else{
        if(results.length >0){
            if(password==results[0].password)
   console.log('successfully authenticated');	