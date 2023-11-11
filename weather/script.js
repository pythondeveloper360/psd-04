

function loadWeather() {
    document.getElementById('temp').innerHTML = ''
    document.getElementById('desc').innerHTML = ''
    document.getElementById('wind').innerHTML = ''
    document.getElementById('loadingBanner').innerHTML = 'Loading'
    apikey = '084f75a0cb03cfb009f45ad41587c391'
    city = document.getElementById('city').value
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('loadingBanner').innerHTML = ''
            document.getElementById('cond').src = ` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById('temp').innerHTML = `Temperature : ${parseInt(data.main.temp) - 273}`
            document.getElementById('desc').innerHTML = `Description : ${data.weather[0].description}`
            document.getElementById('wind').innerHTML = `Wind Speed : ${data.wind.speed}km/h`
        }
        )
}