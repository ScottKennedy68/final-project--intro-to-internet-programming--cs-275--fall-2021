let slideShow = document.querySelector(`.slide-show`);
let slides = document.querySelectorAll(`.slide`);
let leftArrow = document.getElementById(`left-arrow`);
let rightArrow = document.getElementById(`right-arrow`);
let currentSlideIndex = 0;
let slideWidth = 446;
let position;

function toggleArrows() {
    if(0 === currentSlideIndex)
        rightArrow.classList.add(`off`);
    else if((slides.length - 1) === currentSlideIndex)
        leftArrow.classList.add(`off`);
    else {
        leftArrow.classList.remove(`off`);
        rightArrow.classList.remove(`off`);
    }
}

toggleArrows();

function goToPreviousSlide() {
    if(0 !== currentSlideIndex) {
        currentSlideIndex--;
        position = -slideWidth * currentSlideIndex;
        slideShow.style.transform = `translateX(${position}px)`;
        toggleArrows();
    }
}

function goToNextSlide() {
    if((slides.length - 1) !== currentSlideIndex) {
        currentSlideIndex++;
        position = -slideWidth * currentSlideIndex;
        slideShow.style.transform = `translateX(${position}px)`;
        toggleArrows();
    }
}

leftArrow.addEventListener(`click`, goToNextSlide, false);
rightArrow.addEventListener(`click`, goToPreviousSlide, false);
document.addEventListener(`keydown`, (key)=>{
    //Key codes found on
    //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
    if(37 === key.keyCode)  //Checks for left arrow key
        goToNextSlide();
    else if(39 === key.keyCode) //Checks for right arrow key
        goToPreviousSlide();
});
