function tab(even,top,content,num)
			{
				
				var $li = $(top);
				var $ul = $(content);
				$li.on(even,function(){
					var $this = $(this);
					var $t = $this.index()-num;
					$li.removeClass();
					$this.addClass("current");
					$ul.css("display","none");
					$ul.eq($t).css("display","block");

				})
			}