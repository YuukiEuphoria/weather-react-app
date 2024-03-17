import ActivitiesSection from "./components/ActivitiesSection/ActivitiesSection";
import DetailedConditions from "./components/DetailedConditions/DetailedConditions";
import NavigationsBar from "./components/NavigationBar/NavigationsBar";
import WeeklyForecast from "./components/WeeklyForecast/WeeklyForecast";
import WeatherSection from "./components/WeatherSection/WeatherSection";
import "./styles/reset.css";
import './styles/App.css'
import './styles/media.css'

import WeatherIcon from "./components/WeatherIcon/WeatherIcon";
import Header from "./components/Header/Header";
import DayOfWeeks from "./components/DayOfWeeks/DayOfWeeks";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container1">
        <WeatherSection/>
        <WeatherIcon/>
      </div>
      <div className="container2">
        <NavigationsBar />
        <div className="container3">
          <ActivitiesSection />
          <div className="DayOfWeeksWrapper"> 
          <DayOfWeeks/>
          </div>
          <WeeklyForecast />
        </div>
        <DetailedConditions />
      </div>
    </div>
  );
}

export default App;
