import React from 'react';
import PropTypes from 'prop-types';


WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
}

function WeatherExtraInfo({humidity, wind}) {
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
        <div className="WeatherExtraInfo">
            <p>Humidity:{humidity} % -</p>
            <p>Wind: {wind}</p>
        </div>
    );
}

export default WeatherExtraInfo;