// main.js

console.log("a");

//header scroll
$(function() {
  var header = $("header"); //헤더를 변수에 넣기
  var page = $(".page-start"); //색상이 변할 부분
  var pageOffsetTop = page.offset().top; //색상 변할 부분의 top값 구하기
  $(window).resize(function() {
    //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = page.offset().top;
  });

  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= pageOffsetTop) {
      // 스크롤이 page보다 밑에 내려가면
      header.addClass("down"); //클래스 추가
    } else {
      // 스크롤 올릴 때
      header.removeClass("down"); //클래스 제거
    }
  });
});

//scroll
$(function() {
  // 페이지 스크롤 효과
  $("#main_gnb a, .up a").on("click", function() {
    // 이동한 내부 링크의 위치값(hash)
    var target = $(this.hash);
    console.log(target);
    $("html, body").animate({
      scrollTop: target.offset().top
    });
    return false; // 앵커태그 무효화
  });
});

// 그래프
var draw_play_state = false;  // 그래프 재생 상태
var draw_replay = true;  // 그래프 반복 상태
function draw(max, classname, colorname) {
  var i = 1;
  var func1 = setInterval(function() {
    if (i < max) {
      draw_play_state = true; // 재생중인 상태
      color1(i, classname, colorname);
      i++;
    } else {
      clearInterval(func1);
      draw_play_state = false; // 재생 완료를 알리는 상태
      draw_replay = false;  // 한번 재생 후 더이상 재생하지 않는 상태
    }
  }, 10);
}

function color1(i, classname, colorname) {
  $(classname).css({
    background:
      "conic-gradient(" + colorname + " 0% " + i + "%, #ffffff " + i + "% 100%)"
  });
}

function replay() {
  draw(80, ".pie-chart1", "#ccc");
}

// 스크롤시 그래프 재생
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  console.log(scroll);

  // 그래프
  if (scroll >= 800) {
    $(".graph").attr("class", "fill");
  } else {
    $(".graph").removeClass("fill");
  }

  // 원형 그래프
  var pub_top = $('#publishing').offset().top;
  console.log('pub_top= ', pub_top)
  // 그래프가 한번만 재생하는 조건문(상태 변수 참조)
  if (scroll >= pub_top && draw_play_state == false && draw_replay) {
    draw(110, ".pie-chart1", "#FDD65B");
    draw(50, ".pie-chart2", "#FDD65B");
    draw(45, ".pie-chart3", "#FDD65B");
    draw(65, ".pie-chart4", "#FDD65B");
  } else {
    // console.log('a')
  }


});
