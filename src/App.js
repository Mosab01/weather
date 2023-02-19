import "./App.css";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");

  const search = document.getElementById("get-city-name");
  const temp = document.getElementById("temp-text");
  const cityName = document.getElementById("city-name");
  const sunRise = document.getElementById("sun-rise");
  const sunSet = document.getElementById("sun-set");
  const minTemp = document.getElementById("min-temp");
  const maxTemp = document.getElementById("max-temp");
  const weatherMain = document.getElementById("weather-main");
  const feelsLike = document.getElementById("feels-like");
  const humidity = document.getElementById("humidity");
  const weather = document.getElementsByClassName("weather");

const set_city = () =>{
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ab1b212ce4cc6959926569bd71264a61`)
  .then(response => response.json())
  .then(json => {

    if (search.value !== "") {
      weather[0].style.opacity = "1";
    }
    else{
      alert("type a city name");
    }
    temp.innerText = `Weather temp: ${json.main.temp}`;
    cityName.innerText = json.name;
    sunRise.innerText = `Sun-rise: ${unix_to_time(json.sys.sunrise)}`;
    sunSet.innerText = `Sun-set: ${unix_to_time(json.sys.sunset)}`;
    minTemp.innerText = `min temp: ${json.main.temp_min}`;
    maxTemp.innerText = `max temp: ${json.main.temp_max}`;
    weatherMain.innerText = `weather state: ${json.weather[0].main}`;
    feelsLike.innerText = `Feels Like: ${json.main.feels_like}`;
    humidity.innerText = `Humidity: ${json.main.humidity}`;
  });
}

const unix_to_time = (time) =>{
  var date = new Date(time * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();
  
  // Will display time in 10:30:23 format
  var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  return(formattedTime);
}
  return (
    <div className="App">
      <h1 id="header">Weather Site</h1>
      <p id="hint">type a city name</p>
      <div className="input-city-name">
        <input 
          id='get-city-name'
          placeholder='City Name'
          value={city}
          onChange={(m) => setCity(m.target.value)}
        />
        <button id="get-btn"
          alt="search"onClick={() => set_city(city)}>
          Search
        </button>
      </div>

      <div className="weather">
        <div className="city-date">
          <p id="city-name"></p>
          <p id="date-time">Mon 12th jan</p>
        </div>

          <p id="weather-main"></p>

        <div className="temputre">
          <p id="temp-text"></p>
          <p id="temp-sign">°C</p>
        </div>

        <div className="sun-time">
          <p id="sun-rise"></p>
          <p id="sun-set"></p>
        </div>

          <div className="temp-minmax">
          <p id="min-temp"></p>
          <p id="max-temp"></p>
          </div>

          <div className="other">
          <p id="feels-like"></p>
          <p id="humidity"></p>
          </div>

      </div>
    </div>
  );
}
export default App;

//   {
//     "coord": {
//         "lon": 35.2544,
//         "lat": 32.2211
//     },
//     "weather": [
//         {
//             "id": 800,
//             "main": "Clear",
//             "description": "clear sky",
//             "icon": "01d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 16.03,
//         "feels_like": 14.58,
//         "temp_min": 15.57,
//         "temp_max": 16.03,
//         "pressure": 1022,
//         "humidity": 34,
//         "sea_level": 1022,
//         "grnd_level": 956
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 1.18,
//         "deg": 334,
//         "gust": 1.29
//     },
//     "clouds": {
//         "all": 0
//     },
//     "dt": 1676815634,
//     "sys": {
//         "type": 2,
//         "id": 2038108,
//         "country": "PS",
//         "sunrise": 1676780295,
//         "sunset": 1676820468
//     },
//     "timezone": 7200,
//     "id": 282615,
//     "name": "Nablus",
//     "cod": 200
// }