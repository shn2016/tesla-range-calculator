import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CarModel from './components/CarModel';
import DisplayPanel from './components/DisplayPanel';
import ControlPanel from './components/ControlPanel';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOptions: {
        speed: 55,
        temperature: "20",
        wheel: 19,
        climateButton: 'on'
      },
      models: [  
        '60',
        '60D',
        '75',
        '75D',
        '90D',
        'P100D',
      ]
    }

    this.updateOptions = this.updateOptions.bind(this);
  }

  updateOptions(newOptions) {
    this.setState({
      selectedOptions: newOptions,
    })
  }

  render() {
    const { selectedOptions, models } = this.state;
    return  (
      <React.Fragment>
        <Header />
        <h1>Range Per Charge</h1>
        <CarModel />
        <DisplayPanel models={models} selectedOptions={selectedOptions} />
        <ControlPanel selectedOptions={selectedOptions} updateOptions={this.updateOptions} />
        <div className="disclaimer">
          <p>The actual amount of range that you experience will vary based on your particular use conditions. See how particular use conditions may affect your range in our simulation model.</p>
          <p>Vehicle range may vary depending on the vehicle configuration, battery age and condition, driving style and operating, environmental and climate conditions.</p>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
