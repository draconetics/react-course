import React from 'react';
import WeatherData from './WeatherDataComponent';
import WeatherLocation from './WeatherLocationComponent';
import WeatherTemperature from './WeatherTemperatureComponent';

function WeatherComponent() {
    return (
        <div className="WeatherComponent">
            <WeatherLocation city="Buenos Aires" />
            <WeatherTemperature temperature='12º' weatherState="cloudy"/>
            <WeatherData humidity={80} wind={'10m/s'}/>
        </div>
    );
}

export default WeatherComponent;