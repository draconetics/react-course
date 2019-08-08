import React from 'react';


function WeatherLocationComponent(props) {
    let c = props.city;
    return (
        <div className="WeatherLocationComponent">
            <h1>{c}</h1>
        </div>
    );
}

export default WeatherLocationComponent;