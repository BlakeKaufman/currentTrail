"use strict";
const scrollBTN = document.querySelector(".scrollBtn");
const processContainer = document.querySelector(".Process");

scrollBTN.addEventListener("click", function (e) {
  window.scrollTo({
    left: processContainer.getBoundingClientRect().left + window.pageXOffset,
    top: processContainer.getBoundingClientRect().top + window.pageYOffset - 90,
    behavior: "smooth",
  });
});
