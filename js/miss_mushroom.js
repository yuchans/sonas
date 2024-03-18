function cursor(type) {
    var $tar = $(type);
    $("html,body,a,a:link,a:hover,a:focus,a:active,button,label").css("cursor", "none");
    //$tar.show();
    $(document).on("mousemove", function (e) {
        $tar.css({ top: e.pageY - 5, left: e.pageX - 5 });
    });
    $(document).on("mousedown", function () {
        $tar.addClass("-down");
    });
    $(document).on("mouseup", function () {
        $tar.removeClass("-down");
    });
}

$(document).ready(function () {
    //도움말 슬라이드

    //팁버튼 닫기
    $(".tipBox__close").on("click", function () {
        $(".tipBox,.tipBox__tec").removeClass("-active");
    });
    //오답닫기
    $(".incorrect").on("click", function () {
        $(this).closest(".incorrect").removeClass("-active");
    });

    //링크버튼
    $(".stage__home,.btnMain,.nextMission,.btn.-next,.btn.-prev").on("click", function () {
        nextMission($(this).attr("href"));
        return false;
    });

    //홈버튼

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
});

//클리어
function clear() {
    //성공
    bgm02.pause();
    bgm02.currentTime = 0;
    var effTar = $("body").find(".stage__content.-active .success");
    $("body").addClass("-activeLayerPopup");
    effTar.addClass("-active").find(".nextMission__imgBox").append('<canvas id="canvasRound"></canvas>');
    effTar.find(".success__img").addClass("-active");
    soundFx(fireWork);
    soundFx(sound_yea);
    soundBg(bgm_end);
    setTimeout(function () {
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

//다음미션
function nextMission(nextTarget) {
    /*$("body").removeClass("-activeLayerPopup");
    $(now).closest(".stage__content").removeClass("-active");
    $(nextTarget).addClass("-active");
    $("#canvasRound").remove();*/
    var $stage = $("body", window.parent.document);
    $stage.find(".loading__tit span").text("MOVING TO STAGE...");
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

//처음 실행
function starting(introTxt, introSpeed) {
    var timer = 500;
    //로딩 채크
    /*setTimeout(function(){
        $(".loading").addClass("-complete");
        $(".loading__tit span").text("COMPLETE")
        bgm02.play();
    },timer);*/
    //로딩 슬라이드 업
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
        target.currentTime = 0;
        target.play();
    } else {
        target.pause();
        target.currentTime = 0;
    }
}
