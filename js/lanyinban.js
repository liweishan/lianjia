var express=require('express');
var static=require('express-static');
var mysql=require('mysql');
var server=express();
server.listen(1234);
server.use(static('www'));
var db=mysql.createConnection({host:'localhost',user:'root',password:'',database:'2017-06-19'});
server.get('/get',function(req,res){
	var json=req.query;
})
