const addButton = document.querySelectorAll('.popular-products__product-add-to-cart');
const modalAdd = document.querySelector('.modal-add');
const addCloseButton = modalAdd.querySelector('.modal-add-close');
const toPurchasesButton = modalAdd.querySelector('.to-purchases');


const addButtonClickHandler = () => {
  modalAdd.classList.remove('visually-hidden');
};

const addCloseButtonClickHandler = () => {
  modalAdd.classList.add('visually-hidden');
};

const modalAddEscKeydownHandler = (evt) => {
  if (evt.keyCode === 27) {
    modalAdd.classList.add('visually-hidden');
  }
};

const toPurchasesButtonClickHandler = () => {
  modalAdd.classList.add('visually-hidden');
};


addButton.forEach((el) => {
  el.addEventListener('click', addButtonClickHandler);
});

addCloseButton.addEventListener('click', addCloseButtonClickHandler);
document.addEventListener('keydown', modalAddEscKeydownHandler);
toPurchasesButton.addEventListener('click', toPurchasesButtonClickHandler);
