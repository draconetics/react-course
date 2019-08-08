import React from 'react';
import PropTypes from 'prop-types';


WeatherLocationComponent.propTypes = {
    city: PropTypes.string.isRequired
}

function WeatherLocationComponent(props) {
    const c = props.city;
    return (
        <div className="WeatherLocation">
            <h1>{c}</h1>
        </div>
    );
}


export default WeatherLocationComponent;