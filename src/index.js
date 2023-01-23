import {fetchWeather} from "./Services/renderContent.js";
import { searchLocation } from "./Services/search.js";
import './style.css'


fetchWeather('Hong Kong');

var search = document.getElementById('search')

search.addEventListener('click', searchLocation)

