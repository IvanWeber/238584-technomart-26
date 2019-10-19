const addButton = document.querySelectorAll('.popular-products__product-add-to-cart');
const modalAdd = document.querySelector('.modal-add');
const closeButton = modalAdd.querySelector('.modal-close');


const addButtonClickHandler = () => {
  modalAdd.classList.remove('visually-hidden');
};

const closeButtonClickHandler = () => {
  modalAdd.classList.add('visually-hidden');
};


addButton.forEach((el) => {
  el.addEventListener('click', addButtonClickHandler);
});

closeButton.addEventListener('click', closeButtonClickHandler);
