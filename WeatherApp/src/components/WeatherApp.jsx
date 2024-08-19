import { useEffect, useRef, useState } from "react";

import SearchBar from "./SearchBar";
import WeatherData from "./WeatherData";

import clear__icon from "../assets/clear.png";
import cloud__icon from "../assets/cloud.png";
import drizzle__icon from "../assets/drizzle.png";
import rain__icon from "../assets/rain.png";
import snow__icon from "../assets/snow.png";

const api_key = "43fb221f0871137159757d7f6656a790";

const allIcons = {
  "01d": clear__icon,
  "01n": clear__icon,
  "02d": cloud__icon,
  "02n": cloud__icon,
  "03d": cloud__icon,
  "03n": cloud__icon,
  "04d": drizzle__icon,
  "04n": drizzle__icon,
  "09d": rain__icon,
  "09n": rain__icon,
  "10d": rain__icon,
  "10n": rain__icon,
  "13d": snow__icon,
  "13n": snow__icon,
};
export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState(false);
  const inputRef = useRef();

  async function fetchWeatherData(city) {
    if (city === "") {
      return;
    }
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
      );

      if (!response.ok) {
        throw new Error("Unable to fetch :(");
      }

      const data = await response.json();

      console.log(data);

      const icon = allIcons[data.weather[0].icon] || clear__icon;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        tempreture: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.log(error);
    }
  }

  useEffect(function () {
    fetchWeatherData();
  }, []);

  return (
    <main className="weather-app">
      <SearchBar inputRef={inputRef} search={fetchWeatherData} />

      {weatherData ? <WeatherData details={weatherData} /> : <></>}
    </main>
  );
}
