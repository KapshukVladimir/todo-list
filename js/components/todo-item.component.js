import { AbstractComponent } from './abstract.component.js';
import {formatMonth} from "../../utils.js";

export class TodoItemComponent extends AbstractComponent {
  id = this._uniqueId();

  constructor({taskTitle, timeCreated, timeDeadline}) {
    super();
    this._title = taskTitle;
    this._timeCreated = timeCreated || this.getTimeCreated();
    this._timeDeadline = timeDeadline || this.getTimeDeadline();
  }

  _getTemplate() {
    return (`<li class="todo-item">
                <h2 class="task-title">${this._title}</h2>
                <div class="create-date">Creation date: ${this._timeCreated}.</div>
                <div>Expiration date: ${this._timeDeadline}</div>
            </li>`)
  }

  _uniqueId() {
    return Math.random().toString(32).substr(2,7);
  }

  getTimeCreated() {
    const timeCreated = new Date(),
      timeCreatedDay = timeCreated.getDate();

    return `${timeCreated.getFullYear()}-${formatMonth(new Date())}-${timeCreatedDay}`;
  }

  getTimeDeadline() {
    const timeDeadline = new Date(),
      timeCreatedDay = timeDeadline.getDate() + 1;

    return `${timeDeadline.getFullYear()}-${formatMonth(new Date())}-${timeCreatedDay}`;
  }
}
