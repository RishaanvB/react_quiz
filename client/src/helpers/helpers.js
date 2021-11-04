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

const handleBtnsClickable = (selector, action) => {
  const btns = document.querySelectorAll(selector);

  btns.forEach((btn) => {
    if (action === 'enable') {
      btn.disabled = false;
    } else if (action === 'disable') {
      btn.disabled = true;
    } else {
      throw new Error(
        'Second argument is incorrect or missing, choose either "enable" or "disable" '
      );
    }
  });
};

const shuffleAnswers = () => {
  const containers = document.querySelectorAll('.answers-list');
  containers.forEach((container) => {
    for (let i = container.children.length; i >= 0; i--) {
      container.appendChild(container.children[(Math.random() * i) | 0]);
    }
  });
};

const getOrdinal = (position) => {
  const ordinals = ['st', 'nd', 'rd', 'th'];
  return position < 4 ? ordinals[position] : ordinals[3];
};

const checkGameState = (state) => {
  const gameStates = ['home', 'quiz', 'result', 'highscores'];
  if (!gameStates.includes(state)) {
    throw new Error(
      'Invalid gamestate!!!, choose one of the following in App.js: home, quiz, result, highscores'
    );
  }
};
export {
  getOrdinal,
  animateButton,
  addClassName,
  resetBtnsStyling,
  shuffleAnswers,
  handleBtnsClickable,
  checkGameState,
};
