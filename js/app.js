import { HeaderComponent } from "./components/header.component.js";
import { renderElement } from "../utils.js";
import { TodoListComponent } from "./components/todo-list.component.js";
import { TodoItemComponent } from "./components/todo-item.component.js";
import {TaskServices} from "../services/task.services";

export class AppComponent {
  constructor() {
    // ...
    window.data = new TaskServices();
  }
  init() {
    //Инициализация всех компонентов (new)

    const headerComponent = new HeaderComponent("Hello, I'm Header!!!"); // Инициализвция самого компонента
    const headerElement = headerComponent.getElement();                        // Получение созданного Элемента
    const bodyElement = document.querySelector('body');               // Получаем элемент в который хотим вставить
    renderElement(bodyElement, headerElement);                                 // Отрисовываем элементы

    const todoListComponent = new TodoListComponent();
    const todoListElement = todoListComponent.getElement();
    const mainElement = document.querySelector('.main');
    renderElement(mainElement, todoListElement );

    const todoItemComponent =  new TodoItemComponent();
    const todoItemElement = todoItemComponent.getElement();
    const todoElement = document.querySelector('.todo-list');
    renderElement(todoElement, todoItemElement);
  }
}
