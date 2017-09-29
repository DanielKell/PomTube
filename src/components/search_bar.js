import React, {Component} from 'react';

//Functional component!
// const SearchBar = () => {
//     return <input />;
// };

//Only class based components have state!
class SearchBar extends Component {
    constructor (props) { //The function gets called whenever we create a new instance of this class
        super(props); //We can call super from the parent class

        this.state = {term: ""};
        //ONLY IN THIS CONSTRUCTOR FUNCTION DO WE SET STATE LIKE THIS
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                //value={this.state.term} //Sets the value in the box to the state's term
                onChange={(event) => this.onInputChange(event.target.value)} />
            </div>
        );    
    }

    onInputChange(term) {
        this.setState({term: term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;