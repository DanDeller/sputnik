import React from 'react';
import uuid from 'uuid';

const notes = [{
    id: uuid.v4(),
    task: 'Learn React'
  },
  {
    id: uuid.v4(),
    task: 'Learn react some more!'
}];

export default () => ( <ul>{notes.map(note =>
    <li key={note.id}>{note.task}</li>
  )}</ul>
)