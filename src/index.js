import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

import YTSearch from 'youtube-api-search'
import { runInThisContext } from 'vm';

// import App from './components/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);
// ------
const API_KEY = 'AIzaSyBgnd-QZCIIx347YwkUBjPFLSlpnmQJ1C8'


class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = { 
      videos: [], 
      selectedVideo: null 
    }

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      })
      // this.setState({ videos: videos })
    })
  }
  render(){
    return (
      <div>
        {/* <SearchBar /> */}
        <VideoDetail video={this.state.selectedVideo}/> 
        <VideoList 
          onVideoSelect={selectedVideo=> this.setState({selectedVideo}) }
          videos={ this.state.videos} />
      </div>    
    )
  }
}
// ---------
ReactDOM.render(<App />, document.querySelector('.container'))
// ---------

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
