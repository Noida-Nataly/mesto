import Popup from './Popup.js';
export class PopupWithForm extends Popup {
  constructor (popupId, saveFormFunction) {
    super(popupId);
    this._saveFormFunction = saveFormFunction;
    this._form = this._popup.forms.item(0);
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
  
  // Метод установки слушателя на кнопку сохранения данных submit
  setEventListener() {
    super.setEventListener();
    this._saveButton.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._saveFormFunction(this._getInputValues());
    })
  }
   // Метод очистки формы при закрытии popup
  close() {
    super.close();
    this._form.reset();
  }
  
  open(data) {
    super.open();
    this._inputList.forEach((item) => {
      item.value = data[item.getAttribute('name')];
    });
  }
}