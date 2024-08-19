import humidity__icon from "../assets/humidity.png";
import wind__icon from "../assets/wind.png";

export default function WeatherData({ details }) {
  return (
    <div className="weather-app__data">
      <img src={details.icon} alt="" className="weather-app__icon" />
      <p className="weather-app__temp">{details.tempreture}°c</p>
      <p className="weather-app__location">{details.location}</p>

      <div className="weather-app__details ">
        <div className="col">
          <img src={humidity__icon} alt="" />
          <div>
            <p>{details.humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>

        <div className="col">
          <img src={wind__icon} alt="" />
          <div>
            <p>{details.windSpeed} Km/h</p>
            <span>Humidity</span>
          </div>
        </div>
      </div>
    </div>
  );
}
