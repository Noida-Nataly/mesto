export default class Card {
  constructor(dataCard, templateSelector, userId, handleCardClick, handleToggleLike, handleDeleteCard) {
    this._name = dataCard.name;
    this._link = dataCard.link;
    this._isMyCard = dataCard.owner._id === userId;
    this._likesCount = dataCard.likes.length;
    this._isMyLike = dataCard.likes.some((item) => {return item._id === userId});
    this._userId = userId;
    this.cardId = dataCard._id;
   
    this._getTemplate(templateSelector);
    this._handleCardClick = handleCardClick;
    this._handleToggleLike = handleToggleLike;
    this._handleDeleteCard = handleDeleteCard;
  }
  
  // Поиск шаблона карточки
  _getTemplate(templateSelector){
    this._template = document.querySelector(templateSelector);
  }
  
  //Создание копии шаблона карточки
  _getCardTemplate () {
    this.card = this._template.content.cloneNode(true);
    
    this._likeButton = this.card.querySelector('.location__like-button');
    this._deleteButton = this.card.querySelector('.location__delete-button');
    this._likesCountSpan = this.card.querySelector('.location__like-count');
  }
  
  // Удаление карточки по нажатию кнопки 
  // _deleteCard(evt) {
  //   this._card = evt.target.closest('.location__card'); // выбор карточки, из которой вызвали событие
  //   this._card.remove();
  // }

  // Добавление/удаление лайка по нажатию кнопки
  toggleLike(likes) {
    this._likeButton.classList.toggle('location__like-button_active');
    this._likesCount = likes.length;
    this._isMyLike = likes.some((item) => {return item._id === this._userId});
    this._likesCountSpan.textContent = this._likesCount;
  }
  
  //Установка слушателей на элементы карточки
  _setEventListeners(){
    this._likeButton.addEventListener('click', () => {this._handleToggleLike(this, this.cardId, this._isMyLike)}); // добавляем отслеживание лайка на вновь созданные карты
    this._image.addEventListener('click', () => {this._handleCardClick(this._name, this._link)}); // добавляем отслеживание клика по вновь созданной картинке
    
    if (this._isMyCard) {
      this._deleteButton.addEventListener('click', (evt) => {
        this.card = evt.target.closest('.location__card'); // выбор карточки, из которой вызвали событие
        this._handleDeleteCard(this)
      }); // добавляем отслеживание удаления на вновь созданные карты
    } 
  }
    
  //Метод установки состояния счетчика лайков
  _setLikeInfo() {
    this._likesCountSpan.textContent = this._likesCount;
    if(this._isMyLike) {
      this._likeButton.classList.add('location__like-button_active');
    }
  }
  
  // Функция создания новой карточки (передача в шаблон карточки - имени, ссылки и описания(= имени)
  getCard () {
    this._getCardTemplate();
    this._image = this.card.querySelector('.location__image');
    this.card.querySelector('.location__title').textContent = this._name; // добавляем карточке наименование
    this._image.src = this._link;               // добавляем картинке ссылку
    this._image.alt = this._name;                // добавляем картинке описание
    
    if (!this._isMyCard) {
      this._deleteButton.classList.add('location__delete-button_hidden')
    }
    
    this._setEventListeners();
    this._setLikeInfo();
    return this.card;
  }
}