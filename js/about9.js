/**
 * Created by niki_ty on 2017/9/16.
 */
$(function () {
    /*延迟加载*/
    $(function() {
        $("img.lazy").lazyload({
            /*placeholder : "../images/about9_tokyo/loadingAnimation.gif",*/
           /* effect      : "fadeIn",*/
            /*threshold : 20*/
            effect:"slideDown",
            effectspeed:400,
            failure_limit:10
        });

    });
   /*导航动画*/
   $(".new_bar a").hover(function () {
       var index = $(this).index();
       if(index == 5||index==6){
           $(this).toggleClass("current_gif1");
       }
       $(this).toggleClass("current_gif");
   });
   /*固定*/
    $(window).scroll(function () {
        var Wheight = $(window).scrollTop();
        if(Wheight>=630){
            $(".content_nav").addClass("mainbav_fixed");
        }else {
            $(".content_nav").removeClass("mainbav_fixed");
        }
    });
    /*tab切换*/
    $(".content_nav a").click(function () {
        $(this).addClass("current_nav").siblings().removeClass("current_nav");
        var index = $(this).index();
        if(index==2||index==3){
            $(".new_header img:eq(1)").addClass("header_show").siblings().removeClass("header_show")
        }else{
            $(".new_header img:eq(0)").addClass("header_show").siblings().removeClass("header_show")
        }
        $(".content_views").eq(index).addClass("current_view").siblings().removeClass("current_view");
    });
});