const addButton = document.querySelectorAll('.popular-products__product-add-to-cart');
const modalAdd = document.querySelector('.modal-add');
const addCloseButton = modalAdd.querySelector('.modal-add-close');


const addButtonClickHandler = () => {
  modalAdd.classList.remove('visually-hidden');
};

const addCloseButtonClickHandler = () => {
  modalAdd.classList.add('visually-hidden');
};


addButton.forEach((el) => {
  el.addEventListener('click', addButtonClickHandler);
});

addCloseButton.addEventListener('click', addCloseButtonClickHandler);
