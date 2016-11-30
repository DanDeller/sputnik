import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './components/App';
import List from './components/List';
import Home from './components/Home';
import Login from './components/Views/Login';
import createFragment from 'react-addons-create-fragment';
import immutabilityHelpers from 'react-addons-update';
import CSSTransitionGroup from 'react-addons-css-transition-group';

if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

render((
  <Router history={hashHistory}>
  	<Route path="/" component={App}>
  	   <IndexRoute component={Login}/>
    	<Route path="/list" component={List}/>
    </Route>
  </Router>
), document.getElementById('app'))