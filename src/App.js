import React from 'react';


import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = "69416cb348eb9fbaa4c2d519be816de1";


export default class App extends React.Component {

    getWeather = async (e) => {

        e.preventDefault();

        // get info from url
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
        // convert data received to json
        const data = await api_call.json();
        console.log(data);
    };

    render () {
        return (

            <div>
                <Titles/>
                <Form getWeather={this.getWeather}/>
                <Weather/>
            </div>
        );
    }
}