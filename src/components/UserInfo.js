export default class UserInfo {
  constructor ({nameProfileSelector, infoProfileSelector}) {
    this._nameProfileSelector = document.querySelector(nameProfileSelector);
    this._infoProfileSelector = document.querySelector(infoProfileSelector);
  }
  
  // Метод получения данных профиля
  getUserInfo() {
    return {
      name: this._nameProfileSelector.textContent,
      info: this._infoProfileSelector.textContent
    }
  }
  
  //Метод сохранения данных профиля
  setUserInfo(name, info) {
    this._nameProfileSelector.textContent = name;
    this._infoProfileSelector.textContent = info;
  }
}