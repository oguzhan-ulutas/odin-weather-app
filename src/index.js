import './style.css';
import { weatherInfo, getSearchLocation } from './modules/search';
import mainPageCreator from './modules/main-page-creator';
import weatherCardPopulator from './modules/weather-card-populator';

mainPageCreator();
weatherCardPopulator();

// Adds event listener to form and updates the location variable in search module
getSearchLocation();
