/**
 * Created by thundersoft on 2017/9/14.
 */
$(function () {
    /*购买固定*/
    $(window).scroll(function () {
        var Wheight = $(window).scrollTop();
        if(Wheight>=100){
            $(".main_hjMR_buy").css("position","fixed");
        }else {
            $(".main_hjMR_buy").css("position","relative");
        }
    });
    /*自行车变成黄色*/
    $(".header_menu li").eq(1).find("p").find("a:first").addClass("hoverYellow");
    /*选择颜色*/
    var colorTimer;
    var colorCount = 0;
    var $mainBikeColorImg = $(".main_bike_color_img li");
    var $mainBikeColorChose = $(".main_bike_color_chose li");
    function setColor(cCount) {
        colorTimer = setInterval(function () {
            if(cCount<$mainBikeColorChose.length-1){
                cCount++;
            }else {
                cCount=0;
            }
            $mainBikeColorChose.eq(cCount).addClass("main_color_current").siblings().removeClass("main_color_current");
            $mainBikeColorImg.eq(cCount).stop(true,true).show("slow").siblings().hide("slow");
        },3000);
    }
    setColor(colorCount);
    $(".main_bike_color_chose ul li").click(function () {
        var index = $(this).index();
        clearInterval(colorTimer);
        $(this).addClass("main_color_current").siblings().removeClass("main_color_current");
        $(".main_bike_color_img ul li").eq(index).show().siblings().hide();
        setColor(index);
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
    /*公路弯把*/
    $(".details_ul_imgsmall li").hover(function () {
        var index = $(this).index();
        $(this).find("a").addClass("details_ul_imgsmall_current");
        $(this).siblings().find("a").removeClass("details_ul_imgsmall_current");

        $(".details_ul_img_one").eq(index).addClass("details_ul_img_current").siblings().removeClass("details_ul_img_current");
    });
})