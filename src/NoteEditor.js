import React from 'react';

function NoteEditor({
    note
}) {
    
    return (
        <div>
            <input value={note.title}/>
            <br />
            <textarea value={note.copy}/>
        </div>
    );
}

export default NoteEditor;