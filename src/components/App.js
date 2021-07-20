import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import axios from 'axios';

import './style.css';

class App extends React.Component {
    state={imageList: []}

    getPropFromChild = (searchText) => {
        axios.get("https://api.unsplash.com/search/photos", {
            params: {query: searchText},
            headers: {
                Authorization: 'Client-ID D5ujXpRgVSPFupa70vDGT8IGerjq1YgSwa_9mV6z52k'
            }
        }).then(response => this.setState({imageList: response.data.results}));
    }

    render() {
        return (
            <div className="main-app">
                <SearchBar
                    getPropFromChild={this.getPropFromChild}
                />
                <ImageList imageList={this.state.imageList}/>
            </div>
        )
    }
}

export default App;