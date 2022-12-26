 export function createElementWithId(tag, id) {
    const element = document.createElement(tag);
    element.id = id;
    return element;
  }

  export function createElementWithTextContent(tag, textContent) {
    const element = document.createElement(tag);
    element.textContent = textContent;
    return element;
}

export function createElementWithClass(tag, className) {
    const element = document.createElement(tag);
    element.classList.add(className);
    return element;
  }
  

export function toggleActiveClass(event) {
  const navItems = event.target.parentElement.children;
  for (const item of navItems) {
    item.classList.remove('active');
  }
  event.target.classList.add('active');
}

export function removeFromMain() {
// Get a reference to the main element
var mainElement = document.querySelector("main");
mainElement.remove()
}
