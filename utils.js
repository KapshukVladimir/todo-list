import { addTask } from './services/task.services.js';

export function renderElement(container, element, position) {

  switch (position) {
    case insertPosition.BEFOREBEGIN: container.prepend(element);
      break;
    case insertPosition.BEFOREEND: container.append(element);
      break;
    default: container.prepend(element);
  }
}

export function createElement(template) {
  const element = document.createElement('div');
  element.innerHTML = template;
  return element.firstChild;
}

export const insertPosition = {
  BEFOREBEGIN: 'beforebegin',
  BEFOREEND: 'beforeend'
};

export function formValidator(taskTitle, regExp) {

  if (regExp.test(taskTitle.value)){
    addTask({taskTitle: taskTitle.value, isChecked: false});
    toolTipUpdater({visibility: 'hidden', outline: '1px solid #000'});
    taskTitle.value = "";
  } else {
    toolTipUpdater({visibility: 'visible', outline: '1px solid red'});
    taskTitle.value = "";
  }
}

export function toolTipUpdater({visibility, outline}) {
  document.querySelector('.tooltip').style.visibility = visibility;
  document.querySelector('.form-input').style.outline = outline;
}

export function setOpacityToLi(element,opacity) {
  element.style.opacity = opacity;
}

export function getTimeCreated() {
  const timeCreated = new Date();
  let timeCreatedMonth = timeCreated.getMonth() + 1;
  if (+timeCreatedMonth < 10) {
    timeCreatedMonth = "0" + timeCreatedMonth
  }
  let timeCreatedDay = timeCreated.getDate();
  if (+timeCreatedDay < 10) {
    timeCreatedDay = "0" + timeCreatedDay
  }
  return `${timeCreated.getFullYear()}-${timeCreatedMonth}-${timeCreatedDay}`;
}

export function getTimeDeadline() {
  const timeDeadline = new Date();
  let timeCreatedMonth = timeDeadline.getMonth() + 1;
  if (+timeCreatedMonth < 10) {
    timeCreatedMonth = "0" + timeCreatedMonth
  }
  let timeCreatedDay = timeDeadline.getDate() + 1;
  if (+timeCreatedDay < 10) {
    timeCreatedDay = "0" + timeCreatedDay
  }
  return `${timeDeadline.getFullYear()}-${timeCreatedMonth}-${timeCreatedDay}`;
}

export function uniqueId() {
  return Math.random().toString(32).substr(2,7);
}

export const ENTER_KEY = 13,
  VALIDATION_MESSAGE = 'Please, use only string and number symbols',
  MAIN_ELEMENT = document.querySelector('.main');
