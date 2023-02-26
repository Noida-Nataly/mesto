import {initialCards} from './dataCards.js'; // Подключение массива карточек для генерации галереи при загрузке страницы
import Card from "./Card.js";

const profileEditButton = document.querySelector('.profile__edit-button'); // Поиск кнопки редактирования профиля
const popupProfileEdit = document.querySelector('#popup-profile'); // Поиск всплывающего окна редактирования профиля
const cardAddButton = document.querySelector('.profile__add-button'); // Поиск кнопки добавления новой карточки
const popupAddCard = document.querySelector('#popup-place'); // Поиск всплывающего окна добавления карточки места
const popupProfileForm = document.forms['form-profile'];  // Поиск форм редактирования информации
const popupCardAddForm = document.forms['form-place'] ; // Поиск форм редактирования информации
const closeButtons = document.querySelectorAll('.close-popup'); // Поиск кнопок закрытия формы без сохранения
const popupZoom = document.querySelector('#popup-zoom'); // Поиск модального окна увеличенной картинки
const profileName = document.querySelector('.profile__name'); // Поиск места хранения имени профиля
const profileDescription = document.querySelector('.profile__description'); // Поиск места хранения описания профиля
const fieldName = document.querySelector('#name-profile'); // Поиск поля ввода имени профиля
const fieldDescription = document.querySelector('#description-profile'); // Поиск поля ввода описания профиля
const fieldPlaceName = document.querySelector('#place-name'); // Поиск поля ввода названия места
const fieldPlaceLink = document.querySelector('#place-link'); // Поиск поля ввода ссылки на картинку
const list = document.querySelector('.location__list'); // Поиск списка карточек (мест)
const templateSelector = '.place-template'; // Поиск шаблона карточки (места)
const zoomImage = popupZoom.querySelector('.popup__zoom-image'); // Поиск увеличиваемой картинки
const zoomComment = popupZoom.querySelector('.popup__comment'); // Поиск наименования увеличиваемой картинки

// Функция закрытия popup
function closePopup(parentPopup) {
  parentPopup.classList.remove('popup_opened');
  document.removeEventListener('mousedown', closePopupOnOverlayClick);
  document.removeEventListener('keydown', closePopupOnEscapeClick);
}

// Функция закрытия popup по клику на оверлей
const closePopupOnOverlayClick = (evt) => {
  if(evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

const closePopupOnEscapeClick = (evt) => {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

function resetInputForms(popup) {
  const formElement = popup.querySelector('.popup__content');
  formElement.reset();
}

// Функция добавления обработчиков при открытии popup и очистка полей формы
function initPopup() {
  document.addEventListener('mousedown', closePopupOnOverlayClick);
  document.addEventListener('keydown', closePopupOnEscapeClick);
}
  
// Обработчик события открытия popup, добавление класса popup_opened
function openPopup(popup) {
  popup.classList.add('popup_opened');
  initPopup();
}

// Отслеживание событий по кнопкам редактирования профиля и открытие формы редактирования профиля
profileEditButton.addEventListener('click', () => {
  openPopup(popupProfileEdit);
  resetInputForms(popupProfileEdit);
  fieldName.value = profileName.textContent;
  fieldDescription.value = profileDescription.textContent;
});

// Отслеживание событий по кнопкам редактирования профиля и открытие формы добавления нового места
cardAddButton.addEventListener('click', () => {
  openPopup(popupAddCard);
  resetInputForms(popupAddCard);
});

// Открытие popup - просмотр увеличенной картинки
function openPopupZoom(title, link) {
  zoomComment.textContent = title;
  zoomImage.src = link;
  zoomImage.alt = title;
  openPopup(popupZoom);
}

// Функция добавления новой карточки в начало списка;
function createPlace (title, link) {
  const card = new Card (title, link, templateSelector, openPopupZoom);
  list.prepend(card.getCard());
}

// Генерация карточек при открытии страницы
initialCards.forEach(card => createPlace(card.name, card.link));

// Отслеживание событий по кнопкам с функцией закрытия popup, для всех элементов массива
closeButtons.forEach(button => {
  const parentPopup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(parentPopup));
});

function handleProfileFormSave(evt) {
    profileName.textContent = fieldName.value;
    profileDescription.textContent = fieldDescription.value;
    evt.preventDefault();
}

// функция сохранения данных, введенных в форму добавления карточки места 
function handleCardFormSave(evt) {
    createPlace (fieldPlaceName.value, fieldPlaceLink.value);
    evt.target.reset();
    evt.preventDefault();
}
 
// Отслеживание событий по кнопкам с функцией сохранения данных, для всех элементов
popupProfileForm.addEventListener ('submit', handleProfileFormSave);
popupCardAddForm.addEventListener ('submit', handleCardFormSave);