/**
 * Created by niki_ty on 2017/9/17.
 */
$(function () {
    /*细节展示*/
    $(".view_nav li").click(function () {
        var index = $(this).index();
        /*var index2 = $(this).parent().parent().index();*/
        var $viewBigImg = $(".view_bigImg img");
        var dec;
        /*switch (index2){
            case 0:dec = "k";
                break;
            case 1:dec = "w";
                break;
            case 2:dec = "b";
                break;
        }*/
        dec = "b";
        $(this).addClass("view_nav_li_active").siblings().removeClass("view_nav_li_active");
        switch (index){
            case 0:$viewBigImg.attr("src","../images/about17_lock/view_product/"+dec+"/1.jpg");
                break;
            case 1:$viewBigImg.attr("src","../images/about17_lock/view_product/"+dec+"/2.jpg");
                break;
            case 2:$viewBigImg.attr("src","../images/about17_lock/view_product/"+dec+"/3.jpg");
                break;
            case 3:$viewBigImg.attr("src","../images/about17_lock/view_product/"+dec+"/4.jpg");
                break;
            case 4:$viewBigImg.attr("src","../images/about17_lock/view_product/"+dec+"/5.jpg");
                break;
        }
    });
    /*tab链接*/
    $(".details_SH a").click(function () {
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        switch(index){
            case 0:$("body,html").animate({scrollTop:900},500);
                break;
            case 1:$("body,html").animate({scrollTop:10934},500);
                break;
            case 2:$("body,html").animate({scrollTop:11391},500);
                break;
        }
    });

    /*固定导航*/
    $(window).scroll(function () {
        var Wheight = $(window).scrollTop();
        if(Wheight>=900){
            $(".details_SH").addClass("fixed");
        }else {
            $(".details_SH").removeClass("fixed");
        }
    });
});