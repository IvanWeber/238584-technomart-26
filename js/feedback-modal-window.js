const feedbackButton = document.querySelector('.contacts__feedback-button');
const modalFeedback = document.querySelector('.modal-feedback');
const feedbackCloseButton = modalFeedback.querySelector('.modal-feedback-close');

const feedbackButtonClickHandler = () => {
  modalFeedback.classList.remove('complete-unavailability');
};

const feedbackCloseButtonClickHandler = () => {
  modalFeedback.classList.add('complete-unavailability');
};

const modalFeedbackEscKeydownHandler = (evt) => {
  if (evt.keyCode === 27) {
    modalFeedback.classList.add('complete-unavailability');
  }
};

feedbackButton.addEventListener('click', feedbackButtonClickHandler);
feedbackCloseButton.addEventListener('click', feedbackCloseButtonClickHandler);
document.addEventListener('keydown', modalFeedbackEscKeydownHandler);
