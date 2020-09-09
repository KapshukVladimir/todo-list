import { AbstractComponent } from './abstract.component.js';

export class TodoItemComponent extends AbstractComponent {
  constructor() {
    super();
  }
  _getTemplate() {
    return (`<li class="todo-item">List item</li>`)
  }
}
