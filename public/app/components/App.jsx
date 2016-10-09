import React from 'react';
import uuid from 'uuid';
import { Link } from 'react-router'
import People from './People';
import NavLink from './NavLink';

export default class App extends React.Component {
	render() {
		return (
			<div className='kanban-wrap'>
				<h2 className='title'>Sputnik</h2>
				<div className='nav'>
					<ul role="nav">
						<li><NavLink to='/'>Home</NavLink></li>
						<li><NavLink to='/list'>Kanban</NavLink></li>
					</ul>
				</div>

				{this.props.children}

			</div>
		);
	}
}