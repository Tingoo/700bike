/**
 * Created by thundersoft on 2017/9/12.
 */
$(function () {
    /*自行车变成黄色*/
    $(".header_menu li").eq(1).find("p").find("a:first").addClass("hoverYellow");
    /*选择颜色*/
    $(".main_bike_color_chose ul li").click(function () {
        var index = $(this).index();
        $(this).addClass("main_color_current").siblings().removeClass("main_color_current");
        $(".main_bike_color_img ul li").eq(index).show().siblings().hide();
    });
    /*保持肆意飞扬的细节*/
    var imgTimer;
    var start = 0;
    var $liImg = $(".main_bike_details_ul2 li");
    var $liChose = $(".main_bike_details_ul1 li");
    function setcarousel(index) {
        imgTimer = setInterval(function () {
            if(index<$liImg.length-1){
                index++;
            }else {
                index = 0;
            }
            $liImg.eq(index).addClass("details_ul2_current").siblings().removeClass("details_ul2_current");
            $liChose.eq(index).addClass("details_ul1_current").siblings().removeClass("details_ul1_current");
        },3000)
    }
    setcarousel(start);
    $liChose.hover(function () {
        var choseIndex = $(this).index();
        $liImg.eq(choseIndex).addClass("details_ul2_current").siblings().removeClass("details_ul2_current");
        $liChose.eq(choseIndex).addClass("details_ul1_current").siblings().removeClass("details_ul1_current");
        if (imgTimer){
            clearInterval(imgTimer);
        }
    },function () {
        setcarousel($(this).index());
    });

    /* 加入购物车*/
    $(".buy_now").click(function () {
        /*触发遮罩*/
        $(".bomb_box3").show();
        $(".mask").show();
    });
    /*遮罩*/
    $(".box_btn").click(function () {
        $(".bomb_box").hide();
        $(".mask").hide();
    });


});