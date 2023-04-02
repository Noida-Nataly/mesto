import './index.css'; // добавьте импорт главного файла стилей 

import {validationConfig, baseUrl, token} from '../utils/data.js'; // Подключение массива карточек для генерации галереи при загрузке страницы
import Card from "../components/Card.js";
import FormValidator from '../components/FormValidator.js';
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import Api from '../components/Api.js';
import PopupDeleteConfirmation from "../components/PopupDeleteConfirmation";

const profileEditButton = document.querySelector('.profile__edit-button'); // Поиск кнопки редактирования профиля
const cardAddButton = document.querySelector('.profile__add-button'); // Поиск кнопки добавления новой карточки
const templateSelector = '.place-template'; // Поиск шаблона карточки (места)
const avatarEditButton = document.querySelector('.profile__avatar'); // Поиск кнопки редактирования профиля
let userId;

//СОЗДАНИЕ ЭКЗЕМПЛЯРА СЕРВИСА ПО ОБМЕНУ ДАННЫМИ С СЕРВЕРОМ

const api = new Api(baseUrl, token);

// Создание экземпляра класса UserInfo
const userInfo = new UserInfo (
  {
    nameProfileSelector: '.profile__name',
    infoProfileSelector:'.profile__description',
    avatarProfileSelector: '.profile__avatar-image'
  }
);

const userInfoPromise = api.getUserInfo();

//РАБОТА С КЛАССОМ SECTION

// Метод обработки клика по лайку
function handleToggleLike(card, cardId, isMyLike) {
  api.toggleLike(cardId, isMyLike)
    .then((dataCard)=> {
      card.toggleLike(dataCard.likes);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
}

//Метод удаления карточки

function confirmFormFunction(card) {
  popupFormDeleteCard.renderLoading(true, "Удаление...");
  api.deleteCard(card.cardId)
    .then(() => {
      card.card.remove();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() => {
      popupFormDeleteCard.renderLoading(false);
    })
}

const popupFormDeleteCard = new PopupDeleteConfirmation('#popup-confirmation', confirmFormFunction);
function handleDeleteCard(objectToDelete) {
  popupFormDeleteCard.open(objectToDelete)
}

popupFormDeleteCard.setEventListener();

// Функция создания новой карточки для добавления на страницу;
function createCard (dataCard) {
  const card = new Card (dataCard, templateSelector, userId, handleCardClick, handleToggleLike, handleDeleteCard);
  return(card.getCard());
}

//Создание экземпляра класса Section

const section = new Section(
  (item) => {
    const cardElement = createCard (item);
    section.addItem(cardElement);
    },
  '.location__list'
);

// Создание на странице первоначальных карточек
const initialCardsPromise = api.getInitialCards();

Promise.all([userInfoPromise, initialCardsPromise])
  .then(([userInfoResult, initialCardsResult]) => {
    userId = userInfoResult._id;
    userInfo.setUserInfo(userInfoResult.name, userInfoResult.about, userInfoResult.avatar);
    section.renderItems(initialCardsResult);
})
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
});

//РАБОТА С POPUP ДЛЯ ДОБАВЛЕНИЯ КАРТОЧКИ

// Функция сохранения данных, введенных в форму добавления карточки места 
function handleCardFormSave(data) {
  popupFormAddCard.renderLoading(true, 'Создание...');
  api.addCard(data['place-name'], data['place-link'])
    .then((dataCard) => {
      const card = createCard (dataCard);
      section.addItem(card);
    })
    .catch((err) => {
      console.log(err.message);
    })
    .finally(() => {
      popupFormAddCard.renderLoading(false);
    })
}

// Создание экземпляра класса PopupWithForm c формой создания карточки
const popupFormAddCard = new PopupWithForm('#popup-place', handleCardFormSave);

// Добавление слушателя на открытие формы создания новой карточки
cardAddButton.addEventListener('click', () => { popupFormAddCard.open(); });

//Вызов метода установки слушателей на события формы создания карточки и ее очистку
popupFormAddCard.setEventListener();


//РАБОТА С POPUP ДЛЯ ИЗМЕНЕНИЯ ПРОФИЛЯ

// Функция сохранения данных пользователя из полей формы Profile на страницу
function handleProfileFormSave (data) {
  popupFormProfile.renderLoading(true, 'Сохранение...');
  api.editProfile(data['name-profile'], data['description-profile'])
  .then(() => {
    const currentUserInfo = userInfo.getUserInfo();
    userInfo.setUserInfo(data['name-profile'], data['description-profile'], currentUserInfo.avatar)
  })
  .catch((err) => {
    console.log(err.message);
  })
    .finally(() => {
      popupFormProfile.renderLoading(false);
    })
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

//РАБОТА С POPUP АВАТАР

// Функция сохранения аватара пользователя из полей формы Avatar на страницу
function handlePopupAvatarFormSave(data) {
  popupFormAvatar.renderLoading(true, 'Сохранение...');
  api.updateAvatar(data['avatar-link'])
    .then ((data) => {
      userInfo.setUserInfo (data.name, data.about, data.avatar);
    })
    .catch((err) => {
      console.log(err.message);
    })
    .finally(() => {
      popupFormAvatar.renderLoading(false);
    })
}

// Создание экземплара класса PopupWithForm c формой редактирования аватара
const popupFormAvatar = new PopupWithForm('#popup-avatar', handlePopupAvatarFormSave);

popupFormAvatar.setEventListener();
avatarEditButton.addEventListener('click', () => {
  const dataUserInfo = userInfo.getUserInfo();
  const data = {'avatar-link': dataUserInfo.avatar}; //- получаем ссылку на текущий аватар
  popupFormAvatar.fillInFields(data)// - заполняем поля
  popupFormAvatar.open();
});

//РАБОТА С POPUP ZOOM IMAGE

const popupZoomImage = new PopupWithImage('#popup-zoom');
popupZoomImage.setEventListener();

// Открытие popup - просмотр увеличенной картинки
function handleCardClick(title, link) {
  popupZoomImage.open(title, link);  
}

// ВАЛИДАЦИЯ ФОРМ
const enableValidation = (validationConfig) => {
  let formList = Array.from(document.forms);         //Создание массива всех форм страницы 
  formList = formList.filter((item) => {
    return item.id.includes('save');
  });
  
  formList.forEach((formElement) => {                // Добавление обработчика на каждую форму с типом submit
    const formValidator = new FormValidator(formElement, validationConfig);
    formValidator.enableValidation();
  });
}

enableValidation(validationConfig);
