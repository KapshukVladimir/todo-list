import {AbstractComponent} from "./abstract.component.js";
import { ModalWindowComponent } from "./modal-window.component.js";
import { renderElement, insertPosition} from "../../utils.js";
import { CloseModalComponent } from "./close-modal.component.js";

export class PlusButtonComponent extends AbstractComponent {
  constructor() {
    super();
  }

  _afterCreate() {
    const modalWindowComponent = new ModalWindowComponent(),
          modalWindowElement = modalWindowComponent.getElement();

    renderElement(this.getElement(), modalWindowElement, insertPosition.BEFOREEND);
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    renderElement(this.getElement(), overlay, insertPosition.BEFOREEND);

    modalWindowComponent.addEventListeners();

    const closeModalComponent = new CloseModalComponent(),
          closeModalElement = closeModalComponent.getElement();
    renderElement(modalWindowElement, closeModalElement, insertPosition.BEFOREBEGIN);
  }

  _showModal() { // 2 Потом это
    this.getElement().firstChild.nextElementSibling.style.display = 'block';
    this.getElement().lastChild.style.display = 'block';
  }

  _closeModal() {
    this.getElement().lastChild.previousElementSibling.style.display = "none";
    this.getElement().lastChild.style.display = 'none';
  }

  addEventListeners() { // 1 сначала это
    this.getElement().firstChild.addEventListener('click', this._showModal.bind(this));
    this.getElement().lastChild.previousSibling.firstChild.firstChild.addEventListener('click', this._closeModal.bind(this));
    this.getElement().lastChild.addEventListener('click', this._closeModal.bind(this));
  }

  _getTemplate() {
    return (`<div><button class="plus-btn">&plus;</button></div>`)
  }
}
