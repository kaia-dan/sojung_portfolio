// 헤더컬러변경 외부변수
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

    // 헤더로고
    $(".header_inner .logo a img").removeClass("on");
    $(".header_inner .logo a img.basic").removeClass("on");
    // 헤더햄버거
    $(".header_inner .hamberger_open a img").removeClass("on");
    $(".header_inner .hamberger_open a img.basic").removeClass("on");
    // 헤더폰트컬러
    $(".header_inner .hamberger_open .menu_category").removeClass("on");

    if(scrollTop > color_contact){
      // 헤더로고
      $(".header_inner .logo a img").addClass("on");
      $(".header_inner .logo a img.basic").addClass("on");
      // 헤더햄버거
      $(".header_inner .hamberger_open a img").addClass("on");
      $(".header_inner .hamberger_open a img.basic").addClass("on");
      // 헤더폰트컬러
      $(".header_inner .hamberger_open .menu_category").addClass("on");
    };
  });
}).resize(); 