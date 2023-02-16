import "./App.css";
import { useState } from "react";
import clouds from "./images/clouds.jpg";

function App() {
  const [city, setCity] = useState("");

const set_city = () =>{
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ab1b212ce4cc6959926569bd71264a61`)
  .then(response => response.json())
  .then(json => {
    document.getElementById("temputre").innerHTML = json.main.temp;
    document.getElementById("city-name").innerHTML = json.name;
    document.getElementById("sun-rise").innerHTML = `Sun-rise = ${unix_to_time(json.sys.sunrise)}`;
    document.getElementById("sun-set").innerHTML = `Sun-set = ${unix_to_time(json.sys.sunset)}`;
    document.getElementById("min-temp").innerHTML = `min temp = ${json.main.temp_min}`;
    document.getElementById("max-temp").innerHTML = `max temp = ${json.main.temp_max}`;
    console.log(json);
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

      <div className="input-city-name">
        <input 
          id='get-city-name'
          placeholder='City Name'
          value={city}
          onChange={(m) => setCity(m.target.value)}
        />
        <button id="get-btn"
          alt="search"onClick={() => set_city(city)}>
          click me
        </button>
      </div>

      <div className="weather">
        <div className="city-date">
          <p id="city-name"></p>
          <p id="date-time">Mon 12th jan</p>
        </div>

        <div className="picture">
          <img id="weather-img" src={clouds} alt="clouds"/>
        </div>

        <div className="temp">
          <p id="temputre"></p>
          <p>°C</p>
        </div>

        <div className="sun-time">
          <p id="sun-rise"></p>
          <p id="sun-set"></p>
        </div>

          <div className="temp-minmax">
          <p id="min-temp"></p>
          <p id="max-temp"></p>
          </div>

      </div>
    </div>
  );
}
export default App;