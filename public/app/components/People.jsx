import React from 'react';
import Person from './Person';
import Editable from './Editable';

export default ({
	people,
	onNoteClick = () => {},
	onEdit = () => {}, 
	onDelete = () => {} 
}) => (
  <div className='kanban-container'>
	<ul className='notes'>{people.map(({id, editing, name, index}) =>
        <li key={name}>
          <Person onClick={onNoteClick.bind(null, id)}>
            <Editable
            	       className = 'editable'
             	editing={editing}
           	 	value={name}
           		onEdit={onEdit.bind(null, id)} />
            <button className = 'delete' onClick={onDelete.bind(null, id)}>x</button>
          </Person>
        </li>
  )}</ul>
  </div>
)