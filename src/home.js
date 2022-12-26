import founder from "./img/founder.jpg"
import { homeData } from './config.js';
import {createElementWithTextContent, createElementWithId, createElementWithClass} from "./functions.js"

export function loadHome() {
    const div = createElementWithId('div', 'main');
    const main = createElementWithClass('main', 'main');
  
    const p1 = createElementWithTextContent('p', homeData.title);
    const p2 = createElementWithTextContent('p', homeData.tagline);
    const p3 = createElementWithTextContent('p', homeData.callToAction);
  
    const imgElement = document.createElement('img');
    imgElement.src = founder;
    imgElement.classList.add('founder');
  

    const content = document.querySelector('#content');
    const footer = document.querySelector('footer');
    content.insertBefore(main, footer);
    main.appendChild(div);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(imgElement);
    div.appendChild(p3);
    };
  
  
