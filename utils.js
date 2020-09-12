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

export function getTimeCreated() {
  let timeCreated = new Date();
  return `${timeCreated.getDate()}.${timeCreated.getMonth() + 1}.${timeCreated.getFullYear()}`;
}
export function getTimeDeadline() {
  let timeDeadLine = new Date();
  return `${timeDeadLine.getDate() + 1}.${timeDeadLine.getMonth() + 1}.${timeDeadLine.getFullYear()}`;
}

export function uniqueId() {
  return Math.random().toString(32).substr(2,7);
}

export const ENTER_KEY = 13,
  VALIDATION_MESSAGE = 'Please, use only string and number symbols';
