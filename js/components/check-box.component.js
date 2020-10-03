import { AbstractComponent } from './abstract.component.js';
import { taskDone } from '../../services/task.services.js';

export class CheckBoxComponent extends AbstractComponent {

  constructor(task) {
    super();
    this._task = task;
  }

  _isCompleted() {
    this._task.isChecked = !this._task.isChecked;
    taskDone();
    this.getElement().setAttribute('checked','true');
  }

  addEventListeners() {
    this.getElement().addEventListener('click', this._isCompleted.bind(this));
  }

  _getTemplate() {
    return (`<input type="checkbox" checked="${this._task.isChecked}" id="check-box" class="check-box" />`)
  }
}
