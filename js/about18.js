/**
 * Created by niki_ty on 2017/9/17.
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
            /*$mainBikeColorImg.eq(cCount).animate({opacity:1,left:0},1000).siblings().animate({opacity:0,left:"-150%"},1000);
            $mainBikeColorImg.eq(cCount).siblings().animate({opacity:0,left:"-150%"},1000);*/
            $(".main_bike_color_img ul").stop(true,true).animate({marginLeft:-3640+cCount*910+"px"},1000);
            $mainBikeColorImg.eq(cCount-1).animate({opacity:0},1000).animate({opacity:1},1000);


        },3000);
    }
    setColor(colorCount);
    $(".main_bike_color_chose ul li").click(function () {
        var index = $(this).index();
        clearInterval(colorTimer);
        $(".main_bike_color_img ul").stop(true,true).animate({marginLeft:-3640+index*910+"px"},1000);
        $mainBikeColorImg.eq(index-1).animate({opacity:0},1000).animate({opacity:1},1000);
        setColor(index);
    });
    /*轮播1*/
    var imgTimer;
    var start = 0;
    var $liImg = $(".carousel_img_list div");
    var $liChose = $(".carousel_circle_list div");
    function setcarousel(index) {
        imgTimer = setInterval(function () {
            if(index<$liImg.length-1){
                index++;
            }else {
                index = 0;
            }
            start = index;
            $liImg.eq(index).fadeIn(2000).siblings().fadeOut(2000);
            $liChose.eq(index).addClass("active").siblings().removeClass("active");
        },3000)
    }
    setcarousel(start);

    $liChose.click(function () {
        var choseIndex = $(this).index();
        $liImg.eq(choseIndex).fadeIn(1000).siblings().fadeOut(1000);
        $liChose.eq(choseIndex).addClass("active").siblings().removeClass("active");
        if (imgTimer){
            clearInterval(imgTimer);
        }
        start = $(this).index();
        setcarousel(start);
    });

    $(".slider_next").click(function () {
        if (imgTimer){
            clearInterval(imgTimer);
        }
        if(start==0){
            start =3;
        }else {
            start--;
        }

        $liImg.eq(start).fadeIn(1000).siblings().fadeOut(1000);
        $liChose.eq(start).addClass("active").siblings().removeClass("active");
        setcarousel(start);
    });

    $(".slider_prev").click(function () {
        if (imgTimer){
            clearInterval(imgTimer);
        }
        if(start==3){
            start =0;
        }else {
            start++;
        }
        $liImg.eq(start).fadeIn(1000).siblings().fadeOut(1000);
        $liChose.eq(start).addClass("active").siblings().removeClass("active");
        setcarousel(start);
    });
    /*进入动画*/
    $(window).scroll(function () {
        setTimeout(function () {
            var Wheight = $(window).scrollTop();
            if(Wheight>=1300){
                $(".main_mini_small i").addClass("animated");
                $(".main_mini_small p").addClass("animated");
                $(".fadeInLeft").css("visibility","visible").css("animation-name","fadeInLeft");
                $(".small_1 p").css("visibility","visible").css("animation-name","fadeIn");
            }

        },2000);
    });
});