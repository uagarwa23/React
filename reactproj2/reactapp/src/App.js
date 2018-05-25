import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FriendsComponent,ServiceDemo} from "./Example"


class App extends Component {
  render() {
    return (
      <div className="App">
       
          <h1 className="App-title">Welcome Uma</h1>
       
       
        <FriendsComponent/>
        <ServiceDemo/>
     
      </div>
    );
  }
}

export default App;
