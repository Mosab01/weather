import "./App.css";
import { useState } from "react";
import clouds from "./clouds.jpg";

// var city= document.getElementById("city-name").value;
var API_KEY = "ab1b212ce4cc6959926569bd71264a61";

function App() {
  const [city, setCity] = useState("");

const set_city = () =>{
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
  .then(response => response.json())
  .then(json => {
    console.log(json.weather[0].main);
  });  
}

  return (
    <div className="App">
      <div className="input-city-name">
      <input 
      id='city-name'
      placeholder='City Name'
      value={city}
      onChange={(m) => setCity(m.target.value)}
      />

      <button
          alt="search"onClick={() => set_city(city)}>
            click me</button>

    </div>

    <div className="weather">
      <div className="city-date">
      <h1 id="city-name">City Name</h1>
      <h2 id="date-time">Mon 12th jan</h2>
      </div>
      <div className="picture">
        <img src={clouds} alt="clouds"/>
      </div>
      <div className="temp">
        <h1 id="temputre">35<span>°C</span></h1>
      </div>
      <div className="other-weather">
        <button>btn-1</button>
        <button>btn-2</button>
        <button>btn-3</button>
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
// "main":{"temp":282.24,
// "feels_like":280.51,
// "temp_min":279.82,
// "temp_max":284.29,
// "pressure":1023,"humidity":80},
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