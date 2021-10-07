const animateButton = (target) => {
  target.classList.add("animate-btn");
  setTimeout(() => target.classList.remove("animate-btn"), 250);
};

const changeColor = (target) => {
  resetBtnsStyling();
  target.classList.add("selected-answer");
};

const resetBtnsStyling = () => {
  const answerBtns = document.querySelectorAll(".btn-answer");
  answerBtns.forEach((btn) => {
    btn.classList.remove("selected-answer");
  });
};

export { animateButton, changeColor, resetBtnsStyling };
