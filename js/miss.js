$(document).ready(function () {
    //팁버튼 닫기
    $(".tipBox__close").on("click", function () {
        $(".tipBox,.tipBox__tec").removeClass("-active");
    });
    //오답닫기
    $(".incorrect").on("click", function () {
        $(this).closest(".incorrect").removeClass("-active");
    });

    //메인으로 가기
    $(".btnMain,.stage__exit").on("click", function () {
        nextMission($(this).attr("href"));
        return false;
    });

    //팁버튼
    $(".tipBtn")
        .on("click", function () {
            $("body").find(".stage__content.-active .tipBox").addClass("-active");
            //선생모션
            setTimeout(function () {
                $(".tipBox__tec").addClass("-active");
                soundFx(sound_sharara);
            }, 500);
        })
        .on("mouseover", function () {
            //soundFx(sound_tip);
        });
    //나가기
    $(".stage__exit").on("click", function () {});
    //버튼 오버 효과음
    $(".stage__exit").on("mouseover", function () {
        soundFx(sound_click);
    });
    //배경음악 esc 끄기
    $(document).keyup(function (e) {
        if (e.which == 27) {
            bgm02.pause();
            bgm02.currentTime = 0;
        }
    });
    //공통사운드
    $(".btnGroup .btn,button").on("click", function () {
        soundFx(click_01);
    });
});

//클리어
function clear() {
    //성공
    bgm02.pause();
    bgm02.currentTime = 0;
    $("body").addClass("-activeLayerPopup");
    $("body").find(".stage__content.-active .success").addClass("-active").find(".nextMission__imgBox").append('<canvas id="canvasRound"></canvas>');
    soundFx(fireWork);
    soundFx(sound_yea);
    soundBg(bgm_end);
    setTimeout(function () {
        $.confetti.start();
        $.confetti.restart();
    }, 400);
    setTimeout(function () {
        $.confetti.stop();
        soundFx(missionOn);
    }, 2000);

    // 미션성공 회전 효과 캔버스
    (function () {
        var canvas = document.getElementById("canvasRound"),
            width = canvas.width,
            height = canvas.height;

        // 속성값
        var ctx = canvas.getContext("2d");
        ctx.lineWidth = 10;
        ctx.strokeStyle = "#feda3c";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
        ctx.shadowColor = "#feda3c";

        // 좌표
        var x = width / 2,
            y = height / 2,
            radius = 68,
            circum = Math.PI * 2,
            start = 0, // 시작점
            finish = 68, // 끝나는점
            curr = 0;

        // 애니메이션시작
        var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        window.requestAnimationFrame = raf;
        var test;
        function animate(draw_to) {
            ctx.clearRect(0, 0, width, height);
            ctx.beginPath();
            ctx.arc(x, y, radius, start, draw_to, false);
            ctx.stroke();
            curr += 3;
            test = requestAnimationFrame(function () {
                animate((circum * curr) / 100 + start);
            });

            if (curr >= finish + 1) {
                cancelAnimationFrame(test);
            }
        }

        //다음 미션 마우스 효과
        $(".nextMission__head")
            .on("mouseover", function () {
                animate();
                $(".nextMission__arrow,.nextMission__mask,.nextMission__head").addClass("-hover");
            })
            .on("mouseleave", function () {
                setTimeout(function () {
                    ctx.clearRect(0, 0, width, height);
                    curr = 0;
                    $(".nextMission__arrow,.nextMission__mask,.nextMission__head").removeClass("-hover");
                }, 100);
            });
    })();
}

//실패
function retry(challengeCount) {
    //soundFx(sound_retry);
    soundFx(wrong);
    $("body").find(".stage__content.-active .incorrect").addClass("-active");
    $("body").find(".stage .stage__countNum").text(challengeCount);
}

//다음미션
function nextMission(nextTarget) {
    /*$("body").removeClass("-activeLayerPopup");
    $(now).closest(".stage__content").removeClass("-active");
    $(nextTarget).addClass("-active");
    $("#canvasRound").remove();*/
    var $stage = $("body", window.parent.document);
    $stage.find(".loading__tit span").text("NEXT STAGE LOADING...");
    $stage.find(".loading").removeClass("-slideUp");
    setTimeout(function () {
        $("body", window.parent.document).find("#iframe").attr("src", nextTarget);
    }, 1000);
}
//로딩완료
function loadingComplete() {
    $(window).load(function () {
        var $stage = $("body", window.parent.document);
        $stage.find(".loading__tit span").text("COMPLETE");
        setTimeout(function () {
            $stage.find(".loading").addClass("-slideUp");
            soundBg(bgm02);
        }, 500);
    });
}

function imgNum(tar, frontNum, rearNum, type, countNum) {
    var $frontNum = tar.find(".-front");
    var $rearNum = tar.find(".-rear");
    if (typeof countNum == "undefined") {
        countNum = 1;
    }
    if (type) {
        rearNum += countNum;
        setTimeout(function () {
            $rearNum.attr("data-img-num", rearNum + "m");
        }, 100);
        setTimeout(function () {
            $rearNum.attr("data-img-num", rearNum);
        }, 200);
        if (rearNum > 9) {
            rearNum = rearNum - 10;
            setTimeout(function () {
                $frontNum.attr("data-img-num", frontNum + "m");
            }, 100);
            setTimeout(function () {
                $frontNum.attr("data-img-num", frontNum);
            }, 200);
            ++frontNum;
        }
        return [frontNum, rearNum];
    } else {
        --rearNum;
        setTimeout(function () {
            $rearNum.attr("data-img-num", rearNum + "m");
        }, 100);
        setTimeout(function () {
            $rearNum.attr("data-img-num", rearNum);
        }, 200);
        if (rearNum < 0) {
            rearNum = 9;
            setTimeout(function () {
                $frontNum.attr("data-img-num", frontNum + "m");
            }, 100);
            setTimeout(function () {
                $frontNum.attr("data-img-num", frontNum);
            }, 200);
            --frontNum;
        }
        return [frontNum, rearNum];
    }
    if (frontNum <= 0) {
        frontNum = 0;
        rearNum = 0;
    }
    if (frontNum > 9) {
        frontNum = 9;
        rearNum = 9;
    }
    return [frontNum, rearNum];
}

//넘버 수정하기
function num(tar, number) {
    var imgNum = number.toString();
    var $frontNum = tar.find(".-front");
    var $rearNum = tar.find(".-rear");
    var frontNum = imgNum[1];
    var rearNum = imgNum[0];
    if (imgNum.length > 1) {
        rearNum = imgNum[1];
        frontNum = imgNum[0];
        setTimeout(function () {
            $frontNum.attr("data-img-num", frontNum + "m");
        }, 100);
        setTimeout(function () {
            $frontNum.attr("data-img-num", frontNum);
        }, 200);
    } else {
        $frontNum.attr("data-img-num", 0);
    }
    setTimeout(function () {
        $rearNum.attr("data-img-num", rearNum + "m");
    }, 100);
    setTimeout(function () {
        $rearNum.attr("data-img-num", rearNum);
    }, 200);
}

//온도계 게이지 체크
var rageSlider = function () {
    var $slider = $(".rangeSlider");
    var $range = $(".rangeSlider__range");
    var drainage = 1;
    $slider.each(function () {
        var value = $(this).find($range).attr("value");
        var max = $(this).find($range).attr("max");
        $(this).find(".rangeSlider__inp").text(value);
        if (max > 50) {
            drainage = 1;
        } else {
            drainage = 2;
        }
        $(this)
            .find(".rangeSlider__bar")
            .css("width", value * drainage + "%");
    });
    $range.on("input", function () {
        var val = $(this).val();
        var max = $(this).attr("max");
        soundFx(sound_click);
        $(this).closest(".rangeSlider").find(".rangeSlider__inp").text(this.value);
        if (max > 50) {
            drainage = 1;
        } else {
            drainage = 2;
        }
        $(this)
            .closest(".rangeSlider")
            .find(".rangeSlider__bar")
            .css("width", val * drainage + "%");
    });
    //IE 버그
    if ($("html").hasClass("ie11")) {
        $range.change(function () {
            var val = $(this).val();
            var max = $(this).attr("max");
            soundFx(sound_click);
            $(this).closest(".rangeSlider").find(".rangeSlider__inp").text(this.value);
            if (max > 50) {
                drainage = 1;
            } else {
                drainage = 2;
            }
            $(this)
                .closest(".rangeSlider")
                .find(".rangeSlider__bar")
                .css("width", val * drainage + "%");
        });
    }
};

//처음 실행
function starting(introTxt, introSpeed) {
    var timer = 500;
    //로딩 채크
    /*setTimeout(function(){
        $(".loading").addClass("-complete");
        $(".loading__tit span").text("COMPLETE")
        bgm02.play();
    },timer);*/
    //로딩 슬라이드 업`
    setTimeout(function () {
        $(".loading").addClass("-slideUp");
    }, timer + 1000);
    //인트로 시작
    setTimeout(function () {
        //인트로 텍스트
        $(".intro__txtBox").t(introTxt, {
            caret: false,
            speed: introSpeed,
        });
        $(".intro__tec").addClass("-active");
    }, timer + 1500);
    setTimeout(function () {
        $(".intro").addClass("-active");
    }, timer + 6000);
    $(".intro").addClass("-startUp");
}

//달력로딩
function loadingCal(months, startDay, endDay, speed) {
    var setTime;
    var resultDay;
    var lastDay = 31;
    var month = months;
    var startDay = parseInt(startDay);
    var endDay = parseInt(endDay);
    var html =
        '<aside class="loadingCal" style="">\n' +
        '    <div class="loadingCal__box">\n' +
        '       <h1 class="loadingCal__month">1 월</h1>\n' +
        '       <p class="loadingCal__day">12</p>\n' +
        '       <div class="loadingCal__cover"></div>\n' +
        "    </div>\n" +
        "</aside>";
    $("body").append(html);
    $(".loadingCal__month").text(months + " 월");
    setTimeout(function () {
        $(".loadingCal").addClass("-active");
    }, 500);
    if (month == 9) {
        lastDay = 30;
    }
    if (startDay > endDay) {
        setTime = lastDay - startDay + endDay;
    } else {
        setTime = endDay - startDay;
    }
    $(".loadingCal__day").text(startDay); //초기값 선언
    function loadingCalAnimate(speed, day, mons) {
        //모션4컷
        for (var i = 1; i <= 5; i++) {
            (function (x) {
                setTimeout(function () {
                    $(".loadingCal__cover").addClass("-step0" + x);
                    if (x == 3) {
                        $(".loadingCal__month").text(mons + " 월");
                        $(".loadingCal__day").text(day);
                    }
                    if (x == 5) {
                        $(".loadingCal__cover").removeClass("-step01 -step02 -step03 -step04 -step05");
                    }
                }, 500 + x * speed);
            })(i);
        }
    }
    //반복횟수
    for (var i = 1; i <= setTime; i++) {
        (function (x) {
            setTimeout(function () {
                resultDay = startDay + x;
                if (resultDay > lastDay) {
                    resultDay = Math.abs(lastDay - resultDay);
                    month = parseInt(months) + 1;
                    if (month > 12) {
                        month = 1;
                    }
                }
                loadingCalAnimate(speed, resultDay, month);
                if (x == setTime) {
                    setTimeout(function () {
                        $(".loadingCal").removeClass("-active");
                    }, 1500);
                }
            }, 200 + x * (speed * 5));
        })(i);
    }
}

//배경 사운드 재생
function soundBg(target) {
    var $bg = $("#chkBgm", parent.document);
    if ($bg.is(":checked")) {
        target.play();
    } else {
        target.pause();
        target.currentTime = 0;
    }
}

//효과음 사운드 재생
function soundFx(target, playType, vol) {
    var valTimer;
    var valume = vol;
    var $eff = $("#chkFx", parent.document);
    if (playType == "loop") {
        target.loop = true;
    }
    if (playType == "stop") {
        target.pause();
        target.currentTime = 0;
    } else if ($eff.is(":checked")) {
        target.play();
    } else {
        target.pause();
        target.currentTime = 0;
    }
}
