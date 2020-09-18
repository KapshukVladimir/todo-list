import { addTask } from './services/task.services.js';

export const ENTER_KEY = 13,
  VALIDATION_MESSAGE = 'Please, use only string and number symbols',
  MAIN_ELEMENT = document.querySelector('.main'),
  regExp = /[a-zа-я0-1]+$/i;

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

// export const sortType = {
//   BY_TEXT: 'sort-text',
//   BY_DATE: 'sort-date'
// };

export function formValidator(taskTitle, regExp) {

  if (regExp.test(taskTitle.value)){
    addTask({taskTitle: taskTitle.value, isChecked: false});
    tooltipUpdater({visibility: 'hidden', outline: '1px solid #000'});
  } else {
    tooltipUpdater({visibility: 'visible', outline: '1px solid red'});
  }
  taskTitle.value = "";
}

export function tooltipUpdater({visibility, outline}) {
  document.querySelector('.tooltip').style.visibility = visibility;
  document.querySelector('.form-input').style.outline = outline;
}

export function setOpacityToLi(element,opacity) {
  element.style.opacity = opacity;
}

export function formatMonth(date) {
  const month = date.getMonth() + 1;
  return month < 10 ? `0${month}` : month
}

export function getTimeCreated() {
  const timeCreated = new Date(),
        timeCreatedDay = timeCreated.getDate();

  return `${timeCreated.getFullYear()}-${formatMonth(new Date())}-${timeCreatedDay}`;
}

export function getTimeDeadline() {
  const timeDeadline = new Date(),
        timeCreatedDay = timeDeadline.getDate() + 1;

  return `${timeDeadline.getFullYear()}-${formatMonth(new Date())}-${timeCreatedDay}`;
}

export function uniqueId() {
  return Math.random().toString(32).substr(2,7);
}

export function formStyle(formWrapper) {
  formWrapper.lastChild.previousSibling.reset();
  formWrapper.style.display = 'none';
  formWrapper.nextElementSibling.style.display = 'none';
}
