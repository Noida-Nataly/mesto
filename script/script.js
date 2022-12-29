const editButton = document.querySelector(".profile__edit-button"); // Поиск кнопки редактирования профиля
const popupEdit = document.querySelector(".popup"); //Поиск всплывающего окна редактирования
const popupForm = document.querySelector(".popup__content")  //Поиск формы редактирования
const сloseButton = document.querySelector(".popup__close-button"); // Поиск кнопки закрытия формы без сохранения
const saveButton = document.querySelector(".popup__save-button"); // Поиск кнопки сохранения отредактированного профиля

let profileName = document.querySelector(".profile__name") //Поиск поля имени профиля
let profileDescription = document.querySelector(".profile__description") //Поиск поля описания профиля


editButton.addEventListener('click', popupOpen);
сloseButton.addEventListener('click', popupClose);
popupForm.addEventListener('submit', popupSaveAndClose);

function popupOpen() {
  document.querySelector("#name").value = profileName.textContent;
  document.querySelector("#description").value = profileDescription.textContent;
  popupEdit.classList.add('popup_opened');
}

function popupClose() {
  popupEdit.classList.remove('popup_opened');
}

function popupSaveAndClose(evt) {
  evt.preventDefault();
  profileName.textContent = document.querySelector("#name").value;
  profileDescription.textContent = document.querySelector("#description").value;
  popupEdit.classList.remove('popup_opened');
}

