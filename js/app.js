let slideShow = document.querySelector(`.slide-show`);
let leftArrow = document.getElementById(`left-arrow`);
let rightArrow = document.getElementById(`right-arrow`);
let currentSlideIndex = 0;
let slideWidth = 250;

leftArrow.addEventListener(`click`, ()=>{
    currentSlideIndex--;
    slideShow.style.transform = `translateX(${-slideWidth * currentSlideIndex}px)`;
});

rightArrow.addEventListener(`click`, ()=>{
    currentSlideIndex++;
    slideShow.style.transform = `translateX(${-slideWidth * currentSlideIndex}px)`;
});
