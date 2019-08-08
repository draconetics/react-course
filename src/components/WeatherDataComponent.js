import React from 'react';
import PropTypes from 'prop-types';

WeatherDataComponent.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
}

function WeatherDataComponent({humidity, wind}) {
  /*  let {city} = props;
    let person = {
        name:"",
        age:15,
        profession: "student"
    };
    //let personName = person.name;
    let {name} = person;
    let {personName = name} = person;
    let {personNameDefault = name || "Sin Nombre"} = person;
    console.log(personNameDefault);

    //spread
    const array = ["primero", "segundo", "tercero"];
    const [uno,,tres] = array;
    var objArray = {...array};
    console.log(objArray);
 */
    return (
        <div className="WeatherDataComponent">
            
            <span>Humidity:{humidity} % -</span>
            <span>Wind: {wind}</span>
        </div>
    );
}

export default WeatherDataComponent;