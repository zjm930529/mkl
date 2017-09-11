//newlogo 跳转麦考林 首页
	$(".h_left").click(function(){
		location.href="index.html";
	})
	//首页
	$(".first").click(function(){
		history(0);
	})
	
	//健康养生
	$(".newMuen li").eq(3).click(function(){
		location.href="index2.html";	
	})
	
	//退出登录  跳到登录的页面
	$(".h_right li").eq(1).click(function(){
		location.href="user_account/user_login.html";
	})
	
	
	//跳转到我的账户页面
	$(".h_right li").eq(2).click(function(){
		location.href="user_account/user_info.html";
	})
	//跳转到购物车
	$(".l_last a img").eq(0).click(function(){
		location.href="mkl/shop_car.html";
	})