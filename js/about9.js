/**
 * Created by niki_ty on 2017/9/16.
 */
$(function () {
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
            $(".new_header img").attr("src","../images/about9_tokyo/index-header-top.jpg")
        }
        $(".content_views").eq(index).addClass("current_view").siblings().removeClass("current_view");
    });
});