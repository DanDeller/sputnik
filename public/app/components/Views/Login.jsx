import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="col-sm-8 col-sm-offset-2">
				<div className="jumbotron text-center">
					<p className="lead">Login or Signup</p>
					<a href="/login" className="btn btn-default"><span className="fa fa-sign-in"></span> Login</a>
					<a href="/signup" className="btn btn-default"><span className="fa fa-user"></span> Signup</a>
				</div>
			</div>
		)
	}

}