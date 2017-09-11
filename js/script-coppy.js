var myImgs = document.querySelectorAll('img');
//console.log(myImgs);
myImgs[2,3,4].addEventListener('click', function(evt){
	
	//creating a overlay
	var myOverlay = document.createElement('div');
	myOverlay.style.width = window.innerWidth + 'px';
	myOverlay.style.height = window.innerHeight + 'px';
	myOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
	myOverlay.style.position = "absolute";
	myOverlay.style.left = 0 + 'px';
	myOverlay.style.left = 0 + 'px';
	myOverlay.style.float = "left"
// creating img on overlay
	var img = document.createElement('img');
	img.src = evt.target.src;

	
// centering img
	var x = (window.innerWidth - img.widht)/2;
	var y = (window.innerHeight - img.height)/2;
	img.style.position = "absolute";
	img.style.left = x + 'px';
	img.style.top = y + 'px';
	
//adding im to overlay
	myOverlay.appendChild(img);
	
// aadding overlay html body
	document.body.appendChild(myOverlay);
	img.addEventListener('click', function(){
			if(myOverlay){
				myOverlay.parentNode.removeChild(myOverlay);
			}
		
	});
	
});