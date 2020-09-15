import { AbstractComponent } from './abstract.component.js';

export class CloseModalComponent extends AbstractComponent {
  constructor() {
    super();
  }
  _getTemplate() {
    return (`<div class="close-wrapper"><button class="close-modal-btn">&times;</button></div>`)
  }
}
