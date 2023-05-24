import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const WeeklyForecast = ({ name }) => {
const [description, setdescription] = useState('');
const [temp, settemp] = useState('');
const [image, setimg] = useState('');
const [list, setlist] = useState([]);

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
    const fetchfunction = async () => {
      const url = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=b97ed6d91b4a44e979d1535784b6b57b`
      );
      const data = await url.json();
      console.log(data);
      settemp(data.list[0].main.temp)
      setdescription(data.list[0].weather[0].description)
      let newlist = [];
      for (let index = 0; index < data.list.length; index+=8) {
        newlist.push(data.list[index])
            
        
        } 
        
      setlist(newlist)
    };

    fetchfunction();
  }, [name]);

  const getImageSrc = (weatherDescription) => {
    switch (weatherDescription) {
      case 'broken clouds':
        return obj.partlycloudyImg;
        case 'clear sky':
        return obj.sunnyImg;
      case 'cloudy':
        return obj.cloudyImg;
        case 'scattered clouds':
            return obj.partlycloudyImg;
      case 'partly cloudy':
        return obj.partlycloudyImg;
      case 'rainy':
        return obj.rainydayImg;
        case 'moderate rain':
            return obj.rainydayImg;
    case 'light rain':
        return obj.rainydayImg
      case 'snowy':
        return obj.snowydayImg;
      case 'thunderstorm':
        return obj.thunderstormImg;
      case 'misty':
        return obj.mistydayimg;
        case 'haze':
        return obj.mistydayimg;
      default:
        return obj.overcastimg;
    }
  };

  return (
    <CardGroup>
        {list.map(item=>(
            <Card key={item.dt} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={getImageSrc(item.weather[0].description)} id="CardImage" />
            <Card.Body>
              <Card.Title>Hello</Card.Title>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{Math.floor((item.main.temp- 273.15) * (9 / 5) + 32)}°F  </Card.Text>
              <Card.Text>{item.weather[0].description}</Card.Text>
            </Card.Body>
          </Card>




        ))}
      
    </CardGroup>
  );
};

export default WeeklyForecast;







