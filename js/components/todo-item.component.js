import { AbstractComponent } from './abstract.component.js';

export class TodoItemComponent extends AbstractComponent {

  constructor(tasksData, taskIndex, taskTimeCreated) {
    super();
    this._title = tasksData.taskTitle;
    this._id = taskIndex + 1;
    this._timeCreated = taskTimeCreated;
  }

  _getTemplate() {
    return (`<li class="todo-item"><strong>${this._id}.&nbsp</strong>${this._timeCreated}. ${this._title}</li>`)
  }
}
