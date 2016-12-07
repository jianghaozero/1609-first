function menuhide(){}
$(function(){
					//主页tab切换
					tab('mouseover','.bigtab_tab_top li','.bigtab_tab_content ul',0);
					tab('mouseover','._1 li','._1_content ul',1);
					tab('mouseover','._2 li','._2_content ul',1);
					tab('mouseover','._3 li','._3_content ul',1);
					tab('mouseover','._4 li','._4_content ul',1);
					tab('mouseover','._5 li','._5_content ul',1);
					//主页轮播图
					$(".hotsell_rightph").unslider();
					$(".bigtop_center").unslider({dots: true});
					$(".bigtop_right").unslider({dots: true});
					$(".index_main_left_center_center").unslider({dots: true});
					//热评效果
					$(".goodhot_main").on("mouseenter",".goodhot_main_comment",function(){
						$(this).stop().animate({"width":675},300).siblings().stop().animate({"width":175},300);
					})
				})