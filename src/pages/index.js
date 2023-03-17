import {initialCards, validationConfig} from '../utils/dataCards.js'; // Подключение массива карточек для генерации галереи при загрузке страницы
import Card from "../components/Card.js";
import FormValidator from '../components/FormValidator.js';
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";

const profileEditButton = document.querySelector('.profile__edit-button'); // Поиск кнопки редактирования профиля
const cardAddButton = document.querySelector('.profile__add-button'); // Поиск кнопки добавления новой карточки
const templateSelector = '.place-template'; // Поиск шаблона карточки (места)

//РАБОТА С КЛАССОМ SECTION

// Функция создания новой карточки для добавления на страницу;
function createCard (title, link) {
  const card = new Card (title, link, templateSelector, handleCardClick);
  return(card.getCard());
}

//Создание экземпляра класса Section
const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard (item.name, item.link);
    section.addItem(cardElement);
  }
},
  '.location__list'
);

// Создание на странице первоначальных карточек
section.renderItems();

//РАБОТА С POPUP ДЛЯ ДОБАВЛЕНИЯ КАРТОЧКИ

// Функция сохранения данных, введенных в форму добавления карточки места 
function handleCardFormSave(data) {
  const card = createCard (data['place-name'], data['place-link']);
  section.addItem(card);
}

// Создание экземпляра класса PopupWithForm c формой создания карточки
const popupFormAddCard = new PopupWithForm('#popup-place', handleCardFormSave);

// Добавление слушателя на открытие формы создания новой карточки
cardAddButton.addEventListener('click', () => { popupFormAddCard.open(); });

//Вызов метода установки слушателей на события формы создания карточки и ее очистку
popupFormAddCard.setEventListener();

//РАБОТА С POPUP ДЛЯ ИЗМЕНЕНИЯ ПРОФИЛЯ

// Создание экземпляра класса UserInfo
const userInfo = new UserInfo (
  {
    nameProfileSelector: '.profile__name',
    infoProfileSelector:'.profile__description'
  }
);

// Функция сохранения данных пользователя из полей формы Profile на страницу
function handleProfileFormSave (data) {
  userInfo.setUserInfo(data['name-profile'], data['description-profile']);
}

// Создание экземпляра класса PopupWithForm c формой редактирования профиля
const popupFormProfile = new PopupWithForm('#popup-profile', handleProfileFormSave);

// Отслеживание событий по кнопкам редактирования профиля, открытие формы редактирования профиля, и заполнения данными ее полей
profileEditButton.addEventListener('click', () => {
  popupFormProfile.open();
  const dataUserInfo = userInfo.getUserInfo();
  const data = {'name-profile': dataUserInfo.name, 'description-profile': dataUserInfo.info}
  popupFormProfile.fillInFields(data);
});

// вызов метода добавления слушателей на popup формы редактирования профиля
popupFormProfile.setEventListener();

//РАБОТА С POPUP ZOOM IMAGE

const popupZoomImage = new PopupWithImage('#popup-zoom');

// Открытие popup - просмотр увеличенной картинки
function handleCardClick(title, link) {
  popupZoomImage.open(title, link);  
}

// ВАЛИДАЦИЯ ФОРМ
const enableValidation = (validationConfig) => {
  const formList = Array.from(document.forms);         //Создание массива всех форм страницы 
  formList.forEach((formElement) => {                // Добавление обработчика на каждую форму с типом submit
    const formValidator = new FormValidator(formElement, validationConfig);
    formValidator.enableValidation();
  });
}

enableValidation(validationConfig);
