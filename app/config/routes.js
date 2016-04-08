import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from '../components/Main'
import Home from '../components/Home'
import Hello from '../components/Hello'
import Forecast from '../components/Forecast'

var routes = (
		<Route path="/" component={Main}>
			<IndexRoute component={Home}/>
      <Route path="forecast/:city" component={Forecast}/>
		</Route>
	);

module.exports = routes;
