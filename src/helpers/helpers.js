const animateButton = (target) => {
  target.classList.add("animate-btn");
  setTimeout(() => target.classList.remove("animate-btn"), 250);
};

const changeColor = (target, className) => {
  // resetBtnsStyling();
  target.classList.add(className);
};

const resetBtnsStyling = () => {
  const answerBtns = document.querySelectorAll(".btn-answer");
  answerBtns.forEach((btn) => {
    btn.classList.remove("selected-answer");
  });
};


const shuffleAnswers = () => {
  const ul = document.querySelector(".answers-list");
  for (let i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[(Math.random() * i) | 0]);
  }
};
export { animateButton, changeColor, resetBtnsStyling, shuffleAnswers };
