import { AbstractComponent } from './abstract.component.js';
import { sortByText, sortByDate } from '../../services/task.services.js';

export class SortComponent extends AbstractComponent {

  _sortByText() {
    if (this.getTextOption().value === 'sort-text') {
      sortByText();
    }else if (this.getTextOption().value === 'sort-date') {
      sortByDate();
    }
  }

  getTextOption() {
    return document.querySelector('.select')
  }

  addEventListeners() {
    this.getTextOption().addEventListener('change', this._sortByText.bind(this));
  }

  _getTemplate() {
    return (`<select class="select">
                <option>Choose</option>
                <option value="sort-text" class="by-text">Sorted by text</option>
                <option value="sort-date">Sorted by date</option>
            </select>`)
  }
}
