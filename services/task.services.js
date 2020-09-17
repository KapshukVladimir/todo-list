import { getTimeCreated, getTimeDeadline, uniqueId } from '../utils.js'

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
  taskData.push(task);
  emitEvent('add-task', task);
}

export function editTask(task) {
  const taskIndex = taskData.findIndex(el => el.id === task.id);

  if (taskIndex !== -1) {
    taskData.splice(taskIndex, 1, task);
  }
  emitEvent('edit-task', task);
}

export function taskDone(task) {
  taskData.filter((el) => {

    if (el !== task) {
      el = task;
      return el;
    }
  });

  emitEvent('update-tasks', task);
}

export function showAllTasks() {
  emitEvent('show-all');
}

export function showActiveTasks() {
  let sorted = taskData.filter(el => !el.isChecked);
  emitEvent('show-active', {detail: sorted});
}

export function showCompletedTasks() {
  let sorted = taskData.filter(el => el.isChecked);
  emitEvent('show-completed', {detail: sorted});

}

export function clearCompletedTasks() {
  taskData = taskData.filter(task => task.isChecked === false);
  emitEvent('clear-completed', {detail: taskData});
}

export function deleteTask(task) {
  taskData = taskData.filter(t => t.id !== task.id);
  emitEvent('delete-task', task);
}

export function emitEvent(type, data) {
  window.dispatchEvent(new CustomEvent(type, data));
}


