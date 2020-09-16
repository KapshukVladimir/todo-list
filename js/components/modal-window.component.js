import { AbstractComponent } from "./abstract.component.js";
import { addTask } from "../../services/task.services.js";

export class ModalWindowComponent extends AbstractComponent {
  constructor() {
    super();
  }

  _isValidate(task) {
    return task.newTaskTitle !== '' && task.newCreationDate !== '' && task.newExpirationDate !== '';
  }

  _newTaskModal(event) {
    event.preventDefault();

    const newTaskTitle = this.getTaskTitle().value,
      newCreationDate = this.getCreationDate().value,
      newExpirationDate = this.getExpirationDate().value,
      newIsChecked = false;

    if (this._isValidate({newTaskTitle, newCreationDate, newExpirationDate, newIsChecked: false})) {
      addTask({
        taskTitle: newTaskTitle,
        timeCreated: newCreationDate,
        timeDeadline: newExpirationDate,
        isChecked: newIsChecked
      });
      this.getElement().lastChild.previousSibling.reset();
      this.getElement().style.display = 'none';
      this.getElement().nextElementSibling.style.display = 'none';
    }
    // сделать обработку ошибки
  }

  _cancelWindow(event) {
    event.preventDefault();
    this.getElement().lastChild.previousSibling.reset();
  }

  getTaskTitle() {
    return this.getElement().querySelector('#input-text');
  }

  getCreationDate() {
    return this.getElement().querySelector('#creation-date');
  }

  getExpirationDate() {
    return this.getElement().querySelector('#expiration-date');
  }

  getButtonSave() {
    return this.getElement().querySelector('#save');
  }

  getButtonCancel() {
    return this.getElement().querySelector('#cancel')
  }

  addEventListeners() {
    this.getButtonSave().addEventListener('click', this._newTaskModal.bind(this));
    this.getButtonCancel().addEventListener('click',this._cancelWindow.bind(this));
  }

  _getTemplate() {
    return (`<div class="modal-wrapper">
                <form class="modal-form">
                    <input type="text" id="input-text" class="modal-input-text">
                    <input type="date" id="creation-date">
                    <input type="date" id="expiration-date">
                    <button id="save">Save</button>
                    <button id="cancel">Cancel</button>
                </form>
            </div>
    `)
  }
}
