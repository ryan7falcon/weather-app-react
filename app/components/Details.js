import React from 'react';
import utils from '../helpers/utils'
var getDate = utils.getDate;
var convertTemp = utils.convertTemp;

var styles = {
  container: {
    display: 'flex',
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  weather: {
    height: 130
  }
}

function Details(props){
  console.log(props.weather);
  var icon = props.weather.weather[0].icon;
  var date = getDate(props.weather.dt);

    return (
      <div style={styles.container}>
      <div style={styles.dayContainer}>
        <img style={styles.weather} src={'/images/weather-icons/' + icon + '.svg'} alt='Weather' />
        <div style={styles.subheader} >{date}</div>
        <div>{props.city}</div>
        <div>{props.weather.weather[0].description}</div>
        <div>min temp: {parseInt(convertTemp(props.weather.temp.min))} C</div>
        <div>max temp: {parseInt(convertTemp(props.weather.temp.max))} C</div>
        <div>humidity: {props.weather.humidity} %</div>
      </div>
      </div>
    )
}

Details
.propTypes = {

}

module.exports = Details
