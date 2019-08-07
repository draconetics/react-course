import React from 'react';
import WeatherData from './WeatherDataComponent';
import WeatherLocation from './WeatherLocationComponent';

function WeatherComponent() {
    return (
        <div className="WeatherComponent">
            <WeatherData />
            <WeatherLocation />
        </div>
    );
}

export default WeatherComponent;