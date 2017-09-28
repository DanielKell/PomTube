//Create a new component. This component should produce some html.
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';

const API_KEY = 'AIzaSyAvQTQD8oMKLxRK5r0mxxzI_sifIiwFNDI';

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

//Render an instance of App on the .container class in index.html
ReactDOM.render(<App />, document.querySelector('.container'));