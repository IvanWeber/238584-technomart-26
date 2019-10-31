const addButton = document.querySelectorAll('.popular-products__product-add-to-cart');
const modalAdd = document.querySelector('.modal-add');
const addCloseButton = modalAdd.querySelector('.modal-add-close');
const toPurchasesButton = modalAdd.querySelector('.to-purchases');


const addButtonClickHandler = function ()  {
  modalAdd.classList.remove('complete-unavailability');
};

const addCloseButtonClickHandler = function () {
  modalAdd.classList.add('complete-unavailability');
};

const modalAddEscKeydownHandler = function (evt)  {
  if (evt.keyCode === 27) {
    modalAdd.classList.add('complete-unavailability');
  }
};

const toPurchasesButtonClickHandler = function () {
  modalAdd.classList.add('complete-unavailability');
};


// addButton.forEach(function (el) {
//   el.addEventListener('click', addButtonClickHandler);
// });

for (let i = 0; i < addButton.length; i++) {
  addButton[i].addEventListener('click', addButtonClickHandler);
}

addCloseButton.addEventListener('click', addCloseButtonClickHandler);
document.addEventListener('keydown', modalAddEscKeydownHandler);
toPurchasesButton.addEventListener('click', toPurchasesButtonClickHandler);
