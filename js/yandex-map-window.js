const openMapButton = document.querySelector('.contacts__yandex-map');
const yandexMap = document.querySelector('.modal-yandex-map');
const closeMapButton = yandexMap.querySelector('.map-close');


const openMapButtonClickHandler = function () {
  yandexMap.classList.remove('complete-unavailability');
};

const closeMapButtonClickHandler = function () {
  yandexMap.classList.add('complete-unavailability');
};

const yandexMapEscKeydownHandler = function (evt) {
  if (evt.keyCode === 27) {
    yandexMap.classList.add('complete-unavailability');
  }
};

openMapButton.addEventListener('click', openMapButtonClickHandler);
closeMapButton.addEventListener('click', closeMapButtonClickHandler);
document.addEventListener('keydown', yandexMapEscKeydownHandler);
