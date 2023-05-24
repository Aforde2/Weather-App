import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import WeeklyForecast from './WeeklyForecast';

function LocationResults({ weatherdata }) {
  const [weather, setWeather] = useState('');
  const [name, setname] = useState('');
  const [description, setdescription] = useState('');
  const [country, setcountry] = useState('');
  const [temp, settemp] = useState('');
  const [feels_like, setfeels_like] = useState('');
  const [temp_min, settemp_min] = useState('');
  const [temp_max, settemp_max] = useState('');
  const [image, setimg] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [display, setdisplay] = useState(0);

  let obj = {
    sunnyImg: './Images/Sunnyday.jpg',
    cloudyImg: './Images/Cloudyday.jpg',
    partlycloudyImg: './Images/Partlycloudyday.jpg',
    rainydayImg: './Images/Rainyday.jpg',
    snowydayImg: './Images/Snowyday.jpg',
    thunderstormImg: './Images/Thunderstormday.jpg',
    mistydayimg: './Images/Mistyday.jpg',
    overcastimg: './Images/Cloudyday.jpg',
  };


  useEffect(() => {
    if (weatherdata) {
      setWeather(weatherdata.weather);
      setname(weatherdata.name);
      setdescription(weatherdata.weather[0].description);
      const newtemp = Math.floor((weatherdata.main.temp - 273.15) * (9 / 5) + 32);
      const displaytemp = `${newtemp}°F`;
      settemp(displaytemp);

      if (weatherdata.weather[0].description === 'broken clouds') {
        setimg(obj.partlycloudyImg);
      }
      if (weatherdata.weather[0].description === 'cloudy') {
        setimg(obj.cloudyImg);
      }
      if (weatherdata.weather[0].description === 'partly cloudy') {
        setimg(obj.partlycloudyImg);
      }
      if (weatherdata.weather[0].description === 'light rain') {
        setimg(obj.rainydayImg);
      }
      if (weatherdata.weather[0].description === 'mist') {
        setimg(obj.mistydayimg);
      }
      if (weatherdata.weather[0].description === 'overcast clouds') {
        setimg(obj.overcastimg);
      }
      if (weatherdata.weather[0].description === 'sunny') {
        setimg(obj.sunnyImg);
      }
      if (weatherdata.weather[0].description === 'clear sky') {
        setimg(obj.sunnyImg);
      }
      if (weatherdata.weather[0].description === 'scattered clouds') {
        setimg(obj.partlycloudyImg);
      }
      if (weatherdata.weather[0].description === 'haze') {
        setimg(obj.mistydayimg);
      } else {
        setimg(obj.overcastimg);
      }
    }
  }, [weatherdata]);

  const handleClick = () => {
    setdisplay(1);
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} id="CardImage" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{temp}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Button onClick={handleClick}>Click Here for Weekly Forecast</Button>
      </Card>
      {display === 1 && <WeeklyForecast name={name} />}
    </div>
  );
}

export default LocationResults;