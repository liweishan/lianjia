//1.引入框架
var express=require('express');
var static=require('express-static');
//2.创建服务器
var server=express();
//3.设置监听
server.listen(2345);
//4.设置静态访问权限
server.use(static('www'));
//5.设置中间件
server.get('/get',function(req,res){
	//req 前端的请求，前端的东西
	//res 后台给前端返回的
	res.send('{"error":0,"arr":[{"title":"解码中国版营改增:良性税制激活中国经济新动能","link":"http://news.xinhuanet.com/politics/2017-06/16/c_1121159080.htm"}]}')
});
