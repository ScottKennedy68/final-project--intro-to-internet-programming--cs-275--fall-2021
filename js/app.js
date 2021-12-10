let slide = document.querySelector(`.slide`);
let leftArrow = document.getElementById(`left-arrow`);
let rightArrow = document.getElementById(`right-arrow`);
let currentSlideIndex = 0;
let slideWidth = 210;

leftArrow.addEventListener(`click`, ()=>{
    currentSlideIndex--;
    slide.style.transform = `translateX(${-slideWidth * currentSlideIndex}px)`;
});

rightArrow.addEventListener(`click`, ()=>{
    currentSlideIndex++;
    slide.style.transform = `translateX(${-slideWidth * currentSlideIndex}px)`;
});
