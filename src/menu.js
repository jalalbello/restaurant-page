import { coffee } from './config.js';
import { createElementWithId, createElementWithTextContent, createElementWithClass } from './functions.js';

export function loadMenu(){

    const main = document.createElement("main")
    const menuContainer = createElementWithId('div', 'menu-container');

    for (const coffeeType of coffee) {
        const coffeeItem = createElementWithClass('div', 'coffee-item');

        const coffeeName = createElementWithTextContent('h3', coffeeType.name);
        coffeeItem.appendChild(coffeeName);

        const coffeeImg = createElementWithClass('img', 'coffee-img');
        coffeeImg.src = coffeeType.img;
        coffeeItem.appendChild(coffeeImg);
        menuContainer.appendChild(coffeeItem);
        main.appendChild(menuContainer)
    }
    const content = document.querySelector('#content');
    const footer = document.querySelector('footer');
    content.insertBefore(main, footer);
}