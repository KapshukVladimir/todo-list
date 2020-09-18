import { AbstractComponent } from './abstract.component.js';
import { EditModalComponent } from './edit-modal.component.js';
import { insertPosition, renderElement } from '../../utils.js';


export class EditButtonComponent extends AbstractComponent{
  constructor(task) {
    super();
    this._task = task;
  }

  _showEditModal() {
    const editModalComponent = new EditModalComponent(this._task),
      editModalElement = editModalComponent.getElement(),
      bodyElement = document.querySelector('body');
    renderElement(bodyElement, editModalElement, insertPosition.BEFOREEND);
    editModalComponent.addEventListeners();

    editModalElement.style.display = 'block';
    window.overlay.style.display = 'block';
  }

  addEventListeners() {
    this.getElement().addEventListener('click', this._showEditModal.bind(this));
  }

  _getTemplate() {
    return (`<button class="pencil-btn">&#9999;</button>`)
  }
}
