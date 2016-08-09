import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
var ReactRethinkdb = require('react-rethinkdb');
var r = ReactRethinkdb.r;

if (process.env.NODE_ENV !==  'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <App   />,
  document.getElementById('app')
);
 