/**
 * Created by thundersoft on 2017/9/15.
 */
$(function () {
    /*专题变成黄色*/
    $(".header_menu li .header_menu_top:eq(2)").find("a").addClass("hoverYellow");
    /*选择颜色*/
    $(".buy_info_btn").click(function () {
        $(this).siblings().filter("ul").css("display","block");
        $(this).parent().siblings().find("ul").hide();
    });
    $(".buy_info_list li").click(function () {
        var html = $(this).html();
        $(this).parent().prev().html(html);
        $(this).parent().hide();

    }).hover(function () {
        $(this).addClass("current").siblings().removeClass("current");
    });

    /*根据颜色改变左边图片展示*/
    $(".buy_info:first li").click(function () {
        var index = $(this).index();
        $(".product_left_img").eq(index).addClass("product_left_current").siblings().removeClass("product_left_current");
    });

    /*细节展示*/
    $(".view_nav li").click(function () {
        var index = $(this).index();
        var index2 = $(this).parent().parent().index();
        var $viewBigImg = $(".view_bigImg img");
        var dec;
            switch (index2){
                case 0:dec = "k";
                      /* $viewBigImg.attr("src","../images/about6_TK/view_product/"+dec+"/1.jpg");*/
                    break;
                case 1:dec = "w";
                    /*$viewBigImg.attr("src","../images/about6_TK/view_product/"+dec+"/1.jpg");*/
                    break;
                case 2:dec = "b";
                    /*$viewBigImg.attr("src","../images/about6_TK/view_product/"+dec+"/1.jpg");*/
                    break;
            }
        $(this).addClass("view_nav_li_active").siblings().removeClass("view_nav_li_active");
        switch (index){
            case 0:$viewBigImg.attr("src","../images/about6_TK/view_product/"+dec+"/1.jpg");
                break;
            case 1:$viewBigImg.attr("src","../images/about6_TK/view_product/"+dec+"/2.jpg");
                break;
            case 2:$viewBigImg.attr("src","../images/about6_TK/view_product/"+dec+"/3.jpg");
                break;
            case 3:$viewBigImg.attr("src","../images/about6_TK/view_product/"+dec+"/4.jpg");
                break;
            case 4:$viewBigImg.attr("src","../images/about6_TK/view_product/"+dec+"/5.jpg");
                break;
        }
    });
    /*数量加减*/
    $(".buy_info_add").click(function () {
            var val = $(".buy_info_input").val();
            val = parseInt(val);
            if (val<5){
                $(".buy_info_input").val(val+1);
            }else {
                /*触发遮罩*/
                $(".bomb_box1").show();
                $(".mask").show();
            }
        }
    );
   /* 加入购物车*/
   $(".buy_now").click(function () {
       /*触发遮罩*/
       $(".bomb_box3").show();
       $(".mask").show();
   });

    $(".buy_info_less").click(function () {
            var val = $(".buy_info_input").val();
            val = parseInt(val);
            if (val>1){
                $(".buy_info_input").val(val-1);
            }else {
                /*触发遮罩*/
                $(".bomb_box2").show();
                $(".mask").show();
            }
        }
    );

    /*遮罩*/
    $(".box_btn").click(function () {
       $(".bomb_box").hide();
       $(".mask").hide();
    });

    /*点赞等*/
    $(".view_share .item").click(function () {
        var index = $(this).index();
        switch (index){
            case 0:$(this).find("a").css("background-position","-179px -5px");
                break;
            case 1:$(this).find("a").css("background-position","-63px -5px");
                break;
            case 2:$(this).find("a").css("background-position"," -294px -5px");
                break;
        }
    });
    /*固定导航*/
    $(window).scroll(function () {
        var Wheight = $(window).scrollTop();
        if(Wheight>=900){
            $(".details_nav").addClass("fixed");
        }else {
            $(".details_nav").removeClass("fixed");
        }
    });
    /*展开关于*/
    $(".questions li").click(function () {
        $(this).toggleClass("show");
        $(this).find(".answer").toggle();
        $(this).find("em").toggleClass("open").toggleClass("close");
    });
    /*tab链接*/
    $(".details_nav a").click(function () {
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        switch(index){
            case 0:$("body,html").animate({scrollTop:900},500);
                break;
            case 1:$("body,html").animate({scrollTop:4885},500);
                break;
            case 2:$("body,html").animate({scrollTop:5320},500);
                break;
        }
    });
});