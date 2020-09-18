import { AbstractComponent } from './abstract.component.js';
import { renderElement, insertPosition, setOpacityToLi, MAIN_ELEMENT } from '../../utils.js';
import { TodoItemComponent } from './todo-item.component.js';
import { taskData } from '../../services/task.services.js';
import { CheckBoxComponent } from './check-box.component.js';
import { DeleteButtonComponent } from './delete-button.component.js';
import { EditButtonComponent } from './edit-button.component.js';
import { SortComponent } from './sort.component.js';

export class TodoListComponent extends AbstractComponent {

  constructor() {
    super();
    this.tasks = taskData;
  }

  getTodoElement(value) {
    const todoItemComponent = new TodoItemComponent(value),
          todoItemElement = todoItemComponent.getElement();
    renderElement(this.getElement(), todoItemElement, insertPosition.BEFOREEND);

    return todoItemElement;
  }

  renderCheckbox(value, todoEl) {
    const checkBoxComponent = new CheckBoxComponent(value),
          checkBoxElement = checkBoxComponent.getElement();
    renderElement(todoEl, checkBoxElement, insertPosition.BEFOREBEGIN);
    checkBoxComponent.addEventListeners();
    return checkBoxElement;
  }

  renderDeleteButton(value, todoEl) {
    const deleteButtonComponent = new DeleteButtonComponent(value),
          deleteButtonElement = deleteButtonComponent.getElement();

    renderElement(todoEl, deleteButtonElement, insertPosition.BEFOREBEGIN);
    deleteButtonComponent.addEventListeners();
  }

  renderEditButton(value, todoEl) {
    const editButtonComponent = new EditButtonComponent(value),
          editButtonElement = editButtonComponent.getElement();
    renderElement(todoEl, editButtonElement, insertPosition.BEFOREBEGIN);
    editButtonComponent.addEventListeners();
  }

  setOpacity({todoElement, checkbox, isChecked}) {

    if (!isChecked) {
      setOpacityToLi(todoElement,'1');
      checkbox.checked = false;
    }else {
      setOpacityToLi(todoElement, '.3')
    }
  }
  _render(arrayTasks) {
    this.getElement().innerHTML = "";

    arrayTasks.forEach((value) => {
      const todoElement = this.getTodoElement(value),
        checkbox = this.renderCheckbox(value, todoElement),
        opacityProps = {
          todoElement,
          checkbox,
          isChecked: value.isChecked
        };
      this.renderDeleteButton(value, todoElement);

      this.setOpacity(opacityProps);

      this.renderCheckbox(value, todoElement);

      this.renderEditButton(value, todoElement);
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
    window.addEventListener('show-active', this._dataChange.bind(this));
    window.addEventListener('show-completed', this._dataChange.bind(this));
    window.addEventListener('show-all', this._dataChange.bind(this));
    window.addEventListener('clear-completed', this._dataChange.bind(this));
    window.addEventListener('sort-by-text', this._dataChange.bind(this));
    window.addEventListener('sort-by-date', this._dataChange.bind(this));
  }

  _afterCreate() {
    this.addEventListeners();
    this._render(this.tasks);

    const sortComponent = new SortComponent(),
      sortElement = sortComponent.getElement();
    renderElement(MAIN_ELEMENT, sortElement, insertPosition.BEFOREBEGIN);
    sortComponent.addEventListeners();
  }

  _dataChange({ detail: { data } }) {
      this._render(data)
  }
}
