const feedbackButton = document.querySelector('.contacts__feedback-button');
const modalFeedback = document.querySelector('.modal-feedback');
const closeButton = modalFeedback.querySelector('.modal-close');

const feedbackButtonClickHandler = () => {
  modalFeedback.classList.remove('visually-hidden');
};

const closeButtonClickHandler = () => {
  modalFeedback.classList.add('visually-hidden');
};

feedbackButton.addEventListener('click', feedbackButtonClickHandler);
closeButton.addEventListener('click', closeButtonClickHandler);
