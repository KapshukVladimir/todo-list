import { AbstractComponent } from './abstract.component.js';
import { renderElement, insertPosition, setOpacityToLi } from '../../utils.js';
import { TodoItemComponent } from './todo-item.component.js';
import { taskData } from '../../services/task.services.js';
import { CheckBoxComponent } from './check-box.component.js';
import { DeleteButtonComponent } from './delete-button.component.js';
import { EditButtonComponent } from './edit-button.component.js';
import { EditModalComponent } from './edit-modal.component.js';


export class TodoListComponent extends AbstractComponent {

  constructor() {
    super();
    this.tasks = taskData;
  }
  _render() {
    this.getElement().innerHTML = "";

    this.tasks.forEach((value) => {
      const todoItemComponent = new TodoItemComponent(value);
      const todoItemElement = todoItemComponent.getElement();
      renderElement(this.getElement(), todoItemElement, insertPosition.BEFOREEND);

      const checkBoxComponent = new CheckBoxComponent(value),
        checkBoxElement = checkBoxComponent.getElement();
      renderElement(todoItemElement, checkBoxElement, insertPosition.BEFOREBEGIN);

      checkBoxComponent.addEventListeners();

      if (!value.isChecked) {
        setOpacityToLi(todoItemElement,'1');
        checkBoxComponent.getElement().checked = false;
      }else {
        setOpacityToLi(todoItemElement, '.3')
      }

      const deleteButtonComponent = new DeleteButtonComponent(value),
            deleteButtonElement = deleteButtonComponent.getElement();
      renderElement(todoItemElement, deleteButtonElement, insertPosition.BEFOREBEGIN);
      deleteButtonComponent.addEventListeners();

      const editButtonComponent = new EditButtonComponent(value),
            editButtonElement = editButtonComponent.getElement();
      renderElement(todoItemElement, editButtonElement, insertPosition.BEFOREBEGIN);
      editButtonComponent.addEventListeners();

    })

  }


  _getTemplate() {
    return (`<ul class="todo-list"></ul>`);
  }

  addEventListeners() {
    window.addEventListener('add-task', this._dataChange.bind(this));
    window.addEventListener('update-tasks', this._dataChange.bind(this));
    window.addEventListener('delete-task', this._dataChange.bind(this));
    window.addEventListener('edit-task', this._dataChange.bind(this));

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
