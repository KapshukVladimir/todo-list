import { renderElement, insertPosition } from "../utils.js";
import { TodoListComponent } from "./components/todo-list.component.js";
import { InputFormComponent } from './components/input-form.component.js';

export class AppComponent {

  init() {
    //Инициализация всех компонентов (new)

    const todoListComponent = new TodoListComponent(),
          todoListElement = todoListComponent.getElement(),
          mainElement = document.querySelector('.main');
    renderElement(mainElement, todoListElement, insertPosition.BEFOREEND );

    const inputFormComponent = new InputFormComponent(),
          inputFormElement = inputFormComponent.getElement();
    inputFormComponent.addEventListeners();
    renderElement(mainElement, inputFormElement, insertPosition.BEFOREBEGIN);

  }
}
