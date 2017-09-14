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
		//location.reload();
		history(0);
	})
	//跳转到我的账户页面
	$(".h_right li").eq(2).click(function(){
		location.href="user_account/user_info.html";
	})
	//跳转到购物车
	$(".l_last img").eq(0).click(function(){
		location.href="mkl/shop_car.html";
	})

	//更多、收起
	$(".more").click(function(){//更多
		$(this).css("display","none");
		$(".hide").css("display","block");
		$(".mod").css("display","none");
		$(".allmod").css("display","block");
	})
	$(".hide").click(function(){//收起
		$(this).css("display","none");
		$(".more").css("display","block");
		$(".allmod").css("display","none");
		$(".mod").css("display","block");
	})
	

var index=1;
var pageNum=16;
showDate();
function showDate(){
	ajaxGet("index2.json",fn);
	function fn(msg){
		var arr=JSON.parse(msg);
		var str="";
		for(var i=(index-1)*pageNum;i<index*pageNum;i++){
			if(i<arr.length){
				var ch =arr[i];	
				//此处应该有详情页的出现
				str+=`<li>
						<a href="http://127.0.0.1/zjm/shop_page.html?id=${ch.id}&num=${ch.num}">
						<img src="images/${arr[i].src}"/>
						<h3><a href="#">${arr[i].dis}</a></h3>
						<p><span>￥${arr[i].price}<span data-id=${ch.id} data-dis=${ch.dis} data-num=${ch.num} data-price=${ch.price} data-src=${ch.src}></span><button></button></span></p>
						</a>
					</li>`;
			}
		}
		$("#main").html(str)
		//获取总页数
		pageTotal=Math.floor(arr.length/pageNum);
		//重新生成页码
		var page="";
		for(var j=1;j<=pageTotal;j++){
			page+=`<div class="">${j}</div>`;
		}
		$("#page").html(page);
		$("#page").children().eq(index-1).addClass("active");
		
	}
}

//事件的委托实现商品加入购物车
 $(".shoplist").on("click","button",function(){
 	var arr =[];
 	var _json={
 		id:$(this).prev().data("id"),
 		dis:$(this).prev().data("dis"),
 		src:$(this).prev().data("src"),
 		num:$(this).prev().data("num"),
 		price:$(this).prev().data("price"),
 		count:1
 	};
 	var flag=true;
 	var shopCookie = getCookie("shoplist");
 	if(shopCookie.length!=0){
 		arr=shopCookie;
 		for(var i in arr){
 			if(_json.id==arr[i].id && _json.dis==arr[i].dis){
 				arr[i].count++;
 				flag=false;
 				break;
 			}
 		}
 	}
 	if(flag){
 		arr.push(_json)
 	}
 	setCookie("shoplist",JSON.stringify(arr));
 	var f=confirm("是否继续购买？")
 	if(!f){
 		location.href="shop_car.html";
 	}
 })


//操作页码
$("#page").click(function(e){
	var e=e||event;
	var target=e.target||e.srcElement;
	if(target.nodeName=="DIV"){
		//alert(parseInt(target.innerHTML))
		index=parseInt($(target).html());
		showDate();
	}
})

$("#next").click(function(){//下一页
	//console.log(index)
	if(index==pageTotal){
		alert("最后一页");
		index=pageTotal;
	}else{
		index++;
		showDate();
	}
})



