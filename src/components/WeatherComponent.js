import React from 'react';
import WeatherData from './WeatherDataComponent';
import WeatherLocation from './WeatherLocationComponent';
import WeatherTemperature from './WeatherTemperatureComponent';
import {CLOUD} from './../shared/weather';
//import * as constants from './../shared/weather';


function WeatherComponent() {
    return (
        <div className="WeatherComponent">
            <WeatherLocation city="Buenos Aires" />
            <WeatherTemperature /* temperature={12} */ weatherState={CLOUD}/>
            <WeatherData humidity={80} wind={'10m/s'}/>
        </div>
    );
}

export default WeatherComponent;