import React from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class App extends React.Component {

  state = {images: []};
  onSearchSubmit = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term},
      headers: {
        Authorization: 'Client-ID 31c7ccde3d32a5baacd81f68e988dcfae5621c32788587135b4b0b40c69b68f1'
      }
    });
    this.setState({images : response.data.results});
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  } 
}

export default App;
