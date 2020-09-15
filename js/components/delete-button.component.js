import { AbstractComponent } from './abstract.component.js';
import { deleteTask } from '../../services/task.services.js';

export class DeleteButtonComponent extends AbstractComponent {

  constructor(deletedTask) {
    super();
    this._deletedTask = deletedTask;
  }

  _deleteItem() {
    const answer = confirm('Delete the task ?');

    if (answer) {
      deleteTask(this._deletedTask);
    }
  }

  addEventListeners() {
    this.getElement().addEventListener('click', this._deleteItem.bind(this));
  }

  _getTemplate() {
    return (`<button class="delete-btn">&times;<button>`)
  }
}
