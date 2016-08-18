var tHm=document.getElementById("dhm");
var aIs=tHm.getElementsByTagName("i");
countDown();
function toDou(n){
	return n>=0&&n<10?'0'+n:''+n;
}
function countDown(){
	var oDate=new Date();
	//alert(oDate.getTime()); //现在距离1970年1月1日 00:00:00 的毫秒数
	var newDate=new Date('2016/9/1 00:00:00');
	var s=Math.floor((newDate.getTime()-oDate.getTime())/1000);
	//秒转换
	//一天24小时 1小时60分 1分60秒  === 24*60*60=86400;
	var d=Math.floor(s/86400); //整数部分：天数； 余数：剩下的秒数；
	//s=s%86400;
	s%=86400;
	var h=Math.floor(s/3600); //整数部分：小时 余数：剩下的秒数
	s=s%3600;
	var m=Math.floor(s/60);
	s=s%60;
	aIs[0].innerHTML=d;
	aIs[1].innerHTML=h;
	aIs[2].innerHTML=m;
}
//clearInterval(timer);
var timer=setInterval(countDown,1000);

var oIpt=document.getElementById("s-ipt");
var width=utils.css(oIpt,'width');
oIpt.onmousedown=function(e){
	this.width=utils.css(oIpt,"width");
	console.log(this.width)
	wangyue(this,{width:150},500);
	e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
};
document.body.onmousedown=function(){
	wangyue(oIpt,{width:116},500);
};


/*热门分类右侧鼠标移入效果*/
/*(function(){
	var orecommend = document.getElementById("recommend");
	var aImgs = utils.getByClass(orecommend,"img");
	var aBgs = utils.getByClass(orecommend,"tx-bg");
	var aLis = orecommend.getElementsByTagName("li");
	for(var i=0; i<aLis.length;i++){
		aLis[i].index=i;
		if(aLis[i].index=0){
			aLis[i].onmouseover = function(){
				wangyue(aImgs[this.index],{"right":0},300);
				wangyue(aBgs[this.index],{"left":0},300);
			};
			aLis[i].onmouseout = function(){
				wangyue(aImgs[this.index],{"right":-10},300);
				wangyue(aBgs[this.index],{"left":-10},300);
			};
		}

	}*/







/*
})();*/

var gotop=document.getElementById('gotop');
window.onscroll=computedDisplay;
function computedDisplay(){
	if(utils.win('scrollTop')>utils.win('clientHeight')){
		gotop.style.display='block';
	}else{
		gotop.style.display='none';
	}
}
gotop.onclick=function(){
	this.style.display='none';
	window.onscroll=null;
	var target=utils.win('scrollTop');
	var duration=1000;
	var interval=30;
	var step=target/duration*interval;
	var timer=setInterval(function(){
		var curTop=utils.win('scrollTop');
		if(curTop<=0){
			clearInterval(timer);
			window.onscroll=computedDisplay;
			return;
		}
		curTop-=step;
		utils.win('scrollTop',curTop);
	},interval)
};
