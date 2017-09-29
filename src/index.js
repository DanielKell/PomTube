//Create a new component. This component should produce some html.
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
//Most parent component should be retrieving data
const API_KEY = 'AIzaSyAvQTQD8oMKLxRK5r0mxxzI_sifIiwFNDI';

//Functional component! 
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('pomeranians');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
        //Use lodash to throttle the speed of the function loading

        return (
            <div>
                {/*<SearchBar onSearchTermChange={term => this.videoSearch(term)} />*/}
                <h1 className="title">Welcome to PomTube!</h1>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} 
                />
            </div>
        );
    }
}

//Render an instance of App on the .container class in index.html
ReactDOM.render(<App />, document.querySelector('.container'));
