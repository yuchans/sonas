function openLayerPop(target) {
  target.preventdefault = false;
  var $body = $("body");
  var $this = $(target);
  var setZindex = parseInt($this.css("z-index")) + 10;
  $(".layerPopup.-active").css("z-index", 1000);
  $this.css("z-index", setZindex).addClass("-active");
  $body.addClass("-activeLayerPopup");
  $body.css('padding-right', getScrollWidth());
}

function closeLayerPop(e) {
  e.preventdefault = false;
  var $tar = $(e);
  var $body = $("body");
  $tar.removeClass("-active");
  if (!$body.find(".layerPopup").hasClass("-active")) {
    $body.removeClass("-activeLayerPopup");
    $body.css('padding-right', '0');
  }
}

function clear() {
  $("#success").addClass("-active");
}

function fail() {
  $("#fail").addClass("-active");
}

//드래그 이벤트
var $dragTar;
var $dragParent;

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  $dragTar = $(ev);
  $dragParent = $dragTar.parent();
};

function drop(ev) {
  var $this = $(ev);
  if ($this.find(".drag").size() > 0) {
    $dragParent.append($this.find(".drag").eq(0));
  }
  $(ev).append($dragTar);
}

//다음미션
function nextMission(nextTarget) {
  location.replace(nextTarget);
}

function clear2() {
  // 미션성공 회전 효과 캔버스
  (function () {
    $(".stage__bg").addClass("-active")
    setTimeout(function () {
      $.confetti.start();
      $.confetti.restart();
    }, 400);
    setTimeout(function () {
      $.confetti.stop();
    }, 2000);
  })();
}

