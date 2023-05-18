import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const WeeklyForecast = ({ name }) => {
  console.log("WeeklyForecast");
  console.log(name);

  useEffect(() => {
    const fetchfunction = async () => {
      const url = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=b97ed6d91b4a44e979d1535784b6b57b`);
      const data = await url.json();
      console.log(data);
    };

    fetchfunction();
  }, [name]);

  return (
    <CardGroup>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="image" id="CardImage" />
        <Card.Body>
          <Card.Title>Hello</Card.Title>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default WeeklyForecast;


