import React from 'react'
import { Link } from 'react-router'
import MainContainer from '../containers/MainContainer'

export default React.createClass({

    render(){
        return(
            <MainContainer>
                <h1>React Project</h1>
                <p className="lead">Hello World!</p>
                <Link to="/">
                    <button type="button" className="btn btn-large btn-success">Back</button>
                </Link>
            </MainContainer>
        )
    }

});
