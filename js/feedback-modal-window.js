const feedbackButton = document.querySelector('.contacts__feedback-button');
const modalFeedback = document.querySelector('.modal-feedback');
const feedbackCloseButton = modalFeedback.querySelector('.modal-feedback-close');

const feedbackButtonClickHandler = () => {
  modalFeedback.classList.remove('visually-hidden');
};

const feedbackCloseButtonClickHandler = () => {
  modalFeedback.classList.add('visually-hidden');
};

const modalFeedbackEscKeydownHandler = (evt) => {
  if (evt.keyCode === 27) {
    modalFeedback.classList.add('visually-hidden');
  }
};

feedbackButton.addEventListener('click', feedbackButtonClickHandler);
feedbackCloseButton.addEventListener('click', feedbackCloseButtonClickHandler);
document.addEventListener('keydown', modalFeedbackEscKeydownHandler);
