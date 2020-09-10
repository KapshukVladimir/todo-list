import {AbstractComponent} from "./abstract.component.js";

export class PlusButtonComponent extends AbstractComponent {
  constructor() {
    super();
  }
  _showModal(event) { // 2 Потом это
    alert('modal');
  }
  addEventListeners() { // 1 сначала это
    this.getElement().firstChild.addEventListener('click', this._showModal.bind(this));
  }
  _getTemplate() {
    return (`<div><button class="plus-btn">&plus;</button></div>`)
  }
}
