import { fetchWeather } from "./renderContent"

function searchLocation(){
    var search = document.getElementById('location')
    var searchTerm = search.value
    searchTerm = searchTerm.charAt(0).toUpperCase()+ searchTerm.slice(1)
    search.value = ''
    
    fetchWeather(searchTerm)
}

export {searchLocation}