					//三级菜单
					function menuhide(){
						$(".menuinner").hide();
						$(".menu").hover(function(){
							$(".menuinner").show();
						},function(){
							$(".menuinner").hide();
						})
					}
					//ajax跳页
					$(function(){
						var page = function(_pageindex, _isgenerate){
							$.get("../data/page.txt", {'_': Math.random(), page: _pageindex}, function(response){
								var obj = typeof response == "object"?response:JSON.parse(response);
								var pageMain = '';
								$('li').remove(".pageMian_li");
								for(var j = 0; j <obj.pageSize;j++){
									var src = obj.result[j].src;
									var ptext = obj.result[j].text;
									var activity = obj.result[j].activity;
									var price = obj.result[j].price;
									pageMain = (
										'<li class="pageMian_li">'+'<a href="detailed.html" class="_a_ph"><img src='+src+'/></a>'+
										'<a href="detailed.html" class="_a_text">'+ptext+'</a>'+
										'<p class="_activity">'+activity+'</p>'+
										'<p class="_price">¥'+price+'.00</p>'+
										'<div class="_bnt"><div class="div_shop">购买</div><div>收藏</div></div>'+
										'</li>'
									)
									$(pageMain).appendTo(".search_main_right_body>ul");
								}
								$("._bnt>.div_shop").click(function(){
									window.location.href ="shopcat.html";
								})
								var pageCount = Math.ceil(obj.totalCount/obj.pageSize);
								var pageFlag = '';
								if(!_isgenerate){
									return false;
								}
								$('<div>上一页</div>').appendTo('.search_main_right_body_foot');
								for(var i = 1; i <= pageCount; i++){
										pageFlag = ('<div>' + i + '</div>');	
								$(pageFlag).appendTo('.search_main_right_body_foot');
								}
								$('<div>下一页</div>').appendTo('.search_main_right_body_foot');
								$('<span>一共'+obj.totalCount+'件商品</span>').appendTo('.search_main_right_body_foot');
							})
						}
						page(1, true);
						$('.search_main_right_body_foot').on('click','div', function(){
							page($(this).text());
							$('.search_main_right_body_foot>div').removeClass();
							$(this).addClass('foot_active');
						})
					})