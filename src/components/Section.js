export default class Section {
  constructor (renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  
  // Метод отрисовки карточки
  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }
  
  //Добавление DOM-элемента в контейнер
  addItem(element) {
  this._container.prepend(element);
  }
}