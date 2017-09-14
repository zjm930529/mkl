
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
		location.href="user_info.html"
	})
	//跳转到购物车
	$(".l_last a img").eq(0).click(function(){
		location.href="../mkl/shop_car.html";
	})
	
	//修改基本资料
	$(".myinfo").click(function(){
		location.href="user_info.html";
	})
	
	//修改密码
	$(".setpwd").click(function(){
		location.reload();
	})
	//我的订单
	$(".mylist").click(function(){
		$(".hidden_list").toggleClass("aa")
	})
	
	//当前的密码
	var flagpwd = "";
	$("#oldpwd").blur(function(){
		var pp=$(this).val();
		var pwd = getCookie("upwd").upwd;
		if(pp==pwd){
			flagpwd=true;
		}else{
			flagpwd=false;
			$(this).parent().next().css("display","block");
		}
	})
	//获取焦点时
	/*$("#oldpwd").focus(function(){
		$(this).val(" ");
		$(this).parent().next().css("display","none");
	})*/
	
	//新的密码
	var flagnew = "";
	$("#newpwd").blur(function(){
		var str=$(this).val();
		var reg=/\w{5,10}/;
		if(reg.test(str)){
			flagnew=true;
		}else{
			flagnew=false;
			$(this).parent().next().css("display","block");
		}
	})
	
	/*//获取焦点时
	$("#newpwd").focus(function(){
		$(this).val(" ");
		$(this).parent().next().css("display","none");
	})*/
	
	//确认密码
	var flagcypwd = "";
	$("#cynewpwd").blur(function(){
		if($(this).val()==$("#newpwd").val()){
			flagcypwd=true;
		}else{
			flagcypwd=false;
			$(this).parent().next().css("display","block");
		}
	})
	//重新获取焦点时
	/*$("#cynewpwd").focus(function(){
		$(this).val(" ");
		$(this).parent().next().css("display","none");
	})*/
	
//提交验证 修改密码
	function subSave(){
		if(flagpwd && flagnew && flagcypwd){
			var pwd =$("#newpwd").val();
			setCookie("upwd",JSON.stringify({"upwd":pwd}))
		}else{
			return false;
		}
	}
