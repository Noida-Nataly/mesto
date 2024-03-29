export default class Api {
  constructor(baseUrl, token) {
    this._baseUrl = baseUrl;
    this._token = token;
  }
  
  //Универсальный метод отправки запроса на сервер 
  _sendRequest(url, parametrs) {
    parametrs.headers = {
      authorization: this._token,
      'Content-Type': 'application/json'
    };
    return fetch(url, parametrs)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  
  //Получение информации о пользователе с сервера
  getUserInfo() {
    return this._sendRequest(this._baseUrl+'/users/me', {});
  }
  
  // Получение карточек с сервера 
  getInitialCards() {
    return this._sendRequest(this._baseUrl+'/cards', {} );
  }
  
  // Изменение данных пользователя на сервере
  editProfile(name, about) {
    return this._sendRequest(this._baseUrl+'/users/me', {
      method: 'PATCH',
        body: JSON.stringify({
        name: name,
        about: about
      })
    });
  }
  
  // Обновление аватара на сервере
  updateAvatar(link) {
    return this._sendRequest(this._baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      body: JSON.stringify({
        avatar: link
      })
    });
  }
  
  // Добаление новой карточки на сервер
  addCard(name, link) {
    return this._sendRequest(this._baseUrl + '/cards', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        link: link
      })
    });
  }
  
  // Метод отправки постановки и снятия лайка на сервер
  toggleLike(cardId, isMyLike) {
    if(isMyLike) {
      return this._sendRequest(this._baseUrl + `/cards/${cardId}/likes`, {
        method: 'DELETE'
      })
    } else {
      return this._sendRequest(this._baseUrl + `/cards/${cardId}/likes`, {
        method: 'PUT'
      })
    }
  }
  
  //Метод удаления карточки на сервере
  deleteCard (cardId) {
    return this._sendRequest(this._baseUrl + `/cards/${cardId}`, {
      method: 'DELETE'
    })
  }
  
}