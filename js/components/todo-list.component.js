import { AbstractComponent } from './abstract.component.js';
import { renderElement, insertPosition } from "../../utils.js";
import { TodoItemComponent } from './todo-item.component.js';


export class TodoListComponent extends AbstractComponent {
  constructor() {
    super();
    this.tasks = window.data;
  }
  _render() {
    this.tasks.data.forEach(value => {
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
