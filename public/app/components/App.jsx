import React from 'react';
import uuid from 'uuid';
import { Link } from 'react-router'
import Notes from './Notes';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Sputnik</h1>
				<ul role="nav">
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/list'>Kanban</Link></li>
				</ul>

				{this.props.children}

			</div>
		);
	}
}