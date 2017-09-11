//newlogo 跳转麦考林 首页
	$(".h_left").click(function(){
		location.href="index.html";
	})
	//首页
	$(".first").click(function(){
		location.href="index.html";
	})
	
	//健康养生
	$(".newMuen li").eq(3).click(function(){
		location.href="index2.html";	
	})
	
	//退出登录  跳到登录的页面
	$(".h_right li").eq(1).click(function(){
		location.href="user_account/user_login.html";
	})
	/*//注册页面
	$(".h_right li").eq(2).click(function(){
		location.href="user_register.html";
	})*/
	
	//跳转到我的账户页面
	$(".h_right li").eq(2).click(function(){
		location.href="user_account/user_info.html"
	})
	//跳转到购物车
	$(".l_last a img").eq(0).click(function(){
		location.reload();
	})
	
	//购物车
	$(function(){
		var arr = getCookie("shoplist");
		//console.log(arr)
		var html="";
		for(var i in arr){
			var shopinfo = arr[i];
			//console.log(shopinfo.num);
			html+=`<tr class="car_item">
					<td class="selector">
						<input type="checkbox" class="ch" />
					</td>
					<td >
						<div class="car_item_name">
							<a href="#"><img src="images/${shopinfo.src}"/></a>
							<div class="car_item_name_info">
								<a href="#" class="car_item_name_infox">${shopinfo.dis}</a>
								<a href="#" class="car_item_name_infoid">商品编号：${shopinfo.num}</a>
							</div>
						</div>
					</td>
					<td ><div class="car_item_price"><p>${shopinfo.price}</p></div></td>
					<td ><span class="count" data-id="${shopinfo.id}" data-dis="${shopinfo.dis}"data-num="${shopinfo.num}"data-price="${shopinfo.price}" data-count="${shopinfo.count}">1</span> </td>
					<td >
						<div class="car_item_num">
							<span class="numadd">-</span>
							<span id="car_item_num" >${shopinfo.count}</span>
							<span class="numadd">+</span>
						</div>
					</td>
					<td ><div class="car_item_total"><p>${shopinfo.count*shopinfo.price}</p></div></td>
					<td><div class="car_item_option"><a href="javascript:;" class="shop_del">删除</a></div></td>
					
				</tr>`
		}
		
		$("tbody").append(html);
		
		$("#qx_box").click(function(){
			$(".ch").prop("checked",$(this).prop("checked"));
			jisuan();
		})
		
		//删除商品
		$(".shop_del").click(function(){
			var f=confirm("是否要删除商品？")
			if(f){
				var id= $(this).parent().parent().parent()
								.find(".count").data("id");
				var pname=$(this).parent().parent().parent()
								.find(".count").data("dis");
				for(var i in arr){
					if(id==arr[i].id&&pname==arr[i].dis){
						arr.splice(i,1 );
						setCookie("shoplist",JSON.stringify(arr));
						$(this).parent().parent().parent().remove();
					}
				}				
			}else{
				location.reload();
			}
							
		})
		
		//控制商品的数量
		$(".numadd").click(function(){
			var sing = $(this).html();
			var id=$(this).parent().parent().prev().find(".count").data("id");
			//console.log(id);
			var pname=$(this).parent().parent().prev().find(".count").data("dis");
			var count = $(this).parent().find("#car_item_num").html();
			//var num =0;
			if( sing=="-"&& count==1){
				return;
			}
			for(var i in arr){
				if(id==arr[i].id&&pname==arr[i].dis){
					sing=="+"?arr[i].count++:arr[i].count--;
					setCookie("shoplist",JSON.stringify(arr));
					$(this).parent().find("#car_item_num").html(arr[i].count);
					$(this).parent()
							.parent()
							.next()
							.find(".car_item_total").html(arr[i].count*arr[i].price);
					//num += arr[i].count;
				}
			}
			
		})
		
		//继续购物
		$(".go_shop").click(function(){
			location.href="index2.html";
		})
		//清空选中商品
		$("#shop_clear").click(function(){
			var cc =$(".ch")
			if(cc.prop("checked")){
				var id= $(".ch").parent().parent()
								.find(".count").data("id");
				var pname=$(".ch").parent().parent()
								.find(".count").data("dis");
								console.log(pname)
				for(var i in arr){
					if(id==arr[i].id&&pname==arr[i].dis){
						arr.splice(i,1 );
						setCookie("shoplist",JSON.stringify(arr));
						$(".ch").parent().parent().remove();
						location.reload();
					}
				}	
			}
			
		})
		
		
		//立即结算
		$(".moneyToatl").click(function(){
			if($(".numToatl").html()==0&&$(".moneyToatl").prev().find("span").html()==0){
				alert("还没选择商品")
			}else{
				
				alert($(".numToatl").html()+"个商品"+$(".moneyToatl").prev().find("span").html()+"元")
			}
		})
		
		//选中的商品数量和金额
		$(".ch").click(function(){
			jisuan();
		})
	})

	//计算封装的函数
	function jisuan(){
		var money =0;
		var count = 0;
		$(".ch:checked").each(function(){
			count+=parseInt( $(this).parent().parent().find("#car_item_num").html() );
			money+=parseInt( $(this).parent().parent().find(".car_item_total").find("p").html() );
		})
		
		$(".numToatl").html(count);
		$(".moneyToatl").prev().find("span").html(money)
	}