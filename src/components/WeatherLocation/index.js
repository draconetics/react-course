import React,{Component} from 'react';
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
const dataObject02 = {
    temperature: 30,
    weatherState: 'CLOUD',
    humidity: 20,
    wind: '30 m/s'
}

class WeatherLocation extends Component{

constructor(){
    super();
    this.state = {
        city:'Buenos Aires',
        data: dataObject
    };
}

handleUpdateClick(e){
    console.log('handle click');
    this.setState({
        city: 'Brazil',
        data: dataObject02
    });
}

render() {
    return (
        <div className="WeatherLocation">
            <Location city={this.state.city} />
            <Data data={this.state.data}/>
            <button onClick={e=>this.handleUpdateClick(e)}>Update</button>
        </div>
    );
}

}

export default WeatherLocation;