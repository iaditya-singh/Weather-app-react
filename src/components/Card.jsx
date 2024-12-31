import React, { useState } from "react";
import { useEffect } from "react";

const Card = ({ data2 }) => {
  const [weather, setWeather] = useState();
  const fetchweather = async () => {
    const response = await fetch(`
     https://api.openweathermap.org/data/2.5/weather?units=metric&q= `);

    const data = await response.json();
    setWeather(data);
  };

  useEffect(() => {
    fetchweather();
  }, []);

  return (
    <div className="container">
      <div className="weather_list">
        <h1>Weather Search</h1>

        {weather && (
          <>
            <div className="weather_info">
              <h3>
                <span>City :</span>
                {weather?.location?.name}
              </h3>
              <p>
                {" "}
                <span>Country:</span> {weather?.location?.country}
              </p>
              <p>
                <span>Time:</span> {weather?.location?.localtime}
              </p>
              <p>
                {" "}
                <span>Temprature</span> {weather?.current?.temp_c}°c
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
