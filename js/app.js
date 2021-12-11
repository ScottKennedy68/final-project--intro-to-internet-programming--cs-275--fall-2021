let slideShow = document.querySelector(`.slide-show`);
let leftArrow = document.getElementById(`left-arrow`);
let rightArrow = document.getElementById(`right-arrow`);
let currentSlideIndex = 0;
let slideWidth = 410;

function goToPreviousSlide() {
    currentSlideIndex--;
    slideShow.style.transform = `translateX(${-slideWidth * currentSlideIndex}px)`;
}

leftArrow.addEventListener(`click`, goToPreviousSlide, false);

rightArrow.addEventListener(`click`, ()=>{
    currentSlideIndex++;
    slideShow.style.transform = `translateX(${-slideWidth * currentSlideIndex}px)`;
});
