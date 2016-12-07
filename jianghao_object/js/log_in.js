//表单验证
$().ready(function(){
			$("#log_in_form").validate({
				rules:
				{
					uesrname:"required",
					userpassword:
					{
						required:true,
						minlength:6
					}
				},
				messages:
				{
					uesrname:"请输入用户名",
					userpassword:
					{
						required:"请输入密码",
						minlength:"请安正确格式输入密码"
					}
				}
			})
			//是否有cookie
			if($.cookie("uesrname")&& $.cookie("uesrname") != "null")
			{	
				var originalHtml = $("#log_in_form").html();
				$("#log_in_form").html("<input type='button' value='退出登录' name='out' class='out'/>");
				$("#log_in_form").on("click","input[name=out]",function(){
					$.cookie("uesrname",null,{path: '/'});
					$("#log_in_form").html(originalHtml);
				})
			}
		})

//表单提交
$(function(){
	$(".log_in_btn").click(function(){
		if($("#log_in_form").valid())
		{
			$.get("../data/log_in$register.txt",$("#log_in_form").serialize(),function(respont){
				var respontData = (typeof respont == "object"?respont:JSON.parse(respont));
				if(respontData.data){
					//将用户名存入cookie
					$.cookie("uesrname",$("input[name=uesrname]").val(),{expires: 7,path: '/'});
					window.location.href = "index.html";
				}
			})
		}
		return false;
	})
})
