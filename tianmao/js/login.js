
!function(){

		var fg = document.getElementById('fg');
		var fk = document.getElementById('bk'); 
		var fixfor = document.querySelector('.fixfor');  
		fg.addEventListener('touchstart',function(){
			fixfor.style.display='block';
		}); 
		fk.addEventListener('touchstart',function(){
			fixfor.style.display='none';
		});  
}();