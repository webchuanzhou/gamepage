var $nav = $("#topNav");
$("#topOpen").click(function(){
	if($(this).hasClass("open")){
		$(this).removeClass("open");
		$nav.slideUp(300);
	}else{
		$(this).addClass("open");
		$nav.slideDown(300);
	}
});
$("#topClose").click(function(){
	$("#topOpen").removeClass("open");
	$nav.slideUp(300);
});
//function headclose(){
//	var headBox=document.getElementById("headBox");
//	headBox.style.display="none";
//}
var index=-1;
var timer=null;
var divs=document.querySelectorAll(".head-box");
var hdas=document.querySelectorAll(".head-ctrl a");
for(var i=0;i<hdas.length;i++){
	hdas[i].index=i;
	hdas[i].onclick=function(){//小圆点的点击
			clearInterval(timer);//清除轮播的计时函数
			timer=null;//清除计时器
			index=this.index;//获取按的小圆点的索引值
			for(var j=0;j<divs.length;j++){//清除所有的元素，让他们的透明度设为0
				divs[j].style.opacity=0;
				hdas[j].className="";//清除小圆点的样式
			}
			divs[index].style.opacity=1;//将要显示的图片元素的不透明度设为1 即显示图片
			hdas[index].className="cur";//将选择的小圆点的样式设为被选择
			timer=setInterval(lunshow,3000);//执行轮播效果
		};
}
function lunshow(){//轮播图的方法
	for(var i=0;i<divs.length;i++){
		divs[i].style.opacity=0;//设置所有的图片的不透明度为0
		hdas[i].className="";//取消所有的小圆点样式
	}
	if(index==4){
		index=0;//如果大于等于4 则将索引值变成0 这样才形成了一个循环
	}else{
		index++;
	}
	divs[index].style.opacity=1;//将要显示的图片的样式不透明度设为1 这个不透明度的变化过程通过CSS来实现
	hdas[index].className="cur";//将下面小圆点的样式设置
}
window.onload=function(){
	lunshow();
	hhb();
	hhb1();
	timer=setInterval(lunshow,4500);
}

var carboxs=document.querySelectorAll(".carouse-box");
var caras=document.querySelectorAll(".g-banbox .ctrl a");
var timer1=null;
carboxs[0].style.left="0";
carboxs[1].style.left="100%";
var len=0;
var x=null;
function move(){
	if(x==1){
		var step=-10;
		if(len!=-640){
			len+=step;
			carboxs[0].style.left=len+"px";
			carboxs[1].style.left=(640+len)+"px";
		}else{
			clearInterval(timer1);
			timer1=null;
		}
	}
	if(x==0){
		var step=10;
		if(len!=0){
			len+=step;
			carboxs[0].style.left=len+"px";
			carboxs[1].style.left=(640+len)+"px";
		}else{
			clearInterval(timer1);
			timer1=null;
		}
	}
}
function ctrlcarboxs(y){
	x=y;
	if(x==0&&caras[0].className!="cur"){
		caras[0].className="cur";
		caras[1].className="";
		timer1=setInterval(move,10);}
	if(x==1&&caras[1].className!="cur"){
		caras[0].className="";
		caras[1].className="cur";
		timer1=setInterval(move,10);}
}

var stars=[4,3,4,4,5,5,4,4,5,4,4,4,4,4,4,4,4,4];
var scorestar=document.querySelectorAll(".hot-link .hot-font .score em");
for(var i=0;i<scorestar.length;i++){
	scorestar[i].style.width=18*stars[i]+"px";
}
var hbs=document.querySelectorAll(".con-wrap2 .cur-hot-box");
var hbi=-1;
var reload=document.querySelector(".con-wrap2 .g-hotbox .reload");
reload.onclick=hhb;
function hhb(){
	for(var i=0;i<hbs.length;i++){
		hbs[i].className="cur-hot-box";
	}
	if(hbi==5){
		hbi=0;
	}else{
		hbi++;
	}
	hbs[hbi].className="cur-hot-box cur";
}

$(".con-wrap5 .con-box-title .o-link").click(function(){
	if(!$(this).hasClass("active")){
		$(".con-wrap5 .con-box-title .o-link").removeClass("active");
		$(".con-wrap5 .g-hot-wrap").removeClass("active");
		$(this).addClass("active");
		$(".con-wrap5 .g-hot-wrap").eq($(this).index()).addClass("active");
		hbsi1=-1;
		hhb1();
	}
});

var hbsi1=-1;
var reload1=document.querySelector(".con-wrap5 .g-hotbox .reload");
reload1.onclick=hhb1;
function hhb1(){
	var hbs1=document.querySelectorAll(".con-wrap5 .active .cur-hot-box");
	for(var i=0;i<hbs1.length;i++){
		hbs1[i].className="cur-hot-box";
	}
	if(hbsi1==5){
		hbsi1=0;
	}else{
		hbsi1++;
	}
	hbs1[hbsi1].className="cur-hot-box cur";
}
