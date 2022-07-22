export class Weather{
    constructor(city, countryCode){
        this.apikey = '7d9c1f030acb60b4907ab3e784462f80';
        this.city = city;
        this.countryCode = countryCode;
    }
    async getWeather(){
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }
    changeLocation(city, countryCode){
        this.city = city;
        this.countryCode = countryCode;
    }
    async getWeatherNextDays(){
        const URI = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }
}