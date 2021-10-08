const animateButton = (target) => {
  target.classList.add("animate-btn");
  setTimeout(() => target.classList.remove("animate-btn"), 250);
};

const addClassName = (target, className) => {
  target.classList.add(className);
};

const resetBtnsStyling = () => {
  const answerBtns = document.querySelectorAll(".btn-answer");
  answerBtns.forEach((btn) => {
    btn.classList.remove("correct-answer-given");
    btn.classList.remove("wrong-answer-given");
  });
};

const handleBtnsClickable = (className, action) => {
  const btns = document.querySelectorAll(className);

  btns.forEach((btn) => {
    action ? (btn.disabled = false) : (btn.disabled = true);
  });
};

const shuffleAnswers = () => {
  const ul = document.querySelector(".answers-list");
  for (let i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[(Math.random() * i) | 0]);
  }
};
export {
  animateButton,
  addClassName,
  resetBtnsStyling,
  shuffleAnswers,
  handleBtnsClickable,
  
};
