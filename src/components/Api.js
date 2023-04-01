export default class Api {
  constructor(baseUrl, token) {
    this.baseUrl = baseUrl;
    this.token = token;
  }
  
  _sendRequest(url, parametrs) {
    parametrs.headers = {
      authorization: this.token,
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
  
  
  getUserInfo() {
    return this._sendRequest(this.baseUrl+'/users/me', {});
  }
  
  getInitialCards() {
    return this._sendRequest(this.baseUrl+'/cards', {} );
  }
  
  editProfile(name, about) {
    return this._sendRequest(this.baseUrl+'/users/me', {
      method: 'PATCH',
        body: JSON.stringify({
        name: name,
        about: about
      })
    });
  }
  
}