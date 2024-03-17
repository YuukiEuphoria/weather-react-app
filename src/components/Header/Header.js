import WeatherLocation from '../WeatherSection/WeatherLocation/WeatherLocation';
import './Header.css'

const Header = () => {
  return (
    <div className='Header'>
      <WeatherLocation/>
      <img src='user.png'/>
    </div>
  );
}

export default Header;
