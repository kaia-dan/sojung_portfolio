//스크립트 위로 튕기는것 (a태그 눌렀을때 위로 튕기는거 막아줌)
$(document).on('click', 'a[href="#"]', function(e){
  e.preventDefault();
});


/* 햄버거메뉴오픈 */
$(function(){
  $(".header_inner .hamberger_open a").on("click", function(){
    $(".hamberger_open .sub_menuWrap").addClass("on");
    $(".header_inner .hamberger_open .close").addClass("on");
    $(".header_inner .logo a img:nth-child(3)").css({"opacity":"1", "z-index":"9999"});
    // $("body").fadeIn().css("overflow","hidden");
  });
  $(".header_inner .hamberger_open .close").on("click", function(){
    $(".hamberger_open .sub_menuWrap").removeClass("on");
    $(".header_inner .hamberger_open .close").removeClass("on");
    $(".header_inner .logo a img:nth-child(3)").css({"opacity":"0", "z-index":"-1"});
    // $("body").fadeIn().css("overflow","unset");
  });
  $(".hamberger_open .sub_menuWrap .sub_menu li:nth-child(5) > a").on("click", function(){
    $(".hamberger_open .sub_menuWrap").removeClass("on");
    $(".header_inner .hamberger_open .close").removeClass("on");
    $(".header_inner .logo a img:nth-child(3)").css({"opacity":"0", "z-index":"-1"});
  });
});

//scroll animation
$(function(){
  $('.animate').scrolla({  //$('.등록할클래스명')
      moblie : true,  //모바일버전시 활성화
      once: false //스크롤시 딱 한번만 하고 싶을 때 true, 반복하고 싶을 때 false
  });
});

// 마우스커서바꾸기
const cursor = document.querySelector("#cursor");

let mouse = { x: -100, y: -100 }
let pos = { x: 0, y: 0 }
const speed = 0.3;

const updateCoordinates = (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

window.addEventListener("mousemove", updateCoordinates);

const updatePosition = () => {
  pos.x += (mouse.x - pos.x) * speed;
  pos.y += (mouse.y - pos.y) * speed;
  cursor.style.transform =
    "translate3d(" + pos.x + "px ," + pos.y + "px, 0)"
}

const loop = () => {
  updatePosition();
  requestAnimationFrame(loop);
};

requestAnimationFrame(loop)

const cursorModifiers = document.querySelectorAll("[cursor-class]");

cursorModifiers.forEach((cursorModifier) => {
  cursorModifier.addEventListener("mouseenter", function () {
    let attribute = this.getAttribute("cursor-class");
    cursor.classList.add(attribute);
  });
  
  cursorModifier.addEventListener("mouseleave", function () {
    let attribute = this.getAttribute("cursor-class");
    cursor.classList.remove(attribute);
  });
});


