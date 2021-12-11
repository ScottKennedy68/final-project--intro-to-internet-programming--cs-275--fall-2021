let slideShow = document.querySelector(`.slide-show`);
let leftArrow = document.getElementById(`left-arrow`);
let rightArrow = document.getElementById(`right-arrow`);
let currentSlideIndex = 0;
let slideWidth = 410;

function goToPreviousSlide() {
    currentSlideIndex--;
    slideShow.style.transform = `translateX(${-slideWidth * currentSlideIndex}px)`;
}

function goToNextSlide() {
    currentSlideIndex++;
    slideShow.style.transform = `translateX(${-slideWidth * currentSlideIndex}px)`;
}


leftArrow.addEventListener(`click`, goToPreviousSlide, false);
rightArrow.addEventListener(`click`, goToNextSlide, false);
document.addEventListener(`keydown`, (key)=>{
    //Key codes found on
    //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
    if(key.keyCode === 37)  //Checks for left arrow key
        goToPreviousSlide();
    else if(key.keyCode === 39) //Checks for right arrow key
        goToNextSlide();
});
