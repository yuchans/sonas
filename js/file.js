/**
 * description 파일 관련 함수
 * @author Kim Jinyoung
 */
(function (win, $) {
    var _file = win._file = win._file || {};
    var ext_disallow_list = ["bin", "csh", "htm", "html", "jar", "js", "json", "jsonld", "mjs", "php", "pht", "phtm", "sh", "vsd", "xhtml", "cgi", "pl", "exe", "jsp", "css", "inc"];

    /** 빈파일 삭제 */
    _file.delBlankFile = function ($labelBtn) {
        $labelBtn.next('div').find("div > input:file").each(function (idx) {
            if ($(this).val() === '') {
                _file.delFile($(this).next());
            }
        });
    }
    /** 파일 추가 */
    _file.addFile = function ($labelBtn) {
        var $div = $('<div>').addClass('mr-3').attr('style', 'display:none');
        var $span = $('<span>').addClass('mycolor1 pt-2');
        var $file = $('<input>').attr('type', 'file').attr('name', $labelBtn.data('file_name')).attr('onchange', '_file.appendFile($(this))').attr('style', 'display:none');
        var $button = $('<button>').attr('type', 'button').addClass('delete-btn ml-2').attr('onclick', '_file.delFile($(this))');
        $labelBtn.next('div').append($div.append($span).append($file).append($button));
        $file.click();
    }
    /** 파일 추가 처리 */
    _file.appendFile = function ($file) {
        var $div = $file.parent('div');
        var $dataObj = $div.parent().prev();

        if (_file.validFile($file, $dataObj, false)) {
            $file.prev('span').text(getFileNameFromFilePath($file.val()));
            $div.show();

        } else {
            $div.remove();
            return false;
        }
    }
    /** 파일 삭제 */
    _file.delFile = function ($this) {
        var delName = $this.data('del_name');
        if (delName) {
            $this.parent().parent().append('<input type="hidden" name="' + delName + '" value="' + $this.data('del_seq') + '" />');
        }
        $this.parent('div').remove();
    }
    /** 파일 validation */
    _file.validFile = function ($this, $dataObj, isSubmit) {
        var $ul = $dataObj.next('div');
        _file.delBlankFile($dataObj);

        var fileTitle = $dataObj.data('file_title');
        var $files = $('input:file[name="'+$this.attr('name')+'"]');
        var curFileCnt = $ul.find("div").length;

        if (isSubmit) {
            if (!isValidMinFileCnt($dataObj.data('min_file_group_cnt'), curFileCnt, fileTitle)
                || !isValidMaxFileCnt($dataObj.data('max_file_group_cnt'), curFileCnt, fileTitle)
                || !isValidMaxFileSize($dataObj.data('max_file_group_size_mb'), $files, fileTitle)) {
                return false;
            }

            var availFileExtStr = $dataObj.data('avail_file_group_ext');
            var result = true;
            $files.each(function (idx, fileObj) {
                if (!isValidFileExt(availFileExtStr, getFileExtFromFileName(getFileNameFromFilePath($(this).val())), fileTitle)) {
                    result = false;
                    return false;
                }
            });
            return result;

        } else {
            if (!isValidMaxFileCnt($dataObj.data('max_file_group_cnt'), curFileCnt + 1, fileTitle)
                || !isValidMaxFileSize($dataObj.data('max_file_group_size_mb'), $files, fileTitle)
                || !isValidFileExt($dataObj.data('avail_file_group_ext'), getFileExtFromFileName(getFileNameFromFilePath($this.val())), fileTitle)) {
                return false;
            }
        }
        return true;
    }
    /** 선택된 파일의 첨부파일 최대 용량 체크 */
    _file.isValidMaxFileSizeFromFiles = function (maxFileSizeMb, $files) {
        var maxFileSize = toInt(maxFileSizeMb) * 1048576;   //1MB
        var isValid = maxFileSize >= getTotalFileSize($files);
        if (!isValid) {
            alert('첨부파일 총 용량은 ' + maxFileSizeMb + 'MB까지 등록하실 수 있습니다.', null);
        }
        return isValid;
    }

    function isString(value) {
        return typeof value === 'string';
    }

    function toString(value) {
        return '' + value;
    }

    function isNumber(value) {
        return typeof value === 'number';
    }

    function toNumber(value) {
        return isNumber(value)
            ? value
            : isString(value)
                ? toString(value).replace(/[a-z]+/gi, '')
                : 0;
    }

    function toInt(value) {
        return parseInt(toNumber(value), 10);
    }

    function isEmpty(obj) {
        return (obj === null)
            || (typeof obj === 'undefined')
            || (typeof obj === 'string' && obj === '')
            || (Array.isArray(obj) && obj.length < 1)
            || (typeof obj === 'object' && obj.constructor.name === 'Object' && Object.keys(obj).length < 1 && Object.getOwnPropertyNames(obj) < 1)
            || (typeof obj === 'object' && obj.constructor.name === 'String' && Object.keys(obj).length < 1);
    }

    function getFileNameFromFilePath(filePath) {
        return filePath.replace(/.+[\\\/]([^\\\/]+)/, '$1');
    }

    function getFileExtFromFileName(fileName) {
        return fileName.split('.').pop();
    }

    /** 첨부 가능한 확장자 여부 체크 */
    function isValidFileExt(availFileExtStr, fileExt, fileTitle) {
        var ext = (fileExt.trim() || '').toLowerCase();
        var availFileExtArr = (availFileExtStr || '').split('|');
        var isValid = false;

        if (isEmpty(availFileExtStr) || isEmpty(availFileExtArr)) {
            isValid = !ext_disallow_list.includes(ext);
        } else {
            for (var i = 0; i < availFileExtArr.length; i++) {
                availFileExtArr[i] = availFileExtArr[i].trim().toLowerCase();
            }
            isValid = availFileExtArr.includes(ext);
        }
        if (!isValid) {
            alert(fileTitle + '에서 ' + ext + '은(는) 등록하실 수 없는 확장자 입니다.', null);
        }
        return isValid;
    }

    /** 첨부 가능한 최소 파일개수 체크 */
    function isValidMinFileCnt(minFileCnt, uploadFileCnt, fileTitle) {
        var minCnt = toInt(minFileCnt); // 0 : 필수 아님
        var isValid = !(minCnt !== 0 && uploadFileCnt < minCnt);
        if (!isValid) {
            alert(fileTitle + '파일은 ' + minFileCnt + '개 이상 등록이 필요합니다.', null);
        }
        return isValid;
    }

    /** 첨부 가능한 최대 파일개수 체크 */
    function isValidMaxFileCnt(maxFileCnt, uploadFileCnt, fileTitle) {
        var maxCnt = toInt(maxFileCnt); // 0 : 개수 제한없음
        var isValid = !(maxCnt !== 0 && uploadFileCnt > maxCnt + 1);
        if (!isValid) {
            alert(fileTitle + '파일은 ' + maxFileCnt + '개까지 등록하실 수 있습니다.', null);
        }
        return isValid;
    }

    /** IE10 이상 작동, $files 객체 안의 파일 총 용량 값 */
    function getTotalFileSize($files) {
        var size = 0;
        for (var i = 0; i < $files.length; i++) {
            if ($files[i].files[0]) {
                size += $files[i].files[0].size;
            }
        }
        return size;
    }

    /** IE10 이상 작동, 첨부 가능한 최대 파일용량 체크 */
    function isValidMaxFileSize(maxFileSizeMb, $files, fileTitle) {
        if (maxFileSizeMb) {
            var maxFileSize = toInt(maxFileSizeMb) * 1048576;   //1MB
            var isValid = maxFileSize >= getTotalFileSize($files);
            if (!isValid) {
                alert(fileTitle + '파일은 ' + maxFileSizeMb + 'MB까지 등록하실 수 있습니다.', null);
            }
            return isValid;
        }
        return true;
    }
})(window, $);

$(document).on('click', '.btnFindFile', function () {
    _file.delBlankFile($(this));
    _file.addFile($(this));
});

//polyfill - https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
        value: function (searchElement, fromIndex) {

            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            // 1. Let O be ? ToObject(this value).
            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If len is 0, return false.
            if (len === 0) {
                return false;
            }

            // 4. Let n be ? ToInteger(fromIndex).
            //    (If fromIndex is undefined, this step produces the value 0.)
            var n = fromIndex | 0;

            // 5. If n ≥ 0, then
            //  a. Let k be n.
            // 6. Else n < 0,
            //  a. Let k be len + n.
            //  b. If k < 0, let k be 0.
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

            function sameValueZero(x, y) {
                return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
            }

            // 7. Repeat, while k < len
            while (k < len) {
                // a. Let elementK be the result of ? Get(O, ! ToString(k)).
                // b. If SameValueZero(searchElement, elementK) is true, return true.
                if (sameValueZero(o[k], searchElement)) {
                    return true;
                }
                // c. Increase k by 1.
                k++;
            }

            // 8. Return false
            return false;
        }
    });
}