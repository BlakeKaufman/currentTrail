"use strict";

const InternContainer = document.querySelector(".internshipContainer");

const addInternBtn = document.querySelector(".addAnother");
let count = 2;
addInternBtn.addEventListener("click", function () {
  const html = `
            <div class="tile internshipFormSelect 1 ${count}">
              <span class="header">Prior Internship #${count}</span>
              <span class="desctiption">Tell us about your experience</div>
            </div>
          `;
  InternContainer.insertAdjacentHTML("beforeend", html);
  count++;
});
