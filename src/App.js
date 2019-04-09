import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CarModel from './components/CarModel';
import DisplayPanel from './components/DisplayPanel';
import ControlPanel from './components/ControlPanel';

class App extends Component {
  render() {
    return  (
      <React.Fragment>
        <Header />
        <h1>Range Per Charge</h1>
        <CarModel />
        <DisplayPanel />
        <ControlPanel />
        <hr/>
        <div className='disclaimer'>
          <p>The actual amount of range that you experience will vary based on your particular use conditions. See how particular use conditions may affect your range in our simulation model.</p>
          <p>Vehicle range may vary depending on the vehicle configuration, battery age and condition, driving style and operating, environmental and climate conditions.</p>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
