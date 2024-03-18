$(document).ready(function(){
    // 세션 정보 가져오기
    $.ajax({
        type: "POST",
        url: "/se/ctvtsmlt/ajax/senarioSessionInfo.do",
        success: function(data) {
            // 프로필이미지, 이름, 아이디 설정
            $(".newUser__name").html(data.userNm);
            $(".newUser__id").html(data.userId);

            if (data.userFileUrl == null || data.userFileUrl == '') {
                $(".newUser__pic").css({"background-image":"url(/static/images/common/bg_default.jpg)"});
            }else{
                $(".newUser__pic").css({"background-image":"url(/img?i=" + data.userFileUrl + ")"});
            }
        },
        error: function(res) {
            alert(res.responseJSON.message, undefined);
            window.open('about:blank','_parent').parent.close();
        }
    });
});