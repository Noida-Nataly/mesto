export default class UserInfo {
  constructor ({nameProfileSelector, infoProfileSelector}) {
    this._nameProfile = document.querySelector(nameProfileSelector);
    this._infoProfile = document.querySelector(infoProfileSelector);
  }
  
  // Метод получения данных профиля
  getUserInfo() {
    return {
      name: this._nameProfile.textContent,
      info: this._infoProfile.textContent
    }
  }
  
  //Метод сохранения данных профиля
  setUserInfo(name, info) {
    this._nameProfile.textContent = name;
    this._infoProfile.textContent = info;
  }
}