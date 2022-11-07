"use strict";

(function () {
  const headerEl = document.querySelector(".header");
  const navMenuEl = document.querySelector(".globalnav__menu");
  const cardsEl = document.querySelector(".cards");

  const modalEl = document.querySelector(".modal");
  const formEl = document.querySelector(".register");

  const emailInputEl = document.querySelector(".register__email-input");
  const confirmInputEl = document.querySelector(".register__confirm-input");
  const emailErrorEl = document.querySelector(".register__email-error");
  const confirmErrorEl = document.querySelector(".register__confirm-error");

  const emailErrorMessage = "A valid email must contain @";
  const confirmErrorMessage = "This field must match provided email";

  headerEl.addEventListener("click", (event) => {
    const btn = event.target.closest(".globalnav__button");
    if (!btn) return;

    navMenuEl.classList.toggle("open");
  });

  cardsEl.addEventListener("click", (event) => {
    const subscribeBtn = event.target.closest(".card__button");
    if (!subscribeBtn) return;

    modalEl.showModal();
  });

  const resetValidation = function () {
    emailErrorEl.classList.remove("invalid");
    confirmErrorEl.classList.remove("invalid");
  };

  const resetInputs = function () {
    emailInputEl.value = "";
    confirmInputEl.value = "";
  };

  formEl.addEventListener("click", (event) => {
    const cancelBtn = event.target.closest(".register__button-cancel");
    if (!cancelBtn) return;

    modalEl.close();
    resetValidation();
    resetInputs();
  });

  formEl.addEventListener("submit", (event) => {
    let isInvalid = false;

    resetValidation();

    if (!emailInputEl.value) {
      emailErrorEl.classList.add("invalid");
      isInvalid = true;
    }

    if (emailInputEl.value && !emailInputEl.value.includes("@")) {
      emailErrorEl.classList.add("invalid");
      emailErrorEl.innerText = emailErrorMessage;
      isInvalid = true;
    }

    if (confirmInputEl.value !== emailInputEl.value) {
      confirmErrorEl.classList.add("invalid");
      confirmErrorEl.innerText = confirmErrorMessage;
      isInvalid = true;
    }

    if (isInvalid) {
      event.preventDefault();
    }
  });

  formEl.addEventListener("input", () => {
    if (emailInputEl.value) {
      emailErrorEl.classList.remove("invalid");
    }

    if (confirmInputEl.value === emailInputEl.value) {
      confirmErrorEl.classList.remove("invalid");
    }
  });
})();
