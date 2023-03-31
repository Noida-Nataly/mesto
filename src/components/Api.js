export default class Api {
  constructor(baseUrl, token) {
    this.baseUrl = baseUrl;
    this.token = token;
  }
  
  _sendRequest(url, body) {
    return fetch(url, {
      headers: {
        authorization: this.token 
      }
    })
      .then(res => {return res.json()})
  }
  
  getUserInfo() {
    return this._sendRequest(this.baseUrl+'/users/me');
  }
  
  getInitialCards() {
    return this._sendRequest(this.baseUrl+'/cards', null );
  }
  
}