import { AbstractComponent } from './abstract.component.js';
import { renderElement, insertPosition } from '../../utils.js';
import { TodoItemComponent } from './todo-item.component.js';
import { taskData } from '../../services/task.services.js';
import { CheckBoxComponent } from './check-box.component.js';
import { DeleteButtonComponent } from './delete-button.component.js';

export class TodoListComponent extends AbstractComponent {

  constructor() {
    super();
    this.tasks = taskData;
  }
  _render() {
    this.getElement().innerHTML = "";

    this.tasks.forEach((value,id) => {
      const todoItemComponent = new TodoItemComponent(value, id, value.timeCreated, value.timeDeadline);
      const todoItemElement = todoItemComponent.getElement();
      renderElement(this.getElement(), todoItemElement, insertPosition.BEFOREEND);

      const checkBoxComponent = new CheckBoxComponent(value),
        checkBoxElement = checkBoxComponent.getElement();
      renderElement(todoItemElement, checkBoxElement, insertPosition.BEFOREBEGIN);

      checkBoxComponent.addEventListeners();

      if (!value.isChecked) {
        todoItemElement.style.opacity = '1';
        checkBoxComponent.getElement().checked = false;
      }else {
        todoItemElement.style.opacity = '.3';
      }

      const deleteButtonComponent = new DeleteButtonComponent(value),
            deleteButtonElement = deleteButtonComponent.getElement();
      renderElement(todoItemElement, deleteButtonElement, insertPosition.BEFOREBEGIN);

      deleteButtonComponent.addEventListeners();
    });
  }

  _getTemplate() {
    return (`<ul class="todo-list"></ul>`);
  }

  addEventListeners() {
    window.addEventListener('add-task', this._dataChange.bind(this));
    window.addEventListener('update-tasks', this._dataChange.bind(this));
    window.addEventListener('delete-task', this._dataChange.bind(this));
  }

  _afterCreate() {
    this.addEventListeners();
    this._render();
  }

  _dataChange() {
    this.tasks = taskData;
    this._render();
  }
}
