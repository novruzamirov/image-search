import React from 'react';

class SearchBar extends React.Component {
    state={searchText: ""}

    render() {
        return (
            <div className="searchbar-wrapper">
                <p>Search for images</p>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.props.getPropFromChild(this.state.searchText)
                }}>
                    <input type="text" value={this.state.searchText} onChange={(e) => this.setState({searchText: e.target.value})} />
                </form>
            </div>
        )
    }
};

export default SearchBar;