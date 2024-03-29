import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor (popupId) {
    super(popupId);
    this._image = this._popup.querySelector('.popup__zoom-image');
    this._comment = this._popup.querySelector('.popup__comment');
    
  }
  
  // Метод добавления картинки при открытии popup
  open(title, link) {
    super.open();
    this._image.src = link;
    this._comment.textContent = title;
    this._image.alt = title;
  }
} 