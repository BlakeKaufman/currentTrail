"use strict";

// Main selector
const formSelector = document.querySelector(".tilecontainer");
let tiles = document.querySelectorAll(".tile");

// all forms
const backgroundForm = document.querySelector(".backgroundForm");
const internshipForm = document.querySelector(".internshipForm");
const recuitmentForm = document.querySelector(".recruitmentForm");
const experienceForm = document.querySelector(".experienceForm");
// intternship form selection
const internshipFormSelection = document.querySelector(".controls");
// form array
const formArray = [backgroundForm, internshipForm];
const allForm = [
  backgroundForm,
  internshipForm,
  recuitmentForm,
  experienceForm,
];
// form counting
let form = 0;
let prevForm = 0;
// addinng back and forward functinoality
const backgroundFormDiv = document.querySelector(".backgroundFormSelect");
const internshipFormDiv = document.querySelector(".internshipFormSelect");
const forwardBack = document.querySelector(".navBtnForForm");

const backBtn = document.querySelector(".back");
const continueBtn = document.querySelector(".continue");
const path = {
  0: backgroundForm,
  1: recuitmentForm,
  2: experienceForm,
};

const formArrayContinue = [backgroundForm, recuitmentForm, experienceForm];

// //////////////////////////////////////////////////
// functions

function reset() {
  removeFormatting("mov");
  removeFormatting("changeDisplay");
  [...internshipFormSelection.children].forEach((element) => {
    element.classList.remove("activeInternForm");
  });
  internshipFormSelection.children[0].classList.add("activeInternForm");
  backBtn.children[0].textContent = "Home";
  continueBtn.children[0].textContent = "Continue";
}

function removeFormatting(type) {
  if (type === "mov") {
    allForm.forEach((element) => {
      element.style.display = "none";
    });
  } else {
    tiles = document.querySelectorAll(".tile");
    tiles.forEach((element) => {
      element.classList.remove("activeBack");
      element.children[0].classList.remove("activeText");
      element.children[1].classList.remove("activeText");
    });
  }
}
function movement() {
  removeFormatting("mov");
  if (form == 0) {
    path[form].style.display = "block";
    path[prevForm].style.display = "none";
    internshipForm.style.display = "none";
    backBtn.children[0].textContent = "Home";
  } else if (form == 1 || form == 2) {
    internshipForm.style.display = "block";
    backgroundForm.style.display = "none";
    path[prevForm].style.display = "none";
    path[form].style.display = "block";
  }
  if (form == 1) {
    backBtn.children[0].textContent = "Back";
    continueBtn.children[0].textContent = "Continue";
  }
  if (form == 2) {
    continueBtn.children[0].textContent = "Submit";
  }
  if (form == 0 && prevForm == 0) {
    path[form].style.display = "block";
  }
}

function changeDisplay(e) {
  removeFormatting("changeDis");
  if (form == 0) {
    backgroundFormDiv.classList.add("activeBack");
    backgroundFormDiv.children[0].classList.add("activeText");
    backgroundFormDiv.children[1].classList.add("activeText");
  } else {
    internshipFormDiv.classList.add("activeBack");
    internshipFormDiv.children[0].classList.add("activeText");
    internshipFormDiv.children[1].classList.add("activeText");

    [...internshipFormSelection.children].forEach((element) => {
      element.classList.remove("activeInternForm");
    });

    if (form == 1) {
      path[1].parentElement.children[0].children[0].classList.add(
        "activeInternForm"
      );
      path[1].parentElement.children[0].children[1].classList.remove(
        "activeInternForm"
      );
      //e   e.target.parentElement.classList.add("activeInternForm");
    } else if (form == 2) {
      path[1].parentElement.children[0].children[1].classList.add(
        "activeInternForm"
      );
      path[1].parentElement.children[0].children[0].classList.remove(
        "activeInternForm"
      );
    }
  }
}

// // adding abiilty to switch between form selection
formSelector.addEventListener("click", function (e) {
  if (!e.target.classList.contains("tile")) return;
  if (e.target.classList.contains("activeBack")) return;

  if (e.target.classList.contains("backgroundFormSelect")) {
    prevForm = Number(e.target.classList[2]);
    form = 0;
    reset();
    movement("mov");
  } else {
    prevForm = Number(e.target.classList[2]);
    form = 1;
    movement("mov");
  }
  removeFormatting("changeDis");
  e.target.classList.add("activeBack");
  e.target.children[0].classList.add("activeText");
  e.target.children[1].classList.add("activeText");
});
// // adding the ability to switch between forms in intership selectoin
internshipFormSelection.addEventListener("click", function (e) {
  if (!e.target.classList.contains("title")) return;
  [...internshipFormSelection.children].forEach((element) => {
    element.classList.remove("activeInternForm");
  });
  e.target.parentElement.classList.add("activeInternForm");
  if (e.target.parentElement.classList.contains("recruitment")) {
    prevForm = Number(
      e.target.parentElement.parentElement.parentElement.children[1]
        .classList[1]
    );
    form = 1;
    movement("mov");
  } else {
    prevForm = Number(
      e.target.parentElement.parentElement.parentElement.children[1]
        .classList[1]
    );
    form = 2;
    movement("mov");
  }
});

forwardBack.addEventListener("click", function (e) {
  if (!e.target.classList.contains("container")) return;
  if (e.target.classList.contains("continue")) {
    formArrayContinue.forEach((element) => {
      if (element.style.display == "block") {
        prevForm = Number(element.classList[1]);
        form = prevForm + 1;
        if (form > 2) {
          form = 2;
        }
      }
    });
    if (e.target.textContent === "Submit") {
      window.open("./thankYou.html", "_self");
    }
    movement();
    changeDisplay(e);
  } else {
    formArrayContinue.forEach((element) => {
      if (element.style.display == "block") {
        prevForm = Number(element.classList[1]);
        form = prevForm - 1;
        if (form <= 0) {
          form = 0;
        }
      }
    });
    if (e.target.textContent === "Home") {
      window.open("./index.html", "_self");
    }
    movement();
    changeDisplay(e);
  }
});
