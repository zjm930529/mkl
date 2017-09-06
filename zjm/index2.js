function $(id){
	return document.getElementById(id);
}

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
				str+=`<li>
						<a href="#"><img src="images/${arr[i].src}"/></a>
						<h3><a href="#">${arr[i].dis}</a></h3>
						<p><span>${arr[i].price}<a href="#"></a></span></p>
						</li>`;
			}
		}
		$("main").innerHTML=str;
		//获取总页数
		pageTotal=Math.floor(arr.length/pageNum);
		//重新生成页码
		var page="";
		for(var j=1;j<pageTotal;j++){
			page+=`<a href="#" class="">${j}</a>`;
			
		}
		$("page").innerHTML=page;
		$("page").children[index-1].className="active";
	}
}

//操作页码
$("page").onclick=function(e){
	var e=e||event;
	var target=e.target||e.srcElement;
	if(target.nodeName=="A"){
		//alert(parseInt(target.innerHTML))
		index=parseInt(target.innerHTML);
		showDate();
	}
}
//var next=document.getElementsByClassName("next")[0]
//
$("next").onclick=function(){
	//console.log(index)
	if(index==pageTotal-1){
		alert("最后一页");
		index=pageTotal-1;
	}else{
		index++;
	}
	showDate();
}
