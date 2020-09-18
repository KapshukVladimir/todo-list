import { AbstractComponent } from './abstract.component.js';
import { sortByText, sortByDate } from '../../services/task.services.js';


export class SortComponent extends AbstractComponent {

  _sortItems() {
    const sortType =  this.getTextOption().value;
    return this.sortBy(sortType);
  }

  sortBy(sortType) {
    return sortType ? sortByText() : sortByDate();
  }

  getTextOption() {
    return document.querySelector('.select');
  }

  addEventListeners() {
    this.getTextOption().addEventListener('change', this._sortItems.bind(this));
  }

  _getTemplate() {
    return (`<select class="select">
                <option>Choose</option>
                <option value="sort-text" class="by-text">Sorted by text</option>
                <option value="sort-date">Sorted by date</option>
            </select>`)
  }
}
