import { renderElement, insertPosition, MAIN_ELEMENT } from '../utils.js';
import { TodoListComponent } from './components/todo-list.component.js';
import { InputFormComponent } from './components/input-form.component.js';
import { BlockButtonsComponent } from './components/block-buttons.component.js';
import {SortComponent} from './components/sort.component.js';


export class AppComponent {

  init() {
    //Инициализация всех компонентов (new)
    const todoListComponent = new TodoListComponent(),
      todoListElement = todoListComponent.getElement();
    renderElement(MAIN_ELEMENT, todoListElement, insertPosition.BEFOREEND );

    const blockButtonsComponent = new BlockButtonsComponent(),
          selectDoneElement = blockButtonsComponent.getElement();
    renderElement(MAIN_ELEMENT, selectDoneElement, insertPosition.BEFOREEND);
    blockButtonsComponent.addEventListeners();

    const sortComponent = new SortComponent(),
      sortElement = sortComponent.getElement();
    renderElement(MAIN_ELEMENT, sortElement, insertPosition.BEFOREBEGIN);
    sortComponent.addEventListeners();

    const inputFormComponent = new InputFormComponent(),
          inputFormElement = inputFormComponent.getElement();
    inputFormComponent.addEventListeners();
    renderElement(MAIN_ELEMENT, inputFormElement, insertPosition.BEFOREBEGIN);


  }
}
