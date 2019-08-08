import React from 'react';
//import WeateherIcons from 'react-weathericons';
import { WiDaySunny, WiCloud, WiCloudy, WiRain, WiSnow, WiWindy} from 'weather-icons-react';

const getWeatherIcon = (weatherState) => {
    switch(weatherState) {
        case "cloud":
            return <WiCloud size={60} color='gray' />;
        case "cloudy":
            return <WiCloudy size={50} color='gray' />;
        case "sun":
            return <WiDaySunny size={50} color='yellow' />;
        case "rain":
            return <WiRain size={60} color='lightblue' />;
        case "snow":
            return <WiSnow size={60} color='blue' />;
        case "windy":
            return <WiWindy size={60} color='lightblue' />;
        default:
            return <WiDaySunny size={60} color='yellow' />
    }
}

export default function WeatherTemperatureComponent({temperature, weatherState}) {
    return (
        <div className="WeatherTemperature">
            {getWeatherIcon(weatherState)}
            <span className="temperature">{temperature}</span>
        </div>
    );
}