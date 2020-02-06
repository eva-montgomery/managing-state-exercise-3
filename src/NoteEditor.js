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

        // we return the new version of state.
        return {
            ...state,
            changedNote: {
                ...props.note
            }
        }
    }

    render () {
        const {
            note,
            handleChange,
        } = this.props;
    
        return (
            <div>
                <input 
                    value={this.state.changedNote.title}
                    onChange={(event) => {
                        handleChange({
                            ...note,
                            title: event.target.value
                        });
                    }}
                />
                <br />
                <textarea 
                    value={this.state.changedNote.copy}
                    onChange={(event) => {
                        handleChange({
                            ...note,
                            copy: event.target.value
                        });
                    }}
                />
            </div>
        );


}

}

export default NoteEditor;