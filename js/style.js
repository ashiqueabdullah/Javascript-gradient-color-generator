var colorone =document.getElementById('colorone');
var colortwo =document.getElementById('colortwo');
var mainBody =document.getElementById('mainBody');
var onecolor =document.getElementById('onecolor');
var twocolor =document.getElementById('twocolor');

const colorchage=()=>{
	colorone=colorone.value;
	colortwo=colortwo.value;
	if(colorone || colortwo){
		mainBody.style.backgroundImage=`linear-gradient(to right,${colorone},${colortwo})`;
		onecolor.innerHTML=colorone;
		twocolor.innerHTML=colortwo;
	}
}

colorone.addEventListener('change',colorchage)
colortwo.addEventListener('change',colorchage)