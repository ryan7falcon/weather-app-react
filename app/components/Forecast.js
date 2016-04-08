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
      <div>{props.city}</div>
      <div>{props.weather[0].clouds}</div>
    </div>
    )

}

Forecast
.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  weather: React.PropTypes.object.isRequired,
  city: React.PropTypes.string.isRequired
}

module.exports = Forecast