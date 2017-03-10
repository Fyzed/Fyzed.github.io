// JavaScript Document
;jQuery(document).ready(function(){
	/*头部关掉广告图片*/
	(function($){
		var $gg=$('#gg');
		$gg.find('.gg_close').click(function(){
			$gg.hide();
		});
	})(jQuery);
	/* 购物车 */
	(function($){
		var $box=$('#search_logo').find('.gouwuche');
		var $yin=$box.find('.gowuche_yin');
		$box.hover(function(){
			$(this).css('borderBottomColor','#fff').css('backgroundColor','#fff');
			$yin.show();
		},function(){
			$(this).css('borderBottomColor','#dfdfdf').css('backgroundColor','#f9f9f9');
			$yin.hide();	
		});
	})(jQuery);
	/* 头部选项卡 */
	(function($){
		var $Li=$('#tab_slide_qi').find('.xxk').find('.xxk_ul').find('li');
		var $div=$('#tab_slide_qi').find('.xxk_can');
		$Li.hover(function(){
			$(this).css('background','#f7f7f7').css('color','#c81623').css('borderRightColor','#f7f7f7');
			$(this).find('a').css('color','#c81623');
			$(this).find('span').html('');
			$div.eq($(this).index()).css('display','block');
		},function(){
			$(this).css('background','').css('color','#fff').css('borderRightColor','#c81623');
			$(this).find('a').css('color','#fff');
			$(this).find('span').html('&gt;');
			$div.eq($(this).index()).css('display','none');
		});
		$div.hover(function(){
			$(this).css('display','block');
			$Li.eq($(this).index()-1).css('background','#f7f7f7').css('color','#c81623').css('borderRightColor','#f7f7f7');
			$Li.eq($(this).index()-1).find('a').css('color','#c81623');
			$Li.eq($(this).index()-1).find('span').html('');
		},function(){
			$(this).css('display','none');
			$Li.eq($(this).index()-1).css('background','').css('color','#fff').css('borderRightColor','#c81623');
			$Li.eq($(this).index()-1).find('a').css('color','#fff');
			$Li.eq($(this).index()-1).find('span').html('&gt;');
		});
	})(jQuery);
	/* 头部轮播器 */
	(function($){
		var $div=$('#tab_slide_qi').find('.lbt');
		var $ol=$div.find('.lbt_ol');
		var $ulLi=$div.find('.lbt_ul').find('li');
		var $olLi=$ol.find('li');
		var timer=null;
		var timer2=null;
		var iNow=0;
		$ol.css('marginLeft',-$ol.outerWidth()/2);
		$olLi.mouseover(function(){	
			var _this=this;	
			clearTimeout(timer);
			timer=setTimeout(function(){
				iNow=$(_this).index();
				tabs();
			},100);	
		}).mouseout(function(){
			clearTimeout(timer);
		});
		$div.find('.prev').click(function(){
			if(iNow==0){
				iNow=$olLi.length-1;
			}else{
				iNow--;
			}
			tabs();
		});
		$div.find('.next').click(toNext);
		$div.mouseover(function(){
			clearInterval(timer2);
			$(this).find('.prev').show();
			$(this).find('.next').show();
		}).mouseout(function(){
			timer2=setInterval(toNext,6000);
			$(this).find('.prev').hide();
			$(this).find('.next').hide();
		});
		timer2=setInterval(toNext,6000);
		function toNext(){
			if(iNow==$olLi.length-1){
				iNow=0;
			}else{
				iNow++;
			}
			tabs();
		}
		function tabs(){
			$olLi.eq(iNow).attr('class','active').siblings().attr('class','');
			$ulLi.css('opacity',0).css('display','none');
			$ulLi.eq(iNow).css('display','block').animate({opacity:1},300);
		}
	})(jQuery);
	/*JD快报*/
	(function($){
		var $box=$('#tab_slide_qi');
		var $wrap=$box.find('.jdkb_cen_yin');
		var $ul=$wrap.find('.jdkb_cen_yin_ul');
		var $li=$ul.find('li');
		var $div=$wrap.find('.jdkb_cen_yin_div');
		var $close=$div.find('.close');
		var $li2=$box.find('.jdkb_cen_ul').find('.result');
		var timer=null;
		$li2.hover(function(){
			clearTimeout(timer);
			timer=setTimeout(function(){
				$wrap.show().animate({top:0});
			},100);
			$li.eq($(this).index()).addClass('active').siblings().removeClass('active');
		},function(){
			clearTimeout(timer);
		});
		$li.mouseover(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$div.eq($(this).index()).show().siblings().not($ul).hide();
		});
		$close.click(function(){
			$wrap.hide().css('top',207);			
			$li2.eq(-1).off();
			//var $mark=$('<div id="mark1" style="position:absolute;right:0;top:0;width:63px;height:68px;"></div>');
			//$mark.appendTo($box.find('.jdkb_cen'));
		});
	})(jQuery);
	/*猜你喜欢板块*/
	(function($){
		var $box=$('#like');
		var $ul=$box.find('.like_ul');
		var $h2=$box.find('.like_h2')
		var $a=$h2.find('a');
		var iNow=0;
		$a.click(function(){
			if(iNow==$ul.length-1){
				iNow=0;
			}else{
				iNow++;
			}
			$ul.eq(iNow).show().siblings().not($h2).hide();
			//图片懒加载
			var $img=$ul.eq(iNow).find('img');
			if($img.attr('_src')){
				for(var i=0;i<$img.length;i++){
					if(/yanshi_bg\.png/.test( $img.eq(i).attr('src') )){
						$img.eq(i).attr('src',$img.attr('_src')).css('opacity',0).animate({opacity:1});
					}else{
						return;
					}					
				}
			}
		});
	})(jQuery);	
	/* 楼层选项卡 */
    (function($){
		//1F	
		tabs($('#clothing'));
		//2F
		tabs($('#make_up'));
		//3F
		tabs($('#phone'));	
		//4F
		tabs($('#electric'));
		//5F
		tabs($('#computer'));
		//6F
		tabs($('#motion'));
		//7F
		tabs($('#live'));
		//8F
		tabs($('#toy'));
		//9F
		tabs($('#food'));
		//10F
		tabs($('#books'));
		//11F
		tabs($('#zhengche'));
		function tabs(box){
			box.find('.c_ul').find('li').mouseover(function(){
				var _index=$(this).index();
				var oBox=box.find('.1f').eq(_index);
				$(this).attr('class','active').siblings().attr('class','');
				oBox.css('display','block').siblings().not('.c_f_l').css('display','none');
				//图片懒加载
				oBox.find('img').each(function(i,elem){
					if( /yanshi_bg\.png/.test($(elem).attr('src')) ){
						if($(elem).attr('_src')){
							$(elem).attr('src',$(elem).attr('_src')).css('opacity',0).animate({opacity:1});
						}
					}else{
						return;
					}
				});
			});
		}
	})(jQuery);
	/* 楼层轮播器 */
	(function($){
		//1F轮播器
		carousel('#clothing','.slide','.slide_ul');
		//2F轮播器
		carousel('#make_up','.slide_2f','.slide_2f_wrap');
		//3F轮播器
		carousel('#phone','.slide','.slide_ul');
		//4F轮播器
		carousel('#electric','.slide','.slide_ul');
		//5F轮播器
		carousel('#computer','.slide','.slide_ul');
		//6F轮播器
		carousel('#motion','.slide','.slide_ul');
		//7F轮播器
		carousel('#live','.slide','.slide_ul');
		//8F轮播器
		carousel('#toy','.slide','.slide_ul');
		//9F轮播器
		carousel('#food','.slide','.slide_ul');
		//10F轮播器
		carousel('#books','.slide','.slide_ul');
		//11F轮播器
		carousel('#zhengche','.slide','.slide_ul');
		//12F左边轮播器
		carousel('#fl_slide_12f','.slide','.slide_ul');
		//12F右边轮播器
		carousel('#fr_slide_12f','.slide','.slide_ul');
		
		
		//最上层横向轮播器
		carousel('#heng_slide','.slide','.slide_ul');
		function carousel(a,b,c){
			var $box=$(a).find(b);
			var $ol=$box.find('.slide_ol');
			var $p=$box.find('.prev');
			var $n=$box.find('.next');
			var $olLi=$ol.find('li');
			var $ul=$box.find(c);
			var $ulLi=$ul.find('li');
			var oLiWid=$ulLi.width();
			var oLiLen=$ulLi.length-1;
			var iNow=0;
			var iNow2=0;
			var timer=null;
			var timer2=null;
			var off=true;
			$ol.css('marginLeft',-$ol.outerWidth()/2);
			$olLi.mouseover(function(){
				var _this=this;
				clearTimeout(timer2);
				timer2=setTimeout(function(){
					if(off){
						off=false;
						iNow2=iNow=$(_this).index();
						tabs();
					}
				},100);				
			}).mouseout(function(){
				clearTimeout(timer2);
			});
			$p.click(function(){
				toggle(true);
			});
			$n.click(function(){				
				toggle(false);
			});
			$box.mouseover(function(){
				clearInterval(timer);
				$p.show();
				$n.show();
			}).mouseout(function(){
				timer=setInterval(toggle,5000,false);
				$p.hide();
				$n.hide();
			});
			timer=setInterval(toggle,5000,false);
			function toggle(oBtn){
				if(off){
					off=false;
					if(oBtn){
						if(iNow==0){
							$ulLi.eq(oLiLen).css('position','relative').css('left',-(oLiLen+1)*oLiWid);
							iNow=oLiLen;
						}else{
							iNow--;
						}
						iNow2--;
					}else{
						if(iNow==oLiLen){				
							$ulLi.eq(0).css('position','relative').css('left',(oLiLen+1)*oLiWid);
							iNow=0;
						}else{
							iNow++;
						}
						iNow2++;
					}
					tabs();
				}
			}
			function tabs(){
				$olLi.eq(iNow).attr('class','active').siblings().attr('class','');
				$ul.animate({left:-iNow2*oLiWid},function(){
					if(iNow==0){
						$ulLi.eq(0).css('position','static');
						$ul.css('left',0);
						iNow2=0;
					}else if(iNow==oLiLen){
						$ulLi.eq(oLiLen).css('position','static');
						$ul.css('left',-oLiLen*oLiWid);
						iNow2=oLiLen;
					}
					off=true;
				});
			}
		}
	})(jQuery);	
	/* 天天低价和热门晒单 */
	(function($){
		var $box=$('#dijia_shaidan'),$li=$box.find('.dijia').find('.dijia_con_ul').find('li'),$pic=$li.find('.dijia_pic');
		var $div=$box.find('.shaidan').find('.shaidan_con'),$ul2=$div.find('.shaidan_con_ul'),$li2=$ul2.find('li'),timer=null,iNow=0;
		var liLen=$li2.length,liHeight=$li2.outerHeight();
		$li.hover(function(){
			$pic.eq($(this).index()).stop().animate({left:-12},300);
		},function(){
			$pic.eq($(this).index()).stop().animate({left:0},300);
		});
		$div.hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(tabs,3000);
		});
		timer=setInterval(tabs,3000);
		function tabs(){
			if(iNow==liLen-2){
				$li2.eq(0).css('position','relative').css('top',liLen*liHeight)
			}
			iNow++;
			$ul2.animate({top:-liHeight*iNow},500,function(){
				if(iNow==liLen-1){
					iNow=-1;
					$ul2.css('top',liHeight);
					$li2.eq(0).css('position','static');
					$li2.eq(-1).css('position','relative').css('top',-liLen*liHeight);
				}
				if(iNow==0){
					$li2.eq(-1).css('position','static');
				}
			});
		}
	})(jQuery);
});