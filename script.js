var API_KEY = '0c680c51afe47d31fc6e83ec33560ffb';
var f = false;
var wd;

function displayTemp(c, far) {
        if (far) return Math.round((c * 9/5) + 32) + ' °F';
        return Math.round(c) + ' °C';
}

function render(f, wd) {
        var currentLocation = wd.name;
        var currentWeather = wd.weather[0].description;
        var currentTemp = displayTemp(wd.main.temp, f);
        var currentCountry = wd.sys.country;
        var currentWind = wd.wind.speed;
        var currentIcon = wd.weather[0].icon;

        $('#location').html(currentLocation + ', ' + currentCountry);
        $('#temp').html(currentTemp);
        $('#description').html(currentWeather);
        $('#wind').html(currentWind + ' km/h');

        var iconSrc = 'http://openweathermap.org/img/w/' + currentIcon + '.png';
        $('#temp').prepend('<img src="' + iconSrc + '">');
}

$(function() {
        var loc;
        $.getJSON('http://ipinfo.io', function(d){
                loc = d.loc.split(',');
        $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + loc[0] +
            '&lon=' + loc[1] + '&units=metric' + '&APPID=' + API_KEY, function (apiData) {
              wd = apiData;

                render(f, apiData);
                $('#temp').click(function() {
                        f = !f;
                        render(f, wd);
        })
        });
  })
});