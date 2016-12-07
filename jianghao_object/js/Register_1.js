//生成随机数
function createStr(){
	var str = "";
			for(var i=0;i<4;i++){
				var isNum = parseInt(Math.random()*10)%2;  //0,1 
				
				if(isNum){//生成一个数字
					str += parseInt(Math.random()*10);
					
				}else{//大写字母
					str += String.fromCharCode(parseInt(Math.random()*26)+65);
				}
			}
			return str;
}
$(function(){
	$("#vftcodrandom").val(createStr());
})

//表单验证
$().ready(function(){
			$(".log_input").validate({
				rules:
				{
					phoneCode:
					{
						required:true,
						rangelength:[11,11] 
					},
					vftCode:
					{
						required:true,
						equalTo:"#vftcodrandom"	
					}
				},
				messages:
				{
					phoneCode:
					{
						required:"请输入电话号码",
						rangelength:"请输入正确的手机号码"
					},
					vftCode:
					{
						required:"请输入验证码",
						equalTo:"验证码不正确"
					}
				}
			})
		})
//表单提交
$(function(){
	$(".bont").click(function(){
		if($(".log_input").valid())
		{
			$.get("../data/log_in$register.txt",$(".log_input").serialize(),function(respont){
				var respontData = (typeof respont == "object"?respont:JSON.parse(respont));
				if(respontData.data){
					window.location.href = "Register_2.html?"+$(".log_input").serialize();
				}
			})
		}
		return false;
	})
})