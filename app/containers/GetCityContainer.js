var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');


var GetCityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
   propTypes: {
    direction: PropTypes.string
  },

  getDefaultProps: function () {
    return {
      direction: 'column'
    }
  },

  getInitialState: function () {
    return {
      city: ''
    }
  },
  handleSubmitCity: function () {
    const path = `/forecast/${this.state.city}`
    this.context.router.push(path)
  },
  handleUpdateCity: function (e) {
    this.setState({
      city: e.target.value
    })
  },
  render: function () {
    return (
      <GetCity
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    )
  }
});

module.exports = GetCityContainer;