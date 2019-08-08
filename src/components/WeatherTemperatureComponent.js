import React from 'react';
//import WeateherIcons from 'react-weathericons';
import { WiDaySunny, WiCloud, WiCloudy, WiRain, WiSnow, WiWindy} from 'weather-icons-react';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../shared/weather';
import WeatherData from './WeatherDataComponent';
import './WeatherTemperatureComponent.css';

const getWeatherIcon = (weatherState) => {
    switch(weatherState) {
        case CLOUD:
            return <WiCloud size={60} color='gray' />;
        case CLOUDY:
            return <WiCloudy size={50} color='gray' />;
        case SUN:
            return <WiDaySunny size={50} color='yellow' />;
        case RAIN:
            return <WiRain size={60} color='lightblue' />;
        case SNOW:
            return <WiSnow size={60} color='blue' />;
        case WINDY:
            return <WiWindy size={60} color='lightblue' />;
        default:
            return <WiDaySunny size={60} color='yellow' />
    }
}

WeatherTemperatureComponent.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string
}

export default function WeatherTemperatureComponent({temperature, weatherState}) {
    return (
        <div className="WeatherContainer">
            <div className="WeatherTemperature">
                {getWeatherIcon(weatherState)}
                <span className="temperature">{temperature + 'º'}</span>
            </div>
            <WeatherData humidity={80} wind={'10m/s'}/>
        </div>
    );
}