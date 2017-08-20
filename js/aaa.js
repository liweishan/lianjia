var express=require('express');
var static=require('express-static');
var mysql=require('mysql');
var server=express();
server.listen(1234);
server.use(static('www'));
var db = mysql.createConnection({host:'localhost',user:'root',password:'',database:'2016-06-19'});
server.get('/add',function(req,res){
	var json=req.query;
	var sql='SELECT * FROM user WHERE username="'+json.username+'"';
	var sql2='INSERT INTO user VALUES(0,"'+json.username+'","'+json.password+'")';
	db.query(sql,function(err,data){
		console.log(err,data);
        if(data[0]){
        	//有数据
        	res.send('用户名已存在')
        }else{
        	//没数据
        	db.query(sql2,function (err,data){
        		if(!err){
        			res.send('注册成功！')
        		}
        	})
        }
	})
})
server.get('/login',function(req,res){
	var json=req.query;
	var sql='SELECT * FROM user WHERE username="'+json.username+'"';
	//执行sql语句
	db.query(sql,function(err,data){
		if(!err){
			if(data[0]){
				if(data[0].password==json.password){
					res.send('登录成功')
				}else{
					res.send('用户名或密码错误')
				}
			}else{
				res.send('此用户没有注册')
			}
		}
	})
})
