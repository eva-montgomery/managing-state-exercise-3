import React from 'react';
import NotesListItem from './NotesListItem';

function NotesList() {
    return (
        <ul>
            <NotesListItem />
            <NotesListItem />
        </ul>
    );
}

export default NotesList;