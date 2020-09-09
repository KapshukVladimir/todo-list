import { createElement } from "../../utils.js";

export class AbstractComponent {
  constructor() {
    this._element = null;
  }
  _getTemplate() {
    // ошибка ...
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate())
    }

    return this._element;
  }
}
