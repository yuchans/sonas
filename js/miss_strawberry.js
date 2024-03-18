function cursor(type){
    var $tar = $(type);
    $("html,body,a,a:link,a:hover,a:focus,a:active,button,label").css("cursor","none");
    //$tar.show();
    $(document).on("mousemove",function(e){
        $tar.css({"top":e.pageY-5,"left":e.pageX-5});
    });
    $(document).on("mousedown",function(){
        $tar.addClass("-down")
    })
    $(document).on("mouseup",function(){
        $tar.removeClass("-down")
    })
}

$(document).ready(function(){
    //도움말 슬라이드
    var $status = $('.tipBox__slideNum');
    var $slickElement = $('.tipBox__slide');
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        if(slick.slideCount > 1) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.html('<span>' + i + '</span>' + '/' + slick.slideCount);
        }
    });

    $slickElement.slick({
        centerMode: true,
        dots: false,
        arrows: true,
    });

    // 사운드 공통
    $(".tip .tipBtn").on("click",function(){
        soundFx(tipOn_01);
    });
    $(".btnGroup .btn").on("click",function(){
        soundFx(click_01);
    });

});







//배열 섞기
Array.prototype.shuffle = function () {
    var length = this.length;
    while (length) {
        var index = Math.floor((length--) * Math.random());
        var temp = this[length];
        this[length] = this[index];
        this[index] = temp;
    }
    return this;
};

//넘버 효과
function num(tar,number){
    var imgNum = number.toString();
    var $frontNum = $(tar).find(".-front");
    var $rearNum = $(tar).find(".-rear");
    var frontNum = imgNum[1];
    var rearNum = imgNum[0];
    if(imgNum.length > 1) {
        rearNum = imgNum[1];
        frontNum = imgNum[0];
        setTimeout(function(){
            $frontNum.attr("data-img-num",frontNum+"m");
        },100);
        setTimeout(function(){
            $frontNum.attr("data-img-num",frontNum);
        },200);
    }else {
        $frontNum.attr("data-img-num",0);
    }
    setTimeout(function(){
        $rearNum.attr("data-img-num",rearNum+"m");
    },100);
    setTimeout(function(){
        $rearNum.attr("data-img-num",rearNum);
    },200);
}