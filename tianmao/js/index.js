
//滚动改变header的background
!function(){

	var con = document.getElementsByClassName('content')[0];
	var header = document.getElementsByTagName("header")[0];
	var scrollY=0;
	con.addEventListener('scroll',function(){ 
		scrollY = con.scrollTop;
		if(scrollY>0){
			header.classList.add('color');
		}else{
			header.classList.remove('color');
		}
	 
	}) 	 
}();

//首页banner
!function(){
	  		var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			  	pagination : '.swiper-pagination'  
			  })
}();


//首页文字滚动
!function(){ 
			var text = document.querySelector('.text');
  			var li = text.querySelectorAll('li')[0]; 
  			var liH = 1.3594;
  			var index= 0;  
  			 setInterval(function(){	 
				 	index++;
				 	text.style.marginTop = -index*liH +"rem"; 
				if(index ==4){
				 		text.style.marginTop = 0;
				 		index = 0;
				 	}
		 	},3000) 
}();

//首页图片滚动
!function(){		 
			var list = document.querySelector(".ba-list");
			var aLi = list.querySelectorAll("li"); 
			 var oLiW = aLi[0].offsetWidth; 
			var width  =oLiW *aLi.length;  
			list.style.width = width + "px";  
			 var myScroll = new IScroll('#wrapper', { 
				scrollbars: false,
				scrollX: true
			})
}();

//点击让广告隐藏
!function(){

		var footer = document.querySelector('footer'); 
		var close = document.querySelector('.close'); 
		close.addEventListener('touchstart',function(){
			footer.style.display = "none";
		})

}();

//回到顶部
!function(){ 
	 var top =$('.top')[0];
	top.addEventListener('touchstart',function(){  
	  	$('.content').animate({scrollTop:0},500); 
	})
}();

//ajax请求数据
!function(){

		var likeList = document.getElementsByClassName('like-list')[0];
		var con = document.getElementsByClassName('content')[0];
		var ul = document.getElementById('like-ul'); 
		var scrollTop=0;
		var winH = window.innerHeight;
	 	var isfinsh = false;

	 	//创建loading
		function appendLoading(content){
 			var frag = document.createDocumentFragment();
 			 var div = document.createElement('div');
 			 var img = document.createElement('img');
 			 var span = document.createElement('span');
 			 div.className = "loading";
 			 span.innerHTML = '正在加载';
 			 img.src = "img/icon_loading.png";
 			 div.appendChild(img);
 			 div.appendChild(span);
 			 frag.appendChild(div);
 			 content.appendChild(frag);
 			 return div;
 		}
 		var loading = appendLoading(likeList);
	
		con.addEventListener('scroll',function(){ 
			scrollTop = loading.getBoundingClientRect().top;

		 	if(scrollTop < winH && !isfinsh){
		 		ajax();
		 		isfinsh = true;
		 	}
	 
		});

	function ajax(){
		 var xhr = new XMLHttpRequest();
		 xhr.open('get',"js/index.json","true");
		 xhr.onreadystatechange = function(){
		 	if(xhr.readyState==4 && xhr.status==200){
		 		var Text = xhr.responseText;
		 		var obj = JSON.parse(Text);
		 		var html="";
		 		 for(var key in obj){ 
			 		 html+='<li><a href="javascript:;"><img src="'+obj[key]["img"]+'" alt="">';
			 		 html+='<span class="item"><em>'+obj[key]["text"]+'</em></em></span>';
			 		 html+='<span class="pp"><i>'+obj[key]["one"]+'</i><span class="big">+'+obj[key]["two"]+'</span><span>+'+obj[key]["tre"]+'</span></span>';
			 		 html+='</a></li>'; 
		 		 }
		 		setInterval(function(){ 
		 			ul.insertAdjacentHTML("beforeEnd",html);
		 		},2000);
		 	}
		 }
		 xhr.send(null);
	}  
}();

//触发搜索框事件

!function(){

		var inp = document.querySelector('.submit');
		var sub = document.querySelector('.sub-sousuo');
	 
		 inp.addEventListener('focus',function(){
		 	 sub.style.display="block";
		 })

}();


//搜索框
!function(){

			var hot = document.querySelector('.hot');
			var box = document.querySelector('.box');
			var search = document.querySelector('.search');
			var oA = hot.querySelectorAll('a');

			
			for(var i=0;i<oA.length;i++){
					oA[i].index = i;
				oA[i].addEventListener('touchstart',function(){

					  search.value = oA[this.index].innerHTML;
					  	searc();
				})
			}

			search.addEventListener('keyup',function(){
							searc();
				})

			function searc(){ 
				if(search.value !=""){
						var script = document.createElement('script');
						script.src='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+search.value+'&cb=zed';
						document.body.appendChild(script);
					}else{
						box.style.display = "none";
				}
			}
		 


}();

//菜单栏显示隐藏
!function(){

			var tag = document.querySelector('.tag');
			var menu = document.querySelector('.left-menu');
			var main = document.querySelector('.left-main'); 
			var Width = main.offsetWidth; 
			var cur,tagX;

			tag.addEventListener('touchstart',function(){
				menu.style.left = '0';
			})
			menu.addEventListener('touchstart',function(e){
						cur = e.changedTouches[0].pageX;
						 if(cur > Width){ 
						 	menu.style.left = '-100%';
						 }; 
			})
				menu.addEventListener('touchstart',function(e){
						cur = e.changedTouches[0].pageX;
					menu.addEventListener('touchmove',function(e){
						 tagX = e.changedTouches[0].pageX;
						 	 if( -(tagX - cur) > 90){
								menu.style.left = '-100%';
						 	 }
						 })
			})

				  

}();

//二级菜单显示隐藏
!function(){ 
			var left = $('.nav-left');
			var aLi =  $('.nav-left li');
			var right = $('.nav-right');
			var oLi = $('.nav-right>li');
			aLi.on('touchstart',function(){ 
			 	 $(this).addClass('active').siblings().removeClass('active');
			 	 var index = $(this).index();
			 	 oLi.eq(index).show().siblings().hide();
			 }) 
}();

 