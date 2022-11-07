"use strict";

(function () {
  const formEl = document.querySelector(".register");

  const nameErrorBoxEl = document.querySelector(".register__name-error");
  const emailErrorEl = document.querySelector(".register__email-error");
  const confirmErrorEl = document.querySelector(".register__confirm-error");

  const nameInputEl = document.querySelector(".register__name-input");
  const emailInputEl = document.querySelector(".register__email-input");
  const confirmInputEl = document.querySelector(".register__confirm-input");

  const emailDefaultMessage = "This field is required";
  const emailErrorMessage = "You haven't fill in the email";
  const confirmDefaultMessage = "This field must match the email";
  const confirmErrorMessage = "Emails typed in don't match";

  const resetValidation = function () {
    nameErrorBoxEl.classList.remove("name-invalid");
    emailErrorEl.classList.remove("error-message");
    confirmErrorEl.classList.remove("error-message");
  };

  formEl.addEventListener("change", (event) => {
    let isInvalid = false;
    nameErrorBoxEl.classList.remove("name-invalid");

    if (!nameInputEl.value) {
      nameErrorBoxEl.classList.add("name-invalid");
      isInvalid = true;
    }

    if (isInvalid) {
      event.preventDefault();
    }
  });

  formEl.addEventListener("submit", (event) => {
    let isInvalid = false;

    resetValidation();

    if (!nameInputEl.value) {
      nameErrorBoxEl.classList.add("name-invalid");
      isInvalid = true;
    }

    if (!emailInputEl.value) {
      emailErrorEl.classList.add("error-message");
      emailErrorEl.innerText = emailErrorMessage;
      isInvalid = true;
    }

    if (confirmInputEl.value !== emailInputEl.value) {
      confirmErrorEl.classList.add("error-message");
      confirmErrorEl.innerText = confirmErrorMessage;
      isInvalid = true;
    }

    if (isInvalid) {
      event.preventDefault();
    }
  });

  formEl.addEventListener("input", () => {
    if (nameInputEl.value) {
      nameErrorBoxEl.classList.remove("name-invalid");
    }

    if (emailInputEl.value) {
      emailErrorEl.classList.remove("error-message");
      emailErrorEl.innerText = emailDefaultMessage;
    }

    if (confirmInputEl.value === emailInputEl.value) {
      confirmErrorEl.classList.remove("error-message");
      confirmErrorEl.innerText = confirmDefaultMessage;
    }
  });
})();
