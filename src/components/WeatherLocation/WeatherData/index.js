import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

export default function WeatherData(){
    return (
        <div className="WeatherData">
            <WeatherTemperature temperature={20} weatherState={'SNOW'}/>
            <WeatherExtraInfo humidity={80} wind={'10m/s'}/>
        </div>
    );

}