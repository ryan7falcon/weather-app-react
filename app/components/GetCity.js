import React from 'react';
import styles from '../styles'
var PropTypes = React.PropTypes;

function GetCity (props) {
  return (
    <div className="getCity" style={getStyles(props)}>


          <InputField
            onUpdateCity={props.onUpdateCity}
            city={props.city}
          />
          <Button onSubmitCity={props.onSubmitCity}>
            Get Weather
          </Button>

    </div>
    )}

function getStyles (props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
}

function InputField (props) {
  return (
      <input
        type="text"
        onChange={props.onUpdateCity}
        className="form-control"
        placeholder="search city"
        value={props.city}
      />
    )
}

function Button (props) {
  return (
    <button type='button'
      style={{margin: 10}}
      className='btn btn-success'
      onClick={props.onSubmitCity}
    >
      {props.children}
    </button>
    )
}

GetCity.propTypes = {
  direction: PropTypes.string,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = GetCity
