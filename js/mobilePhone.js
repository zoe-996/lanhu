var scenesTab = document.getElementsByClassName('scenesTab');
var productTab = document.getElementsByClassName('productTab');
var bestMatch = document.getElementsByClassName('bestMatch');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var close = document.getElementById('close');
scenesTab[0].onclick = function(){
	scenesTab[0].classList.add("active");
	productTab[0].classList.remove("active");
	var imgs = document.getElementsByClassName('changeImg');
	for(var i=0;i<imgs.length;i++){
		imgs[i].src = "img/" + i%4 + ".png";
	}
}
productTab[0].onclick = function(){
	productTab[0].classList.add("active");
	scenesTab[0].classList.remove("active");
	var imgs = document.getElementsByClassName('changeImg');
	for(var i=0;i<imgs.length;i++){
		imgs[i].src = "img/p" + i%4 + ".png";
	}
}
bestMatch[0].onclick = function(){
	var shade = document.getElementsByClassName('shade');
	var sortEle = document.getElementsByClassName('sortWrap');
	shade[0].style.visibility = 'visible';
	sortEle[0].style.visibility = 'visible';
}
//二格
img1.onclick = function(){
	img1.src = "img/Combined Shape4.png";
	img2.src = "img/Rectangle.png";
	var li = document.getElementsByTagName('li');
	for(var k=0;k<li.length;k++){
		li[k].style.width = '50%';
	}
}
//一格
img2.onclick = function(){
	img1.src = "img/Combined Shape5.png"
	img2.src = "img/Rectangle1.png"
	var li = document.getElementsByTagName('li');
	for(var j=0;j<li.length;j++){
		li[j].style.width = '100%';
	}
}
close.onclick = function(){
	var shade = document.getElementsByClassName('shade');
	shade[0].style.visibility = 'hidden';
	var sortEle = document.getElementsByClassName('sortWrap');
	sortEle[0].style.visibility = 'hidden';
}
