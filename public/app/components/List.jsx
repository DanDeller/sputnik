import React from 'react'
import uuid from 'uuid';
import Notes from './Notes';
import $ from 'jquery'; 
// import connect from '../libs/connect';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [
			{
				id: uuid.v4(),
				task: 'Learn React'
			},
			{
				id: uuid.v4(),
				task: 'Learn react some more!'
			}
			]
		};
	}
	render() {
		const {notes} = this.state;
		return (
			<div>
				{this.props.test}
				<button onClick = {this.addNote} className = 'add-note'> + </button>
				<Notes
					notes={notes}
					onNoteClick={this.activateNoteEdit}
					onEdit={this.editNote}
					onDelete={this.deleteNote}
				/>			
			</div>
		)
	}
	componentDidMount =  () => {
   	$.get('/people', function(data) {
   		data.map(value => {
   			this.setState({
					notes: this.state.notes.concat([{
						id: value.id,
						task: value.name
					}])
				})
   		})
    	}.bind(this));
  	}
	addNote = () => {
		this.setState({
			notes: this.state.notes.concat([{
				id: uuid.v4(),
				task: 'new task'
			}])
		})
	}
	activateNoteEdit = (id) => {
		this.setState({
			notes: this.state.notes.map(note => {
				if (note.id === id) {
					note.editing = true;
				}
				return note;
			})
		}); 
	}
	editNote = (id, task) => {
		this.setState({
			notes: this.state.notes.map(note => {
				if (note.id === id) {
					note.editing = false;
					note.task = task;
				}
				return note;
			})
		}); 
	}
	deleteNote = (id, e) => {
		e.stopPropagation();
		this.setState({
			notes: this.state.notes.filter(note => note.id !== id) 
		});
	}
}

// export default connect(() => ({
//   test: 'test'
// }))(App)