import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import WeeklyForecast from './WeeklyForecast';


function LocationResults({ weatherdata }) {
    console.log(weatherdata)
  const [weather, setWeather] = useState('');
  const [name, setname] = useState('');
  const [description, setdescription] = useState('');
  const [country, setcountry] = useState('');
  const [temp, settemp] = useState('');
  const [feels_like, setfeels_like] = useState('');
  const [temp_min, settemp_min] = useState('');
  const [temp_max, settemp_max] = useState('');
  const [image, setimg] = useState('');
const [lat, setLat] = useState("")
const [lon, setLon] = useState("")
const [display, setdisplay] = useState(0)
    let obj = {
        sunnyImg:('/Images/Sunnyday.jpg'),
        cloudyImg:('/Images/Cloudyday.jpg'),
        partlycloudyImg:('/Images/Partlycloudyday.jpg'),
        rainydayImg:('/Images/Rainyday.jpg'),
        snowydayImg:('/Images/Snowyday.jpg'),
        thunderstormImg:('/Images/Thunderstormday.jpg'),

    }
    const changedisplay = () => {
        settemp("")
        setdisplay(1)
    }

    

  useEffect(() => {
    if (weatherdata) {
      setWeather(weatherdata.weather);
      setname(weatherdata.name);
      setdescription(weatherdata.weather[0].description);
      setcountry(weatherdata.sys.country);
      setfeels_like(weatherdata.main.feels_like);
      settemp_min(weatherdata.main.temp_min);
      settemp_max(weatherdata.main.temp_max);
      const newtemp= Math.floor((weatherdata.main.temp-273.15)*(9/5)+32) 
      const displaytemp= `${newtemp}°F`
      settemp(displaytemp)
      setLat(weatherdata.coord.lat)
      setLon(weatherdata.coord.lon)
      //started creating if statement not sure if this is right started trying to match description to an image but its not showing up 
      if(weatherdata.weather[0].description === "broken clouds"){
        setimg(obj.sunnyImg);
      }
      if(weatherdata.weather[0].main === "Cloudy"){
        setimg(obj.cloudyImg);
      }
      if(weatherdata.weather[0].main === "Partlycloudy"){
        setimg(obj.partlycloudyImg);
      }
      if(weatherdata.weather[0].description === "light rain"){
        setimg(obj.rainydayImg)
      }

    }
  }, [weatherdata]);

  if (temp !== '') {
    return (
      <div>
<Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image} id="CardImage" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>{temp}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Button>Click Here for Weekly Forecast</Button>
        </Card>
        <div hidden={temp === ''}>
          <WeeklyForecast name={name} />
        </div>
      </div>
    );
  } else {
    return <WeeklyForecast />;
  }
}

export default LocationResults;