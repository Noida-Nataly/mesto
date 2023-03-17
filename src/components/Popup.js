export default class Popup {
  constructor(popupId) {
    this._popupId = popupId;
    this._getPopup();
    
  }
  _getPopup() {
  this._popup = document.querySelector(this._popupId);
  }

  // Метод закрытия popup
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('mousedown', this._closePopupOnOverlayClick);
    document.removeEventListener('keydown', this._closePopupOnEscapeClick);
  }

  // Метод закрытия popup по клику на оверлей
  _closePopupOnOverlayClick = (evt) => {
    if(evt.target.classList.contains('popup_opened')) {
      this.close();
    }
  }

  // Метод закрытия popup по клику на клавишу Escape
  _closePopupOnEscapeClick = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  // Метод добавления обработчиков при открытии popup и очистка полей формы
  _initPopup() {
    document.addEventListener('mousedown', this._closePopupOnOverlayClick);
    document.addEventListener('keydown', this._closePopupOnEscapeClick);
  }

  // Обработчик события открытия popup, добавление класса popup_opened
  open() {
    this._popup.classList.add('popup_opened');
    this._initPopup();
  }
  
  setEventListener() {
    //Выбираем кнопки закрытия popup
    this._closeButtons = this._popup.querySelectorAll('.close-popup');
    // Отслеживание событий по кнопкам с функцией закрытия popup, для всех элементов массива
    this._closeButtons.forEach(button => {
      button.addEventListener('click', () => this.close());
    });
  }

}

