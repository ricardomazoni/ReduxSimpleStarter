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
const API_KEY = 'AIzaSyDgQ-pndLxBzhFsOrzxLtvLNvK7YMfW8Is'


class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = { videos: [] }

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos })
      // this.setState({ videos: videos })
    })
  }
  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={ this.state.videos} />
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
