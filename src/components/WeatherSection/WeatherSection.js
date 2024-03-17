import WeatherLocation from "./WeatherLocation/WeatherLocation";
import "./WeatherSection.css";

const WeatherSection = () => {
  return (
    <section className="WeatherSection">
      <div className="WeatherLocationWrapper">
        <WeatherLocation />
      </div>
      <p className="weatherDescription">Cloudy</p>
      <div className="WeatherSectionImgWrapper">
      <img src="cloud.svg"></img>

      </div>
      <div className="weatherDetails">
        <span className="weatherTemperature">26°C</span>
        <p className="weatherDate">Sunday | 12 Dec 2023</p>
      </div>
    </section>
  );
};

export default WeatherSection;
