"use strict";

// Const variables
const formEl = document.querySelector(".offer__signup-form");

const inputEls = [...document.querySelectorAll(".signup-form__input")];

const errorMsgEls = [
  ...document.querySelectorAll(".signup-form__error-message"),
];

const errorIconEls = [...document.querySelectorAll(".signup-form__error-icon")];

const buttonEl = document.querySelector(".signup-form__button");

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function changeStyle(errorMsgEl, errorIconEl, inputEl) {
  errorMsgEl.classList.remove("hidden");
  errorIconEl.classList.remove("hidden");
  inputEl.setAttribute("aria-invalid", "true");
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  for (let i = 0; i < inputEls.length; i++) {
    if (inputEls[i].value.trim() === "") {
      console.log(inputEls[i]);
      errorMsgEls[i].textContent = `${inputEls[i].name} cannot be empty`;
      changeStyle(errorMsgEls[i], errorIconEls[i], inputEls[i]);
    } else if (
      inputEls[i].type === "email" &&
      !validateEmail(inputEls[i].value)
    ) {
      errorMsgEls[i].textContent = "Looks like this is not an email";
      changeStyle(errorMsgEls[i], errorIconEls[i], inputEls[i]);
    } else {
      errorMsgEls[i].classList.add("hidden");
      errorIconEls[i].classList.add("hidden");
      inputEls[i].setAttribute("aria-invalid", "false");
    }
  }
  const allHaveHiddenClass = errorMsgEls.every((element) =>
    element.classList.contains("hidden")
  );
  console.log(allHaveHiddenClass);
  if (allHaveHiddenClass) {
    e.target.submit();
  }
});

// for (let i = 0; i < inputEls.length; i++) {
//   console.log(inputEls[i]);
// }
