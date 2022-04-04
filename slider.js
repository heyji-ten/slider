var sliderWrap = document.querySelector('#slider');
var slider= document.querySelector('.slider-list');
var slide = document.querySelectorAll('.slider-content');
var currentIdx = 0;
var slideCount = slide.length;
var prevBtn = document.querySelector('.prevBtn');
var nextBtn = document.querySelector('.nextBtn');
var slideWidth = 1000;
var autoSlider = undefined;
var pager = document.querySelector('.pager');
var pagerHTML = '';

// slide 갯수에 따라 ul width 값 구하기
slider.style.width = slideWidth * slideCount + 'px';

// slide 갯수에 따라 pagerBtn 생성
for(var a = 0; a < slideCount; a++) {
    pagerHTML += '<span>' + (a+1) + '</span>';
    pager.innerHTML = pagerHTML;
}
var pagerBtn = document.querySelectorAll('.pager span');

// 슬라이드 이동
function moveSlide(num) {
    slider.style.left = -num * slideWidth + 'px';
    currentIdx = num;

    // 클릭된 요소에만 .active 추가
    for(var y = 0; y < pagerBtn.length; y++){
        pagerBtn[y].classList.remove('active');
    }
    pagerBtn[num].classList.add('active');
}

// 처음부터 pagerBtn에 active 해두기
moveSlide(0);

nextBtn.addEventListener('click', ()=>{
    if(currentIdx < slideCount - 1){
        moveSlide(currentIdx + 1);
    } else {
        moveSlide(0);
    }
});

prevBtn.addEventListener('click', ()=>{
    if(currentIdx > 0){
        moveSlide(currentIdx - 1);
    } else {
        moveSlide(slideCount - 1);
    }
});

// 자동 슬라이드
function startAutoSlider(){
    autoSlider = setInterval(()=>{
        var nextIdx = (currentIdx + 1) % slideCount;
        moveSlide(nextIdx);
    },4000);
}

startAutoSlider();

// 자동 슬라이드 정지
function stopAutoSlide(){
    clearInterval(autoSlider);
}

//마우스 올리면 자동 슬라이드 정지
sliderWrap.addEventListener('mouseenter',()=>{
    stopAutoSlide();
});

//마우스 나가면 자동 슬라이드 시작
sliderWrap.addEventListener('mouseleave',()=>{
    startAutoSlider();
});

// pager로 슬라이드 이동하기
for (var x = 0; x < pagerBtn.length; x++){
    pagerBtn[x].addEventListener('click',(e)=>{
        var pagerNum = e.target.innerText - 1;
        moveSlide(pagerNum);
    });
}