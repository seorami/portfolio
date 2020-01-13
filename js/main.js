// main.js

console.log('a')

//header scroll
$(function () {
    var header = $('header'); //헤더를 변수에 넣기
    var page = $('.page-start'); //색상이 변할 부분
    var pageOffsetTop = page.offset().top; //색상 변할 부분의 top값 구하기
    $(window).resize(function () { //반응형을 대비하여 리사이즈시 top값을 다시 계산
      pageOffsetTop = page.offset().top;
    });

    $(window).on('scroll', function () {
      if ($(window).scrollTop() >= pageOffsetTop) { // 스크롤이 page보다 밑에 내려가면
        header.addClass('down'); //클래스 추가
      } else { // 스크롤 올릴 때
        header.removeClass('down'); //클래스 제거
      }
    });
  });

//scroll
    $(function () {
      // 페이지 스크롤 효과
      $('#main_gnb a, #up a').on('click', function () {
        // 이동한 내부 링크의 위치값(hash)
        var target = $(this.hash);
        console.log(target);
        $('html, body').animate({
          scrollTop: target.offset().top
        });
        return false; // 앵커태그 무효화
      });

    });

//그래프
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        // console.log(scroll);
        if (scroll >= 800) {
          //console.log('a');
          $(".graph").attr("class", "fill");
        } else {
          //console.log('a');
          $(".graph").removeClass("fill");
        }
      });

//원형그래프
        function draw(max, classname, colorname) {
          $('.pie-chart1').removeClass('active');
          var i = 1;
          var func1 = setInterval(function () {
            if (i < max) {
              color1(i, classname, colorname);
              i++;
            } else {
              clearInterval(func1);
            }
          }, 10);
        }

        function color1(i, classname, colorname) {
          $(classname).css({
            "background": "conic-gradient(" + colorname + " 0% " + i + "%, #ffffff " + i + "% 100%)"
          });
        }

        function replay() {
          draw(80, '.pie-chart1', '#ccc');
        }

        $(window).scroll(function () {
          var scroll = $(window).scrollTop();
          console.log(scroll);

          if (scroll > 1400) {
            $('.pie-chart1').addClass('active');
           
          }

          if (scroll > 1400 && $('.pie-chart1').hasClass('active')) {
            draw(110, '.pie-chart1', '#FDD65B');
            draw(50, '.pie-chart2', '#FDD65B');
            draw(45, '.pie-chart3', '#FDD65B');
            draw(65, '.pie-chart4', '#FDD65B');

          } 
          else {
            // console.log('a')
          }
        });