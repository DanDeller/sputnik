import React from 'react'
import uuid from 'uuid';
import People from './People';
import $ from 'jquery'; 
// import connect from '../libs/connect';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			people: [
			{
				id: uuid.v4(),
				task: 'Learn React'
			},
			{
				id: uuid.v4(),
				task: 'Do some other stuff'
			}
			]
		};
	}
	componentDidMount  = () => {
   	$.get('/people', function(data) {
   		data.map(person => {
   			this.setState({
					people: this.state.people.concat([{
						id: person.id,
						task: person.name
					}])
				})
   		})
    	}.bind(this));
  	}
	render() {
		const {people} = this.state;
		return (
			<div>
				<button onClick = {this.addNote} className = 'add-note'> + </button>
				<People
					people={people}
					onNoteClick={this.activateNoteEdit}
					onEdit={this.editNote}
					onDelete={this.deleteNote}
				/>			
			</div>
		)
	}
	addNote = () => {
		this.setState({
			people: this.state.people.concat([{
				id: uuid.v4(),
				task: 'new task'
			}])
		})
	}
	activateNoteEdit = (id) => {
		this.setState({
			people: this.state.people.map(note => {
				if (note.id === id) {
					note.editing = true;
				}
				return note;
			})
		}); 
	}
	editNote = (id, task) => {
		this.setState({
			people: this.state.people.map(person => {
				if (person.id === id) {
					person.editing = false;
					person.task = task;
				}
				return person;
			})
		}); 
	}
	deleteNote = (id, e) => {
		e.stopPropagation();
		this.setState({
			people: this.state.people.filter(person => person.id !== id) 
		});
	}
}

// export default connect(() => ({
//   test: 'test'
// }))(App)