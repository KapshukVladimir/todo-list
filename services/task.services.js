export let taskData = [
  { id: 1, taskTitle: 'Купить картошку.'},
  { id: 2, taskTitle: 'Купить сыр.'},
  { id: 3, taskTitle: 'Купить морковку.'},
  { id: 4, taskTitle: 'Купить мясо.'},
  { id: 5, taskTitle: 'Вкусно поесть!'},
];

export function addTask(task) {
  taskData.push(task);
  console.log(task);
  emitEvent('update-tasks', task)
}
export function emitEvent(type, data) {
  window.dispatchEvent(new CustomEvent(type, data));
}



