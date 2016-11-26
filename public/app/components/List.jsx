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
					<input type='text' id="name" ref="name" />
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
   			console.log(person)
   			this.setState({
					people: this.state.people.concat([{
						id: person.id,
						name: person.name
					}])
				})
   		})
    	}.bind(this));
  	}
	addNote = () => {
	  const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
		$.ajax({
			url: '/people',
			type: 'POST',
			data: {
				id: uuid.v4(),
				name: name
			}
		});
		this.setState({
			people: this.state.people.concat([{
				name: name
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
	editNote = (id, name) => {
		this.setState({
			people: this.state.people.map(person => {
				if (person.id === id) {
					person.editing = false;
					person.name = name;
					
					$.ajax({
						url: '/people',
						type: 'PATCH',
						data: {
							id: id,
							name: name
						},
						success: function(result) {
					      console.log(result);
					   }
					});

				}
				return person;
			})
		}); 
	}
	deleteNote = (id, e) => {
		e.stopPropagation();
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
