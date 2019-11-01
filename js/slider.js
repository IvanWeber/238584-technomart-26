const arrows = document.querySelectorAll('.arrow-button');
const inputs = document.querySelectorAll('.slider-radio-button');


const arrowClickHandler = function () {
  if (inputs[0].checked === true) {
    inputs[0].checked = false;
    inputs[1].checked = true;
  }
  else {
    inputs[1].checked = false;
    inputs[0].checked = true;
  }
};

for (let i = 0; i <= 1; i++) {
  arrows[i].addEventListener('click', arrowClickHandler);
}
