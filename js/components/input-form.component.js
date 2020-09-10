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
      let taskTitle = this.getElement().firstChild;
      if (/[a-zа-я0-1]+$/i.test(taskTitle.value)){
        addTask({taskTitle: taskTitle.value});
        document.querySelector('.tooltip').style.display = 'none';
        document.querySelector('.form-input').style.outline = "1px solid #000";
        taskTitle.value = "";
      } else {
        document.querySelector('.tooltip').style.display = 'block';
        document.querySelector('.form-input').style.outline = "1px solid red";
        taskTitle.value = "";
      }

    }
  }

  _getTemplate() {
    return (`<form class="todo-form"><input class="form-input" type="text"><span class="tooltip">No special symbols allowed</form>`)
  }

  addEventListeners() {
    this.getElement().addEventListener('keypress', this._newTask.bind(this))
  }
}
