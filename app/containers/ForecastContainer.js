import React from 'react';
import Forecast from '../components/Forecast';
var getForcast = require('../helpers/api').getForcast

export default React.createClass({
  propTypes: {

  },
  contextTypes: {
      router: React.PropTypes.object.isRequired
  },
  getInitialState(){
    return{
      isLoading: true,
      city: this.props.routeParams.city,
      weather: {}
    }
  },
  componentDidMount() {
    getForcast(this.state.city)
      .then(function (weather) {
        this.setState({
          weather: weather.data,
          isLoading: false
        })
      }.bind(this))
  },
  render() {
    return (
        <Forecast isLoading={this.state.isLoading} weather={this.state.weather}/>
    )}
})

