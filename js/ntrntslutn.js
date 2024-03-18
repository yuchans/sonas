var data = {
    elementArr : [  { elClassNm : "다량원소",
        elementUnit : "me/ℓ",
        elClassId : "lotElement",
        element : [ "NO3-N", "NH4-N", "P", "K", "Ca", "Mg" ],
        elementKey : [ "n03n", "nh4n", "p", "k", "ca", "mg" ]
    },
        { elClassNm : "미량원소",
            elementUnit : "ppm",
            elClassId : "traceElement",
            element : [ "Fe", "B", "Mn", "Zn", "Cu", "Mo" ],
            elementKey : [ "fe", "b", "mn", "zn", "cu", "mo" ]
        }, ],
    cultureMediumArr : [  { cropNm : "토마토" ,
        cultureMediumKind : [ { cultureMediumNm : "한국원시",
            lotElement : {  n03n : 9, nh4n : 0.67, p : 2, k : 5, ca : 4, mg : 2 },
            traceElement : {  fe : 3,  b : 0.5,  mn : 0.5,  zn : 0.05,  cu : 0.01, mo : 0.008}},
            { cultureMediumNm : "일본원시",
                lotElement : {  n03n : 16, nh4n : 1.33, p : 4, k : 8, ca : 8, mg : 4 },
                traceElement : {  fe : 2, b : 0.2, mn : 0.2, zn : 0.02, cu : 0.01, mo : 0.005}},
            { cultureMediumNm : "일본야마자키",
                lotElement : {  n03n : 7, nh4n : 0.67, p : 2, k : 4, ca : 3, mg : 2 },
                traceElement : {  fe : 2, b : 0.2, mn : 0.2, zn : 0.02, cu : 0.01, mo : 0.005}},
            { cultureMediumNm : "네덜란드PBG(비순환)",
                lotElement : {  n03n : 16, nh4n : 1.2, p : 4.5,  k : 9.5, ca : 10.8, mg : 4.8  },
                traceElement : {  fe : 0.8, b : 0.33, mn : 0.55, zn : 0.33, cu : 0.05, mo : 0.05 }},
            { cultureMediumNm : "네덜란드PBG(순환)" ,
                lotElement : {  n03n : 10.75, nh4n : 1, p : 3.75, k : 6.5, ca : 5.5, mg : 2 },
                traceElement : {  fe : 0.8, b : 0.22, mn : 0.55, zn : 0.26, cu : 0.05, mo : 0.05 }},]},
        { cropNm : "고추",
            cultureMediumKind : [ { cultureMediumNm : "한국원시",
                lotElement : {  n03n : 11, nh4n : 1, p : 3, k : 7, ca : 4, mg : 2 },
                traceElement : {  fe : 3, b : 0.5, mn : 0.5, zn : 0.05, cu : 0.01, mo : 0.008}},
                { cultureMediumNm : "일본원시",
                    lotElement : {  n03n : 16, nh4n : 1.33, p : 4, k : 8, ca : 8, mg : 4 },
                    traceElement : {  fe : 2, b : 0.2, mn : 0.2, zn : 0.02, cu : 0.01, mo : 0.005}},]},
        { cropNm : "오이",
            cultureMediumKind : [ { cultureMediumNm : "한국원시",
                lotElement : {  n03n : 11.33, nh4n : 0.67, p : 2, k : 7, ca : 5, mg : 2 },
                traceElement : {  fe : 3, b : 0.5, mn : 0.5, zn : 0.05, cu : 0.01, mo : 0.008}},
                { cultureMediumNm : "일본원시",
                    lotElement : {  n03n : 16,  nh4n : 1.33, p : 4, k : 8, ca : 8, mg : 4 },
                    traceElement : {  fe : 2, b : 0.2, mn : 0.2, zn : 0.02, cu : 0.01, mo : 0.005}},
                { cultureMediumNm : "일본야마자키",
                    lotElement : {  n03n : 13,  nh4n : 1, p : 3, k : 6, ca : 7, mg : 4 },
                    traceElement : {  fe : 2, b : 0.2, mn : 0.2, zn : 0.02, cu : 0.01, mo : 0.005}},
                { cultureMediumNm : "네덜란드PBG",
                    lotElement : {  n03n : 14.8,  nh4n : 1, p : 4.5, k : 8, ca : 8.5, mg : 2.75 },
                    traceElement : {  fe : 0.8, b : 0.22, mn : 0.55, zn : 0.26, cu : 0.05, mo : 0.05 }},]},
        { cropNm : "메론",
            cultureMediumKind : [ { cultureMediumNm : "일본원시",
                lotElement : {  n03n : 16, nh4n : 1.33, p : 4, k : 8, ca : 8, mg : 4 },
                traceElement : {  fe : 2, b : 0.2, mn : 0.2, zn : 0.02, cu : 0.01, mo : 0.005}},
                { cultureMediumNm : "시즈오카대학",
                    lotElement : {  n03n : 13,  nh4n : 1.33, p : 4, k : 6, ca : 7, mg : 3 },
                    traceElement : {  fe : 2, b : 0.2, mn : 0.2, zn : 0.02, cu : 0.01, mo : 0.005}},
                { cultureMediumNm : "네덜란드PBG",
                    lotElement : {  n03n : 8.25,  nh4n : 0.75, p : 3, k : 6, ca : 8, mg : 4 },
                    traceElement : {  fe : 0.8, b : 0.22, mn : 0.55, zn : 0.26, cu : 0.05, mo : 0.05}},]},
        { cropNm : "딸기",
            cultureMediumKind : [ { cultureMediumNm : "일본원시",
                lotElement : {  n03n : 16, nh4n : 1.33, p : 4, k : 8, ca : 8, mg : 4 },
                traceElement : {  fe : 2, b : 0.2, mn : 0.2, zn : 0.02, cu : 0.01, mo : 0.005}},
                { cultureMediumNm : "일본야마자키",
                    lotElement : {  n03n : 5, nh4n : 0.5, p : 1.5, k : 3, ca : 2, mg : 1 },
                    traceElement : {  fe : 2, b : 0.2, mn : 0.2, zn : 0.02, cu : 0.01, mo : 0.005}},]},
        { cropNm : "엽채류",
            cultureMediumKind : [ { cultureMediumNm : "서울시립대액",
                lotElement : {  n03n : 10.13, nh4n : 0.67, p : 2, k : 6, ca : 3, mg : 2 },
                traceElement : {  fe : 3, b : 0.5, mn : 0.5, zn : 0.05, cu : 0.01, mo : 0.008}},
                { cultureMediumNm : "한국원시",
                    lotElement : {n03n : 14 ,    nh4n : 1  , p : 3   , k : 6 , ca : 8 ,   mg : 4 },
                    traceElement : {fe : 3 ,   b : 0.5  , mn : 0.5  , zn : 0.05 , cu : 0.01 , mo : 0.008}},
                { cultureMediumNm : "일본원시",
                    lotElement : {n03n : 16 , nh4n : 1.33  , p : 4   , k : 8 , ca : 8 ,   mg : 4 },
                    traceElement : {fe : 2,   b : 0.2 , mn : 0.2  , zn : 0.02 , cu : 0.01 , mo : 0.005}},
                { cultureMediumNm : "일본야마자키",
                    lotElement : {n03n : 5.5 ,    nh4n : 0.5  , p : 1.5   , k : 4 , ca : 2 ,   mg : 1 },
                    traceElement : {fe : 2 ,   b : 0.2  , mn : 0.2  , zn : 0.02 , cu : 0.01 , mo : 0.005}},
                { cultureMediumNm : "네덜란드PBG",
                    lotElement : {n03n : 0.8 ,    nh4n : 1.2  , p : 3.9   , k : 5.3 , ca : 5 ,   mg : 2.1 },
                    traceElement : {fe : 0.8 ,   b : 0.22  , mn : 0.55  , zn : 0.26 , cu : 0.05 , mo : 0.05}},]},],
    waterArr : [  { waterNm : "수돗물",
        lotElement : {n03n : 0.72 , nh4n : 0.09 , p : 0.02   , k : 0.06 , ca : 0.03 ,   mg : 0.04 },
        traceElement : { fe : "",   b : 0.01 , mn : 0.02  , zn : 0.03 , cu : 0.001 , mo : 0}},
        { waterNm : "지하수" ,
            lotElement : {n03n : 0.58 , nh4n : 0.02 , p : 0.01   , k : 0.26 , ca : 0.88 ,   mg : 0.51 },
            traceElement : { fe : "",   b : 0.02 , mn : 0.03  , zn : 0.004 , cu : 0.002 , mo : 0}},
        { waterNm : "하천수" ,
            lotElement : {n03n : 0.85 , nh4n : 0.10 , p : 0.05   , k : 0.45 , ca : 0.73 ,   mg : 0.04 },
            traceElement : { fe : "",   b : 0.015 , mn : 0.04  , zn : 0.005 , cu : 0.001 , mo : 0}},
        { waterNm : "빗물" ,
            lotElement : {n03n : 0.11 , nh4n : 0.02 , p : 0.01   , k : 0.01 , ca : 0.00 ,   mg : 0.00 },
            traceElement : { fe : "",   b : 0 , mn : 0  , zn : 0 , cu : 0 , mo : 0}},],
    atom : {  traceElement : { fe : 55.9, b : 10.8 , mn : 54.9  , zn : 65.4 , cu : 63.5 , mo : 95.9}},
    fertilizerNm : { fe : "철이디티에이<br/>(FeEDTA)", b : "붕산<br/>(H3BO3)" , mn : "황산망간<br/>(MnSO4·4H20)"  , zn : "황산아연<br/>(ZnSO4·7H20)" , cu : "황산구리<br/>(CuSO4·5H20)" , mo : "몰리브덴산나트륨<br/>(Na2MoO4·2H20)"},
    fertilizer : { fe : 382.1, b : 61.8 , mn : 223.1  , zn : 287.6 , cu : 250.0 , mo : 242.0}
};

var elementReckoning = {};

function fn_element(kindStep){
    var cn = new calciumNitrate4();
    this.waterKind = '';
    //초기 화면 셋팅
    var init = function () {
        if( kindStep === 1 || kindStep === undefined || kindStep === '' || kindStep === null) {
            var intWidth = 100 / data.cultureMediumArr.length;
            data.cultureMediumArr.forEach(function (item, index) {
                var cropHtml = "<button onclick='fnEl.cultureMediumSetting( " + index + " );' class='cropLi btn' style='width: " + intWidth + "%'>" + item.cropNm + "</button>";
                $('#crop').append(cropHtml);
                cropHtml = null;
            });
            intWidth = null;
        }else {
            $('#cropNm').text("작물 : "+elementReckoning.crop.cropNm);
            $('#cultureMediumNm').text("배양액 : "+elementReckoning.cultureMedium.cultureMediumNm);
            $('#waterNm').text("원수 : "+elementReckoning.water.waterNm);
            var html = '<button class="btn" onclick="fnEl.elBtn(4);">4수염질산칼슘</button>  <button class="btn" onclick="fnEl.elBtn(10);">10수염질산칼슘</button>';
            $('#elbtn').append(html);
            html = null;
        }
    };

    //초기 셋팅
    init();
    //배양액 셋팅
    this.cultureMediumSetting = function( index ){
        liRemove($('#cultureMedium'));
        elementReckoningSet(data.cultureMediumArr[index] , 'CROP' );
        textSetting($('#cropNm') , "작물 : "+data.cultureMediumArr[index].cropNm);
        liRemove($('#crop'));
        liTableSetting('CROP' , $('#cultureMedium'));
        $('#cropDiv').hide();
    };
    //원수 셋팅
    this.cultureMediumLi = function(index , removeId , ObjectId){
        elementReckoningSet(elementReckoning.crop.cultureMediumKind[index] , "culture" );
        textSetting($('#cultureMediumNm') , "배양액 : "+elementReckoning.cultureMedium.cultureMediumNm);
        liRemove($('#cultureMedium'));
        liTableSetting("culture" , $('#water') );
        $('#cultureMediumDiv').hide();
    };


    //원수 선택
    this.waterLi = function(index){
        elementReckoningSet(data.waterArr[index] , "WATER" );
        liRemove($('#water'));
        textSetting($('#waterNm') , "원수 : "+data.waterArr[index].waterNm);
        $('#waterDiv').hide();
        elementTable('lotElement4'    , 'cultureMedium' , 'lotElement'   , '조성(me/ℓ)' );
        elementTable('lotElement4'    , 'water'         , 'lotElement'   , '원수 성분(me/ℓ)');
        elementTable('lotElement10'   , 'cultureMedium' , 'lotElement'   , '조성(me/ℓ)' );
        elementTable('lotElement10'   , 'water'         , 'lotElement'   , '원수 성분(me/ℓ)');
        elementTable('traceElement4'  , 'atom'          , 'traceElement' , '원소' );
        elementTable('traceElement4'  , 'cultureMedium' , 'traceElement' , '조성(me/ℓ)' );
        elementTable('traceElement4'  , 'water'         , 'traceElement' , '원수 성분(me/ℓ)');
        elementTable('traceElement10' , 'atom'          , 'traceElement' , '원소' );
        elementTable('traceElement10' , 'cultureMedium' , 'traceElement' , '조성(me/ℓ)' );
        elementTable('traceElement10' , 'water'         , 'traceElement' , '원수 성분(me/ℓ)');
        var html = '<button class="btn" onclick="fnEl.elBtn(4);">4수염질산칼슘</button>  <button class="btn" onclick="fnEl.elBtn(10);">10수염질산칼슘</button>';
        $('#elbtn').append(html);
        html = null;
    };
    //다음 스탭이동
    this.nextStep = function(index){
        elementReckoningSet(data.waterArr[index] , "WATER" );
        liRemove($('#water'));
        $('#waterNm').text("원수 : "+data.waterArr[index].waterNm);
        $('#waterDiv').hide();
        var html = '<button class="btn" onclick="fnEl.nextStop2();">다음 스텝</button>';
        $('#elbtn').append(html);
        html = null;
    };

    this.nextStop2 = function(){
        $('#elementReckoning').val(JSON.stringify(elementReckoning));
        $('#stepFrm').attr("action" ,"/se/ntrntslutnsmlt/ntrntslutnSmltStep2.do" );
        $('#stepFrm').submit();
    };

    this.elBtn = function(kind){
        this.waterKind = kind;
        if(kind === 4){
            $('#lotElementDiv4').show();
            $('#traceElementDiv4').show();
        }else if(kind === 10){
            $('#lotElementDiv10').show();
            $('#traceElementDiv10').show();
        }
    };
    // 다량 원소 제조 조성
    this.stap1_1 = function(kind){
        this.waterKind = kind;
        var elemDivId;
        if(this.waterKind === 4){
            if(elementReckoning.su4 === undefined){
                elementReckoning.su4 = {};
            }
            if(elementReckoning.su4.stap1 === undefined){
                elementReckoning.su4.stap1 = {};
            }
            elemDivId = "lotElement4";
        } else if(this.waterKind === 10){
            if(elementReckoning.su10 === undefined){
                elementReckoning.su10 = {};
            }
            if(elementReckoning.su10.stap1 === undefined){
                elementReckoning.su10.stap1 = {};
            }
            elemDivId = "lotElement10";
        }
        var stapLot = {};
        data.elementArr.forEach(function(item , index){
            if(item.elClassId === "lotElement"){
                item.elementKey.forEach(function(keyItem , index){
                    if(elementReckoning.cultureMedium.lotElement[keyItem] !== null && elementReckoning.cultureMedium.lotElement[keyItem] !== undefined){
                        stapLot[keyItem] = Number((elementReckoning.cultureMedium.lotElement[keyItem] - elementReckoning.water.lotElement[keyItem]).toFixed(3));
                    }
                });
                if(fnEl.waterKind === 4){
                    elementReckoning.su4.stap1.lotElement = stapLot;
                }else if(fnEl.waterKind === 10){
                    elementReckoning.su10.stap1.lotElement = stapLot;
                }
            }
        });
        elementTable(elemDivId , 'stap1' , 'lotElement' , '제조 조성(me/ℓ)');
        $('#su'+fnEl.waterKind+'stap1Lo').hide();
        $('#su'+fnEl.waterKind+'stap2_1Lo').show();
        if(this.waterKind === 4){
            lotElementStep(cn.exStep1());
        }else{

        }
        stapLot = null;
        elemDivId = null;
    };
    //미량 원소 제조 조성
    this.stap1_2 = function(kind){
        this.waterKind = kind;
        var elemDivId;
        if(this.waterKind === 4){
            if(elementReckoning.su4 === undefined){
                elementReckoning.su4 = {};
            }
            if(elementReckoning.su4.stap1 === undefined){
                elementReckoning.su4.stap1 = {};
            }
            elemDivId = "traceElement4";
        } else if(this.waterKind === 10){
            if(elementReckoning.su10 === undefined){
                elementReckoning.su10 = {};
            }
            if(elementReckoning.su10.stap1 === undefined){
                elementReckoning.su10.stap1 = {};
            }
            elemDivId = "traceElement10";
        }
        var stapTra = {};
        data.elementArr.forEach(function(item , index){
            if(item.elClassId === "traceElement"){
                item.elementKey.forEach(function(keyItem , index){
                    if(elementReckoning.cultureMedium.traceElement[keyItem] !== null && elementReckoning.cultureMedium.traceElement[keyItem] !== undefined){
                        stapTra[keyItem] = Number((elementReckoning.cultureMedium.traceElement[keyItem] - elementReckoning.water.traceElement[keyItem]).toFixed(3));
                    }
                });
                if(fnEl.waterKind === 4){
                    elementReckoning.su4.stap1.traceElement = stapTra;
                }else if(fnEl.waterKind === 10){
                    elementReckoning.su10.stap1.traceElement = stapTra;
                }
            }
        });
        elementTable(elemDivId , 'stap1' , 'traceElement' , '제조 조성(me/ℓ)');
        $('#su'+fnEl.waterKind+'stap1Tr').hide();
        $('#su'+fnEl.waterKind+'stap2Tr').show();
        stapTra = null;
        elemDivId = null;
    };
    //다량원소 NH4H2PO4
    this.stap2_1 = function(kind){
        this.waterKind = kind;
        var molecule;
        var title;
        if(fnEl.waterKind === 4){
            molecule = 115.10;
            title = "NH4H2PO4";
        }else{
            molecule = 136.1;
            title = "KH2PO4";
        }
        lotElementSetting('2' , molecule , 'stap1' , 'stap2' ,  'stap2_1' , title);
        $('#su'+fnEl.waterKind+'stap2_1Lo').hide();
        $('#su'+fnEl.waterKind+'stap2_2Lo').show();
        if(this.waterKind === 4){
            lotElementStep(cn.step2_1());
        }else{

        }
        molecule = null;
        title = null;
    };

    this.stapSubmit2_1 = function(kind , subWaterKind){
        this.waterKind = subWaterKind;
        lotElementSetting2(kind);
        $('#su'+fnEl.waterKind+'stap2_2Lo').hide();
        $('#su'+fnEl.waterKind+'stap3_1Lo').show();
    };
    //미량 원소 비료
    this.stap2_2 = function(kind){
        this.waterKind = kind;
        var elemDivId;
        if(this.waterKind === 4){
            if(elementReckoning.su4.stap2 === undefined){
                elementReckoning.su4.stap2 = {};
            }
            elemDivId = "traceElement4";
            elementReckoning.su4.stap2.fertilizerNm = data.fertilizerNm;
            elementReckoning.su4.stap2.fertilizer = data.fertilizer;
        } else if(this.waterKind === 10){
            if(elementReckoning.su10.stap2 === undefined){
                elementReckoning.su10.stap2 = {};
            }
            elemDivId = "traceElement10";
            elementReckoning.su10.stap2.fertilizerNm = data.fertilizerNm;
            elementReckoning.su10.stap2.fertilizer = data.fertilizer;
        }
        elementTable(elemDivId , "stap2" , "fertilizerNm" , "비료" );
        elementTable(elemDivId , "stap2" , "fertilizer" , "비료 분자량" );
        $('#su'+fnEl.waterKind+'stap2Tr').hide();
        $('#su'+fnEl.waterKind+'stap3Tr').show();
    };
    //다량원소 Ca(NO3)2·4H2O
    this.stap3_1 = function(kind){
        this.waterKind = kind;
        var molecule;
        var title;
        if(fnEl.waterKind === 4){
            molecule = 236.10;
            title = "Ca(NO3)2·4H2O";
        }else{
            molecule = 1080.5 ;
            title = "5[Ca(NO3)2 2H2O]NH4NO3";
        }
        lotElementSetting('3' , molecule , 'stap2_1' , 'stap3' ,  'stap3_1' , title);
        $('#su'+fnEl.waterKind+'stap3_1Lo').hide();
        $('#su'+fnEl.waterKind+'stap3_2Lo').show();
        molecule = null;
        title = null;
    };
    this.stapSubmit3_1 = function(kind , subWaterKind){
        this.waterKind = subWaterKind;
        lotElementSetting2(kind);
        $('#su'+fnEl.waterKind+'stap3_2Lo').hide();
        $('#su'+fnEl.waterKind+'stap4_1Lo').show();
    };
    //미량 원소 비료량(㎎/ℓ)
    this.stap3_2 = function(kind){
        this.waterKind = kind;
        var elemDivId;
        if(this.waterKind === 4){
            if(elementReckoning.su4.stap3 === undefined){
                elementReckoning.su4.stap3 = {};
            }
            elemDivId = "traceElement4";
        } else if(this.waterKind === 10){
            if(elementReckoning.su10.stap3 === undefined){
                elementReckoning.su10.stap3 = {};
            }
            elemDivId = "traceElement10";
        }
        var stapTra = {};
        data.elementArr.forEach(function(item , index){
            if(item.elClassId === "traceElement"){
                item.elementKey.forEach(function(keyItem , index){
                    if(fnEl.waterKind === 4){
                        stapTra[keyItem] = Number((elementReckoning.su4.stap2.fertilizer[keyItem]*elementReckoning.su4.stap1.traceElement[keyItem]/elementReckoning.atom.traceElement[keyItem]).toFixed(2));
                    }else if(fnEl.waterKind === 10){
                        stapTra[keyItem] = Number((elementReckoning.su10.stap2.fertilizer[keyItem]*elementReckoning.su10.stap1.traceElement[keyItem]/elementReckoning.atom.traceElement[keyItem]).toFixed(2));
                    }
                });
                if(fnEl.waterKind === 4){
                    elementReckoning.su4.stap3.traceElement = stapTra;
                }else if(fnEl.waterKind === 10){
                    elementReckoning.su10.stap3.traceElement = stapTra;
                }
            }
        });
        elementTable(elemDivId , "stap3" , 'traceElement' , "비료량(㎎/ℓ)");
        $('#su'+fnEl.waterKind+'stap3Tr').hide();
    };
    //MgSO4·7H2O
    this.stap4_1 = function(kind){
        this.waterKind = kind;
        var molecule;
        var title;
        if(fnEl.waterKind === 4){
            molecule = 246.40 ;
            title = "MgSO4·7H2O";
        }else{
            molecule = 256.3 ;
            title = "Mg(NO3)2·6H2O";
        }
        lotElementSetting('4' , molecule , 'stap3_1' , 'stap4' ,  'stap4_1' ,title);
        $('#su'+fnEl.waterKind+'stap4_1Lo').hide();
        $('#su'+fnEl.waterKind+'stap4_2Lo').show();
        molecule = null;
        title = null;
    };
    this.stapSubmit4_1 = function(kind , subWaterKind){
        this.waterKind = subWaterKind;
        lotElementSetting2(kind);
        $('#su'+fnEl.waterKind+'stap4_2Lo').hide();
        $('#su'+fnEl.waterKind+'stap5_1Lo').show();
    };
    //KNO3
    this.stap5_1 = function(kind){
        this.waterKind = kind;
        var molecule;
        var title;
        if(fnEl.waterKind === 4){
            molecule = 101.10 ;
            title = "KNO3";
        }else{
            molecule = 101.10 ;
            title = "KNO3";
        }
        lotElementSetting('5' , molecule , 'stap4_1' , 'stap5' ,  'stap5_1' ,title);
        $('#su'+fnEl.waterKind+'stap5_1Lo').hide();
        $('#su'+fnEl.waterKind+'stap5_2Lo').show();
        molecule = null;
        title = null;
    };
    this.stapSubmit5_1 = function(kind , subWaterKind){
        this.waterKind = subWaterKind;
        lotElementSetting2(kind);
        $('#su'+fnEl.waterKind+'stap5_2Lo').hide();
        $('#su'+fnEl.waterKind+'stap6_1Lo').show();
    };
    //K2SO4
    this.stap6_1 = function(kind){
        this.waterKind = kind;
        var molecule;
        var title;
        if(fnEl.waterKind === 4){
            molecule = 174.30 ;
            title = "K2SO4";
            $('#su'+fnEl.waterKind+'stap6_1Lo').hide();
            $('#su'+fnEl.waterKind+'stap6_2Lo').show();
        }else{
            molecule = 80 ;
            title = "NH4NO3";
            $('#su'+fnEl.waterKind+'stap6_1Lo').hide();
            $('#su'+fnEl.waterKind+'stap6_2Lo').show();
        }
        lotElementSetting('6' , molecule  , 'stap5_1' , 'stap6' ,  'stap6_1' , title);
        molecule = null;
        title = null;
    };

    this.stapSubmit6_1 = function(kind , subWaterKind){
        this.waterKind = subWaterKind;
        lotElementSetting2(kind);
        if(fnEl.waterKind === 4) {
            $('#su' + fnEl.waterKind + 'stap6_2Lo').hide();
        }else {
            $('#su' + fnEl.waterKind + 'stap6_2Lo').hide();
            $('#su' + fnEl.waterKind + 'stap7_1Lo').show();
        }
    };
    //K2SO4
    this.stap7_1 = function(kind){
        this.waterKind = kind;
        var molecule = 174.30;
        var title = "K2SO4";
        lotElementSetting('7' , molecule , 'stap6_1' , 'stap7' ,  'stap7_1' , title );
        $('#su'+fnEl.waterKind+'stap7_1Lo').hide();
        $('#su'+fnEl.waterKind+'stap7_2Lo').show();
        molecule = null;
        title = null;
    };

    this.stapSubmit7_1 = function(kind , subWaterKind){
        this.waterKind = subWaterKind;
        lotElementSetting2(kind);
        $('#su' + fnEl.waterKind + 'stap7_2Lo').hide();
    };
    //다량 원소 계산
    var lotElementSetting = function( stap , molecule ,preStapId , stapId , stapId_1 ,title ){
        var divId;
        if(fnEl.waterKind === 4){
            if(elementReckoning.su4[stapId] === undefined){
                elementReckoning.su4[stapId] = {};
            }
            if(elementReckoning.su4[stapId_1] === undefined){
                elementReckoning.su4[stapId_1] = {};
            }
            divId = "lotElement4";
        }else if(fnEl.waterKind === 10){
            if(elementReckoning.su10[stapId] === undefined){
                elementReckoning.su10[stapId] = {};
            }
            if(elementReckoning.su10[stapId_1] === undefined){
                elementReckoning.su10[stapId_1] = {};
            }
            divId = "lotElement10";
        }
        var stapLot = {};
        data.elementArr.forEach(function(item , index){
            if(item.elClassId === "lotElement"){
                if(fnEl.waterKind === 4){
                    if(stap === "2"){
                        var p = elementReckoning.su4[preStapId].lotElement.p;
                        item.elementKey.forEach(function(keyItem , index){
                            if(keyItem === "nh4n"){
                                stapLot[keyItem] = Number((p / 3).toFixed(2));
                            }else if(keyItem === "p"){
                                stapLot[keyItem] = p;
                            }else{
                                stapLot[keyItem] = '';
                            }
                        });
                        stapLot['molecule'] = molecule;
                        stapLot['equivalent'] = Number((stapLot.molecule / 3).toFixed(2));
                        stapLot['fertilizer'] = Number((stapLot['equivalent'] * stapLot.p).toFixed(2));
                        elementReckoning.su4[stapId].lotElement = stapLot;
                    }else if(stap === "3"){
                        var ca = elementReckoning.su4[preStapId].lotElement.ca;
                        item.elementKey.forEach(function(keyItem , index){
                            if(keyItem === "ca"){
                                stapLot[keyItem] = ca;
                            }else if(keyItem === "n03n"){
                                stapLot[keyItem] = ca;
                            }else{
                                stapLot[keyItem] = '';
                            }
                        });
                        stapLot['molecule'] = molecule;
                        stapLot['equivalent'] = Number((stapLot.molecule / 2).toFixed(2));
                        stapLot['fertilizer'] = Number((stapLot['equivalent'] * stapLot.ca).toFixed(2));
                        elementReckoning.su4[stapId].lotElement = stapLot;
                    }else if(stap === "4"){
                        var mg = elementReckoning.su4[preStapId].lotElement.mg;
                        item.elementKey.forEach(function(keyItem , index){
                            if(keyItem === "mg"){
                                stapLot[keyItem] = mg;
                            }else{
                                stapLot[keyItem] = '';
                            }
                        });
                        stapLot['molecule'] = molecule;
                        stapLot['equivalent'] = Number((stapLot.molecule / 2).toFixed(2));
                        stapLot['fertilizer'] = Number((stapLot['equivalent'] * stapLot.mg).toFixed(2));
                        elementReckoning.su4[stapId].lotElement = stapLot;
                    }else if(stap === "5"){
                        var n03n = elementReckoning.su4[preStapId].lotElement.n03n;
                        item.elementKey.forEach(function(keyItem , index){
                            if(keyItem === "n03n"){
                                stapLot[keyItem] = n03n;
                            }else if(keyItem === "k"){
                                stapLot[keyItem] = n03n;
                            }else{
                                stapLot[keyItem] = '';
                            }
                        });
                        stapLot['molecule'] = molecule;
                        stapLot['equivalent'] = Number((stapLot.molecule / 1).toFixed(2));
                        stapLot['fertilizer'] = Number((stapLot['equivalent'] * stapLot.n03n).toFixed(2));
                        elementReckoning.su4[stapId].lotElement = stapLot;
                    }else if(stap === "6"){
                        var k = elementReckoning.su4[preStapId].lotElement.k;
                        item.elementKey.forEach(function(keyItem , index){
                            if(keyItem === "k"){
                                stapLot[keyItem] = k;
                            }else{
                                stapLot[keyItem] = '';
                            }
                        });
                        stapLot['molecule'] = molecule;
                        stapLot['equivalent'] = Number((stapLot.molecule / 2).toFixed(2));
                        stapLot['fertilizer'] = Number((stapLot['equivalent'] * stapLot.k).toFixed(2));
                        elementReckoning.su4[stapId].lotElement = stapLot;
                    }
                }else if(fnEl.waterKind === 10){
                    if(stap === "2"){
                        var p = elementReckoning.su10[preStapId].lotElement.p;
                        item.elementKey.forEach(function(keyItem , index){
                            if(keyItem === "k"){
                                stapLot[keyItem] = Number((p / 3).toFixed(2));
                            }else if(keyItem === "p"){
                                stapLot[keyItem] = p;
                            }else{
                                stapLot[keyItem] = '';
                            }
                        });
                        stapLot['molecule'] = molecule;
                        stapLot['equivalent'] = Number((stapLot.molecule / 3).toFixed(2));
                        stapLot['fertilizer'] = Number((stapLot['equivalent'] * stapLot.p).toFixed(2));
                        elementReckoning.su10[stapId].lotElement = stapLot;
                    }else if(stap === "3"){
                        var ca = elementReckoning.su10[preStapId].lotElement.ca;
                        item.elementKey.forEach(function(keyItem , index){
                            if(keyItem === "ca"){
                                stapLot[keyItem] = ca;
                            }else if(keyItem === "n03n"){
                                stapLot[keyItem] = Number((ca * 1.1).toFixed(2));
                            }else if(keyItem === "nh4n"){
                                stapLot[keyItem] = Number((ca * 0.1).toFixed(2));
                            }else{
                                stapLot[keyItem] = '';
                            }
                        });
                        stapLot['molecule'] = molecule;
                        stapLot['equivalent'] = Number((stapLot.molecule / 10).toFixed(2));
                        stapLot['fertilizer'] = Number((stapLot['equivalent'] * stapLot.ca).toFixed(2));
                        elementReckoning.su10[stapId].lotElement = stapLot;
                    }else if(stap === "4"){
                        var mg = elementReckoning.su10[preStapId].lotElement.mg;
                        item.elementKey.forEach(function(keyItem , index){
                            if(keyItem === "mg"){
                                stapLot[keyItem] = mg;
                            }else if(keyItem === "n03n"){
                                stapLot[keyItem] = mg;
                            }else{
                                stapLot[keyItem] = '';
                            }
                        });
                        stapLot['molecule'] = molecule;
                        stapLot['equivalent'] = Number((stapLot.molecule / 2).toFixed(2));
                        stapLot['fertilizer'] = Number((stapLot['equivalent'] * stapLot.mg).toFixed(2));
                        elementReckoning.su10[stapId].lotElement = stapLot;
                    }else if(stap === "5"){
                        var n03n = elementReckoning.su10[preStapId].lotElement.n03n - elementReckoning.su10[preStapId].lotElement.nh4n;
                        item.elementKey.forEach(function(keyItem , index){
                            if(keyItem === "n03n"){
                                stapLot[keyItem] = n03n;
                            }else if(keyItem === "k"){
                                stapLot[keyItem] = n03n;
                            }else{
                                stapLot[keyItem] = '';
                            }
                        });
                        stapLot['molecule'] = molecule;
                        stapLot['equivalent'] = Number((stapLot.molecule / 1).toFixed(2));
                        stapLot['fertilizer'] = Number((stapLot['equivalent'] * stapLot.n03n).toFixed(2));
                        elementReckoning.su10[stapId].lotElement = stapLot;
                    }else if(stap === "6"){
                        var nh4n = elementReckoning.su10[preStapId].lotElement.nh4n;
                        item.elementKey.forEach(function(keyItem , index){
                            if(keyItem === "n03n"){
                                stapLot[keyItem] = nh4n;
                            }else if(keyItem === "nh4n"){
                                stapLot[keyItem] = nh4n;
                            }else{
                                stapLot[keyItem] = '';
                            }
                        });
                        stapLot['molecule'] = molecule;
                        stapLot['equivalent'] = Number((stapLot.molecule / 1).toFixed(2));
                        stapLot['fertilizer'] = Number((stapLot['equivalent'] * stapLot.nh4n).toFixed(2));
                        elementReckoning.su10[stapId].lotElement = stapLot;
                    }else if(stap === "7"){
                        var k = elementReckoning.su10[preStapId].lotElement.k;
                        item.elementKey.forEach(function(keyItem , index){
                            if(keyItem === "k"){
                                stapLot[keyItem] = k;
                            }else{
                                stapLot[keyItem] = '';
                            }
                        });
                        stapLot['molecule'] = molecule;
                        stapLot['equivalent'] = Number((stapLot.molecule / 2).toFixed(2));
                        stapLot['fertilizer'] = Number((stapLot['equivalent'] * stapLot.k).toFixed(2));
                        elementReckoning.su10[stapId].lotElement = stapLot;
                    }
                }
            }
        });
        elementTable(divId , stapId , 'lotElement' , title);
        stapLot = { };
        data.elementArr.forEach(function(item , index){
            if(fnEl.waterKind === 4){
                if(item.elClassId === "lotElement"){
                    item.elementKey.forEach(function(keyItem , index){
                        stapLot[keyItem] = Number((elementReckoning.su4[preStapId].lotElement[keyItem] - (elementReckoning.su4[stapId].lotElement[keyItem] == "" ? 0 : elementReckoning.su4[stapId].lotElement[keyItem])).toFixed(2));
                    });
                }
                elementReckoning.su4[stapId_1].lotElement = stapLot;
            }else if(fnEl.waterKind === 10){
                if(item.elClassId === "lotElement"){
                    item.elementKey.forEach(function(keyItem , index){
                        stapLot[keyItem] = Number((elementReckoning.su10[preStapId].lotElement[keyItem] - (elementReckoning.su10[stapId].lotElement[keyItem] == "" ? 0 : elementReckoning.su10[stapId].lotElement[keyItem])).toFixed(2));
                    });
                }
                elementReckoning.su10[stapId_1].lotElement = stapLot;
            }
        });
        //결과 값 표시
        //elementTable(divId , stapId_1 , 'lotElement' , ' ');
        stapLot = null;
        divId = null;
    };
    //미션 정보
    this.lotElementStep = function(html){
        $('#lotElement4Etc').html(html);
    };

    var lotElementSetting2 = function (stapId_1){
        var divId = "";
        if(fnEl.waterKind === 4) {
            divId = "lotElement4";
        }else{
            divId = "lotElement10";
        }
        elementTable(divId , stapId_1 , 'lotElement' , ' ');
    }
    //배약액 및 원수 Object 셋팅
    var elementReckoningSet = function(Object , jsonKind){
        if(jsonKind === "CROP"){
            elementReckoning.crop = Object;
        }else if(jsonKind === "culture"){
            elementReckoning.cultureMedium = Object;
        }else if(jsonKind === "WATER"){
            elementReckoning.water = Object;
            elementReckoning.atom = data.atom;
        }
    };
    //li table 그려주는 작업
    var liTableSetting = function(jsonKind , ObjectId){
        var Object = {};
        if(jsonKind === "CROP"){
            Object = elementReckoning.crop.cultureMediumKind;
        }else if(jsonKind === "culture"){
            Object = data.waterArr;
        }
        var intWidth = 100 / Object.length;
        Object.forEach(function(item , index){
            var html = '';
            if(Object.length  !== index+1){
                html = '<div style="padding: 10px; list-style-type : none; float : left; width: '+intWidth+'%;">';
            }else{
                html = '<div style="padding: 10px; list-style-type : none;  width: '+intWidth+'%;">';
            }
            html += '   <table class="table">' +
                '       <thead> <tr> <th colspan="2">' +
                '           <button class="btn" ';
            if(jsonKind === "CROP"){
                html += ' onclick="fnEl.cultureMediumLi('+index+');" >'+item.cultureMediumNm+'</button></th></tr></thead><tbody>';
            }else if(jsonKind === "culture"){
                if(kindStep === 1){
                    html += " onclick='fnEl.nextStep("+index+");'>"+item.waterNm+"</button></th></tr></thead><tbody>";
                }else{
                    html += " onclick='fnEl.waterLi("+index+");'>"+item.waterNm+"</button></th></tr></thead><tbody>";
                }
            }
            data.elementArr.forEach(function(eitem , eindex){
                html += "<tr>";
                html += "    <td>"+eitem.elClassNm+"</td>";
                html += "    <td>"+eitem.elementUnit+"</td>";
                html += "</tr>";
                eitem.element.forEach(function(elitem , elindex){
                    html += "<tr>";
                    html += "    <td>"+elitem+"</td>";
                    html += "    <td>"+ item[eitem.elClassId][eitem.elementKey[elindex]]+"</td>";
                    html += "</tr>";
                });
            });
            html +="</tbody></table></div>";
            $(ObjectId).append(html);
            html = null;
        });
        Object = null;
    };
    //li 삭제 ul 아이디
    var liRemove = function(object){
        $(object).children().remove();
    };
    var textSetting = function(ObjectId , text ){
        $(ObjectId).text(text);
    };
    //표에 값 셋팅
    var elementTable = function(classId , ObjectTopId , ObjectId , title ){
        var lotElementKeyArr = ['molecule','equivalent','fertilizer'];
        var html = "<tr><td>"+title+"</td>";
        data.elementArr.forEach(function(item , index){

            if(fnEl.waterKind === 4){
                if(item.elClassId === (ObjectId !== "lotElement" ? "traceElement" : ObjectId) ){
                    item.elementKey.forEach(function(elitem , elindex){
                        switch (ObjectTopId) {
                            case "stap2" :
                                switch (elitem) {
                                    case "nh4n" :
                                        html += "<td><a href='#this' onclick='fnEl.lotElementStep(centent.step2_2());' >"+elementReckoning.su4[ObjectTopId][ObjectId][elitem]+"</a></td>";
                                        break;
                                    case "p" :
                                        html += "<td><a href='#this' onclick='fnEl.lotElementStep(centent.step2_1());' >"+elementReckoning.su4[ObjectTopId][ObjectId][elitem]+"</a></td>";
                                        break;
                                    default:
                                        html += "<td> </td>";
                                }
                                break;
                            default :
                                html += "<td>"+elementReckoning.su4[ObjectTopId][ObjectId][elitem]+"</td>";
                        }
                    });
                    if(ObjectId === "lotElement"){
                        lotElementKeyArr.forEach(function(elitem , elindex){
                            html += "<td>"+(elementReckoning.su4[ObjectTopId][ObjectId][elitem] === undefined ? "" : elementReckoning.su4[ObjectTopId][ObjectId][elitem])+"</td>";
                        });
                    }
                }
            }else if(fnEl.waterKind === 10){
                if(item.elClassId === (ObjectId !== "lotElement" ? "traceElement" : ObjectId)){
                    item.elementKey.forEach(function(elitem , elindex){
                        html += "<td>"+elementReckoning.su10[ObjectTopId][ObjectId][elitem]+"</td>";
                    });
                    if(ObjectId === "lotElement"){
                        lotElementKeyArr.forEach(function(elitem , elindex){
                            html += "<td>"+(elementReckoning.su10[ObjectTopId][ObjectId][elitem] === undefined ? "" : elementReckoning.su10[ObjectTopId][ObjectId][elitem])+"</td>";
                        });
                    }
                }
            }else{
                if(item.elClassId === ObjectId){
                    item.elementKey.forEach(function(elitem , elindex){
                        html += "<td>"+elementReckoning[ObjectTopId][ObjectId][elitem]+"</td>";
                    });
                    if(ObjectId === "lotElement"){
                        lotElementKeyArr.forEach(function(elitem , elindex){
                            html += "<td>"+(elementReckoning[ObjectTopId][ObjectId][elitem] === undefined ? "" : elementReckoning[ObjectTopId][ObjectId][elitem])+"</td>";
                        });
                    }
                }
            }
        });
        html += "</tr>";
        $('#'+classId).append(html);
        html = null;
    };
    var lotElementStep = function(html){
        $('#lotElement4Etc').html(html);
    };


};

function calciumNitrate4(){
    var html = '';
    this.exStep1 = function(){
        html =  '양액 조성 시 사용할 원수를 분석하여 성분을 알아야합니다.</br>' +
            '원수에 비료를 넣어 배양액을 제조하게 되므로 목표 배양액 조성에서 원수의 성분을 뺀 값으로 양액을 제조합니다.</br>'+
            '제조 조성 = 목표 조성 – 원수 성분</br>'+
            'NO3 - N : '+elementReckoning.cultureMedium.lotElement.n03n+'-'+elementReckoning.water.lotElement.n03n+'='+elementReckoning.su4.stap1.lotElement.n03n+'</br>'+
            'NH4 - N : '+elementReckoning.cultureMedium.lotElement.nh4n+'-'+elementReckoning.water.lotElement.nh4n+'='+elementReckoning.su4.stap1.lotElement.nh4n+'</br>'+
            'P : '+elementReckoning.cultureMedium.lotElement.p+'-'+elementReckoning.water.lotElement.p+'='+elementReckoning.su4.stap1.lotElement.p+'</br>'+
            'K : '+elementReckoning.cultureMedium.lotElement.k+'-'+elementReckoning.water.lotElement.k+'='+elementReckoning.su4.stap1.lotElement.k+'</br>'+
            'Ca : '+elementReckoning.cultureMedium.lotElement.ca+'-'+elementReckoning.water.lotElement.ca+'='+elementReckoning.su4.stap1.lotElement.ca+'</br>'+
            'Mg : '+elementReckoning.cultureMedium.lotElement.mg+'-'+elementReckoning.water.lotElement.mg+'='+elementReckoning.su4.stap1.lotElement.mg+'</br>';
        return html;
    };
    this.step2_1 = function (){
        html =  '① P의 조성 </br>' +
            '제1인산암모늄(NH4H2PO4)으로 인의 조성 기준으로 제조 조성 1.98 me/ℓ에 맞춥니다.';
        return html;
    };
    this.step2_2 = function (){

        html =  '① P의 조성 </br>' +
            '제1인산암모늄(NH4H2PO4)으로 인의 조성 기준으로 제조 조성 1.98 me/ℓ에 맞춥니다.'+
            '② NH4 – N의 조성</br>' +
            '제1인산암모늄을 물에 넣으면 암모늄 이온(NH4+)과 인산 이온(PO4 -3)으로 이온화됩니다.</br>' +
            'NH4H2PO4 → NH4 + + H2PO4 - → NH4 + + PO4 -3 + 2H+';
        return html;
    };
};

var centent = new calciumNitrate4();