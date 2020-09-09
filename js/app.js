import { HeaderComponent } from "./components/header.component.js";
import { renderElement, insertPosition } from "../utils.js";
import { TodoListComponent } from "./components/todo-list.component.js";
import { TaskServices } from "../services/task.services.js";
import { InputFormComponent } from './components/input-form.component.js';

export class AppComponent {
  constructor() {
    // ...
    window.data = new TaskServices();
  }
  init() {
    //Инициализация всех компонентов (new)

    const headerComponent = new HeaderComponent("Hello, I'm Header!!!"),
          headerElement = headerComponent.getElement(),
          bodyElement = document.querySelector('body');
    renderElement(bodyElement, headerElement, insertPosition.BEFOREBEGIN);

    const todoListComponent = new TodoListComponent(),
          todoListElement = todoListComponent.getElement(),
          mainElement = document.querySelector('.main');
    renderElement(mainElement, todoListElement, insertPosition.BEFOREEND );

    const inputFormComponent = new InputFormComponent();
    const inputFormElement = inputFormComponent.getElement();
    renderElement(mainElement, inputFormElement, insertPosition.BEFOREBEGIN)

  }
}
