const openMapButton = document.querySelector('.contacts__yandex-map');
const yandexMap = document.querySelector('.modal-yandex-map');
const closeMapButton = yandexMap.querySelector('.map-close');


const openMapButtonClickHandler = () => {
  yandexMap.classList.remove('complete-unavailability');
};

const closeMapButtonClickHandler = () => {
  yandexMap.classList.add('complete-unavailability');
};

const yandexMapEscKeydownHandler = (evt) => {
  if (evt.keyCode === 27) {
    yandexMap.classList.add('complete-unavailability');
  }
};

openMapButton.addEventListener('click', openMapButtonClickHandler);
closeMapButton.addEventListener('click', closeMapButtonClickHandler);
document.addEventListener('keydown', yandexMapEscKeydownHandler);
