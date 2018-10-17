$(function () {
    $("#topnav li").on("click", function () {
        $(this).addClass("start").siblings().removeClass("start");
    });
    //高清大图show
    $("#Smailllist li").on("click",function(){
        $(this).children(".mask").css("display","block");
        $(this).siblings().children(".mask").css("display","none");
        var path=$(this).find("img").attr('rel');
        $("#bigPic").attr('src',path);
        var _index=$(this).index()+1;
        $("#curNum").html(_index);
        //$("#infoTxt").html() 
    });
    $("#goleft").on("click",function(){
        $("#Smailllist").css("left","0px");
    })
    $("#goright").on("click",function(){
        $("#Smailllist").css("left","-622px");
    });
})
//右侧轮播 s
var nbb_ztc_74 = 0;
var pic_count_ztc_74 = 2;
var showNumbb_ztc_74 = document.getElementById("numbb_ztc_74");
function Meabb_ztc_74(value) {
    nbb_ztc_74 = value;
    setBgbb_ztc_74(value);
    playsbb_ztc_74(value);
    consbb_ztc_74(value);
}
function setBgbb_ztc_74(value) {
    for (var i = 0; i < pic_count_ztc_74; i++)
        if (value == i) {
            showNumbb_ztc_74.getElementsByTagName("td")[i].className = 'bigon';
        }
        else {
            showNumbb_ztc_74.getElementsByTagName("td")[i].className = 'bigoff';
        }
}
function playsbb_ztc_74(value) {
    try {
        with (fcbb_ztc_74) {
            filters[0].Apply();
            for (i = 0; i < pic_count_ztc_74; i++)i == value ? children[i].style.display = "block" : children[i].style.display = "none";
            filters[0].play();
        }
    }
    catch (e) {
        var divlist = document.getElementById("fcbb_ztc_74").getElementsByTagName("div");
        for (i = 0; i < pic_count_ztc_74; i++) {
            i == value ? divlist[i].style.display = "block" : divlist[i].style.display = "none";
        }
    }


}
function consbb_ztc_74(value) {
    try {
        with (conbb_ztc_74) {
            for (i = 0; i < pic_count_ztc_74; i++)i == value ? children[i].style.display = "block" : children[i].style.display = "none";
        }
    }
    catch (e) {
        var divlist = document.getElementById("conbb_ztc_74").getElementsByTagName("div");
        for (i = 0; i < pic_count_ztc_74; i++) {
            i == value ? divlist[i].style.display = "block" : divlist[i].style.display = "none";
        }
    }
}

function clearAutobb_ztc_74() { clearInterval(autoStartbb_ztc_74) }
function setAutobb_ztc_74() { autoStartbb_ztc_74 = setInterval("autobb_ztc_74(nbb_ztc_74)", 3000) }
function autobb_ztc_74() {
    try {
        nbb_ztc_74++;
        if (nbb_ztc_74 > pic_count_ztc_74 - 1) nbb_ztc_74 = 0;
        Meabb_ztc_74(nbb_ztc_74);
    } catch (e) { }
}
function subbb_ztc_74() {
    nbb_ztc_74--;
    if (nbb_ztc_74 < 0) n = pic_count_ztc_74 - 1;

    Meabb_ztc_74(nbb_ztc_74);
}
setAutobb_ztc_74();

//右侧轮播 e


//嘉宾
var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay:{
        stopOnLastSlide:true
    }
})