$(function(){
//页面加载
$(".fh5co-loader").fadeOut("slow");
//页面特效
contentWayPoint();
})


window.onload=function(){
//	第二种图片轮播：无缝轮播
//  这种无缝轮播可以通过设置animate动画播放速度值和setInterval中的函数调用时间间隔实现间隔无缝轮播
var top="";
var left="";
var width="";
	if(window.screen.width>=768){//pc
		//此处很关键，在实现无疑轮播时这个宽度一定要比显示图片数量+1的宽度宽
		$(".silo-slider").height("560px");
		$(".shop").height("300px");
		$("#slider").height($("#slider>div").length*560*2+"px");
		$("#workspace").width($("#workspace>div").length*420*2+"px");
		$("#workspace").height("300px");
		$("#slider>div").height("560px");
		$("#workspace>div").width("400px");
		$("#workspace>div").height("300px");
		top="-560px";//向上移动的像素
		left="-420px"
	}else{//mobile
		var _scrollTopHeight=window.screen.width*3/5;
		$(".silo-slider").height(_scrollTopHeight+"px");
		$(".shop").height("200px");
		$("#slider").height($("#slider>div").length*_scrollTopHeight*2+"px");
		$("#workspace").width($("#workspace>div").length*window.screen.width*2+"px");
		$("#workspace").height("200px")
		$("#slider>div").height(_scrollTopHeight+"px");
		$("#workspace>div").width(window.screen.width+"px");
		$("#workspace>div").height("200px");
		top="-"+_scrollTopHeight+"px";//向上移动的像素
		left="-"+window.screen.width+"px";//向左移动的像素
	}
    function rollTwo(){
        $("#slider").animate({marginTop:top},500,"linear",function(){
            $("#slider").css({marginTop:"0px"});
            $("#slider div:first").remove().clone(true).appendTo("#slider");
        })
    }
    function rollOne(){
        $("#workspace").animate({marginLeft:left},8000,"linear",function(){
            $("#workspace").css({marginLeft:"0px"});
            $("#workspace div:first").remove().clone(true).appendTo("#workspace");
        })
    }
    var startRollTwo=setInterval(rollTwo,4000);
    var startRollOne=setInterval(rollOne,8000);
//      鼠标移入停止移出继续
    $("#slider").hover(function(){
        clearInterval(startRollTwo);
    },function(){
        startRollTwo=setInterval(rollTwo,4000);
    });
    $("#workspace").hover(function(){
        clearInterval(startRollOne);
    },function(){
        startRollOne=setInterval(rollOne,1000);
    });
}

//页面特效
var contentWayPoint = function() {
	var i = 0;
	$('.animate-box').waypoint( function( direction ) {

		if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
			
			i++;

			$(this.element).addClass('item-animate');
			setTimeout(function(){

				$('body .animate-box.item-animate').each(function(k){
					var el = $(this);
					setTimeout( function () {
						
						if ( el.hasClass('faded')) {
							el.addClass('fadeInUp animated-fast');
						} 

						el.removeClass('item-animate');
					},  k * 100, 'easeInOutExpo' );
				});
				
			}, 50);
			
		}

} , { offset: '85%' } );
};


$(window).scroll( function () {
    if(ScollPostion().top>1000){
    	//$(".top").css('display','block');  
    	$(".top").fadeIn("slow");
    }else{
    	$(".top").fadeOut("slow");
    	 //$(".top").css('display','none');  
    }
    if(ScollPostion().top>136){
    	$(".heade-nav").addClass('fixed');  
    }else{
    	 $(".heade-nav").removeClass('fixed');  
    }
});

function ScollPostion() { // 滚动条位置
    var t, l, w, h;
     if (document.documentElement && document.documentElement.scrollTop) {
        t = document.documentElement.scrollTop;
        l = document.documentElement.scrollLeft;
        w = document.documentElement.scrollWidth;
        h = document.documentElement.scrollHeight;
    } else  if (document.body) {
        t = document.body.scrollTop;
        l = document.body.scrollLeft;
        w = document.body.scrollWidth;
        h = document.body.scrollHeight;
    }
    return {
        top: t,
        left: l,
        width: w,
        height: h
    };
}

//置顶
$("#zhiding").click(function(){
	
    var ua = navigator.userAgent.toLocaleLowerCase();
    var browserType=null;
    var is360 = _mime("type", "application/vnd.chromium.remoting-viewer");
        
        if (isChrome() && is360) { 
            scrollToptimer = setInterval(function () {
			    var top = document.body.scrollTop || document.documentElement.scrollTop;
			    var speed = top / 4;
			    if (document.body.scrollTop!=0) {
			        document.body.scrollTop -= speed;
			    }else {
			        document.documentElement.scrollTop -= speed;
			    }
			    if (top == 0) {
			        clearInterval(scrollToptimer);
			    }
			}, 30); 
       }else if(isChrome()){
        	$('html').animate({ scrollTop: 0 }, 500)
        }else{
        	scrollToptimer = setInterval(function () {
			    var top = document.body.scrollTop || document.documentElement.scrollTop;
			    var speed = top / 4;
			    if (document.body.scrollTop!=0) {
			        document.body.scrollTop -= speed;
			    }else {
			        document.documentElement.scrollTop -= speed;
			    }
			    if (top == 0) {
			        clearInterval(scrollToptimer);
			    }
			}, 30); 
        }
        document.body.scrollTop = document.documentElement.scrollTop = 0;
	 
})

function isChrome(){
    var ua = navigator.userAgent.toLowerCase();

    return ua.indexOf("chrome") > 1;
}

//测试mime
function _mime(option, value) {
    var mimeTypes = navigator.mimeTypes;
    for (var mt in mimeTypes) {
        if (mimeTypes[mt][option] == value) {
            return true;
        }
    }
    return false;
}