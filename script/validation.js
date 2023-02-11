const validationConfig = {
  inputErrorClass: 'popup__input_type_error',
  saveButtonInactiveClass: 'popup__save-button_inactive',
  popupInputSelector: '.popup__input'
}

// Функция добавления стиля ошибки и текста сообщения об ошибке для невалидного поля
const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
  inputElement.classList.add(validationConfig.inputErrorClass);
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
}

// Функция отключения стиля ошибки и текста сообщения об ошибке для валидного поля
const hideInputError = (inputElement, formElement, validationConfig) => {
  inputElement.classList.remove(validationConfig.inputErrorClass);
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = '';
}

// Функция проверки значений, всех полей формы на валидность
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

//Функция активации/деактивации кнопки сохранения формы
const toggleButtonState = (inputList, saveButton, validationConfig) => {
  if (hasInvalidInput(inputList)) {
   saveButton.classList.add(validationConfig.saveButtonInactiveClass);
   saveButton.disabled = true;
  }
  else {
   saveButton.classList.remove(validationConfig.saveButtonInactiveClass);
   saveButton.disabled = false;
  }
}

//  Функция проверки полей на соответствие условиям заполнения
const checkValidity = (formElement, inputElement, validationConfig) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
  } else {
    hideInputError(inputElement, formElement, validationConfig);
  }
}

// добавление обработчика форм на обновление // 
const setResetListener = (formElement, inputList, saveButton, validationConfig) => {
  formElement.addEventListener('reset', () => {
    setTimeout( () => {
      toggleButtonState(inputList, saveButton, validationConfig);
      inputList.forEach(inputElement => {
        hideInputError(inputElement, formElement, validationConfig);
      });
    }, 0);
  });
}

// Добавление полям input обработчиков событий ввода
const setEventListeners = (formElement, validationConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.popupInputSelector));
  const saveButton = formElement.querySelector(`#${formElement.id}-save`);
  toggleButtonState(inputList, saveButton, validationConfig);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkValidity(formElement, inputElement, validationConfig);
      toggleButtonState(inputList, saveButton, validationConfig);
    });
  });
  setResetListener(formElement, inputList, saveButton, validationConfig);
}

// Выбор форм и добавление обработчиков событий
const enableValidation = (validationConfig) => {
  const formList = Array.from(document.forms);         //Создание массива всех форм страницы 
  formList.forEach((formElement) => {                // Добавление обработчика на каждую форму с типом submit
    formElement.addEventListener('submit', function (evt) {        
      evt.preventDefault();// отмена стандартного поведения браузера для форм с типом submit
    });
    setEventListeners(formElement, validationConfig);                  // вызов обработчика полей с типом input
  });
}

enableValidation(validationConfig);