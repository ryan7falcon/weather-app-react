import React from 'react';
import Details from '../components/Details'



export default React.createClass({
   contextTypes: {
      router: React.PropTypes.object.isRequired
  },
  render() {
    return (
        <Details city={this.props.location.state.city} weather={this.props.location.state.weather}/>
    );
  }
})
