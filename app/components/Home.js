import React from 'react'
import { Link } from 'react-router'
import MainContainer from '../containers/MainContainer'

export default React.createClass({

	render(){
		return(
			<MainContainer>
                <h1>React Project</h1>
                <p className="lead">Some fancy motto</p>
                <Link to="/hello">
                    <button type="button" className="btn btn-large btn-success">Get Started</button>
                </Link>
            </MainContainer>
		)
	}

});
