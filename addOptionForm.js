"use strict";
// variables
const addOption = document.querySelectorAll(".add");

let alrInput = document.querySelectorAll(".option");

const optionsContainer = document.querySelectorAll(".options");
/////////////////////////////////////////////////
// functions
function resetOptions() {
  optionsContainer.forEach((element) => {
    element.innerHTML = "";
  });
}
function retreiveAdds() {
  alrInput = document.querySelectorAll(".option");
  alrInput.forEach((element) => {
    element.addEventListener("click", function (e) {
      element.remove();
    });
  });
}
// //////////////////////////////////////////////
resetOptions();
/////////////////////////////////////////////////
// Event listners
addOption.forEach((element) => {
  element.addEventListener("click", function (e) {
    let selectedAddOption = document.querySelector(
      `.${e.target.parentElement.children[1].classList[1]}`
    );

    let selectedText = e.target.parentElement.parentElement.children[0];

    if (selectedAddOption.children.length > 5) return;
    const html = `
            <div class="option">
              <span class="selectedOption">${selectedText.value}</span>
              <span class="remove">X</div>
            </div>
          `;

    selectedAddOption.insertAdjacentHTML("afterbegin", html);

    selectedText.value = "";
    retreiveAdds();
  });
});
