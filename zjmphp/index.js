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
	
	//banner的轮播
	//定时器
	$(function(){   
		var timer = null;
		var index=0;
		for(var i=0;i<10;i++){
			var oDiv = document.createElement("div");
			oDiv.className="smallbox";
			oDiv.style.backgroundPositionY=(-i*40)+"px";
			oDiv.style.top= i*40 + "px";
			$(".box1").append($(oDiv));
		}
		timer = setInterval(AutoPlay,3000);
		function AutoPlay(){
			index++;
			if(index==3){
				index=0;
			}
				$("#btn span").eq(index).addClass("btn")	
								.siblings().removeClass("btn");
								
				$(".smallbox").css( "background-image","url(images/banner"+(index+1)+".jpg)" );
				$(".smallbox").css("z-index",10);
				for(var j=0;j<9;j++){
					$(".smallbox").eq(j).delay(j*50).animate({
						
						height:40,
						left:0,
						top:j*40,
						opacity:1
					},1000)
				}
				$(".smallbox").eq(9).delay(450).animate({
					height:40,
					left:0,
					top:j*40,
					opacity:1
				},1000,function(){
						$(".box1 img").css("z-index",1);
						$(".box1 img").eq(index).css("z-index",10);
						$(".smallbox").css({
							"zIndex":0,							
							"height":0,
							"left":0,
							"top":"-40",
							"opacity":0
						})
				})
				
		}
		
		//鼠标移上去 停止定时器
		$(".banner").mouseover(function(){
			$(".qh").animate({opacity:1},500)
			clearInterval(timer);
		}).mouseleave(function(){
			$(".qh").animate({opacity:0},500)
			timer = setInterval(AutoPlay,2000);
		})
		
		//切换键 鼠标移上 移下
		//左键切换
		$(".qhleft").hover(function(){
			$(this).addClass("bjl");
		},function(){
			$(this).removeClass("bjl");
		}).click(function(){
			clearInterval(timer);
			index--;
			if(index==-1){
				index=2;
			}
			$("#btn span").eq(index).addClass("btn")	
								.siblings().removeClass("btn")
		})
		//右键切换
		$(".qhright").hover(function(){
			$(this).addClass("bjy");
		},function(){
			$(this).removeClass("bjy");
		}).click(function(){
			clearInterval(timer);
			index++;
			if(index==3){
				index=0;
			}
			$("#btn span").eq(index).addClass("btn")	
								.siblings().removeClass("btn")
		})
		
		
		
	})
		
	
	
	//图片动态效果
	$(".beauty .row").mouseenter(function(){
		$(this).find(".image").animate({
			left:-5,
		},100);
		
		$(this).find(".discrtion").css("background","#eeafce");
		$(this).find(".san").css("border-left-color","#eeafce");
	}).mouseleave(function(){
		$(this).find(".image").animate({
			left:0
		},100)
		$(this).find(".discrtion").css("background","#fff");
		$(this).find(".san").css("border-left-color","#fff");
	})
	//箭头的
	$(".beauty .row").mouseenter(function(){
		$(this).find(".leftmove").animate({
			left:5,
		},100);
		
		$(this).find(".discrtion").css("background","#eeafce");
		$(this).find(".sancpy").css("border-right-color","#eeafce");
	}).mouseleave(function(){
		$(this).find(".leftmove").animate({
			left:0
		},100)
		$(this).find(".discrtion").css("background","#fff");
		$(this).find(".sancpy").css("border-right-color","#fff");
	})
	
	
	
	$(".health .row").mouseenter(function(){
		$(this).find(".image").animate({
			left:-5,
		},100);
		$(this).find(".discrtion").css("background","#97c86c");
		$(this).find(".san").css("border-left-color","#97c86c");
		
	}).mouseleave(function(){
		$(this).find(".image").animate({
			left:0
		},100)
		$(this).find(".discrtion").css("background","#fff");
		$(this).find(".san").css("border-left-color","#fff");
		
	})
	
	$(".health .row").mouseenter(function(){
		$(this).find(".leftmove").animate({
			left:5,
		},100);
		$(this).find(".discrtion").css("background","#97c86c");
		$(this).find(".sancpy").css("border-right-color","#97c86c");
		
	}).mouseleave(function(){
		$(this).find(".leftmove").animate({
			left:0
		},100)
		$(this).find(".discrtion").css("background","#fff");
		$(this).find(".sancpy").css("border-right-color","#fff");
	})
	
	
	
	
	$(".life .row").mouseenter(function(){
		$(this).find(".image").animate({
			left:-5,
		},100);
		$(this).find(".discrtion").css("background","#98e1f0");
		$(this).find(".san").css("border-left-color","#98e1f0");
		
	}).mouseleave(function(){
		$(this).find(".image").animate({
			left:0
		},100)
		$(this).find(".discrtion").css("background","#fff");
		$(this).find(".san").css("border-left-color","#fff");
		
	})
	
	$(".life .row").mouseenter(function(){
		$(this).find(".leftmove").animate({
			left:5,
		},100);
		$(this).find(".discrtion").css("background","#98e1f0");
		$(this).find(".sancpy").css("border-right-color","#98e1f0");
	}).mouseleave(function(){
		$(this).find(".leftmove").animate({
			left:0
		},100)
		$(this).find(".discrtion").css("background","#fff");
		$(this).find(".sancpy").css("border-right-color","#fff");
	})
	
	
	
	

	$(".top_left1").mouseenter(function(){
		$(this).find(".image").animate({
			left:-5,
		},100);
		//$(this).find(".discrtion").css("background","#98e1f0");
	}).mouseleave(function(){
		$(this).find(".image").animate({
			left:5
		},100)
		//$(this).find(".discrtion").css("background","#fff");
		
	})
	
	$(".you").mouseenter(function(){
			$(this).find(".image").animate({
				left:5,
			},100);
		}).mouseleave(function(){
			$(this).find(".image").animate({
				left:0
			},100)
			
	})
		
	//点击商品出现详情的效果
	$(".mc").click(function(){
		$("#mc").css("display","block");
		$(this).find(".hidden").css("z-index","1003")
		$(this).find(".hidden").animate({
			width:381,
			opacity:1,
			
		},500,function(){
			$(this).animate({
				height:689
			
			},1000)
		})
	})
	
	//商品详情的消失
	$(".del").click(function(e){
		var e=e||event;
		e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
		
		$(this).parent().parent().animate({
			height:277
			
		},500,function(){
			$(this).animate({
				width:0,
				opacity:0,
				height:0
			},500,function(){
				$("#mc").css("display","none");
			})
		});
	})
	
