//newlogo 跳转麦考林 首页
	$(".h_left").click(function(){
		location.href="index.html";
	})
	//首页
	$(".first").click(function(){
		location.href="index.html";
	})
	//退出登录  跳到登录的页面
	$(".h_right li").eq(1).click(function(){
		location.href="user_account/user_login.html";
	})
	
	//健康养生
	$(".h_right li").eq(3).click(function(){
		location.href="index2.html"
	})
	//跳转到我的账户页面
	$(".h_right li").eq(2).click(function(){
		location.href="user_account/user_info.html";
	})
	//跳转到购物车
	$(".l_last img").eq(0).click(function(){
		location.href="mkl/shop_car.html";
	})
	
	
	//商品的详情
	$(function(){
		var str =location.href;
		var arr=str.split("?")[1].split("&");
		var id = arr[0].split("=")[1];
		var num = arr[1].split("=")[1]
		console.log(num);
		$.ajax({
			type:"get",
			url:"http://127.0.0.1/zjm/shop_page.json",
			success:function(res){
				var st = "";
				for(var i in res ){
					if(id==res[i].id){
						st=`<div id="box">
								<div id="bigImgs">
									<img src="images/${res[i].sr}" />
								</div>
								<div id="samllImgs">
									<img src="images/${res[i].src}" />
									<div id="layer"></div>
		    						<div id="mask" style="background: url('images/${res[i].src}');"></div>  
								</div>
								<ul id="buttom">
									<img src="images/${res[i].src}" />
								</ul>
							</div>
							<div id="box_right">
								<ul>
									<li class="dis">${res[i].dis}</li>
									<li class="br">
										<span class="brand">品牌:维您</span>
										<span class="ID">商品编号:${res[i].num}</span>
									</li>
									<li class="money"><span>￥</span>${res[i].price}</li>
									<li class="jifen"><span>超值换：300积分+1.00</span><a href="#" class="dh">去兑换商品</a></li>
									<li class="addnum">数量：<span class="add_up">-</span><span class="add_count">1</span><span class="add_up">+</span></li>
									<li class="addcar"><button >加入购物车</button><a class="sc">  添加收藏</a></li>
									<li class="partner">
										<b id="b1"></b>
										<b id="b2"></b>
										<b id="b3"></b>
										<b id="b4"></b>
										<b id="b5"></b>
										<b id="b6"></b>
									</li>
								</ul>
							</div>`;
						
					}
				}
				$(".top").html(st);
				
				//放大镜效果
	$("#samllImgs").mouseenter(function(){
		$("#bigImgs").css("display","block");
		$("#layer").css("display","block");
		$("#mask").css("display","block");
		
		$("#bigImgs").animate({
			width:280,
			height:278,
			top:50,
			left:400
		},1000)
	})
	$("#samllImgs").mouseleave(function(){
		$("#bigImgs").css("display","none");
		$("#layer").css("display","none");
		$("#mask").css("display","none");
		
		$("#bigImgs").animate({
			width:0,
			height:0,
			left:100
		},500)
	})
	
	$("#samllImgs").mousemove(function(e){
		var e= e||event;
		var disx =e.pageX-$("#box").offset().left-$("#mask").width()/2;
		var disy = e.pageY-$("#box").offset().top-$("#mask").height()/2;
		var maxX= $("#box").width()-$("#mask").width();
		var maxY = $("#samllImgs").height()-$("#mask").height();
		disx=disx<0?0:(disx>maxX?maxX:disx);
		disy=disy<0?0:(disy>maxY?maxY:disy);
		
		$("#mask").css({"left":disx+"px","top":disy+"px"})
		$("#mask").css({"background-position-x":-disx+"px","background-position-y":-disy+"px"})
		
		
		var bigImgLeft = disx*$("#bigImgs img").width()/$("#samllImgs img").width();
		var bigImgTop = disy*$("#bigImgs img").height()/$("#samllImgs img").height();
		$("#bigImgs img").css({"left":-bigImgLeft,"top":-bigImgTop});
	})
	
	
	//兑换商品
	$(".dh").click(function(){
		location.href="index2.html";
	})
	//商品的数量
	var count =1;		
	$(".add_up").click(function(){
		var sing = $(this).html();
		if(sing=="-"&&count==1){
			$(".add_count").html(count);
			return;
		}else{
			sing=="+"?count++:count--;
			$(".add_count").html(count);
		}
	})
	
	
	//加入购物车
	$(".car button").click(function(){
		alert("成功加入购物车");
	})
	//加入收藏
	$(".sc").click(function(){
		$(this).css("background-position-y","-20px")
	})
	
	//合作伙伴
	$(".partner").on("mouseenter","b",function(){
		$(this).animate({
			backgroundPositionY:-25
		},100)
		//$(this).css("background-position-y","-25px")
	}).on("mouseleave","b",function(){
		$(this).animate({
			backgroundPositionY:0
		},100)
	})
			}
		})
		
	})
	
	
	
	$(".center ul").on("mouseenter","li",function(){
		index=$(this).index();
		$(this).addClass("shoopli")	
				.siblings().removeClass("shoopli")
		$(".center_left_img").eq(index)
							 .css("display","block")
							 .siblings().css("display","none")
							
	})
	