import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from '../src/components/Map/Map'
import Places from '../src/components/Places/Places'
import superagent from 'superagent'

class App extends Component {
  constructor(){
    super()
    this.state = {
      venues: []
    }
  }

componentDidMount(){
  console.log('componentDidMount')

  const url = 'https://api.foursquare.com/v2/venues/search?v=20140806&ll=40.7575285,-73.9884469&client_id=VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD&client_secret=UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ'

  superagent
  .get(url)
  .query(null)
  .set('Accept', 'text/json')
  .end((error, response) => {
    const venues = response.body.response.venues
    console.log(JSON.stringify(venues))
    this.setState({
      venues: venues
    })
  })

}

  render() {

    const location = {
      lat: 40.7575285,
      lng: -73.9884469
    }

    const markers = [
      {
        location: {
        lat: 51.528308,
        lng: -0.3817961
        }

      }
    ]

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
        <Map center={location} markers={this.state.venues} />
        </div>
        <Places venues={this.state.venues} />
      </div>
    );
  }
}

export default App;
