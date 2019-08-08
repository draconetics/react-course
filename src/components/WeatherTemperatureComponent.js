import React from 'react';
import WeateherIcons from 'react-weathericons';

const getWeatherIcon = (weatherState) => {
    switch(weatherState) {
        case "cloud":
            return <WeateherIcons name="cloud" size="2x"/>;
        default:
            return <WeateherIcons name="sleet" size="2x"/>;
    }
}

export default function WeatherTemperatureComponent({temperature, weatherState}) {
    return (
        <div className="WeatherTemperature">
            {getWeatherIcon(weatherState)}
            <h4>{temperature}</h4>
        </div>
    );
}