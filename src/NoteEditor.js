import React from 'react';


class NoteEditor extends React.Component {
    constructor(props) {
        super(props);

        console.log('I am the NoteEditor constructor')
        this.state = {
            changedNote: {}
        }
    }

    // Receiving the new props and the existing state
    static getDerivedStateFromProps(props, state) {
        console.log('We are in getDerivedStateFromProps');

        console.table(props.note);
        console.table(state.changedNote);

        if (props.note.id === state.changedNote.id) {
            return {
                ...state
            }
        } else {

        // we return the new version of state.
        return {
            ...state,
            changedNote: {
                ...props.note
            }
        }
        }
    }

    render () {
      
    
        return (
            <div>
                <input 
                    value={this.state.changedNote.title}
                    onChange={(event) => {
                        this._updateLocalNote({
                            ...this.state.changedNote,
                            title: event.target.value
                        });
                    }}
                />
                <br />
                <textarea 
                    value={this.state.changedNote.copy}
                    onChange={(event) => {
                        this._updateLocalNote({
                            ...this.state.changedNote,
                            copy: event.target.value
                        });
                    }}
                />
            </div>
        );


}

    _updateLocalNote = (changedNote) => {
        this.setState({
            changedNote
        });
    }

}

export default NoteEditor;