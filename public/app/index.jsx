import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import App from './components/App';
import { Router, Route, hashHistory } from 'react-router'
import List from './components/List';

if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/list" component={List}/>
  </Router>
), document.getElementById('app'))