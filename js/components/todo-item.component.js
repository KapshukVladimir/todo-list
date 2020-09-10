import { AbstractComponent } from './abstract.component.js';

export class TodoItemComponent extends AbstractComponent {

  constructor(tasksData, taskIndex, taskTimeCreated, taskTimeDeadline) {
    super();
    this._title = tasksData.taskTitle;
    this._id = taskIndex + 1;
    this._timeCreated = taskTimeCreated;
    this._timeDeadline = taskTimeDeadline;

  }

  _getTemplate() {
    return (`<li class="todo-item">
                <div class="task-number">
                    <strong>${this._id}.&nbsp</strong>
                </div>
                <div class="create-date">Date create: ${this._timeCreated}.</div>
                <h2 class="task-title">${this._title}</h2>
                <div>Date expiration:${this._timeDeadline}</div>
            </li>`)
  }
}
