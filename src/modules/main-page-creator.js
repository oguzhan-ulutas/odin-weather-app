import {
  elementSelector,
  newElementCreator,
  addClass,
  addContent,
  appendElement,
  addHref,
} from './building-blocks';
import { form, weatherInfo } from './search';

// Selecting main content div in the html
const content = elementSelector('#content');

// Creating main container div
const mainContainer = newElementCreator('div');
addClass(mainContainer, 'main-container');

// Creating footer element
const footer = newElementCreator('div');
addClass(footer, 'footer');
addContent(footer, 'The Odin Project 2023 - Coded by ');

// Creating github link to my github page
const githubLink = newElementCreator('a');
addContent(githubLink, 'oguzhan-ulutas');
addHref(githubLink, 'https://github.com/oguzhan-ulutas');
appendElement(footer, githubLink);

// Creating weather info holder card
export const weatherCard = newElementCreator('div');
addClass(weatherCard, 'weather-card');

export default function mainPageCreator() {
  appendElement(content, mainContainer, footer);
  appendElement(mainContainer, form, weatherCard);
}
