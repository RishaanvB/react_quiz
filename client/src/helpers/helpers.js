const animateButton = (target) => {
  target.classList.add('animate-btn');
  setTimeout(() => target.classList.remove('animate-btn'), 250);
};

const addClassName = (target, className) => {
  target.classList.add(className);
};

const resetBtnsStyling = () => {
  const answerBtns = document.querySelectorAll('.btn-answer');
  answerBtns.forEach((btn) => {
    btn.classList.remove('correct-answer-given');
    btn.classList.remove('wrong-answer-given');
  });
};

const handleBtnsClickable = (className, action) => {
  const btns = document.querySelectorAll(className);

  btns.forEach((btn) => {
    action ? (btn.disabled = false) : (btn.disabled = true);
  });
};

const shuffleAnswers = () => {
  const container = document.querySelector('.answers-list');
  for (let i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[(Math.random() * i) | 0]);
  }
};

const getOrdinal = (position) => {
  const ordinals = ['st', 'nd', 'rd', 'th'];
  return position < 4 ? ordinals[position] : ordinals[3];
};
export {
  getOrdinal,
  animateButton,
  addClassName,
  resetBtnsStyling,
  shuffleAnswers,
  handleBtnsClickable,
};
