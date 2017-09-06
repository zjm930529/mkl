//左侧的目录
$("#hide_list").mouseenter(function(){//显示
	$(".ProductMuen").css("display","block");
})

$("#hide_list").mouseleave(function(){//隐藏
	$(".ProductMuen").css("display","none")
})
$("#hide_list").prev().click(function(){//跳转主页面 index.html
	location.href="../index.html";
})
$("#hide_list").next().next().click(function(){//跳转健康养生index2.html
	location.href="../index2.html";
})


//右侧的目录
$("#kefu").click(function(){
	location.href="http://mecoxlane.weisk.com/webchat/index.html?appKey=56bef081fc0a9d531c3d1f890ea4957a"
})
