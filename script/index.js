const editButton = document.querySelector('.profile__edit-button'); // Поиск кнопки редактирования профиля
const popupEdit = document.querySelector('.popup'); //Поиск всплывающего окна редактирования
const popupForm = document.querySelector('.popup__content')  //Поиск формы редактирования
const сloseButton = document.querySelector('.popup__close-button'); // Поиск кнопки закрытия формы без сохранения

let profileName = document.querySelector('.profile__name') //Поиск поля имени профиля
let profileDescription = document.querySelector('.profile__description') //Поиск поля описания профиля
let fieldName = document.querySelector('#name') //Поиск поля ввода имени профиля
let fieldDescription = document.querySelector('#description') // Поиск поля ввода описания профиля

function popupOpen() {
  fieldName.value = profileName.textContent;
  fieldDescription.value = profileDescription.textContent;
  popupEdit.classList.add('popup_opened');
}

function popupClose() {
  popupEdit.classList.remove('popup_opened');
}

function popupSaveAndClose(evt) {
  evt.preventDefault();
  profileName.textContent = fieldName.value;
  profileDescription.textContent = fieldDescription.value;
  popupClose();
}

editButton.addEventListener('click', popupOpen);
сloseButton.addEventListener('click', popupClose);
popupForm.addEventListener('submit', popupSaveAndClose);