import { getTimeCreated, uniqueId } from '../utils.js'
export let taskData = [
  { id: 1, taskTitle: 'Купить картошку.', timeCreated: getTimeCreated()},
  { id: 2, taskTitle: 'Купить сыр.' , timeCreated: getTimeCreated()},
  { id: 3, taskTitle: 'Купить морковку.', timeCreated: getTimeCreated()},
  { id: 4, taskTitle: 'Купить мясо.', timeCreated: getTimeCreated()},
  { id: 5, taskTitle: 'Вкусно поесть!', timeCreated: getTimeCreated()},
];

export function addTask(task) {
  task.id = uniqueId();
  task.timeCreated = getTimeCreated();
    taskData.push(task);
  console.log(task);
  emitEvent('update-tasks', task);
}
export function emitEvent(type, data) {
  window.dispatchEvent(new CustomEvent(type, data));
}

