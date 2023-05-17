import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import { InputGroup } from 'react-bootstrap';
import '../App.css'
import LocationResults from './LocationResults';

const WeatherApp = () => {
    const [weather, setWeather] = useState('');
    const [name, setname] = useState('');
    const [description, setdescription] = useState('');
    const [country, setcountry] = useState('');
    const [temp, settemp] = useState('');
    const [feels_like, setfeels_like] = useState('');
    const [temp_min, settemp_min] = useState('');
    const [temp_max, settemp_max] = useState('');
    const [weatherdata, setweatherdata] = useState('');

    const fetchweatherApp = async(event) => {
        event.preventDefault();

const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=b97ed6d91b4a44e979d1535784b6b57b`;
const data = await fetch(url)
setweatherdata(await data.json())

console.log(weatherdata);

// setname(weatherdata.name)
// setcountry(weatherdata.sys.country)
// settemp(weatherdata.main.temp)
// setfeels_like(weatherdata.main.feels_like)
// settemp_min(weatherdata.main.temp_min)
// settemp_max(weatherdata.main.temp_max)
    } 
    return (
        <>
<Form className="d-flex" onSubmit={fetchweatherApp}>
            <Form.Control
            type="search"
            placeholder="Enter City"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setname(e.target.value)}
            />
            <Button variant="secondary" type='submit'
            >Search</Button>
        </Form>
        <LocationResults weatherdata={weatherdata}/>
        </>


    );

    
//     <div>
//     <p>{weather}</p> 
//     <p>City: {name}</p>
//     <p>Description:{description}</p>
//     <p>Country:{country}</p>
//     <p>Temperature: {temp}</p>
//     <p>Feels like: {feels_like}</p>
//     <p>Minimum Temperature{temp_min}</p>
//     <p>Maximum Temperature{temp_max}</p>
//     <Button onClick={fetchweatherApp}>More Weather</Button>
// </div> 


};
export default WeatherApp;






