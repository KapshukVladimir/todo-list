import {renderElement} from "../utils";

export let taskData = [
  { id: 1, taskTitle: 'Купить картошку.'},
  { id: 2, taskTitle: 'Купить сыр.'},
  { id: 3, taskTitle: 'Купить морковку.'},
  { id: 4, taskTitle: 'Купить мясо.'},
  { id: 5, taskTitle: 'Вкусно поесть!'},
];

export function addTask(newTask) {
  taskData.push(newTask);
  renderElement()
}



