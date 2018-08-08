
import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store/store';

// Components
import Counter from './components/counter/counter';

import "./app.css";

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <div className="app">
          <h1>Hello, World!</h1>

          <Counter />
        </div>
      </Provider>
    );
  }
}

export default hot(module)(App);