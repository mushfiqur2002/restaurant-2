// ---> nav Toggle menu close bar
const nav = document.querySelector('nav');
const menuBar = document.querySelector('.menu_bar svg');
const closeBar = document.querySelector('.close_bar svg');
menuBar.addEventListener('click', function () {
    nav.classList.toggle('active');
})
closeBar.addEventListener('click', function () {
    nav.classList.toggle('active');
})

// ---> slide Toggle up down bar
const slider = document.querySelector('.image');
const slides = document.querySelectorAll('.slide');
const upBar = document.querySelector('.upbtn');
const downBar = document.querySelector('.downbtn');

console.log(slides); // Make sure the slides are correctly logged
let imageInd = 0;
let slideInd = 0;

upBar.addEventListener('click', function () {
    imageInd++;
    slider.style.transform = `rotate(${imageInd * 90}deg)`;

    slideInd++;
    if (slideInd >= slides.length - 1) {
        slideInd = 0;
    }
});

downBar.addEventListener('click', function () {
    imageInd--;
    slider.style.transform = `rotate(${imageInd * 90}deg)`;

    slideInd--;
    if (slideInd < 0) {
        slideInd = slides.length - 1;
    }
});
