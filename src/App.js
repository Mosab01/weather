import "./App.css";
import { useState } from "react";
import clouds from "./images/clouds.jpg";

// var city= document.getElementById("city-name").value;

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
      <button
          alt="search"onClick={() => set_city(city)}>
            click me
      </button>
      </div>

      <div className="weather">
        <div className="city-date">
          <h1 id="city-name"></h1>
          <h2 id="date-time">Mon 12th jan</h2>
        </div>
        <div className="picture">
          <img id="weather-img" src={clouds} alt="clouds"/>
        </div>
        <div className="temp">
          <p id="temputre"></p>
          <p>°C</p>
        </div>
        <div className="other-weather">
          <p id="sun-rise"></p>
          <p id="sun-set"></p>
          <p id="min-temp"></p>
          <p id="max-temp"></p>

        </div>
      </div>
    </div>
  );
}



export default App;


// const api_get=
// {"coord":{"lon":-0.1257,
// "lat":51.5085},

// "weather":[{"id":804,
// "main":"Clouds",
// "description":"overcast clouds",
// "icon":"04d"}],

// "base":"stations",

// "main":{
// "temp":282.24,
// "feels_like":280.51,
// "temp_min":279.82,
// "temp_max":284.29,
// "pressure":1023,
// "humidity":80},

// "visibility":10000,
// "wind":{"speed":3.09,
// "deg":220,"gust":8.75},

// "clouds":{"all":100},

// "dt":1676457152,

// "sys":{"type":2,
// "id":2075535,
// "country":"GB",
// "sunrise":1676445323,
// "sunset":1676481250},

// "timezone":0,
// "id":2643743,
// "name":"London",
// "cod":200};