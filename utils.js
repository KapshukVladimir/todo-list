export function renderElement(container, element) {
  container.prepend(element);
}
export function createElement(template) {
  const element = document.createElement('div');
  element.innerHTML = template;
  return element.firstChild;
}
