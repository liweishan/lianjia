$(function(){
//	滑动滚轮移动背景图片
	var oHead=$('header');
	$(window).bind("scroll", function(){
		var scrollT = $(this).scrollTop(); // 当前窗口的滚动距离
		oHead.css('backgroundPositionY',-scrollT *　0.1);	   	
	});
//	底部选项卡
	var aLi=$('.house_type_ul li');
	var aA=$('.house_type_ul li a');
	var aUl=$('.house_introduce ul');
	aLi.click(function(){
		aA.removeClass('active').eq($(this).index()).addClass('active');;
		aUl.hide().eq($(this).index()).show();
	})
//	鼠标移入图片上弹
	var　roomLi=$('#img_find_room ul li');
	var　roomImg=$('#img_find_room ul li a img');
	roomLi.hover(function(){
		roomImg.eq($(this).index()).css('marginTop',0);
	},function(){
		roomImg.css('marginTop','10px');
	})
})
