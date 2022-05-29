const next = document.querySelector('#right-arrow');
const prev = document.querySelector('#left-arrow');
const frame = document.querySelector('.slider__frame');
const slides = document.querySelectorAll('slider__slide');


let currentPosition = 0;


const moveToRight = () => {
    currentPosition++
    frame.style.transform = "translateX(-100%)"
}
const moveToLeft = () => {
    currentPosition--
    frame.style.transform = "translateX(0)"
}


next.addEventListener('click', moveToRight);
prev.addEventListener('click', moveToLeft);