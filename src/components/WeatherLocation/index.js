import React from 'react';
import Location from './LocationComponent';
import Data from './WeatherData';
import {CLOUD, SUN} from '../../shared/weather';
//import * as constants from './../shared/weather';
import './style.css';

const dataObject = {
    temperature: 20,
    weatherState: SUN,
    humidity: 15,
    wind: '10 m/s'
}

function WeatherLocation() {
    return (
        <div className="WeatherLocation">
            <Location city="Buenos Aires" />
            <Data data={dataObject}/>
        </div>
    );
}

export default WeatherLocation;