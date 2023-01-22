import {initialCards} from './data_cards.js'; // Подключение массива карточек для генерации галереи при загрузке страницы

const editButton = document.querySelector('.profile__edit-button'); // Поиск кнопки редактирования профиля
const popupEdit = document.querySelector('#popup-profile'); // Поиск всплывающего окна редактирования профиля
const addButton = document.querySelector('.profile__add-button'); // Поиск кнопки добавления новой карточки
const popupAdd = document.querySelector('#popup-place'); // Поиск всплывающего окна добавления карточки места
const popupForm = document.querySelectorAll('.popup__content')  // Поиск форм редактирования информации
const closePopup = document.querySelectorAll('.close-popup'); // Поиск кнопок закрытия формы без сохранения
const popupZoom = document.querySelector('#popup-zoom'); // Поиск модального окна увеличенной картинки

let profileName = document.querySelector('.profile__name'); // Поиск места хранения имени профиля
let profileDescription = document.querySelector('.profile__description'); // Поиск места хранения описания профиля
let fieldName = document.querySelector('#name-profile'); // Поиск поля ввода имени профиля
let fieldDescription = document.querySelector('#description-profile'); // Поиск поля ввода описания профиля
let fieldPlaceName = document.querySelector('#place-name'); // Поиск поля ввода названия места
let fieldPlaceLink = document.querySelector('#place-link'); // Поиск поля ввода ссылки на картинку

// Обработчик события открытия popup, добавление popup_opened
function popupOpen(evt) {
  const arrayClasses = evt.target.classList;  // Выбор целевого объекта события и извлечение его массива классов 
  if (arrayClasses.contains('profile__add-button')) {  // проверка формы, которую нужно открыть  
    popupAdd.classList.add('popup_opened');                 // открываем popup добавления картинки
  }
  else if (arrayClasses.contains('profile__edit-button')) { // открываем popup редактирования профиля и заполняем его
          fieldName.value = profileName.textContent;
          fieldDescription.value = profileDescription.textContent;
          popupEdit.classList.add('popup_opened');
  }
  else if (arrayClasses.contains('location__image')) {  //открываем popup увеличенной фотографии места
    //выбираем название карточки места
    const placeName = evt.target.closest('.location__card').querySelector('.location__title').textContent;
    popupZoom.querySelector('.popup__comment').textContent = placeName;
    // выбираем ссылку на фотографию места
    popupZoom.querySelector('.popup__zoom-image').src = evt.target.src;
    // открываем попап картинки
    popupZoom.classList.add('popup_opened');
  }
}

// Функция закрытия popup
function popupClose() {
  popupEdit.classList.remove('popup_opened');
  popupAdd.classList.remove('popup_opened');
  popupZoom.classList.remove('popup_opened');
}

// функция сохранения введенных данных из формы 
function popupDataSave(evt) {
  const formName = evt.target.name;  // выбор имени объекта события
  if (formName === 'profile') {
    profileName.textContent = fieldName.value;
    profileDescription.textContent = fieldDescription.value;
  }
  else if (formName === 'place') {
    createPlace (fieldPlaceName.value, fieldPlaceLink.value, fieldPlaceName.value);
    fieldPlaceName.value = null;
    fieldPlaceLink.value = null;
  }
  evt.preventDefault();
}

// Функция создания и добавления новой карточки в начало списка;
// передача в карточку имени, ссылки и описания (= имени)
function createPlace(title, link, alt) {
  const list = document.querySelector('.location__list');
  const template = document.querySelector('.place-template');
  const card = template.content.cloneNode(true);
  card.querySelector('.location__title').textContent = title;
  card.querySelector('.location__image').src = link;
  card.querySelector('.location__image').alt = alt;
  card.querySelector('.location__like-button').addEventListener('click', likeCard); // добавляем отслеживание лайка на вновь созданные карты
  card.querySelector('.location__delete-button').addEventListener('click', deleteCard); // добавляем отслеживание удаления на вновь созданные карты
  card.querySelector('.location__image').addEventListener('click', popupOpen); // добавляем отслеживание клика по вновь созданной картинке
  list.prepend(card);
}

// Отслеживание событий по кнопкам редактирования профиля и добавления карточки
editButton.addEventListener('click', popupOpen);
addButton.addEventListener('click', popupOpen);

// Отслеживание событий по кнопкам с функцией закрытия popup, для всех элементов массива
closePopup.forEach(button => button.addEventListener('click', popupClose));

// Отслеживание событий по кнопкам с функцией сохранения данных, для всех элементов массива
popupForm.forEach(button => button.addEventListener('submit', popupDataSave));

// Генерация карточек при открытии страницы
initialCards.forEach(card => createPlace(card.name, card.link, card.name));

// Удаление карточки по нажатию кнопки 
function deleteCard(evt) {
  const card = evt.target.closest('.location__card'); // выбор карточки, из которой вызвали событие
  card.remove();
}

// Добавление/удаление лайка по нажатию кнопки
function likeCard(evt) {
  evt.target.classList.toggle('location__like-button_active');
}