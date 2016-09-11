import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Provider from './components/Provider';
import App from './components/App';
import List from './components/List';
import Home from './components/Home';

if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

render((
  <Router history={hashHistory}>
  	<Route path="/" component={App}>
  		<Provider><Route path="/home" component={Home}/></Provider>
    	<Route path="/list" component={List}/>
    </Route>
  </Router>
), document.getElementById('app'))