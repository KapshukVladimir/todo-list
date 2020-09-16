import { getTimeCreated, getTimeDeadline, uniqueId } from '../utils.js'

export let taskData = [
  { id: 1, taskTitle: 'Купить картошку.', timeCreated: getTimeCreated(), timeDeadline: getTimeDeadline(), isChecked: false},
  { id: 2, taskTitle: 'Купить сыр.' , timeCreated: getTimeCreated(), timeDeadline: getTimeDeadline(), isChecked: false},
  { id: 3, taskTitle: 'Купить морковку.', timeCreated: getTimeCreated(), timeDeadline: getTimeDeadline(), isChecked: false},
  { id: 4, taskTitle: 'Купить мясо.', timeCreated: getTimeCreated(), timeDeadline: getTimeDeadline(), isChecked: false},
  { id: 5, taskTitle: 'Вкусно поесть!', timeCreated: getTimeCreated(), timeDeadline: getTimeDeadline(), isChecked: false},
];

export function addTask(task) {
  task.id = uniqueId();
  task.timeCreated = task.timeCreated || getTimeCreated();
  task.timeDeadline = task.timeDeadline || getTimeDeadline();
  taskData.push(task);
  emitEvent('add-task', task);
}

export function editTask(task) {
  console.log(task);
  const taskIndex = taskData.findIndex(el => el.id === task.id);
  if (taskIndex !== -1) {
    taskData.splice(taskIndex, 1, task);
  }
  emitEvent('edit-task', task);
  console.log(taskData, "changed");
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

export function deleteTask(task) {
  taskData = taskData.filter(t => t.id !== task.id);
  emitEvent('delete-task', task);
}

export function emitEvent(type, data) {
  window.dispatchEvent(new CustomEvent(type, data));
}


