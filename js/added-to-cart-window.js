const addButton = document.querySelectorAll('.popular-products__product-add-to-cart');
const modalAdd = document.querySelector('.modal-add');
const addCloseButton = modalAdd.querySelector('.modal-add-close');
const toPurchasesButton = modalAdd.querySelector('.to-purchases');


const addButtonClickHandler = () => {
  modalAdd.classList.remove('complete-unavailability');
};

const addCloseButtonClickHandler = () => {
  modalAdd.classList.add('complete-unavailability');
};

const modalAddEscKeydownHandler = (evt) => {
  if (evt.keyCode === 27) {
    modalAdd.classList.add('complete-unavailability');
  }
};

const toPurchasesButtonClickHandler = () => {
  modalAdd.classList.add('complete-unavailability');
};


addButton.forEach((el) => {
  el.addEventListener('click', addButtonClickHandler);
});

addCloseButton.addEventListener('click', addCloseButtonClickHandler);
document.addEventListener('keydown', modalAddEscKeydownHandler);
toPurchasesButton.addEventListener('click', toPurchasesButtonClickHandler);
