
$(function(){
	//载入头部
	$("#commentHead").load("comment/head.html?_=" + Math.random(),function(){
		if(menuhide){
			menuhide();
		}
		//取存入cookie的用户名
		if($.cookie("uesrname")&& $.cookie("uesrname") != "null"){
			var head_username = "<a href='log_in.html'>"+$.cookie("uesrname")+"</a>";
			$(".usera").html(head_username);
		}
	})	
})
