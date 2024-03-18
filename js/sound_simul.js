//정답사운드
var passSound = document.createElement("audio");
passSound.src = "/sound/fx/pass.mp3";
passSound.volume = 0.5;
passSound.autoPlay = false;
passSound.preLoad = true;
passSound.controls = false;

//오답사운드
var warningSound = document.createElement("audio");
warningSound.src = "/sound/fx/warning.mp3";
warningSound.volume = 0.5;
warningSound.autoPlay = false;
warningSound.preLoad = true;
warningSound.controls = false;


//1 타이틀
var sound01 = document.createElement("audio");
sound01.src = "/sound/fx/se01_auto.mp3";
sound01.volume = 0.5;
sound01.autoPlay = false;
sound01.preLoad = true;
sound01.controls = false;

//2 서브타이틀
var sound02 = document.createElement("audio");
sound02.src = "/sound/fx/se02_auto.mp3";
sound02.volume = 0.5;
sound02.autoPlay = false;
sound02.preLoad = true;
sound02.controls = false;


//3 파란색 내용박스
var sound03 = document.createElement("audio");
sound03.src = "/sound/fx/se03_auto.mp3";
sound03.volume = 0.5;
sound03.autoPlay = false;
sound03.preLoad = true;
sound03.controls = false;


//4 돌발퀴즈
var sound04 = document.createElement("audio");
sound04.src = "/sound/fx/se04_auto.mp3";
sound04.volume = 0.5;
sound04.autoPlay = false;
sound04.preLoad = true;
sound04.controls = false;


//5 돌발퀴즈 정답
var sound05 = document.createElement("audio");
sound05.src = "/sound/fx/se05_auto.mp3";
sound05.volume = 0.5;
sound05.autoPlay = false;
sound05.preLoad = true;
sound05.controls = false;


//6 다음을 클릭하세요.
var sound06 = document.createElement("audio");
sound06.src = "/sound/fx/se06_auto.mp3";
sound06.volume = 0.5;
sound06.autoPlay = false;
sound06.preLoad = true;
sound06.controls = false;


//7 강조부분 환기
var sound07 = document.createElement("audio");
sound07.src = "/sound/fx/se07_auto.mp3";
sound07.volume = 0.5;
sound07.autoPlay = false;
sound07.preLoad = true;
sound07.controls = false;


//8 모달 닫기버튼
var sound08 = document.createElement("audio");
sound08.src = "/sound/fx/se08_click.mp3";
sound08.volume = 0.5;
sound08.autoPlay = false;
sound08.preLoad = true;
sound08.controls = false;


//9 버튼클릭
var sound09 = document.createElement("audio");
sound09.src = "/sound/fx/se09_click.mp3";
sound09.volume = 0.5;
sound09.autoPlay = false;
sound09.preLoad = true;
sound09.controls = false;


//10 따라하기 &적용하기
var sound10 = document.createElement("audio");
sound10.src = "/sound/fx/se10_auto.mp3";
sound10.volume = 0.5;
sound10.autoPlay = false;
sound10.preLoad = true;
sound10.controls = false;

//11 번개소리
var sound11 = document.createElement("audio");
sound11.src = "/sound/fx/se11_thunder.mp3";
sound11.volume = 0.5;
sound11.autoPlay = false;
sound11.preLoad = true;
sound11.controls = false;
sound11.loop = true;

//12 기계음
var sound12 = document.createElement("audio");
sound12.src = "/sound/fx/se12_window.mp3";
sound12.volume = 0.5;
sound12.autoPlay = false;
sound12.preLoad = true;
sound12.controls = false;

//13 빗소리
var sound13 = document.createElement("audio");
sound13.src = "/sound/fx/se13_rain.mp3";
sound13.volume = 0.5;
sound13.autoPlay = false;
sound13.preLoad = true;
sound13.controls = false;
sound13.loop = true;

//14 새소리
var sound14 = document.createElement("audio");
sound14.src = "/sound/fx/set14_brid.mp3";
sound14.volume = 0.3;
sound14.autoPlay = false;
sound14.preLoad = true;
sound14.controls = false;
sound14.loop = true;