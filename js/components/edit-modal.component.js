import { AbstractComponent } from './abstract.component.js';

import { editTask } from '../../services/task.services.js';

export class EditModalComponent extends AbstractComponent {
  constructor(task) {
    super();
    this._task = task;
  }
  _closeModal(event) {
    this.getElement().style.display = 'none';
    window.overlay.style.display = "none";
    this._destroyed();
  }
  getCloseButton() {
    return document.querySelector('.close-edit');
  }
  _createEditedTask () {
    return {id: this._task.id, taskTitle: this.getTaskTitleBtn().value, timeCreated: this.getEditTimeCreated().value, timeDeadline: this.getEditTimeDeadline().value}
  }
  getEditTimeCreated(){
    return document.querySelector('.edit-time-created');
  }
  getEditTimeDeadline(){
    return document.querySelector('.edit-time-deadline');
  }
  _editTaskUpdate() {

    editTask(this._createEditedTask());
  }

  getSaveEditBtn() {
    return document.querySelector('.save-edit');
  }

  getTaskTitleBtn() {
    return document.querySelector('.input-text-edit');
  }

  addEventListeners(){
    this.getCloseButton().addEventListener('click', this._closeModal.bind(this));
    window.overlay.addEventListener('click', () => {
      window.overlay.style.display = "none";
      this._destroyed()
    });
    this.getSaveEditBtn().addEventListener('click', this._editTaskUpdate.bind(this));
  }

  _destroyed() {
    this.getElement().remove();
  }

  _getTemplate() {
    return (`<div class="edit-modal-wrapper">
                <form class="modal-form">
                    <button type="button" class="close-edit">&times;</button>
                    <input type="text" value="${this._task.taskTitle}" class="input-text-edit modal-input-text">
                    <input type="date" value="${this._task.timeCreated}"  class="edit-time-created">
                    <input type="date" value="${this._task.timeDeadline}" class="edit-time-deadline">
                    <button type="button" class="save-edit">Save</button>
                    <button class="cancel-edit">Cancel</button>
                </form>
            </div>`)
  }
}
