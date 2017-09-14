



	//左侧的目录
	$("#hide_list").mouseenter(function(){//显示
		$(".ProductMuen").css("display","block");
	})
	
	$("#hide_list").mouseleave(function(){//隐藏
		$(".ProductMuen").css("display","none")
	})
	
	/*$("#hide_list").prev().click(function(){//跳转主页面 index.html
		location.href="../index.html";
	})
	$("#hide_list").next().next().click(function(){//跳转健康养生index2.html
		location.href="../index2.html";
	})*/


	
	//右侧的目录
	$("#kefu").click(function(){
		//客服交流的页面
	})
	//客服的电话
	$(".kefutel1").mouseenter(function(){
		$(".kefutel2").animate({
			left:-200,
			opacity:1
		},800,function(){
				$(this).animate({
					left:-230
				},300)
			})
	}).mouseleave(function(){
		$(".kefutel2").animate({
			left:-300,
			opacity:0
		},800)
	})
	
	//回到顶部
	$(".right_top").click(function(){
		$("body,html").animate({scrollTop:0},1000)
	})
	//.right_top 的 显示和隐藏
	$(window).scroll(function(){//滚动条滚走 
		var sTop=$(document).scrollTop();
		var h=200;
		if(sTop>h){
			$(".right_top").animate({
				opacity:1
			},30)
		}else if(sTop<h){
			$(".right_top").animate({
				opacity:0
			},30)
		}
		
	})
	
	/*//newlogo 跳转麦考林 首页
	$(".h_left").click(function(){
		location.href="../index.html";
	})*/
	
	//nav  搜索栏
	$(".h_right li").eq(0).find("a").click(function(){
		$("nav").css("display","block");
		
	})
	//让nav消失
	$("nav").find("a").click(function(){
		$("nav").css("display","none");
	})
	
	/*//退出登录  跳到登录的页面
	$(".h_right li").eq(1).click(function(){
		location.href="../user_account/user_login.html";
	})
	//跳转到我的账户页面
	$(".h_right li").eq(2).click(function(){
		location.href="../user_account/user_info.html";
	})
	//跳转到购物车
	$(".l_last img").eq(0).click(function(){
		location.href="../mkl/shop_car.html"
	})*/