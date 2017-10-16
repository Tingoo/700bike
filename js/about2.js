/**
 * Created by thundersoft on 2017/9/13.
 */
$(function () {
    /*自行车变成黄色*/
    $(".header_menu li").eq(1).find("p").find("a:first").addClass("hoverYellow");
    /*show_img轮播*/
    var YHstart = 0;
    var imgTimer;
    var imgTimer1;
    var $showCircle = $(".circle_count");
    var $showCircle1 = $(".circle_count1");
    var $showImg = $(".show_img");
    var $showImg1 = $(".show_img1");
    function setcarousel(index) {
        imgTimer = setInterval(function () {
            if(index<$showCircle.length-1){
                index++;
            }else {
                index = 0;
            }
            $showCircle.eq(index).addClass("circle_current").siblings().removeClass("circle_current");
            $showImg.stop(true,true).animate({marginLeft:index*-786+"px"},500)
        },3000);
    }
    function setcarousel1(index) {
        imgTimer1 = setInterval(function () {
            if(index<$showCircle1.length-1){
                index++;
            }else {
                index = 0;
            }
            $showCircle1.eq(index).addClass("circle_current").siblings().removeClass("circle_current");
            $showImg1.stop(true,true).animate({marginLeft:index*-786+"px"},500)
        },3000)
    }
    setcarousel(YHstart);
    setcarousel1(YHstart);
    $showCircle.click(function () {
        var currentIndex = $(this).index();
        if (imgTimer){
            clearInterval(imgTimer);
        }
        $showCircle.eq(currentIndex).addClass("circle_current").siblings().removeClass("circle_current");
        $showImg.stop(true,true).animate({marginLeft:currentIndex*-786+"px"},500);
        setcarousel(currentIndex);
    });
    $showCircle1.click(function () {
        var currentIndex = $(this).index();
        if (imgTimer1){
            clearInterval(imgTimer1);
        }
        $showCircle1.eq(currentIndex).addClass("circle_current").siblings().removeClass("circle_current");
        $showImg1.stop(true,true).animate({marginLeft:currentIndex*-786+"px"},500);
        setcarousel1(currentIndex);
    });
    /*main_yinhe_carousel*/
    var picTimer;
    var startPic = 0;
    var $carouselList = $(".carousel_list div");
    var len = $carouselList.length;
    var flagPic = "useful";
    function setCarouselPic(indexPic) {
        picTimer = setInterval(function () {
            if(indexPic<len-1){
                indexPic++;
            }else {
                indexPic = 0;
            }
            startPic = indexPic;
            $carouselList.eq(indexPic).show().siblings().hide();
            checkPic(indexPic);
        },3000);
    }
    setCarouselPic(startPic);
    $(".carousel_btn_left").click(function () {
        startPic--;
        var flag = checkPic(startPic);
        if(flag=="leftUseful"||flag =="useful"){
            if(picTimer){
                clearInterval(picTimer);
            }
            $carouselList.eq(startPic).show().siblings().hide();
           /* if(startPic == 0){
                $(".carousel_btn_left").addClass("carousel_btn_left_final");
                $(".carousel_btn_right").removeClass("carousel_btn_right_final");
            }*/
        }
        setCarouselPic(startPic);
    });
    $(".carousel_btn_right").click(function () {
        startPic++;
        var flag = checkPic(startPic);
        if(flag=="rightUseful"||flag =="useful"){
            if(picTimer){
                clearInterval(picTimer);
            }
            $carouselList.eq(startPic).show().siblings().hide();
            /*if(startPic == 2){
                $(".carousel_btn_right").addClass("carousel_btn_right_final");
                $(".carousel_btn_left").removeClass("carousel_btn_left_final");
            }*/
        }
        setCarouselPic(startPic);
    });
    function checkPic(count) {
        if (count==2){
            $(".carousel_btn_right").addClass("carousel_btn_right_final");
            $(".carousel_btn_left").removeClass("carousel_btn_left_final");
        }else if(count==0){
            $(".carousel_btn_left").addClass("carousel_btn_left_final");
            $(".carousel_btn_right").removeClass("carousel_btn_right_final");
        }else if(count == 3){
            flagPic = "leftUseful";
        }else if(count == -1){
            flagPic = "rightUseful";
        }else {
            $(".carousel_btn_left").removeClass("carousel_btn_left_final");
            $(".carousel_btn_right").removeClass("carousel_btn_right_final");
        }
        return flagPic;
    }

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

   /* 参数选择*/
   $(".parameter_nav a").click(function () {
       $(this).addClass("parameter_current").siblings().removeClass("parameter_current");
       var index1 = $(this).index();
       $(".content").eq(index1).show().siblings().hide();
   });

    /*颜色选择自行车*/
    $(".parameter_chose_one .circle_blue").click(function () {
        $(".parameter_pic img").attr("src","../images/about2_YHMINI/parameter/mini_b1.jpg");
        $(this).addClass("circle_current").siblings().removeClass("circle_current");
    });
    $(".parameter_chose_one .circle_yellow").click(function () {
        $(".parameter_pic img").attr("src","../images/about2_YHMINI/parameter/mini_y1.jpg");
        $(this).addClass("circle_current").siblings().removeClass("circle_current");
    });
    $(".parameter_chose_one .circle_gray").click(function () {
        $(".parameter_pic img").attr("src","../images/about2_YHMINI/parameter/mini_g1.jpg");
        $(this).addClass("circle_current").siblings().removeClass("circle_current");
    });
    $(".parameter_chose_one .circle_white").click(function () {
        $(".parameter_pic img").attr("src","../images/about2_YHMINI/parameter/mini_w1.jpg");
        $(this).addClass("circle_current").siblings().removeClass("circle_current");
    });

    $(".parameter_chose_two .circle_blue").click(function () {
        $(".parameter_pic img").attr("src","../images/about2_YHMINI/parameter/mini_b.jpg");
        $(this).addClass("circle_current").siblings().removeClass("circle_current");
    });
    $(".parameter_chose_two .circle_yellow").click(function () {
        $(".parameter_pic img").attr("src","../images/about2_YHMINI/parameter/mini_y.jpg");
        $(this).addClass("circle_current").siblings().removeClass("circle_current");
    });
    $(".parameter_chose_two .circle_gray").click(function () {
        $(".parameter_pic img").attr("src","../images/about2_YHMINI/parameter/mini_g.jpg");
        $(this).addClass("circle_current").siblings().removeClass("circle_current");
    });
    $(".parameter_chose_two .circle_white").click(function () {
        $(".parameter_pic img").attr("src","../images/about2_YHMINI/parameter/mini_w.jpg");
        $(this).addClass("circle_current").siblings().removeClass("circle_current");
    });
});