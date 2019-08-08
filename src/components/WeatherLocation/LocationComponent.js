import React from 'react';
import PropTypes from 'prop-types';


LocationComponent.propTypes = {
    city: PropTypes.string.isRequired
}

function LocationComponent(props) {
    const c = props.city;
    return (
        <div className="Location">
            <h1>{c}</h1>
        </div>
    );
}


export default LocationComponent;