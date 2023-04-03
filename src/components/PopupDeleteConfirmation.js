import Popup from './Popup.js';
export default class PopupDeleteConfirmation extends Popup {
  constructor (popupId, confirmFormFunction) {
    super(popupId);
    this._cofirmFormFunction = confirmFormFunction;
    this._form = this._popup.getElementsByTagName('form')[0];
    this._saveButton = this._popup.querySelector('.popup__confirm-button');
    if(this._saveButton) {
      this._defaultText = this._saveButton.textContent;
    }
  }

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._cofirmFormFunction(this._objectToDelete, this._objectId);
    });
  }
  
  open(objectToDelete, objectId) {
    super.open();
    this._objectToDelete = objectToDelete;
    this._objectId = objectId;
  }
}
