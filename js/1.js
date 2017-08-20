//1.引入框架
var express=require('express');
var static=require('express-static');
//2.创建服务器
var server=express();
//3.设置监听
server.listen(1234);
//设置中间件
server.get('/get',function(request,respones){
	//request 前端的请求，前端的东西
	//respones 后台给前端返回的
	respones.send(123);
});
server.use(static('www'));
