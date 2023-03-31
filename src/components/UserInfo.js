export default class UserInfo {
  constructor ({nameProfileSelector, infoProfileSelector, avatarProfileSelector}) {
    this._nameProfile = document.querySelector(nameProfileSelector);
    this._infoProfile = document.querySelector(infoProfileSelector);
    this._avatarProfile = document.querySelector(avatarProfileSelector);
  }
  
  // Метод получения данных профиля
  getUserInfo() {
    return {
      name: this._nameProfile.textContent,
      info: this._infoProfile.textContent,
      avatar: this._avatarProfile.src
    }
  }
  
  //Метод сохранения данных профиля
  setUserInfo(name, info, src) {
    this._nameProfile.textContent = name;
    this._infoProfile.textContent = info;
    this._avatarProfile.src = src;
  }
}