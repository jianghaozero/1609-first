			//三级菜单
			function menuhide(){
				$(".menuinner").hide();
				$(".menu").hover(function(){
					$(".menuinner").show();
				},function(){
					$(".menuinner").hide();
				})
			}
			$(function(){
				//tab切换
				tab("click",".topBottom li","#detailed_main .main_ul",0)
				tab("mouseover",".main_main_smallph img",".main_main_bigph img",0);
				tab("click",".zhixun_head li",".zhixun_body ul",0)
				//点击加入购物车
				$(".otherhead_bnt").click(function(){
					$(".shopsuccess").stop().show(200);
				})
				$(".shopsuccess_bnt_1").click(function(){
					
					$(".shopsuccess").stop().hide(200);
				})
				$(".shopsuccess_bnt_2").click(function(){
					$.ajax({
						type:"get",
						url:"../data/shopcar.txt",
						async:true,
						success:function(respon){
							var str_respon = typeof respon == "string" ? respon:JSON.stringify(respon);
							$.cookie("shopcar",str_respon,{expires: 7,path: '/'});
							window.location.href ="shopcar.html";
						}
					});
				})
				//分页
				var page = function(_pageindex, _isgenerate){
							$.get("../data/pinglun.txt", {'_': Math.random(), page: _pageindex}, function(response){
								var obj = typeof response == "object"?response:JSON.parse(response);
								var pageMain = '';
								$('li').remove(".pinglunMain_li");
								for(var j = 0; j <obj.pageSize;j++){
									var src = obj.result[j].src;
									var user = obj.result[j].user;
									var level = obj.result[j].level;
									var label = obj.result[j].label;
									var ptext = obj.result[j].text;
									var good = obj.result[j].good;
									var time = obj.result[j].time;
									pageMain = (
										'<li class="pinglunMain_li">'+
										'<div class="PBM_lef">'+
											'<a><img src='+src+'/></a>'+
											'<a>'+user+'</a>'+
											'<span>'+level+'</span>'+
										'</div>'+
										'<div class="PBM_right">'+
											'<div class="PBM_right_top">'+
												'<span>他觉得：</span><div>'+label+'</div><div>'+label+'</div><div>'+label+'</div>'+
											'</div>'+
											'<div class="PBM_right_body">'+
												'<p>'+ptext+'</p>'+
												'<p class="_my_good">'+good+'</p>'+
												'<p class="_my_foot"><span>'+time+'</span><a href="#">分享</a><a href="#">回复</a><a href="#">赞</a></p>'+
											'</div>'+
										'</div>'+
										'</li>'
									)
									$(pageMain).appendTo(".pinglun_body_main>ul");
								}
								var pageCount = Math.ceil(obj.totalCount/obj.pageSize);
								var pageFlag = '';
								if(!_isgenerate){
									return false;
								}
								$('<div>上一页</div>').appendTo('.pinglun_body_main_foot');
								for(var i = 1; i <= pageCount; i++){
										pageFlag = ('<div>' + i + '</div>');	
								$(pageFlag).appendTo('.pinglun_body_main_foot');
								}
								$('<div>下一页</div>').appendTo('.pinglun_body_main_foot');
								$('<span>一共'+obj.totalCount+'条评论</span>').appendTo('.pinglun_body_main_foot');
							})
						}
						page(1, true);
						$('.pinglun_body_main_foot').on('click','div', function(){
							page($(this).text());
							$('.pinglun_body_main_foot>div').removeClass();
							$(this).addClass('foot_active');
						})
			})