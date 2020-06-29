import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom'

import Routes from './components/routes'

import './App.css';


//app main component
class App extends Component {

  render() {
    return (
      <div className='App'>

        <Router>
          <Routes />
        </Router>

      </div>
    );
  }
  }
  

export default App;
