import React from 'react';
import uuid from 'uuid';
import { Link } from 'react-router'
import Notes from './Notes';
import NavLink from './NavLink';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h2>Sputnik</h2>
				<ul role="nav">
					<li><NavLink to='/'>Home</NavLink></li>
					<li><NavLink to='/list'>Kanban</NavLink></li>
				</ul>

				{this.props.children}

			</div>
		);
	}
}