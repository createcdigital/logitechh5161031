

window.onload=function(){
    
    //loading页
    $('.loading').fadeOut(1000);
    //音乐播放
    $('.audio-icon').fadeIn(1000);
    $('.audio-icon').addClass('audio-icon-animation');
    $('#audio-player').attr('autoplay','autoplay');
    $("#audio-player")[0].play();
    $('.audio-icon').on('touchend',function(){
    	$('.audio-icon').toggleClass('audio-icon-animation');
//  	$('#audio-player').pause();
    	var audio = document.getElementById('audio-player');  
                if(audio!==null){                                 
                    if(!audio.paused)  
                    {                 
                        audio.pause();
                    }else {
                    	audio.play();
                    }
                }                   	
    })
   
       
       
	//第一页
	$('.btn').on('touchend',function(){
		
		var mySwiper = new Swiper('.swiper-container',{
	 	  direction: 'vertical',
	      loop: false,	    
		  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		  }, 
		  onSlideChangeEnd: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		    if(swiper.activeIndex==2){
		    	$('.pg3Btn').delay(3500).fadeIn(1000);
		    }else {
		    	$('.pg3Btn').fadeOut();
		    }
		    if(swiper.activeIndex==3){
		    	$('.pg4Title1').delay(1200).fadeOut(1000);
		    	$('.pg4Title2').delay(2800).fadeOut(1000);
		    	$('.pg4Title4').delay(5200).fadeOut(1000,"linear");		    			   		    			    	
		    }
		    
		  } 		    		    
	  })
				
		$(this).hide();
		$('.bgGif').fadeOut(600);    
        $('.pg1Bg').fadeIn(1000);
		$('.des').fadeIn(1000);
//      $('.pg1_Gif1,.pg1_Gif2').fadeIn(1000);       
        $('.pg1_Gif2').fadeIn(1000);
		$('.count').delay(1500).animate({
			opacity:'1'
		},1000);
		$('.cool').delay(2500).animate({
			opacity:'1'
		},1000);	    	        
		$('.next1').delay(4000).animate({
			opacity:'1'
		},1000);		

	})
	
	//第二页
	$('.pg2Gif1,.pg2Click').on('touchend',function(){
		$('.pg2Gif1,.pg2Click').hide();
		
		$('.pg2Gif2').css('display','block');
		$('.pg2text1').delay(2000).animate({
			opacity:'1'
		},500);
		$('.pg2text2_1').delay(2500).animate({
			opacity:'1'
		},500);
		$('.pg2text2_2').delay(3000).animate({
			opacity:'1'
		},500);
		$('.pg2text2_3').delay(3500).animate({
			opacity:'1'
		},500);
		$('.next2').delay(5000).animate({
			opacity:'1'
		},500);
	})
	
	//第四页点击跳转链接
	$('.pg4Btn').on('touchend',function(){
		window.location.href="http://sjtm.me/s/BSUCp?tm=cbcc8f";
		_hmt.push(['_trackEvent','img','touchend','logitech',1]);
	})
	
	//获取算法签名 从后台
//  $.get('../weChat/weChatShareJS.php', function(e) {
//      wx.config({
//	        debug: false,
//	        appId: '<?php echo $signPackage["appId"]; ?>',
//	        timestamp: '<?php echo $signPackage["timestamp"]; ?>',
//	        nonceStr: '<?php echo $signPackage["nonceStr"]; ?>',
//	        signature: '<?php echo $signPackage["signature"]; ?>',
//	        jsApiList: [
//	            'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'openLocation'
//	        ]
//	    });
//  })
//	var app = app || {};
//  app.wechat = function(){};
//  app.wechat.open_location = function(){
//  	    wx.ready(function(){
//  	    	   //调用地图api
//  	    	   wx.openLocation({
//			    latitude: 31.2386836358, // 纬度，浮点数，范围为90 ~ -90
//			    longitude: 121.4483853572, // 经度，浮点数，范围为180 ~ -180。
//			    name: '上海', // 位置名
//			    address: '上海市静安区', // 地址详情说明
//			    scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
//			    infoUrl: 'www.baidu.com' // 在查看位置界面底部显示的超链接,可点击跳转
//			});
//  	    });  	
//  }
//  app.wechat.open_location();
//  
//  
//  //地图测试
//	$('#loco').on('touchend',function(){
//		alert(1234);
//		app.wechat.open_location();
//	})

	 

}
