import React from 'react';
import WeatherLocation from './WeatherLocationComponent';
import WeatherTemperature from './WeatherTemperatureComponent';
import {CLOUD} from './../shared/weather';
//import * as constants from './../shared/weather';
import './WeatherComponent.css';

function WeatherComponent() {
    return (
        <div className="Weather">
            <WeatherLocation city="Buenos Aires" />
            <WeatherTemperature  temperature={12}  weatherState={CLOUD}/>
        </div>
    );
}

export default WeatherComponent;