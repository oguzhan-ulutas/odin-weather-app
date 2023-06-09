import getWeather from './get-weather';
import {
  newElementCreator,
  addPlaceholder,
  addContent,
  appendElement,
  addValue,
} from './building-blocks';
import weatherCardPopulator from './weather-card-populator';

// Creating search form
export const form = newElementCreator('form');
const input = newElementCreator('input');
const button = newElementCreator('button');
addPlaceholder(input, 'Search a location');
addContent(button, 'Search');
addValue(input, 'istanbul');
appendElement(form, input, button);

let location = 'istanbul';
export let weatherInfo = await getWeather(location);

export function getSearchLocation() {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    location = event.target[0].value;
    weatherInfo = await getWeather(location);
    weatherCardPopulator();
    console.log(weatherInfo);
  });
}
