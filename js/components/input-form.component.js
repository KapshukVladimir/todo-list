import { AbstractComponent } from './abstract.component.js';
import { addTask } from '../../services/task.services.js';
import { ENTER_KEY } from "../../utils.js";


export class InputFormComponent extends AbstractComponent {

  constructor() {
    super();
  }

  _newTask(event) {
    if (event.keyCode === ENTER_KEY) {
      event.preventDefault();
      let taskTitle = this.getElement().firstChild.value;
      addTask({taskTitle});
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
