import { weatherCard } from './main-page-creator';
import { weatherInfo } from './search';
import {
  elementSelector,
  newElementCreator,
  addClass,
  addContent,
  appendElement,
  addSrc,
  addAlt,
  addTitle,
  addId,
  addType,
  addName,
  addPlaceholder,
  isRequired,
  addValue,
  removeClass,
  addHref,
} from './building-blocks';

const weatherCardHeader = newElementCreator('div');
addClass(weatherCardHeader, 'weather-card-header');
const condition = newElementCreator('div');
addClass(condition, 'condition');
const name = newElementCreator('div');
addClass(name, 'name');
const date = newElementCreator('div');
addClass(date, 'date');
appendElement(weatherCardHeader, condition, name, date);

const temperature = newElementCreator('div');
addClass(temperature, 'temperature');

const details = newElementCreator('div');
addClass(details, 'details');
const feelsLike = newElementCreator('div');
const visibility = newElementCreator('div');
const humidity = newElementCreator('div');
const windSpeed = newElementCreator('div');
appendElement(details, feelsLike, visibility, humidity, windSpeed);

function addWeatherCardContent(weatherObject) {
  addContent(condition, weatherObject.condition);
  addContent(name, `${weatherObject.name}, ${weatherObject.country}`);
  addContent(date, `${weatherObject.dateFormatted} ${weatherObject.hour}`);
  addContent(temperature, `${weatherObject.temp_c}⁰ C`);
  addContent(feelsLike, `Feels Like: ${weatherObject.feelslike_c}⁰ C`);
  addContent(visibility, `Visibility: ${weatherObject.vis_km} km`);
  addContent(humidity, `Humidity: ${weatherObject.humidity}%`);
  addContent(windSpeed, `Wind Speed: ${weatherObject.wind_kph} km/h`);
}

export default function weatherCardPopulator() {
  appendElement(weatherCard, weatherCardHeader, temperature, details);
  addWeatherCardContent(weatherInfo);
}
const a = {
  name: 'Istanbul',
  country: 'Turkey',
  lastUpdated: '03:45',
  temp_c: 19,
  temp_f: 66.2,
  is_day: 0,
  condition: 'Partly cloudy',
  wind_mph: 12.5,
  wind_kph: 20.2,
  wind_dir: 'NE',
  humidity: 83,
  feelslike_c: 19,
  feelslike_f: 66.2,
  vis_km: 10,
  vis_miles: 6,
  hour: ' 3:50',
  dateFormatted: '08/Jun/23',
};
