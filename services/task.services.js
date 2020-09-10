import { getTimeCreated, getTimeDeadline, uniqueId } from '../utils.js'

export let taskData = [
  { id: 1, taskTitle: 'Купить картошку.', timeCreated: getTimeCreated(), timeDeadline: getTimeDeadline()},
  { id: 2, taskTitle: 'Купить сыр.' , timeCreated: getTimeCreated(), timeDeadline: getTimeDeadline()},
  { id: 3, taskTitle: 'Купить морковку.', timeCreated: getTimeCreated(), timeDeadline: getTimeDeadline()},
  { id: 4, taskTitle: 'Купить мясо.', timeCreated: getTimeCreated(), timeDeadline: getTimeDeadline()},
  { id: 5, taskTitle: 'Вкусно поесть!', timeCreated: getTimeCreated(), timeDeadline: getTimeDeadline()},
];

export function addTask(task) {
  task.id = uniqueId();
  task.timeCreated = getTimeCreated();
  task.timeDeadline = getTimeDeadline();
  taskData.push(task);
  emitEvent('update-tasks', task);
}
export function emitEvent(type, data) {
  window.dispatchEvent(new CustomEvent(type, data));
}

