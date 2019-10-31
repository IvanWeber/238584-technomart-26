const feedbackButton = document.querySelector('.contacts__feedback-button');
const modalFeedback = document.querySelector('.modal-feedback');
const feedbackCloseButton = modalFeedback.querySelector('.modal-feedback-close');

const feedbackButtonClickHandler = function () {
  modalFeedback.classList.remove('complete-unavailability');
};

const feedbackCloseButtonClickHandler = function () {
  modalFeedback.classList.add('complete-unavailability');
};

const modalFeedbackEscKeydownHandler = function (evt) {
  if (evt.keyCode === 27) {
    modalFeedback.classList.add('complete-unavailability');
  }
};

feedbackButton.addEventListener('click', feedbackButtonClickHandler);
feedbackCloseButton.addEventListener('click', feedbackCloseButtonClickHandler);
document.addEventListener('keydown', modalFeedbackEscKeydownHandler);
