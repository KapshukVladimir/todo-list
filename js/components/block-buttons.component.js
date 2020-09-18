import { AbstractComponent } from './abstract.component.js';
import { showActiveTasks, showCompletedTasks, showAllTasks, clearCompletedTasks } from '../../services/task.services.js';

export class BlockButtonsComponent extends AbstractComponent {

  _showAllTasks() {
    showAllTasks();
  }

  _showActiveTasks() {
    showActiveTasks();
  }

  _showCompletedTasks() {
    showCompletedTasks();
  }

  _showClearTasks() {
    clearCompletedTasks();
  }

  getAllBtn() {
    return document.querySelector('.all');
  }
  getActiveBtn() {
    return document.querySelector('.active');
  }
  getCompletedBtn() {
    return document.querySelector('.completed');
  }
  getClearBtn() {
    return document.querySelector('.clear');
  }

  addEventListeners() {
    this.getAllBtn().addEventListener('click', this._showAllTasks.bind(this));
    this.getActiveBtn().addEventListener('click', this._showActiveTasks.bind(this));
    this.getCompletedBtn().addEventListener('click', this._showCompletedTasks.bind(this));
    this.getClearBtn().addEventListener('click', this._showClearTasks.bind(this));
  }

  _getTemplate() {
    return (`<div class="block-buttons">   
                <button class="all">All</button>    
                <button class="active">Active</button>    
                <button class="completed">Completed</button>    
                <button class="clear">Clear completed</button>    
            </div>`)
  }
}
