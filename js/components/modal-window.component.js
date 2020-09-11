import { AbstractComponent } from "./abstract.component.js";

export class ModalWindowComponent extends AbstractComponent {
  constructor() {
    super();
  }

  _getTemplate() {
    return (`<div class="modal-wrapper"></div>
    `)
  }
}
