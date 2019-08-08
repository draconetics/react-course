import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

export default function WeatherData({data}){
    let {temperature, weatherState, humidity, wind} = data;
    return (
        <div className="WeatherData">
            <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
            <WeatherExtraInfo humidity={humidity} wind={wind}/>
        </div>
    );

}

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}