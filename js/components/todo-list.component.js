import { AbstractComponent } from './abstract.component.js';


export class TodoListComponent extends AbstractComponent {
  constructor() {
    super();
  }
  _getTemplate() {
    return (`<ul class="todo-list"></ul>`)
  }


}
