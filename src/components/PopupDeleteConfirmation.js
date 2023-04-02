import Popup from './Popup.js';
export default class PopupDeleteConfirmation extends Popup {
  constructor (popupId, confirmFormFunction) {
    super(popupId);
    this._cofirmFormFunction = confirmFormFunction;
    this._form = this._popup.getElementsByTagName('form')[0];
    this._confirmButton = this._form.querySelector('.popup__confirmation');
  }

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._cofirmFormFunction(this._objectToDelete);
      this.close();
    });
  }
  
  open(objectToDelete) {
    super.open();
    this._objectToDelete = objectToDelete;
  }
}
