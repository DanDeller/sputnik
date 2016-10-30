import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import People from './People';
import $ from 'jquery';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			people: []
		};
	}
	render() {
		const {people} = this.state;
		return (
			<div>
				<form>
					<input type='text' id="task" ref="task" />
					<button onClick = {this.addNote} className = 'add-note'> + </button>
				</form>
				<People
					people={people}
					onNoteClick={this.activateNoteEdit}
					onEdit={this.editNote}
					onDelete={this.deleteNote}
				/>			
			</div>
		)
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
	addNote = () => {
	  const task = React.findDOMNode(this.refs.task).value.trim();
		$.ajax({
			type: 'POST',
			url: '/people',
			data: {
				id: uuid.v4(),
				name: task
			}
		});
		this.setState({
			people: this.state.people.concat([{
				task: task
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
		console.log(id);
		$.ajax({
		    url: '/people',
		    type: 'DELETE',
		    data: {
		    	id: id
		    },
		    success: function(result) {
		        console.log(result);
		    }
		});
		this.setState({
			people: this.state.people.filter(person => person.id !== id) 
		});
	}
}

// export default connect(() => ({
//   test: 'test'
// }))(App)