"use strict";

(function () {
  const menuBtnEl = document.querySelector(".globalnav__button");
  const dropdownMenuEl = document.querySelector(".globalnav__menu");

  menuBtnEl.addEventListener("click", () => {
    dropdownMenuEl.classList.toggle("open");
  });
})();
