/*//左侧的目录
	$("#hide_list").mouseenter(function(){//显示
		$(".ProductMuen").css("display","block");
	})
	
	$("#hide_list").mouseleave(function(){//隐藏
		$(".ProductMuen").css("display","none")
	})*/
	


//newlogo 跳转麦考林 首页
	$(".h_left").click(function(){
		location.href="../index.html";
	})
	//首页
	$(".first").click(function(){
		location.href="../index.html";
	})
	
	//健康养生
	$(".newMuen li").eq(3).click(function(){
		location.href="../index2.html";	
	})
	
	//退出登录  跳到登录的页面
	$(".h_right li").eq(1).click(function(){
		location.href="user_login.html";
	})
	
	
	//跳转到我的账户页面
	$(".h_right li").eq(2).click(function(){
		location.reload();
	})
	//跳转到购物车
	$(".l_last a img").eq(0).click(function(){
		location.href="../mkl/shop_car.html";
	})
	
	//修改基本资料
	$(".myinfo").click(function(){
		location.reload();
	})
	
	//修改密码
	$(".setpwd").click(function(){
		location.href="pwd_set.html"
	})
	//我的订单
	$(".mylist").click(function(){
		$(".hidden_list").toggleClass("aa")
	})


	//邮箱的验证
	$("#email").blur(function(){
			var str = $(this).val();
			var reg=/^\d@[a-z]{2}.com$/;
			if(!reg.test(str)){
				$(".war").eq(0).css("display","block")
			}
		})
	//手机号验证
		//var flagTel="";
		$("#telphoe").blur(function(){
			var str = $(this).val();
			var reg=/^1(3|5|8)\d{9}$/;
			if(!reg.test(str)){
				$(".war").eq(1).css("display","block")
			}
		})
