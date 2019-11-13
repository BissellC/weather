let input
let weatherData

const checkInput = () => {
  input = document.querySelector('input').value

  if (isNaN(parseInt(input)) === false) {
    input = 'zip=' + input
  } else {
    input = 'q=' + input
  }
}

const checkWeather = async () => {
  checkInput()
  const resp = await fetch(
    'http://api.openweathermap.org/data/2.5/weather?' +
      input +
      '&APPID=dd457756f99158928d9b26f030f1e296&units=imperial'
  )
  console.log(resp)
  weatherData = await resp.json()
  console.log(weatherData)
  displayWeather(weatherData)
}

const displayWeather = weatherData => {
  document.querySelector('.temp').textContent =
    Math.round(weatherData.main.temp) + '°F'
  document.querySelector('.skies').textContent = weatherData.weather[0].main
  document.querySelector('.humidity').textContent =
    weatherData.main.humidity + '%'
}

document.querySelector('.search').addEventListener('click', checkWeather)
