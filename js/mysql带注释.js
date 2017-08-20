//引入框架
var express = require('express');
//用这个框架 和后台取得连接
var static =  require('express-static');
var mysql = require('mysql');
//创建服务器
var server = express();
//设置监听
server.listen(4587);
//设置静态文件访问的路径   所有的前端的东西都放在 ggg里面
//把前端的zuce.html denlu.html文件全部放到 ggg 里面才能识别
//use : 代表全部
//static : 相当于静态文件
server.use(static('ggg'));
//链接数据库设置
//   createConnection 意思创建连接 
//    host 代表路径  
//    user : root 用户名
//    database  : 文件名
    var db = mysql.createConnection({host:'localhost',user:'root',password:'',database:'2017-6-19'});
    
//设置中间件
//注册 / </get>地址
server.get('/get',function(request,respones){
//	request  前端的请求
//  respones 后台给前端返回的
  // 前端返回的值用 json来接收
   var  json = request.query;
   
   var sql = 'SELECT * FROM buiderfor WHERE username ="'+json.username+'"'; //查找有没有username这个东西
   var sql2 = 'INSERT INTO buiderfor VALUES(0,"'+json.username+'",'+json.password+')';//查找有没有 那个东西
   //执行db.query代表执行sql语句
// err后台给我的 查找结果 <状态>  如果是null 说明没有错误 
//  data 返回的是一个大json
   db.query(sql,function(err,data){
// 	这个funtion有两个返回值  err 代表错误  data 代表后台返回来的东西 
   	   console.log(err,data);
   	   if(data[0]){
//下面的判断代表 如果后台在数据库里查找到了数据 就给前台反馈一个 想注册没门
   	   	  respones.send('想注册没门')
   	   }else{
// 	   	下面的判断代表 如果后台没有查找到数据 就吧数据添加到数据库
   	   	db.query(sql2,function(err,data){
   	   		if(!err){
// 	   		如果err 没有错误就给前端返回一个 send()
   	   			respones.send('注册成功  ╮(╯▽╰)╭,没办法还是你厉害 ')
   	   		}
   	   	})
   	   }
   })
});

//登录

server.get('/login',function(request,respones){
	 var  json = request.query;
	 // 前端返回的值用 json来接收
	 var  sql = 'SELECT * FROM buiderfor WHERE username = "'+json.username+'"';
	 //查找有没有username这个东西
	 //执行sql语句
	 db.query(sql,function(err,data){
	 	if(!err){
	 		if(data[0]){
//下面的判断代表 如果后台在数据库里查找到了数据 就给前台反馈一个 想注册没门
//	 			data[0] 代表 返回值是个大json 取里面的第一个元素

	 			if(data[0].password==json.password){
//	 			后台返回的json里的 password 和我前台传输的password一样 代表登录成功
	 				respones.send('登录成功')
	 			}else{
//	 		   反之后台返回的json里的 password 和我前台传输的password不一样 代表登录失败
	 				respones.send('用户名或密码错误')
	 			}
	 		}else{
//	 			当(data[0].password==json.password)不成立时,就执行以下代码
	 			respones.send('此用户不存在')
	 		}
	 	}
	 })
})