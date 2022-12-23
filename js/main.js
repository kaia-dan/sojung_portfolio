// 외부변수선언
var fixedNum_info = $("section.contents_introduce").offset().top;
var fixedNum_keyword = $("section.contents_keyword").offset().top;
var fixedNum_skills = $("section.contents_skills").offset().top;
var fixedNum_ncs = $("section.contents_ncs").offset().top;
var fixedNum_coding = $("section.contents_codelist").offset().top;
var fixedNum_artwork = $("section.contents_artwork").offset().top;
var fixedNum_study = $("section.contents_record").offset().top;
var fixedNum_hobby = $("section.contents_hobby").offset().top;
var fixedNum_thanks = $("section.thanks_sec").offset().top;
var fixedNum_contact = $("footer.contact_wrap").offset().top;


/* 반응형을 위한 윈도우사이즈 불러오기 */
$(window).resize(function(){ 

  /* ====스크롤값을 불러오는 함수 시작==== */
  $(document).on("scroll resize", function(){
    // 스크롤탑값 변수
    var scrollTop = $(document).scrollTop();

  // 리사이즈 끝나고 0.3초마다 리셋
    var delay = 300;
    var timer = null; 
    if (window.innerWidth > 500){
      $(window).on('resize', function(){
        clearTimeout(timer);
        timer = setTimeout(function(){
        document.location.reload();
        }, delay);
      });
    };

    //현재 위치를 기억하여 새로고침시 그자리를 유지하기
    history.scrollRestoration = "auto";


    // 함수선언
    visual();
    info();
    keyword();
    skills();
    coding();
    ncs();
    artwork();
    study();
    hobby();
    thanks();
    contact();

    // visual_my초기화
    $(".visual_my.contact").removeClass("on");

    //visual 스크롤시 영역변화
    function visual(){
      if(scrollTop > 0){
        // info텍스트변경
        $(".header_inner .logo .head_info").text("sjLIKE IT'");
      };
      if(scrollTop > fixedNum_info*0.15){
        $(".visual_my").addClass("on");
      }else{
        $(".visual_my").removeClass("on");
      }

      /* ====반응형==== */
      if (window.innerWidth < 1024){
        $(".visual_my").removeClass("on");
      };
    };
    
    // 나를소개하는영역
    function info(){
      if(scrollTop >= fixedNum_info){
        $("section.contents_introduce").addClass("on");
        // 마우스커서
        $(".cursor__inner").addClass("on");
        $(".overlay .cursor__inner").addClass("on");
        // 헤더로고
        $(".header_inner .logo a img").addClass("on");
        $(".header_inner .logo a img.basic").addClass("on");
        // 헤더햄버거
        $(".header_inner .hamberger_open a img").addClass("on");
        $(".header_inner .hamberger_open a img.basic").addClass("on");
        // 헤더폰트컬러
        $(".header_inner .logo .head_info").addClass("on");
        $(".header_inner .hamberger_open .menu_category").addClass("on");
        // info텍스트변경
        $(".header_inner .logo .head_info").text("안녕하세요 지금부터 저를 소개할게요 :)");
      }else if(scrollTop < fixedNum_info){
        $("section.contents_introduce").removeClass("on");
        // 마우스커서
        $(".cursor__inner").removeClass("on");
        $(".overlay .cursor__inner").removeClass("on");
        // 헤더로고
        $(".header_inner .logo a img").removeClass("on");
        $(".header_inner .logo a img.basic").removeClass("on");
        // 헤더햄버거
        $(".header_inner .hamberger_open a img").removeClass("on");
        $(".header_inner .hamberger_open a img.basic").removeClass("on");
        // 헤더폰트컬러
        $(".header_inner .logo .head_info").removeClass("on");
        $(".header_inner .hamberger_open .menu_category").removeClass("on");
      };

      if(scrollTop > fixedNum_info*1.3){
        $(".intro_box .intro_right .sc.first_sc").addClass("on");
        $(".second_wrap").addClass("on");
      }else{
        $(".intro_box .intro_right .sc.first_sc").removeClass("on");
        $(".second_wrap").removeClass("on");
      };

      /* ====반응형==== */
      // 모바일 500
      if (window.innerWidth <= 500){
        $("section.contents_introduce").removeClass("on");
        $(".intro_box .intro_right .sc.first_sc").removeClass("on");
        $(".second_wrap").removeClass("on");
      };
    };

    // 키워드영역
    function keyword(){
      if(scrollTop >= fixedNum_keyword){
        $("section.contents_keyword").addClass("on");
        // 마우스커서
        $(".cursor__inner").removeClass("on");
        $(".overlay .cursor__inner").removeClass("on");
        // 헤더로고
        $(".header_inner .logo a img").removeClass("on");
        $(".header_inner .logo a img.basic").removeClass("on");
        // 헤더햄버거
        $(".header_inner .hamberger_open a img").removeClass("on");
        $(".header_inner .hamberger_open a img.basic").removeClass("on");
        // 헤더폰트컬러
        $(".header_inner .logo .head_info").removeClass("on");
        $(".header_inner .hamberger_open .menu_category").removeClass("on");
        // info텍스트변경
        $(".header_inner .logo .head_info").text("저를 표현할 수 있는 키워드에요 :D");
      }else if(scrollTop < fixedNum_keyword){
        $("section.contents_keyword").removeClass("on");
      };

      if(scrollTop > fixedNum_keyword*1.16){
        $(".slideWrap").addClass("on");
      }else{
        $(".slideWrap").removeClass("on");
      };

      /* ====반응형==== */
      // 모바일 500
      if (window.innerWidth <= 500){
          $("section.contents_keyword").removeClass("on");
          $(".slideWrap").removeClass("on");
      };
    };

    // 스킬영역
    function skills(){
      if(scrollTop >= fixedNum_skills){
        $("section.contents_skills").addClass("on");
        $(".header_inner .logo .head_info").text("전 이런것들을 다룰 줄 알아요 :)");
        // 헤더햄버거
        $(".header_inner .hamberger_open a img").addClass("on");
        $(".header_inner .hamberger_open a img.basic").addClass("on");
      }else if(scrollTop < fixedNum_skills){
        $("section.contents_skills").removeClass("on");
      };

      /* ====반응형==== */
      // 다바이스 크기가 1023이하일때 
      if (window.innerWidth < 1024){

        if(scrollTop >= fixedNum_skills && scrollTop < fixedNum_coding){
          // 헤더햄버거
          $(".header_inner .hamberger_open a img").removeClass("on");
          $(".header_inner .hamberger_open a img.basic").removeClass("on");
        };
      };
      // 모바일 500
      if(window.innerWidth <= 500){
        $("section.contents_skills").removeClass("on");
      };
    };

    // 코딩리스트영역
    function coding(){
      if(scrollTop >= fixedNum_coding){
        // $("section.contents_codelist").addClass("on");
        $(".header_inner .logo .head_info").text("열심히 준비한 제 작업물들 이에요!");
        // 헤더햄버거
        $(".header_inner .hamberger_open a img").removeClass("on");
        $(".header_inner .hamberger_open a img.basic").removeClass("on");
      }else if(scrollTop < fixedNum_coding){
        $("section.contents_codelist").removeClass("on");
      };
    };

    // NCS영역
    function ncs(){
      // console.log(ncsHeight)
      if(scrollTop >= fixedNum_ncs){
        $("section.contents_ncs").addClass("on");
        // 마우스커서
        $(".cursor__inner").addClass("on");
        $(".overlay .cursor__inner").addClass("on");
        // 헤더로고
        $(".header_inner .logo a img").addClass("on");
        $(".header_inner .logo a img.basic").addClass("on");
        // 헤더햄버거
        $(".header_inner .hamberger_open a img").addClass("on");
        $(".header_inner .hamberger_open a img.basic").addClass("on");
        // 헤더폰트컬러
        $(".header_inner .logo .head_info").addClass("on");
        $(".header_inner .hamberger_open .menu_category").addClass("on");
        $(".header_inner .logo .head_info").text("NCS과정평가도 모두 이수 했어요");
      }else if(scrollTop < fixedNum_ncs){
        $("section.contents_ncs").removeClass("on");
      };

      /* ====반응형==== */
      // 모바일 500
      if (window.innerWidth <= 500){
        $("section.contents_ncs").removeClass("on");
      };
    };

    // 아트워크영역
    function artwork(){
      if(scrollTop >= fixedNum_artwork){
        $("section.contents_artwork").addClass("on");
        // 마우스커서
        $(".cursor__inner").removeClass("on");
        $(".overlay .cursor__inner").removeClass("on");
        // 헤더로고
        $(".header_inner .logo a img").removeClass("on");
        $(".header_inner .logo a img.basic").removeClass("on");
        // 헤더햄버거
        $(".header_inner .hamberger_open a img").removeClass("on");
        $(".header_inner .hamberger_open a img.basic").removeClass("on");
        // 헤더폰트컬러
        $(".header_inner .logo .head_info").removeClass("on");
        $(".header_inner .hamberger_open .menu_category").removeClass("on");
        $(".header_inner .logo .head_info").text("코딩뿐만 아니라 디자인과 미술도 잘한답니다:)");
      }else if(scrollTop < fixedNum_artwork){
        $("section.contents_artwork").removeClass("on");
      };

      /* ====반응형==== */
      // 모바일 500
      if (window.innerWidth <= 500){
        $("section.contents_artwork").removeClass("on");

      };
    };

    // 기록영역
    function study(){
      if(scrollTop >= fixedNum_study){
        $("section.contents_record .record_bg").addClass("on");
        // 마우스커서
        $(".cursor__inner").addClass("on");
        $(".overlay .cursor__inner").addClass("on");
        // 헤더로고
        $(".header_inner .logo a img").addClass("on");
        $(".header_inner .logo a img.basic").addClass("on");
        // 헤더햄버거
        $(".header_inner .hamberger_open a img").addClass("on");
        $(".header_inner .hamberger_open a img.basic").addClass("on");
        // 헤더폰트컬러
        $(".header_inner .logo .head_info").addClass("on");
        $(".header_inner .hamberger_open .menu_category").addClass("on");
        $(".header_inner .logo .head_info").text("공부한 내용들도 차곡_차곡- 기록중 이에요 :D");
      }else if(scrollTop < fixedNum_study){
        $("section.contents_record .record_bg").removeClass("on");
      };

      /* ====반응형==== */
      if (window.innerWidth < 767){
        $("section.contents_record .record_bg").removeClass("on");
      };
    };

    // 취미영역
    function hobby(){
      if(scrollTop >= fixedNum_hobby){
        $("section.contents_hobby .hobbyWrap").addClass("on");
        // 마우스커서
        $(".cursor__inner").removeClass("on");
        $(".overlay .cursor__inner").removeClass("on");
        // 헤더로고
        $(".header_inner .logo a img").removeClass("on");
        $(".header_inner .logo a img.basic").removeClass("on");
        // 헤더햄버거
        $(".header_inner .hamberger_open a img").removeClass("on");
        $(".header_inner .hamberger_open a img.basic").removeClass("on");
        // 헤더폰트컬러
        $(".header_inner .logo .head_info").removeClass("on");
        $(".header_inner .hamberger_open .menu_category").removeClass("on");
        $(".header_inner .logo .head_info").text("이런 취미들도 갖고 있어요!");
      }else if(scrollTop < fixedNum_hobby){
        $("section.contents_hobby .hobbyWrap").removeClass("on");
      };

      /* ====반응형==== */
      // 모바일 500
      if (window.innerWidth <= 500){
        $("section.contents_hobby .hobbyWrap").removeClass("on");

      };
    };

    // 감사영역
    function thanks(){
      if(scrollTop >= fixedNum_thanks){
        $(".header_inner .logo .head_info").text(" ");
      };
    };

    function contact(){
      if(scrollTop >= fixedNum_contact){
        $(".visual_my").addClass("on");
        // 헤더로고
        $(".header_inner .logo a img").addClass("on");
        $(".header_inner .logo a img.basic").addClass("on");
        // 헤더햄버거
        $(".header_inner .hamberger_open a img").addClass("on");
        $(".header_inner .hamberger_open a img.basic").addClass("on");
        // 헤더폰트컬러
        $(".header_inner .logo .head_info").addClass("on");
        $(".header_inner .hamberger_open .menu_category").addClass("on");
        // info텍스트변경
        $(".header_inner .logo .head_info").text("귀한 시간 내주셔서 감사합니다 :-)");
      };
    };
  });
}).resize(); 

/* 탭메뉴 */
$(document).ready(function(){
  // 스킬영역 탭메뉴
  $(".skill_name li").on("click", function(){
    const num = $(".skill_name li").index($(this));//click하는 인덱스
    $(".skill_name li").removeClass("on"); //다음액션 전의 것들은 초기화
    $(".skill_text li").removeClass("on"); //다음액션 전의 것들은 초기화
    $(".skill_name li:eq(" + (num) + ")").addClass("on");
    $(".skill_text li:eq(" + (num) + ")").addClass("on");
  });

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
var artImageArray = ["img/art_01.jpg","img/art_02.jpg","img/art_03.jpeg","img/art_04.jpeg","img/art_05.png","img/art_06.jpeg","img/art_07.JPG","img/art_08.JPG","img/art_09.png","img/art_10.jpg","img/art_11.png"]
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
var drawImageArray = ["img/draw_01.jpg","img/draw_02.jpg","img/draw_03.jpg","img/draw_04.jpg","img/draw_05.jpg","img/draw_06.jpg","img/draw_07.jpg","img/draw_08.png","img/draw_09.png","img/draw_10.jpg","img/draw_11.jpg","img/draw_12.jpg","img/draw_13.jpg","img/draw_14.jpg","img/draw_15.jpg","img/draw_16.JPG"]
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
var illImageArray = ["img/ill_01.png","img/ill_03.png","img/ill_04.png","img/ill_05.png","img/ill_06.png","img/ill_07.png","img/ill_08.png","img/ill_09.png","img/ill_10.jpg","img/ill_11.png","img/ill_12.png"]
var illImageIndex = 0;

function illChangeImage(){
  illImage.setAttribute("src",illImageArray[illImageIndex]);
  illImageIndex++;
  if(illImageIndex >= illImageArray.length){
      illImageIndex=0;
  };
};
setInterval(illChangeImage, 1200);

// 코딩리스트영역슬릭
// ncs영역슬릭
$(document).ready(function(){
  $(".ncs_list").slick({
    vertical: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,  
    pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
    pauseOnFocus:false, //포커스시 슬라이드 멈춤 해제
    autoplaySpeed: 1500,
    arrows: false,
    verticalSwiping: true
  });
});

// 기록영역슬릭
$(function() {
  $('.record_list').slick({
    vertical: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,  
    pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
    pauseOnFocus:false, //포커스시 슬라이드 멈춤 해제
    autoplaySpeed: 2000,
    arrows: false,
    verticalSwiping: true,
    mobileFirst: true,

    responsive: [
      {
        breakpoint: 500,
        settings: 'unslick'
      }
    ]
  });
});

// 마우스스크롤부드럽게
class Scrooth {
  constructor({element = window, strength=10, acceleration = 1.2,deceleration = 0.975}={}) {
    this.element = element;
    this.distance = strength;
    this.acceleration = acceleration;
    this.deceleration = deceleration;
    this.running = false;

    this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
    this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
    this.scroll = this.scroll.bind(this);
  }

  scrollHandler(e) {
    e.preventDefault();

    if (!this.running) {
      this.top = this.element.pageYOffset || this.element.scrollTop || 0;
      this.running = true;
      this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
      this.isDistanceAsc = true;
      this.scroll();
    } else {
      this.isDistanceAsc = false;
      this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
    }
  }

  scroll() {
    if (this.running) {
      this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
      Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
      Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;

      this.top += this.currentDistance;
      this.element.scrollTo(0, this.top);
      
      requestAnimationFrame(this.scroll);
    }
  }
}

const scroll = new Scrooth({
  element: window,
  strength: 21, // 스크롤 한번 할때 내려가는 길이(=속도)조절
  acceleration: 1.5,
  deceleration: 0.975,
});