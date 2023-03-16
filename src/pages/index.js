import {initialCards, validationConfig} from '../utils/dataCards.js'; // Подключение массива карточек для генерации галереи при загрузке страницы
import Card from "../components/Card.js";
import FormValidator from '../components/FormValidator.js';
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";


const profileEditButton = document.querySelector('.profile__edit-button'); // Поиск кнопки редактирования профиля
const popupProfileEdit = document.querySelector('#popup-profile'); // Поиск всплывающего окна редактирования профиля
const cardAddButton = document.querySelector('.profile__add-button'); // Поиск кнопки добавления новой карточки
const popupAddCard = document.querySelector('#popup-place'); // Поиск всплывающего окна добавления карточки места
const popupProfileForm = document.forms['form-profile'];  // Поиск форм редактирования информации
const popupCardAddForm = document.forms['form-place'] ; // Поиск форм редактирования информации
//const closeButtons = document.querySelectorAll('.close-popup'); // Поиск кнопок закрытия формы без сохранения
const popupZoom = document.querySelector('#popup-zoom'); // Поиск модального окна увеличенной картинки
const profileName = document.querySelector('.profile__name'); // Поиск места хранения имени профиля
const profileDescription = document.querySelector('.profile__description'); // Поиск места хранения описания профиля
const fieldName = document.querySelector('#name-profile'); // Поиск поля ввода имени профиля
const fieldDescription = document.querySelector('#description-profile'); // Поиск поля ввода описания профиля
const fieldPlaceName = document.querySelector('#place-name'); // Поиск поля ввода названия места
const fieldPlaceLink = document.querySelector('#place-link'); // Поиск поля ввода ссылки на картинку
//const list = document.querySelector('.location__list'); // Поиск списка карточек (мест)
const templateSelector = '.place-template'; // Поиск шаблона карточки (места)
const zoomImage = popupZoom.querySelector('.popup__zoom-image'); // Поиск увеличиваемой картинки
const zoomComment = popupZoom.querySelector('.popup__comment'); // Поиск наименования увеличиваемой картинки

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

// Функция создания новой карточки для добавления на страницу;
function createCard (title, link) {
  const card = new Card (title, link, templateSelector, handleCardClick);
  return(card.getCard());
}

// функция сохранения данных, введенных в форму добавления карточки места 
function handleCardFormSave(evt) {
  const card = createCard (fieldPlaceName.value, fieldPlaceLink.value);
  section.addItem(card);
  evt.target.reset();
  evt.preventDefault();
}

// Создание экземпляра класса UserInfo
const userInfo = new UserInfo (
  {
    nameProfileSelector: '.profile__name',
    descriptionProfileSelector:'.profile__description'
  }
);

// Создание экземпляра класса PopupWithForm c формой редактирования профиля
const popupFormProfile = new PopupWithForm('popup-profile',
  ({name,info}) => {userInfo.setUserInfo({name,info});}
);

// Создание экземпляра класса PopupWithForm c формой создания карточки
const popupFormAddCard = new PopupWithForm('popup-place',
  ({title,link}) => {cardPlace.addItem(createCard({title,link}));}
);


// Очистка формы перед открытием
function resetInputForms(popup) {
  const formElement = popup.querySelector('.popup__content');
  formElement.reset();
}

// Отслеживание событий по кнопкам редактирования профиля и открытие формы редактирования профиля
profileEditButton.addEventListener('click', () => {
  open(popupProfileEdit);
  resetInputForms(popupProfileEdit);
  fieldName.value = profileName.textContent;
  fieldDescription.value = profileDescription.textContent;
});

// Отслеживание событий по кнопкам редактирования профиля и открытие формы добавления нового места
cardAddButton.addEventListener('click', () => {
  open(popupAddCard);
  resetInputForms(popupAddCard);
});

// Открытие popup - просмотр увеличенной картинки
function handleCardClick(title, link) {
  zoomComment.textContent = title;
  zoomImage.src = link;
  zoomImage.alt = title;
  open(popupZoom);  
}






function handleProfileFormSave(evt) {
    profileName.textContent = fieldName.value;
    profileDescription.textContent = fieldDescription.value;
    evt.preventDefault();
}



// Валидация форм
const enableValidation = (validationConfig) => {
  const formList = Array.from(document.forms);         //Создание массива всех форм страницы 
  formList.forEach((formElement) => {                // Добавление обработчика на каждую форму с типом submit
    const formValidator = new FormValidator(formElement, validationConfig);
    formValidator.enableValidation();
  });
}

enableValidation(validationConfig);

// Отслеживание событий по кнопкам с функцией сохранения данных, для всех элементов
popupProfileForm.addEventListener ('submit', handleProfileFormSave);
popupCardAddForm.addEventListener ('submit', handleCardFormSave);