import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import SearchBar from './components/search_bar'

// import App from './components/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);
// ------
const API_KEY = 'AIzaSyAsLBCuw3JnY7kHyeFjQN7N9Dt9vXEIjUU'

const App= () => {
  return (
    <div>
      <SearchBar />
    </div>    

  )
}
// ---------
ReactDOM.render(<App />, document.querySelector('.container'))
// ---------

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
