require('./index.css'); /* Invocacion al archivo css */

const { Weather } = require('./Weather');
const { UI } = require('./UI');
const {Store} = require('./Store');


const store = new Store();
const {city, countryCode} = store.getLocationData();
const weather = new Weather(city,countryCode);
const iu = new UI();

async function fetchWeather(){
    const data = await weather.getWeather();
    const next = await weather.getWeatherNextDays();
    console.log(data);
    console.log(next);
    iu.render(data);
    iu.renderNextDay(next);
}
document.getElementById('w-change-btn').addEventListener('click', (e) =>{
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    console.log(city, countryCode);
    weather.changeLocation(city,countryCode);
    store.setLocatioData(city,countryCode);
    fetchWeather();
    e.preventDefault();
})
document.addEventListener('DOMContentLoaded', fetchWeather);
