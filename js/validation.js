$.extend($.validator.messages, {
    required: "필수 입력 항목에 값이 없습니다.",
    remote: "항목을 수정하세요.",
    email: "올바르지 않은 이메일 주소입니다.",
    url: "올바르지 않은 URL입니다.",
    date: "올바른 날짜를 입력하세요.",
    dateISO: "올바른 날짜(ISO)를 입력하세요.",
    number: "숫자만 입력 가능합니다.",
    digits: "숫자(정수)만 입력 가능합니다.",
    creditcard: "신용카드 번호가 올바르지 않습니다.",
    equalTo: "같은 값을 다시 입력하세요.",
    extension: "올바른 확장자가 아닙니다.",
    maxlength: $.validator.format("{0}자를 넘을 수 없습니다."),
    minlength: $.validator.format("{0}자 이상 입력하세요."),
    rangelength: $.validator.format("길이가 {0} 에서 {1} 사이인 값을 입력하세요."),
    range: $.validator.format("{0} 에서 {1} 사이의 값을 입력하세요."),
    max: $.validator.format("{0} 이하의 값을 입력하세요."),
    min: $.validator.format("{0} 이상의 값을 입력하세요.")
});

$.validator.setDefaults({
    onkeyup:false,
    onclick:false,
    onfocusout:false,
    showErrors:function(errorMap, errorList){
        if(this.numberOfInvalids()) {
            /** showErrors 재정의.
             * 재정의를 하지 않을 경우 필드에 메세지가 바로 출력되니 삭제하지 마세요 */
        }
    },
    invalidHandler: function(form, validator) {
        var errMsg = "";
        if(typeof validator.errorList[0].element.title == "undefined" || validator.errorList[0].element.title == "" || validator.errorList[0].element.title == null){
            errMsg = validator.errorList[0].message; 
        }else{
            errMsg = "필수 입력 항목 ["+validator.errorList[0].element.title+"]에 값이 없습니다."; 
        }
        if ( validator.errorList[0].element.type.indexOf("select") > -1 ) {
            errMsg = errMsg.replaceAll("에 값이 없습니다.", "에 값이 선택되어 있지 않습니다.");
        }
        if ( validator.errorList[0].element.value.length > 0) { // 값이 존재하면 형식오류로 판단.
            if ( validator.errorList[0].element.classList.contains("email") ) {
                errMsg = errMsg.replaceAll("에 값이 없습니다.", "에<br>올바르지 않은 이메일 주소가 입력되었습니다.");
            }else if ( validator.errorList[0].element.classList.contains("url") ) {
                errMsg = errMsg.replaceAll("에 값이 없습니다.", "에<br>올바르지 않은 URL이 입력되었습니다.");
            }else if ( validator.errorList[0].element.classList.contains("date") ) {
                errMsg = errMsg.replaceAll("에 값이 없습니다.", "에<br>올바른 날짜를 입력하세요.");
            }else if ( validator.errorList[0].element.classList.contains("dateISO") ) {
                errMsg = errMsg.replaceAll("에 값이 없습니다.", "에<br>올바른 날짜(ISO)를 입력하세요.");
            }else if ( validator.errorList[0].element.classList.contains("number") ) {
                errMsg = errMsg.replaceAll("에 값이 없습니다.", "에는<br>숫자만 입력 가능합니다.");
            }else if ( validator.errorList[0].element.classList.contains("digits") ) {
                errMsg = errMsg.replaceAll("에 값이 없습니다.", "에는<br>숫자(정수)만 입력 가능합니다.");
            }else if ( validator.errorList[0].element.classList.contains("creditcard") ) {
                errMsg = errMsg.replaceAll("에 값이 없습니다.", "에<br>입력하신 신용카드 번호가 올바르지 않습니다.");
            }else{
                if( !(typeof validator.errorList[0].element.max == "undefined" || validator.errorList[0].element.max == "" || validator.errorList[0].element.max == null)){
                    errMsg = errMsg.replaceAll("에 값이 없습니다.", "에<br>"+ validator.errorList[0].element.max +" 이하의 값을 입력하세요.");
                }else if( !(typeof validator.errorList[0].element.min == "undefined" || validator.errorList[0].element.min == "" || validator.errorList[0].element.min == null)){
                    errMsg = errMsg.replaceAll("에 값이 없습니다.", "에<br>"+ validator.errorList[0].element.min +" 이상의 값을 입력하세요.");
                }
            }
        }
        alert(errMsg, function() {
            validator.errorList[0] &&
            validator.errorList[0].element &&
            validator.errorList[0].element.focus();
        });
    }
});
