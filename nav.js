"use strict";

// navbar
const centerNav = document.querySelector(".center");
const dropdown = document.querySelector(".dropdown");
centerNav.addEventListener("click", function (e) {
  if (!e.target.classList.contains("navlink")) return;
  [...centerNav.children].forEach((element) => {
    element.children[0].classList.remove("activeA");
    element.classList.remove("activeLi");
  });
  e.target.classList.add("activeA");
  e.target.parentElement.classList.add("activeLi");
});

// adding dropdown for nav bar
const hamb = document.querySelector(".navBardDropbtn");
const menu = document.querySelector(".dropdown");
const menuList = document.querySelector(".dropdownList");

let drop = true;

hamb.addEventListener("click", function () {
  if (drop) {
    menu.style.display = "block";
    menuList.style.display = "flex";
    menu.style.animation = "dropNav 1.5s";
  } else {
    menu.style.animation = "raiseNav 1.5s";
    setTimeout(function () {
      menuList.style.display = "none";
    }, 200);
    setTimeout(function () {
      menu.style.display = "none";
    }, 1500);
  }
  drop = !drop;
});

// adding scrollable for nav
centerNav.addEventListener("click", function (e) {
  e.target.classList.contains("scroll") ? e.preventDefault() : null;
  if (!e.target.classList.contains("scroll")) return;
  const target = document.querySelector(e.target.attributes.href.nodeValue);

  window.scrollTo({
    left: target.getBoundingClientRect().left + window.pageXOffset,
    top: target.getBoundingClientRect().top + window.pageYOffset - 90,
    behavior: "smooth",
  });
});
