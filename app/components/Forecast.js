import React from 'react';
import Loading from './Loading'
import utils from '../helpers/utils'
var getDate = utils.getDate;
var convertTemp = utils.convertTemp;

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  weather: {
    height: 130
  },
  loading: {
    marginTop: 200
  }
}

function Forecast(props) {

  if (props.isLoading){
    return (
     <div style={styles.loading}>
        <h1 style={styles.header}>
          <Loading speed={100}/>
        </h1>
    </div>
    )
  }

  return (
    <ForecastUI
              forecast={props.forecast}
              handleClick={props.handleClick} />
    )

}

function ForecastUI(props){
  return (
    <div>

      <h1 style={styles.header}>{props.forecast.city.name}</h1>
      <h1 style={styles.subheader}> Select a day </h1>
      <div style={styles.container}>
        {
          props.forecast.list.map(function(listItem) {
            return <DayItem key={listItem.dt} day={listItem} handleClick={props.handleClick.bind(null, listItem)} />
          })
        }
      </div>

    </div>
    )
}

function DayItem(props){
  var icon = props.day.weather[0].icon;
  var date = getDate(props.day.dt);
  return (
    <div style={styles.dayContainer} onClick={props.handleClick}>
      <img style={styles.weather} src={'/images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2 style={styles.subheader}>{date}</h2>
    </div>
  )
}

Forecast
.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  forecast: React.PropTypes.object.isRequired,
  handleClick: React.PropTypes.func.isRequired,
}

module.exports = Forecast