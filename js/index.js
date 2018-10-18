$(function () {
    $("#topnav li").on("click", function () {
        $(this).addClass("start").siblings().removeClass("start");
    });
    //请求主页数据
    $.ajax({
        type : "GET",
        url : "http://show.smartqmx.com/api/bbs",
        success : function (result) {
            /*顶部大图*/
            var topImgUrl=result.data.cur.image;
            $("#newstop1").find("img").attr("src",topImgUrl);
            //右侧轮播图
            var focusData=result.data.cur.focus;
            data1={
                focusData:focusData
            };
            var focusHtml=template('lunImg',data1);
            document.getElementById('lunbo').innerHTML=focusHtml;
            //视频
            var videoUrl=result.data.cur.video;
            var videoImg=result.data.cur.thumb;
            $("#container").attr("poster",videoImg);
            //初始化视频
            let player = videojs('container',{
                //像data-setup那样设置的参数
            },function onPlayerReady(){
                //视频播放器初始化完毕，就会调用这个回调函数
                this.src({
                src: videoUrl,
                type:'video/mp4'
                });
            });
            //现场嘉宾
            var guestSpeakData=result.data.cur.guest_speak;
            data2={
                guestSpeakData:guestSpeakData
            };
            var guestSpeakHtml=template('guestDataImg',data2);
            document.getElementById('guestBox').innerHTML= guestSpeakHtml;
            var guestSpeakHtml=template('guestDataText',data2);
            document.getElementById('gtext').innerHTML= guestSpeakHtml;
            //现场高清大图
            var nowBigImg=result.data.cur.images;
            $("#infoTxt p").html(nowBigImg[0].title);
            $("#tatolNum").html('/'+nowBigImg.length);
            data3={
                nowBigImg:nowBigImg
            };
            var nowBigImgHtml=template('nowBigImg',data3);
            document.getElementById('Smailllist').innerHTML= nowBigImgHtml;
            //与会嘉宾
            var jiaBi=result.data.cur.guest;
            data4={
                jiaBi:jiaBi
            };
            var jbHtml=template('jiaBi',data4);
            document.getElementById('yhjb').innerHTML= jbHtml;
            //论坛议程
            var charu=result.data.cur.program;
            $("#charu").append(charu);
            //启明星最新活动
            var zuixin=result.data.history;
            data5={
                zuixin:zuixin
            };
            var zxHtml=template('zuixin',data5);
            document.getElementById('zuixinbox').innerHTML= zxHtml;
        }
    });
     //高清大图show
     $("#Smailllist li").eq(0).css("display","block");
     $("#Smailllist").on("click","li",function(){
        $(this).children(".mask").css("display","block");
        $(this).siblings().children(".mask").css("display","none");
        var path=$(this).find("img").attr('rel');
        $("#bigPic").attr('src',path);
        var _index=$(this).index()+1;
        $("#curNum").html(_index);
        var title=$(this).find("img").attr('title');
        $("#infoTxt p").html(title);
    });
    $("#goleft").on("click",function(){
        $("#Smailllist").css("left","0px");
    })
    $("#goright").on("click",function(){
        $("#Smailllist").css("left","-622px");
    });
    //新闻列表
    $.ajax({
        type : "GET",
        url : "http://show.smartqmx.com/api/News/newsList",
        success : function (result) {
           var newsContent=result.data;
           var data = {
                newsContent: newsContent
            };
           var html=template('news',data);
           document.getElementById('newsContent').innerHTML = html;
        }
    });
    var mySwiper1 = new Swiper ('.swipe1', {
        observer:true,//修改swiper自己或子元素时，自动初始化swiper 
        observeParents:true,//修改swiper的父元素时，自动初始化swiper 
        loop: true, // 循环模式选项
        autoplay:{
            stopOnLastSlide:true
        }
    });
    //演讲嘉宾
    var mySwiper2 = new Swiper ('.swipe2', {
        observer:true,//修改swiper自己或子元素时，自动初始化swiper 
        observeParents:true,//修改swiper的父元素时，自动初始化swiper 
        loop: true, // 循环模式选项
        autoplay:{
            stopOnLastSlide:true
        }
    });
    //进入详情
    $("#newsContent").on("click",".newsbox",function(){
        console.log($(this).attr("data-id"));
        var id=$(this).attr("data-id");
        window.location.href="/news.html?id="+id;
    })
})


