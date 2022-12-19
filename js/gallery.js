 //스크립트 위로 튕기는것 (a태그 눌렀을때 위로 튕기는거 막아줌)
$(document).on('click', 'a[href="#"]', function(e){
  e.preventDefault();
});

$(function() {  //$(function() {});  jquery를 호출하겠다.
  $(".ncs_slide").slick({  //$("적용해줄 클래스명").slick- 선택한 클래스에 slick을 적용하겠다
      arrows: false, //화살표 사용안함
      dots: false, //닷츠
      autoplay: true, //자동재생
      infinite: true,
      autoplaySpeed: 2500, //재생시간
      pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
      pauseOnFocus:false, //포커스시 슬라이드 멈춤 해제
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      centerMode:true,
      responsive: [
        {
          breakpoint: 1229,
          settings: {
            slidesToShow: 2.5
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1.8
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1
          }
        }
      ]
  });

}); 


/* 탭메뉴 */
$(document).ready(function(){
  // 아트워크영역 탭메뉴
  $(".art_title li").on("click", function(){
    const num = $(".art_title li").index($(this));//click하는 인덱스
    $(".art_title li").removeClass("on"); //다음액션 전의 것들은 초기화
    $(".art_img li").removeClass("on"); //다음액션 전의 것들은 초기화
    $(".art_title li:eq(" + (num) + ")").addClass("on");
    $(".art_img li:eq(" + (num) + ")").addClass("on");
  });
});


/* 아트워크영역의 이미지 시간차로 변하게하기 */
// art
var artImage = document.getElementById("artImage");
var artImageArray = ["../img/art_01.jpg","../img/art_02.jpg","../img/art_03.jpeg","../img/art_04.jpeg","../img/art_05.png","../img/art_06.jpeg","../img/art_07.JPG","../img/art_08.JPG","../img/art_09.png","../img/art_10.jpg","../img/art_11.png"]
var artImageIndex = 0;

function artChangeImage(){
  artImage.setAttribute("src",artImageArray[artImageIndex]);
  artImageIndex++;
  if(artImageIndex >= artImageArray.length){
      artImageIndex=0;
  };
};
setInterval(drawChangeImage, 1200);

// draw
var drawImage = document.getElementById("drawImage");
var drawImageArray = ["../img/draw_01.jpg","../img/draw_02.jpg","../img/draw_03.jpg","../img/draw_04.jpg","../img/draw_05.jpg","../img/draw_06.jpg","../img/draw_07.jpg","../img/draw_08.png","../img/draw_09.png","../img/draw_10.jpg","../img/draw_11.jpg","../img/draw_12.jpg","../img/draw_13.jpg","../img/draw_14.jpg","../img/draw_15.jpg","../img/draw_16.JPG"]
var drawImageIndex = 0;

function drawChangeImage(){
  drawImage.setAttribute("src",drawImageArray[drawImageIndex]);
  drawImageIndex++;
  if(drawImageIndex >= drawImageArray.length){
      drawImageIndex=0;
  };
};
setInterval(artChangeImage, 1200);

// ill
var illImage = document.getElementById("illImage");
var illImageArray = ["../img/ill_01.png","../img/ill_03.png","../img/ill_04.png","../img/ill_05.png","../img/ill_06.png","../img/ill_07.png","../img/ill_08.png","../img/ill_09.png","../img/ill_10.jpg","../img/ill_11.png","../img/ill_12.png"]
var illImageIndex = 0;

function illChangeImage(){
  illImage.setAttribute("src",illImageArray[illImageIndex]);
  illImageIndex++;
  if(illImageIndex >= illImageArray.length){
      illImageIndex=0;
  };
};
setInterval(illChangeImage, 1200);


// 헤더컬러변경 외부변수
var color_art = $("section.contents_artwork").offset().top;
var color_codelist_w = $(".contents_codelist .code_list").offset().top;
var color_codelist_g = $(".contents_codelist .code_list.green").offset().top;
var color_contact = $("footer.contact_wrap").offset().top;

$(window).resize(function(){ 
  /* ====스크롤값을 불러오는 함수 시작==== */
  $(document).on("scroll resize", function(){
  // 리사이즈 끝나고 0.3초마다 리셋
    var delay = 300;
    var timer = null; 
    $(window).on('resize', function(){
      clearTimeout(timer);
      timer = setTimeout(function(){
      document.location.reload();
      }, delay);
    });
    
    //현재 위치를 기억하여 새로고침시 그자리를 유지하기
    history.scrollRestoration = "auto";
    
    // 스크롤탑값 변수
    var scrollTop = $(document).scrollTop();

    if(scrollTop >= color_art){
      // 헤더로고
      $(".header_inner .logo a img").addClass("on");
      $(".header_inner .logo a img.basic").addClass("on");
      // 헤더햄버거
      $(".header_inner .hamberger_open a img").addClass("on");
      $(".header_inner .hamberger_open a img.basic").addClass("on");
      // 헤더폰트컬러
      $(".header_inner .hamberger_open .menu_category").addClass("on");
    }else if(scrollTop < color_art){
      // 헤더로고
      $(".header_inner .logo a img").removeClass("on");
      $(".header_inner .logo a img.basic").removeClass("on");
      // 헤더햄버거
      $(".header_inner .hamberger_open a img").removeClass("on");
      $(".header_inner .hamberger_open a img.basic").removeClass("on");
      // 헤더폰트컬러
      $(".header_inner .hamberger_open .menu_category").removeClass("on");
    };
  });
}).resize(); 
