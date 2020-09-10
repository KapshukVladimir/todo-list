import { AbstractComponent } from "./abstract.component.js";

export class HeaderComponent extends AbstractComponent {

  constructor(name) {
    super();
    this._name = name;
  }

  _getTemplate() {
    return ( `<header class="header">
                    <h1 class="h1">${this._name}</h1>
              </header>` )
  }
}
