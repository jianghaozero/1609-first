
//加减操作
$(function () {
		if($.cookie("uesrname") && $.cookie("uesrname") != "null"){
			var head_username = "<a href='log_in.html'>"+$.cookie("uesrname")+"</a>";
			$(".usera").html(head_username);
		}
		if($.cookie("shopcar")){
			$("table").remove(".gwc_tb2");
			var good_obj = JSON.parse($.cookie("shopcar")).result;
			for(var a = 0; a < good_obj.length;a++){
				var src = good_obj[a].src;
				var text = good_obj[a].text;
				var price = good_obj[a].price;
				var good_str = '<table cellpadding="0" cellspacing="0" class="gwc_tb2">'+
								'<tr>'+
									'<td class="tb2_td1"><input type="checkbox" value="1" name="newslist" class="td_checkbox" /></td>'+
									'<td class="tb2_td2"><a href="#"><img src='+src+'/></a></td>'+
									'<td class="tb2_td3"><a href="#">'+text+'</a></td>'+
									'<td class="tb1_td4 td_price">'+price+'</td>'+
									'<td class="tb1_td5">'+
										'<input class="td_min" type="button" value="-" />'+
										'<input class="val_text" type="text" value="1" />'+
										'<input class="td_add" type="button" value="+" />'+
									'</td>'+
									'<td class="tb1_td6"><label id="total1" class="tot"></label></td>'+
									'<td class="tb1_td7"><a class="good_delet">删除</a></td>'+
								'</tr>'+
							'</table>';
				$(good_str).appendTo(".get_good");
			}
		}else{
			return false;
		}
		// 全选        
		$(".allselect").click(function () {
			var $self = $(this);
			$(".gwc_tb2 input[name=newslist]").each(function () {
				if($self.attr("checked")){	
					$(this).attr("checked", true);
				}else{
					$(this).attr("checked", false);
				}
			});
			GetCount();
		});
		// 输出
		$(".gwc_tb2 input[name=newslist]").click(function () {
			GetCount();
		});
		//调用添加加减点击事件方法
		setclick(0);
		//删除操作
		$(".good_delet").click(function(){
			$(this).parent().parent().parent().parent().remove('.gwc_tb2');
			$.cookie('shopcar',null,{path: '/'});
			setclick(1);
		})
	})
	function setclick(num){
		for(var i = 0;i < $(".val_text").length;i++){
			$(".td_add").eq(i).attr("td_index",i);
			$(".td_min").eq(i).attr("td_index",i);
			$(".td_add").eq(i).click(function () {
				var t = $(".val_text").eq($(this).attr("td_index"));
				t.val(parseInt(t.val()) + (1-num))
				setTotal($(this).attr("td_index")); GetCount();
			})
			$(".td_min").eq(i).click(function () {
				var t = $(".val_text").eq($(this).attr("td_index"));
				t.val(parseInt(t.val()) - (1-num))
				setTotal($(this).attr("td_index")); GetCount();
			})
			setTotal(i);
		}
	}
	function setTotal(j) {
		$(".tot").eq(j).html((parseInt($(".val_text").eq(j).val()) * $(".td_price").eq(j).text()).toFixed(2));
		$(".td_checkbox").eq(j).val(parseInt($(".val_text").eq(j).val()) * $(".td_price").eq(j).text());

	}
	//*********输出函数*********
	function GetCount() {
		var conts = 0;
		$(".gwc_tb2 input[name=newslist]").each(function () {
			if ($(this).attr("checked")) {
				for (var i = 0; i < $(this).length; i++) {
					conts += parseInt($(this).val());
				}
			}
		});
		$(".zong").html((conts).toFixed(2));
		$(".jiesuan_2").css("background-color","orange");
	}