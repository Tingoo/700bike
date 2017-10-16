/**
 * Created by thundersoft on 2017/9/7.
 */
$(function () {
    /*首页显示为黄色*/
    $(".header_menu li").eq(0).find("p").find("a:first").addClass("hoverYellow");
    /*main轮播*/
    var imgTimer;
    var start = 0;
    var $liImg = $(".main_carousel_wrap ul li");
    var $liChose = $(".main_carousel_chose ul li");
    function setcarousel(index) {
        imgTimer = setInterval(function () {
            if(index<$liImg.length-1){
                index++;
            }else {
                index = 0;
            }
            $liImg.eq(index).show().siblings().hide();
            $liChose.eq(index).addClass("current").siblings().removeClass("current");
        },3000)
    }
    setcarousel(start);
    $liChose.hover(function () {
        var choseIndex = $(this).index();
        $liImg.eq(choseIndex).show().siblings().hide();
        $liChose.eq(choseIndex).addClass("current").siblings().removeClass("current");
        if (imgTimer){
            clearInterval(imgTimer);
        }
    },function () {
        setcarousel($(this).index());
    });
    /*骑行好物延迟加载*/
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop>=2000){
            $(".main_thing_one").addClass("showTheCard");
        }else {
            $(".main_thing_one").removeClass("showTheCard");
        }
    });
    /*header bike链接跳转*/
    $(".header_bike_1").click(function () {
        window.location.href = "html/about2_YHMINI.html"
    });
    $(".header_bike_2").click(function () {
        window.location.href = "html/about3_YH2017.html"
    });
    $(".header_bike_3").click(function () {
        window.location.href = "html/about4_HJ2017.html"
    });
    $(".header_bike_4").click(function () {
        window.location.href = "html/about2_YHMINI.html"
    });
    $(".header_bike_5").click(function () {
        window.location.href = "html/about3_YH2017.html"
    });
    $(".header_bike_6").click(function () {
        window.location.href = "html/about1_HJLite.html"
    });
    $(".header_bike_7").click(function () {
        window.location.href = "html/about18_HJMini.html"
    });
});