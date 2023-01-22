import {initialCards} from './data_cards.js';

const editButton = document.querySelector('.profile__edit-button'); // Поиск кнопки редактирования профиля
const popupEdit = document.querySelector('#popup-profile'); // Поиск всплывающего окна редактирования профиля
const addButton = document.querySelector('.profile__add-button'); // Поиск кнопки добавления новой карточки
const popupAdd = document.querySelector('#popup-place'); // Поиск всплывающего окна добавления карточки места
const popupForm = document.querySelectorAll('.popup__content')  // Поиск форм редактирования информации
const closePopup = document.querySelectorAll('.close-popup'); // Поиск кнопок закрытия формы без сохранения

let profileName = document.querySelector('.profile__name'); // Поиск места хранения имени профиля
let profileDescription = document.querySelector('.profile__description'); // Поиск места хранения описания профиля
let fieldName = document.querySelector('#name-profile'); // Поиск поля ввода имени профиля
let fieldDescription = document.querySelector('#description-profile'); // Поиск поля ввода описания профиля

let fieldPlaceName = document.querySelector('#place-name'); // Поиск поля ввода названия места
let fieldPlaceLink = document.querySelector('#place-link'); // Поиск поля ввода ссылки на картинку

// Обработчик события открытия попапа, добавление popup_opened
function popupOpen(evt) {
  const arrayClasses = evt.target.classList;  // Выбор целевого объекта события и извлечение его массива классов 
  if (arrayClasses.contains('profile__add-button')) {  // выбор формы, которую нужно открыть и дополнительные действия при открытии  
    popupAdd.classList.add('popup_opened');
  }
  else if (arrayClasses.contains('profile__edit-button')) {
          fieldName.value = profileName.textContent;
          fieldDescription.value = profileDescription.textContent;
          popupEdit.classList.add('popup_opened');
  }
}

// Функция закрытия попапа
function popupClose() {
  popupEdit.classList.remove('popup_opened');
  popupAdd.classList.remove('popup_opened');
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
  list.prepend(card);
}

// Отслеживание событий по кнопкам редактирования профиля и добавления карточки
editButton.addEventListener('click', popupOpen);
addButton.addEventListener('click', popupOpen);

// Отслеживание событий по кнопкам с функцией закрытия попапов, для всех элементов массива
closePopup.forEach(button => button.addEventListener('click', popupClose));

// Отслеживание событий по кнопкам с функцией сохранения данных, для всех элементов массива
popupForm.forEach(button => button.addEventListener('submit', popupDataSave));

// Генерация карточек при открытии страницы
initialCards.forEach(card => createPlace(card.name, card.link, card.name));