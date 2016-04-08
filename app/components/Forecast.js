import React from 'react';
import Loading from './Loading'

function Forecast(props) {

  if (props.isLoading){
    return (
      <Loading speed={100}/>
    )
  }

  console.log(props.weather)

  return (
    <div>
      <div>{props.weather.city.name}</div>
      <div>{props.weather.list[0].clouds}</div>
    </div>
    )

}

Forecast
.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  weather: React.PropTypes.object.isRequired,
}

module.exports = Forecast