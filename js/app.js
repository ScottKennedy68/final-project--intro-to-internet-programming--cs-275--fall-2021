let slide = document.querySelector(`.slide`);
let rightArrow = document.getElementById(`right-arrow`);
let currentSlideIndex = 1;

rightArrow.addEventListener(`click`, ()=>{
    currentSlideIndex++;
    slide.style.transform = `translateX(${-210 * currentSlideIndex}px)`;
});
