"use strict";
const quesionsCointainer = document.querySelector(".allQuesions");
const quesions = document.querySelectorAll(".quesionContainer");
const faqSection = document.querySelector(".faq");

let prev;
// only have one show up at a time
quesionsCointainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("quesion")) return;
  quesions.forEach((quesion) => {
    quesion.children[0].children[1].style.display = "none";
    quesion.children[1].src = "./assets/images/chevron-right.svg";
  });
  // if (prev === e.target.parentElement.children[1]) {
  //   e.target.parentElement.children[1].style.display = "none";
  //   prev = undefined;
  //   return;
  // }
  // prev = e.target.parentElement.children[1];

  console.log(e.target.parentElement.children[1].style.display);
  e.target.parentElement.children[1].style.display = "block";
  e.target.parentElement.parentElement.children[1].src =
    "./assets/images/chevron-down.svg";
  console.log(e.target.parentElement.children[1].style.display);
});

// quesionsCointainer.addEventListener("click", function (e) {
//   if (!e.target.classList.contains("q")) return;
//   if (e.target.parentElement.children[1].style.display == "block") {
//     e.target.parentElement.children[1].style.display = "none";
//     e.target.parentElement.parentElement.children[1].src =
//       "./assets/images/chevron-right.svg";
//   } else {
//     e.target.parentElement.children[1].style.display = "block";
//     e.target.parentElement.parentElement.children[1].src =
//       "./assets/images/chevron-down.svg";
//   }
// });

faqSection.addEventListener("click", function (e) {
  //   e.stopPropagation();
  if (!e.target.classList.contains("faq")) return;
  quesions.forEach((quesion) => {
    quesion.children[0].children[1].style.display = "none";
    quesion.children[1].src = "./assets/images/chevron-right.svg";
  });
});
