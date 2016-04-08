import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from '../components/Main'
import Home from '../components/Home'
import Hello from '../components/Hello'
import ForecastContainer from '../containers/ForecastContainer'

var routes = (
		<Route path="/" component={Main}>
			<IndexRoute component={Home}/>
      <Route path="forecast/:city" component={ForecastContainer}/>
		</Route>
	);

module.exports = routes;
