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
    this.tasks.forEach(value => {
      console.log(value);
      const todoItemComponent = new TodoItemComponent(value);
      const todoItemElement = todoItemComponent.getElement();
      renderElement(this.getElement(), todoItemElement, insertPosition.BEFOREEND)
    })
  }
  _getTemplate() {
    return (`<ul class="todo-list"></ul>`)
  }
  _afterCreate() {
    this._render();
  }
}
