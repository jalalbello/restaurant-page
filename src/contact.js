import { contact } from './config.js';
import {createElementWithTextContent, createElementWithId, createElementWithClass} from "./functions.js"

export function loadContact() {
    const div = createElementWithId('div', 'main');
    const main = createElementWithClass('main', 'main');
  
    const p1 = createElementWithTextContent('p', contact.phone);
    const p2 = createElementWithTextContent('p', contact.address);
  
    const imgElement = document.createElement('img');
    imgElement.src = contact.img;
    imgElement.classList.add('location');
  

    const content = document.querySelector('#content');
    const footer = document.querySelector('footer');
    content.insertBefore(main, footer);
    main.appendChild(div);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(imgElement);
    };
  
  
