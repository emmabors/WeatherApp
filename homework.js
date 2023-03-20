const formData = document.querySelector('#form-data')
console.log(formData)
formData.addEventListener('submit', (event) => {
    event.preventDefault()
    const cityname = formData.name.value
    console.log(cityname)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname.toUpperCase()}&appid=241f8a3e24655e0c81bde8c4f2829e48`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        const High = (Math.floor((`${data.main.temp_max}` - 273.15) * 9/5 + 32))
        const Low = (Math.floor((`${data.main.temp_min}` - 273.15) * 9/5 + 32))
        const Forecast = data.weather[0].main
        const Humidity = data.main.humidity
        document.getElementsByClassName('high')[0].append(High + ' ºF')
        document.getElementsByClassName('low')[0].append(Low + ' ºF')
        document.getElementsByClassName('forecast')[0].append(Forecast)
        document.getElementsByClassName('humidity')[0].append(Humidity + ' %')
    })
    .catch((response) => {
        console.error(response)
    })
})