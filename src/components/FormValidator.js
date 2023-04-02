
export default class FormValidator {
  constructor(formElement, config) {
    this._config = config;
    this._formElement = formElement;
    
    this._getInputFromForm();
    this._getSaveButtonFromForm();
  }

  // Вид config = {
  // inputErrorClass: ...,
  // saveButtonInactiveClass: ...,
  // popupInputSelector: ...
  //}
  
  // Выбираем из формы все Input
  _getInputFromForm () {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.popupInputSelector));
  }
  
  // Находим кнопку Сохранить в форме
  _getSaveButtonFromForm() {
    this._saveButton = this._formElement.querySelector(`#${this._formElement.id}-button`);
  }
  
  // Метод добавления стиля ошибки и текста сообщения об ошибке для невалидного поля
  _showInputError (inputElement, validationMessage) {
    inputElement.classList.add(this._config.inputErrorClass); // добавляем ему класс со стилями ошибки
    this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);  // выбираем span, в котором нужно показать текст ошибки
    this._errorElement.textContent = validationMessage; // выводим текст ошибки в span
  }

  // Метод отключения стиля ошибки и текста сообщения об ошибке для валидного поля
  _hideInputError (inputElement) {
    inputElement.classList.remove(this._config.inputErrorClass);  // убираем ему класс со стилями ошибки
    this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`); // выбираем span, в котором нужно убрать текст ошибки
    this._errorElement.textContent = '';
  }
  
  //  Функция проверки полей на соответствие условиям заполнения
  _checkValidity (inputElement) {
    if (!inputElement.validity.valid) {    // Проверяем валидность введенных данных
        this._showInputError(inputElement, inputElement.validationMessage);  // если данные не соответствуют условиям, то получаем правда и показываем ошибку
      } else {
        this._hideInputError(inputElement);  // если данные соответствуют условиям, то получаем ложь и скрываем ошибку
      }
  }

  // Функция проверки значений, всех полей формы на валидность
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  
  // Функция активации/деактивации кнопки сохранения формы
  _toggleButtonState () {
    if (this._hasInvalidInput()) {            // Проверка состояние валидности inputs
      this._saveButton.classList.add(this._config.saveButtonInactiveClass);
      this._saveButton.disabled = true;
    } else {
      this._saveButton.classList.remove(this._config.saveButtonInactiveClass);
      this._saveButton.disabled = false;
    }
  }
  
  // Добавление полям input обработчиков событий ввода
  _setEventListeners () {
    this._toggleButtonState ();
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkValidity(inputElement);
        this._toggleButtonState (); // Вызов проверки состояния кнопки сохранения
      });
    });
  }

  // Добавление обработчика форм на обновление
 _setResetListeners () {
    this._formElement.addEventListener('reset', () => {
      setTimeout(() => {
          this._inputList.forEach(inputElement => {
            this._hideInputError(inputElement);
          });
        this._toggleButtonState();
      }, 100);
    });
 }
 
  enableValidation () {
    this._setEventListeners (); // установка слушателя изменения поля ввода
    this._setResetListeners();// установка слушателя открытия формы
  }
}


