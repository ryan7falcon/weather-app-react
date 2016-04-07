import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
require('../main.css');
import MainContainer from '../containers/MainContainer'

export default React.createClass({
	render() {
		return (
			<div className="transition-container">
				<ReactCSSTransitionGroup
					transitionName="appear"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
					>
					<MainContainer>
						{ React.cloneElement(this.props.children, {key: this.props.location.pathname}) }
					</MainContainer>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});
