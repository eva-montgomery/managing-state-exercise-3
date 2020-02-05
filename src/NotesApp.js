import React from 'react';
import NewNote from './NewNote';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';
import SearchBar from './SearchBar';


class NotesApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: 'help me I am a search bar'
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
                <NotesList />
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