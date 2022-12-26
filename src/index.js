import './style.css';
import cafeBg from './img/cafeBg.jpg';
import {loadHome} from './home.js';
import {loadMenu} from './menu.js';
import {
  createElementWithTextContent,
  createElementWithId,
  createElementWithClass,
  toggleActiveClass,
  removeFromMain
} from './functions.js';
import { loadContact } from './contact';

const shopName = 'Caramel Cafe';
const h1 = document.createElement('h1');
h1.textContent = shopName;
h1.id = 'shop-name';

const nav = document.createElement('nav');
const ul = document.createElement('ul');

const navItems = ['Home', 'Menu', 'Contact'];
navItems.forEach((item, index) => {
  const li = document.createElement('li');
  li.classList.add('nav-item');
  if (index === 0) {
    li.classList.add('active');
  }
  li.textContent = item;
  li.tabIndex = 1;
  ul.appendChild(li);
});

nav.appendChild(ul);

const header = document.createElement('header');

const body = document.querySelector('body');
body.style.backgroundImage = `url(${cafeBg})`;

const footer = createElementWithClass('footer', 'footer');
const currentYear = new Date().getFullYear();
const footerP = createElementWithTextContent(
  'p',
  `Copyright ${currentYear} | Jalalbello`
);

const a = document.createElement('a');
a.setAttribute('href', 'https://github.com/jalalbello');

const i = document.createElement('i');
i.className = 'fab fa-github';
i.setAttribute('aria-hidden', 'true');

a.appendChild(i);
footerP.appendChild(a);

document.addEventListener('DOMContentLoaded', function() {
  const content = document.querySelector('#content');
  header.append(h1, nav);
  content.append(header);
  footer.append(footerP);
  content.append(footer);
  loadHome();
});


document.addEventListener('DOMContentLoaded', function() {
  const content = document.querySelector('#content');
  footer.append(footerP);
  content.append(footer);
  const parentElement = document.querySelector('nav');
  parentElement.addEventListener('click', (event) => {
    if (
      event.target.matches('li.nav-item') &&
      !event.target.classList.contains('active')
    ) {
      const textContent = event.target.textContent;
      if (textContent === "Home"){
        toggleActiveClass(event);
        removeFromMain()
        loadHome()
      }else{
        toggleActiveClass(event)
      }
      if (textContent === "Menu"){
        toggleActiveClass(event);
        removeFromMain()
        loadMenu()
      }else{
        toggleActiveClass(event)
      }
      if (textContent === "Contact"){
        toggleActiveClass(event);
        removeFromMain()
        loadContact()
      }else{
        toggleActiveClass(event)
      }
    }
  });
});


