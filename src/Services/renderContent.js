import { config } from "./config";
import {addCard, clearChildren, renderHeading} from "../DOM/rendering.js";

async function fetchWeather(city){
    var key = config.MY_API_KEY
    var link = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`

    try {
        const response = await (await fetch(link, {mode: 'cors'})).json();

        if (response.cod === '400' || response.cod === '404'){
            alert('Please enter a valid city name');
            return;
        }

        const result = response.list
        
        renderContent(result, city);
    } catch (error) {
        alert(error);
    }

    
}

function renderContent(result, city){
    clearChildren()

    for(let i = 3; i < 39 ;i+=8){
        const tempKel = result[i].main.temp
        const temp = convertKelvin(tempKel)

        const feelsLikeKel = result[i].main.feels_like
        const feelsLike = convertKelvin(feelsLikeKel)

        const icon = result[i].weather[0].icon
        const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`

        let timeDate = new Date(result[i].dt_txt)
        let day = getDay(timeDate)
        timeDate = timeDate.toISOString().split('T')[0]
        

        addCard(temp, feelsLike, timeDate, day, iconURL);
    }

    renderHeading(city);
}

function convertKelvin(temp) {
    return (temp - 273.15).toFixed(1)
}

function getDay(date){
    const day = date.getDay()

    switch(day){
        case(1):
            return 'Mon';
        case(2):
            return 'Tue';
        case(3):
            return 'Wed';
        case(4):
            return 'Thu';
        case(5):
            return 'Fri';
        case(6):
            return 'Sat';
        default:
            return 'Sun'   
    }
}

export {fetchWeather};