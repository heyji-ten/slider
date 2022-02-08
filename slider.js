var slider= document.querySelector('.slider-list');
var slide = document.querySelectorAll('.slider-content');
var currentIdx = 0;
var slideCount = slide.length;
var prevBtn = document.querySelector('.prevBtn');
var nextBtn = document.querySelector('.nextBtn');
var slideWidth = 1000;

// slide 갯수에 따라 ul width 값 구하기
slider.style.width = slideWidth * slideCount + 'px';

// 슬라이드 이동
function moveSlide(num) {
    slider.style.left = -num * slideWidth + 'px';
    currentIdx = num;
}

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