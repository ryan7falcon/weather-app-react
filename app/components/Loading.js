import React from 'react';

export default React.createClass({
	propTypes: {
		text: React.PropTypes.string,
		speed: React.PropTypes.number
	},

	getDefaultProps(){
		return {
			text: 'Loading',
			speed: 300
		}
	},

	getInitialState(){
		this.originalText = this.props.text
		return{
			text: this.originalText
		}
	},

	componentDidMount(){
		var stopper = this.originalText + '...'
		this.interval = setInterval(function (){
			if (this.state.text === stopper){
				this.setState({
					text: this.originalText
				})
			} else {
				this.setState({
					text: this.state.text + '.'
				})
			}
		}.bind(this), this.props.speed)
	},

	componentWillUnmount(){
		 window.clearInterval(this.interval)
	},

    render() {
        return (

	             <p>
		             {this.state.text}
	             </p>

        );
    }
})
