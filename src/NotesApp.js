import React from 'react';
import NewNote from './NewNote';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';
import SearchBar from './SearchBar';


class NotesApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: 'help me I am a search bar',
            notes: [
                {
                    id: 'a1b2c3',
                    title: 'first note',
                    copy: 'lalala'
                },
                {
                    id: 'a1b2z666',
                    title: 'second note',
                    copy: 'Hello'
                },
                {
                    id: 'a1b2jdg77',
                    title: 'third note',
                    copy: 'Goodbye'
                },
                {
                    id: 'a1b2ZZZS',
                    title: 'fourth note',
                    copy: 'dum dum dum'
                },
            ]
        };
    }


    render() {
        return (
            <div>
                <h1>Best Notes App Ever</h1>
                <NewNote />
                <SearchBar 
                handleChange={this._setSearchText}
                text={this.state.searchText}/>
                <NotesList 
                notes={this.state.notes}
                />
                <NoteEditor />
            </div>
        );
    }

    _setSearchText = (searchText) => {
        this.setState({
            searchText
        }, () => {
            console.log('updated search text')
        });
    }


}

export default NotesApp;