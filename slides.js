"use strict";

const slides = document.querySelectorAll(".slide");
const dotContainer = document.querySelector(".dots");

let currentSlide = 1;
const maxSlide = slides.length;

function changeSlide() {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[currentSlide - 1].style.display = "block";
}

changeSlide();

const slideshowInterval = setInterval(function () {
  if (currentSlide++ < maxSlide) {
  } else {
    currentSlide = 1;
  }
  changeSlide();
}, 5000);
