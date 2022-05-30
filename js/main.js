const arrows = document.querySelectorAll('.slider__navigation-button');
const frame = document.querySelector('.slider__frame');
const slides = document.querySelectorAll('.slider__slide');
let currentPosition = 0;


const moveTo = function () {


    if (this.classList.contains('right-arrow')) {
        if (currentPosition > (slides.length - 1) * -100 || currentPosition === 0) {
            currentPosition += -100;

            frame.style.transform = `translateX(${currentPosition}%)`
        }
    } else if (this.classList.contains('left-arrow')) {
        if (currentPosition < 0) {
            currentPosition += 100;
            frame.style.transform = `translateX(${currentPosition}%)`;
        }

    }

}
arrows.forEach(arrow => {
    arrow.addEventListener('click', moveTo)
});