import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor (popupId, saveFormFunction) {
    super(popupId);
    this._saveFormFunction = saveFormFunction;
    this._form = this._popup.getElementsByTagName('form')[0];
    this._saveButton = this._form.querySelector('.popup__save-button');
    this._inputList = this._form.querySelectorAll('input');
    this._inputValues = {};
  }
  
  // Метод сбора значений полей input формы
  _getInputValues() {
   this._inputList.forEach((item) => {
     const name = item.getAttribute('name');
     this._inputValues[name] = item.value;
   });
   return this._inputValues;
  }
  
  // Метод установки слушателя на сохранение данных из полей формы и их очистку
  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._saveFormFunction(this._getInputValues());
      this._form.reset();
    });
  }
  
  fillInFields(data) {
    this._inputList.forEach((item) => {
      item.value = data[item.getAttribute('name')];
    });
  }
}