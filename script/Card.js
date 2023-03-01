export default class Card {
  constructor(name, link, templateSelector, openPopupZoom) {
    this._name = name;
    this._link = link;
    this._getTemplate(templateSelector);
    this._openPopupZoom = openPopupZoom;
  }

  // Поиск шаблона карточки
  _getTemplate(templateSelector){
    this._template = document.querySelector(templateSelector);
  }
  
  //Создание копии шаблона карточки
  _getCardTemplate () {
    this._card = this._template.content.cloneNode(true);
  }
  
  // Удаление карточки по нажатию кнопки 
  _deleteCard(evt) {
    this._card = evt.target.closest('.location__card'); // выбор карточки, из которой вызвали событие
    this._card.remove();
  }

  // Добавление/удаление лайка по нажатию кнопки
  _toggleLike(evt) {
    evt.target.classList.toggle('location__like-button_active');
  }
  
  //Установка слушателей на элементы карточки
  _setEventListeners (){
    this._card.querySelector('.location__like-button').addEventListener('click', this._toggleLike); // добавляем отслеживание лайка на вновь созданные карты
    this._card.querySelector('.location__delete-button').addEventListener('click', this._deleteCard); // добавляем отслеживание удаления на вновь созданные карты
    this._image.addEventListener('click', () => {this._openPopupZoom(this._name, this._link)}); // добавляем отслеживание клика по вновь созданной картинке
  }
    
  // Функция создания новой карточки (передача в шаблон карточки - имени, ссылки и описания(= имени)
  getCard () {
    this._getCardTemplate();
    this._image = this._card.querySelector('.location__image');
    this._card.querySelector('.location__title').textContent = this._name; // добавляем карточке наименование
    this._image.src = this._link;               // добавляем картинке ссылку
    this._image.alt = this._name;                // добавляем картинке описание
    this._setEventListeners();
    return this._card;
  }
}