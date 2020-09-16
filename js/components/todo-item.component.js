import { AbstractComponent } from './abstract.component.js';

export class TodoItemComponent extends AbstractComponent {

  constructor(task) {
    super();
    this._title = task.taskTitle;
    this._timeCreated = task.timeCreated;
    this._timeDeadline = task.timeDeadline;
  }


  _getTemplate() {
    return (`<li class="todo-item">
                <h2 class="task-title">${this._title}</h2>
                <div class="create-date">Creation date: ${this._timeCreated}.</div>
                <div>Expiration date: ${this._timeDeadline}</div>
            </li>`)
  }
}
