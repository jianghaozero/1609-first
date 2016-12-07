$().ready(function(){
			$(".log_input").validate({
				rules:
				{
					vftpassword:
					{
						required:true,
						rangelength:[6,18]
						
					},
					repassword:
					{
						required:true,
						equalTo:"#vftpassword"
					}
				},
				messages:
				{
					vftpassword:
					{
						required:"请输入密码",
						rangelength:"密码长度为6~18"
					},
					repassword:
					{
						required:"请输入密码",
						equalTo:"两次密码输入不一致"
						
					}
				}
			})
		})
//表单提交
$(function(){
	$(".bont").click(function(){
		if($("form").valid())
		{
			$.get("../data/log_in$register.txt",{"_":Math.random(),"vftpassword":$("#vftpassword").val()},function(respont){
				var respontData = (typeof respont == "object"?respont:JSON.parse(respont));
				if(respontData.data){
					$(".flag").css("background-position","0 -150px");
					$(".log_input").html("注册成功!").css("font-size","50px");
				}
			})
		}
		return false;
	})
})