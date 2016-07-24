//banner
var bbox=$(".banner-box")[0];
var bannerbox=$(".banbox")[0];
var bbackground=$(".bannerbackground",bbox)[0];
var as=$('a',bannerbox);
var btns=$(".dian");
var left=$(".left")[0];
var right=$(".right")[0];
var arrColor=["#e8e8e8","#fe3794","#132356","#e8e8e8","#e8e8e8","#ff731c"]
var num=0;
function move(type){
	if(type=="r"){
			num++;
			if(num>=as.length){
				num=0;
			}
		}else if(type=="l"){
			num--;
			if(num<=-1){
				num=as.length-1;
			}
		}

	for(var i=0;i<as.length;i++){
		as[i].style.opacity=0;
		as[i].style.filter="alpha(opacity=0)";
		bbackground.style.opacity=10;
		bbackground.style.filter="alpha(opacity=10)";
		btns[i].style.background="#000";
	}
	animate(as[num],{opacity:1},600,Tween.Linear);
	
	// animate(bbackground,{background:arrColor[num]},600,Tween.Linear);
	animate(bbackground,{opacity:1},600,Tween.Linear);
	bbackground.style.background=arrColor[num];
	btns[num].style.background="red";
}
var t=setInterval(function(){
		move("r")
	},3000);
bannerbox.onmouseover=function(){
	clearInterval(t);
	left.style.display="block";
	right.style.display="block";
}
bannerbox.onmouseout=function(){
	t=setInterval(function(){
		move("r")
	},3000);
	left.style.display="none";
	right.style.display="none";
}
for(var i=0;i<btns.length;i++){
	btns[i].index=i;
	btns[i].onmouseover=function(){
		for(var i=0;i<as.length;i++){
			as[i].style.opacity=0;
			as[i].style.filter="alpha(opacity=0)";
			bbackground.style.opacity=10;
			bbackground.style.filter="alpha(opacity=10)";
			btns[i].style.background="#000";
		}
		animate(as[this.index],{opacity:1},600,Tween.Linear);
		// as[this.index].style.opacity=1;

		// animate(bbackground,{background:arrColor[this.index]},600,Tween.Linear);
		animate(bbackground,{opacity:1},600,Tween.Linear);
		bbackground.style.background=arrColor[this.index];
		as[this.index].style.filter="alpha(opacity=100)";
		this.style.background="red";
		num=this.index;
	}
}
left.onclick=function(){
	move("l");
}
right.onclick=function(){
	move("r");
}
//中间遮罩开始
var center=getClassName("center");
var huan=$(".huan1");
var mask=getClassName("center-mask");
for(var i=0;i<center.length;i++){
	center[i].index=i;
	center[i].onmouseover=function(){
		mask[this.index].style.display="block";
	}
	center[i].onmouseout=function(){
		mask[this.index].style.display="none";
	}
}
//中间遮罩结束

//左侧定位
var fpLeft=$(".fp-left")[0];
var jump=$(".jump")[0];
var btn=$(".btn",jump);
var main=$(".maincontent")[0];
var foot=$(".foot",main);
var foot1=$(".foot1",main);
var btnColor=["#ea5f8d","#64c333","#f7a945","#19c8a9","#f15453","#0aa6e8","#dd2727","#dd2727"];
var searchTop=$(".search-top")[0];
var flag=true;
var flag1=false;
var btn2=$(".btn2")[0];
var fhdb=$(".fhdb")[0];
document.onscroll=function(){
	var tops=document.body.scrollTop||document.documentElement.scrollTop;
//顶部导航	
	if(tops>=700){
		if(flag1){
			animate(searchTop,{top:0});
			flag1=false;
			flag=true;
		}
	}else{
		if(flag){
			animate(searchTop,{top:-50});
			flag=false;
			flag1=true;
		}
	}


	if(tops>=670){
		jump.style.display="block";
	}else{
		jump.style.display="none";
	}

	for(var i=0;i<foot.length;i++){
		if(foot[i].offsetTop<=tops+70){
			for(var j=0;j<btn.length;j++){
				btn[j].style.background="#626262";
			}
			btn[i].style.background=btnColor[i];
			now=i;
		}else{
			btn[i].style.background="#626262";
		}
	}


	var ch=document.documentElement.clientHeight;
			for(var i=0;i<foot1.length;i++){
				if(foot1[i].offsetTop<=tops+ch){
					var imgs=$("img",foot1[i]);
					for(var j=0;j<imgs.length;j++){
						var src=imgs[j].getAttribute("data-src");
						imgs[j].src=src;
					}
				}
			}
}

document.body.scrollTop=1;
var now=0;
var obj=document.body.scrollTop?document.body:document.documentElement;
for(var i=0;i<btn.length;i++){
	btn[i].index=i;
	btn[i].onclick=function(){
		now=this.index;
		animate(obj,{scrollTop:foot[this.index].offsetTop-70},300,Tween.Linear);
		for(var j=0;j<btn.length;j++){
			btn[j].style.background="#626262";
		}
		btn[this.index].style.background=btnColor[this.index];
	}
	btn2.onclick=function(){
		animate(obj,{scrollTop:0},300,Tween.Linear);
	}
	fhdb.onclick=function(){
		animate(obj,{scrollTop:0},300,Tween.Linear);
	}
	btn[i].onmouseover=function(){
		var btnsColor=["#ea5f8d","#64c333","#f7a945","#19c8a9","#f15453","#0aa6e8","#000","#000"];
		for(var j=0;j<btn.length;j++){
			if(j!=now){
				btn[j].style.background="#626262";
			}
		}
		btn[this.index].style.background=btnsColor[this.index]
	}
	btn[i].onmouseout=function(){
		if(this.index!=now){
			btn[this.index].style.background="#626262";
		}
	}
}

//nav
var bbox=$(".banner-box")[0];
var nav=$(".nav",bbox);
var contentcon=$(".content-con",bbox);
var navv=$(".navv");
var navColor=["#e54077","#427def","#6347ed","#e541a7","#ed4177","#427def","#fa5c7a","#f7a831","#f7a831","#657def","#e32727","#4294f7","#f9a831","#3bc7b0","#dd2727","#3bc7b0"]
for(var i=0;i<nav.length;i++){
	nav[i].index=i;
	hover(nav[i],function(){
		contentcon[this.index].style.display="block";
		this.style.background="#fff";
		nav[this.index].style.color=navColor[this.index];
		navv[this.index].style.color=navColor[this.index];
		navv[this.index].style.fontWeight="bold";
	},function(){
		contentcon[this.index].style.display="none";
		this.style.background="#ededed";
		nav[this.index].style.color="#000";
		navv[this.index].style.color="#000";
		navv[this.index].style.fontWeight="normal";
	});
}



//主导航小动画开始
var mainnavbox=$(".mainnavbox")[0];
var mainnav=$(".mainnav",mainnavbox)[0];
var mnav=$(".nav",mainnav);
var blogo=$(".blogo");
for(var i=0;i<mnav.length;i++){
	mnav[i].index=i;
	hover(mnav[i],function(){
		blogo[this.index].style.display="block";
	},function(){
		blogo[this.index].style.display="none";
	});
}

//主导航小动画结束


//topnav下拉菜单开始
var topnav=$(".topnav-right")[0];
var yiji=$(".yiji"); 
var erji=$(".erji");
var yijia=$(".yijia");
for (var i=0;i<yiji.length;i++) {
		yiji[i].index=i;
		hover(yiji[i],function(){
			yiji[this.index].style.background="#fff";
			erji[this.index].style.display="block";
			yijia[this.index].style.color="#C40000";
			yijia[3].style.color="#999";
		},function(){
			yiji[this.index].style.background="";
			erji[this.index].style.display="none";
			yijia[this.index].style.color="#999";
		});
	}
//topnav下拉菜单结束

// //main照片动画开始
// var grid=$(".grid");
// for(var i=0;i<grid.length;i++){
// 	var oneimg=$(".oneimg",grid[i]);
// 	oneimg[i].index=i;
// 	hover(oneimg[i],function(){
// 		animate(oneimg(this.index),{right:-10});
// 	},function(){
// 		animate(oneimg(this.index),{right:0});
// 	})
// }
// //main照片动画结束

//输入框开始
var srk=$('.srk');
for(var i=0;i<srk.length;i++){
	srk[i].onfocus=function(){
		if(this.value=="百搭T恤 女神衣橱必备"){
			this.value="";
		}
	}
	srk[i].onblur=function(){
		if(this.value==""){
			this.value="百搭T恤 女神衣橱必备";
		}
	}
}
//输入框结束

//右侧开始
var mbarouter=$(".mbar-outer")[0];
var dingwei=$(".dingwei",mbarouter);
var tishi=$(".tishi",mbarouter);
var dingweia=$(".dingweia",mbarouter)[0];
var tishia=$(".tishia",mbarouter)[0];
hover(dingweia,function(){
	tishia.style.opacity=1;
	tishia.style.display="block";
	// animate(tishia,{opacity:1},300);
	animate(tishia,{left:-150},300);
},function(){
	tishia.style.opacity=0;
	tishia.style.display="none";
	// animate(tishia,{opacity:0},300);
	animate(tishia,{left:-200},300);
})
for(var i=0;i<tishi.length;i++){
	dingwei[i].index=i;
	hover(dingwei[i],function(){
		tishi[this.index].style.display="block";
		tishi[this.index].style.opacity=1;
		// animate(tishi[this.index],{opacity:1},300);
		animate(tishi[this.index],{left:-90},300)
	},function(){
		tishi[this.index].style.display="none";
		tishi[this.index].style.opacity=0;
		// animate(tishi[this.index],{opacity:0},300);
		animate(tishi[this.index],{left:-140},300)
	})
}
//右侧结束