import React from 'react';

function NoteEditor({searchText}) {
    return (
        <textarea value={searchText}/>
    );
}

export default NoteEditor;