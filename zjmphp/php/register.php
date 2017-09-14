<?php
	header("Content-type: text/heml; charset=UTF-8");
	$name= $_POST["uname"];
	$pwd = $_POST["upwd"];
	
	
	$db=mysql_connect("localhost","root","root");
	mysql_select_db("users",$db);
	mysql_query("set names utf8");
	
	
	$sql="select * from info where uname='$name'";
	$res = mysql_query($sql);
	$arr = mysql_fetch_array( $res );

//	echo $arr;
	
	if( $arr ){
		echo 1;//用户名已存在
	}else{
		$sql="insert into info (uname, upwd) values ('$name','$pwd')";
			$result=mysql_query($sql);
			if ($result){
				echo 2  ;//注册成功
			}
	}
	
?>



