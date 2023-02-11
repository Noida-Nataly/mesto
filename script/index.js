import {initialCards} from './dataCards.js'; // Подключение массива карточек для генерации галереи при загрузке страницы

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
const template = document.querySelector('.place-template'); // Поиск шаблона карточки (места)
const zoomImage = popupZoom.querySelector('.popup__zoom-image'); // Поиск увеличиваемой картинки
const zoomComment = popupZoom.querySelector('.popup__comment'); // Поиск наименования увеличиваемой картинки

// Функция закрытия popup
function closePopup(parentPopup) {
  parentPopup.classList.remove('popup_opened');
}

// Функция закрытия popup по клику на оверлей
const closePopupOnOverlayClick = (evt) => {
  if(evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
    document.removeEventListener('mousedown', closePopupOnOverlayClick);
  }
}

const closePopupOnEscapeClick = (evt) => {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
    document.removeEventListener('keydown', closePopupOnEscapeClick);
  }
}

// Функция добавления обработчиков при открытии popup и очистка полей формы
function initPopup(popup) {
  const formElement = popup.querySelector('.popup__content');
  if (formElement) {
    formElement.reset();
  }
  document.addEventListener('mousedown', closePopupOnOverlayClick);
  document.addEventListener('keydown', closePopupOnEscapeClick);
}
  
// Обработчик события открытия popup, добавление класса popup_opened
function openPopup(popup) {
  popup.classList.add('popup_opened');
  initPopup(popup);
}

// Отслеживание событий по кнопкам редактирования профиля и открытие формы редактирования профиля
profileEditButton.addEventListener('click', () => {
  openPopup(popupProfileEdit);
  fieldName.value = profileName.textContent;
  fieldDescription.value = profileDescription.textContent;
});

// Отслеживание событий по кнопкам редактирования профиля и открытие формы добавления нового места
cardAddButton.addEventListener('click', () => {
  openPopup(popupAddCard);
});

// Открытие popup - просмотр увеличенной картинки
function openPopupZoom(title, link) {
  zoomComment.textContent = title;
  zoomImage.src = link;
  zoomImage.alt = title;
  openPopup(popupZoom);
}

// Функция создания новой карточки (передача в шаблон карточки - имени, ссылки и описания(= имени)
function getCard(title, link, alt) {
  const card = template.content.cloneNode(true);
  const image = card.querySelector('.location__image');
  card.querySelector('.location__title').textContent = title; // добавляем карточке наименование
  image.src = link;               // добавляем картинке ссылку
  image.alt = alt;                // добавляем картинке описание
  card.querySelector('.location__like-button').addEventListener('click', toggleLike); // добавляем отслеживание лайка на вновь созданные карты
  card.querySelector('.location__delete-button').addEventListener('click', deleteCard); // добавляем отслеживание удаления на вновь созданные карты
  image.addEventListener('click', () => {openPopupZoom(title, link)}); // добавляем отслеживание клика по вновь созданной картинке
  return card;
}

// Функция добавления новой карточки в начало списка;
function createPlace (title, link, alt) {
  const card = getCard (title, link, alt);
  list.prepend(card);
}

// Генерация карточек при открытии страницы
initialCards.forEach(card => createPlace(card.name, card.link, card.name));

// Отслеживание событий по кнопкам с функцией закрытия popup, для всех элементов массива
closeButtons.forEach(button => {
  const parentPopup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(parentPopup));
});

// Удаление карточки по нажатию кнопки 
function deleteCard(evt) {
  const card = evt.target.closest('.location__card'); // выбор карточки, из которой вызвали событие
  card.remove();
}

// Добавление/удаление лайка по нажатию кнопки
function toggleLike(evt) {
  evt.target.classList.toggle('location__like-button_active');
}

function handleProfileFormSave(evt) {
    profileName.textContent = fieldName.value;
    profileDescription.textContent = fieldDescription.value;
    evt.preventDefault();
}

// функция сохранения данных, введенных в форму добавления карточки места 
function handleCardFormSave(evt) {
    createPlace (fieldPlaceName.value, fieldPlaceLink.value, fieldPlaceName.value);
    evt.target.reset();
    evt.preventDefault();
}
 
// Отслеживание событий по кнопкам с функцией сохранения данных, для всех элементов
popupProfileForm.addEventListener ('submit', handleProfileFormSave);
popupCardAddForm.addEventListener ('submit', handleCardFormSave);