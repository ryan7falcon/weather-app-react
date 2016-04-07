import React from 'react';
import { Link } from 'react-router'
import GetCityContainer from './GetCityContainer'

var styles = {
  header :{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: 5,
  }
}


function NavbarContainer (props){
    return (
        <div className="navbar-container" style={styles.header}>
          <h2  style={{margin: 0}}>Weather App</h2>
          <GetCityContainer direction="row"/>
        </div>
    )
}

module.exports = NavbarContainer