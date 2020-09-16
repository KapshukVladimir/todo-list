import { AbstractComponent } from './abstract.component.js';
import { PlusButtonComponent } from './plus-button.component.js';
import { insertPosition, renderElement, formValidator, VALIDATION_MESSAGE, ENTER_KEY } from '../../utils.js';

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
      const taskTitle = this.getElement().firstChild.nextSibling[0];
      const regExp = /[a-zа-я0-1]+$/i;
      formValidator(taskTitle, regExp);
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

