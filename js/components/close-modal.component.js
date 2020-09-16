import { AbstractComponent } from './abstract.component.js';

export class CloseModalComponent extends AbstractComponent {
  constructor() {
    super();
  }
  _closeEditModal(e) {
    document.querySelector('.edit-modal-wrapper').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
  }
  addEventListeners() {
    this.getElement().firstChild.addEventListener('click', this._closeEditModal.bind(this));
  }
  _getTemplate() {
    return (`<div class="close-wrapper"><button class="close-modal-btn">&times;</button></div>`)
  }
}
