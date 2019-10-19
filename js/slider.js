const arrows = document.querySelectorAll('.arrow-button');
const inputs = document.querySelectorAll('.slider-radio-button');


const arrowClickHandler = () => {
  if (inputs[0].checked === true) {
    inputs[0].checked = false;
    inputs[1].checked = true;
  }
  else {
    inputs[1].checked = false;
    inputs[0].checked = true;
  }
};


arrows.forEach((el) => {
  el.addEventListener('click', arrowClickHandler)
});
