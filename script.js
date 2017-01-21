var degree = document.querySelector('.temp');
var parseNumber = parseInt(degree.innerText);
var celsius = (parseNumber - 32) * 5/9 + ' °C';
var fahrenheit = (parseNumber * 9/5) + 32 + ' °F';

degree.addEventListener('click', function () {
        degree.innerText = fahrenheit;
});

var api = 'http://api.openweathermap.org/data/2.5/weather/city?id=';
var city = 'Kiev';
var units = '&units=metric';
var apiId = '&APPID=ec69814ca5fb2ed6e86e1729347f5d6e';
var cb = '&callback=JSON_CALLBACK';
var apiCall = api + city + units+ apiId + cb
console.log(apiCall);


