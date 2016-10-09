import React from 'react';
import Note from './Note';
import Editable from './Editable';

export default ({
	people,
	onNoteClick = () => {},
	onEdit = () => {}, 
	onDelete = () => {} 
}) => (
  <div className='kanban-container'>
	<ul className = 'notes'>{people.map(({id, editing, task}) =>
        <li key = {id}>
          <Note onClick={onNoteClick.bind(null, id)}>
            <Editable
              className = 'editable'
              editing={editing}
            	 value={task}
            	 onEdit={onEdit.bind(null, id)} />
            <button className = 'delete' onClick={onDelete.bind(null, id)}>x</button>
          </Note>
        </li>
  )}</ul>
  </div>
)