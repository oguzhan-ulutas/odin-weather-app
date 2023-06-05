import getWeather from './get-weather';
import {
  newElementCreator,
  addPlaceholder,
  addContent,
  appendElement,
  addValue,
} from './building-blocks';

// Creating search form
const form = newElementCreator('form');
const input = newElementCreator('input');
const button = newElementCreator('button');
addPlaceholder(input, 'Search a location');
addContent(button, 'Search');
addValue(input, 'istanbul');
appendElement(form, input, button);

let location = '';

export function getSearchLocation() {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    location = event.target[0].value;
  });
}

export const weatherInfo = getWeather(location);
