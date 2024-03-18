(function ($) {
    $(function () {
        var $confirm = $("<div class='confirmContent'>" +
                "<div class='confirmContentInner'>" +
                    "<div class='confirm'>" +
                        // "<h5 class='title'><i class='fa fa-warning'></i>&nbsp;알림</h5>" +
                        "<h5 class='title'>알림</h5>" +
                        "<p></p>" +
                        "<div class='confirmButtonContent'>" +
                            "<button class='Hbtn Hbtn-danger confirmNO'></button>" +
                            "<button class='Hbtn Hbtn-success confirmYES'></button>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>");
        $("body").append($confirm);
        $confirm.hide();
        // $(".confirmContent").css("height", $(window).height() + "px");
        // $(window).on("resize", function () {
        //     $(".confirmContent").css("height", $(window).height() + "px");
        // })
        $(".confirmContent").css("height", "100vh");
        $(window).on("resize", function () {
            $(".confirmContent").css("height", "100vh");
        });
    });

    $.confirm = (function myConfirm() {
        var defaults = {
            "hideYes": false,
            "yesText": "확인",
            "hideNo": false,
            "noText": "취소",
            "yes": undefined,
            "no": undefined,
            "message": "confirm",
            "type": "default"
        };

        myConfirm.show = function (options) {
            var settings = $.extend({}, defaults, options);
            settings.hideNo == true ? $(".confirmContent").find(".confirmNO").hide() : $(".confirmContent").find(".confirmNO").show();
            settings.hideYes == true ? $(".confirmContent").find(".confirmYES").hide() : $(".confirmContent").find(".confirmYES").show();
            $(".confirmContent").find("button.confirmYES").html(settings.yesText);
            $(".confirmContent").find("button.confirmNO").html(settings.noText);
            $(".confirmContent").find("p").html(settings.message);
            switch (settings.type) {
                case "success":
                    $(".confirmContent").find("h5.title").css("color", "#000000");
                    break;
                case "danger":
                    $(".confirmContent").find("h5.title").css("color", "#000000");
                    break;
                case "warning":
                    $(".confirmContent").find("h5.title").css("color", "#000000");
                    break;
                default:
                    $(".confirmContent").find("h5.title").css("color", "#000000");
                    break;
            }

            $(".confirmContent").show();
            $(".confirmContent").animate({opacity: '1'}, "fast", "linear");
            $(".confirmContent").find(".confirmYES").unbind("click").on("click", function () {
                $(".confirmContent").animate({opacity: '0'}, "fast", "linear", function () {
                    $(".confirmContent").hide();
                    if (settings.yes) {
                        settings.yes();
                    }
                })
            }).focus();
            $(".confirmContent").find(".confirmNO").unbind("click").on("click", function () {
                $(".confirmContent").animate({opacity: '0'}, "fast", "linear", function () {
                    $(".confirmContent").hide();
                    if (settings.no) {
                        settings.no();
                    }
                })
            });
        }
        return myConfirm;
    })()
})(jQuery)