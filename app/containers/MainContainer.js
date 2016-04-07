import React from 'react';
import NavbarContainer from './NavbarContainer'

var styles = {
  container: {
    width: '100%',
    height:'92%'
  }
}

function MainContainer (props){
    return (
        <div className="main-container" style={styles.container}>
          <NavbarContainer/>

			    {props.children}

        </div>
    )
}

module.exports = MainContainer
