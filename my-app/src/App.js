import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from '../src/components/Map/Map'
import Places from '../src/components/Places/Places'

class App extends Component {
  render() {

    const location = {
      lat: 51.528308,
      lng: -0.3817961
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{width:600, height:600 }}>
        <Map center={location} />
        </div>
        <Places />
      </div>
    );
  }
}

export default App;
