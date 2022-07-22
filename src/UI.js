export class UI{
    constructor(){
        this.location = document.getElementById('weather-location');
        this.desc = document.getElementById('weather-description');
        this.string = document.getElementById('weather-string');
        this.humidity = document.getElementById('weather-humidity');
        this.wind = document.getElementById('weather-wind');
        this.day = document.getElementById('weather-description-day');
        this.nextMin = document.getElementById('weather-description-next-1-min');
        this.nextMax = document.getElementById('weather-description-next-1-max');
    }
    converter(wind){
        return wind * 3.6;
    }
    render(weather){
        let wind = this.converter(parseFloat(weather.wind.speed));
        let temperature = parseInt(weather.main.temp);
        this.location.textContent = weather.name + ' / ' + weather.sys.country;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = temperature + '°C';
        this.humidity.textContent = 'Humidity: ' + weather.main.humidity + '%';
        this.wind.textContent = 'Wind: ' + wind.toFixed(2) + ' K/H';
        
    }
    renderNextDay(weather){
        this.day.textContent = weather.list[7].dt_txt;
        this.nextMin.textContent = 'Min: ' + weather.list[7].main.temp + '°C';
        this.nextMax.textContent = 'Max: ' + weather.list[10].main.temp + '°C'
    }
}