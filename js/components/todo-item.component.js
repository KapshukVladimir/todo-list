import { AbstractComponent } from './abstract.component.js';

export class TodoItemComponent extends AbstractComponent {
  constructor(tasksData) {
    super();
    this._title = tasksData.taskTitle;
    this._id = tasksData.id;
  }
  _getTemplate() {
    return (`<li class="todo-item"><strong>${this._id}.&nbsp</strong>${this._title}</li>`)
  }
}
