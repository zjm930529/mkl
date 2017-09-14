<?php
	header("Content-type: text/heml; charset=UTF-8");
	$name= $_POST["uname"];
	$pwd = $_POST["upwd"];
	
	
	$db=mysql_connect("localhost","root","root");
	mysql_select_db("users",$db);
	mysql_query("set names utf8");
	
	
	
	
	$sql = "select * from info where uname='$name' and upwd='$pwd'";
	
		$res = mysql_query($sql);
		$num=mysql_num_rows($res);
		
		if($num){
			echo "1";//登录成功
		}else{
			echo "0";//用户名不存在
		}
?>