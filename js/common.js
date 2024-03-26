/********************************************************
 Description: 공통 함수
 Author: Kim Juon
 *********************************************************/


/************************************************************************
 Description : 숫자, 영문대소문자, 특수문자 각 조합 9 ~ 12자리를 만족하지 않거나,
 같은 문자 4번 이상 반복되면 비밀번호로 사용할 수 없게 합니다.
 Paratmeter : value(사용자가 입력한 비밀번호)
 Author : Kim Juon
 ************************************************************************/

function isValidPasswordPattern(value) {
    var regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?\-\+])[A-Za-z\d$@$!%*#?\-\+]{9,15}$/;
    if (!regExp.test(value)) return false;

    regExp = /(.)\1\1\1/;
    if (regExp.test(regExp)) return false;

    return true;
}
/************************************************************************
 Description : 인자값의 빈값 체크
 Paratmeter : obj(체크할 객체)
 Author : finrir
 ************************************************************************/
function fn_isEmpty(obj) {
    if(obj === "" || obj === null || obj === undefined || ( obj != null && typeof obj === "object" && !Object.keys(obj).length)) {
        return true;
    }
    return false;
}

/************************************************************************
 Description : 정수 체크
 Paratmeter : val(체크할 값)
 Author : finrir
 ************************************************************************/
function fn_isInteger(val) {
    return /^-?\d*$/.test(val);
}

/************************************************************************
 Description : 숫자타입 체크
 Paratmeter : obj(체크할 객체)
 Author : finrir
 ************************************************************************/
function fn_isNumber(obj) {
    var regExp = /^\d+$/;
    return regExp.test(obj);
}

/************************************************************************
 Description : 이메일타입 체크
 Paratmeter : obj(체크할 객체)
 Author : finrir
 ************************************************************************/
function fn_isEmail(obj) {
	var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	return regExp.test(obj);
}

/************************************************************************
 Description : 좌측문자열채우기(제어시뮬레이션)
 Paratmeter : str(원 문자열), padLen(최대 채우고자 하는 길이), padStr(채우고자하는 문자(char))
 Author : bitlove27
 ************************************************************************/
function lpad(str, padLen, padStr) {
    if (padStr.length > padLen) {
        console.log("오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다");
        return str;
    }
    str += ""; // 문자로
    padStr += ""; // 문자로
    while (str.length < padLen)
        str = padStr + str;
    str = str.length >= padLen ? str.substring(0, padLen) : str;
    return str;
}

/************************************************************************
 Description : 우측문자열채우기(제어시뮬레이션)
 Paratmeter : str(원 문자열), padLen(최대 채우고자 하는 길이), padStr(채우고자하는 문자(char))
 Author : Kim Juon
 ************************************************************************/
function rpad(str, padLen, padStr) {
    if (padStr.length > padLen) {
        console.log("오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다");
        return str;
    }
    str += ""; // 문자로
    padStr += ""; // 문자로
    while (str.length < padLen)
        str += padStr;
    str = str.length >= padLen ? str.substring(0, padLen) : str;
    return str;
}

/************************************************************************
 Description : 정수체크 후 맞지 않을 경우 초기화(제어시뮬레이션)
 Paratmeter : obj(체크할 객체)
 Author : bitlove27
 ************************************************************************/
function fn_digitCheck(obj) {
    var chkVal = obj.val();
    var returnVal = chkVal;
    var validDigit = new RegExp(/^\d*$/);
    if (!validDigit.test(chkVal)) {
        returnVal = "";
    }
    return returnVal;
}

/************************************************************************
 Description : 숫자체크 후 맞지 않을 경우 초기화(제어시뮬레이션)
 Paratmeter : obj(체크할 객체)
 Author : bitlove27
 ************************************************************************/
function fn_numberCheck(obj) {
    var chkVal = obj.val();
    var returnVal = chkVal;
    var validNumber = new RegExp(/^\d*\.?\d*$/);
    if (!validNumber.test(chkVal)) {
        returnVal = "";
    }else if (chkVal == ".") {
        returnVal = "0"+chkVal;
    }else if ( parseInt(obj.prop("max")) < parseInt(chkVal)) {
        returnVal = obj.prop("max");
    }
    return returnVal;
}

/************************************************************************
 Description : 제어시뮬레이션 에러메시지 타입(제어시뮬레이션)
 Paratmeter : obj(원 문자열), msg(메시지)
 Author : bitlove27
 ************************************************************************/
function fn_showErrMsg(obj, msg){
    if (typeof obj.attr('title') != 'undefined'){
        caption = Josa(obj.attr('title'),'은');
    } else {
        caption = '';
    }

    $.confirm.show({
        "message": caption+' '+msg,
        "hideNo": true,
        "yesText":"OK",
        "yes": function (){
            obj.focus();
            obj.select();
        },
    });
}

function Josa(txt, josa) {
	var txtOri = txt;
	var code = txt.charCodeAt(txt.length-1) - 44032;
	var cho = 19, jung = 21, jong=28;
	var i1, i2, code1, code2;

	// 원본 문구가 없을때는 빈 문자열 반환
	if (txt.length == 0 || txt == "undifined")
	    return '';

	// 한글이 아닐 경우 마지막부터 한자리씩 잘라서 한글을 찾는다.
	while ( txt.length > 0 && (code < 0 || code > 11171) ) {
		txt = txt.substring(0, txt.length-1);
		code = txt.charCodeAt(txt.length-1) - 44032;
	}
	//if (code < 0 || code > 11171) return txt;

	if (code % 28 == 0) {
	  return txtOri + Josa.get(josa, false);
    } else {
	    return txtOri + Josa.get(josa, true);
    }
}
Josa.get = function (josa, jong) {
	// jong : true면 받침있음, false면 받침없음

	if (josa == '을' || josa == '를') return (jong?'을':'를');
	if (josa == '이' || josa == '가') return (jong?'이':'가');
	if (josa == '은' || josa == '는') return (jong?'은':'는');
	if (josa == '와' || josa == '과') return (jong?'와':'과');

	// 알 수 없는 조사
	return '**';
}

/************************************************************************
 Description : 소수점 체크(제어시뮬레이션)
 Paratmeter : obj(원 문자열), point(체크할 자리수)
 Author : bitlove27
 ************************************************************************/
function fn_decimalPointCheckObj(obj, point) {
    var t = obj.val();
    var decimalPoint = point;
    var flag = true;
    if ( t.indexOf('.') != -1) { // '.'이 포함되어 있으면
        var t_length = t.substring(t.indexOf('.') + 1);
        if ( t_length.length > decimalPoint ) {
            flag = false;
        }
    }
    return flag;
}

/************************************************************************
 Description : sendAjax(제어시뮬레이션)
 Paratmeter : url(호출 url), method(POST/GET), dataType(전송받을 데이타 형식(text, json, html)), params(파라메터), frmNm(formId), fun(콜백함수)
 Author : bitlove27
 ************************************************************************/
var submitForm;
function sendAjax() {
    if(arguments.length < 4){
        alert("arguments 값을 확인하시기 바랍니다.\n1. url\n2. method(POST/GET)\n3. dataType\n4. parameter\n5. form id(multipart일 경우)\n6. 콜백함수", null);
        return;
    }
    var url = arguments[0];
    var method = arguments[1];
    var dataType = arguments[2];
    var params = arguments[3];
    var frmNm = "";
    if(arguments[4] != null){
        frmNm = arguments[4];
        submitForm = arguments[4];
    }
    var fun = arguments[5];
    var fileYn = "N";

    //form id가 있고 multipart일 경우
    if(arguments[4] != undefined && document.getElementById(frmNm).enctype == "multipart/form-data"){
        fileYn = "Y";
    }

    if (fileYn == "Y") {
        $.ajax(ajaxOption(url, method, dataType, params, fileYn, fun));
    } else {
        $.ajax(ajaxOption(url, method, dataType, params, fileYn, fun));
    }
}

/************************************************************************
 Description : ajaxOption(제어시뮬레이션)
 Paratmeter : url(호출 url), method(POST/GET), dataType(전송받을 데이타 형식(text, json, html)), params(파라메터), fileYn(첨부파일 유무), fun(콜백함수)
 Author : bitlove27
 ************************************************************************/
function ajaxOption(url, method, dataType, params, fileYn, fun) {
    var contentTp = "application/x-www-form-urlencoded; charset=UTF-8";
    var option = "";

    if (fileYn == "Y") {
        var form = $("#"+submitForm)[0];
        var data = new FormData(form);
        var options = {
            type: "POST",
            enctype: 'multipart/form-data',
            url: url,
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            error: function(request, status, error) {
                if( typeof fn_ajaxError === 'function' ) {
                    fn_ajaxError();
                    //console.log("code:"+request.status+"\n"+"\n error : " + error);
                }else{
                    //alert("시스템 에러가 발생하였습니다.\n code:"+request.status+"\n"+"\n error : " + error);
                    console.log("code:"+request.status+"\n"+"\n error : " + error);
                }
            },
            success: function(data) {
                loadingProgress("N");
                if (fun != "") {
                    fun(data);
                }
            },
            beforeSend: function() {
                loadingProgress("Y");
                if( typeof fn_ajaxBeforeSend == 'function' ) {
                    if(!fn_ajaxBeforeSend()){
                        return false;
                    }
                }
            },
            beforeSubmit: function() {
                loadingProgress("Y");
                if( typeof fn_ajaxBeforeSubmit == 'function' ) {
                    if(!fn_ajaxBeforeSubmit()){
                        return false;
                    }
                }
            },
            complete: function() {
                loadingProgress("N");
                if( typeof fn_ajaxComplete == 'function' ) {
                    fn_ajaxComplete();
                }
            }
        }
    } else {
        var options = {
            type: method,
            url: url,
            dataType: dataType,
            data: params,
            contentType: contentTp,
            error: function(request, status, error) {
                if( typeof fn_ajaxError === 'function' ) {
                    fn_ajaxError();
                    //console.log("code:"+request.status+"\n"+"\n error : " + error);
                }else{
                    //alert("시스템 에러가 발생하였습니다.\n code:"+request.status+"\n"+"\n error : " + error);
                    console.log("code:"+request.status+"\n"+"\n error : " + error);
                }
            },
            success: function(data) {
                loadingProgress("N");
                if (fun != "") {
                    fun(data);
                }
            },
            beforeSend: function() {
                loadingProgress("Y");
                if( typeof fn_ajaxBeforeSend == 'function' ) {
                    if(!fn_ajaxBeforeSend()){
                        return false;
                    }
                }
            },
            beforeSubmit: function() {
                loadingProgress("Y");
                if( typeof fn_ajaxBeforeSubmit == 'function' ) {
                    if(!fn_ajaxBeforeSubmit()){
                        return false;
                    }
                }
            },
            complete: function() {
                loadingProgress("N");
                if( typeof fn_ajaxComplete == 'function' ) {
                    fn_ajaxComplete();
                }
            }
        }
    }
    return options;
}

/************************************************************************
 Description : progress bar(제어시뮬레이션)
 Paratmeter : cls(loadingProgress 사용여부)
 Author : bitlove27
 ************************************************************************/
function loadingProgress(cls) {
    try {
        if (cls == "Y") {
            $.blockUI({
                message: '<img src="/img/ic_loading.gif" />',
                overlayCSS: {
                    //backgroundColor: '#f8f8f8'
                },
                css: {
                    //top: ($(window).height() - 30) / 2 + 'px',
                    //left: ($(window).width() - 260) / 2 + 'px',
                    top: ($(window).height()) / 2 + 'px',
                    left: ($(window).width()) / 2 + 'px',
                    backgroundColor: 'transparent',
                    width: '120px',
                    height: '60px',
                    border: 'none'
                }
            });

        } else {
            setTimeout($.unblockUI, 0);
            return;
        }
    } catch (e) {}
}

/************************************************************************
 Description : 객체 배열에서 특정 프라퍼티에 해당하는 객체를 찾는 Polyfill
 Author : Kim Juon
 ************************************************************************/
// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function(predicate) {
            if (this === null) {
                throw TypeError('"this" is null or not defined');
            }

            var o = Object(this);

            var len = o.length >>> 0;

            if (typeof predicate !== 'function') {
                throw TypeError("predicate must be a function");
            }

            var thisArg = arguments[1];

            var k = 0;

            while (k < len) {
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }

                k++;
            }

            return undefined;
        },
        configurable: true,
        writable: true
    });
}

