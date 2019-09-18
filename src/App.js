import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducerTextChange from './reducers/reducerTextChange';
import reducerButtonClick from './reducers/reducerButtonClick';
// import ReactRedux from './learnings/ReactRedux'
import './App.css';
import Debouncing from './proofOfConcept/debouncing';
import Throttling from './proofOfConcept/throttling';

const store = createStore(combineReducers({
  reducerTextChange,
  reducerButtonClick
}))


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ReactRedux /> */}
        <Debouncing />
        <Throttling />
      </div>
    </Provider>
  );
}

export default App;
