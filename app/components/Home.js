import React from 'react'
import { Link } from 'react-router'
import MainContainer from '../containers/MainContainer'
import GetCityContainer from '../containers/GetCityContainer'


var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
  },
}


function Home (props) {
	return(
		<div className="home-container" style={styles.container}>
        <h1 style={styles.header}>Enter a City and State</h1>
        <GetCityContainer/>
    </div>
	)
}


module.exports = Home;


