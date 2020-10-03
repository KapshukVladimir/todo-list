import { getTimeCreated, getTimeDeadline, uniqueId } from '../utils.js'
import {TodoItemComponent} from "../js/components/todo-item.component.js";

export let taskData = [
  { id: 1, taskTitle: 'Купить картошку.', timeCreated: getTimeCreated(), timeDeadline: getTimeDeadline(), isChecked: false},
  { id: 2, taskTitle: 'Купить сыр.' , timeCreated: getTimeCreated(), timeDeadline: getTimeDeadline(), isChecked: false},
  { id: 3, taskTitle: 'Купить морковку.', timeCreated: getTimeCreated(), timeDeadline: getTimeDeadline(), isChecked: true},
  { id: 4, taskTitle: 'Купить мясо.', timeCreated: getTimeCreated(), timeDeadline: getTimeDeadline(), isChecked: false},
  { id: 5, taskTitle: 'Вкусно поесть!', timeCreated: getTimeCreated(), timeDeadline: getTimeDeadline(), isChecked: false},
];

export function sortByText() {
  taskData = taskData.sort((a, b) => {
    let propA = a.taskTitle.toLowerCase(),
    propB = b.taskTitle.toLowerCase();

    if (propA < propB) {
      return - 1;
    } else if (propA > propB) {
      return 1
    }
  });
  emitEvent('sort-by-text', taskData);
}

export function sortByDate() {
  taskData = taskData.sort((a, b) => {
    let dateA = a.timeCreated,
      dateB = b.timeCreated;

    if (dateA < dateB) {
      return - 1;
    } else if (dateA > dateB) {
      return 1
    }
  });
  emitEvent('sort-by-date', taskData);
}

export function addTask(task) {
  task.id = uniqueId();
  task.timeCreated = task.timeCreated || getTimeCreated();
  task.timeDeadline = task.timeDeadline || getTimeDeadline();

  taskData = [...taskData, task];

  emitEvent('add-task', taskData);
}

export function editTask(task) {
  taskData.filter(el => {
    if (el.id !== task.id){
      el = task;
      return el
    }
  });

  emitEvent('edit-task', taskData);
}

export function taskDone() {
  taskData.filter(el => el.isChecked);
  emitEvent('update-tasks', taskData);
}

export function showAllTasks() {
  emitEvent('show-all', taskData);
}

export function showActiveTasks() {
  const sorted = taskData.filter(el => !el.isChecked);

  emitEvent('show-active', sorted);
}

export function showCompletedTasks() {
  const sorted = taskData.filter(el => el.isChecked);

  emitEvent('show-completed', sorted);

}

export function clearCompletedTasks() {
  taskData = taskData.filter(task => !task.isChecked);

  emitEvent('clear-completed', taskData);
}

export function deleteTask(task) {
  taskData = taskData.filter(t => t.id !== task.id);

  emitEvent('delete-task', taskData);
}

export function emitEvent(type, data) {
  window.dispatchEvent(new CustomEvent(type, {
    detail: {
      data
  }
  }));
}


