import { AbstractComponent } from './abstract.component.js';
import { addTask } from '../../services/task.services.js';
import { formStyle, formValidator, regExp } from '../../utils.js';

export class ModalWindowComponent extends AbstractComponent {

  _isValidate(task) {
    return task.taskTitle !== '' && task.timeCreated !== '' && task.timeDeadline !== '' && formValidator(task.title, regExp)
  }

  _newTaskModal(event) {
    event.preventDefault();

    const taskTitle = this.getTaskTitle().value,
      timeCreated = this.getCreationDate().value,
      timeDeadline = this.getExpirationDate().value,
      isChecked = false,
      formWrapper = this.getElement();

    if (this._isValidate({taskTitle, timeCreated, timeDeadline, isChecked: false})) {

      
      formStyle(formWrapper);
    }else {
      this.getTaskTitle().style.outline = '1px solid red';
    }
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
