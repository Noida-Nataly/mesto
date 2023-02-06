
// Добавления стиля ошибки  и текста сообщения об ошибке для невалидного поля
const showInputError = (formElement,inputElement, errorMessage) => {
  inputElement.classList.add('popup__input_type_error');
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
};

const hideInputError = (inputElement, formElement) => {
  inputElement.classList.remove('popup__input_type_error');
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = '';
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, saveButton) => {
 if (hasInvalidInput(inputList)) {
   saveButton.classList.add('popup__save-button_inactive');
   saveButton.disabled = true;
 }
  else {
   saveButton.classList.remove('popup__save-button_inactive');
   saveButton.disabled = false;
  }
};

//  Функция проверки полей на соответствие условиям заполнения
const checkValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(inputElement, formElement);
  }
};

// Добавление полям input обработчиков событий ввода
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const saveButton = formElement.querySelector(`#${formElement.id}-save`);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkValidity(formElement, inputElement);
      toggleButtonState(inputList, saveButton);
    });
  });
};

// Выбор форм и добавление обработчиков событий
const enableValidation = () => {
  const formList = Array.from(document.forms);         //Создание массива всех форм страницы 
  formList.forEach((formElement) => {                // Добавление обработчика на каждую форму с типом submit
    formElement.addEventListener('submit', function (evt) {        
      evt.preventDefault();                           // отмена стандартного поведения браузера для форм с типом submit
    });
    setEventListeners(formElement);                  // вызов обработчика полей с типом input
  });
}

enableValidation ();