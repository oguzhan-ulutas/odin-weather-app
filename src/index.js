import './style.css';
import { weatherInfo, getSearchLocation } from './modules/search';
import mainPageCreator from './modules/main-page-creator';

mainPageCreator();

// Adds event listener to form and updates the location variable in search module
getSearchLocation();
