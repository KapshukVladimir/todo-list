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

