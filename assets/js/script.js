"use strict";

// selecting elements
const modalElems = document.querySelectorAll("[data-modal-name]");
const modalOpenElems = document.querySelectorAll("[data-modal-open]");
const modalOverlay = document.querySelector(".modal--overlay");
const moreArticlesElem = document.querySelector(".more--articles");
const bodyElem = document.body;

const moreArticlesBtnElem = document.querySelector(".article--btn__more");

// functons
const toggleModal = function (e) {
  e.preventDefault();
  const modalName = this.dataset.modalOpen;
  // add the d--none class to all the modals
  modalElems.forEach((elem) => elem.classList.add("d--none"));
  // add the d--none class to the modal overlay
  modalOverlay.classList.add("d--none");
  //   remove overflowY on the body
  bodyElem.style.overflowY = "visible";

  if (modalName !== "close") {
    // find the modal to open in the modal lists and remove the d--none from it
    Array.from(modalElems)
      .find((elem) => elem.dataset.modalName === modalName)
      .classList.toggle("d--none");

    // remove d--none on the modal overlay
    modalOverlay.classList.remove("d--none");

    // hide overflow-y on the body
    bodyElem.style.overflowY = "hidden";

    modalName === "login" || modalName === "signup"
      ? modalOverlay.classList.add("modal--overlay__alt")
      : modalOverlay.classList.remove("modal--overlay__alt");
  }
};

const loadMoreArticles = function () {
  this.textContent = "Loading...";

  setInterval(() => {
    //   hide the button
    this.style.display = "none";

    //  remove d--none on the more articles class
    moreArticlesElem.classList.remove("d--none");

    //   add the grid class to the more articles class
    moreArticlesElem.classList.add("grid");
  }, 1500);
};

// event listeners
modalOpenElems.forEach((elem) => elem.addEventListener("click", toggleModal));
moreArticlesBtnElem.addEventListener("click", loadMoreArticles);
