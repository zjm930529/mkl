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
		location.href="../user_account/user_login.html";
	})
	/*//注册页面
	$(".h_right li").eq(2).click(function(){
		location.href="user_register.html";
	})*/
	
	//跳转到我的账户页面
	$(".h_right li").eq(2).click(function(){
		location.href="../user_account/user_info.html"
	})
	//跳转到购物车
	$(".l_last a img").eq(0).click(function(){
		location.href="shop_car.html";
	})
	
	//收货信息的验证
	//s收货人姓名 flagyb flagname
	var flagname="";
	$("#addr_name").blur(function(){
		var str = $(this).val();
		var reg = /[\u4e00-\u9fa5]{3,10}/;
		if(reg.test(str)){
			flagname=true;
		}else{
			flagname=false;
			$(this).parent().next().css("display","block");
		}
	})
	//邮编的验证
	var flagyb="";
	$("#addr_yb").blur(function(){
		var str = $(this).val();
		var reg = /[0-9]{6}/;
		if(reg.test(str)){
			flagyb=true;
		}else{
			flagyb=false;
			$(this).parent().next().css("display","block");
		}
	})
	//手机号码验证
	var flagtel1="";
	$("#addr_tel1").blur(function(){
		var str = $(this).val();
		var reg = /^1[3|5|8]\d{9}/;
		if(reg.test(str)){
			flagtel1=true;
		}else{
			flagtel1=false;
			$(this).parent().next().css("display","block");
		}
	})
	
	//固定电话的区号 和号码验证
	var flagtel21="";
	$("#addr_tel21").blur(function(){
		//alert()
		var str=$(this).val();
		var reg = /^\d{4}$/;
		if(reg.test(str)){
			flagtel21=true;
		}else{
			flagtel21=false;
			$(".info_tel23").css("display","block");
			
		}
	})
	
	var flagtel22="";
	$("#addr_tel22").blur(function(){
		var str=$(this).val();
		var reg = /[0-9]{7}/;
		if(reg.test(str)){
			flagtel22=true;
		}else{
			flagtel22=false;
			$(".info_tel23").css("display","block");
		}
	})
	
	function saveInfo(){//信息保存
		if(flagyb && flagname&& flagtel1&& flagtel21 && flagtel22){
			alert("地址保存成功");
		}else{
			alert("未保存成功");
		}
	}
	
	
	$(function(){
		var a=0;
		$(".money").each(function(i){//找到所有商品的价格 并相加
			console.log($(this).eq(i-1).find("span").html())
			a+=parseInt($(this).eq(i-1).find("span").html())
			console.log(a);
		})
		$(".jiesuan span").eq(0).find("span").html(a);//商品总金额
		var b = $(".jiesuan span").eq(0).find("span").html();
		$("#span3").html(b);//实付总金额
	})

	//提交订单
	$("#btn_tj").click(function(){
		location.href="03mkl.html";
	})
	