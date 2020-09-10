import { AbstractComponent } from './abstract.component.js';
import { renderElement, insertPosition } from "../../utils.js";
import { TodoItemComponent } from './todo-item.component.js';
import { taskData } from '../../services/task.services.js';


export class TodoListComponent extends AbstractComponent {

  constructor() {
    super();
    this.tasks = taskData;
  }

  _render() {
    this.getElement().innerHTML = "";
    this.tasks.forEach((value,id) => {
      const todoItemComponent = new TodoItemComponent(value, id, value.timeCreated, value.timeDeadline);
      const todoItemElement = todoItemComponent.getElement();
      renderElement(this.getElement(), todoItemElement, insertPosition.BEFOREEND);
    });
  }

  _getTemplate() {
    return (`<ul class="todo-list"></ul>`);
  }

  addEventListeners() {
    window.addEventListener('update-tasks', this._dataChange.bind(this));
  }

  _afterCreate() {
    this.addEventListeners();
    this._render();
  }

  _dataChange() {
    this.tasks = taskData;
    this._render();
  }
}
