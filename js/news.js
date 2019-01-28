var newsList1=new Array();

newsList1[0] ={url:"img/news/news01.jpg",title:"恭贺喜乐库二零一八年秋冬订货会圆满谢幕！",sub:"八月三十一日，经过全司同仁的共同努力，为时三天的喜乐库2018年秋冬订货会终于圆满谢幕。",time:"2018-09-03"}
newsList1[1] ={url:"img/news/news02.jpg",title:"恭喜喜乐库2018年第三期新店培训圆满结束！",sub:"2018年7月26日下午，经过充实又忙碌的两天时间，由深圳市喜乐库商贸有限公司组织的2018年度第三期（7.24日-7.26日）新店培训圆满完结。",time:"2018-07-27"}
newsList1[2] ={url:"img/news/news03.jpg",title:"恭喜喜乐库加盟店江西赣州店盛大开业",sub:"恭喜喜乐库加盟店江西赣州店盛大开业！祝生意兴隆！！财源滚滚！！",time:"2018-06-16"}
newsList1[3] ={url:"img/news/news04.jpg",title:"恭喜喜乐库加盟店福建金湖路店盛大开业！",sub:"恭喜喜乐库加盟店福建金湖路店盛大开业！祝生意兴隆！！财源滚滚！！",time:"2018-04-02"}
newsList1[4] ={url:"img/news/news05.jpg",title:"恭喜喜乐库加盟店 福建集美乐活小镇店开业大吉！",sub:"恭喜喜乐库加盟店 福建集美乐活小镇店开业大吉！祝生意兴隆！财源滚滚！！",time:"2017-05-22"}
newsList1[5] ={url:"img/news/news06.jpg",title:"恭喜喜乐库 福建福州晋安区奚里路点开业大吉！",sub:"恭喜喜乐库 福建福州晋安区奚里路点开业大吉，祝生意兴隆！！财源广进！！",time:"2018-05-20"}


var newsList2=new Array();

newsList2[0] ={url:"img/news/news07.jpg",title:"感恩母亲节！喜乐库携手毕节市黔西县开展爱心捐赠",sub:"感恩母亲节，感恩社会，喜乐库携手贵州省毕节市黔西县政府开展爱心捐赠活动，用实际行动回馈社会。祝福妈妈们节日快乐！",time:"2017-05-14"}
newsList2[1] ={url:"img/news/news08.jpg",title:"恭喜喜乐库加盟店 福建莆田万科点开业大吉！",sub:"恭喜喜乐库加盟店 福建莆田万科点开业大吉，祝财源滚滚！生意兴隆！！",time:"2017-05-01"}
newsList2[2] ={url:"img/news/news09.jpg",title:"喜乐库全体员工消防演习圆满结束",sub:"为了加强日常工作安全，喜乐库举办了一次全体员工消防演习，在3分钟内所有员工撤离到安全地带，通过，此次演习使员工了解了消防基础知识，提高了安全防范意识，增强自...",time:"2016-11-19"}
newsList2[3] ={url:"img/news/news10.jpg",title:"恭喜喜乐库 广东湛江市霞山鑫海店开业大吉",sub:"恭喜喜乐库 广东湛江市霞山鑫海店开业大吉",time:"2016-10-04"}
newsList2[4] ={url:"img/news/news11.jpg",title:"恭喜喜乐库 福建莆田黄石东井店开业大吉",sub:"恭喜喜乐库福建莆田黄石东井店开业大吉，生意兴隆，财源广进！！",time:"2016-10-04"}
newsList2[5] ={url:"img/news/news12.jpg",title:"恭祝喜乐库河源市龙川县龙悦荟店开业大吉！",sub:"恭祝喜乐库河源市龙川县龙悦荟店开业大吉！祝生意兴隆！财源滚滚！！",time:"2016-10-04"}


var newsList3=new Array();

newsList3[0] ={url:"img/news/news13.jpg",title:"恭喜喜乐库 甘肃兰州建设路店开业大吉",sub:"恭喜喜乐库 甘肃兰州建设路店开业大吉，祝开业大吉！！ ",time:"2016-10-04"}
newsList3[1] ={url:"img/news/news14.jpg",title:"恭喜喜乐库 福建莆田城厢区荣华嘉园店开业大吉",sub:"恭喜喜乐库福建莆田城厢区荣华嘉园店开业大吉！生意兴隆！！",time:"2015-12-25"}
newsList3[2] ={url:"img/news/news15.jpg",title:"喜乐库2016年年会",sub:"喜乐库2016年年会",time:"2016-01-28"}
newsList3[3] ={url:"img/news/news16.jpg",title:"喜乐库北京五棵松店,3月18号隆重开业",sub:"3月18日，喜乐库北京五棵松店热闹非凡，因为喜乐库专卖店隆重开业啦！",time:"2016-03-16"}
newsList3[4] ={url:"img/news/news17.jpg",title:"喜乐库山区送温暖",sub:"深圳市喜乐库商贸有限公司组织山区学校献爱心“暖冬善缘”活动，向重庆綦江的数所学校发放爱心物资！",time:"2015-12-25"}
newsList3[5] ={url:"img/news/news18.jpg",title:"喜乐库首届招商会圆满成功",sub:"2015年10月24日，深圳市喜乐库商贸有限公司举行第一届全国招商大会，会议现场人员爆满! 加盟商积极与公司领导进行现场问答互动环节。",time:"2015-12-25"}





var page=new Array();
page[0]=newsList1;
page[1]=newsList2;
page[2]=newsList3;






window.onload=function(){
	var oDiv="";
	var pge=""
	if(window.screen.width>=768){
		for(i in page){
			var oDivChild="";
				for(j in page[i]){
		            oDivChild +='<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 "> '+
						        	'<div class="store">'+
									'<div style="background: url('+page[i][j].url+') no-repeat;"></div>'+
									'<p>'+page[i][j].title+'</p>'+
									'<p>'+page[i][j].sub+'</p>'+
									'<p><i class="iconfont icon-shijian"></i>'+page[i][j].time+'</p>'+
									'</div>'+
					            '</div>'
		           }
				oDiv += '<div class="row">'+
						oDivChild+
						'</div>';
				var num=parseInt(i)+1;
				pge+='<li>'+num+'</li>'
		}
	}else{
   		var oDivChild="";
			for(j in page[0]){
	            oDivChild +='<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 "> '+
					        	'<div class="store">'+
									'<div style="background: url('+page[0][j].url+') no-repeat;"></div>'+
									'<p>'+page[0][j].title+'</p>'+
									'<p>'+page[0][j].sub+'</p>'+
									'<p><i class="iconfont icon-shijian"></i>'+page[0][j].time+'</p>'+
								'</div>'+
				            '</div>'
	           }
			oDiv += '<div class="row">'+
					oDivChild+
					'</div>';
	}
	
	$("#slideToolbar").html(oDiv);
	$("#page").html(pge);
	$("#page li").eq(0).addClass("sin");
	
	var sliderWidth=0;//父容器宽度
	var num=page.length;//子元素个数
	//标识是否可点击
	var flag=1;
	if(window.screen.width>=768){
			sliderWidth=$("#_f").width();
			sliderHeight=$(".slideToolbar .row").eq(0).height();
			//父容器宽高
			$(".slideToolbar").width(num*2*sliderWidth+"px")
			$(".slideToolbar").height("auto")
			//子容器宽高
			$(".slideToolbar .row").width(sliderWidth+"px")
			$(".slideToolbar .row").height("auto")
	}
	//mobile
	else{
		
	}
	
	
	//上一页prev
	$(".prev").bind("click",function(){
		if(flag>1){
			flag=flag-1;
			$(".slideToolbar").animate({marginLeft:"-"+sliderWidth*(flag-1)+"px"},500,"linear")
			$(".prev,.next").removeClass("last")
			if(flag==1){
				$(this).addClass("last");
			}
			sin();
		}
	
	})
	
	
	//下一页next
	$(".next").bind("click",function(){
		if(flag<num){
			flag=flag+1;
			$(".slideToolbar").animate({marginLeft:"-"+sliderWidth*(flag-1)+"px"},500,"linear")
			$(".prev,.next").removeClass("last")
			if(flag==num){
				$(this).addClass("last");
			}
			sin()
		}
	})
	
	
	//页码事件
	$(".page li").bind("click",function(){	
		flag=$(this).index()+1;
		$(".slideToolbar").animate({marginLeft:"-"+sliderWidth*(flag-1)+"px"},500,"linear")
		$(".prev,.next").removeClass("last")
		if(flag==1){
			$(".prev").addClass("last");
		}
		if(flag==num){
				$(".next").addClass("last");
			}
		sin();
	})
	
	function sin(){
		$(".page li").removeClass("sin");
		$(".page li").eq(flag-1).addClass("sin");
	}

    $("#more").bind("click",function(){
    	if(flag<page.length){
    		var oDivChild="";
			for(j in page[flag]){
	            oDivChild +='<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 "> '+
					        	'<div class="store">'+
									'<div style="background: url('+page[flag][j].url+') no-repeat;"></div>'+
									'<p>'+page[flag][j].title+'</p>'+
									'<p>'+page[flag][j].txt+'</p>'+
									'<p><i class="iconfont icon-shijian"></i>'+page[flag][j].time+'</p>'+
								'</div>'+
				            '</div>'
	           }
			oDiv += '<div class="row">'+
					oDivChild+
					'</div>';
		flag=flag+1;
    	$("#slideToolbar").append(oDiv);
    	}
    	else{
    		$("#more").html("已经加载全部")
    	}
    	
    })
}


































