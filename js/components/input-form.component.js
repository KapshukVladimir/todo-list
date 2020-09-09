import { AbstractComponent } from './abstract.component.js';

export class InputFormComponent extends AbstractComponent {
  constructor() {
    super();
  }
  _render() {

  }
  _getTemplate() {
    return (`<form class="todo-form"><input type="text"></form>`)
  }
}
