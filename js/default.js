/**
 * Created by thundersoft on 2017/9/13.
 */
/*header菜单显示隐藏*/
$(function () {
    $(".header_menu_bike").hover(function () {
        $(".header_bike").slideToggle("fast");
        /*$(this).find("a").toggleClass("hoverYellow");*/
    });
    $(".header_menu_thing").hover(function () {
        $(".header_thing").slideToggle("fast");
        /*$(this).find("a").toggleClass("hoverYellow");*/
    });
    /*返回顶部*/
    $(window).scroll(function () {
        var Wheight = $(window).scrollTop();
        if(Wheight>300){
            $(".back").addClass("show");
        }else {
            $(".back").removeClass("show");
        }
    });
    $(".back").click(function () {
        $("body,html").animate({scrollTop:0},500);
        /*document.documentElement.scrollTop = document.body.scrollTop = 0;*/
    });
    /*header bike链接跳转*/
    $(".header_bike_1").click(function () {
        window.location.href = "../html/about2_YHMINI.html"
    });
    $(".header_bike_2").click(function () {
        window.location.href = "../html/about3_YH2017.html"
    });
    $(".header_bike_3").click(function () {
        window.location.href = "../html/about4_HJ2017.html"
    });
})
