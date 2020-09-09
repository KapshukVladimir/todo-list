import { AbstractComponent } from './abstract.component.js';
import { addTask } from '../../services/task.services.js';

export class InputFormComponent extends AbstractComponent {
  constructor() {
    super();
  }
  _render() {

  }
  _newTask(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      let newTask = this.getElement().firstChild.value;
      addTask(newTask);
      this.getElement().firstChild.value = "";
    }
  }
  _getTemplate() {
    return (`<form class="todo-form"><input type="text"></form>`)
  }
  addEventListeners() {
    this.getElement().addEventListener('keypress', this._newTask.bind(this))
  }
}
