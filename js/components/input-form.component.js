import { AbstractComponent } from './abstract.component.js';
import { addTask } from '../../services/task.services.js';
import { ENTER_KEY } from "../../utils.js";
import { VALIDATION_MESSAGE } from "../../utils.js";
import { PlusButtonComponent } from "./plus-button.component.js";
import { insertPosition, renderElement } from "../../utils.js";

export class InputFormComponent extends AbstractComponent {

  constructor() {
    super();
  }
  _afterCreate() {

    const plusButtonComponent = new PlusButtonComponent(),
          plusButtonElement = plusButtonComponent.getElement();
    plusButtonComponent.addEventListeners(); // 3 потом это
    renderElement(this.getElement(), plusButtonElement, insertPosition.BEFOREEND);
  }

  _newTask(event) {

    if (event.keyCode === ENTER_KEY) {
      event.preventDefault();
      let taskTitle = this.getElement().firstChild.nextSibling[0];
      const regExp = /[a-zа-я0-1]+$/i;

      if (regExp.test(taskTitle.value)){
          addTask({taskTitle: taskTitle.value, isChecked: false});

          document.querySelector('.tooltip').style.visibility = 'hidden';
          document.querySelector('.form-input').style.outline = "1px solid #000";
          taskTitle.value = "";
      } else {
        document.querySelector('.tooltip').style.visibility = 'visible';
        document.querySelector('.form-input').style.outline = "1px solid red";
        taskTitle.value = "";
      }
    }
  }

  _getTemplate() {
    return (`<div class="form-container">
                <form class="todo-form">
                    <input class="form-input" type="text">
                    <span class="tooltip">${VALIDATION_MESSAGE}</span>
                </form>
             </div>`)
  }

  addEventListeners() {
    this.getElement().addEventListener('keypress', this._newTask.bind(this));
  }
}

