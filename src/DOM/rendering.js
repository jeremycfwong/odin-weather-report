function addCard(temp, feelsLike, timeDate, day, icon){
    var weatherBox = document.createElement('div');
    weatherBox.classList.add('weather-box');

    var weatherDate = document.createElement('div');
    weatherDate.classList.add('date');
    weatherDate.textContent = timeDate;

    var weatherDay = document.createElement('div');
    weatherDay.classList.add('day');
    weatherDay.textContent = day;

    var weatherIcon = document.createElement('img');
    weatherIcon.src = icon

    var weatherTemp = document.createElement('div');
    weatherTemp.classList.add('temp');
    weatherTemp.textContent = 'Temperature: '+ temp + ' C'

    var weatherFeel = document.createElement('div');
    weatherFeel.classList.add('desc')
    weatherFeel.textContent = 'Feels Like: '+ feelsLike + ' C'

    weatherBox.replaceChildren(weatherDate,weatherDay,weatherIcon,weatherTemp,weatherFeel)

    document.getElementById('weather-container').appendChild(weatherBox)
}

function clearChildren(){
    document.getElementById('weather-container').replaceChildren()
}

function renderHeading(city){
    document.querySelector('h1').textContent = `Weather Report for ${city}`
}


export {addCard, clearChildren, renderHeading}