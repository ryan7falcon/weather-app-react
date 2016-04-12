import React from 'react';
import Details from '../components/Details'

export default React.createClass({
   contextTypes: {
      router: React.PropTypes.object.isRequired
  },
  render() {
    return (
        <Details weather={this.props.location.state.weather}/>
    );
  }
})
