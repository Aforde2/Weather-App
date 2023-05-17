import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

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

    let obj = {
        sunnyImg:('/Images/Sunnyday.jpeg'),
        cloudyImg:('/Images/Cloudyday.jpeg'),
        partlycloudyImg:('/Images/Partlycloudyday.jpeg'),
        rainydayImg:('/Images/Rainyday.jpeg'),
        snowydayImg:('/Images/Snowyday.jpeg'),
        thunderstormImg:('/Images/Thunderstormday.jpeg'),

    }
//Created switch statement not sure if this correct
    const expr = 'obj';
    switch (expr) {
    case 'sunnyImg':
        break;
    case 'cloudyImg':
        break;
    case 'partlycloudyImg':
        break;
    case 'rainydayImg':
        break;
    case 'snowydayImg':
        break;
    case 'thunderstormImg':
        break;
    default:
        // console.log(`Sorry, there is no Image for that Weather state:(`);
    }

    

  useEffect(() => {
    if (weatherdata) {
      setWeather(weatherdata.weather);
      setname(weatherdata.name);
      setdescription(weatherdata.weather[0].description);
      setcountry(weatherdata.sys.country);
      settemp(weatherdata.main.temp);
      setfeels_like(weatherdata.main.feels_like);
      settemp_min(weatherdata.main.temp_min);
      settemp_max(weatherdata.main.temp_max);
      //started creating if statement not sure if this is right started trying to match description to an image but its not showing up 
      if(weatherdata.weather.description === "broken clouds"){
        setimg(obj.sunnyImg);
      }
      if(weatherdata.weather.main === "Cloudy"){
        setimg(obj.cloudyImg);
      }
      if(weatherdata.weather.main === "Partlycloudy"){
        setimg(obj.partlycloudyImg);
      }
      if(weatherdata.weather.description === "light rain"){
        setimg(obj.rainydayImg)
      }

    }
  }, [weatherdata]);

  if (temp !== '') {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/Images" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{temp}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    );
  } else {
    return null; 
  }
}

export default LocationResults;