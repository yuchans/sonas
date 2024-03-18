/**
 * description
 * @author JAVA
 */

/* 온실 설정 정보 */
var GH_DATASET = (function() {
    var _ = window._ || {
        grenHousList: [],
        activeIdx: -1,
        popupGrenHousList: {},
        dataset: null
    };

    return {
        reset: function() {
            _.grenHousList = [];
            _.activeIdx = -1;
            _.popupGrenHousList = {};
            _.dataset = null;
        },
        setActiveIdx: function(idx) {
            _.activeIdx = idx;
        },
        getActiveIdx: function() {
            return _.activeIdx;
        },
        setGrenHous: function(idx, data) {
            _.grenHousList[idx] = data;
        },
        getGrenHous: function(idx) {
            return _.grenHousList[idx];
        },
        getGrenHousList: function() {
            var list = [];
            for (var i = 0; i < _.grenHousList.length; i++) {
                _.grenHousList[i] && list.push(_.grenHousList[i]);
            }
            return list;
        },
        getPopupGrenHous: function(type, idx) {
            return _.popupGrenHousList[type][idx];
        },
        setPopupGrenHousList: function(type, list) {
            _.popupGrenHousList[type] = list;
        },
        getPopupGrenHousList: function(type) {
            return _.popupGrenHousList[type];
        },
        setDataset: function(dataset) {
            _.dataset = dataset;
        },
        getDataset: function() {
            return _.dataset;
        }
    }
})();

/* 검색란 설정 정보 */
var srchOpts = {
    my: {
        cropCode: {
            id: "cropCode",
            defaultText: "선택",
            emptyText: "작물 정보가 없습니다.",
            nextId: "vritCode"
        },
        vritCode: {
            id: "vritCode",
            url: "/se/ajax/vrit.do",
            defaultText: "선택",
            emptyText: "품종 정보가 없습니다.",
            nextId: "grenHousId"
        },
        grenHousId: {
            id: "grenHousId",
            url: "/se/ajax/grenHousByVrit.do",
            defaultText: "선택",
            emptyText: "온실 정보가 없습니다.",
            nextId: "zoneId"
        },
        zoneId: {
            id: "zoneId",
            url: "/se/ajax/zone.do",
            defaultText: "선택",
            emptyText: "구역 정보가 없습니다.",
            nextId: "crpsn"
        },
        crpsn: {
            id: "crpsn",
            url: "/se/ajax/crpsn.do",
            defaultText: "선택",
            defaultValue: -1,
            emptyText: "작기 정보가 없습니다."
        }
    },
    cmpr: {
        cropCode: {
            id: "cropCode",
            defaultText: "선택",
            emptyText: "작물 정보가 없습니다.",
            nextId: "vritCode"
        },
        vritCode: {
            id: "vritCode",
            url: "/se/bigdata/ajax/cmprVrit.do",
            defaultText: "선택",
            emptyText: "품종 정보가 없습니다.",
            nextId: "areaDoCd"
        },
        areaDoCd: {
            id: "areaDoCd",
            url: "/se/bigdata/ajax/areaDo.do",
            defaultText: "선택",
            emptyText: "도 정보가 없습니다.",
            nextId: "areaSignguCd"
        },
        areaSignguCd: {
            id: "areaSignguCd",
            url: "/se/bigdata/ajax/areaSigngu.do",
            defaultText: "선택",
            emptyText: "시군구 정보가 없습니다.",
            nextId: "crpsnPeriod"
        },
        crpsnPeriod: {
            id: "crpsnPeriod",
            url: "/se/bigdata/ajax/cmprCrpsn.do",
            defaultText: "선택",
            emptyText: "작기 정보가 없습니다."
        }
    }
};

/* 온실 환경 데이터 비교 분석 설정 */
var envSettions = [
    {
        name: '내부 온도',
        types: ['주간', '야간', '평균'],
        unit: ['℃', '℃', '℃'],
        keys: ['daytmTempVal', 'nighttmTempVal', 'tempVal'],
        graphKeys: ['tempVal']
    },
    {
        name: '외부 온도',
        types: ['주간', '야간', '평균'],
        unit: ['℃', '℃', '℃'],
        keys: ['daytmExtTempVal', 'nighttmExtTempVal', 'extTempVal'],
        graphKeys: ['extTempVal']
    },
    {
        name: '내부 습도',
        types: ['주간', '야간', '평균'],
        unit: ['%', '%', '%'],
        keys: ['daytmHmdtVal', 'nighttmHmdtVal', 'hmdtVal'],
        graphKeys: ['hmdtVal']
    },
    {
        name: '누적 일사량',
        types: ['누적 일사량'],
        unit: ['j/㎠'],
        keys: ['accmltSolaVal'],
        graphKeys: ['accmltSolaVal']
    },
    {
        name: 'CO₂ 농도',
        types: ['주간', '야간', '평균'],
        unit: ['ppm', 'ppm', 'ppm'],
        keys: ['daytmCo2Val', 'nighttmCo2Val', 'co2Val'],
        graphKeys: ['co2Val']
    },
    /* 추후 사용
    {
        name: '급액량',
        types: ['급액량', '급액횟수'],
        unit: ['cc', '회'],
        keys: ['wtrsplyAmt', 'wtrsplyCnt'],
        graphKeys: ['wtrsplyAmt', 'wtrsplyCnt']
    },
    {
        name: '급액 EC/pH',
        types: ['급액 EC', '급액 pH'],
        unit: ['dS/m', ''],
        keys: ['wtrsplyEcVal', 'wtrsplyPhVal'],
        graphKeys: ['wtrsplyEcVal', 'wtrsplyPhVal']
    }
    */
];

/* 작물 생육 데이터 비교 분석 설정 */
var grthSettions = [
    {
        name: '생장 길이',
        types: ['생장 길이'],
        unit: ['cm'],
        keys: ['1'],
        graphKeys: ['1']
    },
    {
        name: '화방 높이',
        types: ['화방 높이'],
        unit: ['cm'],
        keys: ['4'],
        graphKeys: ['4']
    },
    {
        name: '줄기 직경',
        types: ['줄기 직경'],
        unit: ['mm'],
        keys: ['2'],
        graphKeys: ['2']
    },
    {
        name: '엽장',
        types: ['엽장'],
        unit: ['cm'],
        keys: ['8'],
        graphKeys: ['8']
    },
    {
        name: '엽폭',
        types: ['엽폭'],
        unit: ['cm'],
        keys: ['9'],
        graphKeys: ['9']
    },
    {
        name: '엽수',
        types: ['엽수'],
        unit: ['개'],
        keys: ['10'],
        graphKeys: ['10']
    },
    {
        name: '수확량',
        types: ['수확량'],
        unit: ['kg'],
        keys: ['14'],
        graphKeys: ['14']
    }
];

/* 주차별 생장 비교 분석 설정 */
var weeksGrthSettions = {
    "graph": [
        {
            name: '생장 길이',
            types: ['생장 길이'],
            unit: ['cm'],
            keys: ['1'],
            graphKeys: ['1']
        },
        {
            name: '화방 높이',
            types: ['화방 높이'],
            unit: ['cm'],
            keys: ['4'],
            graphKeys: ['4']
        },
        {
            name: '줄기 직경',
            types: ['줄기 직경'],
            unit: ['mm'],
            keys: ['2'],
            graphKeys: ['2']
        },
        {
            name: '엽장',
            types: ['엽장'],
            unit: ['cm'],
            keys: ['8'],
            graphKeys: ['8']
        },
        {
            name: '엽폭',
            types: ['엽폭'],
            unit: ['cm'],
            keys: ['9'],
            graphKeys: ['9']
        },
        {
            name: '엽수',
            types: ['엽수'],
            unit: ['개'],
            keys: ['10'],
            graphKeys: ['10']
        }
    ],
    "table": [
        {
            name: '내부 온도',
            types: ['주간', '야간', '평균'],
            unit: ['℃', '℃', '℃'],
            keys: ['daytmTempVal', 'nighttmTempVal', 'tempVal'],
            graphKeys: ['tempVal']
        },
        {
            name: '내부 습도',
            types: ['주간', '야간', '평균'],
            unit: ['%', '%', '%'],
            keys: ['daytmHmdtVal', 'nighttmHmdtVal', 'hmdtVal'],
            graphKeys: ['hmdtVal']
        },
        {
            name: '누적 일사량',
            types: ['평균'],
            unit: ['j/㎠'],
            keys: ['accmltSolaVal'],
            graphKeys: ['accmltSolaVal']
        },
        {
            name: 'CO₂ 농도',
            types: ['주간', '야간', '평균'],
            unit: ['ppm', 'ppm', 'ppm'],
            keys: ['daytmCo2Val', 'nighttmCo2Val', 'co2Val'],
            graphKeys: ['co2Val']
        },
        {
            name: '급액량',
            types: ['평균'],
            unit: ['cc'],
            keys: ['wtrsplyAmt'],
            graphKeys: ['wtrsplyAmt']
        }

    ]
};

/* 온실별 환경요인과 생육의 연관성 분석 설정 */
var envGrthSettions = [
    {
        name: '내부 온도',
        types: ['평균'],
        unit: ['℃'],
        keys: ['tempVal'],
        graphKeys: ['tempVal'],
        visible: true,
        yAxis: 0
    },
    {
        name: '외부 온도',
        types: ['평균'],
        unit: ['℃'],
        keys: ['extTempVal'],
        graphKeys: ['extTempVal'],
        visible: true,
        yAxis: 0
    },
    {
        name: '내부 습도',
        types: ['평균'],
        unit: ['%'],
        keys: ['hmdtVal'],
        graphKeys: ['hmdtVal'],
        visible: true,
        yAxis: 0
    },
    {
        name: '누적 일사량',
        types: ['평균'],
        unit: ['j/㎠'],
        keys: ['accmltSolaVal'],
        graphKeys: ['accmltSolaVal'],
        visible: true,
        yAxis: 3
    },
    {
        name: 'CO₂ 농도',
        types: ['평균'],
        unit: ['ppm'],
        keys: ['co2Val'],
        graphKeys: ['co2Val'],
        visible: true,
        yAxis: 2
    },
    /* 추후 사용
    {
        name: '급액량',
        types: ['급액량'],
        unit: ['cc'],
        keys: ['wtrsplyAmt'],
        graphKeys: ['wtrsplyAmt'],
        visible: false,
        yAxis: 3
    },
    */
    {
        name: '생장 길이',
        types: ['생장 길이'],
        unit: ['cm'],
        keys: ['1'],
        graphKeys: ['1'],
        visible: true,
        yAxis: 1
    },
    {
        name: '화방 높이',
        types: ['화방 높이'],
        unit: ['cm'],
        keys: ['4'],
        graphKeys: ['4'],
        visible: true,
        yAxis: 1
    },
    {
        name: '줄기 직경',
        types: ['줄기 직경'],
        unit: ['mm'],
        keys: ['2'],
        graphKeys: ['2'],
        visible: false,
        yAxis: 1
    },
    {
        name: '엽장',
        types: ['엽장'],
        unit: ['cm'],
        keys: ['8'],
        graphKeys: ['8'],
        visible: false,
        yAxis: 1
    },
    {
        name: '엽폭',
        types: ['엽폭'],
        unit: ['cm'],
        keys: ['9'],
        graphKeys: ['9'],
        visible: false,
        yAxis: 1
    },
    {
        name: '엽수',
        types: ['엽수'],
        unit: ['개'],
        keys: ['10'],
        graphKeys: ['10'],
        visible: false,
        yAxis: 1
    },
    {
        name: '수확량',
        types: ['수확량'],
        unit: ['kg'],
        keys: ['14'],
        graphKeys: ['14'],
        visible: false,
        yAxis: 3
    }
];